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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Greek-Lower-Lunate-Epsilon", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t7, _r312_t8;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_MarkSet = _r312_t0.MarkSet;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_SB = _r312_t1.SB;
        var r312_XH = _r312_t1.XH;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Rightward = _r312_t1.Rightward;
        var r312_Leftward = _r312_t1.Leftward;
        var r312_OX = _r312_t1.OX;
        var r312_AdviceStroke2 = _r312_t1.AdviceStroke2;
        var r312_QuarterStroke = _r312_t1.QuarterStroke;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var r312_YSmoothMidR = _r312_t1.YSmoothMidR;
        var r312_YSmoothMidL = _r312_t1.YSmoothMidL;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HBar = _r312_t5.HBar;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        r312_xn$GlyphSaveSink$2Lrc4b.save("grek/epsilonLunate", 1013, new r312_xn$Capture$2Lrc8.GlyphProc(function (r317_currentGlyph) {
            var _r317_t0, _r317_t1;
            r317_currentGlyph.include(r312_MarkSet.e());
            var r317_stroke = r312_AdviceStroke2(2, 3, r312_XH);
            r317_currentGlyph.include(r312_dispiro(r312_widths.lhs(r317_stroke), r312_flat(r312_RightSB, r312_XH, r312_heading(r312_Leftward)), r312_curl(r1_mix(r312_SB, r312_RightSB, 0.625), r312_XH, r312_heading(r312_Leftward)), r312_archv(), r312_g4(r312_SB + r312_OX, r312_YSmoothMidL(r312_XH, 0, r312_SmallArchDepthA, r312_SmallArchDepthB)), r312_arcvh(), r312_flat(r1_mix(r312_SB, r312_RightSB, 0.625), 0, r312_heading(r312_Rightward)), r312_curl(r312_RightSB, 0, r312_heading(r312_Rightward))));
            r317_currentGlyph.include(r312_HBar.m(r312_SB + r312_OX + r312_HSwToV(0.5 * r317_stroke), r1_mix(r312_SB, r312_RightSB, 0.75) + r312_QuarterStroke, r312_XH / 2, r317_stroke));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("grek/revepsilonLunate", 1014, new r312_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
            var _r323_t0, _r323_t1;
            r323_currentGlyph.include(r312_MarkSet.e());
            var r323_stroke = r312_AdviceStroke2(2, 3, r312_XH);
            r323_currentGlyph.include(r312_dispiro(r312_widths.rhs(r323_stroke), r312_flat(r312_SB, r312_XH, r312_heading(r312_Rightward)), r312_curl(r1_mix(r312_RightSB, r312_SB, 0.625), r312_XH, r312_heading(r312_Rightward)), r312_archv(), r312_g4(r312_RightSB - r312_OX, r312_YSmoothMidR(r312_XH, 0, r312_SmallArchDepthA, r312_SmallArchDepthB)), r312_arcvh(), r312_flat(r1_mix(r312_RightSB, r312_SB, 0.625), 0, r312_heading(r312_Leftward)), r312_curl(r312_SB, 0, r312_heading(r312_Leftward))));
            r323_currentGlyph.include(r312_HBar.m(r1_mix(r312_RightSB, r312_SB, 0.75) - r312_QuarterStroke, r312_RightSB - r312_OX - r312_HSwToV(0.5 * r323_stroke), r312_XH / 2, r323_stroke));
            return void 0;
        }));
    });
    return void 0;
});


