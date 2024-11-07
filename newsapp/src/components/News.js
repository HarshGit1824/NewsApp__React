import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
    };
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=10b79f44a3d7408db2e9b5f3e2a8a99a&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    // console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=10b79f44a3d7408db2e9b5f3e2a8a99a&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles });
    this.setState({
      page: this.state.page - 1,
    });
  };
  handleNextClick = async () => {
    // console.log("Next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=10b79f44a3d7408db2e9b5f3e2a8a99a&page=${
        this.state.page + 1
      }&pageSize=20`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({ articles: parsedData.articles });
      this.setState({
        page: this.state.page + 1,
      });
    }
  };

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsBite &mdash; Top Headlines</h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title : ""}
                  description={element.description ? element.description : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>

        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark mx-2"
            onClick={this.handlePrevClick}
          >
            ⏮️ Previous
          </button>

          <button
          disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)}
            type="button"
            className="btn btn-dark mx-2"
            onClick={this.handleNextClick}
          >
            Next ⏭️
          </button>
        </div>
      </div>
    );
  }
}

export default News;
