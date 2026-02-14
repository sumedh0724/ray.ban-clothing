Shery.imageEffect("#back",{style:5, gooey:true, config:{"a":{"value":1.6,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.08442978686133},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.35,"range":[1,15]},"durationOut":{"value":0.55,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.21,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":1},"noise_speed":{"value":1.68,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.49,"range":[0,2]},"noise_scale":{"value":18.32,"range":[0,100]}}
});

let isAnimating=false;
let curInd=0;
// document.querySelector('#back').addEventListener('click', function(){
//     if(!isAnimating){
//         isAnimating=true;
//         document.querySelectorAll('.h1').forEach(function(h1){
//             let h1s=h1.querySelectorAll('h1');
//             // console.log(h1);
//             // let prev=curInd;
//             gsap.to(h1s[curInd],{
//                 top: '-100%',
//                 duration: 1,
//                 onComplete: function(){
//                     h1s[curInd].style.top='100%';
//                     console.log((curInd)%5);
//                     isAnimating=false;
//                 }
//             });
//             gsap.to(h1s[(curInd+1)%5],{
//                 top: '0',
//                 duration: 1
//             });
//         });
//         curInd=(curInd+1)%5;
//     }
// });

document.querySelector('#back').addEventListener('click', function(){
    if(!isAnimating){
        isAnimating=true;
        document.querySelectorAll('.h1').forEach(function(h1){
            let h1s=h1.querySelectorAll('h1');
            
            for(let i = 0; i < h1s.length; i++){
                if(i === curInd){
                    gsap.set(h1s[i], {top: '0%'});
                } else {
                    gsap.set(h1s[i], {top: '100%'});
                }
            }
            
            gsap.to(h1s[curInd],{
                top: '-100%',
                duration: .2,
                onComplete: function(){
                    h1s[curInd].style.top='100%';
                    isAnimating=false;
                }
            });
            gsap.to(h1s[(curInd+1)%5],{
                top: '0',
                duration: .2
            });
        });
        curInd=(curInd+1)%5;
    }
});