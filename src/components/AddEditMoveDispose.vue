<template>
  <ion-grid :fixed="true">
    <ion-row>
      <ion-col>
        <ion-input
          v-model="serial"
          label="SERIAL"
          class="ion-margin-vertical"
          fill="outline"
          placeholder="Enter serial number"
        />
        <ion-input
          v-model="mac"
          label="MAC ADDRESS"
          class="ion-margin-vertical"
          fill="outline"
          placeholder="Enter MAC address"
        />
        <ion-input
          v-model="cid"
          label="CID#"
          type="number"
          class="ion-margin-vertical"
          fill="outline"
          placeholder="Enter CID#"
        />
        <ion-input
          v-model="mid"
          label="MID#"
          type="number"
          class="ion-margin-vertical"
          fill="outline"
          placeholder="Enter MID#"
        />
        <ion-input
          v-model="tid"
          label="TID#"
          type="number"
          class="ion-margin-vertical"
          fill="outline"
          placeholder="Enter TID#"
        />
        <ion-select
          v-model="store"
          label="STORE"
          class="ion-margin-vertical"
          fill="outline"
          interface="popover"
          placeholder="Select a store"
        >
          <ion-select-option v-for="location in locations">{{
            location.name
          }}</ion-select-option>
        </ion-select>
        <ion-select
          v-model="department"
          label="LOCATION/DEPARTMENT"
          class="ion-margin-vertical"
          fill="outline"
          interface="popover"
          placeholder="Select a location/department"
        >
          <ion-select-option v-for="department in departments">{{
            department.department
          }}</ion-select-option>
        </ion-select>
        <ion-input
          v-model="pStation"
          label="PSTATION"
          class="ion-margin-vertical"
          fill="outline"
          placeholder="Enter PSTATION"
        />
        <ion-input
          v-model="register"
          label="REGISTER"
          class="ion-margin-vertical"
          fill="outline"
          placeholder="Enter REGISTER"
        />
        <ion-input
          v-model="ipAddress"
          label="IP ADDRESS"
          class="ion-margin-vertical"
          fill="outline"
          placeholder="Enter IP address"
        />
        <ion-input
          v-model="itLabelID"
          label="IT LABEL ID"
          class="ion-margin-vertical"
          fill="outline"
          placeholder="Enter IT LABEL ID"
        />
        <ion-input
          v-model="itAssetID"
          type="number"
          label="IT ASSET ID"
          class="ion-margin-vertical"
          fill="outline"
          placeholder="Enter IT ASSET ID"
        />
        <ion-textarea
          v-model="notes"
          label="NOTES"
          class="ion-margin-vertical"
          fill="outline"
          placeholder="Enter notes"
        ></ion-textarea>
        <ion-select
          v-model="status"
          label="STATUS"
          class="ion-margin-vertical"
          fill="outline"
          interface="popover"
          placeholder="Select a status"
        >
          <ion-select-option>Active</ion-select-option>
          <ion-select-option>Inactive</ion-select-option>
        </ion-select>
        <ion-textarea
          v-model="statusNotes"
          label="STATUS NOTES"
          class="ion-margin-vertical"
          fill="outline"
          placeholder="Enter status notes"
        ></ion-textarea>
      </ion-col>
    </ion-row>

    <SaveCancelButtons @on-save="$emit('onSave')" />
  </ion-grid>
</template>

<script setup lang="ts">
import {
  IonGrid,
  IonRow,
  IonCol,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea,
} from "@ionic/vue";
import SaveCancelButtons from "./SaveCancelButtons.vue";
import { ref } from "vue";
import { getDjangoAPI } from "../axios";

interface LocationInfo {
  name: string;
  id: number;
}

const locations = ref<Record<string, LocationInfo>>(
  {} as Record<string, LocationInfo>
);
const departments = ref();

async function getLocations() {
  try {
    const response = await getDjangoAPI.get("/locations/");
    //"store" is a variable that holds the location name but we also need the location id in the post request
    const locationsTemp: Record<string, LocationInfo> = {};
    response.data.forEach((location: any) => {
      locationsTemp[location.name] = {
        name: location.name,
        id: location.id,
      };
    });
    locations.value = locationsTemp;
  } catch (error) {
    console.error(error);
  }
}

async function getDepartments() {
  try {
    const response = await getDjangoAPI.get("/departments/");
    let departmentsTemp: any[] = [];
    response.data.forEach((department: any) => {
      departmentsTemp.push(department);
    });
    departments.value = departmentsTemp;
  } catch (error) {
    console.error(error);
  }
}

getLocations();
getDepartments();

const serial = ref();
const mac = ref();
const cid = ref();
const mid = ref();
const tid = ref();
const store = ref();
//const location = ref()
const department = ref();
const pStation = ref();
const register = ref();
const ipAddress = ref();
const itLabelID = ref();
const itAssetID = ref();
const notes = ref();
const status = ref();
const statusNotes = ref();

defineEmits(["onSave"]);
defineExpose({
  locations,
  serial,
  mac,
  cid,
  mid,
  tid,
  store,
  location,
  department,
  pStation,
  register,
  ipAddress,
  itLabelID,
  itAssetID,
  notes,
  status,
  statusNotes,
});
</script>
