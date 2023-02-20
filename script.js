function handleActiveTab(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  tabContent[0].classList.add('ativo');
  function activeTab(index){
    tabContent.forEach(item => {
      item.classList.remove('ativo')
    })
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((item, index) => {
    item.addEventListener('click', function(){
      activeTab(index)
    })
  })
}
handleActiveTab();

function handleActiveMenuMobile(){
  const iconMenuOpen = document.querySelector('.cabecalho__menu__open');
  const iconMenuExit = document.querySelector('.cabecalho__menu__exit');
  const liMenu = document.querySelectorAll('.cabecalho__lista li a');
  const ulMenu = document.querySelector('.js-tabmenu');

  function activeMenu(){
    ulMenu.classList.add('ativo');
    if( ulMenu.classList.contains('ativo')) {
      iconMenuOpen.classList.add('desactive')
      iconMenuExit.classList.add('ativo')
    }
  }

  function desactiveMenu(){
    ulMenu.classList.remove('ativo')
    iconMenuExit.classList.remove('ativo')
    iconMenuOpen.classList.remove('desactive').add('ativo')
  }
  
  iconMenuOpen.addEventListener('click', activeMenu )
  iconMenuExit.addEventListener('click', desactiveMenu)
  liMenu.forEach(item => {
    item.addEventListener('click', desactiveMenu)
  })
}
handleActiveMenuMobile();