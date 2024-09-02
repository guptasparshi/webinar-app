import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setWebinars } from "../reducer/webinarReducer";

/**
 * Custom hook for managing webinar state and operations.
 * @returns {Object} Functions and state variables for webinar management.
 */
export const useWebinar = () => {
    // Local state for managing modal visibility and form data
    const [open, setOpen] = useState(false);
    const [topic, setTopic] = useState("");
    const [search, setSearch] = useState("");
    const [webinarData, setWebinarData] = useState(useSelector((state) => state.webinar.webinars));
    const [updatedData, setUpdatedData] = useState({});
    
    // Redux dispatch function for updating global state
    const dispatch = useDispatch();

    // Generate unique list of topics from webinar data
    const topics = [...new Set(webinarData?.map((item) => item.topic))];

    /**
     * Opens the modal and resets form data.
     */
    const handleOpen = () => setOpen(true);

    /**
     * Closes the modal and clears the updated data.
     */
    const handleClose = () => {
        setOpen(false);
        setUpdatedData({});
    };

    /**
     * Checks if any value in the card details contains the search term.
     * @param {Object} cardDetails - The details of the card.
     * @param {string} searchTerm - The term to search for.
     * @returns {boolean} True if search term is found, otherwise false.
     */
    const searchInCardDetails = (cardDetails, searchTerm) => {
        const searchLower = searchTerm.toLowerCase();
        return Object.keys(cardDetails).some((key) => {
            if (key === "id") return false; // Skip the id field
            const value = cardDetails[key];
            return (
                typeof value === "string" && value.toLowerCase().includes(searchLower)
            );
        });
    };

    // Filter webinars based on selected topic and search term
    const filteredCard = webinarData.filter(
        (item) =>
            (item.topic === topic || topic === "") &&
            searchInCardDetails(item, search)
    );

    /**
     * Deletes a webinar by its ID.
     * @param {number} id - The ID of the webinar to delete.
     */
    const handleDelete = (id) => {
        const newData = webinarData.filter((item) => item.id !== id);
        setWebinarData(newData);
    };

    /**
     * Opens the modal with data pre-filled for editing.
     * @param {Object} data - The data of the webinar to edit.
     */
    const handleEdit = (data) => {
        setOpen(true);
        setUpdatedData(data);
    };

    /**
     * Handles adding or updating webinar data.
     * @param {Object} updatedWebinar - The updated webinar data.
     */
    const handleWebinarData = (updatedWebinar) => {
        const checkWebinar = webinarData.find(
            (webinar) => webinar.id === updatedWebinar.id
        );

        let updatedWebinarData;

        if (checkWebinar) {
            // Update existing webinar
            updatedWebinarData = webinarData.map((webinar) =>
                webinar.id === updatedWebinar.id ? updatedWebinar : webinar
            );
        } else {
            // Add new webinar
            updatedWebinarData = [...webinarData, updatedWebinar];
        }

        setWebinarData(updatedWebinarData);
        dispatch(setWebinars(updatedWebinarData));
        setUpdatedData({});
        handleClose();
    };

    return {
        handleOpen,
        open,
        handleClose,
        handleWebinarData,
        updatedData,
        search,
        setSearch,
        topics,
        topic,
        setTopic,
        filteredCard,
        handleDelete,
        handleEdit
    };
}
