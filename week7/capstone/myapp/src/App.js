import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [posts, setPosts] = useState([
    {
      id: uuidv4(),
      title: "A day in the mountains",
      dateTime: 'April 28th, 2017',
      body: 'Nothing is better than the smell of the outdoors after a grogeous rainstorm. Being in the mountains just feels like home, nothing will ever compare!',
    },
    {
      id: uuidv4(),
      title: "Where the clouds flow",
      dateTime: 'April 27th, 2017',
      body: 'Have you ever watched the sky as a storm rolls in? The way the clouds billow into such fluffy shapes, bringing in cooling winds, the peace that overcomes you as you sense the rain that is about to fall and wash away all of the worries that now seem so trivial?'
    },
    {
      id: uuidv4(),
      title: "Why",
      dateTime:'May 6th, 2022',
      body:'why does react just not ever want to play nice? For what ever reason the same syntax that worked to delete before fails me now. So much stress.'
    },
    {
      id: uuidv4(),
      title:'Search bar',
      dateTime:'May 5th, 2022',
      body:'Well well well, the fight with react continues. One issue resolved only to find another. How fun, I will figure this out. React, you will not hide your secrets from me.'
    }
   ]);

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

    const handleChange = (e) => {
      setSearch(e.target.value);

    const filteredResults = posts.filter(post => 
      post.title.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setSearchResults(filteredResults);
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    const dateTime = new Date('MMMM dd, yyyy').toDateString();
    const newPost = { id, title: postTitle, dateTime, body: postBody};
    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
  }

  return (
    <div className="App">
     <Header title="My Blog Page" />
     <Nav search={search} setSearch={setSearch} handleChange={ handleChange } />
      <Routes>
        <Route path='/*' element= {<Home posts={posts} searchResults={searchResults} />} />
        <Route 
        path='/post' 
        element= {<NewPost 
                    handleSubmit={handleSubmit} 
                    postTitle={postTitle} 
                    setPostTitle={setPostTitle} 
                    postBody={postBody} 
                    setPostBody={setPostBody} />} 
                  />
        <Route path='/post/:id' element= {<PostPage posts={posts} handleDelete={handleDelete} />}/>
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Missing />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
