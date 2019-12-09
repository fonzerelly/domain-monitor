import React from 'react';
import zahnrad from "../img/zahnrad.svg";
import muelleimer from "../img/muelleimer.svg";

export const Row = (props) => (
    <tr key={props.id}>
        <td><img src={zahnrad} /></td>
        <td>{props.url}</td>
        <td><span className={props.availability}>{props.availability}</span></td>
        <td>{props.time}</td>
        <td></td>
        <td> 
            <form>
                <input onClick={props.delete} type="image" src={muelleimer} alt="Mülleimer als Button"/>
            </form>
            </td>
    </tr>
);