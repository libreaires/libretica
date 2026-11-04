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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-H", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_fTailed, r313_Serifs, r313_fHasTopSerif, _r313_t15, _r313_t17, _r313_t18, _r313_t19, _r313_tag20;
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
        var r313_Translate = _r313_t1.Translate;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_O = _r313_t1.O;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_ShoulderFine = _r313_t1.ShoulderFine;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_xn$derivemultipartglyphs$7Hrq65 = _r313_t6["derive-multi-part-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markExtend = _r313_t7.markExtend;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r313_aboveMarkMid = _r313_t8.aboveMarkMid;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Below"].resolve();
        var r313_belowMarkMid = _r313_t9.belowMarkMid;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_LeaningAnchor = _r313_t10.LeaningAnchor;
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_RightwardTailedBar = _r313_t11.RightwardTailedBar;
        var r313_nShoulder = _r313_t11.nShoulder;
        var r313_CyrDescender = _r313_t11.CyrDescender;
        var _r313_t12 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_TopHook = _r313_t12.TopHook;
        var r313_PalatalHook = _r313_t12.PalatalHook;
        var r313_EngHook = _r313_t12.EngHook;
        var r313_RetroflexHook = _r313_t12.RetroflexHook;
        var r313_SmallHTopLeftSerif = function (r322_tailed, r322_hookTop) {
            var _r322_t0, _r322_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var _r324_t0, _r324_t1;
                if (!r322_hookTop) r324_currentGlyph.include(r313_tagged("serifLT", r313_HSerif.lt(r313_SB, r313_Ascender, r313_SideJut)));
                return void 0;
            });
        };
        var r313_SmallHSerifs = function (r326_tailed, r326_hookTop) {
            var _r326_t0, _r326_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                var _r328_t0, _r328_t1;
                r328_currentGlyph.include(r313_SmallHTopLeftSerif(r326_tailed, r326_hookTop));
                r328_currentGlyph.include(r313_tagged("serifLB", r313_HSerif.mb(r313_SB + r313_HSwToV(r313_HalfStroke), 0, r313_Jut)));
                if (!r326_tailed) r328_currentGlyph.include(r313_tagged("serifRB", r313_HSerif.mb(r313_RightSB - r313_HSwToV(r313_HalfStroke), 0, r313_Jut)));
                return void 0;
            });
        };
        var r313_SmallHMotionSerifs = function (r332_tailed, r332_hookTop) {
            var _r332_t0, _r332_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                var _r334_t0, _r334_t1;
                r334_currentGlyph.include(r313_SmallHTopLeftSerif(r332_tailed, r332_hookTop));
                if (!r332_tailed) r334_currentGlyph.include(r313_tagged("serifRB", r313_HSerif.rb(r313_RightSB, 0, r313_SideJut)));
                return void 0;
            });
        };
        r313_HBar.mOverlay = function (r337_fHasTopSerif) {
            var _r337_t0, _r337_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                var _r339_t0, _r339_t1;
                var r339_barSpaceTop = r313_Ascender - (r337_fHasTopSerif ? r313_Stroke : 0);
                var r339_s = Math.min(r313_OverlayStroke, 0.625 * (r339_barSpaceTop - r313_XH));
                var r339_xOverlayStart = r1_mix(r313_SB, 0, 0.7);
                var r339_xOverlayEnd = r1_mix(r313_SB, r313_RightSB, 0.5);
                var r339_yOverlay = r1_mix(r313_XH, r339_barSpaceTop, 0.45) - r339_s / 2;
                r339_currentGlyph.include(r313_dispiro(r313_widths.lhs(r339_s), r313_corner(r339_xOverlayStart, r339_yOverlay), r313_corner(r313_SB + r313_HSwToV(r313_HalfStroke), r339_yOverlay)));
                r339_currentGlyph.include(r313_dispiro(r313_widths.lhs(r313_OverlayStroke), r313_corner(r313_SB + r313_HSwToV(r313_HalfStroke), r339_yOverlay), r313_corner(r339_xOverlayEnd, r339_yOverlay)));
                return void 0;
            });
        };
        var r313_HConfig = r1_SuffixCfg.weave({
            "straight": false,
            "tailed": true
        }, {
            "serifless": [null, false],
            "serifed": [r313_SmallHSerifs, true],
            "motionSerifed": [r313_SmallHMotionSerifs, true],
            "topLeftSerifed": [r313_SmallHTopLeftSerif, true]
        });
        var _r313_t13 = Object.entries(r313_HConfig)[Symbol.iterator]();
        var _r313_t14 = void 0;
        while (!(_r313_t14 = _r313_t13.next()).done) {
            _r313_t15 = _r313_t14.value;
            r313_suffix = _r313_t15[0];
            r313_fTailed = _r313_t15[1][0];
            r313_Serifs = _r313_t15[1][1][0];
            r313_fHasTopSerif = _r313_t15[1][1][1];
            _r313_t15[1][1];
            _r313_t15[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("h." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                    var _r347_t0, _r347_t1;
                    r347_currentGlyph.include(r313_MarkSet.b());
                    r347_currentGlyph.setBaseAnchor("overlay", r313_Middle, r313_XH / 2);
                    r347_currentGlyph.setBaseAnchor("strike", r313_Middle, r313_XH / 2);
                    r347_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r313_SB));
                    r347_currentGlyph.include(r313_VBar.l(r313_SB, 0, r313_Ascender));
                    r347_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("left", r313_SB + r313_HSwToV(r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("right", r313_RightSB), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r313_fTailed ? r313_XH - r313_SmallArchDepthB + r313_O : 0)));
                    if (r313_fTailed) r347_currentGlyph.include(r313_RightwardTailedBar(r313_RightSB, 0, r313_XH - r313_SmallArchDepthB));
                    if (r313_Serifs) r347_currentGlyph.include(r313_Serifs(r313_fTailed, false));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("hStroke." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                    var _r361_t0, _r361_t1;
                    r361_currentGlyph.include(r313_xn$referglyph$1aao("h." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r361_currentGlyph.include(r313_HBar.mOverlay(r313_fHasTopSerif));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("hHookTop." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                    var _r366_t0, _r366_t1;
                    r366_currentGlyph.include(r313_MarkSet.b());
                    r366_currentGlyph.setBaseAnchor("overlay", r313_Middle, r313_XH / 2);
                    r366_currentGlyph.setBaseAnchor("strike", r313_Middle, r313_XH / 2);
                    r366_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r313_SB));
                    r366_currentGlyph.include(r313_TopHook.toRight.lBarInner(r313_SB, 0, r313_Ascender));
                    r366_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("left", r313_SB + r313_HSwToV(r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("right", r313_RightSB), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r313_fTailed ? r313_XH - r313_SmallArchDepthB + r313_O : 0)));
                    if (r313_fTailed) r366_currentGlyph.include(r313_RightwardTailedBar(r313_RightSB, 0, r313_XH - r313_SmallArchDepthB));
                    if (r313_Serifs) r366_currentGlyph.include(r313_Serifs(r313_fTailed, true));
                    return void 0;
                }));
                return !r313_fTailed ? (r313_xn$GlyphSaveSink$2Lrc4b.save("heng." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                    var _r380_t0, _r380_t1;
                    r380_currentGlyph.include(r313_MarkSet.bp());
                    r380_currentGlyph.setBaseAnchor("overlay", r313_Middle, r313_XH / 2);
                    r380_currentGlyph.setBaseAnchor("strike", r313_Middle, r313_XH / 2);
                    r380_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r313_SB));
                    r380_currentGlyph.include(r313_VBar.l(r313_SB, 0, r313_Ascender));
                    r380_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("left", r313_SB + r313_HSwToV(r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("right", r313_RightSB), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0)));
                    if (r313_Serifs) r380_currentGlyph.include(r313_Serifs(true, false));
                    r380_currentGlyph.include(r313_EngHook(r313_RightSB, 0, r313_Descender));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("hengStroke." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                    var _r394_t0, _r394_t1;
                    r394_currentGlyph.include(r313_xn$referglyph$1aao("heng." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r394_currentGlyph.include(r313_HBar.mOverlay(r313_fHasTopSerif));
                    return void 0;
                })), r313_xn$GlyphSaveSink$2Lrc4b.save("hengHookTop." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r399_currentGlyph) {
                    var _r399_t0, _r399_t1;
                    r399_currentGlyph.include(r313_MarkSet.bp());
                    r399_currentGlyph.setBaseAnchor("overlay", r313_Middle, r313_XH / 2);
                    r399_currentGlyph.setBaseAnchor("strike", r313_Middle, r313_XH / 2);
                    r399_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r313_SB));
                    r399_currentGlyph.include(r313_TopHook.toRight.lBarInner(r313_SB, 0, r313_Ascender));
                    r399_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("left", r313_SB + r313_HSwToV(r313_Stroke)), new r313_xn$NamedParameterPair$2Lrc9b("right", r313_RightSB), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0)));
                    if (r313_Serifs) r399_currentGlyph.include(r313_Serifs(true, true));
                    r399_currentGlyph.include(r313_EngHook(r313_RightSB, 0, r313_Descender));
                    return void 0;
                }))) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("h", "h");
        r313_xn$linkreducedvariant$5sIl8("h/sansSerif", "h", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("hStroke", 295, new r313_xn$NamedParameterPair$2Lrc9b("follow", "h"));
        r313_xn$selectvariant$7Hrq("hHookTop", 614);
        r313_xn$selectvariant$7Hrq("heng", 42791);
        r313_xn$selectvariant$7Hrq("cyrl/dje", 1106, new r313_xn$NamedParameterPair$2Lrc9b("follow", "heng"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "hengStroke"));
        r313_xn$selectvariant$7Hrq("hengHookTop", 615);
        r313_xn$linkreducedvariant$5sIl8("h/descBase", "h");
        r313_xn$derivecomposites$7Hrq("hDescender", 11368, "h/descBase", r313_CyrDescender.rSideJut(r313_RightSB, 0));
        r313_xn$derivecomposites$7Hrq("hPalatalHook", 42901, "h/descBase", r313_PalatalHook.rSideJut(r313_RightSB, 0));
        r313_xn$linkreducedvariant$5sIl8("hStroke/descBase", "hStroke", new r313_xn$NamedParameterPair$2Lrc9b("follow", "h/descBase"));
        r313_xn$derivecomposites$7Hrq("hStrokePalatalHook", 122674, "hStroke/descBase", r313_PalatalHook.rSideJut(r313_RightSB, 0));
        r313_alias("cyrl/tshe", 1115, "hStroke");
        r313_alias("cyrl/shha", 1211, "h");
        r313_alias("cyrl/shhaDescender", 1319, "hDescender");
        r313_alias("cyrl/hwe", 42645, "hHookTop");
        r313_xn$derivemultipartglyphs$7Hrq65("hDot", 7715, ["h", "dotAbove"], function (r415_srcs, r415_gr) {
            var _r415_t0, _r415_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r417_currentGlyph) {
                var _r417_t1, _r417_t2;
                var _r417_t0 = r415_srcs;
                var r417_base = _r417_t0[0];
                var r417_mark = _r417_t0[1];
                r417_currentGlyph.include(r313_xn$referglyph$1aao(r417_mark));
                r417_currentGlyph.include(r313_Translate(r313_Width + r313_HSwToV(r313_HalfStroke), 0));
                r417_currentGlyph.include(r313_xn$referglyph$1aao(r417_base), r313_AS_BASE, r313_ALSO_METRICS);
                r417_currentGlyph.include(r313_LeaningAnchor.Above.VBar.l(r313_Middle));
                return void 0;
            });
        });
        r313_xn$deriveglyphs$7Hrq("hCedilla", 7721, "h", function (r422_src, r422_gr) {
            var _r422_t0, _r422_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r424_currentGlyph) {
                var _r424_t0, _r424_t1;
                var r424_shift = r313_Width + r313_SB - r313_Middle + r313_HSwToV(r313_HalfStroke);
                r424_currentGlyph.include(r313_xn$referglyph$1aao("cedillaBelow"));
                r424_currentGlyph.include(r313_ApparentTranslate(r424_shift, 0));
                r424_currentGlyph.include(r313_xn$referglyph$1aao(r422_src));
                r424_currentGlyph.include(r313_MarkSet.bp());
                r424_currentGlyph.setBaseAnchor("belowBraceL", -r313_Middle + r424_shift - 0.5 * r313_markExtend, r313_belowMarkMid);
                r424_currentGlyph.setBaseAnchor("belowBraceR", -r313_Middle + r424_shift + 0.5 * r313_markExtend, r313_belowMarkMid);
                return void 0;
            });
        });
        var _r313_t16 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t16.BBS;
        var r313_BBD = _r313_t16.BBD;
        var r313_BBBarLeft = _r313_t16.BBBarLeft;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/h", 120153, new r313_xn$Capture$2Lrc8.GlyphProc(function (r434_currentGlyph) {
            var _r434_t0, _r434_t1;
            var r434_df = r434_currentGlyph.include(r313_DivFrame(1, 2));
            r434_currentGlyph.include(r434_df.markSet.e());
            var r434_bbs = r313_BBS;
            var r434_bbd = r313_BBD;
            r434_currentGlyph.include(r313_BBBarLeft(r434_df.leftSB, 0, r313_Ascender));
            r434_currentGlyph.include(r313_union(r313_HBar.b(r434_df.rightSB - r434_bbd, r434_df.rightSB, 0, r434_bbs), r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("stroke", r434_bbs), new r313_xn$NamedParameterPair$2Lrc9b("left", r434_df.leftSB + r434_bbd + r313_HSwToV(r434_bbs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r434_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine)), r313_intersection(r313_VBar.r(r434_df.rightSB - r434_bbd, 0, r313_XH, r434_bbs), r313_nShoulder.mask(new r313_xn$NamedParameterPair$2Lrc9b("stroke", r434_bbs), new r313_xn$NamedParameterPair$2Lrc9b("left", r434_df.leftSB + r434_bbd + r313_HSwToV(r434_bbs) + 1), new r313_xn$NamedParameterPair$2Lrc9b("right", r434_df.rightSB - 1), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH - 1), new r313_xn$NamedParameterPair$2Lrc9b("fine", r313_ShoulderFine)))));
            return void 0;
        }));
    });
    return void 0;
});


