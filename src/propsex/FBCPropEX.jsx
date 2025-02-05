import React from 'react'

export const FBCPropEX = (props) => {
    console.log(props);
    if(props.isMarried==true){
        return(
            <div>
            <h1>{props.username} is marrried person</h1>
            {
                props.hobbies.map(hobby=>{
                    return <li>{hobby}</li>
                })
            }
            </div>
        )

    }else{
        return <h1>Not married</h1>
    }
 
    
  
}

export default FBCPropEX