import React from 'react';

export default function Data(props) {
    return <>
    <div className='row justify-content-between '>
         <div className='col-9 '>
             <li className='mx-1 text-justify my-2' ><h5 className='text-justify' style={{color:'#37f308'}}>{props.text}</h5></li>
         </div>
         <div className='col-3 my-1'>
         <button onClick={() => {
                    return props.press(props.id)
                }} className="btn btn-warning"><i className="fa fa-trash-o" style={{fontSize:'34px',color:'red'}}></i></button>
               
        </div>
    </div>


    </>;
}