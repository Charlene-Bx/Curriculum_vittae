
// if(screen.width <= 768 || document.body.clientWidth <= 768){

    // ANIMATION ILLUSTRATION (gauche) /////////////////////////////////////////////////////////////////////////////
    const illu= document.querySelector('#illustration');
    const bulle= document.querySelector('#bulle');
    const txt_bulle= document.querySelector('#txt-bulle');

    const images=[
        './asset/images/Moi2.png',
        './asset/images/Moi3.png',
        './asset/images/Moi4.png',
        './asset/images/Moi5.png',
        './asset/images/Moi6.png',
        './asset/images/Moi1.png'
    ];

    const nb_images= images.length
    let x=0;

    illu.addEventListener('click',(click)=>{
        x++;
        if(x>=nb_images){x=0};
        if(x===4){
            txt_bulle.innerHTML= 'Oups!';
            setTimeout(()=>{
                txt_bulle.innerHTML= 'Click!';
            },1500);
        }
        illu.style.backgroundImage= `url(${images[x]})`;  
    });

    setTimeout(()=>{
        txt_bulle.innerHTML= 'Click!';
        bulle.style.top='13%';
    },2000); 

 

// };



if(screen.width > 768 || document.body.clientWidth <= 768){
    // ANIMATION ILLUSTRATION (gauche) /////////////////////////////////////////////////////////////////////////////
    const zone_click= document.querySelector('.zone_clicable');
    
    zone_click.addEventListener('click',(click)=>{
        x++;
        if(x>=nb_images){x=0};
        if(x===4){
            txt_bulle.innerHTML= 'Oups!';
            setTimeout(()=>{
                txt_bulle.innerHTML= 'Click!';
            },1500);
        }
        illu.style.backgroundImage= `url(${images[x]})`;  
    });
    
    zone_click.addEventListener('mouseover', ()=>{
        txt_bulle.innerHTML= 'Click!';
        bulle.style.top='13%';
    });
    
    zone_click.addEventListener('mouseout', ()=>{
        txt_bulle.innerHTML= 'Hello!';
        bulle.style.top='15%';
    });
}

// ANIMATION DIV PRESENTATION (gauche) //////////////////////////////////////////////////////////////////////////////
const txt_slide= document.querySelectorAll('.txt-slide');
const ico_slide= document.querySelector('.ico_slide#txt_introduction').children;
const nb_slide= txt_slide.length;

//affiche la premiere slide qui, par défault est en display:none
txt_slide[0].style.display='inherit';
ico_slide[0].style.backgroundImage='url(asset/images/on.svg)';

let next;

const slide= setInterval(()=>{

    //Pour chaque slide de texte; faire une boucle de verification
    txt_slide.forEach((elem, index, array)=>{

        //Si il y en a un qui est visible, alors, on le rend invisible
        if(elem.style.display==='inherit'){
            elem.style.display='none';
            //Si il ne s'agit pas du dernier element, alors le suivant sera son index+1
            if(index<nb_slide-1){
                next=array[index+1];
                //l'icone corespondant à l'element qu'on rend invisible reprends sa couleur initiale, et la suivante s'éclaircie
                ico_slide[index].style.backgroundImage='url(asset/images/off.svg)';
                ico_slide[index+1].style.backgroundImage='url(asset/images/on.svg)';
            //Sinon, on revient au debut des slides, et on arrête le setInterval.
            }else{
                next=array[0];
                ico_slide[ico_slide.length-1].style.backgroundImage='url(asset/images/off.svg)';
                ico_slide[0].style.backgroundImage='url(asset/images/on.svg)';
                slide_works=false;
                clearInterval(slide);
            }
        }
    })
    next.style.display='inherit';
},10000);

Array.from(ico_slide).forEach((ico,index,icones)=>{
    let index_ico=index;
    ico.addEventListener('click',()=>{
        ico.style.backgroundImage='url(asset/images/on.svg)';
        clearInterval(slide);
        txt_slide.forEach((txt,index)=>{
            if(index===index_ico){
                txt.style.display="inherit"
            }else{
                txt.style.display="none";
                icones[index].style.backgroundImage='url(asset/images/off.svg)';
            }
        });
    })
})

// ANIMATION MORE RECONVERSION (droite) ////////////////////////////////////////////////////////////////////////////////////////////////////
const icone= document.querySelector("#plus");
const zone_clicable= document.querySelector("#en_savoir_plus");
const div= document.querySelector("#reconversion_explication");
let count= 0;


zone_clicable.addEventListener('click',()=>{
    if(count===0){
    div.style.animation="moveDiv 0.2s ease-in forwards";                    //active le keyframe (animation.scss)
    icone.setAttribute('class','little_icone fas fa-arrow-left');           //change d'icone
    count +=1;
    }else{
        div.style.animation="moveDiv 0.2s ease-in reverse forwards";
        icone.setAttribute('class','little_icone fas fa-plus');
        count= 0;
    }
})

