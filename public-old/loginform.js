(function() {

	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');
	const btnEdit = document.getElementById('btnEdit');
	const greeting = document.getElementById('greeting');

    // login
    btnLogin.addEventListener('click', error => {
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(error => console.log(error.message));
    });

    // sign up
    btnSignUp.addEventListener('click', error => {
			//check if email is real eventually
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();
      const promise = auth.createUserWithEmailAndPassword(email, pass);
      promise.catch(error => console.log(error.message));
    });

		btnEdit.addEventListener('click', error=> {
			window.location = 'editprofile.html';
		});

		// log out
		btnLogout.addEventListener('click', error => {
			firebase.auth().signOut().then(function() {
			  // Sign-out successful.
				console.log("Logged out successfully!")
			}).catch(function(error) {
			  // An error happened.
});

		})


		//auth listerer
		firebase.auth().onAuthStateChanged(firebaseUser => {
			if(firebaseUser){
				firebaseUser.reload();
				console.log(firebaseUser);
				btnLogout.style.display = "block";
				btnEdit.style.display = "block";
				txtEmail.style.display = "none";
				txtPassword.style.display = "none";
				btnSignUp.style.display = 'none';
				btnLogin.style.display = 'none';
				if (firebaseUser.displayName == null){
					greeting.innerText = "Welcome, " + firebaseUser.email + "!";
				} else {
					greeting.innerText = "Welcome, " + firebaseUser.displayName + "!";
				}

			} else {
				console.log('Not Logged in.');
				btnEdit.style.display = "none";
				btnLogout.style.display = "none";
				txtEmail.style.display = "block";
				txtPassword.style.display = "block";
				btnSignUp.style.display = 'block';
				btnLogin.style.display = 'block';
				greeting.innerText = "Welcome, Guest!";
			}
		});

}());
