import React from "react";
import { Button } from "@mui/material";

const CustomButton = ({ text, onClick = () => _ }) => {
  return (
    <Button
      variant="contained"
      onClick={onClick}
      sx={{
        padding: "12px 24px",
        borderRadius: "10px",
        textTransform: "none",
        fontSize: "1rem",
      }}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
