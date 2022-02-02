$(() => {
  // MY GLOBAL (within the jquery function global) VARIABLES AND FUNCTIONS
  let projectIndex = 0
  let numberOfPojects = $("#section-wrapper").children().length - 1

  const autoNextImg = () => {
    $("#section-wrapper").children().eq(projectIndex).css("display", "none")
    projectIndex++

    if (projectIndex > numberOfPojects) {
      projectIndex = 0
    }
    $("#section-wrapper").children().eq(projectIndex).css("display", "block")
  }

  let sliderInterval = setInterval(autoNextImg, 4000)

  const nextImgRight = () => {
    clearInterval(sliderInterval)
    $("#section-wrapper").children().eq(projectIndex).css("display", "none")

    // Looks worse when I have it fade bc of how the html is set up (I THNK)
    // $("#section-wrapper").children().eq(projectIndex).fadeOut(100)
    // $("#section-wrapper").delay(800)
    projectIndex++

    if (projectIndex > numberOfPojects) {
      projectIndex = 0
    }
    $("#section-wrapper").children().eq(projectIndex).css("display", "block")
    // $("#section-wrapper").children().eq(projectIndex).fadeIn(100)
    sliderInterval = setInterval(autoNextImg, 4000)
  }

  const nextImgLeft = () => {
    clearInterval(sliderInterval)

    $("#section-wrapper").children().eq(projectIndex).css("display", "none")

    // $("#section-wrapper").children().eq(projectIndex).fadeOut(500)
    // $("#section-wrapper").delay(400)
    projectIndex--
    if (projectIndex < 0) {
      projectIndex = $("#section-wrapper").children().length - 1
    }
    // $("#section-wrapper").children().eq(projectIndex).fadeIn(600)

    $("#section-wrapper").children().eq(projectIndex).css("display", "block")
    sliderInterval = setInterval(autoNextImg, 4000)
  }

  $menuDrop = $("#main-nav-ul-hamburger")
  $menuDrop.on("click", () => {
    // $(".main-nav-li").toggleClass("display-none")
    $(".main-nav-li").slideToggle(350)
    // console.log("works")
  })

  $("#right").on("click", nextImgRight)

  $("#left").on("click", nextImgLeft)

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
