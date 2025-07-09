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

const codeSnippet = `import { Typography } from "@/components/ui/typography";

<Typography font="montserrat" variant="bodyM" weight="medium">
  Hello There
</Typography>`;

export default function TypographyDemo() {
  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet).then(() => {
      alert("Code copied to clipboard!");
    });
  };

  const copySnippet = (font: string, variant: string, weight: string, text: string) => {
    const code = `<Typography font="${font}" variant="${variant}" weight="${weight}">${text}</Typography>`;
    navigator.clipboard.writeText(code).then(() => alert("Snippet copied!"));
  };

  return (
    <main className="bg-white font-sans text-black">
      <section className="flex items-center justify-between rounded-t-md bg-teal-400 px-6 py-4 text-black">
        <div>
          <h1 className="text-xl font-bold">Typography</h1>
          <p className="text-sm text-gray-800">Design System → Typography</p>
        </div>
        <span className="text-xs text-gray-800">Octalogic Tech design system</span>
      </section>

      <div className="p-4">
        {/* Typography Props Explanation */}
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

        {/*    <section className="mb-8">
          <h2 className="mb-2 text-lg font-semibold">Typography Props</h2>
          <ul className="list-disc pl-6 text-sm text-gray-800">
            <li>
              <strong>font:</strong> <code>"montserrat"</code> | <code>"barlow-condensed"</code>
            </li>
            <li>
              <strong>variant:</strong>{" "}
              <code>
                "captionM" | "captionL" | "bodyM" | "bodyL" | "h6" | "h5" | "h4" | "h3" | "h2" |
                "h1"
              </code>
            </li>
            <li>
              <strong>weight:</strong> <code>"normal"</code> | <code>"medium"</code> |{" "}
              <code>"semibold"</code> | <code>"bold"</code>
            </li>
            <li>
              <strong>children:</strong> React text or elements (the content inside)
            </li>
          </ul>
        </section> */}

        <h2 className="mb-4 text-xl font-semibold">How to use</h2>
        <pre className="relative mb-8 rounded bg-gray-100 p-4 text-sm text-gray-800">
          <>
            <button
              onClick={handleCopy}
              className="absolute top-0 right-0 mb-4 rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-700"
            >
              📋 Copy Typography Example
            </button>
            {codeSnippet}
          </>
        </pre>

        <h2 className="mb-4 text-xl font-semibold">Example</h2>
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
            {/*   <tbody>
              {weights.map((weight) => (
                <tr key={weight}>
                  <td className="border border-gray-200 px-2 py-2 text-left font-semibold capitalize">
                    {weight}
                  </td>

                  {montserratVariants.map(({ variant }) => (
                    <td key={`mont-${weight}-${variant}`} className="border border-gray-200 py-2">
                      <Typography
                        font="montserrat"
                        variant={variant as VariantType}
                        weight={weight}
                      >
                        Hello There
                      </Typography>
                    </td>
                  ))}

                  {barlowVariants.map(({ variant }) => (
                    <td key={`barlow-${weight}-${variant}`} className="border border-gray-200 py-2">
                      {weight === "normal" || weight === "bold" ? null : (
                        <Typography
                          font="barlow-condensed"
                          variant={variant as VariantType}
                          weight={weight}
                        >
                          HELLO THERE
                        </Typography>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody> */}
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
                        >
                          Hello There
                        </Typography>
                        <button
                          onClick={() => copySnippet("montserrat", variant, weight, "Hello There")}
                          className="absolute top-0 right-0 rounded bg-gray-800 px-1 py-1 text-xs text-white hover:bg-gray-700"
                        >
                          📋
                        </button>
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
                          >
                            HELLO THERE
                          </Typography>
                          <button
                            onClick={() =>
                              copySnippet("barlow-condensed", variant, weight, "HELLO THERE")
                            }
                            className="absolute top-0 right-0 rounded bg-gray-800 px-1 py-1 text-xs text-white hover:bg-gray-700"
                          >
                            📋
                          </button>
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
    </main>
  );
}
