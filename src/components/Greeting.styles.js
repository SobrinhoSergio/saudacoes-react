import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 4.5rem;
  font-weight: 100;
  margin: 20px 0;
  font-style: italic;
  color: ${props => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
      return '#F9A825'; // morning color
    } else if (hour >= 12 && hour < 18) {
      return '#09939A'; // afternoon color
    } else {
      return '#795548'; // evening color
    }
  }};
`;



export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  padding: 70px 50px;
  font-family: 'Open Sans', sans-serif;
`;

export const Time = styled.div`
  font-size: 48px;
  color: #444;
  margin-bottom: 20px;
`;
