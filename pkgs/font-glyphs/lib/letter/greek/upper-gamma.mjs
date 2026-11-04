"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/point";
import * as _s0_t2 from "@iosevka/glyph/relation";
import * as _s0_t3 from "../../meta/aesthetics.mjs";
var _s0_t4;
export {_s0_t4 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Point = _r1_t9.Point;
var _r1_t10 = _s0_t2;
var r1_MathSansSerif = _r1_t10.MathSansSerif;
var _r1_t11 = _s0_t3;
var r1_DesignParameters = _r1_t11.DesignParameters;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t4 = r1_apply = function () {
    var r310_block, _r310_t4, _r310_t6;
    var _r310_t3 = this;
    var _r310_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r310_t1 = _r310_t0.length;
    var _r310_t2 = 0;
    var _r310_t5 = _r310_t2 < _r310_t1;
    while (_r310_t5) {
        _r310_t6 = (r310_block = _r310_t0[_r310_t2], r310_block(_r310_t3), _r310_t2 = _r310_t2 + 1);
        _r310_t5 = _r310_t2 < _r310_t1;
    }
    return _r310_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r314_xn$Capture_Ext$2Lrc2b) {
    var _r314_t0, _r314_t1;
    r314_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r314_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Upper-Gamma", function (r315_xn$Capture$2Lrc8, r315_xn$ExportCapture$2Lrc4b) {
        var r315_suffix, r315_slabType, r315_doST, _r315_t13, _r315_t15, _r315_t16, _r315_t17, _r315_tag18;
        var _r315_t0 = r315_xn$Capture$2Lrc8;
        var r315_xn$GlyphSaveSink$2Lrc4b = _r315_t0["$GlyphSaveSink$"];
        var r315_xn$NamedParameterPair$2Lrc9b = _r315_t0["$NamedParameterPair$"];
        var r315_xn$Exec$2Lrc5 = _r315_t0["$Exec$"];
        var r315_para = _r315_t0.para;
        var r315_MarkSet = _r315_t0.MarkSet;
        var r315_AS_BASE = _r315_t0.AS_BASE;
        var r315_ALSO_METRICS = _r315_t0.ALSO_METRICS;
        var r315_DivFrame = _r315_t0.DivFrame;
        var _r315_t1 = r315_xn$Capture$2Lrc8.Metrics;
        var r315_DesignParameters = _r315_t1.DesignParameters;
        var r315_Width = _r315_t1.Width;
        var r315_SB = _r315_t1.SB;
        var r315_CAP = _r315_t1.CAP;
        var r315_XH = _r315_t1.XH;
        var r315_Descender = _r315_t1.Descender;
        var r315_HSwToV = _r315_t1.HSwToV;
        var r315_Upward = _r315_t1.Upward;
        var r315_Leftward = _r315_t1.Leftward;
        var r315_O = _r315_t1.O;
        var r315_OX = _r315_t1.OX;
        var r315_Hook = _r315_t1.Hook;
        var r315_RHook = _r315_t1.RHook;
        var r315_Stroke = _r315_t1.Stroke;
        var r315_HalfStroke = _r315_t1.HalfStroke;
        var r315_QuarterStroke = _r315_t1.QuarterStroke;
        var r315_HBarPos = _r315_t1.HBarPos;
        var r315_OverlayPos = _r315_t1.OverlayPos;
        var r315_Jut = _r315_t1.Jut;
        var r315_MidJutSide = _r315_t1.MidJutSide;
        var r315_VJut = _r315_t1.VJut;
        var r315_LongVJut = _r315_t1.LongVJut;
        var r315_VJutStroke = _r315_t1.VJutStroke;
        var r315_SLAB = _r315_t1.SLAB;
        var r315_RightSB = _r315_t1.RightSB;
        var r315_SideJut = _r315_t1.SideJut;
        var r315_ArchDepthA = _r315_t1.ArchDepthA;
        var r315_ArchDepthB = _r315_t1.ArchDepthB;
        var _r315_t2 = r315_xn$Capture$2Lrc8.SpiroFns;
        var r315_g4 = _r315_t2.g4;
        var r315_flat = _r315_t2.flat;
        var r315_curl = _r315_t2.curl;
        var r315_widths = _r315_t2.widths;
        var r315_heading = _r315_t2.heading;
        var r315_arcvh = _r315_t2.arcvh;
        var r315_dispiro = _r315_t2.dispiro;
        var _r315_t3 = r315_xn$Capture$2Lrc8.SpiroFns;
        var r315_xn$decor$0cao = _r315_t3["decor@"];
        var r315_xn$decor$0cao1 = _r315_t3["decor@@"];
        var r315_xn$decor$0cao11 = _r315_t3["decor@@@"];
        var _r315_t4 = r315_xn$Capture$2Lrc8.BooleFns;
        var r315_union = _r315_t4.union;
        var _r315_t5 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r315_tagged = _r315_t5.tagged;
        var r315_HSerif = _r315_t5.HSerif;
        var r315_VSerif = _r315_t5.VSerif;
        var r315_HBar = _r315_t5.HBar;
        var r315_VBar = _r315_t5.VBar;
        var r315_Arch = _r315_t5.Arch;
        var _r315_t6 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r315_xn$referglyph$1aao = _r315_t6["refer-glyph"];
        var r315_xn$selectvariant$7Hrq = _r315_t6["select-variant"];
        var r315_xn$linkreducedvariant$5sIl8 = _r315_t6["link-reduced-variant"];
        var r315_xn$derivecomposites$7Hrq = _r315_t6["derive-composites"];
        var _r315_t7 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r315_ExtendAboveBaseAnchors = _r315_t7.ExtendAboveBaseAnchors;
        var r315_LeaningAnchor = _r315_t7.LeaningAnchor;
        var _r315_t8 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r315_EFMidBarShrinkK = _r315_t8.EFMidBarShrinkK;
        var r315_EFMidBarPosY = _r315_t8.EFMidBarPosY;
        var _r315_t9 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r315_CyrDescender = _r315_t9.CyrDescender;
        var r315_MidHook = _r315_t9.MidHook;
        var r315_LegShape = _r315_t9.LegShape;
        var _r315_t10 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r315_LetterBarOverlay = _r315_t10.LetterBarOverlay;
        var r315_PalatalHook = _r315_t10.PalatalHook;
        var r315_xn$SLABNONE$5sIl = 0;
        var r315_xn$SLABTR$5sIl = 1;
        var r315_xn$SLABBOTTOM$5sIl = 2;
        var r315_xn$SLABALL$5sIl = 3;
        var r315_kSB = 1.5;
        var r315_xGammaBarLeft = r1_mix(0, r315_SB, r315_kSB);
        var r315_xGammaTopRight = r315_RightSB - 0.75 * r315_OX;
        var r315_GammaShape = function (r322_top, r322_bot, r322_slabType) {
            var _r322_t0, _r322_t1;
            return new r315_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var _r324_t1, _r324_t2;
                r324_currentGlyph.include(r315_LeaningAnchor.Below.VBar.l(r315_xGammaBarLeft));
                r324_currentGlyph.include(r315_tagged("strokeV", r315_VBar.l(r315_xGammaBarLeft, r322_bot, r322_top)));
                r324_currentGlyph.include(r315_tagged("strokeH", r315_HBar.t(r315_xGammaBarLeft - r315_O, r315_xGammaTopRight, r322_top)));
                var _r324_t0 = r322_slabType;
                if (_r324_t0 === r315_xn$SLABALL$5sIl) {
                    r324_currentGlyph.include(r315_tagged("serifLT", r315_HSerif.lt(r315_xGammaBarLeft, r322_top, r315_SideJut)));
                    r324_currentGlyph.include(r315_tagged("serifRT", r315_VSerif.dr(r315_xGammaTopRight, r322_top, r315_VJut)));
                    r324_currentGlyph.include(r315_tagged("serifLB", r315_union(r315_HSerif.lb(r315_xGammaBarLeft + r315_HSwToV(r315_HalfStroke), r322_bot, r315_Jut), r315_HSerif.rb(r315_xGammaBarLeft + r315_HSwToV(r315_HalfStroke), r322_bot, r315_MidJutSide))));
                } else if (_r324_t0 === r315_xn$SLABBOTTOM$5sIl) {
                    r324_currentGlyph.include(r315_tagged("serifLB", r315_union(r315_HSerif.lb(r315_xGammaBarLeft + r315_HSwToV(r315_HalfStroke), r322_bot, r315_Jut), r315_HSerif.rb(r315_xGammaBarLeft + r315_HSwToV(r315_HalfStroke), r322_bot, r315_MidJutSide))));
                } else if (_r324_t0 === r315_xn$SLABTR$5sIl) {
                    r324_currentGlyph.include(r315_tagged("serifRT", r315_VSerif.dr(r315_xGammaTopRight, r322_top, r315_VJut)));
                } else void 0;
                return void 0;
            });
        };
        var r315_GammaConfig = {
            "serifless": [r315_xn$SLABNONE$5sIl, false],
            "topRightSerifed": [r315_xn$SLABTR$5sIl, true],
            "bottomSerifed": [r315_xn$SLABBOTTOM$5sIl, false],
            "serifed": [r315_xn$SLABALL$5sIl, true]
        };
        var _r315_t11 = Object.entries(r315_GammaConfig)[Symbol.iterator]();
        var _r315_t12 = void 0;
        while (!(_r315_t12 = _r315_t11.next()).done) {
            _r315_t13 = _r315_t12.value;
            r315_suffix = _r315_t13[0];
            r315_slabType = _r315_t13[1][0];
            r315_doST = _r315_t13[1][1];
            _r315_t13[1];
            (function () {
                r315_xn$GlyphSaveSink$2Lrc4b.save("grek/Gamma." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                    var _r338_t0, _r338_t1;
                    r338_currentGlyph.include(r315_MarkSet.capital());
                    r338_currentGlyph.include(r315_GammaShape(r315_CAP, 0, r315_slabType));
                    return void 0;
                }));
                r315_xn$GlyphSaveSink$2Lrc4b.save("grek/Digamma." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                    var _r343_t0, _r343_t1;
                    r343_currentGlyph.include(r315_MarkSet.capital());
                    r343_currentGlyph.include(r315_GammaShape(r315_CAP, 0, r315_slabType));
                    var r343_yBar = r315_EFMidBarPosY(r315_CAP, 0);
                    var r343_xMidRight = r1_mix(r315_Width, r315_RightSB, r315_EFMidBarShrinkK(r315_DivFrame(1), r315_doST));
                    r343_currentGlyph.include(r315_HBar.m(r315_xGammaBarLeft, r343_xMidRight, r343_yBar));
                    if (r315_doST) r343_currentGlyph.include(r315_tagged("serifRM", r315_VSerif.dr(r343_xMidRight, r343_yBar + r315_HalfStroke, r1_mix(r315_Stroke, r315_VJut, 0.5))));
                    return void 0;
                }));
                r315_xn$GlyphSaveSink$2Lrc4b.save("rCap." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                    var _r350_t0, _r350_t1;
                    r350_currentGlyph.include(r315_xn$referglyph$1aao("grek/Gamma." + r315_suffix), r315_AS_BASE, r315_ALSO_METRICS);
                    r350_currentGlyph.ejectTagged("serifRT");
                    r350_currentGlyph.ejectTagged("strokeH");
                    r350_currentGlyph.include(r315_dispiro(r315_widths.lhs(), r315_g4.up.start(r315_xGammaTopRight - r315_OX, r315_CAP - Math.min(r315_Hook, r315_RHook * (r315_CAP / r315_XH) + r315_HalfStroke), r315_heading(r315_Upward)), r315_arcvh(void 0, r315_DesignParameters.rHookSuperness), r315_flat(r315_Arch["adjust-x"].top(r1_mix(r315_xGammaTopRight, r315_xGammaBarLeft, 0.5)), r315_CAP), r315_curl(r315_xGammaBarLeft - r315_O, r315_CAP, r315_heading(r315_Leftward))));
                    return void 0;
                }));
                r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/GheDescender." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                    var _r357_t0, _r357_t1;
                    r357_currentGlyph.include(r315_xn$referglyph$1aao("grek/Gamma." + r315_suffix), r315_AS_BASE, r315_ALSO_METRICS);
                    r357_currentGlyph.include(r315_CyrDescender.rSideJut(new r315_xn$NamedParameterPair$2Lrc9b("x", r315_xGammaBarLeft + r315_HSwToV(r315_Stroke)), new r315_xn$NamedParameterPair$2Lrc9b("y", 0), new r315_xn$NamedParameterPair$2Lrc9b("jut", r315_MidJutSide)));
                    return void 0;
                }));
                r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/GheHook." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                    var _r365_t0, _r365_t1;
                    r365_currentGlyph.include(r315_xn$referglyph$1aao("grek/Gamma." + r315_suffix), r315_AS_BASE, r315_ALSO_METRICS);
                    r365_currentGlyph.include(r315_PalatalHook.rSideJut(new r315_xn$NamedParameterPair$2Lrc9b("x", r315_xGammaBarLeft + r315_HSwToV(r315_Stroke)), new r315_xn$NamedParameterPair$2Lrc9b("y", 0), new r315_xn$NamedParameterPair$2Lrc9b("jut", r315_MidJutSide)));
                    return void 0;
                }));
                r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ghe.upright." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                    var _r373_t0, _r373_t1;
                    r373_currentGlyph.include(r315_MarkSet.e());
                    r373_currentGlyph.include(r315_GammaShape(r315_XH, 0, r315_slabType));
                    return void 0;
                }));
                r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/gheDescender.upright." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r378_currentGlyph) {
                    var _r378_t0, _r378_t1;
                    r378_currentGlyph.include(r315_xn$referglyph$1aao("cyrl/ghe.upright." + r315_suffix), r315_AS_BASE, r315_ALSO_METRICS);
                    r378_currentGlyph.include(r315_CyrDescender.rSideJut(new r315_xn$NamedParameterPair$2Lrc9b("x", r315_xGammaBarLeft + r315_HSwToV(r315_Stroke)), new r315_xn$NamedParameterPair$2Lrc9b("y", 0), new r315_xn$NamedParameterPair$2Lrc9b("jut", r315_MidJutSide)));
                    return void 0;
                }));
                r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/gheHook.upright." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                    var _r386_t0, _r386_t1;
                    r386_currentGlyph.include(r315_xn$referglyph$1aao("cyrl/ghe.upright." + r315_suffix), r315_AS_BASE, r315_ALSO_METRICS);
                    r386_currentGlyph.include(r315_PalatalHook.rSideJut(new r315_xn$NamedParameterPair$2Lrc9b("x", r315_xGammaBarLeft + r315_HSwToV(r315_Stroke)), new r315_xn$NamedParameterPair$2Lrc9b("y", 0), new r315_xn$NamedParameterPair$2Lrc9b("jut", r315_MidJutSide)));
                    return void 0;
                }));
                r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Ge." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                    var _r394_t0, _r394_t1;
                    r394_currentGlyph.include(r315_MarkSet.capital());
                    r394_currentGlyph.include(r315_ExtendAboveBaseAnchors(r315_CAP + r315_LongVJut - r315_QuarterStroke));
                    r394_currentGlyph.include(r315_GammaShape(r315_CAP, 0, r315_slabType));
                    r394_currentGlyph.ejectTagged("serifRT");
                    r394_currentGlyph.include(r315_VBar.r(r315_xGammaTopRight, r315_CAP, r315_CAP + r315_LongVJut - r315_QuarterStroke, r315_VJutStroke));
                    return void 0;
                }));
                r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ge.upright." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r402_currentGlyph) {
                    var _r402_t0, _r402_t1;
                    r402_currentGlyph.include(r315_MarkSet.e());
                    r402_currentGlyph.include(r315_ExtendAboveBaseAnchors(r315_XH + r315_LongVJut - r315_QuarterStroke));
                    r402_currentGlyph.include(r315_GammaShape(r315_XH, 0, r315_slabType));
                    r402_currentGlyph.ejectTagged("serifRT");
                    r402_currentGlyph.include(r315_VBar.r(r315_xGammaTopRight, r315_XH, r315_XH + r315_LongVJut - r315_QuarterStroke, r315_VJutStroke));
                    return void 0;
                }));
                r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ge.italic." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
                    var _r410_t0, _r410_t1;
                    r410_currentGlyph.include(r315_xn$referglyph$1aao("cyrl/ge.upright." + r315_suffix), r315_AS_BASE, r315_ALSO_METRICS);
                    r410_currentGlyph.ejectTagged("serifLB");
                    r410_currentGlyph.ejectTagged("strokeV");
                    r410_currentGlyph.include(r315_LegShape(new r315_xn$NamedParameterPair$2Lrc9b("ztop", r1_Point.fromXY(r1_Point.Type.Corner, r315_xGammaBarLeft, r315_XH)), new r315_xn$NamedParameterPair$2Lrc9b("zbot", r1_Point.fromXY(r1_Point.Type.Corner, r1_mix(r315_SB, 0, r315_doST ? 1 : 0.75), 0)), new r315_xn$NamedParameterPair$2Lrc9b("xmid", r315_xGammaBarLeft)));
                    return void 0;
                }));
                r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/GheMidHook." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r420_currentGlyph) {
                    var _r420_t0, _r420_t1;
                    r420_currentGlyph.include(r315_xn$referglyph$1aao("grek/Gamma." + r315_suffix), r315_AS_BASE, r315_ALSO_METRICS);
                    r420_currentGlyph.include(r315_MarkSet.capDesc());
                    r420_currentGlyph.include(r315_MidHook.general(new r315_xn$NamedParameterPair$2Lrc9b("left", r315_xGammaBarLeft + r315_HSwToV(r315_Stroke)), new r315_xn$NamedParameterPair$2Lrc9b("right", r315_RightSB), new r315_xn$NamedParameterPair$2Lrc9b("top", r315_CAP * r315_HBarPos + r315_QuarterStroke), new r315_xn$NamedParameterPair$2Lrc9b("ada", r315_ArchDepthA), new r315_xn$NamedParameterPair$2Lrc9b("adb", r315_ArchDepthB)));
                    return void 0;
                }));
                return r315_xn$GlyphSaveSink$2Lrc4b.save("cyrl/gheMidHook." + r315_suffix, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r431_currentGlyph) {
                    var _r431_t0, _r431_t1;
                    r431_currentGlyph.include(r315_xn$referglyph$1aao("cyrl/ghe.upright." + r315_suffix), r315_AS_BASE, r315_ALSO_METRICS);
                    r431_currentGlyph.include(r315_MarkSet.p());
                    r431_currentGlyph.include(r315_MidHook.general(new r315_xn$NamedParameterPair$2Lrc9b("left", r315_xGammaBarLeft + r315_HSwToV(r315_Stroke)), new r315_xn$NamedParameterPair$2Lrc9b("right", r315_RightSB), new r315_xn$NamedParameterPair$2Lrc9b("top", r315_XH * r315_HBarPos + r315_QuarterStroke), new r315_xn$NamedParameterPair$2Lrc9b("ada", r315_ArchDepthA * Math.pow(r315_HBarPos, 0.3)), new r315_xn$NamedParameterPair$2Lrc9b("adb", r315_ArchDepthB * Math.pow(r315_HBarPos, 0.3))));
                    if (r315_para.isItalic) r431_currentGlyph.ejectTagged("serifLB");
                    return void 0;
                }));
            })();
        }
        r315_xn$selectvariant$7Hrq("grek/Gamma", 915);
        r315_xn$linkreducedvariant$5sIl8("grek/Gamma/sansSerif", "grek/Gamma", r1_MathSansSerif);
        r315_xn$selectvariant$7Hrq("grek/smcpGamma", 7462, new r315_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/ghe.upright"), new r315_xn$NamedParameterPair$2Lrc9b("follow", "grek/Gamma"));
        r315_xn$selectvariant$7Hrq("RLongLeg", 42978, new r315_xn$NamedParameterPair$2Lrc9b("shapeFrom", "rCap"), new r315_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Ge"));
        r315_xn$selectvariant$7Hrq("cyrl/Ghe", 1043, new r315_xn$NamedParameterPair$2Lrc9b("shapeFrom", "grek/Gamma"));
        r315_xn$selectvariant$7Hrq("cyrl/ghe.upright");
        r315_xn$selectvariant$7Hrq("cyrl/GheDescender", 1270, new r315_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Ghe"));
        r315_xn$selectvariant$7Hrq("cyrl/gheDescender.upright", new r315_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/ghe.upright"));
        r315_xn$selectvariant$7Hrq("cyrl/GheHook", new r315_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Ghe"));
        r315_xn$selectvariant$7Hrq("cyrl/gheHook.upright", new r315_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/ghe.upright"));
        r315_xn$selectvariant$7Hrq("cyrl/Ge", 1168);
        r315_xn$selectvariant$7Hrq("cyrl/ge.upright", new r315_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/ge"));
        r315_xn$selectvariant$7Hrq("cyrl/ge.italic", new r315_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/ge"));
        r315_xn$selectvariant$7Hrq("cyrl/GheMidHook", 1172, new r315_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Ghe"));
        r315_xn$selectvariant$7Hrq("cyrl/gheMidHook", 1173, new r315_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/ghe.upright"));
        r315_xn$selectvariant$7Hrq("grek/Digamma", 988, new r315_xn$NamedParameterPair$2Lrc9b("follow", "grek/Gamma"));
        r315_xn$GlyphSaveSink$2Lrc4b.save("grek/digamma", 989, new r315_xn$Capture$2Lrc8.GlyphProc(function (r459_currentGlyph) {
            var _r459_t0, _r459_t1;
            r459_currentGlyph.include(r315_MarkSet.p());
            r459_currentGlyph.include(r315_GammaShape(r315_XH, r315_Descender, r315_xn$SLABNONE$5sIl));
            var r459_yBar = r315_EFMidBarPosY(r315_XH, 0);
            var r459_xMidRight = r1_mix(r315_Width, r315_RightSB, r315_EFMidBarShrinkK(r315_DivFrame(1), r315_SLAB));
            r459_currentGlyph.include(r315_HBar.m(r315_xGammaBarLeft, r459_xMidRight, r459_yBar));
            if (r315_SLAB) r459_currentGlyph.include(r315_tagged("serifRM", r315_VSerif.dr(r459_xMidRight, r459_yBar + r315_HalfStroke, r1_mix(r315_Stroke, r315_VJut, 0.5))));
            return void 0;
        }));
        var r315_GhaynOverlayBar = function (r464_top) {
            var _r464_t0, _r464_t1;
            return r315_LetterBarOverlay.l(r315_xGammaBarLeft, r464_top * (1 - r315_OverlayPos));
        };
        r315_xn$derivecomposites$7Hrq("cyrl/Ghayn", 1170, "cyrl/Ghe", r315_GhaynOverlayBar(r315_CAP));
        r315_xn$derivecomposites$7Hrq("cyrl/ghayn.upright", null, "cyrl/ghe.upright", r315_GhaynOverlayBar(r315_XH));
        r315_xn$derivecomposites$7Hrq("cyrl/GheStrokeHook", 1274, "cyrl/GheHook", r315_GhaynOverlayBar(r315_CAP));
        r315_xn$derivecomposites$7Hrq("cyrl/gheStrokeHook.upright", null, "cyrl/gheHook.upright", r315_GhaynOverlayBar(r315_XH));
        var _r315_t14 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r315_BBS = _r315_t14.BBS;
        var r315_BBD = _r315_t14.BBD;
        var r315_BBBarLeft = _r315_t14.BBBarLeft;
        return r315_xn$GlyphSaveSink$2Lrc4b.save("mathbb/grek/Gamma", 8510, new r315_xn$Capture$2Lrc8.GlyphProc(function (r468_currentGlyph) {
            var _r468_t0, _r468_t1;
            r468_currentGlyph.include(r315_MarkSet.capital());
            r468_currentGlyph.include(r315_BBBarLeft(r315_xGammaBarLeft, 0, r315_CAP));
            r468_currentGlyph.include(r315_HBar.t(r315_xGammaBarLeft, r315_xGammaTopRight, r315_CAP, r315_BBS));
            return void 0;
        }));
    });
    return void 0;
});


