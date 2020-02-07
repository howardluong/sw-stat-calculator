import React from 'react'

export const InputATK = (props) => (
    <td>
        <label htmlFor="atk">ATK</label>
        <input type="number" name="atk" 
        onChange={(event) => props.setInnateStats({ monsterInnateStats: {...props.innateStats.monsterInnateStats, atk: event.target.value}})}/>
    </td>
)