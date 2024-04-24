<template>
  <ion-page>
    <ion-content>
      <div class="flex-center">
        <ion-card>
          <ion-card-header>
            <ion-card-title class="card-title">
              Curacao
              <ion-img
                class="login-image"
                src="../public/Curacao.png"
              ></ion-img>
            </ion-card-title>
          </ion-card-header>

          <ion-card-content>
            <ion-item>
              <ion-input
                v-model="email" 
                label="Email"
                label-placement="floating"
                placeholder="Enter your email"
                type="email"
                :class="{ 'is-invalid': emailError }"
                @change="validateEmail"
              ></ion-input>
              <ion-text color="danger" v-if="emailError">{{ emailError }}</ion-text>
            </ion-item>

            <ion-item>
              <ion-input
                v-model="password"
                label="Password"
                label-placement="floating"
                placeholder="Enter your password"
                type="password"
                :class="{ 'is-invalid': passwordError }"
                @change="validatePassword"
              ></ion-input>
              <ion-text color="danger" v-if="passwordError">{{ passwordError }}</ion-text>
            </ion-item>
            <ion-button
              class="recover-button"
              color="dark"
              fill="clear"
              size="large"
              >Forgot email/password</ion-button
            >
            <ion-text color="danger" v-if="loginError">{{ loginError }}</ion-text>
            <ion-button class="login-button" size="large" @click="login" 
              >LOGIN</ion-button
            >
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>



//yet to create the forgot password page and the 2 factor authentication

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonButton,
  IonImg,
  IonText,
} from "@ionic/vue";
import PageNameLogoHeader from "@/components/PageNameLogoHeader.vue";
import { ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useCookies } from "@vueuse/integrations/useCookies";
import "../styles/login.css";

const bypassLoginForTesting = false;
const email = ref("");
const password = ref("");
const router = useRouter();
const cookies = useCookies();

const emailError = ref("");
const passwordError = ref("");
const loginError = ref("");

function validateEmail() {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  if (!emailRegex.test(email.value)) {
    emailError.value = "Invalid email format";
  } else {
    emailError.value = "";
  }
}

function validatePassword() {
  if (password.value.length < 8) {
    passwordError.value = "Password must be at least 8 characters long";
  } else {
    passwordError.value = "";
  }
}

function login() {
  if (bypassLoginForTesting) {
    console.log("Login bypassed for testing purposes");
    router.push("/tabs/home");
    return;
  }
  const data = {
    email: email.value,
    password: password.value,
  };
  axios
    .post("https://curacaodevicemgmt-test.azurewebsites.net/auth/login/", data)
    .then((response) => {
      console.log("Login successful:", response.data);
      const Token = response.data.token;
      cookies.set("authToken", Token);
      
      // Fetch user role based on email and id
      axios
        .get(`https://curacaodevicemgmt-test.azurewebsites.net/signup/?email=${email.value}`)
        .then((userResponse) => {
          if (userResponse.data.role === 'admin') {
            router.push("/AdminTabs/users");
          } else if (userResponse.data.role === 'developer') {
            router.push("/DevTabs/add")
          } else if (userResponse.data.role === 'technician') {
            router.push("/TechTabs/move")
          } else {
            // Handle other roles here
          }
        })
        .catch((userError) => {
          console.error("Error fetching user role:", userError);
        });
    })
    .catch((error) => {
      console.error("Login error:", error);
      loginError.value = error.message;
    });
}

</script>
