import '../base.css'
import './styles.scss'
function deleteConversations(group: string, day: string) {
  alert(`Delete ${group} ${day}`)
}

function check() {
  const headerContainers = document.querySelectorAll('div > h3')
  console.log('headerContainers', headerContainers)
  if (headerContainers.length > 0) {
    for (let i = 0; i < headerContainers.length; i++) {
      const button_element = document.createElement('button')
      const originalHeader = headerContainers[i].textContent
      button_element.id = 'submit'
      button_element.textContent = '🗑️' + ' All'
      headerContainers[i].append(button_element)
      button_element.setAttribute('onclick', `deleteConversations("All", "${originalHeader}")`)

      const button_element2 = document.createElement('button')
      button_element2.id = 'submit'
      button_element2.textContent = '🗑️' + ' Last-5'
      headerContainers[i].append(button_element2)
      button_element2.setAttribute('onclick', `deleteConversations("Last-5", "${originalHeader}")`)
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

const s = document.createElement('script')
s.src = chrome.runtime.getURL('script.js')
s.onload = function () {
  this.remove()
}
// see also "Dynamic values in the injected code" section in this answer
;(document.head || document.documentElement).appendChild(s)
