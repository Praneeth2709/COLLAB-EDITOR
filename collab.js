// Replace these with your own Firebase config values
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
var db = firebase.database();
var box = document.getElementById('editor');
var docRef = db.ref('document');

box.addEventListener('input', function() {
    docRef.set(box.value);
});

docRef.on('value', function(snapshot) {
    var data = snapshot.val();
    if (data !== box.value) {
        box.value = data;
    }
});