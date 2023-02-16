import { Card } from "react-bootstrap";
import { IArticle } from "../interfaces/IArticle";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

interface props {
  article: IArticle;
}

const Article = ({ article }: props) => {
  return (
    <Link to={"/article/" + article.id}>
      <Card>
        <Card.Img variant="top" src={article.imageUrl}></Card.Img>
        <p>{article.title}</p>
        <p>{article.summary}</p>
        <p>{format(parseISO(article.publishedAt), "MMM  do, yyyy")}</p>
      </Card>
    </Link>
  );
};

export default Article;
