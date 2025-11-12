/*this code teaches us the use of switch statement and why its good to use it against a single variable */
//variable command that is set to fetch
let command = 'update';

switch(command) {
    case'fetch':
         console.log('retrieving your data');
         break;
    case'save':
        console.log('saving your data');
        break;
    case'delete':
        console.log('deleting data');
        break;
    case'info':
        console.log('displaying the information')
        break;       
        
     default:
        console.log('unknown user role');
        break;   

}