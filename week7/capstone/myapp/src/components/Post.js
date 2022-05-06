import { Link } from 'react-router-dom';

const Post = ({post}) => {
  
    return (
        <>
        <article className='posts'>
        <Link to={`/post/${post.id}`}>
                <h2 className='h2'>{post.title}</h2>
                <p className='date'>{post.datetime} </p>
                <p className='postBody'> {post.body} </p>
        </Link>
        </article>
        </>
    )
    
}

export default Post