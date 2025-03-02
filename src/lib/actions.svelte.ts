import type { Snippet } from "svelte";
import type { Action } from "svelte/action";

export type FallBackType = "<p>Edita esto...</p>" | "<ul><li>Edita esto...</li></ul>"

export const customAction: Action<HTMLDivElement, { innerHTML: string, fallBack: FallBackType }> = (node, { innerHTML, fallBack }) => {
  return {
    update({ innerHTML }) {
      console.log(innerHTML)
      if (innerHTML === "<br>") {
        node.innerHTML = fallBack
        const range = document.createRange()
        const selection = window.getSelection()
        const textNode = node.firstChild as Node
        range.setStart(textNode, 1)
        range.setEnd(node, 1)
        selection?.removeAllRanges()
        selection?.addRange(range)
      }
    }
  }
}