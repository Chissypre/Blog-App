import './Home.styles.css'


import ArticleGrid from '../ArticleGrid/ArticleGrid';

const Home = ({ articles }) => {
    return (
        
        <main className="Home">
           
            {articles.length ? (
                <ArticleGrid articles={articles} />
            ) : (
                <p style={{ marginTop: "2rem" }}>
                    No posts to display.
                </p>
            )}
        </main>
    )
}

export default Home
