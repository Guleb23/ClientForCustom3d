import React from 'react'
import state from '../store/Index'
import { useSnapshot } from 'valtio'
import { getContrastingColor } from '../config/helpers'

const CustomButton = ({ type, title, customStyles, handleClick }) => {
    const snap = useSnapshot(state);
    const generatedStyle = (type) => {
        if (type === 'filed') {
            return {
                backgroundColor: snap.defaultColor,
                color: getContrastingColor(snap.defaultColor)
            }
        } else {
            return {
                border: `2px ${snap.defaultColor} solid`,
                color: snap.defaultColor
            }
        }
    }
    return (
        <button className={`px-2 py-1.2 flex-1 rounded-md ${customStyles || ''}`}
            style={generatedStyle(type)}
            onClick={handleClick}>
            {title}

        </button>
    )
}

export default CustomButton
