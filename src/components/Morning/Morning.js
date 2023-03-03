import React from 'react';
import { Title, Image } from '../Greeting.styles';

const Morning = () => {
  return(
    <>
      <Image src={process.env.PUBLIC_URL + '/assets/fotomanha.jpg'} />  
      <Title>Bom dia</Title>
    </>
  )
};

export default Morning;
