import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {
  const [value, setValue] = useState('');

  return (
    <div className="add">
      <div className="content">
        <input type="text" placeholder="Title" />
        <div className="editorContainer">
          <ReactQuill theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <label className="file" htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as Draft</button>
            <button>Update</button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" />
            <label className="file" htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id="science" />
            <label className="file" htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="technology" id="technology" />
            <label className="file" htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="food" id="food" />
            <label className="file" htmlFor="food">Food</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="cinema" id="cinema" />
            <label className="file" htmlFor="cinema">Cinema</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write