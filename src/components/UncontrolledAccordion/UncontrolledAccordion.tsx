import React, {useReducer, useState} from 'react';
import {Reducer} from './reducer';

type AccordionPropsType = {
    titleValue: string
    // collapsed: boolean
}




function UncontrolledAccordion (props: AccordionPropsType) {


    // const [collapsed, setCollapsed] = useState(true)
    const [state, dispatch] = useReducer(Reducer,{collapsed: false})


        return (
            <div>
                {/*<AccordionTitle title={props.titleValue} onClick={()=> {setCollapsed(!collapsed)}}/>*/}
                <AccordionTitle title={props.titleValue} onClick={()=> {dispatch({type: "TOOGLE-COLLAPSED" })}}/>
                {!state.collapsed && <AccordionBody />}
            </div>
        )
}




type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle (props: AccordionTitlePropsType) {
    return (
        <h3 onClick={ () => props.onClick()}>--{props.title}--</h3>
    )
}

function AccordionBody () {
    return (
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
        </ul>
    )
}


export default UncontrolledAccordion