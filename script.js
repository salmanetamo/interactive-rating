const onRatingSelected = (event) => {
    const isActive = event.target.classList.contains('active');
    document.querySelectorAll('.rating-number').forEach(el => el.classList.remove('active'));
    if (!isActive) {
        event.target.classList.add('active');
    }
}
const addEventListenersToRatings = () => {
    document.querySelectorAll('.rating-number').forEach(ratingNumberElement => {
        ratingNumberElement.addEventListener('click', onRatingSelected);
    });
}

const submit = () => {
    let ratingNumberElement = undefined;
    document.querySelectorAll('.rating-number').forEach(el => {
        if (el.classList.contains('active')) {
            ratingNumberElement = el;
        }
    });
    if (ratingNumberElement) {
        const value = ratingNumberElement.getAttribute('value');
        showThankYou(value);
    } else {
        alert('Please give a rating');
    }
}

const showThankYou = (value) => {
    document.querySelector('#rating').classList.toggle('hidden');
    document.querySelector('#selected-rating-value').innerHTML = value;
    document.querySelector('#thank-you').classList.toggle('hidden');
}

window.addEventListener('load', addEventListenersToRatings);
