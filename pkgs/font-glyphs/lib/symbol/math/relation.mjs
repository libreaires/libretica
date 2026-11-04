"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
import * as _s0_t2 from "@iosevka/glyph/relation";
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
var r1_Joining = _r1_t10.Joining;
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
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Relation-Common", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var r314_dSH, _r314_t7, _r314_t8;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_DesignParameters = _r314_t1.DesignParameters;
        var r314_SB = _r314_t1.SB;
        var r314_XH = _r314_t1.XH;
        var r314_OperTop = _r314_t1.OperTop;
        var r314_OperBot = _r314_t1.OperBot;
        var r314_AdviceStroke = _r314_t1.AdviceStroke;
        var r314_RightSB = _r314_t1.RightSB;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r318_t0, _r318_t1;
            return {
                "EqualHoleWidth": r314_EqualHoleWidth
            };
        });
        var r314_EqualHoleWidth = r314_AdviceStroke(5);
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r320_t0, _r320_t1;
            return {
                "EqualHalfSpace": r314_EqualHalfSpace
            };
        });
        var r314_EqualHalfSpace = (r314_OperTop - r314_OperBot) * 2 * r314_DesignParameters.equal_wideness;
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r322_t0, _r322_t1;
            return {
                "IdentHalfSpace": r314_IdentHalfSpace
            };
        });
        var r314_IdentHalfSpace = r314_EqualHalfSpace * 1.5;
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r324_t0, _r324_t1;
            return {
                "LessSlope": r314_LessSlope
            };
        });
        var r314_LessSlope = 5 / 13 * (r314_OperTop - r314_OperBot) / (r314_RightSB - r314_SB);
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r326_t0, _r326_t1;
            return {
                "dH": r314_dH
            };
        });
        var r314_dH = r314_LessSlope * (r314_RightSB - r314_SB);
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r328_t0, _r328_t1;
            return {
                "dHSubstSimple": r314_dHSubstSimple
            };
        });
        var r314_dHSubstSimple = r314_dH * 1;
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r330_t0, _r330_t1;
            return {
                "dHElem": r314_dHElem
            };
        });
        var r314_dHElem = r314_dH * (7 / 6);
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r332_t0, _r332_t1;
            return {
                "dHSmallElem": r314_dHSmallElem
            };
        });
        var r314_dHSmallElem = r314_dH * (3 / 4);
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r334_t0, _r334_t1;
            return {
                "lessEqDist": r314_lessEqDist
            };
        });
        var r314_lessEqDist = Math.max(r314_XH * 0.16, r314_AdviceStroke(4));
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r336_t0, _r336_t1;
            return {
                "dSH": r314_dSH
            };
        });
        return r314_dSH = (r314_dH + r314_lessEqDist) * (2 / 3);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r339_xn$Capture_Ext$2Lrc2b) {
    var _r339_t0, _r339_t1;
    r339_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r339_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Relation-Equal", function (r340_xn$Capture$2Lrc8, r340_xn$ExportCapture$2Lrc4b) {
        var _r340_t9, _r340_t10;
        var _r340_t0 = r340_xn$Capture$2Lrc8;
        var r340_xn$GlyphSaveSink$2Lrc4b = _r340_t0["$GlyphSaveSink$"];
        var r340_xn$NamedParameterPair$2Lrc9b = _r340_t0["$NamedParameterPair$"];
        var r340_xn$Exec$2Lrc5 = _r340_t0["$Exec$"];
        var r340_MarkSet = _r340_t0.MarkSet;
        var _r340_t1 = r340_xn$Capture$2Lrc8.Metrics;
        var r340_Width = _r340_t1.Width;
        var r340_SB = _r340_t1.SB;
        var r340_SymbolMid = _r340_t1.SymbolMid;
        var r340_ParenTop = _r340_t1.ParenTop;
        var r340_ParenBot = _r340_t1.ParenBot;
        var r340_ApparentTranslate = _r340_t1.ApparentTranslate;
        var r340_TanSlope = _r340_t1.TanSlope;
        var r340_Rightward = _r340_t1.Rightward;
        var r340_O = _r340_t1.O;
        var r340_AdviceStroke = _r340_t1.AdviceStroke;
        var r340_Stroke = _r340_t1.Stroke;
        var r340_RightSB = _r340_t1.RightSB;
        var r340_Middle = _r340_t1.Middle;
        var r340_DotRadius = _r340_t1.DotRadius;
        var r340_ArchDepthAOf = _r340_t1.ArchDepthAOf;
        var r340_ArchDepthBOf = _r340_t1.ArchDepthBOf;
        var r340_OperatorStroke = _r340_t1.OperatorStroke;
        var _r340_t2 = r340_xn$Capture$2Lrc8.SpiroFns;
        var r340_g4 = _r340_t2.g4;
        var r340_widths = _r340_t2.widths;
        var r340_heading = _r340_t2.heading;
        var r340_dispiro = _r340_t2.dispiro;
        var _r340_t3 = r340_xn$Capture$2Lrc8.SpiroFns;
        var r340_xn$decor$0cao = _r340_t3["decor@"];
        var r340_xn$decor$0cao1 = _r340_t3["decor@@"];
        var r340_xn$decor$0cao11 = _r340_t3["decor@@@"];
        var _r340_t4 = r340_xn$Capture$2Lrc8.BooleFns;
        var r340_union = _r340_t4.union;
        var r340_intersection = _r340_t4.intersection;
        var r340_difference = _r340_t4.difference;
        var _r340_t5 = r340_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r340_Rect = _r340_t5.Rect;
        var r340_MaskLeft = _r340_t5.MaskLeft;
        var r340_MaskRight = _r340_t5.MaskRight;
        var r340_RingAt = _r340_t5.RingAt;
        var r340_RingStrokeAt = _r340_t5.RingStrokeAt;
        var r340_OShape = _r340_t5.OShape;
        var r340_OShapeOutline = _r340_t5.OShapeOutline;
        var r340_HBar = _r340_t5.HBar;
        var r340_VBar = _r340_t5.VBar;
        var r340_xn$clearanchors$1aao = _r340_t5["clear-anchors"];
        var r340_WithDotVariants = _r340_t5.WithDotVariants;
        var _r340_t6 = r340_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r340_xn$referglyph$1aao = _r340_t6["refer-glyph"];
        var r340_turned = _r340_t6.turned;
        var _r340_t7 = r340_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
        var r340_EqualHalfSpace = _r340_t7.EqualHalfSpace;
        var r340_IdentHalfSpace = _r340_t7.IdentHalfSpace;
        var r340_dH = _r340_t7.dH;
        var r340_EqualHoleWidth = _r340_t7.EqualHoleWidth;
        var _r340_t8 = r340_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Arith"].resolve();
        var r340_JunctDiamond = _r340_t8.JunctDiamond;
        r340_xn$ExportCapture$2Lrc4b(function () {
            var _r346_t0, _r346_t1;
            return {
                "EqualShape": r340_EqualShape
            };
        });
        var r340_EqualShape = function (r347_left, r347_right) {
            var _r347_t0, _r347_t1;
            return r340_union(r340_HBar.m(r347_left, r347_right, r340_SymbolMid + r340_EqualHalfSpace, r340_OperatorStroke), r340_HBar.m(r347_left, r347_right, r340_SymbolMid - r340_EqualHalfSpace, r340_OperatorStroke));
        };
        r340_EqualShape.joinCap = function (r348_x) {
            var _r348_t0, _r348_t1;
            return r340_union(r340_JunctDiamond(r348_x, r340_SymbolMid + r340_EqualHalfSpace, r340_OperatorStroke), r340_JunctDiamond(r348_x, r340_SymbolMid - r340_EqualHalfSpace, r340_OperatorStroke));
        };
        r340_xn$ExportCapture$2Lrc4b(function () {
            var _r350_t0, _r350_t1;
            return {
                "EqualHole": r340_EqualHole
            };
        });
        var r340_EqualHole = function (r351_x) {
            var _r351_t0, _r351_t1;
            return r340_VBar.m(r351_x, r340_SymbolMid - r340_EqualHalfSpace, r340_SymbolMid + r340_EqualHalfSpace, r340_EqualHoleWidth);
        };
        r340_xn$ExportCapture$2Lrc4b(function () {
            var _r353_t0, _r353_t1;
            return {
                "IdentShape": r340_IdentShape
            };
        });
        var r340_IdentShape = function (r354_left, r354_right) {
            var _r354_t0, _r354_t1;
            return r340_union(r340_HBar.m(r354_left, r354_right, r340_SymbolMid + r340_IdentHalfSpace, r340_OperatorStroke), r340_HBar.m(r354_left, r354_right, r340_SymbolMid, r340_OperatorStroke), r340_HBar.m(r354_left, r354_right, r340_SymbolMid - r340_IdentHalfSpace, r340_OperatorStroke));
        };
        r340_IdentShape.joinCap = function (r355_x) {
            var _r355_t0, _r355_t1;
            return r340_union(r340_JunctDiamond(r355_x, r340_SymbolMid + r340_IdentHalfSpace, r340_OperatorStroke), r340_JunctDiamond(r355_x, r340_SymbolMid, r340_OperatorStroke), r340_JunctDiamond(r355_x, r340_SymbolMid - r340_IdentHalfSpace, r340_OperatorStroke));
        };
        r340_xn$ExportCapture$2Lrc4b(function () {
            var _r357_t0, _r357_t1;
            return {
                "IdentHole": r340_IdentHole
            };
        });
        var r340_IdentHole = function (r358_x) {
            var _r358_t0, _r358_t1;
            return r340_VBar.m(r358_x, r340_SymbolMid - r340_IdentHalfSpace, r340_SymbolMid + r340_IdentHalfSpace, r340_EqualHoleWidth);
        };
        r340_xn$GlyphSaveSink$2Lrc4b.save("equal", "=", new r340_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
            var _r361_t0, _r361_t1;
            r361_currentGlyph.include(r340_EqualShape(r340_SB, r340_RightSB));
            return void 0;
        }));
        var r340_EqDotDistance = r340_EqualHalfSpace * 2 + r340_DotRadius * r340_OperatorStroke / r340_Stroke;
        r340_WithDotVariants("oneDotApproxEq", 8784, function (r363_DrawAt, r363_kr, r363_ov) {
            var _r363_t0, _r363_t1;
            return new r340_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                var _r365_t0, _r365_t1;
                var r365_dr = r340_DotRadius * r363_kr * r340_OperatorStroke / r340_Stroke;
                r365_currentGlyph.include(r340_xn$referglyph$1aao("equal"));
                r365_currentGlyph.include(r363_DrawAt(r340_Middle, r340_SymbolMid + r340_EqDotDistance, r365_dr - r363_ov));
                return void 0;
            });
        });
        r340_WithDotVariants("twoDotApproxEqCenter", 8785, function (r368_DrawAt, r368_kr, r368_ov) {
            var _r368_t0, _r368_t1;
            return new r340_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
                var _r370_t0, _r370_t1;
                var r370_dr = r340_DotRadius * r368_kr * r340_OperatorStroke / r340_Stroke;
                r370_currentGlyph.include(r340_xn$referglyph$1aao("equal"));
                r370_currentGlyph.include(r368_DrawAt(r340_Middle, r340_SymbolMid + r340_EqDotDistance, r370_dr - r368_ov));
                r370_currentGlyph.include(r368_DrawAt(r340_Middle, r340_SymbolMid - r340_EqDotDistance, r370_dr - r368_ov));
                return void 0;
            });
        });
        r340_WithDotVariants("twoDotApproxEq", 8786, function (r374_DrawAt, r374_kr, r374_ov) {
            var _r374_t0, _r374_t1;
            return new r340_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                var _r376_t0, _r376_t1;
                var r376_dr = r340_DotRadius * r374_kr * r340_OperatorStroke / r340_Stroke;
                r376_currentGlyph.include(r340_xn$referglyph$1aao("equal"));
                r376_currentGlyph.include(r374_DrawAt(r1_mix(r340_SB, r340_RightSB, 1 / 6), r340_SymbolMid + r340_EqDotDistance, r376_dr - r374_ov));
                r376_currentGlyph.include(r374_DrawAt(r1_mix(r340_SB, r340_RightSB, 5 / 6), r340_SymbolMid - r340_EqDotDistance, r376_dr - r374_ov));
                return void 0;
            });
        });
        r340_WithDotVariants("twoDotApproxEqAlt", 8787, function (r380_DrawAt, r380_kr, r380_ov) {
            var _r380_t0, _r380_t1;
            return new r340_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                var _r382_t0, _r382_t1;
                var r382_dr = r340_DotRadius * r380_kr * r340_OperatorStroke / r340_Stroke;
                r382_currentGlyph.include(r340_xn$referglyph$1aao("equal"));
                r382_currentGlyph.include(r380_DrawAt(r1_mix(r340_SB, r340_RightSB, 5 / 6), r340_SymbolMid + r340_EqDotDistance, r382_dr - r380_ov));
                r382_currentGlyph.include(r380_DrawAt(r1_mix(r340_SB, r340_RightSB, 1 / 6), r340_SymbolMid - r340_EqDotDistance, r382_dr - r380_ov));
                return void 0;
            });
        });
        r340_xn$GlyphSaveSink$2Lrc4b.save("ringInEqual", 8790, new r340_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
            var _r388_t0, _r388_t1;
            var r388_ringSw = r340_AdviceStroke(4);
            r388_currentGlyph.include(r340_difference(r340_xn$referglyph$1aao("equal"), r340_RingAt(r340_Middle, r340_SymbolMid, r340_EqualHalfSpace + r340_O + r388_ringSw / 2)));
            r388_currentGlyph.include(r340_RingStrokeAt(r340_Middle, r340_SymbolMid, r340_EqualHalfSpace + r388_ringSw / 2, r388_ringSw));
            return void 0;
        }));
        r340_xn$GlyphSaveSink$2Lrc4b.save("ringEqual", 8791, new r340_xn$Capture$2Lrc8.GlyphProc(function (r393_currentGlyph) {
            var _r393_t0, _r393_t1;
            r393_currentGlyph.include(r340_xn$referglyph$1aao("equal"), true, true);
            r393_currentGlyph.include(r340_MarkSet.plus());
            r393_currentGlyph.include(r340_xn$referglyph$1aao("ringAbove"));
            r393_currentGlyph.include(r340_xn$clearanchors$1aao());
            return void 0;
        }));
        r340_xn$GlyphSaveSink$2Lrc4b.save("geometricallyEquivalentTo", 8782, new r340_xn$Capture$2Lrc8.GlyphProc(function (r400_currentGlyph) {
            var _r400_t0, _r400_t1;
            var r400_ringSw = r340_AdviceStroke(4);
            var r400_halfGap = r340_EqualHalfSpace - r340_OperatorStroke / 2;
            var r400_outerRad = r340_EqualHalfSpace + r400_ringSw / 2;
            r400_currentGlyph.include(r340_difference(r340_xn$referglyph$1aao("equal"), r340_OShapeOutline.NoOvershoot(r340_SymbolMid + r340_EqualHalfSpace + r400_outerRad, r340_SymbolMid - r340_EqualHalfSpace - r400_outerRad, r340_Middle - r400_outerRad, r340_Middle + r400_outerRad, r400_ringSw, r340_ArchDepthAOf(r400_outerRad, r340_Width), r340_ArchDepthBOf(r400_outerRad, r340_Width))));
            r400_currentGlyph.include(r340_difference(r340_OShape(r340_SymbolMid + r340_EqualHalfSpace + r400_outerRad, r340_SymbolMid - r340_EqualHalfSpace - r400_outerRad, r340_Middle - r400_outerRad, r340_Middle + r400_outerRad, r400_ringSw, r340_ArchDepthAOf(r400_outerRad, r340_Width), r340_ArchDepthBOf(r400_outerRad, r340_Width)), r340_Rect(r340_SymbolMid + r400_halfGap, r340_SymbolMid - r400_halfGap, 0, r340_Width)));
            return void 0;
        }));
        r340_xn$GlyphSaveSink$2Lrc4b.save("differenceBetween", 8783, new r340_xn$Capture$2Lrc8.GlyphProc(function (r405_currentGlyph) {
            var _r405_t0, _r405_t1;
            r405_currentGlyph.include(r340_intersection(r340_Rect(r340_ParenTop, r340_SymbolMid, 0, r340_Width), r340_xn$referglyph$1aao("geometricallyEquivalentTo")));
            r405_currentGlyph.include(r340_intersection(r340_Rect(r340_SymbolMid, r340_ParenBot, 0, r340_Width), r340_xn$referglyph$1aao("equal")));
            return void 0;
        }));
        r340_xn$GlyphSaveSink$2Lrc4b.save("ident", 8801, new r340_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
            var _r410_t0, _r410_t1;
            r410_currentGlyph.include(r340_IdentShape(r340_SB, r340_RightSB));
            return void 0;
        }));
        r340_xn$GlyphSaveSink$2Lrc4b.save("iiiident", 8803, new r340_xn$Capture$2Lrc8.GlyphProc(function (r414_currentGlyph) {
            var _r414_t0, _r414_t1;
            r414_currentGlyph.include(r340_HBar.m(r340_SB, r340_RightSB, r340_SymbolMid + r340_EqualHalfSpace * 2.25, r340_OperatorStroke));
            r414_currentGlyph.include(r340_HBar.m(r340_SB, r340_RightSB, r340_SymbolMid + r340_EqualHalfSpace * 0.75, r340_OperatorStroke));
            r414_currentGlyph.include(r340_HBar.m(r340_SB, r340_RightSB, r340_SymbolMid - r340_EqualHalfSpace * 0.75, r340_OperatorStroke));
            r414_currentGlyph.include(r340_HBar.m(r340_SB, r340_RightSB, r340_SymbolMid - r340_EqualHalfSpace * 2.25, r340_OperatorStroke));
            return void 0;
        }));
        r340_xn$GlyphSaveSink$2Lrc4b.save("equivalentTo", 8781, new r340_xn$Capture$2Lrc8.GlyphProc(function (r421_currentGlyph) {
            var _r421_t0, _r421_t1;
            var r421_kArcExtY1 = 3;
            var r421_kArcExtY2 = 3 + r340_TanSlope * 2;
            var r421_kArcExtX = 2;
            r421_currentGlyph.include(r340_intersection(r340_MaskRight(r340_SB), r340_MaskLeft(r340_RightSB), r340_union(r340_dispiro(r340_widths.center(r340_OperatorStroke), r340_g4(r1_mix(r340_Middle, r340_SB, r421_kArcExtX), r340_SymbolMid + r340_EqualHalfSpace * r421_kArcExtY1), r340_g4(r340_Middle, r340_SymbolMid + r340_EqualHalfSpace, r340_heading(r340_Rightward)), r340_g4(r1_mix(r340_Middle, r340_RightSB, r421_kArcExtX), r340_SymbolMid + r340_EqualHalfSpace * r421_kArcExtY2)), r340_dispiro(r340_widths.center(r340_OperatorStroke), r340_g4(r1_mix(r340_Middle, r340_SB, r421_kArcExtX), r340_SymbolMid - r340_EqualHalfSpace * r421_kArcExtY2), r340_g4(r340_Middle, r340_SymbolMid - r340_EqualHalfSpace, r340_heading(r340_Rightward)), r340_g4(r1_mix(r340_Middle, r340_RightSB, r421_kArcExtX), r340_SymbolMid - r340_EqualHalfSpace * r421_kArcExtY1)))));
            return void 0;
        }));
        r340_xn$GlyphSaveSink$2Lrc4b.save("equalParallel", 8917, new r340_xn$Capture$2Lrc8.GlyphProc(function (r425_currentGlyph) {
            var _r425_t0, _r425_t1;
            r425_currentGlyph.include(r340_xn$referglyph$1aao("equal"), true, true);
            r425_currentGlyph.include(r340_xn$referglyph$1aao("parallel"));
            return void 0;
        }));
        r340_xn$GlyphSaveSink$2Lrc4b.save("equalDoubleSlash", 10723, new r340_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
            var _r430_t0, _r430_t1;
            r430_currentGlyph.include(r340_EqualShape(r1_mix(r340_SB, 0, 0.5), r1_mix(r340_RightSB, r340_Width, 0.5)), true, true);
            r430_currentGlyph.include(r340_xn$referglyph$1aao("slantedParallel"));
            return void 0;
        }));
        r340_xn$GlyphSaveSink$2Lrc4b.save("equalDoubleSlashTilde", 10724, new r340_xn$Capture$2Lrc8.GlyphProc(function (r435_currentGlyph) {
            var _r435_t0, _r435_t1;
            r435_currentGlyph.include(r340_xn$referglyph$1aao("equalDoubleSlash"), true, true);
            r435_currentGlyph.include(r340_MarkSet.tack());
            r435_currentGlyph.include(r340_xn$referglyph$1aao("tildeAbove"));
            r435_currentGlyph.include(r340_xn$clearanchors$1aao());
            return void 0;
        }));
        r340_xn$GlyphSaveSink$2Lrc4b.save("identDoubleSlash", 10725, new r340_xn$Capture$2Lrc8.GlyphProc(function (r442_currentGlyph) {
            var _r442_t0, _r442_t1;
            r442_currentGlyph.include(r340_IdentShape(r1_mix(r340_SB, 0, 0.5), r1_mix(r340_RightSB, r340_Width, 0.5)), true, true);
            r442_currentGlyph.include(r340_xn$referglyph$1aao("slantedParallel"));
            return void 0;
        }));
        r340_xn$GlyphSaveSink$2Lrc4b.save("recordMark", 10727, new r340_xn$Capture$2Lrc8.GlyphProc(function (r447_currentGlyph) {
            var _r447_t0, _r447_t1;
            r447_currentGlyph.include(r340_xn$referglyph$1aao("equal"), true, true);
            r447_currentGlyph.include(r340_xn$referglyph$1aao("stile"));
            return void 0;
        }));
        r340_turned("equalDot", 10854, "oneDotApproxEq", r340_Middle, r340_SymbolMid);
        r340_WithDotVariants("oneDotIdent", 10855, function (r450_DrawAt, r450_kr, r450_ov) {
            var _r450_t0, _r450_t1;
            return new r340_xn$Capture$2Lrc8.GlyphProc(function (r452_currentGlyph) {
                var _r452_t0, _r452_t1;
                var r452_dr = r340_DotRadius * r450_kr * r340_OperatorStroke / r340_Stroke;
                r452_currentGlyph.include(r340_xn$referglyph$1aao("ident"));
                r452_currentGlyph.include(r450_DrawAt(r340_Middle, r340_SymbolMid + r340_EqualHalfSpace * 0.5 + r340_EqDotDistance, r452_dr - r450_ov));
                return void 0;
            });
        });
        r340_xn$GlyphSaveSink$2Lrc4b.save("identParallel", 10856, new r340_xn$Capture$2Lrc8.GlyphProc(function (r457_currentGlyph) {
            var _r457_t0, _r457_t1;
            r457_currentGlyph.include(r340_xn$referglyph$1aao("ident"), true, true);
            r457_currentGlyph.include(r340_xn$referglyph$1aao("parallel"));
            return void 0;
        }));
        r340_xn$GlyphSaveSink$2Lrc4b.save("identInterleave", 10857, new r340_xn$Capture$2Lrc8.GlyphProc(function (r462_currentGlyph) {
            var _r462_t0, _r462_t1;
            r462_currentGlyph.include(r340_IdentShape(r1_mix(r340_SB, 0, 0.5), r1_mix(r340_RightSB, r340_Width, 0.5)), true, true);
            r462_currentGlyph.include(r340_xn$referglyph$1aao("interleave"));
            return void 0;
        }));
        r340_xn$GlyphSaveSink$2Lrc4b.save("bumpEqual", 10926, new r340_xn$Capture$2Lrc8.GlyphProc(function (r467_currentGlyph) {
            var _r467_t0, _r467_t1;
            r467_currentGlyph.include(r340_intersection(r340_Rect(r340_ParenTop, r340_SymbolMid, 0, r340_Width), r340_xn$referglyph$1aao("geometricallyEquivalentTo")));
            r467_currentGlyph.include(r340_ApparentTranslate(0, r340_EqualHalfSpace * 0.5));
            r467_currentGlyph.include(r340_HBar.m(r340_SB, r340_RightSB, r340_SymbolMid, r340_OperatorStroke));
            r467_currentGlyph.include(r340_HBar.m(r340_SB, r340_RightSB, r340_SymbolMid - r340_EqualHalfSpace * 1.5, r340_OperatorStroke));
            return void 0;
        }));
        return r340_xn$GlyphSaveSink$2Lrc4b.save("groupMark", 11218, new r340_xn$Capture$2Lrc8.GlyphProc(function (r474_currentGlyph) {
            var _r474_t0, _r474_t1;
            r474_currentGlyph.include(r340_xn$referglyph$1aao("ident"), true, true);
            r474_currentGlyph.include(r340_xn$referglyph$1aao("stile"));
            return void 0;
        }));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r479_xn$Capture_Ext$2Lrc2b) {
    var _r479_t0, _r479_t1;
    r479_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r479_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Relation-Addons", function (r480_xn$Capture$2Lrc8, r480_xn$ExportCapture$2Lrc4b) {
        var r480_EqEqBarNegation, _r480_t8, _r480_t9;
        var _r480_t0 = r480_xn$Capture$2Lrc8;
        var r480_xn$GlyphSaveSink$2Lrc4b = _r480_t0["$GlyphSaveSink$"];
        var r480_xn$NamedParameterPair$2Lrc9b = _r480_t0["$NamedParameterPair$"];
        var r480_xn$Exec$2Lrc5 = _r480_t0["$Exec$"];
        var r480_para = _r480_t0.para;
        var _r480_t1 = r480_xn$Capture$2Lrc8.Metrics;
        var r480_SymbolMid = _r480_t1.SymbolMid;
        var r480_Downward = _r480_t1.Downward;
        var r480_AdviceStroke = _r480_t1.AdviceStroke;
        var r480_Middle = _r480_t1.Middle;
        var _r480_t2 = r480_xn$Capture$2Lrc8.SpiroFns;
        var r480_flat = _r480_t2.flat;
        var r480_widths = _r480_t2.widths;
        var r480_heading = _r480_t2.heading;
        var r480_dispiro = _r480_t2.dispiro;
        var _r480_t3 = r480_xn$Capture$2Lrc8.SpiroFns;
        var r480_xn$decor$0cao = _r480_t3["decor@"];
        var r480_xn$decor$0cao1 = _r480_t3["decor@@"];
        var r480_xn$decor$0cao11 = _r480_t3["decor@@@"];
        var _r480_t4 = r480_xn$Capture$2Lrc8.BooleFns;
        var _r480_t5 = r480_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r480_t6 = r480_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r480_t7 = r480_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
        var r480_lessEqDist = _r480_t7.lessEqDist;
        var r480_dH = _r480_t7.dH;
        var r480_dSH = _r480_t7.dSH;
        r480_xn$ExportCapture$2Lrc4b(function () {
            var _r485_t0, _r485_t1;
            return {
                "lesslessSW": r480_lesslessSW,
                "muchLessSW": r480_muchLessSW,
                "lesslessSWO": r480_lesslessSWO,
                "llggHeight": r480_llggHeight
            };
        });
        var r480_lesslessSW = r480_AdviceStroke(3.5);
        var r480_muchLessSW = r480_AdviceStroke(4.5, r480_para.advanceScaleMM);
        var r480_lesslessSWO = Math.max(r480_lesslessSW, r480_lessEqDist);
        var r480_llggHeight = r480_dH * 2 + r480_lessEqDist * 2;
        r480_xn$ExportCapture$2Lrc4b(function () {
            var _r487_t0, _r487_t1;
            return {
                "EqEqBarNegationImpl": r480_EqEqBarNegationImpl
            };
        });
        var r480_EqEqBarNegationImpl = function (r488_sw, r488_y1, r488_y2) {
            var _r488_t0, _r488_t1;
            return r480_dispiro(r480_widths.center(r488_sw), r480_flat(r480_Middle + r480_lessEqDist, r488_y1 + r480_lesslessSWO, r480_heading(r480_Downward)), r480_flat(r480_Middle - r480_lessEqDist, r488_y2 - r480_lesslessSWO, r480_heading(r480_Downward)));
        };
        r480_xn$ExportCapture$2Lrc4b(function () {
            var _r490_t0, _r490_t1;
            return {
                "EqEqBarNegation": r480_EqEqBarNegation
            };
        });
        return r480_EqEqBarNegation = function () {
            var _r491_t0, _r491_t1;
            return r480_EqEqBarNegationImpl(r480_lesslessSW, r480_SymbolMid - r480_dSH + r480_lessEqDist * (2 / 3), r480_SymbolMid - r480_dSH - r480_lessEqDist);
        };
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r494_xn$Capture_Ext$2Lrc2b) {
    var _r494_t0, _r494_t1;
    r494_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r494_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Relation-Colons", function (r495_xn$Capture$2Lrc8, r495_xn$ExportCapture$2Lrc4b) {
        var _r495_t9, _r495_t10;
        var _r495_t0 = r495_xn$Capture$2Lrc8;
        var r495_xn$GlyphSaveSink$2Lrc4b = _r495_t0["$GlyphSaveSink$"];
        var r495_xn$NamedParameterPair$2Lrc9b = _r495_t0["$NamedParameterPair$"];
        var r495_xn$Exec$2Lrc5 = _r495_t0["$Exec$"];
        var _r495_t1 = r495_xn$Capture$2Lrc8.Metrics;
        var r495_Width = _r495_t1.Width;
        var r495_SB = _r495_t1.SB;
        var r495_XH = _r495_t1.XH;
        var r495_SymbolMid = _r495_t1.SymbolMid;
        var r495_PlusTop = _r495_t1.PlusTop;
        var r495_PlusBot = _r495_t1.PlusBot;
        var r495_ApparentTranslate = _r495_t1.ApparentTranslate;
        var r495_Stroke = _r495_t1.Stroke;
        var r495_DotSize = _r495_t1.DotSize;
        var r495_RightSB = _r495_t1.RightSB;
        var r495_Middle = _r495_t1.Middle;
        var r495_DotRadius = _r495_t1.DotRadius;
        var r495_OperatorStroke = _r495_t1.OperatorStroke;
        var _r495_t2 = r495_xn$Capture$2Lrc8.SpiroFns;
        var _r495_t3 = r495_xn$Capture$2Lrc8.SpiroFns;
        var r495_xn$decor$0cao = _r495_t3["decor@"];
        var r495_xn$decor$0cao1 = _r495_t3["decor@@"];
        var r495_xn$decor$0cao11 = _r495_t3["decor@@@"];
        var _r495_t4 = r495_xn$Capture$2Lrc8.BooleFns;
        var _r495_t5 = r495_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r495_HBar = _r495_t5.HBar;
        var r495_WithDotVariants = _r495_t5.WithDotVariants;
        var _r495_t6 = r495_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r495_t7 = r495_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
        var r495_ArrowShape = _r495_t7.ArrowShape;
        var _r495_t8 = r495_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Equal"].resolve();
        var r495_EqualShape = _r495_t8.EqualShape;
        var r495_ColonEqSbSquash = 0.5;
        var r495_ColonEqColonShape = function (r500_sign, r500_DrawAt, r500_kr, r500_ov) {
            var _r500_t0, _r500_t1;
            return r495_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r495_xn$Capture$2Lrc8.GlyphProc(function (r503_currentGlyph) {
                var _r503_t0, _r503_t1;
                var r503_dr = r495_DotRadius * r500_kr * r495_OperatorStroke / r495_Stroke;
                r503_currentGlyph.include(r500_DrawAt(r495_Middle, r503_dr, r503_dr - r500_ov));
                r503_currentGlyph.include(r500_DrawAt(r495_Middle, r495_XH - r503_dr, r503_dr - r500_ov));
                var r503_delta = Math.max(0, r495_Middle - r503_dr - r495_SB * r495_ColonEqSbSquash);
                r503_currentGlyph.include(r495_ApparentTranslate(r500_sign * r503_delta, r495_SymbolMid - r495_XH / 2));
                return void 0;
            }));
        };
        r495_WithDotVariants("eqColon", 8789, function (r507_DrawAt, r507_kr, r507_ov) {
            var _r507_t0, _r507_t1;
            return new r495_xn$Capture$2Lrc8.GlyphProc(function (r509_currentGlyph) {
                var _r509_t0, _r509_t1;
                r509_currentGlyph.include(r495_ColonEqColonShape(+1, r507_DrawAt, r507_kr, r507_ov));
                r509_currentGlyph.include(r495_EqualShape(r495_SB * r495_ColonEqSbSquash, r495_RightSB - r495_DotSize * r507_kr));
                return void 0;
            });
        });
        r495_WithDotVariants("colonEq", 8788, function (r512_DrawAt, r512_kr, r512_ov) {
            var _r512_t0, _r512_t1;
            return new r495_xn$Capture$2Lrc8.GlyphProc(function (r514_currentGlyph) {
                var _r514_t0, _r514_t1;
                r514_currentGlyph.include(r495_ColonEqColonShape(-1, r512_DrawAt, r512_kr, r512_ov));
                r514_currentGlyph.include(r495_EqualShape(r495_SB + r495_DotSize * r512_kr, r495_Width - r495_SB * r495_ColonEqSbSquash));
                return void 0;
            });
        });
        return r495_WithDotVariants("colonArrow", 10740, function (r517_DrawAt, r517_kr, r517_ov) {
            var _r517_t0, _r517_t1;
            return new r495_xn$Capture$2Lrc8.GlyphProc(function (r519_currentGlyph) {
                var _r519_t0, _r519_t1;
                var r519_barLeft = r495_SB + r495_DotSize * r517_kr;
                var r519_barRight = r495_Width - r495_SB * r495_ColonEqSbSquash;
                var r519_arrowHeadSize = Math.min((r495_PlusTop - r495_PlusBot) / 2, 0.75 * (r519_barRight - r519_barLeft));
                r519_currentGlyph.include(r495_ColonEqColonShape(-1, r517_DrawAt, r517_kr, r517_ov));
                r519_currentGlyph.include(r495_HBar.m(r1_mix(r495_SB, r519_barLeft, 0.8), r1_mix(r519_barLeft, r519_barRight, 0.5), r495_SymbolMid, r495_OperatorStroke));
                r519_currentGlyph.include(r495_ArrowShape(r519_barLeft, r495_SymbolMid, r519_barRight, r495_SymbolMid, r519_arrowHeadSize));
                return void 0;
            });
        });
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r525_xn$Capture_Ext$2Lrc2b) {
    var _r525_t0, _r525_t1;
    r525_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r525_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Relation-Sym", function (r526_xn$Capture$2Lrc8, r526_xn$ExportCapture$2Lrc4b) {
        var _r526_t10, _r526_t11;
        var _r526_t0 = r526_xn$Capture$2Lrc8;
        var r526_xn$GlyphSaveSink$2Lrc4b = _r526_t0["$GlyphSaveSink$"];
        var r526_xn$NamedParameterPair$2Lrc9b = _r526_t0["$NamedParameterPair$"];
        var r526_xn$Exec$2Lrc5 = _r526_t0["$Exec$"];
        var r526_MarkSet = _r526_t0.MarkSet;
        var r526_AS_BASE = _r526_t0.AS_BASE;
        var _r526_t1 = r526_xn$Capture$2Lrc8.Metrics;
        var r526_SB = _r526_t1.SB;
        var r526_SymbolMid = _r526_t1.SymbolMid;
        var r526_OperTop = _r526_t1.OperTop;
        var r526_PlusTop = _r526_t1.PlusTop;
        var r526_PlusBot = _r526_t1.PlusBot;
        var r526_ApparentTranslate = _r526_t1.ApparentTranslate;
        var r526_Stroke = _r526_t1.Stroke;
        var r526_RightSB = _r526_t1.RightSB;
        var r526_Middle = _r526_t1.Middle;
        var r526_DotRadius = _r526_t1.DotRadius;
        var r526_OperatorStroke = _r526_t1.OperatorStroke;
        var _r526_t2 = r526_xn$Capture$2Lrc8.SpiroFns;
        var _r526_t3 = r526_xn$Capture$2Lrc8.SpiroFns;
        var r526_xn$decor$0cao = _r526_t3["decor@"];
        var r526_xn$decor$0cao1 = _r526_t3["decor@@"];
        var r526_xn$decor$0cao11 = _r526_t3["decor@@@"];
        var _r526_t4 = r526_xn$Capture$2Lrc8.BooleFns;
        var _r526_t5 = r526_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r526_HBar = _r526_t5.HBar;
        var r526_xn$clearanchors$1aao = _r526_t5["clear-anchors"];
        var r526_WithDotVariants = _r526_t5.WithDotVariants;
        var _r526_t6 = r526_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r526_xn$referglyph$1aao = _r526_t6["refer-glyph"];
        var r526_VDual = _r526_t6.VDual;
        var _r526_t7 = r526_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r526_TildeShape = _r526_t7.TildeShape;
        var _r526_t8 = r526_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
        var r526_EqualHalfSpace = _r526_t8.EqualHalfSpace;
        var r526_IdentHalfSpace = _r526_t8.IdentHalfSpace;
        var _r526_t9 = r526_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Addons"].resolve();
        var r526_EqEqBarNegationImpl = _r526_t9.EqEqBarNegationImpl;
        var r526_approxDist = r526_EqualHalfSpace * 1.75;
        var r526_symMag = (r526_OperTop - r526_SymbolMid) * 0.17;
        r526_xn$ExportCapture$2Lrc4b(function () {
            var _r533_t0, _r533_t1;
            return {
                "symWave": r526_symWave
            };
        });
        var r526_symWave = function (r534_height, r534_mul, r534_sw) {
            var _r534_t0, _r534_t1;
            return r526_TildeShape(new r526_xn$NamedParameterPair$2Lrc9b("ttop", r534_height + r526_symMag * r534_mul), new r526_xn$NamedParameterPair$2Lrc9b("tbot", r534_height - r526_symMag * r534_mul), new r526_xn$NamedParameterPair$2Lrc9b("leftEnd", r526_SB), new r526_xn$NamedParameterPair$2Lrc9b("rightEnd", r526_RightSB), new r526_xn$NamedParameterPair$2Lrc9b("hs", r1_fallback(r534_sw, r526_OperatorStroke) / 2));
        };
        r526_xn$GlyphSaveSink$2Lrc4b.save("sym", 8764, r526_symWave(r526_SymbolMid, 1));
        r526_xn$GlyphSaveSink$2Lrc4b.save("flipSym", 8765, r526_symWave(r526_SymbolMid, -1));
        r526_WithDotVariants("twoDotSym", 8763, function (r542_DrawAt, r542_kr, r542_ov) {
            var _r542_t0, _r542_t1;
            return new r526_xn$Capture$2Lrc8.GlyphProc(function (r544_currentGlyph) {
                var _r544_t0, _r544_t1;
                r544_currentGlyph.include(r526_xn$referglyph$1aao("sym"), true, true);
                r544_currentGlyph.include(r542_DrawAt(r526_Middle, r526_PlusTop, r526_DotRadius * r542_kr * r526_OperatorStroke / r526_Stroke - r542_ov));
                r544_currentGlyph.include(r542_DrawAt(r526_Middle, r526_PlusBot, r526_DotRadius * r542_kr * r526_OperatorStroke / r526_Stroke - r542_ov));
                return void 0;
            });
        });
        r526_VDual("approx", 8776, "sym", r526_approxDist);
        r526_xn$GlyphSaveSink$2Lrc4b.save("aapprox", 8779, new r526_xn$Capture$2Lrc8.GlyphProc(function (r550_currentGlyph) {
            var _r550_t0, _r550_t1;
            r550_currentGlyph.include(r526_symWave(r526_SymbolMid + r526_approxDist, 1));
            r550_currentGlyph.include(r526_symWave(r526_SymbolMid, 1));
            r550_currentGlyph.include(r526_symWave(r526_SymbolMid - r526_approxDist, 1));
            return void 0;
        }));
        r526_xn$GlyphSaveSink$2Lrc4b.save("approxBar", 8778, new r526_xn$Capture$2Lrc8.GlyphProc(function (r556_currentGlyph) {
            var _r556_t0, _r556_t1;
            r556_currentGlyph.include(r526_symWave(r526_SymbolMid + r526_approxDist, 1));
            r556_currentGlyph.include(r526_symWave(r526_SymbolMid, 1));
            r556_currentGlyph.include(r526_HBar.m(r526_SB, r526_RightSB, r526_SymbolMid - r526_approxDist, r526_OperatorStroke));
            return void 0;
        }));
        r526_xn$GlyphSaveSink$2Lrc4b.save("barSym", 8770, new r526_xn$Capture$2Lrc8.GlyphProc(function (r562_currentGlyph) {
            var _r562_t0, _r562_t1;
            r562_currentGlyph.include(r526_xn$referglyph$1aao("sym"), r526_AS_BASE);
            r562_currentGlyph.include(r526_ApparentTranslate(0, -r526_approxDist / 2));
            r562_currentGlyph.include(r526_HBar.m(r526_SB, r526_RightSB, r526_SymbolMid + r526_approxDist / 2, r526_OperatorStroke));
            return void 0;
        }));
        r526_xn$GlyphSaveSink$2Lrc4b.save("symEq", 8771, new r526_xn$Capture$2Lrc8.GlyphProc(function (r568_currentGlyph) {
            var _r568_t0, _r568_t1;
            r568_currentGlyph.include(r526_xn$referglyph$1aao("sym"), r526_AS_BASE);
            r568_currentGlyph.include(r526_ApparentTranslate(0, r526_approxDist / 2));
            r568_currentGlyph.include(r526_HBar.m(r526_SB, r526_RightSB, r526_SymbolMid - r526_approxDist / 2, r526_OperatorStroke));
            return void 0;
        }));
        r526_xn$GlyphSaveSink$2Lrc4b.save("symEqEq", 8773, new r526_xn$Capture$2Lrc8.GlyphProc(function (r574_currentGlyph) {
            var _r574_t0, _r574_t1;
            var r574_sympShift = r526_approxDist + r526_IdentHalfSpace;
            r574_currentGlyph.include(r526_xn$referglyph$1aao("sym"), r526_AS_BASE);
            r574_currentGlyph.include(r526_ApparentTranslate(0, r574_sympShift / 2));
            r574_currentGlyph.include(r526_HBar.m(r526_SB, r526_RightSB, r526_SymbolMid - r574_sympShift / 2 + r526_IdentHalfSpace, r526_OperatorStroke));
            r574_currentGlyph.include(r526_HBar.m(r526_SB, r526_RightSB, r526_SymbolMid - r574_sympShift / 2, r526_OperatorStroke));
            r526_xn$GlyphSaveSink$2Lrc4b.save("symEqEqBarNegated", 8774, new r526_xn$Capture$2Lrc8.ForkGlyphProc(r574_currentGlyph, r526_EqEqBarNegationImpl(r526_OperatorStroke, r526_SymbolMid - r574_sympShift / 2 + r526_IdentHalfSpace, r526_SymbolMid - r574_sympShift / 2)));
            return void 0;
        }));
        r526_xn$GlyphSaveSink$2Lrc4b.save("flipSymEq", 8909, new r526_xn$Capture$2Lrc8.GlyphProc(function (r582_currentGlyph) {
            var _r582_t0, _r582_t1;
            r582_currentGlyph.include(r526_xn$referglyph$1aao("flipSym"), r526_AS_BASE);
            r582_currentGlyph.include(r526_ApparentTranslate(0, r526_approxDist / 2));
            r582_currentGlyph.include(r526_HBar.m(r526_SB, r526_RightSB, r526_SymbolMid - r526_approxDist / 2, r526_OperatorStroke));
            return void 0;
        }));
        r526_xn$GlyphSaveSink$2Lrc4b.save("flipSymEqEq", 8780, new r526_xn$Capture$2Lrc8.GlyphProc(function (r588_currentGlyph) {
            var _r588_t0, _r588_t1;
            var r588_sympShift = r526_approxDist + r526_IdentHalfSpace;
            r588_currentGlyph.include(r526_xn$referglyph$1aao("flipSym"), r526_AS_BASE);
            r588_currentGlyph.include(r526_ApparentTranslate(0, r588_sympShift / 2));
            r588_currentGlyph.include(r526_HBar.m(r526_SB, r526_RightSB, r526_SymbolMid - r588_sympShift / 2 + r526_IdentHalfSpace, r526_OperatorStroke));
            r588_currentGlyph.include(r526_HBar.m(r526_SB, r526_RightSB, r526_SymbolMid - r588_sympShift / 2, r526_OperatorStroke));
            return void 0;
        }));
        r526_WithDotVariants("oneDotSym", 10858, function (r593_DrawAt, r593_kr, r593_ov) {
            var _r593_t0, _r593_t1;
            return new r526_xn$Capture$2Lrc8.GlyphProc(function (r595_currentGlyph) {
                var _r595_t0, _r595_t1;
                r595_currentGlyph.include(r526_xn$referglyph$1aao("sym"), true, true);
                r595_currentGlyph.include(r593_DrawAt(r526_Middle, r526_PlusTop, r526_DotRadius * r593_kr * r526_OperatorStroke / r526_Stroke - r593_ov));
                return void 0;
            });
        });
        r526_WithDotVariants("twoDotSymAlt", 10859, function (r598_DrawAt, r598_kr, r598_ov) {
            var _r598_t0, _r598_t1;
            return new r526_xn$Capture$2Lrc8.GlyphProc(function (r600_currentGlyph) {
                var _r600_t0, _r600_t1;
                var r600_dr = r526_DotRadius * r598_kr * r526_OperatorStroke / r526_Stroke;
                r600_currentGlyph.include(r526_xn$referglyph$1aao("sym"));
                r600_currentGlyph.include(r598_DrawAt(r1_mix(r526_SB, r526_RightSB, 1 / 6), r526_PlusBot, r600_dr - r598_ov));
                r600_currentGlyph.include(r598_DrawAt(r1_mix(r526_SB, r526_RightSB, 5 / 6), r526_PlusTop, r600_dr - r598_ov));
                return void 0;
            });
        });
        r526_xn$GlyphSaveSink$2Lrc4b.save("symMinusSym", 10860, new r526_xn$Capture$2Lrc8.GlyphProc(function (r606_currentGlyph) {
            var _r606_t0, _r606_t1;
            r606_currentGlyph.include(r526_symWave(r526_SymbolMid + r526_approxDist, 1));
            r606_currentGlyph.include(r526_HBar.m(r526_SB, r526_RightSB, r526_SymbolMid, r526_OperatorStroke));
            r606_currentGlyph.include(r526_symWave(r526_SymbolMid - r526_approxDist, 1));
            return void 0;
        }));
        r526_WithDotVariants("oneDotSymEqEq", 10861, function (r610_DrawAt, r610_kr, r610_ov) {
            var _r610_t0, _r610_t1;
            return new r526_xn$Capture$2Lrc8.GlyphProc(function (r612_currentGlyph) {
                var _r612_t0, _r612_t1;
                r612_currentGlyph.include(r526_xn$referglyph$1aao("symEqEq"), true, true);
                r612_currentGlyph.include(r610_DrawAt(r526_Middle, r526_PlusTop + r526_IdentHalfSpace, r526_DotRadius * r610_kr * r526_OperatorStroke / r526_Stroke - r610_ov));
                return void 0;
            });
        });
        r526_xn$GlyphSaveSink$2Lrc4b.save("approxCircumflex", 10863, new r526_xn$Capture$2Lrc8.GlyphProc(function (r617_currentGlyph) {
            var _r617_t0, _r617_t1;
            r617_currentGlyph.include(r526_xn$referglyph$1aao("approx"), true, true);
            r617_currentGlyph.include(r526_MarkSet.plus());
            r617_currentGlyph.include(r526_xn$referglyph$1aao("circumflexAbove"));
            r617_currentGlyph.include(r526_xn$clearanchors$1aao());
            return void 0;
        }));
        r526_xn$GlyphSaveSink$2Lrc4b.save("approxEqEq", 10864, new r526_xn$Capture$2Lrc8.GlyphProc(function (r624_currentGlyph) {
            var _r624_t0, _r624_t1;
            r624_currentGlyph.include(r526_symWave(r526_SymbolMid + r526_approxDist * 1.375, 1));
            r624_currentGlyph.include(r526_symWave(r526_SymbolMid + r526_approxDist * 0.375, 1));
            r624_currentGlyph.include(r526_HBar.m(r526_SB, r526_RightSB, r526_SymbolMid - r526_approxDist * 1.5 + r526_IdentHalfSpace, r526_OperatorStroke));
            r624_currentGlyph.include(r526_HBar.m(r526_SB, r526_RightSB, r526_SymbolMid - r526_approxDist * 1.5, r526_OperatorStroke));
            return void 0;
        }));
        return r526_xn$GlyphSaveSink$2Lrc4b.save("eqEqSym", 10867, new r526_xn$Capture$2Lrc8.GlyphProc(function (r631_currentGlyph) {
            var _r631_t0, _r631_t1;
            var r631_sympShift = r526_approxDist + r526_IdentHalfSpace;
            r631_currentGlyph.include(r526_xn$referglyph$1aao("sym"), r526_AS_BASE);
            r631_currentGlyph.include(r526_ApparentTranslate(0, -r631_sympShift / 2));
            r631_currentGlyph.include(r526_HBar.m(r526_SB, r526_RightSB, r526_SymbolMid + r631_sympShift / 2 - r526_IdentHalfSpace, r526_OperatorStroke));
            r631_currentGlyph.include(r526_HBar.m(r526_SB, r526_RightSB, r526_SymbolMid + r631_sympShift / 2, r526_OperatorStroke));
            return void 0;
        }));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r638_xn$Capture_Ext$2Lrc2b) {
    var _r638_t0, _r638_t1;
    r638_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r638_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Relation-Inequality", function (r639_xn$Capture$2Lrc8, r639_xn$ExportCapture$2Lrc4b) {
        var _r639_t10, _r639_t11, _r639_t12, _r639_tag13;
        var _r639_t0 = r639_xn$Capture$2Lrc8;
        var r639_xn$GlyphSaveSink$2Lrc4b = _r639_t0["$GlyphSaveSink$"];
        var r639_xn$NamedParameterPair$2Lrc9b = _r639_t0["$NamedParameterPair$"];
        var r639_xn$Exec$2Lrc5 = _r639_t0["$Exec$"];
        var r639_para = _r639_t0.para;
        var r639_DivFrame = _r639_t0.DivFrame;
        var _r639_t1 = r639_xn$Capture$2Lrc8.Metrics;
        var r639_Width = _r639_t1.Width;
        var r639_SB = _r639_t1.SB;
        var r639_SymbolMid = _r639_t1.SymbolMid;
        var r639_ApparentTranslate = _r639_t1.ApparentTranslate;
        var r639_HSwToV = _r639_t1.HSwToV;
        var r639_Rightward = _r639_t1.Rightward;
        var r639_Leftward = _r639_t1.Leftward;
        var r639_O = _r639_t1.O;
        var r639_AdviceStroke = _r639_t1.AdviceStroke;
        var r639_Stroke = _r639_t1.Stroke;
        var r639_RightSB = _r639_t1.RightSB;
        var r639_Middle = _r639_t1.Middle;
        var r639_DotRadius = _r639_t1.DotRadius;
        var r639_OperatorStroke = _r639_t1.OperatorStroke;
        var _r639_t2 = r639_xn$Capture$2Lrc8.SpiroFns;
        var r639_corner = _r639_t2.corner;
        var r639_flat = _r639_t2.flat;
        var r639_curl = _r639_t2.curl;
        var r639_widths = _r639_t2.widths;
        var r639_heading = _r639_t2.heading;
        var r639_dispiro = _r639_t2.dispiro;
        var r639_xn$spirooutline$1aao = _r639_t2["spiro-outline"];
        var _r639_t3 = r639_xn$Capture$2Lrc8.SpiroFns;
        var r639_xn$decor$0cao = _r639_t3["decor@"];
        var r639_xn$decor$0cao1 = _r639_t3["decor@@"];
        var r639_xn$decor$0cao11 = _r639_t3["decor@@@"];
        var _r639_t4 = r639_xn$Capture$2Lrc8.BooleFns;
        var r639_union = _r639_t4.union;
        var r639_intersection = _r639_t4.intersection;
        var r639_difference = _r639_t4.difference;
        var _r639_t5 = r639_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r639_Rect = _r639_t5.Rect;
        var r639_MaskRight = _r639_t5.MaskRight;
        var r639_Ellipse = _r639_t5.Ellipse;
        var r639_HBar = _r639_t5.HBar;
        var r639_ExtLineLhs = _r639_t5.ExtLineLhs;
        var r639_ExtLineRhs = _r639_t5.ExtLineRhs;
        var r639_WithDotVariants = _r639_t5.WithDotVariants;
        var _r639_t6 = r639_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r639_xn$referglyph$1aao = _r639_t6["refer-glyph"];
        var r639_xn$selectvariant$7Hrq = _r639_t6["select-variant"];
        var r639_xn$derivecomposites$7Hrq = _r639_t6["derive-composites"];
        var r639_alias = _r639_t6.alias;
        var r639_turned = _r639_t6.turned;
        var _r639_t7 = r639_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
        var r639_dH = _r639_t7.dH;
        var r639_dSH = _r639_t7.dSH;
        var r639_lessEqDist = _r639_t7.lessEqDist;
        var _r639_t8 = r639_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Sym"].resolve();
        var r639_symWave = _r639_t8.symWave;
        var _r639_t9 = r639_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Addons"].resolve();
        var r639_lesslessSW = _r639_t9.lesslessSW;
        var r639_muchLessSW = _r639_t9.muchLessSW;
        var r639_llggHeight = _r639_t9.llggHeight;
        r639_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Addon-Glyphs"].resolve();
        var r639_LessGreaterExpansion = function (r646_top, r646_bot, r646_l, r646_r) {
            var _r646_t0, _r646_t1;
            return Math.hypot(1, 0.5 * (r646_top - r646_bot) / (r646_r - r646_l));
        };
        var r639_LessMaskShape = function (r647_top, r647_bot, r647_l, r647_r) {
            var _r647_t0, _r647_t1;
            return r639_xn$spirooutline$1aao(r639_corner(r647_r, r647_top), r639_corner(r647_r, r647_bot), r639_corner(r647_l, r1_mix(r647_bot, r647_top, 0.5)));
        };
        var r639_GreaterMaskShape = function (r648_top, r648_bot, r648_l, r648_r) {
            var _r648_t0, _r648_t1;
            return r639_xn$spirooutline$1aao(r639_corner(r648_l, r648_top), r639_corner(r648_l, r648_bot), r639_corner(r648_r, r1_mix(r648_bot, r648_top, 0.5)));
        };
        var r639_LessShapeHalf = function (r649_sign, r649_top, r649_bot, r649_l, r649_r, r649_s, r649_p) {
            var _r649_t0, _r649_t1;
            var r649_exp = r639_LessGreaterExpansion(r649_top, r649_bot, r649_l, r649_r);
            var r649_expAmend = Math.min(Math.SQRT2, r649_exp);
            var r649_endAdj = 0.5 * r649_s * (r649_exp - r649_expAmend);
            var r649_pp = r1_fallback(r649_p, 1);
            return r639_dispiro(r639_widths.center(r649_s), r639_flat(r1_mix(r649_l, r649_r, r649_pp), r1_mix(r1_mix(r649_top, r649_bot, 0.5), r1_mix(r649_bot, r649_top, r649_sign), r649_pp)), r639_curl(r649_l - r649_endAdj, r1_mix(r649_top, r649_bot, 0.5), r639_widths.center.heading(r649_s * r649_expAmend, r639_Leftward)));
        };
        var r639_GreaterShapeHalf = function (r650_sign, r650_top, r650_bot, r650_l, r650_r, r650_s, r650_p) {
            var _r650_t0, _r650_t1;
            var r650_exp = r639_LessGreaterExpansion(r650_top, r650_bot, r650_l, r650_r);
            var r650_expAmend = Math.min(Math.SQRT2, r650_exp);
            var r650_endAdj = 0.5 * r650_s * (r650_exp - r650_expAmend);
            var r650_pp = r1_fallback(r650_p, 1);
            return r639_dispiro(r639_widths.center(r650_s), r639_flat(r1_mix(r650_r, r650_l, r650_pp), r1_mix(r1_mix(r650_top, r650_bot, 0.5), r1_mix(r650_bot, r650_top, r650_sign), r650_pp)), r639_curl(r650_r + r650_endAdj, r1_mix(r650_top, r650_bot, 0.5), r639_widths.center.heading(r650_s * r650_expAmend, r639_Rightward)));
        };
        r639_xn$ExportCapture$2Lrc4b(function () {
            var _r652_t0, _r652_t1;
            return {
                "LessShape": r639_LessShape
            };
        });
        var r639_LessShape = function (r653_top, r653_bot, r653_l, r653_r, r653_s) {
            var _r653_t0, _r653_t1;
            return r639_union(r639_LessShapeHalf(0, r653_top, r653_bot, r653_l, r653_r, r1_fallback(r653_s, r639_OperatorStroke)), r639_LessShapeHalf(1, r653_top, r653_bot, r653_l, r653_r, r1_fallback(r653_s, r639_OperatorStroke)));
        };
        r639_xn$ExportCapture$2Lrc4b(function () {
            var _r655_t0, _r655_t1;
            return {
                "LigationLessShape": r639_LigationLessShape
            };
        });
        var r639_LigationLessShape = function (r656_top, r656_bot, r656_l, r656_r, r656_s, r656_t, r656_gap) {
            var _r656_t0, _r656_t1;
            return r639_union(r639_intersection(r639_Rect(r1_mix(r656_bot, r656_top, 2), r1_mix(r656_top, r656_bot, 2), r1_mix(r656_r, r656_l, 2), r656_r), r639_union(r639_LessShapeHalf(0, r656_top, r656_bot, r656_l, r656_r, r1_fallback(r656_s, r639_OperatorStroke), 2), r639_LessShapeHalf(1, r656_top, r656_bot, r656_l, r656_r, r1_fallback(r656_s, r639_OperatorStroke), 2))), r639_intersection(r639_LessMaskShape(r656_top, r656_bot, r656_l, r656_r), r639_difference(r639_ExtLineLhs(r656_r, r656_bot, r656_r, r656_top, r1_fallback(r656_t, r639_OperatorStroke)), r639_Rect(r1_mix(r656_top, r656_bot, 0.5) + r656_gap / 2, r1_mix(r656_top, r656_bot, 0.5) - r656_gap / 2, r656_l + r639_O, r656_r - r639_O))));
        };
        var r639_NormalSubsetShape = function (r657_top, r657_bot, r657_l, r657_r, r657_s) {
            var _r657_t0, _r657_t1;
            return r639_LigationLessShape(r657_top, r657_bot, r657_l, r657_r, r657_s, r657_s, 0);
        };
        var r639_AntirestrictionLeftShape = function (r658_top, r658_bot, r658_l, r658_r, r658_s, r658_s2) {
            var _r658_t0, _r658_t1;
            return r639_union(r639_NormalSubsetShape(r658_top, r658_bot, r658_l, r658_r, r658_s), r639_intersection(r639_LessMaskShape(r658_top, r658_bot, r658_l, r658_r), r639_HBar.m(r658_l, r658_r, r1_mix(r658_top, r658_bot, 0.5), r1_fallback(r658_s2, r658_s, r639_OperatorStroke))));
        };
        var r639_SmallerShape = function (r659_top, r659_bot, r659_l, r659_r, r659_s) {
            var _r659_t0, _r659_t1;
            return r639_union(r639_LessShape(r659_top, r659_bot, r659_l, r659_r, r659_s), r639_intersection(r639_LessMaskShape(r659_top, r659_bot, r659_l, r659_r), r639_HBar.m(r659_l, r659_r, r1_mix(r659_top, r659_bot, 0.5), r1_fallback(r659_s, r639_OperatorStroke))));
        };
        r639_xn$ExportCapture$2Lrc4b(function () {
            var _r661_t0, _r661_t1;
            return {
                "GreaterShape": r639_GreaterShape
            };
        });
        var r639_GreaterShape = function (r662_top, r662_bot, r662_l, r662_r, r662_s) {
            var _r662_t0, _r662_t1;
            return r639_union(r639_GreaterShapeHalf(0, r662_top, r662_bot, r662_l, r662_r, r1_fallback(r662_s, r639_OperatorStroke)), r639_GreaterShapeHalf(1, r662_top, r662_bot, r662_l, r662_r, r1_fallback(r662_s, r639_OperatorStroke)));
        };
        r639_xn$ExportCapture$2Lrc4b(function () {
            var _r664_t0, _r664_t1;
            return {
                "LigationGreaterShape": r639_LigationGreaterShape
            };
        });
        var r639_LigationGreaterShape = function (r665_top, r665_bot, r665_l, r665_r, r665_s, r665_t, r665_gap) {
            var _r665_t0, _r665_t1;
            return r639_union(r639_intersection(r639_Rect(r1_mix(r665_bot, r665_top, 2), r1_mix(r665_top, r665_bot, 2), r1_mix(r665_l, r665_r, 2), r665_l), r639_union(r639_GreaterShapeHalf(0, r665_top, r665_bot, r665_l, r665_r, r1_fallback(r665_s, r639_OperatorStroke), 2), r639_GreaterShapeHalf(1, r665_top, r665_bot, r665_l, r665_r, r1_fallback(r665_s, r639_OperatorStroke), 2))), r639_intersection(r639_GreaterMaskShape(r665_top, r665_bot, r665_l, r665_r), r639_difference(r639_ExtLineRhs(r665_l, r665_bot, r665_l, r665_top, r1_fallback(r665_t, r639_OperatorStroke)), r639_Rect(r1_mix(r665_top, r665_bot, 0.5) + r665_gap / 2, r1_mix(r665_top, r665_bot, 0.5) - r665_gap / 2, r665_l + r639_O, r665_r - r639_O))));
        };
        var r639_NormalSupersetShape = function (r666_top, r666_bot, r666_l, r666_r, r666_s) {
            var _r666_t0, _r666_t1;
            return r639_LigationGreaterShape(r666_top, r666_bot, r666_l, r666_r, r666_s, r666_s, 0);
        };
        var r639_AntirestrictionRightShape = function (r667_top, r667_bot, r667_l, r667_r, r667_s, r667_s2) {
            var _r667_t0, _r667_t1;
            return r639_union(r639_NormalSupersetShape(r667_top, r667_bot, r667_l, r667_r, r667_s), r639_intersection(r639_GreaterMaskShape(r667_top, r667_bot, r667_l, r667_r), r639_HBar.m(r667_l, r667_r, r1_mix(r667_top, r667_bot, 0.5), r1_fallback(r667_s2, r667_s, r639_OperatorStroke))));
        };
        var r639_LargerShape = function (r668_top, r668_bot, r668_l, r668_r, r668_s) {
            var _r668_t0, _r668_t1;
            return r639_union(r639_GreaterShape(r668_top, r668_bot, r668_l, r668_r, r668_s), r639_intersection(r639_GreaterMaskShape(r668_top, r668_bot, r668_l, r668_r), r639_HBar.m(r668_l, r668_r, r1_mix(r668_top, r668_bot, 0.5), r1_fallback(r668_s, r639_OperatorStroke))));
        };
        r639_xn$GlyphSaveSink$2Lrc4b.save("less", "<", new r639_xn$Capture$2Lrc8.GlyphProc(function (r671_currentGlyph) {
            var _r671_t0, _r671_t1;
            r671_currentGlyph.include(r639_LessShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB, r639_RightSB));
            return void 0;
        }));
        r639_WithDotVariants("lessDot", 8918, function (r673_DrawAt, r673_kr, r673_ov) {
            var _r673_t0, _r673_t1;
            return new r639_xn$Capture$2Lrc8.GlyphProc(function (r675_currentGlyph) {
                var _r675_t0, _r675_t1;
                r675_currentGlyph.include(r639_LessShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB, r639_RightSB, r639_AdviceStroke(4)), true, true);
                r675_currentGlyph.include(r673_DrawAt(r639_RightSB - r639_DotRadius, r639_SymbolMid, r639_DotRadius * r673_kr * r639_AdviceStroke(4) / r639_Stroke - r673_ov));
                return void 0;
            });
        });
        r639_xn$GlyphSaveSink$2Lrc4b.save("observerEye", 9215, new r639_xn$Capture$2Lrc8.GlyphProc(function (r680_currentGlyph) {
            var _r680_t0, _r680_t1;
            var r680_lensXP = 0.8;
            var r680_lensRX = (r639_RightSB - r639_SB) * (1 - r680_lensXP) + r639_HSwToV(0.25 * r639_OperatorStroke);
            var r680_lensRY = r639_dH * r680_lensXP + 0.25 * r639_OperatorStroke;
            r680_currentGlyph.include(r639_xn$referglyph$1aao("less"));
            r680_currentGlyph.include(r639_intersection(r639_union(r639_LessMaskShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB, r639_RightSB), r639_MaskRight(r639_RightSB)), r639_Ellipse.Outline.At(r1_mix(r639_SB, r639_RightSB, r680_lensXP), r639_SymbolMid, r680_lensRX, r680_lensRY)));
            return void 0;
        }));
        r639_xn$GlyphSaveSink$2Lrc4b.save("normalSubsetOf", 8882, new r639_xn$Capture$2Lrc8.GlyphProc(function (r685_currentGlyph) {
            var _r685_t0, _r685_t1;
            r685_currentGlyph.include(r639_NormalSubsetShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB, r639_RightSB));
            return void 0;
        }));
        r639_xn$GlyphSaveSink$2Lrc4b.save("zNotationDomainAntirestriction", 10852, new r639_xn$Capture$2Lrc8.GlyphProc(function (r689_currentGlyph) {
            var _r689_t0, _r689_t1;
            r689_currentGlyph.include(r639_AntirestrictionLeftShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB, r639_RightSB, r639_OperatorStroke, r639_AdviceStroke(4.5)));
            return void 0;
        }));
        r639_xn$GlyphSaveSink$2Lrc4b.save("smaller", 10922, new r639_xn$Capture$2Lrc8.GlyphProc(function (r693_currentGlyph) {
            var _r693_t0, _r693_t1;
            r693_currentGlyph.include(r639_SmallerShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB, r639_RightSB));
            return void 0;
        }));
        r639_xn$GlyphSaveSink$2Lrc4b.save("greater", ">", new r639_xn$Capture$2Lrc8.GlyphProc(function (r697_currentGlyph) {
            var _r697_t0, _r697_t1;
            r697_currentGlyph.include(r639_GreaterShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB, r639_RightSB));
            return void 0;
        }));
        r639_WithDotVariants("greaterDot", 8919, function (r699_DrawAt, r699_kr, r699_ov) {
            var _r699_t0, _r699_t1;
            return new r639_xn$Capture$2Lrc8.GlyphProc(function (r701_currentGlyph) {
                var _r701_t0, _r701_t1;
                r701_currentGlyph.include(r639_GreaterShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB, r639_RightSB, r639_AdviceStroke(4)), true, true);
                r701_currentGlyph.include(r699_DrawAt(r639_SB + r639_DotRadius, r639_SymbolMid, r639_DotRadius * r699_kr * r639_AdviceStroke(4) / r639_Stroke - r699_ov));
                return void 0;
            });
        });
        r639_xn$GlyphSaveSink$2Lrc4b.save("normalSupersetOf", 8883, new r639_xn$Capture$2Lrc8.GlyphProc(function (r706_currentGlyph) {
            var _r706_t0, _r706_t1;
            r706_currentGlyph.include(r639_NormalSupersetShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB, r639_RightSB));
            return void 0;
        }));
        r639_xn$GlyphSaveSink$2Lrc4b.save("zNotationRangeAntirestriction", 10853, new r639_xn$Capture$2Lrc8.GlyphProc(function (r710_currentGlyph) {
            var _r710_t0, _r710_t1;
            r710_currentGlyph.include(r639_AntirestrictionRightShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB, r639_RightSB, r639_OperatorStroke, r639_AdviceStroke(4.5)));
            return void 0;
        }));
        r639_xn$GlyphSaveSink$2Lrc4b.save("larger", 10923, new r639_xn$Capture$2Lrc8.GlyphProc(function (r714_currentGlyph) {
            var _r714_t0, _r714_t1;
            r714_currentGlyph.include(r639_LargerShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB, r639_RightSB));
            return void 0;
        }));
        r639_xn$GlyphSaveSink$2Lrc4b.save("lessEqUpper", null, r639_LessShape(r639_SymbolMid + r639_dSH + r639_lessEqDist, r639_SymbolMid - r639_dSH + r639_lessEqDist, r639_SB, r639_RightSB));
        r639_xn$GlyphSaveSink$2Lrc4b.save("greaterEqUpper", null, r639_GreaterShape(r639_SymbolMid + r639_dSH + r639_lessEqDist, r639_SymbolMid - r639_dSH + r639_lessEqDist, r639_SB, r639_RightSB));
        r639_xn$GlyphSaveSink$2Lrc4b.save("normalSubsetUpper", null, r639_NormalSubsetShape(r639_SymbolMid + r639_dSH + r639_lessEqDist, r639_SymbolMid - r639_dSH + r639_lessEqDist, r639_SB, r639_RightSB));
        r639_xn$GlyphSaveSink$2Lrc4b.save("normalSupersetUpper", null, r639_NormalSupersetShape(r639_SymbolMid + r639_dSH + r639_lessEqDist, r639_SymbolMid - r639_dSH + r639_lessEqDist, r639_SB, r639_RightSB));
        r639_xn$GlyphSaveSink$2Lrc4b.save("smallerEqUpper", null, r639_SmallerShape(r639_SymbolMid + r639_dSH + r639_lessEqDist, r639_SymbolMid - r639_dSH + r639_lessEqDist, r639_SB, r639_RightSB));
        r639_xn$GlyphSaveSink$2Lrc4b.save("largerEqUpper", null, r639_LargerShape(r639_SymbolMid + r639_dSH + r639_lessEqDist, r639_SymbolMid - r639_dSH + r639_lessEqDist, r639_SB, r639_RightSB));
        r639_xn$derivecomposites$7Hrq("less.narrow", null, "lessEqUpper", r639_ApparentTranslate(0, -r639_lessEqDist));
        r639_xn$derivecomposites$7Hrq("lessEq", 8804, "lessEqUpper", "eqLower");
        r639_xn$derivecomposites$7Hrq("lessEqBarNegated", 10887, "lessEqUpper", "eqBarNegatedLower");
        r639_xn$derivecomposites$7Hrq("lessSym", 8818, "lessEqUpper", "symLower");
        r639_xn$derivecomposites$7Hrq("lessSymBarNegated", 8934, "lessEqUpper", "symBarNegatedLower");
        r639_xn$derivecomposites$7Hrq("lessEqSlant", 10877, "lessEqUpper", r639_LessShapeHalf(0, r639_SymbolMid + r639_dH - r639_lessEqDist, r639_SymbolMid - r639_dH - r639_lessEqDist, r639_SB, r639_RightSB, r639_OperatorStroke));
        r639_WithDotVariants("lessEqSlantDot", 10879, function (r722_DrawAt, r722_kr, r722_ov) {
            var _r722_t0, _r722_t1;
            return new r639_xn$Capture$2Lrc8.GlyphProc(function (r724_currentGlyph) {
                var _r724_t0, _r724_t1;
                r724_currentGlyph.include(r639_LessShape(r639_SymbolMid + r639_dSH + r639_lessEqDist, r639_SymbolMid - r639_dSH + r639_lessEqDist, r639_SB, r639_RightSB, r639_AdviceStroke(4)), true, true);
                r724_currentGlyph.include(r639_LessShapeHalf(0, r639_SymbolMid + r639_dH - r639_lessEqDist, r639_SymbolMid - r639_dH - r639_lessEqDist, r639_SB, r639_RightSB, r639_AdviceStroke(4)));
                r724_currentGlyph.include(r722_DrawAt(r639_RightSB - r639_DotRadius, r639_SymbolMid + r639_lessEqDist, r639_DotRadius * r722_kr * r639_AdviceStroke(4) / r639_Stroke - r722_ov));
                return void 0;
            });
        });
        r639_xn$derivecomposites$7Hrq("greater.narrow", null, "greaterEqUpper", r639_ApparentTranslate(0, -r639_lessEqDist));
        r639_xn$derivecomposites$7Hrq("greaterEq", 8805, "greaterEqUpper", "eqLower");
        r639_xn$derivecomposites$7Hrq("greaterEqBarNegated", 10888, "greaterEqUpper", "eqBarNegatedLower");
        r639_xn$derivecomposites$7Hrq("greaterSym", 8819, "greaterEqUpper", "symLower");
        r639_xn$derivecomposites$7Hrq("greaterSymBarNegated", 8935, "greaterEqUpper", "symBarNegatedLower");
        r639_xn$derivecomposites$7Hrq("greaterEqSlant", 10878, "greaterEqUpper", r639_GreaterShapeHalf(0, r639_SymbolMid + r639_dH - r639_lessEqDist, r639_SymbolMid - r639_dH - r639_lessEqDist, r639_SB, r639_RightSB, r639_OperatorStroke));
        r639_WithDotVariants("greaterEqSlantDot", 10880, function (r728_DrawAt, r728_kr, r728_ov) {
            var _r728_t0, _r728_t1;
            return new r639_xn$Capture$2Lrc8.GlyphProc(function (r730_currentGlyph) {
                var _r730_t0, _r730_t1;
                r730_currentGlyph.include(r639_GreaterShape(r639_SymbolMid + r639_dSH + r639_lessEqDist, r639_SymbolMid - r639_dSH + r639_lessEqDist, r639_SB, r639_RightSB, r639_AdviceStroke(4)), true, true);
                r730_currentGlyph.include(r639_GreaterShapeHalf(0, r639_SymbolMid + r639_dH - r639_lessEqDist, r639_SymbolMid - r639_dH - r639_lessEqDist, r639_SB, r639_RightSB, r639_AdviceStroke(4)));
                r730_currentGlyph.include(r728_DrawAt(r639_SB + r639_DotRadius, r639_SymbolMid + r639_lessEqDist, r639_DotRadius * r728_kr * r639_AdviceStroke(4) / r639_Stroke - r728_ov));
                return void 0;
            });
        });
        r639_xn$derivecomposites$7Hrq("normalSubsetEq", 8884, "normalSubsetUpper", "eqLower");
        r639_xn$derivecomposites$7Hrq("normalSupersetEq", 8885, "normalSupersetUpper", "eqLower");
        r639_xn$derivecomposites$7Hrq("smallerEq", 10924, "smallerEqUpper", "eqLower");
        r639_xn$derivecomposites$7Hrq("largerEq", 10925, "largerEqUpper", "eqLower");
        r639_turned("turnGreaterEq", 8924, "greaterEq", r639_Middle, r639_SymbolMid);
        r639_turned("turnLessEq", 8925, "lessEq", r639_Middle, r639_SymbolMid);
        (function () {
            var r735_l = 0.3 * r639_Width;
            var r735_r = 2 * r639_Width - r735_l;
            var r735_l2 = r735_l - r639_Width;
            var r735_r2 = r735_r - r639_Width;
            r639_xn$GlyphSaveSink$2Lrc4b.save("less.lig2", null, new r639_xn$Capture$2Lrc8.GlyphProc(function (r738_currentGlyph) {
                var _r738_t0, _r738_t1;
                r1_Joining.set(r738_currentGlyph, r1_Joining.Classes.Right);
                r738_currentGlyph.include(r639_LessShape(r639_SymbolMid + r639_dH + r639_lessEqDist, r639_SymbolMid - r639_dH + r639_lessEqDist, r735_l, r735_r));
                return void 0;
            }));
            r639_xn$GlyphSaveSink$2Lrc4b.save("greater.lig2", null, new r639_xn$Capture$2Lrc8.GlyphProc(function (r742_currentGlyph) {
                var _r742_t0, _r742_t1;
                r1_Joining.set(r742_currentGlyph, r1_Joining.Classes.Right);
                r742_currentGlyph.include(r639_GreaterShape(r639_SymbolMid + r639_dH + r639_lessEqDist, r639_SymbolMid - r639_dH + r639_lessEqDist, r735_l, r735_r));
                return void 0;
            }));
            r639_xn$GlyphSaveSink$2Lrc4b.save("eq.at-lteq.lig2.flat", null, new r639_xn$Capture$2Lrc8.GlyphProc(function (r746_currentGlyph) {
                var _r746_t0, _r746_t1;
                r1_Joining.set(r746_currentGlyph, r1_Joining.Classes.Left);
                r746_currentGlyph.include(r639_HBar.m(r735_l2, r735_r2, r639_SymbolMid - r639_dH - r639_lessEqDist, r639_OperatorStroke));
                r639_xn$GlyphSaveSink$2Lrc4b.save("eq.at-gteq.lig2.flat", null, new r639_xn$Capture$2Lrc8.ForkGlyphProc(r746_currentGlyph, null));
                return void 0;
            }));
            r639_xn$GlyphSaveSink$2Lrc4b.save("eq.at-lteq.lig2.slanted", null, new r639_xn$Capture$2Lrc8.GlyphProc(function (r752_currentGlyph) {
                var _r752_t0, _r752_t1;
                r1_Joining.set(r752_currentGlyph, r1_Joining.Classes.Left);
                r752_currentGlyph.include(r639_LessShapeHalf(0, r639_SymbolMid + r639_dH - r639_lessEqDist, r639_SymbolMid - r639_dH - r639_lessEqDist, r735_l2, r735_r2, r639_OperatorStroke));
                return void 0;
            }));
            return r639_xn$GlyphSaveSink$2Lrc4b.save("eq.at-gteq.lig2.slanted", null, new r639_xn$Capture$2Lrc8.GlyphProc(function (r756_currentGlyph) {
                var _r756_t0, _r756_t1;
                r1_Joining.set(r756_currentGlyph, r1_Joining.Classes.Left);
                r756_currentGlyph.include(r639_GreaterShapeHalf(0, r639_SymbolMid + r639_dH - r639_lessEqDist, r639_SymbolMid - r639_dH - r639_lessEqDist, r735_l2, r735_r2, r639_OperatorStroke));
                return void 0;
            }));
        })();
        r639_xn$selectvariant$7Hrq("eq.at-lteq.lig2");
        r639_xn$selectvariant$7Hrq("eq.at-gteq.lig2");
        r639_xn$GlyphSaveSink$2Lrc4b.save("lessEqEqUpper", null, r639_LessShape(r639_SymbolMid + r639_dSH + r639_lessEqDist, r639_SymbolMid - r639_dSH + r639_lessEqDist * 1.75, r639_SB, r639_RightSB, r639_lesslessSW));
        r639_xn$GlyphSaveSink$2Lrc4b.save("greaterEqEqUpper", null, r639_GreaterShape(r639_SymbolMid + r639_dSH + r639_lessEqDist, r639_SymbolMid - r639_dSH + r639_lessEqDist * 1.75, r639_SB, r639_RightSB, r639_lesslessSW));
        r639_xn$derivecomposites$7Hrq("lessEqEq", 8806, "lessEqEqUpper", "eqEqLower");
        r639_xn$derivecomposites$7Hrq("greaterEqEq", 8807, "greaterEqEqUpper", "eqEqLower");
        r639_xn$derivecomposites$7Hrq("lessEqEqBarNegated", 8808, "lessEqEqUpper", "eqEqBarNegatedLower");
        r639_xn$derivecomposites$7Hrq("greaterEqEqBarNegated", 8809, "greaterEqEqUpper", "eqEqBarNegatedLower");
        r639_xn$derivecomposites$7Hrq("lessSymSym", 10885, "lessEqEqUpper", "symSymLower");
        r639_xn$derivecomposites$7Hrq("greaterSymSym", 10886, "greaterEqEqUpper", "symSymLower");
        r639_xn$derivecomposites$7Hrq("lessSymSymBarNegated", 10889, "lessEqEqUpper", "symSymBarNegatedLower");
        r639_xn$derivecomposites$7Hrq("greaterSymSymBarNegated", 10890, "greaterEqEqUpper", "symSymBarNegatedLower");
        r639_xn$derivecomposites$7Hrq("lessSymEq", 10893, "lessEqEqUpper", "symEqLower");
        r639_xn$derivecomposites$7Hrq("greaterSymEq", 10894, "greaterEqEqUpper", "symEqLower");
        r639_turned("turnGreaterEqSlant", 10901, "greaterEqSlant", r639_Middle, r639_SymbolMid);
        r639_turned("turnLessEqSlant", 10902, "lessEqSlant", r639_Middle, r639_SymbolMid);
        r639_turned("turnGreaterEqSlantDot", 10903, "greaterEqSlantDot", r639_Middle, r639_SymbolMid);
        r639_turned("turnLessEqSlantDot", 10904, "lessEqSlantDot", r639_Middle, r639_SymbolMid);
        r639_turned("turnGreaterEqEq", 10905, "greaterEqEq", r639_Middle, r639_SymbolMid);
        r639_turned("turnLessEqEq", 10906, "lessEqEq", r639_Middle, r639_SymbolMid);
        r639_turned("turnGreaterSym", 10909, "greaterSym", r639_Middle, r639_SymbolMid);
        r639_turned("turnLessSym", 10910, "lessSym", r639_Middle, r639_SymbolMid);
        r639_xn$GlyphSaveSink$2Lrc4b.save("lessGreater", 8822, new r639_xn$Capture$2Lrc8.GlyphProc(function (r762_currentGlyph) {
            var _r762_t0, _r762_t1;
            r762_currentGlyph.include(r639_LessShape(r639_SymbolMid + r639_llggHeight / 2, r639_SymbolMid - r639_llggHeight / 6 + r639_lessEqDist, r639_SB, r639_RightSB, r639_lesslessSW));
            r762_currentGlyph.include(r639_GreaterShape(r639_SymbolMid + r639_llggHeight / 6 - r639_lessEqDist, r639_SymbolMid - r639_llggHeight / 2, r639_SB, r639_RightSB, r639_lesslessSW));
            return void 0;
        }));
        r639_xn$GlyphSaveSink$2Lrc4b.save("greaterLess", 8823, new r639_xn$Capture$2Lrc8.GlyphProc(function (r767_currentGlyph) {
            var _r767_t0, _r767_t1;
            r767_currentGlyph.include(r639_GreaterShape(r639_SymbolMid + r639_llggHeight / 2, r639_SymbolMid - r639_llggHeight / 6 + r639_lessEqDist, r639_SB, r639_RightSB, r639_lesslessSW));
            r767_currentGlyph.include(r639_LessShape(r639_SymbolMid + r639_llggHeight / 6 - r639_lessEqDist, r639_SymbolMid - r639_llggHeight / 2, r639_SB, r639_RightSB, r639_lesslessSW));
            return void 0;
        }));
        r639_xn$GlyphSaveSink$2Lrc4b.save("lessEqGreater", 8922, new r639_xn$Capture$2Lrc8.GlyphProc(function (r772_currentGlyph) {
            var _r772_t0, _r772_t1;
            r772_currentGlyph.include(r639_LessShape(r639_SymbolMid + r639_llggHeight / 2 + r639_lessEqDist, r639_SymbolMid - r639_llggHeight / 6 + r639_lessEqDist * 2, r639_SB, r639_RightSB, r639_lesslessSW));
            r772_currentGlyph.include(r639_GreaterShape(r639_SymbolMid + r639_llggHeight / 6 - r639_lessEqDist * 2, r639_SymbolMid - r639_llggHeight / 2 - r639_lessEqDist, r639_SB, r639_RightSB, r639_lesslessSW));
            r772_currentGlyph.include(r639_HBar.m(r639_SB, r639_RightSB, r639_SymbolMid, r639_lesslessSW));
            return void 0;
        }));
        r639_xn$GlyphSaveSink$2Lrc4b.save("greaterEqLess", 8923, new r639_xn$Capture$2Lrc8.GlyphProc(function (r778_currentGlyph) {
            var _r778_t0, _r778_t1;
            r778_currentGlyph.include(r639_GreaterShape(r639_SymbolMid + r639_llggHeight / 2 + r639_lessEqDist, r639_SymbolMid - r639_llggHeight / 6 + r639_lessEqDist * 2, r639_SB, r639_RightSB, r639_lesslessSW));
            r778_currentGlyph.include(r639_LessShape(r639_SymbolMid + r639_llggHeight / 6 - r639_lessEqDist * 2, r639_SymbolMid - r639_llggHeight / 2 - r639_lessEqDist, r639_SB, r639_RightSB, r639_lesslessSW));
            r778_currentGlyph.include(r639_HBar.m(r639_SB, r639_RightSB, r639_SymbolMid, r639_lesslessSW));
            return void 0;
        }));
        r639_xn$GlyphSaveSink$2Lrc4b.save("normalSupersetNormalSubset", 10702, new r639_xn$Capture$2Lrc8.GlyphProc(function (r784_currentGlyph) {
            var _r784_t0, _r784_t1;
            r784_currentGlyph.include(r639_NormalSupersetShape(r639_SymbolMid + r639_llggHeight / 2, r639_SymbolMid - r639_llggHeight / 6 + r639_lessEqDist, r639_SB, r639_RightSB, r639_lesslessSW));
            r784_currentGlyph.include(r639_NormalSubsetShape(r639_SymbolMid + r639_llggHeight / 6 - r639_lessEqDist, r639_SymbolMid - r639_llggHeight / 2, r639_SB, r639_RightSB, r639_lesslessSW));
            return void 0;
        }));
        r639_xn$GlyphSaveSink$2Lrc4b.save("lessless", 8810, new r639_xn$Capture$2Lrc8.GlyphProc(function (r789_currentGlyph) {
            var _r789_t0, _r789_t1;
            r789_currentGlyph.include(r639_LessShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB - r639_lessEqDist / 2, r639_RightSB - r639_lessEqDist * 2, r639_lesslessSW));
            r789_currentGlyph.include(r639_LessShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB + r639_lessEqDist * 2, r639_RightSB + r639_lessEqDist / 2, r639_lesslessSW));
            return void 0;
        }));
        r639_xn$GlyphSaveSink$2Lrc4b.save("greatergreater", 8811, new r639_xn$Capture$2Lrc8.GlyphProc(function (r794_currentGlyph) {
            var _r794_t0, _r794_t1;
            r794_currentGlyph.include(r639_GreaterShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB - r639_lessEqDist / 2, r639_RightSB - r639_lessEqDist * 2, r639_lesslessSW));
            r794_currentGlyph.include(r639_GreaterShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r639_SB + r639_lessEqDist * 2, r639_RightSB + r639_lessEqDist / 2, r639_lesslessSW));
            return void 0;
        }));
        r639_alias("zNotationSchemaPiping", 10784, "greatergreater");
        r639_xn$GlyphSaveSink$2Lrc4b.save("muchLess", 8920, new r639_xn$Capture$2Lrc8.GlyphProc(function (r799_currentGlyph) {
            var _r799_t0, _r799_t1;
            var r799_df = r799_currentGlyph.include(r639_DivFrame(r639_para.advanceScaleMM, 3));
            r799_currentGlyph.include(r639_LessShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r1_mix(r799_df.leftSB, r799_df.rightSB, 0 / 3), r1_mix(r799_df.leftSB, r799_df.rightSB, 1 / 3), r639_muchLessSW));
            r799_currentGlyph.include(r639_LessShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r1_mix(r799_df.leftSB, r799_df.rightSB, 1 / 3), r1_mix(r799_df.leftSB, r799_df.rightSB, 2 / 3), r639_muchLessSW));
            r799_currentGlyph.include(r639_LessShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r1_mix(r799_df.leftSB, r799_df.rightSB, 2 / 3), r1_mix(r799_df.leftSB, r799_df.rightSB, 3 / 3), r639_muchLessSW));
            return void 0;
        }));
        return r639_xn$GlyphSaveSink$2Lrc4b.save("muchGreater", 8921, new r639_xn$Capture$2Lrc8.GlyphProc(function (r806_currentGlyph) {
            var _r806_t0, _r806_t1;
            var r806_df = r806_currentGlyph.include(r639_DivFrame(r639_para.advanceScaleMM, 3));
            r806_currentGlyph.include(r639_GreaterShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r1_mix(r806_df.leftSB, r806_df.rightSB, 0 / 3), r1_mix(r806_df.leftSB, r806_df.rightSB, 1 / 3), r639_muchLessSW));
            r806_currentGlyph.include(r639_GreaterShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r1_mix(r806_df.leftSB, r806_df.rightSB, 1 / 3), r1_mix(r806_df.leftSB, r806_df.rightSB, 2 / 3), r639_muchLessSW));
            r806_currentGlyph.include(r639_GreaterShape(r639_SymbolMid + r639_dH, r639_SymbolMid - r639_dH, r1_mix(r806_df.leftSB, r806_df.rightSB, 2 / 3), r1_mix(r806_df.leftSB, r806_df.rightSB, 3 / 3), r639_muchLessSW));
            return void 0;
        }));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r813_xn$Capture_Ext$2Lrc2b) {
    var _r813_t0, _r813_t1;
    r813_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r813_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Relation-Precedes-Succeeds", function (r814_xn$Capture$2Lrc8, r814_xn$ExportCapture$2Lrc4b) {
        var _r814_t9, _r814_t10;
        var _r814_t0 = r814_xn$Capture$2Lrc8;
        var r814_xn$GlyphSaveSink$2Lrc4b = _r814_t0["$GlyphSaveSink$"];
        var r814_xn$NamedParameterPair$2Lrc9b = _r814_t0["$NamedParameterPair$"];
        var r814_xn$Exec$2Lrc5 = _r814_t0["$Exec$"];
        var _r814_t1 = r814_xn$Capture$2Lrc8.Metrics;
        var r814_SB = _r814_t1.SB;
        var r814_SymbolMid = _r814_t1.SymbolMid;
        var r814_ApparentTranslate = _r814_t1.ApparentTranslate;
        var r814_Rightward = _r814_t1.Rightward;
        var r814_Leftward = _r814_t1.Leftward;
        var r814_CThin = _r814_t1.CThin;
        var r814_RightSB = _r814_t1.RightSB;
        var r814_Middle = _r814_t1.Middle;
        var r814_OperatorStroke = _r814_t1.OperatorStroke;
        var _r814_t2 = r814_xn$Capture$2Lrc8.SpiroFns;
        var r814_g4 = _r814_t2.g4;
        var r814_end = _r814_t2.end;
        var r814_straight = _r814_t2.straight;
        var r814_widths = _r814_t2.widths;
        var r814_heading = _r814_t2.heading;
        var r814_dispiro = _r814_t2.dispiro;
        var _r814_t3 = r814_xn$Capture$2Lrc8.SpiroFns;
        var r814_xn$decor$0cao = _r814_t3["decor@"];
        var r814_xn$decor$0cao1 = _r814_t3["decor@@"];
        var r814_xn$decor$0cao11 = _r814_t3["decor@@@"];
        var _r814_t4 = r814_xn$Capture$2Lrc8.BooleFns;
        var _r814_t5 = r814_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r814_t6 = r814_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r814_xn$derivecomposites$7Hrq = _r814_t6["derive-composites"];
        var r814_turned = _r814_t6.turned;
        var _r814_t7 = r814_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
        var r814_dH = _r814_t7.dH;
        var r814_dSH = _r814_t7.dSH;
        var r814_lessEqDist = _r814_t7.lessEqDist;
        var _r814_t8 = r814_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Addons"].resolve();
        var r814_lesslessSW = _r814_t8.lesslessSW;
        r814_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Addon-Glyphs"].resolve();
        var r814_PrecedesShapeA = function (r820_top, r820_bot, r820_l, r820_r, r820_s, r820_cth) {
            var _r820_t0, _r820_t1;
            var r820_fine = r820_s * r820_cth;
            return r814_dispiro(r814_widths.center(r820_s), r814_g4(r820_r, r820_top), r814_straight.left.end(r820_l, r1_mix(r820_top, r820_bot, 0.5) + r820_s / 2, r814_widths.heading(r820_fine, 0, r814_Leftward)));
        };
        var r814_PrecedesShapeB = function (r821_top, r821_bot, r821_l, r821_r, r821_s, r821_cth) {
            var _r821_t0, _r821_t1;
            var r821_fine = r821_s * r821_cth;
            return r814_dispiro(r814_widths.center(r821_s), r814_g4(r821_r, r821_bot), r814_straight.left.end(r821_l, r1_mix(r821_top, r821_bot, 0.5) - r821_s / 2, r814_widths.heading(0, r821_fine, r814_Leftward)));
        };
        var r814_SucceedsShapeA = function (r822_top, r822_bot, r822_l, r822_r, r822_s, r822_cth) {
            var _r822_t0, _r822_t1;
            var r822_fine = r822_s * r822_cth;
            return r814_dispiro(r814_widths.center(r822_s), r814_g4(r822_l, r822_top), r814_straight.right.end(r822_r, r1_mix(r822_top, r822_bot, 0.5) + r822_s / 2, r814_widths.heading(0, r822_fine, r814_Rightward)));
        };
        var r814_SucceedsShapeB = function (r823_top, r823_bot, r823_l, r823_r, r823_s, r823_cth) {
            var _r823_t0, _r823_t1;
            var r823_fine = r823_s * r823_cth;
            return r814_dispiro(r814_widths.center(r823_s), r814_g4(r823_l, r823_bot), r814_straight.right.end(r823_r, r1_mix(r823_top, r823_bot, 0.5) - r823_s / 2, r814_widths.heading(r823_fine, 0, r814_Rightward)));
        };
        var r814_PrecedesShape = function (r824_top, r824_bot, r824_l, r824_r, r824_s) {
            var _r824_t0, _r824_t1;
            return new r814_xn$Capture$2Lrc8.GlyphProc(function (r826_currentGlyph) {
                var _r826_t0, _r826_t1;
                r826_currentGlyph.include(r814_PrecedesShapeA(r824_top, r824_bot, r824_l, r824_r, r1_fallback(r824_s, r814_OperatorStroke), r814_CThin));
                r826_currentGlyph.include(r814_PrecedesShapeB(r824_top, r824_bot, r824_l, r824_r, r1_fallback(r824_s, r814_OperatorStroke), r814_CThin));
                return void 0;
            });
        };
        var r814_SucceedsShape = function (r829_top, r829_bot, r829_l, r829_r, r829_s) {
            var _r829_t0, _r829_t1;
            return new r814_xn$Capture$2Lrc8.GlyphProc(function (r831_currentGlyph) {
                var _r831_t0, _r831_t1;
                r831_currentGlyph.include(r814_SucceedsShapeA(r829_top, r829_bot, r829_l, r829_r, r1_fallback(r829_s, r814_OperatorStroke), r814_CThin));
                r831_currentGlyph.include(r814_SucceedsShapeB(r829_top, r829_bot, r829_l, r829_r, r1_fallback(r829_s, r814_OperatorStroke), r814_CThin));
                return void 0;
            });
        };
        r814_xn$GlyphSaveSink$2Lrc4b.save("precedes", 8826, r814_PrecedesShape(r814_SymbolMid + r814_dH, r814_SymbolMid - r814_dH, r814_SB, r814_RightSB));
        r814_xn$GlyphSaveSink$2Lrc4b.save("succeeds", 8827, r814_SucceedsShape(r814_SymbolMid + r814_dH, r814_SymbolMid - r814_dH, r814_SB, r814_RightSB));
        r814_xn$GlyphSaveSink$2Lrc4b.save("precedesEqUpper", null, r814_PrecedesShape(r814_SymbolMid + r814_dSH + r814_lessEqDist, r814_SymbolMid - r814_dSH + r814_lessEqDist, r814_SB, r814_RightSB));
        r814_xn$GlyphSaveSink$2Lrc4b.save("precedesEqEqUpper", null, r814_PrecedesShape(r814_SymbolMid + r814_dSH + r814_lessEqDist, r814_SymbolMid - r814_dSH + r814_lessEqDist * 1.75, r814_SB, r814_RightSB, r814_lesslessSW));
        r814_xn$GlyphSaveSink$2Lrc4b.save("succeedsEqUpper", null, r814_SucceedsShape(r814_SymbolMid + r814_dSH + r814_lessEqDist, r814_SymbolMid - r814_dSH + r814_lessEqDist, r814_SB, r814_RightSB));
        r814_xn$GlyphSaveSink$2Lrc4b.save("succeedsEqEqUpper", null, r814_SucceedsShape(r814_SymbolMid + r814_dSH + r814_lessEqDist, r814_SymbolMid - r814_dSH + r814_lessEqDist * 1.75, r814_SB, r814_RightSB, r814_lesslessSW));
        r814_xn$derivecomposites$7Hrq("precedes.narrow", null, "precedesEqUpper", r814_ApparentTranslate(0, -r814_lessEqDist));
        r814_xn$derivecomposites$7Hrq("precedesEq", 10927, "precedesEqUpper", "eqLower");
        r814_xn$derivecomposites$7Hrq("precedesEqBarNegated", 10929, "precedesEqUpper", "eqBarNegatedLower");
        r814_xn$derivecomposites$7Hrq("precedesSym", 8830, "precedesEqUpper", "symLower");
        r814_xn$derivecomposites$7Hrq("precedesSymBarNegated", 8936, "precedesEqUpper", "symBarNegatedLower");
        r814_xn$derivecomposites$7Hrq("precedesEqSlant", 8828, "precedesEqUpper", r814_PrecedesShapeB(r814_SymbolMid + r814_dH - r814_lessEqDist, r814_SymbolMid - r814_dH - r814_lessEqDist, r814_SB, r814_RightSB, r814_OperatorStroke, 1));
        r814_xn$derivecomposites$7Hrq("precedesEqEq", 10931, "precedesEqEqUpper", "eqEqLower");
        r814_xn$derivecomposites$7Hrq("precedesEqEqBarNegated", 10933, "precedesEqEqUpper", "eqEqBarNegatedLower");
        r814_xn$derivecomposites$7Hrq("precedesSymSym", 10935, "precedesEqEqUpper", "symSymLower");
        r814_xn$derivecomposites$7Hrq("precedesSymSymBarNegated", 10937, "precedesEqEqUpper", "symSymBarNegatedLower");
        r814_xn$derivecomposites$7Hrq("succeeds.narrow", null, "succeedsEqUpper", r814_ApparentTranslate(0, -r814_lessEqDist));
        r814_xn$derivecomposites$7Hrq("succeedsEq", 10928, "succeedsEqUpper", "eqLower");
        r814_xn$derivecomposites$7Hrq("succeedsEqBarNegated", 10930, "succeedsEqUpper", "eqBarNegatedLower");
        r814_xn$derivecomposites$7Hrq("succeedsSym", 8831, "succeedsEqUpper", "symLower");
        r814_xn$derivecomposites$7Hrq("succeedsSymBarNegated", 8937, "succeedsEqUpper", "symBarNegatedLower");
        r814_xn$derivecomposites$7Hrq("succeedsEqSlant", 8829, "succeedsEqUpper", r814_SucceedsShapeB(r814_SymbolMid + r814_dH - r814_lessEqDist, r814_SymbolMid - r814_dH - r814_lessEqDist, r814_SB, r814_RightSB, r814_OperatorStroke, 1));
        r814_xn$derivecomposites$7Hrq("succeedsEqEq", 10932, "succeedsEqEqUpper", "eqEqLower");
        r814_xn$derivecomposites$7Hrq("succeedsEqEqBarNegated", 10934, "succeedsEqEqUpper", "eqEqBarNegatedLower");
        r814_xn$derivecomposites$7Hrq("succeedsSymSym", 10936, "succeedsEqEqUpper", "symSymLower");
        r814_xn$derivecomposites$7Hrq("succeedsSymSymBarNegated", 10938, "succeedsEqEqUpper", "symSymBarNegatedLower");
        r814_turned("turnSucceedsEqSlant", 8926, "succeedsEqSlant", r814_Middle, r814_SymbolMid);
        return r814_turned("turnPrecedesEqSlant", 8927, "precedesEqSlant", r814_Middle, r814_SymbolMid);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r842_xn$Capture_Ext$2Lrc2b) {
    var _r842_t0, _r842_t1;
    r842_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r842_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Relation-Precedes-Succeeds-Under-Relation", function (r843_xn$Capture$2Lrc8, r843_xn$ExportCapture$2Lrc4b) {
        var _r843_t8, _r843_t9;
        var _r843_t0 = r843_xn$Capture$2Lrc8;
        var r843_xn$GlyphSaveSink$2Lrc4b = _r843_t0["$GlyphSaveSink$"];
        var r843_xn$NamedParameterPair$2Lrc9b = _r843_t0["$NamedParameterPair$"];
        var r843_xn$Exec$2Lrc5 = _r843_t0["$Exec$"];
        var _r843_t1 = r843_xn$Capture$2Lrc8.Metrics;
        var r843_SB = _r843_t1.SB;
        var r843_SymbolMid = _r843_t1.SymbolMid;
        var r843_Upward = _r843_t1.Upward;
        var r843_Downward = _r843_t1.Downward;
        var r843_Rightward = _r843_t1.Rightward;
        var r843_Leftward = _r843_t1.Leftward;
        var r843_O = _r843_t1.O;
        var r843_CThin = _r843_t1.CThin;
        var r843_RightSB = _r843_t1.RightSB;
        var r843_OperatorStroke = _r843_t1.OperatorStroke;
        var _r843_t2 = r843_xn$Capture$2Lrc8.SpiroFns;
        var r843_g4 = _r843_t2.g4;
        var r843_end = _r843_t2.end;
        var r843_straight = _r843_t2.straight;
        var r843_widths = _r843_t2.widths;
        var r843_heading = _r843_t2.heading;
        var r843_archv = _r843_t2.archv;
        var r843_arcvh = _r843_t2.arcvh;
        var r843_dispiro = _r843_t2.dispiro;
        var _r843_t3 = r843_xn$Capture$2Lrc8.SpiroFns;
        var r843_xn$decor$0cao = _r843_t3["decor@"];
        var r843_xn$decor$0cao1 = _r843_t3["decor@@"];
        var r843_xn$decor$0cao11 = _r843_t3["decor@@@"];
        var _r843_t4 = r843_xn$Capture$2Lrc8.BooleFns;
        var _r843_t5 = r843_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r843_FlipAround = _r843_t5.FlipAround;
        var _r843_t6 = r843_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r843_t7 = r843_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
        var r843_dH = _r843_t7.dH;
        var r843_PrecedesUnderRelationShape = function (r847_t, r847_b, r847_l, r847_r, r847_s) {
            var _r847_t0, _r847_t1;
            return new r843_xn$Capture$2Lrc8.GlyphProc(function (r849_currentGlyph) {
                var _r849_t0, _r849_t1;
                var r849_yBias = r847_s * 0.375;
                var r849_fine = r847_s * r843_CThin;
                var r849_hookDepth = Math.max((r847_r - r847_l) / 4, r847_s * 2);
                var r849_hookWidth = Math.max((r847_t - r847_b) / 6, r847_s * 1.25);
                r849_currentGlyph.include(r843_dispiro(r843_straight.right.start(r847_r - r849_hookDepth, r847_t - r843_O + r849_yBias, r843_widths.rhs.heading(r847_s, r843_Rightward)), r843_archv(), r843_g4.down.mid(r847_r, r847_t - r849_hookWidth + r849_yBias, r843_heading(r843_Downward)), r843_arcvh(), r843_straight.left.end(r847_l, r1_mix(r847_t, r847_b, 0.5) + r847_s / 2 - r849_fine, r843_widths.rhs.heading(r849_fine, r843_Leftward))));
                r849_currentGlyph.include(r843_dispiro(r843_straight.right.start(r847_r - r849_hookDepth, r847_b + r843_O - r849_yBias, r843_widths.lhs.heading(r847_s, r843_Rightward)), r843_archv(), r843_g4.up.mid(r847_r, r847_b + r849_hookWidth - r849_yBias, r843_heading(r843_Upward)), r843_arcvh(), r843_straight.left.end(r847_l, r1_mix(r847_t, r847_b, 0.5) - r847_s / 2 + r849_fine, r843_widths.lhs.heading(r849_fine, r843_Leftward))));
                return void 0;
            });
        };
        var r843_SucceedsUnderRelationShape = function (r852_t, r852_b, r852_l, r852_r, r852_s) {
            var _r852_t0, _r852_t1;
            return r843_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r843_xn$Capture$2Lrc8.GlyphProc(function (r855_currentGlyph) {
                var _r855_t0, _r855_t1;
                r855_currentGlyph.include(r843_PrecedesUnderRelationShape(r852_t, r852_b, r852_l, r852_r, r852_s));
                r855_currentGlyph.include(r843_FlipAround(r1_mix(r852_l, r852_r, 0.5), r1_mix(r852_t, r852_b, 0.5)));
                return void 0;
            }));
        };
        r843_xn$GlyphSaveSink$2Lrc4b.save("precedesUnderRelation", 8880, r843_PrecedesUnderRelationShape(r843_SymbolMid + r843_dH, r843_SymbolMid - r843_dH, r843_SB, r843_RightSB, r843_OperatorStroke));
        return r843_xn$GlyphSaveSink$2Lrc4b.save("succeedsUnderRelation", 8881, r843_SucceedsUnderRelationShape(r843_SymbolMid + r843_dH, r843_SymbolMid - r843_dH, r843_SB, r843_RightSB, r843_OperatorStroke));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r862_xn$Capture_Ext$2Lrc2b) {
    var _r862_t0, _r862_t1;
    r862_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r862_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Relation-Subset", function (r863_xn$Capture$2Lrc8, r863_xn$ExportCapture$2Lrc4b) {
        var _r863_t8, _r863_t9;
        var _r863_t0 = r863_xn$Capture$2Lrc8;
        var r863_xn$GlyphSaveSink$2Lrc4b = _r863_t0["$GlyphSaveSink$"];
        var r863_xn$NamedParameterPair$2Lrc9b = _r863_t0["$NamedParameterPair$"];
        var r863_xn$Exec$2Lrc5 = _r863_t0["$Exec$"];
        var r863_para = _r863_t0.para;
        var _r863_t1 = r863_xn$Capture$2Lrc8.Metrics;
        var r863_Width = _r863_t1.Width;
        var r863_SB = _r863_t1.SB;
        var r863_XH = _r863_t1.XH;
        var r863_SymbolMid = _r863_t1.SymbolMid;
        var r863_ApparentTranslate = _r863_t1.ApparentTranslate;
        var r863_HSwToV = _r863_t1.HSwToV;
        var r863_Rightward = _r863_t1.Rightward;
        var r863_Leftward = _r863_t1.Leftward;
        var r863_O = _r863_t1.O;
        var r863_AdviceStroke = _r863_t1.AdviceStroke;
        var r863_AdviceStroke2 = _r863_t1.AdviceStroke2;
        var r863_HalfStroke = _r863_t1.HalfStroke;
        var r863_QuarterStroke = _r863_t1.QuarterStroke;
        var r863_RightSB = _r863_t1.RightSB;
        var r863_Middle = _r863_t1.Middle;
        var r863_DotRadius = _r863_t1.DotRadius;
        var r863_OperatorStroke = _r863_t1.OperatorStroke;
        var _r863_t2 = r863_xn$Capture$2Lrc8.SpiroFns;
        var r863_g4 = _r863_t2.g4;
        var r863_corner = _r863_t2.corner;
        var r863_flat = _r863_t2.flat;
        var r863_curl = _r863_t2.curl;
        var r863_widths = _r863_t2.widths;
        var r863_heading = _r863_t2.heading;
        var r863_archv = _r863_t2.archv;
        var r863_arcvh = _r863_t2.arcvh;
        var r863_dispiro = _r863_t2.dispiro;
        var r863_xn$spirooutline$1aao = _r863_t2["spiro-outline"];
        var _r863_t3 = r863_xn$Capture$2Lrc8.SpiroFns;
        var r863_xn$decor$0cao = _r863_t3["decor@"];
        var r863_xn$decor$0cao1 = _r863_t3["decor@@"];
        var r863_xn$decor$0cao11 = _r863_t3["decor@@@"];
        var _r863_t4 = r863_xn$Capture$2Lrc8.BooleFns;
        var r863_union = _r863_t4.union;
        var r863_intersection = _r863_t4.intersection;
        var _r863_t5 = r863_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r863_HBar = _r863_t5.HBar;
        var r863_VBar = _r863_t5.VBar;
        var r863_FlipAround = _r863_t5.FlipAround;
        var r863_WithDotVariants = _r863_t5.WithDotVariants;
        var _r863_t6 = r863_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r863_xn$referglyph$1aao = _r863_t6["refer-glyph"];
        var r863_xn$derivecomposites$7Hrq = _r863_t6["derive-composites"];
        var r863_turned = _r863_t6.turned;
        var _r863_t7 = r863_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
        var r863_dH = _r863_t7.dH;
        var r863_dSH = _r863_t7.dSH;
        var r863_dHSubstSimple = _r863_t7.dHSubstSimple;
        var r863_lessEqDist = _r863_t7.lessEqDist;
        var r863_dHElem = _r863_t7.dHElem;
        var r863_dHSmallElem = _r863_t7.dHSmallElem;
        r863_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Addon-Glyphs"].resolve();
        var r863_SubsetMaskShape = function () {
            var _r868_t5;
            var _r868_t6 = arguments;
            var r868_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r868_t6, 0);
            var _r868_t0 = [];
            var _r868_t1 = 0;
            while (_r868_t1 < r868_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r868_xn$flexarguments$2Lrc7uIe5[_r868_t1] instanceof r863_xn$NamedParameterPair$2Lrc9b)) _r868_t0.push(r868_xn$flexarguments$2Lrc7uIe5[_r868_t1]);
                _r868_t1 = _r868_t1 + 1;
            }
            var _r868_t2 = r868_xn$flexarguments$2Lrc7uIe5;
            var _r868_t3 = _r868_t2.length;
            var _r868_t4 = 0;
            while (_r868_t4 < _r868_t3) {
                _r868_t1 = _r868_t2[_r868_t4];
                if (_r868_t1 && _r868_t1 instanceof r863_xn$NamedParameterPair$2Lrc9b && _r868_t1.left === "top") r868_top = _r868_t1.right;
                if (_r868_t1 && _r868_t1 instanceof r863_xn$NamedParameterPair$2Lrc9b && _r868_t1.left === "bot") r868_bot = _r868_t1.right;
                if (_r868_t1 && _r868_t1 instanceof r863_xn$NamedParameterPair$2Lrc9b && _r868_t1.left === "sw") r868_sw = _r868_t1.right;
                if (_r868_t1 && _r868_t1 instanceof r863_xn$NamedParameterPair$2Lrc9b && _r868_t1.left === "offset") r868_offset = _r868_t1.right;
                if (_r868_t1 && _r868_t1 instanceof r863_xn$NamedParameterPair$2Lrc9b && _r868_t1.left === "xShift") r868_xShift = _r868_t1.right;
                _r868_t4 = _r868_t4 + 1;
            }
            var r868_top = r1_fallback(r868_top, _r868_t0[0]);
            var r868_bot = r1_fallback(r868_bot, _r868_t0[1]);
            var r868_sw = r1_fallback(r868_sw, _r868_t0[2], r863_OperatorStroke);
            var r868_offset = r1_fallback(r868_offset, _r868_t0[3], 0);
            var r868_xShift = r1_fallback(r868_xShift, _r868_t0[4], 0);
            return r863_xn$spirooutline$1aao(r863_corner(r863_RightSB, r868_top - r868_offset, r863_heading(r863_Leftward)), r863_curl(r863_SB + Math.max(r868_sw * 1.5, r1_mix(r868_xShift, r868_top - r868_bot, 0.5)), r868_top - r868_offset), r863_archv(), r863_g4(r863_SB + r868_xShift + r868_offset + r863_O, r1_mix(r868_top, r868_bot, 0.5)), r863_arcvh(), r863_flat(r863_SB + Math.max(r868_sw * 1.5, r1_mix(r868_xShift, r868_top - r868_bot, 0.5)), r868_bot + r868_offset), r863_corner(r863_RightSB, r868_bot + r868_offset, r863_heading(r863_Rightward)));
        };
        var r863_SubsetShape = function () {
            var _r873_t5;
            var _r873_t6 = arguments;
            var r873_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r873_t6, 0);
            var _r873_t0 = [];
            var _r873_t1 = 0;
            while (_r873_t1 < r873_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r873_xn$flexarguments$2Lrc7uIe5[_r873_t1] instanceof r863_xn$NamedParameterPair$2Lrc9b)) _r873_t0.push(r873_xn$flexarguments$2Lrc7uIe5[_r873_t1]);
                _r873_t1 = _r873_t1 + 1;
            }
            var _r873_t2 = r873_xn$flexarguments$2Lrc7uIe5;
            var _r873_t3 = _r873_t2.length;
            var _r873_t4 = 0;
            while (_r873_t4 < _r873_t3) {
                _r873_t1 = _r873_t2[_r873_t4];
                if (_r873_t1 && _r873_t1 instanceof r863_xn$NamedParameterPair$2Lrc9b && _r873_t1.left === "top") r873_top = _r873_t1.right;
                if (_r873_t1 && _r873_t1 instanceof r863_xn$NamedParameterPair$2Lrc9b && _r873_t1.left === "bot") r873_bot = _r873_t1.right;
                if (_r873_t1 && _r873_t1 instanceof r863_xn$NamedParameterPair$2Lrc9b && _r873_t1.left === "sw") r873_sw = _r873_t1.right;
                if (_r873_t1 && _r873_t1 instanceof r863_xn$NamedParameterPair$2Lrc9b && _r873_t1.left === "offset") r873_offset = _r873_t1.right;
                if (_r873_t1 && _r873_t1 instanceof r863_xn$NamedParameterPair$2Lrc9b && _r873_t1.left === "xShift") r873_xShift = _r873_t1.right;
                _r873_t4 = _r873_t4 + 1;
            }
            var r873_top = r1_fallback(r873_top, _r873_t0[0]);
            var r873_bot = r1_fallback(r873_bot, _r873_t0[1]);
            var r873_sw = r1_fallback(r873_sw, _r873_t0[2], r863_OperatorStroke);
            var r873_offset = r1_fallback(r873_offset, _r873_t0[3], 0);
            var r873_xShift = r1_fallback(r873_xShift, _r873_t0[4], 0);
            return r863_dispiro(r863_widths.lhs(r873_sw), r863_flat(r863_RightSB, r873_top - r873_offset, r863_heading(r863_Leftward)), r863_curl(r863_SB + Math.max(r873_sw * 1.5, r1_mix(r873_xShift, r873_top - r873_bot, 0.5)), r873_top - r873_offset), r863_archv(), r863_g4(r863_SB + r873_xShift + r873_offset + r863_O, r1_mix(r873_top, r873_bot, 0.5)), r863_arcvh(), r863_flat(r863_SB + Math.max(r873_sw * 1.5, r1_mix(r873_xShift, r873_top - r873_bot, 0.5)), r873_bot + r873_offset), r863_curl(r863_RightSB, r873_bot + r873_offset, r863_heading(r863_Rightward)));
        };
        var r863_SupsetShape = function (r878_top, r878_bot, r878_sw) {
            var _r878_t0, _r878_t1;
            return new r863_xn$Capture$2Lrc8.GlyphProc(function (r880_currentGlyph) {
                var _r880_t0, _r880_t1;
                r880_currentGlyph.include(r863_SubsetShape(r878_top, r878_bot, r878_sw));
                r880_currentGlyph.include(r863_FlipAround(r863_Middle, r1_mix(r878_top, r878_bot, 0.5)));
                return void 0;
            });
        };
        var r863_SubsetClosedShape = function (r883_top, r883_bot, r883_sw) {
            var _r883_t0, _r883_t1;
            return new r863_xn$Capture$2Lrc8.GlyphProc(function (r885_currentGlyph) {
                var _r885_t0, _r885_t1;
                r885_currentGlyph.include(r863_SubsetShape(r883_top, r883_bot, r883_sw));
                r885_currentGlyph.include(r863_VBar.r(r863_RightSB, r883_bot, r883_top, r883_sw));
                return void 0;
            });
        };
        var r863_SupsetClosedShape = function (r888_top, r888_bot, r888_sw) {
            var _r888_t0, _r888_t1;
            return new r863_xn$Capture$2Lrc8.GlyphProc(function (r890_currentGlyph) {
                var _r890_t0, _r890_t1;
                r890_currentGlyph.include(r863_SubsetClosedShape(r888_top, r888_bot, r888_sw));
                r890_currentGlyph.include(r863_FlipAround(r863_Middle, r1_mix(r888_top, r888_bot, 0.5)));
                return void 0;
            });
        };
        r863_xn$GlyphSaveSink$2Lrc4b.save("subst", 8834, r863_SubsetShape(r863_SymbolMid + r863_dHSubstSimple, r863_SymbolMid - r863_dHSubstSimple));
        r863_xn$GlyphSaveSink$2Lrc4b.save("subst/aplLeft", null, r863_SubsetShape(r863_SymbolMid + r863_dHSubstSimple, r863_SymbolMid - r863_dHSubstSimple, r863_AdviceStroke(3.5)));
        r863_xn$GlyphSaveSink$2Lrc4b.save("doubleSubst", 8912, new r863_xn$Capture$2Lrc8.GlyphProc(function (r897_currentGlyph) {
            var _r897_t0, _r897_t1;
            var r897_sw = r863_AdviceStroke(6);
            var r897_gap = Math.max(r863_Width / 8, r897_sw / 2);
            r897_currentGlyph.include(r863_SubsetShape(r863_SymbolMid + r863_dHSubstSimple, r863_SymbolMid - r863_dHSubstSimple, new r863_xn$NamedParameterPair$2Lrc9b("sw", r897_sw)));
            r897_currentGlyph.include(r863_SubsetShape(r863_SymbolMid + r863_dHSubstSimple, r863_SymbolMid - r863_dHSubstSimple, new r863_xn$NamedParameterPair$2Lrc9b("sw", r897_sw), new r863_xn$NamedParameterPair$2Lrc9b("offset", r897_gap + r897_sw)));
            return void 0;
        }));
        r863_xn$GlyphSaveSink$2Lrc4b.save("substClosed", 10959, r863_SubsetClosedShape(r863_SymbolMid + r863_dHSubstSimple, r863_SymbolMid - r863_dHSubstSimple, r863_OperatorStroke));
        r863_turned("supst", 8835, "subst", r863_Middle, r863_SymbolMid);
        r863_turned("doubleSupst", 8913, "doubleSubst", r863_Middle, r863_SymbolMid);
        r863_turned("supstClosed", 10960, "substClosed", r863_Middle, r863_SymbolMid);
        r863_xn$GlyphSaveSink$2Lrc4b.save("substBarUpper", null, r863_SubsetShape(r863_SymbolMid + r863_dSH + r863_lessEqDist, r863_SymbolMid - r863_dSH + r863_lessEqDist));
        r863_xn$GlyphSaveSink$2Lrc4b.save("supstBarUpper", null, r863_SupsetShape(r863_SymbolMid + r863_dSH + r863_lessEqDist, r863_SymbolMid - r863_dSH + r863_lessEqDist));
        r863_xn$derivecomposites$7Hrq("substBar", 8838, "substBarUpper", "eqLower");
        r863_xn$derivecomposites$7Hrq("substBar/noRise", null, "subst", "eqLower2");
        r863_xn$derivecomposites$7Hrq("substBarNegated", 8842, "substBarUpper", "eqBarNegatedLower");
        r863_xn$derivecomposites$7Hrq("supstBar", 8839, "supstBarUpper", "eqLower");
        r863_xn$derivecomposites$7Hrq("supstBar/noRise", null, "supst", "eqLower2");
        r863_xn$derivecomposites$7Hrq("supstBarNegated", 8843, "supstBarUpper", "eqBarNegatedLower");
        r863_xn$GlyphSaveSink$2Lrc4b.save("substClosedBar", 10961, new r863_xn$Capture$2Lrc8.GlyphProc(function (r908_currentGlyph) {
            var _r908_t0, _r908_t1;
            r908_currentGlyph.include(r863_SubsetClosedShape(r863_SymbolMid + r863_dSH + r863_lessEqDist, r863_SymbolMid - r863_dSH + r863_lessEqDist, r863_OperatorStroke), true, true);
            r908_currentGlyph.include(r863_xn$referglyph$1aao("eqLower"));
            return void 0;
        }));
        r863_xn$GlyphSaveSink$2Lrc4b.save("supstClosedBar", 10962, new r863_xn$Capture$2Lrc8.GlyphProc(function (r913_currentGlyph) {
            var _r913_t0, _r913_t1;
            r913_currentGlyph.include(r863_SupsetClosedShape(r863_SymbolMid + r863_dSH + r863_lessEqDist, r863_SymbolMid - r863_dSH + r863_lessEqDist, r863_OperatorStroke), true, true);
            r913_currentGlyph.include(r863_xn$referglyph$1aao("eqLower"));
            return void 0;
        }));
        var r863_supstDotShift = r863_SB + Math.max(r863_dHSubstSimple, 1.5 * r863_OperatorStroke) - r863_Middle;
        r863_xn$derivecomposites$7Hrq("substDot", 10941, "mathCDot", r863_ApparentTranslate(+r863_supstDotShift, 0), "subst");
        r863_xn$derivecomposites$7Hrq("supstDot", 10942, "mathCDot", r863_ApparentTranslate(-r863_supstDotShift, 0), "supst");
        r863_xn$GlyphSaveSink$2Lrc4b.save("element", 8712, new r863_xn$Capture$2Lrc8.GlyphProc(function (r918_currentGlyph) {
            var _r918_t0, _r918_t1;
            r918_currentGlyph.include(r863_SubsetShape(r863_SymbolMid + r863_dHElem, r863_SymbolMid - r863_dHElem));
            r918_currentGlyph.include(r863_HBar.m(r863_SB + r863_HalfStroke, r863_RightSB, r863_SymbolMid, r863_OperatorStroke));
            return void 0;
        }));
        r863_xn$GlyphSaveSink$2Lrc4b.save("elementWithTwoHorizontalStrokes", 8953, new r863_xn$Capture$2Lrc8.GlyphProc(function (r923_currentGlyph) {
            var _r923_t0, _r923_t1;
            var r923_sw = Math.min(r863_OperatorStroke, r863_AdviceStroke2(2, 4, 2 * r863_dHElem));
            r923_currentGlyph.include(r863_SubsetShape(r863_SymbolMid + r863_dHElem, r863_SymbolMid - r863_dHElem, new r863_xn$NamedParameterPair$2Lrc9b("sw", r923_sw)));
            r923_currentGlyph.include(r863_intersection(r863_SubsetMaskShape(r863_SymbolMid + r863_dHElem, r863_SymbolMid - r863_dHElem, new r863_xn$NamedParameterPair$2Lrc9b("sw", r923_sw), new r863_xn$NamedParameterPair$2Lrc9b("offset", 1)), r863_union(r863_HBar.m(r863_SB, r863_RightSB, r863_SymbolMid - r863_dHElem / 3 + r923_sw / 6, r923_sw), r863_HBar.m(r863_SB, r863_RightSB, r863_SymbolMid + r863_dHElem / 3 - r923_sw / 6, r923_sw))));
            return void 0;
        }));
        r863_turned("turnElement", 8715, "element", r863_Middle, r863_SymbolMid);
        var r863_CodeNonApl = function (r929_u) {
            var _r929_t0, _r929_t1;
            return r863_para.variantSelector["__enableAplForm"] === "enable" ? null : r929_u;
        };
        var r863_CodeApl = function (r930_u) {
            var _r930_t0, _r930_t1;
            return r863_para.variantSelector["__enableAplForm"] === "enable" ? r930_u : null;
        };
        r863_xn$GlyphSaveSink$2Lrc4b.save("smallElement", r863_CodeNonApl(8714), new r863_xn$Capture$2Lrc8.GlyphProc(function (r933_currentGlyph) {
            var _r933_t0, _r933_t1;
            var r933_sw = r863_AdviceStroke2(3, 2.5, r863_dHSmallElem * 2);
            r933_currentGlyph.include(r863_SubsetShape(r863_SymbolMid + r863_dHSmallElem, r863_SymbolMid - r863_dHSmallElem, new r863_xn$NamedParameterPair$2Lrc9b("sw", r933_sw)));
            r933_currentGlyph.include(r863_HBar.m(r863_SB + r863_HalfStroke, r863_RightSB, r863_SymbolMid, r933_sw));
            return void 0;
        }));
        r863_xn$GlyphSaveSink$2Lrc4b.save("smallElement.aplForm", r863_CodeApl(8714), new r863_xn$Capture$2Lrc8.GlyphProc(function (r939_currentGlyph) {
            var _r939_t0, _r939_t1;
            var r939_sw = r863_AdviceStroke2(3, 2.5, r863_dHSmallElem * 2);
            r939_currentGlyph.include(r863_SubsetShape(r863_XH, 0, new r863_xn$NamedParameterPair$2Lrc9b("sw", r939_sw)));
            r939_currentGlyph.include(r863_HBar.m(r863_SB + r863_HalfStroke, r863_RightSB, 0.5 * r863_XH, r939_sw));
            return void 0;
        }));
        r863_turned("turnSmallElement", 8717, "smallElement", r863_Middle, r863_SymbolMid);
        r863_xn$GlyphSaveSink$2Lrc4b.save("elementStroke", 8946, new r863_xn$Capture$2Lrc8.GlyphProc(function (r945_currentGlyph) {
            var _r945_t0, _r945_t1;
            r945_currentGlyph.include(r863_SubsetShape(r863_SymbolMid + r863_dHElem, r863_SymbolMid - r863_dHElem, new r863_xn$NamedParameterPair$2Lrc9b("xShift", (r863_RightSB - r863_SB) * 0.2 + r863_HSwToV(r863_QuarterStroke))));
            r945_currentGlyph.include(r863_HBar.m(r863_SB + r863_HalfStroke, r863_RightSB, r863_SymbolMid, r863_OperatorStroke));
            return void 0;
        }));
        r863_turned("turnElementStroke", 8954, "elementStroke", r863_Middle, r863_SymbolMid);
        var r863_ElementBarHalfHeight = function (r949_h) {
            var _r949_t0, _r949_t1;
            return r949_h / 2 - r863_OperatorStroke / 4;
        };
        r863_xn$GlyphSaveSink$2Lrc4b.save("elementBarAtEnd", 8947, new r863_xn$Capture$2Lrc8.GlyphProc(function (r952_currentGlyph) {
            var _r952_t0, _r952_t1;
            r952_currentGlyph.include(r863_SubsetShape(r863_SymbolMid + r863_dHElem, r863_SymbolMid - r863_dHElem));
            r952_currentGlyph.include(r863_VBar.r(r863_RightSB, r863_SymbolMid - r863_ElementBarHalfHeight(r863_dHElem), r863_SymbolMid + r863_ElementBarHalfHeight(r863_dHElem), r863_OperatorStroke));
            r952_currentGlyph.include(r863_HBar.m(r863_SB + r863_HalfStroke, r863_RightSB, r863_SymbolMid, r863_OperatorStroke));
            return void 0;
        }));
        r863_turned("turnElementBarAtEnd", 8955, "elementBarAtEnd", r863_Middle, r863_SymbolMid);
        r863_xn$GlyphSaveSink$2Lrc4b.save("smallElementBarAtEnd", 8948, new r863_xn$Capture$2Lrc8.GlyphProc(function (r958_currentGlyph) {
            var _r958_t0, _r958_t1;
            var r958_sw = r863_AdviceStroke2(3, 2.75, r863_dHSmallElem * 2);
            r958_currentGlyph.include(r863_SubsetShape(r863_SymbolMid + r863_dHSmallElem, r863_SymbolMid - r863_dHSmallElem, new r863_xn$NamedParameterPair$2Lrc9b("sw", r958_sw)));
            r958_currentGlyph.include(r863_VBar.r(r863_RightSB, r863_SymbolMid - r863_ElementBarHalfHeight(r863_dHSmallElem), r863_SymbolMid + r863_ElementBarHalfHeight(r863_dHSmallElem), r958_sw));
            r958_currentGlyph.include(r863_HBar.m(r863_SB + r863_HalfStroke, r863_RightSB, r863_SymbolMid, r958_sw));
            return void 0;
        }));
        r863_turned("turnSmallElementBarAtEnd", 8956, "smallElementBarAtEnd", r863_Middle, r863_SymbolMid);
        var r863_dSHElem = r863_dHElem * r863_dSH / r863_dH;
        r863_xn$GlyphSaveSink$2Lrc4b.save("elementAtUpper", null, new r863_xn$Capture$2Lrc8.GlyphProc(function (r965_currentGlyph) {
            var _r965_t0, _r965_t1;
            r965_currentGlyph.include(r863_SubsetShape(r863_SymbolMid + r863_dSHElem, r863_SymbolMid - r863_dSHElem));
            r965_currentGlyph.include(r863_HBar.m(r863_SB + r863_HalfStroke, r863_RightSB, r863_SymbolMid, r863_OperatorStroke));
            return void 0;
        }));
        r863_turned("turnElementAtUpper", null, "elementAtUpper", r863_Middle, r863_SymbolMid);
        r863_WithDotVariants("elementOfWithDotAbove", 8949, function (r968_DrawAt, r968_kDotRadius, r968_overshoot) {
            var _r968_t0, _r968_t1;
            return new r863_xn$Capture$2Lrc8.GlyphProc(function (r970_currentGlyph) {
                var _r970_t0, _r970_t1;
                r970_currentGlyph.include(r863_xn$referglyph$1aao("elementAtUpper"), true, true);
                r970_currentGlyph.include(r863_ApparentTranslate(0, -r863_lessEqDist));
                r970_currentGlyph.include(r968_DrawAt(r863_Middle, r863_SymbolMid + (r863_dSHElem + r863_lessEqDist), r968_kDotRadius + r863_DotRadius - r968_overshoot));
                return void 0;
            });
        });
        r863_xn$GlyphSaveSink$2Lrc4b.save(8950, null, new r863_xn$Capture$2Lrc8.GlyphProc(function (r976_currentGlyph) {
            var _r976_t0, _r976_t1;
            r976_currentGlyph.include(r863_xn$referglyph$1aao("elementAtUpper"), true, true);
            r976_currentGlyph.include(r863_ApparentTranslate(0, -r863_lessEqDist));
            r976_currentGlyph.include(r863_HBar.m(r863_SB, r863_RightSB, r863_SymbolMid + (r863_dSHElem + r863_lessEqDist), r863_OperatorStroke));
            return void 0;
        }));
        r863_xn$GlyphSaveSink$2Lrc4b.save(8957, null, new r863_xn$Capture$2Lrc8.GlyphProc(function (r982_currentGlyph) {
            var _r982_t0, _r982_t1;
            r982_currentGlyph.include(r863_xn$referglyph$1aao("turnElementAtUpper"), true, true);
            r982_currentGlyph.include(r863_ApparentTranslate(0, -r863_lessEqDist));
            r982_currentGlyph.include(r863_HBar.m(r863_SB, r863_RightSB, r863_SymbolMid + (r863_dSHElem + r863_lessEqDist), r863_OperatorStroke));
            return void 0;
        }));
        r863_xn$GlyphSaveSink$2Lrc4b.save(8952, null, new r863_xn$Capture$2Lrc8.GlyphProc(function (r988_currentGlyph) {
            var _r988_t0, _r988_t1;
            r988_currentGlyph.include(r863_xn$referglyph$1aao("elementAtUpper"), true, true);
            r988_currentGlyph.include(r863_ApparentTranslate(0, +r863_lessEqDist));
            r988_currentGlyph.include(r863_HBar.m(r863_SB, r863_RightSB, r863_SymbolMid - (r863_dSHElem + r863_lessEqDist), r863_OperatorStroke));
            return void 0;
        }));
        r863_xn$GlyphSaveSink$2Lrc4b.save(8951, null, new r863_xn$Capture$2Lrc8.GlyphProc(function (r994_currentGlyph) {
            var _r994_t0, _r994_t1;
            r994_currentGlyph.include(r863_xn$referglyph$1aao("smallElement"), true, true);
            r994_currentGlyph.include(r863_ApparentTranslate(0, r863_dHSmallElem / r863_dHElem * -r863_lessEqDist));
            r994_currentGlyph.include(r863_HBar.m(r863_SB, r863_RightSB, r863_SymbolMid + (r863_dHSmallElem + r863_dHSmallElem / r863_dHElem * r863_lessEqDist), r863_OperatorStroke));
            return void 0;
        }));
        return r863_xn$GlyphSaveSink$2Lrc4b.save(8958, null, new r863_xn$Capture$2Lrc8.GlyphProc(function (r1000_currentGlyph) {
            var _r1000_t0, _r1000_t1;
            r1000_currentGlyph.include(r863_xn$referglyph$1aao("turnSmallElement"), true, true);
            r1000_currentGlyph.include(r863_ApparentTranslate(0, r863_dHSmallElem / r863_dHElem * -r863_lessEqDist));
            r1000_currentGlyph.include(r863_HBar.m(r863_SB, r863_RightSB, r863_SymbolMid + (r863_dHSmallElem + r863_dHSmallElem / r863_dHElem * r863_lessEqDist), r863_OperatorStroke));
            return void 0;
        }));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r1006_xn$Capture_Ext$2Lrc2b) {
    var _r1006_t0, _r1006_t1;
    r1006_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r1006_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Relation-Precedes-Succeeds-Prefix-Suffix", function (r1007_xn$Capture$2Lrc8, r1007_xn$ExportCapture$2Lrc4b) {
        var _r1007_t8, _r1007_t9;
        var _r1007_t0 = r1007_xn$Capture$2Lrc8;
        var r1007_xn$GlyphSaveSink$2Lrc4b = _r1007_t0["$GlyphSaveSink$"];
        var r1007_xn$NamedParameterPair$2Lrc9b = _r1007_t0["$NamedParameterPair$"];
        var r1007_xn$Exec$2Lrc5 = _r1007_t0["$Exec$"];
        var _r1007_t1 = r1007_xn$Capture$2Lrc8.Metrics;
        var r1007_SB = _r1007_t1.SB;
        var r1007_SymbolMid = _r1007_t1.SymbolMid;
        var r1007_HalfStroke = _r1007_t1.HalfStroke;
        var r1007_RightSB = _r1007_t1.RightSB;
        var r1007_Middle = _r1007_t1.Middle;
        var r1007_OperatorStroke = _r1007_t1.OperatorStroke;
        var _r1007_t2 = r1007_xn$Capture$2Lrc8.SpiroFns;
        var _r1007_t3 = r1007_xn$Capture$2Lrc8.SpiroFns;
        var r1007_xn$decor$0cao = _r1007_t3["decor@"];
        var r1007_xn$decor$0cao1 = _r1007_t3["decor@@"];
        var r1007_xn$decor$0cao11 = _r1007_t3["decor@@@"];
        var _r1007_t4 = r1007_xn$Capture$2Lrc8.BooleFns;
        var r1007_union = _r1007_t4.union;
        var _r1007_t5 = r1007_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r1007_HBar = _r1007_t5.HBar;
        var r1007_VBar = _r1007_t5.VBar;
        var r1007_FlipAround = _r1007_t5.FlipAround;
        var _r1007_t6 = r1007_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r1007_xn$derivecomposites$7Hrq = _r1007_t6["derive-composites"];
        var _r1007_t7 = r1007_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
        var r1007_EqualHalfSpace = _r1007_t7.EqualHalfSpace;
        var r1007_dSH = _r1007_t7.dSH;
        var r1007_dHSubstSimple = _r1007_t7.dHSubstSimple;
        var r1007_lessEqDist = _r1007_t7.lessEqDist;
        var r1007_dHElem = _r1007_t7.dHElem;
        r1007_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Addon-Glyphs"].resolve();
        var r1007_PrefixShape = function (r1012_top, r1012_bot, r1012_sw) {
            var _r1012_t0, _r1012_t1;
            return r1007_union(r1007_VBar.l(r1007_SB, r1012_bot, r1012_top, r1_fallback(r1012_sw, r1007_OperatorStroke)), r1007_HBar.t(r1007_SB, r1007_RightSB, r1012_top, r1_fallback(r1012_sw, r1007_OperatorStroke)), r1007_HBar.b(r1007_SB, r1007_RightSB, r1012_bot, r1_fallback(r1012_sw, r1007_OperatorStroke)));
        };
        var r1007_SuffixShape = function (r1013_top, r1013_bot, r1013_sw) {
            var _r1013_t0, _r1013_t1;
            return new r1007_xn$Capture$2Lrc8.GlyphProc(function (r1015_currentGlyph) {
                var _r1015_t0, _r1015_t1;
                r1015_currentGlyph.include(r1007_PrefixShape(r1013_top, r1013_bot, r1013_sw));
                r1015_currentGlyph.include(r1007_FlipAround(r1007_Middle, r1_mix(r1013_top, r1013_bot, 0.5)));
                return void 0;
            });
        };
        r1007_xn$GlyphSaveSink$2Lrc4b.save("prefix", 8847, r1007_PrefixShape(r1007_SymbolMid + r1007_dHSubstSimple, r1007_SymbolMid - r1007_dHSubstSimple));
        r1007_xn$GlyphSaveSink$2Lrc4b.save("suffix", 8848, r1007_SuffixShape(r1007_SymbolMid + r1007_dHSubstSimple, r1007_SymbolMid - r1007_dHSubstSimple));
        r1007_xn$GlyphSaveSink$2Lrc4b.save("prefixBarUpper", null, r1007_PrefixShape(r1007_SymbolMid + r1007_dSH + r1007_lessEqDist, r1007_SymbolMid - r1007_dSH + r1007_lessEqDist));
        r1007_xn$GlyphSaveSink$2Lrc4b.save("suffixBarUpper", null, r1007_SuffixShape(r1007_SymbolMid + r1007_dSH + r1007_lessEqDist, r1007_SymbolMid - r1007_dSH + r1007_lessEqDist));
        r1007_xn$derivecomposites$7Hrq("prefixBar", 8849, "prefixBarUpper", "eqLower");
        r1007_xn$derivecomposites$7Hrq("prefixBarNegated", 8932, "prefixBarUpper", "eqBarNegatedLower");
        r1007_xn$derivecomposites$7Hrq("suffixBar", 8850, "suffixBarUpper", "eqLower");
        r1007_xn$derivecomposites$7Hrq("suffixBarNegated", 8933, "suffixBarUpper", "eqBarNegatedLower");
        r1007_xn$GlyphSaveSink$2Lrc4b.save("prefixElement", 8959, new r1007_xn$Capture$2Lrc8.GlyphProc(function (r1024_currentGlyph) {
            var _r1024_t0, _r1024_t1;
            r1024_currentGlyph.include(r1007_PrefixShape(r1007_SymbolMid + r1007_dHElem, r1007_SymbolMid - r1007_dHElem));
            r1024_currentGlyph.include(r1007_HBar.m(r1007_SB + r1007_HalfStroke, r1007_RightSB, r1007_SymbolMid));
            return void 0;
        }));
        r1007_xn$GlyphSaveSink$2Lrc4b.save("leftInteriorProduct", 10812, new r1007_xn$Capture$2Lrc8.GlyphProc(function (r1029_currentGlyph) {
            var _r1029_t0, _r1029_t1;
            r1029_currentGlyph.include(r1007_HBar.m(r1007_SB, r1007_RightSB, r1007_SymbolMid - r1007_EqualHalfSpace, r1007_OperatorStroke));
            r1029_currentGlyph.include(r1007_VBar.r(r1007_RightSB, r1007_SymbolMid - r1007_EqualHalfSpace, r1007_SymbolMid + r1007_EqualHalfSpace, r1007_OperatorStroke));
            return void 0;
        }));
        return r1007_xn$GlyphSaveSink$2Lrc4b.save("rightInteriorProduct", 10813, new r1007_xn$Capture$2Lrc8.GlyphProc(function (r1034_currentGlyph) {
            var _r1034_t0, _r1034_t1;
            r1034_currentGlyph.include(r1007_HBar.m(r1007_SB, r1007_RightSB, r1007_SymbolMid - r1007_EqualHalfSpace, r1007_OperatorStroke));
            r1034_currentGlyph.include(r1007_VBar.l(r1007_SB, r1007_SymbolMid - r1007_EqualHalfSpace, r1007_SymbolMid + r1007_EqualHalfSpace, r1007_OperatorStroke));
            return void 0;
        }));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r1039_xn$Capture_Ext$2Lrc2b) {
    var _r1039_t0, _r1039_t1;
    r1039_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r1039_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Relation-Between", function (r1040_xn$Capture$2Lrc8, r1040_xn$ExportCapture$2Lrc4b) {
        var _r1040_t7, _r1040_t8;
        var _r1040_t0 = r1040_xn$Capture$2Lrc8;
        var r1040_xn$GlyphSaveSink$2Lrc4b = _r1040_t0["$GlyphSaveSink$"];
        var r1040_xn$NamedParameterPair$2Lrc9b = _r1040_t0["$NamedParameterPair$"];
        var r1040_xn$Exec$2Lrc5 = _r1040_t0["$Exec$"];
        var _r1040_t1 = r1040_xn$Capture$2Lrc8.Metrics;
        var r1040_SB = _r1040_t1.SB;
        var r1040_PlusTop = _r1040_t1.PlusTop;
        var r1040_PlusBot = _r1040_t1.PlusBot;
        var r1040_RightSB = _r1040_t1.RightSB;
        var r1040_OperatorStroke = _r1040_t1.OperatorStroke;
        var _r1040_t2 = r1040_xn$Capture$2Lrc8.SpiroFns;
        var r1040_g4 = _r1040_t2.g4;
        var r1040_g2 = _r1040_t2.g2;
        var r1040_widths = _r1040_t2.widths;
        var r1040_alsoThru = _r1040_t2.alsoThru;
        var r1040_dispiro = _r1040_t2.dispiro;
        var _r1040_t3 = r1040_xn$Capture$2Lrc8.SpiroFns;
        var r1040_xn$decor$0cao = _r1040_t3["decor@"];
        var r1040_xn$decor$0cao1 = _r1040_t3["decor@@"];
        var r1040_xn$decor$0cao11 = _r1040_t3["decor@@@"];
        var _r1040_t4 = r1040_xn$Capture$2Lrc8.BooleFns;
        var _r1040_t5 = r1040_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r1040_t6 = r1040_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        return r1040_xn$GlyphSaveSink$2Lrc4b.save("between", 8812, new r1040_xn$Capture$2Lrc8.GlyphProc(function (r1045_currentGlyph) {
            var _r1045_t0, _r1045_t1;
            var r1045_frame = new r1_Box(r1040_PlusTop + r1040_OperatorStroke / 2, r1040_PlusBot - r1040_OperatorStroke / 2, r1040_SB, r1040_RightSB);
            var r1045_kShape = 0.25;
            var r1045_kExt = 0.2;
            r1045_currentGlyph.include(r1040_dispiro(r1040_g4(r1045_frame.mixX(0 + r1045_kExt), r1045_frame.mixY(1), r1040_widths.rhs(r1040_OperatorStroke)), r1040_alsoThru.g2(1 - r1045_kShape, 0.5), r1040_g4(r1045_frame.mixX(1 - r1045_kExt), r1045_frame.mixY(0.5), r1040_widths.center(r1040_OperatorStroke)), r1040_alsoThru.g2(0 + r1045_kShape, 0.5), r1040_g4(r1045_frame.mixX(0 + r1045_kExt), r1045_frame.mixY(0), r1040_widths.rhs(r1040_OperatorStroke))));
            r1045_currentGlyph.include(r1040_dispiro(r1040_g4(r1045_frame.mixX(1 - r1045_kExt), r1045_frame.mixY(1), r1040_widths.lhs(r1040_OperatorStroke)), r1040_alsoThru.g2(1 - r1045_kShape, 0.5), r1040_g4(r1045_frame.mixX(0 + r1045_kExt), r1045_frame.mixY(0.5), r1040_widths.center(r1040_OperatorStroke)), r1040_alsoThru.g2(0 + r1045_kShape, 0.5), r1040_g4(r1045_frame.mixX(1 - r1045_kExt), r1045_frame.mixY(0), r1040_widths.lhs(r1040_OperatorStroke))));
            return void 0;
        }));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r1050_xn$Capture_Ext$2Lrc2b) {
    var _r1050_t0, _r1050_t1;
    r1050_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r1050_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Relation-Addon-Glyphs", function (r1051_xn$Capture$2Lrc8, r1051_xn$ExportCapture$2Lrc4b) {
        var _r1051_t10, _r1051_t11;
        var _r1051_t0 = r1051_xn$Capture$2Lrc8;
        var r1051_xn$GlyphSaveSink$2Lrc4b = _r1051_t0["$GlyphSaveSink$"];
        var r1051_xn$NamedParameterPair$2Lrc9b = _r1051_t0["$NamedParameterPair$"];
        var r1051_xn$Exec$2Lrc5 = _r1051_t0["$Exec$"];
        var _r1051_t1 = r1051_xn$Capture$2Lrc8.Metrics;
        var r1051_SB = _r1051_t1.SB;
        var r1051_SymbolMid = _r1051_t1.SymbolMid;
        var r1051_Downward = _r1051_t1.Downward;
        var r1051_RightSB = _r1051_t1.RightSB;
        var r1051_Middle = _r1051_t1.Middle;
        var r1051_OperatorStroke = _r1051_t1.OperatorStroke;
        var _r1051_t2 = r1051_xn$Capture$2Lrc8.SpiroFns;
        var r1051_flat = _r1051_t2.flat;
        var r1051_widths = _r1051_t2.widths;
        var r1051_heading = _r1051_t2.heading;
        var r1051_dispiro = _r1051_t2.dispiro;
        var _r1051_t3 = r1051_xn$Capture$2Lrc8.SpiroFns;
        var r1051_xn$decor$0cao = _r1051_t3["decor@"];
        var r1051_xn$decor$0cao1 = _r1051_t3["decor@@"];
        var r1051_xn$decor$0cao11 = _r1051_t3["decor@@@"];
        var _r1051_t4 = r1051_xn$Capture$2Lrc8.BooleFns;
        var r1051_union = _r1051_t4.union;
        var _r1051_t5 = r1051_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r1051_HBar = _r1051_t5.HBar;
        var _r1051_t6 = r1051_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r1051_xn$referglyph$1aao = _r1051_t6["refer-glyph"];
        var _r1051_t7 = r1051_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
        var r1051_dSH = _r1051_t7.dSH;
        var r1051_lessEqDist = _r1051_t7.lessEqDist;
        var _r1051_t8 = r1051_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Sym"].resolve();
        var r1051_symWave = _r1051_t8.symWave;
        var _r1051_t9 = r1051_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Addons"].resolve();
        var r1051_lesslessSW = _r1051_t9.lesslessSW;
        var r1051_EqEqBarNegation = _r1051_t9.EqEqBarNegation;
        var r1051_BarNegator = function (r1057_symbolBottom, r1057_dist) {
            var _r1057_t0, _r1057_t1;
            var r1057_swo = 1.5 * Math.max(r1057_dist, r1051_OperatorStroke);
            return r1051_dispiro(r1051_widths.center(r1051_OperatorStroke), r1051_flat(r1051_Middle + r1057_dist, r1057_symbolBottom - r1057_dist + r1057_swo, r1051_heading(r1051_Downward)), r1051_flat(r1051_Middle - r1057_dist, r1057_symbolBottom - r1057_dist - r1057_swo, r1051_heading(r1051_Downward)));
        };
        r1051_xn$GlyphSaveSink$2Lrc4b.save("eqLower", null, r1051_HBar.m(r1051_SB, r1051_RightSB, r1051_SymbolMid - r1051_dSH - r1051_lessEqDist, r1051_OperatorStroke));
        r1051_xn$GlyphSaveSink$2Lrc4b.save("eqLower2", null, r1051_HBar.m(r1051_SB, r1051_RightSB, r1051_SymbolMid - r1051_dSH - 2 * r1051_lessEqDist, r1051_OperatorStroke));
        r1051_xn$GlyphSaveSink$2Lrc4b.save("eqBarNegatedLower", null, r1051_union(r1051_xn$referglyph$1aao("eqLower"), r1051_BarNegator(r1051_SymbolMid - r1051_dSH, r1051_lessEqDist)));
        r1051_xn$GlyphSaveSink$2Lrc4b.save("symLower", null, r1051_symWave(r1051_SymbolMid - r1051_dSH - r1051_lessEqDist, 1));
        r1051_xn$GlyphSaveSink$2Lrc4b.save("symBarNegatedLower", null, r1051_union(r1051_xn$referglyph$1aao("symLower"), r1051_BarNegator(r1051_SymbolMid - r1051_dSH, r1051_lessEqDist)));
        r1051_xn$GlyphSaveSink$2Lrc4b.save("eqEqLower", null, r1051_union(r1051_HBar.m(r1051_SB, r1051_RightSB, r1051_SymbolMid - r1051_dSH + r1051_lessEqDist * (2 / 3), r1051_lesslessSW), r1051_HBar.m(r1051_SB, r1051_RightSB, r1051_SymbolMid - r1051_dSH - r1051_lessEqDist, r1051_lesslessSW)));
        r1051_xn$GlyphSaveSink$2Lrc4b.save("symSymLower", null, r1051_union(r1051_symWave(r1051_SymbolMid - r1051_dSH + r1051_lessEqDist * (2 / 3), 1, r1051_lesslessSW), r1051_symWave(r1051_SymbolMid - r1051_dSH - r1051_lessEqDist, 1, r1051_lesslessSW)));
        r1051_xn$GlyphSaveSink$2Lrc4b.save("symEqLower", null, r1051_union(r1051_symWave(r1051_SymbolMid - r1051_dSH + r1051_lessEqDist * (2 / 3), 1, r1051_lesslessSW), r1051_HBar.m(r1051_SB, r1051_RightSB, r1051_SymbolMid - r1051_dSH - r1051_lessEqDist * (7 / 6), r1051_lesslessSW)));
        r1051_xn$GlyphSaveSink$2Lrc4b.save("eqEqBarNegatedLower", null, r1051_union(r1051_xn$referglyph$1aao("eqEqLower"), r1051_EqEqBarNegation()));
        return r1051_xn$GlyphSaveSink$2Lrc4b.save("symSymBarNegatedLower", null, r1051_union(r1051_xn$referglyph$1aao("symSymLower"), r1051_EqEqBarNegation()));
    });
    return void 0;
});


