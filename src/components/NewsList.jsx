import NewsCard from './NewsCard.jsx';

function NewsList({ articles, loading, error }) {
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;
  if (!articles || articles.length === 0)
    return <div className="no-articles">No articles found.</div>;

  return (
    <div className="news-list">
      {articles.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  );
}

export default NewsList;