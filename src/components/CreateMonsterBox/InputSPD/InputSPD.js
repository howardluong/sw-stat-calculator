import React from 'react'

export const InputSPD = (props) => (

    <td>
        <label htmlFor="spd">SPD</label>
        <input type="number" name="spd" 
        onChange={(event) => props.setInnateStats({ monsterInnateStats: {...props.innateStats.monsterInnateStats, spd: event.target.value}})}/>
    </td>
)