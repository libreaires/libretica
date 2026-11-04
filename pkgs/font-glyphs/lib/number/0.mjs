"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r363_t) {
    var r363_n, r363_i, r363_a, _r363_t3, _r363_t4, _r363_t5, _r363_t6, _r363_t7, _r363_t8, _r363_t9, _r363_t10, _r363_t11, _r363_t12, _r363_t13, _r363_t14, _r363_t15, _r363_t16, _r363_t17, _r363_t18, _r363_t19, _r363_t20, _r363_t21, _r363_t22, _r363_t23, _r363_t24, _r363_t25, _r363_t26;
    var _r363_t0 = function () {
        _r363_t7 = function (_r363_t8) {
            _r363_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r363_t8
            };
        };
        _r363_t9 = r363_t instanceof Array;
        if (_r363_t9) {
            _r363_t10 = r363_n = r363_t.length;
            _r363_t11 = r363_i = 0;
            _r363_t12 = function (_r363_t14) {
                return _r363_t7(_r363_t14);
            };
            _r363_t13 = function (_r363_t15) {
                _r363_t16 = r363_i < r363_n;
                if (_r363_t16) {
                    _r363_t0 = function (_r363_t17) {
                        return _r363_t13(r363_i = r363_i + 1);
                    };
                    return {
                        "value": [r363_i, r363_t[r363_i]],
                        "done": false
                    };
                } else return _r363_t12(_r363_t15);
            };
            return _r363_t13();
        } else {
            _r363_t18 = r363_a = Object.keys(r363_t);
            _r363_t19 = r363_n = r363_a.length;
            _r363_t20 = r363_i = 0;
            _r363_t21 = function (_r363_t23) {
                return _r363_t7(_r363_t23);
            };
            _r363_t22 = function (_r363_t24) {
                _r363_t25 = r363_i < r363_n;
                if (_r363_t25) {
                    _r363_t0 = function (_r363_t26) {
                        return _r363_t22(r363_i = r363_i + 1);
                    };
                    return {
                        "value": [r363_a[r363_i], r363_t[r363_a[r363_i]]],
                        "done": false
                    };
                } else return _r363_t21(_r363_t24);
            };
            return _r363_t22();
        }
    };
    var _r363_t1 = function (x) {
        try {
            return _r363_t0(x);
        } catch (ex) {
            return _r363_t2(ex);
        }
    };
    var _r363_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r363_t3 = this; else {
        _r363_t4 = function () {
            void 0;
        };
        _r363_t4.prototype = _r1_t10.prototype;
        _r363_t3 = new _r363_t4();
    }
    _r363_t3[Symbol.iterator] = function () {
        return _r363_t3;
    };
    _r363_t3.next = _r363_t1;
    _r363_t3.throw = function (x) {
        return _r363_t2(x);
    };
    return _r363_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_VS01 = _r1_t9.VS01;
var r1_Zero = _r1_t9.Zero;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Digits-Zero", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Outline, r313_Overlay, r313_Postproc, r313_infix, r313_height, r313_Marks, _r313_t11, _r313_t12, _r313_t13, _r313_t14, _r313_t16, _r313_t17;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_DotRadius = _r313_t1.DotRadius;
        var r313_ArchDepthAOf = _r313_t1.ArchDepthAOf;
        var r313_ArchDepthBOf = _r313_t1.ArchDepthBOf;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
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
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_Rect = _r313_t5.Rect;
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_MaskRight = _r313_t5.MaskRight;
        var r313_OShapeT = _r313_t5.OShapeT;
        var r313_OShape = _r313_t5.OShape;
        var r313_OShapeOutline = _r313_t5.OShapeOutline;
        var r313_VBar = _r313_t5.VBar;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$queryglyph$1aao = _r313_t6["query-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-OShape-Variants"].resolve();
        var r313_OvalShapeT = _r313_t7.OvalShapeT;
        var r313_DiamondShapeT = _r313_t7.DiamondShapeT;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Digits-Shared"].resolve();
        var r313_OnumHeight = _r313_t8.OnumHeight;
        var r313_OnumMarks = _r313_t8.OnumMarks;
        var r313_CodeLnum = _r313_t8.CodeLnum;
        var r313_CodeOnum = _r313_t8.CodeOnum;
        var r313_CircleInnerWidth = r313_RightSB - r313_SB - r313_HSwToV(2 * r313_Stroke);
        var r313_SplitSlashGap = r313_HSwToV(r313_Stroke) + r1_clamp(r313_CircleInnerWidth / 5, r313_CircleInnerWidth / 3, r313_HSwToV(r313_AdviceStroke(5)));
        var r313_CutoutVerticalStrokeWidth = Math.max(0.2 * r313_CircleInnerWidth, Math.min(0.4 * r313_CircleInnerWidth, r313_AdviceStroke(3)));
        var r313_CutoutStrokeWidth = function (r318_top) {
            var _r318_t0, _r318_t1;
            return Math.max(0.1 * r318_top, Math.min(0.125 * r318_top, 0.5 * r313_CircleInnerWidth, r313_AdviceStroke(3)));
        };
        var r313_ZeroShapeBase = function (r319_shapeT) {
            var _r319_t0, _r319_t1, _r319_t2, _r319_tag3;
            return (function () {
                var r322_Shape, r322_Mask;
                var r322_exports = {};
                var r322_outlineT = function (r329_sink, r329_offsetX, r329_offsetY, r329_top) {
                    var _r329_t0, _r329_t1;
                    return r319_shapeT(r329_sink, r329_top - r329_offsetY, r329_offsetY, r313_SB + r329_offsetX, r313_RightSB - r329_offsetX);
                };
                r322_exports.Shape = r322_Shape = function (r331_top) {
                    var _r331_t0, _r331_t1;
                    return r322_outlineT(r313_dispiro, 0, 0, r331_top);
                };
                r322_exports.Mask = r322_Mask = function (r333_top) {
                    var _r333_t0, _r333_t1;
                    return r322_outlineT(r313_xn$spirooutline$1aao, 1, 1, r333_top);
                };
                return r322_exports;
            })();
        };
        var r313_Capsule = r313_ZeroShapeBase(r313_OShapeT);
        var r313_Oval = r313_ZeroShapeBase(r313_OvalShapeT);
        var r313_Diamond = r313_ZeroShapeBase(r313_DiamondShapeT);
        var r313_InsetShape = function (r334_zero, r334_overlay, r334_fnMask, r334_height) {
            var _r334_t0, _r334_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                var _r336_t0, _r336_t1;
                r336_currentGlyph.include(r334_zero);
                if (r334_fnMask) r336_currentGlyph.include(r313_intersection(r334_overlay, r313_xn$withtransform$5sIl(r313_ApparentTranslate(-r313_SplitSlashGap, 0), r334_fnMask(r334_height)), r313_xn$withtransform$5sIl(r313_ApparentTranslate(r313_SplitSlashGap, 0), r334_fnMask(r334_height)))); else r336_currentGlyph.include(r334_overlay);
                return void 0;
            });
        };
        var r313_Cutout = function (r340_zero, r340_overlay, r340_fnMask, r340_height) {
            var _r340_t0, _r340_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                var _r342_t0, _r342_t1;
                if (r340_overlay) r342_currentGlyph.include(r313_difference(r340_zero, r340_overlay)); else r342_currentGlyph.include(r340_zero);
                return void 0;
            });
        };
        var r313_ZeroSlash = function (r345_top) {
            var _r345_t0, _r345_t1;
            return r313_dispiro(r313_flat(0, r345_top * (1 - 0.77), r313_widths.center(r313_OverlayStroke)), r313_curl(r313_Width, r345_top * 0.77));
        };
        var r313_ZeroRevSlash = function (r346_top) {
            var _r346_t0, _r346_t1;
            return r313_dispiro(r313_flat(0, r346_top * 0.77, r313_widths.center(r313_OverlayStroke)), r313_curl(r313_Width, r346_top * (1 - 0.77)));
        };
        var r313_ZeroTallSlash = function (r347_top) {
            var _r347_t0, _r347_t1;
            return r313_dispiro(r313_flat(0, 0, r313_widths.center(r313_OverlayStroke)), r313_curl(r313_Width, r347_top));
        };
        var r313_ZeroTallRevSlash = function (r348_top) {
            var _r348_t0, _r348_t1;
            return r313_dispiro(r313_flat(0, r348_top, r313_widths.center(r313_OverlayStroke)), r313_curl(r313_Width, 0));
        };
        var r313_CutoutSlash = function (r349_top) {
            var _r349_t0, _r349_t1;
            return r313_dispiro(r313_flat(0, r349_top * (1 - 0.77), r313_widths.center(r313_CutoutStrokeWidth(r349_top))), r313_curl(r313_Width, r349_top * 0.77));
        };
        var r313_CutoutRevSlash = function (r350_top) {
            var _r350_t0, _r350_t1;
            return r313_dispiro(r313_flat(0, r350_top * 0.77, r313_widths.center(r313_CutoutStrokeWidth(r350_top))), r313_curl(r313_Width, r350_top * (1 - 0.77)));
        };
        var r313_CutoutTallSlash = function (r351_top) {
            var _r351_t0, _r351_t1;
            return r313_dispiro(r313_flat(0, 0, r313_widths.center(r313_CutoutStrokeWidth(r351_top))), r313_curl(r313_Width, r351_top));
        };
        var r313_CutoutTallRevSlash = function (r352_top) {
            var _r352_t0, _r352_t1;
            return r313_dispiro(r313_flat(0, r352_top, r313_widths.center(r313_CutoutStrokeWidth(r352_top))), r313_curl(r313_Width, 0));
        };
        var r313_CutoutVerticalBar = function (r353_top) {
            var _r353_t0, _r353_t1;
            return r313_VBar.m(r313_Middle, 0 + r313_O, r353_top - r313_O, r313_CutoutVerticalStrokeWidth);
        };
        var r313_TopRightCutoutSlash = function (r354_top) {
            var _r354_t0, _r354_t1;
            return r313_intersection(r313_MaskRight(r313_Middle), r313_dispiro(r313_flat(0, r354_top - r313_Width * 0.875, r313_widths.center(r313_CutoutStrokeWidth(r354_top))), r313_curl(r313_Width * 0.875, r354_top)));
        };
        var r313_BrokenTallSlash = function (r355_top) {
            var _r355_t0, _r355_t1;
            return r313_difference(r313_dispiro(r313_widths.center(Math.min(r313_CircleInnerWidth * 0.5, r313_OverlayStroke)), r313_flat(r313_SB + r313_OX + 0.5 * r313_OverlayStroke, r1_mix(r355_top, 0, 1.05)), r313_curl(r313_RightSB - r313_OX - 0.5 * r313_OverlayStroke, r1_mix(0, r355_top, 1.05))), r313_intersection(r313_MaskAbove(r355_top * 0.425), r313_MaskBelow(r355_top * (1 - 0.425))));
        };
        var r313_BrokenTallRevSlash = function (r356_top) {
            var _r356_t0, _r356_t1;
            return r313_difference(r313_dispiro(r313_widths.center(Math.min(r313_CircleInnerWidth * 0.5, r313_OverlayStroke)), r313_flat(r313_SB + r313_OX + 0.5 * r313_OverlayStroke, r1_mix(0, r356_top, 1.05)), r313_curl(r313_RightSB - r313_OX - 0.5 * r313_OverlayStroke, r1_mix(r356_top, 0, 1.05))), r313_intersection(r313_MaskAbove(r356_top * 0.425), r313_MaskBelow(r356_top * (1 - 0.425))));
        };
        var r313_BrokenVerticalBar = function (r357_top) {
            var _r357_t0, _r357_t1;
            return r313_difference(r313_VBar.m(r313_Middle, 0 + r313_O, r357_top - r313_O, Math.min(r313_CircleInnerWidth * 0.375, r313_OverlayStroke)), r313_intersection(r313_MaskAbove(r357_top * (1 / 2 - 1 / 16)), r313_MaskBelow(r357_top * (1 / 2 + 1 / 16))));
        };
        var r313_ZeroDotShape = function (r358_top) {
            var _r358_t0, _r358_t1;
            var r358_halfDotWidth = Math.max(r313_DotRadius / 8, Math.min(r313_DotRadius, r313_CircleInnerWidth / 4));
            return r313_OShapeOutline.NoOvershoot(r358_top / 2 + r313_DotRadius, r358_top / 2 - r313_DotRadius, r313_Middle - r358_halfDotWidth, r313_Middle + r358_halfDotWidth, r313_Stroke * r358_halfDotWidth * 2 / r313_Width, r313_ArchDepthAOf(r358_halfDotWidth, r358_halfDotWidth * 2), r313_ArchDepthBOf(r358_halfDotWidth, r358_halfDotWidth * 2));
        };
        var r313_ZeroLongDotShape = function (r359_top) {
            var _r359_t0, _r359_t1;
            var r359_halfDotWidth = Math.max(r313_DotRadius / 8, Math.min(r313_HalfStroke, r313_CircleInnerWidth / 4));
            var r359_halfDotHeight = Math.max(r313_DotRadius, Math.min((r359_top - r313_Stroke * 2) / 4, (r359_top - r313_Stroke * 2 - (r313_CircleInnerWidth - r359_halfDotWidth * 2)) / 2));
            return r313_OShapeOutline.NoOvershoot(r359_top / 2 + r359_halfDotHeight, r359_top / 2 - r359_halfDotHeight, r313_Middle - r359_halfDotWidth, r313_Middle + r359_halfDotWidth, r313_Stroke * r359_halfDotWidth * 2 / r313_Width, r313_ArchDepthAOf(r359_halfDotWidth, r359_halfDotWidth * 2), r313_ArchDepthBOf(r359_halfDotWidth, r359_halfDotWidth * 2));
        };
        var r313_ZeroConfig = r1_SuffixCfg.weave({
            "": r313_Capsule,
            "oval": r313_Oval,
            "diamond": r313_Diamond
        }, {
            "unslashed": [null, null],
            "slashed": [r313_ZeroSlash, null],
            "reverseSlashed": [r313_ZeroRevSlash, null],
            "tallSlashed": [r313_ZeroTallSlash, null],
            "tallReverseSlashed": [r313_ZeroTallRevSlash, null],
            "dotted": [r313_ZeroDotShape, null],
            "longDotted": [r313_ZeroLongDotShape, null],
            "slashedSplit": [r313_ZeroSlash, r313_InsetShape],
            "reverseSlashedSplit": [r313_ZeroRevSlash, r313_InsetShape],
            "brokenSlash": [r313_BrokenTallSlash, null],
            "brokenReverseSlash": [r313_BrokenTallRevSlash, null],
            "brokenVerticalBar": [r313_BrokenVerticalBar, null],
            "slashedCutout": [r313_CutoutSlash, r313_Cutout],
            "reverseSlashedCutout": [r313_CutoutRevSlash, r313_Cutout],
            "tallSlashedCutout": [r313_CutoutTallSlash, r313_Cutout],
            "tallReverseSlashedCutout": [r313_CutoutTallRevSlash, r313_Cutout],
            "verticalBarCutout": [r313_CutoutVerticalBar, r313_Cutout],
            "topRightCutout": [r313_TopRightCutoutSlash, r313_Cutout]
        });
        var r313_Heights = {
            "lnum": [r313_CAP, function () {
                var _r360_t0, _r360_t1;
                return r313_MarkSet.capital();
            }],
            "onum": [r313_OnumHeight, function () {
                var _r361_t0, _r361_t1;
                return r313_OnumMarks.e();
            }]
        };
        var _r313_t9 = _r1_t2(r313_ZeroConfig)[Symbol.iterator]();
        var _r313_t10 = void 0;
        while (!(_r313_t10 = _r313_t9.next()).done) {
            _r313_t11 = _r313_t10.value;
            r313_suffix = _r313_t11[0];
            r313_Outline = _r313_t11[1][0];
            r313_Overlay = _r313_t11[1][1][0];
            r313_Postproc = _r313_t11[1][1][1];
            _r313_t11[1][1];
            _r313_t11[1];
            _r313_t12 = _r1_t2(r313_Heights)[Symbol.iterator]();
            _r313_t13 = void 0;
            while (!(_r313_t13 = _r313_t12.next()).done) {
                _r313_t14 = _r313_t13.value;
                r313_infix = _r313_t14[0];
                r313_height = _r313_t14[1][0];
                r313_Marks = _r313_t14[1][1];
                _r313_t14[1];
                r313_xn$GlyphSaveSink$2Lrc4b.save("zero." + r313_infix + "." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                    var _r369_t0, _r369_t1;
                    r369_currentGlyph.include(r313_Marks());
                    var r369_zeroShape = r313_Outline.Shape(r313_height);
                    var r369_overlayShape = r313_Overlay ? r313_Overlay(r313_height) : null;
                    if (r313_Postproc) r369_currentGlyph.include(r313_Postproc(r369_zeroShape, r369_overlayShape, r313_Outline.Mask, r313_height)); else {
                        r369_currentGlyph.include(r369_zeroShape);
                        if (r313_Overlay) if (r313_Outline.Mask) r369_currentGlyph.include(r313_intersection(r369_overlayShape, r313_Outline.Mask(r313_height))); else r369_currentGlyph.include(r369_overlayShape);
                    }
                    return void 0;
                }));
            }
        }
        r313_xn$selectvariant$7Hrq("zero.lnum", r313_CodeLnum("0"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "zero"));
        r313_xn$selectvariant$7Hrq("zero.onum", r313_CodeOnum("0"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "zero"));
        r313_xn$selectvariant$7Hrq("zero.lnum/forceSlashed", new r313_xn$NamedParameterPair$2Lrc9b("follow", "zero/forceSlashed"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "zero.lnum"));
        r313_xn$selectvariant$7Hrq("zero.onum/forceSlashed", new r313_xn$NamedParameterPair$2Lrc9b("follow", "zero/forceSlashed"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "zero.onum"));
        r313_xn$selectvariant$7Hrq("zero.lnum/forceUnslashed", new r313_xn$NamedParameterPair$2Lrc9b("follow", "zero/forceUnslashed"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "zero.lnum"));
        r313_xn$selectvariant$7Hrq("zero.onum/forceUnslashed", new r313_xn$NamedParameterPair$2Lrc9b("follow", "zero/forceUnslashed"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "zero.onum"));
        if (r313_xn$queryglyph$1aao("zero.lnum")) r1_VS01.set(r313_xn$queryglyph$1aao("zero.lnum"), "zero.lnum/forceSlashed");
        if (r313_xn$queryglyph$1aao("zero.onum")) r1_VS01.set(r313_xn$queryglyph$1aao("zero.onum"), "zero.onum/forceSlashed");
        if (r313_xn$queryglyph$1aao("zero.lnum")) r1_Zero.set(r313_xn$queryglyph$1aao("zero.lnum"), "zero.lnum/forceSlashed");
        if (r313_xn$queryglyph$1aao("zero.onum")) r1_Zero.set(r313_xn$queryglyph$1aao("zero.onum"), "zero.onum/forceSlashed");
        var _r313_t15 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t15.BBS;
        var r313_BBD = _r313_t15.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/zero", 120792, new r313_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
            var _r388_t0, _r388_t1;
            r388_currentGlyph.include(r313_MarkSet.capital());
            r388_currentGlyph.include(r313_OShape(r313_CAP, 0, r313_SB, r313_RightSB, r313_BBS));
            r388_currentGlyph.include(r313_intersection(r313_OShapeOutline.NoOvershoot(r313_CAP, 0, r313_SB, r313_RightSB, r313_BBS), r313_union(r313_VBar.l(r313_SB + r313_OX + r313_BBD, 0, r313_CAP, r313_BBS), r313_VBar.r(r313_RightSB - r313_OX - r313_BBD, 0, r313_CAP, r313_BBS), r313_intersection(r313_Rect(r313_CAP, 0, r313_SB + r313_BBD, r313_RightSB - r313_BBD), r313_dispiro(r313_flat(0, r313_CAP * (1 - 0.77), r313_widths.center(r313_BBS)), r313_curl(r313_Width, r313_CAP * 0.77))))));
            return void 0;
        }));
    });
    return void 0;
});


