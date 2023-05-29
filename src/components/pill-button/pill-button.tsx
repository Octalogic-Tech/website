// import { ReactElement } from "react";

// import { styled } from "@mui/material/styles";
// import LoadingButton, { LoadingButtonProps } from "@mui/lab/LoadingButton";

// import Link from "../link/link";

// interface LinkWrapperProps {
//   condition: string | undefined;
//   wrapper: (children: ReactElement) => ReactElement;
//   children: ReactElement;
// }

// const MyButton = styled(LoadingButton)(({ theme }: { theme: any }) => ({
//   fontSize: "1rem",
//   borderRadius: "1.562rem",
//   color: theme.palette.info.contrastText,
//   textTransform: "unset",
//   padding: "0.7rem 2rem",
//   backgroundColor: theme.palette.secondary.main,
//   lineHeight: "1.5",
//   ":hover": {
//     backgroundColor: theme.palette.secondary.main,
//     boxShadow: "2px 4px 10px rgb(255 98 167 / 40%)",
//   },
//   "&.MuiLoadingButton-loading": {
//     backgroundColor: theme.palette.secondary.main,
//   },
//   ".MuiLoadingButton-loadingIndicator": {
//     color: theme.palette.info.contrastText,
//   },
// }));

// const ConditionalLinkWrapper = ({ condition, wrapper, children }: LinkWrapperProps) =>
//   condition ? wrapper(children) : children;

// export function PillButton(props: LoadingButtonProps) {
//   console.log("btn", props);

//   const { title, href, ...otherProps } = props;

//   return (
//     <ConditionalLinkWrapper
//       condition={href}
//       wrapper={(children: ReactElement) => (
//         <Link href={href as string} passHref sx={{ textDecoration: "none" }}>
//           {children}
//         </Link>
//       )}
//     >
//       <MyButton variant="contained" {...otherProps}>
//         {title}
//       </MyButton>
//     </ConditionalLinkWrapper>
//   );
// }

// export default PillButton;

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
  console.log("btn", props);

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
