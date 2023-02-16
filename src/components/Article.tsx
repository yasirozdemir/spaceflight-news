import { IArticle } from "../interfaces/IArticle";
import { Link } from "react-router-dom";
import { format, parseISO } from "date-fns";

interface props {
  article: IArticle;
}

const Article = ({ article }: props) => {
  return (
    <Link to={"/article/" + article.id} className="articleCard">
      <div
        style={{ backgroundImage: `url(${article.imageUrl})` }}
        className="mb-3"
      >
        <div>
          <p className="m-0">{article.title}</p>
          <small>
            {format(parseISO(article.publishedAt), "MMM  do, yyyy")}{" "}
          </small>
        </div>
      </div>
    </Link>
  );
};

export default Article;
