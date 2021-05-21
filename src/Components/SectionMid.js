import React, { Component } from "react";
import CreateComment from "./Sections/CreateComment";
import CommentPosted from "./Sections/CommentPosted";
import user from "../image/my.jpg";
import video from "../image/facebook.mp4";
import "./SectionMid.css";

export default class SectionMid extends Component {
  render() {
    return (
      <div className="container-mid">
        <CreateComment />
        <CommentPosted content="صلي علي محمد صلي الله عليه وسلم " />

        <CommentPosted
          content="FACEBOOK CLONE
"
          video={video}
        />
        <CommentPosted
          content=" و مهما دارت الدنيا ,, حتما ستحن لوطنك الحقيقي  "
          img={user}
        />
      </div>
    );
  }
}
