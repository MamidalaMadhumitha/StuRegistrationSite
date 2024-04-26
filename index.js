const studentName=document.querySelector(".student-name");
const studentData=document.querySelector(".studentdata");
const studentId = document.querySelector(".student-id");
const studentEmail = document.querySelector(".stu-email");
const studentContact = document.querySelector(".stu-contact");
const button = document.querySelector(".buttoninput");


button.addEventListener("click", addStudentData);

function addStudentData(){

    const studentDiv =document.createElement("div");
    studentDiv.classList.add("table-inside");
    const item1=document.createElement("h3");
    item1.classList.add("studentname");
    const item2 =document.createElement("h3");
    item2.classList.add("id");
    const item3 =document.createElement("h3");
    item3.classList.add("email");
    const item4 =document.createElement("h3");
    item4.classList.add("contact");

    item1.innerHTML = studentName.value;
    item2.innerHTML = studentId.value;
    item3.innerHTML = studentEmail.value;
    item4.innerHTML = studentContact.value;
 
    studentDiv.appendChild(item1);
    studentDiv.appendChild(item2);
    studentDiv.appendChild(item3);
    studentDiv.appendChild(item4);
 
    if(studentName.value === '') return;
    if(studentId.value === '') return;
    if(studentEmail.value === '') return;
    if(studentContact.value === '') return;


          /* Edit button*/

     const editbutton = document.createElement("button");

     editbutton.innerHTML= '<i class="fa-solid fa-pen-to-square"></i>';
     editbutton.classList.add("edit-button");

     studentDiv.appendChild(editbutton);
     studentData.appendChild(studentDiv);
     studentData.value='';
     studentData.addEventListener("click", editItem);
     function editItem(e){
      const item = e.target;
      if(item.classList[0] === "edit-button") {
          const parent = item.parentElement;
          parent.edit();
      }
    }
  
 
          /*Delete button */

   const deletebutton = document.createElement("button");

     deletebutton.innerHTML= '<i class="fa-solid fa-trash"></i>';
     deletebutton.classList.add("trash-button");
     studentDiv.appendChild(deletebutton);
    studentData.appendChild(studentDiv);


    studentData.addEventListener("click", deleteItem);
    function deleteItem(e){
    const item = e.target;
    if(item.classList[0] === "trash-button") {
        const parent = item.parentElement;
        parent.remove();
    }
  }


        

 
}
    




   

