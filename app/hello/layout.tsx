import React, { ReactNode } from 'react'

export default function layout({children}:{children:ReactNode}) {
  return (
    <div>
      hello的Layout
      {children}
    </div>
  )
}
