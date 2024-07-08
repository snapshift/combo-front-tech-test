import React, { useEffect, useRef } from 'react'

export const useScroll = (callBack: () => void) => {
    const position = useRef<number>(0)
    
    useEffect(() => {
    document.addEventListener('scroll', () => {
        const scrolledTo = window.scrollY + window.innerHeight
        const isReachBottom = document.body.scrollHeight === scrolledTo
        if(isReachBottom) {
            if (position.current !== scrolledTo) {
                callBack()
                position.current = scrolledTo
            }
        }
    });
    }, [callBack]);
}