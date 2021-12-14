import React from "react";
import img from '../Assets/img/post.jpg'

const PostCard = () => {
    return(
        <article className="postcard">
            <img src={img} alt="viriato" className="imagepost"></img>
            <div className="w-full h-full">
                <h3 className="title mt-2">
                    O futuro da humanidade na cibercultura
                </h3>
                <p className="blogtext mt-2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <div className="flex space-x-2 mt-2">
                    <p className="blogsup">14 de Dezembro, 2020</p>
                </div>
            </div>
        </article>
    );
};
export default PostCard;
