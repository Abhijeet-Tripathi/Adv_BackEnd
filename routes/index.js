const express= require ('express');

const router=express.Router();
const homeController=require('../controllers/home_controllers');


router.get('/',homeController.home);
router.get('/sidebar',homeController.sidebar);
// keep extra attention to using .use instead of .get
router.use('/users',require('./users'));
router.use('/posts', require('./posts'));


console.log("Router is running");
module.exports=router;