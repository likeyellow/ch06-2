import type {FC, DetailedHTMLProps, HTMLAttributes} from 'react'
import {makeClassName} from './textUtil'

type TextProps = DetailedHTMLProps<
  HTMLAttributes<HTMLParagraphElement>,
  HTMLParagraphElement
>

export type TitleProps = TextProps & {
  numberOfLines?: number
}
export const Title: FC<TitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    'font-bold text-5xl text-center whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export type SubtitleProps = TitleProps & {}
export const Subtitle: FC<SubtitleProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    'font-semiblold text-3xl text-center whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export type SummaryProps = SubtitleProps & {}
export const Summary: FC<SummaryProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    'text-sm whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}

export type PragraphProps = SummaryProps & {}
export const Paragraph: FC<PragraphProps> = ({
  className: _className,
  numberOfLines,
  ...props
}) => {
  const className = makeClassName(
    'font-normal text-base whitespace-pre-line',
    _className,
    numberOfLines
  )
  return <p {...props} className={className} />
}