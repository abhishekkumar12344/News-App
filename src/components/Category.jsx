import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NewsList from './NewsList.jsx';

function Category() {
  const { category } = useParams();
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=4cf4195210644316a5762f36debf7882` // Replace here
        );
        setArticles(response.data.articles);
      } catch (err) {
        setError('Failed to fetch news. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [category]);

  return <NewsList articles={articles} loading={loading} error={error} />;
}

export default Category;