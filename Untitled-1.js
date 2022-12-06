    // exo0 //
//let signe = window.prompt('Quelle est la réponse ?', '42');
    //exo1//
// var first, second, result;
// first = prompt('Entrez le premier chiffre :');
// second = prompt('Entrez le second chiffre :');
// result = parseInt(first) + parseInt(second);
// alert(result);
    //exo2//
// let note_maths = 11;
// let note_francais = 9;
// let note_hg = 16;
// let moyenne = (parseInt(note_maths) + parseInt(note_francais) + parseInt(note_hg))/3;
// alert('La moyenne est de ' + moyenne);
    //exo3//
// let budget = 1200 ;
// let achat = 1100 ;
//   if (budget >= achat) {
//     alert('Le budget (' + budget + ' €) permet de payer tous les achats (' + achat + ' €)');
// } else {
//    alert('Le budget ne (' + budget + ' €) permet pas de payer tous les achats (' + achat + ' €)');
// }
    //exo4//
// let ht = prompt("Prix HT");
// let ttc = ht * 1.2;
// alert('Le prix TTC est de ' +ttc)
// document.body.innerText = (ttc);
    //exo5//
// let ht = prompt("Prix HT ");
// let taux_tva = prompt("Taux de TVA ");
// let taux_tva_calcul = (taux_tva / 100) + 1;
// let ttc = ht * taux_tva_calcul;
// // alert('Le prix TTC est de ' +ttc)
// document.body.innerText = (ttc);,
    //exo6//
// let ht = prompt("Prix HT ");
// let taux_tva = prompt("Taux de TVA");
// let ttc = ht * (taux_tva / 100) + 1;
// if(ttc > 100) {
//     document.body.innerHTML = '<h1 style="color: red;">' + ttc + '</h1>';
// } else {
//     document.body.innerHTML = '<h1 style="color: green;">' + ttc + '</h1>';
// }
// alert('prix est de '+ttc)
    //exo7//
// document.getElementById('cocktail').innerText = 'Long Island Iced Tea';
    //exo8//
// for(let i = 10;i <= 1000;i+=10) {
//     console.log(i);
// }
    //exo9//
// let age = prompt("Quel âge avez vous?");
// if(age >= 18) {
//     alert('Vous êtes majeur');
// } else {
//     alert('Vous êtes mineur');
// }
    //exo10//
// let codep = 77000;
//     while(codep <= 77999) {
//        console.log(codep);
//        codep++;
//     }
    //exo11//
// let n = 5
// let html = '';
// for(let i = 1;i <= 10;i++) {
//    html = html + n + ' x ' + i + ' = ' + (n * i) + ' <br />';
// }
// alert('la table '+html)
    //exo12//
// let ok = 0; 
// while(ok <= 20) {
//     console.log(ok);
//     ok = ok + 2;
//     ok++
// } 
// document.body.innerHTML = html;

// function changetaille(taille) {
//     document.getElementById('texte').style.fontSize = taille + 'px';
//   }

//   // La variable i qui prend 0 ou 1, 0= la tailee initiale du texte et 1= la taille agrandi du texte
// var i = 0;
// // La fonction qui redimensionne le texte
// function Agrandi_police_texte()
// {
//     var texte = document.querySelector('#texte');
//     if(i == 0)// Si le texte est à la police initiale
//     {
//         texte.style.fontSize = '20px';//On agrandi le texte au click
//         i = 1; //Le texte se met a la police agrandit
//     }
//     else
//     {
//         texte.style.fontSize = "15px";//On e reduit la police du texte au click
//         i = 0;//retour à la police initiale
//     }
// }

// function changecouleur(couleur) {
//     document.getElementById('btn2').style.color = couleur;
//   }

let i = 0
let cube = document.getElementById("carre")
let taille = document.getElementById("btn1")
let vert = document.getElementById("btn2")
let initiale = document.getElementById("btn3")
let invisible = document.getElementById("btn4")
let visible = document.getElementById("btn5")

function Agrandir_carre(){
    let taille = document.querySelector('#carre');
    cube.style.height = '150px'
}
vert.addEventListener("click", changeCouleur => {
    cube.style.background = "green"
})
initiale.addEventListener("click", changeCouleur => {
    cube.style.background = "#0000ff"
})
invisible.addEventListener("click", changeinVisible => {
    cube.style.visibility = "hidden"
})
visible.addEventListener("click", changeVisible => {
    cube.style.visibility = "visible"
})