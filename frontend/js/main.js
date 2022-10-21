// let scrollClass = document.getElementsByClassName("scroll-effect");
// console.log(scrollClass)
// scrollClass.forEach(element => {
//     element.addEventListener("scroll", () => {
//         console.log(element);
//     });
// });

window.addEventListener("scroll", (event) => {
    // console.log(`${(100 + window.scrollY * 0.1)}%`)
    document.getElementById("es").style.backgroundSize = `${(100 + window.scrollY * 0.1)}%`
})