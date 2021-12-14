import React from "react";
import PostCard from "../Components/PostCard";
import Profile from "../Components/Profile";

const Home = () => {
    return(
        <main className="w-full h-full flex sm:container mx-2 sm:mx-auto sm:px-20">
            <section className="homesection">
                <PostCard />
            </section>
            <aside className="homeaside" >
                <Profile />
            </aside>
        </main>
    );
}
export default Home