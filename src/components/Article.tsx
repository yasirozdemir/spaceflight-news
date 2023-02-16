import { Card } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";

interface props {
  article: IArticle;
}

const Article = ({ article }: props) => {
  return (
    <Card>
      <Card.Img variant="top" src={article.imageUrl}></Card.Img>
      <p>{article.title}</p>
      <p>{article.summary}</p>
    </Card>
  );
};

export default Article;
