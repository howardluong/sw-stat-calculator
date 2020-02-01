import React from 'react';


export const CreateMonsterBtn = (props) => (
    <div>
        <button className="appButton" onClick={() => props.setIsCreateMonsterBoxOpen(true)}>
            Add Monster
        </button>
    </div>
)
