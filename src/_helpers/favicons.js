import WorkDark from '../_assets/favicons/code-dark.svg'
import WorkLight from '../_assets/favicons/code-light.svg'
import HomeDark from '../_assets/favicons/cloud-sun-dark.svg'
import HomeLight from '../_assets/favicons/cloud-sun-light.svg'
import AboutDark from '../_assets/favicons/smile-dark.svg'
import AboutLight from '../_assets/favicons/smile-light.svg'
import ResumeDark from '../_assets/favicons/file-lines-dark.svg'
import ResumeLight from '../_assets/favicons/file-lines-light.svg'
import ContactDark from '../_assets/favicons/hand-wave-dark.svg'
import ContactLight from '../_assets/favicons/hand-wave-light.svg'
import ProjectsDark from '../_assets/favicons/rocket-launch-dark.svg'
import ProjectsLight from '../_assets/favicons/rocket-launch-light.svg'

export function setFavicon() {
  const path = window.location.pathname
  const favicon = document.getElementById("favicon");
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

  switch (path) {
    case "/home":
      favicon.href = isDarkMode ? HomeLight : HomeDark
      break;
    case '/work':
      favicon.href = isDarkMode ? WorkLight : WorkDark
      break;
    case '/about':
      favicon.href = isDarkMode ? AboutLight : AboutDark
      break;
    case '/projects':
      favicon.href = isDarkMode ? ProjectsLight : ProjectsDark
      break;
    case '/resume':
      favicon.href = isDarkMode ? ResumeLight : ResumeDark
      break;
    case '/contact':
      favicon.href = isDarkMode ? ContactLight : ContactDark
      break;
    default:
      break;
  }
}