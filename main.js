const span1 = document.getElementById("span1")
const span2 = document.getElementById("span2")
const span3 = document.getElementById("span3")
const boxes = document.querySelectorAll(".box");

let joueur = true;
function select(box){
    selectionJoueur()
    if(joueur){
        box.textContent = "⭕" ;
        box.style.pointerEvents = "none"

         check();
        // span1.style.backgroundColor = 
        joueur = false;
    }else{
        box.textContent = "❌";
        box.style.pointerEvents = "none"
        check();
        joueur = true;
    }
    return joueur;
    

}
function jouer(){
    // resetGame()
    span1.style.backgroundColor = "red"
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
                        // window.alert(boxes[j].textContent + " win it");
                        span3.textContent += boxes[j].textContent + " win it";
                        // play();
                        // jouer()
                        // resetGame()

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
                        //  window.alert(boxes[0].textContent + " gagne le jeu");
                         span3.textContent += boxes[0].textContent + " win it";
                    }
                    else if((boxes[1].textContent === "⭕" && boxes[4].textContent === "⭕" && boxes[7].textContent === "⭕")  || 
                              (boxes[2].textContent === "❌" && boxes[4].textContent === "❌" && boxes[7].textContent === "❌") )
                              {
                                // window.alert(boxes[1].textContent + " gagne le jeu");
                                span3.textContent += boxes[1].textContent + " win it";
                                count++

                              }
                              else if((boxes[2].textContent === "⭕" && boxes[5].textContent === "⭕" && boxes[8].textContent === "⭕")  || 
                                      (boxes[2].textContent === "❌" && boxes[5].textContent === "❌" && boxes[8].textContent === "❌") ){
                                         count++
                                        //   window.alert(boxes[2].textContent + " gagne le jeu");
                                        span3.textContent += boxes[2].textContent + " win it";

                                  }
       
          console.log(count)
}
function checkidiagonale(){
    let count = 0;
        if((boxes[0].textContent === "⭕" && boxes[4].textContent === "⭕" && boxes[8].textContent === "⭕")  || 
             (boxes[0].textContent === "❌" && boxes[4].textContent === "❌" && boxes[8].textContent === "❌") )
                {
                    //  window.alert(boxes[0].textContent + " win it")
                     span3.textContent += boxes[0].textContent + " win it";
                     
                     count++
                }else if((boxes[2].textContent === "⭕" && boxes[4].textContent === "⭕" && boxes[6].textContent === "⭕")  || 
                           (boxes[2].textContent === "❌" && boxes[4].textContent === "❌" && boxes[6].textContent === "❌") )
                           {
                            // window.alert(boxes[2].textContent + " win it")
                            span3.textContent += boxes[2].textContent + " win it";
                             count++
                           }
                // else
                // {
                    
                //   }
   
       
      console.log(count)
}

function check(){
    checkcolonne();
    checkligne();
    checkidiagonale();


}


function resetGame(){
    span3.textContent = "RESULTAT: ";
    boxes.forEach((box)=>{
        box.style.pointerEvents = "auto"
        box.textContent = ""
    })
    jouer()

}

document.addEventListener("DOMContentLoaded",jouer)