function toggleLoader() {

  let hiddenLoader = document.getElementById("loader-hidden")
  let hiddenLoaderGraphic = document.getElementById("loader-graphic-hidden")
  let activeLoader = document.getElementById("loader")
  let activeLoaderGraphic = document.getElementById("loader-graphic")

  if (hiddenLoader) {

    hiddenLoader.id = 'loader'
    hiddenLoaderGraphic.id = "loader-graphic"

  } else if (activeLoader) {

    activeLoader.id = "loader-hidden"
    activeLoaderGraphic.id = "loader-graphic-hidden"
    
  }
}

export default toggleLoader