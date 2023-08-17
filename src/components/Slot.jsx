import React from 'react'
import { motion } from 'framer-motion';

const Slot = ({ slot = null , turnX , onClick , variants}) => {
  return (
    <motion.button className='slot' variants={variants} onClick={onClick}
      whileTap={{scale: 0.90 }}
    >
    {slot}
    </motion.button>
  )
}

export default Slot;