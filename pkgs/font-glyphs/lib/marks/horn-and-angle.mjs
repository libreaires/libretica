"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "../meta/aesthetics.mjs";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DesignParameters = _r1_t9.DesignParameters;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Mark-Horn-And-Angle", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_DrawAt, r313_kdr, r313_glyphName, r313_pExtL, r313_pExtR, r313_cwMidStrokeWidth, r313_paren, _r313_t14, _r313_t17, _r313_t18, _r313_t19, _r313_t20, _r313_tag21, _r313_t23, _r313_t24, _r313_tag25;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HVContrast = _r313_t1.HVContrast;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_HookX = _r313_t1.HookX;
        var r313_ArchDepth = _r313_t1.ArchDepth;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_SquareDotScalar = _r313_t1.SquareDotScalar;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_DotRadius = _r313_t1.DotRadius;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_alsoThru = _r313_t2.alsoThru;
        var r313_quadControls = _r313_t2.quadControls;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_SquareAt = _r313_t5.SquareAt;
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskRight = _r313_t5.MaskRight;
        var r313_RingAt = _r313_t5.RingAt;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_FlipAround = _r313_t5.FlipAround;
        var r313_DotVariants = _r313_t5.DotVariants;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markExtend = _r313_t7.markExtend;
        var r313_markStroke = _r313_t7.markStroke;
        var r313_markStress = _r313_t7.markStress;
        var r313_markFine = _r313_t7.markFine;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markHalfStroke = _r313_t8.markHalfStroke;
        var r313_markMiddle = _r313_t8.markMiddle;
        var r313_markDotsRadius = _r313_t8.markDotsRadius;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r313_aboveMarkTop = _r313_t9.aboveMarkTop;
        var r313_aboveMarkBot = _r313_t9.aboveMarkBot;
        var r313_aboveMarkMid = _r313_t9.aboveMarkMid;
        var r313_aboveMarkStack = _r313_t9.aboveMarkStack;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r313_CyrKavykaShape = _r313_t10.CyrKavykaShape;
        var r313_commaAboveRadius = _r313_t10.commaAboveRadius;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Below"].resolve();
        var r313_belowMarkBot = _r313_t11.belowMarkBot;
        var r313_belowMarkTop = _r313_t11.belowMarkTop;
        var r313_belowMarkMid = _r313_t11.belowMarkMid;
        var r313_HornDim = function (r321_attX, r321_attY, r321_overshootX, r321_overshootY, r321_krY) {
            var _r321_t0, _r321_t1;
            var r321_radius = r313_commaAboveRadius;
            var r321_hornFine = Math.min(r321_radius * 0.75, r313_markFine * 1.75);
            var r321_hornStroke = Math.min(r321_radius * 1, r313_markFine * 1.75);
            var r321_startX = r321_attX + 2 * r321_radius;
            var r321_startY = r321_attY + r321_krY * r321_radius + (r313_aboveMarkTop - r313_aboveMarkBot) / 2;
            return {
                "radius": r321_radius,
                "hornFine": r321_hornFine,
                "hornStroke": r321_hornStroke,
                "startX": r321_startX,
                "startY": r321_startY
            };
        };
        var r313_HornMarkAnchor = function (r322_attX, r322_attY, r322_overshootX, r322_overshootY, r322_krY) {
            var _r322_t0, _r322_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var _r324_t1, _r324_t2;
                var _r324_t0 = r313_HornDim(r322_attX, r322_attY, r322_overshootX, r322_overshootY, r322_krY);
                var r324_radius = _r324_t0.radius;
                var r324_hornFine = _r324_t0.hornFine;
                var r324_startX = _r324_t0.startX;
                var r324_startY = _r324_t0.startY;
                r324_currentGlyph.setMarkAnchor("topRight", r322_attX, r322_attY, r324_startX, r324_startY);
                r324_currentGlyph.setBaseAnchor("aboveBraceL", r324_startX - r324_radius, r324_startY);
                r324_currentGlyph.setBaseAnchor("aboveBraceR", r324_startX - r324_radius, r324_startY);
                return void 0;
            });
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r329_t0, _r329_t1;
            return {
                "HornBaseAnchor": r313_HornBaseAnchor
            };
        });
        var r313_HornBaseAnchor = function (r330_attX, r330_attY, r330_overshootX, r330_overshootY, r330_krY) {
            var _r330_t0, _r330_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                var _r332_t1, _r332_t2;
                var _r332_t0 = r313_HornDim(r330_attX, r330_attY, r330_overshootX, r330_overshootY, r330_krY);
                var r332_radius = _r332_t0.radius;
                var r332_hornFine = _r332_t0.hornFine;
                var r332_startX = _r332_t0.startX;
                var r332_startY = _r332_t0.startY;
                r332_currentGlyph.setBaseAnchor("topRight", r332_startX, r332_startY);
                r332_currentGlyph.setBaseAnchor("aboveBraceL", r332_startX - r332_radius, r332_startY);
                r332_currentGlyph.setBaseAnchor("aboveBraceR", r332_startX - r332_radius, r332_startY);
                return void 0;
            });
        };
        var r313_HornShape = function (r336_attX, r336_attY, r336_overshootX, r336_overshootY, r336_krY) {
            var _r336_t0, _r336_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                var _r338_t1, _r338_t2;
                var _r338_t0 = r313_HornDim(r336_attX, r336_attY, r336_overshootX, r336_overshootY, r336_krY);
                var r338_radius = _r338_t0.radius;
                var r338_hornFine = _r338_t0.hornFine;
                var r338_hornStroke = _r338_t0.hornStroke;
                var r338_startX = _r338_t0.startX;
                var r338_startY = _r338_t0.startY;
                r338_currentGlyph.include(r313_union(r313_RingAt(r338_startX - r338_radius, r338_startY, r338_radius - r338_hornFine / 8), r313_dispiro(r313_g4(r338_startX + r313_OX, r338_startY, r313_widths.rhs(r338_hornFine / 4)), r313_arcvh(), r313_g4(r338_startX - r338_radius, r338_startY - r338_radius), r313_archv(), r313_g4(r338_startX - 2 * r338_radius, r338_startY), r313_arcvh(), r313_g4(r338_startX - r338_radius, r338_startY + r338_radius, r313_widths.rhs(r338_hornFine / 2)), r313_archv(), r313_g4(r338_startX, r338_startY, r313_widths.rhs(r338_hornFine)), r313_quadControls(0, 0.75, 16, {
                    "blend": function (r340_t) {
                        var _r340_t0, _r340_t1;
                        return r313_widths.rhs(r1_mix(r338_hornFine, r338_hornStroke, r340_t));
                    }
                }), r313_g4(r336_attX - r336_overshootX - r313_HSwToV(r313_HalfStroke), r336_attY - r336_overshootY - r313_Stroke, r313_widths.rhs(r338_hornStroke)))));
                return void 0;
            });
        };
        var r313_SquareHornShape = function (r341_attX, r341_attY, r341_overshootX, r341_overshootY, r341_krY) {
            var _r341_t0, _r341_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                var _r343_t1, _r343_t2;
                var _r343_t0 = r313_HornDim(r341_attX, r341_attY, r341_overshootX, r341_overshootY, r341_krY);
                var r343_r = _r343_t0.radius;
                var r343_hornFine = _r343_t0.hornFine;
                var r343_hornStroke = _r343_t0.hornStroke;
                var r343_startX = _r343_t0.startX;
                var r343_startY = _r343_t0.startY;
                var r343_radius = r343_r * r313_SquareDotScalar;
                r343_currentGlyph.include(r313_union(r313_SquareAt(r343_startX - r343_radius, r343_startY, r343_radius), r313_dispiro(r313_flat(r343_startX, r343_startY + r343_radius, r313_widths.rhs.heading(r343_hornFine, r313_Downward)), r313_curl(r343_startX, r343_startY - r343_radius), r313_quadControls(0, 0.8, 8, {
                    "blend": function (r345_t) {
                        var _r345_t0, _r345_t1;
                        return r313_widths.rhs(r1_mix(r343_hornFine, r343_hornStroke, r345_t));
                    }
                }), r313_g4(r341_attX - r341_overshootX - r313_HSwToV(r313_HalfStroke), r341_attY - r341_overshootY - r313_Stroke, r313_widths.rhs(r343_hornStroke)))));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("horn.round", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
            var _r348_t0, _r348_t1;
            r348_currentGlyph.setWidth(0);
            r348_currentGlyph.include(r313_HornShape(0, r313_XH, 0, 0, 0.5));
            r348_currentGlyph.include(r313_HornMarkAnchor(0, r313_XH, 0, 0, 0.5));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("horn.square", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
            var _r354_t0, _r354_t1;
            r354_currentGlyph.setWidth(0);
            r354_currentGlyph.include(r313_SquareHornShape(0, r313_XH, 0, 0, 0.5));
            r354_currentGlyph.include(r313_HornMarkAnchor(0, r313_XH, 0, 0, 0.5));
            return void 0;
        }));
        r313_xn$selectvariant$7Hrq("horn", 795, new r313_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r313_xn$GlyphSaveSink$2Lrc4b.save("longHorn.round", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
            var _r361_t0, _r361_t1;
            r361_currentGlyph.setWidth(0);
            r361_currentGlyph.include(r313_HornShape(0, r313_XH, r313_Width / 2, r313_ArchDepthB, 0.5));
            r361_currentGlyph.include(r313_HornMarkAnchor(0, r313_XH, r313_Width / 2, r313_ArchDepthB, 0.5));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("longHorn.square", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r367_currentGlyph) {
            var _r367_t0, _r367_t1;
            r367_currentGlyph.setWidth(0);
            r367_currentGlyph.include(r313_SquareHornShape(0, r313_XH, r313_Width / 2, r313_ArchDepthB, 0.5));
            r367_currentGlyph.include(r313_HornMarkAnchor(0, r313_XH, r313_Width / 2, r313_ArchDepthB, 0.5));
            return void 0;
        }));
        r313_xn$selectvariant$7Hrq("longHorn", null, new r313_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r313_xn$GlyphSaveSink$2Lrc4b.save("leftAngleTR", 794, new r313_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
            var _r374_t0, _r374_t1;
            r374_currentGlyph.setWidth(0);
            r374_currentGlyph.include(r313_VBar.l(0, r313_aboveMarkBot, r313_aboveMarkTop, r313_markFine * 2));
            r374_currentGlyph.include(r313_HBar.t(-1.5 * r313_markExtend, 0, r313_aboveMarkTop, r313_markFine * 2));
            r374_currentGlyph.setMarkAnchor("topRight", 0, r313_XH, 0, r313_aboveMarkTop);
            r374_currentGlyph.setBaseAnchor("aboveBraceL", -0.75 * r313_markExtend, r313_aboveMarkMid);
            r374_currentGlyph.setBaseAnchor("aboveBraceR", 0, r313_aboveMarkMid);
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("palatalHookBR", 801, new r313_xn$Capture$2Lrc8.GlyphProc(function (r383_currentGlyph) {
            var _r383_t0, _r383_t1;
            r383_currentGlyph.setWidth(0);
            r383_currentGlyph.setMarkAnchor("bottomRight", 0, 0, 0, r313_belowMarkBot);
            r383_currentGlyph.setBaseAnchor("belowBraceL", -0.5 * r313_HookX - 0.25 * r313_markExtend - r313_HSwToV(0.25 * r313_Stroke), -0.5 * r313_Hook - r313_HalfStroke);
            r383_currentGlyph.setBaseAnchor("belowBraceR", -0.5 * r313_HookX + 0.25 * r313_markExtend - r313_HSwToV(0.25 * r313_Stroke), -0.5 * r313_Hook - r313_HalfStroke);
            r383_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_flat(0, -r313_O, r313_heading(r313_Downward)), r313_curl(0, 0, r313_heading(r313_Downward)), r313_straight.left.end(-r313_HookX - r313_HSwToV(r313_HalfStroke), -r313_Hook - r313_HalfStroke)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("retroflexHookBR", 802, new r313_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
            var _r391_t0, _r391_t1;
            r391_currentGlyph.setWidth(0);
            r391_currentGlyph.setMarkAnchor("bottomRight", 0, 0, 0, r313_belowMarkBot);
            r391_currentGlyph.setBaseAnchor("belowBraceL", 0.5 * r313_HookX - 0.25 * r313_markExtend - r313_HSwToV(0.75 * r313_Stroke), -0.5 * r313_Hook - r313_HalfStroke);
            r391_currentGlyph.setBaseAnchor("belowBraceR", 0.5 * r313_HookX + 0.25 * r313_markExtend - r313_HSwToV(0.5 * r313_Stroke), -0.5 * r313_Hook - r313_HalfStroke);
            r391_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_flat(0, -r313_O, r313_heading(r313_Downward)), r313_curl(0, 0, r313_heading(r313_Downward)), r313_straight.right.end(r313_HookX - r313_HSwToV(r313_HalfStroke), -r313_Hook + r313_HalfStroke)));
            return void 0;
        }));
        var _r313_t12 = Object.entries(r313_DotVariants)[Symbol.iterator]();
        var _r313_t13 = void 0;
        while (!(_r313_t13 = _r313_t12.next()).done) {
            _r313_t14 = _r313_t13.value;
            r313_suffix = _r313_t14[0];
            r313_DrawAt = _r313_t14[1][0];
            r313_kdr = _r313_t14[1][1];
            _r313_t14[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("dotTR." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r402_currentGlyph) {
                    var _r402_t1, _r402_t2;
                    r402_currentGlyph.setWidth(0);
                    var _r402_t0 = r313_HornDim(0, r313_XH, 0, 0, 0.5);
                    var r402_radius = _r402_t0.radius;
                    var r402_startX = _r402_t0.startX;
                    var r402_startY = _r402_t0.startY;
                    var r402_r = r1_mix(r402_radius, r313_DotRadius, 0.5);
                    r402_currentGlyph.include(r313_DrawAt(+r402_startX - r402_r, 0 + r402_startY, r402_r * r313_kdr));
                    r402_currentGlyph.setMarkAnchor("topRight", 0, r313_XH, +r402_startX, 0 + r402_startY);
                    r402_currentGlyph.setBaseAnchor("aboveBraceL", +r402_startX - r402_r, 0 + r402_startY);
                    r402_currentGlyph.setBaseAnchor("aboveBraceR", +r402_startX - r402_r, 0 + r402_startY);
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("dotTL." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
                    var _r410_t1, _r410_t2;
                    r410_currentGlyph.setWidth(0);
                    var _r410_t0 = r313_HornDim(0, r313_XH, 0, 0, 0.5);
                    var r410_radius = _r410_t0.radius;
                    var r410_startX = _r410_t0.startX;
                    var r410_startY = _r410_t0.startY;
                    var r410_r = r1_mix(r410_radius, r313_DotRadius, 0.5);
                    r410_currentGlyph.include(r313_DrawAt(-r410_startX + r410_r, 0 + r410_startY, r410_r * r313_kdr));
                    r410_currentGlyph.setMarkAnchor("topLeft", 0, r313_XH, -r410_startX, 0 + r410_startY);
                    r410_currentGlyph.setBaseAnchor("aboveBraceL", -r410_startX + r410_r, 0 + r410_startY);
                    r410_currentGlyph.setBaseAnchor("aboveBraceR", -r410_startX + r410_r, 0 + r410_startY);
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("dotBL." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r418_currentGlyph) {
                    var _r418_t1, _r418_t2;
                    r418_currentGlyph.setWidth(0);
                    var _r418_t0 = r313_HornDim(0, r313_XH, 0, 0, 0.5);
                    var r418_radius = _r418_t0.radius;
                    var r418_startX = _r418_t0.startX;
                    var r418_startY = _r418_t0.startY;
                    var r418_r = r1_mix(r418_radius, r313_DotRadius, 0.5);
                    r418_currentGlyph.include(r313_DrawAt(-r418_startX + r418_r, r313_XH - r418_startY, r418_r * r313_kdr));
                    r418_currentGlyph.setMarkAnchor("bottomLeft", 0, 0, -r418_startX, r313_XH - r418_startY);
                    r418_currentGlyph.setBaseAnchor("belowBraceL", -r418_startX + r418_r, r313_XH - r418_startY);
                    r418_currentGlyph.setBaseAnchor("belowBraceR", -r418_startX + r418_r, r313_XH - r418_startY);
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("dotTR", 856, new r313_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r313_xn$selectvariant$7Hrq("dotTL", 7672, new r313_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r313_xn$selectvariant$7Hrq("dotBL", 7674, new r313_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
        r313_xn$deriveglyphs$7Hrq("commaTR", 789, "commaAbove", function (r427_src, r427_gr) {
            var _r427_t0, _r427_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r429_currentGlyph) {
                var _r429_t0, _r429_t1;
                r429_currentGlyph.setWidth(0);
                r429_currentGlyph.include(r313_xn$referglyph$1aao(r427_src));
                r429_currentGlyph.include(r313_ApparentTranslate(r313_RightSB + r313_DotRadius - r313_Middle, 0));
                r429_currentGlyph.clearAnchors();
                r429_currentGlyph.setMarkAnchor("topRight", r313_markMiddle + (r313_RightSB - r313_SB) / 2, r313_XH, r313_markMiddle + (r313_RightSB - r313_SB) / 2 + r313_DotRadius, r313_aboveMarkTop);
                r429_currentGlyph.setBaseAnchor("aboveBraceL", r313_markMiddle + (r313_RightSB - r313_SB) / 2 + r313_DotRadius, r313_aboveMarkMid);
                r429_currentGlyph.setBaseAnchor("aboveBraceR", r313_markMiddle + (r313_RightSB - r313_SB) / 2 + r313_DotRadius, r313_aboveMarkMid);
                return void 0;
            });
        });
        r313_xn$deriveglyphs$7Hrq("commaTL/asPunctuation", null, "commaAbove/asPunctuation", function (r436_src, r436_gr) {
            var _r436_t0, _r436_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r438_currentGlyph) {
                var _r438_t0, _r438_t1;
                r438_currentGlyph.setWidth(0);
                r438_currentGlyph.include(r313_xn$referglyph$1aao(r436_src));
                r438_currentGlyph.include(r313_ApparentTranslate(r313_SB - r313_DotRadius - r313_Middle, 0));
                r438_currentGlyph.clearAnchors();
                r438_currentGlyph.setMarkAnchor("topLeft", r313_markMiddle - (r313_RightSB - r313_SB) / 2, r313_XH, r313_markMiddle - (r313_RightSB - r313_SB) / 2 - r313_DotRadius, r313_aboveMarkTop);
                r438_currentGlyph.setBaseAnchor("aboveBraceL", r313_markMiddle - (r313_RightSB - r313_SB) / 2 - r313_DotRadius, r313_aboveMarkMid);
                r438_currentGlyph.setBaseAnchor("aboveBraceR", r313_markMiddle - (r313_RightSB - r313_SB) / 2 - r313_DotRadius, r313_aboveMarkMid);
                return void 0;
            });
        });
        r313_xn$deriveglyphs$7Hrq("commaBR", null, "commaBelow", function (r445_src, r445_gr) {
            var _r445_t0, _r445_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r447_currentGlyph) {
                var _r447_t0, _r447_t1;
                r447_currentGlyph.setWidth(0);
                r447_currentGlyph.include(r313_xn$referglyph$1aao(r445_src));
                r447_currentGlyph.include(r313_ApparentTranslate(r313_RightSB + r313_DotRadius - r313_Middle, 0));
                r447_currentGlyph.clearAnchors();
                r447_currentGlyph.setMarkAnchor("bottomRight", r313_markMiddle + (r313_RightSB - r313_SB) / 2, 0, r313_markMiddle + (r313_RightSB - r313_SB) / 2 + r313_DotRadius, r313_belowMarkBot);
                r447_currentGlyph.setBaseAnchor("belowBraceL", r313_markMiddle + (r313_RightSB - r313_SB) / 2 + r313_DotRadius, r313_belowMarkMid);
                r447_currentGlyph.setBaseAnchor("belowBraceR", r313_markMiddle + (r313_RightSB - r313_SB) / 2 + r313_DotRadius, r313_belowMarkMid);
                return void 0;
            });
        });
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/kavykaTR", 7670, new r313_xn$Capture$2Lrc8.GlyphProc(function (r456_currentGlyph) {
            var _r456_t0, _r456_t1;
            r456_currentGlyph.setWidth(0);
            r456_currentGlyph.include(r313_CyrKavykaShape(new r313_xn$NamedParameterPair$2Lrc9b("xMiddle", 0), new r313_xn$NamedParameterPair$2Lrc9b("width", 2 * (r313_markExtend * 1.5 - r313_HSwToV(r313_markHalfStroke))), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_aboveMarkTop), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r313_aboveMarkBot), new r313_xn$NamedParameterPair$2Lrc9b("hs", r313_markHalfStroke)));
            r456_currentGlyph.setMarkAnchor("topRight", 0, r313_XH, 0, r313_aboveMarkTop);
            r456_currentGlyph.setBaseAnchor("aboveBraceL", -0.75 * r313_markExtend, r313_aboveMarkMid);
            r456_currentGlyph.setBaseAnchor("aboveBraceR", +0.75 * r313_markExtend, r313_aboveMarkMid);
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/kavykaTL", 7671, new r313_xn$Capture$2Lrc8.GlyphProc(function (r469_currentGlyph) {
            var _r469_t0, _r469_t1;
            r469_currentGlyph.setWidth(0);
            r469_currentGlyph.include(r313_CyrKavykaShape(new r313_xn$NamedParameterPair$2Lrc9b("xMiddle", 0), new r313_xn$NamedParameterPair$2Lrc9b("width", 2 * (r313_markExtend * 1.5 - r313_HSwToV(r313_markHalfStroke))), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_aboveMarkTop), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r313_aboveMarkBot), new r313_xn$NamedParameterPair$2Lrc9b("hs", r313_markHalfStroke)));
            r469_currentGlyph.setMarkAnchor("topLeft", 0, r313_XH, 0, r313_aboveMarkTop);
            r469_currentGlyph.setBaseAnchor("aboveBraceL", -0.75 * r313_markExtend, r313_aboveMarkMid);
            r469_currentGlyph.setBaseAnchor("aboveBraceR", +0.75 * r313_markExtend, r313_aboveMarkMid);
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("rightHalfRingTR", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r482_currentGlyph) {
            var _r482_t0, _r482_t1;
            r482_currentGlyph.setWidth(0);
            r482_currentGlyph.include(r313_xn$referglyph$1aao("leftHalfRingBelow"));
            r482_currentGlyph.include(r313_FlipAround(r313_markMiddle, r313_XH / 2));
            r482_currentGlyph.clearAnchors();
            r482_currentGlyph.setMarkAnchor("topRight", r313_markMiddle, r313_XH, r313_markMiddle, r313_aboveMarkStack);
            r482_currentGlyph.setBaseAnchor("aboveBraceL", r313_markMiddle, r313_aboveMarkMid);
            r482_currentGlyph.setBaseAnchor("aboveBraceR", r313_markMiddle, r313_aboveMarkMid);
            return void 0;
        }));
        var r313_ogonekTrConfig = {
            "ogonekTR": [7 / 16, 1 / 8, 1, 0],
            "ogonekTR_Y": [3 / 16, 1, 6, 0.5]
        };
        var _r313_t15 = Object.entries(r313_ogonekTrConfig)[Symbol.iterator]();
        var _r313_t16 = void 0;
        var _r313_t22 = !(_r313_t16 = _r313_t15.next()).done;
        while (_r313_t22) {
            _r313_t17 = _r313_t16.value;
            r313_glyphName = _r313_t17[0];
            r313_pExtL = _r313_t17[1][0];
            r313_pExtR = _r313_t17[1][1];
            r313_cwMidStrokeWidth = _r313_t17[1][2];
            r313_paren = _r313_t17[1][3];
            _r313_t17[1];
            _r313_t23 = (function () {
                var r491_depth = 0 - r313_Descender - r313_markStroke;
                r313_xn$GlyphSaveSink$2Lrc4b.save(r313_glyphName, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r494_currentGlyph) {
                    var _r494_t0, _r494_t1;
                    r494_currentGlyph.setWidth(0);
                    var r494_fine = r313_AdviceStroke(8);
                    var r494_extL = r313_pExtL * r491_depth + 0.125 * r313_markStress;
                    var r494_extR = Math.max(r313_pExtR * r313_markExtend, 1.5 * r313_TanSlope * r313_markStroke);
                    var r494_turnSlope = 0.5 * ((r313_markStroke - r494_fine) / r313_markStroke - (r313_ArchDepthB - r313_ArchDepth) / r313_ArchDepth);
                    var r494_swMid = Math.min(r313_markStroke, r313_AdviceStroke(r313_cwMidStrokeWidth));
                    r494_currentGlyph.include(r313_difference(r313_dispiro(r313_g4(r313_markMiddle, 0, r313_widths.rhs.heading(r494_fine, r313_Leftward)), r313_alsoThru(0.5, 0.375 - 0.2 * r313_markStroke / r491_depth, r313_widths.rhs(r1_mix(r494_fine, r494_swMid, 0.25))), r313_g4.down.mid(r313_markMiddle - r494_extL, -0.75 * r491_depth, r313_widths.rhs.heading(r494_swMid, {
                        "x": r313_HVContrast,
                        "y": r494_turnSlope
                    })), r313_arcvh(), r313_g4(r313_markMiddle + r1_mix(-r494_extL, r494_extR, 11 / 16), -r491_depth + r313_O, r313_widths.rhs.heading(r313_markStroke, r313_Rightward)), r313_g4(r313_markMiddle + r494_extR, -r491_depth + 0.5 * r313_O, r313_heading(r313_Rightward))), r313_intersection(r313_MaskAbove(0), r313_MaskRight(r313_markMiddle))));
                    r494_currentGlyph.setMarkAnchor("trailing", r313_markMiddle, 0, r313_markMiddle + r494_extR, -r491_depth - 0.5 * r313_O - r313_markStroke);
                    r494_currentGlyph.setBaseAnchor("belowBraceL", r313_markMiddle - r494_extL - r313_paren * r313_markExtend - r313_HSwToV(0.25 * r494_swMid), -0.75 * r491_depth);
                    r494_currentGlyph.setBaseAnchor("belowBraceR", r313_markMiddle - 0.75 * r494_extL + r313_paren * r313_markExtend, -0.75 * r491_depth);
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("" + r313_glyphName + "/spacer", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r502_currentGlyph) {
                    var _r502_t0, _r502_t1;
                    r502_currentGlyph.setWidth(0);
                    r502_currentGlyph.setMarkAnchor("below", 0, 0, 0, -r491_depth - 0.5 * r313_O - r313_markStroke);
                    return void 0;
                }));
            })();
            _r313_t22 = !(_r313_t16 = _r313_t15.next()).done;
        }
        return _r313_t23;
    });
    return void 0;
});


