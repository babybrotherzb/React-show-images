import React, { Component } from "react";
import "./App.css";
import ShowImg from "./image";
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        "http://img.s.youfenba.com/material_thumb/BYX6Mm67ba.jpg",
        "http://img.s.youfenba.com/material_thumb/8nzxJwpsPX.jpg",
        "http://img.s.youfenba.com/material_thumb/SaNktASjmp.jpg",
        "http://img.s.youfenba.com/material_thumb/cTma2FTPEC.jpg",
        "http://img.s.youfenba.com/material_thumb/KnNc6D4sGs.jpg"
      ],
      _html: "",
      showimgs: false, //必须字段控制弹框显示隐藏
      firstIndex: 0 //点击时默认下标
    };
  }

  showimg = i => {
    this.setState({ showimgs: true, firstIndex: i });
    console.log(this.state.firstIndex);
  };

  toggleshow = () => {
    this.setState({ showimgs: false });
  };
  
  render() {
    const { firstIndex, showimgs, data } = this.state;
    return (
      <div className="custcontent">
        <div className="showimg">
          {this.state.data.map((item, i) => {
            return (
              <img
                style={{ width: "200px", height: "100px" }}
                src={item}
                onClick={() => this.showimg(i)}
                key={item}
              />
            );
          })}
        </div>
        <ShowImg
          data={data}
          firstIndex={firstIndex}
          showimgs={showimgs}
          toggleshow={this.toggleshow}
        ></ShowImg>
      </div>
    );
  }
}
