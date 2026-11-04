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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Lower-Nu", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t7, _r313_t8;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_XH = _r313_t1.XH;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_O = _r313_t1.O;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_SideJut = _r313_t1.SideJut;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
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
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_alias = _r313_t6.alias;
        r313_alias("grek/nu.straightSerifless", null, "v.straightSerifless");
        r313_alias("grek/nu.straightSerifed", null, "v.straightMotionSerifed");
        r313_alias("grek/nu.curlySerifless", null, "v.curlySerifless");
        r313_alias("grek/nu.curlySerifed", null, "v.curlyMotionSerifed");
        var r313_NuBaseShape = function (r316_df, r316_k, r316_ltOvershoot) {
            var _r316_t0, _r316_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
                var _r318_t0, _r318_t1;
                var r318_xMid = r316_df.middle + 0.375 * r313_Stroke;
                var r318_xStart = r316_df.leftSB + r313_HSwToV(r316_k * r313_Stroke);
                var r318_yStart = r313_XH - r316_ltOvershoot;
                r318_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_g4(r318_xStart, r318_yStart), r313_bezControls(0.33, 0.2, 1, 0.76, 6, r313_important), r313_g4.down.end(r318_xMid, 0, r313_heading(r313_Downward))));
                r318_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_flat(r316_df.rightSB, r313_XH, r313_heading(r313_Downward)), r313_curl(r316_df.rightSB, r1_mix(r313_XH, 0, 0.1), r313_heading(r313_Downward)), r313_quadControls(0, 0.35, 6), r313_g4(r318_xMid, 0)));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/nu.casualSerifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
            var _r323_t0, _r323_t1;
            var r323_df = r323_currentGlyph.include(r313_DivFrame(1));
            r323_currentGlyph.include(r323_df.markSet.e());
            r323_currentGlyph.include(r313_NuBaseShape(r323_df, 0.4, r313_O));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("grek/nu.casualSerifed", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
            var _r329_t0, _r329_t1;
            var r329_df = r329_currentGlyph.include(r313_DivFrame(1));
            r329_currentGlyph.include(r329_df.markSet.e());
            r329_currentGlyph.include(r313_difference(r313_NuBaseShape(r329_df, 0.75, 0), r313_Rect(r313_XH, r313_XH - r313_Stroke, 0, r329_df.leftSB + r313_HSwToV(r313_HalfStroke))));
            r329_currentGlyph.include(r313_HSerif.lt(r329_df.leftSB + r313_HSwToV(r313_QuarterStroke), r313_XH, r313_SideJut + r313_HSwToV(r313_QuarterStroke)));
            return void 0;
        }));
        r313_xn$selectvariant$7Hrq("grek/nu", 957);
        return r313_xn$linkreducedvariant$5sIl8("grek/nu/sansSerif", "grek/nu", r1_MathSansSerif);
    });
    return void 0;
});


