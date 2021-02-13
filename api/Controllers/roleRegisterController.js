const UserService = require( "../../services/UserService" );
const FarmService = require( "../../services/FarmService" );
const RoleService = require( "../../services/RoleService" );
const UserServiceInstance    = new UserService();
const RoleServiceInstance    = new RoleService();


module.exports = class UserController{
/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async createRole(req, res) {
    try {
        // We only pass the body object, never the req object
        const createdRecord  = await RoleServiceInstance.create(req.body);
        //const createdAddress = await AddressServiceInstance.create({user_id: createdRecord.body._id});
        //const createdContact = await ContactServiceInstance.create({user_id: createdRecord.body._id});
        return { success: true, role: createdRecord};
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
async getRole(req, res) {
    try {
          // We only pass the body object, never the req object
          const resContact  = await RoleServiceInstance.get({type: req.body.type, _id: req.body._id});
          //const resUser     = await FarmServiceInstance.get({_id: resContact.body._id});
          //const resAddress  = await AddressServiceInstance.get({user_id: resContact.body._id});
          
          return { success: true, role: resContact};
      } catch ( error) {
          return { success: false, err: error};
      }
  }
}