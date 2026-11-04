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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-B", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Body, r313_Serifs, r313_doST, _r313_t13, _r313_t15, _r313_t16, _r313_t17, _r313_tag18;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Translate = _r313_t1.Translate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_VJut = _r313_t1.VJut;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_DToothlessRise = _r313_t1.DToothlessRise;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_archv = _r313_t2.archv;
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
        var r313_tagged = _r313_t5.tagged;
        var r313_OShapeOutline = _r313_t5.OShapeOutline;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$derivemultipartglyphs$7Hrq65 = _r313_t6["derive-multi-part-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t7.LeaningAnchor;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t8.CreateAccentedComposition;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_OBarLeft = _r313_t9.OBarLeft;
        var r313_TopHook = _r313_t9.TopHook;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LetterBarOverlay = _r313_t10.LetterBarOverlay;
        var r313_PalatalHook = _r313_t10.PalatalHook;
        var r313_ToothedBody = function (r320_yTop) {
            var _r320_t0, _r320_t1;
            return r313_union(r313_OBarLeft.shape(), r313_VBar.l(r313_SB, 0, r320_yTop));
        };
        var r313_BottomCutBody = function (r321_yTop) {
            var _r321_t0, _r321_t1;
            return r313_union(r313_OBarLeft.shape(), r313_VBar.l(r313_SB, r313_HalfStroke, r321_yTop), r313_xn$spirooutline$1aao(r313_corner(r313_SB, 0), r313_corner(r313_SB, r313_HalfStroke), r313_corner(r313_SB + r313_HSwToV(r313_Stroke), r313_HalfStroke)));
        };
        var r313_FlatBottomBody = function (r322_yTop) {
            var _r322_t0, _r322_t1;
            return r313_union(r313_OBarLeft.toothlessCorner(new r313_xn$NamedParameterPair$2Lrc9b("rise", 0)), r313_VBar.l(r313_SB, 0, r322_yTop));
        };
        var r313_ToothlessCornerBody = function (r324_yTop) {
            var _r324_t0, _r324_t1;
            return r313_union(r313_OBarLeft.toothlessCorner(), r313_VBar.l(r313_SB, r313_DToothlessRise, r324_yTop));
        };
        var r313_ToothlessRoundedBody = function (r325_yTop) {
            var _r325_t0, _r325_t1;
            return r313_OBarLeft.toothlessRounded(new r313_xn$NamedParameterPair$2Lrc9b("yTerminal", r325_yTop));
        };
        var r313_LTSerifs = function () {
            var _r327_t0, _r327_t1;
            return r313_tagged("serifLT", r313_HSerif.lt(r313_SB, r313_Ascender, r313_SideJut));
        };
        var r313_LBSerifs = function () {
            var _r328_t0, _r328_t1;
            return r313_tagged("serifLB", r313_HSerif.lb(r313_SB, 0, r313_SideJut));
        };
        var r313_FullSerifs = function () {
            var _r329_t0, _r329_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                var _r331_t0, _r331_t1;
                r331_currentGlyph.include(r313_LTSerifs(), true, true);
                r331_currentGlyph.include(r313_LBSerifs());
                return void 0;
            });
        };
        var r313_BConfig = r1_SuffixCfg.weave({
            "": r313_ToothedBody,
            "bottomCut": r313_BottomCutBody,
            "flatBottom": r313_FlatBottomBody,
            "toothlessCorner": r313_ToothlessCornerBody,
            "toothlessRounded": r313_ToothlessRoundedBody
        }, {
            "serifless": [r313_xn$noshape$3cah, false],
            "motionSerifed": [r313_LTSerifs, true],
            "bottomSerifed": [r313_LBSerifs, false],
            "serifed": [r313_FullSerifs, true]
        });
        var _r313_t11 = Object.entries(r313_BConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_Body = _r313_t13[1][0];
            r313_Serifs = _r313_t13[1][1][0];
            r313_doST = _r313_t13[1][1][1];
            _r313_t13[1][1];
            _r313_t13[1];
            (function () {
                var r336_yOverlay = r1_mix(r313_XH, r313_Ascender - (r313_doST ? r313_Stroke : 0), 0.5);
                r313_xn$GlyphSaveSink$2Lrc4b.save("b." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                    var _r339_t0, _r339_t1;
                    r339_currentGlyph.include(r313_MarkSet.b());
                    r339_currentGlyph.include(r313_Body(r313_Ascender));
                    r339_currentGlyph.include(r313_Serifs());
                    r339_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r313_SB));
                    r339_currentGlyph.setBaseAnchor("overlayOnExtension", r313_SB + r313_HSwToV(r313_HalfStroke), r336_yOverlay);
                    r339_currentGlyph.setBaseAnchor("overlay", r313_Middle, r313_XH / 2);
                    r339_currentGlyph.setBaseAnchor("strike", r313_Middle, r313_XH / 2);
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("bStroke." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                    var _r349_t0, _r349_t1;
                    r349_currentGlyph.include(r313_xn$referglyph$1aao("b." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r349_currentGlyph.include(r313_LetterBarOverlay.l.in(r313_SB, r313_XH, r313_Ascender - (r313_doST ? r313_Stroke : 0)));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("bSlash." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                    var _r354_t0, _r354_t1;
                    r354_currentGlyph.include(r313_xn$referglyph$1aao("b." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r354_currentGlyph.include(r313_dispiro(r313_widths.center(r313_OverlayStroke), r313_flat(r1_mix(r313_SB, 0, 0.7), r336_yOverlay - 0.1 * (r313_Ascender - 0)), r313_curl(r1_mix(r313_SB, r313_RightSB, 0.625), r336_yOverlay + 0.05 * (r313_Ascender - 0))));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("latn/be." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                    var _r359_t0, _r359_t1;
                    r359_currentGlyph.include(r313_MarkSet.b());
                    r359_currentGlyph.include(r313_Body(r313_Ascender));
                    r359_currentGlyph.include(r313_Serifs());
                    var r359_xTopRight = r1_mix(r313_SB, r313_RightSB, 0.9);
                    r359_currentGlyph.include(r313_HBar.t(r313_SB - r313_O, r359_xTopRight, r313_Ascender));
                    if (r313_doST) r359_currentGlyph.include(r313_VSerif.dr(r359_xTopRight, r313_Ascender, Math.min(r313_VJut, r1_mix(r313_Stroke, r313_Ascender - r313_XH, 0.5))));
                    r359_currentGlyph.include(r313_LeaningAnchor.Above.At(r1_mix(r313_SB, r359_xTopRight, 0.5)));
                    return void 0;
                }));
                return !r313_doST ? r313_xn$GlyphSaveSink$2Lrc4b.save("bHookTop." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                    var _r368_t0, _r368_t1;
                    r368_currentGlyph.include(r313_MarkSet.b());
                    r368_currentGlyph.include(r313_Body(r313_XH));
                    r368_currentGlyph.include(r313_Serifs());
                    r368_currentGlyph.include(r313_TopHook.toRight.lBarInner(r313_SB, r313_XH / 2, r313_Ascender));
                    r368_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r313_SB));
                    return void 0;
                })) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("b", "b");
        r313_xn$linkreducedvariant$5sIl8("b/sansSerif", "b", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("bStroke", 384, new r313_xn$NamedParameterPair$2Lrc9b("follow", "b"));
        r313_CreateAccentedComposition("bBar", null, "b", "hStrike");
        r313_xn$selectvariant$7Hrq("bSlash", 9250, new r313_xn$NamedParameterPair$2Lrc9b("follow", "b"));
        r313_xn$selectvariant$7Hrq("latn/be", 387, new r313_xn$NamedParameterPair$2Lrc9b("follow", "b"));
        r313_xn$selectvariant$7Hrq("bHookTop", 595);
        r313_xn$derivecomposites$7Hrq("bPalatalHook", 7552, "b", r313_PalatalHook.r(new r313_xn$NamedParameterPair$2Lrc9b("x", r1_mix(r313_Arch["adjust-x"].bot(r313_Middle), r313_RightSB, 0.75)), new r313_xn$NamedParameterPair$2Lrc9b("y", 0), new r313_xn$NamedParameterPair$2Lrc9b("yAttach", r1_mix(r313_O, r313_SmallArchDepthA, r313_archv.yFromX(0.75)))));
        r313_xn$derivemultipartglyphs$7Hrq65("bDot", 7683, ["b", "dotAbove"], function (r380_srcs, r380_gr) {
            var _r380_t0, _r380_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                var _r382_t1, _r382_t2;
                var _r382_t0 = r380_srcs;
                var r382_base = _r382_t0[0];
                var r382_mark = _r382_t0[1];
                r382_currentGlyph.include(r313_xn$referglyph$1aao(r382_mark));
                r382_currentGlyph.include(r313_Translate(r313_Width + r313_HSwToV(r313_HalfStroke), 0));
                r382_currentGlyph.include(r313_xn$referglyph$1aao(r382_base), r313_AS_BASE);
                r382_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r313_Middle));
                return void 0;
            });
        });
        var _r313_t14 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t14.BBS;
        var r313_BBD = _r313_t14.BBD;
        var r313_BBBarLeft = _r313_t14.BBBarLeft;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/b", 120147, new r313_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
            var _r390_t0, _r390_t1;
            r390_currentGlyph.include(r313_MarkSet.b());
            r390_currentGlyph.include(r313_BBBarLeft(r313_SB, 0, r313_Ascender));
            r390_currentGlyph.include(r313_intersection(r313_OShapeOutline.NoOvershoot(r313_XH, 0, r313_SB + r313_BBD + r313_HSwToV(r313_BBS), r313_RightSB), r313_VBar.r(r313_RightSB - r313_BBD - r313_OX, 0, r313_XH, r313_BBS)));
            r390_currentGlyph.include(r313_OBarLeft.shape(new r313_xn$NamedParameterPair$2Lrc9b("left", r313_SB + r313_BBD), new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_BBS)));
            return void 0;
        }));
    });
    return void 0;
});


