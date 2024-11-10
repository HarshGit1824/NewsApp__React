import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className="my-3">
        {/* <div className="card">
          <img
            src={
              !imageUrl
                ? "https://media.istockphoto.com/id/1313303632/video/breaking-news-template-intro-for-tv-broadcast-news-show-program-with-3d-breaking-news-text.jpg?s=640x640&k=20&c=S0dTZp37XKVcCAnoguMnRatvv4Nkp2cjmA5aYOOrJs8="
                : imageUrl
            }
            alt=""
          />
          <div className="card-body">
            <h5 className="card-title">
              {title}
              <span
  className="position-absolute top-0 translate-middle badge rounded-pill custom-badge"
  style={{ left: '90%', zIndex: 1 }}
>
  {source}
</span>

            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div> */}

<div className="card position-relative">
  <img
    src={
      !imageUrl
        ? "https://media.istockphoto.com/id/1313303632/video/breaking-news-template-intro-for-tv-broadcast-news-show-program-with-3d-breaking-news-text.jpg?s=640x640&k=20&c=S0dTZp37XKVcCAnoguMnRatvv4Nkp2cjmA5aYOOrJs8="
        : imageUrl
    }
    alt="news"
    className="card-img-top"
  />
  <div className="card-body">
    <h5 className="card-title">
      {title}
      <span className="badge custom-badge">{source}</span>
    </h5>
    <p className="card-text">{description}</p>
    <p className="card-text">
      <small className="text-body-secondary">
        By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}
      </small>
    </p>
    <a
      rel="noreferrer"
      href={newsUrl}
      target="_blank"
      className="btn btn-sm btn-dark"
    >
      Read More
    </a>
  </div>
</div>

      </div>
    );
  }
}

export default NewsItem;
