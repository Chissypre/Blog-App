import './NewPost.styles.css'

const NewPost = ({
    handleSubmit, articleTitle, setArticleTitle, articleText, setArticleText,  handleImageChange, writeName, setWriteName
}) => {
    return (
        <main className="NewPost">
            <h2>New Post</h2>
            <form className="newPostForm" onSubmit={handleSubmit}>
                <label htmlFor="articleTitle">Title:</label>
                <input
                    id="articleTitle"
                    type="text"
                    required
                    value={articleTitle}
                    onChange={(e) => setArticleTitle(e.target.value)}
                />
                <label htmlFor="articleBody">Post:</label>
                <textarea
                    id="articleBody"
                    required
                    value={articleText}
                    onChange={(e) => setArticleText(e.target.value)}
                />
                <label htmlFor="writeName">Writers Name:</label>
                <textarea
                    id="writeName"
                    required
                    value={writeName}
                    onChange={(e) => setWriteName(e.target.value)}
                />
                <input
                id="imageFile"
                type="file"
                 accept="image/*" 
                  onChange={handleImageChange}
        />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
}

export default NewPost
