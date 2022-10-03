import { Banner, Separator } from '@/components';
import React, { FC } from 'react';

interface iComingSoonProps {}
const ComingSoon: FC<iComingSoonProps> = ({}) => {
  return (
    <>
      <Banner icon='bolt' title='modal_coming_soon.title' description='modal_coming_soon.subtitle' />
      <Separator scale={6} />
    </>
  );
};

export default ComingSoon;
