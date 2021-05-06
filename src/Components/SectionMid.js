import React, { Component } from "react";
import CreateComment from "./Sections/CreateComment";
import CommentPosted from "./Sections/CommentPosted";
import user from "../image/cc.jpg";
import video from "../image/Facebook.mp4";
import osama from "../image/ss.jpg";
import nas from "../image/nas.jpg";

import "./SectionMid.css";

export default class SectionMid extends Component {
  render() {
    return (
      <div className="container-mid">
        <CreateComment />
        <CommentPosted content="صلي علي الحبيب صلي الله عليه وسلم " />
        <CommentPosted content="❤ العشره الاواخر " video={video} />
        <CommentPosted
          content="
الخلوق ❤
        
          "
          img={osama}
        />
        <CommentPosted content="" img={nas} />
      </div>
    );
  }
}

console.log("hello");
