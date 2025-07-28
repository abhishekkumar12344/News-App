function NewsCard({ article }) {
  return (
    <div className="news-card">
      {article.urlToImage && (
        <img src={article.urlToImage} alt={article.title} />
      )}
      <h2>{article.title}</h2>
      <p className="meta">
        {article.author && `By ${article.author} | `}
        {new Date(article.publishedAt).toLocaleDateString()}
      </p>
      <p className="description">{article.description}</p>
      <a href={article.url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}

export default NewsCard;