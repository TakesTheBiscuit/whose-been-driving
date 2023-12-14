import { IconButton, ListItem, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import React from "react";

function DateInstance({ dateI, removeDate }) {
 
  function handleRemoveClick() {
    removeDate(dateI.id);
  }

  return (
    <ListItem style={{ display: "flex" }}>
      <Typography
        variant="body1"
      >
        {dateI.when ? dateI.when : '?'}
      </Typography>
      <IconButton onClick={handleRemoveClick}>
        <CloseIcon />
      </IconButton>
    </ListItem>
  );
}

export default DateInstance;