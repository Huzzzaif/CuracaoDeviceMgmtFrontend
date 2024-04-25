<template>
  <ion-page>
    <PageNameLogoHeader page-name="Departments" />
    <ion-content>
      <ion-grid :fixed="true">
        <ion-row>
          <ion-col>
            <ion-input
              v-model="departmentName"
              class="ion-margin-vertical"
              label="DEPARTMENT"
              fill="outline"
              placeholder="Enter the department name"
            />
            <ion-select
              v-model="departmentStatus"
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

        <SaveCancelButtons @on-save="AddDepartmment" />
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
  loadingController,
  toastController,
} from "@ionic/vue";
import SaveCancelButtons from "@/components/SaveCancelButtons.vue";
import PageNameLogoHeader from "@/components/PageNameLogoHeader.vue";
import { ref } from "vue";
import { getDjangoAPI } from "../axios";

const departmentName = ref();
const departmentStatus = ref();

async function AddDepartmment() {
  const loading = await loadingController.create({
    message: "Saving Department...",
  });
  await loading.present();
  try {
    const response = await getDjangoAPI.post("/departments/", {
      department: departmentName.value,
      status: departmentStatus.value.slice(0, 1),
    });

    if (response.status === 201 || response.status === 200) {
      const toast = await toastController.create({
        message: "Location added successfully",
        duration: 2000,
        color: "success",
      });
      toast.present();
      // Reset the form fields here
      departmentName.value = "";
      departmentStatus.value = "";
    } else {
      // Handle any non-successful status codes
      const toast = await toastController.create({
        message: "Failed to add Department",
        duration: 2000,
        color: "danger",
      });
      toast.present();
    }
  } catch (error) {
    console.error(error);
    const toast = await toastController.create({
      message: "An error occurred while saving the Department",
      duration: 2000,
      color: "danger",
    });
    toast.present();
  } finally {
    await loading.dismiss();
  }
}
</script>
