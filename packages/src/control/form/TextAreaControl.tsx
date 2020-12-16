import React from 'react'


/**
 * 多行文本控件属性
 */
interface TextAreaControlProps {
    name: string
}
  
/**
 * 多行文本控件
 */
export default function MultiTextControl(props: TextAreaControlProps) {  
    return (
        <div>
            <textarea name={props.name}></textarea>
        </div>
    );      
}