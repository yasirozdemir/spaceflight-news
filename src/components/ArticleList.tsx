import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
import Article from "./Article";

const ArticleList = () => {
  const url = "https://api.spaceflightnewsapi.net/v3/articles";
  const [articles, setArticles] = useState<IArticle[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const articleData = await response.json();
        setArticles(articleData);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line
  }, []);

  console.log(articles);

  return (
    <>
      <h1>Article List</h1>
      <Container>
        <Row>
          {articles &&
            articles.map((a) => (
              <Col xs={12} md={4} sm={3} key={a.id}>
                <Article article={a}></Article>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default ArticleList;
