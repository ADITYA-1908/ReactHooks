import React, { useState } from 'react';
function UseCallback() {
    const [count, setCount] = useState(0);
    const increment = () =>{
        setCount(prev=>prev+1)
    }
  return (
        <>
        
             <br /><br />
            <h1 className='underline'>4. usecallback hooks</h1><br />
            <p className='text-xl'>* it is a hook that let you cache a function defination
             betwee re-render</p>
            <p className='text-xl'>* The React useCallback Hook returns a memoized callback function.</p>
            <p className='text-xl'>{count}</p>
            <button onClick={increment}>Click Here</button>

        
        </>
  )
}

export default UseCallback