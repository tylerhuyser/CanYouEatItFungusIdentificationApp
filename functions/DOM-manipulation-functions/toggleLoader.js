function toggleLoader() {

  let body = document.body
  let hiddenLoader = document.getElementById("loader-hidden")
  let hiddenLoaderGraphic = document.getElementById("loader-graphic-hidden")
  let activeLoader = document.getElementById("loader")
  let activeLoaderGraphic = document.getElementById("loader-graphic")

  if (hiddenLoader) {

    hiddenLoader.id = 'loader'
    hiddenLoaderGraphic.id = "loader-graphic"
    body.classList.add('no-scroll')

  } else if (activeLoader) {

    console.log('here')

    activeLoader.id = "loader-hidden"
    activeLoaderGraphic.id = "loader-graphic-hidden"
    body.classList.remove('no-scroll')
    
  }
}

export default toggleLoader