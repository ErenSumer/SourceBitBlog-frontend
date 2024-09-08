import React, { useState, useEffect } from 'react';
import {api} from '../api';

interface BlogPost {
  _id: string;
  title: string;
  content: string;
}

const Home: React.FC = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts');
        setPosts(response.data);
      } catch (err) {
        setError('Failed to fetch posts');
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold text-center my-8">Blog Posts</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post._id} className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold mb-4">{post.title}</h2>
            <p className="text-gray-700">{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
