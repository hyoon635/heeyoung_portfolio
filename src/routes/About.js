import React from "react";
import "./About.scss";
import mainImg from "../assets/imgs/about/about_main.jpg";

class About extends React.Component {
  render() {
    return (
      <div className="about">
        <section>
          <div className="img-wrapper">
            <img src={mainImg} alt="main"></img>
          </div>

          <div className="about__text">
            <p>
              안녕하세요. <span className="bold">Web Publisher 윤희영</span>
              입니다 :) <br />
              어떻게 하면 더 효율적이고, 똑똑하게 작업할지 고민하는
              퍼블리셔입니다.
            </p>

            <p>
              제가 추구하는 퍼블리셔란, UI/UX 디자인을 최대한 살리고, 가장
              효율적으로 코딩하는 것입니다. 그렇기 때문에 기획의도의 이해와
              디자이너, 개발자들과의 원활한 커뮤니케이션을 중요하게 생각합니다.
              이러한 생각이 사용자들에게 더 나은 서비스를 제공할거라 생각합니다.
            </p>

            <p>
              저는 2년 이상 퍼블리셔로 다양한 형태의 프로젝트들을 진행하며,
              실력과 경험을 쌓았습니다. <br />
              프로젝트를 진행하며 사용했던
              <mark>HTML, CSS(preprocessor - scss), Javascript</mark>를 기본으로
              <mark>Angular, Ionic</mark>을 사용할 수 있습니다.
            </p>

            <p>
              포트폴리오 사이트는 <mark>React, scss</mark>를 사용하여
              만들었습니다.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default About;
