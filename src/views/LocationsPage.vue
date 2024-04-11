<template>
  <ion-page>
    <PageNameLogoHeader page-name="Locations"/>
    <ion-content>
      <ion-grid :fixed="true">

        <ion-row>
          <ion-col>
            <ion-input class="ion-margin-vertical" label="LOCATION ID" fill="outline" placeholder="Enter the location ID" />
            <ion-input class="ion-margin-vertical" label="NAME" fill="outline" placeholder="Enter the location name" />
            <ion-select class="ion-margin-vertical" label="STATUS" fill="outline" interface="popover" placeholder="Active or Inactive?">
              <ion-select-option>Active</ion-select-option>
              <ion-select-option>Inactive</ion-select-option>
            </ion-select>
          </ion-col>
        </ion-row>

        <SaveCancelButtons/>

      </ion-grid>
    </ion-content>
  </ion-page>
</template>
  
<style>

</style>

<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonInput, IonSelect, IonSelectOption } from '@ionic/vue';
import SaveCancelButtons from '@/components/SaveCancelButtons.vue';
import PageNameLogoHeader from '@/components/PageNameLogoHeader.vue';
</script>