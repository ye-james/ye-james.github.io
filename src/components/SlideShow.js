import React, { useState, useEffect, useRef } from 'react';

const delay = 5000;

function SlideShow({ project }) {
    
    const imgs = project.project_imgs;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);
    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
        () =>
            setIndex((prevIndex) =>
            prevIndex === imgs.length - 1 ? 0 : prevIndex + 1
            ),
        delay
        );

        return () => {};
    }, [index]);



    function resetTimeout() {
        if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        }
    }

    return (
        <div className="slideshow">
            <div className="slideshowSlider" style={{transform: `translate3D(${-index * 100}%,0,0)`}}>
                {imgs.map((img,index) => {
                    return (
                        <img className="slide" src={`${img}`} alt={`img-${index}`} />
                    )
                })}
            </div>
            <div className="slideshowDots">
                {imgs.map((_, idx) => (
                    <div key={idx} 
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => setIndex(idx)}
                    ></div>
                ))}
            </div>
            <div className='btn-container'>
                {project.link !== "" ? <a href={ `${project.link}`}><div className='button modal-btn'>Demo</div></a> : null}
                <a href={`${project.github}`}><div className='button modal-btn'>GitHub Link</div></a>
            </div>
    </div>
    )
}

export default SlideShow