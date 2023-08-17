import React from 'react'
import { motion } from 'framer-motion';

const Slot = ({ slot = null , onClick , variants}) => {
  return (
    <motion.button className='slot' variants={variants} onClick={onClick}>
    {slot}
    </motion.button>
  )
}

export default Slot;