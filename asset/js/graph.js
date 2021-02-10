if(screen.width <= 769 || document.body.clientWidth <= 769){
// DOGNOUTH GRAPHIQUE COMPETENCE PART 1 (droite) ////////////////////////////////////////////////////////////////////////////////////////////////////
const canvas = document.querySelectorAll('.dognouth_chart');
const labels = document.querySelectorAll('.label');
const nb_labels = labels.length-1;

    //Agrandir les canvas
    canvas.forEach((canva)=>{
        canva.setAttribute("width",230);
        canva.setAttribute("height",230);
        canva.setAttribute("data-linewidth",20);
    });  
    
    // ANIMATION GRAPH COMPETENCES ///////////////////////////////////////////////////////////////////////////////////
    const first_chart= document.querySelector('.chart_and_labels');

    //on selectionne tous les graphiques et toutes les icones
    const charts= document.querySelectorAll('.chart_and_labels');
    const ico_slide_2= document.querySelector('.ico_slide#graph_hardSkills').children;
    const nb_slide_2= charts.length;
   
    //on instancie l'etat du premier graphique
    first_chart.style.display='inherit';
    ico_slide_2[0].style.backgroundImage='url(asset/images/on.svg)';

   //pour faire defiler les graphiques
    const slide_chart= setInterval(()=>{
        //Pour chaque graphique; faire une boucle de verification
        charts.forEach((elem, index, array)=>{
            //Si il y en a un qui est visible, alors, on le rend invisible
            if(elem.style.display==='inherit'){
                elem.style.display='none';
                //Si il ne s'agit pas du dernier element, alors le suivant sera son index+1
                if(index<nb_slide_2-1){
                    next=array[index+1];
                    //l'icone corespondant à l'element qu'on rend invisible reprends sa couleur initiale, et la suivante s'éclaircie
                    ico_slide_2[index].style.backgroundImage='url(asset/images/off.svg)';
                    ico_slide_2[index+1].style.backgroundImage='url(asset/images/on.svg)';
                //Sinon, on revient au debut des slides, et on arrête le setInterval.
                }else{
                    next=array[0];
                    ico_slide_2[ico_slide_2.length-1].style.backgroundImage='url(asset/images/off.svg)';
                    ico_slide_2[0].style.backgroundImage='url(asset/images/on.svg)';
                    clearInterval(slide_chart);
                }
            }
        })
        next.style.display='inherit';
    },7000);

    //pour rendre cliquable les icones
    Array.from(ico_slide_2).forEach((ico,index,icones)=>{
        let index_ico=index;
        ico.addEventListener('click',()=>{
            ico.style.backgroundImage='url(asset/images/on.svg)';
            clearInterval(slide_chart);
            charts.forEach((chart,index)=>{
                if(index===index_ico){
                    chart.style.display="inherit"
                }else{
                    chart.style.display="none";
                    icones[index].style.backgroundImage='url(asset/images/off.svg)';
                }
            });
        })
    })
    const Radians = (pourcentage) =>{
        const degres= (360*pourcentage)/100;
        const radians= (Math.PI/180)*degres;
        return radians;
    };
    
    
    canvas.forEach((canvas)=>{
        h = canvas.getAttribute('height');
        w = canvas.getAttribute('width');
        line = canvas.dataset.linewidth;
    
    
        
    
        if(canvas.getContext){
            const ctx = canvas.getContext('2d');
    
            //Base
            ctx.beginPath();
            ctx.arc((w/2), (h/2), ((w/2)-line-1), 0, Math.PI * 2, true);
            ctx.lineWidth = line;
            ctx.strokeStyle = '#3f4242';
            ctx.stroke();
    
            let startArcInit= (Math.PI*270)/180;
            let startArc= startArcInit;
            let labels;
    
    
            if(canvas.parentElement.nextElementSibling === null){
                
                labels=canvas.parentElement.previousElementSibling.children
            }else{
               labels= canvas.parentElement.nextElementSibling.children; 
            };
    
    
            //Pourcentage
            Array.from(labels).forEach((label,index)=>{
                const color= label.dataset.color;
                const pourcentage= label.dataset.pourcent;
    
                if(index===0){
                    startArc= startArcInit;
                };
                ctx.beginPath();
                ctx.arc((w/2), (h/2), ((w/2)-line-1), startArc , (startArc + Radians(pourcentage-1)) , false);
                ctx.lineWidth = line;
                ctx.strokeStyle = color;
                ctx.stroke();
                startArc+= Radians(pourcentage);
            });
        }
    })
}else{
    // DOGNOUTH GRAPHIQUE COMPETENCE PART 1 (droite) ////////////////////////////////////////////////////////////////////////////////////////////////////
    const canvas = document.querySelectorAll('.dognouth_chart');
    const labels = document.querySelectorAll('.label');
    const nb_labels = labels.length-1;

    const Radians = (pourcentage) =>{
        const degres= (360*pourcentage)/100;
        const radians= (Math.PI/180)*degres;
        return radians;
    };

    canvas.forEach((canvas)=>{
        h = canvas.getAttribute('height');
        w = canvas.getAttribute('width');
        line = canvas.dataset.linewidth;

        if(canvas.getContext){
            const ctx = canvas.getContext('2d');

            //Base
            ctx.beginPath();
            ctx.arc((w/2), (h/2), ((w/2)-line-1), 0, Math.PI * 2, true);
            ctx.lineWidth = line;
            ctx.strokeStyle = '#3f4242';
            ctx.stroke();

            let startArcInit= (Math.PI*270)/180;
            let startArc= startArcInit;
            let labels;


            if(canvas.parentElement.nextElementSibling === null){
                
                labels=canvas.parentElement.previousElementSibling.children
            }else{
            labels= canvas.parentElement.nextElementSibling.children; 
            };


            //Pourcentage
            Array.from(labels).forEach((label,index)=>{
                const color= label.dataset.color;
                const pourcentage= label.dataset.pourcent;

                if(index===0){
                    startArc= startArcInit;
                };
                ctx.beginPath();
                ctx.arc((w/2), (h/2), ((w/2)-line-1), startArc , (startArc + Radians(pourcentage-1)) , false);
                ctx.lineWidth = line;
                ctx.strokeStyle = color;
                ctx.stroke();
                startArc+= Radians(pourcentage);
            });
        }
    })
};






