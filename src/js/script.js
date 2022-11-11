// BUTTONS
const add = document.getElementById('js-add')
const remove = document.getElementById('js-remove')
const fill = document.getElementById('js-fill')
const clear = document.getElementById('js-clear')
const log = Array.from(document.getElementsByClassName('js-log'))

// LOG ITEMS
const logBlock = document.getElementById('log')
const logSection = document.getElementById('log-content-section')
const logClone = document.querySelector('.log-clone')

// CARD ITEMS
const section = document.getElementById('js-card-section')
const card = document.querySelector('.clone-item')

let items = []
let removedItems = []

document.addEventListener('DOMContentLoaded', () => {
  show()

  add.addEventListener('click', () => {
    const newItem = createItem()
    items.push(newItem)
    localStorage.setItem('items', JSON.stringify(items))
    checkState()
  })

  remove.addEventListener('click', () => {
    const lastItem = items.pop()
    if(lastItem != null) {
      removedItems.push(lastItem)
      if(removedItems.length > 10) {
        removedItems.splice(0, 1)
      }
    }
    localStorage.setItem('removedItems', JSON.stringify(removedItems))
    localStorage.setItem('items', JSON.stringify(items))
    updateSection()
    show()
    checkState()
  })

  clear.addEventListener('click', () => {
    updateSection()
    const firstElement = items.shift()
    items = []
    items.push(firstElement)
    localStorage.setItem('items', JSON.stringify(items))
    show()
    checkState()
    // CLEAR WITH LOG (IN PROGRESS)
  })

  fill.addEventListener('click', () => {
    for(let i = items.length; i < 9; i++) {
      const newItem = createItem()
      items.push(newItem)
      localStorage.setItem('items', JSON.stringify(items))
    }
    checkState()
  })

  log.forEach(btn => {
    btn.addEventListener('click', () => {
      logBlock.classList.toggle('isActive')
    })
  })

  // Generated events handler
  document.addEventListener('click', e => {
    const { target: { classList, parentElement } } = e

    if(Array.from(classList).includes('card__modal')) {
      MicroModal.show('modal-1')
    }

    if(Array.from(classList).includes('log-restore')) {
      const removedIdentifier = parentElement.querySelector('.removed-title').innerText
      const survivor = removedItems.find(el => el.name === removedIdentifier)
      const survivorIndex = removedItems.findIndex(el => el.name === removedIdentifier)
      items.push(survivor)
      localStorage.setItem('items', JSON.stringify(items))
      removedItems.splice(survivorIndex, 1)
      localStorage.setItem('removedItems', JSON.stringify(removedItems))
    }

    if(Array.from(classList).includes('card__remove')) {
      const identifier = parentElement.querySelector('.card__title').innerText
      const victim = items.find(el => el.name === identifier)
      const victimIndex = items.findIndex(el => el.name === identifier)
      removedItems.push(victim)
      items.splice(victimIndex, 1)
      localStorage.setItem('items', JSON.stringify(items))
      localStorage.setItem('removedItems', JSON.stringify(removedItems))
    }

    updateSection()
    show()
    checkState()
  })
})

function updateSection() {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  while (logSection.firstChild) {
    logSection.removeChild(logSection.firstChild);
  }
}

function createItem() {
  const cloneCard = card.cloneNode(true)
  cloneCard.classList.remove('clone-item')
  const cloneCardWithContent = createContentItem(cloneCard)
  section.appendChild(cloneCardWithContent)
  return cloneCardWithContent
}

function createContentItem(item) {
  const generatedTitle = randomTextGenerator(15)
  const generatedBody = randomTextGenerator(80)

  const titleNode = item.querySelector('.card__title')
  const bodyNode = item.querySelector('.card__body')

  item.name = generatedTitle
  item.body = generatedBody

  titleNode.innerText = generatedTitle
  bodyNode.innerText = generatedBody
  
  return item
}

function setItemContent(item) {
  const cloneCardWithContent = card.cloneNode(true)
  cloneCardWithContent.classList.remove('clone-item')

  const titleNode = cloneCardWithContent.querySelector('.card__title')
  const bodyNode = cloneCardWithContent.querySelector('.card__body')

  titleNode.innerText = item.name
  bodyNode.innerText = item.body

  section.appendChild(cloneCardWithContent)
}

function setRemovedItemContent(item) {
  const removedClone = logClone.cloneNode(true)
  removedClone.classList.remove('log-clone')

  const titleNode = removedClone.querySelector('.removed-title')

  titleNode.innerText = item.name

  logSection.appendChild(removedClone)
}

function show() {
  for(let key in localStorage) {
    if(key === 'items') {
      items = JSON.parse(localStorage.getItem('items'))
      items.forEach(item => {
        setItemContent(item)
      })
    }
    if(key === 'removedItems') {
      removedItems = JSON.parse(localStorage.getItem('removedItems'))
      removedItems.forEach(removed => {
        setRemovedItemContent(removed)
      })
    }
  }
  checkState()
}

function randomTextGenerator(wordLength) {
  const letters = 'abcdefghijklmnopqrstuvwxyz '
  let result = ''
  while (result.length < wordLength) {
    result += letters[Math.floor(Math.random() * letters.length)];
  }
  return result
}

function checkState() {
  if(items.length <= 1) {
    clear.classList.add('el-btn--disabled')
  } else if(items.length >= 9) {
    fill.classList.add('el-btn--disabled')
  } else {
    clear.classList.remove('el-btn--disabled')
    fill.classList.remove('el-btn--disabled')
  }
}