import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  render() {
    return (
      <div className="container my-3">
        <h2>NewsBite - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_sport/ff96/live/2d940320-93a0-11ef-876b-0b878ef874c5.jpg"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
