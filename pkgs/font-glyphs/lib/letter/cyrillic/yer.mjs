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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Yer", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_Uc, r312_Lc, r312_BGRc, _r312_t11, _r312_t12, _r312_t13, _r312_t14, _r312_tag15;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_HalfUPM = _r312_t1.HalfUPM;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_VSwToH = _r312_t1.VSwToH;
        var r312_O = _r312_t1.O;
        var r312_TailY = _r312_t1.TailY;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_Jut = _r312_t1.Jut;
        var r312_VJut = _r312_t1.VJut;
        var r312_VJutStroke = _r312_t1.VJutStroke;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_RightSB = _r312_t1.RightSB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_VSerif = _r312_t5.VSerif;
        var r312_HBar = _r312_t5.HBar;
        var r312_ExtLineLhs = _r312_t5.ExtLineLhs;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_VerticalHook = _r312_t7.VerticalHook;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Yeri"].resolve();
        var r312_YeriBarPos = _r312_t8.YeriBarPos;
        var r312_YeriConfig = _r312_t8.YeriConfig;
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r318_t0, _r318_t1;
            return {
                "CyrYerShape": r312_CyrYerShape
            };
        });
        var r312_CyrYerShape = function () {
            var _r320_t5;
            var _r320_t6 = arguments;
            var r320_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r320_t6, 0);
            var _r320_t0 = [];
            var _r320_t1 = 0;
            while (_r320_t1 < r320_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r320_xn$flexarguments$2Lrc7uIe5[_r320_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r320_t0.push(r320_xn$flexarguments$2Lrc7uIe5[_r320_t1]);
                _r320_t1 = _r320_t1 + 1;
            }
            var _r320_t2 = r320_xn$flexarguments$2Lrc7uIe5;
            var _r320_t3 = _r320_t2.length;
            var _r320_t4 = 0;
            while (_r320_t4 < _r320_t3) {
                _r320_t1 = _r320_t2[_r320_t4];
                if (_r320_t1 && _r320_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "Yeri") r320_Yeri = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "top") r320_top = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "left") r320_left = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "right") r320_right = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "stroke") r320_stroke = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "jut") r320_jut = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "pBar") r320_pBar = _r320_t1.right;
                _r320_t4 = _r320_t4 + 1;
            }
            var r320_Yeri = r1_fallback(r320_Yeri, _r320_t0[0]);
            var r320_top = r1_fallback(r320_top, _r320_t0[1]);
            var r320_left = r1_fallback(r320_left, _r320_t0[2], r312_SB);
            var r320_right = r1_fallback(r320_right, _r320_t0[3], r312_RightSB);
            var r320_stroke = r1_fallback(r320_stroke, _r320_t0[4], r312_AdviceStroke(2.75));
            var r320_jut = r1_fallback(r320_jut, _r320_t0[5], r312_Jut - r312_HSwToV(0.5 * (r312_Stroke - r320_stroke)));
            var r320_pBar = r1_fallback(r320_pBar, _r320_t0[6], r312_YeriBarPos);
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                var r325_swVJut, _r325_t0, _r325_t1;
                var r325_xYeriLeft = Math.max(r320_right - (r312_RightSB - r312_SB), r312_SLAB ? r1_mix(r320_left, r320_right, 0.35) - r312_HSwToV(0.5 * r320_stroke) : r1_mix(r320_left, r320_right, 0.2) - r312_HSwToV(0.25 * r320_stroke));
                var r325_xTopBarLeft = r1_mix(0, r320_left, r312_SLAB ? 0.25 : 0.375);
                r325_currentGlyph.include(r312_HBar.t(r325_xTopBarLeft, r325_xYeriLeft + r312_HSwToV(r320_stroke) + r312_O, r320_top, r320_stroke));
                r325_currentGlyph.include(r320_Yeri(r320_top, new r312_xn$NamedParameterPair$2Lrc9b("left", r325_xYeriLeft), new r312_xn$NamedParameterPair$2Lrc9b("right", r320_right), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r320_stroke), new r312_xn$NamedParameterPair$2Lrc9b("jut", r320_jut), new r312_xn$NamedParameterPair$2Lrc9b("pBar", r320_pBar)));
                if (r312_SLAB) {
                    r325_swVJut = Math.min(r312_VJutStroke * (r320_stroke / r312_Stroke), r312_VSwToH(0.625 * (r325_xYeriLeft - r325_xTopBarLeft)));
                    r325_currentGlyph.include(r312_VSerif.dl(r325_xTopBarLeft, r320_top, r312_VJut, r325_swVJut));
                }
                return void 0;
            });
        };
        var r312_CyrNeutralYerShape = function () {
            var _r335_t5;
            var _r335_t6 = arguments;
            var r335_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r335_t6, 0);
            var _r335_t0 = [];
            var _r335_t1 = 0;
            while (_r335_t1 < r335_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r335_xn$flexarguments$2Lrc7uIe5[_r335_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r335_t0.push(r335_xn$flexarguments$2Lrc7uIe5[_r335_t1]);
                _r335_t1 = _r335_t1 + 1;
            }
            var _r335_t2 = r335_xn$flexarguments$2Lrc7uIe5;
            var _r335_t3 = _r335_t2.length;
            var _r335_t4 = 0;
            while (_r335_t4 < _r335_t3) {
                _r335_t1 = _r335_t2[_r335_t4];
                if (_r335_t1 && _r335_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r335_t1.left === "Yeri") r335_Yeri = _r335_t1.right;
                if (_r335_t1 && _r335_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r335_t1.left === "top") r335_top = _r335_t1.right;
                if (_r335_t1 && _r335_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r335_t1.left === "left") r335_left = _r335_t1.right;
                if (_r335_t1 && _r335_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r335_t1.left === "right") r335_right = _r335_t1.right;
                if (_r335_t1 && _r335_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r335_t1.left === "stroke") r335_stroke = _r335_t1.right;
                if (_r335_t1 && _r335_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r335_t1.left === "jut") r335_jut = _r335_t1.right;
                if (_r335_t1 && _r335_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r335_t1.left === "pBar") r335_pBar = _r335_t1.right;
                _r335_t4 = _r335_t4 + 1;
            }
            var r335_Yeri = r1_fallback(r335_Yeri, _r335_t0[0]);
            var r335_top = r1_fallback(r335_top, _r335_t0[1]);
            var r335_left = r1_fallback(r335_left, _r335_t0[2], r312_SB);
            var r335_right = r1_fallback(r335_right, _r335_t0[3], r312_RightSB);
            var r335_stroke = r1_fallback(r335_stroke, _r335_t0[4], r312_AdviceStroke(2.75));
            var r335_jut = r1_fallback(r335_jut, _r335_t0[5], r312_Jut - r312_HSwToV(0.5 * (r312_Stroke - r335_stroke)));
            var r335_pBar = r1_fallback(r335_pBar, _r335_t0[6], r312_YeriBarPos);
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                var _r340_t0, _r340_t1;
                var r340_xYeriLeft = Math.max(r335_right - (r312_RightSB - r312_SB), r312_SLAB ? r1_mix(r335_left, r335_right, 0.35) - r312_HSwToV(0.5 * r335_stroke) : r1_mix(r335_left, r335_right, 0.2) - r312_HSwToV(0.25 * r335_stroke));
                var r340_xTopBarLeft = r1_mix(0, r335_left, r312_SLAB ? 0.25 : 0.375);
                r340_currentGlyph.include(r335_Yeri(r335_top, new r312_xn$NamedParameterPair$2Lrc9b("left", r340_xYeriLeft), new r312_xn$NamedParameterPair$2Lrc9b("right", r335_right), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r335_stroke), new r312_xn$NamedParameterPair$2Lrc9b("jut", r335_jut), new r312_xn$NamedParameterPair$2Lrc9b("pBar", r335_pBar), new r312_xn$NamedParameterPair$2Lrc9b("yStart", r335_top - r312_TailY - 0.5 * r335_stroke)));
                r340_currentGlyph.ejectTagged("serifYeriLT");
                r340_currentGlyph.include(r312_VerticalHook.l(r340_xYeriLeft, r335_top - r312_TailY - 0.5 * r335_stroke, new r312_xn$NamedParameterPair$2Lrc9b("xDepth", r340_xTopBarLeft - r340_xYeriLeft - r312_HSwToV(0.5 * r335_stroke)), new r312_xn$NamedParameterPair$2Lrc9b("yDepth", -r312_TailY), new r312_xn$NamedParameterPair$2Lrc9b("sw", r335_stroke)));
                return void 0;
            });
        };
        var r312_ZhuangToneSixShape = function () {
            var _r354_t5;
            var _r354_t6 = arguments;
            var r354_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r354_t6, 0);
            var _r354_t0 = [];
            var _r354_t1 = 0;
            while (_r354_t1 < r354_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r354_xn$flexarguments$2Lrc7uIe5[_r354_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r354_t0.push(r354_xn$flexarguments$2Lrc7uIe5[_r354_t1]);
                _r354_t1 = _r354_t1 + 1;
            }
            var _r354_t2 = r354_xn$flexarguments$2Lrc7uIe5;
            var _r354_t3 = _r354_t2.length;
            var _r354_t4 = 0;
            while (_r354_t4 < _r354_t3) {
                _r354_t1 = _r354_t2[_r354_t4];
                if (_r354_t1 && _r354_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r354_t1.left === "Yeri") r354_Yeri = _r354_t1.right;
                if (_r354_t1 && _r354_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r354_t1.left === "top") r354_top = _r354_t1.right;
                if (_r354_t1 && _r354_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r354_t1.left === "left") r354_left = _r354_t1.right;
                if (_r354_t1 && _r354_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r354_t1.left === "right") r354_right = _r354_t1.right;
                if (_r354_t1 && _r354_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r354_t1.left === "stroke") r354_stroke = _r354_t1.right;
                if (_r354_t1 && _r354_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r354_t1.left === "jut") r354_jut = _r354_t1.right;
                if (_r354_t1 && _r354_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r354_t1.left === "pBar") r354_pBar = _r354_t1.right;
                _r354_t4 = _r354_t4 + 1;
            }
            var r354_Yeri = r1_fallback(r354_Yeri, _r354_t0[0]);
            var r354_top = r1_fallback(r354_top, _r354_t0[1]);
            var r354_left = r1_fallback(r354_left, _r354_t0[2], r312_SB);
            var r354_right = r1_fallback(r354_right, _r354_t0[3], r312_RightSB);
            var r354_stroke = r1_fallback(r354_stroke, _r354_t0[4], r312_AdviceStroke(2.75));
            var r354_jut = r1_fallback(r354_jut, _r354_t0[5], r312_Jut - r312_HSwToV(0.5 * (r312_Stroke - r354_stroke)));
            var r354_pBar = r1_fallback(r354_pBar, _r354_t0[6], r312_YeriBarPos);
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                var _r359_t0, _r359_t1;
                var r359_xYeriLeft = Math.max(r354_right - (r312_RightSB - r312_SB), r312_SLAB ? r1_mix(r354_left, r354_right, 0.35) - r312_HSwToV(0.5 * r354_stroke) : r1_mix(r354_left, r354_right, 0.2) - r312_HSwToV(0.25 * r354_stroke));
                var r359_xTopBarLeft = r1_mix(0, r354_left, r312_SLAB ? 0.25 : 0.375);
                r359_currentGlyph.include(r354_Yeri(r354_top, new r312_xn$NamedParameterPair$2Lrc9b("left", r359_xYeriLeft), new r312_xn$NamedParameterPair$2Lrc9b("right", r354_right), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r354_stroke), new r312_xn$NamedParameterPair$2Lrc9b("jut", r354_jut), new r312_xn$NamedParameterPair$2Lrc9b("pBar", r354_pBar)));
                r359_currentGlyph.ejectTagged("serifYeriLT");
                var r359_mockWidth = r354_right - r354_left + r312_SB * 2;
                var r359_yTopBarLeft = r354_top - (r359_xYeriLeft - r359_xTopBarLeft) * (r312_HalfUPM / r359_mockWidth);
                var r359_fine = Math.min(r354_stroke, r312_AdviceStroke(5.5, r359_mockWidth / r312_Width));
                r359_currentGlyph.include(r312_ExtLineLhs(r359_xYeriLeft, r354_top, r359_xTopBarLeft, r359_yTopBarLeft, r359_fine));
                return void 0;
            });
        };
        var _r312_t9 = Object.entries(r312_YeriConfig)[Symbol.iterator]();
        var _r312_t10 = void 0;
        while (!(_r312_t10 = _r312_t9.next()).done) {
            _r312_t11 = _r312_t10.value;
            r312_suffix = _r312_t11[0];
            r312_Uc = _r312_t11[1][0];
            r312_Lc = _r312_t11[1][1];
            r312_BGRc = _r312_t11[1][2];
            _r312_t11[1];
            (function () {
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Yer." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                    var _r373_t0, _r373_t1;
                    var r373_df = r373_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleT, 2));
                    r373_currentGlyph.include(r373_df.markSet.capital());
                    r373_currentGlyph.include(r312_CyrYerShape(r312_Uc, r312_CAP, new r312_xn$NamedParameterPair$2Lrc9b("left", r373_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r373_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r373_df.adviceStroke2(2.75, 3, r312_CAP))));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yer." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                    var _r382_t0, _r382_t1;
                    var r382_df = r382_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleT, 2));
                    r382_currentGlyph.include(r382_df.markSet.e());
                    r382_currentGlyph.include(r312_CyrYerShape(r312_Lc, r312_XH, new r312_xn$NamedParameterPair$2Lrc9b("left", r382_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r382_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r382_df.adviceStroke2(2.75, 3, r312_XH))));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yer.BGR." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
                    var _r391_t0, _r391_t1;
                    var r391_df = r391_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleT, 2));
                    r391_currentGlyph.include(r391_df.markSet.e());
                    r391_currentGlyph.include(r312_CyrYerShape(r312_BGRc, r312_XH, new r312_xn$NamedParameterPair$2Lrc9b("left", r391_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r391_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r391_df.adviceStroke2(2.75, 3, r312_XH))));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yerTall." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r400_currentGlyph) {
                    var _r400_t0, _r400_t1;
                    var r400_df = r400_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleT, 2));
                    r400_currentGlyph.include(r400_df.markSet.b());
                    r400_currentGlyph.include(r312_CyrYerShape(r312_Lc, r312_Ascender, new r312_xn$NamedParameterPair$2Lrc9b("left", r400_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r400_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r400_df.adviceStroke2(2.75, 3, r312_XH)), new r312_xn$NamedParameterPair$2Lrc9b("pBar", r1_mix(0, r312_XH, r312_YeriBarPos) / r312_Ascender)));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YerNeutral." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
                    var _r410_t0, _r410_t1;
                    var r410_df = r410_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleT, 2));
                    r410_currentGlyph.include(r410_df.markSet.capital());
                    r410_currentGlyph.include(r312_CyrNeutralYerShape(r312_Uc, r312_CAP, new r312_xn$NamedParameterPair$2Lrc9b("left", r410_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r410_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r410_df.adviceStroke2(2.75, 3, r312_CAP))));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yerNeutral." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r419_currentGlyph) {
                    var _r419_t0, _r419_t1;
                    var r419_df = r419_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleT, 2));
                    r419_currentGlyph.include(r419_df.markSet.e());
                    r419_currentGlyph.include(r312_CyrNeutralYerShape(r312_Lc, r312_XH, new r312_xn$NamedParameterPair$2Lrc9b("left", r419_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r419_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r419_df.adviceStroke2(2.75, 3, r312_XH))));
                    return void 0;
                }));
                r312_xn$GlyphSaveSink$2Lrc4b.save("ZhuangToneSix." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r428_currentGlyph) {
                    var _r428_t0, _r428_t1;
                    var r428_df = r428_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleT, 2));
                    r428_currentGlyph.include(r428_df.markSet.capital());
                    r428_currentGlyph.include(r312_ZhuangToneSixShape(r312_Uc, r312_CAP, new r312_xn$NamedParameterPair$2Lrc9b("left", r428_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r428_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r428_df.adviceStroke2(2.75, 3, r312_CAP))));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("zhuangToneSix." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r437_currentGlyph) {
                    var _r437_t0, _r437_t1;
                    var r437_df = r437_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleT, 2));
                    r437_currentGlyph.include(r437_df.markSet.e());
                    r437_currentGlyph.include(r312_ZhuangToneSixShape(r312_Lc, r312_XH, new r312_xn$NamedParameterPair$2Lrc9b("left", r437_df.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r437_df.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r437_df.adviceStroke2(2.75, 3, r312_XH))));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("cyrl/Yer", 1066);
        r312_xn$selectvariant$7Hrq("cyrl/yer", 1098);
        r312_xn$selectvariant$7Hrq("cyrl/yer.BGR", new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/yer"));
        r312_xn$selectvariant$7Hrq("cyrl/yerTall", 7302, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/yer"));
        r312_xn$selectvariant$7Hrq("cyrl/YerNeutral", 42574, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Yer"));
        r312_xn$selectvariant$7Hrq("cyrl/yerNeutral", 42575, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/yer"));
        r312_xn$selectvariant$7Hrq("ZhuangToneSix", 388, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Yer"));
        return r312_xn$selectvariant$7Hrq("zhuangToneSix", 389, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/yer"));
    });
    return void 0;
});


