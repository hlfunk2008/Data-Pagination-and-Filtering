let itemPerPage = 9;
function showPage(list, page) {

   let sIndex = (page * itemPerPage) - itemPerPage;
   let eIndex = (page) * itemPerPage;

   let studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";

   // checks if an item is between the first and last index -> dynamically adds info from data.js

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


function addPagination(list) {
   let linkList = document.querySelector(".link-list");
   // defines the amount of buttons based on the rounded amount divided by number of items per page
   let numBttn = (Math.ceil(list / itemPerPage))
   
   linkList.innerHTML = "";

   for (let i = 0; i < numBttn; i++) {
      linkList.insertAdjacentHTML("beforeend", `
            <button type="button" data-page="${i + 1}">${i + 1}</button>
         `)
   }
   
   
   let firstBttn = linkList.firstElementChild;
   firstBttn.classList.add("active");

   // immediately show first page
   let activePage = parseInt(firstBttn.dataset.page);
   showPage(list, activePage);
   
   
   
   

   
   linkList.addEventListener("click", (event) => {
      if (event.target instanceof HTMLButtonElement) {
         // removes classes from those that contain "active" class
         document.querySelectorAll(".active").forEach ((el) => {
            el.classList.remove("class")
         })
         event.target.classList.add("active")
         let page = parseInt(event.target.dataset.page)
         showPage(data, page)
      }
      
   })
   
}

addPagination(data.length)
