<template>
    <ion-page>
        <PageNameLogoHeader page-name="Homepage" />
        <ion-content>
            <ion-grid :fixed="true">

                <!--Devices: Add Device and Edit Device-->
                <ion-row>
                    <ion-title>DEVICES</ion-title>
                </ion-row>
                <ion-row>
                    <ion-col>
                        <ion-button router-link="/tabs/add" size="large" fill="clear" color="dark" shape="round" >
                            <ion-icon slot="icon-only" :icon="addOutline"></ion-icon>
                        </ion-button>
                        <ion-label><br>Add Device</ion-label>
                    </ion-col>
                    <ion-col>
                        <ion-button router-link="/tabs/edit" size="large" fill="clear" color="dark" shape="round">
                            <ion-icon slot="icon-only" :icon="settingsOutline"></ion-icon>
                        </ion-button>
                        <ion-label><br>Edit Device</ion-label>
                    </ion-col>
                </ion-row>

                <!--Transactions: Move Device and Dispose Device-->
                <ion-row>
                    <ion-title>TRANSACTIONS</ion-title>
                </ion-row>
                <ion-row color="medium">
                    <ion-col>
                        <ion-button router-link="/tabs/move" size="large" fill="clear" color="dark" shape="round">
                            <ion-icon slot="icon-only" :icon="moveOutline"></ion-icon>
                        </ion-button>
                        <ion-label><br>Move Device</ion-label>
                    </ion-col>
                    <ion-col>
                        <ion-button router-link="/tabs/dispose" size="large" fill="clear" color="dark" shape="round">
                            <ion-icon slot="icon-only" :icon="trashOutline"></ion-icon>
                        </ion-button>
                        <ion-label><br>Dispose Device</ion-label>
                    </ion-col>
                </ion-row>

                <!--Maintenance: Users, Locations, Departments-->
                <ion-row>
                    <ion-title>MAINTENANCE</ion-title>
                </ion-row>
                <ion-row>
                    <ion-col>
                      <ion-button router-link="/tabs/users" size="large" fill="outline" color="dark" expand="block">Users</ion-button> 
                    </ion-col>
                    <ion-col>
                      <ion-button router-link="/tabs/locations" size="large" fill="outline" color="dark" expand="block">Location</ion-button> 
                    </ion-col>
                    <ion-col>
                      <ion-button router-link="/tabs/departments" size="large" fill="outline" color="dark" expand="block">Departments</ion-button> 
                    </ion-col>
                </ion-row>

                <!--Device List, Transaction Log, Import/Export-->
                <ion-row>
                    <ion-col>
                        <ion-button router-link="/tabs/devices" size="large" fill="clear" color="dark" shape="round">
                            <ion-icon slot="icon-only" :icon="listOutline"></ion-icon>
                        </ion-button>
                        <ion-label><br>Device List</ion-label>
                    </ion-col>
                    <ion-col>
                        <ion-button size="large" fill="clear" color="dark" shape="round">
                            <ion-icon slot="icon-only" :icon="timeOutline"></ion-icon>
                        </ion-button>
                        <ion-label><br>Transaction Log</ion-label>
                    </ion-col>
                    <ion-col>
                        <ion-button size="large" fill="clear" color="dark" shape="round">
                            <ion-icon slot="icon-only" :icon="swapVerticalOutline"></ion-icon>
                        </ion-button>
                        <ion-label><br>Import/Export</ion-label>
                    </ion-col>
                </ion-row>

            </ion-grid>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
    import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonText, IonButton, IonIcon, IonTitle, IonLabel} from '@ionic/vue';
    import { addOutline, settingsOutline, moveOutline, trashOutline, listOutline, timeOutline, swapVerticalOutline } from 'ionicons/icons';
    import PageNameLogoHeader from '@/components/PageNameLogoHeader.vue';
</script>

<style scoped>
    ion-button {
        --padding-top: 20px;
        --padding-bottom: 20px;
    }

    ion-grid {
        --ion-grid-column-padding: 30px;
        --ion-grid-row-padding: 30px;
    }

    ion-row {
        border-top: solid 0.5px #3a3a3a;
        border-bottom: solid 0.5px #3a3a3a;
        text-align: center;
    }

    ion-icon {
        font-size: 70px;
    }
</style>