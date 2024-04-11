<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="add" href="/DevTabs/Add">
          <ion-icon aria-hidden="true" :icon="add" />
          <ion-label>Add</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="edit" href="/DevTabs/Edit">
          <ion-icon aria-hidden="true" :icon="create" />
          <ion-label>Edit</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="devices" href="/DevTabs/devices">
          <ion-icon aria-hidden="true" :icon="desktopOutline" />
          <ion-label>Devices</ion-label>
        </ion-tab-button>
        
        <ion-tab-button tab="devices" href="/DevTabs/ImportDevices">
          <ion-icon aria-hidden="true" :icon="desktopOutline" />
          <ion-label>Import Devices</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="devices" href="/DevTabs/Transactions">
          <ion-icon aria-hidden="true" :icon="desktopOutline" />
          <ion-label>Transaction Logs</ion-label>
        </ion-tab-button>
        

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle, people, storefront, layers, add, create, move, trash, home, logIn, desktopOutline } from 'ionicons/icons';
</script>
