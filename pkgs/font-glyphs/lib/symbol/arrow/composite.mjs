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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Arrow-Composite", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_Translate = _r312_t1.Translate;
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_AdviceStrokeInSpace = _r312_t1.AdviceStrokeInSpace;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_intersection = _r312_t4.intersection;
        var r312_difference = _r312_t4.difference;
        return (function () {
            var r315_FMosaicWide, r315_MosaicNameSuffix, r315_MosaicWidth, r315_MosaicWidthScalar, _r315_t3, _r315_t5, _r315_t6, _r315_tag7;
            var r315_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r315_t0 = r315_WidthKinds;
            var _r315_t1 = _r315_t0.length;
            var _r315_t2 = 0;
            var _r315_t4 = _r315_t2 < _r315_t1;
            while (_r315_t4) {
                _r315_t3 = _r315_t0[_r315_t2];
                r315_FMosaicWide = _r315_t3[0];
                r315_MosaicNameSuffix = _r315_t3[1];
                r315_MosaicWidth = _r315_t3[2];
                r315_MosaicWidthScalar = _r315_t3[3];
                (function () {
                    var _r318_t4, _r318_tag5, _r318_t6, _r318_tag7, _r318_t8, _r318_tag9, _r318_t10, _r318_t11, _r318_tag12;
                    var r318_MosaicDesiredWidth = r312_WideWidth1;
                    var r318_MosaicMiddle = r315_MosaicWidth / 2;
                    var r318_MosaicUnitWidth = r315_MosaicWidth / r315_MosaicWidthScalar;
                    var r318_MangleUnicode = function (r319_unicode, r319__desiredOverride) {
                        var _r319_t0, _r319_t1;
                        return r315_MosaicWidth === (r319__desiredOverride || r318_MosaicDesiredWidth) ? r319_unicode : void 0;
                    };
                    var r318_MangleName = function (r320_name) {
                        var _r320_t0, _r320_t1;
                        return r320_name + r315_MosaicNameSuffix;
                    };
                    var _r318_t0 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
                    var r318_MaskLeft = _r318_t0.MaskLeft;
                    var r318_MaskRight = _r318_t0.MaskRight;
                    var r318_xn$withtransform$5sIl = _r318_t0["with-transform"];
                    var r318_xn$cleargeometry$1aao = _r318_t0["clear-geometry"];
                    var _r318_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r318_xn$referglyph$1aao = _r318_t1["refer-glyph"];
                    var _r318_t2 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
                    var r318_ArrowDims = _r318_t2.ArrowDims;
                    var r318_ArrowT = _r318_t2.ArrowT;
                    var r318_MkArrowT = _r318_t2.MkArrowT;
                    var r318_dims = r318_ArrowDims(r315_MosaicWidth);
                    var r318_MkArrow = r318_MkArrowT(r318_dims);
                    var r318_Arrow = r318_ArrowT(r318_dims);
                    var _r318_t3 = r318_dims;
                    var r318_arrowWidth = _r318_t3.arrowWidth;
                    var r318_arrowTop = _r318_t3.arrowTop;
                    var r318_arrowBot = _r318_t3.arrowBot;
                    var r318_arrowMidX = _r318_t3.arrowMidX;
                    var r318_arrowSB = _r318_t3.arrowSB;
                    var r318_arrowRSB = _r318_t3.arrowRSB;
                    var r318_arrowSw = _r318_t3.arrowSw;
                    var r318_halfArrowSw = _r318_t3.halfArrowSw;
                    var r318_arrowHeadSize = _r318_t3.arrowHeadSize;
                    var r318_compactHeadSize = _r318_t3.compactHeadSize;
                    var r318_fine = _r318_t3.fine;
                    var r318_terminal = _r318_t3.terminal;
                    var r318_VRingRadius = r318_arrowHeadSize * 0.7;
                    var r318_HRingRadius = Math.min(r318_VRingRadius, r318_arrowWidth - 2 * r318_arrowHeadSize - 0.3 * r318_terminal);
                    var r318_VRingSw = r312_AdviceStrokeInSpace(r318_VRingRadius, 2.25);
                    var r318_HRingSw = r312_AdviceStrokeInSpace(r318_HRingRadius, 2.25);
                    var r318_ThinBarShape = function (r324_thinSw) {
                        var _r324_t0, _r324_t1;
                        return function (r325_x1, r325_y1, r325_x2, r325_y2, r325_size, r325__halfSw) {
                            var _r325_t0, _r325_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                                var _r327_t0, _r327_t1;
                                r327_currentGlyph.include(r318_Arrow.Bar.shape(r325_x1, r325_y1, r325_x2, r325_y2, 0.5 * r324_thinSw));
                                return void 0;
                            });
                        };
                    };
                    r318_MkArrow.single(r318_ThinBarShape(r318_HRingSw), r318_MangleName("thinArrowBarH"), null, r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid);
                    (function () {
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni219A"), r318_MangleUnicode(8602), new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                            var _r333_t0, _r333_t1;
                            r333_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowLeft")), true, true);
                            r333_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrSlashOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni219B"), r318_MangleUnicode(8603), new r312_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                            var _r338_t0, _r338_t1;
                            r338_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowRight")), true, true);
                            r338_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrSlashOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21AE"), r318_MangleUnicode(8622), new r312_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                            var _r343_t0, _r343_t1;
                            r343_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowLeftRight")), true, true);
                            r343_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrSlashOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21F7"), r318_MangleUnicode(8695), new r312_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                            var _r348_t0, _r348_t1;
                            r348_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowLeft")), true, true);
                            r348_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21F8"), r318_MangleUnicode(8696), new r312_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                            var _r353_t0, _r353_t1;
                            r353_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowRight")), true, true);
                            r353_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21F9"), r318_MangleUnicode(8697), new r312_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                            var _r358_t0, _r358_t1;
                            r358_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowLeftRight")), true, true);
                            r358_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21FA"), r318_MangleUnicode(8698), new r312_xn$Capture$2Lrc8.GlyphProc(function (r363_currentGlyph) {
                            var _r363_t0, _r363_t1;
                            r363_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowLeft")), true, true);
                            r363_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDblVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21FB"), r318_MangleUnicode(8699), new r312_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                            var _r368_t0, _r368_t1;
                            r368_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowRight")), true, true);
                            r368_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDblVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21FC"), r318_MangleUnicode(8700), new r312_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                            var _r373_t0, _r373_t1;
                            r373_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowLeftRight")), true, true);
                            r373_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDblVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21CD"), r318_MangleUnicode(8653), new r312_xn$Capture$2Lrc8.GlyphProc(function (r378_currentGlyph) {
                            var _r378_t0, _r378_t1;
                            r378_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dblArrowLeft")), true, true);
                            r378_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrSlashOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21CE"), r318_MangleUnicode(8654), new r312_xn$Capture$2Lrc8.GlyphProc(function (r383_currentGlyph) {
                            var _r383_t0, _r383_t1;
                            r383_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dblArrowLeftRight")), true, true);
                            r383_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrSlashOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21CF"), r318_MangleUnicode(8655), new r312_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
                            var _r388_t0, _r388_t1;
                            r388_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dblArrowRight")), true, true);
                            r388_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrSlashOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2908"), r318_MangleUnicode(10504), new r312_xn$Capture$2Lrc8.GlyphProc(function (r393_currentGlyph) {
                            var _r393_t0, _r393_t1;
                            r393_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowDown")), true, true);
                            r393_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrHStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2909"), r318_MangleUnicode(10505), new r312_xn$Capture$2Lrc8.GlyphProc(function (r398_currentGlyph) {
                            var _r398_t0, _r398_t1;
                            r398_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowUp")), true, true);
                            r398_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrHStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21DF"), r318_MangleUnicode(8671), new r312_xn$Capture$2Lrc8.GlyphProc(function (r403_currentGlyph) {
                            var _r403_t0, _r403_t1;
                            r403_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowDown")), true, true);
                            r403_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDblHStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21DE"), r318_MangleUnicode(8670), new r312_xn$Capture$2Lrc8.GlyphProc(function (r408_currentGlyph) {
                            var _r408_t0, _r408_t1;
                            r408_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowUp")), true, true);
                            r408_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDblHStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2902"), r318_MangleUnicode(10498), new r312_xn$Capture$2Lrc8.GlyphProc(function (r413_currentGlyph) {
                            var _r413_t0, _r413_t1;
                            r413_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dblArrowLeft")), true, true);
                            r413_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dblArrVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2903"), r318_MangleUnicode(10499), new r312_xn$Capture$2Lrc8.GlyphProc(function (r418_currentGlyph) {
                            var _r418_t0, _r418_t1;
                            r418_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dblArrowRight")), true, true);
                            r418_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dblArrVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2904"), r318_MangleUnicode(10500), new r312_xn$Capture$2Lrc8.GlyphProc(function (r423_currentGlyph) {
                            var _r423_t0, _r423_t1;
                            r423_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dblArrowLeftRight")), true, true);
                            r423_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dblArrVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2B7A"), r318_MangleUnicode(11130), new r312_xn$Capture$2Lrc8.GlyphProc(function (r428_currentGlyph) {
                            var _r428_t0, _r428_t1;
                            r428_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("trigArrowLeft")), true, true);
                            r428_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDblVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2B7B"), r318_MangleUnicode(11131), new r312_xn$Capture$2Lrc8.GlyphProc(function (r433_currentGlyph) {
                            var _r433_t0, _r433_t1;
                            r433_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("trigArrowUp")), true, true);
                            r433_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDblHStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2B7C"), r318_MangleUnicode(11132), new r312_xn$Capture$2Lrc8.GlyphProc(function (r438_currentGlyph) {
                            var _r438_t0, _r438_t1;
                            r438_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("trigArrowRight")), true, true);
                            r438_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDblVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2B7D"), r318_MangleUnicode(11133), new r312_xn$Capture$2Lrc8.GlyphProc(function (r443_currentGlyph) {
                            var _r443_t0, _r443_t1;
                            r443_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("trigArrowDown")), true, true);
                            r443_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDblHStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2947"), r318_MangleUnicode(10567), new r312_xn$Capture$2Lrc8.GlyphProc(function (r448_currentGlyph) {
                            var _r448_t0, _r448_t1;
                            r448_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowRight")), true, true);
                            r448_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrCrossOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2B3E"), r318_MangleUnicode(11070), new r312_xn$Capture$2Lrc8.GlyphProc(function (r453_currentGlyph) {
                            var _r453_t0, _r453_t1;
                            r453_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowLeft")), true, true);
                            r453_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrCrossOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2900"), r318_MangleUnicode(10496), new r312_xn$Capture$2Lrc8.GlyphProc(function (r458_currentGlyph) {
                            var _r458_t0, _r458_t1;
                            r458_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dhArrowRight")), true, true);
                            r458_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2B34"), r318_MangleUnicode(11060), new r312_xn$Capture$2Lrc8.GlyphProc(function (r463_currentGlyph) {
                            var _r463_t0, _r463_t1;
                            r463_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dhArrowLeft")), true, true);
                            r463_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2914"), r318_MangleUnicode(10516), new r312_xn$Capture$2Lrc8.GlyphProc(function (r468_currentGlyph) {
                            var _r468_t0, _r468_t1;
                            r468_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("htArrowRight")), true, true);
                            r468_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2B39"), r318_MangleUnicode(11065), new r312_xn$Capture$2Lrc8.GlyphProc(function (r473_currentGlyph) {
                            var _r473_t0, _r473_t1;
                            r473_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("htArrowLeft")), true, true);
                            r473_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2917"), r318_MangleUnicode(10519), new r312_xn$Capture$2Lrc8.GlyphProc(function (r478_currentGlyph) {
                            var _r478_t0, _r478_t1;
                            r478_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dhtArrowRight")), true, true);
                            r478_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2B3C"), r318_MangleUnicode(11068), new r312_xn$Capture$2Lrc8.GlyphProc(function (r483_currentGlyph) {
                            var _r483_t0, _r483_t1;
                            r483_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dhtArrowLeft")), true, true);
                            r483_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2901"), r318_MangleUnicode(10497), new r312_xn$Capture$2Lrc8.GlyphProc(function (r488_currentGlyph) {
                            var _r488_t0, _r488_t1;
                            r488_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dhArrowRight")), true, true);
                            r488_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDblVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2B35"), r318_MangleUnicode(11061), new r312_xn$Capture$2Lrc8.GlyphProc(function (r493_currentGlyph) {
                            var _r493_t0, _r493_t1;
                            r493_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dhArrowLeft")), true, true);
                            r493_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDblVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2915"), r318_MangleUnicode(10517), new r312_xn$Capture$2Lrc8.GlyphProc(function (r498_currentGlyph) {
                            var _r498_t0, _r498_t1;
                            r498_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("htArrowRight")), true, true);
                            r498_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDblVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2B3A"), r318_MangleUnicode(11066), new r312_xn$Capture$2Lrc8.GlyphProc(function (r503_currentGlyph) {
                            var _r503_t0, _r503_t1;
                            r503_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("htArrowLeft")), true, true);
                            r503_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDblVStrokeOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2918"), r318_MangleUnicode(10520), new r312_xn$Capture$2Lrc8.GlyphProc(function (r508_currentGlyph) {
                            var _r508_t0, _r508_t1;
                            r508_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dhtArrowRight")), true, true);
                            r508_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDhtVStrokeOver")));
                            return void 0;
                        }));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2B3D"), r318_MangleUnicode(11069), new r312_xn$Capture$2Lrc8.GlyphProc(function (r513_currentGlyph) {
                            var _r513_t0, _r513_t1;
                            r513_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("dhtArrowLeft")), true, true);
                            r513_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDhtVStrokeOver")));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r517_RingOverlayShape = function (r518_base, r518_baseThin, r518_overlay, r518_overlayMask) {
                            var _r518_t0, _r518_t1;
                            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r520_currentGlyph) {
                                var _r520_t0, _r520_t1;
                                r520_currentGlyph.include(r318_xn$withtransform$5sIl(r312_Translate(0, 0), new r312_xn$Capture$2Lrc8.GlyphProc(function (r523_currentGlyph) {
                                    var _r523_t0, _r523_t1;
                                    r523_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName(r518_base)), true, true);
                                    r523_currentGlyph.include(r318_xn$cleargeometry$1aao());
                                    r523_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName(r518_overlay)));
                                    return void 0;
                                })), true, true);
                                r520_currentGlyph.include(r312_difference(r318_xn$referglyph$1aao(r318_MangleName(r518_base)), r318_xn$withtransform$5sIl(r312_Translate(0, 0), new r312_xn$Capture$2Lrc8.GlyphProc(function (r529_currentGlyph) {
                                    var _r529_t0, _r529_t1;
                                    r529_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName(r518_base)), true, true);
                                    r529_currentGlyph.include(r318_xn$cleargeometry$1aao());
                                    r529_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName(r518_overlayMask)));
                                    return void 0;
                                }))));
                                r520_currentGlyph.include(r312_intersection(r318_xn$referglyph$1aao(r318_MangleName(r518_baseThin)), r318_xn$withtransform$5sIl(r312_Translate(0, 0), new r312_xn$Capture$2Lrc8.GlyphProc(function (r535_currentGlyph) {
                                    var _r535_t0, _r535_t1;
                                    r535_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName(r518_base)), true, true);
                                    r535_currentGlyph.include(r318_xn$cleargeometry$1aao());
                                    r535_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName(r518_overlayMask)));
                                    return void 0;
                                }))));
                                return void 0;
                            });
                        };
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21F4"), r318_MangleUnicode(8692), r517_RingOverlayShape("arrowRight", "thinArrowBarH", "arrRingOverLR", "arrRingOverLRMask"));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2B30"), r318_MangleUnicode(11056), r517_RingOverlayShape("arrowLeft", "thinArrowBarH", "arrRingOverLR", "arrRingOverLRMask"));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2948"), r318_MangleUnicode(10568), r517_RingOverlayShape("arrowLeftRight", "thinArrowBarH", "arrRingOverLR", "arrRingOverLRMask"));
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni27F4"), r318_MangleUnicode(10228), r517_RingOverlayShape("arrowRight", "thinArrowBarH", "arrRingPlusOverLR", "arrRingOverLRMask"));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2B32"), r318_MangleUnicode(11058), r517_RingOverlayShape("arrowLeft", "thinArrowBarH", "arrRingPlusOverLR", "arrRingOverLRMask"));
                    })();
                    (function () {
                        var r545_branchInset = 0.5 * r315_MosaicWidth - 1.5 * r318_arrowHeadSize;
                        r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("arrowLeftFromDown"), r318_MangleUnicode(129216), new r312_xn$Capture$2Lrc8.GlyphProc(function (r548_currentGlyph) {
                            var _r548_t0, _r548_t1;
                            r548_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowDown")), true, true);
                            r548_currentGlyph.include(r312_intersection(r318_MaskLeft(r318_arrowMidX), r318_xn$withtransform$5sIl(r312_ApparentTranslate(r545_branchInset, 0), r318_xn$referglyph$1aao(r318_MangleName("arrowLeft")))));
                            return void 0;
                        }));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("arrowRightFromDown"), r318_MangleUnicode(129217), new r312_xn$Capture$2Lrc8.GlyphProc(function (r553_currentGlyph) {
                            var _r553_t0, _r553_t1;
                            r553_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowDown")), true, true);
                            r553_currentGlyph.include(r312_intersection(r318_MaskRight(r318_arrowMidX), r318_xn$withtransform$5sIl(r312_ApparentTranslate(-r545_branchInset, 0), r318_xn$referglyph$1aao(r318_MangleName("arrowRight")))));
                            return void 0;
                        }));
                    })();
                    if (r315_MosaicWidthScalar > 1 && !r312_para.forceMonospace) _r318_t10 = (function () {
                        r312_xn$GlyphSaveSink$2Lrc4b.save("uni1F8D6", 129238, new r312_xn$Capture$2Lrc8.GlyphProc(function (r560_currentGlyph) {
                            var _r560_t0, _r560_t1;
                            r560_currentGlyph.include(r318_xn$referglyph$1aao("longArrowRight"), true, true);
                            r560_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrCrossOver")));
                            return void 0;
                        }));
                        r312_xn$GlyphSaveSink$2Lrc4b.save("uni1F8D7", 129239, new r312_xn$Capture$2Lrc8.GlyphProc(function (r565_currentGlyph) {
                            var _r565_t0, _r565_t1;
                            r565_currentGlyph.include(r318_xn$referglyph$1aao("longArrowRight"), true, true);
                            r565_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrDblSlashOver")));
                            return void 0;
                        }));
                        return r312_xn$GlyphSaveSink$2Lrc4b.save("uni1F8D8", 129240, new r312_xn$Capture$2Lrc8.GlyphProc(function (r570_currentGlyph) {
                            var _r570_t0, _r570_t1;
                            r570_currentGlyph.include(r318_xn$referglyph$1aao("longArrowLeftRight"), true, true);
                            r570_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrLobeOver")));
                            return void 0;
                        }));
                    })();
                    return _r318_t10;
                })();
                _r315_t5 = _r315_t2 = _r315_t2 + 1;
                _r315_t4 = _r315_t2 < _r315_t1;
            }
            return _r315_t5;
        })();
    });
    return void 0;
});


