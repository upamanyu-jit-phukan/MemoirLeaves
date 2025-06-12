import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'title',
      desc: 'description',
      img: 'https://i.pinimg.com/736x/b4/aa/b6/b4aab6264ff1103fb98248eafa64023f.jpg',
    },
    {
      id: 2,
      title: 'title2',
      desc: 'description',
      img: 'https://i.pinimg.com/736x/b4/aa/b6/b4aab6264ff1103fb98248eafa64023f.jpg',
    },
    {
      id: 3,
      title: 'title3',
      desc: 'description',
      img: 'https://i.pinimg.com/736x/b4/aa/b6/b4aab6264ff1103fb98248eafa64023f.jpg',
    },
  ]
  return (
    <div className="home">
      <div className="posts">
        {
          posts.map(post => (
            <div className="post" key={post.id}>
              <div className="img">
                <img src={post.img} alt="" />
              </div>
              <div className="content">
                <Link className="link" to={`/post/${post.id}`}>
                  <h1>{post.title}</h1>
                </Link>
                <p>{post.desc}</p>
                <button>Read More</button>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Home