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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Arrow-Stacked", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t5, _r312_t6, _r312_t7, _r312_tag8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_widths = _r312_t2.widths;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
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
                    var _r318_t4, _r318_t5, _r318_tag6;
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
                    var r318_xn$withtransform$5sIl = _r318_t0["with-transform"];
                    var _r318_t1 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r318_xn$referglyph$1aao = _r318_t1["refer-glyph"];
                    var r318_HCombine = _r318_t1.HCombine;
                    var r318_VCombine = _r318_t1.VCombine;
                    var _r318_t2 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
                    var r318_ArrowDims = _r318_t2.ArrowDims;
                    var r318_ArrowT = _r318_t2.ArrowT;
                    var r318_MkArrowT = _r318_t2.MkArrowT;
                    var r318_dims = r318_ArrowDims(r315_MosaicWidth);
                    var r318_Arrow = r318_ArrowT(r318_dims);
                    var r318_MkArrow = r318_MkArrowT(r318_dims);
                    var _r318_t3 = r318_dims;
                    var r318_arrowWidth = _r318_t3.arrowWidth;
                    var r318_arrowTop = _r318_t3.arrowTop;
                    var r318_arrowBot = _r318_t3.arrowBot;
                    var r318_arrowMidX = _r318_t3.arrowMidX;
                    var r318_arrowSB = _r318_t3.arrowSB;
                    var r318_arrowRSB = _r318_t3.arrowRSB;
                    var r318_arrowSw = _r318_t3.arrowSw;
                    var r318_arrowHeadSize = _r318_t3.arrowHeadSize;
                    var r318_compactHeadSize = _r318_t3.compactHeadSize;
                    var r318_halfArrowSw = _r318_t3.halfArrowSw;
                    r318_MkArrow.single(r318_Arrow.shape, r318_MangleName("arrowRightCompact"), null, r318_arrowSB, r312_SymbolMid, r318_arrowRSB, r312_SymbolMid, void 0, r318_compactHeadSize);
                    r318_MkArrow.single(r318_Arrow.shape, r318_MangleName("arrowLeftCompact"), null, r318_arrowRSB, r312_SymbolMid, r318_arrowSB, r312_SymbolMid, void 0, r318_compactHeadSize);
                    var r318_hcDist = Math.max(r318_halfArrowSw * 5, r318_arrowWidth / 2);
                    var r318_vcDist2 = r318_arrowHeadSize;
                    var r318_vcDist = r318_arrowHeadSize * 1.75;
                    r318_VCombine(r318_MangleName("uni21C4"), r318_MangleUnicode(8644), r318_MangleName("arrowRight"), r318_MangleName("arrowLeft"), r318_vcDist);
                    r318_HCombine(r318_MangleName("uni21C5"), r318_MangleUnicode(8645), r318_MangleName("arrowUp"), r318_MangleName("arrowDown"), r318_hcDist);
                    r318_VCombine(r318_MangleName("uni21C6"), r318_MangleUnicode(8646), r318_MangleName("arrowLeft"), r318_MangleName("arrowRight"), r318_vcDist);
                    r318_VCombine(r318_MangleName("uni21C7"), r318_MangleUnicode(8647), r318_MangleName("arrowLeft"), r318_MangleName("arrowLeft"), r318_vcDist);
                    r318_HCombine(r318_MangleName("uni21C8"), r318_MangleUnicode(8648), r318_MangleName("arrowUp"), r318_MangleName("arrowUp"), r318_hcDist);
                    r318_VCombine(r318_MangleName("uni21C9"), r318_MangleUnicode(8649), r318_MangleName("arrowRight"), r318_MangleName("arrowRight"), r318_vcDist);
                    r318_HCombine(r318_MangleName("uni21CA"), r318_MangleUnicode(8650), r318_MangleName("arrowDown"), r318_MangleName("arrowDown"), r318_hcDist);
                    r318_HCombine(r318_MangleName("uni21F5"), r318_MangleUnicode(8693), r318_MangleName("arrowDown"), r318_MangleName("arrowUp"), r318_hcDist);
                    r318_VCombine(r318_MangleName("uni21CB"), r318_MangleUnicode(8651), r318_MangleName("arrowLeftHR"), r318_MangleName("arrowRightHR"), r318_vcDist2);
                    r318_VCombine(r318_MangleName("uni21CC"), r318_MangleUnicode(8652), r318_MangleName("arrowRightHL"), r318_MangleName("arrowLeftHL"), r318_vcDist2);
                    r318_VCombine(r318_MangleName("uni21B9"), r318_MangleUnicode(8633), r318_MangleName("arrowBarLeft"), r318_MangleName("arrowBarRight"), r318_vcDist);
                    r318_VCombine(r318_MangleName("uni2962"), r318_MangleUnicode(10594), r318_MangleName("arrowLeftHR"), r318_MangleName("arrowLeftHL"), r318_vcDist2);
                    r318_HCombine(r318_MangleName("uni2963"), r318_MangleUnicode(10595), r318_MangleName("arrowUpHL"), r318_MangleName("arrowUpHR"), r318_vcDist2);
                    r318_VCombine(r318_MangleName("uni2964"), r318_MangleUnicode(10596), r318_MangleName("arrowRightHL"), r318_MangleName("arrowRightHR"), r318_vcDist2);
                    r318_HCombine(r318_MangleName("uni2965"), r318_MangleUnicode(10597), r318_MangleName("arrowDownHR"), r318_MangleName("arrowDownHL"), r318_vcDist2);
                    r318_HCombine(r318_MangleName("uni296E"), r318_MangleUnicode(10606), r318_MangleName("arrowUpHL"), r318_MangleName("arrowDownHL"), r318_vcDist2);
                    r318_HCombine(r318_MangleName("uni296F"), r318_MangleUnicode(10607), r318_MangleName("arrowDownHR"), r318_MangleName("arrowUpHR"), r318_vcDist2);
                    r318_VCombine(r318_MangleName("uni2B80"), r318_MangleUnicode(11136), r318_MangleName("trigArrowLeft"), r318_MangleName("trigArrowRight"), r318_vcDist);
                    r318_HCombine(r318_MangleName("uni2B81"), r318_MangleUnicode(11137), r318_MangleName("trigArrowUp"), r318_MangleName("trigArrowDown"), r318_hcDist);
                    r318_VCombine(r318_MangleName("uni2B82"), r318_MangleUnicode(11138), r318_MangleName("trigArrowRight"), r318_MangleName("trigArrowLeft"), r318_vcDist);
                    r318_HCombine(r318_MangleName("uni2B83"), r318_MangleUnicode(11139), r318_MangleName("trigArrowDown"), r318_MangleName("trigArrowUp"), r318_hcDist);
                    r318_VCombine(r318_MangleName("uni2B84"), r318_MangleUnicode(11140), r318_MangleName("trigArrowLeft"), r318_MangleName("trigArrowLeft"), r318_vcDist);
                    r318_HCombine(r318_MangleName("uni2B85"), r318_MangleUnicode(11141), r318_MangleName("trigArrowUp"), r318_MangleName("trigArrowUp"), r318_hcDist);
                    r318_VCombine(r318_MangleName("uni2B86"), r318_MangleUnicode(11142), r318_MangleName("trigArrowRight"), r318_MangleName("trigArrowRight"), r318_vcDist);
                    r318_HCombine(r318_MangleName("uni2B87"), r318_MangleUnicode(11143), r318_MangleName("trigArrowDown"), r318_MangleName("trigArrowDown"), r318_hcDist);
                    r318_VCombine(r318_MangleName("uni2B7E"), r318_MangleUnicode(11134), r318_MangleName("trigArrowBarLeft"), r318_MangleName("trigArrowBarRight"), r318_vcDist);
                    r318_HCombine(r318_MangleName("uni2B7F"), r318_MangleUnicode(11135), r318_MangleName("trigArrowBarDown"), r318_MangleName("trigArrowBarUp"), r318_hcDist);
                    var r318_VStackCentered = function (r324_newid, r324_unicode, r324_ids, r324_heights, r324_widths) {
                        var _r324_t2, _r324_t3;
                        var r324_bWidths = Array.isArray(r324_widths) ? r324_widths : Array(r324_ids.length).fill(r324_widths);
                        var r324_bHeights = Array.isArray(r324_heights) ? r324_heights : Array(r324_ids.length).fill(r324_heights);
                        var r324_maxWidth = Math.max.apply(null, r324_bWidths);
                        var r324_totalHeight = 0;
                        var _r324_t0 = 0;
                        var _r324_t1 = r324_ids.length;
                        var r324_i = _r324_t0;
                        while (r324_i < _r324_t1) {
                            r324_totalHeight = r324_totalHeight + r324_bHeights[r324_i];
                            r324_i = r324_i + 1;
                        }
                        var r324_offsetY = r324_totalHeight / 2;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r324_newid, r324_unicode, new r312_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                            var _r329_t2, _r329_t3, _r329_t4, _r329_tag5;
                            r329_currentGlyph.setWidth(r324_maxWidth);
                            var _r329_t0 = 0;
                            var _r329_t1 = r324_ids.length;
                            var r329_i = _r329_t0;
                            while (r329_i < _r329_t1) {
                                (function () {
                                    r329_currentGlyph.include(r318_xn$withtransform$5sIl(r312_ApparentTranslate((r324_maxWidth - r324_bWidths[r329_i]) / 2, r324_offsetY - r324_bHeights[r329_i] / 2), r318_xn$referglyph$1aao(r324_ids[r329_i])));
                                    return r324_offsetY = r324_offsetY - r324_bHeights[r329_i];
                                })();
                                r329_i = r329_i + 1;
                            }
                            return void 0;
                        }));
                    };
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni21F6"), r318_MangleUnicode(8694), new r312_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                        var _r338_t0, _r338_t1;
                        r338_currentGlyph.setWidth(r315_MosaicWidth);
                        var r338_distance = r318_compactHeadSize * 2 - r318_arrowSw;
                        r338_currentGlyph.include(r318_xn$withtransform$5sIl(r312_ApparentTranslate(0, +r338_distance), r318_xn$referglyph$1aao(r318_MangleName("arrowRightCompact"))));
                        r338_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowRightCompact")));
                        r338_currentGlyph.include(r318_xn$withtransform$5sIl(r312_ApparentTranslate(0, -r338_distance), r318_xn$referglyph$1aao(r318_MangleName("arrowRightCompact"))));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r318_MangleName("uni2B31"), r318_MangleUnicode(11057), new r312_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                        var _r345_t0, _r345_t1;
                        r345_currentGlyph.setWidth(r315_MosaicWidth);
                        var r345_distance = r318_compactHeadSize * 2 - r318_arrowSw;
                        r345_currentGlyph.include(r318_xn$withtransform$5sIl(r312_ApparentTranslate(0, +r345_distance), r318_xn$referglyph$1aao(r318_MangleName("arrowLeftCompact"))));
                        r345_currentGlyph.include(r318_xn$referglyph$1aao(r318_MangleName("arrowLeftCompact")));
                        r345_currentGlyph.include(r318_xn$withtransform$5sIl(r312_ApparentTranslate(0, -r345_distance), r318_xn$referglyph$1aao(r318_MangleName("arrowLeftCompact"))));
                        return void 0;
                    }));
                    if (r315_MosaicWidthScalar > 1 && !r312_para.forceMonospace) _r318_t4 = (function () {
                        r318_VCombine("uni1F8D0", 129232, "longArrowRight", "longArrowLeft", r318_vcDist);
                        r318_VCombine("uni1F8D1", 129233, "longArrowRightHL", "longArrowLeftHL", r318_vcDist);
                        r318_VStackCentered("uni1F8D2", 129234, ["longArrowRightHL", "arrowLeftHL.NWID"], r318_vcDist, [r315_MosaicWidth, r318_MosaicUnitWidth]);
                        r318_VStackCentered("uni1F8D3", 129235, ["arrowRightHL.NWID", "longArrowLeftHL"], r318_vcDist, [r318_MosaicUnitWidth, r315_MosaicWidth]);
                        r318_VStackCentered("uni1F8D4", 129236, ["longArrowLeftHR", "arrowRightHR.NWID"], r318_vcDist, [r315_MosaicWidth, r318_MosaicUnitWidth]);
                        return r318_VStackCentered("uni1F8D5", 129237, ["arrowLeftHR.NWID", "longArrowRightHR"], r318_vcDist, [r318_MosaicUnitWidth, r315_MosaicWidth]);
                    })();
                    return _r318_t4;
                })();
                _r315_t5 = _r315_t2 = _r315_t2 + 1;
                _r315_t4 = _r315_t2 < _r315_t1;
            }
            return _r315_t5;
        })();
    });
    return void 0;
});


