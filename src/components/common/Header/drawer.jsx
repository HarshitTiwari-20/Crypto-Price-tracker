import { useState } from "react";
import { Link } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
//import Button from "@mui/material/Button";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";


export default function AnchorTemporaryDrawer() {
  const [Open, setOpen] = useState(false);



  return (
    <div className="md:hidden  bg-black h-1 p-px-3.5">
      <IconButton onClick={() => setOpen(true)}>
        <MenuRoundedIcon className="text-gray-200 "></MenuRoundedIcon>
      </IconButton>

      <div className="bg-black ">
        <Drawer anchor={"right"} open={Open} onClose={() => setOpen(false)}>
          <div className="flex flex-col space-y-15 items-center bg-gray-900 p-10 w-full h-full">
            <span>
              <Link to="/">
                {/* mereko ye className=" text-gray-500 hover:text-white" bar bar nhi likhna , avi ke liye lagaya hu baad me update hoga */}
                <span className=" text-white-500 hover:bg-gray-800 bg-black sm:hidden text-xl py-4 px-6 rounded-lg border-2 border-transparent transition-all duration-300">
                  Home
                </span>
              </Link>
            </span>
            <span>
              <Link to="/watchlist">
                <span className=" text-white-500 hover:bg-gray-800 bg-black sm:hidden text-xl py-4 px-6 rounded-lg border-2 border-transparent transition-all duration-300">
                  Watchlist
                </span>
              </Link>
            </span>
            <span>
              <Link to="/compare">
                <span className=" text-white-500 hover:bg-gray-800 bg-black  sm:hidden text-xl py-4 px-1  rounded-lg border-2 border-transparent transition-all duration-300">
                  Compare
                </span>
              </Link>
            </span>
            <span>
              <Link to="/dashboard">
                <span className=" text-white-500 hover:bg-gray-800 bg-blue-500  sm:hidden text-xl py-4 px-1  rounded-lg border-2 border-transparent transition-all duration-300">
                  Dashboard
                </span>
              </Link>
            </span>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

