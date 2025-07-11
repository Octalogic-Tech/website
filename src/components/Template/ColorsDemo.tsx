import { useState } from "react";

const colorSections = [
  {
    title: "Master Component",
    colors: ["oklch(0.967 0.0159 253.9)"],
    classNames: ["text-master"],
  },
  {
    title: "White Colors",
    colors: [
      "rgba(255, 255, 255, 0.05)",
      "rgba(255, 255, 255, 0.1)",
      "rgba(255, 255, 255, 0.2)",
      "rgba(255, 255, 255, 0.4)",
      "rgba(255, 255, 255, 0.6)",
      "rgba(255, 255, 255, 0.8)",
      "rgba(255, 255, 255, 1)",
    ],
    classNames: [
      "text-white-05",
      "text-white-10",
      "text-white-20",
      "text-white-40",
      "text-white-60",
      "text-white-80",
      "text-white-100",
    ],
  },
  {
    title: "Black Colors",
    colors: [
      "rgba(0, 0, 0, 0.05)",
      "rgba(0, 0, 0, 0.1)",
      "rgba(0, 0, 0, 0.2)",
      "rgba(0, 0, 0, 0.4)",
      "rgba(0, 0, 0, 0.6)",
      "rgba(0, 0, 0, 0.8)",
      "rgba(0, 0, 0, 1)",
    ],
    classNames: [
      "text-black-05",
      "text-black-10",
      "text-black-20",
      "text-black-40",
      "text-black-60",
      "text-black-80",
      "text-black-100",
    ],
  },
  {
    title: "Grey Scale Colors - Grey",
    colors: [
      "rgba(252, 252, 252, 1)",
      "rgba(250, 250, 250, 1)",
      "rgba(245, 245, 245, 1)",
      "rgba(229, 229, 229, 1)",
      "rgba(214, 214, 214, 1)",
      "rgba(163, 163, 163, 1)",
      "rgba(115, 115, 115, 1)",
      "rgba(82, 82, 82, 1)",
      "rgba(66, 66, 66, 1)",
      "rgba(41, 41, 41, 1)",
      "rgba(20, 20, 20, 1)",
    ],
    classNames: [
      "text-gray-50",
      "text-gray-100",
      "text-gray-200",
      "text-gray-300",
      "text-gray-400",
      "text-gray-500",
      "text-gray-600",
      "text-gray-700",
      "text-gray-800",
      "text-gray-900",
      "text-gray-950",
    ],
  },
  {
    title: "Primary Colors - Teal",
    colors: [
      "oklch(0.8375 0.1189 181.68)",
      "oklch(0.3488 0.0822 246.06)",
      "oklch(0.9905 0.0129 185.11)",
    ],
    classNames: ["text-primary-teal", "text-primary-blue", "text-primary-light-blue"],
  },
  {
    title: "Primary Colors palette - Blue",
    colors: [
      "rgba(239, 246, 255, 1)",
      "rgba(219, 234, 254, 1)",
      "rgba(191, 219, 254, 1)",
      "rgba(147, 197, 253, 1)",
      "rgba(96, 165, 250, 1)",
      "rgba(59, 130, 246, 1)",
      "rgba(37, 99, 235, 1)",
      "rgba(29, 78, 216, 1)",
      "rgba(30, 64, 175, 1)",
      "rgba(30, 58, 138, 1)",
      "rgba(23, 37, 84, 1)",
    ],
    classNames: [
      "text-primary-blue-50",
      "text-primary-blue-100",
      "text-primary-blue-200",
      "text-primary-blue-300",
      "text-primary-blue-400",
      "text-primary-blue-500",
      "text-primary-blue-600",
      "text-primary-blue-700",
      "text-primary-blue-800",
      "text-primary-blue-900",
      "text-primary-blue-950",
    ],
  },
  {
    title: "Primary Colors palette - Green",
    colors: [
      "rgba(237, 252, 246, 1)",
      "rgba(211, 248, 232, 1)",
      "rgba(171, 239, 214, 1)",
      "rgba(103, 222, 185, 1)",
      "rgba(60, 203, 163, 1)",
      "rgba(25, 176, 139, 1)",
      "rgba(12, 143, 113, 1)",
      "rgba(10, 114, 93, 1)",
      "rgba(11, 90, 75, 1)",
      "rgba(10, 74, 62, 1)",
      "rgba(4, 42, 36, 1)",
    ],
    classNames: [
      "text-primary-green-50",
      "text-primary-green-100",
      "text-primary-green-200",
      "text-primary-green-300",
      "text-primary-green-400",
      "text-primary-green-500",
      "text-primary-green-600",
      "text-primary-green-700",
      "text-primary-green-800",
      "text-primary-green-900",
      "text-primary-green-950",
    ],
  },
  {
    title: "Success Colors - Green",
    colors: [
      "rgba(240, 253, 244, 1)",
      "rgba(220, 252, 231, 1)",
      "rgba(187, 247, 208, 1)",
      "rgba(134, 239, 172, 1)",
      "rgba(74, 222, 128, 1)",
      "rgba(34, 197, 94, 1)",
      "rgba(22, 163, 74, 1)",
      "rgba(21, 128, 61, 1)",
      "rgba(22, 101, 52, 1)",
      "rgba(20, 83, 45, 1)",
      "rgba(5, 46, 22, 1)",
    ],
    classNames: [
      "text-success-50",
      "text-success-100",
      "text-success-200",
      "text-success-300",
      "text-success-400",
      "text-success-500",
      "text-success-600",
      "text-success-700",
      "text-success-800",
      "text-success-900",
      "text-success-950",
    ],
  },
  {
    title: "Error Colors - Red",
    colors: [
      "rgba(254, 242, 242, 1)",
      "rgba(254, 226, 226, 1)",
      "rgba(254, 202, 202, 1)",
      "rgba(252, 165, 165, 1)",
      "rgba(248, 113, 113, 1)",
      "rgba(239, 68, 68, 1)",
      "rgba(250, 48, 47, 1)",
      "rgba(228, 24, 30, 1)",
      "rgba(153, 27, 27, 1)",
      "rgba(127, 29, 29, 1)",
      "rgba(69, 10, 10, 1)",
    ],
    classNames: [
      "text-error-50",
      "text-error-100",
      "text-error-200",
      "text-error-300",
      "text-error-400",
      "text-error-500",
      "text-error-600",
      "text-error-700",
      "text-error-800",
      "text-error-900",
      "text-error-950",
    ],
  },
  {
    title: "Warning Colors - Yellow",
    colors: [
      "rgba(255, 251, 235, 1)",
      "rgba(254, 243, 199, 1)",
      "rgba(253, 230, 138, 1)",
      "rgba(252, 211, 77, 1)",
      "rgba(251, 191, 36, 1)",
      "rgba(245, 158, 11, 1)",
      "rgba(217, 119, 6, 1)",
      "rgba(180, 83, 9, 1)",
      "rgba(146, 64, 14, 1)",
      "rgba(111, 47, 12, 1)",
      "rgba(69, 26, 3, 1)",
    ],
    classNames: [
      "text-warning-50",
      "text-warning-100",
      "text-warning-200",
      "text-warning-300",
      "text-warning-400",
      "text-warning-500",
      "text-warning-600",
      "text-warning-700",
      "text-warning-800",
      "text-warning-900",
      "text-warning-950",
    ],
  },
];

export default function ColorPalette() {
  const [copiedColor, setCopiedColor] = useState("");

  const handleCopy = async (color: string) => {
    try {
      await navigator.clipboard.writeText(color);
      setCopiedColor(color);
      setTimeout(() => setCopiedColor(""), 1500);
    } catch (error) {
      alert("Clipboard copy failed.");
    }
  };

  return (
    <>
      <style>{`
        .color-palette {
          margin-top: 16px;
          max-width: 960px;
          border-top: 1px solid #222;
        }
        .color-section {
          border-bottom: 1px solid #222;
          padding: 16px 0;
        }
        .color-blocks {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 12px;
        }
        .color-block {
          width: 40px;
          height: 40px;
          border-radius: 6px;
          box-shadow: 0 0 5px rgba(0,0,0,0.2);
          border: 1px solid transparent;
          cursor: pointer;
          position: relative;
          transition: border-color 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 11px;
          color: transparent;
          user-select: none;
        }
        .color-block:hover {
          border-color: #2dd4bf;
          color: gray;
          font-weight: 700;
        }
        .color-block.copied::after {
          content: 'Copied';
          position: absolute;
          bottom: -18px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 10px;
          color: #2dd4bf;
          font-weight: 600;
          user-select: none;
        }
        .header {
          background: #40c7b6;
          padding: 18px 24px;
          border-radius: 12px 12px 0 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .header-left {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #0f0f0f;
          font-weight: 700;
          font-size: 22px;
          letter-spacing: -0.01em;
        }
        .tag {
          background: #212121;
          color: #fff;
          padding: 6px 10px;
          border-radius: 6px;
          font-weight: 700;
          font-size: 11px;
          user-select: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .info-text {
          color: #777;
          font-size: 13px;
          max-width: 650px;
          font-weight: 400;
          margin-bottom: 30px;
          user-select: text;
          line-height: 1.4;
        }
        .info-text strong {
          font-weight: 700;
          margin-bottom: 8px;
          display: inline-block;
          font-size: 14px;
        }
        .info-text a {
          color: #2dd4bf;
          text-decoration: none;
        }
        @media (max-width: 600px) {
          .color-block {
            width: 32px;
            height: 32px;
          }
          .header-left {
            font-size: 18px;
          }
        }
      `}</style>

      {/*   <header className="header" aria-label="Page header with title and description">
        <div className="header-left">
          <span className="tag" aria-label="Octalogic Tech Short Tagline">
            OT
          </span>
          Design System &rarr; Color Pallet
        </div>
        <div aria-hidden="true" style={{ fontWeight: 600, fontSize: "13px", color: "#0f0f0f" }}>
          Octalogic Tech design system
        </div>
      </header> */}

      <section aria-label="Color Palette Sections" className="color-palette font-montserrat">
        {colorSections.map(({ title, colors, classNames }) => (
          <div
            key={title}
            className="color-section"
            aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
          >
            <h2 id={title.replace(/\s+/g, "-").toLowerCase()} aria-expanded="true" tabIndex={0}>
              {title}
            </h2>
            <div className="color-blocks" role="list">
              {colors.map((color, idx) => (
                <button
                  key={idx}
                  className={`color-block${copiedColor === color ? "copied" : ""} cursor-pointer`}
                  role="listitem"
                  style={{ backgroundColor: color }}
                  aria-label={`Color block ${color}. Click to copy the color code.`}
                  onClick={() => handleCopy(classNames[idx])}
                  type="button"
                >
                  {classNames[idx]}
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
export function ColorsDemo() {
  return (
      <ColorPalette />
  );
}
