let editButton = document.getElementById("edit-button");

editButton.addEventListener("click", () => {
	if (editButton.innerHTML === "edit") {
		editButton.innerHTML = "save";
		document.getElementById("name").outerHTML = '<input type="text" id="input" placeholder="輸入你的名字">';
	} else {
		let input = document.getElementById("input").value;
		document.getElementById("input").outerHTML = `<h1 id="name">${input}</h1>`;
		editButton.innerHTML = "edit";
	}
});

let addButton = document.getElementById("add-button");

addButton.addEventListener("click", () => {
	if (addButton.innerHTML === "add") {
		addButton.innerHTML = "submit";
		document.getElementById("new-music").insertAdjacentHTML('afterbegin', `
			<div id="form">
			<input type="text" id="input-url" placeholder="輸入歌曲網址"><br>
			<input type="text" id="input-name" placeholder="輸入歌曲名稱"><br>
			</div>
			`);
	} else {
		let inputURL = document.getElementById("input-url").value;
		let inputName = document.getElementById("input-name").value;
		if (inputURL && inputName) {
			document.getElementById("spotify-column").insertAdjacentHTML('beforeend', `
				<div class="spotify-row">
				<a href="${inputURL}">
				<img src="spotify.svg" alt="cannot show the photo" width="50">
				</a>
				<p>${inputName}</p>
				</div>
				`);
			document.getElementById("form").remove();
			addButton.innerHTML = "add";
		} else {
			alert("不可為空值");
		}
	}
});