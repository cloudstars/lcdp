import React from 'react'


/**
 * 单行文本控件属性
 */
interface TextControlProps {
    name: string
}
  
/**
 * 单行文本控件
 */
export default function TextControl(props: TextControlProps) {  
    return (
        <div>
            <input type="text" name={props.name} />
        </div>
    );      
}