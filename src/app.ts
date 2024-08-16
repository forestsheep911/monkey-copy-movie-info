import loadcss from './loadcss'

const app = () => {
  loadcss()
  const titleEle = document.querySelector('h1')
  if (!titleEle) {
    return
  }
  // make button container
  const copyButtonContainer = document.createElement('h1')
  titleEle.parentElement?.insertBefore(copyButtonContainer, titleEle)

  // copy title
  const copyTitleButton = document.createElement('button')
  copyTitleButton.textContent = '标题'
  copyTitleButton.classList.add('custom-btn', 'btn-6')
  copyTitleButton.addEventListener('click', async () => {
    const range = document.createRange()
    range.selectNodeContents(titleEle)
    const selection = window.getSelection()
    if (!selection) {
      return
    }
    selection.removeAllRanges()
    selection.addRange(range)

    try {
      document.execCommand('copy')
    } catch (err) {}
    selection.removeAllRanges()
  })
  copyButtonContainer.append(copyTitleButton)

  // copy movie base info
  const movieBaseInfoEle = document.querySelector('#info') as HTMLElement | null
  if (movieBaseInfoEle) {
    // find elements in doubanInfo with tag <span> and style display: none
    const disabledInfo = movieBaseInfoEle?.querySelectorAll('span[style*="display: none"]')

    // make disabledInfo visible (inline)
    if (disabledInfo?.length) {
      disabledInfo.forEach((item) => {
        ;(item as HTMLElement).style.display = 'inline'
      })
    }

    // remove <a href="javascript:;" class="more-attrs" title="显示更多">更多...</a>
    const moreAttrs = movieBaseInfoEle?.querySelector('.more-attrs')
    if (moreAttrs) {
      moreAttrs.remove()
    }

    // create a copy button to copy info
    const copyBaseInfoButton = document.createElement('button')
    copyBaseInfoButton.textContent = '信息'
    copyBaseInfoButton.classList.add('custom-btn', 'btn-6')
    copyBaseInfoButton.addEventListener('click', async () => {
      if (movieBaseInfoEle) {
        // find last <span> element in the root element and remove it
        const lastSpan = movieBaseInfoEle.querySelector(':scope > span:last-child')
        if (lastSpan) {
          if (lastSpan.nextSibling) {
            lastSpan.nextSibling.remove()
          }
          lastSpan.remove()
        }
        const range = document.createRange()
        range.selectNodeContents(movieBaseInfoEle)
        const selection = window.getSelection()
        if (!selection) {
          return
        }
        selection.removeAllRanges()
        selection.addRange(range)
        try {
          document.execCommand('copy')
        } catch (err) {}
        selection.removeAllRanges()
      }
    })
    copyButtonContainer.append(copyBaseInfoButton)
  }

  // copy description
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).catch((err) => {
      console.error('Failed to copy text: ', err)
    })
  }
  const trimAllSpaces = (text: string): string => {
    return text.replace(/[\s\u3000]/g, '')
  }
  // find element which like `<span property="v:summary">...</span>`
  const descriptionEle = document.querySelector('span[property="v:summary"]')
  if (descriptionEle) {
    const copyDescriptionButton = document.createElement('button')
    copyDescriptionButton.textContent = '简介'
    copyDescriptionButton.classList.add('custom-btn', 'btn-6')
    copyDescriptionButton.addEventListener('click', async () => {
      if (!descriptionEle) {
        return
      }
      const range = document.createRange()
      range.selectNodeContents(descriptionEle)
      const selectedText = trimAllSpaces(range.toString())
      copyToClipboard(selectedText)
    })
    copyButtonContainer.append(copyDescriptionButton)
  }
}

export default app
