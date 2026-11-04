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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Lower-Blended-Uk", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_Upward = _r312_t1.Upward;
        var r312_Downward = _r312_t1.Downward;
        var r312_OX = _r312_t1.OX;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_ArchDepthAOf = _r312_t1.ArchDepthAOf;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
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
        return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/uk", 42571, new r312_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
            var _r317_t0, _r317_t1;
            r317_currentGlyph.include(r312_MarkSet.b());
            var r317_kLeftX = 0.8;
            var r317_kLeftY = 0.875;
            var r317_kRightX = 1;
            var r317_kRightY = 1;
            var r317_yCross = r1_mix(0, r312_Ascender, 0.45);
            var r317_stress = r312_AdviceStroke(2.75);
            var r317_fine = r312_AdviceStroke(3);
            var r317_smallRingRadius = 0.25 * (r312_RightSB - r312_SB) + 0.5 * r317_fine;
            var r317_subDf = r312_DivFrame((2 * r317_smallRingRadius + 2 * r312_SB) / r312_Width);
            var r317_ada = r312_ArchDepthAOf(r317_smallRingRadius, r317_subDf.width);
            var r317_adb = r312_ArchDepthBOf(r317_smallRingRadius, r317_subDf.width);
            r317_currentGlyph.include(r312_dispiro(r312_g4.down.start(r1_mix(r312_Middle, r312_SB, r317_kLeftX), r1_mix(0, r312_Ascender, r317_kLeftY), r312_widths.lhs.heading(r317_stress, r312_Downward)), r312_g4(r312_Middle, r317_yCross, r312_widths.center(r317_stress)), r312_g4(r312_Middle + r317_smallRingRadius - r312_OX, r317_ada, r312_widths.rhs(r317_fine)), r312_Arch.rhs(0, new r312_xn$NamedParameterPair$2Lrc9b("sw", r317_fine)), r312_g4(r312_Middle - r317_smallRingRadius + r312_OX, r317_adb), r312_g4(r312_Middle, r317_yCross, r312_widths.center(r317_stress)), r312_g4.up.mid(r1_mix(r312_Middle, r312_RightSB, r317_kRightX), r1_mix(0, r312_Ascender, r317_kRightY), r312_widths.lhs.heading(r317_stress, r312_Upward))));
            return void 0;
        }));
    });
    return void 0;
});


