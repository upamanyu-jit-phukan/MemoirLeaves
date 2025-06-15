import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
    <div className="single">
      <div className="content">
        <img src="https://imgs.search.brave.com/bZoJodpRSr-cUg0KWq1r_NVX4FbhjBkv1UpuME7FQlw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQy/ODQxMjIxNi9waG90/by9hLW1hbGUtY2hl/Zi1wb3VyaW5nLXNh/dWNlLW9uLW1lYWwu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PThVM21yZ1dzdUI3/cEI4YXh0R2o4OU1Y/UmtIREtvZEVsaTlG/NndLZ1BUNEE9"
          alt="" />
        <div className="user">
          <img src="https://imgs.search.brave.com/lF3n0lcMXVlXdHKey5cjN4VwaxLg-3dTOQUpEQX4Haw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM4/ODY0NTk2Ny9waG90/by9wZW5zaXZlLXRo/b3VnaHRmdWwtY29u/dGVtcGxhdGluZy1j/YXVjYXNpYW4teW91/bmctbWFuLXRoaW5r/aW5nLWFib3V0LWZ1/dHVyZS1wbGFubmlu/Zy1uZXcuanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPUtlYXhf/T3I5Uml2bllWXzlW/b09MamtuV1FQOGlh/eFlYYzRqUzlyd0Jt/Y2M9"
            alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted two days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            <Link to={`/write?delete=2`}>
              <img src={Delete} alt="" />
            </Link>
          </div>
        </div>
        <h1>Title</h1>
        <p>Description</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single