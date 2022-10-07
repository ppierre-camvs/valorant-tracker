async function chargerImages(nb) {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos');
    const lesImages = await response.json();

    afficherImages(lesImages, nb)
}

function afficherImages(images, nb){
    let gallerie = document.getElementById("gallerie");
    for (let i=0; i < nb; i++) {
        gallerie.append(ajouterUneCard(images[i]));
    }
}

function ajouterUneCard(photo) {
    let card = document.createElement('div');
    card.innerHTML =`
    <div class="card mr-4 mt-1 me-1" style="width: 18rem;">
        <img src="` + photo.thumbnailUrl + `" class="card-img-top" alt="la photo">
        <div class="card-body">
            <p class="card-text">` + photo.title + `</p>
        </div>
    </div>
    `;
    return card;
}