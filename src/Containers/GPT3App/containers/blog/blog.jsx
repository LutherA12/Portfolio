import blog01 from "../../assets/blog01.png";
import { BlogData } from "../../helperfiles/data";
import { NavLink } from "react-router-dom";
import "./blog.styles.scss";

export default function Blog() {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening and we are blogging about it!
        </h1>
      </div>

      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <div className="gpt3__blog-container_article">
            <div className="gpt3__blog-container_article-image">
              <img src={blog01} alt="image not found" />
            </div>
            <div className="gpt3__blog-container_article-content">
              <div>
                <p>Sept 8, 2023</p>
                <h3>
                  <NavLink to="/Gpt3Article">
                    GPT-3 and Open AI is the future. Come journey with us and
                    explore how it works!
                  </NavLink>
                </h3>
              </div>
              <p>
                <NavLink to="/Gpt3Article">Read Full Article</NavLink>
              </p>
            </div>
          </div>
        </div>

        <div className="gpt3__blog-container_groupB">
          {BlogData.map((blog, index) => {
            return (
              <div className="gpt3__blog-container_article" key={index}>
                <div className="gpt3__blog-container_article-image">
                  <img src={blog.img} alt="image not found" />
                </div>
                <div className="gpt3__blog-container_article-content">
                  <div>
                    <p>{blog.date}</p>
                    <h3>
                      <NavLink to={`${blog.linkTo}`}>{blog.title}</NavLink>
                    </h3>
                  </div>
                  <p>
                    <NavLink to={`${blog.linkTo}`}>{blog.link}</NavLink>
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
