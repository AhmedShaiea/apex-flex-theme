module.exports = {
	navbar() {
		apex.jQuery(window).on('apexwindowresized', () => {
			ft.apex.navbar();
		});
	}
};
