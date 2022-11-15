import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import Head from "../../components/head";
import Link from "../../components/link/link";
import HorizontalRule from "../../components/horizontal-rule/horizontal-rule";

const TermsOfService = () => {
  return (
    <>
      <Head title="Octalogic Tech - Terms of Service" />
      <Box sx={{ maxWidth: "71.25rem", margin: "0 auto", padding: "0 1rem" }}>
        <Typography
          component="h2"
          sx={{
            color: "text.primary",
            fontSize: "2rem",
            textAlign: "center",
            marginBottom: "1.5rem",
          }}
        >
          Octalogic Tech Terms of Service
        </Typography>
        <Typography component="h3" sx={{ color: "text.primary", fontSize: "1.75rem" }}>
          1. Terms
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "text.primary",
            fontSize: "1rem",
            marginBottom: "1rem",
            marginTop: "0.5rem",
          }}
        >
          By accessing the website at{" "}
          <Link
            href="/"
            sx={{
              color: "#007bff",
              textDecoration: "none",
              ":hover": { color: "#0056b3", textDecoration: "underline" },
            }}
          >
            https://octalogic.in/
          </Link>
          , you are agreeing to be bound by these terms of service, all applicable laws and
          regulations, and agree that you are responsible for compliance with any applicable local
          laws. If you do not agree with any of these terms, you are prohibited from using or
          accessing this site. The materials contained in this website are protected by applicable
          copyright and trademark law.
        </Typography>
        <Typography component="h3" sx={{ color: "text.primary", fontSize: "1.75rem" }}>
          2. Use License
        </Typography>
        <ol type="a">
          <li>
            Permission is granted to temporarily download one copy of the materials (information or
            software) on Octalogic Tech&apos;s website for personal, non-commercial transitory
            viewing only. This is the grant of a license, not a transfer of title, and under this
            license you may not:
          </li>
          <ol type="i">
            <li>modify or copy the materials;</li>
            <li>
              use the materials for any commercial purpose, or for any public display (commercial or
              non-commercial);
            </li>
            <li>
              attempt to decompile or reverse engineer any software contained on Octalogic
              Tech&apos;s website;
            </li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>
              transfer the materials to another person or &quot;mirror&quot; the materials on any
              other server.
            </li>
          </ol>
          <li>
            This license shall automatically terminate if you violate any of these restrictions and
            may be terminated by Octalogic Tech at any time. Upon terminating your viewing of these
            materials or upon the termination of this license, you must destroy any downloaded
            materials in your possession whether in electronic or printed format.
          </li>
        </ol>
        <Typography component="h3" sx={{ color: "text.primary", fontSize: "1.75rem" }}>
          3. Disclaimer
        </Typography>
        <ol type="a">
          <li>
            The materials on Octalogic Tech&apos;s website are provided on an &apos;as is&apos;
            basis. Octalogic Tech makes no warranties, expressed or implied, and hereby disclaims
            and negates all other warranties including, without limitation, implied warranties or
            conditions of merchantability, fitness for a particular purpose, or non-infringement of
            intellectual property or other violation of rights.
          </li>
          <li>
            Further, Octalogic Tech does not warrant or make any representations concerning the
            accuracy, likely results, or reliability of the use of the materials on its website or
            otherwise relating to such materials or on any sites linked to this site.
          </li>
        </ol>
        <Typography component="h3" sx={{ color: "text.primary", fontSize: "1.75rem" }}>
          4. Limitations
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "text.primary",
            fontSize: "1rem",
            marginBottom: "1rem",
            marginTop: "0.5rem",
          }}
        >
          In no event shall Octalogic Tech or its suppliers be liable for any damages (including,
          without limitation, damages for loss of data or profit, or due to business interruption)
          arising out of the use or inability to use the materials on Octalogic Tech&apos;s website,
          even if Octalogic Tech or a Octalogic Tech authorized representative has been notified
          orally or in writing of the possibility of such damage. Because some jurisdictions do not
          allow limitations on implied warranties, or limitations of liability for consequential or
          incidental damages, these limitations may not apply to you.
        </Typography>
        <Typography component="h3" sx={{ color: "text.primary", fontSize: "1.75rem" }}>
          5. Accuracy of materials
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "text.primary",
            fontSize: "1rem",
            marginBottom: "1rem",
            marginTop: "0.5rem",
          }}
        >
          The materials appearing on Octalogic Tech&apos;s website could include technical,
          typographical, or photographic errors. Octalogic Tech does not warrant that any of the
          materials on its website are accurate, complete or current. Octalogic Tech may make
          changes to the materials contained on its website at any time without notice. However
          Octalogic Tech does not make any commitment to update the materials.
        </Typography>
        <Typography component="h3" sx={{ color: "text.primary", fontSize: "1.75rem" }}>
          6. Links
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "text.primary",
            fontSize: "1rem",
            marginBottom: "1rem",
            marginTop: "0.5rem",
          }}
        >
          Octalogic Tech has not reviewed all of the sites linked to its website and is not
          responsible for the contents of any such linked site. The inclusion of any link does not
          imply endorsement by Octalogic Tech of the site. Use of any such linked website is at the
          user&apos;s own risk.
        </Typography>
        <Typography component="h3" sx={{ color: "text.primary", fontSize: "1.75rem" }}>
          7. Modifications
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "text.primary",
            fontSize: "1rem",
            marginBottom: "1rem",
            marginTop: "0.5rem",
          }}
        >
          Octalogic Tech may revise these terms of service for its website at any time without
          notice. By using this website you are agreeing to be bound by the then current version of
          these terms of service.
        </Typography>
        <Typography component="h3" sx={{ color: "text.primary", fontSize: "1.75rem" }}>
          8. Governing Law
        </Typography>
        <Typography
          component="p"
          sx={{
            color: "text.primary",
            fontSize: "1rem",
            marginBottom: "1rem",
            marginTop: "0.5rem",
          }}
        >
          These terms and conditions are governed by and construed in accordance with the laws of
          Goa and you irrevocably submit to the exclusive jurisdiction of the courts in that State
          or location.
        </Typography>
      </Box>
      <HorizontalRule />
    </>
  );
};

export default TermsOfService;
