import React, { Component } from "react";

export default class ShowImg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      f: this.props.firstIndex,
      R: 0,
      S: 1,
      i: 0,
      SS: 1,
      data: this.props.data,
      showimgs: this.props.showimgs
    };
  }
  
  componentWillReceiveProps(props) {
    this.setState({ f: props.firstIndex });
  }

  //向左预览
  leftshow = () => {
    if (this.state.f == 0) {
      this.setState({ f: 4, R: 0, S: 1, i: 0, SS: 1 });
    } else {
      this.setState({ f: this.state.f - 1, R: 0, S: 1, i: 0, SS: 1 });
    }
    this.refs.imgstyle.setAttribute("src", this.props.data[this.state.f]);
  };

  //向右预览
  rightshow = () => {
    if (this.state.f == 4) {
      this.setState({ f: 0, R: 0, S: 1, i: 0, SS: 1 });
    } else {
      this.setState({ f: this.state.f + 1, R: 0, S: 1, i: 0, SS: 1 });
    }
    this.refs.imgstyle.setAttribute("src", this.props.data[this.state.f]);
  };

  //顺时针旋转
  rotateright = () => {
    this.setState({ R: this.state.R + 90 });
    this.refs.imgstyle.style.transform =
      "translate(-50% ,-50%) rotate(" +
      this.state.R +
      "deg) scale(" +
      this.state.SS +
      "," +
      this.state.SS +
      ")";
  };

  //逆时针旋转
  rotateleft = () => {
    this.setState({ R: this.state.R - 90 });
    this.refs.imgstyle.style.transform =
      "translate(-50% ,-50%) rotate(" +
      this.state.R +
      "deg) scale(" +
      this.state.SS +
      "," +
      this.state.SS +
      ")";
  };

  //放大
  showbig = () => {
    if (this.state.i >= 0) {
      this.setState({
        S: this.state.S + 1,
        i: this.state.i + 1,
        SS: 1 * (this.state.S + 1)
      });
    } else {
      this.setState({
        S: this.state.S - 1,
        i: this.state.i + 1,
        SS: 1 / (this.state.S - 1)
      });
    }
    this.refs.imgstyle.style.transform =
      "translate(-50% ,-50%) rotate(" +
      this.state.R +
      "deg) scale(" +
      this.state.SS +
      "," +
      this.state.SS +
      ")";
  };

  //缩小
  showmin = () => {
    if (this.state.i <= 0) {
      this.setState({
        S: this.state.S + 1,
        i: this.state.i - 1,
        SS: 1 / (this.state.S + 1)
      });
    } else {
      this.setState({
        S: this.state.S - 1,
        i: this.state.i - 1,
        SS: 1 * (this.state.S - 1)
      });
    }
    this.refs.imgstyle.style.transform =
      "translate(-50% ,-50%) rotate(" +
      this.state.R +
      "deg) scale(" +
      this.state.SS +
      "," +
      this.state.SS +
      ")";
  };

  render() {
    const { toggleshow, showimgs } = this.props;
    const { data, f, R, SS } = this.state;
    return (
      <div>
        {showimgs ? (
          <div>
            <div className="dilong toggleshow" onClick={toggleshow}></div>
            <div className="bigimg toggleshow">
              <p className="close" onClick={toggleshow}>
                <i className="icon icon-close" style={{ fontSize: "20px" }}></i>
              </p>
              <img
                src={data[f]}
                className="imgstyle"
                style={{
                  transform:
                    "translate(-50% ,-50%) rotate(" +
                    R +
                    "deg) scale(" +
                    SS +
                    "," +
                    SS +
                    ")"
                }}
                ref="imgstyle"
              />
              <p className="left" onClick={this.leftshow}>
                <i className="icon icon-left" style={{ fontSize: "30px" }}></i>
              </p>
              <p className="right" onClick={this.rightshow}>
                <i className="icon icon-right" style={{ fontSize: "30px" }}></i>
              </p>
              <p className="rotateright" onClick={this.rotateright}>
                <i className="icon icon-rturn" style={{ fontSize: "30px" }}></i>
              </p>
              <p className="rotateleft" onClick={this.rotateleft}>
                <i className="icon icon-lturn" style={{ fontSize: "30px" }}></i>
              </p>
              <p className="showbig" onClick={this.showbig}>
                <i
                  className="icon icon-imgbig"
                  style={{ fontSize: "30px" }}
                ></i>
              </p>
              <p className="showmin" onClick={this.showmin}>
                <i
                  className="icon icon-imgmin"
                  style={{ fontSize: "30px" }}
                ></i>
              </p>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
