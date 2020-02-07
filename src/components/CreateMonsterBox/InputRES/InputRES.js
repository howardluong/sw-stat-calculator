import React from 'react'

export const InputRES = (props) => (
    <td>
        <label htmlFor="resistance">Resistance</label>
        <input type="number" name="resistance" 
        onChange={(event) => props.setInnateStats({ monsterInnateStats: {...props.innateStats.monsterInnateStats, resistance: event.target.value}})}/>
    </td>
)