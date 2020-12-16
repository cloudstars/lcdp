import React from 'react'


/**
 * 复选框控件属性
 */
interface CheckBoxControlProps {
    name: string
}
  
/**
 * 复选框控件
 */
export default function CheckBoxControl(props: CheckBoxControlProps) {  
    return (
        <div>
            <select name={props.name} multiple>
                
            </select>
        </div>
    );      
}