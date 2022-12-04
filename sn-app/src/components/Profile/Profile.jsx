import React from "react";
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={classes.content}>
        <div>
            <img src='https://cdn.unifiedcommerce.com/content/product/large/628136654449-L.jpg'/>
        </div>
        <div>
            ava+description
        </div>
        <MyPosts />
    </div>
}

export default Profile;