const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"');

let selectedCheckboxIndex = -1;

checkboxes.forEach((checkbox, index) => {
 checkbox.addEventListener('click', (e) => {
   if(e.shiftKey) {
/*
   const currentCheckboxIndex = index;
   console.log(currentCheckboxIndex);
   const direction = currentCheckboxIndex > selectedCheckboxIndex; // true - down, false - up
   console.log(direction);
   const from = direction ? selectedCheckboxIndex : currentCheckboxIndex;
   console.log(from);
   const to = direction ? currentCheckboxIndex : selectedCheckboxIndex;
   console.log(to);
   */
/*
   for (let i = from; i < to; i++) {
    console.log(i);
    checkboxes[i].checked = true;
   }
   */
  } else {
   selectedCheckboxIndex = index;
  }
 });
});
