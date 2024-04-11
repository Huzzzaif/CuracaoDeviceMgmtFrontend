<template>
    <ion-page>
      <ion-tabs>
        <ion-router-outlet></ion-router-outlet>
        <ion-tab-bar slot="bottom">

          <ion-tab-button tab="users" href="/AdminTabs/users">
            <ion-icon aria-hidden="true" :icon="people" />
            <ion-label>Users</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="locations" href="/AdminTabs/locations">
            <ion-icon aria-hidden="true" :icon="storefront" />
            <ion-label>Locations</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="departments" href="/AdminTabs/departments">
            <ion-icon aria-hidden="true" :icon="layers" />
            <ion-label>Departments</ion-label>
          </ion-tab-button>
  
          <ion-tab-button tab="devices" href="/AdminTabs/devices">
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
  