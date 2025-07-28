import { useState } from "react";

const colorSections = [
  {
    title: "Master Component",
    colors: ["oklch(0.967 0.0159 253.9)"],
    classNames: ["master"],
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
      "white-05",
      "white-10",
      "white-20",
      "white-40",
      "white-60",
      "white-80",
      "white-100",
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
      "black-05",
      "black-10",
      "black-20",
      "black-40",
      "black-60",
      "black-80",
      "black-100",
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
      "gray-50",
      "gray-100",
      "gray-200",
      "gray-300",
      "gray-400",
      "gray-500",
      "gray-600",
      "gray-700",
      "gray-800",
      "gray-900",
      "gray-950",
    ],
  },
  {
    title: "Primary Colors - Teal",
    colors: [
      "oklch(0.8375 0.1189 181.68)",
      "oklch(0.3488 0.0822 246.06)",
      "oklch(0.9905 0.0129 185.11)",
    ],
    classNames: ["primary-teal", "primary-blue", "primary-light-blue"],
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
      "primary-blue-50",
      "primary-blue-100",
      "primary-blue-200",
      "primary-blue-300",
      "primary-blue-400",
      "primary-blue-500",
      "primary-blue-600",
      "primary-blue-700",
      "primary-blue-800",
      "primary-blue-900",
      "primary-blue-950",
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
      "primary-green-50",
      "primary-green-100",
      "primary-green-200",
      "primary-green-300",
      "primary-green-400",
      "primary-green-500",
      "primary-green-600",
      "primary-green-700",
      "primary-green-800",
      "primary-green-900",
      "primary-green-950",
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
      "success-50",
      "success-100",
      "success-200",
      "success-300",
      "success-400",
      "success-500",
      "success-600",
      "success-700",
      "success-800",
      "success-900",
      "success-950",
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
      "error-50",
      "error-100",
      "error-200",
      "error-300",
      "error-400",
      "error-500",
      "error-600",
      "error-700",
      "error-800",
      "error-900",
      "error-950",
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
      "warning-50",
      "warning-100",
      "warning-200",
      "warning-300",
      "warning-400",
      "warning-500",
      "warning-600",
      "warning-700",
      "warning-800",
      "warning-900",
      "warning-950",
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
          decoration: none;
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
  return <ColorPalette />;
}
