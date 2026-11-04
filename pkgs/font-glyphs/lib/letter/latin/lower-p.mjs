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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-P", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Body, r313_Serifs, r313_doTS, r313_doBS, _r313_t12, _r313_t14, _r313_t15, _r313_t16, _r313_tag17;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_MidJutSide = _r313_t1.MidJutSide;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_ShoulderFine = _r313_t1.ShoulderFine;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_archv = _r313_t2.archv;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_tagged = _r313_t5.tagged;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_OShapeOutline = _r313_t5.OShapeOutline;
        var r313_VBar = _r313_t5.VBar;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_ExtendAboveBaseAnchors = _r313_t7.ExtendAboveBaseAnchors;
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_OBarLeft = _r313_t8.OBarLeft;
        var r313_LetterBarOverlay = _r313_t8.LetterBarOverlay;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_TopHook = _r313_t9.TopHook;
        var r313_PalatalHook = _r313_t9.PalatalHook;
        var r313_SerifFrame = _r313_t9.SerifFrame;
        var r313_SmallThornEaredBody = function () {
            var _r319_t0, _r319_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var _r321_t0, _r321_t1;
                r321_currentGlyph.include(r313_tagged("bowl", r313_OBarLeft.shape()));
                r321_currentGlyph.include(r313_tagged("stemLeft", r313_VBar.l(r313_SB, r313_Descender, r313_Ascender)));
                return void 0;
            });
        };
        var r313_EaredBody = function () {
            var _r324_t5;
            var _r324_t6 = arguments;
            var r324_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r324_t6, 0);
            var _r324_t0 = [];
            var _r324_t1 = 0;
            while (_r324_t1 < r324_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r324_xn$flexarguments$2Lrc7uIe5[_r324_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r324_t0.push(r324_xn$flexarguments$2Lrc7uIe5[_r324_t1]);
                _r324_t1 = _r324_t1 + 1;
            }
            var _r324_t2 = r324_xn$flexarguments$2Lrc7uIe5;
            var _r324_t3 = _r324_t2.length;
            var _r324_t4 = 0;
            while (_r324_t4 < _r324_t3) {
                _r324_t1 = _r324_t2[_r324_t4];
                if (_r324_t1 && _r324_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r324_t1.left === "left") r324_left = _r324_t1.right;
                if (_r324_t1 && _r324_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r324_t1.left === "right") r324_right = _r324_t1.right;
                if (_r324_t1 && _r324_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r324_t1.left === "sw") r324_sw = _r324_t1.right;
                if (_r324_t1 && _r324_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r324_t1.left === "ada") r324_ada = _r324_t1.right;
                if (_r324_t1 && _r324_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r324_t1.left === "adb") r324_adb = _r324_t1.right;
                _r324_t4 = _r324_t4 + 1;
            }
            var r324_left = r1_fallback(r324_left, _r324_t0[0], r313_SB);
            var r324_right = r1_fallback(r324_right, _r324_t0[1], r313_RightSB);
            var r324_sw = r1_fallback(r324_sw, _r324_t0[2], r313_Stroke);
            var r324_ada = r1_fallback(r324_ada, _r324_t0[3], r313_SmallArchDepthA);
            var r324_adb = r1_fallback(r324_adb, _r324_t0[4], r313_SmallArchDepthB);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                var _r330_t0, _r330_t1;
                r330_currentGlyph.include(r313_tagged("bowl", r313_OBarLeft.shape(new r313_xn$NamedParameterPair$2Lrc9b("left", r324_left), new r313_xn$NamedParameterPair$2Lrc9b("right", r324_right), new r313_xn$NamedParameterPair$2Lrc9b("sw", r324_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r324_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r324_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r324_adb))));
                r330_currentGlyph.include(r313_tagged("stemLeft", r313_VBar.l(r324_left, r313_Descender, r313_XH, r324_sw)));
                return void 0;
            });
        };
        var r313_FlatTopBody = function () {
            var _r339_t5;
            var _r339_t6 = arguments;
            var r339_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r339_t6, 0);
            var _r339_t0 = [];
            var _r339_t1 = 0;
            while (_r339_t1 < r339_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r339_xn$flexarguments$2Lrc7uIe5[_r339_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r339_t0.push(r339_xn$flexarguments$2Lrc7uIe5[_r339_t1]);
                _r339_t1 = _r339_t1 + 1;
            }
            var _r339_t2 = r339_xn$flexarguments$2Lrc7uIe5;
            var _r339_t3 = _r339_t2.length;
            var _r339_t4 = 0;
            while (_r339_t4 < _r339_t3) {
                _r339_t1 = _r339_t2[_r339_t4];
                if (_r339_t1 && _r339_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r339_t1.left === "left") r339_left = _r339_t1.right;
                if (_r339_t1 && _r339_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r339_t1.left === "right") r339_right = _r339_t1.right;
                if (_r339_t1 && _r339_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r339_t1.left === "sw") r339_sw = _r339_t1.right;
                if (_r339_t1 && _r339_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r339_t1.left === "ada") r339_ada = _r339_t1.right;
                if (_r339_t1 && _r339_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r339_t1.left === "adb") r339_adb = _r339_t1.right;
                _r339_t4 = _r339_t4 + 1;
            }
            var r339_left = r1_fallback(r339_left, _r339_t0[0], r313_SB);
            var r339_right = r1_fallback(r339_right, _r339_t0[1], r313_RightSB);
            var r339_sw = r1_fallback(r339_sw, _r339_t0[2], r313_Stroke);
            var r339_ada = r1_fallback(r339_ada, _r339_t0[3], r313_SmallArchDepthA);
            var r339_adb = r1_fallback(r339_adb, _r339_t0[4], r313_SmallArchDepthB);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                var _r345_t0, _r345_t1;
                r345_currentGlyph.include(r313_tagged("bowl", r313_OBarLeft.earlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("left", r339_left), new r313_xn$NamedParameterPair$2Lrc9b("right", r339_right), new r313_xn$NamedParameterPair$2Lrc9b("sw", r339_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r339_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r339_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r339_adb), new r313_xn$NamedParameterPair$2Lrc9b("rise", 0))));
                r345_currentGlyph.include(r313_tagged("stemLeft", r313_VBar.l(r339_left, r313_Descender, r313_XH, r339_sw)));
                return void 0;
            });
        };
        var r313_EarlessCornerBody = function () {
            var _r355_t5;
            var _r355_t6 = arguments;
            var r355_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r355_t6, 0);
            var _r355_t0 = [];
            var _r355_t1 = 0;
            while (_r355_t1 < r355_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r355_xn$flexarguments$2Lrc7uIe5[_r355_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r355_t0.push(r355_xn$flexarguments$2Lrc7uIe5[_r355_t1]);
                _r355_t1 = _r355_t1 + 1;
            }
            var _r355_t2 = r355_xn$flexarguments$2Lrc7uIe5;
            var _r355_t3 = _r355_t2.length;
            var _r355_t4 = 0;
            while (_r355_t4 < _r355_t3) {
                _r355_t1 = _r355_t2[_r355_t4];
                if (_r355_t1 && _r355_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "left") r355_left = _r355_t1.right;
                if (_r355_t1 && _r355_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "right") r355_right = _r355_t1.right;
                if (_r355_t1 && _r355_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "sw") r355_sw = _r355_t1.right;
                if (_r355_t1 && _r355_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "ada") r355_ada = _r355_t1.right;
                if (_r355_t1 && _r355_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "adb") r355_adb = _r355_t1.right;
                _r355_t4 = _r355_t4 + 1;
            }
            var r355_left = r1_fallback(r355_left, _r355_t0[0], r313_SB);
            var r355_right = r1_fallback(r355_right, _r355_t0[1], r313_RightSB);
            var r355_sw = r1_fallback(r355_sw, _r355_t0[2], r313_Stroke);
            var r355_ada = r1_fallback(r355_ada, _r355_t0[3], r313_SmallArchDepthA);
            var r355_adb = r1_fallback(r355_adb, _r355_t0[4], r313_SmallArchDepthB);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                var _r361_t0, _r361_t1;
                r361_currentGlyph.include(r313_tagged("bowl", r313_OBarLeft.earlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("left", r355_left), new r313_xn$NamedParameterPair$2Lrc9b("right", r355_right), new r313_xn$NamedParameterPair$2Lrc9b("sw", r355_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r355_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r355_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r355_adb))));
                r361_currentGlyph.include(r313_tagged("stemLeft", r313_VBar.l(r355_left, r313_Descender, r313_XH - r313_DToothlessRise, r355_sw)));
                return void 0;
            });
        };
        var r313_EarlessRoundedBody = function () {
            var _r370_t5;
            var _r370_t6 = arguments;
            var r370_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r370_t6, 0);
            var _r370_t0 = [];
            var _r370_t1 = 0;
            while (_r370_t1 < r370_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r370_xn$flexarguments$2Lrc7uIe5[_r370_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r370_t0.push(r370_xn$flexarguments$2Lrc7uIe5[_r370_t1]);
                _r370_t1 = _r370_t1 + 1;
            }
            var _r370_t2 = r370_xn$flexarguments$2Lrc7uIe5;
            var _r370_t3 = _r370_t2.length;
            var _r370_t4 = 0;
            while (_r370_t4 < _r370_t3) {
                _r370_t1 = _r370_t2[_r370_t4];
                if (_r370_t1 && _r370_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r370_t1.left === "left") r370_left = _r370_t1.right;
                if (_r370_t1 && _r370_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r370_t1.left === "right") r370_right = _r370_t1.right;
                if (_r370_t1 && _r370_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r370_t1.left === "sw") r370_sw = _r370_t1.right;
                if (_r370_t1 && _r370_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r370_t1.left === "ada") r370_ada = _r370_t1.right;
                if (_r370_t1 && _r370_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r370_t1.left === "adb") r370_adb = _r370_t1.right;
                _r370_t4 = _r370_t4 + 1;
            }
            var r370_left = r1_fallback(r370_left, _r370_t0[0], r313_SB);
            var r370_right = r1_fallback(r370_right, _r370_t0[1], r313_RightSB);
            var r370_sw = r1_fallback(r370_sw, _r370_t0[2], r313_Stroke);
            var r370_ada = r1_fallback(r370_ada, _r370_t0[3], r313_SmallArchDepthA);
            var r370_adb = r1_fallback(r370_adb, _r370_t0[4], r313_SmallArchDepthB);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                var _r376_t0, _r376_t1;
                r376_currentGlyph.include(r313_tagged("bowl", r313_OBarLeft.earlessRounded(new r313_xn$NamedParameterPair$2Lrc9b("yTerminal", r313_Descender), new r313_xn$NamedParameterPair$2Lrc9b("left", r370_left), new r313_xn$NamedParameterPair$2Lrc9b("right", r370_right), new r313_xn$NamedParameterPair$2Lrc9b("sw", r370_sw), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine * (r370_sw / r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("ada", r370_ada), new r313_xn$NamedParameterPair$2Lrc9b("adb", r370_adb))));
                return void 0;
            });
        };
        var r313_SmallPSerifLT = function (r385_df, r385_top, r385__sw) {
            var _r385_t0, _r385_t1;
            return r313_SerifFrame.fromDf(r385_df, r385_top, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r385__sw)).lt.outer;
        };
        var r313_SmallPSerifLB = function (r387_df, r387_top, r387__sw) {
            var _r387_t0, _r387_t1;
            return r313_SerifFrame.fromDf(r387_df, r387_top, r313_Descender, new r313_xn$NamedParameterPair$2Lrc9b("swRef", r387__sw)).lb.fullSide;
        };
        var r313_FullSerifs = function (r389_df, r389_top, r389__sw) {
            var _r389_t0, _r389_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
                var _r391_t0, _r391_t1;
                r391_currentGlyph.include(r313_SmallPSerifLT(r389_df, r389_top, r389__sw), true, true);
                r391_currentGlyph.include(r313_SmallPSerifLB(r389_df, r389_top, r389__sw));
                return void 0;
            });
        };
        var r313_MotionSerif = function (r394_df, r394_top, r394__sw) {
            var _r394_t0, _r394_t1;
            return r313_SmallPSerifLT(r394_df, r394_top, r394__sw);
        };
        var r313_BottomSerif = function (r395_df, r395_top, r395__sw) {
            var _r395_t0, _r395_t1;
            return r313_SmallPSerifLB(r395_df, r395_top, r395__sw);
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r397_t0, _r397_t1;
            return {
                "PConfig": r313_PConfig
            };
        });
        var r313_PConfig = r1_SuffixCfg.weave({
            "eared": r313_EaredBody,
            "flatTop": r313_FlatTopBody,
            "earlessCorner": r313_EarlessCornerBody,
            "earlessRounded": r313_EarlessRoundedBody
        }, {
            "serifless": [r313_xn$noshape$3cah, false, false],
            "motionSerifed": [r313_MotionSerif, true, false],
            "bottomSerifed": [r313_BottomSerif, false, true],
            "serifed": [r313_FullSerifs, true, true]
        });
        var _r313_t10 = Object.entries(r313_PConfig)[Symbol.iterator]();
        var _r313_t11 = void 0;
        while (!(_r313_t11 = _r313_t10.next()).done) {
            _r313_t12 = _r313_t11.value;
            r313_suffix = _r313_t12[0];
            r313_Body = _r313_t12[1][0];
            r313_Serifs = _r313_t12[1][1][0];
            r313_doTS = _r313_t12[1][1][1];
            r313_doBS = _r313_t12[1][1][2];
            _r313_t12[1][1];
            _r313_t12[1];
            (function () {
                var r400_yOverlay = r1_mix(0, r313_Descender + (r313_doBS ? r313_Stroke : 0), 0.5);
                r313_xn$GlyphSaveSink$2Lrc4b.save("p." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r403_currentGlyph) {
                    var _r403_t0, _r403_t1;
                    r403_currentGlyph.include(r313_MarkSet.p());
                    r403_currentGlyph.include(r313_Body());
                    r403_currentGlyph.include(r313_Serifs(r313_DivFrame(1), r313_XH));
                    r403_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r313_SB));
                    r403_currentGlyph.setBaseAnchor("overlayOnExtension", r313_SB + r313_HSwToV(r313_HalfStroke), r400_yOverlay);
                    r403_currentGlyph.setBaseAnchor("strike", r313_Middle, r313_XH / 2);
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("pStrokeBottom." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r412_currentGlyph) {
                    var _r412_t0, _r412_t1;
                    r412_currentGlyph.include(r313_xn$referglyph$1aao("p." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r412_currentGlyph.include(r313_LetterBarOverlay.l.in(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_SB), new r313_xn$NamedParameterPair$2Lrc9b("bot", r313_Descender + (r313_doBS ? r313_Stroke : 0)), new r313_xn$NamedParameterPair$2Lrc9b("top", 0)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("thorn." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r420_currentGlyph) {
                    var _r420_t0, _r420_t1;
                    r420_currentGlyph.include(r313_MarkSet.bp());
                    r420_currentGlyph.include(r313_SmallThornEaredBody());
                    r420_currentGlyph.include(r313_Serifs(r313_DivFrame(1), r313_Ascender));
                    r420_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r313_SB));
                    r420_currentGlyph.include(r313_LeaningAnchor.Below.VBar.l(r313_SB));
                    r420_currentGlyph.setBaseAnchor("overlayOnExtension", r313_SB + r313_HSwToV(r313_HalfStroke), r400_yOverlay);
                    r420_currentGlyph.setBaseAnchor("strike", r313_Middle, r313_XH / 2);
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("thornStroke." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
                    var _r430_t0, _r430_t1;
                    r430_currentGlyph.include(r313_xn$referglyph$1aao("thorn." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r430_currentGlyph.include(r313_LetterBarOverlay.l.in(r313_SB, r313_XH, r313_Ascender - (r313_doTS ? r313_Stroke : 0)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("thornStrokeBottom." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r435_currentGlyph) {
                    var _r435_t0, _r435_t1;
                    r435_currentGlyph.include(r313_xn$referglyph$1aao("thorn." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r435_currentGlyph.include(r313_LetterBarOverlay.l.in(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_SB), new r313_xn$NamedParameterPair$2Lrc9b("bot", r313_Descender + (r313_doBS ? r313_Stroke : 0)), new r313_xn$NamedParameterPair$2Lrc9b("top", 0)));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("pPalatalHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r443_currentGlyph) {
                    var _r443_t0, _r443_t1;
                    r443_currentGlyph.include(r313_xn$referglyph$1aao("p." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    var r443_tinyGap = Math.max(r313_Width / 32, r313_AdviceStroke(24));
                    var r443_xMask = Math.max(r313_SB + r313_HSwToV(r313_Stroke) + 2 * r443_tinyGap, r313_SB + r313_HSwToV(r313_HalfStroke) + r313_MidJutSide + r443_tinyGap);
                    r443_currentGlyph.include(r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r1_mix(r313_Arch["adjust-x"].bot(r313_Middle), r313_RightSB, 0.75)), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r1_mix(r313_O, r313_SmallArchDepthA, r313_archv.yFromX(0.75))), new r313_xn$NamedParameterPair$2Lrc9b("maskOut", r313_intersection(r313_MaskBelow(0), r313_MaskLeft(r443_xMask)))));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("p", "p");
        r313_xn$linkreducedvariant$5sIl8("p/sansSerif", "p", r1_MathSansSerif);
        r313_xn$linkreducedvariant$5sIl8("p/hookTopBase", "p");
        r313_xn$selectvariant$7Hrq("cyrl/er", 1088, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "p"));
        r313_xn$selectvariant$7Hrq("pPalatalHook", 7560, new r313_xn$NamedParameterPair$2Lrc9b("follow", "p"));
        r313_alias("grek/rho", 961, "p.earlessRoundedSerifless");
        r313_xn$selectvariant$7Hrq("pStrokeBottom", 42833, new r313_xn$NamedParameterPair$2Lrc9b("follow", "p"));
        r313_alias("grek/rhoStroke", 1020, "pStrokeBottom.earlessRoundedSerifless");
        r313_xn$selectvariant$7Hrq("thorn", 254);
        r313_alias("grek/sho", 1016, "thorn.earedSerifless");
        r313_xn$selectvariant$7Hrq("thornStroke", 42853, new r313_xn$NamedParameterPair$2Lrc9b("follow", "thorn"));
        r313_xn$selectvariant$7Hrq("thornStrokeBottom", 42855, new r313_xn$NamedParameterPair$2Lrc9b("follow", "thorn"));
        r313_xn$deriveglyphs$7Hrq("cyrl/erTick", 1167, "cyrl/er", function (r455_src, r455_gr) {
            var _r455_t0, _r455_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r457_currentGlyph) {
                var _r457_t0, _r457_t1;
                r457_currentGlyph.include(r313_xn$referglyph$1aao(r455_src), r313_AS_BASE, r313_ALSO_METRICS);
                r457_currentGlyph.include(r313_dispiro(r313_widths.center(r313_AdviceStroke(4)), r313_flat(r1_mix(r313_SB, r313_RightSB, 0.5), r313_HalfStroke + r313_XH * 0.25), r313_curl(r1_mix(r313_SB, r313_RightSB, 0.875), r313_HalfStroke - r313_XH * 0.25)));
                return void 0;
            });
        });
        r313_xn$deriveglyphs$7Hrq("pHookTop", 421, "p/hookTopBase", function (r460_src, r460_gr) {
            var _r460_t0, _r460_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r462_currentGlyph) {
                var _r462_t0, _r462_t1;
                r462_currentGlyph.include(r313_xn$referglyph$1aao(r460_src), r313_AS_BASE, r313_ALSO_METRICS);
                r462_currentGlyph.ejectTagged("serifLT");
                r462_currentGlyph.ejectTagged("stemLeft");
                r462_currentGlyph.include(r313_TopHook.toRight.lBarOuter(r313_SB, r313_Descender, r313_XH));
                r462_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r313_SB));
                return void 0;
            });
        });
        var _r313_t13 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t13.BBS;
        var r313_BBD = _r313_t13.BBD;
        var r313_BBBarLeft = _r313_t13.BBBarLeft;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/p", 120161, new r313_xn$Capture$2Lrc8.GlyphProc(function (r471_currentGlyph) {
            var _r471_t0, _r471_t1;
            r471_currentGlyph.include(r313_MarkSet.p());
            r471_currentGlyph.include(r313_BBBarLeft(r313_SB, r313_Descender, r313_XH));
            r471_currentGlyph.include(r313_intersection(r313_OShapeOutline.NoOvershoot(r313_XH, 0, r313_SB + r313_BBD + r313_HSwToV(r313_BBS), r313_RightSB), r313_VBar.r(r313_RightSB - r313_BBD - r313_OX, 0, r313_XH, r313_BBS)));
            r471_currentGlyph.include(r313_OBarLeft.shape(new r313_xn$NamedParameterPair$2Lrc9b("left", r313_SB + r313_BBD), new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_BBS)));
            return void 0;
        }));
    });
    return void 0;
});


