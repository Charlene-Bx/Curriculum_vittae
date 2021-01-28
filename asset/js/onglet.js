const cv= document.querySelector("#cv");
const onglets= document.querySelectorAll('.onglet');
const nb_onglets= (onglets.length)-1;


// FONCTIONS /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const AnimOnglet = (element, index, section) => {

        switch(index){
            case 0: 
                let bulle= section.children[0].children[1];
                bulle.style.animation='agitBulle 0.1s ease-out alternate 4';
                break;
            case 1:
            case 2:
            case 3:
                element.style.paddingLeft='7%';
                element.style.width='107%';
                element.style.color='#e7a988';
                break;
            case 4:
        }

};

const ReturnOnglet = (element, index, section) => {

    switch(index){
        case 0: 
            let bulle= section.children[0].children[1];
            bulle.style.animation='';
            break;
        case 1:
        case 2:
        case 3:
            element.style.paddingLeft='0%';
            element.style.width='100%';
            element.style.color='#da7b48';
            break;
        case 4:
    }

};


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//POUR CHAQUE ONGLETS ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
onglets.forEach((onglet,index,array)=>{
    let section= onglet.previousElementSibling.children[0]; 
    let section_width= section.clientWidth;
    let folded= onglet.dataset.folded;


    

    onglet.addEventListener('mouseover',()=>{AnimOnglet(onglet, index, section);});
    onglet.addEventListener('mouseout',()=>{ReturnOnglet(onglet, index, section);});
    onglet.addEventListener('click',()=>{
        if(index!=0){
            let folded= onglet.dataset.folded;
            switch(folded){
                
                //QUAND L'ONGLET EST REPLIE (folded='true')
                case 'true':
                    if(index != nb_onglets){
                        folded= 'false';
                        //de l'index de l'onglet jusqu'au dernier
                        for(x=index ; x<=nb_onglets ; x++){
                            //deplier les onglet et leurs section
                            array[x].style.gridColumn= '3/3';
                            array[x].previousElementSibling.children[0].style.right= '0px';
                            array[x].dataset.folded='false';
                            console.log("Cet onglet n'est pas le dernier et folded est maintenant:", folded)
                        };
                    };
                    //Pour déplier le dernier onglet
                    //else{
                    //     onglet.style.gridColumn= '3/3';
                    //     section.style.right= '0px';
                    //     folded= 'false';
                    //     console.log('folded si true et le dernier:', folded)
                    // }
                    break;

                //QUAND L'ONGLET EST DEPLIE (folded= 'false')
                case 'false':
                    let onglet_precedent= array[index-1];
                    
                    if(index != 1 && index != nb_onglets){
                        if(onglet_precedent.folded=='true'){
                            onglet.style.gridColumn= '1/1';

                            section.style.right= `${section_width}px`;
    
                            folded= 'true'
    
                            console.log("Cet onglet n'est pas le premier folded est '"+folded+"' ")
                            //de l'index de l'onglet jusqu'au premier
                            for(x=index-1;x>=1;x--){
                            //replier les onglet et leurs section
                            array[x].style.gridColumn= '1/1';
                            array[x].previousElementSibling.children[0].style.right= `${array[x].previousElementSibling.children[0].clientWidth}px`;
                            array[x].dataset.folded= 'true';}
                        }else{
                            for(x=index-1;x>=1;x--){
                                //replier les onglet et leurs section
                                array[x].style.gridColumn= '1/1';
                                array[x].previousElementSibling.children[0].style.right= `${array[x].previousElementSibling.children[0].clientWidth}px`;
                                array[x].dataset.folded= 'true';
                        }
                    }
                }
                else if(index === nb_onglets){
                //     for(x=1;x<=nb_onglets;x++){
                //         //replier les onglet et leurs section
                //         array[x].style.gridColumn= '1/1';
                //         array[x].previousElementSibling.children[0].style.right= `${array[x].previousElementSibling.children[0].clientWidth}px`;
                //         array[x].dataset.folded= 'true';
                // }
                }else{
                    onglet.style.gridColumn= '1/1';
                    section.style.right= `${section_width}px`;
                    folded= 'true'
                    console.log('cet onglet est le premier et folded est maintenant:', folded)
                }
                break;
            }
        };
        
    })

    switch(folded){
        case 'true':
            //si c'est 'true', deplace l'onglet à la premiére colonne
            onglet.style.gridColumn= '1/1';
            //deplace la section de sa largeur vers la gauche
            section.style.right= `${section_width}px`;
            break;

        case 'false':
            onglet.style.gridColumn= '3/3';
            section.style.right= '0px';
            break;
    };
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //POUR REVENIR A L'ECRAN //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// cv.addEventListener('click',()=>{
//     onglets.forEach((onglet,index,array)=>{
//         let section= onglet.previousElementSibling.children[0]; 
//         let section_width= section.clientWidth;
        
//         if(index!=0){
//             let folded= onglet.dataset.folded;

//             folded='true';
//             onglet.style.gridColumn= '1/1';
//             section.style.right= `${section_width}px`;
            
//         }
//     })
// })