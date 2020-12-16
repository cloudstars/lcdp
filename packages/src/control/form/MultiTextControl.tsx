import React from 'react'


/**
 * 多行文本属性
 */
interface MultiTextControlProps {
    name: string
}
  
/**
 * 多行文本选择器
 */
export default function MultiTextControl(props: MultiTextControlProps) {  
    return (
        <div>
            <textarea name={props.name}></textarea>
        </div>
    );      
}