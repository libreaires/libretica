"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/util/mask-bit";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_maskOffBits = _r1_t9.maskOffBits;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-AA-AO", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11, _r313_t12, _r313_tag13, _r313_t14, _r313_tag15, _r313_t16, _r313_tag17, _r313_t18, _r313_tag19;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_OX = _r313_t1.OX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskLeft = _r313_t5.MaskLeft;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$derivemultipartglyphs$7Hrq65 = _r313_t6["derive-multi-part-glyphs"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-AE-OE"].resolve();
        var r313_SubDfAndShift = _r313_t7.SubDfAndShift;
        (function () {
            var r318_prefix, r318_code, r318_adws, r318_mk, r318_height, _r318_t3, _r318_t5, _r318_t6, _r318_tag7;
            var _r318_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-A"].resolve();
            var r318_AShape = _r318_t0.AShape;
            var r318_AConfig = _r318_t0.AConfig;
            var r318_AHalfShape = function (r320_pShift, r320_df, r320_top, r320_fStraightBar, r320_slabKind) {
                var _r320_t1, _r320_t2;
                var _r320_t0 = r313_SubDfAndShift(r320_pShift, r320_df);
                var r320_subDf = _r320_t0[0];
                var r320_shift = _r320_t0[1];
                return r313_xn$withtransform$5sIl(r313_ApparentTranslate(r320_shift, 0), r318_AShape.Letter(r320_subDf, r320_fStraightBar, r320_slabKind, r320_top, r320_df.mvs));
            };
            var r318_AHalfShapeMask = function (r321_pShift, r321_df, r321_top, r321_fStraightBar, r321_slabKind) {
                var _r321_t1, _r321_t2;
                var _r321_t0 = r313_SubDfAndShift(r321_pShift, r321_df);
                var r321_subDf = _r321_t0[0];
                var r321_shift = _r321_t0[1];
                return r313_xn$withtransform$5sIl(r313_ApparentTranslate(r321_shift, 0), r318_AShape.Mask(r321_subDf, r321_fStraightBar, r321_top, r321_df.mvs));
            };
            var r318_xn$SLABNONE$5sIl = 0;
            var r318_xn$SLABTOP$5sIl = 1;
            var r318_xn$SLABLEFT$5sIl = 2;
            var r318_xn$SLABRIGHT$5sIl = 4;
            var r318_ALetters = {
                "": [42802, r313_para.advanceScaleMM, "capital", r313_CAP],
                "smcp": [null, r313_para.advanceScaleM, "e", r313_XH]
            };
            var _r318_t1 = Object.entries(r318_ALetters)[Symbol.iterator]();
            var _r318_t2 = void 0;
            var _r318_t4 = !(_r318_t2 = _r318_t1.next()).done;
            while (_r318_t4) {
                _r318_t3 = _r318_t2.value;
                r318_prefix = _r318_t3[0];
                r318_code = _r318_t3[1][0];
                r318_adws = _r318_t3[1][1];
                r318_mk = _r318_t3[1][2];
                r318_height = _r318_t3[1][3];
                _r318_t3[1];
                _r318_t5 = (function () {
                    var r324_suffix, r324_bodyShape, r324_slabKind, _r324_t2, _r324_t3, _r324_tag4;
                    var _r324_t0 = Object.entries(r318_AConfig)[Symbol.iterator]();
                    var _r324_t1 = void 0;
                    while (!(_r324_t1 = _r324_t0.next()).done) {
                        _r324_t2 = _r324_t1.value;
                        r324_suffix = _r324_t2[0];
                        r324_bodyShape = _r324_t2[1][0];
                        r324_slabKind = _r324_t2[1][1];
                        _r324_t2[1];
                        (function () {
                            var r327_skLeft = r1_maskOffBits(r324_slabKind, r318_xn$SLABRIGHT$5sIl);
                            var r327_skRight = r1_maskOffBits(r324_slabKind, r318_xn$SLABLEFT$5sIl);
                            r313_xn$GlyphSaveSink$2Lrc4b.save("" + r318_prefix + "AA/left." + r324_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                                var _r330_t0, _r330_t1;
                                var r330_df = r330_currentGlyph.include(r313_DivFrame(r318_adws, 3.5));
                                r330_currentGlyph.include(r330_df.markSet[r318_mk]());
                                r330_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                                r330_currentGlyph.include(r318_AHalfShape(0, r330_df, r318_height, r324_bodyShape, r327_skLeft));
                                return void 0;
                            }));
                            r313_xn$GlyphSaveSink$2Lrc4b.save("" + r318_prefix + "AA/left/mask." + r324_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                                var _r337_t0, _r337_t1;
                                var r337_df = r337_currentGlyph.include(r313_DivFrame(r318_adws, 3.5));
                                r337_currentGlyph.include(r337_df.markSet[r318_mk]());
                                r337_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                                r337_currentGlyph.include(r318_AHalfShapeMask(0, r337_df, r318_height, r324_bodyShape, r327_skLeft));
                                return void 0;
                            }));
                            r313_xn$GlyphSaveSink$2Lrc4b.save("" + r318_prefix + "AA/right." + r324_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                                var _r344_t0, _r344_t1;
                                var r344_df = r313_DivFrame(r318_adws, 3.5);
                                r344_currentGlyph.setWidth(0);
                                r344_currentGlyph.include(r344_df.markSet[r318_mk]());
                                r344_currentGlyph.setMarkAnchor("cvDecompose", 0, 0, 0, 0);
                                r344_currentGlyph.include(r318_AHalfShape(1, r344_df, r318_height, r324_bodyShape, r327_skRight));
                                return void 0;
                            }));
                            r313_xn$GlyphSaveSink$2Lrc4b.save("" + r318_prefix + "AA/right/mask." + r324_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
                                var _r351_t0, _r351_t1;
                                var r351_df = r313_DivFrame(r318_adws, 3.5);
                                r351_currentGlyph.setWidth(0);
                                r351_currentGlyph.include(r351_df.markSet[r318_mk]());
                                r351_currentGlyph.setMarkAnchor("cvDecompose", 0, 0, 0, 0);
                                r351_currentGlyph.include(r318_AHalfShapeMask(1, r351_df, r318_height, r324_bodyShape, r327_skRight));
                                return void 0;
                            }));
                            return !r318_prefix ? (r313_xn$GlyphSaveSink$2Lrc4b.save("AU/A." + r324_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                                var _r358_t0, _r358_t1;
                                var r358_df = r358_currentGlyph.include(r313_DivFrame(r318_adws, 3.5));
                                var r358_subDf = r358_df.slice(3, 2);
                                r358_currentGlyph.include(r318_AShape.LetterBottomRightRemoved(r358_subDf, r324_bodyShape, r324_slabKind, r313_CAP, r358_df.mvs));
                                return void 0;
                            })), r313_xn$GlyphSaveSink$2Lrc4b.save("AU/A/mask." + r324_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r363_currentGlyph) {
                                var _r363_t0, _r363_t1;
                                var r363_df = r363_currentGlyph.include(r313_DivFrame(r318_adws, 3.5));
                                var r363_subDf = r363_df.slice(3, 2);
                                r363_currentGlyph.include(r313_union(r313_MaskAbove(r318_AShape.BarPos(r324_bodyShape, r324_slabKind, r313_CAP) - r363_df.mvs), r313_MaskLeft(r363_subDf.width / 2)));
                                r363_currentGlyph.include(r318_AShape.LetterBottomRightRemoved(r363_subDf, r324_bodyShape, r324_slabKind, r313_CAP, r363_df.mvs));
                                return void 0;
                            }))) : void 0;
                        })();
                    }
                    r313_xn$selectvariant$7Hrq("" + r318_prefix + "AA/left", new r313_xn$NamedParameterPair$2Lrc9b("follow", "A"));
                    r313_xn$selectvariant$7Hrq("" + r318_prefix + "AA/left/mask", new r313_xn$NamedParameterPair$2Lrc9b("follow", "A"));
                    r313_xn$selectvariant$7Hrq("" + r318_prefix + "AA/right", new r313_xn$NamedParameterPair$2Lrc9b("follow", "A"));
                    r313_xn$selectvariant$7Hrq("" + r318_prefix + "AA/right/mask", new r313_xn$NamedParameterPair$2Lrc9b("follow", "A"));
                    return r313_xn$derivemultipartglyphs$7Hrq65("" + r318_prefix + "AA", r318_code, ["" + r318_prefix + "AA/left", "" + r318_prefix + "AA/left/mask", "" + r318_prefix + "AA/right", "" + r318_prefix + "AA/right/mask"], function (r371_srcs, r371_gr) {
                        var _r371_t0, _r371_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                            var _r373_t1, _r373_t2;
                            var r373_df = r313_DivFrame(r318_adws, 3.5);
                            var r373_topSerifGap = Math.max(0.1 * (r373_df.rightSB - r373_df.leftSB), r313_AdviceStroke(6));
                            var _r373_t0 = r371_srcs;
                            var r373_left = _r373_t0[0];
                            var r373_leftMask = _r373_t0[1];
                            var r373_right = _r373_t0[2];
                            var r373_rightMask = _r373_t0[3];
                            r373_currentGlyph.include(r313_xn$referglyph$1aao(r373_left), r313_AS_BASE, r313_ALSO_METRICS);
                            r373_currentGlyph.include(r313_difference(r313_xn$referglyph$1aao(r373_right), r313_xn$referglyph$1aao(r373_leftMask), r313_difference(r313_intersection(r313_MaskAbove(r318_height - r313_Stroke), r313_xn$withtransform$5sIl(r313_ApparentTranslate(r373_topSerifGap, 0), r313_xn$referglyph$1aao(r373_leftMask))), r313_xn$withtransform$5sIl(r313_ApparentTranslate(r313_OX - r313_TINY, 0), r313_xn$referglyph$1aao(r373_rightMask)))));
                            return void 0;
                        });
                    });
                })();
                _r318_t4 = !(_r318_t2 = _r318_t1.next()).done;
            }
            return _r318_t5;
        })();
        (function () {
            return r313_xn$derivemultipartglyphs$7Hrq65("AO", 42804, ["AA/left", "AA/left/mask", "AO/O"], function (r378_srcs, r378_gr) {
                var _r378_t0, _r378_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                    var _r380_t1, _r380_t2;
                    var r380_df = r313_DivFrame(r313_para.advanceScaleMM, 3.5);
                    var r380_topSerifGap = Math.max(0.1 * (r380_df.rightSB - r380_df.leftSB), r313_AdviceStroke(6));
                    var _r380_t0 = r378_srcs;
                    var r380_left = _r380_t0[0];
                    var r380_leftMask = _r380_t0[1];
                    var r380_right = _r380_t0[2];
                    r380_currentGlyph.include(r313_xn$referglyph$1aao(r380_left), r313_AS_BASE, r313_ALSO_METRICS);
                    r380_currentGlyph.include(r313_difference(r313_xn$referglyph$1aao(r380_right), r313_xn$referglyph$1aao(r380_leftMask)));
                    return void 0;
                });
            });
        })();
        (function () {
            var r384_suffix, r384_Base, r384_Slabs, r384_fLTSlab, _r384_t4, _r384_t5, _r384_tag6;
            var _r384_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-U"].resolve();
            var r384_UShapeGroup = _r384_t0.UShapeGroup;
            var r384_CapitalUConfigT = _r384_t0.CapitalUConfigT;
            var r384_df = r313_DivFrame(r313_para.advanceScaleMM, 3.5);
            var _r384_t1 = r313_SubDfAndShift(1, r384_df);
            var r384_subDf = _r384_t1[0];
            var r384_shift = _r384_t1[1];
            var r384_sg = r384_UShapeGroup(r384_subDf.archDepthA, r384_subDf.archDepthB);
            var _r384_t2 = Object.entries(r384_CapitalUConfigT(r384_sg))[Symbol.iterator]();
            var _r384_t3 = void 0;
            while (!(_r384_t3 = _r384_t2.next()).done) {
                _r384_t4 = _r384_t3.value;
                r384_suffix = _r384_t4[0];
                r384_Base = _r384_t4[1][0][0];
                _r384_t4[1][0];
                r384_Slabs = _r384_t4[1][1][0];
                r384_fLTSlab = _r384_t4[1][1][1];
                _r384_t4[1][1];
                _r384_t4[1];
                (function () {
                    return r313_xn$GlyphSaveSink$2Lrc4b.save("AU/U." + r384_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
                        var _r391_t0, _r391_t1;
                        r391_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(r384_shift, 0), r313_union(r384_Base(r384_subDf, r313_CAP, r384_df.mvs), r384_Slabs(r384_subDf, r313_CAP, r384_df.mvs))));
                        return void 0;
                    }));
                })();
            }
            return r313_xn$selectvariant$7Hrq("AU/U");
        })();
        (function () {
            r313_xn$selectvariant$7Hrq("AU/A", new r313_xn$NamedParameterPair$2Lrc9b("follow", "A"));
            r313_xn$selectvariant$7Hrq("AU/A/mask", new r313_xn$NamedParameterPair$2Lrc9b("follow", "A"));
            return r313_xn$derivemultipartglyphs$7Hrq65("AU", 42806, ["AU/A", "AU/A/mask", "AU/U"], function (r397_srcs, r397_gr) {
                var _r397_t0, _r397_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r399_currentGlyph) {
                    var _r399_t2, _r399_t3;
                    var r399_df = r399_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3.5));
                    var _r399_t0 = r313_SubDfAndShift(1, r399_df);
                    var r399_subDf = _r399_t0[0];
                    var r399_shift = _r399_t0[1];
                    r399_currentGlyph.include(r399_df.markSet.capital());
                    var _r399_t1 = r397_srcs;
                    var r399_left = _r399_t1[0];
                    var r399_mask = _r399_t1[1];
                    var r399_right = _r399_t1[2];
                    r399_currentGlyph.include(r313_xn$referglyph$1aao(r399_left));
                    r399_currentGlyph.include(r313_difference(r313_xn$referglyph$1aao(r399_right), r313_intersection(r313_xn$referglyph$1aao(r399_mask), r313_MaskLeft(r399_subDf.width / 2 + r399_shift))));
                    return void 0;
                });
            });
        })();
        return (function () {
            var r405_suffix, r405_fGap, r405_slabs, r405_stroke1, r405_stroke2, r405_desc, r405_serifShape, r405_fMaskBase, _r405_t6, _r405_t9, _r405_t10, _r405_tag11, _r405_t12, _r405_tag13;
            var _r405_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
            var r405_SerifFrame = _r405_t0.SerifFrame;
            var r405_WithSerifOverflowMask = _r405_t0.WithSerifOverflowMask;
            var _r405_t1 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-P"].resolve();
            var r405_PShape = _r405_t1.PShape;
            var r405_PConfig = _r405_t1.PConfig;
            var _r405_t2 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-X"].resolve();
            var r405_XConfig = _r405_t2.XConfig;
            var r405_XLetterForm = _r405_t2.XLetterForm;
            var r405_XSerifs = _r405_t2.XSerifs;
            var _r405_t3 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-AE-OE"].resolve();
            var r405_BuildRha = _r405_t3.BuildRha;
            var _r405_t4 = Object.entries(r405_PConfig)[Symbol.iterator]();
            var _r405_t5 = void 0;
            while (!(_r405_t5 = _r405_t4.next()).done) {
                _r405_t6 = _r405_t5.value;
                r405_suffix = _r405_t6[0];
                r405_fGap = _r405_t6[1][0];
                r405_slabs = _r405_t6[1][1];
                _r405_t6[1];
                (function () {
                    var r412_fSlabBot = r405_slabs && r405_slabs !== r405_PShape.SlabMotion;
                    return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Rha/Er." + r405_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r415_currentGlyph) {
                        var _r415_t0, _r415_t1;
                        var r415_df = r415_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
                        r415_currentGlyph.include(r415_df.markSet.capital());
                        r415_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                        var r415_subDf = r415_df.sliceFine(3, 2, 0.575);
                        r415_currentGlyph.include(r313_difference(r405_PShape(r313_CAP, new r313_xn$NamedParameterPair$2Lrc9b("df", r415_subDf), new r313_xn$NamedParameterPair$2Lrc9b("slab", r405_slabs)), r405_fGap ? r405_PShape.OpenGap(new r313_xn$NamedParameterPair$2Lrc9b("df", r415_subDf), new r313_xn$NamedParameterPair$2Lrc9b("top", r313_CAP), new r313_xn$NamedParameterPair$2Lrc9b("bot", r412_fSlabBot ? r415_df.mvs : 0)) : r313_xn$noshape$3cah()));
                        return void 0;
                    }));
                })();
            }
            var _r405_t7 = Object.entries(r405_XConfig)[Symbol.iterator]();
            var _r405_t8 = void 0;
            while (!(_r405_t8 = _r405_t7.next()).done) {
                _r405_t9 = _r405_t8.value;
                r405_suffix = _r405_t9[0];
                r405_stroke1 = _r405_t9[1][0][0];
                r405_stroke2 = _r405_t9[1][0][1];
                _r405_t9[1][0];
                r405_desc = _r405_t9[1][1][0];
                _r405_t9[1][1];
                r405_serifShape = _r405_t9[1][2][0];
                r405_fMaskBase = _r405_t9[1][2][1];
                _r405_t9[1][2];
                _r405_t9[1];
                (function () {
                    var r427_letterShape = function (r428_df, r428_top, r428_bot, r428_turn, r428_tension) {
                        var _r428_t0, _r428_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
                            var r430_sf, r430___, _r430_t0, _r430_t1, _r430_t2;
                            var r430_lf = r405_XLetterForm(r428_df.bodyBox(r428_top, r428_bot), r405_stroke1, r405_stroke2, r428_turn, r428_tension, new r313_xn$NamedParameterPair$2Lrc9b("sw", r428_df.mvs));
                            r430_currentGlyph.include(r405_WithSerifOverflowMask(r405_fMaskBase, r428_df.bodyBox(r428_top, r428_bot), r430_lf.rightHalf(r405_fMaskBase)));
                            if (r405_serifShape) {
                                r430_sf = r405_SerifFrame.fromDf(r428_df, r428_top, r428_bot);
                                r430_currentGlyph.include((_r430_t0 = r405_serifShape, _r430_t0 === r405_XSerifs.Full ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r440_currentGlyph) {
                                    var _r440_t0, _r440_t1;
                                    r440_currentGlyph.include(r430_sf.rt.full, true, true);
                                    r440_currentGlyph.include(r430_sf.rb.full);
                                    return void 0;
                                }) : _r430_t0 === r405_XSerifs.BilateralMotion ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r437_currentGlyph) {
                                    var _r437_t0, _r437_t1;
                                    r437_currentGlyph.include(r430_sf.rb.outer, true, true);
                                    return void 0;
                                }) : (r430___ = _r430_t0, new r313_xn$Capture$2Lrc8.GlyphProc(function (r435_currentGlyph) {
                                    var _r435_t0, _r435_t1;
                                    return void 0;
                                }))));
                            }
                            return void 0;
                        });
                    };
                    return !r405_desc ? r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Rha/Kha." + r405_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r445_currentGlyph) {
                        var _r445_t0, _r445_t1;
                        var r445_df = r313_DivFrame(r313_para.advanceScaleM, 3);
                        r445_currentGlyph.setWidth(0);
                        r445_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                        r445_currentGlyph.include(r427_letterShape(r445_df, r313_CAP, 0, 0.1, 0.28));
                        return void 0;
                    })) : void 0;
                })();
            }
            r313_xn$selectvariant$7Hrq("cyrl/Rha/Er", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Er"));
            r313_xn$selectvariant$7Hrq("cyrl/Rha/Kha");
            return r313_xn$derivemultipartglyphs$7Hrq65("cyrl/Rha", 1302, ["cyrl/Rha/Er", "cyrl/Rha/Kha"], r405_BuildRha);
        })();
    });
    return void 0;
});


