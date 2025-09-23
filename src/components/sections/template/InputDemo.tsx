import { Icon } from "@iconify/react";

import { Input } from "@/components/ui/input";
import { Typography } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";

const codeSnippet = `import { Input } from "@/components/ui/input";

<Input 
 placeholder="Email"
 helperText="We’ll never share your email."
 />`;

export default function InputDemo() {
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
        {/* Input Props Explanation */}
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
              <tbody>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-2">
                    <code className="rounded px-1 py-0.5 font-mono">error</code>
                  </td>
                  <td className="px-4 py-2">boolean</td>
                  <td className="px-4 py-2">false</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-2">
                    <code className="rounded px-1 py-0.5 font-mono">helperText</code>
                  </td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">""</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-2">
                    <code className="rounded px-1 py-0.5 font-mono">leftIcon</code>
                  </td>
                  <td className="px-4 py-2">ReactNode</td>
                  <td className="px-4 py-2">—</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-2">
                    <code className="rounded px-1 py-0.5 font-mono">rightIcon</code>
                  </td>
                  <td className="px-4 py-2">ReactNode</td>
                  <td className="px-4 py-2">—</td>
                </tr>
                <tr className="border-b border-gray-800">
                  <td className="px-4 py-2">
                    <code className="rounded px-1 py-0.5 font-mono">multiline</code>
                  </td>
                  <td className="px-4 py-2">boolean</td>
                  <td className="px-4 py-2">false</td>
                </tr>
                <tr>
                  <td className="px-4 py-2">
                    <code className="rounded px-1 py-0.5 font-mono">className</code>
                  </td>
                  <td className="px-4 py-2">string</td>
                  <td className="px-4 py-2">""</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <h2 className="mb-4 text-xl font-semibold">How to use Input component in ReactJS</h2>
        <pre className="relative mb-8 rounded bg-gray-100 p-4 text-sm text-gray-800">
          <Button
            variant="text"
            className="absolute top-0 right-0 h-8 cursor-pointer rounded bg-gray-800 px-2 text-white hover:bg-gray-700"
            onClick={() => handleCopy(codeSnippet)}
          >
            <Icon icon="material-symbols:text-snippet-outline-sharp" width="24" height="24" />
          </Button>
          {codeSnippet}
        </pre>

        <h2 className="mb-4 text-xl font-semibold">Example Available Input Variants</h2>
        <div className="overflow-x-auto">
          <div className="flex min-w-full flex-col space-y-6 p-6">
            <Input
              placeholder="Email"
              helperText="We’ll never share your email."
              leftIcon={<Icon icon="material-symbols:mail" width="24" height="24" />}
              rightIcon={<Icon icon="material-symbols:info-outline" width="24" height="24" />}
              className="min-w-md"
            />

            <Input
              type="password"
              placeholder="Password"
              helperText="Password must be at least 8 characters."
              leftIcon={<Icon icon="material-symbols:visibility-off" width="24" height="24" />}
              rightIcon={<Icon icon="material-symbols:info-outline" width="24" height="24" />}
              error
              className="min-w-md"
            />

            <Input
              multiline
              placeholder="Write your message..."
              helperText="You can write multiple lines"
              className="min-w-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
