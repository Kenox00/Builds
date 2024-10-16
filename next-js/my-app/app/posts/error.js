// error componennt
'use client'
import React from 'react'

export default error => {
    return (
        <div>
            {error.message}
        </div>
    )
}