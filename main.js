let acc = document.getElementsByClassName("accordion-q");
let i;
for (i=0;i<acc.length;i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let ans = this.nextElementSibling;
    if (ans.style.display === "block") {
      ans.style.display = "none";
    } else {
      ans.style.display = "block";
    }
  });
}

// var que= document.getElementsByClassName("accordion-q");
// var i;
// for(i=0;i<que.length;i++){
//     que[i].addEventListener("click",function() {
//         this.classList.toggle("active");//         var ans= this.nextElementSibling;
//         if(ans.style.display === "block") {
//             ans.style.display= "none";
//         } else{
//             ans.style.display="block";
//         }
//     });
// }


// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     this.classList.toggle("active");
//     var ans = this.nextElementSibling;
//     if (ans.style.display === "block") {
//       ans.style.display = "none";
//     } else {
//       ans.style.display = "block";
//     }
//   });
// }