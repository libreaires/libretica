"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t2 = r1_apply = function () {
    var r308_block, _r308_t4, _r308_t6;
    var _r308_t3 = this;
    var _r308_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r308_t1 = _r308_t0.length;
    var _r308_t2 = 0;
    var _r308_t5 = _r308_t2 < _r308_t1;
    while (_r308_t5) {
        _r308_t6 = (r308_block = _r308_t0[_r308_t2], r308_block(_r308_t3), _r308_t2 = _r308_t2 + 1);
        _r308_t5 = _r308_t2 < _r308_t1;
    }
    return _r308_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r312_xn$Capture_Ext$2Lrc2b) {
    var _r312_t0, _r312_t1;
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Ca", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t7, _r313_t8, _r313_t9, _r313_tag10;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Jut = _r313_t1.Jut;
        var r313_VJut = _r313_t1.VJut;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_VBar = _r313_t5.VBar;
        var r313_flatside = _r313_t5.flatside;
        var r313_Arch = _r313_t5.Arch;
        var r313_xn$sharpcorner$1aao = _r313_t5["sharp-corner"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_barPos = r313_XH / 2;
        var r313_highBarPos = r313_XH;
        var r313_jut = r313_Jut;
        return (function () {
            r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Ca", 1342, new r313_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                var _r320_t0, _r320_t1;
                var r320_df = r320_currentGlyph.include(r313_DivFrame(1));
                r320_currentGlyph.include(r320_df.markSet.capital());
                var r320_yStart = r313_CAP - r313_VJut + r320_df.mvs;
                var r320_xStart = Math.min(r320_df.leftSB, Math.max(r1_mix(r320_df.leftSB, r320_df.rightSB, 0.4) - r313_HSwToV(1.5 * r320_df.mvs) - r313_jut, r320_df.leftSB - r313_jut + r313_HSwToV(0.5 * r320_df.mvs)));
                r320_currentGlyph.include(r313_VBar.l(r320_xStart, r320_yStart - r320_df.mvs, r313_CAP, r320_df.mvs));
                r320_currentGlyph.include(r313_dispiro(r313_widths.rhs.heading(r320_df.mvs, r313_Rightward), r313_flat(r320_xStart, r320_yStart), r313_curl(r320_df.middle, r320_yStart), r313_archv(), r313_flatside.rd(r320_df.rightSB, 0, r320_yStart, r313_ArchDepthA, r313_ArchDepthB, 0), r313_Arch.rhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r320_df.mvs)), r313_flatside.lu(r320_df.leftSB, 0, r320_yStart, r313_ArchDepthA, r313_ArchDepthB, 0), r313_arcvh(), r313_flat(r320_df.rightSB, r313_CAP), r313_curl(r320_df.rightSB + r313_jut - r313_HSwToV(0.5 * r320_df.mvs), r313_CAP)));
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/ca", 1390, new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                var _r328_t0, _r328_t1;
                var r328_df = r328_currentGlyph.include(r313_DivFrame(1));
                r328_currentGlyph.include(r328_df.markSet.b());
                var r328_x1 = r1_mix(r328_df.leftSB, r328_df.rightSB, 0.45);
                var r328_x2 = r1_mix(r328_df.leftSB, r328_df.rightSB, 0.3);
                var r328_y2 = r1_mix(r313_XH, r313_Ascender, 0.5);
                var r328_x4 = r1_mix(r328_df.leftSB, r328_df.rightSB, 0.6);
                var r328_rExt = Math.max(r328_df.rightSB, Math.min(r328_x4 + r313_HSwToV(1.5 * r328_df.mvs) + r313_jut, r328_df.rightSB + r313_jut - r313_HSwToV(0.5 * r328_df.mvs)));
                r328_currentGlyph.include(r313_dispiro(r313_flat(r328_x1, r313_Ascender, r313_widths.center.heading(r328_df.mvs, r313_Downward)), r313_xn$sharpcorner$1aao(r328_x2, r328_y2), r313_curl(r328_x4, r313_XH, r313_widths.center(r328_df.mvs)), r313_flatside.rd(r328_df.rightSB, 0, r313_XH, r313_SmallArchDepthA, r313_SmallArchDepthB, void 0, r313_widths.rhs(r328_df.mvs)), r313_Arch.rhs(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r328_df.mvs)), r313_flatside.lu(r328_df.leftSB, 0, r313_highBarPos, r313_SmallArchDepthA, r313_SmallArchDepthB), r313_arcvh(), r313_flat(r328_df.middle, r313_highBarPos), r313_curl(r328_rExt, r313_highBarPos)));
                return void 0;
            }));
        })();
    });
    return void 0;
});


