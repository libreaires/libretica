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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Math-Geometry", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t8, _r312_t9, _r312_t10, _r312_tag11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_AS_BASE = _r312_t0.AS_BASE;
        var r312_ALSO_METRICS = _r312_t0.ALSO_METRICS;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_ParenTop = _r312_t1.ParenTop;
        var r312_ParenBot = _r312_t1.ParenBot;
        var r312_TackTop = _r312_t1.TackTop;
        var r312_TackBot = _r312_t1.TackBot;
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Upward = _r312_t1.Upward;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_AdviceStroke2 = _r312_t1.AdviceStroke2;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_Middle = _r312_t1.Middle;
        var r312_DotRadius = _r312_t1.DotRadius;
        var r312_GeometryStroke = _r312_t1.GeometryStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g2 = _r312_t2.g2;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_end = _r312_t2.end;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_MaskAbove = _r312_t5.MaskAbove;
        var r312_MaskBelow = _r312_t5.MaskBelow;
        var r312_RingStrokeAt = _r312_t5.RingStrokeAt;
        var r312_xn$withtransform$5sIl = _r312_t5["with-transform"];
        var r312_WithDotVariants = _r312_t5.WithDotVariants;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_turned = _r312_t6.turned;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Shared-Symbol-Shapes"].resolve();
        var r312_VZigzag = _r312_t7.VZigzag;
        var r312_kBox = 2 / 3;
        var r312_leftBox = r312_SB * r312_kBox;
        var r312_rightBox = r312_Width - r312_SB * r312_kBox;
        var r312_radiusBox = (r312_rightBox - r312_leftBox) / 2;
        var r312_topBox = r312_SymbolMid + r312_radiusBox;
        var r312_bottomBox = r312_SymbolMid - r312_radiusBox;
        r312_xn$GlyphSaveSink$2Lrc4b.save("mathRightTriangle", 8895, new r312_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
            var _r318_t0, _r318_t1;
            r318_currentGlyph.include(r312_intersection(r312_xn$spirooutline$1aao(r312_corner(r312_leftBox, r312_bottomBox), r312_corner(r312_rightBox, r312_bottomBox), r312_corner(r312_rightBox, r312_topBox)), r312_union(r312_dispiro(r312_widths.lhs(r312_GeometryStroke), r312_flat(r312_leftBox, r312_bottomBox), r312_curl(r312_rightBox, r312_bottomBox)), r312_dispiro(r312_widths.lhs(r312_GeometryStroke), r312_flat(r312_rightBox, r312_bottomBox), r312_curl(r312_rightBox, r312_topBox)), r312_dispiro(r312_widths.lhs(r312_GeometryStroke), r312_flat(r312_rightBox, r312_topBox), r312_curl(r312_leftBox, r312_bottomBox)))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("angle", 8736, new r312_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
            var _r322_t0, _r322_t1;
            r322_currentGlyph.include(r312_intersection(r312_xn$spirooutline$1aao(r312_corner(r312_leftBox, r312_bottomBox), r312_corner(r312_rightBox, r312_bottomBox), r312_corner(r312_rightBox, r312_topBox)), r312_union(r312_dispiro(r312_widths.lhs(r312_GeometryStroke), r312_flat(r312_leftBox, r312_bottomBox), r312_curl(r312_rightBox, r312_bottomBox)), r312_dispiro(r312_widths.lhs(r312_GeometryStroke), r312_flat(r312_rightBox, r312_topBox), r312_curl(r312_leftBox, r312_bottomBox)))));
            return void 0;
        }));
        r312_turned("turnAngle", 10658, "angle", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("revAngle", 10659, new r312_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
            var _r326_t0, _r326_t1;
            r326_currentGlyph.include(r312_intersection(r312_xn$spirooutline$1aao(r312_corner(r312_leftBox, r312_topBox), r312_corner(r312_leftBox, r312_bottomBox), r312_corner(r312_rightBox, r312_bottomBox)), r312_union(r312_dispiro(r312_widths.lhs(r312_GeometryStroke), r312_flat(r312_leftBox, r312_bottomBox), r312_curl(r312_rightBox, r312_bottomBox)), r312_dispiro(r312_widths.rhs(r312_GeometryStroke), r312_flat(r312_leftBox, r312_topBox), r312_curl(r312_rightBox, r312_bottomBox)))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("measuredAngle", 8737, new r312_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
            var _r330_t0, _r330_t1;
            r330_currentGlyph.include(r312_xn$referglyph$1aao("angle"), r312_AS_BASE, r312_ALSO_METRICS);
            r330_currentGlyph.include(r312_intersection(r312_xn$spirooutline$1aao(r312_corner(r312_leftBox, r312_bottomBox - Math.tan(15 / 180 * Math.PI) * r312_radiusBox), r312_corner(r312_rightBox, r312_bottomBox - Math.tan(15 / 180 * Math.PI) * r312_radiusBox), r312_corner(r312_rightBox, r312_bottomBox + 2 * Math.tan(60 / 180 * Math.PI) * r312_radiusBox), r312_corner(r312_leftBox, r312_bottomBox)), r312_RingStrokeAt(r312_leftBox, r312_bottomBox, 1.2 * r312_radiusBox + r312_GeometryStroke, r312_GeometryStroke)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("sphericalAngle", 8738, new r312_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
            var _r335_t0, _r335_t1;
            r335_currentGlyph.include(r312_intersection(r312_xn$spirooutline$1aao(r312_corner(r312_leftBox, r312_SymbolMid), r312_corner(r312_rightBox, r312_bottomBox), r312_corner(r312_rightBox, r312_topBox)), r312_union(r312_dispiro(r312_widths.lhs(r312_GeometryStroke), r312_flat(r312_leftBox, r312_SymbolMid), r312_curl(r312_rightBox, r312_bottomBox)), r312_dispiro(r312_widths.lhs(r312_GeometryStroke), r312_flat(r312_rightBox, r312_topBox), r312_curl(r312_leftBox, r312_SymbolMid)))));
            r335_currentGlyph.include(r312_intersection(r312_xn$spirooutline$1aao(r312_corner(r312_leftBox, r312_SymbolMid), r312_corner(r312_rightBox, r312_SymbolMid - 2 * Math.tan(45 / 180 * Math.PI) * r312_radiusBox), r312_corner(r312_rightBox, r312_SymbolMid + 2 * Math.tan(45 / 180 * Math.PI) * r312_radiusBox)), r312_RingStrokeAt(r312_leftBox, r312_SymbolMid, 1.2 * r312_radiusBox + r312_GeometryStroke, r312_GeometryStroke)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("rightAngle", 8735, new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
            var _r340_t0, _r340_t1;
            r340_currentGlyph.include(r312_intersection(r312_xn$spirooutline$1aao(r312_corner(r312_leftBox, r312_bottomBox), r312_corner(r312_rightBox, r312_bottomBox), r312_corner(r312_rightBox, r312_topBox), r312_corner(r312_leftBox, r312_topBox)), r312_union(r312_dispiro(r312_widths.lhs(r312_GeometryStroke), r312_flat(r312_leftBox, r312_bottomBox), r312_curl(r312_rightBox, r312_bottomBox)), r312_dispiro(r312_widths.lhs(r312_GeometryStroke), r312_flat(r312_leftBox, r312_topBox), r312_curl(r312_leftBox, r312_bottomBox)))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("rightAngleWithArc", 8894, new r312_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
            var _r344_t0, _r344_t1;
            r344_currentGlyph.include(r312_xn$referglyph$1aao("rightAngle"), r312_AS_BASE, r312_ALSO_METRICS);
            r344_currentGlyph.include(r312_intersection(r312_xn$spirooutline$1aao(r312_corner(r312_leftBox, r312_bottomBox), r312_corner(r312_rightBox, r312_bottomBox), r312_corner(r312_rightBox, r312_topBox), r312_corner(r312_leftBox, r312_topBox)), r312_RingStrokeAt(r312_leftBox, r312_bottomBox, 1.2 * r312_radiusBox + r312_GeometryStroke, r312_GeometryStroke)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("revRightAngle", 11262, new r312_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
            var _r349_t0, _r349_t1;
            r349_currentGlyph.include(r312_intersection(r312_xn$spirooutline$1aao(r312_corner(r312_leftBox, r312_bottomBox), r312_corner(r312_rightBox, r312_bottomBox), r312_corner(r312_rightBox, r312_topBox), r312_corner(r312_leftBox, r312_topBox)), r312_union(r312_dispiro(r312_widths.lhs(r312_GeometryStroke), r312_flat(r312_leftBox, r312_bottomBox), r312_curl(r312_rightBox, r312_bottomBox)), r312_dispiro(r312_widths.rhs(r312_GeometryStroke), r312_flat(r312_rightBox, r312_topBox), r312_curl(r312_rightBox, r312_bottomBox)))));
            return void 0;
        }));
        r312_WithDotVariants("pullback", 10195, function (r351_DrawAt, r351_kr, r351_ov) {
            var _r351_t0, _r351_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                var _r353_t0, _r353_t1;
                r353_currentGlyph.include(r312_xn$referglyph$1aao("revRightAngle"), r312_AS_BASE, r312_ALSO_METRICS);
                var r353_offset = r1_mix(0, r312_GeometryStroke, 0.5);
                r353_currentGlyph.include(r351_DrawAt(r312_Middle - r353_offset, r312_SymbolMid + r353_offset, r312_DotRadius * r351_kr * r312_AdviceStroke(4) / r312_Stroke - r351_ov));
                return void 0;
            });
        });
        r312_turned("pushout", 10196, "pullback", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("sineWave", 8767, new r312_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
            var _r358_t2, _r358_t3;
            var r358_N = 64;
            var r358_knots = [];
            var r358_Wave = function (r359_x) {
                var _r359_t0, _r359_t1;
                return Math.sin(r359_x) + 0.05 * Math.sin(3 * r359_x);
            };
            var _r358_t0 = 0;
            var _r358_t1 = r358_N;
            var r358_t = _r358_t0;
            while (r358_t <= _r358_t1) {
                r358_knots.push(r312_g2(r1_mix(r312_leftBox, r312_rightBox, r358_t / r358_N), r1_mix(r312_bottomBox, r312_topBox, 0.5 + 0.5 * r358_Wave(2 * Math.PI * r358_t / r358_N))));
                r358_t = r358_t + 1;
            }
            r358_currentGlyph.include(r312_dispiro(r312_widths.center(r312_GeometryStroke), r358_knots));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("wavyLine", 8967, new r312_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
            var _r364_t2, _r364_t3;
            var r364_N = 64;
            var r364_knots = [];
            var r364_Wave = function (r365_x) {
                var _r365_t0, _r365_t1;
                return Math.sin(r365_x) + 0.05 * Math.sin(3 * r365_x);
            };
            var _r364_t0 = 0;
            var _r364_t1 = r364_N;
            var r364_t = _r364_t0;
            while (r364_t <= _r364_t1) {
                r364_knots.push(r312_g2(r1_mix(r312_leftBox, r312_rightBox, 0.5 + 0.1 * r364_Wave(4 * Math.PI * r364_t / r364_N)), r1_mix(r312_TackBot, r312_TackTop, r364_t / r364_N)));
                r364_t = r364_t + 1;
            }
            r364_currentGlyph.include(r312_dispiro(r312_widths.center(r312_GeometryStroke), r364_knots));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("wigglyLine", 11838, new r312_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
            var r370_cl, r370_cr, r370_pm, _r370_t2, _r370_t3;
            var r370_N = 4;
            var r370_knots = [];
            var r370_stroke = r312_AdviceStroke2(4, 12, r312_ParenTop - r312_ParenBot);
            var r370_halfSw = 0.5 * r370_stroke;
            var r370_halfVSw = r312_HSwToV(r370_halfSw);
            var r370_bot = r312_ParenBot + r370_halfSw;
            var r370_top = r312_ParenTop - r370_halfSw;
            var r370_left = r312_Middle - Math.max(r312_radiusBox / 4, r370_halfVSw * 1.1) - r370_halfVSw;
            var r370_right = r312_Middle + Math.max(r312_radiusBox / 4, r370_halfVSw * 1.1) + r370_halfVSw;
            var _r370_t0 = 0;
            var _r370_t1 = r370_N;
            var r370_t = _r370_t0;
            while (r370_t <= _r370_t1) {
                r370_cl = r370_left + r370_halfVSw;
                r370_cr = r370_right - r370_halfVSw;
                r370_pm = 0.875;
                r370_knots.push(r312_g2.right.mid(r1_mix(r370_cl, r370_cr, 0.5), r1_mix(r370_bot, r370_top, (r370_t + 0 / 8) / r370_N), r312_heading(r312_Rightward)));
                r370_knots.push(r312_g2.up.mid(r370_cr, r1_mix(r370_bot, r370_top, (r370_t + 2 / 8) / r370_N), r312_heading(r312_Upward)));
                r370_knots.push(r312_g2.left.mid(r1_mix(r370_cl, r370_cr, 0.5), r1_mix(r370_bot, r370_top, (r370_t + 4 / 8) / r370_N), r312_heading(r312_Leftward)));
                r370_knots.push(r312_g2.up.mid(r370_cl, r1_mix(r370_bot, r370_top, (r370_t + 6 / 8) / r370_N), r312_heading(r312_Upward)));
                r370_t = r370_t + 1;
            }
            r370_currentGlyph.include(r312_dispiro(r312_widths.center(r370_stroke), r312_straight.right.start(r370_left, r370_bot), r370_knots.slice(0, -3), r312_straight.right.end(r370_right, r370_top)));
            return void 0;
        }));
        return (function () {
            r312_xn$GlyphSaveSink$2Lrc4b.save("vertZigzag", 10650, r312_intersection(r312_MaskAbove(r312_ParenBot), r312_MaskBelow(r312_ParenTop), r312_VZigzag.fromSide(r312_Middle, r312_ParenBot, r312_ParenTop, r312_radiusBox / 4, 9, 0, r312_GeometryStroke)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("wigglyFenceLeft", 10712, r312_intersection(r312_MaskAbove(r312_ParenBot), r312_MaskBelow(r312_ParenTop), r312_VZigzag.fromSide(r312_Middle, r312_ParenBot, r312_ParenTop, r312_radiusBox / 4, 10, 1, r312_GeometryStroke)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("wigglyFenceRight", 10713, r312_intersection(r312_MaskAbove(r312_ParenBot), r312_MaskBelow(r312_ParenTop), r312_VZigzag.fromSide(r312_Middle, r312_ParenBot, r312_ParenTop, r312_radiusBox / 4, 10, 0, r312_GeometryStroke)));
            var r374_space = (r312_rightBox - r312_leftBox - r312_HSwToV(r312_GeometryStroke) * 2) / 3;
            r312_xn$GlyphSaveSink$2Lrc4b.save("doubleWigglyFenceLeft", 10714, new r312_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                var _r380_t0, _r380_t1;
                r380_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(r374_space, 0), r312_xn$referglyph$1aao("wigglyFenceLeft")));
                r380_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(-r374_space, 0), r312_xn$referglyph$1aao("wigglyFenceLeft")));
                return void 0;
            }));
            return r312_xn$GlyphSaveSink$2Lrc4b.save("doubleWigglyFenceRight", 10715, new r312_xn$Capture$2Lrc8.GlyphProc(function (r385_currentGlyph) {
                var _r385_t0, _r385_t1;
                r385_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(r374_space, 0), r312_xn$referglyph$1aao("wigglyFenceRight")));
                r385_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(-r374_space, 0), r312_xn$referglyph$1aao("wigglyFenceRight")));
                return void 0;
            }));
        })();
    });
    return void 0;
});


