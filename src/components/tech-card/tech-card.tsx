// import Box from "@mui/material/Box";

// import Image from "next/image";

// import { ITechnology } from "@/interfaces";

// export const TechCard = ({ details }: { details: ITechnology }) => {
//   const { name, iconUrl, link } = details;
//   return (
//     <Box
//       sx={{
//         display: "flex",
//         alignItems: "center",
//         flexDirection: "column",
//         padding: "1.5rem 1rem",
//         transition: "box-shadow .3s, border-radius .3s",
//         ":hover": {
//           borderRadius: ".25rem",
//           boxShadow: "0.062rem 1.25rem 1.562rem -0.312rem rgb(46 61 73 / 30%)",
//         },
//         gap: "1.5rem",
//       }}
//     >
//       <Box
//         sx={{
//           position: "relative",
//           height: "112px",
//           width: "112px",
//         }}
//       >
//         <Image
//           src={iconUrl}
//           alt={`${name} logo`}
//           width={112}
//           height={112}
//           style={{ objectFit: "contain" }}
//         />
//       </Box>
//       <Box
//         sx={{
//           display: "flex",
//           justifyContent: "center",
//           alignItems: "center",
//           textAlign: "center",
//           margin: "0 1rem",
//         }}
//       >
//         <a
//           style={{
//             color: "#212529",
//             textTransform: "unset",
//             fontSize: "1.25rem",
//             fontWeight: "500",
//             textDecoration: "none",
//           }}
//           href={link}
//           target="_blank"
//           rel="noreferrer"
//         >
//           {name.toUpperCase()}
//         </a>
//       </Box>
//     </Box>
//   );
// };

// export default TechCard;

import Image from "next/image";
import Link from "next/link";
import { ITechnology } from "@/interfaces";
import Styles from "./tech-card.module.css";

export const TechCard = ({ details }: { details: ITechnology }) => {
  const { name, iconUrl, link } = details;
  return (
    <div
      className={`flex items-center flex-col py-[1.5rem] px-[1rem] transition duration-300 ease-in-out
       transform hover:rounded-md gap-[1.5rem] bg-white ${Styles.tech_card}`}
    >
      <div
        className=""
        style={{
          justifyContent: "center",
          display: "flex",
          width: "112px",
          height: "112px",
        }}
      >
        <Image
          src={iconUrl}
          alt={`${name} logo`}
          width={100}
          height={100}
          className="object-contain"
        />
      </div>
      <div className="flex justify-center items-center text-center mx-4">
        <Link
          href={link}
          target="_blank"
          rel="noreferrer"
          className="uppercase font-medium text-[20px] no-underline text-[#212529]"
        >
          {name.toUpperCase()}
        </Link>
      </div>
    </div>
  );
};

export default TechCard;
