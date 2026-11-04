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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-OU", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_TanSlope = _r312_t1.TanSlope;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_O = _r312_t1.O;
        var r312_AdviceStroke2 = _r312_t1.AdviceStroke2;
        var r312_HBarPos = _r312_t1.HBarPos;
        var r312_CThin = _r312_t1.CThin;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var r312_YSmoothMidR = _r312_t1.YSmoothMidR;
        var r312_YSmoothMidL = _r312_t1.YSmoothMidL;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_end = _r312_t2.end;
        var r312_widths = _r312_t2.widths;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_OShape = _r312_t5.OShape;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_OuShape = function (r315_top, r315_yBar, r315_yGapLT, r315_yGapRT, r315_ada, r315_adb) {
            var _r315_t0, _r315_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
                var _r317_t0, _r317_t1;
                var r317_stroke = r312_AdviceStroke2(2, 3, r315_top - 0);
                var r317_fine = r317_stroke * r312_CThin;
                r317_currentGlyph.include(r312_OShape(r315_yBar + r317_stroke / 2 + r312_O, 0, r312_SB, r312_RightSB, r317_stroke, r315_ada, r315_adb));
                var r317_xGapMT = 0.1 * (r312_Width - 0);
                var r317_xLeft = r1_clamp(r312_SB + r312_HSwToV(1.125 * r317_stroke) + r312_TINY + Math.abs(r312_TanSlope * r317_stroke), r1_mix(r312_SB, r312_RightSB, 0.45), r312_Arch["adjust-x"].top(r312_Middle - r317_xGapMT / 2, new r312_xn$NamedParameterPair$2Lrc9b("sw", r317_stroke)));
                var r317_xRight = r1_clamp(r1_mix(r312_SB, r312_RightSB, 0.55), r312_RightSB - r312_HSwToV(1.125 * r317_stroke) - r312_TINY - Math.abs(r312_TanSlope * r317_stroke), r312_Arch["adjust-x"].top(r312_Middle + r317_xGapMT / 2, new r312_xn$NamedParameterPair$2Lrc9b("sw", r317_stroke)));
                r317_currentGlyph.include(r312_dispiro(r312_widths.lhs(r317_stroke), r312_g4.left.start(r317_xLeft, r315_top - r315_yGapLT), r312_archv(), r312_g4.down.mid(r312_SB, r312_YSmoothMidL(r315_top - r315_yGapLT, r315_yBar - r317_stroke / 2, r315_ada, r315_adb)), r312_Arch.lhs(r315_yBar + r317_stroke / 2 - r317_fine, new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r317_stroke), new r312_xn$NamedParameterPair$2Lrc9b("sw", r317_fine), new r312_xn$NamedParameterPair$2Lrc9b("swAfter", r317_stroke), new r312_xn$NamedParameterPair$2Lrc9b("o", 0)), r312_g4.up.mid(r312_RightSB, r312_YSmoothMidR(r315_top - r315_yGapRT, r315_yBar - r317_stroke / 2, r315_ada, r315_adb), r312_widths.lhs(r317_stroke)), r312_arcvh(), r312_g4.left.end(r317_xRight, r315_top - r315_yGapRT)));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("OU", 546, new r312_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
            var _r328_t0, _r328_t1;
            r328_currentGlyph.include(r312_MarkSet.capital());
            r328_currentGlyph.include(r312_OuShape(r312_CAP, r1_mix(0, r312_CAP, r312_HBarPos), 0.05 * (r312_CAP - 0), 0, r312_ArchDepthA, r312_ArchDepthB));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("smcpOU", 7445, new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
            var _r333_t0, _r333_t1;
            r333_currentGlyph.include(r312_MarkSet.e());
            r333_currentGlyph.include(r312_OuShape(r312_XH, r1_mix(0, r312_XH, r312_HBarPos), 0, 0, r312_ArchDepthA, r312_ArchDepthB));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("ou", 547, new r312_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
            var _r338_t0, _r338_t1;
            r338_currentGlyph.include(r312_MarkSet.b());
            r338_currentGlyph.include(r312_OuShape(r312_Ascender, r1_mix(0, r312_Ascender, r1_mix(r312_HBarPos, r312_XH / r312_CAP, 0.5)), 0, 0, r312_SmallArchDepthA, r312_SmallArchDepthB));
            return void 0;
        }));
    });
    return void 0;
});


