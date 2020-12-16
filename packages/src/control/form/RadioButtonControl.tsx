import React from 'react'


/**
 * 单选框控件属性
 */
interface RadioButtonControlProps {
    name: string
}
  
/**
 * 单选框控件
 */
export default function RadioButtonControl(props: RadioButtonControlProps) {  
    return (
        <div>
            <select name={props.name} multiple>
                
            </select>
        </div>
    );      
}