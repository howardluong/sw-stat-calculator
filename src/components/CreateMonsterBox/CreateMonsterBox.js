import React from 'react';
import './CreateMonsterBox.css';
import { InputATK } from './InputATK/InputATK';
import { InputHP } from './InputHP/InputHP';
import { InputDEF } from './InputDEF/InputDEF';
import { InputSPD } from './InputSPD/InputSPD';
import { InputCritRate } from './InputCritRate/InputCritRate';
import { InputCritDmg } from './InputCritDmg/InputCritDmg';
import { InputACC } from './InputACC/InputACC';
import { InputRES } from './InputRES/InputRES';

export const CreateMonsterBox = (props) => {
    const logCurrentStats = (event) => {
        event.preventDefault();
        console.log(props.innateStats.monsterInnateStats)
    }

    
    return (
        <div id="createMonsterBoxContainer">
            <div>
                <button className="closeMonsterBox" onClick={() => props.setIsCreateMonsterBoxOpen(false)}>X</button>
            </div>
            <p>You can create a monster by manually typing in their stats</p>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <InputSPD {...props}/>
                            <InputHP {...props}/>
                        </tr>
                        <tr>
                            <InputATK {...props}/>
                            <InputDEF {...props}/>
                        </tr>
                        <tr>
                            <InputCritRate {...props}/>
                            <InputCritDmg {...props}/>
                        </tr>
                        <tr>
                            <InputACC {...props}/>
                            <InputRES {...props}/>
                        </tr>
                    </tbody>
                </table>
                <button onClick={logCurrentStats}>Log Current Stats</button>
            </form>
        </div>
    )
}
