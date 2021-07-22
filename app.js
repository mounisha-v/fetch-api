

const button= document.getElementById('button')

button.addEventListener('clik',()=>{
  fetchdata()
})




function fetchdata(){
    (fetch("https://reqres.in/api/users?page=1")).then(response =>{
      
    if(!response.ok){
        throw Error("error")
    }
    return response.json();
    
    }).then(data=>{
        console.log(data.data);
        const html= data.data.map(user=>{
            return `<span class= "user">
            <p><img src="${user.avatar}"/></p>
            <p>SL.NO: ${user.id}</p>
            <p>Name: ${user.first_name}  ${user.last_name}</p> 
            <p>Email: ${user.email}</p>

            </span>`
        }).join('');
        console.log(html)
        document.querySelector('#app').insertAdjacentHTML('afterbegin',html);
    }).catch(error=>{
        console.log(error);
    })
}
fetchdata();




//https://reqres.in/api/users?page=1