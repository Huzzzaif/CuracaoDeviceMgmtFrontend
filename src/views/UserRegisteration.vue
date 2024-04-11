<template>
  <ion-page>
    <ion-content>
      <div class="flex-center">
        <ion-card class="ion-no-margin">
          <ion-card-header>
            <ion-card-title class="card-title"
              >Curacao
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
                placeholder="Enter text"
                type="email"
                :class="{ 'is-invalid': emailError }"
                @change="validateEmail"
              ></ion-input>
              <ion-text color="danger" v-if="emailError" class="wrap-text">{{ emailError }}</ion-text>
            </ion-item>

            <ion-item>
              <ion-input
                v-model="password"
                label="Password"
                label-placement="floating"
                placeholder="Enter text"
                type="password"
                :class="{ 'is-invalid': passwordError }"
                @change="validatePassword"
              ></ion-input>
              <ion-text color="danger" v-if="passwordError" class="wrap-text">{{ passwordError }}</ion-text>
            </ion-item>

            <ion-item>
              <ion-input
                v-model="reenter_password"
                label="Re-enter password"
                label-placement="floating"
                placeholder="Enter text"
                type="password"
                :class="{ 'is-invalid': reenterPasswordError }"
                @change="validateReenterPassword"
              ></ion-input>
              <ion-text color="danger" v-if="reenterPasswordError" class="wrap-text">{{ reenterPasswordError }}</ion-text>
            </ion-item>

            <ion-item>
              <ion-select
                v-model="dropdown_value"
                label="Select an option"
                label-placement="floating"
                :class="{ 'is-invalid': dropdownError }"
                @ionChange="dropdown_value = $event.detail.value; validateDropdown()"
              >
                <ion-select-option value="developer">Developer</ion-select-option>
                <ion-select-option value="admin">Admin</ion-select-option>
                <ion-select-option value="technician">Technician</ion-select-option>
              </ion-select>
              <ion-text color="danger" v-if="dropdownError" class="wrap-text">{{ dropdownError }}</ion-text>
            </ion-item>

            <ion-button class="login-button" size="default" @click="register" :disabled="!isFormValid()"
              >REGISTER</ion-button
            >
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { ref , computed } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useCookies } from "@vueuse/integrations/useCookies";
import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonInput,
  IonButton,
} from "@ionic/vue";
import "../styles/login.css";

const email = ref("");
const password = ref("");
const reenter_password = ref("");
const dropdown_value = ref("");
const emailError = ref("");
const passwordError = ref("");
const reenterPasswordError = ref("");
const dropdownError = ref("");
const router = useRouter();

// Setup CSRF token for Axios requests
const cookies = useCookies();
const csrfToken = cookies.get("csrftoken"); // Adjust if your CSRF cookie name differs

if (csrfToken) {
  axios.defaults.headers.common["X-CSRFToken"] = csrfToken;
}

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

function validateReenterPassword() {
  if (reenter_password.value !== password.value) {
    reenterPasswordError.value = "Passwords do not match!";
  } else {
    reenterPasswordError.value = "";
  }
}

function validateDropdown() {
  if (!dropdown_value.value) {
    dropdownError.value = "Please select an option";
  } else {
    dropdownError.value = "";
  }
}

function isFormValid() {
  return email.value && password.value && reenter_password.value && dropdown_value.value && !emailError.value && !passwordError.value && !reenterPasswordError.value && !dropdownError.value;
}

async function register() {
  if (!isFormValid()) {
    return;
  }

  try {
    const response = await axios.post(
      "http://localhost:8000/signup/",
      {
        email: email.value,
        password: password.value,
        reenter_password: reenter_password.value,
        role: dropdown_value.value,
      }
    );
    console.log("Registration successful", response);
    router.push("/login");
  } catch (error: any) {
    console.error("An error occurred.", error.response);
  }
}
</script>

