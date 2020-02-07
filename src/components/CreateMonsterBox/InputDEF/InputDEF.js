import React from 'react'

export const InputDEF = (props) =>(
    <td>
        <label htmlFor="def">DEF</label>
        <input type="number" name="def" 
        onChange={(event) => props.setInnateStats({ monsterInnateStats: {...props.innateStats.monsterInnateStats, def: event.target.value}})}/>
    </td>
)
