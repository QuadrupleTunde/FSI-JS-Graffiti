let dogContainers = document.querySelectorAll('.column');
let dogDescription = document.querySelectorAll('.dog-description');
let dogVoteOne = document.querySelector('#dog-table1')
// console.log(dogVoteOne);
dogVoteOneCell = 0;

// console.log(localStorage.getItem('dogVoteOneCell'));
if(localStorage.getItem('dogVoteOneCell') === null){
    var dogVoteOneCell = 0
}
else{
    var dogVoteOneCell = parseInt(localStorage.getItem('dogVoteOneCell'));
    dogVoteOne.textContent =dogVoteOneCell;
}
for(let i = 0; i < dogContainers.length; i++){
    // console.log(dogContainers)
    let button = document.createElement('button');
    let className = 'dog-button' + String(i);
    button.setAttribute('class', className);
    //console.log(button)
    dogContainers[i].append(button);
    button.textContent = 'vote';
    button.style.color = 'white';
    button.style.backgroundColor = 'blue';
}
for(i =0; i< dogDescription.length; i++){
    // console.log(dogDescription)
    dogDescription[i].remove();
 }
 
 

let dogButtonOne= document.querySelector('.dog-button0')
dogButtonOne.addEventListener('click', function(){
//console.log('i was clicked')
dogVoteOneCell = dogVoteOneCell + 1;
dogVoteOne.textContent =dogVoteOneCell;
localStorage.setItem('dogVoteOneCell', dogVoteOneCell);


})

dogVoteTwoCell = 0;

let dogVoteTwo = document.querySelector('#dog-table2')
// console.log(dogVoteTwo);
console.log(localStorage.getItem('dogVoteTwoCell'));
if(localStorage.getItem('dogVoteTwoCell') === null){
    var dogVoteTwoCell = 0
}
else{
    var dogVoteTwoCell = parseInt(localStorage.getItem('dogVoteTwoCell'));
    dogVoteTwo.textContent =dogVoteTwoCell;
}

 

let dogButtonTwo= document.querySelector('.dog-button1')
dogButtonTwo.addEventListener('click', function(){
//console.log('i was clicked')
dogVoteTwoCell = dogVoteTwoCell + 1;
dogVoteTwo.textContent =dogVoteTwoCell;
localStorage.setItem('dogVoteTwoCell', dogVoteTwoCell);


})

dogVoteThreeCell = 0;

let dogVoteThree = document.querySelector('#dog-table3')
// console.log(dogVoteThree);
console.log(localStorage.getItem('dogVoteThreeCell'));
if(localStorage.getItem('dogVoteThreeCell') === null){
    var dogVoteThreeCell = 0
}
else{
    var dogVoteThreeCell = parseInt(localStorage.getItem('dogVoteThreeCell'));
    dogVoteThree.textContent = dogVoteThreeCell;
}

 

let dogButtonThree = document.querySelector('.dog-button2')
dogButtonThree.addEventListener('click', function(){
//console.log('i was clicked')
dogVoteThreeCell = dogVoteThreeCell + 1;
dogVoteThree.textContent = dogVoteThreeCell;
localStorage.setItem('dogVoteThreeCell', dogVoteThreeCell);


})


