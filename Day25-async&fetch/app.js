

async function fetchUser(){

    let reponse = await fetch("https://randomuser.me/api")
    let data = await reponse.json()
    
    data = data.results[0]

    const user = {
        name: `${data.name.title} ${data.name.first} ${data.name.last}`,
        age: data.dob.age,
        email: data.email,
        gender:data.gender,
        phone: data.phone,
        location: {
            city: data.location.city,
            state: data.location.state,
            country: data.location.country,
            postcode: data.location.postcode
        },
        image: data.picture.large
    }
    
    document.querySelector("img").src = user.image
    document.querySelector("#name").innerText=user.name
    document.querySelector("#email").innerText=user.email
    document.querySelector("#age").innerText= `${user.age} ${user.gender}`
    document.querySelector("#phone").innerText=user.phone
    document.querySelector("#address").innerText=`${user.location.city} ${user.location.state} ${user.location.country} ,${user.location.postcode}`

}

fetchUser()



