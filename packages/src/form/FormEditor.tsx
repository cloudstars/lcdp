import React from 'react'
import Control from '../control/Control';
import InputCanvas from './components/InputCanvas'
import InputConfiger from './components/InputConfiger'
import InputSelector from './components/InputSelector'


/**
 * 表单编辑器属性
 */
interface FormEditorProps {
    controls?: Control[]; // 表单控件列表，不传入时初始化为内置的控件列表
}
  
/**
 * 表单编辑器
 */
export default function FormEditor(props: FormEditorProps) {  
    return (
        <div>
            <InputSelector></InputSelector>
            <InputCanvas></InputCanvas>
            <InputConfiger></InputConfiger>
        </div>
    );      
}