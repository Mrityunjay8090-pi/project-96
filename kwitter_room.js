
var  firebaseConfig = {
      apiKey: "AIzaSyCNWE2Xa_pmkEo62PhjeKoyOZDTqmoUHyA",
      authDomain: "kwitter-61c3a.firebaseapp.com",
      databaseURL: "https://kwitter-61c3a-default-rtdb.firebaseio.com",
      projectId: "kwitter-61c3a",
      storageBucket: "kwitter-61c3a.appspot.com",
      messagingSenderId: "860937375624",
      appId: "1:860937375624:web:c82d1a9acb357d27c9f43d",
      measurementId: "G-W6HPJP2V8R"
    };
    
  
    firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome " + user_name + "!";
function  addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child("room_name").update({
            purpose:"adding roomname"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      
      //End code
      });});}
getData();
function redirectToRoomName(name){
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";
}
