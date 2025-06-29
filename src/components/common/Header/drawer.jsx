import { useState } from "react";

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
        <Drawer anchor={"right"} open={Open} onClose={() => setOpen(false)} >
          <div className="flex flex-col space-y-15 items-center bg-gray-900 p-10 w-full h-full">
            <span>
              <a href="/">
                {/* mereko ye className=" text-gray-500 hover:text-white" bar bar nhi likhna , avi ke liye lagaya hu baad me update hoga */}
                <span className=" text-white-500 hover:bg-gray-800 bg-black sm:hidden text-xl py-4 px-6 rounded-lg border-2 border-transparent transition-all duration-300">
                  Home
                </span>
              </a>
            </span>
            <span>
              <a href="/">
                <span className=" text-white-500 hover:bg-gray-800 bg-black sm:hidden text-xl py-4 px-6 rounded-lg border-2 border-transparent transition-all duration-300">
                  Watchlist
                </span>
              </a>
            </span>
            <span>
              <a href="/">
                <span className=" text-white-500 hover:bg-gray-800 bg-black  sm:hidden text-xl py-4 px-6 rounded-lg border-2 border-transparent transition-all duration-300">
                  Market
                </span>
              </a>
            </span>
          </div>
        </Drawer>
      </div>
    </div>
  );
}

