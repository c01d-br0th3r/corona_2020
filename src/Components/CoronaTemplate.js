import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.div`
  margin-bottom: 50px;
`;
const Info = styled.div`
  margin-bottom: 50px;
`;
const Location = styled.div`
  margin-bottom: 50px;
`;
const News = styled.div``;

const CoronaTemplate = ({ title, info, location, news }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Info>{info}</Info>
      <Location>{location}</Location>
      <News>{news}</News>
    </Container>
  );
};

export default CoronaTemplate;
