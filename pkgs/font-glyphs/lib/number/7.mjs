"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Digits-Seven", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Body, r313_Serif, _r313_t10, _r313_t12, _r313_t13, _r313_t14, _r313_tag15;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_QuarterStroke = _r313_t1.QuarterStroke;
        var r313_LongJut = _r313_t1.LongJut;
        var r313_VJut = _r313_t1.VJut;
        var r313_RightSB = _r313_t1.RightSB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_corner = _r313_t2.corner;
        var r313_end = _r313_t2.end;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_alsoThru = _r313_t2.alsoThru;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_Rect = _r313_t5.Rect;
        var r313_MaskAbove = _r313_t5.MaskAbove;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_DiagCorDs = _r313_t5.DiagCorDs;
        var r313_HBar = _r313_t5.HBar;
        var r313_ExtLineCenter = _r313_t5.ExtLineCenter;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Digits-Shared"].resolve();
        var r313_OnumMarks = _r313_t7.OnumMarks;
        var r313_ShiftDown = _r313_t7.ShiftDown;
        var r313_CodeLnum = _r313_t7.CodeLnum;
        var r313_CodeOnum = _r313_t7.CodeOnum;
        var r313_SevenXLeft = r1_mix(r313_SB, r313_RightSB, 0.28);
        var r313_StraightBody = function (r317_top) {
            var _r317_t0, _r317_t1;
            return r313_union(r313_HBar.t(r313_SB, r313_RightSB, r317_top), r313_intersection(r313_Rect(r317_top - r313_Stroke, 0, r313_SB, r313_RightSB), r313_dispiro(r313_widths.rhs(), r313_corner(r313_RightSB, r317_top - r313_Stroke), r313_corner(r1_mix(r313_RightSB, r313_SevenXLeft + r313_HSwToV(0.75 * r313_Stroke), 2), r1_mix(r317_top - r313_Stroke, 0, 2)))));
        };
        var r313_SevenXLeftBend = r1_mix(r313_SB, r313_RightSB, 0.38);
        var r313_BendBody = function (r318_top) {
            var _r318_t0, _r318_t1;
            return r313_union(r313_HBar.t(r313_SB, r313_RightSB, r318_top), r313_intersection(r313_MaskBelow(r318_top - r313_Stroke), r313_MaskAbove(0), r313_dispiro(r313_widths.rhs(), r313_g4(r313_RightSB, r318_top - r313_Stroke), r313_g4.down.mid(r313_SevenXLeftBend + r313_HSwToV(0.6 * r313_Stroke), 0, r313_heading(r313_Downward)), r313_g4(r313_RightSB, -r318_top + r313_Stroke))));
        };
        var r313_CurlyBody = function (r319_top) {
            var _r319_t0, _r319_t1;
            return r313_union(r313_HBar.t(r313_SB, r313_RightSB - r313_HalfStroke, r319_top), r313_intersection(r313_MaskBelow(r319_top), r313_MaskAbove(0), r313_dispiro(r313_g4.down.start(r313_RightSB, r319_top, r313_widths.rhs.heading(r313_Stroke, r313_Downward)), r313_alsoThru.g2(0.5, 0.5), r313_g4.down.mid(r313_SevenXLeftBend + r313_HSwToV(0.6 * r313_Stroke), 0, r313_heading(r313_Downward)), r313_alsoThru.g2(0.5, 0.5), r313_g4.down.end(r313_RightSB, -r319_top, r313_widths.rhs.heading(r313_Stroke, r313_Downward)))));
        };
        var r313_StartSerif = function (r320_top) {
            var _r320_t0, _r320_t1;
            return r313_VSerif.dl(r313_SB + (r313_OX - r313_O), r320_top, r313_VJut);
        };
        var r313_StartSerifThick = function (r321_top) {
            var _r321_t0, _r321_t1;
            return r313_VSerif.dl(r313_SB + (r313_OX - r313_O), r321_top, r313_VJut, r313_AdviceStroke(2.75));
        };
        var r313_Crossbar = function (r322_top) {
            var _r322_t0, _r322_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var _r324_t0, _r324_t1;
                var r324_m = r1_mix(r313_SevenXLeft, r313_RightSB - r313_HSwToV(r313_HalfStroke), 0.5);
                r324_currentGlyph.include(r313_HBar.m(r324_m - r313_HSwToV(r313_QuarterStroke) - r313_LongJut * 0.8, r324_m + r313_HSwToV(r313_QuarterStroke) + r313_LongJut * 0.7, r1_mix(0, r322_top - r313_QuarterStroke, 0.5)));
                return void 0;
            });
        };
        var r313_BendCrossbar = function (r326_top) {
            var _r326_t0, _r326_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
                var _r328_t0, _r328_t1;
                var r328_m = r1_mix(r313_SevenXLeftBend, r313_RightSB - r313_HSwToV(r313_HalfStroke), 0.25) + 0.125 * r313_Stroke;
                r328_currentGlyph.include(r313_HBar.m(r328_m - r313_HSwToV(r313_QuarterStroke) - r313_LongJut * 0.8, r328_m + r313_HSwToV(r313_QuarterStroke) + r313_LongJut * 0.7, r1_mix(0, r326_top - r313_QuarterStroke, 0.5)));
                return void 0;
            });
        };
        var r313_CurlyCrossbar = function (r330_top) {
            var _r330_t0, _r330_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                var _r332_t0, _r332_t1;
                var r332_m = r1_mix(r313_SevenXLeftBend, r313_RightSB - r313_HSwToV(r313_HalfStroke), 0.375);
                r332_currentGlyph.include(r313_HBar.m(r332_m - r313_HSwToV(r313_QuarterStroke) - r313_LongJut * 0.8, r332_m + r313_HSwToV(r313_QuarterStroke) + r313_LongJut * 0.7, r1_mix(0, r330_top - r313_QuarterStroke, 0.5)));
                return void 0;
            });
        };
        var r313_SevenConfig = r1_SuffixCfg.weave({
            "straight": r313_StraightBody,
            "bend": r313_BendBody,
            "curly": r313_CurlyBody
        }, {
            "serifless": void 0,
            "serifed": r313_StartSerif
        }, function (r334_body) {
            var _r334_t0, _r334_t1, _r334_t2;
            return {
                "": void 0,
                "crossbar": (_r334_t0 = r334_body, _r334_t0 === "straight" ? r313_Crossbar : _r334_t0 === "bend" ? r313_BendCrossbar : _r334_t0 === "curly" ? r313_CurlyCrossbar : void 0)
            };
        });
        var _r313_t8 = Object.entries(r313_SevenConfig)[Symbol.iterator]();
        var _r313_t9 = void 0;
        while (!(_r313_t9 = _r313_t8.next()).done) {
            _r313_t10 = _r313_t9.value;
            r313_suffix = _r313_t10[0];
            r313_Body = _r313_t10[1][0];
            r313_Serif = _r313_t10[1][1];
            r313_Crossbar = _r313_t10[1][2];
            _r313_t10[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("seven.lnum." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                    var _r340_t0, _r340_t1;
                    r340_currentGlyph.include(r313_MarkSet.capital());
                    if (r313_Body) r340_currentGlyph.include(r313_Body(r313_CAP));
                    if (r313_Serif) r340_currentGlyph.include(r313_Serif(r313_CAP));
                    if (r313_Crossbar) r340_currentGlyph.include(r313_Crossbar(r313_CAP));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("seven.onum." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                    var _r347_t0, _r347_t1;
                    r347_currentGlyph.include(r313_OnumMarks.p());
                    r347_currentGlyph.include(r313_xn$referglyph$1aao("seven.lnum." + r313_suffix));
                    r347_currentGlyph.include(r313_ShiftDown());
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("seven.lnum", r313_CodeLnum("7"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "seven"));
        r313_xn$selectvariant$7Hrq("seven.onum", r313_CodeOnum("7"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "seven"));
        r313_xn$linkreducedvariant$5sIl8("seven/sansSerif.lnum", "seven.lnum", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("follow", "seven/sansSerif"));
        r313_xn$linkreducedvariant$5sIl8("seven/sansSerif.onum", "seven.onum", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("follow", "seven/sansSerif"));
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t11.BBS;
        var r313_BBD = _r313_t11.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/seven", 120799, new r313_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
            var _r358_t0, _r358_t1;
            r358_currentGlyph.include(r313_MarkSet.capital());
            var r358_tr = r313_RightSB - r313_BBS / 2;
            var r358_kDiag = r313_DiagCorDs(r313_CAP - r313_BBS, r358_tr - r313_SevenXLeft, r313_BBD * 0.75);
            var r358_xTerm = r313_SevenXLeft - 0.25 * r358_kDiag * r313_BBD;
            r358_currentGlyph.include(r313_union(r313_HBar.t(r313_SB, r313_RightSB, r313_CAP, r313_BBS), r313_intersection(r313_Rect(r313_CAP, 0, 0, r313_RightSB), r313_union(r313_HBar.b(r358_xTerm, r358_xTerm + r358_kDiag * r313_BBD, 0, r313_BBS), r313_ExtLineCenter(r358_tr, r313_CAP - r313_BBS, r358_xTerm + r358_kDiag * r313_BBD, 0, r313_BBS, 2), r313_ExtLineCenter(r358_tr - r313_BBD, r313_CAP - r313_BBS, r358_xTerm, 0, r313_BBS, 2)))));
            return void 0;
        }));
    });
    return void 0;
});


