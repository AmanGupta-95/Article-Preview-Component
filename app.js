let isShowing = false;
const sharePopup = document.getElementById('share-popup');
document.getElementById('share').addEventListener('click', () => {
	if (isShowing) {
		isShowing = false;
		sharePopup.classList.remove('deactivate-share-popup');
		sharePopup.classList.add('activate-share-popup');
	} else {
		isShowing = true;
		sharePopup.classList.remove('activate-share-popup');
		sharePopup.classList.add('deactivate-share-popup');
	}
});
