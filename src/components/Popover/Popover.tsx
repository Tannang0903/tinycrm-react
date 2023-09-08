import { ElementType, useId, useRef, useState } from 'react'
import { useFloating, FloatingPortal, arrow, shift, offset, type Placement } from '@floating-ui/react'
import { motion, AnimatePresence } from 'framer-motion'

interface Props {
  children: React.ReactNode
  renderPopover: React.ReactNode
  className?: string
  as?: ElementType
  placement?: Placement
}

const Popover = ({ children, renderPopover, className, as: Element = 'div', placement = 'bottom-end' }: Props) => {
  const [isOpen, setIsOpen] = useState(false)

  const id = useId()

  const arrowRef = useRef<HTMLElement>(null)

  const { x, y, refs, strategy, middlewareData } = useFloating({
    middleware: [offset(12), shift(), arrow({ element: arrowRef })],
    placement: placement
  })

  const togglePopover = () => {
    if (!isOpen) {
      setIsOpen(true)
    } else {
      setIsOpen(false)
    }
  }

  return (
    <Element className={className} ref={refs.setReference} onClick={togglePopover}>
      {children}
      <FloatingPortal id={id}>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={refs.setFloating}
              style={{
                position: strategy,
                top: y ?? 0,
                left: x ?? 0,
                width: 'max-content',
                transformOrigin: `${middlewareData.arrow?.x}px top`
              }}
              initial={{ opacity: 0, transform: 'scale(0)' }}
              animate={{ opacity: 1, transform: 'scale(1)' }}
              exit={{ opacity: 0, transform: 'scale(0)' }}
              transition={{ duration: 0.2 }}
            >
              {renderPopover}
            </motion.div>
          )}
        </AnimatePresence>
      </FloatingPortal>
    </Element>
  )
}

export default Popover
