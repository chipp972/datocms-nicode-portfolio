declare module '*.svg' {
  const content: any;
  export default content;
}

declare module '*.inline.svg' {
  const content: any;
  export default content;
}

declare type SvgProps = {
  size?: number;
  className?: string;
  style?: React.CSSProperties;
};
