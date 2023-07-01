var objPeople = [

    {
        username:'nick',
        password:'kherkeadze'
    }
	
]

function login() {

	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check to 
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + ' is logged in!!!')
			break
		} else {
		
			console.log('incorrect username or password')
		}
	}
}



const addaccaunt = (ev) =>{
    ev.preventDefault();


    let newacc = {
        newusername: document.getElementById('newUsername').value ,
        newpassword: document.getElementById('newPassword').value
    }
        
    objPeople.push(newacc);
    document.forms[0].reset();

    let objPeople_serialized = JSON.stringify(objPeople);
    let objPeople_deserialzied = JSON.parse(localStorage.getItem('objPeople'))

    //console.log('added', {objPeople});
    
    localStorage.setItem('objPeople', objPeople_serialized);

    console.log(objPeople_deserialzied);

}

document.addEventListener('DOMContentLoaded', () =>{
    document.getElementById('register').addEventListener('click', addaccaunt);})


