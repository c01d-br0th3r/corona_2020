import React from "react";
import styled from "styled-components";

const Container = styled.div`
  font-size: 50px;
  font-weight: 700;
  padding-bottom: 20px;
  margin: 20px;
  color: #f2f2f2;
  border-bottom: 5px solid #fd9644;
`;

const Title = () => {
  return <Container>About : 코로나</Container>;
};

export default Title;
