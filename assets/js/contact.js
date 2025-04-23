// const firebaseConfig = {
//   apiKey: "AIzaSyAcRaPwHEazAiMhqs8SkJ8wjjbdrxOJr1A",
//   authDomain: "inquiry-algo.firebaseapp.com",
//   databaseURL: "https://inquiry-algo-default-rtdb.firebaseio.com",
//   projectId: "inquiry-algo",
//   storageBucket: "inquiry-algo.appspot.com",
//   messagingSenderId: "477670584690",
//   appId: "1:477670584690:web:475c959170af7125c56deb",
// };

/*
Updated by goti
again updated
*/


// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var inquiryRef = firebase.database().ref("contact");

var contactForm2 = document.getElementById("contactForm2");
if (contactForm2) {
  contactForm2.addEventListener("submit", submitForm2);
}

function getVal(id) {
  return document.getElementById(id).value;
}

function submitForm2(e) {
  e.preventDefault();
  // console.log(e);
  var nameContact = getVal("cname");
  var emailContact = getVal("cemail");
  var subjectContact = getVal("csubject");
  var messageContact = getVal("cmessage");
  //   var uid = firebaseUser.getUid().push().getKey();

  // console.log(nameContact, emailContact, subjectContact, messageContact)  


  fetch('https://algoscript.in/api/Values/Post', {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  body:JSON.stringify({
    name:nameContact, 
    email:emailContact, 
    mobile:subjectContact, 
    message:messageContact
  })
})
  .then(response => {
    console.log(response)
  })
  .catch(err => {
    console.log(err)
  })
  console.log("Mail Send....");

  // saveContact(nameContact, emailContact, subjectContact, messageContact);
  // sendEmail(nameContact, emailContact, subjectContact, messageContact)  
  // document.getElementById("contactForm2").reset();
}


// const saveContact = (
//   nameContact,
//   emailContact,
//   subjectContact,
//   messageContact,
//   uid
// ) => {
//   var newInquiryRef = inquiryRef.push();
//   newInquiryRef?.set({
//     // uid: inquiryRef.push().getKey(),
//     name: nameContact,
//     email: emailContact,
//     mobile: subjectContact,
//     message: messageContact,
//   });
//   console.log("Data Gone....");
// };

// document.getElementById("SendEmailApi").addEventListener("click", sendEmail);
// function sendEmail(nameContact, emailContact, subjectContact, messageContact) {
  
//   fetch('https://algoscript.in/api/values/Post', {
//   method: 'POST',
//   headers: {
//     'content-type': 'application/json',
//   },
//   body:JSON.stringify({
//     name:nameContact, 
//     email:emailContact, 
//     mobile:subjectContact, 
//     message:messageContact
//   })
// })
//   .then(response => {
//     console.log(response)
//   })
//   .catch(err => {
//     console.log(err)
//   })
//   console.log("Mail Send....");
// }

// function sendEmail(name, email, mobile, image) {
//   console.log("sendEmail function called successfully");
  // Email.send({
  //   SecureToken: "d372bb16-1d70-4cbb-ac34-8c139f5b4863",
  //   To: "samcurranalgo@gmail.com",
  //   From: "samcurranalgo@gmail.com",
  //   Subject: `${name} sent you a message`,
  //   Body: `
  //       <b>Name: </b> ${name} <br/> <br/> 
  //       <b>Email : </b> ${email} <br/> <br/> 
  //       <b>Mobile : </b> ${mobile} <br/> <br/>  
  //       <b>Resume URL : </b> ${image} <br/> <br/>`,
  // }).then((message) => alert("mail sent successfully" + message));
//   console.log("Mail Send....");
// }