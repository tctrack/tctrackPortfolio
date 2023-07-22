const Common = () => {

    let bodyTag = document.querySelector("body");

    bodyTag.addEventListener("mousemove", function(e) {  
        //console.log('mouse over');
        var x = e.clientX;
        var y = e.clientY;
        var newposX = x - 10;
        var newposY = y - 10;
        
        document.querySelector(".cursor").style.top = `${newposY}px`;
        document.querySelector(".cursor").style.left = `${newposX}px`;
        
    });

    window.addEventListener("scroll", function(e) {  
        
        let top = window.pageYOffset;
        
        if(top > 50){
            document.querySelector(".main-header").classList.add("fixed-header");
        }else{
            document.querySelector(".main-header").classList.remove("fixed-header");
            
        }

        if(top > 700){
            document.querySelector(".backToTop").classList.add("backToTopShow");
        }else{
            document.querySelector(".backToTop").classList.remove("backToTopShow");
        }

    });

    

    

}

export default Common;

export const removeFixedHeader = () =>{
    document.querySelector('.main-header').classList.remove("fixed-header");
    document.querySelector('body').classList.remove("overflow-hidden");
    document.querySelector(".menuContactArea-section").classList.remove("menuContactArea-show");
}