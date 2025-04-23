var inquiryForm = document.getElementById("inquiryForm");

if (inquiryForm) {
  inquiryForm.addEventListener("submit", submitForm);
}
function getInputVal(id) {
  return document.getElementById(id).value;
}


// function submitForm(e) {
//   e.preventDefault();

//   var name = getInputVal("fullName");
//   var email = getInputVal("mail");
//   var mobile = getInputVal("mobile");
//   var image = url;
// saveInquiries(name, email, mobile, image);
// sendEmail(name, email, mobile, image)
// console.log(name, email, mobile, image);
// document.getElementById("inquiryForm").reset();
// }


// const firebaseConfig = {
//   apiKey: "AIzaSyAcRaPwHEazAiMhqs8SkJ8wjjbdrxOJr1A",
//   authDomain: "inquiry-algo.firebaseapp.com",
//   databaseURL: "https://inquiry-algo-default-rtdb.firebaseio.com",
//   projectId: "inquiry-algo",
//   storageBucket: "inquiry-algo.appspot.com",
//   messagingSenderId: "477670584690",
//   appId: "1:477670584690:web:475c959170af7125c56deb",
// };

// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// var inquiryRef = firebase.database().ref("inquiries");

// var url;

// function uploadImage() {
//   const ref = firebase.storage().ref("Algo_Resumes/");
//   const file = document.querySelector("#photo").files[0];
//   const fileName = +new Date() + "-" + file.name;
//   const metadata = {
//     contentType: file.type,
//   };
//   const task = ref.child(fileName).put(file, metadata);
//   document.getElementById("uploadedFile").innerHTML = file.name;
//   document.getElementById("spinnerForm").style.display = "block"
//   // console.log(file.name);
//   task
//     .then((snapshot) => snapshot.ref.getDownloadURL())
//     .then((imgUrl) => {
//       url = imgUrl;
//       // console.log(imgUrl);
//     })
//     .catch(console.error);
// }

function uploadImage() {

  const file = document.querySelector("#photo").files[0];
  console.log(file, " + ", file.name, " + ");
}




function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("fullName");
  var email = getInputVal("mail");
  var mobile = getInputVal("mobile");
  // const file = document.querySelector("#photo").files[0];

  // var image = url;

  fetch('https://algoscript.in/api/Values/Post', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      name: name,
      email: email,
      mobile: mobile,
      resume: file
    })
  })

  // saveInquiries(name, email, mobile, image);
  // sendEmail(name, email, mobile, image)
  // console.log(name, email, mobile, image);
  // document.getElementById("inquiryForm").reset();
}


// function checkedItems() {
//   var s = [];
//   var markedCheckbox = document.getElementsByClassName("chk");
//   for (var checkbox of markedCheckbox) {
//     if (checkbox.checked) {
//       s.push(checkbox.value);
//     }
//   }
//   return s;
// }

// const saveInquiries = (name, email, mobile, image) => {
//   var newInquiryRef = inquiryRef.push();
//   newInquiryRef?.set({
//     name: name,
//     email: email,
//     mobile: mobile,
//     image: image,
//   });
//   // console.log("Data Gone....");
// };

// function sendEmail(name, email, mobile, image) {
//   console.log("name");
//   Email.send({
//     SecureToken: "d372bb16-1d70-4cbb-ac34-8c139f5b4863",
//     To: "samcurranalgo@gmail.com",
//     From: "samcurranalgo@gmail.com",
//     Subject: `${name} sent you a message`,
//     Body: `
//         <b>Name: </b> ${name} <br/> <br/>
//         <b>Email : </b> ${email} <br/> <br/>
//         <b>Mobile : </b> ${mobile} <br/> <br/>
//         <b>Resume URL : </b> ${image} <br/> <br/>`,
//   }).then((message) => alert("mail sent successfully"));
  // console.log("Mail Send....");
// }

// ---------------------------------------------------------------------------------

// Send Email Info
// function sendEmail(name, email, mobile, message) {
//     return Email.send({
//         Host: "smtp.gmail.com",
//         Username: "samcurranalgo@gmail.com",
//         Password: "Cluster@123",
//         To: "princegabani777@gmail.com",
//         From: "samcurranalgo@gmail.com",
//         Subject: `${name} sent you a message`,
//         Body: `Name ? : ${name} <br/> Email : ${email} <br/>Mobile:${mobile} Message : ${message}`,
//     }).then((message) => alert("mail sent successfully : " + message));
// }

// Email.send({
//     Host: "smtp.yourisp.com",
//     Username: "username",
//     Password: "password",
//     To: 'them@website.com',
//     From: "you@isp.com",
//     Subject: "This is the subject",
//     Body: "And this is the body"
// }).then(
//     message => alert(message)
// );

// ---------------------------------------------------------------------------------

// function uploadImage() {

//     // console.log('function start uploadImage')

//     ImgName = document.getElementById('customFile').value;
//     // console.log(ImgName, 'Imagename')

//     var uploadTask = firebase.storage().ref('Resumes/' + ImgName);
//     console.log(ImgName, '123');
//     console.log(uploadTask, '123');

//     uploadTask.on('state_changed', function (snapshot) {
//         var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         document.getElementById('UpProgress').innerHTML = 'Upload' + progress + '%';
//     },
//         function (error) {
//             alert("Not Success");
//         },
//         function () {
//             uploadTask.snapshot.ref.getDownloadURL().then(function (url) {
//                 ImgUrl = url;
//             });
//             firebase.database().ref('Resumes/' + ImgName).set({ Name: ImgName, Link: ImgUrl });
//             alert('img added successfully..');
//         }
//     );
// }

// --------------------------------------------------------------------------------------------------------

// function uploadImage() {
//     // const name = new Date() + '_' + file.name

//     const file = document.querySelector("#customFile").files[0];
//     const imgRef = firebase.storage().ref('Resumes/' + file.name);

//     const metadata = { contetType: 'image/jpeg' };
//     const task = imgRef.child(name).put(file, metadata)

//     // const task = imgRef.put(file);
//     // const ref = firebase.storage().ref(name);

//     task.on('state_change',

//         function progress(snap) {

//         },
//         function error(err) {

//         },
//         function completed() {
//             storage.getDownloadURL()
//         }

//     )
//         .then(snapshot => snapshot.ref.getDownloadURL())
//         .then(url => {
//             console.log(url)

//             // const image = document.querySelector('#image')
//             // image.src = url
//         })
// }

// var Email = {
//     send: function (a) {
//         return new Promise(function (n, e) {
//             a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
//              var t = JSON.stringify(a);
//             Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) })
//         })
//     },
//     ajaxPost: function (e, n, t) {
//         var a = Email.createCORSRequest("POST", e);
//         a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
//             a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n)
//     },
//     ajax: function (e, n) {
//         var t = Email.createCORSRequest("GET", e);
//         t.onload = function () { var e = t.responseText; null != n && n(e) }, t.send()
//     },
//     createCORSRequest: function (e, n) {
//         var t = new XMLHttpRequest;
//         return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XDomainRequest ? (t = new XDomainRequest).open(e, n) : t = null, t
//     }
// };

// mail sent successfully : The SMTP server requires a secure connection or the client was not authenticated.
// The server response was: 5.7.0 Authentication Required. Learn more at - Fix: Try a different
// SMTP server : https://elasticemail.com/account#/create-account?r=20b444a2-b3af-4eb8-bae7-911f6097521c
