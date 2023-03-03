import React, { useState, useEffect } from 'react';
import Morning from './Morning/Morning';
import Afternoon from './Afternoon/Afternoon';
import Evening from './Evening/Evening';
import { Wrapper, Time } from './Greeting.styles';

function Greeting() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function getGreeting(hour) {
    if (hour >= 6 && hour < 12) {
      return <Morning />;
    } else if (hour >= 12 && hour < 18) {
      return <Afternoon />;
    } else {
      return <Evening />;
    }
  }

  const formattedTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <Wrapper>
      {getGreeting(time.getHours())}
      <Time>{formattedTime}</Time>
    </Wrapper>
  );
}

export default Greeting;
