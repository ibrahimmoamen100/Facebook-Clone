import React, { Component } from "react";
import CreateComment from "./Sections/CreateComment";
import CommentPosted from "./Sections/CommentPosted";
import user from "../image/cc.jpg";
import video from "../image/Facebook.mp4";
import osama from "../image/ss.jpg";
import nas from "../image/nas.jpg";
import israel from "../image/israel.jpg";
import pala1 from "../image/pala1.jpg";
import pala2 from "../image/pala2.jpg";

import "./SectionMid.css";

export default class SectionMid extends Component {
  render() {
    return (
      <div className="container-mid">
        <CreateComment />
        <CommentPosted content="صلي علي الحبيب صلي الله عليه وسلم " />
        <CommentPosted content="❤ العشره الاواخر " video={video} />
        <CommentPosted
          content="إسرائيل هي الإرهاب الحقيقي  #Israel_is_real_terrorism
"
          img={israel}
        />
        <CommentPosted
          content=" فلسطيــن غداً ستكون حرةً إن شاء الله"
          img={pala1}
        />
        <CommentPosted content="البشمهندس اسامه ربنا يبارك له ❤ " img={osama} />
      </div>
    );
  }
}
