import React from 'react'
import CKEditor from 'ckeditor4-react';
export default function Ckeditor (props){
    return (
        <CKEditor 
            {...props}
            config={
                {
                    extraPlugins:"font"
                }
            }
        />
    )
}