import React from 'react'
import CKEditor from 'ckeditor4-react';
// CKEditor.editorUrl ="https://github.com/ckeditor/ckeditor4/tree/master/plugins/font";
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