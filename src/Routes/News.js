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
  width: 80%;
  height: 600px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

const Title = styled.div`
  font-size: 30px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  * {
    margin: 5px;
  }
  margin-bottom: 10px;
  border: 1px solid gray;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 3px 3px 10px 0px rgba(255, 255, 255, 0.56);
`;

const Box_title = styled.div`
  font-size: 18px;
  font-weight: 600;
`;

const Box_date = styled.div`
  opacity: 0.5;
`;

const Box_desc = styled.div``;

const News = ({ news }) => (
  <Container>
    <Title>News</Title>
    <SemiBox>
      {news.map(article => (
        <Box key={article.link}>
          <Box_title>
            <a href={`${article.link}`}>{article.title}</a>
          </Box_title>
          <Box_date>{article.pubDate.slice(0, 22)}</Box_date>
          <Box_desc>{article.description}</Box_desc>
        </Box>
      ))}
    </SemiBox>
  </Container>
);

export default News;
