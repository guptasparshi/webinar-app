import { Modal, Box, Typography, Divider } from "@mui/material";
import WebinarForm from "../form/WebinarForm";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import CloseIcon from "@mui/icons-material/Close";

/**
 * WebinarModal component renders a modal dialog to create or update a webinar.
 * It includes a form and a close button.
 *
 * @param {boolean} open - Determines if the modal is open or closed.
 * @param {function} onClose - Function to close the modal.
 * @param {function} addWebinar - Function to add or update a webinar.
 * @param {object} updatedData - Data of the webinar being edited, if applicable.
 */
const WebinarModal = ({ open, onClose, addWebinar, updatedData }) => {
  // Styles for the modal container
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "40em",
    height: "39em",
    bgcolor: "background.paper",
    boxShadow: 24,
    borderRadius: 4,
  };

  /**
   * Handles form submission by logging the form data and passing it to the addWebinar function.
   *
   * @param {object} formData - The data submitted from the form.
   */
  const handleFormSubmit = (formData) => {
    addWebinar(formData);
  };

  return (
    <Modal open={open} onClose={onClose} sx={{ backdropFilter: "blur(5px)" }}>
      <Box sx={style}>
        {/* Header section with title and close icon */}
        <Grid2
          container
          spacing={2}
          flexDirection="row"
          justifyContent="space-between"
          marginX={3}
          marginY={2}
        >
          <Typography variant="h6" component="h2">
            Create Webinar
          </Typography>
          <CloseIcon onClick={onClose} sx={{ cursor: "pointer" }} />
        </Grid2>
        
        {/* Divider between header and form */}
        <Divider sx={{ marginY: "12px" }} />
        
        {/* Form component for creating or editing a webinar */}
        <WebinarForm
          onClose={onClose}
          onSubmit={handleFormSubmit}
          updatedData={updatedData}
        />
      </Box>
    </Modal>
  );
};

export default WebinarModal;
