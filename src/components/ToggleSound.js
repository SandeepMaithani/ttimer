import React from 'react';
import './ToggleSound.css';

const ToggleSound = ({ sound, toggleSound }) => {
    return (
        <button
            className={`ToggleSound ${sound && 'active'}`}
            onClick={toggleSound}
            title={sound ? 'Disable Sound' : 'Enable Sound'}
        >
            <i className={`fa fa-volume-${sound ? 'up' : 'mute'}`} />
        </button>
    );
};

export default ToggleSound;