import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store/Index'

const Tab = ({ tab, handleClick, isActiveTab, isFilterTab }) => {
    const snap = useSnapshot(state);
    const activeStyles = isFilterTab && isActiveTab ?
        { backgroundColor: snap.defaultColor, opacity: 0.5 } :
        { backgroundColor: 'transparent', opacity: 1 };
    return (
        <div key={tab.name} className={`tab-btn ${isFilterTab ? 'rounded-ful glassmorphism' : 'rounded-4'} `} onClick={handleClick} style={activeStyles}>
            <img src={tab.icon} className={`${isFilterTab ? 'w-2/3 h/23' : 'w-11/12 h-11/12 object-contain'}`} />

        </div>
    )
}

export default Tab
