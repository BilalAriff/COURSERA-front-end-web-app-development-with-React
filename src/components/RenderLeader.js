import React from 'react';

// const leader = props.leader;

function RenderLeader(props) {
    console.log('hello from render leader');
    return(

        <h1>
            {props.leaders.name}
        </h1>
    )
}

export default RenderLeader;