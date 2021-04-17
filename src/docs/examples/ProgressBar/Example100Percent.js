import React from 'react'
import ProgressBar from 'ps-react-dk/ProgressBar'

/** 100% progress and height 20px and full color blue */
export default function Example100Percent() {
    return <ProgressBar percent={100} width={150} height={20} colors={{ full: "blue" }} />
}