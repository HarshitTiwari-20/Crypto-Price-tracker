import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "../Grids"; // Adjust the path as needed
import Lists from "../List";

export default function TabsComp({coins}) {
  const [value, setValue] = useState("Grid");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#3a80e9",
      },
    },
  });

  const style = {
    color: "var(--white)",
    "& .Mui-selected": {
      color: "var(--blue) !important",
    },
    fontFamily: "Inter,sans-serif",
    fontWeight: 600,
    textTransform: "capitalize",
  };


  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            onChange={handleChange}
            variant="fullWidth"
            aria-label="lab API tabs example"
            className="text-white"
          >
            <Tab label="Grid" value="Grid" sx={style} />
            <Tab label="List" value="List" sx={style} />
          </TabList>
        </Box>
        <TabPanel value="Grid">
          <div className="grid-flex flex justify-center items-center flex-wrap gap-[1rem] mb-[2rem] ">
            {coins.map((coin, i) => {
              return <Grid coin={coin} key={i} />;
            })}
          </div>
        </TabPanel>
        <TabPanel value="List">
          <tbody>
            <div>
              {coins.map((item, i) => {
                return <Lists coins={item} key={i} />;
              })}
            </div>
          </tbody>
        </TabPanel>
      </TabContext>
    </ThemeProvider>
  );
}
