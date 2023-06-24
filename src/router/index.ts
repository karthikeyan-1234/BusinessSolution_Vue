import {createRouter, createWebHistory} from 'vue-router';
import PurchaseScreen from '../components/PurchaseScreen.vue';
import InventoryScreen from '../components/InventoryScreen.vue';
import SalesScreen from '../components/SalesScreen.vue';
import LoginScreen from '../components/LoginScreen.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path:"/Login",component:LoginScreen, name: "Login"},
        {path:"/",component:PurchaseScreen, name: "Purchases"},
        {path:"/Purchases",component:PurchaseScreen, name: "Purchases"},
        {path:"/Inventory",component:InventoryScreen, name: "Inventory"},
        {path:"/Sales",component:SalesScreen, name: "Sales"}
    ]
})

router.beforeEach((to) =>{
  
    const publicPages = ['/Login'];
    const authRequired = !publicPages.includes(to.path);
    const auth = localStorage.getItem("jwtToken");
  
    if (authRequired && !auth) {
        return '/Login';
    }
  
  })

export default router;