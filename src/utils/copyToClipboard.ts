export const copyToClipboard = (text: string) => {
	if ('clipboard' in navigator) {
		navigator.clipboard
			.writeText(text)
			.then()
			.catch((error) => console.error(error.name, error.message));
		return;
	}

	// const textArea = document.createElement('textarea');
	// textArea.value = text;
	// textArea.style.opacity = '0';
	// document.body.append(textArea);
	// textArea.focus();
	// textArea.select();
	// try {
	// 	document.execCommand('copy');
	// } catch (error) {
	// 	console.error(error.name, error.message);
	// }
	// textArea.remove();
};
