import { createSlice } from "@reduxjs/toolkit";
import DummyImage from "../assests/dummy.png";
import theme from "../theme";
import dayjs from "dayjs";
import { v4 as uuidv4 } from "uuid";

// Initial webinars data with unique identifiers
const webinars = [
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
    title: "React and React Native Long Name C...",
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

// Create a slice of the Redux store for managing webinars
const webinarSlice = createSlice({
  name: "webinar",
  initialState: {
    webinars,
  },
  reducers: {
     /**
     * Add a webinar in the state.
     * @param {Object} state - The current state of the slice.
     * @param {Object} action - The action object containing the new webinar data.
     */
    setWebinars: (state, action) => {
      state.webinars = [...state.webinars, action.payload];
    },
  },
});

// Export the action creator and reducer for use in the application
export const { setWebinars } = webinarSlice.actions;
export default webinarSlice.reducer;
