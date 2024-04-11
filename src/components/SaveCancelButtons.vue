<template>
    <ion-row>
        <ion-col size="auto" size-md="3" />
        <ion-col class="ion-text-center">
            <ion-button shape="round" color="medium">CANCEL</ion-button>
        </ion-col>
        <ion-col size="auto" size-md="1" />
        <ion-col class="ion-text-center">
            <ion-button @click="$emit('onSave')" shape="round" color="success">SAVE</ion-button>
        </ion-col>
        <ion-col size="auto" size-md="3" />
    </ion-row>
</template>

<script setup lang="ts">
import { IonRow, IonCol, IonButton } from '@ionic/vue';
defineEmits(['onSave'])
</script>