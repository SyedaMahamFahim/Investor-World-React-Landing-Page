import React from 'react'
import { Box } from '@mui/material'

const ImageComponent = ({fileUrl,altTag,imgWidth,imgHeight,isborderRadius}) => {
    return (
        <>
            <Box
                component="img"
                width={imgWidth}
                alt={altTag}
                height={imgHeight}
                src={fileUrl}
                
            />
        </>
    )
}

export default ImageComponent