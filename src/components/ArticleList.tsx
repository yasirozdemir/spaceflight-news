import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
import Article from "./Article";
import url from "../utils/index";

const ArticleList = () => {
  const [articles, setArticles] = useState<IArticle[]>([]);

  const fetchArticles = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const articleData = await response.json();
        setArticles(articleData);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticles();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container style={{ marginTop: "80px" }}>
        <Row className="justify-content-center">
          {articles &&
            articles.map((a) => (
              <Col xs={12} sm={6} md={4} key={a.id}>
                <Article article={a}></Article>
              </Col>
            ))}
        </Row>
      </Container>
    </>
  );
};

export default ArticleList;
