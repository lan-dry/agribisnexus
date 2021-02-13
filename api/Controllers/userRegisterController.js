const UserService = require( "../../services/UserService" );
const AddressService = require( "../../services/AddressService" );
const ContactService = require( "../../services/ContactService" );
const AuthenticationService = require("../../services/AuthenticationService")
const PasswordEncryptionService = require("../../services/PasswordEncryptionService.js")
const EmailNotificationService = require("../../services/EmailNotificationService.js")
const ActivationInfoService = require("../../services/ActivationInfoService.js")

//const FarmService = require("../../services/FarmService")
//const FarmServiceInstance = new FarmService();
const UserServiceInstance    = new UserService();
const AddressServiceInstance = new AddressService();
const ContactServiceInstance = new ContactService();
const AuthenticationServiceInstance = new AuthenticationService();
const PasswordEncriptionServiceInstance = new PasswordEncryptionService();
const EmailNotificationServiceInstance = new EmailNotificationService();
const ActivationInfoServiceInstance = new ActivationInfoService();

module.exports = class UserController{
/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async createUser(req, res) {
    try {
        const pwd = PasswordEncriptionServiceInstance.encript(req.body.password);
        const activationCode = Math.floor(Math.random() * 1000000);
        const ConfirmationCode = Math.floor(Math.random() * 1000000000000000000000000000000000000000000);

        // We only pass the body object, never the req object
        const createdRecord  = await UserServiceInstance.create(req.body);
        const createdAddress = await AddressServiceInstance.create({user_id: createdRecord.body._id});
        const createdContact = await ContactServiceInstance.create({user_id: createdRecord.body._id, emailAddress: req.body.email});
        const createdAuthet  = await AuthenticationServiceInstance.create({user_id: createdRecord.body._id, password: pwd.password});
        const createdActivationInfo = await ActivationInfoServiceInstance.create( {user_id: createdRecord.body._id, activation_code: activationCode,  Confirmation_code: ConfirmationCode});
        const emailSendResults = EmailNotificationServiceInstance.activationEmail(createdActivationInfo.body, createdContact.body.emailAddress, createdRecord.body.firstname);
        //const createdFarm   = await FarmServiceInstance.create({user_id: createdRecord.body._id})

        return { success: true, user: createdRecord, address:  createdAddress, contact: createdContact, authet: createdAuthet , actInf: createdActivationInfo, email: emailSendResults};
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
  async getUser(req, res) {
    try {
          // We only pass the body object, never the req object
          const resContact  = await ContactServiceInstance.get({emailAddress: req.body.email});
          const resUser     = await UserServiceInstance.get({_id: resContact.body[0].user_id});
          const resAddress  = await AddressServiceInstance.get({user_id: resContact.body[0].user_id});
          
          return { success: true, user: resUser.body[0], address: resAddress.body, contact: resContact.body};
      } catch ( error) {
          return { success: false, err: error};
      }
  }

/**
*activate user account
*/
  async activate(req, res) {
    try {

          const getActivationInfo = await ActivationInfoServiceInstance.get( req.body );
          let activationRecord;
          let ActivationInfo;
          if(getActivationInfo.body != "none"){
            activationRecord  = await AuthenticationServiceInstance.get( { user_id: req.body.user_id } );
            ActivationInfo = await AuthenticationServiceInstance.update(activationRecord.body[0]._id, {$set: {activation_status: true}});
          }
          console.log(ActivationInfo);
          return { success: true, activationInfo: getActivationInfo, authData: activationRecord, ActivationInfo: ActivationInfo};
      } catch ( error) {
        console.log(error);
          return { success: false, err: error};
      }
  }
}



