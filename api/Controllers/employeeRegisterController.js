const UserService = require( "../../services/UserService" );
const AddressService = require( "../../services/AddressService" );
const ContactService = require( "../../services/ContactService" );
const EmployeeService = require( "../../services/EmployeeService" );
const UserServiceInstance    = new UserService();
const AddressServiceInstance = new AddressService();
const ContactServiceInstance = new ContactService();
const EmployeeServiceInstance    = new EmployeeService();


module.exports = class UserController{
/**
 * @description Create a cord with the provided body
 * @param req {object} Express req object 
 * @param res {object} Express res object
 * @returns {Promise<*>}
 */
async createEmployee(req, res) {
    try {
        // We only pass the body object, never the req object
        const createdUser  = await UserServiceInstance.create(req.body);
        const createdEmployee = await EmployeeServiceInstance.create({user_id: createdUser.body._id,employee_number: req.body.employeenumber});
        const createdContact = await ContactServiceInstance.create({user_id: createdUser.body._id, emailAddress: req.body.email });
        const createdAddress = await AddressServiceInstance.create({user_id: createdUser.body._id});
        return { success: true, employee: createdEmployee, user: createdUser, 
            address:  createdAddress, contact: createdContact};
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
async getEmployee(req, res) {
    try {
          // We only pass the body object, never the req object
          const resEmployee     = await EmployeeServiceInstance.get({employee_number: req.body.employeenumber});
          const resUser  = await UserServiceInstance.get({_id: resEmployee.body[0].user_id});
          const resContact  = await ContactServiceInstance.get({user_id: resUser.body[0]._id});
          const resAddress  = await AddressServiceInstance.get({user_id: resUser.body[0]._id});
          
          //return { success: true, user: resUser.body[0], address: resAddress.body[0],  contact: resContact.body[0],   employee:resEmployee.body[0], }
          return { success: true, employee:{
                                  name: resUser.body[0].firstname, 
                                  surname: resUser.body[0].surname, 
                                  empnum: resEmployee.body[0].employee_number,  
                                  email: resContact.body[0].emailAddress
                                }
                                }

      } catch ( error) {
          return { success: false, err: error};
      }
  }

   /**
 *get user employee
 */
async getUserEmployee(req, res) {
    try {
          const resEmployee     = await UserServiceInstance.get({user_id: req.params.user_id});
          return { success: true, data: resEmployee.body };

      } catch ( error) {
          return { success: false, err: error};
      }
  }
}