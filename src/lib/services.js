import { firebaseApp} from "./config.js";
import { navigateTo } from "../navigation/navigate.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  getFirestore,
  collection,
  addDoc,
  updateProfile,
} from "./firebase.js";

// iniciando autenticação
const auth = getAuth(firebaseApp);

// inicializando a firestore
const store = getFirestore(firebaseApp);


//As funções descritas na documentação serão inicializadas e escritas aqui. LEMBRAR de exportá-las para os templates!
export const createCollection = collection(store,"posts")

//Migrar para outra pasta
export function templatePost(text){
   const post ={
    name: auth.currentUser.displayName,
    text:text,
    user_id:"Admin",
    likes:[] ,
    comments: 0,
    data: 0, 
  }
return post;  
}

export const createPost = (post)=>{
 return addDoc(createCollection, post)
};


//Função de cadastro
export function signUp(email, pass, displayName) {
  createUserWithEmailAndPassword(auth, email, pass)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      updateProfile(user,{displayName:displayName})
      navigateTo("#profile");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, ":", errorMessage);
    });
}

//login com e-mail e senha
export const logInWithEmailAndPassword = (email, pass) => {
  return signInWithEmailAndPassword(auth, email, pass);
};

//login com Google
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
 return signInWithPopup(auth, provider);
};
