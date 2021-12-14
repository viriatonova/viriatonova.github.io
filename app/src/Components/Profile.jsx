import React from "react";
import avatar from '../Assets/img/eu.png'

const Profile = () => {
    return(
        <div className="asidecomponent">
            <div className="flex">
                <div className="w-full h-full">
                    <h3 className="title">Viraito Nova</h3>
                    <p className="blogsup mt-4">Escrevo sobre cibercultura, tecnologia e filosofia</p>
                    <ul className="flex space-x-4 mt-4">
                        <li><a href="/">email</a></li>
                        <li><a href="/">github</a></li>
                        <li><a href="/">linkDln</a></li>
                    </ul>
                </div>
                <img src={avatar} alt="viriato" className="avatar ml-4"></img>
            </div>
        </div>
    );
}
export default Profile