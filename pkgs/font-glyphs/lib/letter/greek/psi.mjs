"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "../../meta/aesthetics.mjs";
import * as _s0_t2 from "@iosevka/glyph/relation";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_DesignParameters = _r1_t9.DesignParameters;
var _r1_t10 = _s0_t2;
var r1_MathSansSerif = _r1_t10.MathSansSerif;
var r1_DependentSelector = _r1_t10.DependentSelector;
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
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Psi", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var r314_suffix, r314_fBarStraight, r314_top, r314_mk, r314_fSlab, _r314_t12, _r314_t15, _r314_t16, _r314_t17, _r314_t18, _r314_tag19, _r314_t20, _r314_tag21;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var r314_para = _r314_t0.para;
        var r314_DivFrame = _r314_t0.DivFrame;
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_CAP = _r314_t1.CAP;
        var r314_XH = _r314_t1.XH;
        var r314_Ascender = _r314_t1.Ascender;
        var r314_Descender = _r314_t1.Descender;
        var r314_ApparentTranslate = _r314_t1.ApparentTranslate;
        var r314_HSwToV = _r314_t1.HSwToV;
        var r314_VSwToH = _r314_t1.VSwToH;
        var r314_TailX = _r314_t1.TailX;
        var r314_Stroke = _r314_t1.Stroke;
        var r314_HalfStroke = _r314_t1.HalfStroke;
        var r314_Jut = _r314_t1.Jut;
        var r314_MidJutCenter = _r314_t1.MidJutCenter;
        var r314_SLAB = _r314_t1.SLAB;
        var r314_SideJut = _r314_t1.SideJut;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_straight = _r314_t2.straight;
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var r314_union = _r314_t4.union;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r314_xn$noshape$3cah = _r314_t5["no-shape"];
        var r314_tagged = _r314_t5.tagged;
        var r314_UShape = _r314_t5.UShape;
        var r314_HSerif = _r314_t5.HSerif;
        var r314_VBar = _r314_t5.VBar;
        var r314_xn$withtransform$5sIl = _r314_t5["with-transform"];
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r314_xn$selectvariant$7Hrq = _r314_t6["select-variant"];
        var r314_xn$linkreducedvariant$5sIl8 = _r314_t6["link-reduced-variant"];
        var _r314_t7 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r314_CreateSelectorVariants = _r314_t7.CreateSelectorVariants;
        var r314_DefineSelectorGlyph = _r314_t7.DefineSelectorGlyph;
        var _r314_t8 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-T"].resolve();
        var r314_yShortNeck1 = _r314_t8.yShortNeck1;
        var r314_yShortNeck2 = _r314_t8.yShortNeck2;
        var _r314_t9 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-V"].resolve();
        var r314_VCornerHalfWidth = _r314_t9.VCornerHalfWidth;
        var r314_VHookRightShape = _r314_t9.VHookRightShape;
        var r314_VSerifs = _r314_t9.VSerifs;
        var r314_VMotionSerifs = _r314_t9.VMotionSerifs;
        var r314_PsiShape = function () {
            var _r320_t5;
            var _r320_t6 = arguments;
            var r320_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r320_t6, 0);
            var _r320_t0 = [];
            var _r320_t1 = 0;
            while (_r320_t1 < r320_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r320_xn$flexarguments$2Lrc7uIe5[_r320_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r320_t0.push(r320_xn$flexarguments$2Lrc7uIe5[_r320_t1]);
                _r320_t1 = _r320_t1 + 1;
            }
            var _r320_t2 = r320_xn$flexarguments$2Lrc7uIe5;
            var _r320_t3 = _r320_t2.length;
            var _r320_t4 = 0;
            while (_r320_t4 < _r320_t3) {
                _r320_t1 = _r320_t2[_r320_t4];
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "df") r320_df = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "y1") r320_y1 = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "y2") r320_y2 = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "y3") r320_y3 = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "y4") r320_y4 = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "ada") r320_ada = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "adb") r320_adb = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "doSerifLT") r320_doSerifLT = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "doSerifRT") r320_doSerifRT = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "doSerifMT") r320_doSerifMT = _r320_t1.right;
                if (_r320_t1 && _r320_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r320_t1.left === "doSerifMB") r320_doSerifMB = _r320_t1.right;
                _r320_t4 = _r320_t4 + 1;
            }
            var r320_df = r1_fallback(r320_df, _r320_t0[0]);
            var r320_y1 = r1_fallback(r320_y1, _r320_t0[1]);
            var r320_y2 = r1_fallback(r320_y2, _r320_t0[2]);
            var r320_y3 = r1_fallback(r320_y3, _r320_t0[3]);
            var r320_y4 = r1_fallback(r320_y4, _r320_t0[4]);
            var r320_ada = r1_fallback(r320_ada, _r320_t0[5]);
            var r320_adb = r1_fallback(r320_adb, _r320_t0[6]);
            var r320_doSerifLT = r1_fallback(r320_doSerifLT, _r320_t0[7]);
            var r320_doSerifRT = r1_fallback(r320_doSerifRT, _r320_t0[8]);
            var r320_doSerifMT = r1_fallback(r320_doSerifMT, _r320_t0[9]);
            var r320_doSerifMB = r1_fallback(r320_doSerifMB, _r320_t0[10]);
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
                var _r326_t0, _r326_t1;
                r326_currentGlyph.include(r314_UShape(r320_y3, r320_y2, r320_df.leftSB, r320_df.rightSB, r320_df.mvs, r320_ada, r320_adb));
                r326_currentGlyph.include(r314_VBar.m(r320_df.middle, r320_y2, r320_y4, r320_df.mvs));
                r326_currentGlyph.include(r314_VBar.m(r320_df.middle, r320_y1, r320_y2 + r314_HalfStroke));
                var r326_doFullSerifs = r320_df.width > r314_para.refJut * 7 && (r320_doSerifLT || r320_doSerifRT) && r320_doSerifMT && r320_doSerifMB;
                if (r320_doSerifLT) r326_currentGlyph.include(r314_tagged("serifLT", r326_doFullSerifs ? r314_HSerif.mt(r320_df.leftSB + r314_HSwToV(0.5 * r320_df.mvs), r320_y3, r314_Jut - r314_HSwToV(0.5 * (r314_Stroke - r320_df.mvs))) : r314_HSerif.lt(r320_df.leftSB, r320_y3, r314_SideJut)));
                if (r320_doSerifRT) r326_currentGlyph.include(r314_tagged("serifRT", r326_doFullSerifs ? r314_HSerif.mt(r320_df.rightSB - r314_HSwToV(0.5 * r320_df.mvs), r320_y3, r314_Jut - r314_HSwToV(0.5 * (r314_Stroke - r320_df.mvs))) : r314_HSerif.rt(r320_df.rightSB, r320_y3, r314_SideJut)));
                if (r320_doSerifMT) r326_currentGlyph.include(r314_tagged("serifMT", r320_y4 > r320_y3 ? r314_HSerif.lt(r320_df.middle - r314_HSwToV(0.5 * r320_df.mvs), r320_y4, r314_SideJut) : r326_doFullSerifs ? r314_HSerif.mt(r320_df.middle, r320_y4, r314_Jut - r314_HSwToV(0.5 * (r314_Stroke - r320_df.mvs))) : true ? r314_xn$noshape$3cah() : void 0));
                if (r320_doSerifMB) r326_currentGlyph.include(r314_tagged("serifMB", r314_HSerif.mb(r320_df.middle, r320_y1, r314_MidJutCenter)));
                return void 0;
            });
        };
        r314_xn$GlyphSaveSink$2Lrc4b.save("grek/Psi", 936, new r314_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
            var _r336_t0, _r336_t1;
            var r336_df = r336_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleM, 3));
            r336_currentGlyph.include(r336_df.markSet.capital());
            r336_currentGlyph.include(r314_PsiShape(r336_df, 0, r1_mix(0, r314_CAP, 0.3), r314_CAP, r314_CAP, r336_df.archDepthA, r336_df.archDepthB, new r314_xn$NamedParameterPair$2Lrc9b("doSerifLT", r314_SLAB), new r314_xn$NamedParameterPair$2Lrc9b("doSerifRT", r314_SLAB), new r314_xn$NamedParameterPair$2Lrc9b("doSerifMT", r314_SLAB), new r314_xn$NamedParameterPair$2Lrc9b("doSerifMB", r314_SLAB)));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("smcpPsi", 7466, new r314_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
            var _r346_t0, _r346_t1;
            var r346_df = r346_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleT, 3));
            r346_currentGlyph.include(r346_df.markSet.e());
            r346_currentGlyph.include(r314_PsiShape(r346_df, 0, r1_mix(0, r314_XH, 0.3), r314_XH, r314_XH, r346_df.archDepthA, r346_df.archDepthB, new r314_xn$NamedParameterPair$2Lrc9b("doSerifLT", r314_SLAB), new r314_xn$NamedParameterPair$2Lrc9b("doSerifRT", r314_SLAB), new r314_xn$NamedParameterPair$2Lrc9b("doSerifMT", false), new r314_xn$NamedParameterPair$2Lrc9b("doSerifMB", r314_SLAB)));
            return void 0;
        }));
        var r314_CyrPsiShape = function (r354_fBarStraight) {
            var _r354_t0, _r354_t1;
            return function () {
                var _r355_t5;
                var _r355_t6 = arguments;
                var r355_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r355_t6, 0);
                var _r355_t0 = [];
                var _r355_t1 = 0;
                while (_r355_t1 < r355_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r355_xn$flexarguments$2Lrc7uIe5[_r355_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r355_t0.push(r355_xn$flexarguments$2Lrc7uIe5[_r355_t1]);
                    _r355_t1 = _r355_t1 + 1;
                }
                var _r355_t2 = r355_xn$flexarguments$2Lrc7uIe5;
                var _r355_t3 = _r355_t2.length;
                var _r355_t4 = 0;
                while (_r355_t4 < _r355_t3) {
                    _r355_t1 = _r355_t2[_r355_t4];
                    if (_r355_t1 && _r355_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "df") r355_df = _r355_t1.right;
                    if (_r355_t1 && _r355_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "y1") r355_y1 = _r355_t1.right;
                    if (_r355_t1 && _r355_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "y2") r355_y2 = _r355_t1.right;
                    if (_r355_t1 && _r355_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "y3") r355_y3 = _r355_t1.right;
                    if (_r355_t1 && _r355_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "y4") r355_y4 = _r355_t1.right;
                    if (_r355_t1 && _r355_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "ada") r355_ada = _r355_t1.right;
                    if (_r355_t1 && _r355_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "adb") r355_adb = _r355_t1.right;
                    if (_r355_t1 && _r355_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "doSerifLT") r355_doSerifLT = _r355_t1.right;
                    if (_r355_t1 && _r355_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "doSerifRT") r355_doSerifRT = _r355_t1.right;
                    if (_r355_t1 && _r355_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "doSerifMT") r355_doSerifMT = _r355_t1.right;
                    if (_r355_t1 && _r355_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r355_t1.left === "doSerifMB") r355_doSerifMB = _r355_t1.right;
                    _r355_t4 = _r355_t4 + 1;
                }
                var r355_df = r1_fallback(r355_df, _r355_t0[0]);
                var r355_y1 = r1_fallback(r355_y1, _r355_t0[1]);
                var r355_y2 = r1_fallback(r355_y2, _r355_t0[2]);
                var r355_y3 = r1_fallback(r355_y3, _r355_t0[3]);
                var r355_y4 = r1_fallback(r355_y4, _r355_t0[4]);
                var r355_ada = r1_fallback(r355_ada, _r355_t0[5]);
                var r355_adb = r1_fallback(r355_adb, _r355_t0[6]);
                var r355_doSerifLT = r1_fallback(r355_doSerifLT, _r355_t0[7]);
                var r355_doSerifRT = r1_fallback(r355_doSerifRT, _r355_t0[8]);
                var r355_doSerifMT = r1_fallback(r355_doSerifMT, _r355_t0[9]);
                var r355_doSerifMB = r1_fallback(r355_doSerifMB, _r355_t0[10]);
                return new r314_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                    var _r361_t0, _r361_t1;
                    var r361_fine = r355_df.adviceThinnerStroke(3.5);
                    var r361_coarse = r314_VSwToH(2 * r314_VCornerHalfWidth * (r361_fine / r314_Stroke));
                    var r361_swSerif = r1_clamp(r361_fine, r314_Stroke, r361_coarse);
                    var r361_doFullSerifs = r355_df.width > r314_para.refJut * 7 && (r355_doSerifLT || r355_doSerifRT) && r355_doSerifMT && r355_doSerifMB;
                    r361_currentGlyph.include(r314_xn$withtransform$5sIl(r314_ApparentTranslate(0, r355_y2 - 0), r314_union(r314_VHookRightShape(new r314_xn$NamedParameterPair$2Lrc9b("df", r355_df), new r314_xn$NamedParameterPair$2Lrc9b("fBarStraight", r354_fBarStraight), new r314_xn$NamedParameterPair$2Lrc9b("top", r355_y3 - r355_y2), new r314_xn$NamedParameterPair$2Lrc9b("sw", r361_fine), new r314_xn$NamedParameterPair$2Lrc9b("hookWidthOuter", r314_TailX / 3), new r314_xn$NamedParameterPair$2Lrc9b("hookWidthInner", r314_TailX / 3 - r314_HSwToV(0.25 * r361_fine))), r355_doSerifLT ? r314_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r371_currentGlyph) {
                        var _r371_t0, _r371_t1;
                        r371_currentGlyph.include((r361_doFullSerifs ? r314_VSerifs : r314_VMotionSerifs)(r355_df, r354_fBarStraight, r355_y3 - r355_y2, r361_swSerif, r361_fine));
                        r371_currentGlyph.ejectTagged("serifRT");
                        return void 0;
                    })) : r314_xn$noshape$3cah())));
                    r361_currentGlyph.include(r314_VBar.m(r355_df.middle, r355_y2, r355_y4, r361_fine));
                    r361_currentGlyph.include(r314_VBar.m(r355_df.middle, r355_y1, r355_y2 + r314_HalfStroke, r361_coarse));
                    if (r355_doSerifMT) r361_currentGlyph.include(r314_tagged("serifMT", r355_y4 > r355_y3 ? r314_HSerif.lt(r355_df.middle - r314_HSwToV(0.5 * r361_fine), r355_y4, r314_SideJut, Math.min(r361_swSerif, r355_y4 - r355_y3), r361_fine) : r361_doFullSerifs ? r314_HSerif.mt(r355_df.middle, r355_y4, r314_Jut - r314_HSwToV(0.5 * (r314_Stroke - r361_fine)), r361_swSerif) : true ? r314_xn$noshape$3cah() : void 0));
                    if (r355_doSerifMB) r361_currentGlyph.include(r314_tagged("serifMB", r314_HSerif.mb(r355_df.middle, r355_y1, r314_MidJutCenter - r314_HSwToV(0.5 * (r314_Stroke - r361_coarse)), r361_swSerif)));
                    return void 0;
                });
            };
        };
        var r314_VConfig = {
            "straight": true,
            "curly": false
        };
        var _r314_t10 = Object.entries(r314_VConfig)[Symbol.iterator]();
        var _r314_t11 = void 0;
        while (!(_r314_t11 = _r314_t10.next()).done) {
            _r314_t12 = _r314_t11.value;
            r314_suffix = _r314_t12[0];
            r314_fBarStraight = _r314_t12[1];
            (function () {
                return r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Psi." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r383_currentGlyph) {
                    var _r383_t0, _r383_t1;
                    var r383_df = r383_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleM, 3));
                    r383_currentGlyph.include(r383_df.markSet.capital());
                    r383_currentGlyph.include(r314_CyrPsiShape(r314_fBarStraight)(r383_df, 0, r1_mix(0, r314_CAP, 0.3), r314_CAP, r314_CAP, r383_df.archDepthA, r383_df.archDepthB, new r314_xn$NamedParameterPair$2Lrc9b("doSerifLT", r314_SLAB), new r314_xn$NamedParameterPair$2Lrc9b("doSerifRT", false), new r314_xn$NamedParameterPair$2Lrc9b("doSerifMT", r314_SLAB), new r314_xn$NamedParameterPair$2Lrc9b("doSerifMB", r314_SLAB)));
                    return void 0;
                }));
            })();
        }
        r314_xn$selectvariant$7Hrq("cyrl/Psi", 1136, new r314_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Psi/Izhitsa"));
        var r314_GrekLowerPsiConfig = r1_SuffixCfg.weave({
            "": [r314_Ascender, "bp"],
            "shortNeck": [r314_yShortNeck1, "bp"],
            "shortNeck2": [r314_yShortNeck2, "bp"],
            "flatTop": [r314_XH, "p"]
        }, {
            "serifless": false,
            "serifed": true
        });
        var _r314_t13 = Object.entries(r314_GrekLowerPsiConfig)[Symbol.iterator]();
        var _r314_t14 = void 0;
        while (!(_r314_t14 = _r314_t13.next()).done) {
            _r314_t15 = _r314_t14.value;
            r314_suffix = _r314_t15[0];
            r314_top = _r314_t15[1][0][0];
            r314_mk = _r314_t15[1][0][1];
            _r314_t15[1][0];
            r314_fSlab = _r314_t15[1][1];
            _r314_t15[1];
            (function () {
                var r394_suffixV, r394_fBarStraight, _r394_t2, _r394_t3, _r394_tag4;
                var r394_df = r314_DivFrame(r314_para.advanceScaleM, 3);
                r314_xn$GlyphSaveSink$2Lrc4b.save("grek/psi." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r397_currentGlyph) {
                    var _r397_t0, _r397_t1;
                    r397_currentGlyph.setWidth(r394_df.width);
                    r397_currentGlyph.include(r394_df.markSet[r314_mk]());
                    r397_currentGlyph.include(r314_PsiShape(r394_df, r314_Descender, 0, r314_XH, r314_top, r394_df.smallArchDepthA, r394_df.smallArchDepthB, new r314_xn$NamedParameterPair$2Lrc9b("doSerifLT", r314_fSlab), new r314_xn$NamedParameterPair$2Lrc9b("doSerifRT", false), new r314_xn$NamedParameterPair$2Lrc9b("doSerifMT", false), new r314_xn$NamedParameterPair$2Lrc9b("doSerifMB", false)));
                    return void 0;
                }));
                r314_DefineSelectorGlyph("cyrl/psi", r314_suffix, r394_df, r314_mk);
                var _r394_t0 = Object.entries(r314_VConfig)[Symbol.iterator]();
                var _r394_t1 = void 0;
                while (!(_r394_t1 = _r394_t0.next()).done) {
                    _r394_t2 = _r394_t1.value;
                    r394_suffixV = _r394_t2[0];
                    r394_fBarStraight = _r394_t2[1];
                    (function () {
                        return r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/psi." + r314_suffix + "." + r394_suffixV, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
                            var _r410_t0, _r410_t1;
                            r410_currentGlyph.setWidth(0);
                            r410_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r410_currentGlyph.include(r314_CyrPsiShape(r394_fBarStraight)(r394_df, r314_Descender, 0, r314_XH, r314_top, r394_df.smallArchDepthA, r394_df.smallArchDepthB, new r314_xn$NamedParameterPair$2Lrc9b("doSerifLT", r314_fSlab), new r314_xn$NamedParameterPair$2Lrc9b("doSerifRT", false), new r314_xn$NamedParameterPair$2Lrc9b("doSerifMT", r314_fSlab && r314_SLAB && (!r314_para.isItalic || r314_top > r314_XH)), new r314_xn$NamedParameterPair$2Lrc9b("doSerifMB", r314_fSlab && r314_SLAB && !r314_para.isItalic)));
                            return void 0;
                        }));
                    })();
                }
                return r314_xn$selectvariant$7Hrq("cyrl/psi." + r314_suffix, new r314_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/psi/izhitsa"));
            })();
        }
        r314_xn$selectvariant$7Hrq("grek/psi", 968);
        r314_xn$linkreducedvariant$5sIl8("grek/psi/sansSerif", "grek/psi", r1_MathSansSerif);
        r314_xn$selectvariant$7Hrq("grek/psi/noAscend", new r314_xn$NamedParameterPair$2Lrc9b("shapeFrom", "grek/psi"));
        return r314_CreateSelectorVariants("cyrl/psi", 1137, Object.keys(r314_GrekLowerPsiConfig), new r314_xn$NamedParameterPair$2Lrc9b("follow", "grek/psi"));
    });
    return void 0;
});


