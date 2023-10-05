import './App.css'
import Layout from '../src/Layout/Layout';
import Home from '../src/Home/Home';
import About from '../src/About/About';
import Missing from '../src/Missing/Missing';
import Newsletter from './Newsletter/Newsletter';
import Contact from './Contact/Contact';
import ArticlePage from './ArticlePage/ArticlePage';
import NewPost from './NewPost/NewPost';
import EditPost from './EditPost/EditPost';
import { format } from 'date-fns';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  const [articles, setArticles] = useState([

    {
      id: 1,
      title:"program 1",
      imageSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20230731113407/10-Free-AI-Coding-Assistant-Tools-in-2023.png',
      datetime: 'Oct 1, 2023, 11:17:36 AM' ,
      timeLength: '5 min',
      writerName: 'John Doe',
      articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!...",
    },
    {
      id: 2,
      title:"program 2",
      imageSrc: 'https://www.commonsense.org/sites/default/files/png/2019-10/best-coding-tools-middle-school.png',
      datetime: 'Oct 1, 2023 11:17:36 AM',
      timeLength: '5 min',
      writerName: 'John Doe',
      articleText: '"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"',
    },
    {
      id: 3,
      title:"program 3",
      imageSrc: 'https://www.freecodecamp.org/news/content/images/2022/06/fCC-Banner.png',
      datetime: 'Oct 1, 2023 11:17:36 AM',
      timeLength: '5 min',
      writerName: 'John Doe',
      articleText: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!",
    },
    {
      id: 4,
      title:"program 4",
      imageSrc: 'https://rapidapi.com/blog/wp-content/uploads/2020/01/Rapid-Weather-APIs_BlogImage.jpg',
      datetime: 'Oct 1, 2023 11:17:36 AM',
      timeLength: '5 min',
      writerName: 'John Doe',
      articleText: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"',
    },
    {
      id: 5,
      title:"program 5",
      imageSrc: 'https://learntocodewith.me/wp-content/uploads/2020/08/Places-for-Women-to-Learn-Programming.png',
      datetime: 'Oct 1, 2023 11:17:36 AM',
      timeLength: '5 min',
      writerName: 'John Doe',
      articleText: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"',
    },
    {
      id: 6,
      title:"program 6",
      imageSrc: 'https://www.freecodecamp.org/news/content/images/size/w2000/2021/09/The-Programming-Guide-I-Wish-I-Had-When-I-Started-1.png',
      datetime: 'Oct 1, 2023 11:17:36 AM',
      timeLength: '5 min',
      writerName: 'John Doe',
      articleText: ' "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis consequatur expedita, assumenda similique non optio! Modi nesciunt excepturi corrupti atque blanditiis quo nobis, non optio quae possimus illum exercitationem ipsa!"',
    },
    
  ])
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [articleTitle, setArticleTitle] = useState('');
  const [articleText, setArticleText] = useState('');
  const [writeName, setWriteName] = useState('');
  const [imageFile, setImageFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredResults = articles.filter((article) =>
      ((article.articleText).toLowerCase()).includes(search.toLowerCase())
      || ((article.title).toLowerCase()).includes(search.toLowerCase()));

    setSearchResults(filteredResults.reverse());
  }, [articles, search])


  const currentDatetime = new Date();
    const formattedDatetime = format(currentDatetime, 'MMMM dd, yyyy pp');
   
const providedDatetime = new Date('Oct 1, 2023, 11:17:36 AM');
const timeDifference = Math.floor((currentDatetime - providedDatetime) / (1000 * 60)); 
  

const handleSubmit = (e) => {
    e.preventDefault();
    const id = articles.length ? articles[articles.length - 1].id + 1 : 1;
    const newArticle = {
      id: id, 
      title: articleTitle,
      imageSrc:imageFile ? URL.createObjectURL(imageFile) : '', 
      datetime: formattedDatetime,
      timeLength: `${timeDifference} min`, 
      writerName: writeName,
      articleText: articleText,
    };
    const newArticles = [...articles, newArticle];
    setArticles(newArticles);
    // Clear the input fields
    setArticleTitle('');
    setArticleText('');
    setWriteName('');
    setImageFile(null);
    navigate('/');
  } 
  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    setImageFile(selectedImage);
  }
  const handleDelete = (id) => {
    const articlesList = articles.filter(article=> article.id !== id);
    setArticles(articlesList);
    navigate('/');
  }
 
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout
         search={search}
         setSearch={setSearch}
        />}>
          <Route index element={<Home articles={searchResults} />}/>
        <Route path="article" element={<NewPost
            handleSubmit={handleSubmit}
            handleImageChange={handleImageChange}
            articleTitle={articleTitle}
            setArticleTitle={setArticleTitle}
            articleText={articleText}
            setArticleText={setArticleText}
            writeName={writeName}
            setWriteName={setWriteName}
            imageFile={imageFile}
            setImageFile={setImageFile}
          />}/>
        <Route path="/article/:id" element={<ArticlePage
         articles={articles} handleDelete={handleDelete}
          />}/>
        <Route path="/edit/:id" element={<EditPost
       articles={articles}
       setArticles={setArticles}
          />}/>
         
        <Route path="about" element={<About/>} />
        <Route path="Newsletter" element={<Newsletter/>} />
        <Route path="Contact" element={<Contact/>} />
        <Route path="*" element={<Missing/>} />
        </Route>
      </Routes>
       </div>
   
  );
}

export default App;
