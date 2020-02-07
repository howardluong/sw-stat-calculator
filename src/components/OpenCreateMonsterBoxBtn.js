import React from 'react';


export const OpenCreateMonsterBoxBtn = (props) => (
    <div>
        <button className="appButton" onClick={() => props.setIsCreateMonsterBoxOpen(true)}>
            Add Monster
        </button>
    </div>
)
