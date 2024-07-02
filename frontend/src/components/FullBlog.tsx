import { Blog } from "../hooks";
import { Appbar } from "./Appbar";
import { Avatar } from "./Blogcard";
import { Footer } from "./Footer";
import { useParams } from "react-router-dom";

export const FullBlog = ({ blog }: { blog: Blog }) => {
  const { id } = useParams();
  console.log(id);

  return (
    <div>
      <Appbar />
      <div className="flex sm:mb-24   justify-center ">
        <div className="grid sm:mb-12   md:grid-cols-12 px-10 w-full sm:h-max   max-w-screen-xl pt-12">
          <div className="md:col-span-8  ">
            <div className=" text-5xl font-extrabold">{blog.title}</div>
            <div className="text-slate-500 pt-2">Post on 2nd December 2023</div>
            <div className="flex  justify-end mt-2">
              <div className="inline-block pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width=".5"
                  stroke="currentColor"
                  className="size-5 hover:fill-purple-700 "
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </div>
              <div className="inline-block pr-1 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width=".5"
                  stroke="currentColor"
                  className="size-5  hover:fill-purple-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </div>
            </div>
            <div className="pt-4">{blog.content}</div>
          </div>
          <div className="md:col-span-4 mt-4 p-4">
            <div className="flex flex-col w-full">
              <div className="pr-4 flex flex-row justify-between ">
                <Avatar size="big" name={blog.author.name || "Anonymous"} />
                <div className=" inline-block w-5 mr-7">
                  <button
                    type="button"
                    className="inline-block bg-green-600 hover:bg-black  box-border rounded-full text-white font-semibold py-2 px-4 text-sm  mb-1 "
                  >
                    Follow
                  </button>{" "}
                </div>
              </div>

              <div>
                <div className="flex text-xl font-bold pt-2">
                  Written by {blog.author.name || "Anonymous"}
                </div>
                <div className="pt-2 text-sm text-slate-500">1k Followers</div>
                <div className="pt-2 text-slate-500">
                  Generative AI , Electronics with 10 years experience
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
