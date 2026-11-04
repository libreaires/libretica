"use strict";
import * as _s0_t0 from "@iosevka/geometry/point";
import * as _s0_t1 from "@iosevka/geometry/box";
import * as _s0_t2 from "@iosevka/geometry/transform";
import * as _s0_t3 from "@iosevka/util";
import * as _s0_t4 from "../meta/aesthetics.mjs";
var _s0_t5;
export {_s0_t5 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Point = _r1_t8.Point;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
var _r1_t10 = _s0_t2;
var r1_Transform = _r1_t10.Transform;
var _r1_t11 = _s0_t3;
var r1_mix = _r1_t11.mix;
var r1_linreg = _r1_t11.linreg;
var r1_clamp = _r1_t11.clamp;
var r1_fallback = _r1_t11.fallback;
var _r1_t12 = _s0_t4;
var r1_DesignParameters = _r1_t12.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t5 = r1_apply = function () {
    var r311_block, _r311_t4, _r311_t6;
    var _r311_t3 = this;
    var _r311_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r311_t1 = _r311_t0.length;
    var _r311_t2 = 0;
    var _r311_t5 = _r311_t2 < _r311_t1;
    while (_r311_t5) {
        _r311_t6 = (r311_block = _r311_t0[_r311_t2], r311_block(_r311_t3), _r311_t2 = _r311_t2 + 1);
        _r311_t5 = _r311_t2 < _r311_t1;
    }
    return _r311_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r315_xn$Capture_Ext$2Lrc2b) {
    var _r315_t0, _r315_t1;
    r315_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r315_xn$Capture_Ext$2Lrc2b, "Symbol-Currency", function (r316_xn$Capture$2Lrc8, r316_xn$ExportCapture$2Lrc4b) {
        var r316_suffix, r316_serifGrade, _r316_t10, _r316_t13, _r316_t14, _r316_t15, _r316_t16, _r316_tag17, _r316_t18, _r316_tag19;
        var _r316_t0 = r316_xn$Capture$2Lrc8;
        var r316_xn$GlyphSaveSink$2Lrc4b = _r316_t0["$GlyphSaveSink$"];
        var r316_xn$NamedParameterPair$2Lrc9b = _r316_t0["$NamedParameterPair$"];
        var r316_xn$Exec$2Lrc5 = _r316_t0["$Exec$"];
        var r316_para = _r316_t0.para;
        var r316_MarkSet = _r316_t0.MarkSet;
        var r316_DivFrame = _r316_t0.DivFrame;
        var _r316_t1 = r316_xn$Capture$2Lrc8.Metrics;
        var r316_Width = _r316_t1.Width;
        var r316_SB = _r316_t1.SB;
        var r316_CAP = _r316_t1.CAP;
        var r316_XH = _r316_t1.XH;
        var r316_Ascender = _r316_t1.Ascender;
        var r316_SymbolMid = _r316_t1.SymbolMid;
        var r316_HSwToV = _r316_t1.HSwToV;
        var r316_Upward = _r316_t1.Upward;
        var r316_Downward = _r316_t1.Downward;
        var r316_Rightward = _r316_t1.Rightward;
        var r316_OX = _r316_t1.OX;
        var r316_OXHook = _r316_t1.OXHook;
        var r316_Hook = _r316_t1.Hook;
        var r316_AdviceStrokeInSpace = _r316_t1.AdviceStrokeInSpace;
        var r316_AdviceStroke = _r316_t1.AdviceStroke;
        var r316_Stroke = _r316_t1.Stroke;
        var r316_HalfStroke = _r316_t1.HalfStroke;
        var r316_QuarterStroke = _r316_t1.QuarterStroke;
        var r316_OverlayStroke = _r316_t1.OverlayStroke;
        var r316_Jut = _r316_t1.Jut;
        var r316_MidJutSide = _r316_t1.MidJutSide;
        var r316_VJut = _r316_t1.VJut;
        var r316_LongVJut = _r316_t1.LongVJut;
        var r316_VJutStroke = _r316_t1.VJutStroke;
        var r316_SLAB = _r316_t1.SLAB;
        var r316_RightSB = _r316_t1.RightSB;
        var r316_Middle = _r316_t1.Middle;
        var r316_ArchDepthA = _r316_t1.ArchDepthA;
        var _r316_t2 = r316_xn$Capture$2Lrc8.SpiroFns;
        var r316_g4 = _r316_t2.g4;
        var r316_flat = _r316_t2.flat;
        var r316_curl = _r316_t2.curl;
        var r316_end = _r316_t2.end;
        var r316_straight = _r316_t2.straight;
        var r316_widths = _r316_t2.widths;
        var r316_heading = _r316_t2.heading;
        var r316_archv = _r316_t2.archv;
        var r316_arcvh = _r316_t2.arcvh;
        var r316_dispiro = _r316_t2.dispiro;
        var _r316_t3 = r316_xn$Capture$2Lrc8.SpiroFns;
        var r316_xn$decor$0cao = _r316_t3["decor@"];
        var r316_xn$decor$0cao1 = _r316_t3["decor@@"];
        var r316_xn$decor$0cao11 = _r316_t3["decor@@@"];
        var _r316_t4 = r316_xn$Capture$2Lrc8.BooleFns;
        var r316_union = _r316_t4.union;
        var _r316_t5 = r316_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r316_OShape = _r316_t5.OShape;
        var r316_UShape = _r316_t5.UShape;
        var r316_HSerif = _r316_t5.HSerif;
        var r316_VSerif = _r316_t5.VSerif;
        var r316_HBar = _r316_t5.HBar;
        var r316_VBar = _r316_t5.VBar;
        var r316_HookStart = _r316_t5.HookStart;
        var r316_flatside = _r316_t5.flatside;
        var r316_FlipAround = _r316_t5.FlipAround;
        var _r316_t6 = r316_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r316_xn$selectvariant$7Hrq = _r316_t6["select-variant"];
        var _r316_t7 = r316_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r316_LetterBarOverlay = _r316_t7.LetterBarOverlay;
        var r316_LetterObliqueBarOverlay = _r316_t7.LetterObliqueBarOverlay;
        r316_xn$GlyphSaveSink$2Lrc4b.save("currency", 164, new r316_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
            var r322_angle, _r322_t2, _r322_t3;
            var r322_sw = r316_AdviceStroke(3.5);
            var r322_radius = (r316_RightSB - r316_SB) / 2;
            r322_currentGlyph.include(r316_OShape(r316_SymbolMid + r322_radius * 0.9, r316_SymbolMid - r322_radius * 0.9, r316_Middle - r322_radius * 0.9, r316_Middle + r322_radius * 0.9, r322_sw));
            var _r322_t0 = 0;
            var _r322_t1 = 4;
            var r322_j = _r322_t0;
            while (r322_j < _r322_t1) {
                r322_angle = Math.PI * (r322_j / 2 + 0.25);
                r322_currentGlyph.include(r316_dispiro(r316_widths.center(r322_sw), r316_flat(r316_Middle + r322_radius * 0.87 * Math.cos(r322_angle), r316_SymbolMid + r322_radius * 0.87 * Math.sin(r322_angle)), r316_curl(r316_Middle + r322_radius * Math.SQRT2 * Math.cos(r322_angle), r316_SymbolMid + r322_radius * Math.SQRT2 * Math.sin(r322_angle))));
                r322_j = r322_j + 1;
            }
            return void 0;
        }));
        var r316_SterlingConfig = {
            "serifless": [0],
            "motionSerifed": [1]
        };
        var _r316_t8 = Object.entries(r316_SterlingConfig)[Symbol.iterator]();
        var _r316_t9 = void 0;
        while (!(_r316_t9 = _r316_t8.next()).done) {
            _r316_t10 = _r316_t9.value;
            r316_suffix = _r316_t10[0];
            r316_serifGrade = _r316_t10[1][0];
            _r316_t10[1];
            (function () {
                var r328_xBarLeft = r1_mix(r316_SB, r316_RightSB, 0.2) - r316_Stroke * 0.1;
                var r328_BaseShape = function () {
                    var _r329_t0, _r329_t1;
                    return new r316_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                        var _r331_t0, _r331_t1;
                        var r331_hookEndX = Math.max(r328_xBarLeft + r316_HSwToV(2.25 * r316_Stroke), r1_mix(r316_SB, r316_RightSB, 0.95));
                        r331_currentGlyph.include(r316_union(r316_dispiro(r316_widths.lhs(), r316_g4(r331_hookEndX, r316_CAP - r316_Hook * 0.85), r316_HookStart(r316_CAP), r316_flat(r328_xBarLeft, r316_CAP - r316_ArchDepthA * 0.75), r316_curl(r328_xBarLeft, r1_mix(r316_Stroke, r316_CAP, 0.3)), r316_g4(r316_SB, r316_Stroke)), r316_HBar.b(r316_SB, r316_RightSB, 0)));
                        if (r316_serifGrade) r331_currentGlyph.include(r316_VSerif.ur(r316_RightSB, 0, r316_VJut));
                        return void 0;
                    });
                };
                r316_xn$GlyphSaveSink$2Lrc4b.save("currency/sterlingSign." + r316_suffix, null, new r316_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                    var _r336_t0, _r336_t1;
                    r336_currentGlyph.setWidth(r316_Width);
                    r336_currentGlyph.include(r328_BaseShape());
                    r336_currentGlyph.include(r316_LetterBarOverlay.l(r328_xBarLeft, r316_CAP * 0.5));
                    return void 0;
                }));
                return r316_xn$GlyphSaveSink$2Lrc4b.save("currency/liraSymbolSign." + r316_suffix, null, new r316_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                    var _r342_t0, _r342_t1;
                    r342_currentGlyph.setWidth(r316_Width);
                    r342_currentGlyph.include(r328_BaseShape());
                    r342_currentGlyph.include(r316_LetterBarOverlay.l(r328_xBarLeft, r316_CAP * 0.37));
                    r342_currentGlyph.include(r316_LetterBarOverlay.l(r328_xBarLeft, r316_CAP * 0.6 - r316_OverlayStroke * 0.25));
                    return void 0;
                }));
            })();
        }
        r316_xn$selectvariant$7Hrq("currency/sterlingSign", 163);
        r316_xn$selectvariant$7Hrq("currency/liraSymbolSign", 8356, new r316_xn$NamedParameterPair$2Lrc9b("follow", "currency/sterlingSign"));
        var r316_TurkLiraConfig = {
            "serifless": [0],
            "serifed": [1]
        };
        var _r316_t11 = Object.entries(r316_TurkLiraConfig)[Symbol.iterator]();
        var _r316_t12 = void 0;
        while (!(_r316_t12 = _r316_t11.next()).done) {
            _r316_t13 = _r316_t12.value;
            r316_suffix = _r316_t13[0];
            r316_serifGrade = _r316_t13[1][0];
            _r316_t13[1];
            (function () {
                return r316_xn$GlyphSaveSink$2Lrc4b.save("currency/turkishLiraSign." + r316_suffix, null, new r316_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                    var _r353_t0, _r353_t1;
                    r353_currentGlyph.setWidth(r316_Width);
                    r353_currentGlyph.include(r316_MarkSet.capital());
                    var r353_xBarLeft = r316_SB * 1.5;
                    var r353_xRight = r316_RightSB - 0.75 * r316_OX;
                    r353_currentGlyph.include(r316_union(r316_dispiro(r316_widths.lhs(), r316_flat(r353_xBarLeft, 0, r316_heading(r316_Rightward)), r316_curl(r1_mix(r353_xBarLeft, r353_xRight, 0.5), 0), r316_archv(), r316_straight.up.end(r353_xRight - r316_OXHook, r316_Hook, r316_heading(r316_Upward))), r316_VBar.l(r353_xBarLeft, 0, r316_CAP)));
                    r353_currentGlyph.include(r316_LetterObliqueBarOverlay.l(r353_xBarLeft, r316_CAP * 0.37));
                    r353_currentGlyph.include(r316_LetterObliqueBarOverlay.l(r353_xBarLeft, r316_CAP * 0.6 - r316_OverlayStroke * 0.25));
                    if (r316_serifGrade) {
                        r353_currentGlyph.include(r316_HSerif.lb(r353_xBarLeft + r316_HSwToV(r316_HalfStroke), 0, r316_Jut));
                        r353_currentGlyph.include(r316_HSerif.lt(r353_xBarLeft + r316_HSwToV(r316_HalfStroke), r316_CAP, r316_Jut));
                        r353_currentGlyph.include(r316_HSerif.rt(r353_xBarLeft + r316_HSwToV(r316_HalfStroke), r316_CAP, r316_MidJutSide));
                    }
                    return void 0;
                }));
            })();
        }
        r316_xn$selectvariant$7Hrq("currency/turkishLiraSign", 8378);
        r316_xn$GlyphSaveSink$2Lrc4b.save("currency/sheqelSign", 8362, new r316_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
            var _r364_t0, _r364_t1, _r364_t2, _r364_t3;
            var r364_df = r364_currentGlyph.include(r316_DivFrame(r316_para.advanceScaleT, 4));
            r364_currentGlyph.include(r364_df.markSet.e());
            var r364_pX = 0.7;
            var r364_pY = 0.8;
            var r364_vswPlusGap = (r364_df.rightSB - r364_df.leftSB - r316_HSwToV(r364_df.mvs)) / 3;
            var r364_barShrink = Math.min(r316_XH * 0.3, r364_vswPlusGap - r316_HSwToV(r364_df.mvs) + r364_df.mvs * 1.5);
            r364_currentGlyph.include(r316_VBar.l(r364_df.leftSB, 0, r316_XH, r364_df.mvs));
            r364_currentGlyph.include(r316_VBar.l(r364_df.leftSB + r364_vswPlusGap, 0, r316_XH - r364_barShrink, r364_df.mvs));
            r364_currentGlyph.include((_r364_t0 = r364_df.rightSB - r364_vswPlusGap, r316_dispiro(r316_widths.rhs(r364_df.mvs), r316_flat(r364_df.leftSB, r316_XH, r316_heading(r316_Rightward)), r316_curl(Math.min(_r364_t0 - r316_HSwToV(r316_Stroke * 1.5), r1_mix(r364_df.leftSB, _r364_t0, r364_pX)), r316_XH), r316_archv(), r316_flat(_r364_t0, Math.min(r316_XH - r316_Stroke * 1.5, r1_mix(0, r316_XH, r364_pY))), r316_curl(_r364_t0, r364_barShrink, r316_heading(r316_Downward)))));
            r364_currentGlyph.include((_r364_t1 = r364_df.leftSB + r364_vswPlusGap, r316_dispiro(r316_widths.lhs(r364_df.mvs), r316_flat(_r364_t1, 0, r316_heading(r316_Rightward)), r316_curl(Math.min(r364_df.rightSB - r316_HSwToV(r316_Stroke * 1.5), r1_mix(_r364_t1, r364_df.rightSB, r364_pX)), 0), r316_archv(), r316_flat(r364_df.rightSB, Math.max(0 + r316_Stroke * 1.5, r1_mix(r316_XH, 0, r364_pY))), r316_curl(r364_df.rightSB, r316_XH, r316_heading(r316_Upward)))));
            return void 0;
        }));
        r316_xn$GlyphSaveSink$2Lrc4b.save("currency/manatSign", 8380, new r316_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
            var r375_jut, _r375_t0, _r375_t1;
            var r375_df = r375_currentGlyph.include(r316_DivFrame(r316_para.advanceScaleT, 3));
            r375_currentGlyph.include(r316_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r316_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                var _r380_t0, _r380_t1;
                r380_currentGlyph.include(r316_UShape(r316_XH, 0, r375_df.leftSB, r375_df.rightSB, r375_df.mvs, r375_df.smallArchDepthA, r375_df.smallArchDepthB), true, true);
                r380_currentGlyph.include(r316_FlipAround(r375_df.middle, r316_XH / 2));
                return void 0;
            })));
            r375_currentGlyph.include(r316_VBar.m(r375_df.middle, r316_SLAB ? r375_df.mvs : 0, r316_XH + r316_LongVJut - r316_QuarterStroke, Math.min(r316_VJutStroke, r375_df.mvs)));
            if (r316_SLAB) {
                r375_jut = r316_Jut - r316_HSwToV(0.5 * (r316_Stroke - r375_df.mvs));
                r375_currentGlyph.include(r316_HSerif.mb(r375_df.leftSB + r316_HSwToV(0.5 * r375_df.mvs), 0, r375_jut, r375_df.mvs));
                r375_currentGlyph.include(r316_HSerif.mb(r375_df.rightSB - r316_HSwToV(0.5 * r375_df.mvs), 0, r375_jut, r375_df.mvs));
            }
            return void 0;
        }));
        return r316_xn$GlyphSaveSink$2Lrc4b.save("currency/lariSign", 8382, new r316_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
            var _r388_t0, _r388_t1;
            var r388_df = r388_currentGlyph.include(r316_DivFrame(r316_para.advanceScaleM, 3));
            var r388_gap = r388_df.rightSB - r388_df.leftSB - r316_HSwToV(2 * r388_df.mvs);
            var r388_fine = Math.min(r316_OverlayStroke, r316_AdviceStrokeInSpace(r388_gap, 3));
            var r388_offset = (r388_gap - r316_HSwToV(2 * r388_fine)) / 6;
            var r388_barTop = r316_CAP + (r316_Ascender - r316_XH) / 2;
            var r388_barBot = Math.max(r316_CAP * 0.5, r1_mix(r316_CAP, r388_barTop, -2) - r388_df.mvs);
            r388_currentGlyph.include(r316_HBar.b(r388_df.leftSB, r388_df.rightSB, 0, r388_df.mvs));
            r388_currentGlyph.include(r316_dispiro(r316_widths.lhs(r388_df.mvs), r316_g4(r388_df.rightSB - r316_OX, r316_CAP - r316_Hook), r316_HookStart(r316_CAP, new r316_xn$NamedParameterPair$2Lrc9b("sw", r388_df.mvs)), r316_flatside.ld(r388_df.leftSB, 0, r316_CAP, r388_df.archDepthA, r388_df.archDepthB), r316_arcvh(), r316_flat(r388_df.middle, r388_df.mvs - r388_df.shoulderFine, r316_widths.lhs(r388_df.shoulderFine)), r316_curl(r388_df.rightSB, r388_df.mvs - r388_df.shoulderFine, r316_heading(r316_Rightward))));
            r388_currentGlyph.include(r316_VBar.r(r388_df.middle - r388_offset, r388_barBot, r388_barTop, r388_fine));
            r388_currentGlyph.include(r316_VBar.l(r388_df.middle + r388_offset, r388_barBot, r388_barTop, r388_fine));
            return void 0;
        }));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r397_xn$Capture_Ext$2Lrc2b) {
    var _r397_t0, _r397_t1;
    r397_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r397_xn$Capture_Ext$2Lrc2b, "Symbol-Currency-Letter-Derived", function (r398_xn$Capture$2Lrc8, r398_xn$ExportCapture$2Lrc4b) {
        var _r398_t8, _r398_t9;
        var _r398_t0 = r398_xn$Capture$2Lrc8;
        var r398_xn$GlyphSaveSink$2Lrc4b = _r398_t0["$GlyphSaveSink$"];
        var r398_xn$NamedParameterPair$2Lrc9b = _r398_t0["$NamedParameterPair$"];
        var r398_xn$Exec$2Lrc5 = _r398_t0["$Exec$"];
        var _r398_t1 = r398_xn$Capture$2Lrc8.Metrics;
        var r398_Width = _r398_t1.Width;
        var r398_SB = _r398_t1.SB;
        var r398_CAP = _r398_t1.CAP;
        var r398_AdviceStroke2 = _r398_t1.AdviceStroke2;
        var r398_Stroke = _r398_t1.Stroke;
        var r398_OverlayStroke = _r398_t1.OverlayStroke;
        var r398_RightSB = _r398_t1.RightSB;
        var r398_Middle = _r398_t1.Middle;
        var _r398_t2 = r398_xn$Capture$2Lrc8.SpiroFns;
        var _r398_t3 = r398_xn$Capture$2Lrc8.SpiroFns;
        var r398_xn$decor$0cao = _r398_t3["decor@"];
        var r398_xn$decor$0cao1 = _r398_t3["decor@@"];
        var r398_xn$decor$0cao11 = _r398_t3["decor@@@"];
        var _r398_t4 = r398_xn$Capture$2Lrc8.BooleFns;
        var _r398_t5 = r398_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r398_HBar = _r398_t5.HBar;
        var _r398_t6 = r398_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r398_xn$derivecomposites$7Hrq = _r398_t6["derive-composites"];
        var _r398_t7 = r398_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r398_LetterObliqueBarOverlay = _r398_t7.LetterObliqueBarOverlay;
        r398_xn$derivecomposites$7Hrq("currency/colonSign", 8353, "C", "dblLongSlash");
        r398_xn$derivecomposites$7Hrq("currency/millSign", 8357, "m", "shortSlash");
        r398_xn$GlyphSaveSink$2Lrc4b.save("currency/dblBarOverCap/adwsN", null, new r398_xn$Capture$2Lrc8.GlyphProc(function (r404_currentGlyph) {
            var _r404_t0, _r404_t1;
            var r404_sw = Math.min(r398_OverlayStroke, r398_AdviceStroke2(2, 4, r398_CAP));
            var r404_gap = Math.max(r398_CAP / 8, r404_sw / 2);
            r404_currentGlyph.include(r398_HBar.b(r1_mix(0, r398_SB, 0.5), r1_mix(r398_Width, r398_RightSB, 0.5), r398_CAP / 2 + r404_gap / 2, r404_sw));
            r404_currentGlyph.include(r398_HBar.t(r1_mix(0, r398_SB, 0.5), r1_mix(r398_Width, r398_RightSB, 0.5), r398_CAP / 2 - r404_gap / 2, r404_sw));
            return void 0;
        }));
        r398_xn$derivecomposites$7Hrq("currency/nairaSign", 8358, "currency/nairaSign/base", "currency/dblBarOverCap/adwsN");
        r398_xn$derivecomposites$7Hrq("currency/hryvniaSign", 8372, "revS", "currency/dblBarOverCap/adwsN");
        r398_xn$derivecomposites$7Hrq("currency/dongSign", 8363, "dStroke", "sbRsbUnderlineBelow");
        r398_xn$derivecomposites$7Hrq("currency/kipSign", 8365, "K", "hStrike");
        r398_xn$GlyphSaveSink$2Lrc4b.save("currency/tugrikSign/overlay", null, new r398_xn$Capture$2Lrc8.GlyphProc(function (r409_currentGlyph) {
            var _r409_t0, _r409_t1;
            r409_currentGlyph.setWidth(0);
            r409_currentGlyph.setMarkAnchor("overlay", r398_Middle, r398_CAP / 2);
            r409_currentGlyph.include(r398_LetterObliqueBarOverlay.m.in(new r398_xn$NamedParameterPair$2Lrc9b("x", r398_Middle), new r398_xn$NamedParameterPair$2Lrc9b("bot", 0), new r398_xn$NamedParameterPair$2Lrc9b("top", r398_CAP), new r398_xn$NamedParameterPair$2Lrc9b("py", 0.35)));
            r409_currentGlyph.include(r398_LetterObliqueBarOverlay.m.in(new r398_xn$NamedParameterPair$2Lrc9b("x", r398_Middle), new r398_xn$NamedParameterPair$2Lrc9b("bot", 0), new r398_xn$NamedParameterPair$2Lrc9b("top", r398_CAP - r398_Stroke), new r398_xn$NamedParameterPair$2Lrc9b("py", 0.65)));
            return void 0;
        }));
        r398_xn$derivecomposites$7Hrq("currency/tugrikSign", 8366, "T", "currency/tugrikSign/overlay");
        r398_xn$derivecomposites$7Hrq("currency/guaraniSign", 8370, "G", "longVStrokeOver");
        r398_xn$derivecomposites$7Hrq("currency/cediSign", 8373, "C", "longVStrokeOver");
        return r398_xn$derivecomposites$7Hrq("currency/somSign", 8384, "smcpC", "sbRsbUnderlineBelow");
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r424_xn$Capture_Ext$2Lrc2b) {
    var _r424_t0, _r424_t1;
    r424_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r424_xn$Capture_Ext$2Lrc2b, "Symbol-Letter", function (r425_xn$Capture$2Lrc8, r425_xn$ExportCapture$2Lrc4b) {
        var _r425_t10, _r425_t11, _r425_t12, _r425_tag13, _r425_t14, _r425_tag15, _r425_t16, _r425_tag17;
        var _r425_t0 = r425_xn$Capture$2Lrc8;
        var r425_xn$GlyphSaveSink$2Lrc4b = _r425_t0["$GlyphSaveSink$"];
        var r425_xn$NamedParameterPair$2Lrc9b = _r425_t0["$NamedParameterPair$"];
        var r425_xn$Exec$2Lrc5 = _r425_t0["$Exec$"];
        var r425_para = _r425_t0.para;
        var r425_MarkSet = _r425_t0.MarkSet;
        var r425_DivFrame = _r425_t0.DivFrame;
        var _r425_t1 = r425_xn$Capture$2Lrc8.Metrics;
        var r425_SB = _r425_t1.SB;
        var r425_CAP = _r425_t1.CAP;
        var r425_XH = _r425_t1.XH;
        var r425_Scale = _r425_t1.Scale;
        var r425_Translate = _r425_t1.Translate;
        var r425_HSwToV = _r425_t1.HSwToV;
        var r425_Downward = _r425_t1.Downward;
        var r425_O = _r425_t1.O;
        var r425_Hook = _r425_t1.Hook;
        var r425_AdviceStroke = _r425_t1.AdviceStroke;
        var r425_Stroke = _r425_t1.Stroke;
        var r425_HalfStroke = _r425_t1.HalfStroke;
        var r425_LongJut = _r425_t1.LongJut;
        var r425_MidJutCenter = _r425_t1.MidJutCenter;
        var r425_SLAB = _r425_t1.SLAB;
        var r425_WideWidth1 = _r425_t1.WideWidth1;
        var r425_RightSB = _r425_t1.RightSB;
        var r425_Middle = _r425_t1.Middle;
        var r425_DotRadius = _r425_t1.DotRadius;
        var r425_ArchDepthB = _r425_t1.ArchDepthB;
        var r425_UnicodeWeightGrade = _r425_t1.UnicodeWeightGrade;
        var r425_TINY = _r425_t1.TINY;
        var _r425_t2 = r425_xn$Capture$2Lrc8.SpiroFns;
        var r425_g4 = _r425_t2.g4;
        var r425_corner = _r425_t2.corner;
        var r425_flat = _r425_t2.flat;
        var r425_curl = _r425_t2.curl;
        var r425_widths = _r425_t2.widths;
        var r425_heading = _r425_t2.heading;
        var r425_archv = _r425_t2.archv;
        var r425_dispiro = _r425_t2.dispiro;
        var r425_xn$spirooutline$1aao = _r425_t2["spiro-outline"];
        var _r425_t3 = r425_xn$Capture$2Lrc8.SpiroFns;
        var r425_xn$decor$0cao = _r425_t3["decor@"];
        var r425_xn$decor$0cao1 = _r425_t3["decor@@"];
        var r425_xn$decor$0cao11 = _r425_t3["decor@@@"];
        var _r425_t4 = r425_xn$Capture$2Lrc8.BooleFns;
        var r425_union = _r425_t4.union;
        var r425_intersection = _r425_t4.intersection;
        var r425_difference = _r425_t4.difference;
        var _r425_t5 = r425_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r425_Rect = _r425_t5.Rect;
        var r425_MaskAbove = _r425_t5.MaskAbove;
        var r425_DotAt = _r425_t5.DotAt;
        var r425_Circle = _r425_t5.Circle;
        var r425_Ellipse = _r425_t5.Ellipse;
        var r425_HSerif = _r425_t5.HSerif;
        var r425_HBar = _r425_t5.HBar;
        var r425_VBar = _r425_t5.VBar;
        var r425_HookEnd = _r425_t5.HookEnd;
        var r425_ForceUpright = _r425_t5.ForceUpright;
        var _r425_t6 = r425_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r425_alias = _r425_t6.alias;
        var r425_turned = _r425_t6.turned;
        var _r425_t7 = r425_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-X"].resolve();
        var r425_XStrand = _r425_t7.XStrand;
        var _r425_t8 = r425_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r425_FlatHookDepth = _r425_t8.FlatHookDepth;
        var _r425_t9 = r425_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r425_aboveMarkMid = _r425_t9.aboveMarkMid;
        r425_alias("eulerConst", 8455, "latn/Epsilon");
        r425_alias("scruple", 8456, "cyrl/E");
        r425_alias("Ohm", 8486, "grek/Omega");
        r425_alias("Mho", 8487, "latn/Upsilon");
        r425_alias("letterLike/kelvinSign", 8490, "K");
        r425_alias("letterLike/angstromSign", 8491, "ARing");
        (function () {
            var r433_FMosaicWide, r433_MosaicNameSuffix, r433_MosaicWidth, r433_MosaicWidthScalar, _r433_t3, _r433_t5, _r433_t6, _r433_tag7;
            var r433_WidthKinds = [[0, ".NWID", r425_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r425_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r433_t0 = r433_WidthKinds;
            var _r433_t1 = _r433_t0.length;
            var _r433_t2 = 0;
            var _r433_t4 = _r433_t2 < _r433_t1;
            while (_r433_t4) {
                _r433_t3 = _r433_t0[_r433_t2];
                r433_FMosaicWide = _r433_t3[0];
                r433_MosaicNameSuffix = _r433_t3[1];
                r433_MosaicWidth = _r433_t3[2];
                r433_MosaicWidthScalar = _r433_t3[3];
                (function () {
                    var r436_MosaicDesiredWidth = r425_WideWidth1;
                    var r436_MosaicMiddle = r433_MosaicWidth / 2;
                    var r436_MosaicUnitWidth = r433_MosaicWidth / r433_MosaicWidthScalar;
                    var r436_MangleUnicode = function (r437_unicode, r437__desiredOverride) {
                        var _r437_t0, _r437_t1;
                        return r433_MosaicWidth === (r437__desiredOverride || r436_MosaicDesiredWidth) ? r437_unicode : void 0;
                    };
                    var r436_MangleName = function (r438_name) {
                        var _r438_t0, _r438_t1;
                        return r438_name + r433_MosaicNameSuffix;
                    };
                    return r425_xn$GlyphSaveSink$2Lrc4b.save(r436_MangleName("estimated"), r436_MangleUnicode(8494), new r425_xn$Capture$2Lrc8.GlyphProc(function (r441_currentGlyph) {
                        var _r441_t0, _r441_t1;
                        r441_currentGlyph.setWidth(r433_MosaicWidth);
                        var r441_cx = 500;
                        var r441_cy = 450;
                        var r441_r1 = 846 / 2;
                        var r441_yGapSize = 263;
                        var r441_sw = 183;
                        var r441_r2 = 85;
                        var r441_r3 = 13;
                        var r441_swCenter = 25;
                        var r441_desiredHeight = r433_FMosaicWide ? r425_CAP : r425_XH;
                        var r441_s = Math.min(r441_desiredHeight / (2 * r441_cy), (r433_MosaicWidth - r425_SB) / (2 * r441_cx));
                        var r441_glyphCenter = r441_currentGlyph.gizmo.applyXY(r433_MosaicWidth / 2, r441_desiredHeight / 2);
                        var r441_tfm = r1_Transform.Combine(r1_Transform.Translate(-r441_cx, -r441_cy), r1_Transform.Scale(r441_s, r441_s), r1_Transform.Translate(r441_glyphCenter.x, r441_glyphCenter.y));
                        var r441_xLargeRc = r441_sw + r441_r2;
                        var r441_yLargeRc = r441_cy - Math.sqrt((r441_r1 - r441_r2) * (r441_r1 - r441_r2) - (r441_cx - r441_sw - r441_r2) * (r441_cx - r441_sw - r441_r2));
                        var r441_xInnerCircleLimit = r441_cx - (r441_cx - r441_xLargeRc) * (r441_r1 / (r441_r1 - r441_r2));
                        r441_currentGlyph.include(r425_ForceUpright());
                        r441_currentGlyph.include(r425_difference(r425_Ellipse.Outline.At(r441_cx, r441_cy, r441_cx, r441_cy), r425_intersection(r425_Circle.Outline.At(r441_cx, r441_cy, r441_r1), r425_union(r425_Rect(2 * r441_cy, 2 * r441_cy - r441_yLargeRc, r441_xInnerCircleLimit, 2 * r441_cx - r441_xInnerCircleLimit), r425_Rect(r441_yLargeRc, -1, r441_xInnerCircleLimit, r441_cx), r425_Rect(r441_cy - r441_yGapSize, -1, r441_cx - 1, 2 * r441_cx))), r425_Circle.Outline.At(r441_xLargeRc, r441_yLargeRc, r441_r2), r425_Circle.Outline.At(r441_xLargeRc, 2 * r441_cy - r441_yLargeRc, r441_r2), r425_Circle.Outline.At(2 * r441_cx - r441_xLargeRc, 2 * r441_cy - r441_yLargeRc, r441_r2), r425_Circle.Outline.At(r441_sw + r441_r3, r441_cy + r441_swCenter + r441_r3, r441_r3), r425_Circle.Outline.At(2 * r441_cx - r441_sw - r441_r3, r441_cy + r441_swCenter + r441_r3, r441_r3), r425_Circle.Outline.At(r441_sw + r441_r3, r441_cy - r441_r3, r441_r3), r425_Rect(2 * r441_cy - r441_yLargeRc, r441_cy + r441_swCenter + r441_r3, r441_sw, 2 * r441_cx - r441_sw), r425_Rect(r441_cy + r441_swCenter + r441_r3 + 1, r441_cy + r441_swCenter, r441_sw + r441_r3, 2 * r441_cx - r441_sw - r441_r3), r425_Rect(r441_cy - r441_r3, r441_yLargeRc, r441_sw, r441_cx), r425_Rect(r441_cy, r441_cy - r441_r3 - 1, r441_sw + r441_r3, r441_cx), r425_Rect(r441_cy, r441_cy - r441_yGapSize, r441_cx - 1, 2 * r441_cx)));
                        r441_currentGlyph.include(r441_tfm);
                        return void 0;
                    }));
                })();
                _r433_t5 = _r433_t2 = _r433_t2 + 1;
                _r433_t4 = _r433_t2 < _r433_t1;
            }
            return _r433_t5;
        })();
        r425_xn$GlyphSaveSink$2Lrc4b.save("mathAleph", 8501, new r425_xn$Capture$2Lrc8.GlyphProc(function (r448_currentGlyph) {
            var _r448_t0, _r448_t1;
            r448_currentGlyph.include(r425_MarkSet.capital());
            var r448_p = 0.3;
            r448_currentGlyph.include(r425_XStrand(true, false, r425_SB, r425_CAP, r425_RightSB, 0, 0.1, 0.4, 0.28));
            r448_currentGlyph.include(r425_intersection(r425_dispiro(r425_widths.rhs(), r425_g4.down.start(r425_RightSB, r425_CAP), r425_g4(r1_mix(r425_SB, r425_RightSB, 0 + r448_p), 0)), r425_xn$spirooutline$1aao(r425_corner(r425_SB, r425_CAP), r425_corner(r425_RightSB, r425_CAP), r425_corner(r425_RightSB, 0))));
            r448_currentGlyph.include(r425_intersection(r425_dispiro(r425_widths.rhs(), r425_g4.up.start(r425_SB, 0), r425_g4(r1_mix(r425_SB, r425_RightSB, 1 - r448_p), r425_CAP)), r425_xn$spirooutline$1aao(r425_corner(r425_SB, 0), r425_corner(r425_RightSB, 0), r425_corner(r425_SB, r425_CAP))));
            return void 0;
        }));
        r425_xn$GlyphSaveSink$2Lrc4b.save("mathBeth", 8502, new r425_xn$Capture$2Lrc8.GlyphProc(function (r455_currentGlyph) {
            var _r455_t0, _r455_t1;
            r455_currentGlyph.include(r425_MarkSet.capital());
            var r455_pX = 0.7;
            var r455_pY = 0.8;
            var r455_turnX = r1_mix(r425_SB, r425_RightSB, r455_pY);
            r455_currentGlyph.include(r425_dispiro(r425_widths.rhs(), r425_flat(r425_SB, r425_CAP), r425_curl(Math.min(r455_turnX - r425_HSwToV(1.5 * r425_Stroke), r1_mix(r425_SB, r455_turnX, r455_pX)), r425_CAP), r425_archv(), r425_flat(r455_turnX, Math.min(r425_CAP - r425_Stroke * 1.5, r1_mix(0, r425_CAP, r455_pY))), r425_curl(r455_turnX, 0)));
            r455_currentGlyph.include(r425_HBar.b(r425_SB, r425_RightSB, 0));
            return void 0;
        }));
        r425_xn$GlyphSaveSink$2Lrc4b.save("mathGimel", 8503, new r425_xn$Capture$2Lrc8.GlyphProc(function (r461_currentGlyph) {
            var _r461_t0, _r461_t1;
            var r461_df = r461_currentGlyph.include(r425_DivFrame(r425_para.advanceScaleF));
            r461_currentGlyph.include(r461_df.markSet.capital());
            var r461_hd = r425_FlatHookDepth(r461_df);
            var r461_xStart = r1_mix(r461_df.leftSB, r461_df.rightSB, 0.1);
            var r461_xVertBar = r1_mix(r461_df.leftSB, r461_df.rightSB, 0.625) + r425_HSwToV(0.375 * r425_Stroke);
            var r461_yBranch = r1_mix(0, r425_CAP, 0.5);
            r461_currentGlyph.include(r425_intersection(r425_MaskAbove(0), r425_dispiro(r425_widths.rhs(), r425_flat(r461_xStart, r425_CAP), r425_curl(Math.max(r461_xStart + r425_TINY, r461_xVertBar - r461_hd.x), r425_CAP), r425_archv(), r425_flat(r461_xVertBar, r425_CAP - r461_hd.y), r425_curl(r461_xVertBar, r461_yBranch), r425_flat(r461_df.rightSB, 0), r425_curl(r1_mix(r461_xVertBar, r461_df.rightSB, 2), r1_mix(r461_yBranch, 0, 2)))));
            r461_currentGlyph.include(r425_dispiro(r425_widths.rhs(), r425_g4.down.start(r461_xVertBar, r461_yBranch), r425_g4(r461_df.leftSB + r425_HSwToV(0.2 * r425_Stroke), r425_O)));
            return void 0;
        }));
        r425_xn$GlyphSaveSink$2Lrc4b.save("mathDalet", 8504, new r425_xn$Capture$2Lrc8.GlyphProc(function (r468_currentGlyph) {
            var _r468_t0, _r468_t1;
            r468_currentGlyph.include(r425_MarkSet.capital());
            r468_currentGlyph.include(r425_HBar.t(r425_SB, r425_RightSB, r425_CAP));
            r468_currentGlyph.include(r425_VBar.r(r1_mix(r425_SB, r425_RightSB, 0.75), 0, r425_CAP));
            return void 0;
        }));
        r425_xn$GlyphSaveSink$2Lrc4b.save("informationSource", 8505, new r425_xn$Capture$2Lrc8.GlyphProc(function (r474_currentGlyph) {
            var _r474_t0, _r474_t1;
            r474_currentGlyph.include(r425_MarkSet.b());
            var r474_sw = r1_clamp(r425_para.canonicalStrokeWidthMin, r425_para.canonicalStrokeWidthMax, r425_UnicodeWeightGrade(900));
            r474_currentGlyph.include(r425_VBar.m(r425_Middle, 0, r425_XH, r474_sw));
            r474_currentGlyph.include(r425_HSerif.lt(r425_Middle - r425_HSwToV(0.5 * r474_sw), r425_XH, r425_LongJut / 2));
            r474_currentGlyph.include(r425_HSerif.lb(r425_Middle - r425_HSwToV(0.5 * r474_sw), 0, r425_LongJut / 2));
            r474_currentGlyph.include(r425_HSerif.rb(r425_Middle + r425_HSwToV(0.5 * r474_sw), 0, r425_LongJut / 2));
            r474_currentGlyph.include(r425_DotAt(r425_Middle, r425_aboveMarkMid, r425_DotRadius * (r474_sw / r425_Stroke)));
            return void 0;
        }));
        r425_turned("turnAmpersand", 8523, "ampersand", r425_Middle, r425_CAP / 2);
        (function () {
            var r482_TironianEtTopBarShape = function (r483_y) {
                var _r483_t0, _r483_t1;
                return r425_intersection(r425_Rect(r483_y - r425_O, 0, r425_SB, r425_RightSB), r425_dispiro(r425_widths.rhs(), r425_g4(r425_SB + r425_O, r483_y - r425_O), r425_g4(r425_Middle, r483_y + r425_O), r425_g4(r425_RightSB, r483_y - r425_O)));
            };
            r425_xn$GlyphSaveSink$2Lrc4b.save("tironianEt", 8266, new r425_xn$Capture$2Lrc8.GlyphProc(function (r486_currentGlyph) {
                var _r486_t0, _r486_t1;
                r486_currentGlyph.include(r482_TironianEtTopBarShape(r425_XH));
                r486_currentGlyph.include(r425_intersection(r425_Rect(r425_XH - r425_O - r425_Stroke, 0 - r425_Stroke, r425_SB, r425_RightSB), r425_dispiro(r425_widths.rhs(), r425_flat(r425_RightSB, r425_XH - r425_O - r425_Stroke), r425_curl(r425_Middle + r425_HSwToV(0.125 * r425_Stroke), r425_O))));
                return void 0;
            }));
            return r425_xn$GlyphSaveSink$2Lrc4b.save("TironianEt", 11858, new r425_xn$Capture$2Lrc8.GlyphProc(function (r491_currentGlyph) {
                var _r491_t0, _r491_t1;
                r491_currentGlyph.include(r482_TironianEtTopBarShape(r425_CAP));
                r491_currentGlyph.include(r425_dispiro(r425_widths.rhs(), r425_flat(r425_RightSB, r425_CAP - r425_HalfStroke, r425_heading(r425_Downward)), r425_curl(r425_RightSB, 0 + r425_ArchDepthB), r425_HookEnd(0), r425_g4(r425_SB, r425_Hook)));
                return void 0;
            }));
        })();
        return (function () {
            return r425_xn$GlyphSaveSink$2Lrc4b.save("romanFiftyEarlyForm", 8582, new r425_xn$Capture$2Lrc8.GlyphProc(function (r498_currentGlyph) {
                var _r498_t0, _r498_t1;
                r498_currentGlyph.include(r425_MarkSet.capital());
                r498_currentGlyph.include(r425_VBar.m(r425_Middle, 0, r425_CAP));
                r498_currentGlyph.include(r425_dispiro(r425_widths.rhs(r425_AdviceStroke(3)), r425_flat(r425_Middle - r425_HSwToV(r425_HalfStroke), 0), r425_curl(r425_SB + r425_O, r1_mix(0, r425_CAP, 0.375))));
                r498_currentGlyph.include(r425_dispiro(r425_widths.lhs(r425_AdviceStroke(3)), r425_flat(r425_Middle + r425_HSwToV(r425_HalfStroke), 0), r425_curl(r425_RightSB - r425_O, r1_mix(0, r425_CAP, 0.375))));
                if (r425_SLAB) r498_currentGlyph.include(r425_HSerif.mt(r425_Middle, r425_CAP, r425_MidJutCenter));
                return void 0;
            }));
        })();
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r506_xn$Capture_Ext$2Lrc2b) {
    var _r506_t0, _r506_t1;
    r506_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r506_xn$Capture_Ext$2Lrc2b, "Symbol-Cyrl-Thousands", function (r507_xn$Capture$2Lrc8, r507_xn$ExportCapture$2Lrc4b) {
        var _r507_t6, _r507_t7;
        var _r507_t0 = r507_xn$Capture$2Lrc8;
        var r507_xn$GlyphSaveSink$2Lrc4b = _r507_t0["$GlyphSaveSink$"];
        var r507_xn$NamedParameterPair$2Lrc9b = _r507_t0["$NamedParameterPair$"];
        var r507_xn$Exec$2Lrc5 = _r507_t0["$Exec$"];
        var _r507_t1 = r507_xn$Capture$2Lrc8.Metrics;
        var r507_SB = _r507_t1.SB;
        var r507_XH = _r507_t1.XH;
        var r507_Descender = _r507_t1.Descender;
        var r507_AdviceStroke = _r507_t1.AdviceStroke;
        var r507_RightSB = _r507_t1.RightSB;
        var _r507_t2 = r507_xn$Capture$2Lrc8.SpiroFns;
        var _r507_t3 = r507_xn$Capture$2Lrc8.SpiroFns;
        var r507_xn$decor$0cao = _r507_t3["decor@"];
        var r507_xn$decor$0cao1 = _r507_t3["decor@@"];
        var r507_xn$decor$0cao11 = _r507_t3["decor@@@"];
        var _r507_t4 = r507_xn$Capture$2Lrc8.BooleFns;
        var _r507_t5 = r507_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r507_ExtLineCenter = _r507_t5.ExtLineCenter;
        return r507_xn$GlyphSaveSink$2Lrc4b.save("cyrl/thousandsSign", 1154, new r507_xn$Capture$2Lrc8.GlyphProc(function (r511_currentGlyph) {
            var _r511_t0, _r511_t1;
            var r511_fine = r507_AdviceStroke(3);
            r511_currentGlyph.include(r507_ExtLineCenter(r507_SB, r507_Descender, r507_RightSB, r507_XH, r511_fine, -0.1));
            r511_currentGlyph.include(r507_ExtLineCenter(r1_mix(r507_SB, r507_RightSB, +0.1), r1_mix(r507_Descender, r507_XH, 0.8), r1_mix(r507_SB, r507_RightSB, +1.1), r1_mix(r507_Descender, r507_XH, 0.5), r511_fine, -0.1));
            r511_currentGlyph.include(r507_ExtLineCenter(r1_mix(r507_SB, r507_RightSB, -0.1), r1_mix(r507_Descender, r507_XH, 0.5), r1_mix(r507_SB, r507_RightSB, +0.9), r1_mix(r507_Descender, r507_XH, 0.2), r511_fine, -0.1));
            return void 0;
        }));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r517_xn$Capture_Ext$2Lrc2b) {
    var _r517_t0, _r517_t1;
    r517_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r517_xn$Capture_Ext$2Lrc2b, "Symbol-Letter-Phonetic", function (r518_xn$Capture$2Lrc8, r518_xn$ExportCapture$2Lrc4b) {
        var _r518_t8, _r518_t9;
        var _r518_t0 = r518_xn$Capture$2Lrc8;
        var r518_xn$GlyphSaveSink$2Lrc4b = _r518_t0["$GlyphSaveSink$"];
        var r518_xn$NamedParameterPair$2Lrc9b = _r518_t0["$NamedParameterPair$"];
        var r518_xn$Exec$2Lrc5 = _r518_t0["$Exec$"];
        var r518_para = _r518_t0.para;
        var r518_MarkSet = _r518_t0.MarkSet;
        var r518_DivFrame = _r518_t0.DivFrame;
        var _r518_t1 = r518_xn$Capture$2Lrc8.Metrics;
        var r518_SB = _r518_t1.SB;
        var r518_XH = _r518_t1.XH;
        var r518_Upward = _r518_t1.Upward;
        var r518_Downward = _r518_t1.Downward;
        var r518_OX = _r518_t1.OX;
        var r518_AccentHeight = _r518_t1.AccentHeight;
        var r518_RightSB = _r518_t1.RightSB;
        var _r518_t2 = r518_xn$Capture$2Lrc8.SpiroFns;
        var r518_g4 = _r518_t2.g4;
        var r518_end = _r518_t2.end;
        var r518_widths = _r518_t2.widths;
        var r518_heading = _r518_t2.heading;
        var r518_dispiro = _r518_t2.dispiro;
        var _r518_t3 = r518_xn$Capture$2Lrc8.SpiroFns;
        var r518_xn$decor$0cao = _r518_t3["decor@"];
        var r518_xn$decor$0cao1 = _r518_t3["decor@@"];
        var r518_xn$decor$0cao11 = _r518_t3["decor@@@"];
        var _r518_t4 = r518_xn$Capture$2Lrc8.BooleFns;
        var _r518_t5 = r518_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r518_Arch = _r518_t5.Arch;
        var _r518_t6 = r518_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r518_CyrKavykaShape = _r518_t6.CyrKavykaShape;
        var r518_CyrInvKavykaShape = _r518_t6.CyrInvKavykaShape;
        var _r518_t7 = r518_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r518_markExtend = _r518_t7.markExtend;
        var r518_markHalfStroke = _r518_t7.markHalfStroke;
        r518_xn$GlyphSaveSink$2Lrc4b.save("mdfInvBreveBreve", 43867, new r518_xn$Capture$2Lrc8.GlyphProc(function (r524_currentGlyph) {
            var _r524_t0, _r524_t1;
            r524_currentGlyph.include(r518_MarkSet.e());
            var r524_archHeight = r518_XH * 0.45;
            r524_currentGlyph.include(r518_dispiro(r518_widths.rhs(), r518_g4.up.start(r518_SB + r518_OX, 0, r518_heading(r518_Upward)), r518_Arch.rhs(0 + r524_archHeight), r518_g4.down.end(r518_RightSB - r518_OX, 0, r518_heading(r518_Downward))));
            r524_currentGlyph.include(r518_dispiro(r518_widths.lhs(), r518_g4.down.start(r518_SB + r518_OX, r518_XH, r518_heading(r518_Downward)), r518_Arch.lhs(r518_XH - r524_archHeight), r518_g4.up.end(r518_RightSB - r518_OX, r518_XH, r518_heading(r518_Upward))));
            return void 0;
        }));
        return r518_xn$GlyphSaveSink$2Lrc4b.save("cyrl/invLowKavykaKavyka", 11846, new r518_xn$Capture$2Lrc8.GlyphProc(function (r530_currentGlyph) {
            var _r530_t0, _r530_t1;
            var r530_df = r530_currentGlyph.include(r518_DivFrame(r518_para.advanceScaleSp));
            r530_currentGlyph.include(r530_df.markSet.e());
            r530_currentGlyph.include(r518_CyrKavykaShape(new r518_xn$NamedParameterPair$2Lrc9b("xMiddle", r530_df.middle), new r518_xn$NamedParameterPair$2Lrc9b("width", 2 * (r518_markExtend * 1.5)), new r518_xn$NamedParameterPair$2Lrc9b("top", r518_XH), new r518_xn$NamedParameterPair$2Lrc9b("bottom", r518_XH - r518_AccentHeight), new r518_xn$NamedParameterPair$2Lrc9b("hs", r518_markHalfStroke)));
            r530_currentGlyph.include(r518_CyrInvKavykaShape(new r518_xn$NamedParameterPair$2Lrc9b("xMiddle", r530_df.middle), new r518_xn$NamedParameterPair$2Lrc9b("width", 2 * (r518_markExtend * 1.5)), new r518_xn$NamedParameterPair$2Lrc9b("top", 0 + r518_AccentHeight), new r518_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r518_xn$NamedParameterPair$2Lrc9b("hs", r518_markHalfStroke)));
            return void 0;
        }));
    });
    return void 0;
});


