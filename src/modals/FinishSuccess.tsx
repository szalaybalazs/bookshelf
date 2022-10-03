import { Banner, Separator } from '@/components';
import React, { FC } from 'react';

interface iFinishSuccessProps {}
const FinishSuccess: FC<iFinishSuccessProps> = ({}) => {
  return (
    <>
      <Banner icon='circle-check' title='Book finished' description='You can open it again from the profile menu.' />
      <Separator scale={6} />
    </>
  );
};

export default FinishSuccess;
