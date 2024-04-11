<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">
        
           <ion-tab-button tab="move" href="/TechTabs/Move">
            <ion-icon aria-hidden="true" :icon="move" />
            <ion-label>Move</ion-label>
          </ion-tab-button>
  
           <ion-tab-button tab="dispose" href="/TechTabs/Dispose">
            <ion-icon aria-hidden="true" :icon="trash" />
            <ion-label>Dispose</ion-label>
          </ion-tab-button>

          <ion-tab-button tab="devices" href="/TechTabs/devices">
            <ion-icon aria-hidden="true" :icon="desktopOutline" />
            <ion-label>Devices</ion-label>
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
  