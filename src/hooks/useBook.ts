import { getBookFromGoodreadByUrl } from '@/core/goodreads';
import { iBook } from '@/types';
import { useCallback, useEffect, useReducer } from 'react';

interface iState {
  book: iBook;
  loading: boolean;
  error?: string;
}

type eAction = { type: 'request' } | { type: 'success'; result: Partial<iBook> } | { type: 'failure'; error: string };

function reducer(state: iState, action: eAction): iState {
  if (action.type === 'request') return { loading: true, book: state.book, error: undefined };
  if (action.type === 'failure') return { book: state.book, loading: false, error: action.error };
  if (action.type === 'success') return { book: { ...state.book, ...action.result }, loading: false, error: undefined };
  return state;
}

export const useBook = (initial: iBook) => {
  const [{ book, loading, error }, dispatch] = useReducer(reducer, { book: initial, loading: false, error: undefined } as iState);

  const _handleLoad = useCallback(async (url: string) => {
    dispatch({ type: 'request' });
    try {
      const result = await getBookFromGoodreadByUrl(url);
      dispatch({ type: 'success', result });
    } catch (error: any) {
      dispatch({ type: 'failure', error: error.message });
    }
  }, []);

  useEffect(() => {
    if (initial.url) _handleLoad(initial.url);
  }, [initial.url]);

  return { book, loading, error };
};
