let phoneInput = document.querySelectorAll('input[type="tel"]');
phoneInput.forEach(input=>{
	input.addEventListener('input', telMask);
	input.addEventListener("keydown", telKeyDown);
	input.addEventListener('paste', telPaste);
	input.addEventListener('focus', telFocus);
	input.addEventListener('blur', telBlur);
})
let defaultPlaceholder;
function telFocus() {
	defaultPlaceholder = this.placeholder;
	if(this.value.length < 1) {
		this.placeholder = "+7 (495) ...-..-..";
	}
}
function telBlur() {
		this.placeholder = defaultPlaceholder;
}
let numberType;
function telMask(e) {
	let inpNumValue = getInputNumbers(this);
	let formatedInputValue = "";
	let selectionStart = this.selectionStart;
	if(this.value.length !== selectionStart) {
		if(e.data && /\D/g.test(e.data)) {
			this.value = inpNumValue;

		}

		return;
	}
	if(!inpNumValue) {
		return this.value="";
	}
	if(["7","8","9"].indexOf(inpNumValue[0])> -1){
			//russian number
			numberType = "russian";
			if(inpNumValue[0] == "9") {
				inpNumValue += inpNumValue;
			}
			let firstSymbols = (inpNumValue[0] == "8") ? "+8" :"+7";
			formatedInputValue = firstSymbols + " (";
			if(formatedInputValue.length>1) {
				formatedInputValue += inpNumValue.substring(1,4);
			}
			if(inpNumValue.length>=5) {
				formatedInputValue += ") " + inpNumValue.substring(4,7);
			}
			if(inpNumValue.length>=8) {
				formatedInputValue += "-" + inpNumValue.substring(7,9);
			}
			if(inpNumValue.length>=10) {
				formatedInputValue += "-" + inpNumValue.substring(9,11);
			}
		}

		else {
			//not russian number
			numberType = "foreign";
			formatedInputValue = "+" + inpNumValue.substring(0,16);
		}
		this.value = formatedInputValue;
	}
	function getInputNumbers(input) {
		return input.value.replace(/\D/g, "")
	}
	function telKeyDown(e) {
		if(numberType == "russian") {
			let selectionStart = this.selectionStart;
			let selectionEnd = this.selectionEnd;
			if(e.keyCode !== 8 && e.keyCode !== 46 && this.value.length >= 18 && e.keyCode !== 37 && e.keyCode !== 39 && selectionStart == selectionEnd) {
				this.selectionStart = this.value.length;
			}
			if((e.keyCode == 8) && (selectionStart == 8 || selectionStart == 4) && (getInputNumbers(this).length !== 1) && (selectionStart == selectionEnd)) {
				this.value += "0";
				this.selectionStart = this.value.length;
			}
			if((e.keyCode == 46) && (selectionStart == 7 || selectionStart == 3)) {
				this.selectionStart = this.value.length;
			}
			if(e.keyCode == 8 && getInputNumbers(this).length == 1) {
				this.value = ""
			}
		}
	}
	function telPaste(e) {
		if(numberType == "russian") {
			let pasted = e.clipboardData || window.clipboardData;
			inpNumValue = getInputNumbers(this);
			if(pasted) {
				let pastedText = pasted.getData("text");
				if((/\D/g.test(pastedText)) || this.value.length >= 18 && !(this.selectionEnd - this.selectionStart >= pastedText.length)) {
					this.selectionStart = this.value.length;
				}
			}
		}
	}
/*																				phoneMask							*/