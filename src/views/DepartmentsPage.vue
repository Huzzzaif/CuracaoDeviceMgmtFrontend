<template>
  <ion-page>
    <PageNameLogoHeader page-name="Departments"/>
    <ion-content>
      <ion-grid :fixed="true">

        <ion-row>
          <ion-col>
            <ion-input v-model="departmentName" class="ion-margin-vertical" label="DEPARTMENT" fill="outline" placeholder="Enter the department name" />
            <ion-select v-model="departmentStatus" class="ion-margin-vertical" label="STATUS" fill="outline" interface="popover" placeholder="Active or Inactive?">
              <ion-select-option>Active</ion-select-option>
              <ion-select-option>Inactive</ion-select-option>
            </ion-select>
          </ion-col>
        </ion-row>

        <SaveCancelButtons @on-save="addDepartment"/>

      </ion-grid>
    </ion-content>
  </ion-page>
</template>
  
<style></style>

<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonInput, IonSelect, IonSelectOption } from '@ionic/vue';
import SaveCancelButtons from '@/components/SaveCancelButtons.vue';
import PageNameLogoHeader from '@/components/PageNameLogoHeader.vue';
import { ref } from 'vue';
import { getDjangoAPI } from '../axios';

const departmentName = ref()
const departmentStatus = ref()

async function addDepartment() {
  try {
    const response = await getDjangoAPI.post('/departments/', {
      department: departmentName.value,
      status: departmentStatus.value[0]
    })
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
</script>