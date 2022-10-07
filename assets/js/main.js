

class Personnage {
    constructor(name, score, resultat){
        this.name = name;
        this.score = score;
        this.resultat = resultat;
    }
}


function rechercher(nom) {
    console.log(nom);

    let rnd = Math.round(Math.random())
    console.log(rnd);
    afficherJoueur(rnd==0? false: true, nom);
}

function afficherJoueur(choix, nom){
    let info = document.getElementById("info");
    let btn = document.getElementById("btnStats");

    if (choix) {
        info.innerHTML= `Nous avons trouvé le joueur <b>${nom}</b>`;
        info.classList.remove("text-danger");
        info.classList.add("text-success");
        btn.classList.remove("disabled");
    } else {
        info.innerHTML= `${nom} n'existe pas!`;
        info.classList.remove("text-success")
        info.classList.add("text-danger")
        btn.classList.add("disabled");
    }
}

function afficherStats(){
    let personnsages = new Array(
        new Personnage("Tasnime", "0/0/10", "Victoire"),
        new Personnage("Flavian", "-1/10/0", "Défaite")
    );

    let data = document.getElementById("data");

    personnsages.forEach(p => {
        let ligne = document.createElement('div');
        ligne.classList.add("mt-2", "col-12");
        ligne.innerHTML =`
        <div class="row w-100 mt-1">
            <div class="col-4">${p.name}</div>
            <div class="col-4">${p.score}</div>
            <div class="col-4">${p.resultat}</div>
        </div>
        `;

        data.appendChild(ligne);
    });
}


