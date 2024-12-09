//select movie poster original image
let moviePoster = document.querySelector('.Free-Guy-Poster');
//select modal window layer
let modal = document.querySelector('movie-card');
//select close button
let closeBtn = document.querySelector('.closeBtn');
//select modal window image
let modalimage = document.querySelector('.movie-poster-modal');

moviePoster.addEventListener('click', ()=> {
    console.log('image clicked');
    modal.style.display = 'block';
    modalimage.src = moviePoster.src;
});

closeBtn.addEventListener('click', ()=> {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
});