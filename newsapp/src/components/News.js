import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {

  articles = [
    {
      source: { id: "bbc-sport", name: "BBC Sport" },
      author: null,
      title:
        "England in Pakistan: Jonathan Agnew on one last collapse from the tourists in his final Test as BBC cricket correspondent",
      description:
        "Jonathan Agnew ends his time as BBC cricket correspondent reflecting on another England collapse as the tourists fall to a 2-1 series defeat in Pakistan.",
      url: "http://www.bbc.co.uk/sport/cricket/articles/c33ev3k3v6jo",
      urlToImage:
        "https://ichef.bbci.co.uk/news/1024/branded_sport/ff96/live/2d940320-93a0-11ef-876b-0b878ef874c5.jpg",
      publishedAt: "2024-10-26T15:52:18.8128899Z",
      content:
        "And, with that, my 33-plus years as the BBC's cricket correspondent come to an end.\r\nThere have been two aspects to my job. One is presenting Test Match Special, the other is being responsible for ne… [+1944 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      description:
        "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      publishedAt: "2020-04-27T11:41:47Z",
      content:
        "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]",
    },
    {
      source: { id: "espn-cric-info", name: "ESPN Cric Info" },
      author: null,
      title:
        "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      description:
        "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      url: "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      urlToImage:
        "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      publishedAt: "2020-03-30T15:26:05Z",
      content:
        "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]",
    },
  ];

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }


  async componentDidMount() {
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=10b79f44a3d7408db2e9b5f3e2a8a99a";
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles});
  }

  render() {
    console.log("render")
    return (
      <div className="container my-3">
        <h2>NewsBite - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={element.description ? element.description.slice(0, 75) : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
          })}
        </div>
      </div>
    );
  }
}

export default News;
