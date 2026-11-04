"use strict";
import * as _s0_t0 from "@iosevka/geometry/box";
import * as _s0_t1 from "@iosevka/util";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_Box = _r1_t8.Box;
var _r1_t9 = _s0_t1;
var r1_mix = _r1_t9.mix;
var r1_fallback = _r1_t9.fallback;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "LetterLike-Cursive-Shared", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_DrCursive, _r313_t6, _r313_t7;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_HSwToV = _r313_t1.HSwToV;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r316_t0, _r316_t1;
            return {
                "DrCursive": r313_DrCursive
            };
        });
        return r313_DrCursive = (function (r318_Super) {
            var _r318_t0, _r318_t1;
            var r318_Constructor = function () {
                var _r319_t0, _r319_t1;
                return void 0;
            };
            var r318_Type = function () {
                var _r320_t0 = this;
                var _r320_t1 = arguments;
                r318_Constructor.apply(_r320_t0, _r320_t1);
                return void 0;
            };
            var r318_Symbol = Symbol;
            (function () {
                var r322_protectedTerms, _r322_t0, _r322_t1;
                r318_Type.protectedTerms = r322_protectedTerms = Object.create(r318_Super.protectedTerms || null);
                r318_Constructor = function (r350_box, r350_sw) {
                    var _r350_t1;
                    var _r350_t0 = this;
                    _r350_t0.box = r350_box;
                    _r350_t0.sw = r350_sw;
                    return void 0;
                };
                r318_Type.prototype.withSw = function (r356_sw) {
                    var _r356_t1;
                    var _r356_t0 = this;
                    return new r313_DrCursive(_r356_t0.box, r356_sw);
                };
                r318_Type.prototype.withXMix = function (r362_pL, r362_pR) {
                    var _r362_t1;
                    var _r362_t0 = this;
                    return new r313_DrCursive(_r362_t0.box.withXMix(r362_pL, r362_pR), _r362_t0.sw);
                };
                r318_Type.prototype.withYMix = function (r368_pB, r368_pT) {
                    var _r368_t1;
                    var _r368_t0 = this;
                    return new r313_DrCursive(_r368_t0.box.withYMix(r368_pB, r368_pT), _r368_t0.sw);
                };
                r318_Type.prototype.x = function (r374_pX, r374__pSX, r374__deltaX) {
                    var _r374_t1;
                    var _r374_t0 = this;
                    var r374_pSX = r1_fallback(r374__pSX, 0);
                    var r374_deltaX = r1_fallback(r374__deltaX, 0);
                    return r1_mix(_r374_t0.box.left, _r374_t0.box.right, r374_pX) + r374_pSX * r313_HSwToV(_r374_t0.sw) + r374_deltaX;
                };
                r318_Type.prototype.y = function (r380_pY, r380__pSY, r380__deltaY) {
                    var _r380_t1;
                    var _r380_t0 = this;
                    var r380_pSY = r1_fallback(r380__pSY, 0);
                    var r380_deltaY = r1_fallback(r380__deltaY, 0);
                    return r1_mix(_r380_t0.box.bottom, _r380_t0.box.top, r380_pY) + r380_pSY * _r380_t0.sw + r380_deltaY;
                };
                r318_Type.prototype.s = function (r386_pS, r386_d) {
                    var _r386_t1, _r386_t2;
                    var _r386_t0 = this;
                    if (r386_d) return r313_widths.heading((1 - r386_pS) * _r386_t0.sw, r386_pS * _r386_t0.sw, r386_d); else return r313_widths((1 - r386_pS) * _r386_t0.sw, r386_pS * _r386_t0.sw);
                };
                r318_Type.prototype.lhs = function (r392_d) {
                    var _r392_t1;
                    var _r392_t0 = this;
                    return _r392_t0.s(0, r392_d);
                };
                r318_Type.prototype.cen = function (r398_d) {
                    var _r398_t1;
                    var _r398_t0 = this;
                    return _r398_t0.s(0.5, r398_d);
                };
                r318_Type.prototype.rhs = function (r404_d) {
                    var _r404_t1;
                    var _r404_t0 = this;
                    return _r404_t0.s(1, r404_d);
                };
                return void 0;
            }).call(r318_Type.prototype);
            return r318_Type;
        })(Object);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r412_xn$Capture_Ext$2Lrc2b) {
    var _r412_t0, _r412_t1;
    r412_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r412_xn$Capture_Ext$2Lrc2b, "LetterLike-Cursive", function (r413_xn$Capture$2Lrc8, r413_xn$ExportCapture$2Lrc4b) {
        var _r413_t7, _r413_t8;
        var _r413_t0 = r413_xn$Capture$2Lrc8;
        var r413_xn$GlyphSaveSink$2Lrc4b = _r413_t0["$GlyphSaveSink$"];
        var r413_xn$NamedParameterPair$2Lrc9b = _r413_t0["$NamedParameterPair$"];
        var r413_xn$Exec$2Lrc5 = _r413_t0["$Exec$"];
        var r413_MarkSet = _r413_t0.MarkSet;
        var _r413_t1 = r413_xn$Capture$2Lrc8.Metrics;
        var r413_Width = _r413_t1.Width;
        var r413_SB = _r413_t1.SB;
        var r413_XH = _r413_t1.XH;
        var r413_Ascender = _r413_t1.Ascender;
        var r413_Descender = _r413_t1.Descender;
        var r413_TanSlope = _r413_t1.TanSlope;
        var r413_HSwToV = _r413_t1.HSwToV;
        var r413_Upward = _r413_t1.Upward;
        var r413_O = _r413_t1.O;
        var r413_SHook = _r413_t1.SHook;
        var r413_AdviceStroke = _r413_t1.AdviceStroke;
        var r413_Stroke = _r413_t1.Stroke;
        var r413_HalfStroke = _r413_t1.HalfStroke;
        var r413_RightSB = _r413_t1.RightSB;
        var r413_Middle = _r413_t1.Middle;
        var r413_SmallArchDepthA = _r413_t1.SmallArchDepthA;
        var r413_SmallArchDepthB = _r413_t1.SmallArchDepthB;
        var _r413_t2 = r413_xn$Capture$2Lrc8.SpiroFns;
        var r413_g2 = _r413_t2.g2;
        var r413_flat = _r413_t2.flat;
        var r413_curl = _r413_t2.curl;
        var r413_straight = _r413_t2.straight;
        var r413_alsoThru = _r413_t2.alsoThru;
        var r413_bezControls = _r413_t2.bezControls;
        var r413_dispiro = _r413_t2.dispiro;
        var _r413_t3 = r413_xn$Capture$2Lrc8.SpiroFns;
        var r413_xn$decor$0cao = _r413_t3["decor@"];
        var r413_xn$decor$0cao1 = _r413_t3["decor@@"];
        var r413_xn$decor$0cao11 = _r413_t3["decor@@@"];
        var _r413_t4 = r413_xn$Capture$2Lrc8.BooleFns;
        var _r413_t5 = r413_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r413_HookEnd = _r413_t5.HookEnd;
        var r413_Arch = _r413_t5.Arch;
        var _r413_t6 = r413_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["LetterLike-Cursive-Shared"].resolve();
        var r413_DrCursive = _r413_t6.DrCursive;
        r413_xn$GlyphSaveSink$2Lrc4b.save("ell", 8467, new r413_xn$Capture$2Lrc8.GlyphProc(function (r418_currentGlyph) {
            var _r418_t0, _r418_t1;
            r418_currentGlyph.include(r413_MarkSet.b());
            var r418_loopSize = r413_Width * 0.25 + r413_HSwToV(r413_HalfStroke);
            var r418_l = r413_Middle - r418_loopSize;
            var r418_r = r413_Middle + r418_loopSize;
            var r418_dr = new r413_DrCursive(new r1_Box(r413_Ascender, 0, r418_l, r418_r), r413_Stroke);
            var r418_loop = r418_dr.withXMix(0, 0.9).withSw(r413_AdviceStroke(5.5));
            var r418_tip = r418_dr.withSw(r413_AdviceStroke(6.5));
            var r418_ada = 0.8 * r413_SmallArchDepthA + 0.25 * r418_dr.sw;
            var r418_adb = 0.8 * r413_SmallArchDepthB + 0.25 * r418_dr.sw;
            r418_currentGlyph.include(r413_dispiro(r413_g2(r418_loop.x(0), r418_loop.y(0.33), r418_loop.cen()), r413_g2.up.mid(r418_loop.x(1, 0, -r413_O), r418_loop.y(0.8), r418_loop.lhs()), r413_xn$decor$0cao(r413_Arch.lhs(r418_loop.y(1, 0, r413_O), new r413_xn$NamedParameterPair$2Lrc9b("sw", r418_loop.sw), new r413_xn$NamedParameterPair$2Lrc9b("swAfter", r418_dr.sw))), r413_flat(r418_dr.x(0.5, -0.75), r418_dr.y(1, 0, -r418_ada), r418_dr.lhs()), r413_curl(r418_dr.x(0.5, -0.75), r418_dr.y(0, 0, +r418_adb), r418_dr.lhs()), r413_xn$decor$0cao(r413_HookEnd(0, new r413_xn$NamedParameterPair$2Lrc9b("sw", r418_dr.sw), new r413_xn$NamedParameterPair$2Lrc9b("swTerminal", r418_tip.sw), new r413_xn$NamedParameterPair$2Lrc9b("isTail", true))), r413_g2(r418_tip.x(1), r413_SHook + r418_dr.sw * 0.5, r418_tip.lhs())));
            return void 0;
        }));
        return r413_xn$GlyphSaveSink$2Lrc4b.save("weierstrassP", 8472, new r413_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
            var _r430_t0, _r430_t1;
            r430_currentGlyph.include(r413_MarkSet.p());
            var r430_thick = r413_AdviceStroke(2.5);
            var r430_extSw = r413_AdviceStroke(3.5);
            var r430_fine = r413_AdviceStroke(5.5);
            var r430_tip = r413_AdviceStroke(6.5);
            var r430_bowl = new r413_DrCursive(new r1_Box(r413_XH, 0, r413_SB, r413_RightSB), r430_thick);
            var r430_extn = new r413_DrCursive(new r1_Box(r413_XH, r413_Descender, r413_SB, r1_mix(r413_SB, r413_RightSB, 0.3)), r430_extSw);
            var r430_bowT = r430_bowl.withSw(r430_tip);
            var r430_extF = r430_extn.withSw(r430_fine);
            var r430_extT = r430_extn.withSw(r430_tip);
            r430_currentGlyph.include(r413_dispiro(r413_g2(r430_extT.x(0.25, 0.5), r430_extT.y(1), r430_extT.cen()), r413_g2.down.mid(r430_extF.x(0, 0, r413_O), r430_extF.y(0.8), r430_extF.lhs()), r413_xn$decor$0cao(r413_alsoThru.g2(0.5, 0.5, r430_extn.cen())), r413_g2.down.mid(r430_extF.x(1, 0.4, -r413_O), r430_extn.y(0.2, -r413_TanSlope), r430_extn.s(r430_fine / r430_extSw)), r413_xn$decor$0cao(r413_Arch.rhs(r430_extF.y(0, 0, 0), new r413_xn$NamedParameterPair$2Lrc9b("sw", r430_extF.sw))), r413_g2.up.mid(r430_extF.x(0, 0, r413_O), r430_extF.y(0.2), r430_extF.rhs()), r413_xn$decor$0cao(r413_Arch.rhs(r430_bowl.y(1, 0, -r413_O), 0.625, new r413_xn$NamedParameterPair$2Lrc9b("sw", r430_bowl.sw), new r413_xn$NamedParameterPair$2Lrc9b("swBefore", r430_extF.sw), new r413_xn$NamedParameterPair$2Lrc9b("blendPre", r413_bezControls(0, 0.5, 0.4, 1, 16)))), r413_straight.down.mid(r430_bowl.x(1, 0, -r413_O), r430_bowl.y(0.5)), r413_xn$decor$0cao(r413_Arch.rhs(r430_bowl.y(0, 0, r413_O), new r413_xn$NamedParameterPair$2Lrc9b("sw", r430_bowl.sw), new r413_xn$NamedParameterPair$2Lrc9b("swAfter", r430_bowT.sw))), r413_g2(r430_bowT.x(0.4), r430_bowT.y(0.3), r430_bowT.rhs(r413_Upward))));
            return void 0;
        }));
    });
    return void 0;
});


