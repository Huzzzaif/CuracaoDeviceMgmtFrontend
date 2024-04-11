<template>
  <ion-page>
    <ion-content>
      <PageNameLogoHeader page-name="Move">
      </PageNameLogoHeader>
      
      <AddEditMoveDispose />
    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
import { IonPage, IonContent, IonButton } from '@ionic/vue';
import PageNameLogoHeader from '@/components/PageNameLogoHeader.vue';
import AddEditMoveDispose from '@/components/AddEditMoveDispose.vue';
import { useRouter } from 'vue-router';

const router = useRouter();


</script>