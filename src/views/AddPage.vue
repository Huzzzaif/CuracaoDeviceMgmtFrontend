<template>
  <ion-page>
    <ion-content>
      <PageNameLogoHeader page-name="Add" />
      
      <AddEditMoveDispose ref="addPageChildComponent" @on-save="AddDevice"/>
    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import PageNameLogoHeader from '@/components/PageNameLogoHeader.vue';
import AddEditMoveDispose from '@/components/AddEditMoveDispose.vue';
import { getDjangoAPI } from '@/axios';
import { ref } from 'vue';

const addPageChildComponent = ref()

async function AddDevice() {
  try {
    const response = await getDjangoAPI.post('/devices/', {
      serial: addPageChildComponent.value.serial,
      MAC: addPageChildComponent.value.mac,
      cid: parseInt(addPageChildComponent.value.cid),
      mid: parseInt(addPageChildComponent.value.mid),
      tid: parseInt(addPageChildComponent.value.tid),
      store: addPageChildComponent.value.store,
      location: addPageChildComponent.value.locations[addPageChildComponent.value.store].id,
      department: addPageChildComponent.value.department,
      pstation: addPageChildComponent.value.pStation,
      register: addPageChildComponent.value.register,
      ip: addPageChildComponent.value.ipAddress,
      labelid: addPageChildComponent.value.itLabelID,
      itassetid: parseInt(addPageChildComponent.value.itAssetID),
      //notes: addPageChildComponent.value.notes,
      status: addPageChildComponent.value.status[0],
      statusnotes: addPageChildComponent.value.statusNotes
    })
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}
</script>