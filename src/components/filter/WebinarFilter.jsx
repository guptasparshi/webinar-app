import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import {
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  TextField,
  InputAdornment,
} from "@mui/material";

/**
 * WebinarFilter component allows filtering webinars based on either a dropdown or text input.
 *
 * @param {string} type - The type of input. Can be "text" for a text field or "select" for a dropdown menu.
 * @param {Array} options - Options to display in the dropdown menu (only applicable if `type` is "select").
 * @param {string} label - The label for the input field.
 * @param {string} item - The current value of the input field.
 * @param {function} setItem - Function to update the value of the input field.
 * @returns {JSX.Element} - Rendered input field based on the `type` prop.
 */
export default function WebinarFilter({
  type = "text",
  options = [],
  label = "",
  item = "",
  setItem = () => _, // Default function does nothing
}) {
  // Handler for input value change
  const handleChange = (event) => {
    setItem(event.target.value); // Update the value using setItem
  };

  // Render a dropdown menu if type is "select"
  if (type === "select") {
    return (
      <FormControl sx={{ width: "25%" }}>
        <InputLabel id="custom-input-label">{label}</InputLabel>
        <Select
          labelId="custom-input-label"
          id="custom-select"
          value={item}
          label={label}
          placeholder="Topic"
          onChange={handleChange}
          sx={{
            borderRadius: "10px",
            borderColor: "#E3E7EC",
            "& .MuiOutlinedInput-input": { padding: "12px" },
          }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {options.map((topic, index) => (
            <MenuItem key={index} value={topic}>
              {topic}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    );
  } else {
    // Render a text field if type is not "select"
    return (
      <TextField
        type={type}
        variant="outlined"
        placeholder="Search for webinar"
        value={item}
        onChange={handleChange}
        sx={{
          width: "30%",
          "& .MuiOutlinedInput-root": {
            borderRadius: "10px",
            borderColor: "#E3E7EC",
          },
          "& .MuiOutlinedInput-input": { padding: "12px" },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    );
  }
}
