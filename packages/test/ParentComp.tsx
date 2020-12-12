import React, { useRef } from 'react'
import ChildComp from './ChildComp';


/**
 * 定义子组件的Ref
 */
export interface CRef {
    getData: () => void;
}

/**
 * 父组件
 */
const ParentComp: React.FC = () => {
    const cref = useRef<CRef>(null);
    
    const onClick = () => {
        console.log(cref.current.getData());
    };

    return (
        <div>
            <ChildComp ref={cref} f="test" />
            <button onClick={onClick} />
        </div>
    );
}

export default ParentComp;