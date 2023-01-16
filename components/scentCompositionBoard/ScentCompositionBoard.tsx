import React, { useState } from "react"
import styles from './scentCompositionBoard.module.css'
import { ScentCompositionBoardList } from './ScentCompositionBoardList'

export const ScentCompositionBoard = (): JSX.Element => {
    const notes = ["top", "middle", "base"]

    return (
        <aside className={styles.aside}>
            <h2>Scent composition</h2>
            {
                notes.map(note => {
                    return(
                        <>
                            <h3>{ note } notes:</h3>
                            <ScentCompositionBoardList note = { note } />
                        </>
                    )
                })
            }
        </aside>
    )
}

