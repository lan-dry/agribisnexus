const UserService = require( "../../services/UserService" );
const AddressService = require( "../../services/AddressService" );
const ContactService = require( "../../services/ContactService" );
const FarmService = require( "../../services/FarmService" );
const UserServiceInstance    = new UserService();
const AddressServiceInstance = new AddressService();
const ContactServiceInstance = new ContactService();
const FarmServiceInstance    = new FarmService();


module.exports = class UserController{
/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async createFarm(req, res) {
    try {
        // We only pass the body object, never the req object
        const createdRecord  = await FarmServiceInstance.create(req.body.farmData);
        req.body.addressData.user_id = createdRecord.body._id;
        req.body.contactData.user_id = createdRecord.body._id;
        const createdAddress = await AddressServiceInstance.create(req.body.addressData);
        const createdContact = await ContactServiceInstance.create(req.body.contactData);
        return { success: true, farm: createdRecord, address:  createdAddress, contact: createdContact};
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
async getFarm(req, res) {
    try {
          // We only pass the body object, never the req object
          const resFarm     = await FarmServiceInstance.get({user_id: req.params.user_id});
          const resContact  = await ContactServiceInstance.get({user_id: resFarm.body[0]._id});
          const resAddress  = await AddressServiceInstance.get({user_id: resFarm.body[0]._id});
          
          return { success: true, farm: resFarm.body, address: resAddress.body, contact: resContact.body};
      } catch ( error) {
          return { success: false, err: error};
      }
  }
}