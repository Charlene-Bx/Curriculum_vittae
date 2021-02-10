// PROGRESS BAR ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const progress = document.querySelectorAll('.progress');

progress.forEach((bar)=>{
    const pourcentage= bar.dataset.progress;
    bar.style.width= `${pourcentage}%`
})

// PROGRESS PUNT ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const punts = document.querySelectorAll('.p_progress');


punts.forEach((bar)=>{
    const d_progress= bar.nextSibling;
    const pourcentage= 100-(bar.dataset.progress);


    d_progress.style.width= `${pourcentage}%`
})