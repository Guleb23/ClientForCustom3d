import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useSnapshot } from 'valtio'
import { headContainerAnimation, headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'
import state from '../store/Index'
import CustomButton from '../Components/CustomButton'
const HomePage = () => {
    const snap = useSnapshot(state);
    console.log(snap);

    return (
        <AnimatePresence>
            {snap.intro ? (
                <motion.section className='home' {...slideAnimation('left')}>
                    <motion.header {...slideAnimation("down")}>
                        <img src='./threejs.png' className='w-8 h-8 object-contain' />
                    </motion.header>
                    <motion.div className='home-content' {...headContainerAnimation}>
                        <motion.div {...headTextAnimation}>
                            <h1 className='head-text'>
                                LET`S <br className='xl:block hidden' /> DO IT.
                            </h1>
                        </motion.div>
                        <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
                            <p className='max-w-md font-normal text-gray-600'>
                                I'll be trying this video shortly and I hope it works, it was exactly what I was looking for, for the AI. The show room at the start and car website looked awesome to. Thank you for providing this via YouTube
                            </p>
                            <CustomButton type='filed' title="DO THIS NOW" handleClick={() => state.intro = false} customStyles='w-fit px-4 py-2.5 font-bold text-sm' />
                        </motion.div>
                    </motion.div>
                </motion.section>
            ) : <div></div>}
        </AnimatePresence>
    )
}

export default HomePage
