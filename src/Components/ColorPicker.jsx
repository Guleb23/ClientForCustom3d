import React from 'react'
import { SketchPicker } from 'react-color'
import { useSnapshot } from 'valtio'
import state from '../store/Index'

const ColorPicker = () => {
    const snap = useSnapshot(state);
    return (
        <div className='absolute left-full ml-3'>
            <SketchPicker color={snap.defaultColor} disableAlpha onChange={
                (color) => state.defaultColor = color.hex} />
        </div>
    )
}

export default ColorPicker
