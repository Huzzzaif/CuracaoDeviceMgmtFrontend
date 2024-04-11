<template>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          <ion-grid>
            <ion-row>
              <ion-col style="font-size: 135%;">{{ pageName }}</ion-col>
              <ion-col />
              <ion-col size="auto">
                <ion-img src="../public/icuracaologo.png" />
              </ion-col>
            </ion-row>
          </ion-grid>
        </ion-title>
      </ion-toolbar>
    </ion-header>
</template>

<script setup lang="ts">
import { IonHeader, IonToolbar, IonTitle, IonGrid, IonRow, IonCol, IonImg } from '@ionic/vue';
defineProps({
  pageName: String,
});
</script>