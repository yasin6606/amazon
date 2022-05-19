import React from "react";

const ItemContent = (props: { itemSelected: any, itemSelection: any }): JSX.Element => {

    const backHandler = () => props.itemSelection(null);

    console.log(props.itemSelected)
    return <>
        <button onClick={backHandler}>back</button>
        {/*<p>item : {props.itemSelected}</p>*/}
    </>;
};

export default ItemContent;