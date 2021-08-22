import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <div id="navbar">
        <div id="nav-title">{this.props.title}</div>
        <nav id="nav_menu">
          <button><i style={{marginRight: '5px', fontSize:'1.2em'}} className="fas fa-search"></i></button>
          <button><i style={{marginRight: '5px', fontSize:'1.2em'}} className="fas fa-bars"></i></button>
          <button><i style={{fontSize:'1.2em'}} className="far fa-bell"></i></button>
        </nav>
      </div>
    );
  }
}

export default Title;

// import React, { useState } from 'react';

// const Title = () => {
//     const [title, useTitle] = useState('당근마켓');

//     return (
//         <div id="nav-title">{title}</div>
//     );
// }

// export default Title;