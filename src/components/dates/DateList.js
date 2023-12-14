import { List } from "@material-ui/core";
import React from "react";
import DateInstance from "./DateInstance";
import DateForm from "./DateForm";
import HeaderBar from '../HeaderBar';

function DateList({ dates, removeDate, addDate }) {
  return (
    <>
    <DateForm addDate={addDate} />
    <List>
      {dates.map(dateI => (
        <DateInstance
          key={dateI.id}
          dateI={dateI}
          removeDate={removeDate}
        />
      ))}
    </List>
    </>
  );
}

export default DateList;