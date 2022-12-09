import React, { forwardRef } from "react"
import { Editor } from "@toast-ui/react-editor"
import "@toast-ui/editor/dist/toastui-editor.css"
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"

const EditorInput = forwardRef<Editor>((_, ref) => {
  return (
    <Editor
      previewStyle="tab"
      height="400px"
      useCommandShortcut={false}
      initialEditType="markdown"
      toolbarItems={[
        ["heading", "bold", "italic", "strike"],
        ["hr", "quote"],
        ["ul", "ol", "task"],
        ["table", "link"],
        ["code", "codeblock"],
      ]}
      ref={ref}
    />
  )
})

export default EditorInput
