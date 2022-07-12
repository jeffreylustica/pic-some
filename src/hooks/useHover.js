import {useState, useEffect, useRef} from "react"

export default function useHover() {
    const [isHovered, setIsHovered] = useState(false)
    const ref = useRef(null)

    function mouseEnter() {
        setIsHovered(true)
    }

    function mouseLeave() {
        setIsHovered(false)
    }

    useEffect(() => {
        ref.current.addEventListener("mouseenter", mouseEnter)
        ref.current.addEventListener("mouseleave", mouseLeave)

        // return () => {
        //     ref.current.removeEventListener("mouseenter", mouseEnter)
        //     ref.current.removeEventListener("mouseleave", mouseLeave)
        // }
    }, [])

    return [isHovered, ref]
}