"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Geometric-Corner-Shape", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8, _r312_t9, _r312_tag10, _r312_t11, _r312_tag12;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_ParenTop = _r312_t1.ParenTop;
        var r312_ParenBot = _r312_t1.ParenBot;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_WideWidth1 = _r312_t1.WideWidth1;
        var r312_GeometryStroke = _r312_t1.GeometryStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Rect = _r312_t5.Rect;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_NameUni = _r312_t6.NameUni;
        (function () {
            var r317_FMosaicWide, r317_MosaicNameSuffix, r317_MosaicWidth, r317_MosaicWidthScalar, _r317_t3, _r317_t5, _r317_t6, _r317_tag7;
            var r317_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r317_t0 = r317_WidthKinds;
            var _r317_t1 = _r317_t0.length;
            var _r317_t2 = 0;
            var _r317_t4 = _r317_t2 < _r317_t1;
            while (_r317_t4) {
                _r317_t3 = _r317_t0[_r317_t2];
                r317_FMosaicWide = _r317_t3[0];
                r317_MosaicNameSuffix = _r317_t3[1];
                r317_MosaicWidth = _r317_t3[2];
                r317_MosaicWidthScalar = _r317_t3[3];
                (function () {
                    var _r320_t0, _r320_tag1;
                    var r320_MosaicDesiredWidth = r312_WideWidth1;
                    var r320_MosaicMiddle = r317_MosaicWidth / 2;
                    var r320_MosaicUnitWidth = r317_MosaicWidth / r317_MosaicWidthScalar;
                    var r320_MangleUnicode = function (r321_unicode, r321__desiredOverride) {
                        var _r321_t0, _r321_t1;
                        return r317_MosaicWidth === (r321__desiredOverride || r320_MosaicDesiredWidth) ? r321_unicode : void 0;
                    };
                    var r320_MangleName = function (r322_name) {
                        var _r322_t0, _r322_t1;
                        return r322_name + r317_MosaicNameSuffix;
                    };
                    return (function () {
                        var r324_unicode, r324_t, r324_b, r324_l, r324_r, _r324_t3, _r324_t5;
                        var r324_ptMaxWidth = r317_MosaicWidth - r312_SB;
                        var r324_ptHeight0 = 1.5 * (r312_Width - r312_SB / 2) * Math.pow(r317_MosaicWidthScalar, 1 / 4);
                        var r324_ptHeight = Math.pow(r324_ptHeight0, 2) / Math.hypot(r324_ptHeight0, Math.min(r324_ptHeight0, r324_ptMaxWidth));
                        var r324_ptWidth = Math.min(r324_ptMaxWidth, r324_ptHeight);
                        var r324_ptMidX = r317_MosaicWidth / 2;
                        var r324_ptSB = (r317_MosaicWidth - r324_ptWidth) / 2;
                        var r324_ptRSB = r317_MosaicWidth - r324_ptSB;
                        var r324_ptTopFar = r312_SymbolMid + r324_ptHeight * 2;
                        var r324_ptTop = r312_SymbolMid + r324_ptHeight / 2;
                        var r324_ptBot = r312_SymbolMid - r324_ptHeight / 2;
                        var r324_ptBotFar = r312_SymbolMid - r324_ptHeight * 2;
                        var r324_CornerShapeConfig = [[8988, r324_ptTopFar, r312_SymbolMid, -r317_MosaicWidth, r317_MosaicWidth / 2], [8989, r324_ptTopFar, r312_SymbolMid, r317_MosaicWidth / 2, 2 * r317_MosaicWidth], [8990, r312_SymbolMid, r324_ptBotFar, -r317_MosaicWidth, r317_MosaicWidth / 2], [8991, r312_SymbolMid, r324_ptBotFar, r317_MosaicWidth / 2, 2 * r317_MosaicWidth]];
                        var _r324_t0 = r324_CornerShapeConfig;
                        var _r324_t1 = _r324_t0.length;
                        var _r324_t2 = 0;
                        var _r324_t4 = _r324_t2 < _r324_t1;
                        while (_r324_t4) {
                            _r324_t5 = (_r324_t3 = _r324_t0[_r324_t2], r324_unicode = _r324_t3[0], r324_t = _r324_t3[1], r324_b = _r324_t3[2], r324_l = _r324_t3[3], r324_r = _r324_t3[4], r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(r324_unicode)), r320_MangleUnicode(r324_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                                var _r330_t0, _r330_t1;
                                r330_currentGlyph.setWidth(r317_MosaicWidth);
                                r330_currentGlyph.include(r312_intersection(r312_Rect(r324_t, r324_b, r324_l, r324_r), r312_union(r312_VBar.l(r324_ptSB, r324_ptBot, r324_ptTop, r312_GeometryStroke), r312_VBar.r(r324_ptRSB, r324_ptBot, r324_ptTop, r312_GeometryStroke), r312_HBar.t(r324_ptSB, r324_ptRSB, r324_ptTop, r312_GeometryStroke), r312_HBar.b(r324_ptSB, r324_ptRSB, r324_ptBot, r312_GeometryStroke))));
                                return void 0;
                            })), _r324_t2 = _r324_t2 + 1);
                            _r324_t4 = _r324_t2 < _r324_t1;
                        }
                        return _r324_t5;
                    })();
                })();
                _r317_t5 = _r317_t2 = _r317_t2 + 1;
                _r317_t4 = _r317_t2 < _r317_t1;
            }
            return _r317_t5;
        })();
        return (function () {
            var r335_FMosaicWide, r335_MosaicNameSuffix, r335_MosaicWidth, r335_MosaicWidthScalar, _r335_t3, _r335_t5, _r335_t6, _r335_tag7;
            var r335_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r335_t0 = r335_WidthKinds;
            var _r335_t1 = _r335_t0.length;
            var _r335_t2 = 0;
            var _r335_t4 = _r335_t2 < _r335_t1;
            while (_r335_t4) {
                _r335_t3 = _r335_t0[_r335_t2];
                r335_FMosaicWide = _r335_t3[0];
                r335_MosaicNameSuffix = _r335_t3[1];
                r335_MosaicWidth = _r335_t3[2];
                r335_MosaicWidthScalar = _r335_t3[3];
                (function () {
                    var _r338_t0, _r338_tag1;
                    var r338_MosaicDesiredWidth = r312_WideWidth1;
                    var r338_MosaicMiddle = r335_MosaicWidth / 2;
                    var r338_MosaicUnitWidth = r335_MosaicWidth / r335_MosaicWidthScalar;
                    var r338_MangleUnicode = function (r339_unicode, r339__desiredOverride) {
                        var _r339_t0, _r339_t1;
                        return r335_MosaicWidth === (r339__desiredOverride || r338_MosaicDesiredWidth) ? r339_unicode : void 0;
                    };
                    var r338_MangleName = function (r340_name) {
                        var _r340_t0, _r340_t1;
                        return r340_name + r335_MosaicNameSuffix;
                    };
                    return (function () {
                        var r342_unicode, r342_hPos, r342_hRg, r342_vPos, r342_vRg, _r342_t3, _r342_t5;
                        var r342_vBot = r312_ParenBot;
                        var r342_vTop = r312_ParenTop;
                        var r342_hLeft = 0;
                        var r342_hRight = r335_MosaicWidth;
                        var r342_cropKH = 0.3 * Math.sqrt(1 / r335_MosaicWidthScalar);
                        var r342_H_LEFT = [0, 0 + r342_cropKH];
                        var r342_H_RIGHT = [1 - r342_cropKH, 1];
                        var r342_cropKV = r342_cropKH * r335_MosaicWidth / (r342_vTop - r342_vBot);
                        var r342_V_BOTTOM = [0 - r342_cropKV, 0];
                        var r342_V_TOP = [1, 1 + r342_cropKV];
                        var r342_CropConfig = [[8972, 0, r342_H_RIGHT, 1 - r342_cropKH, r342_V_BOTTOM], [8973, 0, r342_H_LEFT, r342_cropKH, r342_V_BOTTOM], [8974, 1, r342_H_RIGHT, 1 - r342_cropKH, r342_V_TOP], [8975, 1, r342_H_LEFT, r342_cropKH, r342_V_TOP]];
                        var _r342_t0 = r342_CropConfig;
                        var _r342_t1 = _r342_t0.length;
                        var _r342_t2 = 0;
                        var _r342_t4 = _r342_t2 < _r342_t1;
                        while (_r342_t4) {
                            _r342_t5 = (_r342_t3 = _r342_t0[_r342_t2], r342_unicode = _r342_t3[0], r342_hPos = _r342_t3[1], r342_hRg = _r342_t3[2], r342_vPos = _r342_t3[3], r342_vRg = _r342_t3[4], r312_xn$GlyphSaveSink$2Lrc4b.save(r338_MangleName(r312_NameUni(r342_unicode)), r338_MangleUnicode(r342_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                                var _r346_t0, _r346_t1;
                                r346_currentGlyph.setWidth(r335_MosaicWidth);
                                r346_currentGlyph.include(r312_HBar.m(r1_mix(r342_hLeft, r342_hRight, r342_hRg[0]), r1_mix(r342_hLeft, r342_hRight, r342_hRg[1]), r1_mix(r342_vBot + 0.5 * r312_GeometryStroke, r342_vTop - 0.5 * r312_GeometryStroke, r342_hPos), r312_GeometryStroke));
                                r346_currentGlyph.include(r312_VBar.m(r1_mix(r342_hLeft + r312_HSwToV(0.5 * r312_GeometryStroke), r342_hRight - r312_HSwToV(0.5 * r312_GeometryStroke), r342_vPos), r1_mix(r342_vBot, r342_vTop, r342_vRg[0]), r1_mix(r342_vBot, r342_vTop, r342_vRg[1]), r312_GeometryStroke));
                                return void 0;
                            })), _r342_t2 = _r342_t2 + 1);
                            _r342_t4 = _r342_t2 < _r342_t1;
                        }
                        return _r342_t5;
                    })();
                })();
                _r335_t5 = _r335_t2 = _r335_t2 + 1;
                _r335_t4 = _r335_t2 < _r335_t1;
            }
            return _r335_t5;
        })();
    });
    return void 0;
});


