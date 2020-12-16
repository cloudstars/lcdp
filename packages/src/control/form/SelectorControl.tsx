import React from 'react'


/**
 * 下拉选择控件属性
 */
interface SelectorControlProps {
    name: string,
    multiple: boolean
}
  
/**
 * 下拉选择控件
 */
export default function SelectorControl(props: SelectorControlProps) {  
    return (
        <div>
            <select name={props.name}>
                
            </select>
        </div>
    );      
}