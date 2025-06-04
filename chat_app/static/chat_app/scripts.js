document.addEventListener("DOMContentLoaded",()=>{
    const button = document.querySelector('#send');
    const input = document.querySelector('#message');

    button.disabled = true; //by default send button is disabled


    document.querySelector('#message').onkeyup = ()=>{
        //checks whether the input field is empty or no if empty it disables the button
        if (input.value.length > 0){
            button.disabled = false;
        }
        else{
            button.disabled = true;
        }
    };

    document.querySelector('#name_form').onsubmit = () =>{
        const name = document.querySelector('#name').value;
        document.querySelector('#name_display').innerHTML = `Chat as ${name}`;
        document.querySelector('#name').style.display = "none"; 
        document.querySelector('#submit').style.display = "none"; 
        console.log(name);
        return false;
    };

    document.querySelector('#chat_form').onsubmit = () =>{
        const message = document.querySelector('#message').value;
        document.querySelector('#message').value = ''; // clear the input field when button clicks


        return false;
    };

});