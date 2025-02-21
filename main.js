const span1 = document.getElementById("span1")
const span2 = document.getElementById("span2")
const boxes = document.querySelectorAll(".box");

let joueur = true;
function select(box){
    selectionJoueur()
    if(joueur){
        box.textContent = "⭕" ;
        // span1.style.backgroundColor = 
        joueur = false;
    }else{
        box.textContent = "❌";
        joueur = true;
    }
    return joueur;
    

}
function jouer(){
            boxes.forEach((box)=>{
            box.addEventListener("click",()=>{select(box)})

})
// console.log(boxes[2].textContent)
// return checkligne()       

}
function selectionJoueur(){
    if(joueur){
        span2.style.backgroundColor = "red"
        span1.style.backgroundColor = "lightblue"
       
        
    }else{
         span1.style.backgroundColor = "red";
        span2.style.backgroundColor = "lightblue"


    }
}

// function checkligne(){
//     if((boxes[0].textContent=== "⭕" && boxes[1].textContent=== "⭕" && boxes[2].textContent=== "⭕")  || 
//         (boxes[0].textContent=== "❌" && boxes[1].textContent=== "❌" && boxes[2].textContent=== "❌") ){
//         console.log("you win");
//     }else{
//         console.log("you lose")
//     }
// }
// checkligne()



function checkligne(){
    let count = "";
        for(let j=0 ; j<9 ;j=j+3){
            if((boxes[j].textContent === "⭕" && boxes[j+1].textContent === "⭕" && boxes[j+2].textContent === "⭕")  || 
                 (boxes[j].textContent === "❌" && boxes[j+1].textContent === "❌" && boxes[j+2].textContent === "❌") )
                    {
                         console.log(boxes[j].textContent + " win it")
                         count++
                    }
                    // else
                    // {
                        
                    //   }
       
           }
          console.log(count)
}
function checkcolonne(){
    let count = 0;
        
            if((boxes[0].textContent === "⭕" && boxes[3].textContent === "⭕" && boxes[6].textContent === "⭕")  || 
                 (boxes[0].textContent === "❌" && boxes[3].textContent === "❌" && boxes[6].textContent === "❌") )
                    {
                         count++;
                         window.alert(boxes[0].textContent + "gagne le jeu");
                    }
                    else if((boxes[1].textContent === "⭕" && boxes[4].textContent === "⭕" && boxes[7].textContent === "⭕")  || 
                              (boxes[2].textContent === "❌" && boxes[4].textContent === "❌" && boxes[7].textContent === "❌") )
                              {
                                window.alert(boxes[1].textContent + " gagne le jeu");
                                count++

                              }
                              else if((boxes[2].textContent === "⭕" && boxes[5].textContent === "⭕" && boxes[8].textContent === "⭕")  || 
                                      (boxes[2].textContent === "❌" && boxes[5].textContent === "❌" && boxes[8].textContent === "❌") ){
                                         count++
                                          window.alert(boxes[2].textContent + " gagne le jeu");

                                  }
       
          console.log(count)
}
function checkidiagonale(){
    let count = 0;
        if((boxes[0].textContent === "⭕" && boxes[4].textContent === "⭕" && boxes[8].textContent === "⭕")  || 
             (boxes[0].textContent === "❌" && boxes[4].textContent === "❌" && boxes[8].textContent === "❌") )
                {
                     console.log(boxes[0].textContent + " win it")
                     count++
                }else if((boxes[2].textContent === "⭕" && boxes[4].textContent === "⭕" && boxes[6].textContent === "⭕")  || 
                           (boxes[2].textContent === "❌" && boxes[4].textContent === "❌" && boxes[6].textContent === "❌") ){
                            console.log(boxes[2].textContent + " win it")
                             count++
                           }
                // else
                // {
                    
                //   }
   
       
      console.log(count)
}


document.addEventListener("DOMContentLoaded",jouer)