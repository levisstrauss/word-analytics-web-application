import React from 'react'

export const Stats = ({ stats }) => {
    const { numberOfWords, numberOfCharacters, instagramCharactersLeft, facebookCharactersLeft} = stats
    return (
        <section className="stats">
            <Stat number={ numberOfWords } label="Words"/>
            <Stat number={ numberOfCharacters } label="Characters"/>
            <Stat number={ instagramCharactersLeft } label="Instagram"/>
            <Stat number={ facebookCharactersLeft} label="Facebook"/>
        </section>
    )
}


// Reusable components
function Stat({number, label}) {
    return (
        <section className="stat">
            <span className={`stat__number ${ number < 0 ? "stat__number--limit" : ""}`}>
                {number}
            </span>
            <h2 className="second-heading">{label}</h2>
        </section>
    )
}
