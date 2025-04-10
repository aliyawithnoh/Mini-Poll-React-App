import React, { useState } from 'react';
import PollOption from './PollOption';

const App = () => {
// Initialize state with an array of pet objects
const [pets, setPets] = useState([
{ option: 'Dog', count: 0 },
{ option: 'Bird', count: 0 },
{ option: 'Cat', count: 0 },
{ option: 'Human?', count: 0 },
]);

// Function to handle vote
const handleVote = (index) => {
const newPets = [...pets]; // Create a copy of the pets array
newPets[index].count += 1; // Increment the count for the voted option
setPets(newPets); // Update state
};

// Function to get the current leader
const getLeader = () => {
return pets.reduce((prev, current) => {
return (prev.count > current.count) ? prev : current;
});
};

const leader = getLeader(); // Get the current leader

return (
<div>
<h1>Pet Voting Poll</h1>
{pets.map((pet, index) => (
<PollOption
key={index}
label={pet.option}
count={pet.count}
onVote={() => handleVote(index)} // Pass the index to handleVote
/>
))}
<h2>
Current Leader: {leader.option} with {leader.count} votes
</h2>
</div>
);
};

export default App;