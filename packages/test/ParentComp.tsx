import React, { useRef } from 'react'
import ChildComp from './ChildComp';


export interface CRef {
    getData: () => void;
}
const ParentComp: React.FC = () => {
    const cref = useRef<CRef>(null);
    
    return (
        <div>
            <ChildComp ref={cref} f="test" />
        </div>
    );
}

export default ParentComp;