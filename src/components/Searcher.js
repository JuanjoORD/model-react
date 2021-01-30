import React from 'react'

function Searcher(props){   
    const [myinput, setMyinput] = React.useState('');    

    return(
        <div className="myinput" >                
            <input type="text"                 
                className="form-control"
                placeholder={props.myplaceholder}
                value={myinput}
                onChange={e => {
                    setMyinput(e.target.value)
                    }}      
                style={props.searchStyle}                         
            ></input>            
        </div>
    )

}

export default Searcher