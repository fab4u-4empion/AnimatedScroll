const onScroll = () => {
    const htmlElement = document.documentElement
    const scrollPercent = htmlElement.scrollTop / htmlElement.clientHeight * 100
    htmlElement.style.setProperty("--page-1-scroll", scrollPercent.toString())

    if (scrollPercent >= 30)
        document.getElementById("header__text").classList.add("black")
    else
        document.getElementById("header__text").classList.remove("black")
}

window.addEventListener("scroll", onScroll)

onScroll()