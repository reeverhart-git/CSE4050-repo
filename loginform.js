function loginform() {

//
// Initialize Firebase
	//const config = {
		//apiKey: "AIzaSyAuDR0r2xTnyQLV0B3RqBwKDQ-xF6Z0byk",
	//	authDomain: "cse4050-project.firebaseapp.com",
	//	databaseURL: "https://cse4050-project.firebaseio.com",
	//	projectId: "cse4050-project",
		//storageBucket: "cse4050-project.appspot.com",
	//	messagingSenderId: "497709309774",
		//appId: "1:497709309774:web:5a0427ea9bba3b4494481f",
		//measurementId: "G-WW1ZV5T6P8"
//	};
	//firebase.initializeApp(config);

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
			firebase.auth().signOut()
			  .then(function() {
			    // Sign-out successful.
			  })
			  .catch(function(error) {
			    // An error happened
			  });
		});


		//auth listerer
		firebase.auth().onAuthStateChanged(firebaseUser => {
			if(firebaseUser){
				console.log(firebaseUser);
				btnLogout.classList.remove('hide');
			} else {
				console.log('Not Logged in.');
				btnLogout.classList.add('hide');
			}
		});

}();
