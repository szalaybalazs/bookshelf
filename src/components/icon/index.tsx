import React, { FC } from 'react';

import ArrowBottom from './icons/ArrowBottom';
import ArrowUp from './icons/ArrowUp';
import Bolt from './icons/Bolt';
import Camera from './icons/Camera';
import ArrowLeft from './icons/ArrowLeft';
import ChevronLeft from './icons/ChevronLeft';
import Auth from './icons/Auth';
import ChevronRight from './icons/ChevronRight';
import ChevronUp from './icons/ChevronUp';
import Clipboard from './icons/Clipboard';
import Download from './icons/Download';
import Check from './icons/Check';
import EditNew from './icons/EditNew';
import Info from './icons/Info';
import Edit from './icons/Edit';
import Light from './icons/Light';
import Plus from './icons/Plus';
import LockOpen from './icons/LockOpen';
import Questionmark from './icons/Questionmark';
import Placeholder from './icons/Placeholder';
import Grid from './icons/Grid';
import Faceid from './icons/Faceid';
import Lock from './icons/Lock';
import Scan from './icons/Scan';
import Repeat from './icons/Repeat';
import Receipt from './icons/Receipt';
import Security from './icons/Security';
import Bell from './icons/Bell';
import Star from './icons/Star';
import Share from './icons/Share';
import Trash from './icons/Trash';
import User from './icons/User';
import Wallet from './icons/Wallet';
import Send from './icons/Send';
import ChevronDown from './icons/ChevronDown';
import ArrowRight from './icons/ArrowRight';
import CheckCircle from './icons/CheckCircle';
import ErrorCircle from './icons/ErrorCircle';

const icons = {
  'arrow-bottom': ArrowBottom,
  'arrow-up': ArrowUp,
  bolt: Bolt,
  camera: Camera,
  'arrow-left': ArrowLeft,
  'chevron-left': ChevronLeft,
  auth: Auth,
  'chevron-right': ChevronRight,
  'chevron-up': ChevronUp,
  clipboard: Clipboard,
  download: Download,
  check: Check,
  'edit-new': EditNew,
  info: Info,
  edit: Edit,
  light: Light,
  plus: Plus,
  'lock-open': LockOpen,
  questionmark: Questionmark,
  placeholder: Placeholder,
  grid: Grid,
  faceid: Faceid,
  lock: Lock,
  scan: Scan,
  repeat: Repeat,
  receipt: Receipt,
  security: Security,
  bell: Bell,
  star: Star,
  share: Share,
  trash: Trash,
  user: User,
  wallet: Wallet,
  send: Send,
  'chevron-down': ChevronDown,
  'arrow-right': ArrowRight,
  'circle-check': CheckCircle,
  'circle-error': ErrorCircle,
};

export type eIcon = keyof typeof icons;

interface iIconProps {
  icon: eIcon;
  color?: string;
  width?: number;
  height?: number;
}

const Icon: FC<iIconProps> = ({ icon, ...rest }) => {
  const Comp = icons[icon];
  return <Comp {...rest} />;
};

export default Icon;
