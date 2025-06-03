import './style.css'
import * as BUI from "@thatopen/ui"

BUI.Manager.init()
const grid = document.getElementById("grid")

grid.layouts = {
  main: `
    "header header" auto
    "sidebar content" 1fr
    "sidebar content" 1fr
    / auto 1fr
  `
}

grid.setLayout("main")
