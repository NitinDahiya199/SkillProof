'use client'

import React, { useState } from 'react'
import { useServerInsertedHTML } from 'next/navigation'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import { StyledThemeProviderWrapper } from '@/components/providers/StyledThemeProvider'

export default function StyledComponentsRegistry({
  children,
}: {
  children: React.ReactNode
}) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') {
    return <StyledThemeProviderWrapper>{children}</StyledThemeProviderWrapper>
  }

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      <StyledThemeProviderWrapper>{children}</StyledThemeProviderWrapper>
    </StyleSheetManager>
  )
}

