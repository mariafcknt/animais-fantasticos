export default class ScrollAnima {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections)
    this.windowMetade = window.innerHeight * 0.6 //altura visível da tela do navegador

    this.animaScroll =  this.animaScroll.bind(this)
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top //retorna informações sobre a posição do elemento na tela (.top é a distância do topo da janela até o topo da seção)
      const isSectionVisible = sectionTop - this.windowMetade < 0
      if (isSectionVisible) {
        section.classList.add('ativo')
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo')
      }
    })
  }

  init() {
    this.animaScroll()
    window.addEventListener('scroll', this.animaScroll)
  }
}
