import { ReactElement } from "react";
import Link from "next/link";

interface LinkWrapperProps {
  condition: string | undefined;
  wrapper: (children: ReactElement) => ReactElement;
  children: ReactElement;
}

const ConditionalLinkWrapper = ({ condition, wrapper, children }: LinkWrapperProps) =>
  condition ? wrapper(children) : children;

/* Renders a pill button and if it has an href, then is wrapped in a Link */
export function PillButton(props: any) {
  const { title, href, ...otherProps } = props;

  return (
    <ConditionalLinkWrapper
      condition={href}
      wrapper={(children: ReactElement) => <Link href={href}>{children}</Link>}
    >
      <button
        {...otherProps}
        className="bg-[#FF62A7] text-white text-base rounded-3xl py-3 px-6 hover:shadow-md"
      >
        {title}
      </button>
    </ConditionalLinkWrapper>
  );
}

export default PillButton;
