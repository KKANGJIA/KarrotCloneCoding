import React, { Component } from 'react';

class Menu extends Component {

    render() {
        return (
            <div id="menus">
                {/* 아이콘 클릭 시에도 이동할 수 있는 방법 마련 */}
                <button onClick={this.props.onClick} id="menu_home">
                    <i style={{display:'block', fontSize:'2em'}} className="fas fa-home"></i>홈
                </button>
                <button onClick={this.props.onClick} id="menu_village">
                    <i style={{display:'block', fontSize:'2em', margin:'auto'}} className="far fa-newspaper"></i>동네생활
                </button>
                <button onClick={this.props.onClick} id="menu_nearby">
                    <i style={{display:'block', fontSize:'2em', margin:'auto'}} className="fas fa-map-marker-alt"></i>내 근처
                </button>
                <button onClick={this.props.onClick} id="menu_chatting">
                    <i style={{display:'block', fontSize:'2em'}} className="far fa-comments"></i>채팅
                </button>
                <button onClick={this.props.onClick} id="menu_karrot">
                    <i style={{display:'block', fontSize:'2em', margin:'auto'}} className="far fa-user"></i>나의 당근
                </button>
            </div>
        );
    }
}

export default Menu;

