let studentList = document.querySelector(".student-list")[0]

function showPage(list, page) {
   let itemPerPage = 9;

   let sIndex = (page * itemPerPage) - itemPerPage;
   let eIndex = (page) * itemPerPage;

   let studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";

   for (let i = sIndex; i < eIndex && i < list.length; i++) {
      let student = list[i];

      studentList.insertAdjacentHTML("beforeend", `<li class="student-item cf">
         <div class="student-details">
            <img class="avatar" src="${student.picture.large}" alt="Profile Picture">
            <h3>${student.name.first} ${student.name.last}</h3>
            <span class="email">${student.email}</span>
         </div>
         <div class="joined-details">
            <span class="date">${student.registered.date}</span>
         </div>
      </li>`)
   }
}

let linkList = document.querySelector(".link-list");
function addPagination(list) {
   let numBttn = (Math.ceil(list / 9))
   
   linkList.innerHTML = "";

   for (let i = 0; i < numBttn; i++) {
      linkList.insertAdjacentHTML("beforeend", `
            <button type="button" data-page="${i + 1}">${i + 1}</button>
         `)
   }

   let firstBttn = linkList.firstElementChild;
   firstBttn.classList.add("active")
   
   linkList.addEventListener("click", (event) => {
      if (event.target instanceof HTMLButtonElement) {
         document.querySelectorAll(".active").forEach ((el) => {
            el.classList.remove("active")
         })
         event.target.classList.add("active")
         let page = parseInt(event.target.dataset.page)
         showPage(data, page)
      }
      
   })
   
}

// add comments
// ready to submit (meets expectations)

addPagination(data.length)

console.log(document.querySelector(".page"))