import React, { Component } from 'react';

class Section extends Component {
  render() {
    return (
      <div id="home">
        <div id="product_img"></div>
        <div id="texts">
          <h1>당근마켓 title</h1>
          <p>작성자</p>
          <p>금액 원</p>
        </div>
      </div>
    );
  }
}

export default Section;