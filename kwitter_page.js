var firebaseConfig = {
      apiKey: "AIzaSyB53-Ycgmxvpt4D5LL4gUUhMNhcmR7yF5U",
      authDomain: "p-94-92699.firebaseapp.com",
      databaseURL: "https://p-94-92699-default-rtdb.firebaseio.com",
      projectId: "p-94-92699",
      storageBucket: "p-94-92699.appspot.com",
      messagingSenderId: "785138772668",
      appId: "1:785138772668:web:a516ed389c35a0169abeb9"
    };
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
      console.log("working")
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update
      ({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "chat_page.html";
}


function getData()
  {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
   row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names+"</div><hr>";

   document.getElementById("output").innerHTML += row;

  });});}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "chat_page.html"

}

function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}
