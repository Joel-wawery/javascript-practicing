/*
PROJECT: "Code Explorer" Mini-Game
REVIEWED & CLEANED VERSION
*/

// --- PART 1: PLAYER & WORLD SETUP ---
let player = {
    name: 'Blake',
    health: 100,
    inventory: ['a rusty key'], // Corrected: removed 'this is'
    isAlive: true // Corrected: Changed to a Boolean
};

// Corrected: camelCase name.
// We'll start in The Library for the test.
let currentRoom = 'The Library'; 

// --- PART 2: THE "USER INPUT" ---
// Change this variable to "play" the game
let playerCommand = 'look'; 

// --- PART 3: THE GAME LOGIC ---

// 1. The "Guard Clause"
// We use the "falsy" check: !player.isAlive (read as "if not alive")
if (!player.isAlive) {
    console.log('--- GAME OVER ---');
} else {
    // 2. The Main Game Logic
    // Only run the game if the player is alive.
    console.log('You are in: ' + currentRoom);

    // This is the OUTER switch. It checks the ROOM.
    switch (currentRoom) {
        
        case 'The Library':
            // We are in The Library. Now, check the command.
            // This is the INNER switch.
            switch (playerCommand) {
                case 'look':
                    console.log('The desk is old. On it, you see a small, glowing gem.');
                    break;
                case 'take gem':
                    console.log('You take the gem.');
                    player.inventory.push('glowing gem');
                    break;
                case 'use key':
                    console.log('You use the rusty key on the locked door. It clicks open! The key breaks.');
                    // This is how we change rooms!
                    currentRoom = 'The Treasury'; 
                    // We'd also need to remove the key, but we'll learn that later.
                    break;
                default:
                    console.log('Unknown command: ' + playerCommand);
                    break;
            }
            break; // This 'break' belongs to 'case 'The Library''

        case 'The Treasury':
            // We are in The Treasury. Now, check the command.
            // This is the INNER switch.
            switch (playerCommand) {
                case 'look':
                    console.log('Gold coins are everywhere. You also see a dragon sleeping on a pile of treasure.');
                    break;
                case 'take gold':
                    console.log('You take 10 gold.');
                    player.inventory.push('10 gold');
                    break;
                case 'poke dragon':
                    console.log('The dragon wakes up... and eats you.');
                    player.health = 0;
                    player.isAlive = false;
                    break;
                default:
                    console.log('Unknown command: ' + playerCommand);
                    break;
            }
            break; // This 'break' belongs to 'case 'The Treasury''

        default:
            console.log('You are in a mysterious void...');
            break;
    }

    // After the turn, let's see the player's status
    console.log('--- Player Status ---');
    console.log('Health: ' + player.health);
    console.log('Inventory: ' + player.inventory);
    console.log('Is Alive? ' + player.isAlive);
}

    
