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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Lower-Gamma", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_SB = _r313_t1.SB;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_O = _r313_t1.O;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_SideJut = _r313_t1.SideJut;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_important = _r313_t2.important;
        var r313_bezControls = _r313_t2.bezControls;
        var r313_quadControls = _r313_t2.quadControls;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_Rect = _r313_t5.Rect;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_DiagCorDs = _r313_t5.DiagCorDs;
        var r313_HBar = _r313_t5.HBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t7.BBS;
        var r313_BBD = _r313_t7.BBD;
        var r313_BBBarLeft = _r313_t7.BBBarLeft;
        r313_alias("grek/gamma.straightSerifless", null, "cyrl/ue.straightSerifless");
        r313_alias("grek/gamma.straightSerifed", null, "cyrl/ue.straightMotionSerifed");
        r313_alias("grek/gamma.curlySerifless", null, "cyrl/ue.curlySerifless");
        r313_alias("grek/gamma.curlySerifed", null, "cyrl/ue.curlyMotionSerifed");
        var r313_GammaBaseShape = function (r317_df, r317_k, r317_ltOvershoot) {
            var _r317_t0, _r317_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r319_currentGlyph) {
                var _r319_t0, _r319_t1;
                var r319_xMid = r1_mix(r317_df.leftSB, r317_df.rightSB, 0.46) + r313_HSwToV(r313_HalfStroke);
                var r319_xStart = r317_df.leftSB + r313_HSwToV(r317_k * r313_Stroke);
                var r319_yStart = r313_XH - r317_ltOvershoot;
                r319_currentGlyph.include(r313_dispiro(r313_g4(r319_xStart, r319_yStart, r313_widths.rhs()), r313_bezControls(0.33, 0.17, 1, 0.62, 6, r313_important), r313_flat(r319_xMid, 0), r313_curl(r319_xMid, r313_Descender, r313_heading(r313_Downward))));
                r319_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_flat(r317_df.rightSB, r313_XH, r313_heading(r313_Downward)), r313_curl(r317_df.rightSB, r1_mix(r313_XH, 0, 0.1), r313_heading(r313_Downward)), r313_quadControls(0, 0.3, 6), r313_g4(r319_xMid, 0, r313_widths.rhs(r313_Stroke * 0.9))));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/gamma.casualSerifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
            var _r324_t0, _r324_t1;
            var r324_df = r324_currentGlyph.include(r313_DivFrame(1));
            r324_currentGlyph.include(r324_df.markSet.p());
            r324_currentGlyph.include(r313_GammaBaseShape(r324_df, 0.4, r313_O));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/gamma.casualSerifed", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
            var _r330_t0, _r330_t1;
            var r330_df = r330_currentGlyph.include(r313_DivFrame(1));
            r330_currentGlyph.include(r330_df.markSet.p());
            r330_currentGlyph.include(r313_difference(r313_GammaBaseShape(r330_df, 0.75, 0), r313_Rect(r313_XH, r313_XH - r313_Stroke, 0, r330_df.leftSB + r313_HSwToV(r313_HalfStroke))));
            r330_currentGlyph.include(r313_HSerif.lt(r330_df.leftSB + r313_HSwToV(r313_QuarterStroke), r313_XH, r313_SideJut + r313_HSwToV(r313_QuarterStroke)));
            return void 0;
        }));
        r313_xn$selectvariant$7Hrq("grek/gamma", 947);
        r313_xn$linkreducedvariant$5sIl8("grek/gamma/sansSerif", "grek/gamma", r1_MathSansSerif);
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/grek/gamma", 8509, new r313_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
            var r337_ob, r337_ot, _r337_t3, _r337_t4, _r337_t5;
            r337_currentGlyph.include(r313_MarkSet.p());
            var r337_cor = r313_DiagCorDs(r313_XH - r313_Descender, r313_RightSB - r313_SB, r313_BBD);
            var r337_swEqv = 2 * r313_BBS + r313_BBD;
            var r337_xMid = r1_mix(r313_SB, r313_RightSB, 0.46) + r313_HSwToV(0.46 * r337_swEqv);
            var r337_xStart = r313_SB + r313_HSwToV(0.4 * r337_swEqv);
            r337_currentGlyph.include(r313_HBar.t(r337_xStart - r313_BBD, r337_xStart + (r337_cor - 1) * r313_BBD, r313_XH, r313_BBS));
            r337_currentGlyph.include(r313_HBar.b(r337_xMid - r313_BBD, r337_xMid, r313_Descender, r313_BBS));
            var _r337_t0 = [[0, r337_cor - 1], [-1, -1]];
            var _r337_t1 = _r337_t0.length;
            var _r337_t2 = 0;
            while (_r337_t2 < _r337_t1) {
                _r337_t3 = _r337_t0[_r337_t2];
                r337_ob = _r337_t3[0];
                r337_ot = _r337_t3[1];
                r337_currentGlyph.include(r313_dispiro(r313_g4(r337_xStart + r337_ot * r313_BBD, r313_XH, r313_widths.rhs.heading(r313_BBS, r313_Downward)), r313_bezControls(0.33, 0.17, 1, 0.62, 6, r313_important), r313_flat(r337_xMid + r337_ob * r313_BBD, 0), r313_curl(r337_xMid + r337_ob * r313_BBD, r313_Descender, r313_heading(r313_Downward))));
                _r337_t2 = _r337_t2 + 1;
            }
            r337_currentGlyph.include(r313_dispiro(r313_widths.rhs(r313_BBS), r313_flat(r313_RightSB, r313_XH, r313_heading(r313_Downward)), r313_curl(r313_RightSB, r313_XH * 0.9, r313_heading(r313_Downward)), r313_quadControls(0, 0.3, 6), r313_g4(r337_xMid, 0, r313_widths.rhs(r313_BBS * 0.9))));
            return void 0;
        }));
    });
    return void 0;
});


