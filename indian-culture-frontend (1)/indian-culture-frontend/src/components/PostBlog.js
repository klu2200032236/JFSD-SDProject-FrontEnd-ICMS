import React, { useState } from 'react';
import axios from 'axios';
import './PostBlog.css'; // Import the CSS file for styling

const PostBlog = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const [error, setError] = useState(null);

  const handlePostBlog = async (e) => {
    e.preventDefault();

    const blog = { title, content, author };

    try {
      const response = await axios.post('http://localhost:8080/blogs', blog, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      alert('Blog posted successfully!');
      setTitle('');
      setContent('');
      setAuthor('');
    } catch (error) {
      setError('Failed to post blog');
      console.error(error);
    }
  };

  return (
    <div className="post-blog-container">
      <h1 className="form-title">Post a New Blog</h1>
      {error && <p className="error-message">{error}</p>}
      <form onSubmit={handlePostBlog} className="blog-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-button">Post Blog</button>
      </form>
    </div>
  );
};

export default PostBlog;
