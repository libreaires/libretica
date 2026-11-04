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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Upper-Dza", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11, _r313_t12, _r313_tag13, _r313_t14, _r313_tag15;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_Jut = _r313_t1.Jut;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HookStart = _r313_t5.HookStart;
        var r313_flatside = _r313_t5.flatside;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CurlyTail = _r313_t7.CurlyTail;
        var r313_barPos = r313_XH / 2;
        var r313_highBarPos = r313_XH;
        var r313_jut = r313_Jut;
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Dza", 1345, new r313_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var _r321_t0, _r321_t1;
                var r321_df = r321_currentGlyph.include(r313_DivFrame(1));
                r321_currentGlyph.include(r321_df.markSet.capital());
                r321_currentGlyph.include(r313_dispiro(r313_widths.rhs(r321_df.mvs), r313_g4(r321_df.leftSB, r313_CAP - r313_Hook), r313_HookStart(r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("sw", r321_df.mvs)), r313_flat(r321_df.rightSB - r313_OX, r313_CAP - r313_ArchDepthB), r313_curl(r321_df.rightSB - r313_OX, r313_CAP / 2), r313_CurlyTail.n(r321_df.mvs, 0, r321_df.leftSB, r321_df.rightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yLoopTop", (r313_CAP - r313_Hook) / 2))));
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Sha", 1351, new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                var _r331_t0, _r331_t1;
                var r331_df = r331_currentGlyph.include(r313_DivFrame(1));
                r331_currentGlyph.include(r331_df.markSet.capital());
                var r331_junctY = r1_mix(r313_XH, r313_CAP, 0.5);
                r331_currentGlyph.include(r313_dispiro(r313_widths.rhs(r331_df.mvs), r313_curl(r331_df.leftSB, r313_CAP, r313_heading(r313_Rightward)), r313_flat(r331_df.middle, r331_junctY + r331_df.mvs - r331_df.shoulderFine, r313_heading(r313_Rightward)), r313_curl(r331_df.rightSB, r313_XH + r331_df.mvs, r313_heading(r313_Rightward))));
                r331_currentGlyph.include(r313_dispiro(r313_widths.rhs(r331_df.mvs), r313_g4(r331_df.rightSB, r313_Hook), r313_HookStart(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r331_df.mvs)), r313_flatside.lu(r331_df.leftSB, 0, r331_junctY, r313_ArchDepthA, r313_ArchDepthB), r313_arcvh(), r313_g4(r331_df.middle, r331_junctY, r313_widths.rhs(r331_df.shoulderFine))));
                return void 0;
            }));
        })();
        return (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Cha", 1353, new r313_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
                var _r341_t0, _r341_t1;
                var r341_df = r341_currentGlyph.include(r313_DivFrame(1));
                r341_currentGlyph.include(r341_df.markSet.capital());
                var r341_barTop = r313_Hook * 0.8;
                var r341_barBot = r313_O;
                var r341_junctY = r1_mix(r341_barBot, r341_barTop, 0.5) + r341_df.mvs - r341_df.shoulderFine;
                r341_currentGlyph.include(r313_dispiro(r313_widths.rhs(r341_df.mvs), r313_g4(r341_df.leftSB, r313_CAP - r313_Hook), r313_HookStart(r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("sw", r341_df.mvs)), r313_flatside.rd(r341_df.rightSB, r341_junctY, r313_CAP, r313_ArchDepthA, r313_ArchDepthB), r313_arcvh(), r313_g4(r341_df.middle, r341_junctY, r313_widths.rhs(r341_df.shoulderFine))));
                r341_currentGlyph.include(r313_dispiro(r313_widths.lhs(r341_df.mvs), r313_flat(r1_mix(r341_df.leftSB, r341_df.rightSB, 0.1), r341_barTop, r313_heading(r313_Rightward)), r313_curl(r1_mix(r341_df.leftSB, r341_df.rightSB, 0.9), r341_barBot, r313_heading(r313_Rightward))));
                return void 0;
            }));
        })();
    });
    return void 0;
});


