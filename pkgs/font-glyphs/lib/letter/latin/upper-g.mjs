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
var r1_boolePn = _r1_t8.boolePn;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-G", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_bodyType, r313_rise, r313_slabType, r313_crossbarType, _r313_t14, _r313_t16, _r313_t17, _r313_t18, _r313_tag19;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_AHook = _r313_t1.AHook;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_ShoulderFine = _r313_t1.ShoulderFine;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookStart = _r313_t5.HookStart;
        var r313_flatside = _r313_t5.flatside;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_HalfAdvance = _r313_t6.HalfAdvance;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_ExtendAboveBaseAnchors = _r313_t7.ExtendAboveBaseAnchors;
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateTurnedLetter = _r313_t8.CreateTurnedLetter;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifedArcStart = _r313_t9.SerifedArcStart;
        var r313_InwardSlabArcStart = _r313_t9.InwardSlabArcStart;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_ArcStartSerif = _r313_t10.ArcStartSerif;
        var r313_ArcStartSerifWidth = _r313_t10.ArcStartSerifWidth;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LetterBarOverlay = _r313_t11.LetterBarOverlay;
        var r313_TopHook = _r313_t11.TopHook;
        var r313_PalatalHook = _r313_t11.PalatalHook;
        var r313_xn$BODYTOOTHED$5sIl = 0;
        var r313_xn$BODYTOOTHLESSCORNER$5sIl0b = 1;
        var r313_xn$BODYTOOTHLESSROUNDED$5sIl0b = 2;
        var r313_xn$CROSSBARNONE$9XZu = 0;
        var r313_xn$CROSSBARHOOKED$9XZu = 1;
        var r313_xn$CROSSBARCAPPED$9XZu = 2;
        var r313_xn$SLABNONE$5sIl = 0;
        var r313_xn$SLABCLASSICAL$5sIl = 1;
        var r313_xn$SLABINWARD$5sIl = 2;
        var r313_GBarPos = r313_DesignParameters.upperGBarPos - r313_QuarterStroke / r313_CAP;
        var r313_GShape = function () {
            var _r322_t5;
            var _r322_t6 = arguments;
            var r322_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r322_t6, 0);
            var _r322_t0 = [];
            var _r322_t1 = 0;
            while (_r322_t1 < r322_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r322_xn$flexarguments$2Lrc7uIe5[_r322_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r322_t0.push(r322_xn$flexarguments$2Lrc7uIe5[_r322_t1]);
                _r322_t1 = _r322_t1 + 1;
            }
            var _r322_t2 = r322_xn$flexarguments$2Lrc7uIe5;
            var _r322_t3 = _r322_t2.length;
            var _r322_t4 = 0;
            while (_r322_t4 < _r322_t3) {
                _r322_t1 = _r322_t2[_r322_t4];
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "top") r322_top = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "bodyType") r322_bodyType = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "crossbarType") r322_crossbarType = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "slabType") r322_slabType = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "rise") r322_rise = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "ada") r322_ada = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "adb") r322_adb = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "pyBar") r322_pyBar = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "fHookTop") r322_fHookTop = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "fHookBot") r322_fHookBot = _r322_t1.right;
                _r322_t4 = _r322_t4 + 1;
            }
            var r322_top = r1_fallback(r322_top, _r322_t0[0]);
            var r322_bodyType = r1_fallback(r322_bodyType, _r322_t0[1]);
            var r322_crossbarType = r1_fallback(r322_crossbarType, _r322_t0[2]);
            var r322_slabType = r1_fallback(r322_slabType, _r322_t0[3]);
            var r322_rise = r1_fallback(r322_rise, _r322_t0[4]);
            var r322_ada = r1_fallback(r322_ada, _r322_t0[5], r313_ArchDepthA);
            var r322_adb = r1_fallback(r322_adb, _r322_t0[6], r313_ArchDepthB);
            var r322_pyBar = r1_fallback(r322_pyBar, _r322_t0[7], r313_GBarPos);
            var r322_fHookTop = r1_fallback(r322_fHookTop, _r322_t0[8], false);
            var r322_fHookBot = r1_fallback(r322_fHookBot, _r322_t0[9], false);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                var r327___, _r327_t0, _r327_t1, _r327_t3, _r327_t4, _r327_t5, _r327_t6, _r327_t7;
                var r327_yBarTop = r1_mix(0, r322_top, r322_pyBar) + r313_HalfStroke;
                var r327_hook = Math.min(Math.max(r313_AHook, r313_Hook * (r322_top / r313_CAP)), r1_mix(r313_Stroke, r322_top - r327_yBarTop, 0.554));
                var r327_fine = r313_ShoulderFine;
                var r327_coFine = (_r327_t0 = r322_bodyType, _r327_t0 === r313_xn$BODYTOOTHED$5sIl ? Math.max(r313_AdviceStroke(5), r313_Stroke - r327_fine / 2) : (r327___ = _r327_t0, r313_ArcStartSerifWidth(r313_Stroke)));
                var r327_knots = (_r327_t1 = r322_slabType, _r327_t1 === r313_xn$SLABCLASSICAL$5sIl ? r313_SerifedArcStart.RtlLhs(r313_RightSB, r322_top, r313_Stroke, r327_hook) : _r327_t1 === r313_xn$SLABINWARD$5sIl ? r313_InwardSlabArcStart.RtlLhs(r313_RightSB, r322_top, r313_Stroke, r327_hook) : (r327___ = _r327_t1, [r313_widths.lhs(), r313_g4(r313_RightSB, r322_top - r327_hook), r313_HookStart(r322_top)]));
                r327_knots.push(r313_flatside.ld(r313_SB, 0, r322_top, r322_ada, r322_adb));
                var _r327_t2 = r322_bodyType;
                if (_r327_t2 === r313_xn$BODYTOOTHED$5sIl) {
                    r327_knots.push(r313_Arch.lhs(0, new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r327_fine)), r313_straight.up.end(r313_RightSB - r313_HSwToV(r313_Stroke - r327_fine), Math.min(r322_ada, r327_yBarTop - r313_TINY), r313_widths.lhs.heading(r327_fine, r313_Upward)));
                } else if (_r327_t2 === r313_xn$BODYTOOTHLESSCORNER$5sIl0b) {
                    if (r322_rise) r327_knots.push(r313_Arch.lhs(0, new r313_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r313_g4(r313_RightSB, r322_rise)); else r327_knots.push(r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r313_Middle), 0), r313_curl(r313_RightSB + r313_O, 0, r313_heading(r313_Rightward)));
                } else {
                    r327___ = _r327_t2;
                    r327_knots.push(r313_Arch.lhs(0), r313_flat(r313_RightSB, Math.min(r322_rise, r327_yBarTop - r313_TINY - r313_HSwToV(Math.abs(r313_TanSlope * r313_Stroke)))), r313_curl(r313_RightSB, r327_yBarTop, r313_heading(r313_Upward)));
                }
                r327_currentGlyph.include(r313_union(r313_dispiro.apply(null, r327_knots), (_r327_t3 = r322_slabType, _r327_t3 === r313_xn$SLABCLASSICAL$5sIl ? r313_ArcStartSerif.R(r313_RightSB, r322_top, r313_Stroke, r327_hook) : _r327_t3 === r313_xn$SLABINWARD$5sIl ? r313_ArcStartSerif.InwardR(r313_RightSB, r322_top, r313_Stroke, r327_hook) : (r327___ = _r327_t3, r313_xn$noshape$3cah())), (_r327_t4 = r322_crossbarType, _r327_t4 === r313_xn$CROSSBARHOOKED$9XZu ? r313_HBar.t(r313_Middle, r313_RightSB, r327_yBarTop) : _r327_t4 === r313_xn$CROSSBARCAPPED$9XZu ? r313_HBar.t(r313_Middle, r1_mix(r313_RightSB, r313_Width, 0.625), r327_yBarTop) : (r327___ = _r327_t4, r313_xn$noshape$3cah())), (_r327_t5 = r322_bodyType, _r327_t5 === r313_xn$BODYTOOTHED$5sIl ? r313_union(r313_VBar.r(r313_RightSB, Math.min(r322_ada, r327_yBarTop - r313_TINY) + r313_O, r327_yBarTop), r313_VBar.r(r313_RightSB, Math.min(r322_ada, r327_yBarTop - r313_TINY) + 0, r322_rise, r327_coFine)) : _r327_t5 === r313_xn$BODYTOOTHLESSCORNER$5sIl0b ? r313_VBar.r(r313_RightSB, r322_rise, r327_yBarTop) : (r327___ = _r327_t5, r313_xn$noshape$3cah()))));
                if (r322_fHookTop) {
                    r327_currentGlyph.include(r313_TopHook.toRight.arcStart(r313_RightSB, r322_top, r327_hook));
                    r327_currentGlyph.include(r313_ExtendAboveBaseAnchors(r322_top + (r313_Ascender - r313_XH)));
                    r327_currentGlyph.include(r313_LeaningAnchor.Above.VBar.r(r313_RightSB));
                }
                if (r322_fHookBot) r327_currentGlyph.include(r313_PalatalHook.rExt(r313_RightSB, 0, new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r322_rise), new r313_xn$NamedParameterPair$2Lrc9b("sw", r327_coFine)));
                return void 0;
            });
        };
        var r313_GConfig = r1_SuffixCfg.weave({
            "toothed": [r313_xn$BODYTOOTHED$5sIl, 0],
            "flatBottom": [r313_xn$BODYTOOTHLESSCORNER$5sIl0b, 0],
            "toothlessCorner": [r313_xn$BODYTOOTHLESSCORNER$5sIl0b, r313_DToothlessRise],
            "toothlessRounded": [r313_xn$BODYTOOTHLESSROUNDED$5sIl0b, r313_ArchDepthA]
        }, {
            "serifless": r313_xn$SLABNONE$5sIl,
            "serifed": r313_xn$SLABCLASSICAL$5sIl,
            "inwardSerifed": r313_xn$SLABINWARD$5sIl
        }, {
            "hookless": r313_xn$CROSSBARNONE$9XZu,
            "hooked": r313_xn$CROSSBARHOOKED$9XZu,
            "capped": r313_xn$CROSSBARCAPPED$9XZu
        });
        var _r313_t12 = Object.entries(r313_GConfig)[Symbol.iterator]();
        var _r313_t13 = void 0;
        while (!(_r313_t13 = _r313_t12.next()).done) {
            _r313_t14 = _r313_t13.value;
            r313_suffix = _r313_t14[0];
            r313_bodyType = _r313_t14[1][0][0];
            r313_rise = _r313_t14[1][0][1];
            _r313_t14[1][0];
            r313_slabType = _r313_t14[1][1];
            r313_crossbarType = _r313_t14[1][2];
            _r313_t14[1];
            r313_xn$GlyphSaveSink$2Lrc4b.save("G." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                var _r340_t0, _r340_t1;
                r340_currentGlyph.include(r313_MarkSet.capital());
                r340_currentGlyph.include(r313_GShape(r313_CAP, r313_bodyType, r313_crossbarType, r313_slabType, r313_rise));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("GHookTop." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                var _r345_t0, _r345_t1;
                r345_currentGlyph.include(r313_MarkSet.capital());
                r345_currentGlyph.include(r313_GShape(r313_CAP, r313_bodyType, r313_crossbarType, r313_slabType, r313_rise, new r313_xn$NamedParameterPair$2Lrc9b("fHookTop", true)));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("smcpG." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                var _r351_t0, _r351_t1;
                r351_currentGlyph.include(r313_MarkSet.e());
                r351_currentGlyph.include(r313_GShape(r313_XH, r313_bodyType, r313_crossbarType, r313_slabType, r313_rise));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("smcpGHookTop." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                var _r356_t0, _r356_t1;
                r356_currentGlyph.include(r313_MarkSet.e());
                r356_currentGlyph.include(r313_GShape(r313_XH, r313_bodyType, r313_crossbarType, r313_slabType, r313_rise, new r313_xn$NamedParameterPair$2Lrc9b("fHookTop", true)));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("smcpGPalatalHook." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r362_currentGlyph) {
                var _r362_t0, _r362_t1;
                r362_currentGlyph.include(r313_MarkSet.e());
                r362_currentGlyph.include(r313_GShape(r313_XH, r313_bodyType, r313_crossbarType, r313_slabType, r313_rise, new r313_xn$NamedParameterPair$2Lrc9b("fHookBot", true)));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("GStroke." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                var _r368_t0, _r368_t1;
                r368_currentGlyph.include(r313_xn$referglyph$1aao("G." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                r368_currentGlyph.include(r313_LetterBarOverlay.r.in(new r313_xn$NamedParameterPair$2Lrc9b("x", r313_RightSB), new r313_xn$NamedParameterPair$2Lrc9b("bot", r313_Stroke), new r313_xn$NamedParameterPair$2Lrc9b("top", r1_mix(0, r313_CAP, r313_GBarPos) - r1_boolePn(r313_crossbarType) * r313_HalfStroke), new r313_xn$NamedParameterPair$2Lrc9b("space", [r313_SB + r313_HSwToV(r313_Stroke), r313_Width])));
                return void 0;
            }));
        }
        r313_xn$selectvariant$7Hrq("G", "G");
        r313_xn$linkreducedvariant$5sIl8("G/sansSerif", "G", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("GHookTop", 403);
        r313_xn$selectvariant$7Hrq("smcpG", 610, new r313_xn$NamedParameterPair$2Lrc9b("follow", "G"));
        r313_xn$selectvariant$7Hrq("smcpGHookTop", 667, new r313_xn$NamedParameterPair$2Lrc9b("follow", "GHookTop"));
        r313_xn$selectvariant$7Hrq("smcpGPalatalHook", 122672, new r313_xn$NamedParameterPair$2Lrc9b("follow", "G/descBase"));
        r313_xn$selectvariant$7Hrq("GStroke", 484, new r313_xn$NamedParameterPair$2Lrc9b("follow", "G"));
        r313_CreateTurnedLetter("turnG/sansSerif", 8513, "G/sansSerif", r313_HalfAdvance, r313_CAP / 2);
        r313_CreateTurnedLetter("smcpTurnG", 122626, "smcpG", r313_HalfAdvance, r313_XH / 2);
        (function () {
            var r380_suffix, r380_slabType, _r380_t3;
            var _r380_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
            var r380_SerifFrame = _r380_t0.SerifFrame;
            var r380_Config = {
                "serifless": [r313_xn$SLABNONE$5sIl],
                "unilateralSerifed": [r313_xn$SLABCLASSICAL$5sIl],
                "unilateralInwardSerifed": [r313_xn$SLABINWARD$5sIl]
            };
            var _r380_t1 = Object.entries(r380_Config)[Symbol.iterator]();
            var _r380_t2 = void 0;
            while (!(_r380_t2 = _r380_t1.next()).done) {
                _r380_t3 = _r380_t2.value;
                r380_suffix = _r380_t3[0];
                r380_slabType = _r380_t3[1][0];
                _r380_t3[1];
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/SjeKomi." + r380_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r385_currentGlyph) {
                    var r385_sf2, _r385_t0, _r385_t1;
                    r385_currentGlyph.include(r313_MarkSet.capital());
                    r385_currentGlyph.include(r313_GShape(r313_CAP, r313_xn$BODYTOOTHLESSROUNDED$5sIl0b, r313_xn$CROSSBARNONE$9XZu, r380_slabType, r313_ArchDepthA, new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_ArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_ArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("pyBar", 0.5)));
                    if (r313_SLAB) {
                        r385_sf2 = r380_SerifFrame.fromDf(r313_DivFrame(1), r313_CAP / 2 + r313_HalfStroke, 0);
                        r385_currentGlyph.include(r385_sf2.rt.full);
                    }
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/sjeKomi." + r380_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                    var r394_sf2, _r394_t0, _r394_t1;
                    r394_currentGlyph.include(r313_MarkSet.e());
                    r394_currentGlyph.include(r313_GShape(r313_XH, r313_xn$BODYTOOTHLESSROUNDED$5sIl0b, r313_xn$CROSSBARNONE$9XZu, r380_slabType, r313_ArchDepthA, new r313_xn$NamedParameterPair$2Lrc9b("ada", r313_SmallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r313_SmallArchDepthB), new r313_xn$NamedParameterPair$2Lrc9b("pyBar", 0.5)));
                    if (r313_SLAB) {
                        r394_sf2 = r380_SerifFrame.fromDf(r313_DivFrame(1), r313_XH / 2 + r313_HalfStroke, 0);
                        r394_currentGlyph.include(r394_sf2.rt.full);
                    }
                    return void 0;
                }));
            }
            r313_xn$selectvariant$7Hrq("cyrl/SjeKomi", 1292, new r313_xn$NamedParameterPair$2Lrc9b("follow", "C/topSerif"));
            return r313_xn$selectvariant$7Hrq("cyrl/sjeKomi", 1293, new r313_xn$NamedParameterPair$2Lrc9b("follow", "c/topSerif"));
        })();
        var _r313_t15 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t15.BBS;
        var r313_BBD = _r313_t15.BBD;
        var r313_BBBarRight = _r313_t15.BBBarRight;
        var r313_BBGArcT = function (r404_sink, r404_offset, r404_top, r404_ada, r404_adb, r404_xTerm, r404_yTerm) {
            var _r404_t0, _r404_t1;
            return r404_sink(r313_widths.lhs(r313_BBS), r313_g4(r313_RightSB - r404_offset, r404_top - r313_Hook), r313_HookStart(r404_top - r404_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_BBS)), r313_flatside.ld(r313_SB + r404_offset, 0, r404_top, r404_ada, r404_adb), r313_Arch.lhs(r404_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_BBS), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r313_ShoulderFine)), r313_flat(r404_xTerm - r313_HSwToV(r313_BBS - r313_ShoulderFine) - r404_offset, Math.min(r404_ada, r404_yTerm - r313_TINY), r313_widths.lhs.heading(r313_ShoulderFine, r313_Upward)), r313_curl(r404_xTerm - r313_HSwToV(r313_BBS - r313_ShoulderFine) - r404_offset, r404_yTerm, r313_heading(r313_Upward)));
        };
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/G", 120126, new r313_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
            var _r410_t0, _r410_t1;
            var r410_yBarTop = r1_mix(0, r313_CAP, r313_DesignParameters.upperGBarPos) + r313_BBS * 0.25;
            r410_currentGlyph.include(r313_MarkSet.capital());
            r410_currentGlyph.include(r313_BBGArcT(r313_dispiro, 0, r313_CAP, r313_ArchDepthA, r313_ArchDepthB, r313_RightSB - r313_BBD, r410_yBarTop));
            r410_currentGlyph.include(r313_intersection(r313_BBGArcT(r313_xn$spirooutline$1aao, 1, r313_CAP, r313_ArchDepthA, r313_ArchDepthB, r313_RightSB - r313_BBD, r410_yBarTop), r313_VBar.l(r313_SB + r313_OX + r313_BBD, 0, r313_CAP, r313_BBS)));
            r410_currentGlyph.include(r313_BBBarRight(r313_RightSB, 0, r410_yBarTop));
            return void 0;
        }));
    });
    return void 0;
});


