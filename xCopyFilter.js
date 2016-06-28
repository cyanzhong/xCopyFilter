document.addEventListener('copy', function(event) {
	event.stopPropagation();
	event.preventDefault();
	var node = document.createElement('div');
	var selection = window.getSelection();
	node.appendChild(selection.getRangeAt(0).cloneContents());
	var htmlData = node.innerHTML;
	var textData = selection.getRangeAt(0);
	event.clipboardData.setData("text/html", htmlData);
	event.clipboardData.setData("text/plain", textData);	
});