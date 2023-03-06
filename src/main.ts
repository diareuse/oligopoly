import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {initializeApp} from "firebase/app";
import {getAnalytics} from "firebase/analytics";

import App from './App.vue'
import router from './router'

import './assets/main.css'

const firebaseConfig = {
    apiKey: "AIzaSyB9f081hs6t2drRL0Ed_xD5fY8_CuGRrX8",
    authDomain: "oligopoly-cz.firebaseapp.com",
    projectId: "oligopoly-cz",
    storageBucket: "oligopoly-cz.appspot.com",
    messagingSenderId: "1003642128770",
    appId: "1:1003642128770:web:7d47ebc73e0725a156a79b",
    measurementId: "G-NTCWWR7B9Z"
};

const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);
const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
