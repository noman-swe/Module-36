const loadAlbums = () => {
    const url = 'https://jsonplaceholder.typicode.com/albums';
    fetch(url)
    .then(res => res.json())
    .then(data => displayAlbums(data));

    
}

function displayAlbums(albums){
    // 
    const albumContainer = document.getElementById('albumContainer');
    albums.forEach(album => {
        const displayDiv = document.createElement('div');
        displayDiv.classList.add('col');
        displayDiv.innerHTML = `
        <div class="card">     
        <div class="card-body">
        <p class="card-text">${album.id}</p>
            <h5 class="card-title">${album.title}</h5>
        </div>
        </div>
        `;
        albumContainer.appendChild(displayDiv);
    });
}



/* 
fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displayAlbums(data));
*/