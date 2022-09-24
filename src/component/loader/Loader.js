import React, { useEffect, useState } from 'react'
import "./Loader.css"

export default function Loader() {
    const [load1, setLoad1] = useState(false);
    const [load2, setLoad2] = useState(false);
    const [load3, setLoad3] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoad1(true);
        }, 500);
        setTimeout(() => {
            setLoad2(true);
        }, 1500);
        setTimeout(() => {
            setLoad3(true);
        }, 2500);
    }, []);

    return (
        <div>
            <div className='loader'>
                <div></div>
            </div>
            <div className='loadingTextContainer'>
                <span className='loadingText'>Loading<span className={load1 ? 'visible' : 'dot'}>.</span><span className={load2 ? 'visible' : 'dot'}>.</span><span className={load3 ? 'visible' : 'dot'}>.</span></span>
            </div>
        </div>
    )
}
