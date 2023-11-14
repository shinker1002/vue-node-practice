import { createRouter, createWebHistory } from "vue-router"; 
const router = createRouter({  
    history: createWebHistory(""),
    routes: [   
        {      
            path: "/",     
            name: "main",     
            component: () => import("../components/main.vue"),    
        },
        {     
            path: "/test",      
            name: "test",      
            component: () => import("../components/test.vue"),    
        },  
    ],
});

export default router;