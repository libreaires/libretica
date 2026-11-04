"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/transform";
import * as _s0_t2 from "@iosevka/geometry/point";
import * as _s0_t3 from "@iosevka/geometry/spiro-control";
import * as _s0_t4 from "@iosevka/geometry";
var _s0_t5;
export {_s0_t5 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_boole = _r1_t8.boole;
var r1_boolePn = _r1_t8.boolePn;
var _r1_t9 = _s0_t1;
var r1_Transform = _r1_t9.Transform;
var _r1_t10 = _s0_t2;
var r1_Vec2 = _r1_t10.Vec2;
var r1_Point = _r1_t10.Point;
var _r1_t11 = _s0_t3;
var r1_FunctionInterpolator = _r1_t11.FunctionInterpolator;
var r1_AfCombine = _r1_t11.AfCombine;
var _r1_t12 = _s0_t4;
var r1_RadicalGeometry = _r1_t12.RadicalGeometry;
var r1_StrokeGeometry = _r1_t12.StrokeGeometry;
var r1_RemoveHolesGeometry = _r1_t12.RemoveHolesGeometry;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t5 = r1_apply = function () {
    var r311_block, _r311_t4, _r311_t6;
    var _r311_t3 = this;
    var _r311_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r311_t1 = _r311_t0.length;
    var _r311_t2 = 0;
    var _r311_t5 = _r311_t2 < _r311_t1;
    while (_r311_t5) {
        _r311_t6 = (r311_block = _r311_t0[_r311_t2], r311_block(_r311_t3), _r311_t2 = _r311_t2 + 1);
        _r311_t5 = _r311_t2 < _r311_t1;
    }
    return _r311_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r315_xn$Capture_Ext$2Lrc2b) {
    var _r315_t0, _r315_t1;
    r315_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r315_xn$Capture_Ext$2Lrc2b, "CommonShapes", function (r316_xn$Capture$2Lrc8, r316_xn$ExportCapture$2Lrc4b) {
        var r316_xn$sharpcorner$1aao, _r316_t6, _r316_t7, _r316_t8, _r316_tag9, _r316_t10, _r316_tag11, _r316_t12, _r316_tag13, _r316_t14, _r316_tag15, _r316_t16, _r316_tag17, _r316_t18, _r316_tag19, _r316_t20, _r316_tag21, _r316_t22, _r316_tag23;
        var _r316_t0 = r316_xn$Capture$2Lrc8;
        var r316_xn$GlyphSaveSink$2Lrc4b = _r316_t0["$GlyphSaveSink$"];
        var r316_xn$NamedParameterPair$2Lrc9b = _r316_t0["$NamedParameterPair$"];
        var r316_xn$Exec$2Lrc5 = _r316_t0["$Exec$"];
        var r316_para = _r316_t0.para;
        var _r316_t1 = r316_xn$Capture$2Lrc8.Metrics;
        var r316_DesignParameters = _r316_t1.DesignParameters;
        var r316_XH = _r316_t1.XH;
        var r316_Contrast = _r316_t1.Contrast;
        var r316_Scale = _r316_t1.Scale;
        var r316_Translate = _r316_t1.Translate;
        var r316_ApparentTranslate = _r316_t1.ApparentTranslate;
        var r316_Rotate = _r316_t1.Rotate;
        var r316_GlobalTransform = _r316_t1.GlobalTransform;
        var r316_TanSlope = _r316_t1.TanSlope;
        var r316_HVContrast = _r316_t1.HVContrast;
        var r316_HSwToV = _r316_t1.HSwToV;
        var r316_Upward = _r316_t1.Upward;
        var r316_Downward = _r316_t1.Downward;
        var r316_Rightward = _r316_t1.Rightward;
        var r316_Leftward = _r316_t1.Leftward;
        var r316_O = _r316_t1.O;
        var r316_OX = _r316_t1.OX;
        var r316_OXHook = _r316_t1.OXHook;
        var r316_Hook = _r316_t1.Hook;
        var r316_Stroke = _r316_t1.Stroke;
        var r316_SquareDotScalar = _r316_t1.SquareDotScalar;
        var r316_OverlayStroke = _r316_t1.OverlayStroke;
        var r316_LongJut = _r316_t1.LongJut;
        var r316_LongVJut = _r316_t1.LongVJut;
        var r316_VJutStroke = _r316_t1.VJutStroke;
        var r316_ArchDepthA = _r316_t1.ArchDepthA;
        var r316_ArchDepthB = _r316_t1.ArchDepthB;
        var r316_SmallArchDepthA = _r316_t1.SmallArchDepthA;
        var r316_SmallArchDepthB = _r316_t1.SmallArchDepthB;
        var r316_YSmoothMidR = _r316_t1.YSmoothMidR;
        var r316_YSmoothMidL = _r316_t1.YSmoothMidL;
        var r316_CorrectionOMidX = _r316_t1.CorrectionOMidX;
        var r316_SerifShiftX = _r316_t1.SerifShiftX;
        var r316_xn$VERYFAR$5sIl = _r316_t1["VERY-FAR"];
        var r316_TINY = _r316_t1.TINY;
        var _r316_t2 = r316_xn$Capture$2Lrc8.SpiroFns;
        var r316_g4 = _r316_t2.g4;
        var r316_g2 = _r316_t2.g2;
        var r316_corner = _r316_t2.corner;
        var r316_flat = _r316_t2.flat;
        var r316_curl = _r316_t2.curl;
        var r316_close = _r316_t2.close;
        var r316_widths = _r316_t2.widths;
        var r316_heading = _r316_t2.heading;
        var r316_unimportant = _r316_t2.unimportant;
        var r316_archv = _r316_t2.archv;
        var r316_arcvh = _r316_t2.arcvh;
        var r316_dispiro = _r316_t2.dispiro;
        var r316_xn$spirooutline$1aao = _r316_t2["spiro-outline"];
        var _r316_t3 = r316_xn$Capture$2Lrc8.SpiroFns;
        var r316_xn$decor$0cao = _r316_t3["decor@"];
        var r316_xn$decor$0cao1 = _r316_t3["decor@@"];
        var r316_xn$decor$0cao11 = _r316_t3["decor@@@"];
        var _r316_t4 = r316_xn$Capture$2Lrc8.BooleFns;
        var _r316_t5 = r316_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r316_xn$selectvariant$7Hrq = _r316_t5["select-variant"];
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r319_t0, _r319_t1;
            return {
                "no-shape": r316_xn$noshape$3cah
            };
        });
        var r316_xn$noshape$3cah = function () {
            var _r320_t0, _r320_t1;
            return new r316_NoShape();
        };
        var r316_NoShape = (function (r322_Super) {
            var _r322_t0, _r322_t1;
            var r322_Constructor = function () {
                var _r323_t0, _r323_t1;
                return void 0;
            };
            var r322_Type = function () {
                var _r324_t0 = this;
                var _r324_t1 = arguments;
                r322_Constructor.apply(_r324_t0, _r324_t1);
                return void 0;
            };
            var r322_Symbol = Symbol;
            (function () {
                var r326_protectedTerms, _r326_t0, _r326_t1;
                r322_Type.protectedTerms = r326_protectedTerms = Object.create(r322_Super.protectedTerms || null);
                r322_Type.prototype.applyToGlyph = function () {
                    var _r354_t0, _r354_t1;
                    return void 0;
                };
                return void 0;
            }).call(r322_Type.prototype);
            return r322_Type;
        })(Object);
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r361_t0, _r361_t1;
            return {
                "tagged": r316_tagged
            };
        });
        var r316_tagged = function (r362_tag, r362_component) {
            var _r362_t0, _r362_t1;
            return new r316_TagComponentProc(r362_tag, r362_component);
        };
        var r316_TagComponentProc = (function (r364_Super) {
            var _r364_t0, _r364_t1;
            var r364_Constructor = function () {
                var _r365_t0, _r365_t1;
                return void 0;
            };
            var r364_Type = function () {
                var _r366_t0 = this;
                var _r366_t1 = arguments;
                r364_Constructor.apply(_r366_t0, _r366_t1);
                return void 0;
            };
            var r364_Symbol = Symbol;
            (function () {
                var r368_protectedTerms, _r368_t0, _r368_t1;
                r364_Type.protectedTerms = r368_protectedTerms = Object.create(r364_Super.protectedTerms || null);
                r364_Constructor = function (r396_tag, r396_component) {
                    var _r396_t1;
                    var _r396_t0 = this;
                    _r396_t0.tag = r396_tag;
                    _r396_t0.component = r396_component;
                    return void 0;
                };
                r364_Type.prototype.applyToGlyph = function (r402_target, r402_copyAnchors, r402_copyMetrics) {
                    var _r402_t1;
                    var _r402_t0 = this;
                    var r402_t = r402_target.ctxTag;
                    r402_target.ctxTag = _r402_t0.tag;
                    var r402_ret = r402_target.include(_r402_t0.component, r402_copyAnchors, r402_copyMetrics);
                    r402_target.ctxTag = r402_t;
                    return r402_ret;
                };
                return void 0;
            }).call(r364_Type.prototype);
            return r364_Type;
        })(Object);
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r409_t0, _r409_t1;
            return {
                "Rect": r316_Rect
            };
        });
        var r316_Rect = function (r410_u, r410_d, r410_l, r410_r, r410_transformShiftOnly) {
            var _r410_t0, _r410_t1;
            return new r316_xn$Capture$2Lrc8.GlyphProc(function (r412_currentGlyph) {
                var _r412_t0, _r412_t1;
                var r412_giz = r412_currentGlyph.gizmo;
                r412_currentGlyph.include(r316_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r316_xn$Capture$2Lrc8.GlyphProc(function (r416_currentGlyph) {
                    var r416_mx1, r416_my1, _r416_t0, _r416_t1, _r416_t2;
                    var r416_my = r1_mix(r410_u, r410_d, 0.5);
                    var r416_mx = r1_mix(r410_l, r410_r, 0.5);
                    r416_currentGlyph.gizmo = r410_transformShiftOnly ? r1_Transform.Id() : r412_giz;
                    r416_currentGlyph.include(r316_xn$spirooutline$1aao(r316_corner(r410_l, r410_d), r316_corner(r410_l, r410_u), r316_corner(r410_r, r410_u), r316_corner(r410_r, r410_d)));
                    if (r410_transformShiftOnly) {
                        _r416_t0 = r412_giz.apply({
                            "x": r416_mx,
                            "y": r416_my
                        });
                        r416_mx1 = _r416_t0.x;
                        r416_my1 = _r416_t0.y;
                        r416_currentGlyph.include(r316_Translate(r416_mx1 - r416_mx, r416_my1 - r416_my));
                    }
                    return void 0;
                })));
                return void 0;
            });
        };
        r316_Rect.fromBox = function (r419_box, r419_transformShiftOnly) {
            var _r419_t0, _r419_t1;
            return r316_Rect(r419_box.top, r419_box.bottom, r419_box.left, r419_box.right, r419_transformShiftOnly);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r421_t0, _r421_t1;
            return {
                "SquareAt": r316_SquareAt
            };
        });
        var r316_SquareAt = function (r422_x, r422_y, r422_r) {
            var _r422_t0, _r422_t1;
            return r316_Rect(r422_y + r422_r, r422_y - r422_r, r422_x - r422_r, r422_x + r422_r);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r424_t0, _r424_t1;
            return {
                "MaskAbove": r316_MaskAbove
            };
        });
        var r316_MaskAbove = function (r425_y) {
            var _r425_t0, _r425_t1;
            return r316_Rect(+r316_xn$VERYFAR$5sIl, r425_y, -r316_xn$VERYFAR$5sIl, +r316_xn$VERYFAR$5sIl);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r427_t0, _r427_t1;
            return {
                "MaskBelow": r316_MaskBelow
            };
        });
        var r316_MaskBelow = function (r428_y) {
            var _r428_t0, _r428_t1;
            return r316_Rect(r428_y, -r316_xn$VERYFAR$5sIl, -r316_xn$VERYFAR$5sIl, +r316_xn$VERYFAR$5sIl);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r430_t0, _r430_t1;
            return {
                "MaskLeft": r316_MaskLeft
            };
        });
        var r316_MaskLeft = function (r431_x) {
            var _r431_t0, _r431_t1;
            return r316_Rect(+r316_xn$VERYFAR$5sIl, -r316_xn$VERYFAR$5sIl, -r316_xn$VERYFAR$5sIl, r431_x);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r433_t0, _r433_t1;
            return {
                "MaskRight": r316_MaskRight
            };
        });
        var r316_MaskRight = function (r434_x) {
            var _r434_t0, _r434_t1;
            return r316_Rect(+r316_xn$VERYFAR$5sIl, -r316_xn$VERYFAR$5sIl, r434_x, +r316_xn$VERYFAR$5sIl);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r436_t0, _r436_t1;
            return {
                "MaskAboveLine": r316_MaskAboveLine
            };
        });
        var r316_MaskAboveLine = function (r437_x1, r437_y1, r437_x2, r437_y2, r437__ext) {
            var _r437_t0, _r437_t1;
            var r437_ext = r1_fallback(r437__ext, 0);
            return r316_xn$spirooutline$1aao(r316_corner(r1_mix(r437_x1, r437_x2, 0 - r437_ext), +r316_xn$VERYFAR$5sIl), r316_corner(r1_mix(r437_x1, r437_x2, 0 - r437_ext), r1_mix(r437_y1, r437_y2, 0 - r437_ext)), r316_corner(r1_mix(r437_x1, r437_x2, 1 + r437_ext), r1_mix(r437_y1, r437_y2, 1 + r437_ext)), r316_corner(r1_mix(r437_x1, r437_x2, 1 + r437_ext), +r316_xn$VERYFAR$5sIl));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r439_t0, _r439_t1;
            return {
                "MaskBelowLine": r316_MaskBelowLine
            };
        });
        var r316_MaskBelowLine = function (r440_x1, r440_y1, r440_x2, r440_y2, r440__ext) {
            var _r440_t0, _r440_t1;
            var r440_ext = r1_fallback(r440__ext, 0);
            return r316_xn$spirooutline$1aao(r316_corner(r1_mix(r440_x1, r440_x2, 0 - r440_ext), -r316_xn$VERYFAR$5sIl), r316_corner(r1_mix(r440_x1, r440_x2, 0 - r440_ext), r1_mix(r440_y1, r440_y2, 0 - r440_ext)), r316_corner(r1_mix(r440_x1, r440_x2, 1 + r440_ext), r1_mix(r440_y1, r440_y2, 1 + r440_ext)), r316_corner(r1_mix(r440_x1, r440_x2, 1 + r440_ext), -r316_xn$VERYFAR$5sIl));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r442_t0, _r442_t1;
            return {
                "MaskLeftLine": r316_MaskLeftLine
            };
        });
        var r316_MaskLeftLine = function (r443_x1, r443_y1, r443_x2, r443_y2, r443__ext) {
            var _r443_t0, _r443_t1;
            var r443_ext = r1_fallback(r443__ext, 0);
            return r316_xn$spirooutline$1aao(r316_corner(-r316_xn$VERYFAR$5sIl, r1_mix(r443_y1, r443_y2, 0 - r443_ext)), r316_corner(r1_mix(r443_x1, r443_x2, 0 - r443_ext), r1_mix(r443_y1, r443_y2, 0 - r443_ext)), r316_corner(r1_mix(r443_x1, r443_x2, 1 + r443_ext), r1_mix(r443_y1, r443_y2, 1 + r443_ext)), r316_corner(-r316_xn$VERYFAR$5sIl, r1_mix(r443_y1, r443_y2, 1 + r443_ext)));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r445_t0, _r445_t1;
            return {
                "MaskRightLine": r316_MaskRightLine
            };
        });
        var r316_MaskRightLine = function (r446_x1, r446_y1, r446_x2, r446_y2, r446__ext) {
            var _r446_t0, _r446_t1;
            var r446_ext = r1_fallback(r446__ext, 0);
            return r316_xn$spirooutline$1aao(r316_corner(+r316_xn$VERYFAR$5sIl, r1_mix(r446_y1, r446_y2, 0 - r446_ext)), r316_corner(r1_mix(r446_x1, r446_x2, 0 - r446_ext), r1_mix(r446_y1, r446_y2, 0 - r446_ext)), r316_corner(r1_mix(r446_x1, r446_x2, 1 + r446_ext), r1_mix(r446_y1, r446_y2, 1 + r446_ext)), r316_corner(+r316_xn$VERYFAR$5sIl, r1_mix(r446_y1, r446_y2, 1 + r446_ext)));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r448_t0, _r448_t1;
            return {
                "HalfRectTriangle": r316_HalfRectTriangle
            };
        });
        var r316_HalfRectTriangle = function (r449_x1, r449_y1, r449_x2, r449_y2) {
            var _r449_t0, _r449_t1;
            return r316_xn$spirooutline$1aao(r316_corner(r449_x1, r449_y1), r316_corner(r449_x2, r449_y2), r316_corner(r449_x2, r449_y1));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r451_t0, _r451_t1;
            return {
                "Ring": r316_Ring
            };
        });
        var r316_Ring = function (r452_u, r452_d, r452_l, r452_r, r452_transformShiftOnly) {
            var _r452_t0, _r452_t1;
            return new r316_xn$Capture$2Lrc8.GlyphProc(function (r454_currentGlyph) {
                var _r454_t0, _r454_t1;
                var r454_giz = r454_currentGlyph.gizmo;
                r454_currentGlyph.include(r316_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r316_xn$Capture$2Lrc8.GlyphProc(function (r458_currentGlyph) {
                    var r458_mx1, r458_my1, _r458_t0, _r458_t1, _r458_t2;
                    var r458_my = r1_mix(r452_u, r452_d, 0.5);
                    var r458_mx = r1_mix(r452_l, r452_r, 0.5);
                    r458_currentGlyph.gizmo = r452_transformShiftOnly ? r1_Transform.Id() : r454_giz;
                    r458_currentGlyph.include(r316_xn$spirooutline$1aao(r316_g4(r458_mx, r452_d), r316_archv(), r316_g4(r452_l, r458_my), r316_arcvh(), r316_g4(r458_mx, r452_u), r316_archv(), r316_g4(r452_r, r458_my), r316_arcvh(), r316_close()));
                    if (r452_transformShiftOnly) {
                        _r458_t0 = r454_giz.apply({
                            "x": r458_mx,
                            "y": r458_my
                        });
                        r458_mx1 = _r458_t0.x;
                        r458_my1 = _r458_t0.y;
                        r458_currentGlyph.include(r316_Translate(r458_mx1 - r458_mx, r458_my1 - r458_my));
                    }
                    return void 0;
                })));
                return void 0;
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r462_t0, _r462_t1;
            return {
                "RingAt": r316_RingAt
            };
        });
        var r316_RingAt = function (r463_x, r463_y, r463_r) {
            var _r463_t0, _r463_t1;
            return r316_Ring(r463_y + r463_r, r463_y - r463_r, r463_x - r463_r, r463_x + r463_r);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r465_t0, _r465_t1;
            return {
                "DotAt": r316_DotAt
            };
        });
        var r316_DotAt = function (r466_x, r466_y, r466_r) {
            var _r466_t0, _r466_t1;
            return r316_Ring(r466_y + r466_r, r466_y - r466_r, r466_x - r466_r, r466_x + r466_r, true);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r468_t0, _r468_t1;
            return {
                "RingStroke": r316_RingStroke
            };
        });
        var r316_RingStroke = function (r469_u, r469_d, r469_l, r469_r, r469_s, r469_transformShiftOnly) {
            var _r469_t0, _r469_t1;
            return new r316_xn$Capture$2Lrc8.GlyphProc(function (r471_currentGlyph) {
                var _r471_t0, _r471_t1;
                var r471_giz = r471_currentGlyph.gizmo;
                r471_currentGlyph.include(r316_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r316_xn$Capture$2Lrc8.GlyphProc(function (r475_currentGlyph) {
                    var r475_mx1, r475_my1, _r475_t0, _r475_t1, _r475_t2;
                    var r475_my = r1_mix(r469_u, r469_d, 0.5);
                    var r475_mx = r1_mix(r469_l, r469_r, 0.5);
                    r475_currentGlyph.gizmo = r469_transformShiftOnly ? r1_Transform.Id() : r471_giz;
                    r475_currentGlyph.include(r316_dispiro(r316_widths.rhs(r1_fallback(r469_s, r316_Stroke)), r316_g4(r475_mx, r469_d, r316_heading(r316_Leftward)), r316_archv(), r316_g4(r469_l, r475_my), r316_arcvh(), r316_g4(r475_mx, r469_u, r316_heading(r316_Rightward)), r316_archv(), r316_g4(r469_r, r475_my), r316_arcvh(), r316_close()));
                    if (r469_transformShiftOnly) {
                        _r475_t0 = r471_giz.apply({
                            "x": r475_mx,
                            "y": r475_my
                        });
                        r475_mx1 = _r475_t0.x;
                        r475_my1 = _r475_t0.y;
                        r475_currentGlyph.include(r316_Translate(r475_mx1 - r475_mx, r475_my1 - r475_my));
                    }
                    return void 0;
                })));
                return void 0;
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r479_t0, _r479_t1;
            return {
                "RingStrokeAt": r316_RingStrokeAt
            };
        });
        var r316_RingStrokeAt = function (r480_x, r480_y, r480_r, r480_s) {
            var _r480_t0, _r480_t1;
            return r316_RingStroke(r480_y + r480_r, r480_y - r480_r, r480_x - r480_r, r480_x + r480_r, r480_s);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r482_t0, _r482_t1;
            return {
                "DotStrokeAt": r316_DotStrokeAt
            };
        });
        var r316_DotStrokeAt = function (r483_x, r483_y, r483_r, r483_s) {
            var _r483_t0, _r483_t1;
            return r316_RingStroke(r483_y + r483_r, r483_y - r483_r, r483_x - r483_r, r483_x + r483_r, r483_s, true);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r485_t0, _r485_t1;
            return {
                "Circle": r316_Circle
            };
        });
        var r316_Circle = (function () {
            var r488_Outline, _r488_t2, _r488_tag3;
            var r488_exports = {};
            var _r488_t0 = r488_exports;
            var _r488_t1 = "Outline";
            _r488_t0[_r488_t1] = r488_Outline = (function () {
                var r498_At, r498_DotAt;
                var r498_exports = {};
                r498_exports.At = r498_At = function (r506_x, r506_y, r506_r) {
                    var _r506_t0, _r506_t1;
                    return r316_Ellipse.Outline.AtDimens(r506_y + r506_r, r506_y - r506_r, r506_x - r506_r, r506_x + r506_r);
                };
                r498_exports.DotAt = r498_DotAt = function (r508_x, r508_y, r508_r) {
                    var _r508_t0, _r508_t1;
                    return r316_Ellipse.Outline.AtDimens(r508_y + r508_r, r508_y - r508_r, r508_x - r508_r, r508_x + r508_r, true);
                };
                return r498_exports;
            })();
            return r488_exports;
        })();
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r510_t0, _r510_t1;
            return {
                "Ellipse": r316_Ellipse
            };
        });
        var r316_Ellipse = (function () {
            var r513_Outline, _r513_t2, _r513_tag3;
            var r513_exports = {};
            var _r513_t0 = r513_exports;
            var _r513_t1 = "Outline";
            _r513_t0[_r513_t1] = r513_Outline = (function () {
                var r523_AtDimens, r523_At, r523_DotAt, r523_RoundStrokeTerminalAt;
                var r523_exports = {};
                r523_exports.AtDimens = r523_AtDimens = function (r531_u, r531_d, r531_l, r531_r, r531_transformShiftOnly) {
                    var _r531_t0, _r531_t1;
                    return new r316_xn$Capture$2Lrc8.GlyphProc(function (r533_currentGlyph) {
                        var _r533_t0, _r533_t1;
                        var r533_giz = r533_currentGlyph.gizmo;
                        r533_currentGlyph.include(r316_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r316_xn$Capture$2Lrc8.GlyphProc(function (r537_currentGlyph) {
                            var r537_mx1, r537_my1, _r537_t0, _r537_t1, _r537_t2;
                            var r537_my = r1_mix(r531_u, r531_d, 0.5);
                            var r537_mx = r1_mix(r531_l, r531_r, 0.5);
                            r537_currentGlyph.gizmo = r531_transformShiftOnly ? r1_Transform.Id() : r533_giz;
                            r537_currentGlyph.include(r316_xn$spirooutline$1aao(r316_g4(r537_mx, r531_d), r316_archv(32, 2), r316_g4(r531_l, r537_my), r316_arcvh(32, 2), r316_g4(r537_mx, r531_u), r316_archv(32, 2), r316_g4(r531_r, r537_my), r316_arcvh(32, 2), r316_close()));
                            if (r531_transformShiftOnly) {
                                _r537_t0 = r533_giz.apply({
                                    "x": r537_mx,
                                    "y": r537_my
                                });
                                r537_mx1 = _r537_t0.x;
                                r537_my1 = _r537_t0.y;
                                r537_currentGlyph.include(r316_Translate(r537_mx1 - r537_mx, r537_my1 - r537_my));
                            }
                            return void 0;
                        })));
                        return void 0;
                    });
                };
                r523_exports.At = r523_At = function (r541_x, r541_y, r541_rx, r541_ry) {
                    var _r541_t0, _r541_t1;
                    return r523_AtDimens(r541_y + r541_ry, r541_y - r541_ry, r541_x - r541_rx, r541_x + r541_rx);
                };
                r523_exports.DotAt = r523_DotAt = function (r543_x, r543_y, r543_rx, r543_ry) {
                    var _r543_t0, _r543_t1;
                    return r523_AtDimens(r543_y + r543_ry, r543_y - r543_ry, r543_x - r543_rx, r543_x + r543_rx, true);
                };
                r523_exports.RoundStrokeTerminalAt = r523_RoundStrokeTerminalAt = function (r545_x, r545_y, r545_r) {
                    var _r545_t0, _r545_t1;
                    return r523_AtDimens(r545_y + r545_r, r545_y - r545_r, r545_x - r316_HSwToV(r545_r), r545_x + r316_HSwToV(r545_r), true);
                };
                return r523_exports;
            })();
            return r513_exports;
        })();
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r547_t0, _r547_t1;
            return {
                "OShapeT": r316_OShapeT
            };
        });
        var r316_OShapeT = function (r548_sink, r548_u, r548_d, r548_l, r548_r, r548__width, r548__ada, r548__adb) {
            var _r548_t0, _r548_t1;
            if (r548_l > r548_r) throw new Error("OShapeT: l > r");
            if (r548_d > r548_u) throw new Error("OShapeT: d > u");
            var r548_middle = r1_mix(r548_l, r548_r, 0.5);
            var r548_width = r1_fallback(r548__width, r316_Stroke);
            var r548_ada = r1_fallback(r548__ada, r316_SmallArchDepthA);
            var r548_adb = r1_fallback(r548__adb, r316_SmallArchDepthB);
            return r548_sink(r316_widths(r548_width, 0), r316_Arch.lhs.centerAt.rtl.t(r548_middle, r548_u, new r316_xn$NamedParameterPair$2Lrc9b("sw", r548_width)), r316_archv(), r316_flatside.ld(r548_l, r548_d, r548_u, r548_ada, r548_adb), r316_arcvh(), r316_Arch.lhs.centerAt.ltr.b(r548_middle, r548_d, new r316_xn$NamedParameterPair$2Lrc9b("sw", r548_width)), r316_archv(), r316_flatside.ru(r548_r, r548_d, r548_u, r548_ada, r548_adb), r316_arcvh(), r316_close());
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r552_t0, _r552_t1;
            return {
                "OShape": r316_OShape
            };
        });
        var r316_OShape = function (r553_u, r553_d, r553_l, r553_r, r553__width, r553__ada, r553__adb) {
            var _r553_t0, _r553_t1;
            return r316_OShapeT(r316_dispiro, r553_u, r553_d, r553_l, r553_r, r553__width, r553__ada, r553__adb);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r555_t0, _r555_t1;
            return {
                "OShapeOutline": r316_OShapeOutline
            };
        });
        var r316_OShapeOutline = function (r556_u, r556_d, r556_l, r556_r, r556__width, r556__ada, r556__adb) {
            var _r556_t0, _r556_t1;
            return r316_OShapeT(r316_xn$spirooutline$1aao, r556_u, r556_d, r556_l, r556_r, r556__width, r556__ada, r556__adb);
        };
        r316_OShape.NoOvershoot = function (r557_u, r557_d, r557_l, r557_r, r557__width, r557__ada, r557__adb) {
            var _r557_t0, _r557_t1;
            return r316_OShape(r557_u + r316_O, r557_d - r316_O, r557_l - r316_OX, r557_r + r316_OX, r557__width, r557__ada, r557__adb);
        };
        r316_OShapeOutline.NoOvershoot = function (r558_u, r558_d, r558_l, r558_r, r558__width, r558__ada, r558__adb) {
            var _r558_t0, _r558_t1;
            return r316_OShapeOutline(r558_u + r316_O, r558_d - r316_O, r558_l - r316_OX, r558_r + r316_OX, r558__width, r558__ada, r558__adb);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r560_t0, _r560_t1;
            return {
                "OShapeFlatTB": r316_OShapeFlatTB
            };
        });
        var r316_OShapeFlatTB = function (r561_u, r561_d, r561_l, r561_r, r561__width, r561__ada, r561__adb, r561_gap) {
            var _r561_t0, _r561_t1;
            return new r316_xn$Capture$2Lrc8.GlyphProc(function (r563_currentGlyph) {
                var _r563_t0, _r563_t1;
                var r563_middle = r1_mix(r561_l, r561_r, 0.5);
                var r563_width = r1_fallback(r561__width, r316_Stroke);
                var r563_ada = r1_fallback(r561__ada, r316_SmallArchDepthA);
                var r563_adb = r1_fallback(r561__adb, r316_SmallArchDepthB);
                r563_currentGlyph.include(r316_dispiro(r316_widths.lhs(r563_width), r316_Arch.lhs.centerAt.rtl.t(r563_middle, r561_u, new r316_xn$NamedParameterPair$2Lrc9b("sw", r563_width), new r316_xn$NamedParameterPair$2Lrc9b("knot-ty", r316_flat), new r316_xn$NamedParameterPair$2Lrc9b("o", 0)), r316_Arch.lhs.centerAt.rtl.t(r563_middle - r561_gap / 2, r561_u, new r316_xn$NamedParameterPair$2Lrc9b("sw", r563_width), new r316_xn$NamedParameterPair$2Lrc9b("knot-ty", r316_curl), new r316_xn$NamedParameterPair$2Lrc9b("o", 0)), r316_archv(), r316_flatside.ld(r561_l, r561_d, r561_u, r563_ada, r563_adb), r316_arcvh(), r316_Arch.lhs.centerAt.ltr.b(r563_middle - r561_gap / 2, r561_d, new r316_xn$NamedParameterPair$2Lrc9b("sw", r563_width), new r316_xn$NamedParameterPair$2Lrc9b("knot-ty", r316_flat), new r316_xn$NamedParameterPair$2Lrc9b("o", 0)), r316_Arch.lhs.centerAt.ltr.b(r563_middle + r561_gap / 2, r561_d, new r316_xn$NamedParameterPair$2Lrc9b("sw", r563_width), new r316_xn$NamedParameterPair$2Lrc9b("knot-ty", r316_curl), new r316_xn$NamedParameterPair$2Lrc9b("o", 0)), r316_archv(), r316_flatside.ru(r561_r, r561_d, r561_u, r563_ada, r563_adb), r316_arcvh(), r316_Arch.lhs.centerAt.rtl.t(r563_middle + r561_gap / 2, r561_u, new r316_xn$NamedParameterPair$2Lrc9b("sw", r563_width), new r316_xn$NamedParameterPair$2Lrc9b("knot-ty", r316_flat), new r316_xn$NamedParameterPair$2Lrc9b("o", 0)), r316_Arch.lhs.centerAt.rtl.t(r563_middle, r561_u, new r316_xn$NamedParameterPair$2Lrc9b("sw", r563_width), new r316_xn$NamedParameterPair$2Lrc9b("knot-ty", r316_curl), new r316_xn$NamedParameterPair$2Lrc9b("o", 0))));
                return void 0;
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r584_t0, _r584_t1;
            return {
                "UShapeT": r316_UShapeT
            };
        });
        var r316_UShapeT = function (r585_sink, r585_u, r585_d, r585_l, r585_r, r585__width, r585__ada, r585__adb) {
            var _r585_t0, _r585_t1;
            if (r585_l > r585_r) throw new Error("UShapeT: l > r");
            if (r585_d > r585_u) throw new Error("UShapeT: d > u");
            var r585_width = r1_fallback(r585__width, r316_Stroke);
            var r585_ada = r1_fallback(r585__ada, r316_ArchDepthA);
            var r585_adb = r1_fallback(r585__adb, r316_ArchDepthB);
            return r585_sink(r316_widths.lhs(r585_width), (r585_sink === r316_xn$spirooutline$1aao ? r316_corner : r316_flat)(r585_l, r585_u, r316_heading(r316_Downward)), r316_curl(r585_l, Math.min(r585_d + r585_adb, r585_u - r316_TINY)), r316_Arch.lhs(r585_d, new r316_xn$NamedParameterPair$2Lrc9b("sw", r585_width)), r316_flat(r585_r, Math.min(r585_d + r585_ada, r585_u - r316_TINY)), (r585_sink === r316_xn$spirooutline$1aao ? r316_corner : r316_curl)(r585_r, r585_u, r316_heading(r316_Upward)));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r588_t0, _r588_t1;
            return {
                "UShape": r316_UShape
            };
        });
        var r316_UShape = function (r589_u, r589_d, r589_l, r589_r, r589__width, r589__ada, r589__adb) {
            var _r589_t0, _r589_t1;
            return r316_UShapeT(r316_dispiro, r589_u, r589_d, r589_l, r589_r, r589__width, r589__ada, r589__adb);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r591_t0, _r591_t1;
            return {
                "UShapeOutline": r316_UShapeOutline
            };
        });
        var r316_UShapeOutline = function (r592_u, r592_d, r592_l, r592_r, r592__width, r592__ada, r592__adb) {
            var _r592_t0, _r592_t1;
            return r316_UShapeT(r316_xn$spirooutline$1aao, r592_u, r592_d, r592_l, r592_r, r592__width, r592__ada, r592__adb);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r594_t0, _r594_t1;
            return {
                "HSerif": r316_HSerif
            };
        });
        var r316_HSerif = (function () {
            var r597_lt, r597_lb, r597_rt, r597_rb, r597_mt, r597_mtAsymmetric, r597_mb, r597_mbAsymmetric;
            var r597_exports = {};
            r597_exports.lt = r597_lt = function (r605_x, r605_y, r605_length, r605__sw, r605__swRef) {
                var _r605_t0, _r605_t1;
                return new r316_xn$Capture$2Lrc8.GlyphProc(function (r607_currentGlyph) {
                    var _r607_t0, _r607_t1;
                    var r607_sw = r1_fallback(r605__sw, r316_Stroke);
                    var r607_swRef = r1_fallback(r605__swRef, r607_sw);
                    r607_currentGlyph.include(r316_dispiro(r316_widths.lhs(r607_sw), r316_flat(r605_x + r316_HSwToV(0.5 * r607_swRef), r605_y, r316_heading(r316_Leftward)), r316_curl(r605_x - r605_length - r607_sw * r316_SerifShiftX, r605_y)));
                    return void 0;
                });
            };
            r597_exports.lb = r597_lb = function (r610_x, r610_y, r610_length, r610__sw, r610__swRef) {
                var _r610_t0, _r610_t1;
                return new r316_xn$Capture$2Lrc8.GlyphProc(function (r612_currentGlyph) {
                    var _r612_t0, _r612_t1;
                    var r612_sw = r1_fallback(r610__sw, r316_Stroke);
                    var r612_swRef = r1_fallback(r610__swRef, r612_sw);
                    r612_currentGlyph.include(r316_dispiro(r316_widths.rhs(r612_sw), r316_flat(r610_x + r316_HSwToV(0.5 * r612_swRef), r610_y, r316_heading(r316_Leftward)), r316_curl(r610_x - r610_length + r612_sw * r316_SerifShiftX, r610_y)));
                    return void 0;
                });
            };
            r597_exports.rt = r597_rt = function (r615_x, r615_y, r615_length, r615__sw, r615__swRef) {
                var _r615_t0, _r615_t1;
                return new r316_xn$Capture$2Lrc8.GlyphProc(function (r617_currentGlyph) {
                    var _r617_t0, _r617_t1;
                    var r617_sw = r1_fallback(r615__sw, r316_Stroke);
                    var r617_swRef = r1_fallback(r615__swRef, r617_sw);
                    r617_currentGlyph.include(r316_dispiro(r316_widths.rhs(r617_sw), r316_flat(r615_x - r316_HSwToV(0.5 * r617_swRef), r615_y, r316_heading(r316_Rightward)), r316_curl(r615_x + r615_length - r617_sw * r316_SerifShiftX, r615_y)));
                    return void 0;
                });
            };
            r597_exports.rb = r597_rb = function (r620_x, r620_y, r620_length, r620__sw, r620__swRef) {
                var _r620_t0, _r620_t1;
                return new r316_xn$Capture$2Lrc8.GlyphProc(function (r622_currentGlyph) {
                    var _r622_t0, _r622_t1;
                    var r622_sw = r1_fallback(r620__sw, r316_Stroke);
                    var r622_swRef = r1_fallback(r620__swRef, r622_sw);
                    r622_currentGlyph.include(r316_dispiro(r316_widths.lhs(r622_sw), r316_flat(r620_x - r316_HSwToV(0.5 * r622_swRef), r620_y, r316_heading(r316_Rightward)), r316_curl(r620_x + r620_length + r622_sw * r316_SerifShiftX, r620_y)));
                    return void 0;
                });
            };
            r597_exports.mt = r597_mt = function (r625_x, r625_y, r625_length, r625__sw) {
                var _r625_t0, _r625_t1;
                return r597_mtAsymmetric(r625_x, r625_y, r625_length, r625_length, r625__sw);
            };
            r597_exports.mtAsymmetric = r597_mtAsymmetric = function (r627_x, r627_y, r627_l, r627_r, r627__sw) {
                var _r627_t0, _r627_t1;
                var r627_sw = r1_fallback(r627__sw, r316_Stroke);
                return r316_dispiro(r316_widths.lhs(r627_sw), r316_flat(r627_x + r627_r - r627_sw * r316_SerifShiftX, r627_y), r316_curl(r627_x - r627_l - r627_sw * r316_SerifShiftX, r627_y));
            };
            r597_exports.mb = r597_mb = function (r629_x, r629_y, r629_length, r629__sw) {
                var _r629_t0, _r629_t1;
                return r597_mbAsymmetric(r629_x, r629_y, r629_length, r629_length, r629__sw);
            };
            r597_exports.mbAsymmetric = r597_mbAsymmetric = function (r631_x, r631_y, r631_l, r631_r, r631__sw) {
                var _r631_t0, _r631_t1;
                var r631_sw = r1_fallback(r631__sw, r316_Stroke);
                return r316_dispiro(r316_widths.rhs(r631_sw), r316_flat(r631_x + r631_r + r631_sw * r316_SerifShiftX, r631_y), r316_curl(r631_x - r631_l + r631_sw * r316_SerifShiftX, r631_y));
            };
            return r597_exports;
        })();
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r633_t0, _r633_t1;
            return {
                "VSerif": r316_VSerif
            };
        });
        var r316_VSerif = (function () {
            var r636_dr, r636_ur, r636_mr, r636_dl, r636_ul, r636_ml;
            var r636_exports = {};
            r636_exports.dr = r636_dr = function (r644_x, r644_y, r644_length, r644_sw) {
                var _r644_t0, _r644_t1;
                return new r316_xn$Capture$2Lrc8.GlyphProc(function (r646_currentGlyph) {
                    var _r646_t0, _r646_t1;
                    r646_currentGlyph.include(r316_dispiro(r316_widths.rhs(r1_fallback(r644_sw, r316_VJutStroke)), r316_flat(r644_x, r644_y, r316_heading(r316_Downward)), r316_curl(r644_x, r644_y - r644_length, r316_heading(r316_Downward))));
                    return void 0;
                });
            };
            r636_exports.ur = r636_ur = function (r649_x, r649_y, r649_length, r649_sw) {
                var _r649_t0, _r649_t1;
                return new r316_xn$Capture$2Lrc8.GlyphProc(function (r651_currentGlyph) {
                    var _r651_t0, _r651_t1;
                    r651_currentGlyph.include(r316_dispiro(r316_widths.lhs(r1_fallback(r649_sw, r316_VJutStroke)), r316_flat(r649_x, r649_y, r316_heading(r316_Upward)), r316_curl(r649_x, r649_y + r649_length, r316_heading(r316_Upward))));
                    return void 0;
                });
            };
            r636_exports.mr = r636_mr = function (r654_x, r654_y, r654_length, r654_sw) {
                var _r654_t0, _r654_t1;
                return new r316_xn$Capture$2Lrc8.GlyphProc(function (r656_currentGlyph) {
                    var _r656_t0, _r656_t1;
                    r656_currentGlyph.include(r316_dispiro(r316_widths.lhs(r1_fallback(r654_sw, r316_VJutStroke)), r316_flat(r654_x, r654_y - r654_length, r316_heading(r316_Upward)), r316_curl(r654_x, r654_y + r654_length, r316_heading(r316_Upward))));
                    return void 0;
                });
            };
            r636_exports.dl = r636_dl = function (r659_x, r659_y, r659_length, r659_sw) {
                var _r659_t0, _r659_t1;
                return new r316_xn$Capture$2Lrc8.GlyphProc(function (r661_currentGlyph) {
                    var _r661_t0, _r661_t1;
                    r661_currentGlyph.include(r316_dispiro(r316_widths.lhs(r1_fallback(r659_sw, r316_VJutStroke)), r316_flat(r659_x, r659_y, r316_heading(r316_Downward)), r316_curl(r659_x, r659_y - r659_length, r316_heading(r316_Downward))));
                    return void 0;
                });
            };
            r636_exports.ul = r636_ul = function (r664_x, r664_y, r664_length, r664_sw) {
                var _r664_t0, _r664_t1;
                return new r316_xn$Capture$2Lrc8.GlyphProc(function (r666_currentGlyph) {
                    var _r666_t0, _r666_t1;
                    r666_currentGlyph.include(r316_dispiro(r316_widths.rhs(r1_fallback(r664_sw, r316_VJutStroke)), r316_flat(r664_x, r664_y, r316_heading(r316_Upward)), r316_curl(r664_x, r664_y + r664_length, r316_heading(r316_Upward))));
                    return void 0;
                });
            };
            r636_exports.ml = r636_ml = function (r669_x, r669_y, r669_length, r669_sw) {
                var _r669_t0, _r669_t1;
                return new r316_xn$Capture$2Lrc8.GlyphProc(function (r671_currentGlyph) {
                    var _r671_t0, _r671_t1;
                    r671_currentGlyph.include(r316_dispiro(r316_widths.rhs(r1_fallback(r669_sw, r316_VJutStroke)), r316_flat(r669_x, r669_y - r669_length, r316_heading(r316_Upward)), r316_curl(r669_x, r669_y + r669_length, r316_heading(r316_Upward))));
                    return void 0;
                });
            };
            return r636_exports;
        })();
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r674_t0, _r674_t1;
            return {
                "NeedSlab": r316_NeedSlab
            };
        });
        var r316_NeedSlab = function (r675_level, r675_p) {
            var _r675_t0, _r675_t1;
            return r675_level ? r675_p : new r316_xn$Capture$2Lrc8.GlyphProc(function (r677_currentGlyph) {
                var _r677_t0, _r677_t1;
                return void 0;
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r679_t0, _r679_t1;
            return {
                "NeedNotItalic": r316_NeedNotItalic
            };
        });
        var r316_NeedNotItalic = function (r680_p) {
            var _r680_t0, _r680_t1;
            return r316_para.isItalic ? new r316_xn$Capture$2Lrc8.GlyphProc(function (r682_currentGlyph) {
                var _r682_t0, _r682_t1;
                return void 0;
            }) : r680_p;
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r684_t0, _r684_t1;
            return {
                "DiagCor": r316_DiagCor
            };
        });
        var r316_DiagCor = function (r685_dy, r685_dx, r685_dyt, r685_dxt) {
            var _r685_t0, _r685_t1;
            var r685_ay = Math.max(0, Math.abs(r685_dy) - r1_fallback(r685_dyt, 0));
            var r685_ax = Math.max(0, Math.abs(r685_dx) - r1_fallback(r685_dxt, 0));
            return Math.hypot(r685_ay, r685_ax) / r685_ay;
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r687_t0, _r687_t1;
            return {
                "DiagCorDs": r316_DiagCorDs
            };
        });
        var r316_DiagCorDs = function (r688_dy, r688_dx, r688_ds) {
            var _r688_t0, _r688_t1;
            var r688_kDiag = r316_DiagCor(r688_dy, r688_dx);
            var r688_n = 0;
            while (r688_n < 4) {
                r688_kDiag = r316_DiagCor(r688_dy, r688_dx - r688_ds * r688_kDiag);
                r688_n = r688_n + 1;
            }
            return r688_kDiag;
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r690_t0, _r690_t1;
            return {
                "HBar": r316_HBar
            };
        });
        var r316_HBar = (function () {
            var r693_m, r693_t, r693_b;
            var r693_exports = {};
            r693_exports.m = r693_m = function (r701_xleft, r701_xright, r701_y, r701__fine) {
                var _r701_t0, _r701_t1;
                return r316_dispiro(r316_widths.center(r1_fallback(r701__fine, r316_Stroke)), r316_flat(r701_xleft, r701_y, r316_heading(r316_Rightward)), r316_curl(r701_xright, r701_y, r316_heading(r316_Rightward)));
            };
            r693_exports.t = r693_t = function (r703_xl, r703_xr, r703_y, r703__fine) {
                var _r703_t0, _r703_t1;
                return r693_m(r703_xl, r703_xr, r703_y - r1_fallback(r703__fine, r316_Stroke) / 2, r703__fine);
            };
            r693_exports.b = r693_b = function (r705_xl, r705_xr, r705_y, r705__fine) {
                var _r705_t0, _r705_t1;
                return r693_m(r705_xl, r705_xr, r705_y + r1_fallback(r705__fine, r316_Stroke) / 2, r705__fine);
            };
            return r693_exports;
        })();
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r707_t0, _r707_t1;
            return {
                "HOverlayBar": r316_HOverlayBar
            };
        });
        var r316_HOverlayBar = function (r708_xleft, r708_xright, r708_y, r708_s) {
            var _r708_t0, _r708_t1;
            return r316_dispiro(r316_widths.center(r1_fallback(r708_s, r316_OverlayStroke)), r316_flat(r708_xleft, r708_y), r316_curl(r708_xright, r708_y));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r710_t0, _r710_t1;
            return {
                "HOverlayObliqueBar": r316_HOverlayObliqueBar
            };
        });
        var r316_HOverlayObliqueBar = function (r711_xleft, r711_xright, r711_y, r711_s, r711_slant) {
            var _r711_t0, _r711_t1;
            return r316_dispiro(r316_widths.center(r1_fallback(r711_s, r316_OverlayStroke)), r316_flat(r711_xleft, r711_y - r1_fallback(r711_slant, r316_XH * 0.1)), r316_curl(r711_xright, r711_y + r1_fallback(r711_slant, r316_XH * 0.1)));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r713_t0, _r713_t1;
            return {
                "HCrossBar": r316_HCrossBar
            };
        });
        var r316_HCrossBar = function (r714_xl, r714_xr, r714_y, r714_s) {
            var _r714_t0, _r714_t1;
            return r316_dispiro(r316_widths.center(r1_fallback(r714_s, r316_OverlayStroke)), r316_flat(r714_xl, r714_y), r316_curl(r714_xr, r714_y));
        };
        r316_HCrossBar.top = function (r715_xl, r715_xr, r715_y, r715__s) {
            var _r715_t0, _r715_t1;
            var r715_s = r1_fallback(r715__s, r316_Stroke);
            return r316_HCrossBar(r715_xl - 0 * r715_s * r316_TanSlope, r715_xr - 0 * r715_s * r316_TanSlope, r715_y - 0.5 * r715_s, r715_s);
        };
        r316_HCrossBar.bottom = function (r716_xl, r716_xr, r716_y, r716__s) {
            var _r716_t0, _r716_t1;
            var r716_s = r1_fallback(r716__s, r316_Stroke);
            return r316_HCrossBar(r716_xl + 0 * r716_s * r316_TanSlope, r716_xr + 0 * r716_s * r316_TanSlope, r716_y + 0.5 * r716_s, r716_s);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r718_t0, _r718_t1;
            return {
                "FlatSlashShape": r316_FlatSlashShape
            };
        });
        var r316_FlatSlashShape = function (r719_middlex, r719_middle, r719_fine, r719_kx, r719_ky) {
            var _r719_t0, _r719_t1;
            return new r316_xn$Capture$2Lrc8.GlyphProc(function (r721_currentGlyph) {
                var _r721_t0, _r721_t1;
                r721_currentGlyph.include(r316_dispiro(r316_widths.center(2 * r719_fine), r316_flat(r719_middlex - r316_LongJut * r1_fallback(r719_kx, 0.8), r719_middle - r316_LongVJut * r1_fallback(r719_ky, 0.4)), r316_curl(r719_middlex + r316_LongJut * r1_fallback(r719_kx, 0.8), r719_middle + r316_LongVJut * r1_fallback(r719_ky, 0.4))));
                return void 0;
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r724_t0, _r724_t1;
            return {
                "VBar": r316_VBar
            };
        });
        var r316_VBar = (function () {
            var r727_m, r727_l, r727_r;
            var r727_exports = {};
            r727_exports.m = r727_m = function (r735_x, r735_ydown, r735_yup, r735__sw) {
                var _r735_t0, _r735_t1;
                var r735_sw = r1_fallback(r735__sw, r316_Stroke);
                return r316_dispiro(r316_widths.center(r735_sw), r316_flat(r735_x, r735_ydown, r316_heading(r735_ydown < r735_yup ? r316_Upward : r316_Downward)), r316_curl(r735_x, r735_yup, r316_heading(r735_ydown < r735_yup ? r316_Upward : r316_Downward)));
            };
            r727_exports.l = r727_l = function (r737_x, r737_yd, r737_yu, r737__sw) {
                var _r737_t0, _r737_t1;
                return r727_m(r737_x + r316_HSwToV(0.5 * r1_fallback(r737__sw, r316_Stroke)), r737_yd, r737_yu, r737__sw);
            };
            r727_exports.r = r727_r = function (r739_x, r739_yd, r739_yu, r739__sw) {
                var _r739_t0, _r739_t1;
                return r727_m(r739_x - r316_HSwToV(0.5 * r1_fallback(r739__sw, r316_Stroke)), r739_yd, r739_yu, r739__sw);
            };
            return r727_exports;
        })();
        var r316_determineMixR = function (r740_w, r740_v, r740_u, r740_sw, r740_swash) {
            var r740_idepth, r740_iwidth, r740_adjust, _r740_t0, _r740_t1;
            if (!r740_swash && r740_w < r740_v) return 1 - r316_determineMixR(r740_v, r740_w, r740_u, r740_sw, r740_swash);
            var r740_superness = r316_DesignParameters.superness;
            var r740_r = r740_w <= r740_v ? 0.5 : true ? 1 / (Math.pow(1 - Math.pow(1 - r740_v / r740_w, r740_superness), 1 / r740_superness) + 1) : void 0;
            if (r740_swash) {
                r740_idepth = r740_w - r740_sw;
                r740_iwidth = r740_u * r740_r - r740_sw;
                if (r740_iwidth > 0 && r740_idepth > 0 && r740_iwidth / r740_idepth >= 2) {
                    r740_adjust = r1_clamp(0.975, 1, 1 - (r740_iwidth / r740_idepth - 2) * 0.0125);
                    r740_r = r740_r * r740_adjust;
                }
            } else r740_r = 0.5 + (r740_r - 0.5) * (r740_v + r740_w) / (r740_u * 2);
            if (r740_r < 0.5) r740_r = 0.5;
            return r740_r;
        };
        var r316_nHookSegments = 12;
        var r316_HookShape = function (r743_toStraight, r743_toFinish, r743_isStart, r743_args) {
            var r743_tailAdjX, r743_tailAdjY, r743_fraction, r743_mixRatioAdjust, _r743_t3, _r743_t4, _r743_t5, _r743_tag6, _r743_t7;
            var _r743_t0 = r743_args;
            var r743_yRef = _r743_t0.yRef;
            var r743_sw = _r743_t0.sw;
            var r743_swTerminal = _r743_t0.swTerminal;
            var r743_isTail = _r743_t0.isTail;
            var r743_suppressSwash = _r743_t0.suppressSwash;
            var r743_overshoot = _r743_t0.overshoot;
            var r743_atBottom = r743_toStraight.y > r743_yRef;
            var r743_ltr = r743_isStart ? r743_toFinish.x < r743_toStraight.x : r743_toFinish.x > r743_toStraight.x;
            var r743_dtu = r743_isStart ? r743_yRef > r743_toFinish.y : r743_yRef < r743_toFinish.y;
            var r743_doSwash = !r743_suppressSwash && !r743_isStart && r743_atBottom && (r316_para.isItalic || r743_isTail) && r316_para.slopeAngle !== 0 && (r316_para.slopeAngle > 0 ? r743_ltr : !r743_ltr);
            var r743_superness = r316_DesignParameters.superness;
            var r743_y = r743_yRef + (r743_yRef > r743_toFinish.y ? -1 : +1) * r743_overshoot;
            r743_toFinish.x = r743_toFinish.x + r316_OXHook * (r743_ltr ? -1 : +1) * (r743_isStart ? -1 : +1);
            if (r743_doSwash) {
                r743_tailAdjX = Math.max(r316_Hook * 0.5, 1 * r743_sw);
                r743_tailAdjY = Math.max(r316_Hook * 0.5, 1.25 * r743_sw);
                r743_toFinish.x = r743_toFinish.x + r743_tailAdjX * r316_TanSlope;
                r743_toFinish.y = r743_toFinish.y - r743_tailAdjY * Math.abs(r316_TanSlope);
            }
            var r743_w = Math.abs(r743_toStraight.y - r743_y);
            var r743_v = Math.abs(r743_toFinish.y - r743_y);
            var r743_u = Math.abs(r743_toFinish.x - r743_toStraight.x);
            var r743_mixRatio = r316_determineMixR(r743_w, r743_v, r743_u, r743_sw, r743_doSwash);
            var r743_mx = r1_mix(r743_toStraight.x, r743_toFinish.x, r743_mixRatio) + (r743_atBottom ? +1 : -1) * 0.75 * r316_CorrectionOMidX * r743_sw;
            var r743_keyKnotDirection = r743_ltr ? r316_Rightward : r316_Leftward;
            var r743_extraSlope = (r743_ltr ? +1 : -1) * 0.5 * (r743_sw - r743_swTerminal) / r743_sw;
            var r743_finalTurnSlope = r743_keyKnotDirection.x + r743_extraSlope - (r743_ltr ? +1 : -1) * 0.5 * r316_TanSlope;
            var r743_keyKnot = r316_g4[r743_ltr ? "right" : "left"].mid(r743_mx, r743_y, r316_heading({
                "x": r743_finalTurnSlope,
                "y": r743_keyKnotDirection.y
            }));
            (function () {
                var r745_rad = Math.min(r743_w, r743_mixRatio * r743_u);
                var r745_skew0 = r1_clamp(0, r743_w, r743_w - r743_v) / r745_rad + (r1_clamp(1, 1.5, r743_mixRatio * (r743_u / r743_w)) - 1) * 0.5;
                var r745_depth = r743_v + r745_skew0 * r743_sw - r743_sw;
                var r745_shallowLimit = r743_sw / 2;
                var r745_skew = r1_clamp(0, 0.5, r745_skew0 + r1_clamp(0, r745_shallowLimit, r745_shallowLimit - r745_depth) / r745_rad);
                var r745_headDirection = r743_doSwash ? {
                    "x": r316_Contrast / Math.hypot(1, r745_skew) * (r743_dtu ? -1 : +1),
                    "y": r745_skew / Math.hypot(1, r745_skew) * (r743_ltr ? +1 : -1)
                } : {
                    "x": r316_Contrast * (r743_dtu ? -1 : +1),
                    "y": 0
                };
                return r743_toFinish.af = new r1_AfCombine(r743_toFinish.af, r316_heading(r745_headDirection));
            })();
            var r743_segBefore = [];
            var r743_segAfter = [];
            var _r743_t1 = 1;
            var _r743_t2 = r316_nHookSegments;
            var r743_j = _r743_t1;
            while (r743_j < _r743_t2) {
                r743_fraction = r743_j / r316_nHookSegments;
                r743_mixRatioAdjust = Math.max(0.5, r1_mix(0.5, r743_mixRatio, r743_doSwash ? 1 : 0.125));
                r743_segBefore.push(r316_g4(r1_mix(r743_mx, r743_toStraight.x, r743_fraction), r1_mix(r743_y, r743_toStraight.y, r316_archv.yFromX(r743_fraction, r743_superness)), r316_unimportant));
                r743_segAfter.push(r316_g4(r1_mix(r743_mx, r743_toFinish.x, r743_fraction), r1_mix(r743_y, r743_toFinish.y, r316_archv.yFromX(r743_fraction * (1 / r743_mixRatioAdjust - 1), r743_superness) / r316_archv.yFromX(1 / r743_mixRatioAdjust - 1, r743_superness)), r316_unimportant));
                r743_j = r743_j + 1;
            }
            if (r743_isStart) return [r743_segAfter.reverse(), r743_keyKnot, r743_segBefore]; else return [r743_segBefore.reverse(), r743_keyKnot, r743_segAfter];
        };
        var r316_hookStartBlender = function (r748_before, r748_after, r748_args) {
            var _r748_t0, _r748_t1;
            return r316_HookShape(r748_after, r748_before, true, r748_args);
        };
        var r316_hookEndBlender = function (r749_before, r749_after, r749_args) {
            var _r749_t0, _r749_t1;
            return r316_HookShape(r749_before, r749_after, false, r749_args);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r751_t0, _r751_t1;
            return {
                "HookStart": r316_HookStart
            };
        });
        var r316_HookStart = function () {
            var _r753_t5;
            var _r753_t6 = arguments;
            var r753_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r753_t6, 0);
            var _r753_t0 = [];
            var _r753_t1 = 0;
            while (_r753_t1 < r753_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r753_xn$flexarguments$2Lrc7uIe5[_r753_t1] instanceof r316_xn$NamedParameterPair$2Lrc9b)) _r753_t0.push(r753_xn$flexarguments$2Lrc7uIe5[_r753_t1]);
                _r753_t1 = _r753_t1 + 1;
            }
            var _r753_t2 = r753_xn$flexarguments$2Lrc7uIe5;
            var _r753_t3 = _r753_t2.length;
            var _r753_t4 = 0;
            while (_r753_t4 < _r753_t3) {
                _r753_t1 = _r753_t2[_r753_t4];
                if (_r753_t1 && _r753_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r753_t1.left === "y") r753_y = _r753_t1.right;
                if (_r753_t1 && _r753_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r753_t1.left === "sw") r753_sw = _r753_t1.right;
                if (_r753_t1 && _r753_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r753_t1.left === "swTerminal") r753_swTerminal = _r753_t1.right;
                if (_r753_t1 && _r753_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r753_t1.left === "isTail") r753_isTail = _r753_t1.right;
                if (_r753_t1 && _r753_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r753_t1.left === "suppressSwash") r753_suppressSwash = _r753_t1.right;
                if (_r753_t1 && _r753_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r753_t1.left === "o") r753_o = _r753_t1.right;
                _r753_t4 = _r753_t4 + 1;
            }
            var r753_y = r1_fallback(r753_y, _r753_t0[0]);
            var r753_sw = r1_fallback(r753_sw, _r753_t0[1], r316_Stroke);
            var r753_swTerminal = r1_fallback(r753_swTerminal, _r753_t0[2], r753_sw);
            var r753_isTail = r1_fallback(r753_isTail, _r753_t0[3], false);
            var r753_suppressSwash = r1_fallback(r753_suppressSwash, _r753_t0[4], false);
            var r753_o = r1_fallback(r753_o, _r753_t0[5], r316_O);
            var r753_args = {
                "yRef": r753_y,
                "sw": r753_sw,
                "swTerminal": r753_swTerminal,
                "isTail": r753_isTail,
                "suppressSwash": r753_suppressSwash,
                "overshoot": r753_o
            };
            return new r1_FunctionInterpolator(r316_hookStartBlender, r753_args);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r758_t0, _r758_t1;
            return {
                "HookEnd": r316_HookEnd
            };
        });
        var r316_HookEnd = function () {
            var _r760_t5;
            var _r760_t6 = arguments;
            var r760_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r760_t6, 0);
            var _r760_t0 = [];
            var _r760_t1 = 0;
            while (_r760_t1 < r760_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r760_xn$flexarguments$2Lrc7uIe5[_r760_t1] instanceof r316_xn$NamedParameterPair$2Lrc9b)) _r760_t0.push(r760_xn$flexarguments$2Lrc7uIe5[_r760_t1]);
                _r760_t1 = _r760_t1 + 1;
            }
            var _r760_t2 = r760_xn$flexarguments$2Lrc7uIe5;
            var _r760_t3 = _r760_t2.length;
            var _r760_t4 = 0;
            while (_r760_t4 < _r760_t3) {
                _r760_t1 = _r760_t2[_r760_t4];
                if (_r760_t1 && _r760_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r760_t1.left === "y") r760_y = _r760_t1.right;
                if (_r760_t1 && _r760_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r760_t1.left === "sw") r760_sw = _r760_t1.right;
                if (_r760_t1 && _r760_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r760_t1.left === "swTerminal") r760_swTerminal = _r760_t1.right;
                if (_r760_t1 && _r760_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r760_t1.left === "isTail") r760_isTail = _r760_t1.right;
                if (_r760_t1 && _r760_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r760_t1.left === "suppressSwash") r760_suppressSwash = _r760_t1.right;
                if (_r760_t1 && _r760_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r760_t1.left === "o") r760_o = _r760_t1.right;
                _r760_t4 = _r760_t4 + 1;
            }
            var r760_y = r1_fallback(r760_y, _r760_t0[0]);
            var r760_sw = r1_fallback(r760_sw, _r760_t0[1], r316_Stroke);
            var r760_swTerminal = r1_fallback(r760_swTerminal, _r760_t0[2], r760_sw);
            var r760_isTail = r1_fallback(r760_isTail, _r760_t0[3], false);
            var r760_suppressSwash = r1_fallback(r760_suppressSwash, _r760_t0[4], false);
            var r760_o = r1_fallback(r760_o, _r760_t0[5], r316_O);
            var r760_args = {
                "yRef": r760_y,
                "sw": r760_sw,
                "swTerminal": r760_swTerminal,
                "isTail": r760_isTail,
                "suppressSwash": r760_suppressSwash,
                "overshoot": r760_o
            };
            return new r1_FunctionInterpolator(r316_hookEndBlender, r760_args);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r765_t0, _r765_t1;
            return {
                "flatside": r316_flatside
            };
        });
        var r316_flatside = (function () {
            var r768_ld, r768_lu, r768_rd, r768_ru;
            var r768_exports = {};
            r768_exports.ld = r768_ld = function () {
                var _r777_t5;
                var _r777_t6 = arguments;
                var r777_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r777_t6, 0);
                var _r777_t0 = [];
                var _r777_t1 = 0;
                while (_r777_t1 < r777_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r777_xn$flexarguments$2Lrc7uIe5[_r777_t1] instanceof r316_xn$NamedParameterPair$2Lrc9b)) _r777_t0.push(r777_xn$flexarguments$2Lrc7uIe5[_r777_t1]);
                    _r777_t1 = _r777_t1 + 1;
                }
                var _r777_t2 = r777_xn$flexarguments$2Lrc7uIe5;
                var _r777_t3 = _r777_t2.length;
                var _r777_t4 = 0;
                while (_r777_t4 < _r777_t3) {
                    _r777_t1 = _r777_t2[_r777_t4];
                    if (_r777_t1 && _r777_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r777_t1.left === "x") r777_x = _r777_t1.right;
                    if (_r777_t1 && _r777_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r777_t1.left === "d") r777_d = _r777_t1.right;
                    if (_r777_t1 && _r777_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r777_t1.left === "u") r777_u = _r777_t1.right;
                    if (_r777_t1 && _r777_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r777_t1.left === "ada") r777_ada = _r777_t1.right;
                    if (_r777_t1 && _r777_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r777_t1.left === "adb") r777_adb = _r777_t1.right;
                    if (_r777_t1 && _r777_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r777_t1.left === "ox") r777_ox = _r777_t1.right;
                    if (_r777_t1 && _r777_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r777_t1.left === "af") r777_af = _r777_t1.right;
                    if (_r777_t1 && _r777_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r777_t1.left === "startAf") r777_startAf = _r777_t1.right;
                    if (_r777_t1 && _r777_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r777_t1.left === "endAf") r777_endAf = _r777_t1.right;
                    _r777_t4 = _r777_t4 + 1;
                }
                var r777_x = r1_fallback(r777_x, _r777_t0[0]);
                var r777_d = r1_fallback(r777_d, _r777_t0[1]);
                var r777_u = r1_fallback(r777_u, _r777_t0[2]);
                var r777_ada = r1_fallback(r777_ada, _r777_t0[3], r316_ArchDepthA);
                var r777_adb = r1_fallback(r777_adb, _r777_t0[4], r316_ArchDepthB);
                var r777_ox = r1_fallback(r777_ox, _r777_t0[5], r316_OX);
                var r777_af = r1_fallback(r777_af, _r777_t0[6], void 0);
                var r777_startAf = r1_fallback(r777_startAf, _r777_t0[7], r777_af);
                var r777_endAf = r1_fallback(r777_endAf, _r777_t0[8], r777_af);
                return r777_u - r777_d > r777_ada + r777_adb ? [r316_flat(r777_x + r777_ox, r777_u - r777_ada, r777_startAf), r316_curl(r777_x + r777_ox, r777_d + r777_adb, r777_endAf)] : [r316_g4(r777_x + r777_ox, r316_YSmoothMidL(r777_u, r777_d, r777_ada, r777_adb), r777_af)];
            };
            r768_exports.lu = r768_lu = function () {
                var _r783_t5;
                var _r783_t6 = arguments;
                var r783_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r783_t6, 0);
                var _r783_t0 = [];
                var _r783_t1 = 0;
                while (_r783_t1 < r783_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r783_xn$flexarguments$2Lrc7uIe5[_r783_t1] instanceof r316_xn$NamedParameterPair$2Lrc9b)) _r783_t0.push(r783_xn$flexarguments$2Lrc7uIe5[_r783_t1]);
                    _r783_t1 = _r783_t1 + 1;
                }
                var _r783_t2 = r783_xn$flexarguments$2Lrc7uIe5;
                var _r783_t3 = _r783_t2.length;
                var _r783_t4 = 0;
                while (_r783_t4 < _r783_t3) {
                    _r783_t1 = _r783_t2[_r783_t4];
                    if (_r783_t1 && _r783_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r783_t1.left === "x") r783_x = _r783_t1.right;
                    if (_r783_t1 && _r783_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r783_t1.left === "d") r783_d = _r783_t1.right;
                    if (_r783_t1 && _r783_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r783_t1.left === "u") r783_u = _r783_t1.right;
                    if (_r783_t1 && _r783_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r783_t1.left === "ada") r783_ada = _r783_t1.right;
                    if (_r783_t1 && _r783_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r783_t1.left === "adb") r783_adb = _r783_t1.right;
                    if (_r783_t1 && _r783_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r783_t1.left === "ox") r783_ox = _r783_t1.right;
                    if (_r783_t1 && _r783_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r783_t1.left === "af") r783_af = _r783_t1.right;
                    if (_r783_t1 && _r783_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r783_t1.left === "startAf") r783_startAf = _r783_t1.right;
                    if (_r783_t1 && _r783_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r783_t1.left === "endAf") r783_endAf = _r783_t1.right;
                    _r783_t4 = _r783_t4 + 1;
                }
                var r783_x = r1_fallback(r783_x, _r783_t0[0]);
                var r783_d = r1_fallback(r783_d, _r783_t0[1]);
                var r783_u = r1_fallback(r783_u, _r783_t0[2]);
                var r783_ada = r1_fallback(r783_ada, _r783_t0[3], r316_ArchDepthA);
                var r783_adb = r1_fallback(r783_adb, _r783_t0[4], r316_ArchDepthB);
                var r783_ox = r1_fallback(r783_ox, _r783_t0[5], r316_OX);
                var r783_af = r1_fallback(r783_af, _r783_t0[6], void 0);
                var r783_startAf = r1_fallback(r783_startAf, _r783_t0[7], r783_af);
                var r783_endAf = r1_fallback(r783_endAf, _r783_t0[8], r783_af);
                return r783_u - r783_d > r783_ada + r783_adb ? [r316_flat(r783_x + r783_ox, r783_d + r783_adb, r783_startAf), r316_curl(r783_x + r783_ox, r783_u - r783_ada, r783_endAf)] : [r316_g4(r783_x + r783_ox, r316_YSmoothMidL(r783_u, r783_d, r783_ada, r783_adb), r783_af)];
            };
            r768_exports.rd = r768_rd = function () {
                var _r789_t5;
                var _r789_t6 = arguments;
                var r789_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r789_t6, 0);
                var _r789_t0 = [];
                var _r789_t1 = 0;
                while (_r789_t1 < r789_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r789_xn$flexarguments$2Lrc7uIe5[_r789_t1] instanceof r316_xn$NamedParameterPair$2Lrc9b)) _r789_t0.push(r789_xn$flexarguments$2Lrc7uIe5[_r789_t1]);
                    _r789_t1 = _r789_t1 + 1;
                }
                var _r789_t2 = r789_xn$flexarguments$2Lrc7uIe5;
                var _r789_t3 = _r789_t2.length;
                var _r789_t4 = 0;
                while (_r789_t4 < _r789_t3) {
                    _r789_t1 = _r789_t2[_r789_t4];
                    if (_r789_t1 && _r789_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r789_t1.left === "x") r789_x = _r789_t1.right;
                    if (_r789_t1 && _r789_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r789_t1.left === "d") r789_d = _r789_t1.right;
                    if (_r789_t1 && _r789_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r789_t1.left === "u") r789_u = _r789_t1.right;
                    if (_r789_t1 && _r789_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r789_t1.left === "ada") r789_ada = _r789_t1.right;
                    if (_r789_t1 && _r789_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r789_t1.left === "adb") r789_adb = _r789_t1.right;
                    if (_r789_t1 && _r789_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r789_t1.left === "ox") r789_ox = _r789_t1.right;
                    if (_r789_t1 && _r789_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r789_t1.left === "af") r789_af = _r789_t1.right;
                    if (_r789_t1 && _r789_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r789_t1.left === "startAf") r789_startAf = _r789_t1.right;
                    if (_r789_t1 && _r789_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r789_t1.left === "endAf") r789_endAf = _r789_t1.right;
                    _r789_t4 = _r789_t4 + 1;
                }
                var r789_x = r1_fallback(r789_x, _r789_t0[0]);
                var r789_d = r1_fallback(r789_d, _r789_t0[1]);
                var r789_u = r1_fallback(r789_u, _r789_t0[2]);
                var r789_ada = r1_fallback(r789_ada, _r789_t0[3], r316_ArchDepthA);
                var r789_adb = r1_fallback(r789_adb, _r789_t0[4], r316_ArchDepthB);
                var r789_ox = r1_fallback(r789_ox, _r789_t0[5], r316_OX);
                var r789_af = r1_fallback(r789_af, _r789_t0[6], void 0);
                var r789_startAf = r1_fallback(r789_startAf, _r789_t0[7], r789_af);
                var r789_endAf = r1_fallback(r789_endAf, _r789_t0[8], r789_af);
                return r789_u - r789_d > r789_ada + r789_adb ? [r316_flat(r789_x - r789_ox, r789_u - r789_adb, r789_startAf), r316_curl(r789_x - r789_ox, r789_d + r789_ada, r789_endAf)] : [r316_g4(r789_x - r789_ox, r316_YSmoothMidR(r789_u, r789_d, r789_ada, r789_adb), r789_af)];
            };
            r768_exports.ru = r768_ru = function () {
                var _r795_t5;
                var _r795_t6 = arguments;
                var r795_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r795_t6, 0);
                var _r795_t0 = [];
                var _r795_t1 = 0;
                while (_r795_t1 < r795_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r795_xn$flexarguments$2Lrc7uIe5[_r795_t1] instanceof r316_xn$NamedParameterPair$2Lrc9b)) _r795_t0.push(r795_xn$flexarguments$2Lrc7uIe5[_r795_t1]);
                    _r795_t1 = _r795_t1 + 1;
                }
                var _r795_t2 = r795_xn$flexarguments$2Lrc7uIe5;
                var _r795_t3 = _r795_t2.length;
                var _r795_t4 = 0;
                while (_r795_t4 < _r795_t3) {
                    _r795_t1 = _r795_t2[_r795_t4];
                    if (_r795_t1 && _r795_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r795_t1.left === "x") r795_x = _r795_t1.right;
                    if (_r795_t1 && _r795_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r795_t1.left === "d") r795_d = _r795_t1.right;
                    if (_r795_t1 && _r795_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r795_t1.left === "u") r795_u = _r795_t1.right;
                    if (_r795_t1 && _r795_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r795_t1.left === "ada") r795_ada = _r795_t1.right;
                    if (_r795_t1 && _r795_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r795_t1.left === "adb") r795_adb = _r795_t1.right;
                    if (_r795_t1 && _r795_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r795_t1.left === "ox") r795_ox = _r795_t1.right;
                    if (_r795_t1 && _r795_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r795_t1.left === "af") r795_af = _r795_t1.right;
                    if (_r795_t1 && _r795_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r795_t1.left === "startAf") r795_startAf = _r795_t1.right;
                    if (_r795_t1 && _r795_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r795_t1.left === "endAf") r795_endAf = _r795_t1.right;
                    _r795_t4 = _r795_t4 + 1;
                }
                var r795_x = r1_fallback(r795_x, _r795_t0[0]);
                var r795_d = r1_fallback(r795_d, _r795_t0[1]);
                var r795_u = r1_fallback(r795_u, _r795_t0[2]);
                var r795_ada = r1_fallback(r795_ada, _r795_t0[3], r316_ArchDepthA);
                var r795_adb = r1_fallback(r795_adb, _r795_t0[4], r316_ArchDepthB);
                var r795_ox = r1_fallback(r795_ox, _r795_t0[5], r316_OX);
                var r795_af = r1_fallback(r795_af, _r795_t0[6], void 0);
                var r795_startAf = r1_fallback(r795_startAf, _r795_t0[7], r795_af);
                var r795_endAf = r1_fallback(r795_endAf, _r795_t0[8], r795_af);
                return r795_u - r795_d > r795_ada + r795_adb ? [r316_flat(r795_x - r795_ox, r795_d + r795_ada, r795_startAf), r316_curl(r795_x - r795_ox, r795_u - r795_adb, r795_endAf)] : [r316_g4(r795_x - r795_ox, r316_YSmoothMidR(r795_u, r795_d, r795_ada, r795_adb), r795_af)];
            };
            return r768_exports;
        })();
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r800_t0, _r800_t1;
            return {
                "Arch": r316_Arch
            };
        });
        var r316_Arch = (function () {
            var r803_xn$adjustx$7Hrq, r803_lhs, r803_rhs, r803_side, r803_dir, r803_ydir, _r803_t2, _r803_t3, _r803_t4, _r803_t5, _r803_leti6, _r803_leti7, _r803_leti8, _r803_t11, _r803_tag12, _r803_t13, _r803_t14, _r803_t15, _r803_t16, _r803_tag17;
            var r803_exports = {};
            var _r803_t9 = r803_exports;
            var _r803_t10 = "adjust-x";
            _r803_t9[_r803_t10] = r803_xn$adjustx$7Hrq = (function () {
                var r813_top, r813_bot;
                var r813_exports = {};
                r813_exports.top = r813_top = function () {
                    var _r822_t5;
                    var _r822_t6 = arguments;
                    var r822_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r822_t6, 0);
                    var _r822_t0 = [];
                    var _r822_t1 = 0;
                    while (_r822_t1 < r822_xn$flexarguments$2Lrc7uIe5.length) {
                        if (!(r822_xn$flexarguments$2Lrc7uIe5[_r822_t1] instanceof r316_xn$NamedParameterPair$2Lrc9b)) _r822_t0.push(r822_xn$flexarguments$2Lrc7uIe5[_r822_t1]);
                        _r822_t1 = _r822_t1 + 1;
                    }
                    var _r822_t2 = r822_xn$flexarguments$2Lrc7uIe5;
                    var _r822_t3 = _r822_t2.length;
                    var _r822_t4 = 0;
                    while (_r822_t4 < _r822_t3) {
                        _r822_t1 = _r822_t2[_r822_t4];
                        if (_r822_t1 && _r822_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r822_t1.left === "x") r822_x = _r822_t1.right;
                        if (_r822_t1 && _r822_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r822_t1.left === "sw") r822_sw = _r822_t1.right;
                        _r822_t4 = _r822_t4 + 1;
                    }
                    var r822_x = r1_fallback(r822_x, _r822_t0[0]);
                    var r822_sw = r1_fallback(r822_sw, _r822_t0[1], r316_Stroke);
                    return r822_x - r316_CorrectionOMidX * r822_sw;
                };
                r813_exports.bot = r813_bot = function () {
                    var _r828_t5;
                    var _r828_t6 = arguments;
                    var r828_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r828_t6, 0);
                    var _r828_t0 = [];
                    var _r828_t1 = 0;
                    while (_r828_t1 < r828_xn$flexarguments$2Lrc7uIe5.length) {
                        if (!(r828_xn$flexarguments$2Lrc7uIe5[_r828_t1] instanceof r316_xn$NamedParameterPair$2Lrc9b)) _r828_t0.push(r828_xn$flexarguments$2Lrc7uIe5[_r828_t1]);
                        _r828_t1 = _r828_t1 + 1;
                    }
                    var _r828_t2 = r828_xn$flexarguments$2Lrc7uIe5;
                    var _r828_t3 = _r828_t2.length;
                    var _r828_t4 = 0;
                    while (_r828_t4 < _r828_t3) {
                        _r828_t1 = _r828_t2[_r828_t4];
                        if (_r828_t1 && _r828_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r828_t1.left === "x") r828_x = _r828_t1.right;
                        if (_r828_t1 && _r828_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r828_t1.left === "sw") r828_sw = _r828_t1.right;
                        _r828_t4 = _r828_t4 + 1;
                    }
                    var r828_x = r1_fallback(r828_x, _r828_t0[0]);
                    var r828_sw = r1_fallback(r828_sw, _r828_t0[1], r316_Stroke);
                    return r828_x + r316_CorrectionOMidX * r828_sw;
                };
                return r813_exports;
            })();
            var r803_impl = function (r832_args) {
                var _r832_t0, _r832_t1;
                var r832_doAdj = !r832_args.compact;
                var r832_skew = r316_HSwToV(0.5 * (r832_args.swAfter - r832_args.swBefore)) / r832_args.sw;
                var r832_heading = {
                    "x": r1_boolePn(r832_args.rtl) * (r1_boolePn(r832_args.lhs) * r832_skew + r1_boole(r832_doAdj) * r316_TanSlope),
                    "y": r1_boolePn(r832_args.lhs) * r1_boolePn(r832_args.atBot) * 1
                };
                var r832_italicAdj = r1_boole(r832_doAdj) * r1_boolePn(r832_args.atBot) * r316_CorrectionOMidX * r832_args.sw;
                var r832_overshoot = r1_boolePn(r832_args.atBot) * r832_args.o;
                var r832_af = r832_args.lhs ? r316_widths.lhs.heading(r832_args.sw, r832_heading) : r316_widths.rhs.heading(r832_args.sw, r832_heading);
                var r832_knotType = r1_fallback(r832_args["knot-ty"], r832_args.compact ? r832_args.rtl ? r316_g4.left.mid : r316_g4.right.mid : r832_args.rtl ? r316_g2.left.mid : r316_g2.right.mid);
                return r832_knotType(r832_args.x + r832_italicAdj, r832_args.y + r832_overshoot, r832_af);
            };
            var r803_superSin = function (r833_angle, r833_superness) {
                var _r833_t0, _r833_t1;
                if (!r833_angle) return 0;
                var r833_s = Math.sin(r833_angle * Math.PI / 180);
                return Math.sign(r833_s) * Math.pow(Math.abs(r833_s), 2 / r833_superness);
            };
            var r803_superCos = function (r835_angle, r835_superness) {
                var _r835_t0, _r835_t1;
                if (!r835_angle) return 1;
                var r835_c = Math.cos(r835_angle * Math.PI / 180);
                return Math.sign(r835_c) * Math.pow(Math.abs(r835_c), 2 / r835_superness);
            };
            var r803_mixR = function (r837_w, r837_angW, r837_v, r837_angV, r837_u) {
                var r837_radV, r837_radW, r837_chrV, r837_chrW, r837_r, _r837_t0, _r837_t1, _r837_t2;
                if (r837_w < r837_v) return 1 - r803_mixR(r837_v, r837_angV, r837_w, r837_angW, r837_u);
                var r837_super = r316_DesignParameters.superness;
                if (r837_angV !== void 0 && r837_angW !== void 0) {
                    r837_radV = r837_v / (1 - r803_superSin(r837_angV, r837_super));
                    r837_radW = r837_w / (1 - r803_superSin(r837_angW, r837_super));
                    r837_chrV = r837_radV * r803_superCos(r837_angV, r837_super);
                    r837_chrW = r837_radW * r803_superCos(r837_angW, r837_super);
                    return r837_chrW / (r837_chrV + r837_chrW);
                } else {
                    r837_r = 1 / (Math.pow(1 - Math.pow(1 - r837_v / r837_w, r837_super), 1 / r837_super) + 1);
                    r837_r = 0.5 + (r837_r - 0.5) * (r837_v + r837_w) / (r837_u * 2);
                    return r837_r;
                }
            };
            var r803_archBlender = function (r840__before, r840__after, r840_args) {
                var _r840_t0, _r840_t1;
                var r840_before = r1_fallback(r840_args.mockPre, r840__before);
                var r840_after = r1_fallback(r840_args.mockPost, r840__after);
                var r840_u = Math.abs(r840_after.x - r840_before.x);
                var r840_v = Math.abs(r840_after.y - r840_args.y);
                var r840_w = Math.abs(r840_before.y - r840_args.y);
                var r840_mixRatio = r803_mixR(r840_w, r840_args.anglePre, r840_v, r840_args.anglePost, r840_u);
                r840_args.x = r1_mix(r840_before.x, r840_after.x, r1_fallback(r840_args.p, r840_mixRatio));
                r840_args.rtl = r840_before.x > r840_after.x;
                r840_args.atBot = r840_args.y < r840_before.y && r840_args.y < r840_after.y;
                return [r840_args.blendPre || [], r803_impl(r840_args), r840_args.blendPost || []];
            };
            r803_exports.lhs = r803_lhs = function () {
                var _r843_t5;
                var _r843_t6 = arguments;
                var r843_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r843_t6, 0);
                var _r843_t0 = [];
                var _r843_t1 = 0;
                while (_r843_t1 < r843_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r843_xn$flexarguments$2Lrc7uIe5[_r843_t1] instanceof r316_xn$NamedParameterPair$2Lrc9b)) _r843_t0.push(r843_xn$flexarguments$2Lrc7uIe5[_r843_t1]);
                    _r843_t1 = _r843_t1 + 1;
                }
                var _r843_t2 = r843_xn$flexarguments$2Lrc7uIe5;
                var _r843_t3 = _r843_t2.length;
                var _r843_t4 = 0;
                while (_r843_t4 < _r843_t3) {
                    _r843_t1 = _r843_t2[_r843_t4];
                    if (_r843_t1 && _r843_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r843_t1.left === "y") r843_y = _r843_t1.right;
                    if (_r843_t1 && _r843_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r843_t1.left === "p") r843_p = _r843_t1.right;
                    if (_r843_t1 && _r843_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r843_t1.left === "sw") r843_sw = _r843_t1.right;
                    if (_r843_t1 && _r843_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r843_t1.left === "compact") r843_compact = _r843_t1.right;
                    if (_r843_t1 && _r843_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r843_t1.left === "o") r843_o = _r843_t1.right;
                    if (_r843_t1 && _r843_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r843_t1.left === "anglePre") r843_anglePre = _r843_t1.right;
                    if (_r843_t1 && _r843_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r843_t1.left === "anglePost") r843_anglePost = _r843_t1.right;
                    if (_r843_t1 && _r843_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r843_t1.left === "swBefore") r843_swBefore = _r843_t1.right;
                    if (_r843_t1 && _r843_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r843_t1.left === "swAfter") r843_swAfter = _r843_t1.right;
                    if (_r843_t1 && _r843_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r843_t1.left === "mockPre") r843_mockPre = _r843_t1.right;
                    if (_r843_t1 && _r843_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r843_t1.left === "mockPost") r843_mockPost = _r843_t1.right;
                    if (_r843_t1 && _r843_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r843_t1.left === "blendPre") r843_blendPre = _r843_t1.right;
                    if (_r843_t1 && _r843_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r843_t1.left === "blendPost") r843_blendPost = _r843_t1.right;
                    _r843_t4 = _r843_t4 + 1;
                }
                var r843_y = r1_fallback(r843_y, _r843_t0[0]);
                var r843_p = r1_fallback(r843_p, _r843_t0[1]);
                var r843_sw = r1_fallback(r843_sw, _r843_t0[2], r316_Stroke);
                var r843_compact = r1_fallback(r843_compact, _r843_t0[3], false);
                var r843_o = r1_fallback(r843_o, _r843_t0[4], r316_O);
                var r843_anglePre = r1_fallback(r843_anglePre, _r843_t0[5], void 0);
                var r843_anglePost = r1_fallback(r843_anglePost, _r843_t0[6], void 0);
                var r843_swBefore = r1_fallback(r843_swBefore, _r843_t0[7], r843_sw);
                var r843_swAfter = r1_fallback(r843_swAfter, _r843_t0[8], r843_sw);
                var r843_mockPre = r1_fallback(r843_mockPre, _r843_t0[9], void 0);
                var r843_mockPost = r1_fallback(r843_mockPost, _r843_t0[10], void 0);
                var r843_blendPre = r1_fallback(r843_blendPre, _r843_t0[11], r843_anglePre ? void 0 : r316_arcvh());
                var r843_blendPost = r1_fallback(r843_blendPost, _r843_t0[12], r843_anglePost ? void 0 : r316_archv());
                var r843_args = {
                    "lhs": true,
                    "y": r843_y,
                    "p": r843_p,
                    "sw": r843_sw,
                    "compact": r843_compact,
                    "o": r843_o,
                    "swBefore": r843_swBefore,
                    "swAfter": r843_swAfter,
                    "mockPre": r843_mockPre,
                    "mockPost": r843_mockPost,
                    "blendPre": r843_blendPre,
                    "blendPost": r843_blendPost,
                    "anglePre": r843_anglePre,
                    "anglePost": r843_anglePost
                };
                return new r1_FunctionInterpolator(r803_archBlender, r843_args);
            };
            r803_exports.rhs = r803_rhs = function () {
                var _r849_t5;
                var _r849_t6 = arguments;
                var r849_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r849_t6, 0);
                var _r849_t0 = [];
                var _r849_t1 = 0;
                while (_r849_t1 < r849_xn$flexarguments$2Lrc7uIe5.length) {
                    if (!(r849_xn$flexarguments$2Lrc7uIe5[_r849_t1] instanceof r316_xn$NamedParameterPair$2Lrc9b)) _r849_t0.push(r849_xn$flexarguments$2Lrc7uIe5[_r849_t1]);
                    _r849_t1 = _r849_t1 + 1;
                }
                var _r849_t2 = r849_xn$flexarguments$2Lrc7uIe5;
                var _r849_t3 = _r849_t2.length;
                var _r849_t4 = 0;
                while (_r849_t4 < _r849_t3) {
                    _r849_t1 = _r849_t2[_r849_t4];
                    if (_r849_t1 && _r849_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r849_t1.left === "y") r849_y = _r849_t1.right;
                    if (_r849_t1 && _r849_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r849_t1.left === "p") r849_p = _r849_t1.right;
                    if (_r849_t1 && _r849_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r849_t1.left === "sw") r849_sw = _r849_t1.right;
                    if (_r849_t1 && _r849_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r849_t1.left === "compact") r849_compact = _r849_t1.right;
                    if (_r849_t1 && _r849_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r849_t1.left === "o") r849_o = _r849_t1.right;
                    if (_r849_t1 && _r849_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r849_t1.left === "anglePre") r849_anglePre = _r849_t1.right;
                    if (_r849_t1 && _r849_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r849_t1.left === "anglePost") r849_anglePost = _r849_t1.right;
                    if (_r849_t1 && _r849_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r849_t1.left === "swBefore") r849_swBefore = _r849_t1.right;
                    if (_r849_t1 && _r849_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r849_t1.left === "swAfter") r849_swAfter = _r849_t1.right;
                    if (_r849_t1 && _r849_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r849_t1.left === "mockPre") r849_mockPre = _r849_t1.right;
                    if (_r849_t1 && _r849_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r849_t1.left === "mockPost") r849_mockPost = _r849_t1.right;
                    if (_r849_t1 && _r849_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r849_t1.left === "blendPre") r849_blendPre = _r849_t1.right;
                    if (_r849_t1 && _r849_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r849_t1.left === "blendPost") r849_blendPost = _r849_t1.right;
                    _r849_t4 = _r849_t4 + 1;
                }
                var r849_y = r1_fallback(r849_y, _r849_t0[0]);
                var r849_p = r1_fallback(r849_p, _r849_t0[1]);
                var r849_sw = r1_fallback(r849_sw, _r849_t0[2], r316_Stroke);
                var r849_compact = r1_fallback(r849_compact, _r849_t0[3], false);
                var r849_o = r1_fallback(r849_o, _r849_t0[4], r316_O);
                var r849_anglePre = r1_fallback(r849_anglePre, _r849_t0[5], void 0);
                var r849_anglePost = r1_fallback(r849_anglePost, _r849_t0[6], void 0);
                var r849_swBefore = r1_fallback(r849_swBefore, _r849_t0[7], r849_sw);
                var r849_swAfter = r1_fallback(r849_swAfter, _r849_t0[8], r849_sw);
                var r849_mockPre = r1_fallback(r849_mockPre, _r849_t0[9], void 0);
                var r849_mockPost = r1_fallback(r849_mockPost, _r849_t0[10], void 0);
                var r849_blendPre = r1_fallback(r849_blendPre, _r849_t0[11], r849_anglePre ? void 0 : r316_arcvh());
                var r849_blendPost = r1_fallback(r849_blendPost, _r849_t0[12], r849_anglePost ? void 0 : r316_archv());
                var r849_args = {
                    "lhs": false,
                    "y": r849_y,
                    "p": r849_p,
                    "sw": r849_sw,
                    "compact": r849_compact,
                    "o": r849_o,
                    "swBefore": r849_swBefore,
                    "swAfter": r849_swAfter,
                    "mockPre": r849_mockPre,
                    "mockPost": r849_mockPost,
                    "blendPre": r849_blendPre,
                    "blendPost": r849_blendPost,
                    "anglePre": r849_anglePre,
                    "anglePost": r849_anglePost
                };
                return new r1_FunctionInterpolator(r803_archBlender, r849_args);
            };
            var _r803_t0 = [r803_lhs, r803_rhs][Symbol.iterator]();
            var _r803_t1 = void 0;
            while (!(_r803_t1 = _r803_t0.next()).done) {
                r803_side = _r803_t1.value;
                r803_side.centerAt = {};
                _r803_t2 = ["ltr", "rtl"][Symbol.iterator]();
                _r803_t3 = void 0;
                while (!(_r803_t3 = _r803_t2.next()).done) {
                    r803_dir = _r803_t3.value;
                    r803_side.centerAt[r803_dir] = {};
                    _r803_t4 = ["t", "b"][Symbol.iterator]();
                    _r803_t5 = void 0;
                    while (!(_r803_t5 = _r803_t4.next()).done) {
                        r803_ydir = _r803_t5.value;
                        _r803_t13 = r803_side;
                        _r803_t14 = r803_dir;
                        _r803_t15 = r803_ydir;
                        (function (_r803_leti6, _r803_leti7, _r803_leti8) {
                            var _r856_t0, _r856_tag1;
                            var r856_side = _r803_leti6;
                            var r856_dir = _r803_leti7;
                            var r856_ydir = _r803_leti8;
                            return (function () {
                                var r858_f = function () {
                                    var _r860_t5;
                                    var _r860_t6 = arguments;
                                    var r860_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r860_t6, 0);
                                    var _r860_t0 = [];
                                    var _r860_t1 = 0;
                                    while (_r860_t1 < r860_xn$flexarguments$2Lrc7uIe5.length) {
                                        if (!(r860_xn$flexarguments$2Lrc7uIe5[_r860_t1] instanceof r316_xn$NamedParameterPair$2Lrc9b)) _r860_t0.push(r860_xn$flexarguments$2Lrc7uIe5[_r860_t1]);
                                        _r860_t1 = _r860_t1 + 1;
                                    }
                                    var _r860_t2 = r860_xn$flexarguments$2Lrc7uIe5;
                                    var _r860_t3 = _r860_t2.length;
                                    var _r860_t4 = 0;
                                    while (_r860_t4 < _r860_t3) {
                                        _r860_t1 = _r860_t2[_r860_t4];
                                        if (_r860_t1 && _r860_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r860_t1.left === "x") r860_x = _r860_t1.right;
                                        if (_r860_t1 && _r860_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r860_t1.left === "y") r860_y = _r860_t1.right;
                                        if (_r860_t1 && _r860_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r860_t1.left === "sw") r860_sw = _r860_t1.right;
                                        if (_r860_t1 && _r860_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r860_t1.left === "compact") r860_compact = _r860_t1.right;
                                        if (_r860_t1 && _r860_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r860_t1.left === "knot-ty") r860_xn$knotty$5sIl = _r860_t1.right;
                                        if (_r860_t1 && _r860_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r860_t1.left === "o") r860_o = _r860_t1.right;
                                        if (_r860_t1 && _r860_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r860_t1.left === "swBefore") r860_swBefore = _r860_t1.right;
                                        if (_r860_t1 && _r860_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r860_t1.left === "swAfter") r860_swAfter = _r860_t1.right;
                                        _r860_t4 = _r860_t4 + 1;
                                    }
                                    var r860_x = r1_fallback(r860_x, _r860_t0[0]);
                                    var r860_y = r1_fallback(r860_y, _r860_t0[1]);
                                    var r860_sw = r1_fallback(r860_sw, _r860_t0[2], r316_Stroke);
                                    var r860_compact = r1_fallback(r860_compact, _r860_t0[3], false);
                                    var r860_xn$knotty$5sIl = r1_fallback(r860_xn$knotty$5sIl, _r860_t0[4], void 0);
                                    var r860_o = r1_fallback(r860_o, _r860_t0[5], r316_O);
                                    var r860_swBefore = r1_fallback(r860_swBefore, _r860_t0[6], r860_sw);
                                    var r860_swAfter = r1_fallback(r860_swAfter, _r860_t0[7], r860_sw);
                                    return r803_impl({
                                        "x": r860_x,
                                        "y": r860_y,
                                        "sw": r860_sw,
                                        "compact": r860_compact,
                                        "knot-ty": r860_xn$knotty$5sIl,
                                        "o": r860_o,
                                        "swBefore": r860_swBefore,
                                        "swAfter": r860_swAfter,
                                        "lhs": r856_side === r803_lhs,
                                        "rtl": r856_dir === "rtl",
                                        "atBot": r856_ydir === "b"
                                    });
                                };
                                return r856_side.centerAt[r856_dir][r856_ydir] = r858_f;
                            })();
                        })(_r803_t13, _r803_t14, _r803_t15);
                    }
                }
            }
            return r803_exports;
        })();
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r865_t0, _r865_t1;
            return {
                "Ungizmo": r316_Ungizmo
            };
        });
        var r316_Ungizmo = function () {
            var _r866_t0, _r866_t1;
            return new r316_xn$Capture$2Lrc8.GlyphProc(function (r868_currentGlyph) {
                var _r868_t0, _r868_t1;
                r868_currentGlyph.include(r868_currentGlyph.gizmo.inverse());
                return void 0;
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r871_t0, _r871_t1;
            return {
                "Regizmo": r316_Regizmo
            };
        });
        var r316_Regizmo = function () {
            var _r872_t0, _r872_t1;
            return new r316_xn$Capture$2Lrc8.GlyphProc(function (r874_currentGlyph) {
                var _r874_t0, _r874_t1;
                r874_currentGlyph.include(r874_currentGlyph.gizmo);
                return void 0;
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r877_t0, _r877_t1;
            return {
                "FlipAround": r316_FlipAround
            };
        });
        var r316_FlipAround = function (r878_x, r878_y, r878_sx, r878_sy) {
            var _r878_t0, _r878_t1;
            return new r316_xn$Capture$2Lrc8.GlyphProc(function (r880_currentGlyph) {
                var _r880_t0, _r880_t1;
                r880_currentGlyph.include(r316_Ungizmo());
                r880_currentGlyph.include(r316_Translate(-r878_x, -r878_y));
                r880_currentGlyph.include(r316_Scale(r1_fallback(r878_sx, -1), r1_fallback(r878_sy, r878_sx, -1)));
                r880_currentGlyph.include(r316_Translate(+r878_x, +r878_y));
                r880_currentGlyph.include(r316_Regizmo());
                return void 0;
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r887_t0, _r887_t1;
            return {
                "ScaleAround": r316_ScaleAround
            };
        });
        var r316_ScaleAround = r316_FlipAround;
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r889_t0, _r889_t1;
            return {
                "Realign": r316_Realign
            };
        });
        var r316_Realign = function (r890_x, r890_y, r890_sx, r890_sy) {
            var _r890_t0, _r890_t1;
            return r316_ApparentTranslate(r890_sx - r890_x, r890_sy - r890_y);
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r892_t0, _r892_t1;
            return {
                "ForceUpright": r316_ForceUpright
            };
        });
        var r316_ForceUpright = function () {
            var _r893_t0, _r893_t1;
            return new r316_xn$Capture$2Lrc8.GlyphProc(function (r895_currentGlyph) {
                var _r895_t0, _r895_t1;
                r895_currentGlyph.gizmo = r1_Transform.Id();
                return void 0;
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r897_t0, _r897_t1;
            return {
                "PointingTo": r316_PointingTo
            };
        });
        var r316_PointingTo = function (r898_x1, r898_y1, r898_x2, r898_y2, r898_G) {
            var _r898_t0, _r898_t1;
            return new r316_xn$Capture$2Lrc8.GlyphProc(function (r900_currentGlyph) {
                var _r900_t0, _r900_t1;
                var r900_giz = r900_currentGlyph.gizmo;
                var r900_g = r316_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r316_xn$Capture$2Lrc8.GlyphProc(function (r903_currentGlyph) {
                    var _r903_t2, _r903_t3;
                    r903_currentGlyph.gizmo = r1_Transform.Id();
                    var _r903_t0 = r1_Transform.Id().apply({
                        "x": r898_x1,
                        "y": r898_y1
                    });
                    var r903_xo = _r903_t0.x;
                    var r903_yo = _r903_t0.y;
                    var _r903_t1 = r1_Transform.Id().apply({
                        "x": r898_x2,
                        "y": r898_y2
                    });
                    var r903_xt = _r903_t1.x;
                    var r903_yt = _r903_t1.y;
                    var r903_mag = Math.hypot(r903_yo - r903_yt, r903_xo - r903_xt);
                    r903_currentGlyph.include(r898_G(r903_mag));
                    r903_currentGlyph.include(r316_Rotate(Math.atan2(r903_yo - r903_yt, r903_xo - r903_xt)));
                    r903_currentGlyph.include(r316_Translate(r903_xt, r903_yt));
                    r903_currentGlyph.include(r900_giz);
                    return void 0;
                }));
                r900_currentGlyph.include(r900_g);
                return void 0;
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r910_t0, _r910_t1;
            return {
                "with-transform": r316_xn$withtransform$5sIl
            };
        });
        var r316_xn$withtransform$5sIl = function (r911_tfm, r911_gr) {
            var _r911_t0, _r911_t1;
            return r316_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r316_xn$Capture$2Lrc8.GlyphProc(function (r914_currentGlyph) {
                var _r914_t0, _r914_t1;
                r914_currentGlyph.include(r911_gr, true, true);
                r914_currentGlyph.include(r911_tfm);
                return void 0;
            }));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r918_t0, _r918_t1;
            return {
                "with-outlined": r316_xn$withoutlined$5sIl
            };
        });
        var r316_xn$withoutlined$5sIl = function (r919_sw, r919_gr) {
            var _r919_t0, _r919_t1;
            return r316_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r316_xn$Capture$2Lrc8.GlyphProc(function (r922_currentGlyph) {
                var _r922_t0, _r922_t1;
                r922_currentGlyph.include(r919_gr);
                var r922_g = r922_currentGlyph.geometry;
                var r922_gizmo = r922_currentGlyph.gizmo || r316_GlobalTransform;
                r922_currentGlyph.geometry = new r1_StrokeGeometry(r922_g, r922_gizmo, r919_sw, r316_HVContrast, false);
                return void 0;
            }));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r925_t0, _r925_t1;
            return {
                "remove-holes": r316_xn$removeholes$7Hrq
            };
        });
        var r316_xn$removeholes$7Hrq = function (r926_gr) {
            var _r926_t0, _r926_t1;
            return r316_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r316_xn$Capture$2Lrc8.GlyphProc(function (r929_currentGlyph) {
                var _r929_t0, _r929_t1;
                r929_currentGlyph.include(r926_gr);
                var r929_g = r929_currentGlyph.geometry;
                var r929_gizmo = r929_currentGlyph.gizmo || r316_GlobalTransform;
                r929_currentGlyph.geometry = new r1_RemoveHolesGeometry(r929_g, r929_gizmo);
                return void 0;
            }));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r932_t0, _r932_t1;
            return {
                "radicalize": r316_radicalize
            };
        });
        var r316_radicalize = function () {
            var _r933_t0, _r933_t1;
            return new r316_xn$Capture$2Lrc8.GlyphProc(function (r935_currentGlyph) {
                var _r935_t0, _r935_t1;
                var r935_g = r935_currentGlyph.geometry;
                r935_currentGlyph.geometry = new r1_RadicalGeometry(r935_g);
                return void 0;
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r937_t0, _r937_t1;
            return {
                "clear-geometry": r316_xn$cleargeometry$1aao
            };
        });
        var r316_xn$cleargeometry$1aao = function () {
            var _r938_t0, _r938_t1;
            return new r316_xn$Capture$2Lrc8.GlyphProc(function (r940_currentGlyph) {
                var _r940_t0, _r940_t1;
                r940_currentGlyph.clearGeometry();
                return void 0;
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r942_t0, _r942_t1;
            return {
                "clear-anchors": r316_xn$clearanchors$1aao
            };
        });
        var r316_xn$clearanchors$1aao = function () {
            var _r943_t0, _r943_t1;
            return new r316_xn$Capture$2Lrc8.GlyphProc(function (r945_currentGlyph) {
                var _r945_t0, _r945_t1;
                r945_currentGlyph.markAnchors = {};
                r945_currentGlyph.markBnchors = {};
                return void 0;
            });
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r947_t0, _r947_t1;
            return {
                "ExtLineCenter": r316_ExtLineCenter
            };
        });
        var r316_ExtLineCenter = function (r948_x1, r948_y1, r948_x2, r948_y2, r948__sw, r948__k) {
            var _r948_t0, _r948_t1;
            var r948_sw = r1_fallback(r948__sw, r316_Stroke);
            var r948_k = r1_fallback(r948__k, 0);
            return r316_dispiro(r316_widths.center(r948_sw), r316_corner(r1_mix(r948_x1, r948_x2, 0 - r948_k), r1_mix(r948_y1, r948_y2, 0 - r948_k)), r316_corner(r1_mix(r948_x1, r948_x2, 1 + r948_k), r1_mix(r948_y1, r948_y2, 1 + r948_k)));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r950_t0, _r950_t1;
            return {
                "ExtLineLhs": r316_ExtLineLhs
            };
        });
        var r316_ExtLineLhs = function (r951_x1, r951_y1, r951_x2, r951_y2, r951__sw, r951__k) {
            var _r951_t0, _r951_t1;
            var r951_sw = r1_fallback(r951__sw, r316_Stroke);
            var r951_k = r1_fallback(r951__k, 0);
            return r316_dispiro(r316_widths.lhs(r951_sw), r316_corner(r1_mix(r951_x1, r951_x2, 0 - r951_k), r1_mix(r951_y1, r951_y2, 0 - r951_k)), r316_corner(r1_mix(r951_x1, r951_x2, 1 + r951_k), r1_mix(r951_y1, r951_y2, 1 + r951_k)));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r953_t0, _r953_t1;
            return {
                "ExtLineLhsToRhs": r316_ExtLineLhsToRhs
            };
        });
        var r316_ExtLineLhsToRhs = function (r954_x1, r954_y1, r954_x2, r954_y2, r954__sw, r954__k) {
            var _r954_t0, _r954_t1;
            var r954_sw = r1_fallback(r954__sw, r316_Stroke);
            var r954_k = r1_fallback(r954__k, 0);
            return r316_dispiro(r316_corner(r1_mix(r954_x1, r954_x2, 0 - r954_k), r1_mix(r954_y1, r954_y2, 0 - r954_k), r316_widths.lhs(r954_sw)), r316_corner(r1_mix(r954_x1, r954_x2, 1 + r954_k), r1_mix(r954_y1, r954_y2, 1 + r954_k), r316_widths.rhs(r954_sw)));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r956_t0, _r956_t1;
            return {
                "ExtLineRhs": r316_ExtLineRhs
            };
        });
        var r316_ExtLineRhs = function (r957_x1, r957_y1, r957_x2, r957_y2, r957__sw, r957__k) {
            var _r957_t0, _r957_t1;
            var r957_sw = r1_fallback(r957__sw, r316_Stroke);
            var r957_k = r1_fallback(r957__k, 0);
            return r316_dispiro(r316_widths.rhs(r957_sw), r316_corner(r1_mix(r957_x1, r957_x2, 0 - r957_k), r1_mix(r957_y1, r957_y2, 0 - r957_k)), r316_corner(r1_mix(r957_x1, r957_x2, 1 + r957_k), r1_mix(r957_y1, r957_y2, 1 + r957_k)));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r959_t0, _r959_t1;
            return {
                "ExtLineRhsToLhs": r316_ExtLineRhsToLhs
            };
        });
        var r316_ExtLineRhsToLhs = function (r960_x1, r960_y1, r960_x2, r960_y2, r960__sw, r960__k) {
            var _r960_t0, _r960_t1;
            var r960_sw = r1_fallback(r960__sw, r316_Stroke);
            var r960_k = r1_fallback(r960__k, 0);
            return r316_dispiro(r316_corner(r1_mix(r960_x1, r960_x2, 0 - r960_k), r1_mix(r960_y1, r960_y2, 0 - r960_k), r316_widths.rhs(r960_sw)), r316_corner(r1_mix(r960_x1, r960_x2, 1 + r960_k), r1_mix(r960_y1, r960_y2, 1 + r960_k), r316_widths.lhs(r960_sw)));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r962_t0, _r962_t1;
            return {
                "DotVariants": r316_DotVariants
            };
        });
        var r316_DotVariants = {
            "round": [r316_DotAt, 1, r316_O],
            "square": [r316_SquareAt, r316_SquareDotScalar, 0]
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r964_t0, _r964_t1;
            return {
                "WithDotVariants": r316_WithDotVariants
            };
        });
        var r316_WithDotVariants = function (r965_name, r965_unicode, r965_F) {
            var r965_suffix, r965_DrawAt, r965_kDotRadius, r965_overshoot, _r965_t2, _r965_t3, _r965_t4, _r965_t5, _r965_tag6;
            var _r965_t0 = Object.entries(r316_DotVariants)[Symbol.iterator]();
            var _r965_t1 = void 0;
            while (!(_r965_t1 = _r965_t0.next()).done) {
                _r965_t2 = _r965_t1.value;
                r965_suffix = _r965_t2[0];
                r965_DrawAt = _r965_t2[1][0];
                r965_kDotRadius = _r965_t2[1][1];
                r965_overshoot = _r965_t2[1][2];
                _r965_t2[1];
                (function () {
                    return r316_xn$GlyphSaveSink$2Lrc4b.save("" + r965_name + "." + r965_suffix, null, r965_F(r965_DrawAt, r965_kDotRadius, r965_overshoot));
                })();
            }
            return r316_xn$selectvariant$7Hrq(r965_name, r965_unicode, new r316_xn$NamedParameterPair$2Lrc9b("follow", "punctuationDot"));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r972_t0, _r972_t1;
            return {
                "TangentToNormal": r316_TangentToNormal,
                "VectorDot": r316_VectorDot
            };
        });
        var r316_TangentToNormal = function (r973_offset, r973_contrast, r973__tanSlope) {
            var _r973_t0, _r973_t1;
            var r973_r = Math.hypot(r973_offset.x, r973_offset.y);
            var r973_tanSlope = r1_fallback(r973__tanSlope, r316_TanSlope);
            return new r1_Point(r1_Point.Type.Corner, (0 - r973_offset.y * r973_contrast) / r973_r, (r973_offset.x + r973_offset.y * r973_tanSlope) / r973_r);
        };
        var r316_VectorDot = function (r974_p1, r974_p2) {
            var _r974_t0, _r974_t1;
            return r974_p1.x * r974_p2.x + r974_p1.y * r974_p2.y;
        };
        var r316_SharpCornerImpl = function (r975_before, r975_after, r975_args) {
            var _r975_t0, _r975_t1;
            if (!(r975_before.af && r975_before.af.l !== void 0)) throw new Error("Unable to infer stroke information for previous knot");
            if (!(r975_after.af && r975_after.af.l !== void 0)) throw new Error("Unable to infer stroke information for next knot");
            var r975_beforeT = new r1_Vec2(r975_args.x - r975_before.x, r975_args.y - r975_before.y);
            var r975_afterT = new r1_Vec2(r975_after.x - r975_args.x, r975_after.y - r975_args.y);
            var r975_beforeN = r1_fallback(r975_before.af.d, r316_TangentToNormal(r975_beforeT, r975_args.contrast, r975_args.upright ? 0 : void 0));
            var r975_afterN = r1_fallback(r975_after.af.d, r316_TangentToNormal(r975_afterT, r975_args.contrast, r975_args.upright ? 0 : void 0));
            var r975_beforeR = r975_beforeN.addScale(-r316_VectorDot(r975_beforeN, r975_beforeT) / r316_VectorDot(r975_beforeT, r975_beforeT), r975_beforeT);
            var r975_afterR = r975_afterN.addScale(-r316_VectorDot(r975_afterN, r975_afterT) / r316_VectorDot(r975_afterT, r975_afterT), r975_afterT);
            var r975_beforeD = r975_afterT.scale(r316_VectorDot(r975_beforeR, r975_beforeR) / r316_VectorDot(r975_beforeR, r975_afterT));
            var r975_afterD = r975_beforeT.scale(r316_VectorDot(r975_afterR, r975_afterR) / r316_VectorDot(r975_afterR, r975_beforeT));
            var r975_lOffset = r975_beforeD.scale(+r975_before.af.l).addScale(+r975_after.af.l, r975_afterD);
            var r975_rOffset = r975_beforeD.scale(-r975_before.af.r).addScale(-r975_after.af.r, r975_afterD);
            var r975_midPoint = r975_lOffset.mix(r975_rOffset, 0.5);
            var r975_refPoint = r1_Point.translated(r975_midPoint, r975_args.x, r975_args.y);
            return r316_corner(r975_refPoint.x, r975_refPoint.y, r316_widths.center.heading(1, {
                "x": r975_lOffset.x - r975_rOffset.x,
                "y": r975_lOffset.y - r975_rOffset.y
            }));
        };
        r316_xn$ExportCapture$2Lrc4b(function () {
            var _r977_t0, _r977_t1;
            return {
                "sharp-corner": r316_xn$sharpcorner$1aao
            };
        });
        return r316_xn$sharpcorner$1aao = function () {
            var _r978_t5;
            var _r978_t6 = arguments;
            var r978_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r978_t6, 0);
            var _r978_t0 = [];
            var _r978_t1 = 0;
            while (_r978_t1 < r978_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r978_xn$flexarguments$2Lrc7uIe5[_r978_t1] instanceof r316_xn$NamedParameterPair$2Lrc9b)) _r978_t0.push(r978_xn$flexarguments$2Lrc7uIe5[_r978_t1]);
                _r978_t1 = _r978_t1 + 1;
            }
            var _r978_t2 = r978_xn$flexarguments$2Lrc7uIe5;
            var _r978_t3 = _r978_t2.length;
            var _r978_t4 = 0;
            while (_r978_t4 < _r978_t3) {
                _r978_t1 = _r978_t2[_r978_t4];
                if (_r978_t1 && _r978_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r978_t1.left === "x") r978_x = _r978_t1.right;
                if (_r978_t1 && _r978_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r978_t1.left === "y") r978_y = _r978_t1.right;
                if (_r978_t1 && _r978_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r978_t1.left === "contrast") r978_contrast = _r978_t1.right;
                if (_r978_t1 && _r978_t1 instanceof r316_xn$NamedParameterPair$2Lrc9b && _r978_t1.left === "upright") r978_upright = _r978_t1.right;
                _r978_t4 = _r978_t4 + 1;
            }
            var r978_x = r1_fallback(r978_x, _r978_t0[0]);
            var r978_y = r1_fallback(r978_y, _r978_t0[1]);
            var r978_contrast = r1_fallback(r978_contrast, _r978_t0[2], r316_HVContrast);
            var r978_upright = r1_fallback(r978_upright, _r978_t0[3], 0);
            var r978_args = {
                "x": r978_x,
                "y": r978_y,
                "contrast": r978_contrast,
                "upright": r978_upright
            };
            return new r1_FunctionInterpolator(r316_SharpCornerImpl, r978_args);
        };
    });
    return void 0;
});


