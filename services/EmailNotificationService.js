module.exports = class EmailsService{



    constructor() {}

      async activationEmail(activationInfo, recipientEmail, recipientFirstName){
        console.log(activationInfo);
        console.log(recipientEmail);
        console.log(recipientFirstName);

          try{

            var mailOptions = {
                from: 'activation@agribiznexus.co.za',
                to: recipientEmail,
                subject: 'Account activation',
                // text: 'Hello',
                //html: "<html><h3>HELLO "+recipientFirstName+" !</h3><p>Welcome on QUICKMED</p><p>Use the link below to activate your account. </p> <p> <span>LINK : </span> <a title=\"Account validation for QUICKMED\" href=\"http://quickmed.co.za/account-activation/"+activationInfo.user_id+"/"+activationInfo.Confirmation_code+"/"+activationInfo.activation_code+"\">Activate your account</a></p></html>"
                html: "<html><h3>Hello "+recipientFirstName+" !</h3><p>Welcome To AGRIBIZNEXUS FARM MANAGEMENT SYSTEM</p><p>Use the link below to activate your account. </p> <p> <span>Click here: </span> <a title=\"Account validation for QUICKMED\" href=\"https://agribiznexus.co.za/account-activation/"+activationInfo.user_id+"/"+activationInfo.Confirmation_code+"/"+activationInfo.activation_code+"\">Activate your account</a></p></html>"
            };
              var nodemailer = require('nodemailer');
              var transporter = nodemailer.createTransport({
              host: "mail.agribiznexus.co.za",
              port: 465,
              secure: true, // true for 465, false for other ports
              auth: {
                  user: "activation@agribiznexus.co.za", // generated ethereal user
                  pass: "Abn2021#@", // generated ethereal password
              },
          });
  
          
          const mailresults = await transporter.sendMail(mailOptions);
          /*, function(error, info){
              if (error) {
                  console.log(error);
              } else {
                  console.log(mailOptions.to);
                  res.status(201).json(
                      {
                          status: "success",
                          message: 'Email sent:',
                          to: mailOptions.to
                      }
                  );
              }
          }*/
          console.log("Email options " +  mailOptions.to);
          return mailOptions;
          } catch(error){
            console.log("email send problem" + error);
            return error;
          }
          
      }
  
  
      async sendForgottenMail(user, res){
          var nodemailer = require('nodemailer');
          var transporter = nodemailer.createTransport({
              service: 'gmail',
              auth: {
                  user: 'moo.sdkgames@gmail.com',
                  pass: 'ajokfabdzfheudpq'
              }
          });
  
          var mailOptions = {
              from: 'moo.sdkgames@gmail.com',
              to: user.email,
              subject: 'recover password',
              html: "<html><h3>HELLO "+user.username+" !</h3><p>Use the link below to activate your account. </p> <p> <span>LINK : </span> <a title=\"Account validation for help123\" href=\"https://agribiznexus.co.za/recover-password/"+user.reset_password_code+"/"+user.username+"/"+user._id+"\">Activate your account</a></p></html>"
          };
  
          transporter.sendMail(mailOptions, function(error, info){
              if (error) {
                  console.log(error);
              } else {
                  res.status(201).json(
                      {
                          status: "success",
                          message: 'Email sent:',
                          to: mailOptions.to
                      }
                  );
              }
          });
      }
  }
  
  
  