<template>
  <ion-page>
    <ion-content>
      <PageNameLogoHeader page-name="Dispose" />
      
      <AddEditMoveDispose />
    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
import { IonPage, IonContent } from '@ionic/vue';
import PageNameLogoHeader from '@/components/PageNameLogoHeader.vue';
import AddEditMoveDispose from '@/components/AddEditMoveDispose.vue';
</script>