import React from 'react';
import withDefaults from '../../utils/with-defaults';
import { getMargin } from '../../utils/dimensions';

interface Props {
  x?: number;
  y?: number;
  inline?: boolean;
  className?: string;
}

const defaultProps = {
  x: 1,
  y: 1,
  inline: false,
  className: '',
};

type NativeAttrs = Omit<React.HTMLAttributes<unknown>, keyof Props>;
export type SpacerProps = Props & typeof defaultProps & NativeAttrs;

const Spacer: React.FC<SpacerProps> = ({
  x,
  y,
  inline,
  className,
  ...props
}) => {
  const left = getMargin(x);
  const top = getMargin(y);

  return (
    <span className={className} {...props}>
      <style jsx>{`
        span {
          display: ${inline ? 'inline-block' : 'block'};
          height: 1px;
          width: 1px;
          margin-left: ${left};
          margin-top: ${top};
        }
      `}</style>
    </span>
  );
};

const MemoSpacer = React.memo(Spacer);

export default withDefaults(MemoSpacer, defaultProps);
