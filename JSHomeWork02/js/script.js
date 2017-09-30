var users = [];

function addUsers () {
	for (var i = 0; i < 5; i++) {
		var userName;
		username = prompt("Please, enter the user's name");
		users.push(username);
	}
}

function findUser (name) {
	var userExist = false;

	for (var temp in users) {
		console.log(users[temp]);

		if (name == users[temp]) {
			 userExist = true;
		}
	}

	return userExist;
}

addUsers();
console.log( 'users ', users);

var userExist = findUser(prompt( "Please, enter the user name you're looking for" ));
alert(userExist);