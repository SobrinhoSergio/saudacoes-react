import React from 'react';
import { Title, Image } from '../Greeting.styles';

const Evening = () => {
  return( 
    <>
      <Image src={process.env.PUBLIC_URL + '/assets/fotonoite.jpg'} />
      <Title>Boa noite</Title>
    </>
  );
};

export default Evening;
