import { Box } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import WebinarCard from "../../components/card/WebinarCard";

/**
 * WebinarList component renders a list of webinar cards.
 * It uses a responsive grid layout to display the filtered webinars.
 *
 * @param {Array} filteredCard - The array of filtered webinar data to be displayed.
 * @param {function} handleDelete - Function to handle the deletion of a webinar.
 * @param {function} handleEdit - Function to handle editing of a webinar.
 */
const WebinarList = ({ filteredCard, handleDelete, handleEdit }) => {
  return (
    <Box p={4}>
      <Grid2
        container
        columns={{ xs: 4, sm: 8, md: 12 }} // Responsive column layout based on screen size
        gap={4}                            // Gap between grid items
        flexWrap="wrap"                    // Allows wrapping of items within the grid
      >
        {filteredCard.map((data) => (
          <WebinarCard
            cardDetails={data}             // Pass individual webinar data to the card component
            key={data.id}                  // Unique key for each webinar card
            onDelete={handleDelete}        // Pass delete handler to the card component
            onEdit={handleEdit}            // Pass edit handler to the card component
          />
        ))}
      </Grid2>
    </Box>
  );
};

export default WebinarList;
