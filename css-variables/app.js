const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
	const suffix = this.dataset.sizing || '';
//     console.log(suffix);
	document.documentElement.style.setProperty(`--${this.name}`,this.value + suffix);
}

inputs.forEach(n => n.addEventListener('change',handleUpdate));
inputs.forEach(n => n.addEventListener('mousemove',handleUpdate));

