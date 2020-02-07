import React from 'react'

export const InputHP = (props) => (
    <td>
        <label htmlFor="hp">HP</label>
        <input type="number" name="hp" 
        onChange={(event) => props.setInnateStats({ monsterInnateStats: {...props.innateStats.monsterInnateStats, hp: event.target.value}})}/>
    </td>
)
