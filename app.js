$(() => {
    $menuDrop = $("#hamburger")
    $menuDrop.on("click",() => {
        $(".main-nav-li").toggleClass( "display-none" )
        console.log("works")
    })
})