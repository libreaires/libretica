"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_MathSansSerif = _r1_t9.MathSansSerif;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Digits-Two", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t10, _r313_t11;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_VJut = _r313_t1.VJut;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_alsoThru = _r313_t2.alsoThru;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_HookStart = _r313_t5.HookStart;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_turned = _r313_t6.turned;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Digits-Shared"].resolve();
        var r313_OnumHeight = _r313_t7.OnumHeight;
        var r313_OnumMarks = _r313_t7.OnumMarks;
        var r313_CodeLnum = _r313_t7.CodeLnum;
        var r313_CodeOnum = _r313_t7.CodeOnum;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Glottal-Stop"].resolve();
        var r313_AdviceGlottalStopArchDepth = _r313_t8.AdviceGlottalStopArchDepth;
        var r313_TwoStraightNeckArcT = function (r318_sink, r318_offset, r318_sw, r318_top) {
            var _r318_t0, _r318_t1;
            var r318_archDepth = r313_AdviceGlottalStopArchDepth(r318_top, +1) * 0.95;
            var r318_xLB = r313_SB + r318_offset;
            var r318_xR = r313_RightSB - r313_OX / 2;
            var r318_yPhRight = r318_top - r318_archDepth * 1.5 - r318_sw / 2 * (r318_top / r313_CAP - r313_TanSlope);
            var r318_pStraightBarStart = 0.75;
            return r318_sink(r313_widths.rhs(r318_sw), r313_g4(r313_SB, r318_top - r313_Hook), r313_HookStart(r318_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r318_sw)), r313_g4.down.mid(r318_xR, r318_top - r318_archDepth), r313_flat(r1_mix(r318_xLB, r318_xR, r318_pStraightBarStart), r1_mix(r318_sw, r318_yPhRight, r318_pStraightBarStart)), r313_curl(r318_xLB, r318_sw, r313_widths.lhs(r318_sw)));
        };
        var r313_TwoArcShapeT = function (r320_sink, r320_offsetU, r320_offsetD, r320_sw, r320_top) {
            var _r320_t0, _r320_t1;
            var r320_archDepth = r313_AdviceGlottalStopArchDepth(r320_top, +1) * 0.95;
            return r320_sink(r313_widths.rhs(r320_sw), r313_g4(r313_SB - r320_offsetU, r320_top - r313_Hook), r313_HookStart(r320_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r320_sw)), r313_g4.down.mid(r313_RightSB - r320_offsetU - r313_OX / 2, r320_top - r320_archDepth), r313_alsoThru.g2.withOffset(0.5, r313_StrokeWidthBlend(0.425, 0.4, r320_sw) * r1_linreg(500, 1, 700, 0.95, r313_Width), 0, 0.25 * (r320_offsetU - r320_offsetD), r313_widths.center(r320_sw)), r313_flat(r313_SB + r320_offsetD, 1, r313_widths.heading(r320_sw, 0, r313_Downward)), (r320_sink === r313_xn$spirooutline$1aao ? r313_corner : r313_curl)(r313_SB + r320_offsetD, 0, r313_heading(r313_Downward)), r320_sink === r313_xn$spirooutline$1aao ? [r313_corner(r313_SB - r320_offsetU, 0)] : []);
        };
        var r313_TwoShape = function (r322_top, r322_slab) {
            var _r322_t0, _r322_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var _r324_t0, _r324_t1;
                r324_currentGlyph.include(r313_TwoArcShapeT(r313_dispiro, 0, 0, r313_Stroke, r322_top));
                r324_currentGlyph.include(r313_HBar.b(r313_SB + r313_HalfStroke, r313_RightSB, 0));
                if (r322_slab) r324_currentGlyph.include(r313_VSerif.ur(r313_RightSB, 0, r313_VJut));
                return void 0;
            });
        };
        var r313_TwoStraightNeckShape = function (r328_top, r328_slab) {
            var _r328_t0, _r328_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                var _r330_t0, _r330_t1;
                r330_currentGlyph.include(r313_TwoStraightNeckArcT(r313_dispiro, 0, r313_Stroke, r328_top));
                r330_currentGlyph.include(r313_HBar.b(r313_SB, r313_RightSB, 0));
                if (r328_slab) r330_currentGlyph.include(r313_VSerif.ur(r313_RightSB, 0, r313_VJut));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("two.lnum.straightNeckSerifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
            var _r336_t0, _r336_t1;
            r336_currentGlyph.include(r313_MarkSet.capital());
            r336_currentGlyph.include(r313_TwoStraightNeckShape(r313_CAP, false));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("two.onum.straightNeckSerifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
            var _r341_t0, _r341_t1;
            r341_currentGlyph.include(r313_OnumMarks.e());
            r341_currentGlyph.include(r313_TwoStraightNeckShape(r313_OnumHeight, false));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("two.lnum.straightNeckSerifed", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
            var _r346_t0, _r346_t1;
            r346_currentGlyph.include(r313_MarkSet.capital());
            r346_currentGlyph.include(r313_TwoStraightNeckShape(r313_CAP, true));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("two.onum.straightNeckSerifed", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r351_currentGlyph) {
            var _r351_t0, _r351_t1;
            r351_currentGlyph.include(r313_OnumMarks.e());
            r351_currentGlyph.include(r313_TwoStraightNeckShape(r313_OnumHeight, true));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("two.lnum.curlyNeckSerifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r356_currentGlyph) {
            var _r356_t0, _r356_t1;
            r356_currentGlyph.include(r313_MarkSet.capital());
            r356_currentGlyph.include(r313_TwoShape(r313_CAP, false));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("two.onum.curlyNeckSerifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
            var _r361_t0, _r361_t1;
            r361_currentGlyph.include(r313_OnumMarks.e());
            r361_currentGlyph.include(r313_TwoShape(r313_OnumHeight, false));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("two.lnum.curlyNeckSerifed", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r366_currentGlyph) {
            var _r366_t0, _r366_t1;
            r366_currentGlyph.include(r313_MarkSet.capital());
            r366_currentGlyph.include(r313_TwoShape(r313_CAP, true));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("two.onum.curlyNeckSerifed", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r371_currentGlyph) {
            var _r371_t0, _r371_t1;
            r371_currentGlyph.include(r313_OnumMarks.e());
            r371_currentGlyph.include(r313_TwoShape(r313_OnumHeight, true));
            return void 0;
        }));
        r313_xn$selectvariant$7Hrq("two.lnum", r313_CodeLnum("2"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "two"));
        r313_xn$selectvariant$7Hrq("two.onum", r313_CodeOnum("2"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "two"));
        r313_turned("turnTwo", 8586, "two.lnum", r313_Middle, r313_CAP / 2);
        r313_xn$linkreducedvariant$5sIl8("two/sansSerif.lnum", "two.lnum", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("follow", "two/sansSerif"));
        r313_xn$linkreducedvariant$5sIl8("two/sansSerif.onum", "two.onum", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("follow", "two/sansSerif"));
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t9.BBS;
        var r313_BBD = _r313_t9.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/two", 120794, new r313_xn$Capture$2Lrc8.GlyphProc(function (r381_currentGlyph) {
            var _r381_t0, _r381_t1;
            r381_currentGlyph.include(r313_MarkSet.capital());
            r381_currentGlyph.include(r313_TwoArcShapeT(r313_dispiro, 0, r313_BBD, r313_BBS, r313_CAP));
            r381_currentGlyph.include(r313_intersection(r313_TwoArcShapeT(r313_dispiro, r313_BBD, 0, r313_BBS, r313_CAP), r313_TwoArcShapeT(r313_xn$spirooutline$1aao, 0, r313_BBD, r313_BBS, r313_CAP)));
            r381_currentGlyph.include(r313_HBar.b(r313_SB + r313_HSwToV(0.5 * r313_BBS), r313_RightSB, 0, r313_BBS));
            return void 0;
        }));
    });
    return void 0;
});


