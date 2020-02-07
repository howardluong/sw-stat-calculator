import React from 'react'

export const InputACC = (props) => (
    <td>
        <label htmlFor="accuracy">Accuracy</label>
        <input type="number" name="accuracy" 
        onChange={(event) => props.setInnateStats({ monsterInnateStats: {...props.innateStats.monsterInnateStats, acc: event.target.value}})}/>
    </td>
)