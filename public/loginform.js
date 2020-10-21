(function() {

	const txtEmail = document.getElementById('txtEmail');
	const txtPassword = document.getElementById('txtPassword');
	const btnLogin = document.getElementById('btnLogin');
	const btnSignUp = document.getElementById('btnSignUp');
	const btnLogout = document.getElementById('btnLogout');

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
				console.log(firebaseUser);
				btnLogout.style.display = "block";
			} else {
				console.log('Not Logged in.');
				btnLogout.style.display = "none";
			}
		});

}());
