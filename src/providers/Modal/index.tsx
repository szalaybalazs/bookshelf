import React, { FC, useCallback, useRef, useState, createContext } from 'react';
import { useWindowDimensions, View } from 'react-native';
import { useSharedValue, withTiming, Easing, withSpring } from 'react-native-reanimated';
import Backdrop from './Backdrop';
import ModalBody from './Body';
import Handler from './Handler';

const TRANSITION_DURATION = 240;

interface iModalConfig {
  timeout?: number;
  poppable?: boolean;
  callback?: () => void;
}

interface iModalContext {
  presentModal: (content: React.ReactNode, config?: iModalConfig) => void;
  dismissModal: () => void;
}

export const ModalContext = createContext<iModalContext>({
  presentModal: () => {},
  dismissModal: () => {},
});

const ModalProvider: FC = ({ children }: any) => {
  const { height } = useWindowDimensions();
  const config = useRef<iModalConfig>({ poppable: false, timeout: 0 });
  const timeoutRef = useRef<any | null>(null);
  const modalRef = useRef<View>(null);
  const timeout = useSharedValue(1);
  const offset = useSharedValue(height);
  const transition = useSharedValue(0);
  const [content, setContent] = useState<React.ReactNode | null>(null);

  const _handleGetContentHeight = useCallback(async () => {
    const height = await new Promise<number>((res) => modalRef.current?.measure((x, y, w, h) => res(h)));

    return height + 48;
  }, []);

  /**
   * Opens modal with given content and config
   */
  const _handlePresentModal = (body: React.ReactNode, userConfig?: iModalConfig) => {
    config.current = { poppable: true, timeout: 0, ...userConfig };
    setContent(body);

    requestAnimationFrame(() => {
      _handleEnter();
      _handleAppear();
    });
  };

  /**
   * Moves the modal on the screen
   */
  const _handlePan = useCallback((translation: number, velocity: number) => {
    offset.value = translation;
  }, []);

  /**
   * Checks the last known velocity and closes the modal if needed
   */
  const _handlePanEnd = useCallback((translation: number, velocity: number) => {
    if (velocity > 100 && config.current.poppable) _handleClose(velocity);
    else offset.value = withSpring(0, { velocity, damping: 15 });
  }, []);

  /**
   * Processing modal config and showing modal
   */
  const _handleEnter = useCallback(() => {
    if (config.current.timeout) {
      timeout.value = 0;
      timeout.value = withTiming(1, { duration: config.current.timeout, easing: Easing.linear });
      timeoutRef.current = setTimeout(() => {
        _handleClose();
        config.current.callback?.();
      }, config.current.timeout);
    } else {
      timeout.value = config.current.poppable ? 1 : 0;
    }
  }, [config]);

  // Closes the modal
  const _handlePop = useCallback(() => {
    clearTimeout(timeoutRef.current);
    if (config.current.poppable) _handleClose();
  }, []);

  /**
   * Opens the modal
   * Moves the modal up to the screen, fades in the backdrop
   */
  const _handleAppear = useCallback(async () => {
    offset.value = await _handleGetContentHeight();

    offset.value = withTiming(0, { duration: TRANSITION_DURATION, easing: Easing.out(Easing.sin) });

    transition.value = withTiming(1, {
      duration: TRANSITION_DURATION,
      easing: Easing.out(Easing.sin),
    });
  }, []);

  /**
   * Closes the modal
   * Moves the modal body offscreen, fades the backrop out
   * Once everything is hiden, removes the modal content
   */
  const _handleClose = useCallback(async (velocity?: number) => {
    clearTimeout(timeoutRef.current);

    const modalHeight = await _handleGetContentHeight();

    // Move modal offscreen
    if (!velocity) {
      offset.value = withTiming(modalHeight, {
        duration: TRANSITION_DURATION,
        easing: Easing.out(Easing.sin),
      });
    } else {
      offset.value = withSpring(modalHeight, { velocity, mass: 1000, overshootClamping: true });
    }

    // Hide backdrop
    transition.value = withTiming(0, {
      duration: TRANSITION_DURATION,
      easing: Easing.out(Easing.sin),
    });

    // Remove content once it has disappeared
    setTimeout(() => setContent(null), TRANSITION_DURATION + 1);
  }, []);

  return (
    <ModalContext.Provider value={{ dismissModal: _handleClose, presentModal: _handlePresentModal }}>
      {children}
      {content && (
        <>
          <Backdrop onPop={_handlePop} transition={transition} />
          <ModalBody modalRef={modalRef} offset={offset}>
            <Handler onPan={_handlePan} onPanEnded={_handlePanEnd} timeout={timeout} />
            {content}
          </ModalBody>
        </>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
