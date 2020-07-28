const hamburger=document.querySelector('.hamburger');
const navlinks=document.querySelector('.nav-links')
hamburger.addEventListener('click',()=>{
    console.log("wow");
    navlinks.classList.toggle('open');
})
const appearright=function(e){
    const description=document.querySelectorAll(".description");
    // console.log(description);
    // let descriptionposition=description.getBoundingClientRect().top;
    // console.log(descriptionposition);
    description.forEach(one=>{
        const slideInAt=window.scrollY+window.innerHeight-one.offsetHeight/2;
        // console.log(slideInAt);
        // console.log(one.offsetHeight)
        const bottomofdiv=one.offsetTop+one.clientHeight;
        // console.log(bottomofdiv);
        const halfShown=slideInAt>one.offsetTop;
        const isNotscrolledpast=window.scrollY<bottomofdiv;
        if(halfShown && isNotscrolledpast){
            one.classList.add("description-after");
        }
        else {
             one.classList.remove("description-after");
        }    
    })

}
const appearleft=function(){
    const imagesfeatures=document.querySelectorAll(".images-features");
    console.log(imagesfeatures)
    // console.log(description);
    // let descriptionposition=description.getBoundingClientRect().top;
    // console.log(descriptionposition);
    imagesfeatures.forEach(two=>{
        const slideInAt=window.scrollY+window.innerHeight-two.offsetHeight/2;
        // console.log(slideInAt);
        // console.log(one.offsetHeight)
        const bottomofdiv=two.offsetTop+two.clientHeight;
        console.log("Wow")
        // console.log(bottomofdiv);
        const halfShown=slideInAt>two.offsetTop;
        const isNotscrolledpast=window.scrollY<bottomofdiv;
        if(halfShown && isNotscrolledpast){
            two.classList.add("images-after");
        }
        else {
             two.classList.remove("images-after");
        }    
    })


}
window.addEventListener('scroll',appearleft);
window.addEventListener('scroll',appearright);