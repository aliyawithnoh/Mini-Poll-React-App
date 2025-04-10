import React, { useState } from 'react';
import PollOption from './PollOption';

const App = () => {
// Initialize state with an array of pet objects
const [pets, setPets] = useState([
{ option: 'Dog', count: 0 },
{ option: 'Cat', count: 0 },
{ option: 'Ferret', count: 0 },
{ option: 'Monkey', count: 0 },
{ option: 'Human?!', count: 0 },
]);

// Function to handle vote
const handleVote = (index) => {
const newPets = [...pets]; 
newPets[index].count += 1; 
setPets(newPets); 
};

const getLeader = () => {
return pets.reduce((prev, current) => {
return (prev.count > current.count) ? prev : current;
});
};

const leader = getLeader(); 

return (
<div>
<h1>What are your Pets?</h1>
{pets.map((pet, index) => (
<PollOption
key={index}
label={pet.option}
count={pet.count}
onVote={() => handleVote(index)} 
/>
))}
<h2>
Current Leader: {leader.option} with {leader.count} votes
</h2>
</div>
);
};

export default App;