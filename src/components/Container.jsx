import React, {useState} from 'react'
import {Stats} from "./Stats.jsx";
import {Textarea} from "./Textarea.jsx";
import {FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS} from "../lib/constants.js";

export const Container = () => {
    const [text, setText] = useState('');

    // This is to restraint the number of props to pass
    const stats = {
        numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
        numberOfCharacters:  text.length,
        instagramCharactersLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
        facebookCharactersLeft: FACEBOOK_MAX_CHARACTERS - text.length,
    }

    return (
        <main className="container">
            <Textarea text={text} setText={setText}  />
            <Stats stats={stats} />
        </main>
    )
}
