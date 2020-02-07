import React from 'react'

export const InputCritRate = (props) => (
    <td>
        <label htmlFor="critRate">Crit Rate</label>
        <input type="number" name="critRate" 
        onChange={(event) => props.setInnateStats({ monsterInnateStats: {...props.innateStats.monsterInnateStats, critRate: event.target.value}})}/>
    </td>
)