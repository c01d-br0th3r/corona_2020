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
  box-shadow: 7px 7px 19px 0px rgba(255, 255, 255, 0.56);
`;

const Box_title = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: #eb3b5a;
`;
const Box_number = styled.div`
  font-size: 30px;
  font-weight: 700;
  color: #121212;
`;

const Info = ({ total, cure, death, increase, cure_rate }) => (
  <Container>
    <Title>Info</Title>
    <SemiBox>
      <Box>
        <Box_title>확진</Box_title>
        <Box_number>{`${total}명`}</Box_number>
      </Box>
      <Box>
        <Box_title>완치</Box_title>
        <Box_number>{`${cure}명`}</Box_number>
      </Box>
      <Box>
        <Box_title>사망</Box_title>
        <Box_number>{`${death}명`}</Box_number>
      </Box>
      <Box>
        <Box_title>전날 대비 증가</Box_title>
        <Box_number>{`${increase}명`}</Box_number>
      </Box>
      <Box>
        <Box_title>완치율</Box_title>
        <Box_number>{`${cure_rate}%`}</Box_number>
      </Box>
      <Box>
        <Box_title>빈 칸</Box_title>
        <Box_number>NaN</Box_number>
      </Box>
    </SemiBox>
  </Container>
);

export default Info;
