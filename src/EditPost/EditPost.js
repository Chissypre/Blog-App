
import './EditPost.styles.css'


import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format, differenceInMinutes } from 'date-fns';

function EditPost({ articles, setArticles }) {
  const { id } = useParams();
  const navigate = useNavigate();


  const postToEdit = articles.find((article) => article.id === parseInt(id, 10));

  const [editedPost, setEditedPost] = useState({
    title: postToEdit.title,
    imageSrc: postToEdit.imageSrc,
    writerName:postToEdit.writerName,
    articleText: postToEdit.articleText,
  });

  const handleEdit = (e) => {
    e.preventDefault();

    const currentDatetime = new Date();
    const formattedDatetime = format(currentDatetime, 'MMMM dd, yyyy pp');
    const timeDifference = differenceInMinutes(
      currentDatetime,
      new Date(postToEdit.datetime)
    );

    const updatedArticles = articles.map((article) => {
      if (article.id === parseInt(id, 10)) {
        return {
          ...article,
          title: editedPost.title,
          writerName:editedPost.writerName,
          imageSrc: editedPost.imageSrc,
          datetime: formattedDatetime,
          timeLength: `${timeDifference} min`,
          articleText: editedPost.articleText,
        };
      }
      return article;
    });

    setArticles(updatedArticles);
    navigate('/');
  };

  return (
    <main className='NewPost'>
      <h2>Edit Post</h2>
      <form  className= "newPostForm" onSubmit={handleEdit}>
        <input
          type="text"
          placeholder="Title"
          value={editedPost.title}
          onChange={(e) =>
            setEditedPost({
              ...editedPost,
              title: e.target.value,
            })
          }
        />
       
        <textarea
          placeholder="Article Body"
          value={editedPost.articleText}
          onChange={(e) =>
            setEditedPost({
              ...editedPost,
              articleText: e.target.value,
            })
          }
        />
         <input
          type="text"
          placeholder="writerName"
          value={editedPost.writerName}
          onChange={(e) =>
            setEditedPost({
              ...editedPost,
              writerName: e.target.value,
            })
          }
        />
         <input
          type="file"
          accept="image/*" 
          onChange={(e) => {
            const selectedImage = e.target.files[0];
            setEditedPost({
              ...editedPost,
              imageSrc: URL.createObjectURL(selectedImage),
            });
          }}
        />

        <button type="submit">Save Changes</button>
      </form>
    </main>
  );
}

export default EditPost;
