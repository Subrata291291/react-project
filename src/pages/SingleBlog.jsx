import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import CommonBanner from '../components/CommonBanner';

const SingleBlog = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [allCategories, setAllCategories] = useState([]);
  const [allPosts, setAllPosts] = useState([]);
  const [activeCategory, setActiveCategory] = useState('');
  const [categoryViewPosts, setCategoryViewPosts] = useState([]);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    fetch('/blogData.json')
      .then(res => res.json())
      .then(data => {
        const categories = data.categories.map(c => c.name);
        setAllCategories(categories);

        const all = data.categories.flatMap(category =>
          category.posts.map(post => ({ ...post, category: category.name }))
        );
        setAllPosts(all);

        const selectedPost = all.find(p => p.id === parseInt(id));
        setPost(selectedPost);
        setActiveCategory(''); // No category is active initially

        const recent = all.filter(p => p.id !== parseInt(id)).slice(0, 4);
        setRecentPosts(recent);
      });
  }, [id]);

  const handleCategoryClick = (cat) => {
    setActiveCategory(cat);
    const filtered = allPosts.filter(p => p.category === cat);
    setCategoryViewPosts(filtered);
  };

  const contentToRender = activeCategory ? categoryViewPosts : post ? [post] : [];

  if (!post) return <div className="container p-100">Loading...</div>;

  return (
    <>
      <CommonBanner />
      <div className="single_blog_area pt-90 pb-65">
        <div className="container">
          <div className="row gx-md-5">
            {/* Left Main Content */}
            <div className="col-12 col-md-7">
              <div className="single_blog_area_left">
                {contentToRender.map((item) => (
                  <div key={item.id} className="mb-5">
                    <img src={item.img} alt={item.title} className="img-fluid" />
                    <h2 className="pt-4 pb-3">{item.title}</h2>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-12 col-md-5">
              <div className="single_blog_area_right">
                {/* Categories */}
                <div className="blog_category_sidebar">
                  <h3>Blog Categories</h3>
                  {allCategories.map((cat, index) => (
                    <span
                      key={index}
                      onClick={() => handleCategoryClick(cat)}
                      className={`d-block mb-2 category-link ${cat === activeCategory ? 'active-category' : ''}`}
                      style={{ cursor: 'pointer' }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>

                {/* Recent Posts */}
                <div className="recent_post">
                  <h3>Recent Posts</h3>
                  {recentPosts.map(r => (
                    <div key={r.id} className="recent_post_box d-md-flex mb-md-3">
                      <div className="post_img me-md-3">
                        <Link to={`/blog/${r.id}`}>
                          <img src={r.img} alt={r.title} className="img-fluid" />
                        </Link>
                      </div>
                      <div className="post_content">
                        <h5 className="text-truncate">
                          <Link to={`/blog/${r.id}`}>{r.title}</Link>
                        </h5>
                        <p className="post_blog_description">{r.description.slice(0, 80)}...</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
