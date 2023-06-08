const progressEI = document.querySelector(".progress")
window.onscroll=()=>scrollProgress()

function scrollProgress(){
    /*calculate height of page*/
    const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
    const scrollTop = document.documentElement.scrollTop
    /*change to percentage% */
    const scrollPercentage = (scrollTop/pageHeight)*100
    progressEI.style.visibility = "visible"
    progressEI.style.width = scrollPercentage+"%"
}