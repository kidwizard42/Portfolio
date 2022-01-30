$(() => {
  $menuDrop = $("#main-nav-ul-hamburger")
  $menuDrop.on("click", () => {
    $(".main-nav-li").toggleClass("display-none")
    console.log("works")
  })

  let projectIndex = 0
  $("#right").on("click", () => {
    $("#section-wrapper").children().eq(projectIndex).css("display", "none")
    projectIndex++
    // need to change this when I add more projects
    if (projectIndex > 2) {
      projectIndex = 0
    }
    $("#section-wrapper").children().eq(projectIndex).css("display", "block")
  })

  $("#left").on("click", () => {
    $("#section-wrapper").children().eq(projectIndex).css("display", "none")
    projectIndex--
    if (projectIndex < 0) {
      //   need to change this when I add more projects
      projectIndex = 2
    }
    $("#section-wrapper").children().eq(projectIndex).css("display", "block")
  })

  $("#modal-form").on("submit", (e) => {
    e.preventDefault()
    $(".contact-modal-background").css("display", "none")
  })

  $("#email").on("click", () => {
    $(".contact-modal-background").css("display", "flex")
  })
  $(".remove-modal").on("click", () => {
    $(".contact-modal-background").css("display", "none")
  })
})
