/*																accordeon																					*/
function accordeonInit(El = ".accordeon") {
	let accordeon = document.querySelectorAll(`${El}`)
	let accordeonHeader = document.querySelectorAll(".accordeon-header")
	let accordeonBody = document.querySelectorAll(".accordeon-body");
	let defaultHeight;
	accordeon.forEach(accord => {
		defaultHeight = (accord.scrollHeight) - (accord.querySelector(".accordeon-body").scrollHeight) + "px";
		accord.style.height = defaultHeight;
		accord.addEventListener('click', accordeonClick);
	});
	function accordeonClick(e) {
		window.addEventListener('resize', calcDefHeight);
		let current = e.currentTarget;
		let selected = this;
		current.classList.toggle('opened')
		if(e.target.closest(".accordeon-body") !== selected.querySelector(".accordeon-body")) {
				if(current.classList.contains('opened')) {
					accordeonOpen();
				}
				else{
					accordeonClose();
				}
			}
		function calcDefHeight() {
			accordeonClose();
			accordeon.forEach(accord => {
				defaultHeight = (accord.scrollHeight) - (accord.querySelector(".accordeon-body").scrollHeight) + "px";
				accord.style.height = defaultHeight;
			});
		}
		function accordeonOpen() {
			selected.classList.add('active');
			selected.style.height = selected.scrollHeight + "px";
		}
		function accordeonClose() {
			selected.classList.remove('opened');
			selected.classList.remove('active');
			selected.style.height = (selected.scrollHeight) - (selected.querySelector(".accordeon-body").scrollHeight) + "px";
		}
	}
}
accordeonInit();
/*																	accordeon																		*/		