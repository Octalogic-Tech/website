import { Icon } from "@iconify/react";

import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";

const codeSnippetAstro = `import { buttonVariants } from "@/components/ui/button";

<button
  class={buttonVariants({
    variant: "primary",
    className: "",
  })}
>
  Hello There
</button>`;

const codeSnippet = `import { Button } from "@/components/ui/button";

<Button variant="primary">
  Hello There
</Button>`;

export default function ButtonDemoPage() {
  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  return (
    <div className="font-montserrat bg-white text-black">
      <div className="p-4">
        {/* Button Props Explanation */}
        <section className="my-8">
          <Typography variant="bodyL" component="h2" className="mb-4" weight="semibold">
            Props
          </Typography>
          <div className="overflow-x-auto">
            <table className="captionL w-full table-auto border-collapse">
              <thead>
                <tr className="border-b border-gray-700 text-left">
                  <th className="px-4 py-2 font-medium">name</th>
                  <th className="px-4 py-2 font-medium">type</th>
                  <th className="px-4 py-2 font-medium">default</th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-2">
                    <code className="rounded px-1 py-0.5 font-mono">variant</code>
                  </td>
                  <td className="px-4 py-2">primary | primaryOptional | secondary | text</td>
                  <td className="px-4 py-2">primary</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-2">
                    <code className="rounded px-1 py-0.5 font-mono">size</code>
                  </td>
                  <td className="px-4 py-2">default</td>
                  <td className="px-4 py-2">default</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-2">
                    <code className="rounded px-1 py-0.5 font-mono">className</code>
                  </td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">""</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    <code className="rounded px-1 py-0.5 font-mono">children</code>
                  </td>
                  <td className="px-4 py-2">ReactNode</td>
                  <td className="px-4 py-2">—</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <Typography variant="bodyL" component="h2" className="mb-4" weight="semibold">
          How to use buttonVariants in Astro
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
          How to use Button component in ReactJS
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

        <Typography variant="bodyL" component="h2" className="mb-4" weight="semibold">
          Example Available Button Variants
        </Typography>
        <div className="flex w-full flex-col justify-center space-y-4 p-4">
          <Button variant="primary" className="w-60 justify-between">
            <Icon icon="material-symbols:arrow-downward-rounded" width="36" height="36" />
            GET IN TOUCH
            <Icon icon="material-symbols:arrow-downward-rounded" width="36" height="36" />
          </Button>
          <Button variant="primaryOptional" className="w-60 justify-between">
            <Icon icon="material-symbols:arrow-downward-rounded" width="36" height="36" />
            GET IN TOUCH
            <Icon icon="material-symbols:arrow-downward-rounded" width="36" height="36" />
          </Button>
          <Button variant="secondary" className="w-60 justify-between">
            <Icon icon="material-symbols:arrow-downward-rounded" width="36" height="36" />
            GET IN TOUCH
            <Icon icon="material-symbols:arrow-downward-rounded" width="36" height="36" />
          </Button>
          <Button variant="text" className="w-60 justify-between">
            <Icon icon="material-symbols:arrow-downward-rounded" width="36" height="36" />
            GET IN TOUCH
            <Icon icon="material-symbols:arrow-downward-rounded" width="36" height="36" />
          </Button>
        </div>
      </div>
    </div>
  );
}
