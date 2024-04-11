<template>
  <ion-page>
    <PageNameLogoHeader page-name="Users" />
    <ion-content>
      <ion-grid :fixed="true">
        <ion-row>
          <ion-col>
            <ion-input
              v-model="username"
              class="ion-margin-vertical"
              label="USER ID"
              fill="outline"
              placeholder="Enter username"
            />
            <ion-input
              v-model="name"
              class="ion-margin-vertical"
              label="NAME"
              fill="outline"
              placeholder="Enter first and last name"
            />
            <ion-select
              v-model="access"
              class="ion-margin-vertical"
              label="ACCESS"
              fill="outline"
              interface="popover"
              placeholder="Select a department"
            >
              <ion-select-option>Cosmetics</ion-select-option>
            </ion-select>
            <ion-input
              v-model="password"
              class="ion-margin-vertical"
              label="PASSWORD"
              fill="outline"
              type="password"
              placeholder="Enter password"
            />
            <ion-select
              v-model="status"
              class="ion-margin-vertical"
              label="STATUS"
              fill="outline"
              interface="popover"
              placeholder="Active or Inactive?"
            >
              <ion-select-option>Active</ion-select-option>
              <ion-select-option>Inactive</ion-select-option>
            </ion-select>
          </ion-col>
        </ion-row>

        <SaveCancelButtons @on-save="saveUser" />
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<style></style>

<script setup lang="ts">
import {
  IonPage,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/vue";
import SaveCancelButtons from "@/components/SaveCancelButtons.vue";
import PageNameLogoHeader from "@/components/PageNameLogoHeader.vue";
import { ref } from "vue";

const username = ref("");
const name = ref("");
const access = ref("");
const password = ref("");
const status = ref("");

function saveUser() {
  console.log(
    "username = " +
      username.value +
      ", name = " +
      name.value +
      ", access = " +
      access.value +
      ", password = " +
      password.value +
      ", status = " +
      status.value
  );
}
</script>
