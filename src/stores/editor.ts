import { acceptHMRUpdate, defineStore } from 'pinia'

import type * as m from 'monaco-editor'

import yaml from 'js-yaml'
import type { ResumeInfo } from '~/types'
import { isClient } from '~/utils'

export const namespace = 'web-resume'

export const useEditorStore = defineStore('editor', () => {
  const codeEditor = ref<m.editor.IStandaloneCodeEditor | null>()

  const resumeText = useStorage(`${namespace}-text`, '')

  let resumeCached: ResumeInfo

  const resumeJson = computed(() => {
    try {
      resumeCached = yaml.load(resumeText.value) as ResumeInfo
      clearErrorMessage()
    }
    catch (e: any) {
      if (e)
        setErrorMessage(e.mark.line + 1, e.mark.column + 1, e.reason)
    }
    return resumeCached
  })

  // helper
  async function clearErrorMessage() {
    const editorModel = codeEditor.value?.getModel()
    if (editorModel && isClient) {
      const { editor } = await import('monaco-editor')
      editor.setModelMarkers(editorModel, 'yaml', [])
    }
  }

  async function setErrorMessage(
    line: number,
    column: number,
    message: string,
  ) {
    const editorModel = codeEditor.value?.getModel()
    if (editorModel && isClient) {
      const { editor, MarkerSeverity } = await import('monaco-editor')
      editor.setModelMarkers(editorModel, 'yaml', [
        {
          startLineNumber: line,
          endLineNumber: line,
          startColumn: column,
          endColumn: editorModel.getLineContent(line).length + 1,
          severity: MarkerSeverity.Error,
          message,
        },
      ])
    }
  }

  function setResumeText(value: string) {
    resumeText.value = value
  }

  function setResume(value: string) {
    setResumeText(value)
  }

  function setEditor(value: m.editor.IStandaloneCodeEditor) {
    codeEditor.value = value
  }

  return {
    codeEditor,
    resumeText,
    resumeJson,
    setEditor,
    setResume,
    setResumeText,
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useEditorStore, import.meta.hot))
