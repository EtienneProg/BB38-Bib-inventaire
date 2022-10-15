

function calculBib(){
      var bib_select = document.querySelector('input[name="bib"]:checked')
      var carton_select = document.getElementById('carton_btn').checked;
      var poids_bib = document.getElementById('poids_bib').value
      var text_result = document.getElementById('result_box').textContent

      
      var controle = tryValue(bib_select,poids_bib);

      if(controle.erreur){
            alert(controle.msg)
      }else{
          if(carton_select){
            switch(bib_select.id){
              case "coca" :
                poids_bib = parseInt(poids_bib) + 636;
                break;
              case "fuze" :
                poids_bib = parseInt(poids_bib) + 188;
                break;
              default:
                poids_bib = parseInt(poids_bib) + 196;
            }
          }
            document.getElementById('result_box').textContent = poidsToUnit(bib_select.id, poids_bib)
            console.log(poids_bib);
      }
}

function tryValue(s,p){
      var msg = "RAS";
      var erreur = false;

      if(s === null){
            return {
                  erreur: true,
                  msg: "Selectionnez une boisson !"
            }
      }else if(p === ""){
            return {
                  erreur: true,
                  msg: "Merci de saisir le poids !"
            }
      }else{
            return {
                  erreur: false,
                  msg: "RAS"
            }
      }

      
      
}


function poidsToUnit(soda_type, poids){
      var result="0";

      switch (soda_type){
            case "coca" : 
                 if(poids>19300){
                   result = 1;
                 }else if(poids>17500){
                   result = 0.92;
                 }else if(poids>15800){
                   result = 0.83;
                 }else if(poids>14000){
                   result = 0.75;
                 }else if(poids>12300){
                   result = 0.67;
                 }else if(poids>10500){
                   result = 0.58;
                 }else if(poids>8800){
                   result = 0.50;
                 }else if(poids>7000){
                   result = 0.42;
                 }else if(poids>5300){
                   result = 0.33;
                 }else if(poids>3500){
                   result = 0.25;
                 }else if(poids>1800){
                   result = 0.17;
                 }else if(poids>0){
                   result = 0.08;
                 }else{
                   result = 0;
                 }
                 break;
       
            case "coca-zero" :
                 if(poids>4700){
                   result = 1;
                 }else if(poids>3500){
                   result = 0.83;
                 }else if(poids>2600){
                   result = 0.66;
                 }else if(poids>1700){
                   result = 0.5;
                 }else if(poids>900){
                   result = 0.33;
                 }else if(poids>0){
                   result = 0.17;
                 }else{
                   result = 0;
                 }
                 break;
            case "fuze" :
                 if(poids>4800){
                   result = 1;
                 }else if(poids>3900){
                   result = 0.83;
                 }else if(poids>2900){
                   result = 0.66;
                 }else if(poids>1900){
                   result = 0.5;
                 }else if(poids>1000){
                   result = 0.33;
                 }else if(poids>0){
                   result = 0.17;
                 }else{
                   result = 0;
                 }
                 break;
       
            case "sprite" :
       
                   if(poids>4600){
                     result = 1;
                   }else if(poids>3700){
                     result = 0.83;
                   }else if(poids>2700){
                     result = 0.66;
                   }else if(poids>1800){
                     result = 0.5;
                   }else if(poids>900){
                     result = 0.33;
                   }else if(poids>0){
                     result = 0.17;
                   }else{
                     result = 0;
                   }
       
                   break;
                 
            case "fanta" :
                     if(poids>4700){
                       result = 1;
                     }else if(poids>3700){
                       result = 0.83;
                     }else if(poids>2800){
                       result = 0.66;
                     }else if(poids>1900){
                       result = 0.5;
                     }else if(poids>900){
                       result = 0.33;
                     }else if(poids>0){
                       result = 0.17;
                     }else{
                       result = 0;
                     }
                     break;
       
            case "tropico" :
                       if(poids>4700){
                         result = 1;
                       }else if(poids>3800){
                         result = 0.83;
                       }else if(poids>2800){
                         result = 0.66;
                       }else if(poids>1900){
                         result = 0.5;
                       }else if(poids>900){
                         result = 0.33;
                       }else if(poids>0){
                         result = 0.17;
                       }else{
                         result = 0;
                       }
                       break;
          }

          return result;
}