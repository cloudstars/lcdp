import React from 'react'


/**
 * 多项选择属性
 */
interface MultiSelectorControlProps {
    name: string
}
  
/**
 * 多项选择文本选择器
 */
export default function MultiSelectorControl(props: MultiSelectorControlProps) {  
    return (
        <div>
            <select name={props.name} multiple>
                
            </select>
        </div>
    );      
}