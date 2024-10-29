import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description } = this.props;
    return (
      <div>
        <div className="card" style={{ width: "18rem" }}>
          <img
            src="https://ichef.bbci.co.uk/news/1024/branded_sport/ff96/live/2d940320-93a0-11ef-876b-0b878ef874c5.jpg"
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsdetail" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
