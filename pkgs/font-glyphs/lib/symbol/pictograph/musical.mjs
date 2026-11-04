"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/transform";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Transform = _r1_t9.Transform;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Musical", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t7, _r313_t8, _r313_t9, _r313_tag10, _r313_t11, _r313_tag12;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_UPM = _r313_t1.UPM;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_ParenTop = _r313_t1.ParenTop;
        var r313_PictTop = _r313_t1.PictTop;
        var r313_PictBot = _r313_t1.PictBot;
        var r313_Translate = _r313_t1.Translate;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_O = _r313_t1.O;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_AccentStackOffset = _r313_t1.AccentStackOffset;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_SmoothAdjust = _r313_t1.SmoothAdjust;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_close = _r313_t2.close;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_alsoThru = _r313_t2.alsoThru;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_Ring = _r313_t5.Ring;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_Arch = _r313_t5.Arch;
        var r313_Ungizmo = _r313_t5.Ungizmo;
        var r313_Regizmo = _r313_t5.Regizmo;
        var r313_FlipAround = _r313_t5.FlipAround;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_fine = r313_AdviceStroke(6);
        var r313_noteSize = r313_Width * 0.4 + r313_fine / 2;
        var r313_noteCompress = 0.8;
        var r313_commonNoteBottom = r313_PictBot + r313_noteCompress / 2 * r313_noteSize;
        var r313_BandShape = function (r316_z1, r316_z2, r316_l, r316_r, r316_h) {
            var _r316_t0, _r316_t1;
            var r316_slope = (r316_z2.y - r316_z1.y) / (r316_z2.x - r316_z1.x);
            var r316_yl = r316_z1.y + (r316_l - r316_z1.x) * r316_slope;
            var r316_yr = r316_z1.y + (r316_r - r316_z1.x) * r316_slope;
            return r313_xn$spirooutline$1aao(r313_corner(r316_l, r316_yl + 0), r313_corner(r316_r, r316_yr + 0), r313_corner(r316_r, r316_yr + r316_h), r313_corner(r316_l, r316_yl + r316_h));
        };
        var r313_MusicalNoteAt = function (r317_size, r317_x, r317_y) {
            var _r317_t0, _r317_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
                var _r319_t0, _r319_t1;
                r319_currentGlyph.include(r313_Ring(r313_noteCompress / 2 * -r317_size, r313_noteCompress / 2 * +r317_size, -r317_size, 0));
                r319_currentGlyph.include(r313_Ungizmo());
                r319_currentGlyph.include(new r1_Transform(1, 0, 0.15, 1, 0, 0));
                r319_currentGlyph.include(r313_Translate(r317_x, r317_y));
                r319_currentGlyph.include(r313_Regizmo());
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("crotchet", 9833, r313_union(r313_MusicalNoteAt(r313_noteSize, r313_Middle + r313_noteSize / 6 + r313_HSwToV(0.5 * r313_fine), r313_commonNoteBottom), r313_VBar.m(r313_Middle + r313_noteSize / 6, r313_commonNoteBottom, r313_PictTop, r313_fine)));
        r313_xn$GlyphSaveSink$2Lrc4b.save("quaver", 9834, new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
            var _r328_t0, _r328_t1;
            var r328_x3 = r1_mix(r313_Middle, r313_RightSB, 0.35);
            var r328_y3 = r1_mix(r313_PictBot, r313_PictTop, 0.25);
            var r328_y2 = r1_mix(r328_y3, r313_PictTop, 0.25);
            r328_currentGlyph.include(r313_union(r313_MusicalNoteAt(r313_noteSize, r313_Middle, r313_commonNoteBottom), r313_VBar.r(r313_Middle, r313_commonNoteBottom, r313_PictTop, r313_fine), r313_dispiro(r313_widths.rhs(r313_fine), r313_g4.down.start(r313_Middle, r313_PictTop), r313_g4.down.mid(r313_RightSB, r328_y2), r313_g4(r328_x3, r328_y3))));
            return void 0;
        }));
        (function () {
            var r331_x1 = r313_Middle - r313_noteSize / 6;
            var r331_x2 = r331_x1 + r313_noteSize * 7 / 6;
            var r331_deltaY = r313_noteCompress * r313_noteSize / 2;
            var r331_lb1 = r313_PictBot + r313_noteCompress / 2 * r313_noteSize;
            var r331_bandWidth = r313_noteSize * r313_noteCompress * 0.75;
            r313_xn$GlyphSaveSink$2Lrc4b.save("beamQuaver", 9835, r313_difference(r313_union(r313_MusicalNoteAt(r313_noteSize, r331_x1, r313_commonNoteBottom), r313_VBar.r(r331_x1, r313_commonNoteBottom, r313_PictTop - r331_deltaY, r313_fine), r313_MusicalNoteAt(r313_noteSize, r331_x2, r313_commonNoteBottom + r331_deltaY), r313_VBar.r(r331_x2, r313_commonNoteBottom + r331_deltaY, r313_PictTop, r313_fine), r313_BandShape({
                "x": r331_x1,
                "y": r313_PictTop - r331_deltaY
            }, {
                "x": r331_x2,
                "y": r313_PictTop
            }, r331_x1 - r313_HSwToV(r313_fine), r331_x2 + 0, 0 - r331_bandWidth)), r313_BandShape({
                "x": r331_x1,
                "y": r313_PictTop - r331_deltaY
            }, {
                "x": r331_x2,
                "y": r313_PictTop
            }, r331_x1 - r313_HSwToV(r313_fine), r331_x2 + 0, 0 + r331_bandWidth)));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("beamSemiQuaver", 9836, r313_union(r313_xn$referglyph$1aao("beamQuaver"), r313_BandShape({
                "x": r331_x1,
                "y": r313_PictTop - r331_deltaY - 1.5 * r331_bandWidth
            }, {
                "x": r331_x2,
                "y": r313_PictTop - 1.5 * r331_bandWidth
            }, r331_x1 - r313_HSwToV(r313_fine), r331_x2 + 0, 0 - r331_bandWidth)));
        })();
        return (function () {
            var _r335_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
            var r335_ArrowShape = _r335_t0.ArrowShape;
            var r335_nsTop = r313_PictTop;
            var r335_nsBot = r313_PictBot;
            var r335_fine = r313_AdviceStroke(3.5);
            var r335_fine2 = r313_AdviceStroke(4);
            var r335_lAcc = r313_SB - r335_fine * 0;
            var r335_rAcc = r313_RightSB + r335_fine * 0;
            var r335_hsp = (r335_rAcc - r335_lAcc - r313_HSwToV(2 * r335_fine)) * 0.3;
            var r335_skew = 0.2;
            var r335_krNat = 0.5;
            var r335_lSharp = r335_lAcc + r335_hsp * r335_krNat;
            var r335_rSharp = r335_rAcc - r335_hsp * r335_krNat;
            var r335_lFlat = r1_mix(r313_SB, r313_RightSB, 0.07);
            var r335_rFlat = r1_mix(r313_RightSB, r313_SB, 0.07);
            var r335_lNat = r335_lAcc + r335_hsp * r335_krNat;
            var r335_rNat = r335_rAcc - r335_hsp * r335_krNat;
            var r335_halfVFine = r313_HSwToV(0.5 * r335_fine);
            var r335_xUpSharp = r335_rSharp - r335_halfVFine;
            var r335_xDownSharp = r335_rSharp - r335_halfVFine;
            var r335_xUpFlat = r335_lFlat + r335_halfVFine;
            var r335_xDownFlat = r335_lFlat + r335_halfVFine;
            var r335_xUpNat = r335_lNat + r335_halfVFine;
            var r335_xDownNat = r335_rNat - r335_halfVFine;
            var r335_arrowWidth = (r313_RightSB - r313_SB) * 0.35;
            var r335_arrowSpace = Math.max(0.9 * r335_arrowWidth, r313_ParenTop - r313_PictTop);
            var r335_arrowTop = r335_nsTop + r335_arrowSpace;
            var r335_arrowBot = r335_nsBot - r335_arrowSpace;
            r313_xn$GlyphSaveSink$2Lrc4b.save("sharpTone", 9839, new r313_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                var _r339_t0, _r339_t1;
                r339_currentGlyph.include(r313_dispiro(r313_widths.center(), r313_flat(r335_lAcc, r1_mix(r335_nsTop, r335_nsBot, 0.3) - (r313_Middle - r335_lAcc) * r335_skew, r313_heading(r313_Rightward)), r313_curl(r335_rAcc, r1_mix(r335_nsTop, r335_nsBot, 0.3) - (r313_Middle - r335_rAcc) * r335_skew, r313_heading(r313_Rightward))));
                r339_currentGlyph.include(r313_dispiro(r313_widths.center(), r313_flat(r335_lAcc, r1_mix(r335_nsTop, r335_nsBot, 0.7) - (r313_Middle - r335_lAcc) * r335_skew, r313_heading(r313_Rightward)), r313_curl(r335_rAcc, r1_mix(r335_nsTop, r335_nsBot, 0.7) - (r313_Middle - r335_rAcc) * r335_skew, r313_heading(r313_Rightward))));
                r339_currentGlyph.include(r313_VBar.l(r335_lSharp, r335_nsBot - (r313_Middle - r335_lSharp) * r335_skew, r335_nsTop - (r313_Middle - r335_lSharp) * r335_skew, r335_fine));
                r339_currentGlyph.include(r313_VBar.r(r335_rSharp, r335_nsBot - (r313_Middle - r335_rSharp) * r335_skew, r335_nsTop - (r313_Middle - r335_rSharp) * r335_skew, r335_fine));
                return void 0;
            }));
            var r335_FlatToneShape = function (r344__l, r344__r, r344__sw) {
                var _r344_t0, _r344_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                    var _r346_t0, _r346_t1;
                    var r346_yTerminal = r1_mix(r335_nsBot, r335_nsTop, 0.55);
                    var r346_curly = 0.65;
                    var r346_curly2 = 1.1;
                    var r346_curly3 = 0.3;
                    var r346_l = r1_fallback(r344__l, r335_lFlat);
                    var r346_r = r1_fallback(r344__r, r335_rFlat);
                    var r346_sw = r1_fallback(r344__sw, r335_fine);
                    var r346_archShapeT = function (r347_offset) {
                        var _r347_t0, _r347_t1;
                        return [(r347_offset ? r313_g4 : r313_corner)(r346_l, r335_nsBot - r347_offset, r313_widths.lhs(r346_sw + r347_offset)), r313_alsoThru(0.5, r346_curly3), r313_g4.up.mid(r346_r - r313_O + r347_offset, r1_mix(r335_nsBot, r346_yTerminal, r346_curly) + (r346_r - r346_l) * r335_skew - r313_TanSlope * r313_SmoothAdjust), r313_arcvh(), r313_Arch.lhs.centerAt.rtl.t(r1_mix(r346_l, r346_r, 0.5), r1_mix(r335_nsBot, r346_yTerminal, r346_curly2) + (r346_r - r346_l) * r335_skew / 2 + r347_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r346_sw + r347_offset)), (r347_offset ? r313_g4 : r313_corner)(r346_l, r346_yTerminal + r347_offset)];
                    };
                    r346_currentGlyph.include(r313_difference(r313_union(r313_VBar.l(r346_l, r335_nsBot, r335_nsTop, r346_sw), r313_dispiro(r346_archShapeT(1))), r313_difference(r313_xn$spirooutline$1aao(r313_corner(r346_l, r335_nsBot - r313_UPM), r346_archShapeT(0), r313_corner(r346_l, r346_yTerminal + 1), r313_corner(r346_l, r335_nsTop), r313_corner(r313_Width, r335_nsTop), r313_corner(r313_Width, r335_nsBot - r313_UPM)), r313_xn$spirooutline$1aao(r313_corner(0, r346_yTerminal), r313_corner(0, r335_nsTop), r313_corner(r346_l + r313_HSwToV(r346_sw), r335_nsTop), r313_corner(r346_l + r313_HSwToV(r346_sw), r346_yTerminal))), r313_xn$spirooutline$1aao(r313_corner(r346_l, r335_nsBot - r313_UPM), r313_corner(r346_l, r335_nsTop), r313_corner(r346_l - r313_UPM, r335_nsTop), r313_corner(r346_l - r313_UPM, r335_nsBot - r313_UPM))));
                    return void 0;
                });
            };
            r313_xn$GlyphSaveSink$2Lrc4b.save("flatTone", 9837, new r313_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                var _r352_t0, _r352_t1;
                r352_currentGlyph.include(r335_FlatToneShape());
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("naturalTone", 9838, new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
                var _r356_t0, _r356_t1;
                var r356_k = 0.25 - r313_QuarterStroke / (r335_nsTop - r335_nsBot);
                var r356_barLeft = r313_VBar.l(r335_lNat, r1_mix(r335_nsBot, r335_nsTop, r356_k), r335_nsTop, r335_fine);
                var r356_barRight = r313_VBar.r(r335_rNat, r335_nsBot, r1_mix(r335_nsBot, r335_nsTop, 1 - r356_k), r335_fine);
                var r356_diagLow = r313_dispiro(r313_widths.lhs(r335_fine), r313_flat(r335_lNat, r1_mix(r335_nsBot, r335_nsTop, r356_k)), r313_curl(r335_rNat, r1_mix(r335_nsBot, r335_nsTop, r356_k) + (r335_rNat - r335_lNat) * r335_skew));
                var r356_belowDiagLow = r313_xn$spirooutline$1aao(r313_corner(r335_lNat, r1_mix(r335_nsBot, r335_nsTop, r356_k)), r313_corner(r335_rNat, r1_mix(r335_nsBot, r335_nsTop, r356_k) + (r335_rNat - r335_lNat) * r335_skew), r313_corner(r335_rNat, r335_nsBot), r313_corner(r335_lNat, r335_nsBot));
                var r356_diagHigh = r313_dispiro(r313_widths.lhs(r335_fine), r313_flat(r335_rNat, r1_mix(r335_nsBot, r335_nsTop, 1 - r356_k)), r313_curl(r335_lNat, r1_mix(r335_nsBot, r335_nsTop, 1 - r356_k) - (r335_rNat - r335_lNat) * r335_skew));
                var r356_aboveDiagHigh = r313_xn$spirooutline$1aao(r313_corner(r335_rNat, r1_mix(r335_nsBot, r335_nsTop, 1 - r356_k)), r313_corner(r335_lNat, r1_mix(r335_nsBot, r335_nsTop, 1 - r356_k) - (r335_rNat - r335_lNat) * r335_skew), r313_corner(r335_lNat, r335_nsTop), r313_corner(r335_rNat, r335_nsTop));
                var r356_outsideBars = r313_difference(r313_xn$spirooutline$1aao(r313_corner(r335_lNat - r313_UPM, r335_nsBot - r313_UPM), r313_corner(r335_lNat - r313_UPM, r335_nsTop + r313_UPM), r313_corner(r335_rNat + r313_UPM, r335_nsTop + r313_UPM), r313_corner(r335_rNat + r313_UPM, r335_nsBot - r313_UPM)), r313_xn$spirooutline$1aao(r313_corner(r335_lNat, r335_nsBot), r313_corner(r335_lNat, r335_nsTop), r313_corner(r335_rNat, r335_nsTop), r313_corner(r335_rNat, r335_nsBot)));
                r356_currentGlyph.include(r313_union(r313_difference(r356_barLeft, r356_belowDiagLow), r313_difference(r356_barRight, r356_aboveDiagHigh), r313_difference(r356_diagLow, r356_barLeft, r356_barRight, r356_outsideBars), r313_difference(r356_diagHigh, r356_barLeft, r356_barRight, r356_outsideBars)));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("dblSharpTone", 119082, new r313_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
                var _r360_t0, _r360_t1;
                var r360_w = r335_rAcc - r335_lAcc;
                var r360_cx = r1_mix(r335_lAcc, r335_rAcc, 0.5);
                var r360_cy = r1_mix(r1_mix(r335_nsBot, r335_nsTop, 0.5), r313_CAP, 0.3) + r313_AccentStackOffset / 2;
                var r360_t = r360_cy + r360_w / 2 - r335_fine * 0;
                var r360_b = r360_cy - r360_w / 2 + r335_fine * 0;
                var r360_cofine = r313_VSwToH(r1_clamp(r360_w / 9, r360_w / 3, r360_w * (2 / 3) - r313_HSwToV(r313_Stroke)));
                var r360_p = 0.5;
                var r360_size = r360_w * (5 / 12);
                r360_currentGlyph.include(r313_union(r313_difference(r313_xn$spirooutline$1aao(r313_corner(r335_lAcc, r360_t), r313_corner(r335_rAcc, r360_t), r313_corner(r335_rAcc, r360_b), r313_corner(r335_lAcc, r360_b)), r313_union(r313_VBar.m(r360_cx, r360_b, r360_t, r360_cofine), r313_HBar.m(r335_lAcc, r335_rAcc, r360_cy, r313_HSwToV(r360_cofine)))), r313_xn$spirooutline$1aao(r313_corner(r360_cx - r360_size, r360_cy + r360_size), r313_g4(r360_cx, r360_cy + r360_size * r360_p), r313_corner(r360_cx + r360_size, r360_cy + r360_size), r313_g4(r360_cx + r360_size * r360_p, r360_cy), r313_corner(r360_cx + r360_size, r360_cy - r360_size), r313_g4(r360_cx, r360_cy - r360_size * r360_p), r313_corner(r360_cx - r360_size, r360_cy - r360_size), r313_g4(r360_cx - r360_size * r360_p, r360_cy), r313_close())));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("dblFlatTone", 119083, new r313_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                var _r364_t0, _r364_t1;
                var r364_sw = r313_AdviceStroke(4);
                r364_currentGlyph.include(r313_union(r335_FlatToneShape(r335_lAcc, r313_Middle + r364_sw / 3, r364_sw), r335_FlatToneShape(r313_Middle - r364_sw / 3, r335_rAcc, r364_sw)));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("qtrSharpTone", 119090, new r313_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                var _r368_t0, _r368_t1;
                r368_currentGlyph.include(r313_dispiro(r313_widths.center(), r313_flat(r335_lAcc, r1_mix(r335_nsTop, r335_nsBot, 0.3) - (r313_Middle - r335_lAcc) * r335_skew, r313_heading(r313_Rightward)), r313_curl(r335_rAcc, r1_mix(r335_nsTop, r335_nsBot, 0.3) - (r313_Middle - r335_rAcc) * r335_skew, r313_heading(r313_Rightward))));
                r368_currentGlyph.include(r313_dispiro(r313_widths.center(), r313_flat(r335_lAcc, r1_mix(r335_nsTop, r335_nsBot, 0.7) - (r313_Middle - r335_lAcc) * r335_skew, r313_heading(r313_Rightward)), r313_curl(r335_rAcc, r1_mix(r335_nsTop, r335_nsBot, 0.7) - (r313_Middle - r335_rAcc) * r335_skew, r313_heading(r313_Rightward))));
                r368_currentGlyph.include(r313_VBar.m(r313_Middle, r335_nsBot, r335_nsTop, r335_fine));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("qtrFlatTone", 119091, new r313_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
                var _r374_t0, _r374_t1;
                r374_currentGlyph.include(r335_FlatToneShape());
                r374_currentGlyph.include(r313_FlipAround(r313_Middle, r313_SymbolMid, -1, +1));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("flatToneUp", 119084, new r313_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
                var _r379_t0, _r379_t1;
                r379_currentGlyph.include(r313_xn$referglyph$1aao("flatTone", r313_AS_BASE, r313_ALSO_METRICS), true, true);
                r379_currentGlyph.include(r335_ArrowShape(r335_xUpFlat, r313_SymbolMid, r335_xUpFlat, r335_arrowTop, r335_arrowWidth, r335_halfVFine));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("flatToneDown", 119085, new r313_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                var _r384_t0, _r384_t1;
                r384_currentGlyph.include(r313_xn$referglyph$1aao("flatTone", r313_AS_BASE, r313_ALSO_METRICS), true, true);
                r384_currentGlyph.include(r335_ArrowShape(r335_xDownFlat, r313_SymbolMid, r335_xDownFlat, r335_arrowBot, r335_arrowWidth, r335_halfVFine));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("naturalToneUp", 119086, new r313_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
                var _r389_t0, _r389_t1;
                r389_currentGlyph.include(r313_xn$referglyph$1aao("naturalTone", r313_AS_BASE, r313_ALSO_METRICS), true, true);
                r389_currentGlyph.include(r335_ArrowShape(r335_xUpNat, r313_SymbolMid, r335_xUpNat, r335_arrowTop, r335_arrowWidth, r335_halfVFine));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("naturalToneDown", 119087, new r313_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                var _r394_t0, _r394_t1;
                r394_currentGlyph.include(r313_xn$referglyph$1aao("naturalTone", r313_AS_BASE, r313_ALSO_METRICS), true, true);
                r394_currentGlyph.include(r335_ArrowShape(r335_xDownNat, r313_SymbolMid, r335_xDownNat, r335_arrowBot, r335_arrowWidth, r335_halfVFine));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("sharpToneUp", 119088, new r313_xn$Capture$2Lrc8.GlyphProc(function (r399_currentGlyph) {
                var _r399_t0, _r399_t1;
                r399_currentGlyph.include(r313_xn$referglyph$1aao("sharpTone", r313_AS_BASE, r313_ALSO_METRICS), true, true);
                r399_currentGlyph.include(r335_ArrowShape(r335_xUpSharp, r313_SymbolMid, r335_xUpSharp, r335_arrowTop, r335_arrowWidth, r335_halfVFine));
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("sharpToneDown", 119089, new r313_xn$Capture$2Lrc8.GlyphProc(function (r404_currentGlyph) {
                var _r404_t0, _r404_t1;
                r404_currentGlyph.include(r313_xn$referglyph$1aao("sharpTone", r313_AS_BASE, r313_ALSO_METRICS), true, true);
                r404_currentGlyph.include(r335_ArrowShape(r335_xDownSharp, r313_SymbolMid, r335_xDownSharp, r335_arrowBot, r335_arrowWidth, r335_halfVFine));
                return void 0;
            }));
        })();
    });
    return void 0;
});


