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
      <React.Fragment>
      {/**此处无关紧要 */}
        <div className="title">
          baby张的react+css3图片预览demo,缩放，旋转，切换
          <p>Github地址：
            <a href="https://github.com/babybrotherzb" target="_blank">
              https://github.com/babybrotherzb
            </a>
          </p>
          <p>博客地址：
            <a
              href="https://blog.csdn.net/weixin_43648947"
              target="_blank"
            >
            https://blog.csdn.net/weixin_43648947
            </a>
          </p>
        </div>
        <div className="custcontent">
          {/*图片正常的列表显示 */}
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
          {/* 引入的image组件 */}
          <ShowImg
            data={data}
            firstIndex={firstIndex}
            showimgs={showimgs}
            toggleshow={this.toggleshow}
          ></ShowImg>
        </div>
      </React.Fragment>
    );
  }
}
