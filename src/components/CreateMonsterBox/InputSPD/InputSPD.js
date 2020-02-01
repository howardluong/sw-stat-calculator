import React from 'react'

export const InputSPD = (props) => (

    <td>
        <label for="spd">SPD</label>
        <input type="text" name="spd" onChange={(event) => props.setInnateStats({ monsterInnateStats: {spd: event.target.value}})}/>
        <button onClick={()=> props.setInnateStats({monsterInnateStats: {spd: 11}})}>Set New Stat</button>

        <button onClick={()=> console.log(props.innateStats.monsterInnateStats.spd)}>Log Stat</button>
    </td>
)