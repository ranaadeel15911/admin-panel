'use client'
import { useEffect, useRef, useState } from 'react';

const ComponentWithGlobalClickEvent = () => {
const [abc,setabc] = useState(false)
// console.log(window.onclick)
  const newclick = () => {
    // console.log(e.target.name);
    if (abc ) {
        setabc(false)
    }
    else{
        setabc(true)
    }

  };
  const dropref = useRef()
useEffect(()=>{
    const handledrop = (e)=>{
        if(!dropref.current.contains(e.target)){
setabc(false);
        }
    }
document.addEventListener("click",handledrop)
})
console.log(
  'hi console.log'
)
  return ( 
    <>
    <div className='w-72' ref={dropref}>
  <img name='adeel' className='cursor-pointer size-12' type='image' src='/logo.png' /* onFocus={newclick} */ onClick={newclick}/> 
  <br /><br /><br />
{abc && <button >Button</button>}
    </div>
    </>
  );
};

export default ComponentWithGlobalClickEvent;
