"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry";
import * as _s0_t2 from "@iosevka/geometry/point";
import * as _s0_t3 from "@iosevka/geometry/box";
import * as _s0_t4 from "@iosevka/geometry/spiro-control";
import * as _s0_t5 from "@iosevka/geometry/spiro-pen-expand";
var _s0_t6;
export {_s0_t6 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_min = _r1_t8.min;
var r1_max = _r1_t8.max;
var r1_slY = _r1_t8.slY;
var _r1_t9 = _s0_t1;
var r1_SpiroPenGeometry = _r1_t9.SpiroPenGeometry;
var _r1_t10 = _s0_t2;
var r1_Vec2 = _r1_t10.Vec2;
var _r1_t11 = _s0_t3;
var r1_Box = _r1_t11.Box;
var _r1_t12 = _s0_t4;
var r1_AfBase = _r1_t12.AfBase;
var r1_FunctionInterpolator = _r1_t12.FunctionInterpolator;
var _r1_t13 = _s0_t5;
var r1_PenKnotCollector = _r1_t13.PenKnotCollector;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t6 = r1_apply = function () {
    var r312_block, _r312_t4, _r312_t6;
    var _r312_t3 = this;
    var _r312_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r312_t1 = _r312_t0.length;
    var _r312_t2 = 0;
    var _r312_t5 = _r312_t2 < _r312_t1;
    while (_r312_t5) {
        _r312_t6 = (r312_block = _r312_t0[_r312_t2], r312_block(_r312_t3), _r312_t2 = _r312_t2 + 1);
        _r312_t5 = _r312_t2 < _r312_t1;
    }
    return _r312_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r316_xn$Capture_Ext$2Lrc2b) {
    var _r316_t0, _r316_t1;
    r316_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r316_xn$Capture_Ext$2Lrc2b, "LetterLike-Fraktur-Common", function (r317_xn$Capture$2Lrc8, r317_xn$ExportCapture$2Lrc4b) {
        var _r317_t5, _r317_t6, _r317_t7, _r317_tag8;
        var _r317_t0 = r317_xn$Capture$2Lrc8;
        var r317_xn$GlyphSaveSink$2Lrc4b = _r317_t0["$GlyphSaveSink$"];
        var r317_xn$NamedParameterPair$2Lrc9b = _r317_t0["$NamedParameterPair$"];
        var r317_xn$Exec$2Lrc5 = _r317_t0["$Exec$"];
        var r317_para = _r317_t0.para;
        var r317_DivFrame = _r317_t0.DivFrame;
        var _r317_t1 = r317_xn$Capture$2Lrc8.Metrics;
        var r317_SB = _r317_t1.SB;
        var r317_SHook = _r317_t1.SHook;
        var r317_AdviceStroke = _r317_t1.AdviceStroke;
        var r317_Stroke = _r317_t1.Stroke;
        var r317_RightSB = _r317_t1.RightSB;
        var r317_xn$VERYFAR$5sIl = _r317_t1["VERY-FAR"];
        var _r317_t2 = r317_xn$Capture$2Lrc8.SpiroFns;
        var r317_g2 = _r317_t2.g2;
        var r317_corner = _r317_t2.corner;
        var r317_flat = _r317_t2.flat;
        var r317_curl = _r317_t2.curl;
        var r317_end = _r317_t2.end;
        var r317_flatc = _r317_t2.flatc;
        var r317_ccurl = _r317_t2.ccurl;
        var r317_xn$spirocollect$1aao = _r317_t2["spiro-collect"];
        var _r317_t3 = r317_xn$Capture$2Lrc8.SpiroFns;
        var r317_xn$decor$0cao = _r317_t3["decor@"];
        var r317_xn$decor$0cao1 = _r317_t3["decor@@"];
        var r317_xn$decor$0cao11 = _r317_t3["decor@@@"];
        var _r317_t4 = r317_xn$Capture$2Lrc8.BooleFns;
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r319_t0, _r319_t1;
            return {
                "fraktur-stroke": r317_xn$frakturstroke$3qIs
            };
        });
        var r317_xn$frakturstroke$3qIs = function (r320_profile, r320___knots) {
            var _r320_t0;
            var _r320_t1 = arguments;
            var r320_knots = [].slice.call(_r320_t1, 1);
            return new r317_FrakturShape(r320_profile, r320_knots);
        };
        var r317_FrakturShapeImpl = (function (r322_Super) {
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
                r322_Constructor = function (r354_proxy) {
                    var _r354_t1;
                    var _r354_t0 = this;
                    _r354_t0.proxy = r354_proxy;
                    return void 0;
                };
                r322_Type.prototype.applyToGlyph = function (r360_glyph) {
                    var _r360_t1;
                    var _r360_t0 = this;
                    r360_glyph.includeGeometry(_r360_t0.proxy.geometry);
                    return _r360_t0.proxy;
                };
                return void 0;
            }).call(r322_Type.prototype);
            return r322_Type;
        })(Object);
        var r317_FrakturShape = (function (r367_Super) {
            var _r367_t0, _r367_t1;
            var r367_Constructor = function () {
                var _r368_t0, _r368_t1;
                return void 0;
            };
            var r367_Type = function () {
                var _r369_t0 = this;
                var _r369_t1 = arguments;
                r367_Constructor.apply(_r369_t0, _r369_t1);
                return void 0;
            };
            var r367_Symbol = Symbol;
            (function () {
                var r371_protectedTerms, _r371_t0, _r371_t1;
                r367_Type.protectedTerms = r371_protectedTerms = Object.create(r367_Super.protectedTerms || null);
                r367_Constructor = function (r399_pen, r399_knots) {
                    var _r399_t1;
                    var _r399_t0 = this;
                    _r399_t0.pen = r399_pen;
                    _r399_t0.knots = r399_knots;
                    return void 0;
                };
                r367_Type.prototype.applyToGlyph = function (r405_glyph) {
                    var _r405_t1;
                    var _r405_t0 = this;
                    var r405_profile = _r405_t0.pen.getPenShape(r405_glyph.gizmo);
                    var r405_collector = new r1_PenKnotCollector(r405_glyph.gizmo, r405_profile, _r405_t0.pen.fixed);
                    var r405_c = r317_xn$spirocollect$1aao(r405_collector, _r405_t0.knots);
                    var r405_proxy = new r317_FrakturProxy(r405_glyph.gizmo, r405_profile, r405_collector.closed, r405_collector.knots);
                    return new r317_FrakturShapeImpl(r405_proxy).applyToGlyph(r405_glyph);
                };
                return void 0;
            }).call(r367_Type.prototype);
            return r367_Type;
        })(Object);
        var r317_FrakturProxy = (function (r412_Super) {
            var _r412_t0, _r412_t1;
            var r412_Constructor = function () {
                var _r413_t0, _r413_t1;
                return void 0;
            };
            var r412_Type = function () {
                var _r414_t0 = this;
                var _r414_t1 = arguments;
                r412_Constructor.apply(_r414_t0, _r414_t1);
                return void 0;
            };
            var r412_Symbol = Symbol;
            (function () {
                var r416_protectedTerms, _r416_t0, _r416_t1;
                r412_Type.protectedTerms = r416_protectedTerms = Object.create(r412_Super.protectedTerms || null);
                r412_Constructor = function (r444_gizmo, r444_profile, r444_closed, r444_knots) {
                    var _r444_t1;
                    var _r444_t0 = this;
                    _r444_t0.gizmo = r444_gizmo;
                    _r444_t0.closed = r444_closed;
                    _r444_t0.knots = r444_knots;
                    _r444_t0.geometry = new r1_SpiroPenGeometry(r444_gizmo, r444_profile, r444_closed, r444_knots);
                    return void 0;
                };
                r412_Type.prototype.first = function (r450_i) {
                    var _r450_t1;
                    var _r450_t0 = this;
                    return _r450_t0.knots[r1_fallback(r450_i, 0)];
                };
                r412_Type.prototype.last = function (r456_i) {
                    var _r456_t1;
                    var _r456_t0 = this;
                    return _r456_t0.knots[_r456_t0.knots.length - r1_fallback(r456_i, 1)];
                };
                r412_Type.prototype.withPen = function (r462_newPen) {
                    var r462_k, r462_k1, _r462_t4;
                    var _r462_t3 = this;
                    var r462_newProfile = r462_newPen.getPenShape(_r462_t3.gizmo);
                    var r462_newKnots = [];
                    var _r462_t0 = _r462_t3.knots;
                    var _r462_t1 = _r462_t0.length;
                    var _r462_t2 = 0;
                    while (_r462_t2 < _r462_t1) {
                        r462_k = _r462_t0[_r462_t2];
                        r462_k1 = r462_k.clone();
                        if (r462_k1.profile) r462_k1.profile = r462_newProfile;
                        r462_newKnots.push(r462_k1);
                        _r462_t2 = _r462_t2 + 1;
                    }
                    var r462_newProxy = new r317_FrakturProxy(_r462_t3.gizmo, r462_newProfile, _r462_t3.closed, r462_newKnots);
                    return new r317_FrakturShapeImpl(r462_newProxy);
                };
                return void 0;
            }).call(r412_Type.prototype);
            return r412_Type;
        })(Object);
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r470_t0, _r470_t1;
            return {
                "change-pen": r317_xn$changepen$7Hrq
            };
        });
        var r317_xn$changepen$7Hrq = function (r471_newPen) {
            var _r471_t0, _r471_t1;
            return new r317_AfChangePen(r471_newPen);
        };
        var r317_AfChangePen = (function (r473_Super) {
            var _r473_t0, _r473_t1;
            var r473_Constructor = function () {
                var _r474_t0, _r474_t1;
                return void 0;
            };
            var r473_Type = function () {
                var _r475_t0 = this;
                var _r475_t1 = arguments;
                r473_Constructor.apply(_r475_t0, _r475_t1);
                return void 0;
            };
            r473_Type.prototype = Object.create(r473_Super.prototype);
            var r473_Symbol = Symbol;
            (function () {
                var r477_protectedTerms, _r477_t0, _r477_t1;
                r473_Type.protectedTerms = r477_protectedTerms = Object.create(r473_Super.protectedTerms || null);
                r473_Constructor = function (r505_newPen) {
                    var _r505_t1;
                    var _r505_t0 = this;
                    _r505_t0.newPen = r505_newPen;
                    return void 0;
                };
                r473_Type.prototype.applyTo = function (r511_target) {
                    var _r511_t1;
                    var _r511_t0 = this;
                    return r511_target.setProfile(_r511_t0.newPen.getPenShape(r511_target.gizmo));
                };
                return void 0;
            }).call(r473_Type.prototype);
            return r473_Type;
        })(r1_AfBase);
        var r317_FrakturPen = (function (r518_Super) {
            var _r518_t0, _r518_t1;
            var r518_Constructor = function () {
                var _r519_t0, _r519_t1;
                return void 0;
            };
            var r518_Type = function () {
                var _r520_t0 = this;
                var _r520_t1 = arguments;
                r518_Constructor.apply(_r520_t0, _r520_t1);
                return void 0;
            };
            var r518_Symbol = Symbol;
            (function () {
                var r522_protectedTerms, _r522_t0, _r522_t1;
                r518_Type.protectedTerms = r522_protectedTerms = Object.create(r518_Super.protectedTerms || null);
                r518_Constructor = function (r550_thick, r550_thin) {
                    var _r550_t1;
                    var _r550_t0 = this;
                    _r550_t0.fixed = false;
                    _r550_t0.thick = 0.25 * Math.SQRT2 * r550_thick;
                    _r550_t0.thin = 0.25 * Math.SQRT2 * r550_thin;
                    return void 0;
                };
                r518_Type.prototype.getPenShape = function (r556_gizmo) {
                    var _r556_t1;
                    var _r556_t0 = this;
                    var r556_thickTf = r556_gizmo.applyOffsetXY(_r556_t0.thick, _r556_t0.thick);
                    return [new r1_Vec2(r556_thickTf.x - _r556_t0.thin, r556_thickTf.y + _r556_t0.thin), new r1_Vec2(r556_thickTf.x + _r556_t0.thin, r556_thickTf.y + _r556_t0.thin), new r1_Vec2(r556_thickTf.x + _r556_t0.thin, r556_thickTf.y - _r556_t0.thin), new r1_Vec2(-r556_thickTf.x + _r556_t0.thin, -r556_thickTf.y - _r556_t0.thin), new r1_Vec2(-r556_thickTf.x - _r556_t0.thin, -r556_thickTf.y - _r556_t0.thin), new r1_Vec2(-r556_thickTf.x - _r556_t0.thin, -r556_thickTf.y + _r556_t0.thin)];
                };
                r518_Type.prototype.box = function (r562_u, r562_d, r562_l, r562_r) {
                    var _r562_t1;
                    var _r562_t0 = this;
                    return new r1_Box(_r562_t0.yt(r562_u), _r562_t0.yb(r562_d), _r562_t0.xl(r562_l), _r562_t0.xr(r562_r));
                };
                r518_Type.prototype.xl = function (r568_x) {
                    var _r568_t1;
                    var _r568_t0 = this;
                    return r568_x + _r568_t0.thick;
                };
                r518_Type.prototype.xr = function (r574_x) {
                    var _r574_t1;
                    var _r574_t0 = this;
                    return r574_x - _r574_t0.thick;
                };
                r518_Type.prototype.xp = function (r580_l, r580_r, r580_p) {
                    var _r580_t1;
                    var _r580_t0 = this;
                    return r1_mix(_r580_t0.xl(r580_l), _r580_t0.xr(r580_r), r580_p);
                };
                r518_Type.prototype.yb = function (r586_y) {
                    var _r586_t1;
                    var _r586_t0 = this;
                    return r586_y + _r586_t0.thick;
                };
                r518_Type.prototype.yt = function (r592_y) {
                    var _r592_t1;
                    var _r592_t0 = this;
                    return r592_y - _r592_t0.thick;
                };
                r518_Type.prototype.yp = function (r598_b, r598_t, r598_p) {
                    var _r598_t1;
                    var _r598_t0 = this;
                    return r1_mix(_r598_t0.yb(r598_b), _r598_t0.yt(r598_t), r598_p);
                };
                r518_Type.prototype.connL = function (r604_otherProfile, r604_x) {
                    var _r604_t1;
                    var _r604_t0 = this;
                    return r604_x - r604_otherProfile.thick + _r604_t0.thick;
                };
                r518_Type.prototype.connR = function (r610_otherProfile, r610_x) {
                    var _r610_t1;
                    var _r610_t0 = this;
                    return r610_x + r610_otherProfile.thick - _r610_t0.thick;
                };
                r518_Type.prototype.connB = function (r616_otherProfile, r616_y) {
                    var _r616_t1;
                    var _r616_t0 = this;
                    return r616_y - r616_otherProfile.thick + _r616_t0.thick;
                };
                r518_Type.prototype.connT = function (r622_otherProfile, r622_y) {
                    var _r622_t1;
                    var _r622_t0 = this;
                    return r622_y + r622_otherProfile.thick - _r622_t0.thick;
                };
                return void 0;
            }).call(r518_Type.prototype);
            return r518_Type;
        })(Object);
        var r317_frakThin = 1 * r317_AdviceStroke(12);
        var r317_frakThick = 1 * r317_Stroke;
        var r317_frakFine = 1 * r317_AdviceStroke(4);
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r629_t0, _r629_t1;
            return {
                "S": r317_S
            };
        });
        var r317_S = new r317_FrakturPen(r317_frakThick, 0.875 * r317_frakThin);
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r631_t0, _r631_t1;
            return {
                "M": r317_M
            };
        });
        var r317_M = new r317_FrakturPen(r317_AdviceStroke(3, r317_para.advanceScaleM), 0.875 * r317_frakThin);
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r633_t0, _r633_t1;
            return {
                "F": r317_F
            };
        });
        var r317_F = new r317_FrakturPen(r317_frakFine, 0.875 * r317_frakThin);
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r635_t0, _r635_t1;
            return {
                "T": r317_T
            };
        });
        var r317_T = new r317_FrakturPen(r317_frakThin, 0.875 * r317_frakThin);
        var r317_MaskingProfile = (function (r637_Super) {
            var _r637_t0, _r637_t1;
            var r637_Constructor = function () {
                var _r638_t0, _r638_t1;
                return void 0;
            };
            var r637_Type = function () {
                var _r639_t0 = this;
                var _r639_t1 = arguments;
                r637_Constructor.apply(_r639_t0, _r639_t1);
                return void 0;
            };
            var r637_Symbol = Symbol;
            (function () {
                var r641_protectedTerms, _r641_t0, _r641_t1;
                r637_Type.protectedTerms = r641_protectedTerms = Object.create(r637_Super.protectedTerms || null);
                r637_Constructor = function (r669_dx, r669_dy) {
                    var _r669_t1;
                    var _r669_t0 = this;
                    _r669_t0.fixed = true;
                    _r669_t0.dx = r669_dx;
                    _r669_t0.dy = r669_dy;
                    return void 0;
                };
                r637_Type.prototype.getPenShape = function (r675_gizmo) {
                    var _r675_t1;
                    var _r675_t0 = this;
                    var r675_tf = r675_gizmo.applyOffsetXY(_r675_t0.dx, _r675_t0.dy);
                    return [new r1_Vec2(0, 0), new r1_Vec2(r675_tf.x, r675_tf.y)];
                };
                return void 0;
            }).call(r637_Type.prototype);
            return r637_Type;
        })(Object);
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r682_t0, _r682_t1;
            return {
                "CutMaskLeft": r317_CutMaskLeft
            };
        });
        var r317_CutMaskLeft = new r317_MaskingProfile(-r317_xn$VERYFAR$5sIl, 0);
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r684_t0, _r684_t1;
            return {
                "CutMaskUp": r317_CutMaskUp
            };
        });
        var r317_CutMaskUp = new r317_MaskingProfile(0, r317_xn$VERYFAR$5sIl);
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r686_t0, _r686_t1;
            return {
                "CutMaskDown": r317_CutMaskDown
            };
        });
        var r317_CutMaskDown = new r317_MaskingProfile(0, -r317_xn$VERYFAR$5sIl);
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r688_t0, _r688_t1;
            return {
                "DecoSizeX": r317_DecoSizeX,
                "DecoSizeY": r317_DecoSizeY,
                "FHook": r317_FHook
            };
        });
        var r317_DecoSizeX = 0.15 * (r317_RightSB - r317_SB);
        var r317_DecoSizeY = 0.08 * (r317_RightSB - r317_SB);
        var r317_FHook = 0.4 * r317_SHook - 0.25 * r317_S.thick;
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r690_t0, _r690_t1;
            return {
                "SlopeA": r317_SlopeA,
                "SlopeB": r317_SlopeB
            };
        });
        var r317_SlopeA = 0.875 * r317_DecoSizeY / r317_DecoSizeX;
        var r317_SlopeB = 0.875 * -r1_mix(r317_SlopeA, 1, 0.5);
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r692_t0, _r692_t1;
            return {
                "Wave": r317_Wave
            };
        });
        var r317_Wave = (function () {
            var r695_DepthY, r695_DepthX, r695_LTDecoSize, r695_h, r695_vc, r695_v, r695_vDistAfter;
            var r695_exports = {};
            r695_exports.DepthY = r695_DepthY = 0.4 * r317_SHook - 0.25 * r317_S.thick;
            r695_exports.DepthX = r695_DepthX = 1 * r317_DecoSizeX;
            r695_exports.LTDecoSize = r695_LTDecoSize = 0.75 * r317_DecoSizeX;
            r695_exports.h = r695_h = function (r706_o) {
                var _r706_t0, _r706_t1;
                return new r1_FunctionInterpolator(r695_hBlender, {
                    "o": r706_o
                });
            };
            var r695_hBlender = function (r707_before, r707_after, r707_args) {
                var _r707_t0, _r707_t1;
                return [r317_g2(r1_mix(r707_before.x, r707_after.x, 0.375), r707_after.y + r1_fallback(r707_args.o, 0)), r317_g2(r1_mix(r707_before.x, r707_after.x, 0.625), r707_before.y - r1_fallback(r707_args.o, 0))];
            };
            r695_exports.vc = r695_vc = function (r709_waveDepth) {
                var _r709_t0, _r709_t1;
                return new r1_FunctionInterpolator(r695_vcBlender, {
                    "waveDepth": r709_waveDepth
                });
            };
            var r695_vcBlender = function (r710_before, r710_after, r710_args) {
                var _r710_t1, _r710_t2;
                var _r710_t0 = r710_args;
                var r710_waveDepth = _r710_t0.waveDepth;
                return [r317_g2(r710_before.x + 0.5 * r710_waveDepth, r1_mix(r710_before.y, r710_after.y, 0.375)), r317_g2(r710_after.x - 0.5 * r710_waveDepth, r1_mix(r710_before.y, r710_after.y, 0.625))];
            };
            r695_exports.v = r695_v = function () {
                var _r712_t0, _r712_t1;
                return new r1_FunctionInterpolator(r695_vBlender);
            };
            var r695_vBlender = function (r713_before, r713_after) {
                var _r713_t0, _r713_t1;
                return [r317_g2(r713_after.x, r1_mix(r713_before.y, r713_after.y, 0.375)), r317_g2(r713_before.x, r1_mix(r713_before.y, r713_after.y, 0.625))];
            };
            r695_exports.vDistAfter = r695_vDistAfter = function (r715_d) {
                var _r715_t0, _r715_t1;
                return new r1_FunctionInterpolator(r695_vDistAfterBlender, {
                    "d": r715_d
                });
            };
            var r695_vDistAfterBlender = function (r716_before, r716_after, r716_args) {
                var _r716_t0, _r716_t1;
                return [r317_g2(r716_after.x, r1_mix(r716_before.y, r716_after.y, 0.375)), r317_g2(r716_after.x - r716_args.d, r1_mix(r716_before.y, r716_after.y, 0.625))];
            };
            return r695_exports;
        })();
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r718_t0, _r718_t1;
            return {
                "PHexTop": r317_PHexTop
            };
        });
        var r317_PHexTop = 0.5 + 0.5 * (Math.max(r317_DecoSizeX, r317_frakThin) / (r317_RightSB - r317_SB));
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r720_t0, _r720_t1;
            return {
                "PHexBot": r317_PHexBot
            };
        });
        var r317_PHexBot = 1 - r317_PHexTop;
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r722_t0, _r722_t1;
            return {
                "UpperDf": r317_UpperDf
            };
        });
        var r317_UpperDf = function (r723_adws, r723_m) {
            var _r723_t0, _r723_t1;
            return r317_DivFrame(r1_fallback(r723_adws, 1), r1_fallback(r723_m, 2), Math.max(1, r317_DecoSizeX / r317_SB));
        };
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r725_t0, _r725_t1;
            return {
                "LowerDf": r317_LowerDf
            };
        });
        var r317_LowerDf = function (r726_adws, r726_m) {
            var _r726_t0, _r726_t1;
            return r317_DivFrame(r1_fallback(r726_adws, 1), r1_fallback(r726_m, 2), Math.max(1, (1.75 * r317_DecoSizeX - 0.5 * r317_S.thick) / r317_SB));
        };
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r728_t0, _r728_t1;
            return {
                "RBDecoration": r317_RBDecoration
            };
        });
        var r317_RBDecoration = function (r729_cx, r729_cy, r729_limy) {
            var _r729_t3, _r729_t4;
            var _r729_t0 = r729_cx;
            var _r729_t1 = _r729_t0 + 0.5 * r317_DecoSizeX;
            var _r729_t2 = r729_cy;
            return [r317_curl(_r729_t0, r1_min(r1_fallback(r729_limy, r317_xn$VERYFAR$5sIl), r1_slY(_r729_t1, _r729_t2, _r729_t0, 2 * r317_SlopeB))), r317_flatc.sr(r317_SlopeB).end(_r729_t1, _r729_t2), r317_corner(_r729_t1 + r317_DecoSizeX, _r729_t2 + r317_DecoSizeY)];
        };
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r732_t0, _r732_t1;
            return {
                "LTDecoration": r317_LTDecoration
            };
        });
        var r317_LTDecoration = function (r733_cx, r733_cy, r733_limy) {
            var _r733_t3, _r733_t4;
            var _r733_t2 = r733_cx;
            var _r733_t0 = _r733_t2 - 0.5 * r317_DecoSizeX;
            var _r733_t1 = r733_cy;
            return [r317_corner(_r733_t0 - r317_DecoSizeX, _r733_t1 - r317_DecoSizeY), r317_ccurl.sr(r317_SlopeB).start(_r733_t0, _r733_t1), r317_flat(_r733_t2, r1_max(r1_fallback(r733_limy, -r317_xn$VERYFAR$5sIl), r1_slY(_r733_t0, _r733_t1, _r733_t2, 2 * r317_SlopeB)))];
        };
        return r317_LTDecoration.g2 = function (r735_cx, r735_cy, r735_limy) {
            var _r735_t3, _r735_t4;
            var _r735_t2 = r735_cx;
            var _r735_t0 = _r735_t2 - 0.5 * r317_DecoSizeX;
            var _r735_t1 = r735_cy;
            return [r317_corner(_r735_t0 - r317_DecoSizeX, _r735_t1 - r317_DecoSizeY), r317_ccurl.sr(r317_SlopeB).start(_r735_t0, _r735_t1), r317_g2(_r735_t2, r1_max(r1_fallback(r735_limy, -r317_xn$VERYFAR$5sIl), r1_slY(_r735_t0, _r735_t1, _r735_t2, 2 * r317_SlopeB)))];
        };
    });
    return void 0;
});


