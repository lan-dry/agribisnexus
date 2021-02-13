 //created by landry on 23/01/2021
 const MongooseService = require("./MongooseService"); // Data Access Layer
 ActivationInfoModel = require('../models/activationInfo'); // Database Model
 
 module.exports = class ActivationInfoService {
   /**
    * @description Create an instance of addressService
    */
   constructor () {
    // Create instance of Data Access layer using our desired model
    this.MongooseServiceInstance = new MongooseService( ActivationInfoModel );
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
    * @description Attempt to retrieve a document with the provided object query 
    * @param query {object} Object containing all required fields to
    * get document
    * @returns {Promise<{success: boolean, error: *}|{success: boolean, body: *}>}
    */
   async get ( query) {
     try {
         const result = await this.MongooseServiceInstance.find( query );
         if(result.length == 0) return {body: "none"};
           // throw {error: 404, message: "No Activation Info found"};
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
    * update document
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

}