

let users=[]
const usersContainer= document.getElementById("users")
const alert= document.getElementById("alert")


function userExist(email){
    let arr = users.filter(user=> user.email == email)
    return arr.length > 0 
}

function hideAlert(){
    setTimeout(()=>{
        alert.classList.remove("success","danger")
        alert.innerText=""
    },1000)
}
function addNewUser(){
    let name = document.getElementById("name")
    let email = document.getElementById("email")

    console.log(!name.value,!email.value)
    let doesUserExist = userExist(email.value)
    
    if (!doesUserExist && name.value && email.value){
        let user = {
        name:name.value,
        email:email.value,
        }

        users.push(user)
        createDiv()

        alert.innerText="user added";
        alert.classList.add("success")
        hideAlert()
    }
    else{
        let isFieldEmpty = !name.value || !email.value
        alert.innerText= isFieldEmpty ? "entry required" : "email already exists"
        alert.classList.add("danger")
        hideAlert()
    }
    
}

function createDiv(){
    let div = document.createElement('div')
    let p1 = document.createElement('p')
    let p2 = document.createElement('p')
    const deleteButton= document.createElement("button")
  
    usersContainer.appendChild(div)

    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(deleteButton)

    p1.innerText =  users[users.length-1].name
    p2.innerText = users[users.length-1].email
    deleteButton.innerHTML=`<svg fill="darkred" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                   <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"/>
                </svg>`

    div.classList.add("user")
    deleteButton.classList.add("del-btn")

    deleteButton.addEventListener("click",(e)=>{
        usersContainer.removeChild(div)
        users=users.filter(user => user.email != p2.innerText)
        alert.innerText= "User Deleted"
        alert.classList.add("danger")
        hideAlert()
    })
   
}