let isShowing = true;
const sharePopup = document.getElementById('share-popup');
const shareBtn = document.getElementById('share');
shareBtn.addEventListener('click', () => {
	sharePopup.classList.remove('dont-show');
	if (isShowing) {
		isShowing = false;
		sharePopup.classList.remove('deactivate-share-popup');
		sharePopup.classList.add('activate-share-popup');
		shareBtn.classList.add('share-btn-active');
	} else {
		isShowing = true;
		sharePopup.classList.remove('activate-share-popup');
		sharePopup.classList.add('deactivate-share-popup');
		shareBtn.classList.remove('share-btn-active');
	}
});
