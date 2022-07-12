import React, {useContext} from "react";
import { Context } from "../Context";
import Image from "../components/Image"
import {getClass} from "../utils/imgSize"

export default function Photos() {
    const {photos} = useContext(Context)

    const imageElements = photos.map((img, i) => {
        return <Image key={img.id} img={img} className={getClass(i)}/>
    })

    return (
        <div className="section-photos">
            <div className="container photo-container">
                {imageElements}
            </div>
        </div>
    )
}