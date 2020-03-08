import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SemiBox = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Box = styled.div`
  border: 2px solid #f2f2f2;
  background-color: #d1d8e0;
  border-radius: 30px;
  width: 150px;
  height: 150px;
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 5px;
  box-shadow: 5px 5px 15px 0px rgba(255, 255, 255, 0.56);
`;

const Box_title = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #4b6584;
`;
const Box_number = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #121212;
`;

const Box_increse_number = styled.div`
  font-size: 15px;
  font-weight: 500;
  color: #3867d6;
`;

const Location = ({ location }) => (
  <Container>
    <Title>Location</Title>
    <SemiBox>
      {location.map(spot => (
        <Box key={spot.id}>
          <Box_title>{spot.name}</Box_title>
          <Box_number>{spot.total}</Box_number>
          <Box_increse_number>{`+${spot.increase}`}</Box_increse_number>
        </Box>
      ))}
    </SemiBox>
  </Container>
);

export default Location;
