import React from 'react'
import CustomButton from './CustomButton'


const AiPicker = ({ prompt, setPrompt, generatingImg, handleSubmit }) => {
    return (
        <div className='aipicker-container'>
            <textarea placeholder='Ask ai ....'
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className='aipicker-textarea' />
            <div className='flex flex-wrap gap-3'>
                {generatingImg ? <CustomButton
                    type={`outlibe`} title={`Asking Ai...`} customStyles={`text-xs`} /> : <>
                    <CustomButton type={'Outline'} title={`AI Logo`} handleClick={() => handleSubmit('logo')} customStyles={'text-xs'} />
                    <CustomButton type={'filed'} title={`AI full`} handleClick={() => handleSubmit('full')} customStyles={'text-xs'} />

                </>}
            </div>
        </div>
    )
}

export default AiPicker
