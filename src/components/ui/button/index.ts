import { cva, type VariantProps } from 'class-variance-authority'

export { default as Button } from './Button.vue'

export const buttonVariants = cva(
  /** @tw */ 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
        /** @tw */ 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
        destructive:
        /** @tw */ 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
        /** @tw */ 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
        /** @tw */ 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
        ghost: /** @tw */ 'hover:bg-accent hover:text-accent-foreground',
        link: /** @tw */ 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        default: /** @tw */ 'h-9 px-4 py-2',
        sm: /** @tw */ 'h-8 rounded-md px-3 text-xs',
        lg: /** @tw */ 'h-10 rounded-md px-8',
        icon: /** @tw */ 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export type ButtonVariants = VariantProps<typeof buttonVariants>
