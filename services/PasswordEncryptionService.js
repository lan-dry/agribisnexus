const crypto = require('crypto');

module.exports = class encriptionSrvc {

// Create a service forthis code
constructor() {}

encript ( passwordToEncript ) {
    try {
        const key = 'salt_from_the_user_document';
        const cipher = crypto.createCipher('aes-256-cbc', key);
        cipher.update(passwordToEncript, 'utf8', 'base64');
        const encryptedPassword = cipher.final('base64');
        return {password: encryptedPassword};
    } catch ( error ) {
        return {err: error} ;
    }
}

}