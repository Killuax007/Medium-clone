import { Link } from "react-router-dom";
interface BlogCardType {
  authorname: string;
  publishDate: string;
  title: string;
  content: string;
  id: number;
}
export const BlogCard = ({
  id,
  title,
  content,
  authorname,
  publishDate,
}: BlogCardType) => {
  return (
    <Link to={`/blog/${id}`}>
      <div className="pb-4 m-2 border-b">
        <div className="flex pb-2">
          <Avatar name={authorname} />
          <div className="pl-2 font-sm ">{authorname} </div>
          <div className="flex flex-col justify-center pl-1">
            <span className="pl-1 h-1 w-1 bg-slate-400 rounded-full justify-center"></span>
          </div>
          <div className="pl-2 font-thin text-slate-500">{publishDate} </div>
        </div>
        <div className="">
          <div className="font-semibold text-xl">{title}</div>
          <div className="font-thin text-md">
            {content.slice(0, 100) + "..."}
          </div>
          <div className="flex justify-between">
            <div className="inline-block font-thin text-sm text-slate-500 pt-4">{`${Math.ceil(
              content.length / 100
            )} minutes read`}</div>
            <div className="flex  justify-end mt-2">
              <div className="inline-block pr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width=".5"
                  stroke="currentColor"
                  className="size-5 hover:fill-green-600 "
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
                  className="size-5  hover:fill-green-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z"
                  />
                </svg>
              </div>
            </div>
          </div>
          {/* <hr className="bg-red" /> */}
        </div>
      </div>
    </Link>
  );
};

export function Avatar({
  name,
  size = "small",
}: {
  name: string;
  size?: string;
}) {
  return (
    <div
      className={`relative inline—flex items-center justify-center bg-gray-100 rounded-full ${
        size == "small" ? "w-6 h-6" : "w-10 h-10"
      }  overflow-hidden dark:bg-gray-600 `}
    >
      <span
        className={` ${
          size == "small" ? "text-xs" : "text-md"
        } flex justify-center ${
          size == "small" ? "p-1" : "p-2"
        }  cursor-pointer text-gray-600 dark:text-gray-300`}
      >
        {name[0]}
      </span>
    </div>
  );
}
