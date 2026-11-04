"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/point";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Point = _r1_t9.Point;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Shared-Symbol-Shapes", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_VZigzag, _r313_t7, _r313_t8, _r313_t9, _r313_tag10, _r313_t11, _r313_tag12;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HVContrast = _r313_t1.HVContrast;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g2 = _r313_t2.g2;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_virt = _r313_t2.virt;
        var r313_close = _r313_t2.close;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
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
        var r313_TangentToNormal = _r313_t5.TangentToNormal;
        var r313_xn$sharpcorner$1aao = _r313_t5["sharp-corner"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r317_t0, _r317_t1;
            return {
                "CreateWaveShape": r313_CreateWaveShape
            };
        });
        var r313_CreateWaveShape = function (r318_dist, r318_sw, r318__phaseShift) {
            var _r318_t0, _r318_t1;
            var r318_WaveResolution = 256;
            var r318_WaveMagnitude = r318_dist * (3 / 4) - r318_sw / 2;
            var r318_WaveAdj = r313_TanSlope * r318_WaveMagnitude * -0.75;
            var r318_phaseShift = r1_fallback(r318__phaseShift, 0);
            var r318_WaveShapeImpl = function () {
                var _r319_t5;
                var _r319_t6 = arguments;
                var r319_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r319_t6, 0);
                var _r319_t0 = [];
                var _r319_t1 = 0;
                while (_r319_t1 < r319_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r319_xn$flexarguments$2Lrc7uIe5[_r319_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r319_t0.push(r319_xn$flexarguments$2Lrc7uIe5[_r319_t1]);
                    _r319_t1 = _r319_t1 + 1;
                }
                var _r319_t2 = r319_xn$flexarguments$2Lrc7uIe5;
                var _r319_t3 = _r319_t2.length;
                var _r319_t4 = 0;
                while (_r319_t4 < _r319_t3) {
                    _r319_t1 = _r319_t2[_r319_t4];
                    if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "left") r319_left = _r319_t1.right;
                    if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "right") r319_right = _r319_t1.right;
                    if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "ts") r319_ts = _r319_t1.right;
                    if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "te") r319_te = _r319_t1.right;
                    if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "xsJoin") r319_xsJoin = _r319_t1.right;
                    if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "xfJoin") r319_xfJoin = _r319_t1.right;
                    if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "diagJoinS") r319_diagJoinS = _r319_t1.right;
                    if (_r319_t1 && _r319_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "diagJoinF") r319_diagJoinF = _r319_t1.right;
                    _r319_t4 = _r319_t4 + 1;
                }
                var r319_left = r1_fallback(r319_left, _r319_t0[0]);
                var r319_right = r1_fallback(r319_right, _r319_t0[1]);
                var r319_ts = r1_fallback(r319_ts, _r319_t0[2]);
                var r319_te = r1_fallback(r319_te, _r319_t0[3]);
                var r319_xsJoin = r1_fallback(r319_xsJoin, _r319_t0[4]);
                var r319_xfJoin = r1_fallback(r319_xfJoin, _r319_t0[5]);
                var r319_diagJoinS = r1_fallback(r319_diagJoinS, _r319_t0[6]);
                var r319_diagJoinF = r1_fallback(r319_diagJoinF, _r319_t0[7]);
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                    var r325_theta, r325_waveRelY, _r325_t2, _r325_t3;
                    var r325_resolution = Math.ceil(r318_WaveResolution * (r319_te - r319_ts));
                    var r325_knots = [];
                    var _r325_t0 = 0;
                    var _r325_t1 = r325_resolution;
                    var r325_pr = _r325_t0;
                    while (r325_pr <= _r325_t1) {
                        r325_theta = (r318_phaseShift + r1_mix(r319_ts, r319_te, r325_pr / r325_resolution)) * Math.PI * 2;
                        r325_waveRelY = Math.sin(r325_theta) + 0.075 * Math.sin(r325_theta * 3);
                        r325_knots.push(r313_g2(r318_WaveAdj * r325_waveRelY + r1_mix(r319_left, r319_right, r325_pr / r325_resolution), r313_SymbolMid + r318_WaveMagnitude * r325_waveRelY));
                        r325_pr = r325_pr + 1;
                    }
                    r325_currentGlyph.include(r313_dispiro(r313_widths.center(r318_sw), r319_xsJoin === void 0 ? [] : r319_diagJoinS ? [r313_g2(r319_xsJoin, r313_SymbolMid)] : [r313_straight.right.start(r319_xsJoin, r313_SymbolMid)], r325_knots, r319_xfJoin === void 0 ? [] : r319_diagJoinF ? [r313_g2(r319_xfJoin, r313_SymbolMid)] : [r313_straight.right.end(r319_xfJoin, r313_SymbolMid)]));
                    return void 0;
                });
            };
            var r318_WaveShape = function () {
                var _r329_t5;
                var _r329_t6 = arguments;
                var r329_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r329_t6, 0);
                var _r329_t0 = [];
                var _r329_t1 = 0;
                while (_r329_t1 < r329_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r329_xn$flexarguments$2Lrc7uIe5[_r329_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r329_t0.push(r329_xn$flexarguments$2Lrc7uIe5[_r329_t1]);
                    _r329_t1 = _r329_t1 + 1;
                }
                var _r329_t2 = r329_xn$flexarguments$2Lrc7uIe5;
                var _r329_t3 = _r329_t2.length;
                var _r329_t4 = 0;
                while (_r329_t4 < _r329_t3) {
                    _r329_t1 = _r329_t2[_r329_t4];
                    if (_r329_t1 && _r329_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "left") r329_left = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "right") r329_right = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "xsJoin") r329_xsJoin = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "xfJoin") r329_xfJoin = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "diagJoinS") r329_diagJoinS = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "diagJoinF") r329_diagJoinF = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "waveCount") r329_waveCount = _r329_t1.right;
                    if (_r329_t1 && _r329_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r329_t1.left === "unitWidth") r329_unitWidth = _r329_t1.right;
                    _r329_t4 = _r329_t4 + 1;
                }
                var r329_left = r1_fallback(r329_left, _r329_t0[0]);
                var r329_right = r1_fallback(r329_right, _r329_t0[1]);
                var r329_xsJoin = r1_fallback(r329_xsJoin, _r329_t0[2]);
                var r329_xfJoin = r1_fallback(r329_xfJoin, _r329_t0[3]);
                var r329_diagJoinS = r1_fallback(r329_diagJoinS, _r329_t0[4]);
                var r329_diagJoinF = r1_fallback(r329_diagJoinF, _r329_t0[5]);
                var r329_waveCount = r1_fallback(r329_waveCount, _r329_t0[6], 1);
                var r329_unitWidth = r1_fallback(r329_unitWidth, _r329_t0[7], r313_Width);
                return r318_WaveShapeImpl(r329_unitWidth * -r329_left, r329_unitWidth * (1 + r329_right), -r329_left * r329_waveCount, (1 + r329_right) * r329_waveCount, r329_xsJoin, r329_xfJoin, r329_diagJoinS, r329_diagJoinF);
            };
            return r318_WaveShape;
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r335_t0, _r335_t1;
            return {
                "Polyline": r313_Polyline,
                "ClosedPolyline": r313_ClosedPolyline
            };
        });
        var r313_Polyline = function () {
            var r336_x, r336_y, _r336_t9, _r336_t10, _r336_t12;
            var _r336_t13 = arguments;
            var r336_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r336_t13, 0);
            var _r336_t0 = [];
            var _r336_t1 = 0;
            while (_r336_t1 < r336_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r336_xn$flexarguments$2Lrc7uIe5[_r336_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r336_t0.push(r336_xn$flexarguments$2Lrc7uIe5[_r336_t1]);
                _r336_t1 = _r336_t1 + 1;
            }
            var _r336_t2 = r336_xn$flexarguments$2Lrc7uIe5;
            var _r336_t3 = _r336_t2.length;
            var _r336_t4 = 0;
            while (_r336_t4 < _r336_t3) {
                _r336_t1 = _r336_t2[_r336_t4];
                if (_r336_t1 && _r336_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r336_t1.left === "af") r336_af = _r336_t1.right;
                if (_r336_t1 && _r336_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r336_t1.left === "points") r336_points = _r336_t1.right;
                if (_r336_t1 && _r336_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r336_t1.left === "contrast") r336_contrast = _r336_t1.right;
                if (_r336_t1 && _r336_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r336_t1.left === "upright") r336_upright = _r336_t1.right;
                if (_r336_t1 && _r336_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r336_t1.left === "startAf") r336_startAf = _r336_t1.right;
                if (_r336_t1 && _r336_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r336_t1.left === "endAf") r336_endAf = _r336_t1.right;
                _r336_t4 = _r336_t4 + 1;
            }
            var r336_af = r1_fallback(r336_af, _r336_t0[0]);
            var r336_points = r1_fallback(r336_points, _r336_t0[1]);
            var r336_contrast = r1_fallback(r336_contrast, _r336_t0[2], r313_HVContrast);
            var r336_upright = r1_fallback(r336_upright, _r336_t0[3], 0);
            var r336_startAf = r1_fallback(r336_startAf, _r336_t0[4], r336_af);
            var r336_endAf = r1_fallback(r336_endAf, _r336_t0[5], r336_af);
            var _r336_t5 = r336_points;
            var r336_x0 = _r336_t5[0][0];
            var r336_y0 = _r336_t5[0][1];
            _r336_t5[0];
            var r336_xp = _r336_t5[1][0];
            var r336_yp = _r336_t5[1][1];
            _r336_t5[1];
            var r336_knots = [r313_flat(r336_x0, r336_y0, r336_startAf), r313_xn$sharpcorner$1aao(r336_xp, r336_yp, r336_contrast, r336_upright)];
            var _r336_t6 = r336_points.slice(2, -1);
            var _r336_t7 = _r336_t6.length;
            var _r336_t8 = 0;
            while (_r336_t8 < _r336_t7) {
                _r336_t9 = _r336_t6[_r336_t8];
                r336_x = _r336_t9[0];
                r336_y = _r336_t9[1];
                r336_knots.push(r313_virt(r1_mix(r336_xp, r336_x, 0.5), r1_mix(r336_yp, r336_y, 0.5), r336_af));
                r336_knots.push(r313_xn$sharpcorner$1aao(r336_x, r336_y, r336_contrast, r336_upright));
                _r336_t10 = [r336_x, r336_y];
                r336_xp = _r336_t10[0];
                r336_yp = _r336_t10[1];
                _r336_t8 = _r336_t8 + 1;
            }
            var _r336_t11 = r336_points[r336_points.length - 1];
            r336_xp = _r336_t11[0];
            r336_yp = _r336_t11[1];
            r336_knots.push(r313_curl(r336_xp, r336_yp, r336_endAf));
            return r336_knots;
        };
        var r313_ClosedPolyline = function () {
            var r342_x, r342_y, _r342_t9, _r342_t10, _r342_t11;
            var _r342_t12 = arguments;
            var r342_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r342_t12, 0);
            var _r342_t0 = [];
            var _r342_t1 = 0;
            while (_r342_t1 < r342_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r342_xn$flexarguments$2Lrc7uIe5[_r342_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r342_t0.push(r342_xn$flexarguments$2Lrc7uIe5[_r342_t1]);
                _r342_t1 = _r342_t1 + 1;
            }
            var _r342_t2 = r342_xn$flexarguments$2Lrc7uIe5;
            var _r342_t3 = _r342_t2.length;
            var _r342_t4 = 0;
            while (_r342_t4 < _r342_t3) {
                _r342_t1 = _r342_t2[_r342_t4];
                if (_r342_t1 && _r342_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r342_t1.left === "af") r342_af = _r342_t1.right;
                if (_r342_t1 && _r342_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r342_t1.left === "points") r342_points = _r342_t1.right;
                if (_r342_t1 && _r342_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r342_t1.left === "contrast") r342_contrast = _r342_t1.right;
                if (_r342_t1 && _r342_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r342_t1.left === "upright") r342_upright = _r342_t1.right;
                _r342_t4 = _r342_t4 + 1;
            }
            var r342_af = r1_fallback(r342_af, _r342_t0[0]);
            var r342_points = r1_fallback(r342_points, _r342_t0[1]);
            var r342_contrast = r1_fallback(r342_contrast, _r342_t0[2], r313_HVContrast);
            var r342_upright = r1_fallback(r342_upright, _r342_t0[3], 0);
            var _r342_t5 = r342_points[r342_points.length - 1];
            var r342_xp = _r342_t5[0];
            var r342_yp = _r342_t5[1];
            var r342_knots = [];
            var _r342_t6 = r342_points;
            var _r342_t7 = _r342_t6.length;
            var _r342_t8 = 0;
            while (_r342_t8 < _r342_t7) {
                _r342_t9 = _r342_t6[_r342_t8];
                r342_x = _r342_t9[0];
                r342_y = _r342_t9[1];
                r342_knots.push(r313_virt(r1_mix(r342_xp, r342_x, 0.5), r1_mix(r342_yp, r342_y, 0.5), r342_af));
                r342_knots.push(r313_xn$sharpcorner$1aao(r342_x, r342_y, r342_contrast, r342_upright));
                _r342_t10 = [r342_x, r342_y];
                r342_xp = _r342_t10[0];
                r342_yp = _r342_t10[1];
                _r342_t8 = _r342_t8 + 1;
            }
            r342_knots.push(r313_close());
            return r342_knots;
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r349_t0, _r349_t1;
            return {
                "TriangleShape": r313_TriangleShape
            };
        });
        var r313_TriangleShape = function (r350_x1, r350_y1, r350_x2, r350_y2, r350_x3, r350_y3, r350_sw) {
            var _r350_t0, _r350_t1;
            var r350_widthSide = (r350_y2 - r350_y1) * (r350_y3 - r350_y2) + (r350_x2 - r350_x1) * (r350_x3 - r350_x2) < 0 ? r313_widths.rhs : r313_widths.lhs;
            return r313_intersection(r313_xn$spirooutline$1aao(r313_corner(r350_x1, r350_y1), r313_corner(r350_x2, r350_y2), r313_corner(r350_x3, r350_y3)), r313_union(r313_dispiro(r350_widthSide(r350_sw), r313_corner(r350_x1, r350_y1), r313_corner(r350_x2, r350_y2)), r313_dispiro(r350_widthSide(r350_sw), r313_corner(r350_x2, r350_y2), r313_corner(r350_x3, r350_y3)), r313_dispiro(r350_widthSide(r350_sw), r313_corner(r350_x3, r350_y3), r313_corner(r350_x1, r350_y1))));
        };
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r352_t0, _r352_t1;
            return {
                "HZigzag": r313_HZigzag,
                "VZigzag": r313_VZigzag
            };
        });
        var r313_HZigzag = (function () {
            var r355_fromSide, r355_fromCenter;
            var r355_exports = {};
            var r355_getOffset = function (r362_dx, r362_dy, r362_upright, r362_sw) {
                var _r362_t0, _r362_t1;
                var r362_T = new r1_Point(r1_Point.Type.Corner, r362_dx, r362_dy);
                var r362_N = r313_TangentToNormal(r362_T, r313_HVContrast, r362_upright ? 0 : void 0);
                var r362_D = r362_T.scale(r362_N.x / r362_T.x * r362_sw / 2);
                return r362_D;
            };
            r355_exports.fromSide = r355_fromSide = function (r364_midy, r364_left, r364_right, r364_amp, r364_sgmts, r364_phase, r364_sw, r364_upright) {
                var _r364_t0, _r364_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
                    var _r366_t2, _r366_t3;
                    var r366_halfPeriod = (r364_right - r364_left) / r364_sgmts;
                    var r366_posOff = r355_getOffset(r366_halfPeriod, 2 * r364_amp, r364_upright, -r364_sw);
                    var r366_negOff = r355_getOffset(r366_halfPeriod, -2 * r364_amp, r364_upright, r364_sw);
                    var r366_pos = r364_midy + r364_amp;
                    var r366_neg = r364_midy - r364_amp;
                    var r366_points = [];
                    r366_points.push([r364_phase ? r364_left - r366_posOff.x : r364_left - r366_negOff.x, r364_phase ? r366_neg - r366_posOff.y : r366_pos - r366_negOff.y]);
                    var _r366_t0 = 1;
                    var _r366_t1 = r364_sgmts;
                    var r366_j = _r366_t0;
                    while (r366_j < _r366_t1) {
                        r366_points.push([r364_left + r366_j * r366_halfPeriod, (r366_j + r364_phase) % 2 ? r366_neg : r366_pos]);
                        r366_j = r366_j + 1;
                    }
                    r366_points.push([(r364_sgmts + r364_phase) % 2 ? r364_right + r366_negOff.x : r364_right + r366_posOff.x, (r364_sgmts + r364_phase) % 2 ? r366_neg + r366_negOff.y : r366_pos + r366_posOff.y]);
                    r366_currentGlyph.include(r313_dispiro(r313_Polyline(r313_widths.center(r364_sw), r366_points, new r313_xn$NamedParameterPair$2Lrc9b("upright", r364_upright))));
                    return void 0;
                });
            };
            r355_exports.fromCenter = r355_fromCenter = function (r372_midy, r372_left, r372_right, r372_amp, r372_sgmts, r372_phase, r372_sw, r372_upright) {
                var _r372_t0, _r372_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
                    var _r374_t2, _r374_t3;
                    var r374_halfPeriod = (r372_right - r372_left) / r372_sgmts;
                    var r374_posOff = r355_getOffset(r374_halfPeriod, 2 * r372_amp, r372_upright, -r372_sw);
                    var r374_negOff = r355_getOffset(r374_halfPeriod, -2 * r372_amp, r372_upright, r372_sw);
                    var r374_pos = r372_midy + r372_amp;
                    var r374_neg = r372_midy - r372_amp;
                    var r374_points = [];
                    r374_points.push([r372_phase ? r372_left - r374_negOff.x : r372_left - r374_posOff.x, r372_phase ? r372_midy - r374_negOff.y : r372_midy - r374_posOff.y]);
                    var _r374_t0 = 0;
                    var _r374_t1 = r372_sgmts;
                    var r374_j = _r374_t0;
                    while (r374_j < _r374_t1) {
                        r374_points.push([r372_left + (r374_j + 0.5) * r374_halfPeriod, (r374_j + r372_phase) % 2 ? r374_neg : r374_pos]);
                        r374_j = r374_j + 1;
                    }
                    r374_points.push([(r372_sgmts + r372_phase) % 2 ? r372_right + r374_negOff.x : r372_right + r374_posOff.x, (r372_sgmts + r372_phase) % 2 ? r372_midy + r374_negOff.y : r372_midy + r374_posOff.y]);
                    r374_currentGlyph.include(r313_dispiro(r313_Polyline(r313_widths.center(r372_sw), r374_points, new r313_xn$NamedParameterPair$2Lrc9b("upright", r372_upright))));
                    return void 0;
                });
            };
            return r355_exports;
        })();
        return r313_VZigzag = (function () {
            var r381_fromSide, r381_fromCenter;
            var r381_exports = {};
            var r381_getOffset = function (r388_dx, r388_dy, r388_upright, r388_sw) {
                var _r388_t0, _r388_t1;
                var r388_T = new r1_Point(r1_Point.Type.Corner, r388_dx, r388_dy);
                var r388_N = r313_TangentToNormal(r388_T, r313_HVContrast, r388_upright ? 0 : void 0);
                var r388_D = r388_T.scale(r388_N.y / r388_T.y * r388_sw / 2);
                return r388_D;
            };
            r381_exports.fromSide = r381_fromSide = function (r390_midx, r390_bot, r390_top, r390_amp, r390_sgmts, r390_phase, r390_sw, r390_upright) {
                var _r390_t0, _r390_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r392_currentGlyph) {
                    var _r392_t2, _r392_t3;
                    var r392_halfPeriod = (r390_top - r390_bot) / r390_sgmts;
                    var r392_posOff = r381_getOffset(2 * r390_amp, r392_halfPeriod, r390_upright, r390_sw);
                    var r392_negOff = r381_getOffset(-2 * r390_amp, r392_halfPeriod, r390_upright, -r390_sw);
                    var r392_pos = r390_midx + r390_amp;
                    var r392_neg = r390_midx - r390_amp;
                    var r392_points = [];
                    r392_points.push([r390_phase ? r392_neg - r392_posOff.x : r392_pos - r392_negOff.x, r390_phase ? r390_bot - r392_posOff.y : r390_bot - r392_negOff.y]);
                    var _r392_t0 = 1;
                    var _r392_t1 = r390_sgmts;
                    var r392_j = _r392_t0;
                    while (r392_j < _r392_t1) {
                        r392_points.push([(r392_j + r390_phase) % 2 ? r392_neg : r392_pos, r390_bot + r392_j * r392_halfPeriod]);
                        r392_j = r392_j + 1;
                    }
                    r392_points.push([(r390_sgmts + r390_phase) % 2 ? r392_neg + r392_negOff.x : r392_pos + r392_posOff.x, (r390_sgmts + r390_phase) % 2 ? r390_top + r392_negOff.y : r390_top + r392_posOff.y]);
                    r392_currentGlyph.include(r313_dispiro(r313_Polyline(r313_widths.center(r390_sw), r392_points, new r313_xn$NamedParameterPair$2Lrc9b("upright", r390_upright))));
                    return void 0;
                });
            };
            r381_exports.fromCenter = r381_fromCenter = function (r398_midx, r398_bot, r398_top, r398_amp, r398_sgmts, r398_phase, r398_sw, r398_upright) {
                var _r398_t0, _r398_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r400_currentGlyph) {
                    var _r400_t2, _r400_t3;
                    var r400_halfPeriod = (r398_top - r398_bot) / r398_sgmts;
                    var r400_posOff = r381_getOffset(2 * r398_amp, r400_halfPeriod, r398_upright, r398_sw);
                    var r400_negOff = r381_getOffset(-2 * r398_amp, r400_halfPeriod, r398_upright, -r398_sw);
                    var r400_pos = r398_midx + r398_amp;
                    var r400_neg = r398_midx - r398_amp;
                    var r400_points = [];
                    r400_points.push([r398_phase ? r398_midx - r400_negOff.x : r398_midx - r400_posOff.x, r398_phase ? r398_bot - r400_negOff.y : r398_bot - r400_posOff.y]);
                    var _r400_t0 = 0;
                    var _r400_t1 = r398_sgmts;
                    var r400_j = _r400_t0;
                    while (r400_j < _r400_t1) {
                        r400_points.push([(r400_j + r398_phase) % 2 ? r400_neg : r400_pos, r398_bot + (r400_j + 0.5) * r400_halfPeriod]);
                        r400_j = r400_j + 1;
                    }
                    r400_points.push([(r398_sgmts + r398_phase) % 2 ? r398_midx + r400_negOff.x : r398_midx + r400_posOff.x, (r398_sgmts + r398_phase) % 2 ? r398_top + r400_negOff.y : r398_top + r400_posOff.y]);
                    r400_currentGlyph.include(r313_dispiro(r313_Polyline(r313_widths.center(r398_sw), r400_points, new r313_xn$NamedParameterPair$2Lrc9b("upright", r398_upright))));
                    return void 0;
                });
            };
            return r381_exports;
        })();
    });
    return void 0;
});


