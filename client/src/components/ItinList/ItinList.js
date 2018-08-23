import React from "react"


const ItinList = props => (
<li className="" >
            <div style={{ margin: 5, paddingBottom: 3, borderBottom: "solid 1px #e0e0e0"}}>
                <h5 style={{paddingLeft: 15}}>{props.title}</h5>
                <a href={props.url} target="_blank">
                <button className="btn btn-danger ">Get Info</button>
                </a>
                <button className="btn btn-primary" onClick={() => props.handleDeleteButton(props._id)}>Delete</button>
            </div>
</li>

);

export default ItinList;