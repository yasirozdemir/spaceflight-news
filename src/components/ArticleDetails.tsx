import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import url from "../utils/index";
import { IArticle } from "../interfaces/IArticle";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

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
            <Row style={{ backgroundImage: `url(${articleDetails.imageUrl})` }}>
              <div>
                <h1>{articleDetails.title}</h1>
              </div>
            </Row>
            <Row className="justify-content-center pt-3">
              <Col xs={6}>
                <h4>{articleDetails.summary}</h4>

                <h6>
                  {"Published at "}
                  {format(
                    parseISO(articleDetails.publishedAt),
                    "MMM  do, yyyy"
                  )}
                  {" by "}
                  <Link to={articleDetails.url} target="_blank">
                    {articleDetails.newsSite}
                  </Link>
                </h6>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </>
  );
};

export default ArticleDetails;
