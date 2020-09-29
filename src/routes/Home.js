import React from "react";
import "./Home.scss";
import Loading from "../components/Loading";
import Carousel from "react-bootstrap/Carousel";
import slide01 from "../assets/imgs/slider01.jpg"
import slide02 from "../assets/imgs/slider02.jpg";
import slide03 from "../assets/imgs/slider03.jpg";
import slide04 from "../assets/imgs/slider04.jpg";
import slide05 from "../assets/imgs/slider05.jpg";

class Home extends React.Component {
  state = {
    isLoading: true,
  };

  slideImgs = [
    { id: 0, url: slide01 },
    { id: 1, url: slide02 },
    { id: 2, url: slide03 },
    { id: 3, url: slide04 },
    { id: 4, url: slide05 }
  ];

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 5000);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <main className="home">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="home-view">
            <Carousel touch={true}>
              {this.slideImgs.map((slide) => (
                <Carousel.Item key={slide.id}>
                  <img src={slide.url} alt={slide.id}></img>
                </Carousel.Item>
              ))}
            </Carousel>

            <div className="welcome-text">
              <h1 className="title">
                <span>Hello,</span>
                <span>World!</span>
                {/* <span>Welcom!</span> */}
              </h1>

              <h2 className="title">
                <span>I'm</span>
                <span>Web Publisher</span>
                <span>Heeyoung</span>
              </h2>
            </div>
          </div>
        )}
      </main>
    );
  }
}

export default Home;
