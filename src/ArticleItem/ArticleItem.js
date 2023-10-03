import './ArticleItem.styles.css'
import { Link } from 'react-router-dom';
const ArticleItem = ({ article })=> {
  const {  title, datetime, timeLength, writerName, articleText } = article
  return (
      <div className="article-item">
        <Link to={`article/${article.id}`}>
         <div className="article-image">
         <img
            src={article.imageSrc}
            alt={` ${article.id}`}
          />
      </div>
      
      
        <div className="article-info">
        
                <h2 className="article-title">{title}</h2>
                <p className="article-date">{datetime}</p>
                
           
          <p className="article-time">{timeLength}</p>
          <p className="article-writer">{writerName}</p>
          <p className="article-text">{
                (articleText).length <= 25
                    ? articleText
                    : `${(articleText).slice(0, 25)}...`
            }</p>
          <button className="read-more">Read More</button>
        </div>
        </Link>
      </div>
  
  );
};

export default ArticleItem;
