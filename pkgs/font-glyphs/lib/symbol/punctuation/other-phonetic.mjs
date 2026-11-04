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
var r1_Joining = _r1_t9.Joining;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Other-Phonetic", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_toneEnd, r313_toneMid, r313_name, r313_code, r313_a, r313_b, r313_pos, _r313_t11, _r313_t12, _r313_t15, _r313_t16, _r313_t19, _r313_t20, _r313_t21, _r313_t22, _r313_t26, _r313_t30, _r313_t34, _r313_t35, _r313_t36, _r313_t38;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_DotRadius = _r313_t1.DotRadius;
        var r313_PeriodRadius = _r313_t1.PeriodRadius;
        var r313_OperatorStroke = _r313_t1.OperatorStroke;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_widths = _r313_t2.widths;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_Rect = _r313_t5.Rect;
        var r313_DotAt = _r313_t5.DotAt;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_triangleSize = Math.min(r313_PeriodRadius, r313_XH / 6);
        var r313_toneMarkLeft = r1_mix(r313_SB, r313_RightSB, 0.1);
        var r313_toneMarkRight = r313_Width - r313_toneMarkLeft;
        var r313_dblToneMarkLeft = function (r316_df) {
            var _r316_t0, _r316_t1;
            return r1_mix(r316_df.leftSB, r316_df.rightSB, 0.1);
        };
        var r313_dblToneMarkRight = function (r317_df) {
            var _r317_t0, _r317_t1;
            return r1_mix(r317_df.leftSB, r317_df.rightSB, 0.9);
        };
        var r313_dblToneMarkMiddle = function (r318_df) {
            var _r318_t0, _r318_t1;
            return r1_mix(r313_dblToneMarkLeft(r318_df), r313_dblToneMarkRight(r318_df), 0.5);
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("triangleColon", 720, new r313_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
            var _r321_t0, _r321_t1;
            r321_currentGlyph.include(r313_MarkSet.e());
            r321_currentGlyph.include(r313_union(r313_xn$spirooutline$1aao(r313_corner(r313_Middle - r313_triangleSize * 1.35, r313_XH), r313_corner(r313_Middle, r313_XH - r313_triangleSize * 2.75), r313_corner(r313_Middle + r313_triangleSize * 1.35, r313_XH)), r313_xn$spirooutline$1aao(r313_corner(r313_Middle - r313_triangleSize * 1.35, 0), r313_corner(r313_Middle, 0 + r313_triangleSize * 2.75), r313_corner(r313_Middle + r313_triangleSize * 1.35, 0))));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("halfTriangleColon", 721, new r313_xn$Capture$2Lrc8.GlyphProc(function (r326_currentGlyph) {
            var _r326_t0, _r326_t1;
            r326_currentGlyph.include(r313_MarkSet.e());
            r326_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r313_Middle - r313_triangleSize * 1.35, r313_XH), r313_corner(r313_Middle, r313_XH - r313_triangleSize * 2.75), r313_corner(r313_Middle + r313_triangleSize * 1.35, r313_XH)));
            return void 0;
        }));
        var r313_yOfTone = function (r329_tone) {
            var _r329_t0, _r329_t1;
            return r1_mix(r313_OperatorStroke / 2, r313_CAP - r313_OperatorStroke / 2, r329_tone / 4);
        };
        var r313_yOfToneNeutral = function (r330_tone) {
            var _r330_t0, _r330_t1;
            return r1_mix(r313_DotRadius, r313_CAP - r313_DotRadius, r330_tone / 4);
        };
        var r313_yOfToneDepart = function (r331_a, r331_b, r331_p) {
            var _r331_t0, _r331_t1;
            return r1_mix(r313_CAP * r331_a + r313_OperatorStroke / 2, r313_CAP * r331_b - r313_OperatorStroke / 2, r331_p);
        };
        var _r313_t7 = 4;
        var _r313_t8 = 0;
        var r313_tone = _r313_t7;
        while (r313_tone >= _r313_t8) {
            r313_xn$GlyphSaveSink$2Lrc4b.save("tone" + r313_tone, 741 + 4 - r313_tone, new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                var _r335_t0, _r335_t1;
                r335_currentGlyph.include(r313_VBar.r(r313_toneMarkRight, 0, r313_CAP, r313_OperatorStroke));
                r335_currentGlyph.include(r313_HBar.m(r313_toneMarkLeft, r313_toneMarkRight - r313_TINY, r313_yOfTone(r313_tone), r313_OperatorStroke));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("toneSandhi" + r313_tone, 42770 + 4 - r313_tone, new r313_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                var _r340_t0, _r340_t1;
                r340_currentGlyph.include(r313_VBar.l(r313_toneMarkLeft, 0, r313_CAP, r313_OperatorStroke));
                r340_currentGlyph.include(r313_HBar.m(r313_toneMarkLeft + r313_TINY, r313_toneMarkRight, r313_yOfTone(r313_tone), r313_OperatorStroke));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("toneNeutral" + r313_tone, 42760 + 4 - r313_tone, new r313_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                var _r345_t0, _r345_t1;
                r345_currentGlyph.include(r313_VBar.r(r313_toneMarkRight, 0, r313_CAP, r313_OperatorStroke));
                r345_currentGlyph.include(r313_DotAt(r313_toneMarkLeft + r313_DotRadius, r313_yOfToneNeutral(r313_tone), r313_DotRadius));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("toneSandhiNeutral" + r313_tone, 42765 + 4 - r313_tone, new r313_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                var _r350_t0, _r350_t1;
                r350_currentGlyph.include(r313_VBar.l(r313_toneMarkLeft, 0, r313_CAP, r313_OperatorStroke));
                r350_currentGlyph.include(r313_DotAt(r313_toneMarkRight - r313_DotRadius, r313_yOfToneNeutral(r313_tone), r313_DotRadius));
                return void 0;
            }));
            r313_tone = r313_tone - 1;
        }
        var _r313_t9 = 4;
        var _r313_t10 = 0;
        var r313_toneStart = _r313_t9;
        while (r313_toneStart >= _r313_t10) {
            _r313_t11 = 4;
            _r313_t12 = 0;
            r313_toneEnd = _r313_t11;
            while (r313_toneEnd >= _r313_t12) {
                r313_xn$GlyphSaveSink$2Lrc4b.save("toneStart" + r313_toneStart + r313_toneEnd, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                    var _r357_t0, _r357_t1;
                    r1_Joining.set(r357_currentGlyph, r1_Joining.Classes.Right);
                    r357_currentGlyph.include(r313_intersection(r313_Rect(r313_CAP, 0, r313_Middle, r313_Width), r313_dispiro(r313_widths.center(r313_OperatorStroke), r313_corner(r313_Width / 2, r313_yOfTone(r313_toneStart)), r313_corner(r313_Width + r313_Width / 2, r313_yOfTone(r313_toneEnd)))));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("toneSandhiStart" + r313_toneStart + r313_toneEnd, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
                    var _r361_t0, _r361_t1;
                    r1_Joining.set(r361_currentGlyph, r1_Joining.Classes.Right);
                    r361_currentGlyph.include(r313_intersection(r313_Rect(r313_CAP, 0, r313_Middle, r313_Width), r313_dispiro(r313_widths.center(r313_OperatorStroke), r313_corner(0 - r313_Width / 2, r313_yOfTone(r1_mix(r313_toneEnd, r313_toneStart, 2))), r313_corner(r313_Width + r313_Width / 2, r313_yOfTone(r313_toneEnd)))));
                    r361_currentGlyph.include(r313_VBar.m(r313_Middle, 0, r313_CAP, r313_OperatorStroke));
                    return void 0;
                }));
                r313_toneEnd = r313_toneEnd - 1;
            }
            r313_toneStart = r313_toneStart - 1;
        }
        var _r313_t13 = 4;
        var _r313_t14 = 0;
        r313_toneStart = _r313_t13;
        while (r313_toneStart >= _r313_t14) {
            _r313_t15 = 4;
            _r313_t16 = 0;
            r313_toneEnd = _r313_t15;
            while (r313_toneEnd >= _r313_t16) {
                r313_xn$GlyphSaveSink$2Lrc4b.save("toneEnd" + r313_toneStart + r313_toneEnd, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                    var _r368_t0, _r368_t1;
                    r1_Joining.set(r368_currentGlyph, r1_Joining.Classes.Left);
                    r368_currentGlyph.include(r313_intersection(r313_Rect(r313_CAP, 0, 0, r313_Middle), r313_dispiro(r313_widths.center(r313_OperatorStroke), r313_corner(0 - r313_Width / 2, r313_yOfTone(r313_toneStart)), r313_corner(r313_Width + r313_Width / 2, r313_yOfTone(r1_mix(r313_toneStart, r313_toneEnd, 2))))));
                    r368_currentGlyph.include(r313_VBar.m(r313_Middle, 0, r313_CAP, r313_OperatorStroke));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("toneSandhiEnd" + r313_toneStart + r313_toneEnd, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                    var _r373_t0, _r373_t1;
                    r1_Joining.set(r373_currentGlyph, r1_Joining.Classes.Left);
                    r373_currentGlyph.include(r313_intersection(r313_Rect(r313_CAP, 0, 0, r313_Width), r313_dispiro(r313_widths.center(r313_OperatorStroke), r313_corner(0 - r313_Width / 2, r313_yOfTone(r313_toneStart)), r313_corner(r313_Width / 2, r313_yOfTone(r313_toneEnd)))));
                    return void 0;
                }));
                r313_toneEnd = r313_toneEnd - 1;
            }
            r313_toneStart = r313_toneStart - 1;
        }
        var _r313_t17 = 4;
        var _r313_t18 = 0;
        r313_toneStart = _r313_t17;
        while (r313_toneStart >= _r313_t18) {
            _r313_t19 = 4;
            _r313_t20 = 0;
            r313_toneMid = _r313_t19;
            while (r313_toneMid >= _r313_t20) {
                _r313_t21 = 4;
                _r313_t22 = 0;
                r313_toneEnd = _r313_t21;
                while (r313_toneEnd >= _r313_t22) {
                    r313_xn$GlyphSaveSink$2Lrc4b.save("toneMid" + r313_toneStart + r313_toneMid + r313_toneEnd, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                        var _r380_t0, _r380_t1;
                        r1_Joining.set(r380_currentGlyph, r1_Joining.Classes.Mid);
                        r380_currentGlyph.include(r313_intersection(r313_Rect(r313_CAP, 0, 0, r313_Width), r313_union(r313_intersection(r313_dispiro(r313_widths.center(r313_OperatorStroke), r313_corner(0 - r313_Width / 2, r313_yOfTone(r313_toneStart)), r313_corner(r313_Width + r313_Width / 2, r313_yOfTone(r1_mix(r313_toneStart, r313_toneMid, 2)))), r313_dispiro(r313_widths.center(r313_OperatorStroke), r313_corner(0 - r313_Width / 2, r313_yOfTone(r1_mix(r313_toneEnd, r313_toneMid, 2))), r313_corner(r313_Width + r313_Width / 2, r313_yOfTone(r313_toneEnd)))), r313_dispiro(r313_widths.center(r313_OperatorStroke), r313_corner(0 - r313_Width / 2, r313_yOfTone(r313_toneStart)), r313_corner(r313_Width / 2, r313_yOfTone(r313_toneMid))), r313_dispiro(r313_widths.center(r313_OperatorStroke), r313_corner(r313_Width / 2, r313_yOfTone(r313_toneMid)), r313_corner(r313_Width + r313_Width / 2, r313_yOfTone(r313_toneEnd))))));
                        return void 0;
                    }));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("toneSandhiMid" + r313_toneStart + r313_toneMid + r313_toneEnd, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                        var _r384_t0, _r384_t1;
                        r384_currentGlyph.include(r313_xn$referglyph$1aao("toneMid" + r313_toneStart + r313_toneMid + r313_toneEnd), r313_AS_BASE, r313_ALSO_METRICS);
                        r1_Joining.set(r384_currentGlyph, r1_Joining.Classes.Mid);
                        return void 0;
                    }));
                    r313_toneEnd = r313_toneEnd - 1;
                }
                r313_toneMid = r313_toneMid - 1;
            }
            r313_toneStart = r313_toneStart - 1;
        }
        var r313_DepartingToneConfig = [["departingToneYin", 746, 0, 0.5, 0], ["departingToneYang", 747, 0, 0.5, 0.5], ["beginHighTone", 761, 0.6, 1, 1], ["beginLowTone", 763, 0, 0.4, 0]];
        var _r313_t23 = r313_DepartingToneConfig;
        var _r313_t24 = _r313_t23.length;
        var _r313_t25 = 0;
        while (_r313_t25 < _r313_t24) {
            _r313_t26 = _r313_t23[_r313_t25];
            r313_name = _r313_t26[0];
            r313_code = _r313_t26[1];
            r313_a = _r313_t26[2];
            r313_b = _r313_t26[3];
            r313_pos = _r313_t26[4];
            r313_xn$GlyphSaveSink$2Lrc4b.save(r313_name, r313_code, new r313_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
                var _r389_t0, _r389_t1;
                r389_currentGlyph.include(r313_VBar.l(r313_toneMarkLeft, r313_CAP * r313_a, r313_CAP * r313_b, r313_OperatorStroke));
                r389_currentGlyph.include(r313_HBar.m(r313_toneMarkLeft + r313_TINY, r313_toneMarkRight, r313_yOfToneDepart(r313_a, r313_b, r313_pos), r313_OperatorStroke));
                return void 0;
            }));
            _r313_t25 = _r313_t25 + 1;
        }
        var r313_EnteringToneConfig = [["endHighTone", 762, 0.6, 1, 1], ["endLowTone", 764, 0, 0.4, 0]];
        var _r313_t27 = r313_EnteringToneConfig;
        var _r313_t28 = _r313_t27.length;
        var _r313_t29 = 0;
        while (_r313_t29 < _r313_t28) {
            _r313_t30 = _r313_t27[_r313_t29];
            r313_name = _r313_t30[0];
            r313_code = _r313_t30[1];
            r313_a = _r313_t30[2];
            r313_b = _r313_t30[3];
            r313_pos = _r313_t30[4];
            r313_xn$GlyphSaveSink$2Lrc4b.save(r313_name, r313_code, new r313_xn$Capture$2Lrc8.GlyphProc(function (r395_currentGlyph) {
                var _r395_t0, _r395_t1;
                r395_currentGlyph.include(r313_VBar.r(r313_toneMarkRight, r313_CAP * r313_a, r313_CAP * r313_b, r313_OperatorStroke));
                r395_currentGlyph.include(r313_HBar.m(r313_toneMarkLeft, r313_toneMarkRight - r313_TINY, r313_yOfToneDepart(r313_a, r313_b, r313_pos), r313_OperatorStroke));
                return void 0;
            }));
            _r313_t29 = _r313_t29 + 1;
        }
        var r313_DblToneConfig = [["stressAndHighTone", 42784, 0.6, 1, 1], ["stressAndLowTone", 42785, 0, 0.4, 0]];
        var _r313_t31 = r313_DblToneConfig;
        var _r313_t32 = _r313_t31.length;
        var _r313_t33 = 0;
        var _r313_t37 = _r313_t33 < _r313_t32;
        while (_r313_t37) {
            _r313_t38 = (_r313_t34 = _r313_t31[_r313_t33], r313_name = _r313_t34[0], r313_code = _r313_t34[1], r313_a = _r313_t34[2], r313_b = _r313_t34[3], r313_pos = _r313_t34[4], r313_xn$GlyphSaveSink$2Lrc4b.save(r313_name, r313_code, new r313_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
                var _r401_t0, _r401_t1;
                var r401_df = r401_currentGlyph.include(r313_DivFrame(1, 3.75));
                var r401_fine = r313_OperatorStroke * r401_df.mvs / r313_Stroke;
                r401_currentGlyph.include(r313_VBar.l(r313_dblToneMarkLeft(r401_df), r313_CAP * r313_a, r313_CAP * r313_b, r401_fine));
                r401_currentGlyph.include(r313_VBar.m(r313_dblToneMarkMiddle(r401_df), r313_CAP * r313_a, r313_CAP * r313_b, r401_fine));
                r401_currentGlyph.include(r313_HBar.m(r313_dblToneMarkLeft(r401_df) + r313_TINY, r313_dblToneMarkRight(r401_df), r313_yOfToneDepart(r313_a, r313_b, r313_pos), r313_OperatorStroke));
                return void 0;
            })), _r313_t33 = _r313_t33 + 1);
            _r313_t37 = _r313_t33 < _r313_t32;
        }
        return _r313_t38;
    });
    return void 0;
});


