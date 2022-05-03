import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import { format } from 'date-fns';
import { Route, Routes, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function App() {
  const [posts, setPosts] = useState([
    {
      id: 2,
      title: "A day in the mountains",
      dateTime: 'April 28th, 2017',
      body: 'Nothing is better than the smell of the outdoors after a grogeous rainstorm. Being in the mountains just feels like home, nothing will ever compare!',
    },
    {
      id: 1,
      title: "Where the clouds flow",
      dateTime: 'April 27th, 2017',
      body: 'Have you ever watched the sky as a storm rolls in? The way the clouds billow into such fluffy shapes, bringing in cooling winds, the peace that overcomes you as you sense the rain that is about to fall and wash away all of the worries that now seem so trivial?'
    }
   ]);
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase()));

      setSearchResults(filteredResults.reverse());
  },[posts, search])

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), 'MMMM dd, yyyy');
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
     <Nav search={search} setSearch={setSearch} />
      <Routes>
        <Route path='/*' element= {<Home posts={searchResults} />} />
        <Route path='/post' 
        element= {<NewPost 
                    handleSubmit={handleSubmit} 
                    postTitle={postTitle} 
                    setPostTitle={setPostTitle} 
                    postBody={postBody} 
                    setPostBody={setPostBody} />} 
                  />
        <Route path='/post/:id' element= {<PostPage post={posts} handleDelete={handleDelete} />}/>
        <Route path='/about' element={<About/>} />
        <Route path='*' element={<Missing />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
