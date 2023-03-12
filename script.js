const scroll_anim = document.querySelector(".scroll_side_bar");
function scrollAnimationend() {
	scroll_anim.classList.toggle("scroll_side_bar_animation");
}

window.addEventListener("submit", () => {
	preventDefault();
	console.log("Submitteed");
});

// const myName = document.querySelector(".myname");
// myName.addEventListener("mouseover", () => {
// 	myName.innerText = "Welcome";
// 	myName.style.color = "#A8EB12";
// });
// myName.addEventListener("mouseout", () => {
// 	myName.innerText = "Mohamed Arsath";
// 	myName.style.color = "#583B57";
// });

/* Content list Animations */
//  Random colors

function randomColor() {
	let color = [];
	for (let i = 0; i < 3; i++) {
		color.push(Math.floor(Math.random() * 256));
	}
	return "rgb(" + color.join(", ") + ")";
}

let animationOfList = document.getElementsByClassName("content_list");
for (i in animationOfList) {
	try {
		animationOfList[i].addEventListener("mouseover", event => {
			event.target.style.cursor = "pointer";
			event.target.style.borderStyle = "none";
			event.target.style.borderBottom = "solid";
			event.target.style.borderBottomWidth = "3px";
			event.target.style.borderRadius = "1.5px";
			event.target.style.borderBottomColor = `${randomColor()}`;
		});
		animationOfList[i].addEventListener("mouseout", event => {
			event.target.style.borderBottom = "none";
		});
	} catch (error) {}
}

function bio() {
	let content = document.querySelector(".main-content").classList.contains("bio");
	if (!content) {
		document.querySelector(".main-content").classList.toggle("bio");
	}
}

let mainContent = () => {
	setTimeout(() => {
		document.querySelector(".bio").classList.toggle("bio-transform");
	}, 500);
};

mainContent();

async function mode(e) {
	let a = document.querySelector("#mode");
	let b = a.classList.contains("verifyImg");
	let c = document.querySelector("#name");
	let d = document.querySelector("#github");
	let f = document.querySelector("#linkedin");
	let g = document.querySelector("#resume");
	let h = document.querySelectorAll(".bio span");
	let k = document.querySelectorAll(".tracking_bar");
	let l = document.querySelector(".scroll_bar");

	try {
		if (b) {
			e.setAttribute("src", "../assets/light_mode.png");
			c.setAttribute("src", "../assets/Name.png");
			d.setAttribute("src", "../assets/github-white.png");
			f.setAttribute("src", "../assets/linkedin-white.png");
			g.setAttribute("src", "../assets/Resume-icon-white.png");
			h.forEach(element => {
				element.style.color = "white";
			});
			k.forEach(element => {
				element.style.borderBottomColor = "white";
			});
			l.style.borderLeftColor = "white";
			e.classList.toggle("verifyImg");
		} else {
			e.setAttribute("src", "../assets/night_moon.png");
			c.setAttribute("src", "../assets/Name-black.png");
			d.setAttribute("src", "../assets/github-black.png");
			f.setAttribute("src", "../assets/linkedin-black.png");
			g.setAttribute("src", "../assets/Resumeicon-black.png");
			h.forEach(element => {
				element.style.color = "black";
			});
			k.forEach(element => {
				element.style.borderBottomColor = "black";
			});
			l.style.borderLeftColor = "black";
			e.classList.toggle("verifyImg");
		}

		// let toggleAll = document.querySelectorAll("div *");
		// toggleAll.forEach(e => {
		// 	e.classList.toggle("mode");
		// });
		document.body.classList.toggle("mode");
	} catch (error) {
		alert(error);
	}
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener("click", function (e) {
		e.preventDefault();

		document.querySelector(this.getAttribute("href")).scrollIntoView({
			behavior: "smooth",
		});
	});
});
