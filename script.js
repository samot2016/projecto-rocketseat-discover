function toggleMode() {
  const html = document.documentElement

  /*
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  } 
  */
  /* código anterior pode ser colocado numa só linha */
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir imagem
  if (html.classList.contains("light")) {
    //se estiver em light mode, adicionar a imagem light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "imagem avatar light")
  }
  // se estiver sem light mode, manter a imagem normal
  else img.setAttribute("src", "./assets/avatar.png")
  img.setAttribute("alt", "Imagem normal")
} 
