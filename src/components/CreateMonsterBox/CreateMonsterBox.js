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
    return (
        <div id="createMonsterBoxContainer">
            <div>
                <button className="closeMonsterBox" onClick={() => props.setIsCreateMonsterBoxOpen(false)}>X</button>
            </div>
            <p>You can create a monster by manually typing in their stats</p>
            <table>
                <tbody>
                    <tr>
                        <InputSPD {...props}/>
                        <InputHP/>
                    </tr>
                    <tr>
                        <InputATK/>
                        <InputDEF/>
                    </tr>
                    <tr>
                        <InputCritRate/>
                        <InputCritDmg/>
                    </tr>
                    <tr>
                        <InputACC/>
                        <InputRES/>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
