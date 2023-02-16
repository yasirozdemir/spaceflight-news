import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import url from "../utils/index";
import { IArticle } from "../interfaces/IArticle";
import { Container, Row, Col } from "react-bootstrap";

const ArticleDetails = () => {
  const articleID = useParams().articleID;
  const [articleDetails, setArticleDetails] = useState<IArticle>();

  const fetchArticleDetails = async () => {
    try {
      const response = await fetch(url + articleID);
      if (response.ok) {
        const articleDetailsData = await response.json();
        setArticleDetails(articleDetailsData);
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchArticleDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <Container fluid id="articleDetails">
        {articleDetails && (
          <>
            <Row>
              <Col>
                <img src={articleDetails.imageUrl} alt={articleDetails.title} />
              </Col>
            </Row>
            <Row>
              <Col>
                <h1>{articleDetails.title}</h1>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default ArticleDetails;
