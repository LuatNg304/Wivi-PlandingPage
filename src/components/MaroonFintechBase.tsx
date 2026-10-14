// @ts-nocheck
import * as c from "react";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
const e = { jsx, jsxs, Fragment };
const ae = {
    ocean: {
      frame: "#091726",
      paper: "#ecf4fa",
      ink: "#0c1b33",
      muted: "#5a7594",
      brand: "#0284c7",
      night: "#051324",
      card: "#0b2038",
      cream: "#e0f2fe",
      device: "#7dd3fc",
      glow: "#38bdf8",
      satin: ["#030e1a", "#0c2b52", "#bae6fd"],
    },
    maroon: {
      frame: "#7a2e33",
      paper: "#e7e2d8",
      ink: "#1c1412",
      muted: "#8c8279",
      brand: "#7a2a2e",
      night: "#2a1411",
      card: "#3b1816",
      cream: "#efe9df",
      device: "#97a18e",
      glow: "#ffc46b",
      satin: ["#24100d", "#8a5a3e", "#f2dfc1"],
    },
    forest: {
      frame: "#2f4436",
      paper: "#e5e4da",
      ink: "#141a16",
      muted: "#7f857b",
      brand: "#2f5640",
      night: "#121d17",
      card: "#1c2c22",
      cream: "#ecebe1",
      device: "#c9b79a",
      glow: "#ffd98a",
      satin: ["#0d1712", "#4f6b4f", "#e6e4c8"],
    },
    midnight: {
      frame: "#26324f",
      paper: "#e4e3e0",
      ink: "#12141c",
      muted: "#7c7f89",
      brand: "#2b3d6b",
      night: "#10141f",
      card: "#1b2236",
      cream: "#eceae6",
      device: "#a7a9b2",
      glow: "#8fd0ff",
      satin: ["#0b1020", "#46557f", "#dde3f2"],
    },
  },
  Ye = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#contact" },
    { label: "Contact", href: "#contact" },
  ],
  re = ["#efe9df", "#b8a99a", "#c4673f", "#7b6a5f", "#d9b48a"],
  Ge = [
    {
      title: "Total Expenses",
      periods: [
        {
          label: "Total",
          range: "Feb 01, 2025 - Feb 28, 2025",
          amount: 678.23,
          change: 18.5,
          categories: [
            { label: "Dining & drinks", value: 320.18 },
            { label: "Grocery & essentials", value: 44.2 },
            { label: "Subscriptions", value: 283.85 },
            { label: "Uncategorized", value: 30 },
          ],
        },
        {
          label: "Week",
          range: "Feb 22, 2025 - Feb 28, 2025",
          amount: 162.4,
          change: -6.2,
          categories: [
            { label: "Dining & drinks", value: 88.4 },
            { label: "Grocery & essentials", value: 21 },
            { label: "Subscriptions", value: 41 },
            { label: "Uncategorized", value: 12 },
          ],
        },
        {
          label: "Today",
          range: "Feb 28, 2025",
          amount: 24.9,
          change: 3.1,
          categories: [
            { label: "Dining & drinks", value: 18.9 },
            { label: "Grocery & essentials", value: 6 },
          ],
        },
      ],
    },
    {
      title: "Total Income",
      periods: [
        {
          label: "Total",
          range: "Feb 01, 2025 - Feb 28, 2025",
          amount: 15e3,
          change: 6.4,
          categories: [
            { label: "Salary & wages", value: 9800 },
            { label: "Investments", value: 2700 },
            { label: "Freelance", value: 1900 },
            { label: "Other", value: 600 },
          ],
        },
        {
          label: "Week",
          range: "Feb 22, 2025 - Feb 28, 2025",
          amount: 3420,
          change: 12.8,
          categories: [
            { label: "Salary & wages", value: 2450 },
            { label: "Investments", value: 610 },
            { label: "Freelance", value: 360 },
          ],
        },
        {
          label: "Today",
          range: "Feb 28, 2025",
          amount: 410,
          change: -2.4,
          categories: [
            { label: "Investments", value: 260 },
            { label: "Freelance", value: 150 },
          ],
        },
      ],
    },
  ],
  Ue = [
    { value: 500, suffix: "+", label: "Companies Optimizing" },
    { value: 80, suffix: "%", label: "Faster Financial Reporting" },
    { value: 20, prefix: "", suffix: "B+", label: "Financial Data Processed" },
  ],
  Ve = [
    { code: "USD", symbol: "₫", balance: 148250, perUsd: 1, active: !0 },
    { code: "EUR", symbol: "€ ", balance: 63275.45, perUsd: 0.92, active: !0 },
    { code: "KRW", symbol: "₩ ", balance: 38253120, perUsd: 1380, active: !0 },
    { code: "IDR", symbol: "Rp ", balance: 30964e4, perUsd: 16250, active: !0 },
    { code: "GBP", symbol: "£", balance: 12840.5, perUsd: 0.79, active: !1 },
    { code: "JPY", symbol: "¥", balance: 1265e3, perUsd: 151, active: !0 },
  ],
  $e = {
    columns: [
      {
        title: "Product",
        links: [
          { label: "Wallets" },
          { label: "Reporting" },
          { label: "Forecasting" },
          { label: "Integrations" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About", href: "#about" },
          { label: "Careers" },
          { label: "Press" },
          { label: "Contact", href: "#contact" },
        ],
      },
      {
        title: "Resources",
        links: [
          { label: "Docs" },
          { label: "Security" },
          { label: "Status" },
          { label: "Changelog" },
        ],
      },
    ],
    note: "Bank-grade encryption. SOC 2 Type II.",
    socials: [{ label: "X" }, { label: "LinkedIn" }, { label: "GitHub" }],
  },
  _ = [
    "T1",
    "T2",
    "T3",
    "T4",
    "T5",
    "T6",
    "T7",
    "T8",
    "T9",
    "T10",
    "T11",
    "T12",
  ],
  Qe = ["Theo Năm", "6 Tháng", "Theo Quý"],
  _e = [12, 6, 3];
function Xe(a) {
  const r = [];
  let t = !1;
  for (const s of a.split("*")) (s && r.push({ text: s, muted: t }), (t = !t));
  return r;
}
function K(a, r, t) {
  return a < r ? r : a > t ? t : a;
}
function E(a, r, t) {
  const isCurrency =
    r &&
    (r.includes("$") ||
      r.includes("₫") ||
      r.trim() === "$" ||
      r.trim() === "₫");
  const abs = Math.abs(a);
  const precision = isCurrency ? 0 : t || 0;
  const fixed = abs.toFixed(precision);
  const parts = fixed.split(".");
  const intPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  const decPart = parts[1] && !isCurrency ? "," + parts[1] : "";
  const numStr = (a < 0 ? "-" : "") + intPart + decPart;
  if (isCurrency) {
    return numStr + " ₫";
  }
  return numStr;
}
function be(a) {
  return a === "KRW" || a === "JPY" || a === "IDR" ? 0 : 2;
}
function Ke(a, r) {
  return E(a, "", r);
}
function Je(a) {
  const r = 1 - K(a, 0, 1);
  return 1 - r * r * r;
}
function Ze(a) {
  let r = a >>> 0;
  return () => {
    r = (r + 1831565813) >>> 0;
    let t = r;
    return (
      (t = Math.imul(t ^ (t >>> 15), t | 1)),
      (t ^= t + Math.imul(t ^ (t >>> 7), t | 61)),
      ((t ^ (t >>> 14)) >>> 0) / 4294967296
    );
  };
}
function qe(a, r) {
  const t = a.reduce((n, d) => n + Math.max(0, d), 0);
  if (!t) return a.map(() => ({ start: 0, len: 0 }));
  const s = a.filter((n) => n > 0).length > 1 ? r : 0;
  let i = 0;
  return a.map((n) => {
    const d = (Math.max(0, n) / t) * 100,
      o = { start: i + s / 2, len: d > 0 ? Math.max(0.6, d - s) : 0 };
    return ((i += d), o);
  });
}
function et(a, r) {
  return (
    a.reduce((t, s) => t + (s.perUsd > 0 ? s.balance / s.perUsd : 0), 0) * r
  );
}
function tt(a) {
  const r = Ze(a);
  return _.map((t, s) => {
    const i = 1 + 0.32 * Math.sin((s / 12) * Math.PI * 2 + 1.2);
    return [0, 1, 2, 3, 4].map(() => {
      const n = r() > 0.88 ? 1.8 : 1;
      return Math.round((220000 + r() * 280000) * i * n);
    });
  });
}
function at(a, r) {
  return !(r > 0) || !(a > 0) ? 0 : K(Math.floor((a / r) * 5), 0, 4);
}
function ve(a) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(a.trim());
}
function rt(a, r, t) {
  return t <= 0
    ? -1
    : r === "ArrowDown"
      ? (a + 1 + t) % t
      : r === "ArrowUp"
        ? (a - 1 + t) % t
        : r === "Home"
          ? 0
          : r === "End"
            ? t - 1
            : a;
}
function lt(a) {
  return a
    .replace(/\*/g, "")
    .replace(/\{mark\}/g, " {mark} ")
    .split(/\s+/)
    .filter(Boolean);
}
function it(a) {
  return typeof a == "string"
    ? ae[a] || ae.maroon
    : Object.assign({}, ae.maroon, a || {});
}
function st() {
  const [a, r] = c.useState(!1);
  return (
    c.useEffect(() => {
      var i;
      if (typeof window > "u" || !window.matchMedia) return;
      const t = window.matchMedia("(prefers-reduced-motion: reduce)"),
        s = () => r(t.matches);
      return (
        s(),
        (i = t.addEventListener) == null || i.call(t, "change", s),
        () => {
          var n;
          return (n = t.removeEventListener) == null
            ? void 0
            : n.call(t, "change", s);
        }
      );
    }, []),
    a
  );
}
function we(a, r, t) {
  c.useEffect(() => {
    if (!a) return;
    const s = (n) => {
        t.current && !t.current.contains(n.target) && r();
      },
      i = (n) => {
        n.key === "Escape" && r();
      };
    return (
      document.addEventListener("pointerdown", s),
      document.addEventListener("keydown", i),
      () => {
        (document.removeEventListener("pointerdown", s),
          document.removeEventListener("keydown", i));
      }
    );
  }, [a, r, t]);
}
const ie = "M12 12C9.2 9.6 9.3 4 12 2.6C14.7 4 14.8 9.6 12 12Z";
function R({ size: a = 16, color: r = "currentColor", className: t = "" }) {
  return e.jsx("svg", {
    className: "mfl-svg " + t,
    viewBox: "0 0 24 24",
    width: a,
    height: a,
    "aria-hidden": "true",
    children: e.jsx("g", {
      fill: r,
      stroke: r,
      strokeWidth: "1.6",
      strokeLinejoin: "round",
      children: [0, 60, 120, 180, 240, 300].map((s) =>
        e.jsx("path", { d: ie, transform: "rotate(" + s + " 12 12)" }, s),
      ),
    }),
  });
}
function nt({ open: a }) {
  return e.jsx("svg", {
    className: "mfl-svg mfl-chev" + (a ? " is-open" : ""),
    viewBox: "0 0 10 10",
    width: 9,
    height: 9,
    "aria-hidden": "true",
    children: e.jsx("path", {
      d: "M2 3.6L5 6.6L8 3.6",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "1.4",
      strokeLinecap: "round",
      strokeLinejoin: "round",
    }),
  });
}
function ot({ up: a }) {
  return e.jsx("svg", {
    className: "mfl-svg",
    viewBox: "0 0 10 10",
    width: 8,
    height: 8,
    "aria-hidden": "true",
    children: e.jsx("path", {
      d: a ? "M5 1.5L8.6 7.5H1.4Z" : "M5 8.5L8.6 2.5H1.4Z",
      fill: "currentColor",
    }),
  });
}
function ye({ code: a, uid: r }) {
  const t = r + "-flag-" + a,
    s = (() => {
      switch (a) {
        case "USD":
          return e.jsxs(e.Fragment, {
            children: [
              e.jsx("rect", { width: "20", height: "20", fill: "#f4f1ec" }),
              [0, 1, 2, 3, 4, 5, 6].map((i) =>
                e.jsx(
                  "rect",
                  { y: i * 2.9, width: "20", height: "1.45", fill: "#b4302f" },
                  i,
                ),
              ),
              e.jsx("rect", { width: "10", height: "10", fill: "#2b3a67" }),
            ],
          });
        case "EUR":
          return e.jsxs(e.Fragment, {
            children: [
              e.jsx("rect", { width: "20", height: "20", fill: "#2b4a9b" }),
              Array.from({ length: 12 }, (i, n) =>
                e.jsx(
                  "circle",
                  {
                    cx: 10 + 5.4 * Math.cos((n / 12) * Math.PI * 2),
                    cy: 10 + 5.4 * Math.sin((n / 12) * Math.PI * 2),
                    r: "0.9",
                    fill: "#f5cf4a",
                  },
                  n,
                ),
              ),
            ],
          });
        case "KRW":
          return e.jsxs(e.Fragment, {
            children: [
              e.jsx("rect", { width: "20", height: "20", fill: "#f4f1ec" }),
              e.jsx("path", {
                d: "M5.5 10a4.5 4.5 0 0 1 9 0z",
                fill: "#c23b3b",
              }),
              e.jsx("path", {
                d: "M5.5 10a4.5 4.5 0 0 0 9 0z",
                fill: "#2f4f9b",
              }),
              e.jsx("circle", {
                cx: "7.75",
                cy: "10",
                r: "2.25",
                fill: "#c23b3b",
              }),
              e.jsx("circle", {
                cx: "12.25",
                cy: "10",
                r: "2.25",
                fill: "#2f4f9b",
              }),
            ],
          });
        case "IDR":
          return e.jsxs(e.Fragment, {
            children: [
              e.jsx("rect", { width: "20", height: "10", fill: "#cf3b3b" }),
              e.jsx("rect", {
                y: "10",
                width: "20",
                height: "10",
                fill: "#f4f1ec",
              }),
            ],
          });
        case "GBP":
          return e.jsxs(e.Fragment, {
            children: [
              e.jsx("rect", { width: "20", height: "20", fill: "#2b3a67" }),
              e.jsx("path", {
                d: "M0 0L20 20M20 0L0 20",
                stroke: "#f4f1ec",
                strokeWidth: "3",
              }),
              e.jsx("path", {
                d: "M10 0V20M0 10H20",
                stroke: "#f4f1ec",
                strokeWidth: "5",
              }),
              e.jsx("path", {
                d: "M10 0V20M0 10H20",
                stroke: "#c23b3b",
                strokeWidth: "2.6",
              }),
            ],
          });
        case "JPY":
          return e.jsxs(e.Fragment, {
            children: [
              e.jsx("rect", { width: "20", height: "20", fill: "#f4f1ec" }),
              e.jsx("circle", {
                cx: "10",
                cy: "10",
                r: "4.4",
                fill: "#c23b3b",
              }),
            ],
          });
        default:
          return e.jsxs(e.Fragment, {
            children: [
              e.jsx("rect", { width: "20", height: "20", fill: "#9a8f84" }),
              e.jsx("text", {
                x: "10",
                y: "13.2",
                textAnchor: "middle",
                fontSize: "8",
                fontWeight: "600",
                fill: "#fff",
                fontFamily: "ui-sans-serif,system-ui,sans-serif",
                children: a.slice(0, 2),
              }),
            ],
          });
      }
    })();
  return e.jsxs("svg", {
    className: "mfl-svg mfl-flag",
    viewBox: "0 0 20 20",
    width: 18,
    height: 18,
    "aria-hidden": "true",
    children: [
      e.jsx("defs", {
        children: e.jsx("clipPath", {
          id: t,
          children: e.jsx("circle", { cx: "10", cy: "10", r: "10" }),
        }),
      }),
      e.jsx("g", { clipPath: "url(#" + t + ")", children: s }),
      e.jsx("circle", {
        cx: "10",
        cy: "10",
        r: "9.6",
        fill: "none",
        stroke: "rgba(0,0,0,.12)",
        strokeWidth: ".8",
      }),
    ],
  });
}
function se({
  label: a,
  options: r,
  value: t,
  onChange: s,
  tone: i = "dark",
  render: n,
}) {
  const [d, o] = c.useState(!1),
    [x, y] = c.useState(t),
    u = c.useRef(null),
    N = c.useRef(null),
    j = c.useRef(null),
    w = c.useId().replace(/:/g, ""),
    b = c.useCallback(() => {
      var m;
      (o(!1), (m = N.current) == null || m.focus());
    }, []);
  (we(d, b, u),
    c.useEffect(() => {
      var m;
      d && (y(t), (m = j.current) == null || m.focus());
    }, [d, t]));
  const p = (m) => {
    (s(m), b());
  };
  return e.jsxs("div", {
    className: "mfl-menu mfl-menu--" + i,
    ref: u,
    children: [
      e.jsxs("button", {
        ref: N,
        type: "button",
        className: "mfl-menu-btn",
        "aria-haspopup": "listbox",
        "aria-expanded": d,
        "aria-label": a + ": " + r[t],
        onClick: () => o((m) => !m),
        onKeyDown: (m) => {
          (m.key === "ArrowDown" || m.key === "ArrowUp") &&
            (m.preventDefault(), o(!0));
        },
        children: [n ? n(r[t], t) : r[t], e.jsx(nt, { open: d })],
      }),
      d &&
        e.jsx("ul", {
          ref: j,
          className: "mfl-menu-list",
          role: "listbox",
          tabIndex: -1,
          "aria-label": a,
          "aria-activedescendant": w + "-" + x,
          onKeyDown: (m) => {
            if (m.key === "Enter" || m.key === " ") (m.preventDefault(), p(x));
            else if (m.key === "Tab") o(!1);
            else {
              const g = rt(x, m.key, r.length);
              g !== x && (m.preventDefault(), y(g));
            }
          },
          children: r.map((m, g) =>
            e.jsxs(
              "li",
              {
                id: w + "-" + g,
                role: "option",
                "aria-selected": g === t,
                className: "mfl-menu-opt" + (g === x ? " is-active" : ""),
                onPointerEnter: () => y(g),
                onClick: () => p(g),
                children: [
                  n ? n(m, g) : m,
                  g === t &&
                    e.jsx("svg", {
                      className: "mfl-svg",
                      viewBox: "0 0 12 12",
                      width: 10,
                      height: 10,
                      "aria-hidden": "true",
                      children: e.jsx("path", {
                        d: "M2.5 6.2L5 8.6L9.5 3.6",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "1.6",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                      }),
                    }),
                ],
              },
              m + g,
            ),
          ),
        }),
    ],
  });
}
const je = [
    "M0 236H96M156 236H232Q252 236 252 256V336Q252 356 272 356H430Q450 356 450 376V560Q450 580 470 580H600",
    "M0 470H118M178 470H300Q320 470 320 490V640Q320 660 340 660H612",
    "M84 0V122Q84 142 104 142H170",
    "M0 640H96M156 640H200Q220 640 220 660V760Q220 780 240 780H560",
    "M0 356H24M84 356H160",
    "M330 0V140Q330 160 350 160H380",
  ],
  X = [
    { x: 126, y: 236, glyph: "₫" },
    { x: 148, y: 470, glyph: "%" },
    { x: 54, y: 356, glyph: "≡" },
    { x: 126, y: 640, glyph: "↗" },
    { x: 200, y: 142, glyph: "··" },
    { x: 410, y: 160, glyph: "◦" },
  ];
function ct({ uid: a, reduced: r, hot: t }) {
  const s = a + "-pulse",
    i = (n) =>
      e.jsxs("g", {
        transform: n ? "translate(1440 0) scale(-1 1)" : void 0,
        children: [
          je.map((d, o) =>
            e.jsx("path", { d, className: "mfl-trace" }, "t" + o),
          ),
          !r &&
            je.map((d, o) =>
              e.jsx(
                "path",
                {
                  d,
                  pathLength: 1e3,
                  className: "mfl-pulse",
                  stroke: "url(#" + s + ")",
                  style: {
                    animationDelay: -((o * 1.7 + n * 2.3) % 6) + "s",
                    animationDuration: 5 + ((o + n) % 3) + "s",
                  },
                },
                "p" + o,
              ),
            ),
          X.map((d, o) => {
            const x = t === o + n * X.length;
            return e.jsxs(
              "g",
              {
                className: "mfl-chip" + (x ? " is-hot" : ""),
                transform: "translate(" + d.x + " " + d.y + ")",
                children: [
                  e.jsx("rect", {
                    x: "-28",
                    y: "-16",
                    width: "56",
                    height: "32",
                    rx: "8",
                  }),
                  e.jsx("text", {
                    x: "0",
                    y: "4.5",
                    textAnchor: "middle",
                    transform: n ? "scale(-1 1)" : void 0,
                    children: d.glyph,
                  }),
                ],
              },
              "c" + o,
            );
          }),
        ],
      });
  return e.jsxs("svg", {
    className: "mfl-svg mfl-circuit",
    viewBox: "0 0 1440 900",
    preserveAspectRatio: "xMidYMid slice",
    "aria-hidden": "true",
    children: [
      e.jsx("defs", {
        children: e.jsxs("linearGradient", {
          id: s,
          x1: "0",
          y1: "0",
          x2: "1",
          y2: "0",
          children: [
            e.jsx("stop", {
              offset: "0",
              stopColor: "var(--mfl-brand)",
              stopOpacity: "0",
            }),
            e.jsx("stop", {
              offset: ".7",
              stopColor: "var(--mfl-brand)",
              stopOpacity: ".55",
            }),
            e.jsx("stop", {
              offset: "1",
              stopColor: "var(--mfl-glow)",
              stopOpacity: ".9",
            }),
          ],
        }),
      }),
      i(0),
      i(1),
    ],
  });
}
function ft() {
  return [
    ...X.map((a) => ({ x: a.x, y: a.y })),
    ...X.map((a) => ({ x: 1440 - a.x, y: a.y })),
  ];
}
function mt({ uid: a, pulse: r }) {
  const t = a + "-dev";
  return e.jsxs("svg", {
    className: "mfl-svg mfl-device-svg",
    viewBox: "0 0 320 320",
    width: 320,
    height: 320,
    "aria-hidden": "true",
    children: [
      e.jsxs("defs", {
        children: [
          e.jsxs("linearGradient", {
            id: t + "-face",
            x1: "0",
            y1: "0",
            x2: "1",
            y2: "1",
            children: [
              e.jsx("stop", {
                offset: "0",
                stopColor: "#fff",
                stopOpacity: ".28",
              }),
              e.jsx("stop", {
                offset: ".45",
                stopColor: "#fff",
                stopOpacity: ".04",
              }),
              e.jsx("stop", {
                offset: "1",
                stopColor: "#000",
                stopOpacity: ".22",
              }),
            ],
          }),
          e.jsxs("radialGradient", {
            id: t + "-sheen",
            cx: ".28",
            cy: ".22",
            r: ".7",
            children: [
              e.jsx("stop", {
                offset: "0",
                stopColor: "#fff",
                stopOpacity: ".55",
              }),
              e.jsx("stop", {
                offset: ".5",
                stopColor: "#fff",
                stopOpacity: ".08",
              }),
              e.jsx("stop", {
                offset: "1",
                stopColor: "#fff",
                stopOpacity: "0",
              }),
            ],
          }),
          e.jsxs("linearGradient", {
            id: t + "-side",
            x1: "0",
            y1: "0",
            x2: "1",
            y2: "1",
            children: [
              e.jsx("stop", {
                offset: "0",
                stopColor: "#000",
                stopOpacity: ".05",
              }),
              e.jsx("stop", {
                offset: "1",
                stopColor: "#000",
                stopOpacity: ".45",
              }),
            ],
          }),
          e.jsxs("linearGradient", {
            id: t + "-led",
            x1: "0",
            y1: "0",
            x2: "1",
            y2: "1",
            children: [
              e.jsx("stop", {
                offset: "0",
                stopColor: "var(--mfl-glow)",
                stopOpacity: "0",
              }),
              e.jsx("stop", {
                offset: ".55",
                stopColor: "var(--mfl-glow)",
                stopOpacity: ".95",
              }),
              e.jsx("stop", {
                offset: ".8",
                stopColor: "#fff6e0",
                stopOpacity: "1",
              }),
              e.jsx("stop", {
                offset: "1",
                stopColor: "var(--mfl-glow)",
                stopOpacity: ".2",
              }),
            ],
          }),
          e.jsx("filter", {
            id: t + "-blur",
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%",
            children: e.jsx("feGaussianBlur", { stdDeviation: "9" }),
          }),
          e.jsx("filter", {
            id: t + "-soft",
            x: "-50%",
            y: "-50%",
            width: "200%",
            height: "200%",
            children: e.jsx("feGaussianBlur", { stdDeviation: "2.4" }),
          }),
        ],
      }),
      e.jsxs("g", {
        transform: "rotate(-14 160 160)",
        children: [
          e.jsx("rect", {
            x: "46",
            y: "58",
            width: "228",
            height: "228",
            rx: "76",
            fill: "var(--mfl-device)",
          }),
          e.jsx("rect", {
            x: "46",
            y: "58",
            width: "228",
            height: "228",
            rx: "76",
            fill: "url(#" + t + "-side)",
          }),
          e.jsxs(
            "g",
            {
              className: "mfl-led",
              children: [
                e.jsx("path", {
                  d: "M270 150Q276 262 168 280",
                  fill: "none",
                  stroke: "url(#" + t + "-led)",
                  strokeWidth: "14",
                  strokeLinecap: "round",
                  filter: "url(#" + t + "-blur)",
                }),
                e.jsx("path", {
                  d: "M268 160Q270 258 172 276",
                  fill: "none",
                  stroke: "url(#" + t + "-led)",
                  strokeWidth: "3.4",
                  strokeLinecap: "round",
                }),
              ],
            },
            r,
          ),
          e.jsx("rect", {
            x: "46",
            y: "44",
            width: "228",
            height: "228",
            rx: "76",
            fill: "var(--mfl-device)",
          }),
          e.jsx("rect", {
            x: "46",
            y: "44",
            width: "228",
            height: "228",
            rx: "76",
            fill: "url(#" + t + "-face)",
          }),
          e.jsx("rect", {
            x: "46",
            y: "44",
            width: "228",
            height: "228",
            rx: "76",
            fill: "url(#" + t + "-sheen)",
          }),
          e.jsx("rect", {
            x: "47",
            y: "45",
            width: "226",
            height: "226",
            rx: "75",
            fill: "none",
            stroke: "#fff",
            strokeOpacity: ".35",
            strokeWidth: "1.4",
          }),
          e.jsx("g", {
            transform: "translate(160 158) scale(2.1) translate(-12 -12)",
            filter: "url(#" + t + "-soft)",
            opacity: ".55",
            children: e.jsx("g", {
              fill: "#fff",
              transform: "translate(.5 .7)",
              children: [0, 60, 120, 180, 240, 300].map((s) =>
                e.jsx(
                  "path",
                  { d: ie, transform: "rotate(" + s + " 12 12)" },
                  s,
                ),
              ),
            }),
          }),
          e.jsx("g", {
            transform: "translate(160 158) scale(2.1) translate(-12 -12)",
            fill: "#000",
            fillOpacity: ".42",
            stroke: "#000",
            strokeOpacity: ".42",
            strokeWidth: "1.4",
            strokeLinejoin: "round",
            children: [0, 60, 120, 180, 240, 300].map((s) =>
              e.jsx("path", { d: ie, transform: "rotate(" + s + " 12 12)" }, s),
            ),
          }),
        ],
      }),
    ],
  });
}
function le({ uid: a, variant: r = 0 }) {
  const t = a + "-satin" + r,
    s = r % 2 === 1,
    i = (d, o, x) =>
      e.jsx("stop", {
        offset: d,
        style: { stopColor: "var(--mfl-sat-" + o + ")", stopOpacity: x },
      }),
    n = (d) => ({ stroke: "var(--mfl-sat-" + d + ")" });
  return e.jsxs("svg", {
    className: "mfl-svg mfl-satin",
    viewBox: "0 0 1200 700",
    preserveAspectRatio: "xMidYMid slice",
    "aria-hidden": "true",
    children: [
      e.jsxs("defs", {
        children: [
          e.jsxs("radialGradient", {
            id: t + "-sun",
            cx: "0.9",
            cy: "0.08",
            r: "0.55",
            children: [
              i("0", "light", 1),
              i(".35", "mid", 0.6),
              i("1", "dark", 0),
            ],
          }),
          e.jsxs("linearGradient", {
            id: t + "-band",
            x1: "0",
            y1: "1",
            x2: "1",
            y2: "0",
            children: [
              i("0", "dark", 0),
              i(".3", "mid", 0.7),
              i(".55", "light", 0.95),
              i(".75", "mid", 0.6),
              i("1", "dark", 0),
            ],
          }),
          e.jsxs("linearGradient", {
            id: t + "-edge",
            x1: "0",
            y1: "0",
            x2: "1",
            y2: "0",
            children: [
              i("0", "light", 0.95),
              i(".5", "mid", 0.45),
              i("1", "dark", 0),
            ],
          }),
          e.jsx("filter", {
            id: t + "-b1",
            x: "-30%",
            y: "-30%",
            width: "160%",
            height: "160%",
            children: e.jsx("feGaussianBlur", { stdDeviation: "26" }),
          }),
          e.jsx("filter", {
            id: t + "-b2",
            x: "-30%",
            y: "-30%",
            width: "160%",
            height: "160%",
            children: e.jsx("feGaussianBlur", { stdDeviation: "9" }),
          }),
          e.jsx("filter", {
            id: t + "-b3",
            x: "-30%",
            y: "-30%",
            width: "160%",
            height: "160%",
            children: e.jsx("feGaussianBlur", { stdDeviation: "3" }),
          }),
        ],
      }),
      e.jsxs("g", {
        transform: s ? "translate(1200 0) scale(-1 1)" : void 0,
        children: [
          e.jsx("rect", {
            width: "1200",
            height: "700",
            style: { fill: "var(--mfl-sat-dark)" },
          }),
          e.jsx("rect", {
            width: "1200",
            height: "700",
            fill: "url(#" + t + "-sun)",
          }),
          e.jsxs("g", {
            className: "mfl-satin-a",
            children: [
              e.jsx("path", {
                d: "M-120 620C160 520 360 420 620 250S1020 20 1320 -60L1320 110C1040 170 820 330 600 470S160 720 -120 800Z",
                fill: "url(#" + t + "-band)",
                filter: "url(#" + t + "-b1)",
              }),
              e.jsx("path", {
                d: "M-60 700C240 560 470 430 700 270S1080 60 1300 0",
                fill: "none",
                style: n("light"),
                strokeOpacity: ".6",
                strokeWidth: "7",
                filter: "url(#" + t + "-b3)",
              }),
              e.jsx("path", {
                d: "M-80 760C230 620 470 500 720 340S1080 130 1310 70",
                fill: "none",
                stroke: "#000",
                strokeOpacity: ".5",
                strokeWidth: "36",
                filter: "url(#" + t + "-b2)",
              }),
            ],
          }),
          e.jsxs("g", {
            className: "mfl-satin-b",
            children: [
              e.jsx("path", {
                d: "M-60 120C40 220 90 380 60 560S20 700 40 760L-60 760Z",
                fill: "url(#" + t + "-edge)",
                filter: "url(#" + t + "-b1)",
              }),
              e.jsx("path", {
                d: "M-20 160C60 260 90 420 64 600",
                fill: "none",
                style: n("light"),
                strokeOpacity: ".6",
                strokeWidth: "5",
                filter: "url(#" + t + "-b3)",
              }),
            ],
          }),
          e.jsxs("g", {
            className: "mfl-satin-c",
            children: [
              e.jsx("path", {
                d: "M1240 300C1150 400 1090 520 1080 720L1240 720Z",
                style: { fill: "var(--mfl-sat-light)" },
                fillOpacity: ".5",
                filter: "url(#" + t + "-b1)",
              }),
              e.jsx("path", {
                d: "M1210 340C1140 430 1100 540 1094 720",
                fill: "none",
                style: n("light"),
                strokeOpacity: ".45",
                strokeWidth: "4",
                filter: "url(#" + t + "-b3)",
              }),
            ],
          }),
          e.jsx("rect", {
            width: "1200",
            height: "700",
            fill: "#000",
            fillOpacity: ".14",
          }),
        ],
      }),
    ],
  });
}
function dt({ cats: a, hover: r, setHover: t, colors: s }) {
  const i = qe(
      a.map((o) => o.value),
      3,
    ),
    n = a.reduce((o, x) => o + x.value, 0),
    d = r >= 0 && a[r] ? Math.round((a[r].value / (n || 1)) * 100) + "%" : "";
  return e.jsxs("svg", {
    className: "mfl-svg mfl-donut",
    viewBox: "0 0 64 64",
    width: 64,
    height: 64,
    role: "img",
    "aria-label": "Category split",
    onPointerLeave: () => t(-1),
    children: [
      e.jsx("circle", {
        cx: "32",
        cy: "32",
        r: "24",
        fill: "none",
        stroke: "rgba(255,255,255,.08)",
        strokeWidth: "9",
      }),
      i.map((o, x) =>
        o.len > 0
          ? e.jsx(
              "circle",
              {
                cx: "32",
                cy: "32",
                r: "24",
                fill: "none",
                pathLength: 100,
                stroke: a[x].color || s[x % s.length],
                strokeWidth: r === x ? 11 : 9,
                strokeDasharray: o.len + " " + (100 - o.len),
                strokeDashoffset: -o.start,
                transform: "rotate(-90 32 32)",
                className: "mfl-arc" + (r >= 0 && r !== x ? " is-dim" : ""),
                onPointerEnter: () => t(x),
              },
              x,
            )
          : null,
      ),
      e.jsx("text", {
        x: "32",
        y: "35.5",
        textAnchor: "middle",
        className: "mfl-donut-t",
        children: d,
      }),
    ],
  });
}
function pt({ card: a }) {
  const [r, t] = c.useState(0),
    [s, i] = c.useState(-1),
    n = a.periods[r] || a.periods[0];
  if (!n) return null;
  const d = n.change >= 0;
  return e.jsxs("article", {
    className: "mfl-stat",
    children: [
      e.jsxs("header", {
        className: "mfl-stat-top",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h3", { className: "mfl-stat-t", children: a.title }),
              e.jsx("p", { className: "mfl-stat-d", children: n.range }),
            ],
          }),
          e.jsxs("div", {
            className: "mfl-stat-tools",
            children: [
              e.jsx("span", {
                className: "mfl-ico",
                "aria-hidden": "true",
                children: e.jsxs("svg", {
                  className: "mfl-svg",
                  viewBox: "0 0 12 12",
                  width: 10,
                  height: 10,
                  children: [
                    e.jsx("rect", {
                      x: "1.5",
                      y: "2.5",
                      width: "9",
                      height: "8",
                      rx: "1.5",
                      fill: "none",
                      stroke: "currentColor",
                      strokeWidth: "1.1",
                    }),
                    e.jsx("path", {
                      d: "M1.5 5H10.5M4 1.5V3.5M8 1.5V3.5",
                      stroke: "currentColor",
                      strokeWidth: "1.1",
                      strokeLinecap: "round",
                    }),
                  ],
                }),
              }),
              e.jsx(se, {
                label: a.title + " period",
                options: a.periods.map((o) => o.label),
                value: r,
                onChange: (o) => (t(o), i(-1)),
              }),
            ],
          }),
        ],
      }),
      e.jsx(
        "div",
        { className: "mfl-stat-amt", children: E(n.amount, "$ ", 2) },
        r,
      ),
      e.jsxs("div", {
        className: "mfl-stat-chg",
        children: [
          e.jsxs("span", {
            className: "mfl-chg" + (d ? "" : " is-down"),
            children: [
              e.jsx(ot, { up: d }),
              Math.abs(n.change).toFixed(1),
              "%",
            ],
          }),
          e.jsxs("span", {
            children: [
              "so với ",
              r === 2 ? "hôm qua" : r === 1 ? "tuần trước" : "tháng trước",
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "mfl-stat-split",
        children: [
          e.jsx(dt, { cats: n.categories, hover: s, setHover: i, colors: re }),
          e.jsxs("div", {
            className: "mfl-legend",
            children: [
              e.jsx("p", {
                className: "mfl-legend-h",
                children: "Tất cả danh mục",
              }),
              e.jsx("ul", {
                children: n.categories
                  .slice(0, 4)
                  .map((o, x) =>
                    e.jsxs(
                      "li",
                      {
                        className: s >= 0 && s !== x ? "is-dim" : "",
                        onPointerEnter: () => i(x),
                        onPointerLeave: () => i(-1),
                        children: [
                          e.jsx("i", {
                            style: { background: o.color || re[x % re.length] },
                          }),
                          e.jsx("span", { children: o.label }),
                          e.jsx("b", { children: E(o.value, "$", 2) }),
                        ],
                      },
                      o.label,
                    ),
                  ),
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function xt({ wallets: a, growth: r, uid: t }) {
  const [s, i] = c.useState(0),
    [n, d] = c.useState(!1),
    o = a[s] || a[0],
    x = o ? et(a, o.perUsd) : 0,
    y = n ? a : a.slice(0, 4);
  return e.jsxs("div", {
    className: "mfl-panel mfl-wallet",
    children: [
      e.jsxs("div", {
        className: "mfl-panel-row",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("p", {
                className: "mfl-panel-k",
                children: "Tổng Số Dư Hũ",
              }),
              e.jsx(
                "p",
                {
                  className: "mfl-wallet-total",
                  "aria-live": "polite",
                  children: o ? E(x, o.symbol, be(o.code)) : "—",
                },
                s,
              ),
              e.jsx("p", { className: "mfl-wallet-g", children: r }),
            ],
          }),
          o &&
            e.jsx(se, {
              label: "Đơn vị tiền tệ",
              tone: "light",
              options: a.map((u) => u.code),
              value: s,
              onChange: i,
              render: (u, N) =>
                e.jsxs("span", {
                  className: "mfl-cur",
                  children: [e.jsx(ye, { code: u, uid: t + "m" + N }), u],
                }),
            }),
        ],
      }),
      e.jsxs("div", {
        className: "mfl-panel-row mfl-wallet-h",
        children: [
          e.jsx("p", { children: "Danh Sách Hũ & Ví" }),
          a.length > 4 &&
            e.jsx("button", {
              type: "button",
              className: "mfl-link",
              "aria-expanded": n,
              onClick: () => d((u) => !u),
              children: n ? "Thu gọn" : "Xem tất cả",
            }),
        ],
      }),
      e.jsx("div", {
        className: "mfl-wallet-grid",
        children: y.map((u, N) =>
          e.jsxs(
            "button",
            {
              type: "button",
              className: "mfl-wtile" + (N === s ? " is-sel" : ""),
              "aria-pressed": N === s,
              onClick: () => i(N),
              title: "Xem tổng theo " + u.code,
              children: [
                e.jsxs("span", {
                  className: "mfl-cur",
                  children: [
                    e.jsx(ye, { code: u.code, uid: t + "t" + N }),
                    u.code,
                  ],
                }),
                e.jsx("b", { children: E(u.balance, u.symbol, be(u.code)) }),
                e.jsx("em", {
                  className: u.active === !1 ? "is-off" : "",
                  children: u.active === !1 ? "Tạm dừng" : "Đang hoạt động",
                }),
              ],
            },
            u.code,
          ),
        ),
      }),
    ],
  });
}
function ht({ grid: a, budget: r }) {
  const [t, s] = c.useState(0),
    [i, n] = c.useState(null),
    d = _e[t],
    o = 12 - d,
    x = a.slice(o),
    y = r * (d / 12),
    u = x.reduce((w, b) => w + b.reduce((p, m) => p + m, 0), 0),
    N = Math.max(1, ...a.flat()),
    j = K(u / (y || 1), 0, 1);
  return e.jsxs("div", {
    className: "mfl-panel mfl-spend",
    onPointerLeave: () => n(null),
    children: [
      e.jsxs("div", {
        className: "mfl-panel-row",
        children: [
          e.jsx("p", {
            className: "mfl-panel-k",
            children: "Tổng Quan Chi Tiêu",
          }),
          e.jsx(se, {
            label: "Khoảng thời gian",
            tone: "light",
            options: Qe,
            value: t,
            onChange: (w) => (s(w), n(null)),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "mfl-panel-row mfl-spend-sum",
        children: [
          e.jsxs("p", {
            children: [
              e.jsx("b", { children: E(u, "₫", 0) }, t),
              e.jsxs("span", { children: [" / ", E(y, "₫", 0)] }),
            ],
          }),
          e.jsxs("div", {
            className: "mfl-spend-legend",
            "aria-hidden": "true",
            children: [
              e.jsxs("span", {
                children: [e.jsx("i", { className: "lv2" }), "> 500k ₫"],
              }),
              e.jsxs("span", {
                children: [e.jsx("i", { className: "lv4" }), "> 1tr ₫"],
              }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className: "mfl-meter",
        role: "meter",
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-valuenow": Math.round(j * 100),
        "aria-label": "Đã chi tiêu",
        children: e.jsx("i", { style: { width: j * 100 + "%" } }),
      }),
      e.jsx("div", {
        className: "mfl-heat",
        style: { gridTemplateColumns: "repeat(" + d + ", 1fr)" },
        children: x.map((w, b) =>
          e.jsxs(
            "div",
            {
              className: "mfl-heat-col",
              children: [
                w.map((p, m) => {
                  const g = at(p, N),
                    k = i && i.m === o + b && i.w === m;
                  return e.jsx(
                    "button",
                    {
                      type: "button",
                      className: "mfl-cell lv" + g + (k ? " is-on" : ""),
                      "aria-label":
                        _[o + b] + ", tuần " + (m + 1) + ": " + E(p, "₫", 0),
                      onPointerEnter: () => n({ m: o + b, w: m }),
                      onFocus: () => n({ m: o + b, w: m }),
                      onBlur: () => n(null),
                      style: { animationDelay: (b * 5 + m) * 14 + "ms" },
                    },
                    m,
                  );
                }),
                e.jsx("span", { className: "mfl-heat-m", children: _[o + b] }),
              ],
            },
            o + b,
          ),
        ),
      }),
      e.jsx("p", {
        className: "mfl-heat-tip",
        "aria-live": "polite",
        children: i
          ? e.jsxs(e.Fragment, {
              children: [
                e.jsx("b", { children: _[i.m] }),
                " · tuần ",
                i.w + 1,
                " · ",
                E(a[i.m][i.w], "₫", 0),
              ],
            })
          : "Rê chuột vào từng tuần để xem chi tiết chi tiêu.",
      }),
    ],
  });
}
function ut({ open: a, onClose: r, brand: t, onRequestDemo: s }) {
  const [i, n] = c.useState({
      name: "",
      email: "",
      company: "",
      size: "11–50",
    }),
    [d, o] = c.useState("idle"),
    [x, y] = c.useState(""),
    u = c.useRef(null),
    N = c.useRef(null),
    j = c.useRef(!0);
  if (
    (c.useEffect(
      () => (
        (j.current = !0),
        () => {
          j.current = !1;
        }
      ),
      [],
    ),
    c.useEffect(() => {
      if (!a) return;
      const p = document.activeElement;
      (o("idle"), y(""));
      const m = window.setTimeout(() => {
          var k;
          return (k = N.current) == null ? void 0 : k.focus();
        }, 30),
        g = (k) => {
          if ((k.key === "Escape" && r(), k.key === "Tab" && u.current)) {
            const P = u.current.querySelectorAll("button, input, select");
            if (!P.length) return;
            const H = P[0],
              I = P[P.length - 1];
            k.shiftKey && document.activeElement === H
              ? (k.preventDefault(), I.focus())
              : !k.shiftKey &&
                document.activeElement === I &&
                (k.preventDefault(), H.focus());
          }
        };
      return (
        document.addEventListener("keydown", g),
        () => {
          var k;
          (window.clearTimeout(m),
            document.removeEventListener("keydown", g),
            (k = p == null ? void 0 : p.focus) == null || k.call(p));
        }
      );
    }, [a, r]),
    !a)
  )
    return null;
  const w = (p) => (m) => {
      const g = m.target.value;
      (n((k) => ({ ...k, [p]: g })), x && y(""));
    },
    b = async (p) => {
      if ((p.preventDefault(), d !== "sending")) {
        if (!i.name.trim()) return y("Tell us who to ask for.");
        if (!ve(i.email)) return y("That email doesn't look right.");
        (y(""), o("sending"));
        try {
          if (
            (s
              ? await s(i)
              : await new Promise((g) => setTimeout(() => g(!0), 900))) === !1
          )
            throw new Error("rejected");
          j.current && o("done");
        } catch {
          j.current &&
            (o("error"), y("Something went wrong. Try again in a moment."));
        }
      }
    };
  return e.jsx("div", {
    className: "mfl-modal",
    onPointerDown: (p) => p.target === p.currentTarget && r(),
    children: e.jsxs("div", {
      className: "mfl-dialog",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "mfl-dialog-h",
      ref: u,
      children: [
        e.jsx("button", {
          type: "button",
          className: "mfl-x",
          "aria-label": "Close",
          onClick: r,
          children: e.jsx("svg", {
            className: "mfl-svg",
            viewBox: "0 0 12 12",
            width: 12,
            height: 12,
            "aria-hidden": "true",
            children: e.jsx("path", {
              d: "M2 2L10 10M10 2L2 10",
              stroke: "currentColor",
              strokeWidth: "1.5",
              strokeLinecap: "round",
            }),
          }),
        }),
        d === "done"
          ? e.jsxs("div", {
              className: "mfl-done",
              children: [
                e.jsx("span", {
                  className: "mfl-done-mark",
                  children: e.jsx(R, { size: 30 }),
                }),
                e.jsx("h2", {
                  id: "mfl-dialog-h",
                  children: "You're on the calendar.",
                }),
                e.jsxs("p", {
                  children: [
                    "We'll email ",
                    i.email.trim(),
                    " within one business day with a few times that work. Bring your messiest spreadsheet.",
                  ],
                }),
                e.jsx("button", {
                  type: "button",
                  className: "mfl-btn mfl-btn--brand",
                  onClick: r,
                  children: "Done",
                }),
              ],
            })
          : e.jsxs("form", {
              onSubmit: b,
              noValidate: !0,
              children: [
                e.jsxs("p", {
                  className: "mfl-badge mfl-badge--light",
                  children: [e.jsx(R, { size: 10 }), " Request demo"],
                }),
                e.jsxs("h2", {
                  id: "mfl-dialog-h",
                  children: [
                    "See ",
                    t.replace(/\.$/, ""),
                    " on your own numbers.",
                  ],
                }),
                e.jsx("p", {
                  className: "mfl-dialog-sub",
                  children:
                    "A 25-minute walkthrough with a finance specialist. No slides.",
                }),
                e.jsxs("label", {
                  children: [
                    e.jsx("span", { children: "Full name" }),
                    e.jsx("input", {
                      ref: N,
                      value: i.name,
                      onChange: w("name"),
                      autoComplete: "name",
                      placeholder: "Ada Mensah",
                    }),
                  ],
                }),
                e.jsxs("label", {
                  children: [
                    e.jsx("span", { children: "Work email" }),
                    e.jsx("input", {
                      value: i.email,
                      onChange: w("email"),
                      type: "email",
                      autoComplete: "email",
                      placeholder: "ada@company.com",
                      "aria-invalid": !!x && !ve(i.email),
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mfl-dialog-row",
                  children: [
                    e.jsxs("label", {
                      children: [
                        e.jsx("span", { children: "Company" }),
                        e.jsx("input", {
                          value: i.company,
                          onChange: w("company"),
                          autoComplete: "organization",
                          placeholder: "Northwind",
                        }),
                      ],
                    }),
                    e.jsxs("label", {
                      children: [
                        e.jsx("span", { children: "Team size" }),
                        e.jsx("select", {
                          value: i.size,
                          onChange: w("size"),
                          children: [
                            "1–10",
                            "11–50",
                            "51–200",
                            "201–1000",
                            "1000+",
                          ].map((p) => e.jsx("option", { children: p }, p)),
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsx("p", {
                  className: "mfl-err",
                  role: "alert",
                  children: x,
                }),
                e.jsx("button", {
                  type: "submit",
                  className: "mfl-btn mfl-btn--brand mfl-btn--wide",
                  disabled: d === "sending",
                  children: d === "sending" ? "Booking…" : "Book my demo",
                }),
              ],
            }),
      ],
    }),
  });
}
function vt({
  customModel,
  afterHero,
  children,
  brand: a = "synais.",
  logo: r,
  nav: t = Ye,
  login: s = null,
  signup: i = { label: "Sign up", href: "#" },
  backer: n = { prefix: "Backed by", name: "Orbit Ventures", mark: "O" },
  title: d = `Smarter *Financial*
Management`,
  subtitle:
    o = "Gain complete and confident control over each of your valuable assets with ease.",
  primaryAction: x = { label: "Get started", href: "#contact" },
  secondaryAction: y = { label: "Request demo" },
  socialProof: sp = [],
  info: u = {
    label: "/info/",
    text: "Synais helps finance managers automate manual work, gain real-time visibility into financial *performance, and make faster, data-driven decisions with intelligent AI-powered automation.",
  },
  statCards: N = Ge,
  about: j = {
    kicker: "About us",
    statement:
      "Synais {mark} helps finance managers eliminate manual work, gain real-time visibility into financial performance, and make faster, data-driven decisions through intelligent AI automation.",
    stats: Ue,
  },
  features: w = {
    kicker: "Our features",
    title: `Essential *Tools For*
*Finance* Managers`,
    subtitle: "Optimize finances with better insights and forecasting.",
  },
  wallet: b = {
    title: "Multi-Currency Wallet",
    description:
      "Manage multiple currencies from a single dashboard. Monitor balances, track account activity, and gain full visibility.",
    growth: "+2.4% · This month",
  },
  spending: p = {
    title: "Profit & Loss Tracking",
    description:
      "Visualize profits and losses with clear charts and reports. Track financial trends and make informed decisions.",
    budget: 5e4,
    seed: 7,
  },
  cta: m = {
    title: "Every dollar, *finally* in view.",
    subtitle:
      "Connect your accounts in minutes. Your first month-end close with us is on the house.",
    action: { label: "Get started", href: "#" },
  },
  footer: g = $e,
  palette: k = "ocean",
  onRequestDemo: P,
  height: H = "100svh",
  className: I = "",
}) {
  const S = c.useId().replace(/:/g, ""),
    L = st(),
    z = it(k),
    T = c.useRef(null),
    ne = c.useRef(null),
    oe = c.useRef(null),
    Y = c.useRef(null),
    ce = c.useRef(null),
    fe = c.useRef(null),
    me = c.useRef(null),
    [B, J] = c.useState(!1),
    [ke, Ne] = c.useState(!1),
    [ze, Z] = c.useState(!1),
    [de, pe] = c.useState(-1),
    [q, Ce] = c.useState(0),
    [Me, Se] = c.useState(0),
    [Le, Re] = c.useState(0),
    [Ee, xe] = c.useState(0),
    he = c.useRef(null),
    De = c.useRef(null),
    Fe = c.useCallback(() => J(!1), []),
    Oe = c.useCallback(() => Z(!1), []);
  we(B, Fe, he);
  const G = a.replace(/\.$/, ""),
    ee = a.endsWith("."),
    U = c.useMemo(() => (j ? lt(j.statement) : []), [j]),
    Ae = c.useMemo(() => {
      const l = p == null ? void 0 : p.months;
      return l && l.length === 12
        ? l.map((f) => [0, 1, 2, 3, 4].map((h) => Math.max(0, f[h] || 0)))
        : tt((p == null ? void 0 : p.seed) ?? 7);
    }, [p]),
    Pe = b != null && b.wallets && b.wallets.length ? b.wallets : Ve,
    D = (l, f) => {
      var C;
      if ((J(!1), !l || !l.startsWith("#"))) return;
      const h =
        (C = T.current) == null
          ? void 0
          : C.querySelector('[data-sec="' + l.slice(1) + '"]');
      if (!h) {
        l === "#" && f.preventDefault();
        return;
      }
      (f.preventDefault(),
        h.scrollIntoView({ behavior: L ? "auto" : "smooth", block: "start" }));
    };
  (c.useEffect(() => {
    let l = 0;
    const f = () => {
        l = 0;
        const C = T.current;
        if (!C) return;
        Ne(C.getBoundingClientRect().top < -40);
        const v = ce.current;
        if (v) {
          const M = v.getBoundingClientRect(),
            F = window.innerHeight || 800,
            O = F * 0.85,
            W = F * 0.55,
            $ = K((O - M.top) / (O - W + M.height), 0, 1);
          Re(L ? U.length : Math.round($ * U.length));
        }
      },
      h = () => {
        l || (l = requestAnimationFrame(f));
      };
    return (
      h(),
      window.addEventListener("scroll", h, { passive: !0 }),
      window.addEventListener("resize", h),
      () => {
        (cancelAnimationFrame(l),
          window.removeEventListener("scroll", h),
          window.removeEventListener("resize", h));
      }
    );
  }, [U.length, L]),
    c.useEffect(() => {
      const l = fe.current;
      if (!l) return;
      if (L || typeof IntersectionObserver > "u") {
        xe(1);
        return;
      }
      let f = 0;
      const h = new IntersectionObserver(
        (C) => {
          if (!C.some((F) => F.isIntersecting)) return;
          h.disconnect();
          const v = performance.now(),
            M = (F) => {
              const O = Je((F - v) / 1600);
              (xe(O), O < 1 && (f = requestAnimationFrame(M)));
            };
          f = requestAnimationFrame(M);
        },
        { threshold: 0.4 },
      );
      return (
        h.observe(l),
        () => {
          (h.disconnect(), cancelAnimationFrame(f));
        }
      );
    }, [L]),
    c.useEffect(() => {
      const l = T.current;
      if (!l || L || typeof IntersectionObserver > "u") return;
      const f = window.innerHeight || 800,
        h = Array.from(l.querySelectorAll(".mfl-rise")).filter(
          (v) => v.getBoundingClientRect().top > f,
        );
      h.forEach((v) => v.classList.add("mfl-pre"));
      const C = new IntersectionObserver(
        (v) =>
          v.forEach((M) => {
            M.isIntersecting &&
              (M.target.classList.remove("mfl-pre"), C.unobserve(M.target));
          }),
        { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
      );
      return (
        h.forEach((v) => C.observe(v)),
        () => {
          (C.disconnect(), h.forEach((v) => v.classList.remove("mfl-pre")));
        }
      );
    }, [L]));
  const Te = c.useMemo(ft, []),
    Be = (l) => {
      if (l.pointerType === "touch") return;
      const f = Y.current,
        h = ne.current;
      if (f && h && !L) {
        const A = h.getBoundingClientRect(),
          te = (l.clientX - A.left) / A.width - 0.5,
          Q = (l.clientY - A.top) / A.height - 0.5;
        (f.style.setProperty("--mfl-rx", (-Q * 18).toFixed(2) + "deg"),
          f.style.setProperty("--mfl-ry", (te * 24).toFixed(2) + "deg"));
      }
      const C = oe.current;
      if (!C) return;
      const v = C.getBoundingClientRect(),
        M = Math.max(v.width / 1440, v.height / 900),
        F = (l.clientX - v.left - (v.width - 1440 * M) / 2) / M,
        O = (l.clientY - v.top - (v.height - 900 * M) / 2) / M;
      let W = -1,
        $ = 90;
      (Te.forEach((A, te) => {
        const Q = Math.hypot(A.x - F, A.y - O);
        Q < $ && (($ = Q), (W = te));
      }),
        W !== de && pe(W));
    },
    We = () => {
      var l, f;
      (pe(-1),
        (l = Y.current) == null || l.style.setProperty("--mfl-rx", "0deg"),
        (f = Y.current) == null || f.style.setProperty("--mfl-ry", "0deg"));
    },
    He = (l) => {
      const f = me.current;
      if (!f || L) return;
      const h = f.getBoundingClientRect();
      (f.style.setProperty(
        "--mfl-sx",
        ((l.clientX - h.left) / h.width) * 100 + "%",
      ),
        f.style.setProperty(
          "--mfl-sy",
          ((l.clientY - h.top) / h.height) * 100 + "%",
        ));
    },
    ue = () => {
      (Ce((l) => l + 1), Se((l) => l + 1));
    },
    Ie = {
      "--mfl-frame": z.frame,
      "--mfl-paper": z.paper,
      "--mfl-ink": z.ink,
      "--mfl-muted": z.muted,
      "--mfl-brand": z.brand,
      "--mfl-night": z.night,
      "--mfl-card": z.card,
      "--mfl-cream": z.cream,
      "--mfl-device": z.device,
      "--mfl-glow": z.glow,
      "--mfl-sat-dark": z.satin[0],
      "--mfl-sat-mid": z.satin[1],
      "--mfl-sat-light": z.satin[2],
    },
    ge =
      r ??
      e.jsx("span", {
        className: "mfl-logo-mark",
        "aria-hidden": "true",
        children: e.jsx(R, { size: 13, color: z.cream }),
      }),
    V = (l, f = "") =>
      l
        .split(
          `
`,
        )
        .map((h, C) =>
          e.jsx(
            "span",
            {
              className: "mfl-line " + f,
              children: Xe(h).map((v, M) =>
                e.jsx(
                  "span",
                  {
                    className: v.muted ? "mfl-mute" : void 0,
                    children: v.text,
                  },
                  M,
                ),
              ),
            },
            C,
          ),
        );
  return e.jsxs("div", {
    ref: T,
    className: "mfl-root " + I,
    style: Ie,
    "data-scrolled": ke || void 0,
    children: [
      e.jsx("style", { children: gt }),
      e.jsxs("nav", {
        className: "mfl-nav",
        "aria-label": "Main",
        children: [
          e.jsxs("div", {
            className: "mfl-nav-l",
            ref: he,
            children: [
              e.jsxs("div", {
                className: "mfl-logo-pill",
                children: [
                  e.jsxs("a", {
                    href: "#",
                    className: "mfl-logo",
                    onClick: (l) => {
                      var f;
                      return (
                        l.preventDefault(),
                        (f = T.current) == null
                          ? void 0
                          : f.scrollIntoView({
                              behavior: L ? "auto" : "smooth",
                            })
                      );
                    },
                    children: [
                      ge,
                      e.jsxs("span", {
                        children: [
                          G,
                          ee &&
                            e.jsx("span", {
                              className: "mfl-dot",
                              children: ".",
                            }),
                        ],
                      }),
                    ],
                  }),
                  t.length > 0 &&
                    e.jsxs("button", {
                      ref: De,
                      type: "button",
                      className: "mfl-burger" + (B ? " is-open" : ""),
                      "aria-label": B ? "Close menu" : "Open menu",
                      "aria-expanded": B,
                      "aria-controls": S + "-menu",
                      onClick: () => J((l) => !l),
                      children: [e.jsx("i", {}), e.jsx("i", {})],
                    }),
                ],
              }),
              e.jsx("div", {
                className: `fixed inset-0 z-[998] bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
                  B ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`,
                onClick: () => J(false),
                "aria-hidden": "true",
              }),
              e.jsxs("aside", {
                id: S + "-menu",
                "aria-label": "Thanh điều hướng WIVI",
                className: `fixed top-0 left-0 bottom-0 w-[300px] sm:w-[320px] max-w-[85vw] bg-[#071322] border-r border-sky-900/50 shadow-2xl z-[999] flex flex-col justify-between p-5 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  B ? "translate-x-0" : "-translate-x-full"
                }`,
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center justify-between pb-4 border-b border-sky-900/40",
                        children: [
                          e.jsxs("div", {
                            className: "flex items-center gap-2.5",
                            children: [
                              e.jsx("img", {
                                src: "/wivi-logo.png",
                                alt: "WIVI",
                                className: "h-8 w-8 rounded-lg object-contain bg-sky-950 p-1 border border-sky-800/40",
                              }),
                              e.jsx("span", {
                                className: "font-bold text-white text-base tracking-wider",
                                children: "WIVI",
                              }),
                            ],
                          }),
                          e.jsx("button", {
                            type: "button",
                            onClick: () => J(false),
                            className: "w-8 h-8 rounded-lg bg-sky-500/20 text-sky-400 hover:bg-sky-500 hover:text-white flex items-center justify-center transition-all cursor-pointer",
                            "aria-label": "Đóng menu",
                            children: e.jsx("svg", {
                              width: 14,
                              height: 14,
                              viewBox: "0 0 14 14",
                              fill: "none",
                              stroke: "currentColor",
                              strokeWidth: "2.2",
                              strokeLinecap: "round",
                              children: e.jsx("path", { d: "M2 2L12 12M12 2L2 12" }),
                            }),
                          }),
                        ],
                      }),
                      e.jsx("ul", {
                        className: "flex flex-col gap-1 py-4 overflow-y-auto max-h-[calc(100vh-180px)]",
                        children: t.map((l, f) =>
                          e.jsx(
                            "li",
                            {
                              children: e.jsxs("a", {
                                href: l.href || "#",
                                onClick: (h) => {
                                  D(l.href, h);
                                  J(false);
                                },
                                className: "flex items-center justify-between px-3.5 py-3 rounded-xl text-white hover:text-white bg-slate-900/60 hover:bg-sky-500/25 active:bg-sky-500/40 transition-all group font-bold text-[16px] tracking-wide border border-sky-900/50 hover:border-sky-400/50 shadow-sm",
                                children: [
                                  e.jsxs("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                      e.jsxs("span", {
                                        className: "font-mono text-xs text-sky-300 font-bold bg-sky-950/90 px-2 py-0.5 rounded border border-sky-400/30",
                                        children: ["0", f + 1],
                                      }),
                                      e.jsx("span", {
                                        className: "text-white font-bold group-hover:translate-x-1.5 transition-transform",
                                        children: l.label,
                                      }),
                                    ],
                                  }),
                                  e.jsx("svg", {
                                    className: "w-4 h-4 text-sky-300 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all",
                                    viewBox: "0 0 12 12",
                                    fill: "none",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    children: e.jsx("path", {
                                      d: "M3 9L9 3M4 3H9V8",
                                      strokeLinecap: "round",
                                    }),
                                  }),
                                ],
                              }),
                            },
                            l.label,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "pt-4 border-t border-sky-900/40 flex items-center justify-between text-xs text-slate-200 font-mono font-semibold",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsx("span", { className: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }),
                          e.jsx("span", { className: "text-white font-medium", children: "All systems normal" }),
                        ],
                      }),
                      e.jsx("span", {
                        className: "text-[11px] text-sky-300 font-bold",
                        children: "v2.4",
                      }),
                    ],
                  }),
                ],
              }),
              sp &&
                sp.length > 0 &&
                e.jsx("div", {
                  className: "mfl-social-proof mfl-in flex flex-wrap items-center justify-center gap-x-4 gap-y-2 mt-4 text-[12px] sm:text-[13px] text-sky-200/90 font-medium",
                  style: { animationDelay: "420ms" },
                  children: sp.map((item, idx) =>
                    e.jsxs(
                      "span",
                      {
                        className:
                          "inline-flex items-center gap-1.5 bg-sky-950/40 border border-sky-400/20 px-3 py-1 rounded-full backdrop-blur-xs",
                        children: [
                          e.jsx("span", {
                            className: "text-emerald-400 font-bold",
                            children: "✓",
                          }),
                          item,
                        ],
                      },
                      idx,
                    ),
                  ),
                }),
            ],
          }),
          e.jsxs("div", {
            className: "mfl-nav-r",
            children: [
              s &&
                e.jsx("a", {
                  className: "mfl-btn mfl-btn--brand mfl-btn--sm",
                  href: s.href || "#",
                  onClick: (l) => D(s.href, l),
                  children: s.label,
                }),
              i &&
                e.jsx("a", {
                  className: "mfl-btn mfl-btn--white mfl-btn--sm",
                  href: i.href || "#",
                  onClick: (l) => D(i.href, l),
                  children: i.label,
                }),
            ],
          }),
        ],
      }),
      e.jsx("header", {
        ref: ne,
        id: "hero",
        className: "relative w-full h-[100dvh] min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f2f8f2] via-[#eef7ee] to-[#e4f3ea] border-b border-sky-900/30",
        children: e.jsx("img", {
          src: "/assets/about-me/tinhnang.png",
          alt: "WIVI - Smart Money For Smart Generation",
          className: "w-full h-full object-contain object-center select-none p-2 sm:p-4 max-h-[100dvh]",
        }),
      }),
      e.jsxs("main", {
        className: "mfl-night",
        children: [
          afterHero,
          j &&
            e.jsxs("section", {
              className: "mfl-about",
              "data-sec": "about",
              "aria-labelledby": S + "-about",
              children: [
                e.jsxs("p", {
                  className: "mfl-badge mfl-rise",
                  id: S + "-about",
                  children: [
                    e.jsx(R, { size: 10 }),
                    " ",
                    j.kicker ?? "About us",
                  ],
                }),
                e.jsx("p", {
                  className: "mfl-statement",
                  ref: ce,
                  children: U.map((l, f) => {
                    const h = f < Le;
                    return l === "{mark}"
                      ? e.jsxs(
                          "span",
                          {
                            className: "mfl-trio" + (h ? " is-on" : ""),
                            "aria-hidden": "true",
                            children: [
                              e.jsx("i", {
                                children: e.jsx(R, {
                                  size: 14,
                                  color: "#ffffff",
                                }),
                              }),
                              e.jsx("i", {
                                children: e.jsx(R, {
                                  size: 14,
                                  color: "#091726",
                                }),
                              }),
                              e.jsx("i", {
                                children: e.jsx(R, {
                                  size: 14,
                                  color: "#091726",
                                }),
                              }),
                              " ",
                            ],
                          },
                          f,
                        )
                      : e.jsxs(
                          "span",
                          {
                            className: "mfl-w" + (h ? " is-on" : ""),
                            children: [l, " "],
                          },
                          f,
                        );
                  }),
                }),
                j.stats &&
                  j.stats.length > 0 &&
                  e.jsx("div", {
                    className: "mfl-stats",
                    ref: fe,
                    children: j.stats.map((l) =>
                      e.jsxs(
                        "div",
                        {
                          className: "mfl-statnum mfl-rise",
                          children: [
                            e.jsxs("p", {
                              className: "mfl-statnum-v",
                              children: [
                                l.prefix,
                                Ke(l.value * Ee, l.decimals ?? 0),
                                l.suffix,
                              ],
                            }),
                            e.jsx("p", {
                              className: "mfl-statnum-l",
                              children: l.label,
                            }),
                          ],
                        },
                        l.label,
                      ),
                    ),
                  }),
              ],
            }),
          w &&
            e.jsxs("section", {
              className: "mfl-feat",
              "data-sec": "features",
              "aria-labelledby": S + "-feat",
              ref: me,
              onPointerMove: He,
              children: [
                e.jsxs("div", {
                  className: "mfl-feat-bg",
                  "aria-hidden": "true",
                  children: [
                    e.jsx(le, { uid: S }),
                    e.jsx("span", { className: "mfl-feat-light" }),
                  ],
                }),
                e.jsxs("div", {
                  className: "mfl-feat-in",
                  children: [
                    e.jsxs("p", {
                      className: "mfl-badge mfl-rise",
                      children: [
                        e.jsx(R, { size: 10 }),
                        " ",
                        w.kicker ?? "Our features",
                      ],
                    }),
                    e.jsx("h2", {
                      className: "mfl-h2 mfl-rise",
                      id: S + "-feat",
                      children: V(w.title),
                    }),
                    w.subtitle &&
                      e.jsx("p", {
                        className: "mfl-feat-sub mfl-rise",
                        children: w.subtitle,
                      }),
                    e.jsxs("div", {
                      className: "mfl-fcards",
                      children: [
                        b &&
                          e.jsxs("article", {
                            className: "mfl-fcard mfl-rise",
                            children: [
                              e.jsxs("div", {
                                className: "mfl-fmedia",
                                children: [
                                  e.jsx(le, { uid: S, variant: 1 }),
                                  e.jsx("span", {
                                    className: "mfl-flare",
                                    "aria-hidden": "true",
                                  }),
                                  e.jsx(xt, {
                                    wallets: Pe,
                                    growth: b.growth ?? "",
                                    uid: S,
                                  }),
                                ],
                              }),
                              e.jsx("h3", {
                                children: b.title ?? "Multi-Currency Wallet",
                              }),
                              b.description &&
                                e.jsx("p", { children: b.description }),
                            ],
                          }),
                        p &&
                          e.jsxs("article", {
                            className: "mfl-fcard mfl-rise",
                            children: [
                              e.jsxs("div", {
                                className: "mfl-fmedia",
                                children: [
                                  e.jsx(le, { uid: S, variant: 2 }),
                                  e.jsx("span", {
                                    className: "mfl-flare mfl-flare--r",
                                    "aria-hidden": "true",
                                  }),
                                  e.jsx(ht, {
                                    grid: Ae,
                                    budget: p.budget ?? 5e4,
                                  }),
                                ],
                              }),
                              e.jsx("h3", {
                                children: p.title ?? "Profit & Loss Tracking",
                              }),
                              p.description &&
                                e.jsx("p", { children: p.description }),
                            ],
                          }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          children,
          m &&
            e.jsxs("section", {
              className: "mfl-cta",
              "data-sec": "contact",
              "aria-labelledby": S + "-cta",
              children: [
                e.jsx("div", {
                  className: "mfl-cta-mark mfl-rise",
                  "aria-hidden": "true",
                  children: e.jsx(R, { size: 28, color: z.cream }),
                }),
                e.jsx("h2", {
                  className: "mfl-h2 mfl-rise",
                  id: S + "-cta",
                  children: V(m.title),
                }),
                m.subtitle &&
                  e.jsx("p", {
                    className: "mfl-feat-sub mfl-rise",
                    children: m.subtitle,
                  }),
                e.jsxs("div", {
                  className: "mfl-cta-row mfl-rise",
                  children: [
                    m.action &&
                      e.jsx("a", {
                        className: "mfl-btn mfl-btn--cream",
                        href: m.action.href || "#",
                        onClick: (l) => {
                          var f;
                          return D((f = m.action) == null ? void 0 : f.href, l);
                        },
                        children: m.action.label,
                      }),
                    e.jsx("button", {
                      type: "button",
                      className: "mfl-btn mfl-btn--ghost",
                      onClick: () => Z(!0),
                      children: "Request demo",
                    }),
                  ],
                }),
              ],
            }),
          g &&
            e.jsxs("footer", {
              className: "mfl-foot",
              children: [
                e.jsxs("div", {
                  className: "mfl-foot-top",
                  children: [
                    e.jsxs("div", {
                      className: "mfl-foot-brand",
                      children: [
                        e.jsxs("span", {
                          className: "mfl-logo",
                          children: [
                            ge,
                            e.jsxs("span", {
                              children: [
                                G,
                                ee &&
                                  e.jsx("span", {
                                    className: "mfl-dot",
                                    children: ".",
                                  }),
                              ],
                            }),
                          ],
                        }),
                        g.note && e.jsx("p", { children: g.note }),
                      ],
                    }),
                    (g.columns ?? []).map((l) =>
                      e.jsxs(
                        "div",
                        {
                          className: "mfl-foot-col",
                          children: [
                            e.jsx("p", { children: l.title }),
                            e.jsx("ul", {
                              children: l.links.map((f) => {
                                const isExt = f.target === "_blank" || (f.href && /^https?:\/\//i.test(f.href));
                                return e.jsx(
                                  "li",
                                  {
                                    children: e.jsx("a", {
                                      href: f.href || "#",
                                      target: f.target || (isExt ? "_blank" : undefined),
                                      rel: isExt ? "noopener noreferrer" : undefined,
                                      onClick: (h) => D(f.href || "#", h),
                                      children: f.label,
                                    }),
                                  },
                                  f.label,
                                );
                              }),
                            }),
                          ],
                        },
                        l.title,
                      ),
                    ),
                  ],
                }),
                e.jsxs("p", {
                  className: "mfl-wordmark",
                  "aria-hidden": "true",
                  children: [G, ee && e.jsx("span", { children: "." })],
                }),
                e.jsxs("div", {
                  className: "mfl-foot-bot",
                  children: [
                    e.jsxs("span", {
                      children: [
                        "© ",
                        new Date().getFullYear(),
                        " ",
                        G,
                        ". All rights reserved.",
                      ],
                    }),
                    e.jsx("span", {
                      className: "mfl-foot-soc",
                      children: (g.socials ?? []).map((l) => {
                        const isExt = l.target === "_blank" || (l.href && /^https?:\/\//i.test(l.href));
                        return e.jsx(
                          "a",
                          {
                            href: l.href || "#",
                            target: l.target || (isExt ? "_blank" : undefined),
                            rel: isExt ? "noopener noreferrer" : undefined,
                            onClick: (f) => D(l.href || "#", f),
                            children: l.label,
                          },
                          l.label,
                        );
                      }),
                    }),
                  ],
                }),
              ],
            }),
        ],
      }),
      e.jsx(ut, { open: ze, onClose: Oe, brand: a, onRequestDemo: P }),
    ],
  });
}
const gt = `
.mfl-root{position:relative;background:var(--mfl-frame);color:var(--mfl-ink);padding:14px 14px 0;overflow-x:clip;font-family:"Inter Tight","Inter","Geist",ui-sans-serif,system-ui,-apple-system,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;line-height:1.4;font-feature-settings:"ss01","cv11"}
.mfl-root :where(button){font:inherit;color:inherit;background:none;border:0;padding:0;margin:0;cursor:pointer;text-align:inherit}
.mfl-root :where(a){color:inherit;text-decoration:none}
.mfl-root :where(p,h1,h2,h3,ul){margin:0;padding:0}
.mfl-root :where(ul){list-style:none}
.mfl-root :where(input,select){font:inherit;color:inherit}
.mfl-root :where(button,a,input,select,[tabindex]):focus-visible{outline:2px solid var(--mfl-glow);outline-offset:2px;border-radius:6px}
.mfl-svg{display:block;max-width:none;flex:none}

/* ---- buttons ---- */
.mfl-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;height:44px;padding:0 22px;border-radius:3px;font-size:14px;font-weight:500;letter-spacing:-.01em;transition:transform .25s cubic-bezier(.2,.8,.2,1),background-color .25s,box-shadow .25s,color .25s;white-space:nowrap}
.mfl-btn:active{transform:scale(.97)}
.mfl-btn--sm{height:38px;padding:0 18px;font-size:13px}
.mfl-btn--brand{background:var(--mfl-brand);color:#fff;box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 1px 2px rgba(0,0,0,.18)}
.mfl-btn--brand:hover{background:color-mix(in srgb,var(--mfl-brand) 86%,#000);box-shadow:inset 0 1px 0 rgba(255,255,255,.14),0 8px 22px -8px color-mix(in srgb,var(--mfl-brand) 70%,transparent)}
.mfl-btn--white{background:#fff;color:var(--mfl-ink);box-shadow:0 1px 2px rgba(0,0,0,.08)}
.mfl-btn--white:hover{box-shadow:0 8px 22px -10px rgba(0,0,0,.35)}
.mfl-btn--cream{background:var(--mfl-cream);color:var(--mfl-night)}
.mfl-btn--cream:hover{background:#fff}
.mfl-btn--ghost{color:var(--mfl-cream);box-shadow:inset 0 0 0 1px color-mix(in srgb,var(--mfl-cream) 30%,transparent)}
.mfl-btn--ghost:hover{box-shadow:inset 0 0 0 1px var(--mfl-cream)}
.mfl-btn--wide{width:100%}
.mfl-btn[disabled]{opacity:.7;cursor:progress}

/* ---- nav ---- */
.mfl-nav{position:sticky;top:0;z-index:40;display:flex;justify-content:space-between;align-items:flex-start;padding:10px 10px 0;height:58px;margin-bottom:-58px;pointer-events:none}
.mfl-nav>*{pointer-events:auto}
.mfl-nav::before{content:"";position:absolute;inset:0;background:rgba(9,23,38,.85);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid rgba(56,189,248,.12);opacity:0;transition:opacity .3s ease;pointer-events:none;z-index:-1}
.mfl-nav-l{position:relative}
.mfl-nav-r{display:flex;gap:6px}
.mfl-root[data-scrolled] .mfl-nav{padding-top:8px}
.mfl-root[data-scrolled] .mfl-nav::before{opacity:1}
.mfl-root[data-scrolled] .mfl-logo-pill,.mfl-root[data-scrolled] .mfl-nav-r .mfl-btn{box-shadow:0 10px 30px -12px rgba(0,0,0,.45)}
.mfl-logo-pill{display:inline-flex;width:fit-content;max-width:max-content;align-items:center;gap:12px;height:38px;padding:0 6px 0 10px;border-radius:8px;background:rgba(9,23,38,.9);border:1px solid rgba(56,189,248,.25);backdrop-filter:blur(10px);box-shadow:0 8px 24px -6px rgba(0,0,0,.5);transition:box-shadow .3s}
.mfl-logo{display:inline-flex;align-items:center;gap:7px;font-size:15px;font-weight:600;letter-spacing:-.03em;color:#ffffff}
.mfl-logo-mark{display:grid;place-items:center;width:20px;height:20px;border-radius:5px;background:var(--mfl-ink)}
.mfl-dot{color:var(--mfl-brand)}
.mfl-burger{position:relative;width:30px;height:30px;border-radius:3px;background:var(--mfl-brand);display:grid;place-items:center;transition:background-color .2s}
.mfl-burger i{position:absolute;left:9px;right:9px;height:1.4px;background:#fff;border-radius:2px;transition:transform .3s cubic-bezier(.2,.8,.2,1),top .3s}
.mfl-burger i:nth-child(1){top:12px}
.mfl-burger i:nth-child(2){top:17px}
.mfl-burger.is-open i:nth-child(1){top:14.5px;transform:rotate(45deg)}
.mfl-burger.is-open i:nth-child(2){top:14.5px;transform:rotate(-45deg)}
.mfl-dropdown{position:absolute;left:0;top:44px;width:260px;padding:6px;border-radius:8px;background:var(--mfl-night);color:var(--mfl-cream);box-shadow:0 24px 60px -20px rgba(0,0,0,.6);transform-origin:top left;animation:mfl-pop .28s cubic-bezier(.2,.8,.2,1)}
.mfl-dropdown li{animation:mfl-rise .35s cubic-bezier(.2,.8,.2,1) backwards}
.mfl-dropdown a{display:flex;align-items:center;gap:12px;padding:12px 12px;border-radius:5px;font-size:20px;letter-spacing:-.03em;transition:background-color .2s}
.mfl-dropdown a svg{margin-left:auto;opacity:0;transform:translate(-4px,4px);transition:opacity .2s,transform .25s}
.mfl-dropdown a:hover{background:rgba(255,255,255,.06)}
.mfl-dropdown a:hover svg{opacity:1;transform:none}
.mfl-dd-n{font-size:10px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;opacity:.45;letter-spacing:0}
.mfl-dd-foot{display:flex;align-items:center;gap:8px;margin-top:4px;padding:10px 12px 6px;border-top:1px solid rgba(255,255,255,.08);font-size:11px;opacity:.6}
.mfl-live{width:6px;height:6px;border-radius:50%;background:#7bd389;box-shadow:0 0 0 0 rgba(123,211,137,.6);animation:mfl-ping 2s infinite}

/* ---- hero ---- */
.mfl-hero{position:relative;display:flex;flex-direction:column;justify-content:space-between;background:var(--mfl-paper);border-radius:4px 4px 0 0;overflow:hidden;isolation:isolate}
.mfl-hero-tinhnang-bg{position:absolute;inset:0;background-image:url('/assets/about-me/tinhnang.png');background-size:cover;background-position:center;opacity:.14;mix-blend-mode:luminosity;filter:blur(0.5px);pointer-events:none;z-index:0}
.mfl-circuit-wrap{position:absolute;inset:0;z-index:0;pointer-events:none}
.mfl-circuit{position:absolute;inset:0;width:100%;height:100%}
.mfl-trace{fill:none;stroke:var(--mfl-ink);stroke-opacity:.13;stroke-width:1.4}
.mfl-pulse{fill:none;stroke-width:2.2;stroke-linecap:round;stroke-dasharray:70 930;animation:mfl-run 6s linear infinite}
.mfl-chip rect{fill:var(--mfl-paper);stroke:var(--mfl-ink);stroke-opacity:.16;stroke-width:1.2;transition:fill .3s,stroke .3s,stroke-opacity .3s}
.mfl-chip text{font-size:13px;fill:var(--mfl-ink);fill-opacity:.35;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;transition:fill .3s,fill-opacity .3s}
.mfl-chip.is-hot rect{fill:#fff;stroke:var(--mfl-brand);stroke-opacity:.8}
.mfl-chip.is-hot text{fill:var(--mfl-brand);fill-opacity:1}
.mfl-float-tile{position:absolute;z-index:3;top:34%;right:14%;width:46px;height:46px;display:grid;place-items:center;border-radius:9px;background:linear-gradient(180deg,#fff,#f1ede6);box-shadow:0 1px 0 #fff inset,0 14px 30px -12px rgba(40,20,10,.45),0 0 0 1px rgba(0,0,0,.04);animation:mfl-bob 5s ease-in-out infinite}
.mfl-float-tile span{display:block;transition:transform .6s cubic-bezier(.3,1.6,.4,1)}
.mfl-float-tile:hover{box-shadow:0 1px 0 #fff inset,0 18px 34px -12px rgba(40,20,10,.55),0 0 0 1px color-mix(in srgb,var(--mfl-brand) 40%,transparent)}
.mfl-hero-head{position:relative;z-index:20;pointer-events:auto;display:flex;flex-direction:column;align-items:center;text-align:center;padding:44px 20px 0}
.mfl-backer{display:inline-flex;align-items:center;gap:6px;font-size:13px;color:var(--mfl-ink);margin-bottom:14px}
.mfl-backer b{font-weight:500}
.mfl-backer-mark{display:inline-grid;place-items:center;width:16px;height:16px;border-radius:2px;background:#f26522;color:#fff;font-size:10px;font-weight:700;margin-left:2px}
.mfl-h1{font-size:clamp(28px,3.8vw,52px);line-height:1.12;font-weight:600;letter-spacing:-.03em;color:var(--mfl-ink)}
.mfl-line{display:block}
.mfl-mute{color:var(--mfl-muted)}
.mfl-h1 .mfl-line:nth-child(1){animation-delay:120ms}
.mfl-h1 .mfl-line:nth-child(2){animation-delay:190ms}
.mfl-sub{max-width:640px;margin-top:10px;font-size:13px;line-height:1.45;color:var(--mfl-muted)}
.mfl-cta-row{position:relative;z-index:25;pointer-events:auto;display:flex;flex-wrap:wrap;justify-content:center;gap:10px;margin-top:14px;margin-bottom:12px}
.mfl-in{animation:mfl-rise .9s cubic-bezier(.2,.8,.2,1) backwards}
.mfl-stage{position:relative;flex:1;min-height:0;max-height:360px;display:flex;flex-direction:column;justify-content:center;align-items:center;pointer-events:none}
.mfl-device{position:relative;z-index:5;left:auto;bottom:auto;transform:none;width:clamp(280px,36vw,440px);height:auto;max-height:320px;pointer-events:auto;display:flex;align-items:center;justify-content:center}
.mfl-device-btn{display:block;width:100%;height:100%;border-radius:40%;transform:rotateX(var(--mfl-rx)) rotateY(var(--mfl-ry));transform-style:preserve-3d;transition:transform .5s cubic-bezier(.2,.8,.2,1)}
.mfl-device-btn:active{transform:rotateX(var(--mfl-rx)) rotateY(var(--mfl-ry)) scale(.96)}
.mfl-device-float{display:block;width:100%;height:100%;animation:mfl-float 6s ease-in-out infinite,mfl-drop 1.1s cubic-bezier(.2,.8,.2,1) .2s backwards}
.mfl-device-svg{width:100%;height:100%;filter:drop-shadow(0 30px 30px rgba(40,25,15,.28)) drop-shadow(0 6px 8px rgba(40,25,15,.18))}
.mfl-device-shadow{position:absolute;left:18%;right:18%;bottom:-6%;height:12%;border-radius:50%;background:radial-gradient(closest-side,rgba(40,25,15,.32),transparent);z-index:-1;animation:mfl-shadow 6s ease-in-out infinite}
.mfl-led{animation:mfl-led 1.6s ease-out}
.mfl-callout{position:absolute;left:-34%;top:16%;display:inline-flex;align-items:center;gap:7px;height:28px;padding:0 11px;border-radius:999px;background:rgba(255,255,255,.72);backdrop-filter:blur(8px);box-shadow:0 10px 24px -14px rgba(40,20,10,.5),0 0 0 1px rgba(0,0,0,.04);font-size:11.5px;color:var(--mfl-ink);white-space:nowrap;animation:mfl-bob 7s ease-in-out infinite,mfl-rise .9s cubic-bezier(.2,.8,.2,1) .9s backwards;pointer-events:none}
.mfl-rings{position:absolute;left:50%;bottom:calc(24px + clamp(230px,24vw,330px)/2);width:0;height:0;z-index:0}
.mfl-rings i{position:absolute;left:-160px;top:-160px;width:320px;height:320px;border-radius:50%;border:1px solid color-mix(in srgb,var(--mfl-brand) 45%,transparent);opacity:0;animation:mfl-ring 1.8s cubic-bezier(.2,.8,.2,1)}
.mfl-rings i:nth-child(2){animation-delay:.18s}
.mfl-rings i:nth-child(3){animation-delay:.36s}
.mfl-hero-foot{position:relative;z-index:2;display:flex;justify-content:space-between;align-items:flex-end;gap:20px;padding:0 24px 14px}
.mfl-hero-foot{pointer-events:none}
.mfl-hero-foot>*{pointer-events:auto}
.mfl-info{max-width:380px}
.mfl-info-k{display:flex;align-items:center;gap:6px;font-size:11px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:var(--mfl-muted);margin-bottom:8px}
.mfl-info-t{font-size:clamp(14px,1.25vw,18px);line-height:1.24;letter-spacing:-.02em;color:var(--mfl-ink)}
.mfl-info-t .mfl-line{display:inline}
.mfl-cards{display:flex;gap:8px}

/* ---- hero stat cards ---- */
.mfl-stat{width:250px;padding:10px;border-radius:8px;background:var(--mfl-card);color:var(--mfl-cream);box-shadow:0 30px 50px -28px rgba(0,0,0,.6),inset 0 1px 0 rgba(255,255,255,.06);transition:transform .35s cubic-bezier(.2,.8,.2,1)}
.mfl-stat:hover{transform:translateY(-4px)}
.mfl-stat-top{display:flex;justify-content:space-between;gap:8px}
.mfl-stat-t{font-size:12px;font-weight:500;letter-spacing:-.01em}
.mfl-stat-d{font-size:9.5px;opacity:.55;margin-top:2px}
.mfl-stat-tools{display:flex;align-items:flex-start;gap:4px}
.mfl-ico{display:grid;place-items:center;width:22px;height:22px;border-radius:4px;background:rgba(255,255,255,.08)}
.mfl-stat-amt{font-size:22px;letter-spacing:-.03em;margin-top:12px;animation:mfl-swap .45s cubic-bezier(.2,.8,.2,1)}
.mfl-stat-chg{display:flex;align-items:center;gap:6px;font-size:10px;margin-top:6px;color:color-mix(in srgb,var(--mfl-cream) 60%,transparent)}
.mfl-chg{display:inline-flex;align-items:center;gap:4px;padding:3px 6px;border-radius:3px;background:color-mix(in srgb,var(--mfl-brand) 70%,#fff 6%);color:#fff;font-weight:500}
.mfl-chg.is-down{background:rgba(255,255,255,.1)}
.mfl-stat-split{display:flex;align-items:center;gap:12px;margin-top:12px;padding-top:10px;border-top:1px solid rgba(255,255,255,.07)}
.mfl-donut{flex:none}
.mfl-arc{transition:stroke-width .25s,opacity .25s;cursor:pointer}
.mfl-arc.is-dim{opacity:.35}
.mfl-donut-t{font-size:9px;fill:var(--mfl-cream);font-weight:500}
.mfl-legend{flex:1;min-width:0}
.mfl-legend-h{font-size:9.5px;font-weight:500;margin-bottom:5px}
.mfl-legend ul{display:grid;grid-template-columns:1fr 1fr;gap:4px 8px}
.mfl-legend li{display:grid;grid-template-columns:6px 1fr;column-gap:5px;font-size:8.5px;line-height:1.25;transition:opacity .25s;cursor:default}
.mfl-legend li.is-dim{opacity:.35}
.mfl-legend li i{width:6px;height:6px;border-radius:50%;margin-top:2px}
.mfl-legend li span{opacity:.6;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mfl-legend li b{grid-column:2;font-weight:500}

/* ---- menu select ---- */
.mfl-menu{position:relative}
.mfl-menu-btn{display:inline-flex;align-items:center;gap:6px;height:22px;padding:0 7px;border-radius:4px;font-size:10px;white-space:nowrap;transition:background-color .2s}
.mfl-menu--dark .mfl-menu-btn{background:rgba(255,255,255,.1);color:var(--mfl-cream)}
.mfl-menu--dark .mfl-menu-btn:hover{background:rgba(255,255,255,.18)}
.mfl-menu--light .mfl-menu-btn{height:26px;background:#fff;color:#1c1412;box-shadow:inset 0 0 0 1px rgba(0,0,0,.09);font-size:11px}
.mfl-menu--light .mfl-menu-btn:hover{box-shadow:inset 0 0 0 1px rgba(0,0,0,.2)}
.mfl-chev{transition:transform .25s}
.mfl-chev.is-open{transform:rotate(180deg)}
.mfl-menu-list{position:absolute;right:0;top:calc(100% + 4px);z-index:20;min-width:120px;padding:4px;border-radius:7px;outline:none;animation:mfl-pop .2s cubic-bezier(.2,.8,.2,1);transform-origin:top right}
.mfl-menu--dark .mfl-menu-list{background:#1d0d0b;color:var(--mfl-cream);box-shadow:0 16px 40px -10px rgba(0,0,0,.7),0 0 0 1px rgba(255,255,255,.06)}
.mfl-menu--light .mfl-menu-list{background:#fff;color:#1c1412;box-shadow:0 16px 40px -10px rgba(0,0,0,.35),0 0 0 1px rgba(0,0,0,.06)}
.mfl-menu-opt{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:7px 8px;border-radius:4px;font-size:11px;cursor:pointer}
.mfl-menu--dark .mfl-menu-opt.is-active{background:rgba(255,255,255,.08)}
.mfl-menu--light .mfl-menu-opt.is-active{background:#f2efe9}

/* ---- night ---- */
.mfl-night{display:block;background:var(--mfl-night);color:var(--mfl-cream);padding:0 10px}
.mfl-about{padding:110px 16px 40px;text-align:center}
.mfl-badge{display:inline-flex;align-items:center;gap:6px;height:24px;padding:0 9px;border-radius:3px;background:var(--mfl-cream);color:var(--mfl-night);font-size:10.5px;font-weight:500;text-transform:uppercase;letter-spacing:.02em}
.mfl-badge--light{background:var(--mfl-paper);color:var(--mfl-ink)}
.mfl-statement{max-width:1000px;margin:40px auto 0;font-size:clamp(28px,3.9vw,54px);line-height:1.12;letter-spacing:-.04em;font-weight:400}
.mfl-w{color:color-mix(in srgb,var(--mfl-cream) 32%,transparent);transition:color .5s}
.mfl-w.is-on{color:var(--mfl-cream)}
.mfl-trio{display:inline-flex;vertical-align:-.12em;margin:0 .1em;opacity:.45;transition:opacity .5s}
.mfl-trio.is-on{opacity:1}
.mfl-trio i{display:grid;place-items:center;width:1.05em;height:.95em;border-radius:.2em;font-style:normal;transition:transform .45s cubic-bezier(.3,1.6,.4,1)}
.mfl-trio i:nth-child(1){background:var(--mfl-brand,#0284c7);z-index:3;box-shadow:0 2px 8px rgba(2,132,199,.4)}
.mfl-trio i:nth-child(2){background:var(--mfl-glow,#38bdf8);margin-left:-.28em;z-index:2;box-shadow:0 2px 8px rgba(56,189,248,.35)}
.mfl-trio i:nth-child(3){background:#bae6fd;margin-left:-.28em;z-index:1}
.mfl-trio i svg{width:.5em;height:.5em}
.mfl-trio:hover i:nth-child(1){transform:translate(-.12em,-.06em) rotate(-8deg)}
.mfl-trio:hover i:nth-child(3){transform:translate(.12em,-.06em) rotate(8deg)}
.mfl-stats{display:grid;grid-template-columns:repeat(3,1fr);max-width:1180px;margin:110px auto 0}
.mfl-statnum{padding:16px 12px 22px}
.mfl-statnum+.mfl-statnum{border-left:1px solid color-mix(in srgb,var(--mfl-cream) 22%,transparent)}
.mfl-statnum-v{font-size:clamp(38px,4.2vw,58px);font-weight:300;letter-spacing:-.04em;font-variant-numeric:tabular-nums;line-height:1}
.mfl-statnum-l{margin-top:16px;font-size:14px;color:color-mix(in srgb,var(--mfl-cream) 70%,transparent)}

/* ---- features ---- */
.mfl-feat{position:relative;margin:90px auto 0;max-width:1440px;border-radius:18px;overflow:hidden;isolation:isolate;--mfl-sx:80%;--mfl-sy:10%}
.mfl-feat-bg{position:absolute;inset:0;z-index:-1}
.mfl-satin{position:absolute;inset:0;width:100%;height:100%}
.mfl-satin-a{animation:mfl-satin-a 18s ease-in-out infinite alternate;transform-origin:50% 50%}
.mfl-satin-b{animation:mfl-satin-b 14s ease-in-out infinite alternate;transform-origin:0 50%}
.mfl-satin-c{animation:mfl-satin-b 16s ease-in-out infinite alternate-reverse;transform-origin:100% 50%}
.mfl-feat-light{position:absolute;inset:0;background:radial-gradient(520px circle at var(--mfl-sx) var(--mfl-sy),color-mix(in srgb,var(--mfl-sat-light) 20%,transparent),transparent 60%);mix-blend-mode:screen;transition:background .2s}
.mfl-feat-in{position:relative;display:flex;flex-direction:column;align-items:center;text-align:center;padding:64px 20px 72px}
.mfl-h2{margin-top:22px;font-size:clamp(34px,4.2vw,58px);line-height:1;letter-spacing:-.05em;font-weight:400;color:var(--mfl-cream)}
.mfl-h2 .mfl-mute{color:color-mix(in srgb,var(--mfl-cream) 50%,transparent)}
.mfl-feat-sub{margin-top:16px;font-size:14px;color:color-mix(in srgb,var(--mfl-cream) 72%,transparent);max-width:420px}
.mfl-fcards{display:flex;flex-wrap:wrap;justify-content:center;gap:16px;margin-top:44px;width:100%}
.mfl-fcard{width:min(100%,430px);padding:8px 8px 22px;border-radius:6px;background:var(--mfl-cream);color:var(--mfl-ink);box-shadow:0 40px 70px -40px rgba(0,0,0,.8);transition:transform .45s cubic-bezier(.2,.8,.2,1),box-shadow .45s}
.mfl-fcard:hover{transform:translateY(-6px);box-shadow:0 50px 80px -40px rgba(0,0,0,.9)}
.mfl-fmedia{position:relative;height:300px;border-radius:4px;overflow:hidden;display:grid;place-items:center;isolation:isolate}
.mfl-fmedia .mfl-satin{z-index:-2}
.mfl-flare{position:absolute;z-index:-1;right:-30px;top:-40px;width:160px;height:220px;border-radius:50%;background:radial-gradient(closest-side,color-mix(in srgb,var(--mfl-glow) 85%,transparent),color-mix(in srgb,var(--mfl-glow) 30%,transparent) 50%,transparent);filter:blur(6px);transform:rotate(24deg);animation:mfl-flare 7s ease-in-out infinite alternate}
.mfl-flare--r{left:-40px;right:auto;top:auto;bottom:-60px}
.mfl-fcard h3{margin-top:18px;font-size:16px;font-weight:500;letter-spacing:-.02em}
.mfl-fcard>p{margin:8px auto 0;max-width:330px;font-size:12px;line-height:1.5;color:var(--mfl-muted)}

/* ---- widgets ---- */
.mfl-panel{width:min(calc(100% - 40px),300px);padding:12px;border-radius:7px;background:#fbfaf7;color:#1c1412;text-align:left;box-shadow:0 24px 50px -20px rgba(0,0,0,.6),0 0 0 1px rgba(0,0,0,.04);transition:transform .45s cubic-bezier(.2,.8,.2,1)}
.mfl-fcard:hover .mfl-panel{transform:scale(1.02)}
.mfl-panel-row{display:flex;justify-content:space-between;align-items:flex-start;gap:8px}
.mfl-panel-k{font-size:10px;color:#6e655e}
.mfl-wallet-total{font-size:22px;letter-spacing:-.035em;margin-top:2px;font-variant-numeric:tabular-nums;animation:mfl-swap .45s cubic-bezier(.2,.8,.2,1)}
.mfl-wallet-g{font-size:9px;color:#3d8c56;margin-top:2px}
.mfl-wallet-h{margin-top:12px;font-size:10px;font-weight:500;align-items:center}
.mfl-link{font-size:10px;color:#1c1412;text-decoration:underline;text-underline-offset:2px}
.mfl-cur{display:inline-flex;align-items:center;gap:5px;font-size:10px;font-weight:500}
.mfl-wallet-grid{display:grid;grid-template-columns:1fr 1fr;gap:6px;margin-top:6px}
.mfl-wtile{display:flex;flex-direction:column;gap:3px;padding:8px;border-radius:5px;background:#f2efea;transition:background-color .2s,box-shadow .2s,transform .2s;animation:mfl-swap .4s cubic-bezier(.2,.8,.2,1)}
.mfl-wtile:hover{background:#ebe6df}
.mfl-wtile.is-sel{background:#fff;box-shadow:0 0 0 1px color-mix(in srgb,var(--mfl-brand) 55%,transparent),0 6px 14px -8px rgba(0,0,0,.3)}
.mfl-wtile b{font-size:12.5px;font-weight:500;letter-spacing:-.02em;font-variant-numeric:tabular-nums;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.mfl-wtile em{font-style:normal;font-size:8.5px;color:#3d8c56}
.mfl-wtile em.is-off{color:#9b8f86}
.mfl-flag{border-radius:50%}
.mfl-spend-sum{margin-top:12px;align-items:flex-end}
.mfl-spend-sum b{font-size:20px;font-weight:400;letter-spacing:-.035em;font-variant-numeric:tabular-nums;display:inline-block;animation:mfl-swap .45s cubic-bezier(.2,.8,.2,1)}
.mfl-spend-sum p span{font-size:9px;color:#8a8079;white-space:nowrap}
.mfl-spend-legend{display:flex;gap:8px;font-size:8.5px;color:#6e655e;padding-bottom:4px}
.mfl-spend-legend span{display:inline-flex;align-items:center;gap:3px;white-space:nowrap}
.mfl-spend-legend i{width:7px;height:7px;border-radius:2px;flex:none}
.mfl-meter{height:3px;margin-top:8px;border-radius:3px;background:#ece8e2;overflow:hidden}
.mfl-meter i{display:block;height:100%;background:var(--mfl-brand);border-radius:3px;transition:width .6s cubic-bezier(.2,.8,.2,1)}
.mfl-heat{display:grid;gap:4px;margin-top:10px}
.mfl-heat-col{display:grid;gap:4px;justify-items:center}
.mfl-cell{width:100%;aspect-ratio:1;max-width:22px;border-radius:4px;transition:transform .2s,box-shadow .2s;animation:mfl-cell .5s cubic-bezier(.2,.8,.2,1) backwards}
.mfl-cell:hover,.mfl-cell.is-on{transform:scale(1.18);box-shadow:0 0 0 1.5px #fbfaf7,0 0 0 3px var(--mfl-brand)}
.mfl-root .lv0{background:#ebe8e3}
.mfl-root .lv1{background:#d3cec7}
.mfl-root .lv2{background:#a8a29b}
.mfl-root .lv3{background:#5e5752}
.mfl-root .lv4{background:#221d1b}
.mfl-heat-m{font-size:7.5px;color:#8a8079;margin-top:1px}
.mfl-heat-tip{margin-top:8px;min-height:14px;font-size:9.5px;color:#6e655e}
.mfl-heat-tip b{color:#1c1412;font-weight:500}

/* ---- cta + footer ---- */
.mfl-cta{display:flex;flex-direction:column;align-items:center;text-align:center;padding:130px 16px 110px}
.mfl-cta-mark{display:grid;place-items:center;width:58px;height:58px;border-radius:14px;background:var(--mfl-brand);box-shadow:inset 0 1px 0 rgba(255,255,255,.18),0 20px 40px -18px rgba(0,0,0,.7)}
.mfl-cta-mark svg{animation:mfl-spin 14s linear infinite}
.mfl-cta .mfl-cta-row{margin-top:30px}
.mfl-foot{max-width:1440px;margin:0 auto;padding:56px 16px 22px;border-top:1px solid color-mix(in srgb,var(--mfl-cream) 12%,transparent)}
.mfl-foot-top{display:grid;grid-template-columns:2fr repeat(3,1fr);gap:28px}
.mfl-foot .mfl-logo{color:var(--mfl-cream)}
.mfl-foot .mfl-logo-mark{background:var(--mfl-brand)}
.mfl-foot-brand p{margin-top:14px;max-width:240px;font-size:12.5px;color:color-mix(in srgb,var(--mfl-cream) 55%,transparent)}
.mfl-foot-col p{font-size:12px;color:color-mix(in srgb,var(--mfl-cream) 50%,transparent);margin-bottom:12px}
.mfl-foot-col li+li{margin-top:8px}
.mfl-foot-col a,.mfl-foot-soc a{font-size:14px;color:var(--mfl-cream);background:linear-gradient(currentColor,currentColor) 0 100%/0 1px no-repeat;transition:background-size .3s}
.mfl-foot-col a:hover,.mfl-foot-soc a:hover{background-size:100% 1px}
.mfl-wordmark{margin-top:56px;font-size:clamp(80px,19vw,300px);line-height:.8;letter-spacing:-.07em;font-weight:500;color:color-mix(in srgb,var(--mfl-cream) 8%,transparent);user-select:none;white-space:nowrap}
.mfl-wordmark span{color:color-mix(in srgb,var(--mfl-brand) 70%,transparent)}
.mfl-foot-bot{display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;margin-top:20px;padding-top:16px;border-top:1px solid color-mix(in srgb,var(--mfl-cream) 10%,transparent);font-size:12px;color:color-mix(in srgb,var(--mfl-cream) 50%,transparent)}
.mfl-foot-soc{display:flex;gap:16px}
.mfl-foot-soc a{font-size:12px}

/* ---- dialog ---- */
.mfl-modal{position:fixed;inset:0;z-index:100;display:grid;place-items:center;padding:16px;background:rgba(20,8,6,.55);backdrop-filter:blur(6px);animation:mfl-fade .25s ease}
.mfl-dialog{position:relative;width:min(100%,440px);max-height:calc(100svh - 32px);overflow:auto;padding:28px;border-radius:12px;background:var(--mfl-paper);color:var(--mfl-ink);box-shadow:0 40px 100px -30px rgba(0,0,0,.7);animation:mfl-pop .35s cubic-bezier(.2,.8,.2,1)}
.mfl-dialog h2{margin-top:16px;font-size:28px;line-height:1.05;letter-spacing:-.045em;font-weight:400}
.mfl-dialog-sub{margin-top:8px;font-size:13px;color:var(--mfl-muted)}
.mfl-dialog form{display:flex;flex-direction:column}
.mfl-dialog label{display:flex;flex-direction:column;gap:6px;margin-top:14px;font-size:12px;font-weight:500;flex:1}
.mfl-dialog input,.mfl-dialog select{height:42px;padding:0 12px;border-radius:5px;border:1px solid color-mix(in srgb,var(--mfl-ink) 14%,transparent);background:#fbfaf7;font-size:14px;font-weight:400;outline:none;transition:border-color .2s,box-shadow .2s;width:100%;box-sizing:border-box}
.mfl-dialog input:focus,.mfl-dialog select:focus{border-color:var(--mfl-brand);box-shadow:0 0 0 3px color-mix(in srgb,var(--mfl-brand) 18%,transparent)}
.mfl-dialog input[aria-invalid="true"]{border-color:#c0392b}
.mfl-dialog-row{display:flex;gap:10px}
.mfl-err{min-height:18px;margin:10px 0 6px;font-size:12px;color:#b03a2e}
.mfl-x{position:absolute;right:14px;top:14px;width:30px;height:30px;display:grid;place-items:center;border-radius:50%;transition:background-color .2s}
.mfl-x:hover{background:rgba(0,0,0,.06)}
.mfl-done{display:flex;flex-direction:column;align-items:center;text-align:center;padding:12px 0 4px}
.mfl-done-mark{display:grid;place-items:center;width:64px;height:64px;border-radius:16px;background:var(--mfl-brand);color:#fff;animation:mfl-pop .5s cubic-bezier(.3,1.6,.4,1)}
.mfl-done-mark svg{animation:mfl-spin 6s linear infinite}
.mfl-done p{margin:10px 0 22px;font-size:14px;color:var(--mfl-muted);max-width:320px}

/* ---- reveal ---- */
.mfl-rise{transition:opacity .9s cubic-bezier(.2,.8,.2,1),transform .9s cubic-bezier(.2,.8,.2,1)}
.mfl-rise.mfl-pre{opacity:0;transform:translateY(24px)}

/* ---- keyframes ---- */
@keyframes mfl-rise{from{opacity:0;transform:translateY(18px)}to{opacity:1;transform:none}}
@keyframes mfl-pop{from{opacity:0;transform:scale(.94) translateY(-4px)}to{opacity:1;transform:none}}
@keyframes mfl-fade{from{opacity:0}to{opacity:1}}
@keyframes mfl-swap{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
@keyframes mfl-run{from{stroke-dashoffset:1000}to{stroke-dashoffset:0}}
@keyframes mfl-bob{0%,100%{transform:translateY(0) rotate(-4deg)}50%{transform:translateY(-10px) rotate(3deg)}}
@keyframes mfl-float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-12px) rotate(1.5deg)}}
@keyframes mfl-shadow{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(.86);opacity:.7}}
@keyframes mfl-drop{from{opacity:0;transform:translateY(60px) scale(.9) rotate(-8deg)}to{opacity:1;transform:none}}
@keyframes mfl-led{0%{opacity:.35}25%{opacity:1;filter:brightness(1.6)}100%{opacity:1}}
@keyframes mfl-ring{0%{opacity:.9;transform:scale(.6)}100%{opacity:0;transform:scale(2.4)}}
@keyframes mfl-ping{0%{box-shadow:0 0 0 0 rgba(123,211,137,.6)}80%,100%{box-shadow:0 0 0 7px rgba(123,211,137,0)}}
@keyframes mfl-cell{from{opacity:0;transform:scale(.4)}to{opacity:1;transform:none}}
@keyframes mfl-spin{to{transform:rotate(360deg)}}
@keyframes mfl-flare{from{opacity:.75;transform:rotate(24deg) translateY(0)}to{opacity:1;transform:rotate(34deg) translateY(18px)}}
@keyframes mfl-satin-a{from{transform:translate(0,0) scale(1)}to{transform:translate(-30px,18px) scale(1.06)}}
@keyframes mfl-satin-b{from{transform:translate(0,0) scaleX(1)}to{transform:translate(12px,-10px) scaleX(1.15)}}

/* ---- small screens ---- */
/* ---- small screens ---- */
@media (max-width:980px){
.mfl-hero-foot{flex-direction:column;align-items:stretch;gap:20px;padding:0 20px 28px}
.mfl-info{max-width:100%}
.mfl-cards{display:flex;gap:12px;overflow-x:auto;scroll-snap-type:x mandatory;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding-bottom:6px;margin:0 -20px;padding-left:20px;padding-right:20px}
.mfl-cards::-webkit-scrollbar{display:none}
.mfl-stat{flex:none;scroll-snap-align:start;width:min(280px,84vw)}
.mfl-stage{position:relative;flex:none;min-height:0;padding-top:0;display:flex;flex-direction:column;align-items:center;justify-content:center}
.mfl-device{position:relative;top:auto;bottom:auto;left:auto;transform:none;width:clamp(280px,76vw,400px);height:clamp(280px,76vw,400px);margin:0 auto}
.mfl-rings{position:absolute;left:50%;top:50%;bottom:auto;transform:translate(-50%,-50%)}
.mfl-float-tile{display:none}
.mfl-foot-top{grid-template-columns:1fr 1fr}
.mfl-foot-brand{grid-column:1/-1}
}
@media (max-width:640px){
.mfl-root{padding:0}
.mfl-nav{padding:8px 12px 0}
.mfl-nav-r .mfl-btn--brand{display:none}
.mfl-nav-r .mfl-btn--white{height:36px;padding:0 14px;font-size:12.5px}
.mfl-dropdown{max-width:calc(100vw - 24px);left:0;right:auto}
.mfl-dropdown a{padding:10px 12px;font-size:17px;min-height:44px}
.mfl-hero{border-radius:0}
.mfl-hero-head{padding:76px 16px 8px}
.mfl-h1{font-size:clamp(32px,8.2vw,46px);line-height:1.08;letter-spacing:-.04em}
.mfl-sub{max-width:min(100%,360px);font-size:13.5px;line-height:1.5;margin-top:16px}
.mfl-cta-row{margin-top:18px;margin-bottom:12px;gap:8px;width:100%;max-width:360px}
.mfl-cta-row .mfl-btn{flex:1 1 calc(50% - 6px);min-width:135px;height:42px;font-size:13px;padding:0 14px}
.mfl-stage{padding-top:0;margin:6px auto 0}
.mfl-device{width:min(310px,84vw);height:min(310px,84vw)}
.mfl-hero-foot{padding:8px 14px 24px;gap:16px}
.mfl-info-t{font-size:15px;line-height:1.35}
.mfl-cards{margin:0 -14px;padding-left:14px;padding-right:14px}
.mfl-about{padding:56px 14px 32px}
.mfl-statement{font-size:clamp(21px,5.6vw,34px);line-height:1.28;margin-top:28px}
.mfl-stats{grid-template-columns:1fr;margin-top:44px;gap:12px}
.mfl-statnum{padding:14px 10px;border-top:1px solid color-mix(in srgb,var(--mfl-cream) 18%,transparent)}
.mfl-statnum+.mfl-statnum{border-left:0}
.mfl-statnum-v{font-size:clamp(34px,9.5vw,48px)}
.mfl-statnum-l{margin-top:8px;font-size:12.5px}
.mfl-feat{margin:44px 8px 0;border-radius:14px}
.mfl-feat-in{padding:40px 12px 44px}
.mfl-h2{font-size:clamp(25px,6.8vw,40px);line-height:1.15;margin-top:14px}
.mfl-feat-sub{font-size:13px;line-height:1.45;margin-top:10px}
.mfl-fcards{margin-top:28px;gap:16px}
.mfl-fcard{width:100%;padding:6px 6px 18px;border-radius:12px}
.mfl-fmedia{height:280px;border-radius:8px}
.mfl-panel{width:calc(100% - 16px);max-width:320px;padding:10px}
.mfl-wallet-grid{gap:5px}
.mfl-wtile{padding:6px}
.mfl-cta{padding:64px 14px 50px}
.mfl-cta-row{max-width:360px}
.mfl-cta-row .mfl-btn{width:100%;flex:1 1 100%}
.mfl-foot{padding:38px 14px 20px}
.mfl-foot-top{grid-template-columns:1fr 1fr;gap:20px 12px}
.mfl-foot-brand{grid-column:1/-1;margin-bottom:6px}
.mfl-wordmark{font-size:clamp(52px,17vw,160px);line-height:.85;margin-top:36px;max-width:100%;overflow:hidden}
.mfl-foot-bot{flex-direction:column;align-items:center;text-align:center;gap:12px;margin-top:16px}
.mfl-foot-soc{justify-content:center}
.mfl-dialog-row{flex-direction:column;gap:0}
.mfl-callout{left:-10%;top:-6%}
}

/* ---- reduced motion ---- */
@media (prefers-reduced-motion:reduce){
.mfl-root *,.mfl-root *::before,.mfl-root *::after{animation:none !important;transition:none !important}
.mfl-rise.mfl-pre{opacity:1;transform:none}
}
`;
export const MaroonFintechBase: any = vt;
export default vt;
