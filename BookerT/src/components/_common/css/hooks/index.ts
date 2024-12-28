import  { CSSProperties } from 'react'

export const useDisabledStyle = (disabled?:boolean) =>disabled
? { cursor: 'not-allowed', pointerEvents: 'none', opacity: '0.8' } as CSSProperties
: {} as CSSProperties;
