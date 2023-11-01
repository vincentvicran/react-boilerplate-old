import {initializeApp} from 'firebase/app'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDfKL13vlXHhvjlU2ffw3gNS-s83BWoHBE',
  authDomain: 'interstellar-blocks.firebaseapp.com',
  projectId: 'interstellar-blocks',
  storageBucket: 'interstellar-blocks.appspot.com',
  messagingSenderId: '710323521184',
  appId: '1:710323521184:web:c062aa59933897fce6abc5',
  measurementId: 'G-MH8NCZ1QC1'
}

const firebase = initializeApp(firebaseConfig)
export const auth = getAuth(firebase)
