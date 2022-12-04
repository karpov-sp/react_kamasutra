import React from "react";
import classes from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return <div>
        My posts
        <div>
            New post
            <div>
                <textarea></textarea>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>
        <div className={classes.posts}>
            <Post message='Где такая красота?' count='5' />
            <Post message='Где-то в Германии' count='15' />
        </div>
    </div>

}

export default MyPosts;