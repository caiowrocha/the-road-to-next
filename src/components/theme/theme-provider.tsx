'use client'

import { ThemeProvider as BaseThemeProvider, ThemeProviderProps } from 'next-themes'
import { useEffect, useState } from 'react'


const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return (
            <>
                {children}
            </>
        )
    }

    return (
        <BaseThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            {children}
        </BaseThemeProvider>
    )
}

export { ThemeProvider }
