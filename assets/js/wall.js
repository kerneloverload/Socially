//Add a post
const postContainer = document.getElementById("new-post-container");
const floatingButton = document.getElementById("floating-btn");
const floatBtnIcon = document.getElementById("floating-btn-icon");
let floatBtn = false;
floatingButton.addEventListener("click", () => {
      floatBtn = !floatBtn;
      if (floatBtn) {
         postContainer.style.display = "block";
         floatBtnIcon.classList.remove("fa-plus-circle");
         floatBtnIcon.classList.add("fa-arrow-circle-left");
      }
      else {
         postContainer.style.display = "none";
         floatBtnIcon.classList.add("fa-plus-circle");
         floatBtnIcon.classList.remove("fa-arrow-circle-left");
      }
   });

//Post Icons
const smiley = document.getElementById("smiley-post");
const smileyContainer = document.getElementById("emoji-picker");
const pTextBox = document.getElementById("post-textbox");
let boolSmiley = false;

smiley.addEventListener("click",()=>{
   boolSmiley = !boolSmiley;
   if(boolSmiley){
      smileyContainer.style.display = "block";
      smiley.classList.remove("far");
      smiley.classList.add("fas");
   }
   else{
      smileyContainer.style.display = "none";
      smiley.classList.add("far");
      smiley.classList.remove("fas");
   }
});

document.querySelector('emoji-picker')
  .addEventListener('emoji-click', event => {
   var val = pTextBox.value;
   var before = val.substring(0, pTextBox.selectionStart);
   var after = val.substring(pTextBox.selectionEnd);
   pTextBox.value = before + event.detail.emoji.unicode + after;
   console.log(event.detail.emoji.unicode);
  });
//New post icons
const addPost = document.getElementById("add-post-icon");

addPost.addEventListener("mouseenter" , () => {
   addPost.textContent = "send";
});

addPost.addEventListener("mouseleave" , () => {
   addPost.textContent = "post_add";
});

//comments container
 







 
 const commentIcon = document.getElementsByClassName("comment-icon");
 const commentBox = document.getElementsByClassName("comment-container");
 const commentDetails = document.getElementsByClassName("comment-inside-container");
 const iconHand = document.getElementsByClassName("icon-hand");
 const smileyC = document.getElementsByClassName("smiley-comment");
 const smileyContainerC = document.getElementsByClassName("emoji-picker-comment");
 const cTextBox = document.getElementsByClassName("comment-textbox");
 let handIcon = false;
 let boolComment = false;
 let boolSmileyC = false;
 window.onload = () =>{ 
   for(let i=0; i<commentIcon.length; i++){
      commentIcon[i].addEventListener("click", () => {
         boolComment = !boolComment;
         if(boolComment){
            commentBox[i].style.display="block";
            commentDetails[i].style.display = "block";
            commentIcon[i].classList.remove("far");
            commentIcon[i].classList.add("fas");
         }
         else{            
            commentBox[i].style.display="none";
            commentDetails[i].style.display = "none";
            commentIcon[i].classList.remove("fas");
            commentIcon[i].classList.add("far");
         }
      });
   }
   
 for(let i=0; i<smileyC.length; i++){
   smileyC[i].addEventListener("click",()=>{
      boolSmileyC = !boolSmileyC;
      if(boolSmileyC){
         smileyContainerC[i].style.display = "block";
         smileyC[i].classList.remove("far");
         smileyC[i].classList.add("fas");
      }
      else{
         smileyContainerC[i].style.display = "none";
         smileyC[i].classList.add("far");
         smileyC[i].classList.remove("fas");
      }
   });
   smileyContainerC[i].addEventListener('emoji-click', event => {
      var val = cTextBox[i].value;
      var before = val.substring(0, cTextBox[i].selectionStart);
      var after = val.substring(cTextBox[i].selectionEnd);
      cTextBox[i].value = before + event.detail.emoji.unicode + after;
      console.log(event.detail.emoji.unicode);
     });
 }
 
 document.getElementById('emoji-picker-comment')
   



   for(let i=0; i<iconHand.length; i++){
      iconHand[i].addEventListener("click", () => {
         handIcon = !handIcon;
         if(handIcon){
            iconHand[i].classList.remove("far");
            iconHand[i].classList.add("fas");
         }
         else{
            iconHand[i].classList.add("far");
            iconHand[i].classList.remove("fas");
         }
      });
      iconHand[i].addEventListener("mouseenter", () => {
         iconHand[i].style.color = "blueviolet";
      });
      iconHand[i].addEventListener("mouseleave" , () => {
         iconHand[i].style.color = "blueviolet";
      });
   }
 }
 


