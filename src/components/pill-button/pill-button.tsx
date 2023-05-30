import { ReactElement } from "react";
import Link from "../link/link";

interface LinkWrapperProps {
  condition: string | undefined;
  wrapper: (children: ReactElement) => ReactElement;
  children: ReactElement;
}

const ConditionalLinkWrapper = ({ condition, wrapper, children }: LinkWrapperProps) =>
  condition ? wrapper(children) : children;

export function PillButton(props: any) {
  const { title, href, ...otherProps } = props;

  return (
    <ConditionalLinkWrapper
      condition={href}
      wrapper={(children: ReactElement) => (
        <Link href={href as string} passHref style={{ textDecoration: "none" }}>
          {children}
        </Link>
      )}
    >
      <button
        {...otherProps}
        className="bg-[#FF62A7] text-white text-base rounded-3xl py-3 px-6 bg-secondary hover:bg-secondary hover:shadow-md"
      >
        {title}
      </button>
    </ConditionalLinkWrapper>
  );
}

export default PillButton;
