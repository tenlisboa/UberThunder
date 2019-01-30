import React, { Component } from 'react';

import { View } from 'react-native';
import uberx from '../../assets/uberx.png';

import { Container, TypeTitle, TypeDescription, TypeImage, RequestButton, RequestButtonText } from './styles';

export default class Details extends Component {
  render() {
    return (
      <Container>
        <TypeTitle>Popular</TypeTitle>
        <TypeDescription>Peek travel to every day</TypeDescription>

        <TypeImage source={uberx} />
        <TypeTitle>UberX</TypeTitle>
        <TypeDescription>R$6,00</TypeDescription>

        <RequestButton onPress={() => {}}>
          <RequestButtonText>
            Request UberX
          </RequestButtonText>
        </RequestButton>
      </Container>  
    );
  }
}
