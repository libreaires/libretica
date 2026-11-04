"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "CommonShapes-Polygon", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_Polygon, _r312_t7, _r312_t8, _r312_t9, _r312_tag10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_close = _r312_t2.close;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_xn$withoutlined$5sIl = _r312_t6["with-outlined"];
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r316_t0, _r316_t1;
            return {
                "Polygon": r312_Polygon
            };
        });
        return r312_Polygon = (function () {
            var r319_outline, r319_xn$insetbordered$1aao;
            var r319_exports = {};
            r319_exports.outline = r319_outline = function (r327_points) {
                var _r327_t0, _r327_t1;
                return r312_xn$spirooutline$1aao(r327_points, r312_close);
            };
            r319_exports["inset-bordered"] = r319_xn$insetbordered$1aao = function () {
                var _r330_t5;
                var _r330_t6 = arguments;
                var r330_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r330_t6, 0);
                var _r330_t0 = [];
                var _r330_t1 = 0;
                while (_r330_t1 < r330_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r330_xn$flexarguments$2Lrc7uIe5[_r330_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r330_t0.push(r330_xn$flexarguments$2Lrc7uIe5[_r330_t1]);
                    _r330_t1 = _r330_t1 + 1;
                }
                var _r330_t2 = r330_xn$flexarguments$2Lrc7uIe5;
                var _r330_t3 = _r330_t2.length;
                var _r330_t4 = 0;
                while (_r330_t4 < _r330_t3) {
                    _r330_t1 = _r330_t2[_r330_t4];
                    if (_r330_t1 && _r330_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "sw") r330_sw = _r330_t1.right;
                    if (_r330_t1 && _r330_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r330_t1.left === "points") r330_points = _r330_t1.right;
                    _r330_t4 = _r330_t4 + 1;
                }
                var r330_sw = r1_fallback(r330_sw, _r330_t0[0]);
                var r330_points = r1_fallback(r330_points, _r330_t0[1]);
                return r312_intersection(r312_xn$spirooutline$1aao(r330_points), r312_xn$withoutlined$5sIl(r330_sw, r312_xn$spirooutline$1aao(r330_points)));
            };
            return r319_exports;
        })();
    });
    return void 0;
});


