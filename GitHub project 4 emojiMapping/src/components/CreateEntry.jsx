import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./Entry";

function CreateEntry(emojipedia) {
    return (
      <Entry
        key={emojipedia.id}
        emoji={emojipedia.emoji}
        name={emojipedia.name}
        meaning={emojipedia.meaning}
      />
    );
  }

  export default CreateEntry;