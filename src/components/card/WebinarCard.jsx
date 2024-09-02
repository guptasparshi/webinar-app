import React from "react";
import {
  Card,
  CardActions,
  CardHeader,
  CardContent,
  Typography,
  Button,
} from "@mui/material";

import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'; // For more advanced formatting

dayjs.extend(advancedFormat);

const WebinarCard = ({ cardDetails, onDelete, onEdit }) => {
  // Input date range
  const start = dayjs(`${cardDetails.startDate.trim()} ${cardDetails.startTime.trim()}`, 'D MMM YYYY hh:mm A')
  
  // Format date
  const formattedDate = start.format('dddd • MMMM D, h:mm A') + ' - ' + cardDetails.endTime;
  
  return (
    <Card
      sx={{ maxWidth: 450, padding: "20px", borderRadius: "24px", flexGrow: 1 }}
    >
      <CardHeader
        title={cardDetails.name}
        titleTypographyProps={{ fontSize: "1.5rem", color: "white" }}
        subheader={
          <>
            <span>{cardDetails.role}</span>
            <span style={{ display: "block" }}>{cardDetails.company}</span>
          </>
        }
        subheaderTypographyProps={{ color: "White" }}
        avatar={
          <img
            src={cardDetails.photoUrl}
            alt="dummy"
            height={100}
            width={100}
            style={{ borderRadius: "10px" }}
          />
        }
        sx={{
          backgroundColor: cardDetails.backgroundColor,
          display: "flex",
          flexDirection: "row-reverse",
          justifyContent: "center",
          borderRadius: "16px",
        }}
      />
      <CardContent>
        <Typography
          variant="body1"
          color={cardDetails.backgroundColor}
          fontWeight="600"
        >
          {cardDetails.topic}
        </Typography>
        <Typography variant="h6" color="black" fontWeight="600">
          {cardDetails.title.length > 34 ? `${cardDetails.title.substring(0, 34)}...` : cardDetails.title}
        </Typography>
        <Typography variant="body2" color="black">
          {formattedDate}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="contained"
          disableElevation={true}
          color="error"
          onClick={() => onDelete(cardDetails.id)}
          sx={{
            backgroundColor: "#F9E8E8",
            color: "#D14040",
            borderRadius: "24px",
            textTransform: "none",
            "&.MuiButton-root:hover": {
              backgroundColor: "pink",
            },
          }}
        >
          Delete
        </Button>
        <Button
          variant="text"
          color="primary"
          sx={{ textTransform: "none" }}
          onClick={() => onEdit(cardDetails)}
        >
          Edit
        </Button>
      </CardActions>
    </Card>
  );
};

export default WebinarCard;
