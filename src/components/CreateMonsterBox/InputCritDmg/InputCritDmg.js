import React from 'react'

export const InputCritDmg = (props) => (
    <td>
        <label htmlFor="critDmg">Crit Damage</label>
        <input type="number" name="critDmg" 
        onChange={(event) => props.setInnateStats({ monsterInnateStats: {...props.innateStats.monsterInnateStats, critDmg: event.target.value}})}/>
    </td>
)