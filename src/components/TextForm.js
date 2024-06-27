import React, {useState} from 'react';

export default function TextForm(props) {

    const handleUpClick = () =>{

        setUndoText(text);
        let newText = text.toUpperCase();
        setText(newText);

        props.showAlert("Converted to Uppercase!", "success");
    }

    const handleLowerClick = () =>{
        
        setUndoText(text);
        let newText = text.toLowerCase();
        setText(newText);

        props.showAlert("Converted to Lowercase!", "success");
    }

    const handleClearClick = () =>{
        setUndoText(text);
        let newText = "";
        setText(newText);

        props.showAlert("Text Cleared!", "success");
    }

    const handleUndoClick = () =>{

        setText(undoText);

    
    }

    const handleCopyClick = () =>{

        var text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);

        props.showAlert("Text Copied To Clipboard", "success");
    }

    const handleExtraSpacesClick = () =>{

        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));

        props.showAlert("Extra Spaces Removed", "success");
    }
    

    const handleOnChange = (event) =>{
       // console.log(event.target.value);
        setText(event.target.value);
    }

    const [text, setText] = useState("");
    const [undoText, setUndoText] = useState("");

  return (

    <>
    <div className='container'>
      
    <h1 style = {{color: props.mode === 'light'?'#15324b':'white'}}>{props.heading} </h1>
    <div className="mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1"  onChange={handleOnChange} style = {{backgroundColor: props.mode === 'light'? '#0d6efd0a' : 'rgb(0 17 34)', color: props.mode === 'light'? '#15324b' : 'white'}} value={text} rows="8"></textarea>
    </div>

    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowerClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
    <button className="btn btn-primary mx-2" onClick={handleUndoClick}>Undo</button>
    <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
    <button className="btn btn-primary mx-2" onClick={handleExtraSpacesClick}>Handle Extra Spaces</button>

    </div>

    <div className="container my-3"  style = {{color: props.mode === 'light'?'#15324b':'white'}}>
        <h2>Your Text Summary</h2>
        <p>{text.length === 0 ? "0" : text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length> 0 ? text : "Enter something in the text box above to preview it here"}</p>
    </div>

    </>
  );
}
