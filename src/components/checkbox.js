import React from 'react'
import tick_icon from './tick.png'
import untick_icon from './not_tick.png'


const Checkbox = ({tickOrNot}) => {

if(tickOrNot){
    return(
        <div>
            <img src={tick_icon} alt="none" className="w-4 h-4 mt-[7px] mr-[10px] ml-[7px]"/>
        </div>
    )
}

else{
    return(
        <img src={untick_icon} alt="none" className="w-4 h-4 mt-[7px] mr-[10px] ml-[7px]"/>
    )
}

}


export default Checkbox

