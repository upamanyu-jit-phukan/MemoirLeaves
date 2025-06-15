import React from 'react'

function Menu() {
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
        <div classNmae="menu">
            <h1>Other posts you may like</h1>
            {posts.map(post =>(
                <div className="post" key={post.id}>
                    <img src={post.img} alt="" />
                    <h1>{post.title}</h1>
                    <button>Read More</button>
                </div>
            ))}
        </div>
    )
}

export default Menu