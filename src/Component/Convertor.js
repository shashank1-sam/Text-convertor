import React, {useState} from 'react';
// In simple terms, Hooks are special functions that allow you to use React features—like remembering data (state) or performing tasks when a page loads—inside functional components. 
// Before Hooks were introduced in React 16.8, you had to write complex "Class components" to use these features. Hooks let you do everything with simpler, cleaner functions. 
// The 3 Most Common Hooks
// You will use these three in almost every project: 
// useState (The Memory Hook): Used when your component needs to remember something, like a counter or what a user typed in a box.
// Example: const [count, setCount] = useState(0);
// useEffect (The Action Hook): Used for "side effects" like fetching data from an API, setting a timer, or changing the page title after it renders.
// useContext (The Sharing Hook): Used to share data (like a "Dark Mode" theme or user login info) across many components without manually passing it down through every layer. 

export default function Convertor(props) {
    const [text,setText]=useState("");
    const handleOnClick=()=>{    
        let newText=text.toUpperCase();
        setText(newText);
    }
    const handleOnchange=(event)=>{
       // console.log("on change",event)
        
        let eventValue=event.target.value;
        setText(eventValue);
    }
    const handleLower=()=>{
        let lowerText=text.toLowerCase();
        setText(lowerText);
    }
    const reset=()=>{
        setText("");
    }
    const handleCopy = async () => {
    if (text.length === 0) {
        alert("Nothing to copy!");
        return;
    }

    try {
        // Wait for the text to actually be written to the clipboard
        await navigator.clipboard.writeText(text);
        
        // Use the current value of 'text' in the alert
        alert("Text Copied to Clipboard: " + text);
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
}
const handleCapitalize=()=>{
  let words=text.split(" ");
  for(let i=0;i<words.length;i++){
    let capitalizedWord=words[i].charAt(0).toUpperCase()+words[i].slice(1);
    words[i]=capitalizedWord;
  }
  setText(words.join(" "));
}
const handleInverse=()=>{
    let inverseText="";
    for(let i=text.length-1;i>=0; i--){
      inverseText+=text.charAt(i);

    }
    setText(inverseText);
}


  return (
    <div>
        <div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>      
<div className="mb-3">
  <label htmlFor="exampleFormControlTextarea1" className="form-label">{props.title}</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" placeholder="Enter Text Here" value={text} onChange={handleOnchange}></textarea>
</div>
<button className="btn btn-primary m-2" onClick={handleOnClick}>Change toUpper case</button>
<button className="btn btn-warning m-2" onClick={handleLower}>Change toLower case</button>
<button className="btn btn-success m-2" onClick={handleCopy}>Copy text</button>
<button className="btn bg-success-subtle m-2" onClick={handleCapitalize}>Capitalize text</button>
<button className="btn btn-info m-2" onClick={handleInverse}>Inverse text</button>
<button className="btn btn-danger m-2" onClick={reset}>Reset</button>
</div>
<div className={`container my-3 text-${props.mode === 'dark' ? 'light' : 'dark'}`} >
    <h2>Your Text Summary</h2>   
    <p>{text?.split(" ")?.filter(element=>element?.length !==0)?.length} words and {text?.length} characters</p>
    <p>{0.008 * text?.split(" ")?.filter(element=>element?.length !==0)?.length} Minutes read</p>
    <p>{text?.split(/[.!?]+/)?.filter(element=>element?.length !==0)?.length} Sentence Count</p>
    <p>{text?.split("\n")?.filter(element=>element?.length !==0)?.length} Line Count</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
</div>
    </div>
  )
}

