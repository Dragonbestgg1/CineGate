(function () {
  "use strict";
  try {
    if (typeof document < "u") {
      var e = document.createElement("style");
      (e.appendChild(
        document.createTextNode(
          ".busSeatLayoutDesigner-root{--border: #e6e6e6;--text: #ffffff;--text2: #000000;--radius: 10px;--seat: 38px;--gap: 8px;--sleeperHeight: 84px}.busSeatLayoutDesigner-root *{box-sizing:border-box}.busSeatLayoutDesigner-root{width:100%;height:100%;padding:16px;color:var(--text);box-sizing:border-box}.busSeatLayoutDesigner-workspace{display:flex;width:100%;gap:16px}.busSeatLayoutDesigner-canvas{flex:1;min-width:0}.busSeatLayoutDesigner-section{background:var(--panel);padding:16px;border-radius:var(--radius);border:1px solid var(--border);margin-bottom:16px}.busSeatLayoutDesigner-sectionHeader{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;font-size:18px;font-weight:700;color:#444;cursor:pointer}.busSeatLayoutDesigner-sectionTitleDisplay{padding:4px 8px;color:var(--text)}.busSeatLayoutDesigner-delete-section-btn{background:#f44336;color:#fff;padding:6px 10px;font-size:12px;border-radius:8px;cursor:pointer;border:none}.busSeatLayoutDesigner-columns{display:flex;gap:24px;align-items:flex-start;overflow-x:auto;padding-bottom:8px}.busSeatLayoutDesigner-column{background:var(--panel);border:1px solid var(--border);border-radius:12px;padding:10px}.busSeatLayoutDesigner-columnHeader{text-align:center;font-weight:600;margin-bottom:8px;font-size:14px;color:#666}.busSeatLayoutDesigner-seats{display:flex;flex-direction:column;gap:var(--gap);align-items:center}.busSeatLayoutDesigner-seat{position:relative;border-radius:6px;border:1px solid var(--border);background:#f6f6f6;display:flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;cursor:pointer;transition:border-color .15s,background .15s,transform .05s,box-shadow .15s}.busSeatLayoutDesigner-seat:hover{transform:scale(1.06)}.busSeatLayoutDesigner-seat.is-seater{width:var(--seat);height:var(--seat)}.busSeatLayoutDesigner-seat.is-sleeper{width:var(--seat);height:var(--sleeperHeight)}.busSeatLayoutDesigner-seat.is-blank{background:transparent;border-style:dashed;opacity:.6}.busSeatLayoutDesigner-seatLabel{font-size:12px;font-weight:500;color:var(--text2);text-align:center;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;padding:0 1px}.busSeatLayoutDesigner-controls{display:flex;gap:6px;margin-top:10px;justify-content:center}.busSeatLayoutDesigner-btn{color:var(--text2);border:1px solid var(--border);padding:8px 12px;border-radius:8px;cursor:pointer;font-size:13px}.busSeatLayoutDesigner-btn--tiny{font-size:11px;padding:3px 6px;white-space:nowrap}.busSeatLayoutDesigner-addColumnCard{min-width:86px;margin-right:4px;margin-top:1px;height:180px;border:1px dashed var(--border);border-radius:12px;background:transparent;display:grid;place-items:center;cursor:pointer;color:var(--text)}.busSeatLayoutDesigner-inspector{border:1px solid var(--border);border-radius:var(--radius);padding:14px;box-shadow:var(--shadow);position:sticky;top:16px;width:280px;height:300px;overflow-y:auto;flex-shrink:0}.busSeatLayoutDesigner-placeholder{color:var(--muted);margin-top:6px}.busSeatLayoutDesigner-form{display:flex;flex-direction:column;gap:10px;margin-top:8px}.busSeatLayoutDesigner-form label{display:flex;flex-direction:column;gap:6px;font-size:12px;color:var(--muted)}.busSeatLayoutDesigner-form input,.busSeatLayoutDesigner-form select{background:#fff;color:var(--text2);border:1px solid var(--border);border-radius:8px;padding:6px 8px;outline:none}.busSeatLayoutDesigner-checkbox{display:flex;flex-direction:row!important;align-items:center;gap:8px;color:var(--muted)}.busSeatLayoutDesigner-invalid-id{border:1px solid red!important}.busSeatLayoutDesigner-bottomActions{display:flex;justify-content:center;gap:18px;margin-top:24px}.busSeatSelect-wrapper *{box-sizing:border-box}.busSeatSelect-wrapper{display:flex;flex-direction:column;width:100%;height:100%}.busSeatSelect-container{width:100%;height:100%;overflow:auto}.busSeatSelect{display:flex}.busSeatSelect-section-header{display:flex;justify-content:center;margin:10px 5px;font-weight:700;font-size:24px}.busSeatSelect-seat-grid{display:flex;flex-direction:row;gap:10px;justify-content:center}.busSeatSelect-seat-row{display:flex;gap:6px}.busSeatSelect-seat-column{display:flex;flex-direction:column}.busSeatSelect-blankSeat{width:32px;height:32px;background-color:transparent}.busSeatSelect-seat{font-size:14px;color:#000;border-radius:4px;background-color:#eee;cursor:pointer;transition:.2s;display:flex;align-items:center;justify-content:center;padding:0;background-repeat:no-repeat;background-position:center;background-size:cover;user-select:none;-webkit-user-select:none;-ms-user-select:none}.busSeatSelect-seater{width:32px;height:32px}.busSeatSelect-sleeper{width:32px;height:64px}.busSeatSelect-AVAILABLE{background-color:#e0f7fa}.busSeatSelect-AVAILABLE_FOR_MALE{background-color:#4aa2eb}.busSeatSelect-AVAILABLE_FOR_FEMALE{background-color:#d73d71}.busSeatSelect-SELECTED{background-color:#4caf50;color:#000}.busSeatSelect-BOOKED{background-color:#9e9e9e;color:#000}.busSeatSelect-BOOKED_BY_FEMALE{background-color:#ad1457;color:#000;cursor:not-allowed}.busSeatSelect-BOOKED_BY_MALE{background-color:#1565c0;color:#000;cursor:not-allowed}.busSeatSelect-DISABLED{background-color:#9e9e9e;color:#000;cursor:not-allowed}.busSeatSelect-legend-container{display:flex;flex-direction:column;padding:16px 20px;justify-content:center;align-items:center;gap:18px}.busSeatSelect-legend-row{display:flex;flex-wrap:wrap;flex-direction:row;justify-content:center;gap:16px}.busSeatSelect-legend-item{display:flex;flex-direction:row;align-items:center;gap:8px}.busSeatSelect-legend-item>div{background-repeat:no-repeat;background-position:center;background-size:cover;width:24px!important;height:24px!important}.theaterSeatSelect-wrapper *{box-sizing:border-box}.theaterSeatSelect-wrapper{display:flex;flex-direction:column;width:100%;height:100%}.theaterSeatSelect-container{width:100%;height:100%;overflow:auto}.theaterSeatSelect{display:table}.theaterSeatSelect-section-header{display:flex;justify-content:center;margin:10px 5px;font-weight:700;font-size:24px;color:#cecece}.theaterSeatSelect-seat-grid{display:flex;flex-direction:column;gap:10px;justify-content:center}.theaterSeatSelect-seat-row{display:flex;gap:6px}.theaterSeatSelect-seat-column{display:flex}.theaterSeatSelect-seat-group{display:flex;margin:auto}.theaterSeatSelect-blankSeat{width:32px;height:32px;background-color:transparent}.theaterSeatSelect-seat{width:32px;height:32px;font-size:14px;color:#000;border-radius:4px;background-color:#eee;cursor:pointer;transition:.2s;display:flex;align-items:center;justify-content:center;padding:0;background-repeat:no-repeat;background-position:center;background-size:cover;user-select:none;-webkit-user-select:none;-ms-user-select:none}.theaterSeatSelect-AVAILABLE{background-color:#e0f7fa}.theaterSeatSelect-SELECTED{background-color:#4caf50;color:#000}.theaterSeatSelect-BOOKED{background-color:#f44336;color:#000;cursor:not-allowed}.theaterSeatSelect-DISABLED{background-color:#9e9e9e;color:#000;cursor:not-allowed}.theaterSeatSelect-RESERVED{background-color:#ff9800;color:#000;cursor:not-allowed}.theaterSeatSelect-screen-container{display:flex;flex-direction:row;justify-content:center}.theaterSeatSelect-legend-container{display:flex;flex-direction:column;padding:16px 20px;justify-content:center;align-items:center;gap:18px}.theaterSeatSelect-legend-row{display:flex;flex-direction:row;gap:16px}.theaterSeatSelect-legend-item{display:flex;flex-direction:row;align-items:center;gap:8px}.theaterSeatSelect-legend-item>div{background-repeat:no-repeat;background-position:center;background-size:cover;width:24px!important;height:24px!important}.theaterSeatLayoutDesigner-designer-wrapper *{box-sizing:border-box;padding:0;margin:0}.theaterSeatLayoutDesigner-designer-wrapper{display:flex;gap:16px;width:100%}.theaterSeatLayoutDesigner-designer-canvas{flex:1;min-width:0}.theaterSeatLayoutDesigner-inspector{width:280px;height:300px;border:1px solid #ddd;border-radius:8px;padding:12px;overflow-y:auto;flex-shrink:0}.theaterSeatLayoutDesigner-inspector h3{margin:0 0 8px;font-size:16px}.theaterSeatLayoutDesigner-inspector h4{margin:12px 0 6px;font-size:14px}.theaterSeatLayoutDesigner-inspector input[type=text],.theaterSeatLayoutDesigner-inspector input:not([type]){width:100%;border:1px solid #ccc;border-radius:6px;padding:6px 8px;font-size:13px;outline:none}.theaterSeatLayoutDesigner-inspector label{display:block;font-size:12px;margin:8px 0 4px}.theaterSeatLayoutDesigner-section-box{border:1px solid #e6e6e6;border-radius:10px;padding:12px;margin-bottom:16px}.theaterSeatLayoutDesigner-section-header{display:flex;justify-content:center;align-items:center;margin:10px 5px 6px;font-weight:700;font-size:20px;color:#cecece}.theaterSeatLayoutDesigner-clickable-text{cursor:pointer;-webkit-user-select:none;user-select:none}.theaterSeatLayoutDesigner-clickable-text:hover{opacity:.85}.theaterSeatLayoutDesigner-controls{display:flex;gap:8px;justify-content:center;align-items:center;margin-bottom:8px;flex-wrap:wrap}.theaterSeatLayoutDesigner-controls button{border:1px solid #d9d9d9;padding:6px 10px;font-size:12px;border-radius:8px;cursor:pointer;transition:.2s;white-space:nowrap}.theaterSeatLayoutDesigner-delete-section-btn{border:none!important;background:#f44336!important;color:#fff}.theaterSeatLayoutDesigner-seat-grid{display:flex;flex-direction:column;gap:10px;justify-content:center;min-height:32px;overflow:auto;padding-bottom:8px}.theaterSeatLayoutDesigner-seat-row{display:flex;align-items:center;gap:32px}.theaterSeatLayoutDesigner-row-label{position:relative;width:32px;height:32px;flex:0 0 32px;border-radius:4px;background:#f6f6f6;color:#333;font-size:13px;font-weight:600;display:inline-flex;align-items:center;justify-content:center;-webkit-user-select:none;user-select:none;cursor:pointer;transition:transform .15s ease}.theaterSeatLayoutDesigner-row-label:hover{transform:scale(1.04)}.theaterSeatLayoutDesigner-seat-group{display:flex;flex-direction:row;gap:6px}.theaterSeatLayoutDesigner-seat{position:relative;width:32px;height:32px;border-radius:4px;font-size:12px;line-height:32px;color:#000;background:#eee;display:block;cursor:pointer;-webkit-user-select:none;user-select:none;transition:transform .15s ease,box-shadow .15s ease;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%;padding:0 1px}.theaterSeatLayoutDesigner-seat:hover{transform:scale(1.06);box-shadow:0 2px 6px #0000001f}.theaterSeatLayoutDesigner-seat.theaterSeatLayoutDesigner-AVAILABLE{background-color:#e0f7fa;color:#000}.theaterSeatLayoutDesigner-blankSeat{background-color:transparent;border:1px dashed #e5e5e5}.theaterSeatLayoutDesigner-bottom-btn-container{display:flex;justify-content:center;gap:18px}.theaterSeatLayoutDesigner-add-section-box{text-align:center;margin:20px 0}.theaterSeatLayoutDesigner-add-section-box button{border:1px solid #d9d9d9;padding:8px 12px;font-size:13px;border-radius:8px;cursor:pointer;transition:.2s}.theaterSeatLayoutDesigner-inspector label{display:flex;align-items:center;gap:6px}.theaterSeatLayoutDesigner-inspector-invalid-id{border:1px solid red!important}",
        ),
      ),
        document.head.appendChild(e));
    }
  } catch (t) {
    console.error("vite-plugin-css-injected-by-js", t);
  }
})();
import { jsx as t, jsxs as h } from "react/jsx-runtime";
import { useState as Q, useEffect as X, useRef as ee } from "react";
const ie = ({ config: v, onChange: L, customStyles: s = {} }) => {
  const [S, y] = Q(v ?? []),
    [a, m] = Q(null);
  X(() => {
    v && (y(v), L?.(v));
  }, [v]);
  const D = () => {
      const u = S?.flatMap(
        (p) => p?.columns?.flatMap((r) => r?.seats?.map((o) => o?.id)) ?? [],
      );
      let d;
      do
        d = Math.floor(Math.random() * 1e5)
          .toString()
          .padStart(5, "0");
      while (u.includes(d));
      return d;
    },
    R = () => {
      y((u) => {
        const d = [...u, { title: "Section title", columns: [] }];
        return (L?.(d), d);
      });
    },
    M = (u, d) => {
      y((p) => {
        const r = [...p];
        return ((r[u] = { ...r[u], title: d }), L?.(r), r);
      });
    },
    j = (u) => {
      y((d) => {
        let p = [...d];
        return ((p = p.filter((r, o) => o !== u)), L?.(p), p);
      });
    },
    _ = (u) => {
      y((d) => {
        const p = [...d],
          r = p[u],
          o = [...r.columns];
        if (o.length > 0) {
          let e = o[o.length - 1].id;
          o.push({ id: (Number(e) + 1).toString(), seats: [] });
        } else o.push({ id: "1", seats: [] });
        return ((p[u] = { ...r, columns: o }), L?.(p), p);
      });
    },
    $ = (u, d) =>
      y((p) => {
        const r = [...p],
          o = r[u],
          e = o.columns.filter((l, i) => i !== d);
        return ((r[u] = { ...o, columns: e }), L?.(r), r);
      }),
    Y = (u, d, p) => {
      y((r) => {
        const o = [...r],
          e = { ...o[u] },
          l = [...e.columns],
          i = { ...l[d], seats: [...l[d].seats] },
          b = D();
        return (
          i.seats.push({
            id: b,
            type: p,
            isBlank: !1,
          }),
          (l[d] = i),
          (e.columns = l),
          (o[u] = e),
          L?.(o),
          o
        );
      });
    },
    z = (u, d, p, r, o) => {
      (y((e) => {
        const l = [...e],
          i = { ...l[u] },
          b = [...i.columns],
          f = { ...b[d], seats: [...b[d].seats] },
          E = { ...f.seats[p], [r]: o };
        return (
          (f.seats[p] = E),
          (b[d] = f),
          (i.columns = b),
          (l[u] = i),
          L?.(l),
          l
        );
      }),
        a?.type === "seat" &&
          r === "id" &&
          typeof o == "string" &&
          m((e) =>
            !e || e.type !== "seat"
              ? e
              : {
                  ...e,
                  isSeatIdValid: !0,
                  inspectorDisplaySeatId: o,
                },
          ));
    },
    H = (u, d) => {
      y((p) => {
        const r = [...p],
          o = { ...r[u] },
          e = [...o.columns],
          l = { ...e[d], seats: [...e[d].seats] };
        return (
          l.seats.length > 0 && l.seats.pop(),
          (e[d] = l),
          (o.columns = e),
          (r[u] = o),
          L?.(r),
          r
        );
      });
    },
    J = () => {
      const u = JSON.stringify(Object.values(S), null, 2),
        d = new Blob([u], { type: "application/json" }),
        p = URL.createObjectURL(d),
        r = document.createElement("a");
      ((r.href = p),
        (r.download = "bus-layout.json"),
        r.click(),
        URL.revokeObjectURL(p));
    };
  return /* @__PURE__ */ t("div", {
    className: "busSeatLayoutDesigner-root",
    style: s?.root,
    children: /* @__PURE__ */ h("div", {
      className: "busSeatLayoutDesigner-workspace",
      style: s?.workspace,
      children: [
        /* @__PURE__ */ h("div", {
          className: "busSeatLayoutDesigner-canvas",
          style: s?.canvas,
          children: [
            S.map((u, d) =>
              /* @__PURE__ */ h(
                "section",
                {
                  className: "busSeatLayoutDesigner-section",
                  style: s?.section,
                  children: [
                    /* @__PURE__ */ h("header", {
                      className: "busSeatLayoutDesigner-sectionHeader",
                      style: s?.sectionHeader,
                      onClick: () => m({ type: "section", secIndex: d }),
                      children: [
                        /* @__PURE__ */ t("span", {
                          className:
                            "busSeatLayoutDesigner-sectionTitleDisplay",
                          style: s?.sectionTitle,
                          children: u.title,
                        }),
                        /* @__PURE__ */ t("button", {
                          className: "busSeatLayoutDesigner-delete-section-btn",
                          style: {
                            ...s?.controlsButton,
                            ...s?.deleteSectionBtn,
                          },
                          onClick: () => j(d),
                          title: "Remove section",
                          children: "Delete Section",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ h("div", {
                      className: "busSeatLayoutDesigner-columns",
                      style: s?.columns,
                      children: [
                        u.columns.map((p, r) =>
                          /* @__PURE__ */ h(
                            "div",
                            {
                              className: "busSeatLayoutDesigner-column",
                              style: s?.column,
                              children: [
                                /* @__PURE__ */ t("div", {
                                  className: "busSeatLayoutDesigner-seats",
                                  style: s?.seats,
                                  children: p.seats.map((o, e) => {
                                    const l = [
                                        "busSeatLayoutDesigner-seat",
                                        o.isBlank ? "is-blank" : "",
                                        o.type === "sleeper"
                                          ? "is-sleeper"
                                          : "is-seater",
                                      ]
                                        .filter(Boolean)
                                        .join(" "),
                                      i =
                                        a?.type === "seat" &&
                                        a.secIndex === d &&
                                        a.colIndex === r &&
                                        a.seatIndex === e;
                                    return /* @__PURE__ */ t(
                                      "div",
                                      {
                                        className: l,
                                        style: {
                                          ...s.seat,
                                          ...(o.type === "seater"
                                            ? s.seaterSeat
                                            : {}),
                                          ...(o.type === "sleeper"
                                            ? s.sleeperSeat
                                            : {}),
                                          ...(o.isBlank ? s.blankSeat : {}),
                                          ...(i ? s.selectedSeat : {}),
                                        },
                                        onClick: () =>
                                          m({
                                            type: "seat",
                                            secIndex: d,
                                            colIndex: r,
                                            seatIndex: e,
                                            inspectorDisplaySeatId: o?.id,
                                            isSeatIdValid: !0,
                                          }),
                                        title: o.id || "Seat",
                                        children:
                                          !o.isBlank &&
                                          /* @__PURE__ */ t("span", {
                                            className:
                                              "busSeatLayoutDesigner-seatLabel",
                                            children: o.id || "?",
                                          }),
                                      },
                                      e,
                                    );
                                  }),
                                }),
                                /* @__PURE__ */ h("div", {
                                  className: "busSeatLayoutDesigner-controls",
                                  style: s.controls,
                                  children: [
                                    /* @__PURE__ */ t("button", {
                                      className:
                                        "busSeatLayoutDesigner-btn busSeatLayoutDesigner-btn--tiny",
                                      style: s.controlsButton,
                                      onClick: () => Y(d, r, "seater"),
                                      children: "+ Seater",
                                    }),
                                    /* @__PURE__ */ t("button", {
                                      className:
                                        "busSeatLayoutDesigner-btn busSeatLayoutDesigner-btn--tiny",
                                      style: s.controlsButton,
                                      onClick: () => Y(d, r, "sleeper"),
                                      children: "+ Sleeper",
                                    }),
                                  ],
                                }),
                                /* @__PURE__ */ h("div", {
                                  className: "busSeatLayoutDesigner-controls",
                                  style: s.controls,
                                  children: [
                                    /* @__PURE__ */ t("button", {
                                      className:
                                        "busSeatLayoutDesigner-btn busSeatLayoutDesigner-btn--tiny",
                                      style: s.controlsButton,
                                      onClick: () => $(d, r),
                                      children: "Remove Column",
                                    }),
                                    /* @__PURE__ */ t("button", {
                                      className:
                                        "busSeatLayoutDesigner-btn busSeatLayoutDesigner-btn--tiny",
                                      style: s.controlsButton,
                                      onClick: () => H(d, r),
                                      children: "Remove Last Seat",
                                    }),
                                  ],
                                }),
                              ],
                            },
                            p.id,
                          ),
                        ),
                        /* @__PURE__ */ t("button", {
                          className: "busSeatLayoutDesigner-addColumnCard",
                          onClick: () => _(d),
                          title: "Add column",
                          style: s.addColumnCard,
                          children: "+ Column",
                        }),
                      ],
                    }),
                  ],
                },
                d,
              ),
            ),
            /* @__PURE__ */ h("div", {
              className: "busSeatLayoutDesigner-bottomActions",
              children: [
                /* @__PURE__ */ t("button", {
                  className: "busSeatLayoutDesigner-btn",
                  onClick: R,
                  style: s.controlsButton,
                  children: "+ Add Section",
                }),
                /* @__PURE__ */ t("button", {
                  className: "busSeatLayoutDesigner-btn",
                  onClick: J,
                  style: s.controlsButton,
                  children: "Export JSON",
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ h("aside", {
          className: "busSeatLayoutDesigner-inspector",
          style: s?.inspector,
          children: [
            /* @__PURE__ */ t("h3", {
              style: s?.inspectorHeading,
              children: "Inspector",
            }),
            !a &&
              /* @__PURE__ */ t("div", {
                className: "busSeatLayoutDesigner-placeholder",
                style: s?.inspectorPlaceholder,
                children: "Select a section title or seat",
              }),
            a?.type === "seat" &&
              (() => {
                const d =
                  S[a.secIndex].columns[a.colIndex].seats?.[a.seatIndex];
                return /* @__PURE__ */ h("div", {
                  className: "busSeatLayoutDesigner-form",
                  style: s?.inspectorForm,
                  children: [
                    /* @__PURE__ */ t("label", {
                      style: s?.inspectorLabel,
                      children: "Seat ID",
                    }),
                    /* @__PURE__ */ t("input", {
                      style: s?.inspectorInput,
                      value: a?.inspectorDisplaySeatId,
                      onChange: (p) => {
                        const r = p.target.value.trim(),
                          o = S.flatMap((e) =>
                            e.columns.flatMap((l) => l.seats.map((i) => i.id)),
                          );
                        r && !o?.includes(r)
                          ? z(a.secIndex, a.colIndex, a.seatIndex, "id", r)
                          : d?.id !== r
                            ? m((e) =>
                                !e || e.type !== "seat"
                                  ? e
                                  : {
                                      ...e,
                                      inspectorDisplaySeatId: r,
                                      isSeatIdValid: !1,
                                    },
                              )
                            : m((e) =>
                                !e || e.type !== "seat"
                                  ? e
                                  : {
                                      ...e,
                                      inspectorDisplaySeatId: r,
                                      isSeatIdValid: !0,
                                    },
                              );
                      },
                      className:
                        a && a.type === "seat" && a.isSeatIdValid === !1
                          ? "busSeatLayoutDesigner-invalid-id"
                          : "",
                    }),
                    /* @__PURE__ */ t("div", {
                      style: {
                        color: "red",
                        fontSize: "12px",
                        marginTop: "4px",
                        ...s.inspectorErrorMsg,
                      },
                      children:
                        a && a?.type === "seat" && a.isSeatIdValid === !1
                          ? "Invalid or Duplicate Value"
                          : " ",
                    }),
                    /* @__PURE__ */ t("label", {
                      style: s?.inspectorLabel,
                      children: "Type",
                    }),
                    /* @__PURE__ */ h("select", {
                      style: s?.inspectorInput,
                      value: d?.type,
                      onChange: (p) =>
                        z(
                          a.secIndex,
                          a.colIndex,
                          a.seatIndex,
                          "type",
                          p.target.value,
                        ),
                      children: [
                        /* @__PURE__ */ t("option", {
                          value: "seater",
                          children: "Seater",
                        }),
                        /* @__PURE__ */ t("option", {
                          value: "sleeper",
                          children: "Sleeper",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ h("label", {
                      className: "busSeatLayoutDesigner-checkbox",
                      children: [
                        /* @__PURE__ */ t("input", {
                          type: "checkbox",
                          checked: d?.isBlank,
                          onChange: (p) =>
                            z(
                              a.secIndex,
                              a.colIndex,
                              a.seatIndex,
                              "isBlank",
                              p.target.checked,
                            ),
                        }),
                        /* @__PURE__ */ t("span", {
                          style: s?.inspectorLabel,
                          children: "Is Blank",
                        }),
                      ],
                    }),
                  ],
                });
              })(),
            a?.type === "section" &&
              /* @__PURE__ */ h("div", {
                className: "busSeatLayoutDesigner-form",
                style: s?.inspectorForm,
                children: [
                  /* @__PURE__ */ t("label", {
                    style: s?.inspectorLabel,
                    children: "Section Title",
                  }),
                  /* @__PURE__ */ t("input", {
                    style: s?.inspectorInput,
                    value: S[a.secIndex]?.title,
                    onChange: (u) => M(a.secIndex, u.target.value),
                  }),
                ],
              }),
          ],
        }),
      ],
    }),
  });
};
function te(v) {
  const [L, s] = Q({ width: 0, height: 0 });
  return (
    X(() => {
      if (!v.current) return;
      function S() {
        if (v.current) {
          const y = v.current.getBoundingClientRect(),
            a = window.getComputedStyle(v.current),
            m = parseFloat(a.marginTop) || 0,
            D = parseFloat(a.marginBottom) || 0,
            R = parseFloat(a.marginLeft) || 0,
            M = parseFloat(a.marginRight) || 0,
            j = y.width + R + M,
            _ = y.height + m + D;
          s({ width: j, height: _ });
        }
      }
      return (
        S(),
        window.addEventListener("resize", S),
        () => window.removeEventListener("resize", S)
      );
    }, [v]),
    L
  );
}
const B = {
    BOOKED_BY_FEMALE: "BOOKED_BY_FEMALE",
    BOOKED_BY_MALE: "BOOKED_BY_MALE",
    SELECTED: "SELECTED",
    AVAILABLE: "AVAILABLE",
    BOOKED: "BOOKED",
    AVAILABLE_FOR_MALE: "AVAILABLE_FOR_MALE",
    AVAILABLE_FOR_FEMALE: "AVAILABLE_FOR_FEMALE",
  },
  re = (v) => {
    const {
        config: L = [],
        bookedSeats: s = [],
        bookedByFemaleSeats: S = [],
        bookedByMaleSeats: y = [],
        availableForFemaleSeats: a = [],
        availableForMaleSeats: m = [],
        onSelect: D = () => {},
        onUnselect: R = () => {},
        maxSelectedSeats: M = null,
        customSectionWrapperStyle: j = {},
        SectionHeader: _ = null,
        customStyles: $ = [],
        showBookedSeatLabel: Y = !1,
        showSelectedSeatLabel: z = !1,
        CustomLegendComponent: H,
        showDefaultLegend: J = !0,
        legendConfig: u = {
          bookedSeatText: "Booked",
          bookedByFemaleSeatText: "Booked (Female)",
          bookedByMaleSeatText: "Booked (Male)",
          selectedSeatText: "Selected",
          availableSeatText: "Available",
          availableForMaleSeatText: "Available (Male)",
          availableForFemaleSeatText: "Available (Female)",
        },
        seatPriceMap: d = {},
      } = v,
      [p, r] = Q([]),
      o = ee(null),
      { height: e } = te(o),
      l = () =>
        /* @__PURE__ */ t("div", {
          className: "busSeatSelect-legend-container",
          children: ($ && $.length > 0 ? $ : [{}])?.map((c, n) =>
            /* @__PURE__ */ h(
              "div",
              {
                className: "busSeatSelect-legend-row",
                children: [
                  u?.availableSeatText
                    ? /* @__PURE__ */ h("div", {
                        className: "busSeatSelect-legend-item",
                        children: [
                          /* @__PURE__ */ t("div", {
                            className: `busSeatSelect-seat busSeatSelect-${B.AVAILABLE}`,
                            style: { ...c?.seatStyles, ...c?.availableStyles },
                          }),
                          /* @__PURE__ */ t("span", {
                            children: u?.availableSeatText,
                          }),
                        ],
                      })
                    : null,
                  u?.availableForMaleSeatText
                    ? /* @__PURE__ */ h("div", {
                        className: "busSeatSelect-legend-item",
                        children: [
                          /* @__PURE__ */ t("div", {
                            className: `busSeatSelect-seat busSeatSelect-${B.AVAILABLE_FOR_MALE}`,
                            style: {
                              ...c?.seatStyles,
                              ...c?.availableStyles,
                              ...c?.availableForMaleStyles,
                            },
                          }),
                          /* @__PURE__ */ t("span", {
                            children: u?.availableForMaleSeatText,
                          }),
                        ],
                      })
                    : null,
                  u?.availableForFemaleSeatText
                    ? /* @__PURE__ */ h("div", {
                        className: "busSeatSelect-legend-item",
                        children: [
                          /* @__PURE__ */ t("div", {
                            className: `busSeatSelect-seat busSeatSelect-${B.AVAILABLE_FOR_FEMALE}`,
                            style: {
                              ...c?.seatStyles,
                              ...c?.availableStyles,
                              ...c?.availableForFemaleStyles,
                            },
                          }),
                          /* @__PURE__ */ t("span", {
                            children: u?.availableForFemaleSeatText,
                          }),
                        ],
                      })
                    : null,
                  u?.bookedSeatText
                    ? /* @__PURE__ */ h("div", {
                        className: "busSeatSelect-legend-item",
                        children: [
                          /* @__PURE__ */ t("div", {
                            className: `busSeatSelect-seat busSeatSelect-${B.BOOKED}`,
                            style: { ...c?.seatStyles, ...c?.bookedStyles },
                          }),
                          /* @__PURE__ */ t("span", {
                            children: u?.bookedSeatText,
                          }),
                        ],
                      })
                    : null,
                  u?.bookedByMaleSeatText
                    ? /* @__PURE__ */ h("div", {
                        className: "busSeatSelect-legend-item",
                        children: [
                          /* @__PURE__ */ t("div", {
                            className: `busSeatSelect-seat busSeatSelect-${B.BOOKED_BY_MALE}`,
                            style: {
                              ...c?.seatStyles,
                              ...c?.bookedStyles,
                              ...c?.bookedByMaleStyles,
                            },
                          }),
                          /* @__PURE__ */ t("span", {
                            children: u?.bookedByMaleSeatText,
                          }),
                        ],
                      })
                    : null,
                  u?.bookedByFemaleSeatText
                    ? /* @__PURE__ */ h("div", {
                        className: "busSeatSelect-legend-item",
                        children: [
                          /* @__PURE__ */ t("div", {
                            className: `busSeatSelect-seat busSeatSelect-${B.BOOKED_BY_FEMALE}`,
                            style: {
                              ...c?.seatStyles,
                              ...c?.bookedStyles,
                              ...c?.bookedByFemaleStyles,
                            },
                          }),
                          /* @__PURE__ */ t("span", {
                            children: u?.bookedByFemaleSeatText,
                          }),
                        ],
                      })
                    : null,
                  u?.selectedSeatText
                    ? /* @__PURE__ */ h("div", {
                        className: "busSeatSelect-legend-item",
                        children: [
                          /* @__PURE__ */ t("div", {
                            className: `busSeatSelect-seat busSeatSelect-${B.SELECTED}`,
                            style: { ...c?.seatStyles, ...c.selectedStyles },
                          }),
                          /* @__PURE__ */ t("span", {
                            children: u?.selectedSeatText,
                          }),
                        ],
                      })
                    : null,
                ],
              },
              n,
            ),
          ),
        }),
      i = (c) =>
        S?.includes(c)
          ? B.BOOKED_BY_FEMALE
          : y?.includes(c)
            ? B.BOOKED_BY_MALE
            : s?.includes(c)
              ? B.BOOKED
              : p?.includes(c)
                ? B.SELECTED
                : a?.includes(c)
                  ? B.AVAILABLE_FOR_FEMALE
                  : m?.includes(c)
                    ? B.AVAILABLE_FOR_MALE
                    : B.AVAILABLE,
      b = (c) =>
        (S?.includes(c) || y?.includes(c)) && Y ? !0 : !!(p?.includes(c) && z),
      f = (c) => S?.includes(c.id) || y?.includes(c.id),
      E = (c) => {
        if (p.includes(c.id)) {
          const n = p.filter((N) => N !== c.id);
          (r(n), R(c));
          return;
        } else {
          if (M && p.length >= M) return;
          if (!f(c)) {
            const n = [...p, c.id];
            (r(n), D(c));
          }
        }
      };
    return /* @__PURE__ */ h("div", {
      className: "busSeatSelect-wrapper",
      children: [
        /* @__PURE__ */ t("div", {
          className: "busSeatSelect-container",
          children: /* @__PURE__ */ t("div", {
            className: "busSeatSelect",
            style: { gap: "10px", ...j },
            children: L?.map((c, n) => {
              const N = $?.[n] ?? $[$.length - 1] ?? {},
                {
                  rowGap: I = "10px",
                  columnGap: C = "6px",
                  sectionStyle: w = {},
                  headerStyles: T = {},
                  seatStyles: g = {},
                  availableStyles: P = {},
                  availableForMaleStyles: U = {},
                  availableForFemaleStyles: q = {},
                  bookedStyles: K = {},
                  bookedByMaleStyles: G = {},
                  bookedByFemaleStyles: W = {},
                  selectedStyles: x = {},
                  seatPriceStyles: A = {},
                } = N,
                V = {
                  [B.SELECTED]: { ...g, ...x },
                  [B.AVAILABLE]: { ...g, ...P },
                  [B.BOOKED]: { ...g, ...K },
                  [B.BOOKED_BY_MALE]: {
                    ...g,
                    ...K,
                    ...G,
                  },
                  [B.BOOKED_BY_FEMALE]: {
                    ...g,
                    ...K,
                    ...W,
                  },
                  [B.AVAILABLE_FOR_MALE]: {
                    ...g,
                    ...P,
                    ...U,
                  },
                  [B.AVAILABLE_FOR_FEMALE]: {
                    ...g,
                    ...P,
                    ...q,
                  },
                };
              return /* @__PURE__ */ h(
                "div",
                {
                  style: { ...w },
                  children: [
                    _ && /* @__PURE__ */ t(_, {}),
                    c?.title &&
                      /* @__PURE__ */ t("div", {
                        className: "busSeatSelect-section-header",
                        style: { ...T },
                        children: c.title,
                      }),
                    /* @__PURE__ */ t("div", {
                      className: "busSeatSelect-seat-grid",
                      style: { gap: C },
                      children: c?.columns
                        ? c.columns.map((F) =>
                            /* @__PURE__ */ t(
                              "div",
                              {
                                className: "busSeatSelect-seat-column",
                                style: { gap: I },
                                children: F.seats?.map((O) => {
                                  if (O?.isBlank)
                                    return /* @__PURE__ */ h(
                                      "div",
                                      {
                                        style: {
                                          display: "flex",
                                          flexDirection: "column",
                                        },
                                        children: [
                                          /* @__PURE__ */ t(
                                            "div",
                                            {
                                              className: `busSeatSelect-blankSeat busSeatSelect-${O.type}`,
                                              style: {
                                                height: g?.height
                                                  ? O.type === "sleeper"
                                                    ? `calc(${g.height} +  ${e}px  + ${g.height} + ${I})`
                                                    : g.height
                                                  : O.type === "sleeper"
                                                    ? `calc(64px + ${e}px + ${I})`
                                                    : "32px",
                                                width: g?.width || "32px",
                                              },
                                            },
                                            `blank-${F.id}-${O.id}`,
                                          ),
                                          d && Object.keys(d).length > 0
                                            ? /* @__PURE__ */ t("span", {
                                                ref: o,
                                                style: {
                                                  ...A,
                                                  visibility: "hidden",
                                                },
                                                children: '"no"',
                                              })
                                            : null,
                                        ],
                                      },
                                      O.id,
                                    );
                                  const Z = i(O.id);
                                  return /* @__PURE__ */ h(
                                    "div",
                                    {
                                      style: {
                                        display: "flex",
                                        flexDirection: "column",
                                      },
                                      children: [
                                        /* @__PURE__ */ t(
                                          "div",
                                          {
                                            className: `busSeatSelect-seat busSeatSelect-${Z} busSeatSelect-${O.type}`,
                                            style: {
                                              ...V[Z],
                                              height: g?.height
                                                ? O.type === "sleeper"
                                                  ? `calc(${g.height} + ${e}px  +  ${g.height} + ${I})`
                                                  : g.height
                                                : O.type === "sleeper"
                                                  ? `calc(64px + ${e}px + ${I})`
                                                  : "32px",
                                              pointerEvents: [
                                                B.BOOKED,
                                                B.BOOKED_BY_FEMALE,
                                                B.BOOKED_BY_MALE,
                                              ].includes(Z)
                                                ? "none"
                                                : "auto",
                                            },
                                            onClick: () => E(O),
                                            children: b(O?.id) ? O.id : null,
                                          },
                                          O.id,
                                        ),
                                        /* @__PURE__ */ t("span", {
                                          ref: o,
                                          style: A,
                                          children:
                                            d && d[O.id]
                                              ? d[O.id]?.toLocaleString(
                                                  "en-IN",
                                                  {
                                                    style: "currency",
                                                    currency: "INR",
                                                    minimumFractionDigits: 0,
                                                    maximumFractionDigits: 2,
                                                  },
                                                )
                                              : null,
                                        }),
                                      ],
                                    },
                                    O.id,
                                  );
                                }),
                              },
                              F.id,
                            ),
                          )
                        : null,
                    }),
                  ],
                },
                n,
              );
            }),
          }),
        }),
        H
          ? /* @__PURE__ */ t("div", {
              className: "busSeatSelect-legend-container",
              children: /* @__PURE__ */ t(H, {}),
            })
          : J
            ? l()
            : null,
      ],
    });
  },
  ae = {
    1: { width: 300, height: 60 },
    2: { width: 300, height: 100 },
    3: { width: 320, height: 80 },
    4: { width: 300, height: 100 },
    5: { width: 320, height: 80 },
    6: { width: 300, height: 80 },
  };
function se({
  screenVariant: v,
  width: L,
  screenColor: s = "#e0e0e0",
  textColor: S = "#000",
  screenText: y = "",
}) {
  const a = ae[v];
  if (!a) throw new Error("Invalid screenVariant number. Choose 1 to 6.");
  const m = (L * a.height) / a.width;
  switch (v) {
    case 1:
      return `
<svg width="${L}" height="${m}" viewBox="0 0 300 60" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="10" width="260" height="30" rx="6" fill="${s}" stroke="#999" stroke-width="2"/>
  <text x="150" y="30" font-size="14" text-anchor="middle" fill="${S}" font-family="Arial">${y}</text>
</svg>`;
    case 2:
      return `
<svg width="${L}" height="${m}" viewBox="0 0 300 100" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <polygon points="20,70 150,10 280,70" fill="${s}" stroke="#888" stroke-width="2"/>
  <text x="150" y="50" font-size="16" text-anchor="middle" fill="${S}" font-family="Verdana">${y}</text>
</svg>`;
    case 3:
      return `
<svg width="${L}" height="${m}" viewBox="0 0 320 80" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 50 Q160 0 310 50 L310 55 Q160 5 10 55 Z" fill="${s}" stroke="#aaa" stroke-width="2"/>
  <text x="160" y="40" font-size="14" text-anchor="middle" fill="${S}" font-family="sans-serif">${y}</text>
</svg>`;
    case 4:
      return `
<svg width="${L}" height="${m}" viewBox="0 0 300 100" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <rect x="20" y="20" width="260" height="40" rx="10" fill="${s}" stroke="#8e0000" stroke-width="2"/>
  <text x="150" y="47" font-size="16" text-anchor="middle" fill="${S}" font-family="Georgia">${y}</text>
</svg>`;
    case 5:
      return `
<svg width="${L}" height="${m}" viewBox="0 0 320 80" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <ellipse cx="160" cy="40" rx="140" ry="25" fill="${s}" stroke="#555" stroke-width="2"/>
  <text x="160" y="45" font-size="15" text-anchor="middle" fill="${S}" font-family="Tahoma">${y}</text>
</svg>`;
    case 6:
      return `
<svg width="${L}" height="${m}" viewBox="0 0 300 80" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 60 Q150 10 290 60 L290 65 Q150 15 10 65 Z" fill="${s}" stroke="#222" stroke-width="2"/>
  <text x="150" y="45" font-size="16" text-anchor="middle" fill="${S}" font-family="Courier New">${y}</text>
</svg>`;
    default:
      throw new Error("Invalid screenVariant number. Choose 1 to 6.");
  }
}
const k = {
    BOOKED: "BOOKED",
    DISABLED: "DISABLED",
    SELECTED: "SELECTED",
    RESERVED: "RESERVED",
    AVAILABLE: "AVAILABLE",
  },
  oe = ({
    config: v = [],
    bookedSeats: L = [],
    disabledSeats: s = [],
    reservedSeats: S = [],
    onSelect: y = () => {},
    onUnselect: a = () => {},
    showRowNumbers: m = !0,
    maxSelectedSeats: D = null,
    autoSeatExpansion: R = !0,
    customStyles: M = [],
    showBookedSeatLabel: j = !1,
    showDisabledSeatLabel: _ = !1,
    showReservedSeatLabel: $ = !1,
    showBlankSeatLabel: Y = !1,
    showSelectedSeatLabel: z = !0,
    showDefaultScreen: H = !0,
    screenConfig: J = {
      screenVariant: 3,
      width: 600,
      screenColor: "#fff",
    },
    CustomScreenComponent: u,
    CustomLegendComponent: d,
    showDefaultLegend: p = !0,
    legendConfig: r = {
      bookedSeatText: "Booked",
      selectedSeatText: "Selected",
      reservedSeatText: "Reserved",
      disabledSeatText: "Disabled",
      availableSeatText: "Available",
    },
  }) => {
    const [o, e] = Q([]),
      l = (n) => L?.includes(n.id) || s?.includes(n.id) || S?.includes(n.id);
    function i(n) {
      const N = [],
        I = new Set(n);
      for (const C of v)
        for (const w in C.seats) {
          const T = C.seats[w] || [];
          for (const g of T) g.id && I.has(g.id) && N.push(g);
        }
      return N;
    }
    const b = (n, N, I) => {
        const C = I?.seats?.[N];
        if (C)
          if (o.includes(n.id)) {
            const w = o.filter((T) => T !== n.id);
            (e(w), a(n));
            return;
          } else if (R && D)
            if (o.length == D || o.length == 0) {
              o.length === D && i(o)?.forEach((x) => a(x));
              const w = D,
                T = C.findIndex((x) => x.id === n.id);
              if (T === -1) return;
              const g = (x) => {
                  const A = [];
                  for (const V of x) {
                    const F = C[V];
                    if (F && !F.isBlank && !l(F)) A.push(F);
                    else break;
                  }
                  return A;
                },
                P = Array.from({ length: w - 1 }, (x, A) => T + A + 1),
                U = g(P);
              if (U.length === w - 1) {
                const x = [n.id, ...U.map((A) => A.id)];
                (e(x), y(n), U.forEach((A) => y(A)));
                return;
              }
              const q = Array.from({ length: w - 1 }, (x, A) => T - A - 1),
                K = g(q);
              if (K.length === w - 1) {
                const x = [...K.map((A) => A.id), n.id];
                (e(x), y(n), K.forEach((A) => y(A)));
                return;
              }
              let G = [...K, n, ...U];
              G = G.slice(-D);
              const W = [...G.map((x) => x.id)];
              (e(W), G.forEach((x) => y(x)));
            } else {
              if (o.length == D) {
                e([n.id]);
                return;
              }
              const w = [...o, n.id];
              (e(w), y(n));
            }
          else if (!R && D) {
            if (o.length == D) {
              (i(o)?.forEach((T) => a(T)), e([n.id]), y(n));
              return;
            }
            const w = [...o, n.id];
            (e(w), y(n));
          } else {
            const w = [...o, n.id];
            (e(w), y(n));
          }
      },
      f = (n) =>
        L?.includes(n)
          ? k.BOOKED
          : s?.includes(n)
            ? k.DISABLED
            : o?.includes(n)
              ? k.SELECTED
              : S?.includes(n)
                ? k.RESERVED
                : k.AVAILABLE,
      E = (n) =>
        (o?.includes(n) && j) ||
        (S?.includes(n) && $) ||
        (s?.includes(n) && _) ||
        (o?.includes(n) && z)
          ? !0
          : !!Y,
      c = () =>
        /* @__PURE__ */ t("div", {
          className: "theaterSeatSelect-legend-container",
          children: (M && M.length > 0 ? M : [{}])?.map((n, N) =>
            /* @__PURE__ */ h(
              "div",
              {
                className: "theaterSeatSelect-legend-row",
                children: [
                  r?.availableSeatText
                    ? /* @__PURE__ */ h("div", {
                        className: "theaterSeatSelect-legend-item",
                        children: [
                          /* @__PURE__ */ t("div", {
                            className: `theaterSeatSelect-seat theaterSeatSelect-${k.AVAILABLE}`,
                            style: { ...n?.seatStyles, ...n?.availableStyles },
                          }),
                          /* @__PURE__ */ t("span", {
                            children: r?.availableSeatText,
                          }),
                        ],
                      })
                    : null,
                  r?.bookedSeatText
                    ? /* @__PURE__ */ h("div", {
                        className: "theaterSeatSelect-legend-item",
                        children: [
                          /* @__PURE__ */ t("div", {
                            className: `theaterSeatSelect-seat theaterSeatSelect-${k.BOOKED}`,
                            style: { ...n?.seatStyles, ...n.bookedStyles },
                          }),
                          /* @__PURE__ */ t("span", {
                            children: r?.bookedSeatText,
                          }),
                        ],
                      })
                    : null,
                  r?.disabledSeatText
                    ? /* @__PURE__ */ h("div", {
                        className: "theaterSeatSelect-legend-item",
                        children: [
                          /* @__PURE__ */ t("div", {
                            className: `theaterSeatSelect-seat theaterSeatSelect-${k.DISABLED}`,
                            style: { ...n?.seatStyles, ...n.disabledStyles },
                          }),
                          /* @__PURE__ */ t("span", {
                            children: r?.disabledSeatText,
                          }),
                        ],
                      })
                    : null,
                  r?.reservedSeatText
                    ? /* @__PURE__ */ h("div", {
                        className: "theaterSeatSelect-legend-item",
                        children: [
                          /* @__PURE__ */ t("div", {
                            className: `theaterSeatSelect-seat theaterSeatSelect-${k.RESERVED}`,
                            style: { ...n?.seatStyles, ...n.reservedStyles },
                          }),
                          /* @__PURE__ */ t("span", {
                            children: r?.reservedSeatText,
                          }),
                        ],
                      })
                    : null,
                  r?.selectedSeatText
                    ? /* @__PURE__ */ h("div", {
                        className: "theaterSeatSelect-legend-item",
                        children: [
                          /* @__PURE__ */ t("div", {
                            className: `theaterSeatSelect-seat theaterSeatSelect-${k.SELECTED}`,
                            style: { ...n?.seatStyles, ...n.selectedStyles },
                          }),
                          /* @__PURE__ */ t("span", {
                            children: r?.selectedSeatText,
                          }),
                        ],
                      })
                    : null,
                ],
              },
              N,
            ),
          ),
        });
    return /* @__PURE__ */ h("div", {
      className: "theaterSeatSelect-wrapper",
      children: [
        /* @__PURE__ */ t("div", {
          className: "theaterSeatSelect-container",
          children: /* @__PURE__ */ h("div", {
            className: "theaterSeatSelect",
            children: [
              v?.map((n, N) => {
                const I = M?.[N] ?? M[M.length - 1] ?? {},
                  {
                    rowGap: C = "10px",
                    columnGap: w = "6px",
                    headerStyles: T = {},
                    seatStyles: g = {},
                    availableStyles: P = {},
                    bookedStyles: U = {},
                    disabledStyles: q = {},
                    reservedStyles: K = {},
                    selectedStyles: G = {},
                  } = I,
                  W = {
                    [k.SELECTED]: { ...g, ...G },
                    [k.DISABLED]: { ...g, ...q },
                    [k.BOOKED]: { ...g, ...U },
                    [k.RESERVED]: { ...g, ...K },
                    [k.AVAILABLE]: { ...g, ...P },
                  };
                return /* @__PURE__ */ h(
                  "div",
                  {
                    children: [
                      n?.title &&
                        /* @__PURE__ */ t("div", {
                          className: "theaterSeatSelect-section-header",
                          style: { ...T },
                          children: n.title,
                        }),
                      /* @__PURE__ */ t("div", {
                        className: "theaterSeatSelect-seat-grid",
                        style: { gap: C },
                        children: n?.seats
                          ? Object.entries(n.seats).map(([x, A]) =>
                              /* @__PURE__ */ h(
                                "div",
                                {
                                  className: "theaterSeatSelect-seat-row",
                                  style: { gap: w },
                                  children: [
                                    m &&
                                      /* @__PURE__ */ t("span", {
                                        style: {
                                          height: g?.height || "32px",
                                          width: g?.width || "32px",
                                          display: "flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          flexShrink: 0,
                                        },
                                        children: x,
                                      }),
                                    /* @__PURE__ */ h("div", {
                                      className: "theaterSeatSelect-seat-group",
                                      style: { gap: w },
                                      children: [
                                        A?.map((V) => {
                                          if (V?.isBlank)
                                            return /* @__PURE__ */ t(
                                              "div",
                                              {
                                                className:
                                                  "theaterSeatSelect-blankSeat",
                                                style: {
                                                  height: g?.height || "32px",
                                                  width: g?.width || "32px",
                                                },
                                              },
                                              `blank-${x}-${V.id}`,
                                            );
                                          const F = f(V.id);
                                          return /* @__PURE__ */ t(
                                            "div",
                                            {
                                              className: `theaterSeatSelect-seat theaterSeatSelect-${F}`,
                                              style: {
                                                ...W[F],
                                                pointerEvents: [
                                                  k.DISABLED,
                                                  k.RESERVED,
                                                  k.BOOKED,
                                                ].includes(F)
                                                  ? "none"
                                                  : "auto",
                                              },
                                              onClick: () => b(V, x, n),
                                              children: E(V?.id)
                                                ? V.label || V.id
                                                : null,
                                            },
                                            V.id,
                                          );
                                        }),
                                        /* @__PURE__ */ t(
                                          "div",
                                          {
                                            className:
                                              "theaterSeatSelect-blankSeat",
                                            style: {
                                              height: g?.height || "32px",
                                              width: g?.width || "32px",
                                            },
                                          },
                                          `last-blank-${x}`,
                                        ),
                                      ],
                                    }),
                                  ],
                                },
                                x,
                              ),
                            )
                          : null,
                      }),
                    ],
                  },
                  N,
                );
              }),
              u
                ? /* @__PURE__ */ t("div", {
                    className: "theaterSeatSelect-screen-container",
                    children: /* @__PURE__ */ t(u, {}),
                  })
                : H
                  ? /* @__PURE__ */ t("div", {
                      className: "theaterSeatSelect-screen-container",
                      dangerouslySetInnerHTML: { __html: se(J) },
                    })
                  : null,
            ],
          }),
        }),
        d
          ? /* @__PURE__ */ t("div", {
              className: "theaterSeatSelect-legend-container",
              children: /* @__PURE__ */ t(d, {}),
            })
          : p
            ? c()
            : null,
      ],
    });
  },
  ce = ({ config: v, onChange: L, customStyles: s = {} }) => {
    const [S, y] = Q(v || [R()]),
      [a, m] = Q(null);
    X(() => {
      v && (y(v), L?.(v));
    }, [v]);
    const D = (e) => {
      (y(e), L?.(e));
    };
    function R(e = "Section 1") {
      return {
        title: e,
        seats: {},
      };
    }
    const M = () => {
        D([...S, R(`Section ${S.length + 1}`)]);
      },
      j = (e) => {
        const l = [...S];
        (l.splice(e, 1), D(l), m(null));
      },
      _ = () => {
        const e = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return (
          e[Math.floor(Math.random() * e.length)] +
          e[Math.floor(Math.random() * e.length)]
        );
      },
      $ = (e) => {
        if (e.length === 0) return "A";
        const l = e[e.length - 1];
        let i;
        for (
          l.length === 1 && /[A-Y]/.test(l)
            ? (i = String.fromCharCode(l.charCodeAt(0) + 1))
            : (i = _());
          e.includes(i);
        )
          i = _();
        return i;
      },
      Y = (e, l) => {
        let i;
        do {
          const b = Math.floor(Math.random() * 1e3);
          i = e + b.toString().padStart(3, "0");
        } while (l.includes(i));
        return i;
      },
      z = (e) => {
        const l = [...S],
          i = Object.keys(l[e].seats),
          b = $(i),
          f = l[e].seats[i[0]]?.length ?? 1,
          E = S.flatMap((c) =>
            Object.values(c?.seats)?.flatMap(
              (n) => n?.map((N) => N?.id).filter(Boolean) ?? [],
            ),
          );
        ((l[e].seats[b] = Array.from({ length: f }, (c) => {
          const n = Y(b, E);
          return (
            E.push(n),
            {
              id: n,
              label: n,
              isBlank: !1,
            }
          );
        })),
          D(l));
      },
      H = (e, l) => {
        const i = [...S];
        (delete i[e].seats[l], D(i), m(null));
      },
      J = (e) => {
        const l = [...S],
          i = S.flatMap((b) =>
            Object.values(b.seats).flatMap(
              (f) => f?.map((E) => E?.id).filter(Boolean) ?? [],
            ),
          );
        (Object.entries(l[e].seats).forEach(([b, f]) => {
          const E = Y(b, i);
          (i.push(E),
            f?.push({
              id: E,
              label: E,
              isBlank: !1,
            }));
        }),
          D(l));
      },
      u = (e) => {
        const l = [...S];
        (Object.entries(l[e].seats).forEach(([i, b]) => {
          b?.splice(b.length - 1, 1);
        }),
          D(l));
      },
      d = (e, l) => {
        const i = [...S];
        ((i[e].title = l), D(i));
      },
      p = (e, l, i) => {
        const b = [...S],
          f = b[e];
        if (!i || f.seats[i]) return;
        const E = Object.keys(f.seats),
          c = {};
        for (const n of E)
          if (n === l) {
            const N = f.seats[l];
            if (!N) continue;
            c[i] = N.map((I) => ({
              ...I,
              id: I.id,
            }));
          } else c[n] = f.seats[n];
        ((f.seats = c),
          D(b),
          m({
            type: "row",
            secIndex: e,
            rowLabel: i,
            inspectorDisplayLabelValue: i,
            isLabelValid: !0,
          }));
      },
      r = (e, l, i, b, f) => {
        const E = [...S],
          c = E[e].seats[l]?.[i];
        c &&
          ((c[b] = f),
          D(E),
          b === "id" &&
            typeof f == "string" &&
            m((n) => ({
              ...n,
              inspectorDisplayId: f,
              isIdValid: !0,
            })));
      },
      o = () => {
        const e =
            "data:text/json;charset=utf-8," +
            encodeURIComponent(JSON.stringify(S, null, 2)),
          l = document.createElement("a");
        (l.setAttribute("href", e),
          l.setAttribute("download", "seat-layout.json"),
          document.body.appendChild(l),
          l.click(),
          l.remove());
      };
    return /* @__PURE__ */ h("div", {
      className: "theaterSeatLayoutDesigner-designer-wrapper",
      style: s.wrapper,
      children: [
        /* @__PURE__ */ h("div", {
          className: "theaterSeatLayoutDesigner-designer-canvas",
          children: [
            S.map((e, l) =>
              /* @__PURE__ */ h(
                "div",
                {
                  className: "theaterSeatLayoutDesigner-section-box",
                  style: s.sectionBox,
                  children: [
                    /* @__PURE__ */ t("div", {
                      className: "theaterSeatLayoutDesigner-section-header",
                      style: s.sectionHeader,
                      children: /* @__PURE__ */ t("span", {
                        className: "theaterSeatLayoutDesigner-clickable-text",
                        onClick: () => m({ type: "section", secIndex: l }),
                        children: e.title,
                      }),
                    }),
                    /* @__PURE__ */ h("div", {
                      className: "theaterSeatLayoutDesigner-controls",
                      style: s.controlsBox,
                      children: [
                        /* @__PURE__ */ t("button", {
                          style: s?.controlButton,
                          onClick: () => z(l),
                          children: "+ Row",
                        }),
                        /* @__PURE__ */ t("button", {
                          style: s?.controlButton,
                          onClick: () => J(l),
                          children: "+ Column",
                        }),
                        /* @__PURE__ */ t("button", {
                          style: s?.controlButton,
                          onClick: () =>
                            H(l, Object.keys(e.seats).slice(-1)[0]),
                          children: "Delete Last Row",
                        }),
                        /* @__PURE__ */ t("button", {
                          style: s?.controlButton,
                          onClick: () => u(l),
                          children: "Delete Last Column",
                        }),
                        /* @__PURE__ */ t("button", {
                          className:
                            "theaterSeatLayoutDesigner-delete-section-btn",
                          style: {
                            ...s?.controlButton,
                            ...s?.deleteSectionBtn,
                          },
                          onClick: () => j(l),
                          children: "Delete Section",
                        }),
                      ],
                    }),
                    /* @__PURE__ */ t("div", {
                      className: "theaterSeatLayoutDesigner-seat-grid",
                      style: s.seatGrid,
                      children: Object.entries(e.seats).map(([i, b]) =>
                        /* @__PURE__ */ h(
                          "div",
                          {
                            className: "theaterSeatLayoutDesigner-seat-row",
                            style: s.row,
                            children: [
                              /* @__PURE__ */ t("div", {
                                className:
                                  "theaterSeatLayoutDesigner-row-label",
                                onClick: () =>
                                  m({
                                    type: "row",
                                    secIndex: l,
                                    rowLabel: i,
                                    inspectorDisplayLabelValue: i,
                                    isLabelValid: !0,
                                  }),
                                style: s.rowLabel,
                                children: /* @__PURE__ */ t("span", {
                                  children: i,
                                }),
                              }),
                              /* @__PURE__ */ t("div", {
                                className:
                                  "theaterSeatLayoutDesigner-seat-group",
                                style: s.seatGroup,
                                children: b?.map((f, E) =>
                                  /* @__PURE__ */ t(
                                    "div",
                                    {
                                      className: `theaterSeatLayoutDesigner-seat theaterSeatLayoutDesigner-${f.isBlank ? "blankSeat" : "AVAILABLE"}`,
                                      style: {
                                        ...s.seat,
                                        lineHeight: s.seat?.lineHeight,
                                        ...(a?.type === "seat" &&
                                        a?.rowLabel === i &&
                                        a?.seatIndex === E &&
                                        a?.secIndex === l
                                          ? s.selectedSeat
                                          : {}),
                                        ...(f.isBlank ? s.blankSeat : {}),
                                      },
                                      onClick: () =>
                                        m({
                                          type: "seat",
                                          secIndex: l,
                                          rowLabel: i,
                                          seatIndex: E,
                                          inspectorDisplayId: f?.id,
                                          isIdValid: !0,
                                        }),
                                      children: f.label,
                                    },
                                    `${i}-${E}`,
                                  ),
                                ),
                              }),
                            ],
                          },
                          i,
                        ),
                      ),
                    }),
                  ],
                },
                l,
              ),
            ),
            /* @__PURE__ */ h("div", {
              className: "theaterSeatLayoutDesigner-bottom-btn-container",
              children: [
                /* @__PURE__ */ t("div", {
                  className: "theaterSeatLayoutDesigner-add-section-box",
                  children: /* @__PURE__ */ t("button", {
                    onClick: M,
                    style: s?.controlButton,
                    children: "+ Add Section",
                  }),
                }),
                /* @__PURE__ */ t("div", {
                  className: "theaterSeatLayoutDesigner-add-section-box",
                  children: /* @__PURE__ */ t("button", {
                    onClick: o,
                    style: s?.controlButton,
                    children: "Export to JSON",
                  }),
                }),
              ],
            }),
          ],
        }),
        /* @__PURE__ */ h("div", {
          className: "theaterSeatLayoutDesigner-inspector",
          style: s?.inspectorBox,
          children: [
            /* @__PURE__ */ t("h3", {
              style: s?.inspectorHeader,
              children: "Inspector",
            }),
            !a &&
              /* @__PURE__ */ t("p", {
                style: s?.inspectorPlaceholder,
                children: "Select a section title, row label, or seat",
              }),
            a?.type === "section" &&
              /* @__PURE__ */ h("div", {
                children: [
                  /* @__PURE__ */ t("label", {
                    style: s?.inspectorLabel,
                    children: "Section Title",
                  }),
                  /* @__PURE__ */ t("input", {
                    value: S[a.secIndex].title,
                    onChange: (e) => d(a.secIndex, e.target.value),
                    style: s?.inspectorInput,
                  }),
                ],
              }),
            a?.type === "row" &&
              /* @__PURE__ */ h("div", {
                children: [
                  /* @__PURE__ */ t("label", {
                    style: s?.inspectorLabel,
                    children: "Row label",
                  }),
                  /* @__PURE__ */ t("input", {
                    value: a.inspectorDisplayLabelValue,
                    onChange: (e) => {
                      const l = e.target.value.trim();
                      l && l !== a.rowLabel && !S[a.secIndex].seats[l]
                        ? p(a.secIndex, a.rowLabel, e.target.value)
                        : l && l === a.rowLabel
                          ? m((i) =>
                              !i || i.type !== "row"
                                ? i
                                : {
                                    ...i,
                                    inspectorDisplayLabelValue: e.target.value,
                                    isLabelValid: !0,
                                  },
                            )
                          : m((i) =>
                              !i || i.type !== "row"
                                ? i
                                : {
                                    ...i,
                                    inspectorDisplayLabelValue: e.target.value,
                                    isLabelValid: !1,
                                  },
                            );
                    },
                    style: s?.inspectorInput,
                    className:
                      a && a?.type === "row" && a.isLabelValid === !1
                        ? "theaterSeatLayoutDesigner-inspector-invalid-id"
                        : "",
                  }),
                  /* @__PURE__ */ t("div", {
                    style: {
                      color: "red",
                      fontSize: "12px",
                      marginTop: "4px",
                      ...s.inspectorErrorMsg,
                    },
                    children:
                      a && a?.type === "row" && a.isLabelValid === !1
                        ? "Invalid or Duplicate Value"
                        : " ",
                  }),
                ],
              }),
            a?.type === "seat" &&
              /* @__PURE__ */ h("div", {
                children: [
                  /* @__PURE__ */ t("label", {
                    style: s?.inspectorLabel,
                    children: "Seat ID:",
                  }),
                  /* @__PURE__ */ t("input", {
                    value: a.inspectorDisplayId,
                    onChange: (e) => {
                      const l = e.target.value.trim(),
                        i = S.flatMap((b) =>
                          Object.values(b.seats).flatMap(
                            (f) => f?.map((E) => E.id).filter(Boolean) ?? [],
                          ),
                        );
                      l && !i?.includes(l)
                        ? r(a.secIndex, a.rowLabel, a.seatIndex, "id", l)
                        : S[a.secIndex].seats[a.rowLabel]?.[a.seatIndex].id !==
                            l
                          ? m((b) =>
                              !b || b.type !== "seat"
                                ? b
                                : {
                                    ...b,
                                    inspectorDisplayId: l,
                                    isIdValid: !1,
                                  },
                            )
                          : m((b) =>
                              !b || b.type !== "seat"
                                ? b
                                : {
                                    ...b,
                                    inspectorDisplayId: e.target.value,
                                    isIdValid: !0,
                                  },
                            );
                    },
                    style: s?.inspectorInput,
                    className:
                      a && a?.type === "seat" && a.isIdValid === !1
                        ? "theaterSeatLayoutDesigner-inspector-invalid-id"
                        : "",
                  }),
                  /* @__PURE__ */ t("div", {
                    style: {
                      color: "red",
                      fontSize: "12px",
                      marginTop: "4px",
                      ...s.inspectorErrorMsg,
                    },
                    children:
                      a && a?.type === "seat" && a.isIdValid === !1
                        ? "Invalid or Duplicate Value"
                        : " ",
                  }),
                  /* @__PURE__ */ t("label", {
                    style: s?.inspectorLabel,
                    children: "Seat Label:",
                  }),
                  /* @__PURE__ */ t("input", {
                    value:
                      S[a.secIndex].seats[a.rowLabel]?.[a.seatIndex].label ||
                      "",
                    onChange: (e) =>
                      r(
                        a.secIndex,
                        a.rowLabel,
                        a.seatIndex,
                        "label",
                        e.target.value,
                      ),
                    style: s?.inspectorInput,
                  }),
                  /* @__PURE__ */ h("label", {
                    className: "theaterSeatLayoutDesigner-checkbox-label",
                    children: [
                      /* @__PURE__ */ t("input", {
                        type: "checkbox",
                        checked:
                          S[a.secIndex].seats[a.rowLabel]?.[a.seatIndex]
                            .isBlank || !1,
                        onChange: (e) =>
                          r(
                            a.secIndex,
                            a.rowLabel,
                            a.seatIndex,
                            "isBlank",
                            e.target.checked,
                          ),
                      }),
                      /* @__PURE__ */ t("span", {
                        style: s?.inspectorLabel,
                        children: "Is Blank",
                      }),
                    ],
                  }),
                ],
              }),
          ],
        }),
      ],
    });
  };
export {
  ie as BusSeatLayoutDesigner,
  re as BusSeatSelect,
  ce as TheaterSeatLayoutDesigner,
  oe as TheaterSeatSelect,
};
