import React, { ReactNode } from 'react';

import { Text } from 'react-native';

import { Container, HeadingText } from './styles';


type Props = {
  children : ReactNode
}


const Heading: React.FC<Props> = ({ children } : Props)  => {
  return (
    <Container>
      <HeadingText>{children}</HeadingText>
    </Container>
  );
};

export default Heading;
