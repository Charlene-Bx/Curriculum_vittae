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


