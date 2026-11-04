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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Dzzhe-Zhwe", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t8, _r312_t9, _r312_t10, _r312_tag11, _r312_t12, _r312_tag13, _r312_t14, _r312_tag15;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_OX = _r312_t1.OX;
        var r312_Hook = _r312_t1.Hook;
        var r312_SHook = _r312_t1.SHook;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_SLAB = _r312_t1.SLAB;
        var r312_SideJut = _r312_t1.SideJut;
        var r312_StrokeWidthBlend = _r312_t1.StrokeWidthBlend;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_straight = _r312_t2.straight;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HBar = _r312_t5.HBar;
        var r312_xn$withtransform$5sIl = _r312_t5["with-transform"];
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_xn$derivecomposites$7Hrq = _r312_t6["derive-composites"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Ze"].resolve();
        var r312_CyrZe = _r312_t7.CyrZe;
        var r312_ZeConfig = _r312_t7.ZeConfig;
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r317_t0, _r317_t1;
            return {
                "SubDfDimBy4": r312_SubDfDimBy4
            };
        });
        var r312_SubDfDimBy4 = function (r318_pShift, r318_keeps, r318_df, r318__o) {
            var _r318_t0, _r318_t1;
            var r318_subDf = r318_df.slice(4, r318_keeps, r318__o);
            var r318_subDfFullShift = (r318_df.rightSB - r318_subDf.rightSB) / (4 - r318_keeps);
            var r318_shift = r318_pShift * r318_subDfFullShift;
            var r318_sw = r318_df.slice(4, 3, r318__o).adviceStroke(3.3);
            return {
                "subDf": r318_subDf,
                "shift": r318_shift,
                "sw": r318_sw
            };
        };
        (function () {
            var _r320_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
            var r320_ExtendBelowBaseAnchors = _r320_t0.ExtendBelowBaseAnchors;
            var _r320_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-De"].resolve();
            var r320_CyrDeShape = _r320_t1.CyrDeShape;
            var r320_CyrDeItalicShape = _r320_t1.CyrDeItalicShape;
            var r320_BottomExtension = _r320_t1.BottomExtension;
            var r320_CyrDzzheDeShape = function (r323_fCapital, r323_df, r323_top) {
                var _r323_t0, _r323_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                    var _r325_t1, _r325_t2;
                    var _r325_t0 = r312_SubDfDimBy4(0, 2, r323_df, r312_OX);
                    var r325_subDf = _r325_t0.subDf;
                    var r325_sw = _r325_t0.sw;
                    var r325_left = r325_subDf.leftSB + (r312_SLAB ? 0.5 : 0) * r312_SideJut;
                    r325_currentGlyph.include(r320_CyrDeShape(r323_fCapital, r323_top, r325_left, r325_subDf.rightSB, r325_sw));
                    return void 0;
                });
            };
            var r320_CyrDzzheDeItalicShape = function (r327_df) {
                var _r327_t0, _r327_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                    var _r329_t1, _r329_t2;
                    var _r329_t0 = r312_SubDfDimBy4(0, 2, r327_df, r312_OX);
                    var r329_subDf = _r329_t0.subDf;
                    var r329_sw = _r329_t0.sw;
                    r329_currentGlyph.include(r320_CyrDeItalicShape(r329_subDf, r329_sw));
                    return void 0;
                });
            };
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Dzzhe/left", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                var _r333_t0, _r333_t1;
                var r333_df = r333_currentGlyph.include(r312_DivFrame(r1_mix(1, r312_para.advanceScaleMM, 2), 3.5));
                r333_currentGlyph.include(r333_df.markSet.capital());
                r333_currentGlyph.include(r320_ExtendBelowBaseAnchors(r320_BottomExtension));
                r333_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                r333_currentGlyph.include(r320_CyrDzzheDeShape(true, r333_df, r312_CAP));
                return void 0;
            }));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/dzzhe.upright/left", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
                var _r341_t0, _r341_t1;
                var r341_df = r341_currentGlyph.include(r312_DivFrame(r1_mix(1, r312_para.advanceScaleM, 2), 3.5));
                r341_currentGlyph.include(r341_df.markSet.e());
                r341_currentGlyph.include(r320_ExtendBelowBaseAnchors(r320_BottomExtension));
                r341_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                r341_currentGlyph.include(r320_CyrDzzheDeShape(false, r341_df, r312_XH));
                return void 0;
            }));
            return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/dzzhe.italic/left", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                var _r349_t0, _r349_t1;
                var r349_df = r349_currentGlyph.include(r312_DivFrame(r1_mix(1, r312_para.advanceScaleM, 2), 3.5));
                r349_currentGlyph.include(r349_df.markSet.b());
                r349_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                r349_currentGlyph.include(r320_CyrDzzheDeItalicShape(r349_df));
                return void 0;
            }));
        })();
        (function () {
            var r355_suffix, r355_desc, r355_slabTop, r355_slabBot, _r355_t2, _r355_t4, _r355_t5, _r355_tag6;
            var r355_CyrZhweZeShape = function (r356_slabTop, r356_slabBot, r356_df, r356_top, r356_bot, r356_hook, r356_ada, r356_adb) {
                var _r356_t0, _r356_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                    var _r358_t1, _r358_t2;
                    var _r358_t0 = r312_SubDfDimBy4(0, 2, r356_df, r312_OX);
                    var r358_subDf = _r358_t0.subDf;
                    var r358_sw = _r358_t0.sw;
                    var r358_ze = r312_CyrZe(r356_slabTop, r356_slabBot, r356_top, r356_bot, new r312_xn$NamedParameterPair$2Lrc9b("left", r358_subDf.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r358_subDf.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("hook", r356_hook), new r312_xn$NamedParameterPair$2Lrc9b("stroke", r358_sw), new r312_xn$NamedParameterPair$2Lrc9b("xo", 0.33 * r312_OX), new r312_xn$NamedParameterPair$2Lrc9b("ada", r356_ada), new r312_xn$NamedParameterPair$2Lrc9b("adb", r356_adb));
                    r358_currentGlyph.include(r312_union(r358_ze.Shape(), r358_ze.AutoStartSerifL(), r358_ze.AutoEndSerifL()));
                    return void 0;
                });
            };
            var _r355_t0 = Object.entries(r312_ZeConfig)[Symbol.iterator]();
            var _r355_t1 = void 0;
            var _r355_t3 = !(_r355_t1 = _r355_t0.next()).done;
            while (_r355_t3) {
                _r355_t2 = _r355_t1.value;
                r355_suffix = _r355_t2[0];
                r355_desc = _r355_t2[1][0][0];
                _r355_t2[1][0];
                r355_slabTop = _r355_t2[1][1][0];
                r355_slabBot = _r355_t2[1][1][1];
                _r355_t2[1][1];
                _r355_t2[1];
                _r355_t4 = (function () {
                    return !r355_desc ? (r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Zhwe/left." + r355_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                        var _r372_t0, _r372_t1;
                        var r372_df = r372_currentGlyph.include(r312_DivFrame(r1_mix(1, r312_para.advanceScaleMM, 2), 3.5));
                        r372_currentGlyph.include(r372_df.markSet.capital());
                        r372_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                        r372_currentGlyph.include(r355_CyrZhweZeShape(r355_slabTop, r355_slabBot, r372_df, r312_CAP, 0, r312_Hook, r312_ArchDepthA, r312_ArchDepthB));
                        return void 0;
                    })), r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/zhwe/left." + r355_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
                        var _r379_t0, _r379_t1;
                        var r379_df = r379_currentGlyph.include(r312_DivFrame(r1_mix(1, r312_para.advanceScaleM, 2), 3.5));
                        r379_currentGlyph.include(r379_df.markSet.e());
                        r379_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                        r379_currentGlyph.include(r355_CyrZhweZeShape(r355_slabTop, r355_slabBot, r379_df, r312_XH, 0, r312_SHook, r312_SmallArchDepthA, r312_SmallArchDepthB));
                        return void 0;
                    }))) : void 0;
                })();
                _r355_t3 = !(_r355_t1 = _r355_t0.next()).done;
            }
            return _r355_t4;
        })();
        (function () {
            var r385_suffix, r385_legShape, r385_fSlab, r385_fMidSlab, _r385_t4, _r385_t6, _r385_t7, _r385_tag8;
            var _r385_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-De"].resolve();
            var r385_CyrDeItalicMask = _r385_t0.CyrDeItalicMask;
            var _r385_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Zhe"].resolve();
            var r385_Zhe = _r385_t1.Zhe;
            var r385_CyrRightZheShape = function (r388_legShape, r388_fSlab, r388_fMidSlab, r388_df, r388_top, r388_barLeft) {
                var _r388_t0, _r388_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                    var _r390_t1, _r390_t2;
                    var _r390_t0 = r312_SubDfDimBy4(1, 3, r388_df, r312_OX);
                    var r390_subDf = _r390_t0.subDf;
                    var r390_shift = _r390_t0.shift;
                    var r390_sw = _r390_t0.sw;
                    r390_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(r390_shift, 0), r385_Zhe.HalfShape(r388_legShape, r388_fSlab, r388_fMidSlab, r390_subDf, 0, r388_top, r388_top)));
                    r390_currentGlyph.include(r312_HBar.m(r388_barLeft, r390_shift + r390_subDf.middle, 0.5 * r388_top, r390_sw));
                    return void 0;
                });
            };
            var r385_DzzheLeft = function (r393_df) {
                var _r393_t1, _r393_t2;
                var _r393_t0 = r312_SubDfDimBy4(0, 2, r393_df, r312_OX);
                var r393_subDf = _r393_t0.subDf;
                var r393_sw = _r393_t0.sw;
                var r393_swInner = r312_AdviceStroke(2.75) * (r393_sw / r312_Stroke);
                return r1_mix(r393_subDf.leftSB, r393_subDf.rightSB, r312_StrokeWidthBlend(0.95, 0.96)) - r312_HSwToV(0.5 * r393_swInner);
            };
            var r385_ZhweZheShape = function (r394_legShape, r394_fSlab, r394_fMidSlab, r394_df, r394_top, r394_bot, r394_hook, r394_ada, r394_adb) {
                var _r394_t0, _r394_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r396_currentGlyph) {
                    var _r396_t1, _r396_t2;
                    var _r396_t0 = r312_SubDfDimBy4(0, 2, r394_df, r312_OX);
                    var r396_subDf = _r396_t0.subDf;
                    var r396_sw = _r396_t0.sw;
                    var r396_zeNoO = r312_CyrZe(0, 0, r394_top, r394_bot, new r312_xn$NamedParameterPair$2Lrc9b("left", r396_subDf.leftSB), new r312_xn$NamedParameterPair$2Lrc9b("right", r396_subDf.rightSB), new r312_xn$NamedParameterPair$2Lrc9b("hook", r394_hook), new r312_xn$NamedParameterPair$2Lrc9b("stroke", 0.5 * r396_sw), new r312_xn$NamedParameterPair$2Lrc9b("xo", 0), new r312_xn$NamedParameterPair$2Lrc9b("yo", 0), new r312_xn$NamedParameterPair$2Lrc9b("ada", r394_ada), new r312_xn$NamedParameterPair$2Lrc9b("adb", r394_adb));
                    r396_currentGlyph.include(r312_difference(r385_CyrRightZheShape(r394_legShape, r394_fSlab, r394_fMidSlab, r394_df, r394_top, r396_subDf.middle), r396_zeNoO.ShapeMask()));
                    return void 0;
                });
            };
            var r385_DzzheZheItalicShape = function (r406_legShape, r406_fSlab, r406_fMidSlab, r406_df, r406_top) {
                var _r406_t0, _r406_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r408_currentGlyph) {
                    var _r408_t1, _r408_t2;
                    var _r408_t0 = r312_SubDfDimBy4(0, 2, r406_df, r312_OX);
                    var r408_subDf = _r408_t0.subDf;
                    var r408_sw = _r408_t0.sw;
                    r408_currentGlyph.include(r312_difference(r385_CyrRightZheShape(r406_legShape, r406_fSlab, r406_fMidSlab, r406_df, r406_top, r408_subDf.middle), r385_CyrDeItalicMask(r408_subDf, r408_sw)));
                    return void 0;
                });
            };
            var r385_ZheConfig = {
                "straight": [r385_Zhe.StraightLegs, r312_SLAB, r312_SLAB],
                "curly": [r385_Zhe.CurlyLegs, r312_SLAB, r312_SLAB],
                "symmetricTouching": [r385_Zhe.TouchingLegs, r312_SLAB, r312_SLAB],
                "symmetricConnected": [r385_Zhe.ConnectingLegs, r312_SLAB, r312_SLAB],
                "cursive": [r385_Zhe.CursiveLegs, false, r312_SLAB]
            };
            var _r385_t2 = Object.entries(r385_ZheConfig)[Symbol.iterator]();
            var _r385_t3 = void 0;
            var _r385_t5 = !(_r385_t3 = _r385_t2.next()).done;
            while (_r385_t5) {
                _r385_t4 = _r385_t3.value;
                r385_suffix = _r385_t4[0];
                r385_legShape = _r385_t4[1][0];
                r385_fSlab = _r385_t4[1][1];
                r385_fMidSlab = _r385_t4[1][2];
                _r385_t4[1];
                _r385_t6 = (function () {
                    r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Dzzhe/right." + r385_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r415_currentGlyph) {
                        var _r415_t0, _r415_t1;
                        var r415_df = r415_currentGlyph.include(r312_DivFrame(r1_mix(1, r312_para.advanceScaleMM, 2), 3.5));
                        r415_currentGlyph.include(r415_df.markSet.capital());
                        r415_currentGlyph.include(r385_CyrRightZheShape(r385_legShape, r385_fSlab, r385_fMidSlab, r415_df, r312_CAP, r385_DzzheLeft(r415_df)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/dzzhe.upright/right." + r385_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r421_currentGlyph) {
                        var _r421_t0, _r421_t1;
                        var r421_df = r421_currentGlyph.include(r312_DivFrame(r1_mix(1, r312_para.advanceScaleM, 2), 3.5));
                        r421_currentGlyph.include(r421_df.markSet.e());
                        r421_currentGlyph.include(r385_CyrRightZheShape(r385_legShape, r385_fSlab, r385_fMidSlab, r421_df, r312_XH, r385_DzzheLeft(r421_df)));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/dzzhe.italic/right." + r385_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r427_currentGlyph) {
                        var _r427_t0, _r427_t1;
                        var r427_df = r427_currentGlyph.include(r312_DivFrame(r1_mix(1, r312_para.advanceScaleM, 2), 3.5));
                        r427_currentGlyph.include(r427_df.markSet.e());
                        r427_currentGlyph.include(r385_DzzheZheItalicShape(r385_legShape, r385_fSlab, r385_fMidSlab, r427_df, r312_XH));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Zhwe/right." + r385_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r433_currentGlyph) {
                        var _r433_t0, _r433_t1;
                        var r433_df = r433_currentGlyph.include(r312_DivFrame(r1_mix(1, r312_para.advanceScaleMM, 2), 3.5));
                        r433_currentGlyph.include(r433_df.markSet.capital());
                        r433_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                        r433_currentGlyph.include(r385_ZhweZheShape(r385_legShape, r385_fSlab, r385_fMidSlab, r433_df, r312_CAP, 0, r312_Hook, r312_ArchDepthA, r312_ArchDepthB));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/zhwe/right." + r385_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r440_currentGlyph) {
                        var _r440_t0, _r440_t1;
                        var r440_df = r440_currentGlyph.include(r312_DivFrame(r1_mix(1, r312_para.advanceScaleM, 2), 3.5));
                        r440_currentGlyph.include(r440_df.markSet.e());
                        r440_currentGlyph.setBaseAnchor("cvDecompose", 0, 0);
                        r440_currentGlyph.include(r385_ZhweZheShape(r385_legShape, r385_fSlab, r385_fMidSlab, r440_df, r312_XH, 0, r312_SHook, r312_SmallArchDepthA, r312_SmallArchDepthB));
                        return void 0;
                    }));
                })();
                _r385_t5 = !(_r385_t3 = _r385_t2.next()).done;
            }
            return _r385_t6;
        })();
        r312_xn$selectvariant$7Hrq("cyrl/Dzzhe/right", new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Zhe"));
        r312_xn$selectvariant$7Hrq("cyrl/dzzhe.upright/right", new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/zhe"));
        r312_xn$selectvariant$7Hrq("cyrl/dzzhe.italic/right", new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/zhe"));
        r312_xn$selectvariant$7Hrq("cyrl/Zhwe/right", new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Zhe"));
        r312_xn$selectvariant$7Hrq("cyrl/zhwe/right", new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/zhe"));
        r312_xn$selectvariant$7Hrq("cyrl/Zhwe/left", new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Zhwe/Ze"));
        r312_xn$selectvariant$7Hrq("cyrl/zhwe/left", new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/zhwe/ze"));
        r312_xn$derivecomposites$7Hrq("cyrl/Dzzhe", 1322, "cyrl/Dzzhe/left", "cyrl/Dzzhe/right");
        r312_xn$derivecomposites$7Hrq("cyrl/dzzhe.upright", null, "cyrl/dzzhe.upright/left", "cyrl/dzzhe.upright/right");
        r312_xn$derivecomposites$7Hrq("cyrl/dzzhe.italic", null, "cyrl/dzzhe.italic/left", "cyrl/dzzhe.italic/right");
        r312_xn$derivecomposites$7Hrq("cyrl/Zhwe", 42628, "cyrl/Zhwe/left", "cyrl/Zhwe/right");
        return r312_xn$derivecomposites$7Hrq("cyrl/zhwe", 42629, "cyrl/zhwe/left", "cyrl/zhwe/right");
    });
    return void 0;
});


