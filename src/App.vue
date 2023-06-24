<template>

<v-app>
      <v-navigation-drawer
        expand-on-hover
        rail
        v-if='!hide'>
        <v-list>
          <v-list-item
            prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"
            title="Adams Veemer"
            subtitle="admaveem_a88@gmailcom"
          ></v-list-item>
        </v-list>

        <v-divider></v-divider>

        <v-list density="compact" nav>
          
          <v-list-item prepend-icon="mdi-folder" :to="{name:'Purchases'}" title="Purchases" value="purchases">
          </v-list-item>
          <v-list-item prepend-icon="mdi-account-multiple" :to="{name:'Inventory'}" title="Inventory" value="inventory">
          </v-list-item>
          <v-list-item prepend-icon="mdi-star" :to="{name:'Sales'}" title="Sales" value="sales"></v-list-item>
          <v-list-item prepend-icon="mdi-logout" :to="{name:'Login'}" title="LogOut" value="logout">
          </v-list-item>
        </v-list>
        

      </v-navigation-drawer>

        <v-main style="width:2000px;height: 100%;">        
          <router-view></router-view>
        </v-main>    
</v-app>
</template>

<script lang="ts">
export default{
    name:"LoginScreen",
    computed: {
    hide () {
          return this.$route.path === '/Login'; 
        }
}
}
</script>

<style>

</style>