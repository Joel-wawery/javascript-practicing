/*project to set up a login system for a website .here i need to check the status of the user and give them the 
correct welcome message */
//variables to set the value to be admin and userName
const userRole = 'subscriber';
const userName = 'Bob';
//conditional loop to check if the admin role is set to admin role
if (userRole === 'admin') {
    //welcome the administrator
    console.log('welcome administrator! you have full control');
} else if (userRole === 'editor') {
    //welcome message for the editor
    console.log('welcome editor!you can write full content');
} else if ( userRole === 'guest') {
    //welcome the guest
    console.log('welcome guest!! you have limited access points ');
} else {
    //this is an unknown user
    console.log('unknown user role');
}
/*this code utilises the power of clean code of using truthy and falsy values  */
if (userName) {
    //logging the userName
    console.log(userName);
} else {
    //logging the anonymous user
    console.log('anonymous user detected');
}
