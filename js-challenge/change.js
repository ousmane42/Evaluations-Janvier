// Sara, je fais le JS; mais j'avoue que j'ai encore des difficultés pour écrire la syntaxe, même si le raisonnement logique est bon !

let vehicules = ['bateau', 'avion', 'voiture'];
	console.log(vehicules);

let newVehicule = [{
    title: 'bateau',
    img: 'bateau.jpg'
},
{
    title: 'avion',
    img: 'avion.jpg'
},
{
    title: 'voiture',
    img: 'voiture.jpg'
}];

let vehicules = newVehicule[n].img;

console.log(vehicules);

// La méthode slice qui permet de renvoyer un fragment d'un tableau existant

let vehicules = ['bateau.img', 'avion.img', 'voiture.img'];
let aDesRoues = vehicules.slice(1, 3);
	console.log(aDesRoues);

// La méthode toUpperCase qui permet de renvoyer la valeur de la chaîne courante, convertie en majuscules

let aDesRoues = screamName;
let screamName = aDesRoues.toUpperCase();
	console.log(screamName);