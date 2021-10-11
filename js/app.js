document.addEventListener('DOMContentLoaded',()=> {
    const newItemform = document.querySelector('#new-star-form');
    newItemform.addEventListener('submit', handleNewStarFormSubmit);

    const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAll);
})

const handleNewStarFormSubmit = function(event){
    event.preventDefault();

    const sportListItem = createSportListItem(event.target);
    const sportList = document.querySelector('#star-list');
    sportList.appendChild(sportListItem);

    event.target.reset()
}

const createSportListItem = function (form){
    const sportListItem = document.createElement('li');
    sportListItem.classList.add('star-list-item');

    const name = document.createElement('h2');
    name.textContent = form.name.value;
    sportListItem.appendChild(name);
    
    const sport = document.createElement('h3');
    sport.textContent = form.sport.value;
    sportListItem.appendChild(sport);
    
    const team = document.createElement('p');
    team.textContent = form.team.value;
    sportListItem.appendChild(team);

    return sportListItem;


}

const handleDeleteAll = function (event) {
    const sportList = document.querySelector('#star-list');
    sportList.innerHTML = "";
}