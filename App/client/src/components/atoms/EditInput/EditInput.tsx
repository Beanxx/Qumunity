import React, { forwardRef, useState, useEffect } from "react"
import { Editor } from "@toast-ui/react-editor"
import "@toast-ui/editor/dist/toastui-editor.css"
import "@toast-ui/editor/dist/theme/toastui-editor-dark.css"

type Props = {
  value?: string | string[]
}

const EditInput = forwardRef<Editor, Props>(({ value }, ref) => {
  const [markdown, setMarkDown] = useState("")

  useEffect(() => {
    if (value) {
      setMarkDown(value as string)
    }
  }, [value])

  return (
    <>
      {" "}
      {markdown && (
        <Editor
          initialValue={markdown}
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
          theme="dark"
        />
      )}
    </>
  )
})

export default EditInput
