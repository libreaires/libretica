"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Lower-U-Group", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t10, _r313_t11, _r313_t12, _r313_tag13, _r313_t14, _r313_tag15, _r313_t16, _r313_tag17, _r313_t18, _r313_tag19, _r313_t20, _r313_tag21, _r313_t22, _r313_tag23, _r313_t24, _r313_tag25, _r313_t26, _r313_tag27, _r313_t28, _r313_tag29, _r313_t30, _r313_tag31, _r313_t32, _r313_tag33, _r313_t34, _r313_tag35, _r313_t36, _r313_tag37, _r313_t38, _r313_tag39, _r313_t40, _r313_tag41, _r313_t42, _r313_tag43, _r313_t44, _r313_tag45, _r313_t46, _r313_tag47, _r313_t48, _r313_tag49, _r313_t50, _r313_tag51, _r313_t52, _r313_tag53;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Jut = _r313_t1.Jut;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_FlipAround = _r313_t5.FlipAround;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_nShoulder = _r313_t7.nShoulder;
        var r313_uBowl = _r313_t7.uBowl;
        var r313_SerifFrame = _r313_t7.SerifFrame;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Armenian-Shared-Shapes"].resolve();
        var r313_ArmHBar = _r313_t8.ArmHBar;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-M"].resolve();
        var r313_SmallMArches = _r313_t9.SmallMArches;
        var r313_barPos = r313_XH / 2;
        var r313_highBarPos = r313_XH;
        var r313_jut = r313_Jut;
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/turnayb", 1376, new r313_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
                var r323_sf, _r323_t0, _r323_t1;
                var r323_df = r323_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                r323_currentGlyph.include(r323_df.markSet.e());
                r323_currentGlyph.include(r313_SmallMArches(r323_df, r313_XH, 0, 0, 0));
                if (r313_SLAB) {
                    r323_sf = r313_SerifFrame.fromDf(r323_df, r313_XH, 0);
                    r323_currentGlyph.include(r323_sf.lt.outer);
                    r323_currentGlyph.include(r313_para.isItalic ? r323_sf.rb.outer : r323_sf.enoughSpaceForFullSerifs ? new r313_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                        var _r330_t0, _r330_t1;
                        r330_currentGlyph.include(r323_sf.lb.full, true, true);
                        r330_currentGlyph.include(r323_sf.mb.full);
                        r330_currentGlyph.include(r323_sf.rb.full);
                        return void 0;
                    }) : new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                        var _r335_t0, _r335_t1;
                        r335_currentGlyph.include(r323_sf.lb.outer, true, true);
                        r335_currentGlyph.include(r323_sf.rb.outer);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/ayb", 1377, new r313_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                var r342_sf, _r342_t0, _r342_t1;
                var r342_df = r342_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                r342_currentGlyph.include(r342_df.markSet.e());
                r342_currentGlyph.include(r313_SmallMArches(r342_df, r313_XH, 0, 0, 0));
                r342_currentGlyph.include(r313_FlipAround(r342_df.middle, r313_XH / 2));
                if (r313_SLAB) {
                    r342_sf = r313_SerifFrame.fromDf(r342_df, r313_XH, 0);
                    r342_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                        var _r349_t0, _r349_t1;
                        r349_currentGlyph.include(r342_sf.lt.outer, true, true);
                        r349_currentGlyph.include(r342_sf.rb.outer);
                        return void 0;
                    }));
                    if (!r313_para.isItalic && r342_sf.enoughSpaceForFullSerifs) r342_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                        var _r354_t0, _r354_t1;
                        r354_currentGlyph.include(r342_sf.mt.left, true, true);
                        r354_currentGlyph.include(r342_sf.rt.inner);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/ben", 1378, new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                var r361_sf, _r361_t0, _r361_t1;
                var r361_df = r361_currentGlyph.include(r313_DivFrame(1));
                r361_currentGlyph.include(r361_df.markSet.p());
                r361_currentGlyph.include(r313_VBar.l(r361_df.leftSB, r313_Descender, r313_XH, r361_df.mvs));
                var r361_barPosB = r313_barPos - r361_df.mvs / 2;
                r361_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r361_barPosB), new r313_xn$NamedParameterPair$2Lrc9b("left", r361_df.leftSB + r313_HSwToV(r361_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r361_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r361_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r361_df.shoulderFine)));
                r361_currentGlyph.include(r313_ArmHBar.normal(r361_df).base());
                if (r313_SLAB) {
                    r361_sf = r313_SerifFrame.fromDf(r361_df, r313_XH, r313_Descender);
                    r361_currentGlyph.include(r361_sf.lt.outer);
                    if (!r313_para.isItalic) r361_currentGlyph.include(r361_sf.lb.fullSide);
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/da", 1380, new r313_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
                var r379_sf, r379_sf2, _r379_t0, _r379_t1;
                var r379_df = r379_currentGlyph.include(r313_DivFrame(1));
                r379_currentGlyph.include(r379_df.markSet.p());
                r379_currentGlyph.include(r313_VBar.l(r379_df.leftSB, 0, r313_XH, r379_df.mvs));
                r379_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r313_Descender), new r313_xn$NamedParameterPair$2Lrc9b("left", r379_df.leftSB + r313_HSwToV(r379_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r379_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r379_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r379_df.shoulderFine)));
                r379_currentGlyph.include(r313_ArmHBar.right(r379_df).base());
                if (r313_SLAB) {
                    r379_sf = r313_SerifFrame.fromDf(r379_df, r313_XH, 0);
                    r379_sf2 = r313_SerifFrame.fromDf(r379_df, r313_XH, r313_Descender);
                    r379_currentGlyph.include(r379_sf.lt.outer);
                    r379_currentGlyph.include(r313_para.isItalic ? r379_sf2.rb.outer : new r313_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                        var _r394_t0, _r394_t1;
                        r394_currentGlyph.include(r379_sf.lb.full, true, true);
                        r394_currentGlyph.include(r379_sf2.rb.fullSide);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/ech", 1381, new r313_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
                var r401_sf, _r401_t0, _r401_t1;
                var r401_df = r401_currentGlyph.include(r313_DivFrame(1));
                r401_currentGlyph.include(r401_df.markSet.b());
                var r401_barPosT = r313_barPos + r401_df.mvs / 2;
                r401_currentGlyph.include(r313_uBowl.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_Ascender), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r401_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r401_df.rightSB - r313_HSwToV(r401_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r401_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r401_df.shoulderFine)));
                r401_currentGlyph.include(r313_VBar.r(r401_df.rightSB, 0, r401_barPosT, r401_df.mvs));
                r401_currentGlyph.include(r313_ArmHBar.normal(r401_df).high());
                if (r313_SLAB) {
                    r401_sf = r313_SerifFrame.fromDf(r401_df, r313_Ascender, 0);
                    r401_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r415_currentGlyph) {
                        var _r415_t0, _r415_t1;
                        r415_currentGlyph.include(r401_sf.lt.outer, true, true);
                        r415_currentGlyph.include(r401_sf.rb.outer);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/et", 1384, new r313_xn$Capture$2Lrc8.GlyphProc(function (r422_currentGlyph) {
                var r422_sf, r422_sf2, _r422_t0, _r422_t1;
                var r422_df = r422_currentGlyph.include(r313_DivFrame(1));
                r422_currentGlyph.include(r422_df.markSet.b());
                r422_currentGlyph.include(r313_VBar.l(r422_df.leftSB, r313_Descender, r313_XH, r422_df.mvs));
                r422_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r422_df.leftSB + r313_HSwToV(r422_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r422_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r422_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r422_df.shoulderFine)));
                r422_currentGlyph.include(r313_ArmHBar.normal(r422_df).desc());
                if (r313_SLAB) {
                    r422_sf = r313_SerifFrame.fromDf(r422_df, r313_XH, r313_Descender);
                    r422_sf2 = r313_SerifFrame.fromDf(r422_df, r313_XH, 0);
                    r422_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r436_currentGlyph) {
                        var _r436_t0, _r436_t1;
                        r436_currentGlyph.include(r422_sf.lt.outer, true, true);
                        r436_currentGlyph.include(r313_para.isItalic ? r422_sf2.rb.outer : r422_sf2.rb.full);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/ini", 1387, new r313_xn$Capture$2Lrc8.GlyphProc(function (r443_currentGlyph) {
                var r443_sf, r443_sf2, _r443_t0, _r443_t1;
                var r443_df = r443_currentGlyph.include(r313_DivFrame(1));
                r443_currentGlyph.include(r443_df.markSet.bp());
                r443_currentGlyph.include(r313_VBar.l(r443_df.leftSB, r313_Descender, r313_Ascender, r443_df.mvs));
                r443_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r443_df.leftSB + r313_HSwToV(r443_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r443_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r443_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r443_df.shoulderFine)));
                if (r313_SLAB) {
                    r443_sf = r313_SerifFrame.fromDf(r443_df, r313_Ascender, r313_Descender);
                    r443_sf2 = r313_SerifFrame.fromDf(r443_df, r313_XH, 0);
                    r443_currentGlyph.include(r443_sf.lt.outer);
                    r443_currentGlyph.include(r313_para.isItalic ? r443_sf2.rb.outer : new r313_xn$Capture$2Lrc8.GlyphProc(function (r457_currentGlyph) {
                        var _r457_t0, _r457_t1;
                        r457_currentGlyph.include(r443_sf.lb.fullSide, true, true);
                        r457_currentGlyph.include(r443_sf2.rb.full);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/xeh", 1389, new r313_xn$Capture$2Lrc8.GlyphProc(function (r464_currentGlyph) {
                var r464_sf, r464_sf2, _r464_t0, _r464_t1;
                var r464_df = r464_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                r464_currentGlyph.include(r464_df.markSet.bp());
                var r464_subDf = r464_df.slice(3, 2);
                r464_currentGlyph.include(r313_VBar.l(r464_df.leftSB, r313_Descender, r313_Ascender, r464_df.mvs));
                r464_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r313_XH / 2 - r313_TINY), new r313_xn$NamedParameterPair$2Lrc9b("left", r464_df.leftSB + r313_HSwToV(r464_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r464_df.middle + r313_HSwToV(0.5 * r464_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r464_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r464_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r464_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r464_subDf.smallArchDepthB)));
                r464_currentGlyph.include(r313_uBowl.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH / 2 + r313_TINY), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r464_df.middle - r313_HSwToV(0.5 * r464_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r464_df.rightSB - r313_HSwToV(r464_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r464_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r464_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r464_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r464_subDf.smallArchDepthB)));
                r464_currentGlyph.include(r313_VBar.r(r464_df.rightSB, 0, r313_XH, r464_df.mvs));
                if (r313_SLAB) {
                    r464_sf = r313_SerifFrame.fromDf(r464_df, r313_Ascender, r313_Descender);
                    r464_sf2 = r313_SerifFrame.fromDf(r464_df, r313_XH, 0);
                    r464_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r489_currentGlyph) {
                        var _r489_t0, _r489_t1;
                        r489_currentGlyph.include(r464_sf.lt.outer, true, true);
                        r489_currentGlyph.include(r464_sf2.rb.outer);
                        return void 0;
                    }));
                    if (!r313_para.isItalic) r464_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r494_currentGlyph) {
                        var _r494_t0, _r494_t1;
                        r494_currentGlyph.include(r464_sf.lb.fullSide, true, true);
                        r494_currentGlyph.include(r464_sf2.rt.inner);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/ken", 1391, new r313_xn$Capture$2Lrc8.GlyphProc(function (r501_currentGlyph) {
                var r501_sf, r501_sf2, _r501_t0, _r501_t1;
                var r501_df = r501_currentGlyph.include(r313_DivFrame(1));
                r501_currentGlyph.include(r501_df.markSet.bp());
                r501_currentGlyph.include(r313_uBowl.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_Ascender), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r501_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r501_df.rightSB - r313_HSwToV(r501_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r501_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r501_df.shoulderFine)));
                r501_currentGlyph.include(r313_VBar.r(r501_df.rightSB, r313_Descender, r313_XH, r501_df.mvs));
                if (r313_SLAB) {
                    r501_sf = r313_SerifFrame.fromDf(r501_df, r313_Ascender, 0);
                    r501_sf2 = r313_SerifFrame.fromDf(r501_df, r313_XH, r313_Descender);
                    r501_currentGlyph.include(r501_sf.lt.outer);
                    r501_currentGlyph.include(r313_para.isItalic ? r501_sf2.rb.outer : new r313_xn$Capture$2Lrc8.GlyphProc(function (r515_currentGlyph) {
                        var _r515_t0, _r515_t1;
                        r515_currentGlyph.include(r501_sf2.rt.inner, true, true);
                        r515_currentGlyph.include(r501_sf2.rb.fullSide);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/ho", 1392, new r313_xn$Capture$2Lrc8.GlyphProc(function (r522_currentGlyph) {
                var r522_sf, _r522_t0, _r522_t1;
                var r522_df = r522_currentGlyph.include(r313_DivFrame(1));
                r522_currentGlyph.include(r522_df.markSet.b());
                r522_currentGlyph.include(r313_VBar.l(r522_df.leftSB, 0, r313_Ascender, r522_df.mvs));
                r522_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r522_df.leftSB + r313_HSwToV(r522_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r522_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r522_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r522_df.shoulderFine)));
                if (r313_SLAB) {
                    r522_sf = r313_SerifFrame.fromDf(r522_df, r313_Ascender, 0);
                    r522_currentGlyph.include(r522_sf.lt.outer);
                    r522_currentGlyph.include(r313_para.isItalic ? r522_sf.rb.outer : new r313_xn$Capture$2Lrc8.GlyphProc(function (r536_currentGlyph) {
                        var _r536_t0, _r536_t1;
                        r536_currentGlyph.include(r522_sf.lb.full, true, true);
                        r536_currentGlyph.include(r522_sf.rb.full);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/ghat", 1394, new r313_xn$Capture$2Lrc8.GlyphProc(function (r543_currentGlyph) {
                var r543_sf, _r543_t0, _r543_t1;
                var r543_df = r543_currentGlyph.include(r313_DivFrame(1));
                r543_currentGlyph.include(r543_df.markSet.p());
                r543_currentGlyph.include(r313_VBar.l(r543_df.leftSB, 0, r313_XH, r543_df.mvs));
                r543_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", r313_Descender), new r313_xn$NamedParameterPair$2Lrc9b("left", r543_df.leftSB + r313_HSwToV(r543_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r543_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r543_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r543_df.shoulderFine)));
                r543_currentGlyph.include(r313_ArmHBar.right(r543_df).desc());
                if (r313_SLAB) {
                    r543_sf = r313_SerifFrame.fromDf(r543_df, r313_XH, 0);
                    r543_currentGlyph.include(r543_sf.lt.outer);
                    if (!r313_para.isItalic) r543_currentGlyph.include(r543_sf.lb.full);
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/men", 1396, new r313_xn$Capture$2Lrc8.GlyphProc(function (r561_currentGlyph) {
                var r561_sf, r561_sf2, _r561_t0, _r561_t1;
                var r561_df = r561_currentGlyph.include(r313_DivFrame(1));
                r561_currentGlyph.include(r561_df.markSet.b());
                r561_currentGlyph.include(r313_uBowl.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r561_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r561_df.rightSB - r313_HSwToV(r561_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r561_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r561_df.shoulderFine)));
                r561_currentGlyph.include(r313_VBar.r(r561_df.rightSB, 0, r313_Ascender, r561_df.mvs));
                r561_currentGlyph.include(r313_ArmHBar.right(r561_df).asc());
                if (r313_SLAB) {
                    r561_sf = r313_SerifFrame.fromDf(r561_df, r313_XH, 0);
                    r561_sf2 = r313_SerifFrame.fromDf(r561_df, r313_Ascender, 0);
                    r561_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r575_currentGlyph) {
                        var _r575_t0, _r575_t1;
                        r575_currentGlyph.include(r561_sf.lt.outer, true, true);
                        r575_currentGlyph.include(r561_sf2.rb.outer);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/nu", 1398, new r313_xn$Capture$2Lrc8.GlyphProc(function (r582_currentGlyph) {
                var r582_sf, _r582_t0, _r582_t1;
                var r582_df = r582_currentGlyph.include(r313_DivFrame(1));
                r582_currentGlyph.include(r582_df.markSet.b());
                r582_currentGlyph.include(r313_uBowl.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_Ascender), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r582_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r582_df.rightSB - r313_HSwToV(r582_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r582_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r582_df.shoulderFine)));
                r582_currentGlyph.include(r313_VBar.r(r582_df.rightSB, 0, r313_XH, r582_df.mvs));
                r582_currentGlyph.include(r313_ArmHBar.left(r582_df).asc());
                if (r313_SLAB) {
                    r582_sf = r313_SerifFrame.fromDf(r582_df, r313_XH, 0);
                    r582_currentGlyph.include(r582_sf.rb.outer);
                    if (!r313_para.isItalic) r582_currentGlyph.include(r582_sf.rt.inner);
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/vo", 1400, new r313_xn$Capture$2Lrc8.GlyphProc(function (r600_currentGlyph) {
                var r600_sf, _r600_t0, _r600_t1;
                var r600_df = r600_currentGlyph.include(r313_DivFrame(1));
                r600_currentGlyph.include(r600_df.markSet.e());
                r600_currentGlyph.include(r313_VBar.l(r600_df.leftSB, 0, r313_XH, r600_df.mvs));
                r600_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r600_df.leftSB + r313_HSwToV(r600_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r600_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r600_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r600_df.shoulderFine)));
                if (r313_SLAB) {
                    r600_sf = r313_SerifFrame.fromDf(r600_df, r313_XH, 0);
                    r600_currentGlyph.include(r600_sf.lt.outer);
                    r600_currentGlyph.include(r313_para.isItalic ? r600_sf.rb.outer : new r313_xn$Capture$2Lrc8.GlyphProc(function (r614_currentGlyph) {
                        var _r614_t0, _r614_t1;
                        r614_currentGlyph.include(r600_sf.lb.full, true, true);
                        r614_currentGlyph.include(r600_sf.rb.full);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/peh", 1402, new r313_xn$Capture$2Lrc8.GlyphProc(function (r621_currentGlyph) {
                var r621_sf, _r621_t0, _r621_t1;
                var r621_df = r621_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                r621_currentGlyph.include(r621_df.markSet.p());
                r621_currentGlyph.include(r313_SmallMArches(r621_df, r313_XH, 0, 0, 0));
                r621_currentGlyph.include(r313_FlipAround(r621_df.middle, r313_XH / 2));
                r621_currentGlyph.include(r313_VBar.r(r621_df.rightSB, r313_Descender, r313_XH, r621_df.mvs));
                if (r313_SLAB) {
                    r621_sf = r313_SerifFrame.fromDf(r621_df, r313_XH, r313_Descender);
                    r621_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r629_currentGlyph) {
                        var _r629_t0, _r629_t1;
                        r629_currentGlyph.include(r621_sf.lt.outer, true, true);
                        r629_currentGlyph.include(r313_para.isItalic ? r621_sf.rb.outer : r621_sf.rb.fullSide);
                        return void 0;
                    }));
                    if (!r313_para.isItalic && r621_sf.enoughSpaceForFullSerifs) r621_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r634_currentGlyph) {
                        var _r634_t0, _r634_t1;
                        r634_currentGlyph.include(r621_sf.mt.left, true, true);
                        r634_currentGlyph.include(r621_sf.rt.inner);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/seh", 1405, new r313_xn$Capture$2Lrc8.GlyphProc(function (r641_currentGlyph) {
                var r641_sf, _r641_t0, _r641_t1;
                var r641_df = r641_currentGlyph.include(r313_DivFrame(1));
                r641_currentGlyph.include(r641_df.markSet.e());
                r641_currentGlyph.include(r313_uBowl.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r641_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r641_df.rightSB - r313_HSwToV(r641_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r641_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r641_df.shoulderFine)));
                r641_currentGlyph.include(r313_VBar.r(r641_df.rightSB, 0, r313_XH, r641_df.mvs));
                if (r313_SLAB) {
                    r641_sf = r313_SerifFrame.fromDf(r641_df, r313_XH, 0);
                    r641_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r654_currentGlyph) {
                        var _r654_t0, _r654_t1;
                        r654_currentGlyph.include(r641_sf.lt.outer, true, true);
                        r654_currentGlyph.include(r641_sf.rb.outer);
                        return void 0;
                    }));
                    if (!r313_para.isItalic) r641_currentGlyph.include(r641_sf.rt.inner);
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/vew", 1406, new r313_xn$Capture$2Lrc8.GlyphProc(function (r662_currentGlyph) {
                var r662_sf, r662_sf2, _r662_t0, _r662_t1;
                var r662_df = r662_currentGlyph.include(r313_DivFrame(1));
                r662_currentGlyph.include(r662_df.markSet.bp());
                r662_currentGlyph.include(r313_uBowl.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r662_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r662_df.rightSB - r313_HSwToV(r662_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r662_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r662_df.shoulderFine)));
                r662_currentGlyph.include(r313_VBar.r(r662_df.rightSB, r313_Descender, r313_Ascender, r662_df.mvs));
                r662_currentGlyph.include(r313_ArmHBar.right(r662_df).desc());
                if (r313_SLAB) {
                    r662_sf = r313_SerifFrame.fromDf(r662_df, r313_XH, 0);
                    r662_sf2 = r313_SerifFrame.fromDf(r662_df, r313_Ascender, r313_Descender);
                    r662_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r676_currentGlyph) {
                        var _r676_t0, _r676_t1;
                        r676_currentGlyph.include(r662_sf.lt.outer, true, true);
                        r676_currentGlyph.include(r662_sf2.rt.inner);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/tiun", 1407, new r313_xn$Capture$2Lrc8.GlyphProc(function (r683_currentGlyph) {
                var r683_sf, _r683_t0, _r683_t1;
                var r683_df = r683_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                r683_currentGlyph.include(r683_df.markSet.e());
                var r683_subDf = r683_df.slice(3, 2);
                r683_currentGlyph.include(r313_uBowl.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r683_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r683_df.middle - r313_HSwToV(0.5 * r683_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r683_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r683_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r683_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r683_subDf.smallArchDepthB)));
                r683_currentGlyph.include(r313_VBar.m(r683_df.middle, 0, r313_XH, r683_df.mvs));
                r683_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r683_df.middle + r313_HSwToV(0.5 * r683_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r683_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r683_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r683_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r683_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r683_subDf.smallArchDepthB)));
                if (r313_SLAB) {
                    r683_sf = r313_SerifFrame.fromDf(r683_df, r313_XH, 0);
                    r683_currentGlyph.include(r683_sf.lt.outer);
                    r683_currentGlyph.include(r313_para.isItalic || !r683_sf.enoughSpaceForFullSerifs ? r683_sf.rb.outer : new r313_xn$Capture$2Lrc8.GlyphProc(function (r708_currentGlyph) {
                        var _r708_t0, _r708_t1;
                        r708_currentGlyph.include(r683_sf.mt.left, true, true);
                        r708_currentGlyph.include(r683_sf.mb.right);
                        r708_currentGlyph.include(r683_sf.rb.full);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/reh", 1408, new r313_xn$Capture$2Lrc8.GlyphProc(function (r716_currentGlyph) {
                var r716_sf, r716_sf2, _r716_t0, _r716_t1;
                var r716_df = r716_currentGlyph.include(r313_DivFrame(1));
                r716_currentGlyph.include(r716_df.markSet.b());
                r716_currentGlyph.include(r313_VBar.l(r716_df.leftSB, r313_Descender, r313_XH, r716_df.mvs));
                r716_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r716_df.leftSB + r313_HSwToV(r716_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r716_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r716_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r716_df.shoulderFine)));
                if (r313_SLAB) {
                    r716_sf = r313_SerifFrame.fromDf(r716_df, r313_XH, r313_Descender);
                    r716_sf2 = r313_SerifFrame.fromDf(r716_df, r313_XH, 0);
                    r716_currentGlyph.include(r716_sf.lt.outer);
                    r716_currentGlyph.include(r313_para.isItalic ? r716_sf2.rb.outer : new r313_xn$Capture$2Lrc8.GlyphProc(function (r730_currentGlyph) {
                        var _r730_t0, _r730_t1;
                        r730_currentGlyph.include(r716_sf.lb.fullSide, true, true);
                        r730_currentGlyph.include(r716_sf2.rb.full);
                        return void 0;
                    }));
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/piur", 1411, new r313_xn$Capture$2Lrc8.GlyphProc(function (r737_currentGlyph) {
                var r737_sf, r737_sf2, _r737_t0, _r737_t1;
                var r737_df = r737_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleMM, 3));
                r737_currentGlyph.include(r737_df.markSet.bp());
                var r737_subDf = r737_df.slice(3, 2);
                r737_currentGlyph.include(r313_uBowl.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r737_df.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r737_df.middle - r313_HSwToV(0.5 * r737_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r737_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r737_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r737_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r737_subDf.smallArchDepthB)));
                r737_currentGlyph.include(r313_VBar.m(r737_df.middle, r313_Descender, r313_Ascender, r737_df.mvs));
                r737_currentGlyph.include(r313_nShoulder.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_XH), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r737_df.middle + r313_HSwToV(0.5 * r737_df.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("right", r737_df.rightSB), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r737_df.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r737_df.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r737_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r737_subDf.smallArchDepthB)));
                if (r313_SLAB) {
                    r737_sf = r313_SerifFrame.fromDf(r737_df, r313_XH, 0);
                    r737_sf2 = r313_SerifFrame.fromDf(r737_df, r313_Ascender, r313_Descender);
                    r737_currentGlyph.include(new r313_xn$Capture$2Lrc8.GlyphProc(function (r761_currentGlyph) {
                        var _r761_t0, _r761_t1;
                        r761_currentGlyph.include(r737_sf.lt.outer, true, true);
                        r761_currentGlyph.include(r737_sf2.mt.left);
                        r761_currentGlyph.include(r313_para.isItalic || !r737_sf.enoughSpaceForFullSerifs ? r737_sf.rb.outer : r737_sf.rb.full);
                        return void 0;
                    }));
                    if (!r313_para.isItalic) r737_currentGlyph.include(r737_sf2.mb.fullCenter);
                }
                return void 0;
            }));
        })();
        return (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/ew", 1415, new r313_xn$Capture$2Lrc8.GlyphProc(function (r770_currentGlyph) {
                var r770_sf, r770_sf2, _r770_t0, _r770_t1;
                var r770_df = r770_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 1));
                r770_currentGlyph.include(r770_df.markSet.b());
                var r770_subDf = r313_DivFrame(0.75 * r313_para.advanceScaleM, 2);
                r770_currentGlyph.include(r313_uBowl.shape(new r313_xn$NamedParameterPair$2Lrc9b("top", r313_Ascender), new r313_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r313_xn$NamedParameterPair$2Lrc9b("left", r770_subDf.leftSB), new r313_xn$NamedParameterPair$2Lrc9b("right", r770_subDf.rightSB - r313_HSwToV(r770_subDf.mvs)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r770_subDf.mvs), new r313_xn$NamedParameterPair$2Lrc9b("fine", r770_subDf.shoulderFine), new r313_xn$NamedParameterPair$2Lrc9b("ada", r770_subDf.smallArchDepthA), new r313_xn$NamedParameterPair$2Lrc9b("adb", r770_subDf.smallArchDepthB)));
                r770_currentGlyph.include(r313_VBar.r(r770_subDf.rightSB, 0, r313_XH, r770_subDf.mvs));
                r770_currentGlyph.include(r313_HBar.b(r770_subDf.rightSB - r313_HSwToV(0.5 * r770_subDf.mvs), r770_df.rightSB, 0, r770_subDf.mvs));
                if (r313_SLAB) {
                    r770_sf = r313_SerifFrame.fromDf(r770_subDf, r313_Ascender, 0);
                    r770_currentGlyph.include(r770_sf.lt.outer);
                    if (!r313_para.isItalic) {
                        r770_sf2 = r313_SerifFrame.fromDf(r770_subDf, r313_XH, 0);
                        r770_currentGlyph.include(r770_sf2.rt.inner);
                    }
                }
                return void 0;
            }));
        })();
    });
    return void 0;
});


