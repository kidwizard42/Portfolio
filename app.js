$(() => {
    $menuDrop = $("#main-nav-ul-hamburger")
    $menuDrop.on("click",() => {
        $(".main-nav-li").toggleClass( "display-none" )
        console.log("works")
    })
})