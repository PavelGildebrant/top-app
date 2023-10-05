import { DetailedHTMLProps, HtmlHTMLAttributes, ReactNode } from 'react';

export interface ParagraphProps
  extends DetailedHTMLProps<
    HtmlHTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  > {
  size?: 'small' | 'average' | 'big';
  children: ReactNode;
}
