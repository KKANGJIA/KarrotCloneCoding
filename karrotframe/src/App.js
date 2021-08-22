import React, { Component } from 'react';
import './App.css';
import Title from './conponents/title';
import Chattings from './conponents/chatting/chattings';
import Sections from './conponents/home/sections';
import Menu from './conponents/menu';


class App extends Component {

  state = {
    title: '홈',
    currentPage: 1,
  };

  onClickButton = (event) => {
    if(event.target.id === 'menu_home'){
      this.setState({
        title:'홈',
        currentPage: 1,
      });
      console.log(this.state.currentPage);
    } else if(event.target.id === 'menu_nearby'){
      this.setState({
        title:'내 근처',
        currentPage: 2,
      });
    } else if(event.target.id === 'menu_chatting'){
      this.setState({
        title:'채팅',
        currentPage: 3,
      });
      console.log(this.state.currentPage);
    } else if(event.target.id === 'menu_village'){
      this.setState({
        title:'동네생활',
        currentPage: 4,
      });
    } else if(event.target.id === 'menu_karrot'){
      this.setState({
        title:'나의 당근',
        currentPage: 5,
      });
    }
  }

  render(){
    //페이지변환 조건부 렌더링
    const currentPage = this.state.currentPage;
    let block = null;
    if (currentPage === 1) {
      block = <Sections/>
    } else if (currentPage === 3) {
      block = <Chattings/>
    }

    return (
      <div className="App">
        <Title title={this.state.title}/>
        {block}
        <Menu onClick={this.onClickButton}/>
      </div>
    );
  }
  
}

export default App;
