import './ArticlePage.styles.css'
import { useParams, Link } from "react-router-dom";

const ArticlePage = ({ articles, handleDelete }) => {

    const { id } = useParams();
    const article = articles.find(article => (article.id).toString() === id);
    return (
        <main className="ArticlePage">
            <article className="articlepage">
                {article &&
                    <>
                       <div className="articlepage-image">
         <img
            src={article.imageSrc}
            alt={` ${article.id}`}
          />
      </div>
        <div className="article-info">
                <h2 className="article-title">{article.title}</h2>
                <p className="articlepage-date">{article.datetime}</p>
            
          <p className="articlepage-time">{article.timeLength}</p>
          <p className="articlepage-writer">{article.writerName}</p>
          <p className="articlepage-text">{article.articleText}</p>
          </div>
          <Link to={`/edit/${article.id}`}><button className="editButton">Edit Post</button></Link>
                        <button className="deleteButton"onClick={() => handleDelete(article.id)}>
                            Delete Post
                        </button>
                    </>
                }
                {!article &&
                    <>
                        <h2>Post Not Found</h2>
                        <p>Well, that's disappointing.</p>
                        <p>
                            <Link to='/'>Visit Our Homepage</Link>
                        </p>
                    </>
                }
            </article>
        </main>
    )
}

export default ArticlePage
