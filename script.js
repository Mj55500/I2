const falconCard = document.getElementById('falcon-card');
const eagleCard = document.getElementById('eagle-card');
const infoPopup = document.getElementById('info-popup');
const closePopup = document.getElementById('close-popup');
const popupText = document.getElementById('popup-text');

const falconInfo = "Сокол - одна из самых быстрых птиц на планете, может развивать скорость до 380 км/ч, пикируя.";
const eagleInfo = "Орёл - символ силы и власти, его острые когти могут ломать кости жертвы, а размах крыльев достигает 2.5 метра.";

falconCard.addEventListener('click', () => {
    popupText.textContent = falconInfo;
    infoPopup.style.display = 'flex';
});

eagleCard.addEventListener('click', () => {
    popupText.textContent = eagleInfo;
    infoPopup.style.display = 'flex';
});

closePopup.addEventListener('click', () => {
    infoPopup.style.display = 'none';
});