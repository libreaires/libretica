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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Flattened-Open-A", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_XH = _r312_t1.XH;
        var r312_TanSlope = _r312_t1.TanSlope;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Upward = _r312_t1.Upward;
        var r312_Downward = _r312_t1.Downward;
        var r312_OX = _r312_t1.OX;
        var r312_CThin = _r312_t1.CThin;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        return r312_xn$GlyphSaveSink$2Lrc4b.save("flattenedOpena", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
            var _r317_t0, _r317_t1;
            var r317_df = r317_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r317_currentGlyph.include(r317_df.markSet.e());
            var r317_top = r1_mix(0, r312_XH, 0.5);
            var r317_subDf = r317_df.slice(3, 2, r312_OX);
            var r317_ada = Math.min(r317_subDf.smallArchDepthA, r317_top - r312_TINY - r312_HSwToV(Math.abs(r312_TanSlope * r317_df.mvs)));
            var r317_adb = Math.min(r317_subDf.smallArchDepthB, r317_top - r312_TINY - r312_HSwToV(Math.abs(r312_TanSlope * r317_df.mvs)));
            var r317_fine = r317_df.mvs * r312_CThin;
            r317_currentGlyph.include(r312_dispiro(r312_widths.lhs(r317_df.mvs), r312_flat(r317_df.leftSB + r312_OX, r317_top, r312_heading(r312_Downward)), r312_curl(r317_df.leftSB + r312_OX, r317_adb), r312_Arch.lhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r317_df.mvs), new r312_xn$NamedParameterPair$2Lrc9b("swAfter", r317_fine)), r312_flat(r317_df.middle - r312_HSwToV(0.5 * r317_df.mvs - r317_fine), r317_ada, r312_widths.lhs(r317_fine)), r312_curl(r317_df.middle - r312_HSwToV(0.5 * r317_df.mvs - r317_fine), r317_top, r312_heading(r312_Upward))));
            r317_currentGlyph.include(r312_dispiro(r312_widths.lhs(r317_fine), r312_flat(r317_df.middle + r312_HSwToV(0.5 * r317_df.mvs - r317_fine), r317_top, r312_heading(r312_Downward)), r312_curl(r317_df.middle + r312_HSwToV(0.5 * r317_df.mvs - r317_fine), r317_adb), r312_Arch.lhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r317_df.mvs), new r312_xn$NamedParameterPair$2Lrc9b("swBefore", r317_fine)), r312_flat(r317_df.rightSB - r312_OX, r317_ada, r312_widths.lhs(r317_df.mvs)), r312_curl(r317_df.rightSB - r312_OX, r317_top, r312_heading(r312_Upward))));
            return void 0;
        }));
    });
    return void 0;
});


