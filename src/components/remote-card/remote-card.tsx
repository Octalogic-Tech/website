// import { Typography } from "@mui/material";
// import Box from "@mui/material/Box";

// import Image from "next/image";

// import { IRemote } from "@/interfaces";

// export const RemoteCard = ({ details }: { details: IRemote }) => {
//   const { name, imageUrl } = details;
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
//           height: "200px",
//           width: "200px",
//         }}
//       >
//         <Image
//           src={imageUrl}
//           alt={`${name}`}
//           width={200}
//           height={200}
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
//         <Typography
//           sx={{
//             color: "#212529",
//             textTransform: "unset",
//             fontSize: "1.25rem",
//             fontWeight: "500",
//             textDecoration: "none",
//           }}
//         >
//           {name.toUpperCase()}
//         </Typography>
//       </Box>
//     </Box>
//   );
// };

// export default RemoteCard;

import Image from "next/image";

import { IRemote } from "@/interfaces";

export const RemoteCard = ({ details }: { details: IRemote }) => {
  const { name, imageUrl } = details;
  return (
    <div className="flex items-center flex-col p-6 transition duration-300 ease-in-out transform hover:border-opacity-0 hover:shadow-lg hover:rounded-md space-y-6">
      <div className="relative h-52 w-52">
        <Image src={imageUrl} alt={`${name}`} width={200} height={200} className="object-contain" />
      </div>
      <div className="flex justify-center items-center text-center mx-4">
        <p className="text-gray-700 uppercase font-medium text-lg no-underline">
          {name.toUpperCase()}
        </p>
      </div>
    </div>
  );
};

export default RemoteCard;
