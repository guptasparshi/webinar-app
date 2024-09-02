import { Box, Typography } from "@mui/material";
import CustomButton from "../button/CustomButton";
import WebinarModal from "../modal/WebinarModal";

/**
 * WebinarHeader component displays the header for the webinar page.
 * It includes the title and a button to add a new webinar.
 *
 * @param {boolean} open - Boolean flag to control the modal's open state.
 * @param {function} handleOpen - Function to handle the opening of the modal.
 * @param {function} handleClose - Function to handle the closing of the modal.
 * @param {function} handleWebinarData - Function to handle the submission of webinar data.
 * @param {object} updatedData - Data to pre-populate the modal form for editing.
 */
const WebinarHeader = ({ open, handleOpen, handleClose, handleWebinarData, updatedData }) => {
  return (
    <>
      {/* Header container with flexible layout */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap={4}
        p={4}
        sx={{
            position: 'sticky',
            top: 0,
            backgroundColor: 'white',
            zIndex: 1000,
          }}
      >
        {/* Webinar title */}
        <Typography variant="h5" fontWeight="700">
          Webinar
        </Typography>

        {/* Button to trigger the opening of the webinar modal */}
        <CustomButton onClick={handleOpen} text="Add Webinar" />

        {/* Modal for adding/editing a webinar */}
        <WebinarModal
          open={open}
          onClose={handleClose}
          addWebinar={handleWebinarData}
          updatedData={updatedData}
        />
      </Box>
    </>
  );
};

export default WebinarHeader;
