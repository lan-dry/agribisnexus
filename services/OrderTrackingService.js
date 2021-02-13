 //services/OrderTrackingService.j
 const MongooseService = require("./MongooseService"); // Data Access Layer
 OrderTrackingServiceModel = require('../models/orderTracking'); // Database Model
 
 module.exports = class OrderTrackingService {
   /**
    * @description Create an instance of OrderTrackingService
    */
   constructor () {
     // Create instance of Data Access layer using our desired model
     this.MongooseServiceInstance = new MongooseService( OrderTrackingModel );
   }
 /**
    * @description Create an instance of ProduceCategoryService
    */
   constructor () {
    // Create instance of Data Access layer using our desired model
    this.MongooseServiceInstance = new MongooseService( ProduceCategoryModel );
  }

  /**
   * @description Attempt to create a document with the provided object
   * @param documentToCreate {object} Object containing all required fields to
   * create document
   * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
   */
  async create ( documentToCreate ) {
    try {
        const result = await this.MongooseServiceInstance.create( documentToCreate );
        return { success: true, body: result };
    } catch ( error ) {
        return { success: false, err: error };
    }
  }
  
    /**
    * @description Attempt to delete a document with the provided object
    * @param id {object} Object containing all required fields to
    * delete document
    * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
    */
   async delete ( id ) {
     try {
         const result = await this.MongooseServiceInstance.delete( id );
         return { success: true, body: result };
     } catch ( error ) {
         return { success: false, err: error };
     }
   }
   
    /**
    * @description Attempt to retrieve a document with the provided object query 
    * @param query {object} Object containing all required fields to
    * get document
    * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
    */
   async get ( query) {
     try {
         const result = await this.MongooseServiceInstance.find( query );
         if(result.length == 0)
           throw {error: 404, message: "OrderTracking not found"};
         else return { success: true, body: result };
     } /*catch ( error ) {
         throw { success: false, err: error };
     }*/
     finally {}
   }
     /**
    * @description Attempt to update a document with the provided object
    * @param documentIdToUpdate {object} Object containing all required fields to
    *  @param documentToUpdate {object} Object containing all required fields to
    * get document
    * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
    */
   async update ( id, documentToUpdate ) {
     try {
         const result = await this.MongooseServiceInstance.update( id, documentToUpdate);
         return { success: true, body: result };
     } catch ( error ) {
         return { success: false, err: error };
     }
   }

  async getById (id) {
   try {
     const result = await this.MongooseServiceInstance.findById(id);
     return { success: true, body: result}; 
 } catch (error) {
     return { success: false, err: error };
 }
  }

   async getAll () {
    
    try {
        const result = await this.MongooseServiceInstance.find();
        return { success: true, body: result}; 
    } catch (error) {
        return { success: false, err: error };
    }
   }
}
  