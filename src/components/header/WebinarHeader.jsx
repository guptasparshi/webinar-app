import { Box, Typography } from "@mui/material";
import CustomButton from "../button/CustomButton";
import WebinarModal from "../modal/WebinarModal";

/**
 * WebinarHeader component displays the header for the webinar page.
 * It includes the title and a button to add a new webinar.
 *
 * @param {boolean} isModalOpen - Boolean flag to control the modal's open state.
 * @param {function} handleOpenModal - Function to handle the opening of the modal.
 * @param {function} handleCloseModal - Function to handle the closing of the modal.
 * @param {function} handleWebinarUpsert - Function to handle the submission of webinar data.
 * @param {object} updatedData - Data to pre-populate the modal form for editing.
 */
const WebinarHeader = ({ isModalOpen, handleOpenModal, handleCloseModal, handleWebinarUpsert, updatedData }) => {
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
        <CustomButton onClick={handleOpenModal} text="Add Webinar" />

        {/* Modal for adding/editing a webinar */}
        <WebinarModal
          isModalOpen={isModalOpen}
          onClose={handleCloseModal}
          upsertWebinar={handleWebinarUpsert}
          updatedData={updatedData}
        />
      </Box>
    </>
  );
};

export default WebinarHeader;
