import { Banner, Separator } from '@/components';
import React, { FC } from 'react';

interface iCreationSuccessProps {}
const CreationSuccess: FC<iCreationSuccessProps> = ({}) => {
  return (
    <>
      <Banner icon='circle-check' title='modal_creation_success.title' description='modal_creation_success.subtitle' />
      <Separator scale={6} />
    </>
  );
};

export default CreationSuccess;
