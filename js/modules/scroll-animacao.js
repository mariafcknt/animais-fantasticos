export default function initAnimacaoScroll() {
  const sections = document.querySelectorAll('[data-anime="scroll"]')

  function animaScroll() {
    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top //retorna informações sobre a posição do elemento na tela (.top é a distância do topo da janela até o topo da seção)
      const isSectionVisible = sectionTop - windowMetade < 0
      if (isSectionVisible) {
        section.classList.add('ativo')
      } else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo')
      }
    })
  }

  const windowMetade = window.innerHeight * 0.6 //altura visível da tela do navegador

  if (sections.length) {
    animaScroll()
    window.addEventListener('scroll', animaScroll)
  }
}
