import React, {useState} from 'react'

var newText;

export default function TextForm(props) {
    function handleUpClick(){
        console.log('handle up clicked '+text);
        newText= text.toUpperCase();
        newText=newText.value.trim();
        setText(newText);

    }
    function handleOnChange(event){
       setText(event.target.value);
    }
    const [text,setText] =useState('');


    return (
        <div >
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" value={text}  onChange={handleOnChange}  rows="8"></textarea>
            </div>
            <button className='btn btn-primary' onClick={handleUpClick} >Convert to Uppercase</button>   
            <div className='container my-3'>
                <h1>Your Text Summary</h1>
                <h2>Preview</h2>
                <p>{text}</p>
                <p>{text.trim().split(" ").length} words and {text.length} characters</p>
                <p>Reading Time: {text.split(" ").length*0.008} </p>
                
            </div>
        </div>
    )
}
