"use strict";
import * as _s0_t0 from "@iosevka/util";
var _s0_t1;
export {_s0_t1 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t9;
var _r1_t2 = function _r1_t9(r333_t) {
    var r333_n, r333_i, r333_a, _r333_t3, _r333_t4, _r333_t5, _r333_t6, _r333_t7, _r333_t8, _r333_t9, _r333_t10, _r333_t11, _r333_t12, _r333_t13, _r333_t14, _r333_t15, _r333_t16, _r333_t17, _r333_t18, _r333_t19, _r333_t20, _r333_t21, _r333_t22, _r333_t23, _r333_t24, _r333_t25, _r333_t26;
    var _r333_t0 = function () {
        _r333_t7 = function (_r333_t8) {
            _r333_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r333_t8
            };
        };
        _r333_t9 = r333_t instanceof Array;
        if (_r333_t9) {
            _r333_t10 = r333_n = r333_t.length;
            _r333_t11 = r333_i = 0;
            _r333_t12 = function (_r333_t14) {
                return _r333_t7(_r333_t14);
            };
            _r333_t13 = function (_r333_t15) {
                _r333_t16 = r333_i < r333_n;
                if (_r333_t16) {
                    _r333_t0 = function (_r333_t17) {
                        return _r333_t13(r333_i = r333_i + 1);
                    };
                    return {
                        "value": [r333_i, r333_t[r333_i]],
                        "done": false
                    };
                } else return _r333_t12(_r333_t15);
            };
            return _r333_t13();
        } else {
            _r333_t18 = r333_a = Object.keys(r333_t);
            _r333_t19 = r333_n = r333_a.length;
            _r333_t20 = r333_i = 0;
            _r333_t21 = function (_r333_t23) {
                return _r333_t7(_r333_t23);
            };
            _r333_t22 = function (_r333_t24) {
                _r333_t25 = r333_i < r333_n;
                if (_r333_t25) {
                    _r333_t0 = function (_r333_t26) {
                        return _r333_t22(r333_i = r333_i + 1);
                    };
                    return {
                        "value": [r333_a[r333_i], r333_t[r333_a[r333_i]]],
                        "done": false
                    };
                } else return _r333_t21(_r333_t24);
            };
            return _r333_t22();
        }
    };
    var _r333_t1 = function (x) {
        try {
            return _r333_t0(x);
        } catch (ex) {
            return _r333_t2(ex);
        }
    };
    var _r333_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t9) _r333_t3 = this; else {
        _r333_t4 = function () {
            void 0;
        };
        _r333_t4.prototype = _r1_t9.prototype;
        _r333_t3 = new _r333_t4();
    }
    _r333_t3[Symbol.iterator] = function () {
        return _r333_t3;
    };
    _r333_t3.next = _r333_t1;
    _r333_t3.throw = function (x) {
        return _r333_t2(x);
    };
    return _r333_t3;
};
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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Lower-Theta", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_ShapeBase, r312_y0R, _r312_t11, _r312_t12, _r312_t13;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var r312_AS_BASE = _r312_t0.AS_BASE;
        var r312_ALSO_METRICS = _r312_t0.ALSO_METRICS;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_Ascender = _r312_t1.Ascender;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Downward = _r312_t1.Downward;
        var r312_O = _r312_t1.O;
        var r312_OX = _r312_t1.OX;
        var r312_SmallArchDepth = _r312_t1.SmallArchDepth;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_AdviceStroke2 = _r312_t1.AdviceStroke2;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_ArchDepthAOf = _r312_t1.ArchDepthAOf;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var r312_YSmoothMidR = _r312_t1.YSmoothMidR;
        var r312_ArchDepthAClamped = _r312_t1.ArchDepthAClamped;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_archv = _r312_t2.archv;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_MaskLeft = _r312_t5.MaskLeft;
        var r312_OShapeT = _r312_t5.OShapeT;
        var r312_HBar = _r312_t5.HBar;
        var r312_Arch = _r312_t5.Arch;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var r312_xn$deriveglyphs$7Hrq = _r312_t6["derive-glyphs"];
        var r312_alias = _r312_t6.alias;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-OShape-Variants"].resolve();
        var r312_OvalShapeT = _r312_t7.OvalShapeT;
        var r312_DiamondShapeT = _r312_t7.DiamondShapeT;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_PalatalHook = _r312_t8.PalatalHook;
        var r312_ThetaShapeBase = function (r317_shapeT) {
            var _r317_t0, _r317_t1, _r317_t2, _r317_tag3;
            return (function () {
                var r320_Shape, r320_Mask;
                var r320_exports = {};
                var r320_outlineT = function (r327_sink, r327_offsetX, r327_offsetY, r327_top) {
                    var _r327_t0, _r327_t1;
                    return r317_shapeT(r327_sink, r327_top - r327_offsetY, 0 + r327_offsetY, r312_SB + r327_offsetX, r312_RightSB - r327_offsetX);
                };
                r320_exports.Shape = r320_Shape = function (r329_top) {
                    var _r329_t0, _r329_t1;
                    return r320_outlineT(r312_dispiro, 0, 0, r329_top);
                };
                r320_exports.Mask = r320_Mask = function (r331_top) {
                    var _r331_t0, _r331_t1;
                    return r320_outlineT(r312_xn$spirooutline$1aao, 1, 1, r331_top);
                };
                return r320_exports;
            })();
        };
        var r312_Capsule = r312_ThetaShapeBase(r312_OShapeT);
        var r312_Oval = r312_ThetaShapeBase(r312_OvalShapeT);
        var r312_Diamond = r312_ThetaShapeBase(r312_DiamondShapeT);
        var r312_ThetaConfig = {
            "capsule": [r312_Capsule, r312_ArchDepthAClamped(r312_Ascender, 0, r312_SmallArchDepthA, r312_SmallArchDepthB)],
            "oval": [r312_Oval, r312_YSmoothMidR(r312_Ascender, 0, r312_SmallArchDepthA, r312_SmallArchDepthB)],
            "diamond": [r312_Diamond, null]
        };
        var _r312_t9 = _r1_t2(r312_ThetaConfig)[Symbol.iterator]();
        var _r312_t10 = void 0;
        while (!(_r312_t10 = _r312_t9.next()).done) {
            _r312_t11 = _r312_t10.value;
            r312_suffix = _r312_t11[0];
            r312_ShapeBase = _r312_t11[1][0];
            r312_y0R = _r312_t11[1][1];
            _r312_t11[1];
            r312_xn$GlyphSaveSink$2Lrc4b.save("grek/theta." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                var _r337_t0, _r337_t1;
                r337_currentGlyph.include(r312_MarkSet.b());
                r337_currentGlyph.include(r312_ShapeBase.Shape(r312_Ascender));
                r337_currentGlyph.include(r312_intersection(r312_ShapeBase.Mask(r312_Ascender), r312_HBar.m(r312_SB, r312_RightSB, r1_mix(0, r312_Ascender, 0.5))));
                if (r312_y0R) r337_currentGlyph.setBaseAnchor("palatalHookAttach", r1_mix(r312_Arch["adjust-x"].bot(r312_Middle), r312_RightSB - r312_OX, 0.75), r1_mix(r312_O, r312_y0R, r312_archv.yFromX(0.75)));
                return void 0;
            }));
        }
        r312_xn$GlyphSaveSink$2Lrc4b.save("grek/theta.cursive", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
            var _r344_t0, _r344_t1;
            r344_currentGlyph.include(r312_MarkSet.b());
            var r344_pXTopLeft = 0.2;
            var r344_xTopLeft = r1_mix(r312_SB, r312_RightSB, r344_pXTopLeft);
            var r344_coXTopLeft = r1_mix(r312_SB, r312_RightSB, 2 - r344_pXTopLeft);
            var r344_topSMA = r312_ArchDepthAOf(r312_SmallArchDepth * (1 - r344_pXTopLeft), r312_Width * (1 - r344_pXTopLeft));
            var r344_topSMB = r312_ArchDepthBOf(r312_SmallArchDepth * (1 - r344_pXTopLeft), r312_Width * (1 - r344_pXTopLeft));
            var r344_fine = r312_AdviceStroke2(3, 3, r312_Ascender);
            r344_currentGlyph.include(r312_intersection(r312_MaskLeft(r1_mix(r312_RightSB, r312_Width, 0.5)), r312_dispiro(r312_widths.lhs(), r312_flat(r312_SB + r312_OX, r1_mix(0, r312_Ascender, 0.45), r312_heading(r312_Downward)), r312_curl(r312_SB + r312_OX, 0 + r312_SmallArchDepthB), r312_Arch.lhs(0), r312_flat(r312_RightSB - r312_OX, 0 + r312_SmallArchDepthA), r312_curl(r312_RightSB - r312_OX, r312_Ascender - r344_topSMB), r312_Arch.lhs(r312_Ascender, new r312_xn$NamedParameterPair$2Lrc9b("swAfter", r344_fine), new r312_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r312_g4(r344_xTopLeft, r312_Ascender - r344_topSMA, r312_widths.lhs(r344_fine)), r312_g4(r1_mix(r344_xTopLeft, r312_RightSB, 0.5), r1_mix(r312_Ascender - r344_topSMA, r1_mix(0, r312_Ascender, 0.5) - r312_HalfStroke, 0.9)), r312_g4(r1_mix(r312_RightSB, r312_Width, 0.5), r1_mix(0, r312_Ascender, 0.5) - r312_HalfStroke), r312_g4(r344_coXTopLeft, r312_Ascender - r344_topSMA))));
            return void 0;
        }));
        r312_xn$selectvariant$7Hrq("grek/theta", 952);
        r312_xn$selectvariant$7Hrq("grek/theta/nonCursive", new r312_xn$NamedParameterPair$2Lrc9b("shapeFrom", "grek/theta"));
        r312_alias("grek/thetaSymbol", 977, "grek/theta.cursive");
        return r312_xn$deriveglyphs$7Hrq("latn/thetaPalatalHook", 122684, "grek/theta/nonCursive", function (r350_src, r350_gr) {
            var _r350_t0, _r350_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                var _r352_t0, _r352_t1;
                r352_currentGlyph.include(r312_xn$referglyph$1aao(r350_src), r312_AS_BASE, r312_ALSO_METRICS);
                var r352_attach = r352_currentGlyph.gizmo.unapplyIfPresent(r352_currentGlyph.baseAnchors.palatalHookAttach);
                r352_currentGlyph.include(r352_attach ? r312_PalatalHook.r(r352_attach.x, 0, new r312_xn$NamedParameterPair$2Lrc9b("yAttach", r352_attach.y)) : r312_PalatalHook.r(r312_Middle + r312_HSwToV(r312_HalfStroke) + r312_PalatalHook.adviceGap(r312_Stroke), r312_O, new r312_xn$NamedParameterPair$2Lrc9b("xLink", r312_Middle), new r312_xn$NamedParameterPair$2Lrc9b("refSw", r312_AdviceStroke(3))));
                return void 0;
            });
        });
    });
    return void 0;
});


