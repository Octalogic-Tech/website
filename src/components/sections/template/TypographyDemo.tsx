import { Icon } from "@iconify/react";

import { Button } from "@/components/ui/button";
import { Typography, type VariantType, type WeightType } from "@/components/ui/typography";

const montserratVariants = [
  { variant: "captionM", size: 12 },
  { variant: "captionL", size: 14 },
  { variant: "bodyM", size: 16 },
  { variant: "bodyL", size: 20 },
];

const barlowVariants = [
  { variant: "h6", size: 24 },
  { variant: "h5", size: 32 },
  { variant: "h4", size: 40 },
  { variant: "h3", size: 48 },
  { variant: "h2", size: 64 },
  { variant: "h1", size: 80 },
];

const weights: WeightType[] = ["normal", "medium", "semibold", "bold"];

const codeSnippetAstro = `import { typographyVariants } from "@/components/ui/typography";

<span
  class={typographyVariants({
    font: "montserrat",
    variant: "bodyM",
    weight: "medium",
    className: "",
  })}
>
  Hello There
</span>`;

const codeSnippet = `import { Typography } from "@/components/ui/typography";

<Typography font="montserrat" variant="bodyM" weight="medium">
  Hello There
</Typography>`;

export default function TypographyDemo() {
  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    } catch (_) {
      alert("Clipboard copy failed.");
    }
  };

  const copySnippet = async (font: string, variant: string, weight: string, text: string) => {
    try {
      const code = `<Typography font="${font}" variant="${variant}" weight="${weight}">${text}</Typography>`;
      await navigator.clipboard.writeText(code);
      alert("Code copied to clipboard!");
    } catch {
      alert("Clipboard copy failed.");
    }
  };

  return (
    <div className="font-montserrat bg-white text-black">
      <div className="p-4">
        {/* Typography Props Explanation */}
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
                    <code className="rounded px-1 py-0.5 font-mono">font</code>
                  </td>
                  <td className="px-4 py-2">montserrat | barlow-condensed</td>
                  <td className="px-4 py-2">montserrat</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-2">
                    <code className="rounded px-1 py-0.5 font-mono">variant</code>
                  </td>
                  <td className="px-4 py-2">
                    captionM | captionL | bodyM | bodyL | h6 | h5 | h4 | h3 | h2 | h1
                  </td>
                  <td className="px-4 py-2">bodyM</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-2">
                    <code className="rounded px-1 py-0.5 font-mono">weight</code>
                  </td>
                  <td className="px-4 py-2">normal | medium | semibold | bold</td>
                  <td className="px-4 py-2">normal</td>
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
          How to use typographyVariants in Astro
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
          How to use Typography component in ReactJS
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
          Example Available Font Variants
        </Typography>
        <div className="overflow-x-auto">
          <table className="min-w-full table-fixed border border-gray-200 text-center">
            <thead className="bg-white">
              <tr>
                <th className="border border-gray-200 bg-white px-2 py-2 text-center"></th>
                <th
                  colSpan={montserratVariants.length}
                  className="border border-gray-200 bg-white px-2 py-2 text-center"
                >
                  Montserrat
                </th>
                <th
                  colSpan={barlowVariants.length}
                  className="border border-gray-200 bg-white px-2 text-center"
                >
                  Barlow Condensed
                </th>
              </tr>
              <tr>
                <th className="w-32 border border-gray-200 bg-white"></th>
                {montserratVariants.map(({ variant }) => (
                  <th key={`mont-${variant}`} className="border border-gray-200 py-2">
                    {variant}
                  </th>
                ))}
                {barlowVariants.map(({ variant }) => (
                  <th key={`barlow-${variant}`} className="border border-gray-200 py-2">
                    {variant}
                  </th>
                ))}
              </tr>
              <tr>
                <th className="w-32 border border-gray-200 bg-white"></th>
                {montserratVariants.map(({ size }) => (
                  <th key={`mont-${size}`} className="border border-gray-200 py-2">
                    {size}
                  </th>
                ))}
                {barlowVariants.map(({ size }) => (
                  <th key={`barlow-${size}`} className="border border-gray-200 py-2">
                    {size}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {weights.map((weight) => (
                <tr key={weight}>
                  <td className="border border-gray-200 px-2 py-2 text-left font-semibold capitalize">
                    {weight}
                  </td>

                  {/* Montserrat */}
                  {montserratVariants.map(({ variant }) => (
                    <td
                      key={`mont-${weight}-${variant}`}
                      className="relative border border-gray-200 py-2"
                    >
                      <div className="flex flex-col items-center gap-1">
                        <Typography
                          font="montserrat"
                          variant={variant as VariantType}
                          weight={weight}
                          component="span"
                        >
                          Hello There
                        </Typography>
                        <Button
                          variant="text"
                          className="absolute top-0 right-0 h-8 cursor-pointer rounded bg-gray-800 px-2 text-white hover:bg-gray-700"
                          onClick={() => copySnippet("montserrat", variant, weight, "Hello There")}
                        >
                          <Icon
                            icon="material-symbols:text-snippet-outline-sharp"
                            width="24"
                            height="24"
                          />
                        </Button>
                      </div>
                    </td>
                  ))}

                  {/* Barlow Condensed */}
                  {barlowVariants.map(({ variant }) => (
                    <td
                      key={`barlow-${weight}-${variant}`}
                      className="relative border border-gray-200 py-2"
                    >
                      {weight === "normal" || weight === "bold" ? null : (
                        <div className="flex flex-col items-center gap-1">
                          <Typography
                            font="barlow-condensed"
                            variant={variant as VariantType}
                            weight={weight}
                            component="span"
                          >
                            HELLO THERE
                          </Typography>
                          <Button
                            variant="text"
                            className="absolute top-0 right-0 h-8 cursor-pointer rounded bg-gray-800 px-2 text-white hover:bg-gray-700"
                            onClick={() =>
                              copySnippet("barlow-condensed", variant, weight, "HELLO THERE")
                            }
                          >
                            <Icon
                              icon="material-symbols:text-snippet-outline-sharp"
                              width="24"
                              height="24"
                            />
                          </Button>
                        </div>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
