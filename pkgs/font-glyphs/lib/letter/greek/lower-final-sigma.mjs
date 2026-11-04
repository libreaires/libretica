"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
import * as _s0_t2 from "../../meta/aesthetics.mjs";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
var _r1_t10 = _s0_t2;
var r1_DesignParameters = _r1_t10.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r309_block, _r309_t4, _r309_t6;
    var _r309_t3 = this;
    var _r309_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r309_t1 = _r309_t0.length;
    var _r309_t2 = 0;
    var _r309_t5 = _r309_t2 < _r309_t1;
    while (_r309_t5) {
        _r309_t6 = (r309_block = _r309_t0[_r309_t2], r309_block(_r309_t3), _r309_t2 = _r309_t2 + 1);
        _r309_t5 = _r309_t2 < _r309_t1;
    }
    return _r309_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r313_xn$Capture_Ext$2Lrc2b) {
    var _r313_t0, _r313_t1;
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Lower-Final-Sigma", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var r314_suffix, r314_tail, r314_mk, _r314_t12, _r314_t13, _r314_t14, _r314_t15, _r314_tag16;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var r314_MarkSet = _r314_t0.MarkSet;
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_DesignParameters = _r314_t1.DesignParameters;
        var r314_SB = _r314_t1.SB;
        var r314_CAP = _r314_t1.CAP;
        var r314_XH = _r314_t1.XH;
        var r314_Descender = _r314_t1.Descender;
        var r314_TanSlope = _r314_t1.TanSlope;
        var r314_HSwToV = _r314_t1.HSwToV;
        var r314_Upward = _r314_t1.Upward;
        var r314_Downward = _r314_t1.Downward;
        var r314_Rightward = _r314_t1.Rightward;
        var r314_Leftward = _r314_t1.Leftward;
        var r314_O = _r314_t1.O;
        var r314_OX = _r314_t1.OX;
        var r314_Hook = _r314_t1.Hook;
        var r314_HookX = _r314_t1.HookX;
        var r314_AdviceStroke = _r314_t1.AdviceStroke;
        var r314_Stroke = _r314_t1.Stroke;
        var r314_HalfStroke = _r314_t1.HalfStroke;
        var r314_QuarterStroke = _r314_t1.QuarterStroke;
        var r314_MidJutCenter = _r314_t1.MidJutCenter;
        var r314_LongVJut = _r314_t1.LongVJut;
        var r314_SLAB = _r314_t1.SLAB;
        var r314_RightSB = _r314_t1.RightSB;
        var r314_Middle = _r314_t1.Middle;
        var r314_TightBendInnerDiameter = _r314_t1.TightBendInnerDiameter;
        var r314_TightBendInnerRadius = _r314_t1.TightBendInnerRadius;
        var r314_StrokeWidthBlend = _r314_t1.StrokeWidthBlend;
        var r314_ArchDepthA = _r314_t1.ArchDepthA;
        var r314_ArchDepthB = _r314_t1.ArchDepthB;
        var r314_SmallArchDepthA = _r314_t1.SmallArchDepthA;
        var r314_SmallArchDepthB = _r314_t1.SmallArchDepthB;
        var r314_xn$VERYFAR$5sIl = _r314_t1["VERY-FAR"];
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_g4 = _r314_t2.g4;
        var r314_g2 = _r314_t2.g2;
        var r314_flat = _r314_t2.flat;
        var r314_curl = _r314_t2.curl;
        var r314_straight = _r314_t2.straight;
        var r314_widths = _r314_t2.widths;
        var r314_heading = _r314_t2.heading;
        var r314_alsoThru = _r314_t2.alsoThru;
        var r314_archv = _r314_t2.archv;
        var r314_arcvh = _r314_t2.arcvh;
        var r314_dispiro = _r314_t2.dispiro;
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var r314_difference = _r314_t4.difference;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r314_Rect = _r314_t5.Rect;
        var r314_HSerif = _r314_t5.HSerif;
        var r314_VBar = _r314_t5.VBar;
        var r314_HookStart = _r314_t5.HookStart;
        var r314_flatside = _r314_t5.flatside;
        var r314_Arch = _r314_t5.Arch;
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r314_xn$selectvariant$7Hrq = _r314_t6["select-variant"];
        var _r314_t7 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r314_ExtendBelowBaseAnchors = _r314_t7.ExtendBelowBaseAnchors;
        var _r314_t8 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Arc-Hook"].resolve();
        var r314_Flat = _r314_t8.Flat;
        var _r314_t9 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r314_CyrDescender = _r314_t9.CyrDescender;
        var r314_CyrTailDescender = _r314_t9.CyrTailDescender;
        var r314_xn$TAILCURLY$5sIl = 0;
        var r314_xn$TAILSTRAIGHT$5sIl = 1;
        var r314_xn$TAILDIAGONAL$5sIl = 2;
        var r314_xn$TAILSTRAIGHTSHARPCORNER$5sIl96 = 3;
        var r314_xn$TAILDIAGONALSHARPCORNER$5sIl96 = 4;
        var r314_TailBot = -r314_LongVJut + r314_QuarterStroke;
        var r314_TailBendX = function () {
            var _r320_t0, _r320_t1;
            return Math.max(0.5 * r314_Hook, r314_HSwToV(r314_Stroke)) + Math.max(r314_TightBendInnerRadius, r314_HSwToV(r314_QuarterStroke));
        };
        var r314_TailBendY = function () {
            var _r321_t0, _r321_t1;
            return Math.max(0.5 * r314_Hook, r314_Stroke) + Math.max(r314_TightBendInnerRadius, r314_QuarterStroke);
        };
        var r314_CurlyTailKnots = function () {
            var _r322_t0, _r322_t1;
            var r322_yCurlMid = r1_mix(r314_Descender, r314_Stroke, r314_StrokeWidthBlend(0.5, 0.49));
            var r322_hookIn = Math.max(r314_HookX, r314_HSwToV(r314_Stroke) + Math.max(r314_TightBendInnerDiameter, r314_HSwToV(r314_HalfStroke)));
            return [r314_arcvh(), r314_g4(r314_Arch["adjust-x"].bot(r314_Middle), 0), r314_alsoThru(0.5, 0.1353), r314_g4.down.mid(r314_RightSB - r314_HSwToV(r314_Stroke) + r314_OX, r322_yCurlMid, r314_heading(r314_Downward)), r314_arcvh(), r314_flat(r314_RightSB - r322_hookIn + r314_OX, r314_Descender + r314_Stroke), r314_curl(Math.min(r314_RightSB - r322_hookIn + r314_OX - 1, r1_mix(r314_SB, r314_RightSB, 0.5)), r314_Descender + r314_Stroke)];
        };
        var r314_StraightTailKnots = function (r323_yHoriz, r323_xDown, r323_wHoriz) {
            var _r323_t0, _r323_t1;
            var r323_xTurn = r323_xDown - r314_TailBendX();
            var r323_yCorner = r323_yHoriz - r314_TailBendY();
            return [r314_arcvh.superness(r314_DesignParameters.tightHookSuperness), r314_flat(Math.min(r323_xTurn - r314_TanSlope * r314_Stroke, r314_Arch["adjust-x"].bot(r1_mix(r314_SB, r314_RightSB, 0.55), r314_Stroke)), r323_yHoriz, r323_wHoriz), r314_curl(r323_xTurn, r323_yHoriz, r314_heading(r314_Rightward)), r314_archv.superness(r314_DesignParameters.tightHookSuperness), r314_flat(r323_xDown, r323_yCorner, r314_heading(r314_Downward)), r314_curl(r323_xDown, r314_TailBot, r314_heading(r314_Downward))];
        };
        var r314_DiagonalTailKnots = function (r324_yHoriz, r324_xDown, r324_wHoriz) {
            var _r324_t0, _r324_t1;
            var r324_xTurn = r324_xDown - r314_TailBendX();
            var r324_yCorner = r324_yHoriz - r314_TailBendY();
            var r324_xDiagEnd = r324_xDown + r1_mix(0, r314_Descender, 0.24);
            return [r314_arcvh.superness(r314_DesignParameters.tightHookSuperness), r314_flat(Math.min(r324_xTurn - r314_TanSlope * r314_Stroke, r314_Arch["adjust-x"].bot(r1_mix(r314_SB, r314_RightSB, 0.55), r314_Stroke)), r324_yHoriz, r324_wHoriz), r314_curl(r324_xTurn, r324_yHoriz, r314_heading(r314_Rightward)), r314_archv.superness(r314_DesignParameters.tightHookSuperness), r314_flat(r324_xDown, r324_yCorner, r314_widths.rhs(r314_Stroke)), r314_curl(r324_xDiagEnd, r314_TailBot)];
        };
        var r314_FinalSigmaShape = function (r325_tail) {
            var _r325_t0, _r325_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                var r327___, _r327_t0, _r327_t1, _r327_t2, _r327_t3;
                var r327_box = new r1_Box(r314_XH, 0, r314_SB, r314_RightSB);
                var r327_Arc = r314_Flat(r327_box, new r314_xn$NamedParameterPair$2Lrc9b("sw", r314_Stroke));
                r327_currentGlyph.include(r314_dispiro(r314_widths.lhs(), r314_g4(r314_RightSB, r314_XH - r314_Hook), r314_HookStart(r314_XH), r314_flatside.ld(r314_SB, 0, r314_XH, r314_SmallArchDepthA, r314_SmallArchDepthB), (_r327_t0 = r325_tail, _r327_t0 === r314_xn$TAILCURLY$5sIl ? r314_CurlyTailKnots() : _r327_t0 === r314_xn$TAILSTRAIGHT$5sIl ? r314_StraightTailKnots(r314_Stroke, r314_RightSB, r314_widths.rhs.heading(r314_Stroke, r314_Rightward)) : _r327_t0 === r314_xn$TAILDIAGONAL$5sIl ? r314_DiagonalTailKnots(r314_Stroke, r314_RightSB, r314_widths.rhs.heading(r314_Stroke, r314_Rightward)) : (r327___ = _r327_t0, r327_Arc.hookEndR()))));
                r327_currentGlyph.include((_r327_t1 = r325_tail, _r327_t1 === r314_xn$TAILSTRAIGHT$5sIl || _r327_t1 === r314_xn$TAILDIAGONAL$5sIl ? r314_ExtendBelowBaseAnchors(r314_TailBot) : _r327_t1 === r314_xn$TAILSTRAIGHTSHARPCORNER$5sIl96 ? r314_CyrDescender.r(r314_RightSB, 0, r314_RightSB) : _r327_t1 === r314_xn$TAILDIAGONALSHARPCORNER$5sIl96 ? r314_CyrTailDescender.r(r314_RightSB, 0, r314_RightSB) : (r327___ = _r327_t1, new r314_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                    var _r332_t0, _r332_t1;
                    return void 0;
                }))));
                return void 0;
            });
        };
        var r314_StigmaShape = function (r333_tail) {
            var _r333_t0, _r333_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                var r335___, _r335_t0, _r335_t1, _r335_t2, _r335_t3;
                var r335_fine = r314_AdviceStroke(3);
                var r335_box = new r1_Box(r314_XH, 0, r314_SB, r314_RightSB);
                var r335_Arc = r314_Flat(r335_box, new r314_xn$NamedParameterPair$2Lrc9b("sw", r314_Stroke));
                r335_currentGlyph.include(r314_dispiro(r314_widths.lhs(r335_fine), r314_straight.down.start(r314_RightSB - r314_HSwToV(r335_fine), r314_XH + 0.25 * r314_Hook, r314_heading(r314_Downward)), r314_g2(r1_mix(r314_Arch["adjust-x"].top(r314_Middle), r314_RightSB - r314_HSwToV(r335_fine), 0.5), r314_XH - r314_O - r314_Hook * r314_StrokeWidthBlend(0.05, 0.025), r314_widths.lhs.heading(r314_Stroke, r314_Leftward)), r314_g4(r314_Arch["adjust-x"].top(r314_Middle), r314_XH - r314_O), r314_archv(16), r314_flatside.ld(r314_SB, 0, r314_XH, r314_SmallArchDepthA, r314_SmallArchDepthB), (_r335_t0 = r333_tail, _r335_t0 === r314_xn$TAILCURLY$5sIl ? r314_CurlyTailKnots() : _r335_t0 === r314_xn$TAILSTRAIGHT$5sIl ? r314_StraightTailKnots(r314_Stroke, r314_RightSB, r314_widths.rhs.heading(r314_Stroke, r314_Rightward)) : _r335_t0 === r314_xn$TAILDIAGONAL$5sIl ? r314_DiagonalTailKnots(r314_Stroke, r314_RightSB, r314_widths.rhs.heading(r314_Stroke, r314_Rightward)) : (r335___ = _r335_t0, r335_Arc.hookEndR()))));
                r335_currentGlyph.include((_r335_t1 = r333_tail, _r335_t1 === r314_xn$TAILSTRAIGHT$5sIl || _r335_t1 === r314_xn$TAILDIAGONAL$5sIl ? r314_ExtendBelowBaseAnchors(r314_TailBot) : _r335_t1 === r314_xn$TAILSTRAIGHTSHARPCORNER$5sIl96 ? r314_CyrDescender.r(r314_RightSB, 0, r314_RightSB) : _r335_t1 === r314_xn$TAILDIAGONALSHARPCORNER$5sIl96 ? r314_CyrTailDescender.r(r314_RightSB, 0, r314_RightSB) : (r335___ = _r335_t1, new r314_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                    var _r340_t0, _r340_t1;
                    return void 0;
                }))));
                return void 0;
            });
        };
        var r314_FinalSigmaConfig = {
            "curlyTail": [r314_xn$TAILCURLY$5sIl, "p"],
            "straightTail": [r314_xn$TAILSTRAIGHT$5sIl, "e"],
            "diagonalTail": [r314_xn$TAILDIAGONAL$5sIl, "e"],
            "straightTailSharpCorner": [r314_xn$TAILSTRAIGHTSHARPCORNER$5sIl96, "e"],
            "diagonalTailSharpCorner": [r314_xn$TAILDIAGONALSHARPCORNER$5sIl96, "e"]
        };
        var _r314_t10 = Object.entries(r314_FinalSigmaConfig)[Symbol.iterator]();
        var _r314_t11 = void 0;
        while (!(_r314_t11 = _r314_t10.next()).done) {
            _r314_t12 = _r314_t11.value;
            r314_suffix = _r314_t12[0];
            r314_tail = _r314_t12[1][0];
            r314_mk = _r314_t12[1][1];
            _r314_t12[1];
            (function () {
                r314_xn$GlyphSaveSink$2Lrc4b.save("grek/sigmaFinal." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                    var _r346_t0, _r346_t1;
                    r346_currentGlyph.include(r314_MarkSet[r314_mk]());
                    r346_currentGlyph.include(r314_FinalSigmaShape(r314_tail));
                    return void 0;
                }));
                return r314_xn$GlyphSaveSink$2Lrc4b.save("grek/stigma." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                    var _r351_t0, _r351_t1;
                    r351_currentGlyph.include(r314_MarkSet[r314_mk]());
                    r351_currentGlyph.include(r314_StigmaShape(r314_tail));
                    return void 0;
                }));
            })();
        }
        r314_xn$selectvariant$7Hrq("grek/sigmaFinal", 962);
        r314_xn$selectvariant$7Hrq("grek/stigma", 987, new r314_xn$NamedParameterPair$2Lrc9b("follow", "grek/sigmaFinal"));
        return r314_xn$GlyphSaveSink$2Lrc4b.save("grek/Stigma", 986, new r314_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
            var _r357_t0, _r357_t1;
            r357_currentGlyph.include(r314_MarkSet.capital());
            var r357_yAttach = (r314_SLAB ? r314_Stroke : 0) + r314_XH * 0.2;
            r357_currentGlyph.include(r314_difference(r314_dispiro(r314_widths.lhs(), r314_g4(r314_RightSB, r314_CAP - r314_Hook), r314_HookStart(r314_CAP), r314_flatside.ld(r314_SB, r357_yAttach, r314_CAP, r314_ArchDepthA, r314_ArchDepthB), r314_arcvh(), r314_g4(r314_Arch["adjust-x"].bot(r314_Middle), r357_yAttach + r314_O), r314_archv(), r314_g4(r1_mix(r314_Middle, r314_RightSB, 2), r357_yAttach + r314_Hook * 1.5, r314_heading(r314_Upward))), r314_Rect(r357_yAttach + r314_Hook * 1.5 - r314_O, r314_Descender, r314_Middle + r314_HSwToV(r314_HalfStroke), r314_xn$VERYFAR$5sIl)));
            r357_currentGlyph.include(r314_VBar.m(r314_Middle, 0, r357_yAttach + r314_HalfStroke));
            if (r314_SLAB) r357_currentGlyph.include(r314_HSerif.mb(r314_Middle, 0, r314_MidJutCenter));
            return void 0;
        }));
    });
    return void 0;
});


