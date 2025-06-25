/* eslint-disable no-unused-vars */
import React from 'react';
import * as motion from "motion/react-client"
const SquareAnother = () => {
    return (
        <div>
              <motion.div
            className='opacity-60 w-[100px] h-[100px] rounded-2xl bg-gradient-to-br from-[#1d3e9d] to-[#ff0088]'
            animate={{ rotate: 360 }}
            transition={{ duration: 5,repeat:Infinity,ease:'linear' }}
            
        />
        </div>
    );
};



export default SquareAnother;