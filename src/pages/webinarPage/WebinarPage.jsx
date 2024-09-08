import { Box, Divider } from "@mui/material";
import WebinarFilter from "../../components/filter/WebinarFilter";
import { useWebinar } from "../../hooks/useWebinar";
import WebinarHeader from "../../components/header/WebinarHeader";
import WebinarList from "../../components/list/WebinarList";

/**
 * WebinarPage component renders the entire webinar management interface.
 * It includes a header, filters, and a list of webinars.
 */
const WebinarPage = () => {
  // Destructure all necessary functions and state variables from the custom useWebinar hook
  const {
    handleOpenModal,
    isModalOpen,
    handleCloseModal,
    handleWebinarUpsert,
    updatedWebinarData,
    search,
    setSearch,
    topics,
    topic,
    setTopic,
    filteredCards,
    handleWebinarDelete,
    handleWebinarEdit
  } = useWebinar();
  
  return (
    <>
      {/* Webinar header that includes the modal to add or edit a webinar */}
      <WebinarHeader
        isModalOpen={isModalOpen}
        handleOpenModal={handleOpenModal}
        handleCloseModal={handleCloseModal}
        handleWebinarUpsert={handleWebinarUpsert}
        updatedWebinarData={updatedWebinarData}
      />
      
      {/* Divider separates the header from the content below */}
      <Divider sx={{ marginLeft: "32px" }} />
      
      {/* Box container for the filter components */}
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        gap={4}
        p={4}
      >
        {/* Search filter for webinars */}
        <WebinarFilter
          type="search"
          placeholder="Search for webinar"
          item={search}
          setItem={setSearch}
        />
        
        {/* Dropdown filter for selecting webinar topics */}
        <WebinarFilter
          type="select"
          label="Topic"
          options={topics}
          item={topic}
          setItem={setTopic}
        />
      </Box>
      
      {/* List of webinars that match the search and topic filters */}
      <WebinarList
        filteredCards={filteredCards}
        handleWebinarDelete={handleWebinarDelete}
        handleWebinarEdit={handleWebinarEdit}
      />
    </>
  );
};

export default WebinarPage;
