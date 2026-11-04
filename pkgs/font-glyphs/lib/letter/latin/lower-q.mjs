"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-Q", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Body, r313_terminal, r313_sRT, r313_sRB, _r313_t12, _r313_t14, _r313_t15, _r313_t16, _r313_tag17;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_OX = _r313_t1.OX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_MidJutSide = _r313_t1.MidJutSide;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_OShapeOutline = _r313_t5.OShapeOutline;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_NeedSlab = _r313_t5.NeedSlab;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_RightwardTailedBar = _r313_t8.RightwardTailedBar;
        var r313_RightwardDiagTailedBar = _r313_t8.RightwardDiagTailedBar;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_OBarRight = _r313_t9.OBarRight;
        var r313_TopHook = _r313_t9.TopHook;
        var r313_RetroflexHook = _r313_t9.RetroflexHook;
        var r313_PalatalHook = _r313_t9.PalatalHook;
        var r313_xn$TERMINALNORMAL$9XZu = 0;
        var r313_xn$TERMINALTAILED$9XZu = 1;
        var r313_xn$TERMINALDIAG$9XZu = 2;
        var r313_EaredBody = function (r319_terminal, r319_df, r319_top, r319_bottom, r319__ada, r319__adb) {
            var _r319_t0, _r319_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var r321___, r321_path, r321_lastKnot, _r321_t1, _r321_t2;
                var r321_ada = r1_fallback(r319__ada, r319_df.smallArchDepthA);
                var r321_adb = r1_fallback(r319__adb, r319_df.smallArchDepthB);
                r321_currentGlyph.setBaseAnchor("overlay", r319_df.middle, r319_top / 2);
                r321_currentGlyph.setBaseAnchor("strike", r319_df.middle, r319_top / 2);
                r321_currentGlyph.include(r313_OBarRight.shape(r319_top, 0, r319_df.leftSB, r319_df.rightSB, new r313_xn$NamedParameterPair$2Lrc9b("ada", r321_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r321_adb), new r313_xn$NamedParameterPair$2Lrc9b("sw", r319_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r319_df.shoulderFine)));
                var _r321_t0 = r319_terminal;
                if (_r321_t0 === r313_xn$TERMINALTAILED$9XZu) {
                    r321_currentGlyph.include(r313_RightwardTailedBar(r319_df.rightSB, r319_bottom, r319_top, r319_df.mvs));
                    r321_currentGlyph.setBaseAnchor("trailing", r319_df.rightSB + r313_SideJut, r319_bottom);
                } else if (_r321_t0 === r313_xn$TERMINALDIAG$9XZu) {
                    r321_path = r321_currentGlyph.include(r313_RightwardDiagTailedBar(r319_df.rightSB, r319_bottom, r319_top, r319_df.mvs));
                    r321_lastKnot = r321_path.rhsKnots[r321_path.rhsKnots.length - 1];
                    r321_currentGlyph.setBaseAnchor("palatalHookAttach", r321_lastKnot.x, r321_lastKnot.y);
                    r321_currentGlyph.setBaseAnchor("trailing", r321_lastKnot.x, r321_lastKnot.y);
                } else {
                    r321___ = _r321_t0;
                    r321_currentGlyph.include(r313_VBar.r(r319_df.rightSB, r319_bottom, r319_top, r319_df.mvs));
                    r321_currentGlyph.setBaseAnchor("trailing", r319_df.rightSB, r313_Descender);
                }
                return void 0;
            });
        };
        var r313_TopCutBody = function (r336_terminal, r336_df, r336_top, r336_bottom, r336__ada, r336__adb) {
            var _r336_t0, _r336_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                var r338___, r338_path, r338_lastKnot, _r338_t1, _r338_t2;
                var r338_ada = r1_fallback(r336__ada, r336_df.smallArchDepthA);
                var r338_adb = r1_fallback(r336__adb, r336_df.smallArchDepthB);
                r338_currentGlyph.setBaseAnchor("overlay", r336_df.middle, r336_top / 2);
                r338_currentGlyph.setBaseAnchor("strike", r336_df.middle, r336_top / 2);
                r338_currentGlyph.include(r313_OBarRight.shape(r336_top, 0, r336_df.leftSB, r336_df.rightSB, new r313_xn$NamedParameterPair$2Lrc9b("ada", r338_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r338_adb), new r313_xn$NamedParameterPair$2Lrc9b("sw", r336_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r336_df.shoulderFine)));
                var _r338_t0 = r336_terminal;
                if (_r338_t0 === r313_xn$TERMINALTAILED$9XZu) {
                    r338_currentGlyph.include(r313_RightwardTailedBar(r336_df.rightSB, r336_bottom, r336_top - r313_HalfStroke, r336_df.mvs));
                    r338_currentGlyph.setBaseAnchor("trailing", r336_df.rightSB + r313_SideJut, r336_bottom);
                } else if (_r338_t0 === r313_xn$TERMINALDIAG$9XZu) {
                    r338_path = r338_currentGlyph.include(r313_RightwardDiagTailedBar(r336_df.rightSB, r336_bottom, r336_top - r313_HalfStroke, r336_df.mvs));
                    r338_lastKnot = r338_path.rhsKnots[r338_path.rhsKnots.length - 1];
                    r338_currentGlyph.setBaseAnchor("palatalHookAttach", r338_lastKnot.x, r338_lastKnot.y);
                    r338_currentGlyph.setBaseAnchor("trailing", r338_lastKnot.x, r338_lastKnot.y);
                } else {
                    r338___ = _r338_t0;
                    r338_currentGlyph.include(r313_VBar.r(r336_df.rightSB, r336_bottom, r336_top - r313_HalfStroke, r336_df.mvs));
                    r338_currentGlyph.setBaseAnchor("trailing", r336_df.rightSB, r313_Descender);
                }
                r338_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r336_df.rightSB, r336_top), r313_corner(r336_df.rightSB, r336_top - r313_HalfStroke), r313_corner(r336_df.rightSB - r313_HSwToV(r336_df.mvs), r336_top - r313_HalfStroke)));
                return void 0;
            });
        };
        var r313_FlatTopBody = function (r354_terminal, r354_df, r354_top, r354_bottom, r354__ada, r354__adb) {
            var _r354_t0, _r354_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                var r356___, r356_path, r356_lastKnot, _r356_t1, _r356_t2;
                var r356_ada = r1_fallback(r354__ada, r354_df.smallArchDepthA);
                var r356_adb = r1_fallback(r354__adb, r354_df.smallArchDepthB);
                r356_currentGlyph.setBaseAnchor("overlay", r354_df.middle, r354_top / 2);
                r356_currentGlyph.setBaseAnchor("strike", r354_df.middle, r354_top / 2);
                r356_currentGlyph.include(r313_OBarRight.earlessCorner(r354_top, 0, r354_df.leftSB, r354_df.rightSB, new r313_xn$NamedParameterPair$2Lrc9b("ada", r356_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r356_adb), new r313_xn$NamedParameterPair$2Lrc9b("sw", r354_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r354_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("rise", 0)));
                var _r356_t0 = r354_terminal;
                if (_r356_t0 === r313_xn$TERMINALTAILED$9XZu) {
                    r356_currentGlyph.include(r313_RightwardTailedBar(r354_df.rightSB, r354_bottom, r354_top, r354_df.mvs));
                    r356_currentGlyph.setBaseAnchor("trailing", r354_df.rightSB + r313_SideJut, r354_bottom);
                } else if (_r356_t0 === r313_xn$TERMINALDIAG$9XZu) {
                    r356_path = r356_currentGlyph.include(r313_RightwardDiagTailedBar(r354_df.rightSB, r354_bottom, r354_top, r354_df.mvs));
                    r356_lastKnot = r356_path.rhsKnots[r356_path.rhsKnots.length - 1];
                    r356_currentGlyph.setBaseAnchor("palatalHookAttach", r356_lastKnot.x, r356_lastKnot.y);
                    r356_currentGlyph.setBaseAnchor("trailing", r356_lastKnot.x, r356_lastKnot.y);
                } else {
                    r356___ = _r356_t0;
                    r356_currentGlyph.include(r313_VBar.r(r354_df.rightSB, r354_bottom, r354_top, r354_df.mvs));
                    r356_currentGlyph.setBaseAnchor("trailing", r354_df.rightSB, r313_Descender);
                }
                return void 0;
            });
        };
        var r313_EarlessCornerBody = function (r372_terminal, r372_df, r372_top, r372_bottom, r372__ada, r372__adb) {
            var _r372_t0, _r372_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
                var r374___, r374_path, r374_lastKnot, _r374_t1, _r374_t2;
                var r374_ada = r1_fallback(r372__ada, r372_df.smallArchDepthA);
                var r374_adb = r1_fallback(r372__adb, r372_df.smallArchDepthB);
                r374_currentGlyph.setBaseAnchor("overlay", r372_df.middle, r372_top / 2);
                r374_currentGlyph.setBaseAnchor("strike", r372_df.middle, r372_top / 2);
                r374_currentGlyph.include(r313_OBarRight.earlessCorner(r372_top, 0, r372_df.leftSB, r372_df.rightSB, new r313_xn$NamedParameterPair$2Lrc9b("ada", r374_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r374_adb), new r313_xn$NamedParameterPair$2Lrc9b("sw", r372_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r372_df.shoulderFine)));
                var _r374_t0 = r372_terminal;
                if (_r374_t0 === r313_xn$TERMINALTAILED$9XZu) {
                    r374_currentGlyph.include(r313_RightwardTailedBar(r372_df.rightSB, r372_bottom, r372_top - r313_DToothlessRise, r372_df.mvs));
                    r374_currentGlyph.setBaseAnchor("trailing", r372_df.rightSB + r313_SideJut, r372_bottom);
                } else if (_r374_t0 === r313_xn$TERMINALDIAG$9XZu) {
                    r374_path = r374_currentGlyph.include(r313_RightwardDiagTailedBar(r372_df.rightSB, r372_bottom, r372_top - r313_DToothlessRise, r372_df.mvs));
                    r374_lastKnot = r374_path.rhsKnots[r374_path.rhsKnots.length - 1];
                    r374_currentGlyph.setBaseAnchor("palatalHookAttach", r374_lastKnot.x, r374_lastKnot.y);
                    r374_currentGlyph.setBaseAnchor("trailing", r374_lastKnot.x, r374_lastKnot.y);
                } else {
                    r374___ = _r374_t0;
                    r374_currentGlyph.include(r313_VBar.r(r372_df.rightSB, r372_bottom, r372_top - r313_DToothlessRise, r372_df.mvs));
                    r374_currentGlyph.setBaseAnchor("trailing", r372_df.rightSB, r313_Descender);
                }
                return void 0;
            });
        };
        var r313_EarlessRoundedBody = function (r389_terminal, r389_df, r389_top, r389_bottom, r389__ada, r389__adb) {
            var _r389_t0, _r389_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
                var r391___, r391_path, r391_lastKnot, _r391_t1, _r391_t2;
                var r391_ada = r1_fallback(r389__ada, r389_df.smallArchDepthA);
                var r391_adb = r1_fallback(r389__adb, r389_df.smallArchDepthB);
                r391_currentGlyph.setBaseAnchor("overlay", r389_df.middle, r389_top / 2);
                r391_currentGlyph.setBaseAnchor("strike", r389_df.middle, r389_top / 2);
                r391_currentGlyph.include(r313_OBarRight.earlessRounded(r389_top, 0, r389_df.leftSB, r389_df.rightSB, new r313_xn$NamedParameterPair$2Lrc9b("ada", r391_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r391_adb), new r313_xn$NamedParameterPair$2Lrc9b("sw", r389_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r389_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("yTerminal", r391_ada)));
                var _r391_t0 = r389_terminal;
                if (_r391_t0 === r313_xn$TERMINALTAILED$9XZu) {
                    r391_currentGlyph.include(r313_RightwardTailedBar(r389_df.rightSB, r389_bottom, r389_top - r391_adb, r389_df.mvs));
                    r391_currentGlyph.setBaseAnchor("trailing", r389_df.rightSB + r313_SideJut, r389_bottom);
                } else if (_r391_t0 === r313_xn$TERMINALDIAG$9XZu) {
                    r391_path = r391_currentGlyph.include(r313_RightwardDiagTailedBar(r389_df.rightSB, r389_bottom, r389_top - r391_adb, r389_df.mvs));
                    r391_lastKnot = r391_path.rhsKnots[r391_path.rhsKnots.length - 1];
                    r391_currentGlyph.setBaseAnchor("palatalHookAttach", r391_lastKnot.x, r391_lastKnot.y);
                    r391_currentGlyph.setBaseAnchor("trailing", r391_lastKnot.x, r391_lastKnot.y);
                } else {
                    r391___ = _r391_t0;
                    r391_currentGlyph.include(r313_VBar.r(r389_df.rightSB, r389_bottom, r389_top - r391_adb, r389_df.mvs));
                    r391_currentGlyph.setBaseAnchor("trailing", r389_df.rightSB, r313_Descender);
                }
                return void 0;
            });
        };
        var r313_RtSerif = function (r407_df, r407_y) {
            var _r407_t0, _r407_t1;
            return r313_tagged("serifRT", r313_HSerif.rt(r407_df.rightSB, r407_y, r313_SideJut, r407_df.mvs));
        };
        var r313_RbSerif = function (r408_df, r408_y) {
            var _r408_t0, _r408_t1;
            return r313_tagged("serifRB", r313_union(r313_HSerif.lb(r408_df.rightSB - r313_HSwToV(0.5 * r408_df.mvs), r408_y, r313_MidJutSide - r313_HSwToV(0.5 * (r313_Stroke - r408_df.mvs)), r408_df.mvs), r313_HSerif.rb(r408_df.rightSB - r313_HSwToV(0.5 * r408_df.mvs), r408_y, r313_Jut - r313_HSwToV(0.5 * (r313_Stroke - r408_df.mvs)), r408_df.mvs)));
        };
        var r313_RbSerifOuter = function (r409_df, r409_y) {
            var _r409_t0, _r409_t1;
            return r313_tagged("serifRB", r313_HSerif.rb(r409_df.rightSB, r409_y, r313_SideJut, r409_df.mvs));
        };
        var r313_RtSerifAuto = function (r410_df, r410_y) {
            var _r410_t0, _r410_t1;
            return r313_NeedSlab(r313_SLAB, r313_RtSerif(r410_df, r410_y));
        };
        var r313_RbSerifAuto = function (r411_df, r411_y) {
            var _r411_t0, _r411_t1;
            return r313_NeedSlab(r313_SLAB, r313_RbSerif(r411_df, r411_y));
        };
        var r313_QConfig = r1_SuffixCfg.weave({
            "": r313_EaredBody,
            "topCut": r313_TopCutBody,
            "flatTop": r313_FlatTopBody,
            "earlessCorner": r313_EarlessCornerBody,
            "earlessRounded": r313_EarlessRoundedBody
        }, {
            "": r313_xn$TERMINALNORMAL$9XZu,
            "tailed": r313_xn$TERMINALTAILED$9XZu,
            "diagonalTailed": r313_xn$TERMINALDIAG$9XZu
        }, {
            "serifless": [null, null],
            "motionSerifed": [r313_RtSerif, null],
            "bottomSerifed": [null, r313_RbSerif],
            "motionBottomSerifed": [null, r313_RbSerifOuter],
            "serifed": [r313_RtSerif, r313_RbSerif]
        });
        var _r313_t10 = Object.entries(r313_QConfig)[Symbol.iterator]();
        var _r313_t11 = void 0;
        while (!(_r313_t11 = _r313_t10.next()).done) {
            _r313_t12 = _r313_t11.value;
            r313_suffix = _r313_t12[0];
            r313_Body = _r313_t12[1][0];
            r313_terminal = _r313_t12[1][1];
            r313_sRT = _r313_t12[1][2][0];
            r313_sRB = _r313_t12[1][2][1];
            _r313_t12[1][2];
            _r313_t12[1];
            (function () {
                var r414___, _r414_t0;
                r313_xn$GlyphSaveSink$2Lrc4b.save("q." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r417_currentGlyph) {
                    var _r417_t0, _r417_t1;
                    r417_currentGlyph.include(r313_MarkSet.p());
                    r417_currentGlyph.include(r313_Body(r313_terminal, r313_DivFrame(1), r313_XH, r313_Descender));
                    if (r313_sRT) r417_currentGlyph.include(r313_sRT(r313_DivFrame(1), r313_XH));
                    if (r313_sRB) r417_currentGlyph.include(r313_sRB(r313_DivFrame(1), r313_Descender));
                    r417_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r313_RightSB));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("qPalatalHook." + r313_suffix, null, (_r414_t0 = r313_terminal, _r414_t0 === r313_xn$TERMINALDIAG$9XZu ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r438_currentGlyph) {
                    var _r438_t0, _r438_t1;
                    r438_currentGlyph.include(r313_xn$referglyph$1aao("q." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r438_attach = r438_currentGlyph.gizmo.unapply(r438_currentGlyph.baseAnchors.palatalHookAttach || r438_currentGlyph.baseAnchors.bottomRight);
                    r438_currentGlyph.include(r313_PalatalHook.r(r438_attach.x, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r438_attach.y)));
                    return void 0;
                }) : (r414___ = _r414_t0, new r313_xn$Capture$2Lrc8.GlyphProc(function (r425_currentGlyph) {
                    var _r425_t0, _r425_t1;
                    var r425_df = r425_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 1));
                    r425_currentGlyph.include(r425_df.markSet.p());
                    var r425_subDf = r313_DivFrame(0.75 * r313_para.advanceScaleM, 2);
                    r425_currentGlyph.include(r313_Body(r313_terminal, r425_subDf, r313_XH, r313_Descender));
                    if (r313_sRT) r425_currentGlyph.include(r313_sRT(r425_subDf, r313_XH));
                    if (r313_sRB) r425_currentGlyph.include(r313_sRB(r425_subDf, r313_Descender));
                    var r425_tinyGap = Math.max(r313_Width / 32, r313_AdviceStroke(24));
                    var r425_sideJut = r313_sRB || r313_terminal !== r313_xn$TERMINALNORMAL$9XZu ? r313_SideJut : 0;
                    r425_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r425_df.rightSB + r425_sideJut + r425_tinyGap), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("xLink", r425_subDf.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("refSw", r425_subDf.mvs), new r313_xn$NamedParameterPair$2Lrc9b("maskOut", r313_intersection(r313_MaskBelow(0), r313_MaskLeft(r425_subDf.rightSB + r425_sideJut + r425_tinyGap)))));
                    return void 0;
                }))));
                return r313_terminal === r313_xn$TERMINALNORMAL$9XZu && !r313_sRB ? (r313_xn$GlyphSaveSink$2Lrc4b.save("qCapRTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r444_currentGlyph) {
                    var _r444_t0, _r444_t1;
                    r444_currentGlyph.include(r313_MarkSet.capDesc());
                    r444_currentGlyph.include(r313_Body(r313_terminal, r313_DivFrame(1), r313_CAP, 0, r313_ArchDepthA, r313_ArchDepthB));
                    if (r313_sRT) r444_currentGlyph.include(r313_sRT(r313_DivFrame(1), r313_CAP));
                    r444_currentGlyph.include(r313_RetroflexHook.rExt(r313_RightSB, 0));
                    r444_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r313_RightSB));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("qRTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r452_currentGlyph) {
                    var _r452_t0, _r452_t1;
                    r452_currentGlyph.include(r313_MarkSet.p());
                    r452_currentGlyph.include(r313_Body(r313_terminal, r313_DivFrame(1), r313_XH, 0));
                    if (r313_sRT) r452_currentGlyph.include(r313_sRT(r313_DivFrame(1), r313_XH));
                    r452_currentGlyph.include(r313_RetroflexHook.rExt(r313_RightSB, 0));
                    r452_currentGlyph.include(r313_LeaningAnchor.Below.VBar.r(r313_RightSB));
                    return void 0;
                }))) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("q", "q");
        r313_xn$linkreducedvariant$5sIl8("q/sansSerif", "q", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("QRTail", 586, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "qCapRTail"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "qRTail"));
        r313_xn$selectvariant$7Hrq("qRTail", 587);
        r313_xn$selectvariant$7Hrq("qPalatalHook", 122676, new r313_xn$NamedParameterPair$2Lrc9b("follow", "q"));
        r313_alias("cyrl/qa", 1307, "q");
        r313_xn$selectvariant$7Hrq("q/hookTopBase", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "q"));
        r313_xn$deriveglyphs$7Hrq("qHookTop", 672, "q/hookTopBase", function (r462_src, r462_gr) {
            var _r462_t0, _r462_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r464_currentGlyph) {
                var _r464_t0, _r464_t1;
                r464_currentGlyph.include(r313_xn$referglyph$1aao(r462_src), r313_AS_BASE, r313_ALSO_METRICS);
                r464_currentGlyph.include(r313_VBar.r(r313_RightSB, 0, r313_XH));
                r464_currentGlyph.include(r313_TopHook.toRight.rBarOuter(r313_RightSB, 0, r313_XH));
                r464_currentGlyph.include(r313_LeaningAnchor.Above.VBar.r(r313_RightSB));
                return void 0;
            });
        });
        var _r313_t13 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t13.BBS;
        var r313_BBD = _r313_t13.BBD;
        var r313_BBBarRight = _r313_t13.BBBarRight;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/q", 120162, new r313_xn$Capture$2Lrc8.GlyphProc(function (r472_currentGlyph) {
            var _r472_t0, _r472_t1;
            r472_currentGlyph.include(r313_MarkSet.p());
            r472_currentGlyph.include(r313_BBBarRight(r313_RightSB, r313_Descender, r313_XH));
            r472_currentGlyph.include(r313_intersection(r313_OShapeOutline.NoOvershoot(r313_XH, 0, r313_SB, r313_RightSB - r313_BBD - r313_HSwToV(r313_BBS)), r313_VBar.l(r313_SB + r313_OX + r313_BBD, 0, r313_XH, r313_BBS)));
            r472_currentGlyph.include(r313_OBarRight.shape(new r313_xn$NamedParameterPair$2Lrc9b("left", r313_SB), new r313_xn$NamedParameterPair$2Lrc9b("right", r313_RightSB - r313_BBD), new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_BBS)));
            return void 0;
        }));
    });
    return void 0;
});


