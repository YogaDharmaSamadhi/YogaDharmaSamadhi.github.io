/*! onscroll-effect v1.3.1 | (c) 2020 Matthieu Bué <https://twikito.com> | MIT license | https://twikito.github.io/onscroll-effect/ */
(() => {
  const e = new Event("insideViewport"),
    t = new Event("outsideViewport"),
    n =
      document.documentElement.getAttribute(
        "data-onscroll-effect-custom-prefix"
      ) || "scroll";
  let i = !1;
  const s = (e) => "onscrollEffect_" + e,
    o = (e) => void 0 === e,
    a = () => {
      const a = [...document.querySelectorAll(`[data-${n}]`)];
      if (!i && 0 === a.length)
        return (
          (i = !0),
          console.warn(
            `onScroll Effect is not used: there's no element with 'data-${n}' attribute.`
          )
        );
      (i = !1),
        a
          .filter((e) => o(e[s("isRepeating")]) || e[s("isRepeating")])
          .forEach((i) => {
            const a = {
                className: i.dataset[n].split(" ").filter(Boolean),
                repeat: i.dataset[n + "Repeat"],
                offset: Number(i.dataset[n + "Offset"]),
                count: Number(i.dataset[n + "Count"]),
                reverse: i.dataset[n + "Reverse"],
              },
              r = i.getBoundingClientRect(),
              c = "true" === a.reverse,
              d = a.className.length
                ? a.className
                : [c ? "is-inside" : "is-outside"],
              l = "true" === a.repeat,
              p = isNaN(a.offset) ? 0 : a.offset,
              u = isNaN(Number(a.repeat)) ? 1 : Number(a.repeat),
              g = !d.filter((e) => !i.classList.contains(e)).length;
            return (
              (i[s("repeatingCount")] = o(i[s("repeatingCount")])
                ? 0
                : i[s("repeatingCount")]),
              (i[s("isRepeating")] =
                !!o(i[s("isRepeating")]) || i[s("isRepeating")]),
              ((!c && g) || (c && !g)) &&
              r.top + p <= window.innerHeight &&
              r.bottom - p >= 0
                ? (i.classList[c ? "add" : "remove"](...d),
                  (i[s("repeatingCount")] += 1),
                  (i[s("isInsideViewport")] = !0),
                  i.dispatchEvent(e),
                  !l &&
                    i[s("repeatingCount")] >= u &&
                    (i[s("isRepeating")] = !1),
                  !0)
                : ((!c && !g) || (c && g)) &&
                  (0 === i[s("repeatingCount")] ||
                    ((l || i[s("repeatingCount")] < u) &&
                      (r.top > window.innerHeight || r.bottom < 0)))
                ? (i.classList[c ? "remove" : "add"](...d),
                  (i[s("isInsideViewport")] = !1),
                  i.dispatchEvent(t),
                  !1)
                : void 0
            );
          });
    },
    r = () => {
      a(),
        "complete" === document.readyState &&
          document.removeEventListener("readystatechange", r);
    };
  document.addEventListener("readystatechange", r),
    window.addEventListener(
      "scroll",
      ((e, t, n) => {
        let i;
        return function () {
          const s = arguments,
            o = this;
          clearTimeout(i),
            (i = setTimeout(() => {
              (i = null), n || Reflect.apply(e, o, s);
            }, t)),
            n && !i && Reflect.apply(e, o, s);
        };
      })(a, 10),
      !0
    ),
    (window.onScrollEffect = Object.assign(
      () => {
        a(), a();
      },
      {
        isRepeating: (e) => e[s("isRepeating")],
        repeatingCount: (e) => e[s("repeatingCount")],
        isInsideViewport: (e) => e[s("isInsideViewport")],
      }
    ));
})();
