import { Icon } from "@iconify/react";

import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const codeSnippetAstro = `import { Image } from "@datocms/astro";

<Image data={logo.responsiveImage} />`;

const codeSnippet = `import { SRCImage } from 'react-datocms';

<SRCImage data={data.blogPost.cover.responsiveImage} />`;

export default function ImageDemoPage() {
  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    } catch (_) {
      alert("Clipboard copy failed.");
    }
  };

  return (
    <div className="font-montserrat bg-white text-black">
      <div className="p-4">
        <Typography variant="bodyL" component="h2" className="mb-2" weight="semibold">
          How to use Dato Image component in Astro
        </Typography>
        <Typography className="mb-4">
          Please checkout{" "}
          <a
            className="text-primary-blue underline"
            href="https://github.com/datocms/astro-datocms/tree/a28eace43b9b9957123887d28395614f412351fd/src/Image"
          >
            docs
          </a>{" "}
          for props.
        </Typography>
        <pre className="captionL relative mb-8 rounded bg-gray-100 p-4 text-gray-800">
          <Button
            variant="text"
            className="absolute top-0 right-0 h-8 cursor-pointer rounded bg-gray-800 px-2 text-white hover:bg-gray-700"
            onClick={() => handleCopy(codeSnippetAstro)}
          >
            <Icon icon="material-symbols:text-snippet-outline-sharp" width="24" height="24" />
          </Button>
          {codeSnippetAstro}
        </pre>

        <Typography variant="bodyL" component="h2" className="mb-2" weight="semibold">
          How to use Dato Image component in ReactJS
        </Typography>
        <Typography className="mb-4">
          Please checkout{" "}
          <a
            className="text-primary-blue underline"
            href="https://github.com/datocms/react-datocms/blob/HEAD/docs/image.md"
          >
            docs
          </a>{" "}
          for props.
        </Typography>
        <pre className="captionL relative mb-8 rounded bg-gray-100 p-4 text-gray-800">
          <Button
            variant="text"
            className="absolute top-0 right-0 h-8 cursor-pointer rounded bg-gray-800 px-2 text-white hover:bg-gray-700"
            onClick={() => handleCopy(codeSnippet)}
          >
            <Icon icon="material-symbols:text-snippet-outline-sharp" width="24" height="24" />
          </Button>
          {codeSnippet}
        </pre>
      </div>
    </div>
  );
}
