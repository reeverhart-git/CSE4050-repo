'use strict';

console.log("authScript.js is running.");

//scripts for Firebase Auth

	function sendEmailLoginLink() {
		a_send_link_btn.disable = true
		var actionCodeSettings = {
		  url: 'https://cse4050-project.web.app/',
		  // This must be true.
		  handleCodeInApp: true,
		}
		firebase.auth().sendSignInLinkToEmail(a_email.value, actionCodeSettings)
		.then(function() {
			a_msg.innerText = "Login link sent to email."
			localStorage.setItem('email', a_email.value);
		  })
		  .catch(function(error) {
			  console.log(error);
		  });
	}

	function loginPageLoad() {
	 let email = localStorage.getItem('email');
	 if (!email) {
	 // User opened the link on a different device. To prevent session fixation
	 // attacks, ask the user to provide the associated email again. For example:
	 email = prompt('Please provide your email for confirmation');
	 }
	 // The client SDK will parse the code from the link for you.
	 firebase.auth().signInWithEmailLink(email, window.location.href)
		 .then(function(result) {
		   localStorage.removeItem('email');
		 })
		 .catch(function(error) {
		   console.log(error);
		 });
	 a_msg.innerHTML = "Logged in as : " + email
	 a_logging_in.style.display = "none"
	 a_logged_in.style.display = "block"
	 a_logout_btn.addEventListener('click', logout)
	}

	function logout() {
		firebase.auth().signOut().then(function() {
		  // Sign-out successful.
		  a_msg.innerHTML = "Logged out"
		  a_send_link_btn.disable = false
		  a_logging_in.style.display = "block"
		  a_logged_in.style.display = "none"
		}).catch(function(error) {
		  console.log(error);
		});
	}
	
	function loggedOutPageLoad() {
	 a_msg.innerHTML = "Logged out"
	 a_logging_in.style.display = "block"
	 a_send_link_btn.addEventListener('click', sendEmailLoginLink)
	}

	function loggedInPageLoad() {
	 a_msg.innerHTML = "Logged in as : " + email
	 a_logged_in.style.display = "block"
	 a_logout_btn.addEventListener('click', logout)
	}
	
	document.addEventListener('DOMContentLoaded', () => {
	 a_msg.innerHTML = "Loaded"
	 const auth = firebase.auth()
	 if (auth.isSignInWithEmailLink(window.location.href)) {
		loginPageLoad()	
	 } else if (auth.currentUser === null) { 
		loggedOutPageLoad()
	 } else {
		loggedInPageLoad()
	 }
	 
	})
//}}();

