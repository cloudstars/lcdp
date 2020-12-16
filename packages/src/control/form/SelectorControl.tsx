import React from 'react'


/**
 * 单项选择属性
 */
interface SelectorControlProps {
    name: string
}
  
/**
 * 单项选择文本选择器
 */
export default function SelectorControl(props: SelectorControlProps) {  
    return (
        <div>
            <select name={props.name}>
                s
            </select>
        </div>
    );      
}