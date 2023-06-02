function addItem(event){//create the function 
    event.preventDefault();//The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur.
    let text=document.getElementById("submit-search");//store the text
    if(text.value!=""){
        array.push(text.value);//push the element 
    }
    else{
        alert("Enter the task");//give alert
    }
    
    text.value=""; //push the text after that text is empty
    addTodoList(); // Call the function 
}
// create the array
var array=[]; 


function addTodoList(){// Create the function 
    var html="";

   array.forEach((element,index)=>{    //create for Each loop

    // Html content 
      html+=`<div class="todo-item-one">  
      <div class="check">
          <div class="check-mark">
              <i class="fa-solid fa-check"></i>

          </div>
      </div>
      
      <div class="todo-text">
         ${element} 
      </div>
      
      <div class="delet" onclick="del(${index})">
      <i class="fa-sharp fa-solid fa-trash"></i>
      </div>
    


      
  </div>`
       

   })
   //change inner html (class =todo-items-name)

   document.querySelector(".todo-items-name").innerHTML=html;
  

   //array length 
document.getElementById("number").innerText=array.length;



}
//it is use to clear the list 
function clr(){
    document.querySelector(".todo-items-name").innerHTML="";
    document.getElementById("number").innerText=0;
  
}
// it is use deleat the perticular task
function del(index){
   array.splice(index,1);
    addTodoList();
    

}











