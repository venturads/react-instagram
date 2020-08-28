import React from  'react';
import Image1 from '../images/pug1.jpg';
import '../styles/Post.css';
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
    return (
        <div className="post">
            <div className="post_header">
                <Avatar
                    className="post_avatar"
                    alt='Venturads'
                    src={Image1}
                />
                <h3>{username}</h3>
            </div>
                <img className="post_image" src={imageUrl} />

                <h4 className="post_text"><strong>{username}</strong> {caption}</h4>
        </div>
    )
}

export default Post;