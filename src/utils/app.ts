import { ThemeManager } from './theme'

export function AppSetup() {
  // use theme manager
  const themeManager = ThemeManager()
  return {
    themeManager,
  }
}
