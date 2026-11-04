"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t1 = r1_apply = function () {
    var r307_block, _r307_t4, _r307_t6;
    var _r307_t3 = this;
    var _r307_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r307_t1 = _r307_t0.length;
    var _r307_t2 = 0;
    var _r307_t5 = _r307_t2 < _r307_t1;
    while (_r307_t5) {
        _r307_t6 = (r307_block = _r307_t0[_r307_t2], r307_block(_r307_t3), _r307_t2 = _r307_t2 + 1);
        _r307_t5 = _r307_t2 < _r307_t1;
    }
    return _r307_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r311_xn$Capture_Ext$2Lrc2b) {
    var _r311_t0, _r311_t1;
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Digits-Shared", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_CodeOnum, _r312_t5, _r312_t6;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Translate = _r312_t1.Translate;
        var r312_TanSlope = _r312_t1.TanSlope;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r314_t0, _r314_t1;
            return {
                "OnumHeight": r312_OnumHeight
            };
        });
        var r312_OnumHeight = r312_XH * r312_para.onumZeroHeightRatio;
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r316_t0, _r316_t1;
            return {
                "ShiftDown": r312_ShiftDown
            };
        });
        var r312_ShiftDown = function () {
            var _r317_t0, _r317_t1;
            return r312_Translate((r312_OnumHeight - r312_CAP) * r312_TanSlope, r312_OnumHeight - r312_CAP);
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r319_t0, _r319_t1;
            return {
                "OnumMarks": r312_OnumMarks
            };
        });
        var r312_OnumMarks = {
            "e": r312_MarkSet.OfZone({
                "top": r312_OnumHeight,
                "bot": 0
            }),
            "p": r312_MarkSet.OfZone({
                "top": r312_OnumHeight,
                "bot": r312_OnumHeight - r312_CAP
            })
        };
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "CodeLnum": r312_CodeLnum,
                "CodeOnum": r312_CodeOnum
            };
        });
        var r312_CodeLnum = function (r322_u) {
            var _r322_t0, _r322_t1;
            return r312_para.variantSelector["__defaultDigitForm"] === "oldStyle" ? null : r322_u;
        };
        return r312_CodeOnum = function (r323_u) {
            var _r323_t0, _r323_t1;
            return r312_para.variantSelector["__defaultDigitForm"] === "oldStyle" ? r323_u : null;
        };
    });
    return void 0;
});


