import React from "react";
import { Entry } from "./Entry";
import { emojipedia } from "../emojipedia";

function createEmoji(emoji) {
  return  <Entry 
    key={emoji.id}
    emoji={emoji.emoji}
    name={emoji.name}
    meaning={emoji.meaning}
    />
}

export function App() {
  return (
    emojipedia.map(createEmoji)
  )
}

