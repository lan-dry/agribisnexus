 //services/MethodService.j
 const MongooseService = require("./MongooseService"); // Data Access Layer
 MethodModel = require('../models/Method'); // Database Model
 
 module.exports = class MethodService {
   /**
    * @description Create an instance of MethodService
    */
   constructor () {
     // Create instance of Data Access layer using our desired model
     this.MongooseServiceInstance = new MongooseService( MethodModel );
   }
 
   /**
    * @description Attempt to create a method with the provided object
    * @param methodToCreate {object} Object containing all required fields to
    * create method
    * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
    */
   async create ( methodToCreate ) {
     try {
         const result = await this.MongooseServiceInstance.create( methodToCreate );
         return { success: true, body: result };
     } catch ( error ) {
         return { success: false, err: error };
     }
   }
 
   async getMethod (id) {
   }
 
    async getAllmethods () {
     
     try {
         const result = await this.MongooseServiceInstance.find();
         return { success: true, body: result}; 
     } catch (error) {
         return { success: false, err: error };
     }
    }
}