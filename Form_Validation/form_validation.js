let inputs = document.querySelectorAll("input")
let btn = document.querySelector("button")
let warning = document.querySelectorAll("p")
let submit = document.querySelector("h1")


btn.addEventListener('click',()=>{
    event.preventDefault();
    console.log('hello');

    let name = inputs[0].value
    let email = inputs[1].value
    let male = inputs[2].checked
    let female = inputs[3].checked
    let address = inputs[4].value
    let password = inputs[5].value

    if(name.length<5||name==''){
        warning[0].innerText='[Name has less than 5 characters]'
    }if(email==''){
        warning[1].innerText='[Please enter the email]'
    }if(male==''&&female==''){
        warning[2].innerText='[Please select the gender]'
    }if(address==''){
        warning[3].innerText='[Please enter the address]'
    }if(password.length<8){
        warning[4].innerText='[Password should be min length 8]'
    }else{
        submit.innerText="--YOUR FORM HAS BEEN SUBMITTED--"
    }

})