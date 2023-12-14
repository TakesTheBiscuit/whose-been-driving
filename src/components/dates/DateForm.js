import { Button, TextField } from "@material-ui/core";
import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import 'date-fns';

function DateForm({ addDate }) {
  const [dateI, setDateI] = useState({
    id: "",
    when: ""
  });


  function handleTaskDateChange(e) {
    // e.target.value contains new input from onChange
    // event for input elements
    setDateI({ ...dateI, when: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault(); // prevents browser refresh
    // trim() gets rid of string whitespace
    if (dateI.when.trim()) {
      addDate({ ...dateI, id: uuid() });
      setDateI({ ...dateI, when: ""});
    }
  }

  return (
    <form className="date-form" onSubmit={handleSubmit} style={{marginTop:40}}>

      <TextField
        label="When"
        name="when"
        value={dateI.when}
        onChange={handleTaskDateChange}
        type="date"
        defaultValue="2023-12-14"
        InputLabelProps={{
            shrink: true,
          }}
      />
     <Button type="submit" variant="outlined" color="primary" style={{padding:0, marginLeft: 10}}>ADD DATE</Button>
    </form>
  );
}

export default DateForm;