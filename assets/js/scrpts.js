const BASE_URL = 'https://thatcopy.pw/catapi/rest/';

const catBtn = document.getElementById('change');

const getCat = async () => {
    const data = await fetch(BASE_URL)
        .then((res) => res.json())
        .catch((e) => console.log(e));

    return data.webpurl;
};

const loadImg = async () => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCat();
}

catBtn.addEventListener('click', loadImg);

loadImg();