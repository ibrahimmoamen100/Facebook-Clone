import React, { Component } from "react";
import CreateComment from "./Sections/CreateComment";
import CommentPosted from "./Sections/CommentPosted";
import user from "../image/cc.jpg";
import video from "../image/Facebook.mp4";
import osama from "../image/ss.jpg";
import nas from "../image/nas.jpg";
import israel from "../image/israel.jpg";
import pala1 from "../image/pala1.jpg";
import saba from "../image/saba.png";
import asd from "../image/asd.mp4";

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
          content=" حسبنا الله ونعم الوكيل في الصهاينه اللهم كما قتلو انبيائك و دنسو المسجد الاقصي اللهم انتقم منهم اشد انتقام"
          video={asd}
        />

        <CommentPosted
          content=" يتم تجريف المستوطنين الفلسطينيين الان من المسجد الاقصي  حسبنا الله ونعم الوكيل "
          link="https://www.facebook.com/abohamzaalhasanat/videos/2410885795710646"
          img={saba}
        />
      </div>
    );
  }
}
