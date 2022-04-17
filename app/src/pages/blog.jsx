import Navbar from '../components/header';
import Blog from '../components/blog';
import BlogSide from '../components/blogSide';
import Footer from '../components/footer';

export default function Home() {
    return (
        <main className="home-wraper">
            <Navbar />
            <div className="w-full h-full py-4 flex justify-center items-center">
                <Blog />
                <BlogSide />
            </div>
            <Footer />
        </main>
  )
}
