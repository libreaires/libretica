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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Omega", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Upward = _r312_t1.Upward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_O = _r312_t1.O;
        var r312_CThin = _r312_t1.CThin;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_flatside = _r312_t5.flatside;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_CyrlOmegaShape = function (r315_df, r315_top, r315_p, r315__ada, r315__adb) {
            var _r315_t0, _r315_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
                var _r317_t0, _r317_t1;
                var r317_fine = r315_df.mvs * r312_CThin;
                var r317_minHookDepth = Math.min(0.625 * (r315_df.middle - r315_df.leftSB - r312_HSwToV(r315_df.mvs)), (r315_df.rightSB - r315_df.leftSB) / 3);
                var r317_xMidBarLeft = r315_df.middle - r312_HSwToV(r315_df.mvs / 2);
                var r317_xMidBarRight = r315_df.middle + r312_HSwToV(r315_df.mvs / 2);
                var r317_xMidBarCoLeft = r315_df.middle - r312_HSwToV(r317_fine - r315_df.mvs / 2);
                var r317_xMidBarCoRight = r315_df.middle + r312_HSwToV(r317_fine - r315_df.mvs / 2);
                var r317_yMidBar = r315_top * r315_p;
                var r317_xOpenL = Math.max(r1_mix(r315_df.leftSB, r317_xMidBarRight, 0.5), r315_df.leftSB + r312_HSwToV(r315_df.mvs) + r317_minHookDepth);
                var r317_xOpenR = Math.min(r1_mix(r315_df.rightSB, r317_xMidBarLeft, 0.5), r315_df.rightSB - r312_HSwToV(r315_df.mvs) - r317_minHookDepth);
                var r317_ada = r315__ada * (2 / 3) * r315_df.adws;
                var r317_adb = r315__adb * (2 / 3) * r315_df.adws;
                r317_currentGlyph.include(r312_dispiro(r312_widths.lhs(r315_df.mvs), r312_g4.left.start(r312_Arch["adjust-x"].top(r317_xOpenL, new r312_xn$NamedParameterPair$2Lrc9b("sw", r315_df.mvs)), r315_top), r312_archv(8), r312_flatside.ld(r315_df.leftSB, 0, r315_top, r317_ada, r317_adb), r312_arcvh(8), r312_g4(r1_mix(r315_df.leftSB, r317_xMidBarRight, 0.5), r312_O, r312_heading(r312_Rightward)), r312_archv(8), r312_flat(r317_xMidBarCoRight, Math.min(r317_ada, r317_yMidBar - r312_TINY), r312_widths.lhs.heading(r317_fine, r312_Upward)), r312_curl(r317_xMidBarCoRight, r317_yMidBar, r312_heading(r312_Upward))));
                r317_currentGlyph.include(r312_dispiro(r312_widths.rhs(r315_df.mvs), r312_g4.right.start(r312_Arch["adjust-x"].top(r317_xOpenR, new r312_xn$NamedParameterPair$2Lrc9b("sw", r315_df.mvs)), r315_top), r312_archv(8), r312_flatside.rd(r315_df.rightSB, 0, r315_top, r317_ada, r317_adb), r312_arcvh(8), r312_g4(r1_mix(r315_df.rightSB, r317_xMidBarLeft, 0.5), r312_O, r312_heading(r312_Leftward)), r312_archv(8), r312_flat(r317_xMidBarCoLeft, Math.min(r317_adb, r317_yMidBar - r312_TINY), r312_widths.rhs.heading(r317_fine, r312_Upward)), r312_curl(r317_xMidBarCoLeft, r317_yMidBar, r312_heading(r312_Upward))));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/BroadOmega", 42572, new r312_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
            var _r324_t0, _r324_t1;
            var r324_df = r324_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r324_currentGlyph.include(r324_df.markSet.capital());
            r324_currentGlyph.include(r312_CyrlOmegaShape(r324_df, r312_CAP, 0.3, r312_ArchDepthA, r312_ArchDepthB));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/broadOmega", 42573, new r312_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
            var _r330_t0, _r330_t1;
            var r330_df = r330_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r330_currentGlyph.include(r330_df.markSet.e());
            r330_currentGlyph.include(r312_CyrlOmegaShape(r330_df, r312_XH, 0.3, r312_SmallArchDepthA, r312_SmallArchDepthB));
            return void 0;
        }));
    });
    return void 0;
});


