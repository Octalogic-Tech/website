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

export const TechCard = ({ details }: { details: ITechnology }) => {
  const { name, iconUrl, link } = details;
  return (
    <div
      className="flex flex-row items-center sm:flex-col p-6 transition duration-300 ease-in-out
       transform hover:border-opacity-0 hover:shadow-lg hover:rounded-md space-y-6 "
      style={
        {
          // width: "200px",
          // height: "200px",
        }
      }
    >
      <div
        className=""
        style={{
          // background: "red",
          // width: "100%",
          // height: "100%",
          justifyContent: "center",
          display: "flex",
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
          className="text-gray-700 uppercase font-medium text-lg no-underline"
        >
          {name.toUpperCase()}
        </Link>
      </div>
    </div>
  );
};

export default TechCard;
