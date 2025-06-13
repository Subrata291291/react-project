import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CommonBanner from '../components/CommonBanner';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  useEffect(() => {
    fetch('../src/blogData.json')
      .then(res => res.json())
      .then(data => {
        const allPosts = data.categories.flatMap(category =>
          category.posts.map(post => ({ ...post, category: category.name }))
        );
        setPosts(allPosts);
      });
  }, []);

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNum) => {
    setCurrentPage(pageNum);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div>
      <CommonBanner />
      <section className="blog-area pt-90 pb-65">
        <div className="container">
          <div className="row">
            {currentPosts.length > 0 ? (
              currentPosts.map(post => (
                <div key={post.id} className="col-12 col-md-6 col-lg-4 mb-4">
                  <div
                    className="blog-box position-relative"
                    data-aos="fade-up"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="1000"
                  >
                    <div className="blog-left shadow p-3 h-100">
                      <Link className="blogpgimg" to={`/blog/${post.id}`}>
                        <img src={post.img} alt={post.title} className="img-fluid" />
                      </Link>
                      <h6 className="mt-3">{post.category}</h6>
                      <h4>
                        <Link to={`/blog/${post.id}`}>
                          {post.title.split(' ').slice(0, 3).join(' ')}...
                        </Link>
                      </h4>
                      <p>{post.description.slice(0, 50)}...</p>
                      <hr className="border-2" />
                      <div className="info-wrapper d-flex justify-content-between align-items-center">
                        <div className="more">
                          <Link to={`/blog/${post.id}`} className="read-btn">Read more</Link>
                        </div>
                        <div className="date">{new Date().toLocaleDateString('en-GB')}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No posts to display at the moment.</p>
            )}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="pagination justify-content-center mt-4">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`btn mx-1 ${currentPage === index + 1 ? 'btn-light' : 'btn-outline-dark'}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Blog;
