"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-D", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_fRound, r313_fSlabTop, r313_fSlabBot, _r313_t10, _r313_t12, _r313_t13, _r313_t14, _r313_tag15;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_ArchDepth = _r313_t1.ArchDepth;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_SideJut = _r313_t1.SideJut;
        var r313_ArchDepthAOf = _r313_t1.ArchDepthAOf;
        var r313_ArchDepthBOf = _r313_t1.ArchDepthBOf;
        var r313_YSmoothMidR = _r313_t1.YSmoothMidR;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_archv = _r313_t2.archv;
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
        var r313_tagged = _r313_t5.tagged;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_flatside = _r313_t5.flatside;
        var r313_Arch = _r313_t5.Arch;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_xn$deriveglyphs$7Hrq = _r313_t6["derive-glyphs"];
        var r313_xn$derivecomposites$7Hrq = _r313_t6["derive-composites"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LetterBarOverlay = _r313_t7.LetterBarOverlay;
        var r313_LeftHook = _r313_t7.LeftHook;
        var r313_DArcShapeT = function (r317_sink, r317_df, r317_top, r317_right, r317_offset, r317_sw, r317_fRound, r317_smooth) {
            var _r317_t0, _r317_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
                var _r319_t0, _r319_t1;
                var r319_mockWidth = r317_right + (r317_df.width - r317_df.rightSB);
                var r319_maxXSmoothWidth = r319_mockWidth - r317_df.leftSB * 2 - r313_HSwToV(r317_sw);
                var r319_dsmooth = r1_fallback(r317_smooth, r1_clamp(r317_sw * 1.5, r317_top / 2 - r313_TINY, r317_top / r313_CAP * r313_ArchDepth * 1.1));
                var r319_bsmooth = r1_clamp(r317_sw * 1.5, r319_maxXSmoothWidth, r319_mockWidth / r313_Width * r313_ArchDepth * 1.1);
                var r319_barchDepthRd = r1_clamp(r317_sw * 1.5, r319_maxXSmoothWidth, r319_mockWidth / r313_Width * r313_ArchDepth * 1.25);
                var r319_ada = r313_ArchDepthAOf(r319_dsmooth, r319_mockWidth);
                var r319_adb = r313_ArchDepthBOf(r319_dsmooth, r319_mockWidth);
                if (r317_fRound) r319_currentGlyph.include(r317_sink(r313_widths.rhs(r317_sw), (r317_offset ? r313_corner : r313_flat)(r317_df.leftSB - r313_O, r317_top - r317_offset, r313_heading(r313_Rightward)), r313_curl(r313_Arch["adjust-x"].top(r317_right - r319_barchDepthRd), r317_top - r317_offset), r313_archv(), r313_g4(r317_right - r313_OX - r317_offset, r313_YSmoothMidR(r317_top, 0, r319_ada, r319_adb)), r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r317_right - r319_barchDepthRd), r317_offset), (r317_offset ? r313_corner : r313_curl)(r317_df.leftSB - r313_O, r317_offset, r313_heading(r313_Leftward)))); else r319_currentGlyph.include(r317_sink(r313_widths.rhs(r317_sw), (r317_offset ? r313_corner : r313_flat)(r317_df.leftSB - r313_O, r317_top - r317_offset, r313_heading(r313_Rightward)), r313_curl(r313_Arch["adjust-x"].top(r317_right - r319_bsmooth), r317_top - r317_offset), r313_archv(), r313_flatside.rd(r317_right - r317_offset, 0, r317_top, r319_ada, r319_adb), r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r317_right - r319_bsmooth), r317_offset), (r317_offset ? r313_corner : r313_curl)(r317_df.leftSB - r313_O, r317_offset, r313_heading(r313_Leftward))));
                return void 0;
            });
        };
        var r313_DShape = function (r322_df, r322_top, r322_right, r322_fRound, r322_smooth, r322_slabTop, r322_slabBot) {
            var _r322_t0, _r322_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var _r324_t0, _r324_t1;
                r324_currentGlyph.include(r313_VBar.l(r322_df.leftSB, 0, r322_top, r322_df.mvs));
                r324_currentGlyph.include(r313_DArcShapeT(r313_dispiro, r322_df, r322_top, r322_right, 0, r322_df.mvs, r322_fRound, r322_smooth));
                if (r322_slabTop) r324_currentGlyph.include(r313_tagged("serifLT", r313_HSerif.lt(r322_df.leftSB, r322_top, r313_SideJut)));
                if (r322_slabBot) r324_currentGlyph.include(r313_tagged("serifLB", r313_HSerif.lb(r322_df.leftSB, 0, r313_SideJut)));
                return void 0;
            });
        };
        var r313_DConfig = r1_SuffixCfg.weave({
            "standard": false,
            "moreRounded": true
        }, {
            "serifless": [false, false],
            "unilateralSerifed": [true, false],
            "bilateralSerifed": [true, true]
        });
        var _r313_t8 = Object.entries(r313_DConfig)[Symbol.iterator]();
        var _r313_t9 = void 0;
        while (!(_r313_t9 = _r313_t8.next()).done) {
            _r313_t10 = _r313_t9.value;
            r313_suffix = _r313_t10[0];
            r313_fRound = _r313_t10[1][0];
            r313_fSlabTop = _r313_t10[1][1][0];
            r313_fSlabBot = _r313_t10[1][1][1];
            _r313_t10[1][1];
            _r313_t10[1];
            (function () {
                var r331_fMotion = r313_fSlabTop && !r313_fSlabBot;
                r313_xn$GlyphSaveSink$2Lrc4b.save("D." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                    var _r334_t0, _r334_t1;
                    var r334_df = r334_currentGlyph.include(r313_DivFrame(1));
                    r334_currentGlyph.include(r334_df.markSet.capital());
                    r334_currentGlyph.include(r313_DShape(r334_df, r313_CAP, r334_df.rightSB, r313_fRound, void 0, r313_fSlabTop, r313_fSlabBot));
                    return void 0;
                }));
                if (!r331_fMotion) r313_xn$GlyphSaveSink$2Lrc4b.save("Dhookleft." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                    var _r340_t0, _r340_t1;
                    r340_currentGlyph.include(r313_xn$referglyph$1aao("D." + r313_suffix), r313_AS_BASE, r313_ALSO_METRICS);
                    r340_currentGlyph.ejectTagged("serifLT");
                    r340_currentGlyph.include(r313_LeftHook(r313_SB, r313_CAP));
                    return void 0;
                }));
                if (r313_fRound) r313_xn$GlyphSaveSink$2Lrc4b.save("smcpD." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                    var _r346_t0, _r346_t1;
                    var r346_df = r346_currentGlyph.include(r313_DivFrame(1));
                    r346_currentGlyph.include(r346_df.markSet.e());
                    r346_currentGlyph.include(r313_DShape(r346_df, r313_XH, r346_df.rightSB, r313_fRound, r313_ArchDepth, r313_fSlabTop, r313_fSlabBot));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("romanFiveThousand." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                    var _r352_t0, _r352_t1;
                    var r352_df = r352_currentGlyph.include(r313_DivFrame(1, 3));
                    r352_currentGlyph.include(r352_df.markSet.capital());
                    r352_currentGlyph.include(r313_DShape(r352_df, r313_CAP, r352_df.rightSB, r313_fRound, void 0, r313_fSlabTop, r313_fSlabBot));
                    r352_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(0, r313_CAP * 0.2), r313_DShape(r352_df, r313_CAP * 0.6, r352_df.middle + r313_HSwToV(0.5 * r352_df.mvs), r313_fRound)));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("romanFiftyThousand." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                    var _r359_t0, _r359_t1;
                    var r359_df = r359_currentGlyph.include(r313_DivFrame(1, 4));
                    r359_currentGlyph.include(r359_df.markSet.capital());
                    var r359_innerDist = r359_df.rightSB - r359_df.leftSB - r313_HSwToV(4 * r359_df.mvs);
                    var r359_arcX1 = r359_df.leftSB + r359_innerDist * (1 / 3) + r313_HSwToV(2 * r359_df.mvs);
                    var r359_arcX2 = r359_df.leftSB + r359_innerDist * (2 / 3) + r313_HSwToV(3 * r359_df.mvs);
                    var r359_heightGap = r359_df.mvs + (r313_CAP - r359_df.mvs * 6) / 6;
                    r359_currentGlyph.include(r313_DShape(r359_df, r313_CAP, r359_df.rightSB, r313_fRound, void 0, r313_fSlabTop, r313_fSlabBot));
                    r359_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(0, r359_heightGap), r313_DShape(r359_df, r313_CAP - 2 * r359_heightGap, r359_arcX2, r313_fRound)));
                    r359_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(0, 2 * r359_heightGap), r313_DShape(r359_df, r313_CAP - 4 * r359_heightGap, r359_arcX1, r313_fRound)));
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("D", "D");
        r313_xn$selectvariant$7Hrq("romanFiveThousand", 8577, new r313_xn$NamedParameterPair$2Lrc9b("follow", "D"));
        r313_xn$selectvariant$7Hrq("romanFiftyThousand", 8583, new r313_xn$NamedParameterPair$2Lrc9b("follow", "D"));
        r313_xn$linkreducedvariant$5sIl8("D/sansSerif", "D", r1_MathSansSerif);
        r313_xn$deriveglyphs$7Hrq("Eth", 208, "D", function (r367_src, r367_gr) {
            var _r367_t0, _r367_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                var _r369_t0, _r369_t1;
                r369_currentGlyph.include(r313_xn$referglyph$1aao(r367_src), r313_AS_BASE, r313_ALSO_METRICS);
                r369_currentGlyph.include(r313_LetterBarOverlay.l.in(r313_SB, r313_Stroke, r313_CAP - r313_Stroke, new r313_xn$NamedParameterPair$2Lrc9b("space", [0, r313_RightSB - r313_HSwToV(r313_Stroke)])));
                return void 0;
            });
        });
        r313_alias("DStroke", 272, "Eth");
        r313_alias("africanD", 393, "Eth");
        r313_xn$selectvariant$7Hrq("Dhookleft", 394);
        r313_xn$derivecomposites$7Hrq("TauGallicum", 42951, "D", r313_HBar.m(r313_SB - r313_OX, r313_RightSB + r313_OX, r313_CAP / 2, r313_OverlayStroke));
        r313_xn$selectvariant$7Hrq("smcpD", 7429);
        r313_xn$deriveglyphs$7Hrq("smcpEth", 7430, "smcpD", function (r373_src, r373_gr) {
            var _r373_t0, _r373_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
                var _r375_t0, _r375_t1;
                r375_currentGlyph.include(r313_xn$referglyph$1aao(r373_src), r313_AS_BASE, r313_ALSO_METRICS);
                r375_currentGlyph.include(r313_LetterBarOverlay.l.in(r313_SB, r313_Stroke, r313_XH - r313_Stroke, new r313_xn$NamedParameterPair$2Lrc9b("space", [0, r313_RightSB - r313_HSwToV(r313_Stroke)])));
                return void 0;
            });
        });
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t11.BBS;
        var r313_BBD = _r313_t11.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/D", 120123, new r313_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
            var _r382_t0, _r382_t1;
            var r382_df = r382_currentGlyph.include(r313_DivFrame(1));
            r382_currentGlyph.include(r382_df.markSet.capital());
            r382_currentGlyph.include(r313_VBar.l(r382_df.leftSB, 0, r313_CAP, r313_BBS));
            r382_currentGlyph.include(r313_DArcShapeT(r313_dispiro, r382_df, r313_CAP, r382_df.rightSB, 0, r313_BBS, false));
            r382_currentGlyph.include(r313_intersection(r313_DArcShapeT(r313_xn$spirooutline$1aao, r382_df, r313_CAP, r382_df.rightSB, 1, r313_BBS, false), r313_union(r313_VBar.l(r382_df.leftSB + r313_BBD, 0, r313_CAP, r313_BBS), r313_VBar.r(r382_df.rightSB - r313_BBD - r313_OX, 0, r313_CAP, r313_BBS))));
            return void 0;
        }));
    });
    return void 0;
});


