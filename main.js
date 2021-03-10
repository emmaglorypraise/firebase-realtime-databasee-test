//--------------------Configuration ------------------------//
var firebaseConfig = {
    apiKey: "AIzaSyDQn-p4Bz0fqBRe49GXe_KNgCiAyX0AnjE",
    authDomain: "chat-app-demo-65aa5.firebaseapp.com",
    projectId: "chat-app-demo-65aa5",
    storageBucket: "chat-app-demo-65aa5.appspot.com",
    messagingSenderId: "262763394411",
    appId: "1:262763394411:web:556d073300688aa93ec82e"
};
firebase.initializeApp(firebaseConfig);
//--------------------End of Configuration ------------------------//

//-------------------- --- Ready Data ------------------------//
var nameV, rollV, secV, genV;

function Ready() {
    nameV = document.getElementById('name').value;
    rollV = document.getElementById('rollNo').value;
    secV = document.getElementById('secNo').value;
    genV = document.getElementById('gender').value;
}
//-------------------- --- End of Ready Data ------------------------//

//-------------------- --- Insertion Process ------------------------//
document.getElementById('insert').onclick = function(){
    Ready();
    firebase.database().ref('student/' + rollV).set({
        NameOfStudent: nameV,
        RollNo: rollV,
        Section: secV,
        Gender: genV
    })
}

function Ready() {
    nameV = document.getElementById('name').value;
    rollV = document.getElementById('rollNo').value;
    secV = document.getElementById('secNo').value;
    genV = document.getElementById('gender').value;
}
//-------------------- --- End of Insertion Process ------------------------//

//-------------------- --- Selection Process ------------------------//
document.getElementById('select').onclick = function(){
            Ready();
            firebase.database().ref('student/' + rollV).on('value', function(snapshot){
            document.getElementById('namebox').value = snapshot.val().NameOfStudent;
            document.getElementById('secbox').value = snapshot.val().Section;
            document.getElementById('genbox').value = snapshot.val().Gender;
            });

}      
//-------------------- --- End of Selection Process ------------------------//

//-------------------- --- Update Process ------------------------//
document.getElementById('update').onclick = function(){
            Ready();
            firebase.database().ref('student/' + rollV).update({
                NameOfStudent: nameV,
                Section: secV,
                Gender: genV
            })
}

//-------------------- --- End of Update Process ------------------------//

//-------------------- --- Deletetion Process ------------------------//
    document.getElementById('delete').onclick = function(){
            Ready();
            firebase.database().ref('student/' + rollV).remove()
    }

//-------------------- --- End of Deletion Process ------------------------//
