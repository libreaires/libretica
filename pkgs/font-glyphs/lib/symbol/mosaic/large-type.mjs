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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Mosaic-Large-Type", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8, _r312_t9, _r312_tag10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_fontMetrics = _r312_t0.fontMetrics;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_WideWidth4 = _r312_t1.WideWidth4;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var r312_end = _r312_t2.end;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_ForceUpright = _r312_t5.ForceUpright;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_NameUni = _r312_t6.NameUni;
        return (function () {
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
                    var r320_MosaicDesiredWidth = r312_WideWidth4;
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
                    var r320_top = r312_fontMetrics.os2.sTypoAscender;
                    var r320_bottom = r312_fontMetrics.os2.sTypoDescender;
                    var r320_left = 0;
                    var r320_right = r317_MosaicWidth;
                    var r320_stemleft = r1_mix(r320_left, r320_right, 1 / 3);
                    var r320_stemright = r1_mix(r320_left, r320_right, 2 / 3);
                    var r320_stemmid = r1_mix(r320_left, r320_right, 0.5);
                    var r320_yPartTop = function (r323_n) {
                        var _r323_t0, _r323_t1;
                        return r1_mix(r320_top, r320_bottom, r323_n / 5);
                    };
                    var r320_yPartBot = function (r324_n) {
                        var _r324_t0, _r324_t1;
                        return r1_mix(r320_top, r320_bottom, (r324_n + 1) / 5);
                    };
                    var r320_Stem = function (r325_start, r325_end) {
                        var _r325_t0, _r325_t1;
                        return r312_xn$spirooutline$1aao(r312_corner(r320_stemleft, r320_yPartTop(r325_start)), r312_corner(r320_stemright, r320_yPartTop(r325_start)), r312_corner(r320_stemright, r320_yPartBot(r325_end)), r312_corner(r320_stemleft, r320_yPartBot(r325_end)));
                    };
                    var r320_TopBit = function () {
                        var _r326_t0, _r326_t1;
                        return r312_xn$spirooutline$1aao(r312_corner(r320_stemleft, r320_top), r312_corner(r320_stemright, r320_top), r312_corner(r320_stemmid, r1_mix(r320_top, r320_bottom, 0.1)));
                    };
                    var r320_BottomBit = function () {
                        var _r327_t0, _r327_t1;
                        return r312_xn$spirooutline$1aao(r312_corner(r320_stemmid, r1_mix(r320_top, r320_bottom, 0.9)), r312_corner(r320_stemleft, r320_bottom), r312_corner(r320_stemright, r320_bottom));
                    };
                    var r320_Arm = function (r328_yStart, r328_yEnd, r328_left, r328_right) {
                        var _r328_t0, _r328_t1;
                        return r312_xn$spirooutline$1aao(r312_corner(r328_left, r320_yPartTop(r328_yStart)), r312_corner(r328_right, r320_yPartTop(r328_yEnd)), r312_corner(r328_right, r320_yPartBot(r328_yEnd)), r312_corner(r328_left, r320_yPartBot(r328_yStart)));
                    };
                    var r320_Arc = function (r329_yHori, r329_yVert, r329_fRight) {
                        var _r329_t0, _r329_t1;
                        return r312_xn$spirooutline$1aao(r312_corner(r329_fRight ? r320_right : r320_left, (r329_fRight ? r320_yPartTop : r320_yPartBot)(r329_yHori)), r312_corner(r329_fRight ? r320_right : r320_left, (r329_fRight ? r320_yPartBot : r320_yPartTop)(r329_yHori)), r312_corner(r329_yHori < r329_yVert ? r320_stemright : r320_stemleft, (r329_yHori < r329_yVert ? r320_yPartBot : r320_yPartTop)(r329_yVert)), r312_corner(r329_yHori < r329_yVert ? r320_stemleft : r320_stemright, (r329_yHori < r329_yVert ? r320_yPartBot : r320_yPartTop)(r329_yVert)));
                    };
                    var r320_MakePiece = function (r330_unicode, r330_shape) {
                        var _r330_t0, _r330_t1;
                        return r312_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName(r312_NameUni(r330_unicode)), r320_MangleUnicode(r330_unicode), new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                            var _r333_t0, _r333_t1;
                            r333_currentGlyph.setWidth(r317_MosaicWidth);
                            r333_currentGlyph.include(r312_ForceUpright());
                            r333_currentGlyph.include(r330_shape);
                            return void 0;
                        }));
                    };
                    r320_MakePiece(118298, r312_union(r320_Stem(4, 4), r320_Arc(2, 3, 1)));
                    r320_MakePiece(118299, r312_union(r320_Stem(2, 4), r320_Arm(2, 2, r320_stemright, r320_right)));
                    r320_MakePiece(118300, r312_union(r320_Stem(2, 4)));
                    r320_MakePiece(118301, r312_union(r320_Stem(2, 4), r320_Arm(2, 3, r320_stemright, r320_right)));
                    r320_MakePiece(118302, r312_union(r320_Arm(2, 2, r320_stemleft, r320_right)));
                    r320_MakePiece(118303, r312_union(r320_Arm(2, 2, r320_left, r320_right)));
                    r320_MakePiece(118304, r312_union(r320_Stem(2, 4), r320_Arm(2, 2, r320_left, r320_right)));
                    r320_MakePiece(118305, r312_union(r320_Arc(3, 4, 0), r320_Arc(3, 4, 1)));
                    r320_MakePiece(118306, r312_union(r320_Arc(3, 4, 0)));
                    r320_MakePiece(118307, r312_union(r320_Stem(4, 4)));
                    r320_MakePiece(118308, r312_union(r320_Stem(4, 4), r320_Arc(2, 3, 0)));
                    r320_MakePiece(118309, r312_union(r320_Arm(2, 2, 0, r320_stemright)));
                    r320_MakePiece(118310, r312_union(r320_Stem(2, 4), r320_Arm(3, 2, r320_left, r320_stemleft)));
                    r320_MakePiece(118311, r312_union(r320_Stem(2, 4), r320_Arm(2, 2, r320_left, r320_stemleft)));
                    r320_MakePiece(118312, r312_union(r320_Stem(0, 4), r320_Arm(2, 2, r320_stemright, r320_right)));
                    r320_MakePiece(118313, r312_union(r320_Stem(0, 4)));
                    r320_MakePiece(118314, r312_union(r320_Arc(1, 0, 1), r320_Arc(3, 4, 1)));
                    r320_MakePiece(118315, r312_union(r320_Arc(1, 0, 1)));
                    r320_MakePiece(118316, r312_union(r320_Arc(3, 4, 1)));
                    r320_MakePiece(118317, r312_union(r320_Stem(0, 0)));
                    r320_MakePiece(118318, r312_union(r320_Stem(0, 0), r320_Stem(4, 4), r320_Arc(2, 1, 1), r320_Arc(2, 3, 1)));
                    r320_MakePiece(118319, r312_union(r320_Arm(2, 2, r320_left, r320_stemmid), r320_Arm(2, 1, r320_stemmid, r320_right), r320_Arm(2, 3, r320_stemmid, r320_right)));
                    r320_MakePiece(118320, r312_union(r320_TopBit()));
                    r320_MakePiece(118321, r312_union(r320_BottomBit()));
                    r320_MakePiece(118322, r312_union(r320_Arm(1, 3, r320_left, r320_right), r320_Arm(3, 1, r320_left, r320_right)));
                    r320_MakePiece(118323, r312_union(r320_Stem(3, 4), r320_Arc(1, 2, 0), r320_Arc(1, 2, 1)));
                    r320_MakePiece(118324, r312_union(r320_Arm(2, 2, r320_left, r320_right), r320_Arm(3, 1, r320_left, r320_right)));
                    r320_MakePiece(118325, r312_union(r320_Stem(3, 4), r320_Arc(1, 2, 1)));
                    r320_MakePiece(118326, r312_union(r320_Stem(0, 4), r320_Arm(2, 2, r320_left, r320_stemleft)));
                    r320_MakePiece(118327, r312_union(r320_Stem(0, 0), r320_Stem(4, 4), r320_Arc(2, 1, 0), r320_Arc(2, 3, 0)));
                    r320_MakePiece(118328, r312_union(r320_Arc(1, 0, 0), r320_Arc(3, 4, 0)));
                    r320_MakePiece(118329, r312_union(r320_Stem(0, 4), r320_Arm(1, 2, r320_left, r320_stemleft)));
                    r320_MakePiece(118330, r312_union(r320_Stem(0, 4), r320_Arm(2, 2, r320_left, r320_right)));
                    r320_MakePiece(118331, r312_union(r320_Arc(1, 0, 0)));
                    r320_MakePiece(118332, r312_union(r320_Stem(0, 2)));
                    r320_MakePiece(118333, r312_union(r320_Stem(0, 2), r320_Arm(2, 2, r320_stemright, r320_right)));
                    r320_MakePiece(118334, r312_union(r320_Stem(0, 0), r320_Arc(2, 1, 1)));
                    r320_MakePiece(118335, r312_union(r320_Stem(0, 2), r320_Arm(2, 1, r320_stemright, r320_right)));
                    r320_MakePiece(118336, r312_union(r320_Stem(0, 2), r320_Arm(2, 2, 0, r320_right)));
                    r320_MakePiece(118337, r312_union(r320_Arm(1, 2.5, r320_left, r320_stemmid), r320_Arm(2.5, 1, r320_stemmid, r320_right)));
                    r320_MakePiece(118338, r312_union(r320_Arc(1, 0, 0), r320_Arc(1, 0, 1)));
                    r320_MakePiece(118339, r312_union(r320_Stem(0, 0), r320_Arc(2, 1, 0)));
                    r320_MakePiece(118340, r312_union(r320_Stem(0, 2), r320_Arm(2, 2, r320_left, r320_stemleft)));
                    r320_MakePiece(118341, r312_union(r320_Stem(0, 0), r320_Arc(2, 1, 0), r320_Arm(0, 2, r320_left, r320_stemright)));
                    r320_MakePiece(118342, r312_union(r320_Stem(0, 2), r320_Arm(1, 2, r320_left, r320_stemleft)));
                    r320_MakePiece(118343, r312_union(r320_Stem(3, 4)));
                    r320_MakePiece(118344, r312_union(r320_Stem(1, 4)));
                    r320_MakePiece(118345, r312_union(r320_Stem(3, 3)));
                    r320_MakePiece(118346, r312_union(r320_Stem(2, 3)));
                    r320_MakePiece(118347, r312_union(r320_Stem(1, 3)));
                    r320_MakePiece(118348, r312_union(r320_Stem(0, 3)));
                    r320_MakePiece(118349, r312_union(r320_Stem(2, 2)));
                    r320_MakePiece(118350, r312_union(r320_Stem(1, 2)));
                    r320_MakePiece(118351, r312_union(r320_Stem(1, 1)));
                    return r320_MakePiece(118352, r312_union(r320_Stem(0, 1)));
                })();
                _r317_t5 = _r317_t2 = _r317_t2 + 1;
                _r317_t4 = _r317_t2 < _r317_t1;
            }
            return _r317_t5;
        })();
    });
    return void 0;
});


