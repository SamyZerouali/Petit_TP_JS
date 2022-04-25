const addBtn = document.getElementById('addBtn'); // On récupère le boutton d'ID "addBtn"

addBtn.addEventListener('click', () =>{
   
    // On crée un élément "div" qu'on stocke dans une variable square
    const square = document.createElement('div');
   
    // Ajouter le style à l'élément
    square.classList.add('square');

    // Rajouter un gestionnaire d'évenement sur le carré
    square.addEventListener('click', () => {
        square.remove();
    });
    
    // Ajouter à la liste de carrés 
    const squareList = document.querySelector('.square-list');
    squareList.appendChild(square);
});