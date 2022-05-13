import React, { useState } from 'react';
import Data from './Data'
export default function Card() {
    const [data, setData] = useState('');
    const [item, setItem] = useState([]);
    function DeleteText(id) {
        setItem((val) => {
            return val.filter((val, index) => {
                return index !== id
            })
        })
    }
    function todoItem(e) {
        setData(e.target.value)
    }
    function press() {
        let a = document.getElementById('note').value;
        setData(a);
        setItem((val) => {
            if (!a) {
                alert('please enter the note')
                return [...val, data];
            } else {
                return [...val, data];
            }
        })
        setData('')
        console.log(item, data);
    }

    return (
        <div className="container" >
            <div className="row justify-content-center">
                <div className='col-5 text-center '>
                    <input type="text" className=' form-control' id="note" onChange={todoItem} value={data} />
                </div>
                <div className='col-3 mb-2'>
                    <button className='btn btn-primary' onClick={press}>Add</button>
                </div>
            </div>
                <ol className=' bg-dark border border-white text-white' >
                    {
                        item.map((value, index) => {
                            return <Data key={index} text={value} press={DeleteText} id={index} />;
                        })
                    }
                </ol>


        </div>


    );
}