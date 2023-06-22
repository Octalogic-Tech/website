import Head from "@/components/head";
import Link from "next/link";
import HorizontalRule from "@/components/horizontal-rule/horizontal-rule";
import Heading from "@/components/heading/heading";
import Paragraph from "@/components/paragraph/paragraph";

import { host } from "@/config/vars";

const siteUrl = `https://${host}/privacy-policy`;

const PrivacyPolicy = () => {
  return (
    <>
      <Head title="Octalogic Tech - Privacy Policy" canonicalUrl={siteUrl} />
      <div className="max-w-screen-xl mx-auto px-4">
        <Heading size="large" className="mb-4 text-center">
          Privacy Policy
        </Heading>
        <Paragraph className="text-base leading-6 mb-4 mt-2">
          Your privacy is important to us. It is Octalogic Tech&apos;s policy to respect your
          privacy regarding any information we may collect from you across our website,&nbsp;
          <Link
            href="/"
            className="no-underline hover:underline text-[#007bff] hover:text-[#0056b3]"
          >
            https://octalogic.in/
          </Link>
          , and other sites we own and operate.
        </Paragraph>
        <Paragraph className="text-base leading-6 mb-4 mt-2">
          We only ask for personal information when we truly need it to provide a service to you. We
          collect it by fair and lawful means, with your knowledge and consent. We also let you know
          why we’re collecting it and how it will be used.
        </Paragraph>
        <Paragraph className="text-base leading-6 mb-4 mt-2">
          We only retain collected information for as long as necessary to provide you with your
          requested service. What data we store, we’ll protect within commercially acceptable means
          to prevent loss and theft, as well as unauthorised access, disclosure, copying, use or
          modification.
        </Paragraph>
        <Paragraph className="text-base leading-6 mb-4 mt-2">
          We don’t share any personally identifying information publicly or with third-parties,
          except when required to by law.
        </Paragraph>
        <Paragraph className="text-base leading-6 mb-4 mt-2">
          Our website may link to external sites that are not operated by us. Please be aware that
          we have no control over the content and practices of these sites, and cannot accept
          responsibility or liability for their respective privacy policies.
        </Paragraph>
        <Paragraph className="text-base leading-6 mb-4 mt-2">
          You are free to refuse our request for your personal information, with the understanding
          that we may be unable to provide you with some of your desired services.
        </Paragraph>
        <Paragraph className="text-base leading-6 mb-4 mt-2">
          Your continued use of our website will be regarded as acceptance of our practices around
          privacy and personal information. If you have any questions about how we handle user data
          and personal information, feel free to contact us.
        </Paragraph>
        <Paragraph className="text-base leading-6 mb-4 mt-2">
          This policy is effective as of 1 March 2017.
        </Paragraph>
      </div>
      <HorizontalRule />
    </>
  );
};

export default PrivacyPolicy;
