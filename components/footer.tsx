import React from 'react'

import { cn } from '@/lib/utils'
import { ExternalLink } from '@/components/external-link'

export function FooterText({ className, ...props }: React.ComponentProps<'p'>) {
  return (
    <p
      className={cn(
        'px-2 text-center text-xs leading-normal text-muted-foreground',
        className
      )}
      {...props}
    >
      Multi-agent AI chatbot built by{' '}
      <ExternalLink href="https://www.reply.com/laife-reply/en/">Laife Reply</ExternalLink>
      .
    </p>
  )
}
