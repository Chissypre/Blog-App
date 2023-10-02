import Layout from '../src/Layout/Layout';
import Home from '../src/Home/Home';
import About from '../src/About/About';
import Missing from '../src/Missing/Missing';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [articles, setArticles] = useState([
    {
      id: 1,
      imageSrc: 'https://media.geeksforgeeks.org/wp-content/uploads/20230731113407/10-Free-AI-Coding-Assistant-Tools-in-2023.png',
      date: 'Oct 1, 2023',
      timeLength: '5 min',
      writerName: 'John Doe',
      articleText: 'This is the content of the article...',
    },
    {
      id: 2,
      imageSrc: 'https://www.commonsense.org/sites/default/files/png/2019-10/best-coding-tools-middle-school.png',
      date: 'Oct 1, 2023',
      timeLength: '5 min',
      writerName: 'John Doe',
      articleText: 'This is the content of the article...',
    },
    {
      id: 3,
      imageSrc: 'https://www.freecodecamp.org/news/content/images/2022/06/fCC-Banner.png',
      date: 'Oct 1, 2023',
      timeLength: '5 min',
      writerName: 'John Doe',
      articleText: 'This is the content of the article...',
    },
    {
      id: 4,
      imageSrc: 'https://rapidapi.com/blog/wp-content/uploads/2020/01/Rapid-Weather-APIs_BlogImage.jpg',
      date: 'Oct 1, 2023',
      timeLength: '5 min',
      writerName: 'John Doe',
      articleText: 'This is the content of the article...',
    },
    {
      id: 5,
      imageSrc: 'https://learntocodewith.me/wp-content/uploads/2020/08/Places-for-Women-to-Learn-Programming.png',
      date: 'Oct 1, 2023',
      timeLength: '5 min',
      writerName: 'John Doe',
      articleText: 'Getting into tech totally changed the course of my life...',
    },
    {
      id: 6,
      imageSrc: 'https://www.freecodecamp.org/news/content/images/size/w2000/2021/09/The-Programming-Guide-I-Wish-I-Had-When-I-Started-1.png',
      date: 'Oct 1, 2023',
      timeLength: '5 min',
      writerName: 'John Doe',
      articleText: 'This is the content of the article...',
    },
    
  ])
    
  
  return (
    <div className="App">
      <div className="arrow-icon">➡️</div>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home articles={articles} />}/>
        <Route path="post"/>
        </Route>
        <Route path="about" element={<About/>} />
        <Route path="*" element={<Missing/>} />
  
      </Routes>
     
    
       </div>
   
  );
}

export default App;
