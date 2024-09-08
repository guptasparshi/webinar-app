import { useState } from "react";
import DummyImage from "../assests/dummy.png";
import theme from "../theme";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";


/**
 * Custom hook for managing webinar state and operations.
 * @returns {Object} Functions and state variables for webinar management.
 */

const initialWebinars = [
    {
      id: uuidv4(),
      name: "Matthew Martin",
      role: "Lead Front End Developer",
      company: "Google",
      photoUrl: DummyImage,
      backgroundColor: theme.palette.purple.main,
      topic: "Front End Engineering",
      title: "React and React Native",
      startDate: dayjs().format("DD MMM YYYY"),
      startTime: dayjs().format("hh:mm A"),
      endTime: dayjs().add(1, "hour").format("hh:mm A"),
    },
    {
      id: uuidv4(),
      name: "IK Expert",
      role: "Leadership Role at a FAANG",
      company: "Company",
      photoUrl: DummyImage,
      backgroundColor: theme.palette.pink.main,
      topic: "Front End Engineering",
      title: "How to get a job at FAANG",
      startDate: dayjs().format("DD MMM YYYY"),
      startTime: dayjs().format("hh:mm A"),
      endTime: dayjs().add(1, "hour").format("hh:mm A"),
    },
    {
      id: uuidv4(),
      name: "Matthew Martin",
      role: "Lead Front End Developer",
      company: "Google",
      photoUrl: DummyImage,
      backgroundColor: theme.palette.teal.main,
      topic: "Career",
      title: "Ask Me Anything",
      startDate: dayjs().format("DD MMM YYYY"),
      startTime: dayjs().format("hh:mm A"),
      endTime: dayjs().add(1, "hour").format("hh:mm A"),
    },
    {
      id: uuidv4(),
      name: "Matthew Martin",
      role: "Lead Front End Developer",
      company: "Google",
      photoUrl: DummyImage,
      backgroundColor: theme.palette.primary.main,
      topic: "Front End Engineering",
      title: "React and React Native",
      startDate: dayjs().format("DD MMM YYYY"),
      startTime: dayjs().format("hh:mm A"),
      endTime: dayjs().add(1, "hour").format("hh:mm A"),
    },
    {
      id: uuidv4(),
      name: "Matthew Martin",
      role: "Lead Front End Developer",
      company: "Google",
      photoUrl: DummyImage,
      backgroundColor: theme.palette.yellow.main,
      topic: "Front End Engineering",
      title: "React and React Native Long Name Constraint",
      startDate: dayjs().format("DD MMM YYYY"),
      startTime: dayjs().format("hh:mm A"),
      endTime: dayjs().add(1, "hour").format("hh:mm A"),
    },
    {
      id: uuidv4(),
      name: "Matthew Martin",
      role: "Lead Front End Developer",
      company: "Google",
      photoUrl: DummyImage,
      backgroundColor: theme.palette.green.main,
      topic: "Front End Engineering",
      title: "React and React Native",
      startDate: dayjs().format("DD MMM YYYY"),
      startTime: dayjs().format("hh:mm A"),
      endTime: dayjs().add(1, "hour").format("hh:mm A"),
    },
  ];

export const useWebinar = () => {
    // Local state for managing modal visibility and form data
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [topic, setTopic] = useState("");
    const [search, setSearch] = useState("");
    const [webinarData, setWebinarData] = useState(initialWebinars);
    const [updatedWebinarData, setupdatedWebinarData] = useState({});

    // Generate unique list of topics from webinar data
    const topics = [...new Set(webinarData?.map((item) => item.topic))];

    /**
     * Opens the modal and resets form data.
     */
    const handleOpenModal = () => setIsModalOpen(true);

    /**
     * Closes the modal and clears the updated data.
     */
    const handleCloseModal = () => {
        setIsModalOpen(false);
        setupdatedWebinarData({});
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
    const filteredCards = webinarData.filter(
        (item) =>
            (item.topic === topic || topic === "") &&
            searchInCardDetails(item, search)
    );

    /**
     * Deletes a webinar by its ID.
     * @param {number} id - The ID of the webinar to delete.
     */
    const handleWebinarDelete = (id) => {
        const newData = webinarData.filter((item) => item.id !== id);
        setWebinarData(newData);
    };

    /**
     * Opens the modal with data pre-filled for editing.
     * @param {Object} data - The data of the webinar to edit.
     */
    const handleWebinarEdit = (data) => {
        setIsModalOpen(true);
        setupdatedWebinarData(data);
    };

    /**
     * Handles adding or updating webinar data.
     * @param {Object} updatedWebinar - The updated webinar data.
     */
    const handleWebinarUpsert = (updatedWebinar) => {
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
        setupdatedWebinarData({});
        handleCloseModal();
    };

    return {
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
    };
}
