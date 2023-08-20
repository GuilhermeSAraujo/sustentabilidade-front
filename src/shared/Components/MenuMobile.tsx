import { Box, Typography, AppBar } from "@mui/material";
import { useEffect } from "react";

const MenuMobile = ({
  menuIsVisible,
  setMenuIsVisible,
}: {
  menuIsVisible: boolean;
  setMenuIsVisible: (v: boolean) => void;
}) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsVisible ? "hidden" : "auto";
  }, [menuIsVisible]);

  return (
    <Box sx={{ display: menuIsVisible ? "flex" : "none" }}>
      <Typography>Menu</Typography>
    </Box>
  );
};

export default MenuMobile;
