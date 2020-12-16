import React from 'react'


/**
 * 单行文本属性
 */
interface TextControlProps {
    name: string
}
  
/**
 * 单行文本选择器
 */
export default function TextControl(props: TextControlProps) {  
    return (
        <div>
            <input type="text" name={props.name} />
        </div>
    );      
}