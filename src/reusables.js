const scrollFunction = () => {
        if (document.documentElement.scrollTop > 70) {
                document.getElementById("navlist").style.padding = "25px 0px";
                document.getElementById("logo").style.fontSize = "24px";
                document.getElementById("logo").style.marginTop = "10px";
                document.getElementById("mainNav").style.marginTop = "120px"
                document.getElementById("circularimage").style.height = "70px"
                document.getElementById("circularimage").style.borderWidth = "2px";
                document.getElementById("shouldHideWhenScrolled1").style.display = "none"
                document.getElementById("shouldHideWhenScrolled2").style.display = "none"
                document.getElementById("logo").style.marginRight = "650px"
                document.getElementById("contacts").style.marginTop = "0px";

        }
        else {
                document.getElementById("navlist").style.padding = "70px 10px";
                document.getElementById("logo").style.fontSize = "35px";
                document.getElementById("logo").style.marginTop = "30px";
                document.getElementById("mainNav").style.marginTop = "400px";
                document.getElementById("circularimage").style.height = "250px";
                document.getElementById("circularimage").style.borderWidth = "8px";
                document.getElementById("shouldHideWhenScrolled1").style.display = "block";
                document.getElementById("shouldHideWhenScrolled2").style.display = "block"
                document.getElementById("logo").style.marginRight = "0px"
                document.getElementById("contacts").style.marginTop = "200px";
        }
}

const isElementInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
}

const highlightHeaderIfSectionVisible = (id, headerId) => {
        const element = document.getElementById(id);
        const headerElement = document.getElementById(headerId)
        if (!element) return
        if (isElementInViewport(element)) headerElement.setAttribute('class', 'active')
        else headerElement.removeAttribute('class')
}


export {
        scrollFunction,
        highlightHeaderIfSectionVisible,
}