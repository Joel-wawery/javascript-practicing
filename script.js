/*the user object challenge which will teach me methods and function expressions */
const user = {
    //1.properties of the user
    userName: 'Blakely',
    points: 0, // This is lowercase 'p'

    //2.addPoints Methods
    //we write it directly inside the object
    //this is the "modern Method syntax"
    addPoints(pointsToAdd) {
        // 'this'property directly refers to  the user object
        
        // FIX 1: Must be 'this.points'
        this.points += pointsToAdd; 
        
        //logging the method for clarity
        console.log(`Added ${pointsToAdd} points. New Total: ${this.points}`);

    },

    //geting profileSummary method
    getProfileSummary() {
        // 'this'also refers to the 'user' here
        //we use Template Literals to build the String
        
        // FIX 2: Must be 'this.points'
        return `user: ${this.userName}, Points: ${this.points}`;
    }
};

//callling the method addPoints
user.addPoints(50);
user.addPoints(30);

//calling the method getProfileSummary method and store the returned string
const summary = user.getProfileSummary();

//log the final summary
console.log(summary)
