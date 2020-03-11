import React from "react";
import styled from "styled-components";

const Title = styled.div`
  width: 100%;
  font-size: 40px;
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
  width: 100%;
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

const Subtitle = styled.div`
  width: 100%;
  font-size: 35px;
  font-weight: 600;
  padding: 20px;
  margin-bottom: 30px;
`;

const Count = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
`;
const Stock = styled.div`
  font-size: 12px;
  font-weight: 500;
  margin-bottom: 10px;
  padding: 10px;
  text-align: center;
`;

const Remain = styled.div`
  font-size: 24px;
  font-weight: 500;
  border: 1px solid #c2c2c2;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
`;

const Soldout = styled.div``;

const MaskPresenter = ({ stores }) => {
  console.log(stores);
  const plentyStores = stores.filter(store => store.remain_stat === "plenty");
  const someStores = stores.filter(store => store.remain_stat === "some");
  const fewStores = stores.filter(store => store.remain_stat === "few");
  const emptyStores = stores.filter(store => store.remain_stat === "empty");

  console.log(plentyStores, someStores, fewStores, emptyStores);
  return (
    <Container>
      <Title>내 주변 약국</Title>
      <Semibox>
        <Subtitle>100개 이상</Subtitle>
        {plentyStores.length === 0 ? (
          <Name>결과 없음</Name>
        ) : (
          plentyStores.map(store => (
            <Box key={store.code}>
              <Nameaddr>
                <Name>{store.name}</Name>
                <Addr>{store.addr}</Addr>
              </Nameaddr>
              <Count>
                <Stock>업데이트 : {store.created_at}</Stock>
                <Remain>
                  {store.remain_stat === "plenty" && "100개 이상"}
                  {store.remain_stat === "some" && "30개 이상"}
                  {store.remain_stat === "few" && "10개 이상"}
                  {store.remain_stat === "empty" && "재고 없음"}
                  {store.remain_stat === null && "정보 없음"}
                </Remain>
              </Count>
            </Box>
          ))
        )}

        <Subtitle>30개 이상 100개 미만</Subtitle>
        {someStores.length === 0 ? (
          <Name>결과 없음</Name>
        ) : (
          someStores.map(store => (
            <Box key={store.code}>
              <Nameaddr>
                <Name>{store.name}</Name>
                <Addr>{store.addr}</Addr>
              </Nameaddr>
              <Count>
                <Stock>업데이트 : {store.created_at}</Stock>
                <Remain>
                  {store.remain_stat === "plenty" && "100개 이상"}
                  {store.remain_stat === "some" && "30개 이상"}
                  {store.remain_stat === "few" && "10개 이상"}
                  {store.remain_stat === "empty" && "재고 없음"}
                  {store.remain_stat === null && "정보 없음"}
                </Remain>
              </Count>
            </Box>
          ))
        )}

        <Subtitle>10개 이상 30개 미만</Subtitle>
        {fewStores.length === 0 ? (
          <Name>결과 없음</Name>
        ) : (
          fewStores.map(store => (
            <Box key={store.code}>
              <Nameaddr>
                <Name>{store.name}</Name>
                <Addr>{store.addr}</Addr>
              </Nameaddr>
              <Count>
                <Stock>업데이트 : {store.created_at}</Stock>
                <Remain>
                  {store.remain_stat === "plenty" && "100개 이상"}
                  {store.remain_stat === "some" && "30개 이상"}
                  {store.remain_stat === "few" && "10개 이상"}
                  {store.remain_stat === "empty" && "재고 없음"}
                  {store.remain_stat === null && "정보 없음"}
                </Remain>
              </Count>
            </Box>
          ))
        )}

        <Subtitle>재고 없음</Subtitle>
        {emptyStores.length === 0 ? (
          <Name>결과 없음</Name>
        ) : (
          emptyStores.map(store => (
            <Box key={store.code}>
              <Nameaddr>
                <Name>{store.name}</Name>
                <Addr>{store.addr}</Addr>
              </Nameaddr>
              <Count>
                <Stock>업데이트 : {store.created_at}</Stock>
                <Remain>
                  {store.remain_stat === "plenty" && "100개 이상"}
                  {store.remain_stat === "some" && "30개 이상"}
                  {store.remain_stat === "few" && "10개 이상"}
                  {store.remain_stat === "empty" && "재고 없음"}
                  {store.remain_stat === null && "정보 없음"}
                </Remain>
              </Count>
            </Box>
          ))
        )}
      </Semibox>
    </Container>
  );
};

export default MaskPresenter;
