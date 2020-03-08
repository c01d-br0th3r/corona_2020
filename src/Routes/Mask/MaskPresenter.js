import React from "react";
import styled from "styled-components";

const Title = styled.div`
  width: 100%;
  font-size: 60px;
  font-weight: 700;
  border-bottom: 7px solid #fa8231;
  padding: 40px;
  margin-bottom: 50px;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Semibox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 30%;
  display: flex;
  justify-content: space-between;
  border: 1px solid #f2f2f2;
  border-radius: 10px;
  margin: 0 20px 20px 0;
  padding: 30px;
  * {
    font-size: 20px;
    color: #d2d2d2;
  }
  box-shadow: 5px 5px 10px 0px rgba(255, 255, 255, 0.56);
`;

const Name = styled.div`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 8px;
  border-bottom: 2px solid #a5b1c2;
  padding-bottom: 8px;
`;

const Addr = styled.div`
  font-size: 14px;
  opacity: 0.5;
  margin-top: 5px;
`;

const Nameaddr = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
`;

const Count = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
`;
const Stock = styled.div`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  padding: 10px;
`;

const Remain = styled.div`
  font-size: 24px;
  font-weight: 500;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  padding: 10px;
`;

const Soldout = styled.div``;

const MaskPresenter = ({ stores }) => {
  return (
    <Container>
      <Title>내 주변 약국</Title>
      <Semibox>
        {stores.map(store => (
          <Box key={store.code}>
            <Nameaddr>
              <Name>{store.name.slice(6)}</Name>
              <Addr>{store.addr}</Addr>
            </Nameaddr>
            <Count>
              <Stock>입고 : {store.stock_cnt}</Stock>
              <Remain>재고 : {store.remain_cnt}</Remain>
            </Count>
          </Box>
        ))}
      </Semibox>
    </Container>
  );
};

export default MaskPresenter;
