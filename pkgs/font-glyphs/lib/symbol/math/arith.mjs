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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Arith", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t10, _r312_t11, _r312_t12, _r312_tag13, _r312_t14, _r312_tag15, _r312_t16, _r312_tag17, _r312_t18, _r312_tag19, _r312_t20, _r312_tag21;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_DesignParameters = _r312_t1.DesignParameters;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_XH = _r312_t1.XH;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_ParenTop = _r312_t1.ParenTop;
        var r312_ParenBot = _r312_t1.ParenBot;
        var r312_PlusTop = _r312_t1.PlusTop;
        var r312_PlusBot = _r312_t1.PlusBot;
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_OX = _r312_t1.OX;
        var r312_AdviceStrokeInSpace = _r312_t1.AdviceStrokeInSpace;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_DotSize = _r312_t1.DotSize;
        var r312_Jut = _r312_t1.Jut;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_DotRadius = _r312_t1.DotRadius;
        var r312_OperatorStroke = _r312_t1.OperatorStroke;
        var r312_GeometryStroke = _r312_t1.GeometryStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Rect = _r312_t5.Rect;
        var r312_SquareAt = _r312_t5.SquareAt;
        var r312_MaskAboveLine = _r312_t5.MaskAboveLine;
        var r312_MaskBelowLine = _r312_t5.MaskBelowLine;
        var r312_RingAt = _r312_t5.RingAt;
        var r312_RingStrokeAt = _r312_t5.RingStrokeAt;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var r312_xn$clearanchors$1aao = _r312_t5["clear-anchors"];
        var r312_DotVariants = _r312_t5.DotVariants;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_alias = _r312_t6.alias;
        var r312_turned = _r312_t6.turned;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Frame"].resolve();
        var r312_MathEnclosureSw = _r312_t7.MathEnclosureSw;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
        var r312_EqualHalfSpace = _r312_t8.EqualHalfSpace;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Sym"].resolve();
        var r312_symWave = _r312_t9.symWave;
        (function () {
            r312_xn$ExportCapture$2Lrc4b(function () {
                var _r321_t0, _r321_t1;
                return {
                    "PlusShape": r319_PlusShape
                };
            });
            var r319_PlusShape = function (r322_left, r322_right, r322_s, r322_sw) {
                var _r322_t0, _r322_t1;
                return r312_union(r312_HBar.m(r322_left, r322_right, r312_SymbolMid, r1_fallback(r322_sw, r312_OperatorStroke)), r312_VBar.m(r312_Middle + r1_fallback(r322_s, 0), r312_PlusTop, r312_PlusBot, r1_fallback(r322_sw, r312_OperatorStroke)));
            };
            r312_xn$ExportCapture$2Lrc4b(function () {
                var _r324_t0, _r324_t1;
                return {
                    "JunctDiamond": r319_JunctDiamond
                };
            });
            var r319_JunctDiamond = function (r325_x, r325_y, r325_sw) {
                var _r325_t0, _r325_t1;
                return r312_xn$spirooutline$1aao(r312_corner(r325_x - r312_HSwToV(0.5 * r325_sw), r325_y), r312_corner(r325_x, r325_y + 0.5 * r325_sw), r312_corner(r325_x + r312_HSwToV(0.5 * r325_sw), r325_y), r312_corner(r325_x, r325_y - 0.5 * r325_sw));
            };
            r319_PlusShape.joinCap = function (r326_x) {
                var _r326_t0, _r326_t1;
                return r319_JunctDiamond(r326_x, r312_SymbolMid, r312_OperatorStroke);
            };
            r312_xn$GlyphSaveSink$2Lrc4b.save("plus", "+", r319_PlusShape(r312_SB, r312_RightSB));
            r312_xn$GlyphSaveSink$2Lrc4b.save("minus", 8722, r312_HBar.m(r312_SB, r312_RightSB, r312_SymbolMid, r312_OperatorStroke));
            var r319_HebrPlusShape = function (r329_left, r329_right, r329_s, r329_sw) {
                var _r329_t0, _r329_t1;
                return r312_union(r312_HBar.m(r329_left, r329_right, r312_SymbolMid, r1_fallback(r329_sw, r312_OperatorStroke)), r312_VBar.m(r312_Middle + r1_fallback(r329_s, 0), r312_PlusTop, r312_SymbolMid, r1_fallback(r329_sw, r312_OperatorStroke)));
            };
            r312_xn$GlyphSaveSink$2Lrc4b.save("hebr/plus", 64297, r319_HebrPlusShape(r312_SB, r312_RightSB));
            r312_xn$GlyphSaveSink$2Lrc4b.save("innerPlus", null, r319_PlusShape(r312_SB, r312_RightSB, 0, r312_MathEnclosureSw));
            r312_xn$GlyphSaveSink$2Lrc4b.save("innerMinus", null, r312_HBar.m(r312_SB, r312_RightSB, r312_SymbolMid, r312_MathEnclosureSw));
            r312_xn$GlyphSaveSink$2Lrc4b.save("innerVerticalBar", null, r312_VBar.m(r312_Middle, r312_PlusTop, r312_PlusBot, r312_MathEnclosureSw));
            r312_xn$GlyphSaveSink$2Lrc4b.save("hebr/innerPlus", null, r319_HebrPlusShape(r312_SB, r312_RightSB, 0, r312_MathEnclosureSw));
            r312_xn$GlyphSaveSink$2Lrc4b.save("hermetianConjugateMatrixPlus", 8889, r312_difference(r319_PlusShape(r312_SB, r312_RightSB), r312_SquareAt(r312_Middle, r312_SymbolMid, r312_DotRadius)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("plusminus", 177, new r312_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                var _r338_t0, _r338_t1;
                r338_currentGlyph.include(r312_xn$referglyph$1aao("plus"));
                r338_currentGlyph.include(r312_HBar.b(r312_SB, r312_RightSB, 0, r312_OperatorStroke));
                return void 0;
            }));
            r312_turned("minusplus", 8723, "plusminus", r312_Middle, r312_SymbolMid);
            r312_xn$GlyphSaveSink$2Lrc4b.save("plustilde", 10790, new r312_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                var _r343_t0, _r343_t1;
                r343_currentGlyph.include(r312_xn$referglyph$1aao("plus"));
                r343_currentGlyph.include(r312_symWave(0, 1));
                return void 0;
            }));
            r312_turned("tildeplus", 10788, "plustilde", r312_Middle, r312_SymbolMid);
            r312_xn$GlyphSaveSink$2Lrc4b.save("plusequal", 10866, new r312_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                var _r348_t0, _r348_t1;
                r348_currentGlyph.include(r312_xn$referglyph$1aao("plus"));
                r348_currentGlyph.include(r312_ApparentTranslate(0, r312_EqualHalfSpace * 1.5));
                r348_currentGlyph.include(r312_HBar.b(r312_SB, r312_RightSB, r312_EqualHalfSpace * 1.5, r312_OperatorStroke));
                r348_currentGlyph.include(r312_HBar.b(r312_SB, r312_RightSB, 0, r312_OperatorStroke));
                return void 0;
            }));
            r312_turned("equalplus", 10865, "plusequal", r312_Middle, r312_SymbolMid);
            r312_xn$GlyphSaveSink$2Lrc4b.save("plusRing", 10786, new r312_xn$Capture$2Lrc8.GlyphProc(function (r355_currentGlyph) {
                var _r355_t0, _r355_t1;
                r355_currentGlyph.include(r312_xn$referglyph$1aao("plus"), true, true);
                r355_currentGlyph.include(r312_MarkSet.plus());
                r355_currentGlyph.include(r312_xn$referglyph$1aao("ringAbove"));
                r355_currentGlyph.include(r312_xn$clearanchors$1aao());
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("plusCircumflex", 10787, new r312_xn$Capture$2Lrc8.GlyphProc(function (r362_currentGlyph) {
                var _r362_t0, _r362_t1;
                r362_currentGlyph.include(r312_xn$referglyph$1aao("plus"), true, true);
                r362_currentGlyph.include(r312_MarkSet.plus());
                r362_currentGlyph.include(r312_xn$referglyph$1aao("circumflexAbove"));
                r362_currentGlyph.include(r312_xn$clearanchors$1aao());
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("doublePlus", 10746, new r312_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                var _r369_t0, _r369_t1;
                r369_currentGlyph.include(r312_HBar.m(r312_SB, r312_RightSB, r312_SymbolMid, r312_OperatorStroke));
                r369_currentGlyph.include(r312_VBar.m(r1_mix(r312_SB, r312_RightSB, 1 / 3) - 1 / 6 * r312_HSwToV(r312_OperatorStroke), r312_PlusTop, r312_PlusBot, r312_OperatorStroke));
                r369_currentGlyph.include(r312_VBar.m(r1_mix(r312_SB, r312_RightSB, 2 / 3) + 1 / 6 * r312_HSwToV(r312_OperatorStroke), r312_PlusTop, r312_PlusBot, r312_OperatorStroke));
                return void 0;
            }));
            return r312_xn$GlyphSaveSink$2Lrc4b.save("triplePlus", 10747, new r312_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                var _r375_t0, _r375_t1;
                var r375_fine = r312_AdviceStroke(4);
                r375_currentGlyph.include(r312_HBar.m(r312_SB, r312_RightSB, r312_SymbolMid, r312_OperatorStroke));
                r375_currentGlyph.include(r312_VBar.m(r1_mix(r312_SB, r312_RightSB, 1 / 4) - 1 / 8 * r312_HSwToV(r312_OperatorStroke), r312_PlusTop, r312_PlusBot, r375_fine));
                r375_currentGlyph.include(r312_VBar.m(r1_mix(r312_SB, r312_RightSB, 1 / 2), r312_PlusTop, r312_PlusBot, r375_fine));
                r375_currentGlyph.include(r312_VBar.m(r1_mix(r312_SB, r312_RightSB, 3 / 4) + 1 / 8 * r312_HSwToV(r312_OperatorStroke), r312_PlusTop, r312_PlusBot, r375_fine));
                return void 0;
            }));
        })();
        (function () {
            var r381_Size = 0.5 * (r312_RightSB - r312_SB) + 0.25 * r312_SB;
            var r381_swBowtie = r312_AdviceStroke(4.25);
            var r381_swBowtieHv = r312_AdviceStroke(4.75);
            var r381_MultiplyMask = function (r382_py, r382_p1, r382_p2) {
                var _r382_t0, _r382_t1;
                return r312_xn$spirooutline$1aao(r312_corner(r312_Middle - r382_p1 * r381_Size, r312_SymbolMid - r382_p1 * r382_py * r381_Size), r312_corner(r312_Middle + r382_p2 * r381_Size, r312_SymbolMid + r382_p2 * r382_py * r381_Size), r312_corner(r312_Middle + r382_p2 * r381_Size, r312_SymbolMid - r382_p2 * r382_py * r381_Size), r312_corner(r312_Middle - r382_p1 * r381_Size, r312_SymbolMid + r382_p1 * r382_py * r381_Size));
            };
            var r381_CoMultiplyMask = function (r383_py, r383_p1, r383_p2) {
                var _r383_t0, _r383_t1;
                return r312_xn$spirooutline$1aao(r312_corner(r312_Middle + r383_p2 * r381_Size, r312_SymbolMid + r383_p2 * r383_py * r381_Size), r312_corner(r312_Middle - r383_p1 * r381_Size, r312_SymbolMid - r383_p1 * r383_py * r381_Size), r312_corner(r312_Middle + r383_p2 * r381_Size, r312_SymbolMid - r383_p2 * r383_py * r381_Size), r312_corner(r312_Middle - r383_p1 * r381_Size, r312_SymbolMid + r383_p1 * r383_py * r381_Size));
            };
            var r381_MultiplyStroke1Shape = function (r384_s, r384_py, r384_p1, r384_p2) {
                var _r384_t0, _r384_t1;
                return r312_dispiro(r312_widths.center(r384_s), r312_flat(r312_Middle - r384_p1 * r381_Size, r312_SymbolMid - r384_p1 * r384_py * r381_Size), r312_curl(r312_Middle + r384_p2 * r381_Size, r312_SymbolMid + r384_p2 * r384_py * r381_Size));
            };
            var r381_MultiplyStroke2Shape = function (r385_s, r385_py, r385_p1, r385_p2) {
                var _r385_t0, _r385_t1;
                return r312_dispiro(r312_widths.center(r385_s), r312_flat(r312_Middle - r385_p1 * r381_Size, r312_SymbolMid + r385_p1 * r385_py * r381_Size), r312_curl(r312_Middle + r385_p2 * r381_Size, r312_SymbolMid - r385_p2 * r385_py * r381_Size));
            };
            r312_xn$GlyphSaveSink$2Lrc4b.save("multiply/stroke1", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
                var _r388_t0, _r388_t1;
                r388_currentGlyph.include(r381_MultiplyStroke1Shape(r312_OperatorStroke, 1, 1, 1));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("multiply/stroke2", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r392_currentGlyph) {
                var _r392_t0, _r392_t1;
                r392_currentGlyph.include(r381_MultiplyStroke2Shape(r312_OperatorStroke, 1, 1, 1));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("multiply", 215, new r312_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                var _r396_t0, _r396_t1;
                r396_currentGlyph.include(r381_MultiplyStroke1Shape(r312_OperatorStroke, 1, 1, 1));
                r396_currentGlyph.include(r381_MultiplyStroke2Shape(r312_OperatorStroke, 1, 1, 1));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("multiplyUnderbar", 10801, new r312_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
                var _r401_t0, _r401_t1;
                r401_currentGlyph.include(r312_xn$referglyph$1aao("multiply"));
                r401_currentGlyph.include(r312_HBar.b(r312_Middle - r381_Size, r312_Middle + r381_Size, 0, r312_OperatorStroke));
                return void 0;
            }));
            r312_alias("vectorOrCrossProduct", 10799, "multiply");
            r312_xn$GlyphSaveSink$2Lrc4b.save("multiplyInMulDiv", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r406_currentGlyph) {
                var _r406_t0, _r406_t1;
                r406_currentGlyph.include(r381_MultiplyStroke1Shape(r381_swBowtie, 1, 1, 1));
                r406_currentGlyph.include(r381_MultiplyStroke2Shape(r381_swBowtie, 1, 1, 1));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("bowtie", 8904, new r312_xn$Capture$2Lrc8.GlyphProc(function (r411_currentGlyph) {
                var _r411_t0, _r411_t1;
                r411_currentGlyph.include(r312_union(r312_intersection(r381_MultiplyMask(1, 1, 1), r312_union(r312_VBar.l(r312_Middle - r381_Size, r312_SymbolMid - r381_Size, r312_SymbolMid + r381_Size, r381_swBowtieHv), r312_VBar.r(r312_Middle + r381_Size, r312_SymbolMid - r381_Size, r312_SymbolMid + r381_Size, r381_swBowtieHv))), r312_intersection(r312_Rect(r312_ParenTop, r312_ParenBot, r312_Middle - r381_Size, r312_Middle + r381_Size), r312_union(r381_MultiplyStroke1Shape(r381_swBowtie, 1, 1, 1), r381_MultiplyStroke2Shape(r381_swBowtie, 1, 1, 1)))));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("bowtieLeft", 8905, new r312_xn$Capture$2Lrc8.GlyphProc(function (r415_currentGlyph) {
                var _r415_t0, _r415_t1;
                r415_currentGlyph.include(r312_union(r312_intersection(r381_MultiplyMask(1, 1, 1), r312_VBar.l(r312_Middle - r381_Size, r312_SymbolMid - r381_Size, r312_SymbolMid + r381_Size, r381_swBowtieHv)), r312_intersection(r312_Rect(r312_ParenTop, r312_ParenBot, r312_Middle - r381_Size, r1_mix(r312_SB, r312_RightSB, 2)), r312_union(r381_MultiplyStroke1Shape(r381_swBowtie, 1, 1, 1), r381_MultiplyStroke2Shape(r381_swBowtie, 1, 1, 1)))));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("bowtieRight", 8906, new r312_xn$Capture$2Lrc8.GlyphProc(function (r419_currentGlyph) {
                var _r419_t0, _r419_t1;
                r419_currentGlyph.include(r312_union(r312_intersection(r381_MultiplyMask(1, 1, 1), r312_VBar.r(r312_Middle + r381_Size, r312_SymbolMid - r381_Size, r312_SymbolMid + r381_Size, r381_swBowtieHv)), r312_intersection(r312_Rect(r312_ParenTop, r312_ParenBot, r1_mix(r312_RightSB, r312_SB, 2), r312_Middle + r381_Size), r312_union(r381_MultiplyStroke1Shape(r381_swBowtie, 1, 1, 1), r381_MultiplyStroke2Shape(r381_swBowtie, 1, 1, 1)))));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("bowtieBot", 10802, new r312_xn$Capture$2Lrc8.GlyphProc(function (r423_currentGlyph) {
                var _r423_t0, _r423_t1;
                r423_currentGlyph.include(r312_union(r312_intersection(r381_CoMultiplyMask(1, 1, 1), r312_HBar.b(r312_Middle - r381_Size, r312_Middle + r381_Size, r312_SymbolMid - r381_Size, r381_swBowtieHv)), r312_intersection(r312_Rect(r312_ParenTop, r312_SymbolMid - r381_Size, -r312_Width, 2 * r312_Width), r312_union(r381_MultiplyStroke1Shape(r381_swBowtie, 1, 1, 1), r381_MultiplyStroke2Shape(r381_swBowtie, 1, 1, 1)))));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("bowtieWithLeftHalfBlack", 10705, r312_union(r312_xn$referglyph$1aao("bowtie"), r381_MultiplyMask(1, 1, 0)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("bowtieWithRightHalfBlack", 10706, r312_union(r312_xn$referglyph$1aao("bowtie"), r381_MultiplyMask(1, 0, 1)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("blackBowtie", 10707, r312_union(r312_xn$referglyph$1aao("bowtie"), r381_MultiplyMask(1, 1, 1)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("timesWithLeftHalfBlack", 10708, r312_union(r312_xn$referglyph$1aao("bowtieLeft"), r381_MultiplyMask(1, 1, 0)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("timesWithRightHalfBlack", 10709, r312_union(r312_xn$referglyph$1aao("bowtieRight"), r381_MultiplyMask(1, 0, 1)));
            var r381_JoinLeft = function () {
                var _r430_t0, _r430_t1;
                return r312_union(r312_HBar.t(Math.max(0, r312_Middle - r381_Size - r312_Jut + r312_HSwToV(0.5 * r381_swBowtieHv)), r312_Middle - r381_Size, r312_SymbolMid + r381_Size, r381_swBowtie), r312_HBar.b(Math.max(0, r312_Middle - r381_Size - r312_Jut + r312_HSwToV(0.5 * r381_swBowtieHv)), r312_Middle - r381_Size, r312_SymbolMid - r381_Size, r381_swBowtie));
            };
            var r381_JoinRight = function () {
                var _r431_t0, _r431_t1;
                return r312_union(r312_HBar.t(r312_Middle + r381_Size, Math.min(r312_Width, r312_Middle + r381_Size + r312_Jut - r312_HSwToV(0.5 * r381_swBowtieHv)), r312_SymbolMid + r381_Size, r381_swBowtie), r312_HBar.b(r312_Middle + r381_Size, Math.min(r312_Width, r312_Middle + r381_Size + r312_Jut - r312_HSwToV(0.5 * r381_swBowtieHv)), r312_SymbolMid - r381_Size, r381_swBowtie));
            };
            var r381_JoinLeftMask = function () {
                var _r432_t0, _r432_t1;
                return r312_union(r312_MaskAboveLine(0, r312_SymbolMid + r381_Size, r312_Middle, r312_SymbolMid + r381_Size), r312_MaskBelowLine(0, r312_SymbolMid - r381_Size, r312_Middle, r312_SymbolMid - r381_Size));
            };
            var r381_JoinRightMask = function () {
                var _r433_t0, _r433_t1;
                return r312_union(r312_MaskAboveLine(r312_Middle, r312_SymbolMid + r381_Size, r312_Width, r312_SymbolMid + r381_Size), r312_MaskBelowLine(r312_Middle, r312_SymbolMid - r381_Size, r312_Width, r312_SymbolMid - r381_Size));
            };
            r312_xn$GlyphSaveSink$2Lrc4b.save("joinLeft", 10197, new r312_xn$Capture$2Lrc8.GlyphProc(function (r436_currentGlyph) {
                var _r436_t0, _r436_t1;
                r436_currentGlyph.include(r312_difference(r312_union(r312_xn$referglyph$1aao("bowtie"), r381_JoinLeft()), r381_JoinLeftMask()));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("joinRight", 10198, new r312_xn$Capture$2Lrc8.GlyphProc(function (r440_currentGlyph) {
                var _r440_t0, _r440_t1;
                r440_currentGlyph.include(r312_difference(r312_union(r312_xn$referglyph$1aao("bowtie"), r381_JoinRight()), r381_JoinRightMask()));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("joinFull", 10199, new r312_xn$Capture$2Lrc8.GlyphProc(function (r444_currentGlyph) {
                var _r444_t0, _r444_t1;
                r444_currentGlyph.include(r312_difference(r312_union(r312_xn$referglyph$1aao("bowtie"), r381_JoinLeft(), r381_JoinRight()), r381_JoinLeftMask(), r381_JoinRightMask()));
                return void 0;
            }));
            var r381_HourglassStretch = 1.6;
            r312_xn$GlyphSaveSink$2Lrc4b.save("whiteHourglass", 10710, new r312_xn$Capture$2Lrc8.GlyphProc(function (r448_currentGlyph) {
                var _r448_t0, _r448_t1;
                r448_currentGlyph.include(r312_union(r312_intersection(r381_CoMultiplyMask(r381_HourglassStretch, 1, 1), r312_union(r312_HBar.t(r312_Middle - r381_Size, r312_Middle + r381_Size, r312_SymbolMid + r381_HourglassStretch * r381_Size, r381_swBowtieHv), r312_HBar.b(r312_Middle - r381_Size, r312_Middle + r381_Size, r312_SymbolMid - r381_HourglassStretch * r381_Size, r381_swBowtieHv))), r312_intersection(r312_Rect(r312_SymbolMid + r381_HourglassStretch * r381_Size, r312_SymbolMid - r381_HourglassStretch * r381_Size, -r312_Width, 2 * r312_Width), r312_union(r381_MultiplyStroke1Shape(r381_swBowtie, r381_HourglassStretch, 1, 1), r381_MultiplyStroke2Shape(r381_swBowtie, r381_HourglassStretch, 1, 1)))));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("blackHourglass", 10711, new r312_xn$Capture$2Lrc8.GlyphProc(function (r452_currentGlyph) {
                var _r452_t0, _r452_t1;
                r452_currentGlyph.include(r312_union(r312_xn$referglyph$1aao("whiteHourglass"), r381_CoMultiplyMask(r381_HourglassStretch, 1, 1)));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("leftSemidirectProduct", 8907, new r312_xn$Capture$2Lrc8.GlyphProc(function (r456_currentGlyph) {
                var _r456_t0, _r456_t1;
                r456_currentGlyph.include(r381_MultiplyStroke1Shape(r312_OperatorStroke, 1, 1, 0));
                r456_currentGlyph.include(r381_MultiplyStroke2Shape(r312_OperatorStroke, 1, 1, 1));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("rightSemidirectProduct", 8908, new r312_xn$Capture$2Lrc8.GlyphProc(function (r461_currentGlyph) {
                var _r461_t0, _r461_t1;
                r461_currentGlyph.include(r381_MultiplyStroke1Shape(r312_OperatorStroke, 1, 1, 1));
                r461_currentGlyph.include(r381_MultiplyStroke2Shape(r312_OperatorStroke, 1, 0, 1));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("innerMultiply/stroke1", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r466_currentGlyph) {
                var _r466_t0, _r466_t1;
                r466_currentGlyph.include(r381_MultiplyStroke1Shape(r312_MathEnclosureSw, 1, 1, 1));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("innerMultiply/stroke2", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r470_currentGlyph) {
                var _r470_t0, _r470_t1;
                r470_currentGlyph.include(r381_MultiplyStroke2Shape(r312_MathEnclosureSw, 1, 1, 1));
                return void 0;
            }));
            return r312_xn$GlyphSaveSink$2Lrc4b.save("innerMultiply", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r474_currentGlyph) {
                var _r474_t0, _r474_t1;
                r474_currentGlyph.include(r381_MultiplyStroke1Shape(r312_MathEnclosureSw, 1, 1, 1));
                r474_currentGlyph.include(r381_MultiplyStroke2Shape(r312_MathEnclosureSw, 1, 1, 1));
                return void 0;
            }));
        })();
        (function () {
            var r478_suffix, r478_DrawAt, r478_kDotRadius, r478_overshoot, _r478_t2, _r478_t3, _r478_tag4;
            var _r478_t0 = Object.entries(r312_DotVariants)[Symbol.iterator]();
            var _r478_t1 = void 0;
            while (!(_r478_t1 = _r478_t0.next()).done) {
                _r478_t2 = _r478_t1.value;
                r478_suffix = _r478_t2[0];
                r478_DrawAt = _r478_t2[1][0];
                r478_kDotRadius = _r478_t2[1][1];
                r478_overshoot = _r478_t2[1][2];
                _r478_t2[1];
                (function () {
                    var r481_dr = r312_DotRadius * r478_kDotRadius * r312_OperatorStroke / r312_Stroke;
                    r312_xn$GlyphSaveSink$2Lrc4b.save("dotplus." + r478_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r484_currentGlyph) {
                        var _r484_t0, _r484_t1;
                        var r484_gap = r312_AdviceStroke(12);
                        r484_currentGlyph.include(r312_union(r478_DrawAt(r312_Middle, r312_SymbolMid * 2 - r312_OperatorStroke / 2, r481_dr - r478_overshoot), r312_difference(r312_xn$referglyph$1aao("plus"), r478_DrawAt(r312_Middle, r312_SymbolMid * 2 - r312_OperatorStroke / 2, r481_dr + r484_gap - r478_overshoot))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("dotminus." + r478_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r488_currentGlyph) {
                        var _r488_t0, _r488_t1;
                        r488_currentGlyph.include(r312_xn$referglyph$1aao("minus"), true, true);
                        r488_currentGlyph.include(r478_DrawAt(r312_Middle, r312_PlusTop, r481_dr - r478_overshoot));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("dotslash." + r478_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r493_currentGlyph) {
                        var _r493_t0, _r493_t1;
                        r493_currentGlyph.include(r312_dispiro(r312_widths.center(r312_OperatorStroke), r312_flat(r1_mix(r312_Middle, r312_SB, Math.SQRT1_2), r1_mix(r312_SymbolMid, r312_PlusBot, Math.SQRT1_2)), r312_curl(r1_mix(r312_Middle, r312_RightSB, Math.SQRT1_2), r1_mix(r312_SymbolMid, r312_PlusTop, Math.SQRT1_2))), true, true);
                        r493_currentGlyph.include(r478_DrawAt(r1_mix(r312_Middle, r312_SB, Math.SQRT1_2), r1_mix(r312_SymbolMid, r312_PlusTop, Math.SQRT1_2), r481_dr - r478_overshoot));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("dotvbar." + r478_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r498_currentGlyph) {
                        var _r498_t0, _r498_t1;
                        r498_currentGlyph.include(r312_VBar.m(r1_mix(r312_Middle, r312_RightSB, 0.5), r312_PlusTop, r312_PlusBot, r312_OperatorStroke), true, true);
                        r498_currentGlyph.include(r478_DrawAt(r1_mix(r312_Middle, r312_SB, 0.5), r312_SymbolMid, r481_dr - r478_overshoot));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("dottimes." + r478_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r503_currentGlyph) {
                        var _r503_t0, _r503_t1;
                        r503_currentGlyph.include(r312_xn$referglyph$1aao("multiply"));
                        var r503_sw = r312_AdviceStroke(4);
                        var r503_gap = (r312_RightSB - r312_SB) / 2;
                        r503_currentGlyph.include(r478_DrawAt(r312_Middle, r312_SymbolMid + r503_gap, r481_dr * r503_sw / r312_OperatorStroke - r478_overshoot));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("geometricProportion." + r478_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r508_currentGlyph) {
                        var _r508_t0, _r508_t1;
                        r508_currentGlyph.include(r312_xn$referglyph$1aao("minus"), true, true);
                        r508_currentGlyph.include(r478_DrawAt(r312_SB + r481_dr, r312_PlusTop, r481_dr - r478_overshoot));
                        r508_currentGlyph.include(r478_DrawAt(r312_SB + r481_dr, r312_PlusBot, r481_dr - r478_overshoot));
                        r508_currentGlyph.include(r478_DrawAt(r312_RightSB - r481_dr, r312_PlusTop, r481_dr - r478_overshoot));
                        r508_currentGlyph.include(r478_DrawAt(r312_RightSB - r481_dr, r312_PlusBot, r481_dr - r478_overshoot));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("minusColon." + r478_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r516_currentGlyph) {
                        var _r516_t0, _r516_t1;
                        r516_currentGlyph.include(r478_DrawAt(r312_Middle, r481_dr, r481_dr - r478_overshoot));
                        r516_currentGlyph.include(r478_DrawAt(r312_Middle, r312_XH - r481_dr, r481_dr - r478_overshoot));
                        var r516_sbSquash = 0.5;
                        var r516_delta = Math.max(0, r312_Middle - r481_dr - r312_SB * r516_sbSquash);
                        r516_currentGlyph.include(r312_ApparentTranslate(+r516_delta, r312_SymbolMid - r312_XH / 2));
                        r516_currentGlyph.include(r312_HBar.m(r312_SB * r516_sbSquash, r312_RightSB - r312_DotSize, r312_SymbolMid, r312_OperatorStroke));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("divide." + r478_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r523_currentGlyph) {
                        var _r523_t0, _r523_t1;
                        r523_currentGlyph.include(r312_xn$referglyph$1aao("minus"));
                        var r523_gap = (r312_RightSB - r312_SB) / 2;
                        r523_currentGlyph.include(r478_DrawAt(r312_Middle, r312_SymbolMid + r523_gap, r481_dr - r478_overshoot));
                        r523_currentGlyph.include(r478_DrawAt(r312_Middle, r312_SymbolMid - r523_gap, r481_dr - r478_overshoot));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("rotatedDivide." + r478_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r529_currentGlyph) {
                        var _r529_t0, _r529_t1;
                        r529_currentGlyph.include(r312_xn$referglyph$1aao("multiply/stroke1"));
                        var r529_gap = (r312_RightSB - r312_SB) / 2;
                        r529_currentGlyph.include(r478_DrawAt(r312_Middle - Math.SQRT1_2 * r529_gap, r312_SymbolMid + Math.SQRT1_2 * r529_gap, r481_dr - r478_overshoot));
                        r529_currentGlyph.include(r478_DrawAt(r312_Middle + Math.SQRT1_2 * r529_gap, r312_SymbolMid - Math.SQRT1_2 * r529_gap, r481_dr - r478_overshoot));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("innerDivide." + r478_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r535_currentGlyph) {
                        var _r535_t0, _r535_t1;
                        r535_currentGlyph.include(r312_xn$referglyph$1aao("innerMinus"));
                        var r535_sw = r312_MathEnclosureSw / 1.5;
                        r535_currentGlyph.include(r478_DrawAt(r312_Middle, r1_mix(r312_SymbolMid, r312_PlusTop, 0.5), r481_dr * r535_sw / r312_OperatorStroke - r478_overshoot));
                        r535_currentGlyph.include(r478_DrawAt(r312_Middle, r1_mix(r312_SymbolMid, r312_PlusBot, 0.5), r481_dr * r535_sw / r312_OperatorStroke - r478_overshoot));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("rotatedInnerDivide." + r478_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r541_currentGlyph) {
                        var _r541_t0, _r541_t1;
                        r541_currentGlyph.include(r312_xn$referglyph$1aao("innerMultiply/stroke1"));
                        var r541_sw = r312_MathEnclosureSw / 1.5;
                        r541_currentGlyph.include(r478_DrawAt(r1_mix(r312_Middle, r312_SB, 0.35), r1_mix(r312_SymbolMid, r312_PlusTop, 0.35), r481_dr * r541_sw / r312_OperatorStroke - r478_overshoot));
                        r541_currentGlyph.include(r478_DrawAt(r1_mix(r312_Middle, r312_RightSB, 0.35), r1_mix(r312_SymbolMid, r312_PlusBot, 0.35), r481_dr * r541_sw / r312_OperatorStroke - r478_overshoot));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("divisionTimes." + r478_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r547_currentGlyph) {
                        var _r547_t0, _r547_t1;
                        var r547_sw = r312_AdviceStroke(4);
                        var r547_gap = (r312_RightSB - r312_SB) / 2;
                        r547_currentGlyph.include(r312_union(r312_xn$referglyph$1aao("multiplyInMulDiv"), r312_HBar.m(r312_SB, r312_RightSB, r312_SymbolMid, r547_sw), r478_DrawAt(r312_Middle, r312_SymbolMid + r547_gap, r481_dr * r547_sw / r312_OperatorStroke - r478_overshoot), r478_DrawAt(r312_Middle, r312_SymbolMid - r547_gap, r481_dr * r547_sw / r312_OperatorStroke - r478_overshoot)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("minusFallingDots." + r478_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r551_currentGlyph) {
                        var _r551_t0, _r551_t1;
                        r551_currentGlyph.include(r312_xn$referglyph$1aao("minus"));
                        var r551_gap = (r312_RightSB - r312_SB) / 2;
                        r551_currentGlyph.include(r478_DrawAt(r1_mix(r312_SB, r312_RightSB, 1 / 6), r312_SymbolMid + r551_gap, r481_dr - r478_overshoot));
                        r551_currentGlyph.include(r478_DrawAt(r1_mix(r312_SB, r312_RightSB, 5 / 6), r312_SymbolMid - r551_gap, r481_dr - r478_overshoot));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("minusRisingDots." + r478_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r557_currentGlyph) {
                        var _r557_t0, _r557_t1;
                        r557_currentGlyph.include(r312_xn$referglyph$1aao("minus"));
                        var r557_gap = (r312_RightSB - r312_SB) / 2;
                        r557_currentGlyph.include(r478_DrawAt(r1_mix(r312_SB, r312_RightSB, 1 / 6), r312_SymbolMid - r557_gap, r481_dr - r478_overshoot));
                        r557_currentGlyph.include(r478_DrawAt(r1_mix(r312_SB, r312_RightSB, 5 / 6), r312_SymbolMid + r557_gap, r481_dr - r478_overshoot));
                        return void 0;
                    }));
                })();
            }
            r312_xn$selectvariant$7Hrq("dotplus", 8724, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            r312_turned("plusdot", 10789, "dotplus", r312_Middle, r312_SymbolMid);
            r312_xn$selectvariant$7Hrq("dotminus", 8760, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            r312_turned("minusdot", 10794, "dotminus", r312_Middle, r312_SymbolMid);
            r312_xn$selectvariant$7Hrq("dotvbar", new r312_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
            r312_xn$selectvariant$7Hrq("dotslash", new r312_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
            r312_xn$selectvariant$7Hrq("dothbar", new r312_xn$NamedParameterPair$2Lrc9b("shapeFrom", "dotminus"), new r312_xn$NamedParameterPair$2Lrc9b("follow", "diacriticDot"));
            r312_xn$selectvariant$7Hrq("dottimes", 10800, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            r312_xn$selectvariant$7Hrq("geometricProportion", 8762, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            r312_xn$selectvariant$7Hrq("minusColon", 8761, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            r312_xn$selectvariant$7Hrq("divide", 247, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            r312_xn$selectvariant$7Hrq("rotatedDivide", 11795, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            r312_xn$selectvariant$7Hrq("innerDivide", null, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            r312_xn$selectvariant$7Hrq("rotatedInnerDivide", null, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            r312_xn$selectvariant$7Hrq("divisionTimes", 8903, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            r312_xn$selectvariant$7Hrq("minusFallingDots", 10795, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            return r312_xn$selectvariant$7Hrq("minusRisingDots", 10796, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        })();
        (function () {
            var r578_suffix, r578_DrawAt, r578_kDotRadius, r578_overshoot, _r578_t3, _r578_t4, _r578_tag5;
            var _r578_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
            var r578_TrigArrowShape = _r578_t0.TrigArrowShape;
            var r578_fine = r312_AdviceStroke(6);
            var r578_radius = (r312_RightSB - r312_SB - r312_HSwToV(4 * r578_fine)) / 6 + r312_HSwToV(r578_fine) - r312_OX;
            var r578_gap = (r312_RightSB - r312_SB) / 2 - (r578_radius - r312_OX) * 2;
            var r578_dotCenterOffset = r578_radius + r312_OX;
            r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r582_currentGlyph) {
                var _r582_t0, _r582_t1;
                var r582_bar = r312_HBar.m(r312_SB + r578_dotCenterOffset, r312_RightSB - r578_dotCenterOffset, r312_SymbolMid, r312_OperatorStroke);
                var r582_leftFilled = r312_RingAt(r312_SB + r578_dotCenterOffset, r312_SymbolMid, r578_radius);
                var r582_rightFilled = r312_RingAt(r312_RightSB - r578_dotCenterOffset, r312_SymbolMid, r578_radius);
                var r582_leftHollow = r312_RingStrokeAt(r312_SB + r578_dotCenterOffset, r312_SymbolMid, r578_radius, r578_fine);
                var r582_rightHollow = r312_RingStrokeAt(r312_RightSB - r578_dotCenterOffset, r312_SymbolMid, r578_radius, r578_fine);
                r312_xn$GlyphSaveSink$2Lrc4b.save("originalOf", 8886, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r582_currentGlyph, r312_union(r312_difference(r582_bar, r582_leftFilled), r582_leftHollow, r582_rightFilled)));
                r312_xn$GlyphSaveSink$2Lrc4b.save("imageOf", 8887, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r582_currentGlyph, r312_union(r312_difference(r582_bar, r582_rightFilled), r582_leftFilled, r582_rightHollow)));
                r312_xn$GlyphSaveSink$2Lrc4b.save("doubleMultimap", 10719, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r582_currentGlyph, r312_union(r312_difference(r582_bar, r582_leftFilled, r582_rightFilled), r582_leftHollow, r582_rightHollow)));
                return void 0;
            }));
            var r578_sFine = r312_AdviceStroke(4.5);
            var r578_sRadius = Math.min((r312_RightSB - r312_SB) / 2 * r312_DesignParameters.geometric_small_x, (r312_RightSB - r312_SB - r312_HSwToV(2 * r578_sFine)) / 4 + r312_HSwToV(r578_sFine) - r312_OX);
            var r578_sGap = (r312_RightSB - r312_SB) / 2 - (r578_sRadius - r312_OX) * 2;
            var r578_sDotCenterOffset = r578_sRadius + r312_OX;
            r312_xn$GlyphSaveSink$2Lrc4b.save("multimap", 8888, new r312_xn$Capture$2Lrc8.GlyphProc(function (r588_currentGlyph) {
                var _r588_t0, _r588_t1;
                r588_currentGlyph.include(r312_union(r312_difference(r312_HBar.m(r312_SB, r312_RightSB - r578_sDotCenterOffset, r312_SymbolMid, r312_OperatorStroke), r312_RingAt(r312_RightSB - r578_sDotCenterOffset, r312_SymbolMid, r578_sRadius)), r312_RingStrokeAt(r312_RightSB - r578_sDotCenterOffset, r312_SymbolMid, r578_sRadius, r578_sFine)));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("leftMultimap", 10204, new r312_xn$Capture$2Lrc8.GlyphProc(function (r592_currentGlyph) {
                var _r592_t0, _r592_t1;
                r592_currentGlyph.include(r312_union(r312_difference(r312_HBar.m(r312_SB + r578_sDotCenterOffset, r312_RightSB, r312_SymbolMid, r312_OperatorStroke), r312_RingAt(r312_SB + r578_sDotCenterOffset, r312_SymbolMid, r578_sRadius)), r312_RingStrokeAt(r312_SB + r578_sDotCenterOffset, r312_SymbolMid, r578_sRadius, r578_sFine)));
                return void 0;
            }));
            var r578_unitedGap = r578_radius - r312_OX + r578_gap / 2;
            var r578_separatedGap = r578_radius - r312_OX + r312_SB;
            r312_xn$GlyphSaveSink$2Lrc4b.save("unitedPawn", 11258, new r312_xn$Capture$2Lrc8.GlyphProc(function (r596_currentGlyph) {
                var _r596_t0, _r596_t1;
                r596_currentGlyph.include(r312_RingStrokeAt(r312_Middle + r578_unitedGap, r312_SymbolMid, r578_radius, r578_fine));
                r596_currentGlyph.include(r312_RingStrokeAt(r312_Middle - r578_unitedGap, r312_SymbolMid, r578_radius, r578_fine));
                return void 0;
            }));
            var _r578_t1 = Object.entries(r312_DotVariants)[Symbol.iterator]();
            var _r578_t2 = void 0;
            while (!(_r578_t2 = _r578_t1.next()).done) {
                _r578_t3 = _r578_t2.value;
                r578_suffix = _r578_t3[0];
                r578_DrawAt = _r578_t3[1][0];
                r578_kDotRadius = _r578_t3[1][1];
                r578_overshoot = _r578_t3[1][2];
                _r578_t3[1];
                (function () {
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("separatedPawn." + r578_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r604_currentGlyph) {
                        var _r604_t0, _r604_t1;
                        r604_currentGlyph.include(r312_RingStrokeAt(r312_Middle + r578_separatedGap, r312_SymbolMid, r578_radius, r578_fine));
                        r604_currentGlyph.include(r312_RingStrokeAt(r312_Middle - r578_separatedGap, r312_SymbolMid, r578_radius, r578_fine));
                        var r604_space = 2 * r312_SB;
                        var r604_dFine = r312_AdviceStrokeInSpace(r604_space, 3.5);
                        var r604_dr = r312_DotRadius * r578_kDotRadius * r604_dFine / r312_Stroke;
                        r604_currentGlyph.include(r578_DrawAt(r312_Middle - r604_space / 4, r312_SymbolMid, r604_dr));
                        r604_currentGlyph.include(r578_DrawAt(r312_Middle + r604_space / 4, r312_SymbolMid, r604_dr));
                        return void 0;
                    }));
                })();
            }
            r312_xn$selectvariant$7Hrq("separatedPawn", 11259, new r312_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
            r312_xn$GlyphSaveSink$2Lrc4b.save("doubledPawn", 11260, new r312_xn$Capture$2Lrc8.GlyphProc(function (r612_currentGlyph) {
                var _r612_t0, _r612_t1;
                r612_currentGlyph.include(r312_RingStrokeAt(r312_Middle, r312_SymbolMid + r578_unitedGap, r578_radius, r578_fine));
                r612_currentGlyph.include(r312_RingStrokeAt(r312_Middle, r312_SymbolMid - r578_unitedGap, r578_radius, r578_fine));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("passedPawn", 11261, new r312_xn$Capture$2Lrc8.GlyphProc(function (r617_currentGlyph) {
                var _r617_t0, _r617_t1;
                r617_currentGlyph.include(r578_TrigArrowShape(r312_Middle, r312_SymbolMid - r578_unitedGap + r578_radius - r578_fine / 2, r312_Middle, r312_SymbolMid + r578_unitedGap + r578_radius, r578_radius * 0.8, r578_fine / 2));
                r617_currentGlyph.include(r312_RingStrokeAt(r312_Middle, r312_SymbolMid - r578_unitedGap, r578_radius, r578_fine));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("mathSmallCircle", 8728, r312_RingStrokeAt(r312_Middle, r312_SymbolMid, r578_sRadius, r578_sFine));
            return r312_alias("ringpoint", 11824, "mathSmallCircle");
        })();
        r312_xn$GlyphSaveSink$2Lrc4b.save("wreathProduct", 8768, new r312_xn$Capture$2Lrc8.GlyphProc(function (r623_currentGlyph) {
            var _r623_t0, _r623_t1;
            r623_currentGlyph.include(r312_dispiro(r312_widths.center(r312_OperatorStroke), r312_g2(r1_mix(r312_SB, r312_RightSB, 0.45), r1_mix(r312_PlusBot, r312_PlusTop, 1)), r312_g2(r1_mix(r312_SB, r312_RightSB, 0.64), r1_mix(r312_PlusBot, r312_PlusTop, 0.75)), r312_g2(r1_mix(r312_SB, r312_RightSB, 0.5), r1_mix(r312_PlusBot, r312_PlusTop, 0.5)), r312_g2(r1_mix(r312_SB, r312_RightSB, 0.36), r1_mix(r312_PlusBot, r312_PlusTop, 0.25)), r312_g2(r1_mix(r312_SB, r312_RightSB, 0.55), r1_mix(r312_PlusBot, r312_PlusTop, 0))));
            return void 0;
        }));
        return (function () {
            var r627_FMosaicWide, r627_MosaicNameSuffix, r627_MosaicWidth, r627_MosaicWidthScalar, _r627_t3, _r627_t5, _r627_t6, _r627_tag7;
            var r627_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r627_t0 = r627_WidthKinds;
            var _r627_t1 = _r627_t0.length;
            var _r627_t2 = 0;
            var _r627_t4 = _r627_t2 < _r627_t1;
            while (_r627_t4) {
                _r627_t3 = _r627_t0[_r627_t2];
                r627_FMosaicWide = _r627_t3[0];
                r627_MosaicNameSuffix = _r627_t3[1];
                r627_MosaicWidth = _r627_t3[2];
                r627_MosaicWidthScalar = _r627_t3[3];
                (function () {
                    var r630_MosaicDesiredWidth = r312_WideWidth1;
                    var r630_MosaicMiddle = r627_MosaicWidth / 2;
                    var r630_MosaicUnitWidth = r627_MosaicWidth / r627_MosaicWidthScalar;
                    var r630_MangleUnicode = function (r631_unicode, r631__desiredOverride) {
                        var _r631_t0, _r631_t1;
                        return r627_MosaicWidth === (r631__desiredOverride || r630_MosaicDesiredWidth) ? r631_unicode : void 0;
                    };
                    var r630_MangleName = function (r632_name) {
                        var _r632_t0, _r632_t1;
                        return r632_name + r627_MosaicNameSuffix;
                    };
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r630_MangleName("innerPlusBig"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r635_currentGlyph) {
                        var _r635_t0, _r635_t1;
                        r635_currentGlyph.setWidth(r627_MosaicWidth);
                        r635_currentGlyph.include(r312_union(r312_HBar.m(r312_SB, r627_MosaicWidth - r312_SB, r312_SymbolMid, r312_GeometryStroke), r312_VBar.m(r630_MosaicMiddle, r1_mix(r312_SymbolMid, r312_PlusTop, r627_MosaicWidthScalar), r1_mix(r312_SymbolMid, r312_PlusBot, r627_MosaicWidthScalar), r312_GeometryStroke)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r630_MangleName("innerMultiplyBig/stroke1"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r640_currentGlyph) {
                        var _r640_t0, _r640_t1;
                        r640_currentGlyph.setWidth(r627_MosaicWidth);
                        var r640_radius = (r312_RightSB - r312_SB) / 2 * Math.sqrt(r627_MosaicWidthScalar);
                        r640_currentGlyph.include(r312_dispiro(r312_widths.center(r312_GeometryStroke), r312_flat(r630_MosaicMiddle - r640_radius, r312_SymbolMid - r640_radius), r312_curl(r630_MosaicMiddle + r640_radius, r312_SymbolMid + r640_radius)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r630_MangleName("innerMultiplyBig/stroke2"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r645_currentGlyph) {
                        var _r645_t0, _r645_t1;
                        r645_currentGlyph.setWidth(r627_MosaicWidth);
                        var r645_radius = (r312_RightSB - r312_SB) / 2 * Math.sqrt(r627_MosaicWidthScalar);
                        r645_currentGlyph.include(r312_dispiro(r312_widths.center(r312_GeometryStroke), r312_flat(r630_MosaicMiddle + r645_radius, r312_SymbolMid - r645_radius), r312_curl(r630_MosaicMiddle - r645_radius, r312_SymbolMid + r645_radius)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r630_MangleName("innerMultiplyBig"), null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r650_currentGlyph) {
                        var _r650_t0, _r650_t1;
                        r650_currentGlyph.setWidth(r627_MosaicWidth);
                        r650_currentGlyph.include(r312_xn$referglyph$1aao(r630_MangleName("innerMultiplyBig/stroke1")));
                        r650_currentGlyph.include(r312_xn$referglyph$1aao(r630_MangleName("innerMultiplyBig/stroke2")));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r630_MangleName("risingDiagonal"), r630_MangleUnicode(10187), new r312_xn$Capture$2Lrc8.GlyphProc(function (r656_currentGlyph) {
                        var _r656_t0, _r656_t1;
                        r656_currentGlyph.setWidth(r627_MosaicWidth);
                        r656_currentGlyph.include(r312_dispiro(r312_widths.center(r312_OperatorStroke), r312_flat(r312_SB, r1_mix(r312_SymbolMid, r312_PlusBot, r627_MosaicWidthScalar)), r312_curl(r627_MosaicWidth - r312_SB, r1_mix(r312_SymbolMid, r312_PlusTop, r627_MosaicWidthScalar))));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(r630_MangleName("fallingDiagonal"), r630_MangleUnicode(10189), new r312_xn$Capture$2Lrc8.GlyphProc(function (r661_currentGlyph) {
                        var _r661_t0, _r661_t1;
                        r661_currentGlyph.setWidth(r627_MosaicWidth);
                        r661_currentGlyph.include(r312_dispiro(r312_widths.center(r312_OperatorStroke), r312_flat(r312_SB, r1_mix(r312_SymbolMid, r312_PlusTop, r627_MosaicWidthScalar)), r312_curl(r627_MosaicWidth - r312_SB, r1_mix(r312_SymbolMid, r312_PlusBot, r627_MosaicWidthScalar))));
                        return void 0;
                    }));
                })();
                _r627_t5 = _r627_t2 = _r627_t2 + 1;
                _r627_t4 = _r627_t2 < _r627_t1;
            }
            return _r627_t5;
        })();
    });
    return void 0;
});


