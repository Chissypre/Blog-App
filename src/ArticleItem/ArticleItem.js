import './ArticleItem.styles.css'
const ArticleItem = ({ article })=> {
  const { date, timeLength, writerName, articleText } = article
  return (
      <div className="article-item">
         <div className="article-image">
         <img
            src={article.imageSrc}
            alt={` ${article.id}`}
          />
      </div>
        <div className="article-info">
          <p className="article-date">{date}</p>
          <p className="article-time">{timeLength}</p>
          <p className="article-writer">{writerName}</p>
          <p className="article-text">{articleText}</p>
          <button className="read-more">Read More</button>
        </div>
      </div>
  
  );
};

export default ArticleItem;
