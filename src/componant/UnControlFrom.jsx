import React , {useRef} from "react";

function UnControlFrom() {
    const nameInput = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert('Submitted Name: ' + nameInput.current.value);

    };

    return(
        <>
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" ref={nameInput}/>
            </label>
            <button type="submit">Submit</button>
        </form>
        </>
    );
    
}

export default UnControlFrom;