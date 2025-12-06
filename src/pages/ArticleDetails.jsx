import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import { articles } from '../data/articles';
import './ArticleDetails.css';

const ArticleDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const article = articles.find(a => a.id === parseInt(id));

    if (!article) {
        return (
            <div className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <h2>Article not found</h2>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="article-details-container">
            <div className="article-hero">
                <img src={article.image} alt={article.title} />
            </div>

            <header className="article-header">
                <div className="article-meta-details">
                    {article.date} • Written by {article.author}
                </div>
                <h1 className="article-title-main">{article.title}</h1>
            </header>

            <div className="article-body" dangerouslySetInnerHTML={{ __html: article.content }}></div>

            <div className="back-btn-container">
                <Link to="/" className="back-btn">
                    <FaArrowLeft /> Back to Articles
                </Link>
            </div>
        </div>
    );
};

export default ArticleDetails;
