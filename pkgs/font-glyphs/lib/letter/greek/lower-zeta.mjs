"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Lower-Zeta", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_tail, r313_mk, _r313_t12, _r313_t13, _r313_t14, _r313_t15, _r313_tag16;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_SB = _r313_t1.SB;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Hook = _r313_t1.Hook;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_LongVJut = _r313_t1.LongVJut;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_TightBendInnerDiameter = _r313_t1.TightBendInnerDiameter;
        var r313_TightBendInnerRadius = _r313_t1.TightBendInnerRadius;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_bezControls = _r313_t2.bezControls;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HBar = _r313_t5.HBar;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_ExtendBelowBaseAnchors = _r313_t7.ExtendBelowBaseAnchors;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Arc-Hook"].resolve();
        var r313_Flat = _r313_t8.Flat;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CyrDescender = _r313_t9.CyrDescender;
        var r313_CyrTailDescender = _r313_t9.CyrTailDescender;
        var r313_xn$TAILCURLY$5sIl = 0;
        var r313_xn$TAILSTRAIGHT$5sIl = 1;
        var r313_xn$TAILDIAGONAL$5sIl = 2;
        var r313_xn$TAILSTRAIGHTSHARPCORNER$5sIl96 = 3;
        var r313_xn$TAILDIAGONALSHARPCORNER$5sIl96 = 4;
        var r313_TailBot = -r313_LongVJut + r313_QuarterStroke;
        var r313_TailBendX = function () {
            var _r319_t0, _r319_t1;
            return Math.max(0.5 * r313_Hook, r313_HSwToV(r313_Stroke)) + Math.max(r313_TightBendInnerRadius, r313_HSwToV(r313_QuarterStroke));
        };
        var r313_TailBendY = function () {
            var _r320_t0, _r320_t1;
            return Math.max(0.5 * r313_Hook, r313_Stroke) + Math.max(r313_TightBendInnerRadius, r313_QuarterStroke);
        };
        var r313_StraightTailKnots = function (r321_yHoriz, r321_xDown, r321_wHoriz) {
            var _r321_t0, _r321_t1;
            var r321_xTurn = r321_xDown - r313_TailBendX();
            var r321_yCorner = r321_yHoriz - r313_TailBendY();
            return [r313_arcvh.superness(r313_DesignParameters.tightHookSuperness), r313_flat(Math.min(r321_xTurn - r313_TanSlope * r313_Stroke, r313_Arch["adjust-x"].bot(r1_mix(r313_SB, r313_RightSB, 0.55), r313_Stroke)), r321_yHoriz, r321_wHoriz), r313_curl(r321_xTurn, r321_yHoriz, r313_heading(r313_Rightward)), r313_archv.superness(r313_DesignParameters.tightHookSuperness), r313_flat(r321_xDown, r321_yCorner, r313_heading(r313_Downward)), r313_curl(r321_xDown, r313_TailBot, r313_heading(r313_Downward))];
        };
        var r313_DiagonalTailKnots = function (r322_yHoriz, r322_xDown, r322_wHoriz) {
            var _r322_t0, _r322_t1;
            var r322_xTurn = r322_xDown - r313_TailBendX();
            var r322_yCorner = r322_yHoriz - r313_TailBendY();
            var r322_xDiagEnd = r322_xDown + r1_mix(0, r313_Descender, 0.24);
            return [r313_arcvh.superness(r313_DesignParameters.tightHookSuperness), r313_flat(Math.min(r322_xTurn - r313_TanSlope * r313_Stroke, r313_Arch["adjust-x"].bot(r1_mix(r313_SB, r313_RightSB, 0.55), r313_Stroke)), r322_yHoriz, r322_wHoriz), r313_curl(r322_xTurn, r322_yHoriz, r313_heading(r313_Rightward)), r313_archv.superness(r313_DesignParameters.tightHookSuperness), r313_flat(r322_xDown, r322_yCorner, r313_widths.rhs(r313_Stroke)), r313_curl(r322_xDiagEnd, r313_TailBot)];
        };
        var r313_CurlyTailKnots = function () {
            var _r323_t0, _r323_t1;
            var r323_yCurlMid = r1_mix(r313_Descender, r313_Stroke, 0.5);
            var r323_hookIn = Math.max((r313_Stroke - r323_yCurlMid) * 1.1, r313_HSwToV(r313_Stroke) + Math.max(r313_TightBendInnerDiameter, r313_HalfStroke));
            return [r313_arcvh(16), r313_g2(r1_mix(r313_SB, r313_RightSB, 0.55), r313_Stroke, r313_heading(r313_Rightward)), r313_archv(16), r313_g4.down.mid(r313_RightSB, r323_yCurlMid, r313_heading(r313_Downward)), r313_arcvh(16), r313_flat(r313_RightSB - r323_hookIn, r313_Descender), r313_curl(Math.min(r313_RightSB - r323_hookIn - 1, r1_mix(r313_SB, r313_RightSB, 0.5)), r313_Descender)];
        };
        var r313_ZetaShape = function (r324_tail) {
            var _r324_t0, _r324_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                var r326___, _r326_t0, _r326_t1, _r326_t2, _r326_t3;
                var r326_fine = r313_AdviceStroke(3);
                r326_currentGlyph.include(r313_HBar.m(r313_SB, r313_RightSB, r313_Ascender - r313_HalfStroke));
                var r326_box = new r1_Box(r313_Stroke, 0, r313_SB, r313_RightSB);
                var r326_Arc = r313_Flat(r326_box, new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_Stroke));
                r326_currentGlyph.include(r313_dispiro(r313_g4(r313_RightSB, r313_Ascender - r313_Stroke, r313_widths.rhs(r326_fine)), r313_bezControls(0.7, 0.35, 1, 0.64, 12), r313_g4.down.mid(r313_SB + r313_HSwToV(r313_Stroke), r1_mix(0, r313_Ascender, 0.54 * r313_SmallArchDepthB / (r313_SmallArchDepthA + r313_SmallArchDepthB)), r313_widths.rhs(r313_Stroke)), (_r326_t0 = r324_tail, _r326_t0 === r313_xn$TAILCURLY$5sIl ? r313_CurlyTailKnots() : _r326_t0 === r313_xn$TAILSTRAIGHT$5sIl ? r313_StraightTailKnots(r313_Stroke, r313_RightSB, r313_widths.rhs.heading(r313_Stroke, r313_Rightward)) : _r326_t0 === r313_xn$TAILDIAGONAL$5sIl ? r313_DiagonalTailKnots(r313_Stroke, r313_RightSB, r313_widths.rhs.heading(r313_Stroke, r313_Rightward)) : (r326___ = _r326_t0, [r313_arcvh.superness(r313_DesignParameters.tightHookSuperness), r313_flat(Math.min(r326_Arc.xRHook - r313_TanSlope * r313_Stroke, r313_Arch["adjust-x"].top(r1_mix(r326_Arc.xLArc, r326_Arc.xRArc, 0.55), r313_Stroke)), r313_Stroke, r313_widths.rhs.heading(r313_Stroke, r313_Rightward)), r313_corner(r326_Arc.xRHook, r313_Stroke)]))));
                r326_currentGlyph.include((_r326_t1 = r324_tail, _r326_t1 === r313_xn$TAILSTRAIGHT$5sIl || _r326_t1 === r313_xn$TAILDIAGONAL$5sIl ? r313_ExtendBelowBaseAnchors(r313_TailBot) : _r326_t1 === r313_xn$TAILSTRAIGHTSHARPCORNER$5sIl96 ? r313_CyrDescender.r(r313_RightSB, 0, r313_RightSB) : _r326_t1 === r313_xn$TAILDIAGONALSHARPCORNER$5sIl96 ? r313_CyrTailDescender.r(r313_RightSB, 0, r313_RightSB) : (r326___ = _r326_t1, new r313_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                    var _r332_t0, _r332_t1;
                    return void 0;
                }))));
                return void 0;
            });
        };
        var r313_ZetaConfig = {
            "curlyTail": [r313_xn$TAILCURLY$5sIl, "bp"],
            "straightTail": [r313_xn$TAILSTRAIGHT$5sIl, "b"],
            "diagonalTail": [r313_xn$TAILDIAGONAL$5sIl, "b"],
            "straightTailSharpCorner": [r313_xn$TAILSTRAIGHTSHARPCORNER$5sIl96, "b"],
            "diagonalTailSharpCorner": [r313_xn$TAILDIAGONALSHARPCORNER$5sIl96, "b"]
        };
        var _r313_t10 = Object.entries(r313_ZetaConfig)[Symbol.iterator]();
        var _r313_t11 = void 0;
        while (!(_r313_t11 = _r313_t10.next()).done) {
            _r313_t12 = _r313_t11.value;
            r313_suffix = _r313_t12[0];
            r313_tail = _r313_t12[1][0];
            r313_mk = _r313_t12[1][1];
            _r313_t12[1];
            (function () {
                return r313_xn$GlyphSaveSink$2Lrc4b.save("grek/zeta." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                    var _r338_t0, _r338_t1;
                    r338_currentGlyph.include(r313_MarkSet[r313_mk]());
                    r338_currentGlyph.include(r313_ZetaShape(r313_tail));
                    return void 0;
                }));
            })();
        }
        return r313_xn$selectvariant$7Hrq("grek/zeta", 950);
    });
    return void 0;
});


