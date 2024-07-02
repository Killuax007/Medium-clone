import { useName } from "../hooks";
import { Avatar } from "./Blogcard";
import { Link, useNavigate } from "react-router-dom";

export function Appbar() {
  const navigate = useNavigate();
  const id = localStorage.getItem("id");
  const { name } = useName({ id: Number(id) });
  function Logout() {
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    navigate("/");
  }
  //

  return (
    <div className=" border-b border-black h-20 w-full">
      <div className="w-100vh  sm:mx-0">
        <div className=" flex justify-center flex-row ">
          <div className=" flex py-6 ml-7">
            <Link className="" rel="noopener follow" to="/blogs">
              <svg width="120" height="26" viewBox="0 0 120 26" fill="none">
                <path
                  d="M29.57 1.4h.04v-.28h-7.27L15.59 17.1 8.84 1.12H1v.28h.04c1.32.3 2 .76 2 2.38v19c0 1.61-.68 2.06-2 2.37H1v.28h5.31v-.28h-.03c-1.33-.3-2-.76-2-2.38V4.88l8.67 20.55h.5l8.92-21.12v18.93c-.12 1.28-.79 1.68-1.99 1.95l-.03.01v.28h9.26v-.28h-.04c-1.2-.28-1.89-.68-2-1.96V3.78c0-1.62.67-2.07 2-2.38zM33.8 14c.15-3.42 1.37-5.88 3.4-5.92.64 0 1.17.22 1.58.62.87.85 1.28 2.63 1.22 5.3h-6.2zm-.1.96h10.86v-.05c-.03-2.6-.78-4.64-2.23-6.03A7.3 7.3 0 0 0 37.28 7h-.04a7.32 7.32 0 0 0-5.75 2.78 10.4 10.4 0 0 0-2.1 6.12 12.39 12.39 0 0 0-.02.95c.11 5.08 2.84 9.15 7.69 9.15 4.25 0 6.73-3.13 7.35-7.34l-.31-.1c-1.09 2.25-3.04 3.62-5.26 3.46-3.02-.23-5.34-3.33-5.13-7.07m23.12 6.9c-.36.84-1.1 1.31-2.1 1.31s-1.9-.69-2.55-1.94a12.23 12.23 0 0 1-1.06-5.48c0-4.68 1.45-7.7 3.68-7.7.94 0 1.68.46 2.03 1.28v12.52zm7.2 3.33c-1.33-.32-2-.79-2-2.5V0l-8.07 2.4v.29h.05c1.12-.1 1.87.06 2.3.46.35.32.52.81.52 1.5v3.11A5.18 5.18 0 0 0 53.94 7c-2.33 0-4.45.99-5.99 2.78-1.6 1.87-2.44 4.42-2.44 7.38 0 5.29 2.58 8.84 6.43 8.84a5.09 5.09 0 0 0 4.89-3.34v2.82h7.23v-.3h-.03zm6.91-22.1c0-1.65-1.24-2.9-2.88-2.9a2.87 2.87 0 0 0-2.9 2.9c0 1.63 1.27 2.9 2.9 2.9a2.82 2.82 0 0 0 2.88-2.9zm1.9 22.1c-1.32-.32-2-.79-2-2.5V7.06l-7.24 2.1v.28h.05c1.56.15 1.99.69 1.99 2.53v13.52h7.24v-.3h-.04zm18.54 0c-1.33-.32-2-.79-2-2.5V7.06l-6.89 2.03v.28h.04c1.28.14 1.65.72 1.65 2.57v9.88a2.48 2.48 0 0 1-2.2 1.39c-1.57 0-2.43-1.07-2.43-3.02V7.06L72.3 9.15v.28h.05c1.56.14 1.99.69 1.99 2.53v8.36c0 .59.05 1.17.15 1.74l.13.57c.61 2.21 2.22 3.37 4.73 3.37 2.13 0 4-1.33 4.82-3.4v2.88h7.23v-.3h-.03zm28.1.3v-.3h-.03c-1.44-.34-2-.97-2-2.25V12.29c0-3.31-1.85-5.29-4.95-5.29a5.08 5.08 0 0 0-4.9 3.36C107.04 8.2 105.36 7 102.88 7a4.7 4.7 0 0 0-4.6 3.11V7.06l-7.24 2v.29h.04c1.55.14 2 .7 2 2.5v13.63h6.74v-.3h-.03c-1.15-.28-1.52-.77-1.52-2.04v-12.2c.3-.7.92-1.55 2.13-1.55 1.5 0 2.26 1.05 2.26 3.11v12.98h6.75v-.3h-.03c-1.15-.28-1.52-.77-1.52-2.04V12.29c0-.4-.03-.8-.1-1.2.33-.78.97-1.7 2.23-1.7 1.53 0 2.27 1.02 2.27 3.11v12.98h7.23z"
                  fill="#000"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="block flex-shrink flex-1 "></div>
          <div className="flex py-3  mt-1">
            <div className=" inline-block">
              <div className="block mr-2 py-1 ">
                <Link className="" rel="noopener follow" to="/publish">
                  <button className="inline-block bg-green-600 hover:bg-black  box-border rounded-full text-white font-semibold py-2 px-4 text-sm  mb-1 ">
                    New
                  </button>
                </Link>
              </div>
            </div>
            <div className=" inline-block">
              <div className="block mr-2 py-1">
                <button
                  onClick={Logout}
                  className="inline-block hover:bg-green-600 bg-black  box-border rounded-full text-white font-semibold py-2 px-4 text-sm  mb-1 "
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="inline-block">
              <div className="block mr-2 py-1 ">
                <Avatar name={String(name)} size="big" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
