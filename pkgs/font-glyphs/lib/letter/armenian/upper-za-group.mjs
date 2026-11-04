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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Upper-Za-Group", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11, _r313_t12, _r313_tag13;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Hook = _r313_t1.Hook;
        var r313_VJut = _r313_t1.VJut;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_VBar = _r313_t5.VBar;
        var r313_HookStart = _r313_t5.HookStart;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Armenian-Shared-Shapes"].resolve();
        var r313_ArmHBar = _r313_t7.ArmHBar;
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Za", 1334, new r313_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var _r321_t0, _r321_t1;
                var r321_df = r321_currentGlyph.include(r313_DivFrame(1));
                r321_currentGlyph.include(r321_df.markSet.capital());
                var r321_fine = r321_df.adviceStroke(4);
                r321_currentGlyph.include(r313_dispiro(r313_widths.rhs(r321_df.mvs), r313_g4(r321_df.leftSB, r313_CAP - r313_Hook), r313_HookStart(r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("sw", r321_df.mvs)), r313_flat(r321_df.rightSB, r313_CAP - r313_ArchDepthB), r313_curl(r321_df.rightSB, r321_df.mvs - r321_df.shoulderFine + r313_ArchDepthA), r313_arcvh(), r313_g4(r321_df.leftSB, r321_df.mvs - r321_df.shoulderFine, r313_widths.rhs(r321_df.shoulderFine))));
                r321_currentGlyph.include(r313_VBar.l(r321_df.leftSB, 0, r313_VJut, r321_fine));
                r321_currentGlyph.include(r313_ArmHBar.normal(r321_df).base());
                return void 0;
            }));
        })();
        return (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Jheh", 1355, new r313_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                var _r332_t0, _r332_t1, _r332_t2, _r332_t3, _r332_t4;
                var r332_df = r332_currentGlyph.include(r313_DivFrame(1));
                r332_currentGlyph.include(r332_df.markSet.capital());
                var r332_fine = r332_df.adviceStroke(4);
                var r332_x1 = r332_df.middle + r313_HSwToV(r313_StrokeWidthBlend(0, 0.5) * r332_fine);
                r332_currentGlyph.include(r313_dispiro(r313_widths.rhs(r332_df.mvs), r313_straight.up.start(r332_df.leftSB, r313_CAP - r313_ArchDepthA), r313_Arch.rhs(r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("sw", r332_df.mvs)), r313_flat(r332_df.rightSB, r313_CAP - r313_ArchDepthB), r313_curl(r332_df.rightSB, r332_df.mvs - r332_df.shoulderFine + r313_ArchDepthA), r313_arcvh(), r313_g4(r332_df.leftSB, r332_df.mvs - r332_df.shoulderFine, r313_widths.rhs(r332_df.shoulderFine))));
                r332_currentGlyph.include(r313_intersection(r313_xn$spirooutline$1aao(r313_flat(r332_df.rightSB, r313_CAP), r313_curl(r332_df.rightSB, r332_df.mvs - r332_df.shoulderFine + r313_ArchDepthA), r313_arcvh(), r313_corner(r332_df.leftSB, r332_df.mvs - r332_df.shoulderFine, r313_widths.rhs(r332_df.shoulderFine)), r313_corner(r332_df.leftSB, r313_CAP)), (_r332_t0 = r332_df.leftSB, _r332_t1 = r313_CAP - 1.1 * r313_ArchDepthA, _r332_t2 = 0.55 * r313_ArchDepthB, r313_dispiro(r313_widths.lhs(r332_df.mvs), r313_flat(_r332_t0, r313_CAP - r313_ArchDepthA), r313_curl(_r332_t0, _r332_t1), r313_g4(r1_mix(r332_x1, _r332_t0, 0.5), r1_mix(_r332_t1, _r332_t2, 0.5), r313_widths.center(r332_df.mvs)), r313_flat(r332_x1, _r332_t2, r313_widths.rhs(r332_fine)), r313_curl(r332_x1, 0.5 * r313_ArchDepthB), r313_arcvh(), r313_g4(r332_df.leftSB, r332_df.mvs - r332_df.shoulderFine, r313_widths.rhs(r332_df.shoulderFine))))));
                r332_currentGlyph.include(r313_VBar.l(r332_df.leftSB, 0, r313_VJut, r332_fine));
                r332_currentGlyph.include(r313_ArmHBar.normal(r332_df).base());
                return void 0;
            }));
        })();
    });
    return void 0;
});


