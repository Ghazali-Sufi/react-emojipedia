import { emojipedia } from "./emojipedia";

export const emojiMeaning = emojipedia.map((emoji) => {
    return emoji.meaning.substring(0, 100);
})

console.log('meaning',emojiMeaning);
 