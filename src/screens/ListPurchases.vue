<template>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12" class="shrink">
                <v-row no-gutters>
                    <v-expansion-panels>
                        <v-expansion-panel>
                            <v-expansion-panel-title>
                                <template v-slot>
                                    <v-row no-gutters>
                                        <v-col>
                                            Purchases
                                        </v-col>
                                    </v-row>
                                </template>
                            </v-expansion-panel-title>
                            <v-expansion-panel-text>
                                <v-row no-gutters>
                                    <v-col cols="6" class="shrink">
                                        <v-expand-transition>
                                            <v-card>
                                                <v-card-item v-show="isActive">
                                                    <v-progress-linear :active="isActive" color="deep-purple" height="4"
                                                        indeterminate></v-progress-linear>
                                                </v-card-item>
                                                <v-card-item v-show="showTable">
                                                    <v-table density="compact" fixed-header height="150px">
                                                        <thead>
                                                            <tr>
                                                                <th class="text-center">ID</th>
                                                                <th class="text-center">Date</th>
                                                                <th class="text-center">Vendor</th>
                                                                <th class="text-center">Actions</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr v-for="purchase in purchaseList">
                                                                <td class="text-left"> {{ purchase.id }}</td>
                                                                <td class="text-left">{{ purchase.purchaseDate }}</td>
                                                                <td class="text-left">{{ purchase.vendorId }}</td>
                                                                <td class="text-left">
                                                                    <v-btn outline color="primary" dark size="x-small">
                                                                        <v-icon>mdi-pen</v-icon>
                                                                    </v-btn>
                                                                    <span>&nbsp;</span>
                                                                    <v-btn size="x-small">
                                                                        <v-icon>mdi-delete</v-icon>
                                                                    </v-btn>
                                                                    <span>&nbsp;</span>
                                                                    <v-btn size="x-small"
                                                                        @click="getPurchaseDetail(purchase)">Show</v-btn>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </v-table>
                                                </v-card-item>
                                            </v-card>
                                        </v-expand-transition>
                                    </v-col>

                                    <v-col></v-col>

                                    <v-col cols="5" class="shrink">
                                        <v-expand-x-transition>
                                            <v-card v-show="showDetail">
                                                <v-row no-gutters>
                                                    <v-table density="compact" fixed-header>
                                                    <tbody>
                                                        <tr>
                                                            <td class="text-left">ID</td>
                                                            <td><v-chip><input v-model="selectedPurchase.id" /></v-chip></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">PurchaseID</td>
                                                            <td><v-chip><input v-model="selectedPurchase.PurchaseId" /></v-chip>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Item ID</td>
                                                            <td><v-chip><input v-model="selectedPurchase.ItemId" /></v-chip>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Qty</td>
                                                            <td><v-chip><input v-model="selectedPurchase.Qty" /></v-chip></td>
                                                        </tr>
                                                        <tr>
                                                            <td class="text-left">Rate</td>
                                                            <td><v-chip><input v-model="selectedPurchase.Rate" /></v-chip></td>
                                                        </tr>
                                                    </tbody>
                                                </v-table>
                                                </v-row>
                                                <v-row no-gutters>
                                                    <v-col cols="12">
                                                            <v-btn variant="outlined">Save</v-btn>
                                                            <v-btn variant="outlined">Cancel</v-btn>
                                                    </v-col>
                                                </v-row>                                            
                                            </v-card>
                                        </v-expand-x-transition>
                                    </v-col>
                                </v-row>

                                <v-row no-gutters>
                                    <v-col cols="6">
                                        <div style="margin-top: 3px;">
                                            <v-btn variant="outlined" @click="getAllPurchases">Get Data</v-btn>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-expansion-panel-text>
                        </v-expansion-panel>
                    </v-expansion-panels>
                </v-row>
            </v-col>
        </v-row>

    </v-container>
</template>
<script lang="ts">
import service from '../services/PurchaseService'
import PurchaseDetail from '../models/PurchaseDetail'

export default {
    name: "ListPurchases",
    data: () => {
        return {
            purchaseList: [],
            showDetail: false,
            selectedPurchase: PurchaseDetail,
            isActive: false,
            showTable: false,
            panel: [1],
            expanded: false
        }
    },
    mounted() {
        this.expanded = false;
    },
    methods: {
        async getAllPurchases() {
            console.log("Getting data...");
            this.isActive = true;
            await service.getAllPurchases().then(result => {
                console.log(result.data);
                this.purchaseList = result.data;
                this.showTable = true
            }, err => {
                console.log(err);
            }).finally(() => {
                this.isActive = false;
            })
        },

        getPurchaseDetail(purchase: any) {

            if (this.showDetail)
                this.showDetail = false;
            else
                this.showDetail = true;

            if (this.showDetail) {
                this.selectedPurchase = purchase;
                this.selectedPurchase.id = 1;
                this.selectedPurchase.ItemId = 'X0001';
                this.selectedPurchase.PurchaseId = 'P001'
                this.selectedPurchase.Qty = 500.2;
                this.selectedPurchase.Rate = 40.29;
            }
        }
    }

}
</script>
<style scoped></style>