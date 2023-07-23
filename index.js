const onScroll = () => {
    const htmlElement = document.documentElement
    const scrollPercent = htmlElement.scrollTop / htmlElement.clientHeight
    htmlElement.style.setProperty("--page-1-scroll", Math.min(scrollPercent * 100, 100).toString())
}

window.addEventListener("scroll", onScroll)

onScroll()