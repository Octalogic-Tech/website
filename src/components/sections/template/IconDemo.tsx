import { Icon } from "@iconify/react";

import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const codeSnippetAstro = `import { Icon } from "astro-icon/components";

<Icon name="material-symbols:menu" width="24" height="24" />`;

const codeSnippet = `import { Icon } from "@iconify/react";

<Icon icon="material-symbols:menu" width="24" height="24" />`;

export default function ImageDemoPage() {
  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    } catch {
      alert("Clipboard copy failed.");
    }
  };

  return (
    <div className="font-montserrat bg-white text-black">
      <div className="p-4">
        <pre className="captionL bold relative mb-8 rounded bg-gray-100 p-4 text-gray-800">
          <Typography>
            <span className="bold">Note:</span> Only use material-symbols icon
          </Typography>
        </pre>
        <Typography variant="bodyL" component="h2" className="mb-4" weight="semibold">
          How to use Icon component in Astro
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

        <Typography variant="bodyL" component="h2" className="mb-4" weight="semibold">
          How to use Icon component in ReactJS
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
