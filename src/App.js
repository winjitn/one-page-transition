import React from "react";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.pages = [
      { number: "one", color: "#f0cf85", position: 75 },
      { number: "two", color: "#e7f0c3", position: 50 },
      { number: "three", color: "#a4d4ae", position: 25 },
      { number: "four", color: "#32afa9", position: 0 }
    ];

    this.current = 75;

    this.ctn = React.createRef();
  }

  page() {
    return this.pages.map(page => {
      return (
        <div
          className="page"
          key={page.number}
          style={{ backgroundColor: `${page.color}` }}
        >
          <div className="title-ctn">
            <span className="front">Page</span>
            <span className="back">{page.number}</span>
          </div>
        </div>
      );
    });
  }

  nav() {
    return this.pages.map(page => {
      return (
        <div
          key={page.number}
          className="list-ctn"
          onClick={e => this.trans(e.target)}
        >
          <li
            className={`sb ${page.number === "one" ? "li-active" : ""}`}
            pos={page.position}
            id={page.number}
          >
            {page.number}
          </li>
        </div>
      );
    });
  }

  trans(e) {
    if (e.classList.contains("li-active") === false) {
      e.classList.toggle("li-active");

      this.ctn.current.style.transform = `translateY(${(this.current -
        e.getAttribute("pos")) *
        -1}%)`;

      const btn = document.querySelectorAll(".sb");

      for (var i = 0; i < btn.length; i++) {
        if (btn[i].id !== e.id && btn[i].classList.contains("li-active")) {
          btn[i].classList.toggle("li-active");
        }
      }
    }
  }

  render() {
    return (
      <div className="outer">
        <ul className="nav">{this.nav()}</ul>
        <div className="ctn" ref={this.ctn}>
          {this.page()}
        </div>
      </div>
    );
  }
}

export default App;
