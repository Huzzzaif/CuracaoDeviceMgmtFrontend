<template>
  <ion-page>
    <PageNameLogoHeader page-name="Devices" />
    <ion-content>
      <ion-grid :fixed="true">

        <ion-row>
          <ion-col class="ion-text-center">
            <ion-button id="columnsAlert" color="medium">
              COLUMNS
            </ion-button>
            <ion-alert
              trigger="columnsAlert"
              header="Select the columns to display"
              :buttons="columnsAlertButtons"
              :inputs="columnsAlertInputs"
              @didDismiss="clearChanges()"
            ></ion-alert>
          </ion-col>
          
          <ion-col class="ion-text-center">
            <ion-button color="medium">
              SORT
            </ion-button>
          </ion-col>
        </ion-row>

        <ion-row class="devices-row ion-text-center">
          <ion-col v-for="column in displayedColumns" class="devices-column-border devices-column-top" :size="getColumnSize"><b>{{ column }}</b></ion-col>
        </ion-row>

        <ion-row class="devices-row ion-text-center" v-for="(device, index) in devices">
          <ion-col v-if="index % 2 == 0" :size="getColumnSize" class="devices-column-border" style="background-color: darkgray;" v-for="value in device.getFieldsToDisplay()">
            <ion-text color="light">{{ value }}</ion-text>
          </ion-col>
          <ion-col v-else :size="getColumnSize" class="devices-column-border" style="background-color: lightgray;" v-for="value in device.getFieldsToDisplay()">
            <ion-text color="light">{{ value }}</ion-text>
          </ion-col>
        </ion-row>

      </ion-grid>
    </ion-content>
  </ion-page>
</template>
  
<style>
.devices-row {
  border-color: transparent;
  border-style: solid;
}

.devices-column-border {
  border-color: white;
  border-style: solid;
}

.devices-column-top {
  background-color: lightslategray;
}

b {
  color: black;
}
</style>
  
<script setup lang="ts">
import { IonPage, IonContent, IonGrid, IonRow, IonCol, IonButton, IonAlert, IonText } from '@ionic/vue';
import PageNameLogoHeader from '@/components/PageNameLogoHeader.vue';
import { ref, computed } from 'vue';
import { getDjangoAPI } from '../axios';

class Device {
  serialNumber: string;
  macAddress: string;
  cid: number;
  mid: number;
  storeName: string;
  department: string;
  tid: number;
  pStation: string;
  register: string;
  ipAddress: string;
  itLabelID: string;
  itAssetID: string;
  status: string;
  statusNotes: string;

  constructor(serialNumber: string, macAddress: string, cid: number, mid: number, storeName: string,
              department: string, tid: number, pStation: string, register: string, ipAddress: string,
              itLabelID: string, itAssetID: string, status: string, statusNotes: string) {
    this.serialNumber = serialNumber;
    this.macAddress = macAddress;
    this.cid = cid;
    this.mid = mid;
    this.storeName = storeName;
    this.department = department;
    this.tid = tid;
    this.pStation = pStation;
    this.register = register;
    this.ipAddress = ipAddress;
    this.itLabelID = itLabelID;
    this.itAssetID = itAssetID;
    this.status = status;
    this.statusNotes = statusNotes;
  }

  getFieldsToDisplay(): any[] {
    let fields: any[] = []
    for (var column of displayedColumns.value) {
      switch (column) {
        case 'Serial':
          fields.push(this.serialNumber)
          break;
        case 'Mac Address':
          fields.push(this.macAddress)
          break;
        case 'CID':
          fields.push(this.cid)
          break;
        case 'MID':
          fields.push(this.mid)
          break;
        case 'Store':
          fields.push(this.storeName)
          break;
        case 'Department':
          fields.push(this.department)
          break;
        case 'TID':
          fields.push(this.tid)
          break;
        case 'PStation':
          fields.push(this.pStation)
          break;
        case 'Register':
          fields.push(this.register)
          break;
        case 'IP Address':
          fields.push(this.ipAddress)
          break;
        case 'IT Label ID':
          fields.push(this.itLabelID)
          break;
        case 'IT Asset ID':
          fields.push(this.itAssetID)
          break;
        case 'Status':
          fields.push(this.status)
          break;
        case 'Status Notes':
          fields.push(this.statusNotes)
          break;
      }
    }
    return fields;
  }
}

const devices = ref()

async function getDevices() {
  try {
    const response = await getDjangoAPI.get('/devices/')
    let devicesTemp: Device[] = []
    response.data.forEach((device: any) => {
      devicesTemp.push(new Device(device.serial, device.MAC, device.cid, device.mid, device.store,
                                  device.department, device.tid, device.pstation, device.register,
                                  device.ip, device.labelid, device.itassetid,
                                  device.status, device.statusnotes))
    });
    devices.value = devicesTemp
  } catch (error) {
    console.error(error)
  }
}

getDevices()



let displayedColumns = ref(['Serial', 'Mac Address', 'CID', 'MID', 'Store'])

// Ionic's grid is 12 wide so 12.0 / (total columns) distributes the size evenly
const getColumnSize = computed(() => {
  return (12.0 / displayedColumns.value.length).toString()
})

// Key-value pairs of the changed column's label as a key and the clicked checkbox as a value
const columnsAlertChangedInputs: Map<string, any> = new Map()

function clearChanges() {
  columnsAlertChangedInputs.clear()
}

const columnsAlertButtons = [
  {
    text: 'CANCEL',
    role: 'cancel',
    handler: () => {
      columnsAlertChangedInputs.forEach((cb, label) => {
        cb.checked = displayedColumns.value.includes(label)
      });
    },
  },
  {
    text: 'OK',
    role: 'confirm',
    handler: () => {
      var newDisplayedColumns: string[] = []

      // Add all unchanged columns to new array
      for (var d of displayedColumns.value) {
        if (!columnsAlertChangedInputs.has(d)) {
          newDisplayedColumns.push(d)
        }
      }

      // Add new columns to be displayed to new array
      // Unchecked columns are removed implicitly due to the new array not adding them
      for (var c of columnsAlertChangedInputs.values()) {
        if (c.checked && !displayedColumns.value.includes(c.label)) newDisplayedColumns.push(c.label)
      }

      // Update displayedColumns' value to new array
      displayedColumns.value = newDisplayedColumns
    }
  }
]

function columnsCheckboxHandler(cb: any) {
  var isDisplayed = displayedColumns.value.includes(cb.label)
  if ((cb.checked && !isDisplayed) || (!cb.checked && isDisplayed)) {
    columnsAlertChangedInputs.set(cb.label, cb)
  } else {
    columnsAlertChangedInputs.delete(cb.label)
  }
}

function createColumnsAlertInput(label: string, checked: boolean) {
  return {
    type: 'checkbox',
    label: label,
    checked: checked,
    handler: columnsCheckboxHandler
  }
}

const columnsAlertInputs = [
  createColumnsAlertInput('Serial', true),
  createColumnsAlertInput('Mac Address', true),
  createColumnsAlertInput('CID', true),
  createColumnsAlertInput('MID', true),
  createColumnsAlertInput('Store', true),
  createColumnsAlertInput('Department', false),
  createColumnsAlertInput('TID', false),
  createColumnsAlertInput('PStation', false),
  createColumnsAlertInput('Register', false),
  createColumnsAlertInput('IP Address', false),
  createColumnsAlertInput('IT Label ID', false),
  createColumnsAlertInput('IT Asset ID', false),
  createColumnsAlertInput('Status', false),
  createColumnsAlertInput('Status Notes', false)
]
</script>