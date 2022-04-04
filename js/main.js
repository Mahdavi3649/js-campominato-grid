
/*  Consegna
    L'utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco di quadrati, in cui ogni cella contiene un numero tra quelli compresi in un range:
        con difficoltà 1 => tra 1 e 100
        con difficoltà 2 => tra 1 e 81
        con difficoltà 3 => tra 1 e 49
    Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro.
 
 */

    let go = document.getElementById("start");
    go.addEventListener("click", function(){
        let selezione = document.getElementById("myselect").value;
        let grid = document.getElementById("grid");
        grid.innerHTML = "";
        
        if(selezione == "easy"){ 
            for(let i=1; i<=100 ; i++){
                grid.innerHTML += `<div class="quadrato num item-${i}">${i}</div>`;
            }
            
        }else if(selezione=="medium"){
            for(let index=1; index<=81 ; index++){
                grid.innerHTML += `<div class="quadr num item-${index}">${index}</div>`;
            }
            
        }else if(selezione=="hard"){
            for(let j=1; j<=49 ; j++){
                grid.innerHTML += `<div class="qua num item-${j}">${j}</div>`;
            }
        } 
    })


        


