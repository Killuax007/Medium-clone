import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/Blogcard";
import { BlogSkeleton } from "../components/BlogSkeleton";
import { useBlogs } from "../hooks";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { Footer } from "../components/Footer";
export function Blogs() {
  const navigate = useNavigate();
  const { loading, blogs } = useBlogs();
  const token = localStorage.getItem("token");
  useEffect(() => {
    if (!token) {
      navigate("/");
      toast.error("Access denied Please Signup ");
    }
  }, [token, navigate]);
  if (loading) {
    return (
      <div>
        <Appbar />
        <div className="flex justify-center">
          <div>
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
            <BlogSkeleton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <>
      {token ? (
        <div>
          <Appbar />
          <div className="flex justify-center ">
            <div className="max-w-xl">
              <div>
                {blogs.map((blog) => (
                  <BlogCard
                    key={blog.id}
                    id={blog.id}
                    authorname={blog.author.name || "Anonymous"}
                    title={blog.title}
                    content={blog.content}
                    publishDate={"2nd Feb 2024" || ""}
                  />
                ))}
              </div>
            </div>
          </div>
          <Footer />
        </div>
      ) : null}
    </>
  );
}

// https://miro.medium.com/v2/format:webp/4*SdjkdS98aKH76I8eD0_qjw.png
// https://miro.medium.com/v2/1*m-R_BkNf1Qjr1YbyOIJY2w.png
