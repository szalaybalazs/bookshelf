import { Separator } from '@/components';
import { colours, fonts } from '@/config';
import { FC } from 'react';
import { styled } from '../core';
import { iBook } from '../types';
interface iBookProps {
  route: { params: { book: iBook } };
}

const Title = styled.Text`
  font-size: 32px;
  font-family: ${fonts.primary.bold};
  text-align: center;
  color: ${colours.dark.color};
`;

const Author = styled.Text`
  font-size: 14px;
  font-family: ${fonts.primary.bold};
  opacity: 0.6;
  color: ${colours.dark.color};
  text-align: center;
`;

interface iBookModalTitleProps extends iBook {}

const BookModalTitle: FC<iBookModalTitleProps> = ({ title, authors }) => {
  return (
    <>
      <Title adjustsFontSizeToFit numberOfLines={2}>
        {title}
      </Title>
      <Separator scale={2} />
      <Author>{authors.join(', ')}</Author>
    </>
  );
};

export default BookModalTitle;
