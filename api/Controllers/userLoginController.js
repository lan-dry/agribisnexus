const UserService = require( "../../services/UserService" );
const ContactService = require( "../../services/ContactService" );
const AuthenticationService = require("../../services/AuthenticationService.js")
const PasswordEncryptionService = require("../../services/PasswordEncryptionService.js")
const UserServiceInstance    = new UserService();
const ContactServiceInstance = new ContactService();
const AuthenticationServiceInstance = new AuthenticationService();
const PasswordEncriptionServiceInstance = new PasswordEncryptionService();


module.exports = class UserController{
/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async loginUser(req, res) {
    try {

        // We only pass the body object, never the req object
        const pwd = PasswordEncriptionServiceInstance.encript(req.body.password);
        const resContact     = await ContactServiceInstance.get({emailAddress: req.body.email});
        const resUser        = await UserServiceInstance.get({_id: resContact.body[0].user_id});
        const resAuth        = await AuthenticationServiceInstance.get({user_id: resUser.body[0]._id, password: pwd.password, activation_status: true});
        /***********  log in the user here 
         * Return the following 
         *   1. authentication Token
         *   2. user information
         *   3. user contact 
         *   4. user address
         * *********/

        return { success: true, user: resUser.body[0], reslogin: resAuth.body, contact: resContact.body };
    } catch (error) {
        return { success: false, error: error.err };
    }
}
}