// app/design-system/button/page.tsx
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

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
          <h2 className="mb-4 text-xl font-semibold">Props</h2>
          <div className="overflow-x-auto">
            <table className="w-full table-auto border-collapse text-sm">
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

        <h2 className="mb-4 text-xl font-semibold">How to use buttonVariants in Astro</h2>
        <div className="relative mb-8 rounded bg-gray-100 p-4 text-sm text-gray-800">
          <button
            id="copy-typography-example"
            className="absolute top-0 right-0 mb-4 cursor-pointer rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
            onClick={() => handleCopy(codeSnippetAstro)}
          >
            📋
          </button>
          <pre>{codeSnippetAstro}</pre>
        </div>

        <h2 className="mb-4 text-xl font-semibold">How to use Button component in ReactJS</h2>
        <pre className="relative mb-8 rounded bg-gray-100 p-4 text-sm text-gray-800">
          <>
            <button
              onClick={() => handleCopy(codeSnippet)}
              className="absolute top-0 right-0 mb-4 cursor-pointer rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
            >
              📋
            </button>
            {codeSnippet}
          </>
        </pre>

        <h2 className="mb-4 text-xl font-semibold">Example Available Button Variants</h2>
        <div className="flex w-full flex-col justify-center space-y-4 p-4">
          <Button variant="primary" className="w-60 justify-between">
            <ArrowDown />
            GET IN TOUCH
            <ArrowDown />
          </Button>
          <Button variant="primaryOptional" className="w-60 justify-between">
            <ArrowDown />
            GET IN TOUCH
            <ArrowDown />
          </Button>
          <Button variant="secondary" className="w-60 justify-between">
            <ArrowDown />
            GET IN TOUCH
            <ArrowDown />
          </Button>
          <Button variant="text" className="w-60 justify-between">
            <ArrowDown />
            GET IN TOUCH
            <ArrowDown />
          </Button>
        </div>
      </div>
    </div>
  );
}
