import { useEffect, useState } from "react"

export default function useWindowSize (){
    const getScreenSize = () => window.innerWidth;

    const [screenWidth, setScreenWidth] = useState(getScreenSize);

    useEffect(()=>{

        const handleResize =  () => setScreenWidth(getScreenSize());

        window.addEventListener('resize', handleResize)
        
    })

    return screenWidth
};