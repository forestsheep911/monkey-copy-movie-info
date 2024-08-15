const app = () => {
  console.log('monkey jumping on the bed1.')
  const doubanInfo = document.querySelector('#info')
  if (doubanInfo) {
    console.log(doubanInfo)
  } else {
    console.log('no douban info')
  }
  // find element in doubanInfo which tag is span and style is display: none
  const disabledInfo = doubanInfo?.querySelectorAll('span[style*="display: none"]')
  if (disabledInfo) {
    console.log(disabledInfo)
  } else {
    console.log('no disabled info')
  }
  // make disabledInfo visible (inline)
  if (disabledInfo?.length) {
    disabledInfo.forEach((item) => {
      item.setAttribute('style', 'display: inline')
    })
  }
  // remove <a href="javascript:;" class="more-attrs" title="显示更多">更多...</a>
  const moreAttrs = doubanInfo?.querySelector('.more-attrs')
  if (moreAttrs) {
    moreAttrs.remove()
  }
  // copy info into clipboard
  const info = doubanInfo?.textContent
  if (info) {
    console.log(info.trim())
  }
  // create a copy button to copy info
  const copyButton = document.createElement('button')
  copyButton.textContent = 'Copy'
  copyButton.setAttribute('style', 'position: fixed; top: 0; right: 0; z-index: 9999;')
  copyButton.addEventListener('click', () => {
    navigator.clipboard.writeText(info?.trim() || '')
  })
  doubanInfo?.appendChild(copyButton)
}

export default app
