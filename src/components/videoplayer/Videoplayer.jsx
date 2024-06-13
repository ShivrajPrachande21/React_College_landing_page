import React, { useRef, useState } from 'react'
import './videoplayer.css';


const Videoplayer = ({playState,setplaystate}) => {

    
const player=useRef(null);

const closeplayer=(e)=>{
    if(e.target === player.current)
    {
        setplaystate(false);
    }
}

  return (
    <div className={`video-player ${playState?'':'hide'} `} ref={player}
    onClick={closeplayer}>
        <video src="" autoPlay muted controls></video>
    </div>
  )
}

export default Videoplayer;