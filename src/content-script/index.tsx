import '../base.css'
import './styles.scss'

function check() {
  const headerContainers = document.querySelectorAll('div > h3')
  console.log('headerContainers', headerContainers)
  if (headerContainers.length > 0) {
    for (let i = 0; i < headerContainers.length; i++) {
      const button_element = document.createElement('button')
      button_element.id = 'submit'
      button_element.textContent = '🗑️' + ' All'
      headerContainers[i].append(button_element)
      const button_element2 = document.createElement('button')
      button_element2.id = 'submit'
      button_element2.textContent = '🗑️' + ' Last-5'
      headerContainers[i].append(button_element2)
    }
    return true
  }
  return false
}

const refreshId = setInterval(function () {
  const properID = check()
  if (properID) {
    clearInterval(refreshId)
  }
}, 5000)
