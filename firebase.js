
// configuração do firebase
const firebaseConfig = {
    apiKey: "AIzaSyAyVWacqzHb65VWay-yfDZVTw8yBVQgI90",
    authDomain: "fir-atentication-ae162.firebaseapp.com",
    projectId: "fir-atentication-ae162",
    storageBucket: "fir-atentication-ae162.appspot.com",
    messagingSenderId: "699655488209",
    appId: "1:699655488209:web:89dcba5828a4e58cf07bf0"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function cadastrar() {
    var auth = null;
    // função de cadastro do firebase com email e senha 
    firebase.auth().createUserWithEmailAndPassword(document.getElementById("email").value, document.getElementById("senha").value)
        .then(function (user) {
            alert("seus dados foi cadastrado com sucesso");
            auth = user;
            //para atualizar o navegador
            document.getElementById('email').value = ''
            document.getElementById('senha').value = ''
        }).catch(function (error) {
            alert("falhar ao cadastrar");
        });
}
