"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "../../meta/aesthetics.mjs";
import * as _s0_t2 from "@iosevka/glyph/relation";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DesignParameters = _r1_t9.DesignParameters;
var _r1_t10 = _s0_t2;
var r1_MathSansSerif = _r1_t10.MathSansSerif;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r309_block, _r309_t4, _r309_t6;
    var _r309_t3 = this;
    var _r309_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r309_t1 = _r309_t0.length;
    var _r309_t2 = 0;
    var _r309_t5 = _r309_t2 < _r309_t1;
    while (_r309_t5) {
        _r309_t6 = (r309_block = _r309_t0[_r309_t2], r309_block(_r309_t3), _r309_t2 = _r309_t2 + 1);
        _r309_t5 = _r309_t2 < _r309_t1;
    }
    return _r309_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r313_xn$Capture_Ext$2Lrc2b) {
    var _r313_t0, _r313_t1;
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Lower-Upsilon", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var _r314_t7, _r314_t8;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var r314_MarkSet = _r314_t0.MarkSet;
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_SB = _r314_t1.SB;
        var r314_XH = _r314_t1.XH;
        var r314_TanSlope = _r314_t1.TanSlope;
        var r314_Downward = _r314_t1.Downward;
        var r314_O = _r314_t1.O;
        var r314_OX = _r314_t1.OX;
        var r314_Stroke = _r314_t1.Stroke;
        var r314_RightSB = _r314_t1.RightSB;
        var r314_SideJut = _r314_t1.SideJut;
        var r314_SmallArchDepthA = _r314_t1.SmallArchDepthA;
        var r314_SmallArchDepthB = _r314_t1.SmallArchDepthB;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_g4 = _r314_t2.g4;
        var r314_flat = _r314_t2.flat;
        var r314_curl = _r314_t2.curl;
        var r314_widths = _r314_t2.widths;
        var r314_heading = _r314_t2.heading;
        var r314_dispiro = _r314_t2.dispiro;
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r314_tagged = _r314_t5.tagged;
        var r314_HSerif = _r314_t5.HSerif;
        var r314_Arch = _r314_t5.Arch;
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r314_xn$selectvariant$7Hrq = _r314_t6["select-variant"];
        var r314_xn$linkreducedvariant$5sIl8 = _r314_t6["link-reduced-variant"];
        var r314_alias = _r314_t6.alias;
        r314_alias("grek/upsilon.straightSerifless", null, "u.toothlessRoundedSerifless");
        r314_alias("grek/upsilon.straightSerifed", null, "u.toothlessRoundedMotionSerifed");
        var r314_LowerUpsilonCasualShape = function () {
            var _r317_t5;
            var _r317_t6 = arguments;
            var r317_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r317_t6, 0);
            var _r317_t0 = [];
            var _r317_t1 = 0;
            while (_r317_t1 < r317_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r317_xn$flexarguments$2Lrc7uIe5[_r317_t1] instanceof r314_xn$NamedParameterPair$2Lrc9b)) _r317_t0.push(r317_xn$flexarguments$2Lrc7uIe5[_r317_t1]);
                _r317_t1 = _r317_t1 + 1;
            }
            var _r317_t2 = r317_xn$flexarguments$2Lrc7uIe5;
            var _r317_t3 = _r317_t2.length;
            var _r317_t4 = 0;
            while (_r317_t4 < _r317_t3) {
                _r317_t1 = _r317_t2[_r317_t4];
                if (_r317_t1 && _r317_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r317_t1.left === "k") r317_k = _r317_t1.right;
                if (_r317_t1 && _r317_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r317_t1.left === "top") r317_top = _r317_t1.right;
                if (_r317_t1 && _r317_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r317_t1.left === "ada") r317_ada = _r317_t1.right;
                if (_r317_t1 && _r317_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r317_t1.left === "adb") r317_adb = _r317_t1.right;
                if (_r317_t1 && _r317_t1 instanceof r314_xn$NamedParameterPair$2Lrc9b && _r317_t1.left === "sw") r317_sw = _r317_t1.right;
                _r317_t4 = _r317_t4 + 1;
            }
            var r317_k = r1_fallback(r317_k, _r317_t0[0]);
            var r317_top = r1_fallback(r317_top, _r317_t0[1]);
            var r317_ada = r1_fallback(r317_ada, _r317_t0[2]);
            var r317_adb = r1_fallback(r317_adb, _r317_t0[3]);
            var r317_sw = r1_fallback(r317_sw, _r317_t0[4], r314_Stroke);
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
                var _r323_t0, _r323_t1;
                var r323_xArcRight = r314_RightSB - r314_OX;
                var r323_yArcRight = r1_mix(0, r317_top, 0.6) - r317_sw * (0.2 + r314_TanSlope);
                var r323_xArcEnd = r1_mix(r314_SB, r314_RightSB, 0.82) + r317_sw * 0.375;
                var r323_yArcEnd = r317_top - r314_O + r314_Stroke * (0.1 - r314_TanSlope);
                r323_currentGlyph.include(r314_dispiro(r314_widths.lhs(r317_sw), r314_flat(r314_SB, r317_top, r314_heading(r314_Downward)), r314_curl(r314_SB, r317_adb), r314_Arch.lhs(0, new r314_xn$NamedParameterPair$2Lrc9b("p", r317_k), new r314_xn$NamedParameterPair$2Lrc9b("sw", r317_sw)), r314_g4(r323_xArcRight, r323_yArcRight), r314_g4(r323_xArcEnd, r323_yArcEnd)));
                return void 0;
            });
        };
        r314_xn$GlyphSaveSink$2Lrc4b.save("grek/upsilon.casualSerifless", null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
            var _r329_t0, _r329_t1;
            r329_currentGlyph.include(r314_MarkSet.e());
            r329_currentGlyph.include(r314_LowerUpsilonCasualShape(0.5, r314_XH, r314_SmallArchDepthA, r314_SmallArchDepthB));
            r314_xn$GlyphSaveSink$2Lrc4b.save("grek/upsilon.casualSerifed", null, new r314_xn$Capture$2Lrc8.ForkGlyphProc(r329_currentGlyph, r314_tagged("serifLT", r314_HSerif.lt(r314_SB, r314_XH, r314_SideJut))));
            return void 0;
        }));
        r314_xn$selectvariant$7Hrq("grek/upsilon", 965);
        return r314_xn$linkreducedvariant$5sIl8("grek/upsilon/sansSerif", "grek/upsilon", r1_MathSansSerif);
    });
    return void 0;
});


