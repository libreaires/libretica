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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Lower-Kappa", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t8, _r312_t9;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_AS_BASE = _r312_t0.AS_BASE;
        var r312_ALSO_METRICS = _r312_t0.ALSO_METRICS;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_XH = _r312_t1.XH;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_SHook = _r312_t1.SHook;
        var r312_HookX = _r312_t1.HookX;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_CThinB = _r312_t1.CThinB;
        var r312_TINY = _r312_t1.TINY;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g2 = _r312_t2.g2;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_alsoThru = _r312_t2.alsoThru;
        var r312_archv = _r312_t2.archv;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_PalatalHook = _r312_t7.PalatalHook;
        var r312_DfKappasymbol = function () {
            var _r316_t0, _r316_t1;
            return r312_DivFrame(1, 3);
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("grek/kappaSymbol", 1008, new r312_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
            var _r319_t0, _r319_t1;
            var r319_df = r312_DfKappasymbol();
            r319_currentGlyph.include(r319_df.markSet.e());
            var r319_xLeft = r319_df.leftSB + r312_HSwToV(0.25 * r319_df.mvs);
            var r319_xRight = r319_df.rightSB - r312_HSwToV(0.25 * r319_df.mvs);
            var r319_yBottom = 0 + 0.2 * r312_Stroke;
            var r319_yTop = r312_XH - 0.2 * r312_Stroke;
            var r319_deltaX = r312_TINY * (r319_xRight - r319_xLeft);
            var r319_deltaY = r312_TINY * (r319_yTop - r319_yBottom);
            var r319_swTerm = r312_AdviceStroke(3);
            var r319_swTermThin = r319_swTerm * r312_CThinB;
            var r319_kArcX = 0.08;
            var r319_kArcY = 0.3;
            var r319_kSwMid = 0.1;
            r319_currentGlyph.include(r312_dispiro(r312_widths.center(r319_swTerm), r312_flat(r319_xLeft, r319_yBottom), r312_curl(r319_xRight, r319_yTop)));
            r319_currentGlyph.include(r312_dispiro(r312_widths.center(), r312_straight.right.start(r319_df.leftSB, r312_XH - r312_HalfStroke, r312_heading(r312_Rightward)), r312_archv(), r312_g2(r319_df.leftSB + 0.625 * r312_HookX, r312_XH - r312_SHook - r312_HalfStroke, r312_widths.center(r319_df.mvs)), r312_alsoThru.g2(r319_kArcX, r319_kArcY, r312_widths(r1_mix(r319_df.mvs / 2, r319_swTermThin / 2, r319_kSwMid), r1_mix(r319_df.mvs / 2, r319_swTerm / 2, r319_kSwMid))), r312_g2(r319_xLeft + r319_deltaX, r319_yBottom + r319_deltaY, r312_widths(r319_swTermThin / 2, r319_swTerm / 2)), r312_g2(r319_xLeft, r319_yBottom)));
            r319_currentGlyph.include(r312_dispiro(r312_widths.center(), r312_straight.left.start(r319_df.rightSB, 0 + r312_HalfStroke, r312_heading(r312_Leftward)), r312_archv(), r312_g2(r319_df.rightSB - 0.625 * r312_HookX, 0 + r312_SHook + r312_HalfStroke, r312_widths.center(r319_df.mvs)), r312_alsoThru.g2(r319_kArcX, r319_kArcY, r312_widths(r1_mix(r319_df.mvs / 2, r319_swTermThin / 2, r319_kSwMid), r1_mix(r319_df.mvs / 2, r319_swTerm / 2, r319_kSwMid))), r312_g2(r319_xRight - r319_deltaX, r319_yTop - r319_deltaY, r312_widths(r319_swTermThin / 2, r319_swTerm / 2)), r312_g2(r319_xRight, r319_yTop)));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("grek/kaiSymbol", 983, new r312_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
            var _r326_t0, _r326_t1;
            r326_currentGlyph.include(r312_xn$referglyph$1aao("grek/kappaSymbol"), r312_AS_BASE, r312_ALSO_METRICS);
            var r326_df = r312_DfKappasymbol();
            r326_currentGlyph.include(r312_PalatalHook.rExt(r326_df.rightSB, 0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r326_df.mvs), new r312_xn$NamedParameterPair$2Lrc9b("yAttach", r312_Stroke)));
            return void 0;
        }));
    });
    return void 0;
});


