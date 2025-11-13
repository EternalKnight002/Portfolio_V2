// global.d.ts — add at project root
declare module '*.css'
declare module '*.scss'
declare module '*.sass'
declare module '*.png'
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.webp'
declare module '*.gif'
declare module '*.svg' {
  const content: any
  export default content
}
