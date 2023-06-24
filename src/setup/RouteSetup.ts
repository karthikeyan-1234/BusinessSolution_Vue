import {createRouter,createWebHistory} from 'vue-router'
import PurchaseScreen from '../components/PurchaseScreen.vue';
import InventoryScreen from '../components/InventoryScreen.vue';
import SalesScreen from '../components/SalesScreen.vue';
import LoginScreen from '../components/LoginScreen.vue'

export default function routeSetup(){
const Routes=[
    {path:"/Login",component:LoginScreen, name: "Login"},
    {path:"/Purchases",component:PurchaseScreen, name: "Purchases"},
    {path:"/Inventory",component:InventoryScreen, name: "Inventory"},
    {path:"/Sales",component:SalesScreen, name: "Sales"},
  ]
  const router = createRouter({
    history: createWebHistory(),
    routes: Routes
  })
  
  router.beforeEach((to) =>{
  
    const publicPages = ['/Login'];
    const authRequired = !publicPages.includes(to.path);
    const auth = localStorage.getItem("jwtToken");
  
    if (authRequired && !auth) {
        return '/Login';
    }
  
  })

  return router;
}