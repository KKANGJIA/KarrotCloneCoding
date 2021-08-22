import React, { Component } from 'react';

class Chatting extends Component {
  render() {
    return (
      <div id="chatting_">
        <div id="user_img"></div>
        <div id="chatting">
          <div id="chatting_infos">
            <h1>당근마켓</h1>
            <p>부산연제 연산동</p>
            <p>8월 22일</p>
          </div>
          <div id="chatting_texts">
            <p>마지막 채팅 내용 데이터 받아오기</p>
            <div>상품사진 데이터 받아오기</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Chatting;