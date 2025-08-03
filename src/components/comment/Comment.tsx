"use client";

import { useEffect, useRef } from "react";

export default function Comment() {
  const ref = useRef<HTMLDivElement>(null);

  // https://github.com/giscus/giscus/tree/main/styles/themes
  // 다크모드 적용 시 조건문 추가 필요
  // resolvedTheme === 'dark' ? 'dark' : 'light';
  const theme = "dark";

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const scriptElem = document.createElement("script");
    scriptElem.src = "https://giscus.app/client.js";
    scriptElem.async = true;
    scriptElem.crossOrigin = "anonymous";

    scriptElem.setAttribute("data-repo", "zinnli/zinnli.github.io");
    scriptElem.setAttribute("data-repo-id", "R_kgDOOFdLog");
    scriptElem.setAttribute("data-category", "Comment");
    scriptElem.setAttribute("data-category-id", "DIC_kwDOOFdLos4Ctu0h");
    scriptElem.setAttribute("data-mapping", "pathname");
    scriptElem.setAttribute("data-strict", "0");
    scriptElem.setAttribute("data-reactions-enabled", "1");
    scriptElem.setAttribute("data-emit-metadata", "0");
    scriptElem.setAttribute("data-input-position", "bottom");
    scriptElem.setAttribute("data-theme", "noborder_light");
    scriptElem.setAttribute("data-lang", "ko");

    ref.current.appendChild(scriptElem);
  }, []);

  // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      "iframe.giscus-frame"
    );
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { theme } } },
      "https://giscus.app"
    );
  }, [theme]);

  return <div ref={ref} />;
}
