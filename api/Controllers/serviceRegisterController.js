const UserService = require( "../../services/UserService" );
const AddressService = require( "../../services/AddressService" );
const ContactService = require( "../../services/ContactService" );
const FarmService = require( "../../services/FarmService" );
const ServiceService = require( "../../services/ServiceService" );
const ProduceService = require( "../../services/ProduceService" );
const UserServiceInstance    = new UserService();
const AddressServiceInstance = new AddressService();
const ContactServiceInstance = new ContactService();
const FarmServiceInstance    = new FarmService();
const ProduceServiceInstance = new ProduceService();
const ServiceServiceInstance = new ServiceService();
 // TODO : add serviceProvider ---- service

module.exports = class UserController{
/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async createService(req, res) {
    try {
        // We only pass the body object, never the req object
        const createdRecord  = await ServiceServiceInstance.create(req.body);
        return { success: true, produce: createdRecord};
    } catch (error) {
        return { success: false, err: error };
    }
}

  /**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async getService(req, res) {
    try {
          // We only pass the body object, never the req object
          const resContact  = await ServiceServiceInstance.get({name: req.body.name});
          //const resUser     = await FarmServiceInstance.get({_id: resContact.body._id});
          //const resAddress  = await AddressServiceInstance.get({user_id: resContact.body._id});
          
          return { success: true, produce: resContact};
      } catch ( error) {
          return { success: false, err: error};
      }
  }
}