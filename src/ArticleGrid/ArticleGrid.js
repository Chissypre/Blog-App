import ArticleItem from '../ArticleItem/ArticleItem';
import './ArticleGrid.styles.css'


const ArticleGrid = ({ articles}) => {
  
  return (
    <div className="article-grid">
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
        />
      ))}

    </div>
  );
};

export default ArticleGrid;
