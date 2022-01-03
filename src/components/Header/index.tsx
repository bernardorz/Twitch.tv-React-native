import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React, {  FC, useState } from 'react';
import colors from '../../styles/colors';

import { Container, Avatar, OnlineStatus, Button, RigthSide} from './styles';

type Props = {
  title : string
}

const Header = () => {
  return (
    <Container>
     <Avatar>
       <OnlineStatus/>
       </Avatar>
       <RigthSide>
         <Button>
           <MaterialIcons 
           name='notifications-none'
           size={26}
           color={colors.black}
           />
         </Button>
         <Button>
           <MaterialCommunityIcons 
           name='message-outline'
           size={26}
           color={colors.black}
           />
         </Button>
         <Button>
           <MaterialIcons 
           name='search'
           size={26}
           color={colors.black}
           />
         </Button>
       </RigthSide>
    </Container>
  );
};

export default Header;
