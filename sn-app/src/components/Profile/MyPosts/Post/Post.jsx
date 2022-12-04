import React from "react";
import classes from './Post.module.css';

const Post = (props) => {
    return <div className={classes.item}>
           <img src="https://a.d-cd.net/kAAAAgIEteA-960.jpg" alt="avatar"/>
           <div className={classes.post}>
               { props.message }
               <span>Like!</span>
               { props.count }
           </div>
           </div>
}

export default Post;