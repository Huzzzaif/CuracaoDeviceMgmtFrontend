<template>
  <ion-page>
    <PageNameLogoHeader page-name="Locations" />
    <ion-content>
      <ion-grid :fixed="true">
        <ion-row>
          <ion-col>
            <ion-input
              class="ion-margin-vertical"
              label="LOCATION ID"
              fill="outline"
              placeholder="Enter the location ID"
              v-model="locationId"
            />
            <ion-input
              class="ion-margin-vertical"
              label="NAME"
              fill="outline"
              placeholder="Enter the location name"
              v-model="locationName"
            />
            <ion-select
              class="ion-margin-vertical"
              label="STATUS"
              fill="outline"
              interface="popover"
              placeholder="Active or Inactive?"
              v-model="locationStatus"
            >
              <ion-select-option>Active</ion-select-option>
              <ion-select-option>Inactive</ion-select-option>
            </ion-select>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col size="auto" size-md="3" />
          <ion-col class="ion-text-center">
            <ion-button shape="round" color="medium">CANCEL</ion-button>
          </ion-col>
          <ion-col size="auto" size-md="1" />
          <ion-col class="ion-text-center">
            <ion-button @click="AddLocation" shape="round" color="success"
              >SAVE</ion-button
            >
          </ion-col>
          <ion-col size="auto" size-md="3" />
        </ion-row>
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
  IonButton,
  loadingController,
  toastController,
} from "@ionic/vue";

import SaveCancelButtons from "@/components/SaveCancelButtons.vue";
import PageNameLogoHeader from "@/components/PageNameLogoHeader.vue";
import { ref } from "vue";
import { getDjangoAPI } from "../axios";

// Reactive references for form fields
const locationId = ref("");
const locationName = ref("");
const locationStatus = ref("");
async function AddLocation() {
  const loading = await loadingController.create({
    message: "Saving location...",
  });
  await loading.present();
  try {
    const response = await getDjangoAPI.post("/locations/", {
      location_id: locationId.value,
      name: locationName.value,
      status: locationStatus.value.slice(0, 1),
    });

    if (response.status === 201 || response.status === 200) {
      const toast = await toastController.create({
        message: "Location added successfully",
        duration: 2000,
        color: "success",
      });
      toast.present();
      // Reset the form fields here
      locationId.value = "";
      locationName.value = "";
      locationStatus.value = "";
    } else {
      // Handle any non-successful status codes
      const toast = await toastController.create({
        message: "Failed to add location",
        duration: 2000,
        color: "danger",
      });
      toast.present();
    }
  } catch (error) {
    await loading.dismiss();
    const toast = await toastController.create({
      message: "An error occurred while saving the location",
      duration: 2000,
      color: "danger",
    });
    toast.present();
    console.error(error);
  }
}
</script>
