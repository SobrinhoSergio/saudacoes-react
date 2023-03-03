import React from 'react';
import { Title, Image } from '../Greeting.styles';

const Afternoon = () => {
  return(
    <>
      <Image src={process.env.PUBLIC_URL + '/assets/fototarde.jpg'} />
      <Title>Boa tarde</Title>
    </>
  );
};

export default Afternoon;
