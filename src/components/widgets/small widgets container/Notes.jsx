import React, { useState } from "react";
import notesCss from "./Notes.module.css";
const Notes = () => {
  const [note, setNote] = useState(() => {
    const storedNotes = localStorage.getItem("notes");
    return storedNotes ? JSON.parse(storedNotes).notes : "";
  });
  function handleNoteChange(e) {
    localStorage.setItem("notes", JSON.stringify({ notes: e.target.value }));
    setNote(e.target.value);
  }
  return (
    <div className={notesCss.notes}>
      <div className={notesCss.head}>All notes</div>
      <textarea
        name="notes"
        value={note}
        className={notesCss.textArea}
        onChange={handleNoteChange}
      />
    </div>
  );
};

export default Notes;
