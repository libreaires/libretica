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
var r1_strokeOffset = _r1_t8.strokeOffset;
var _r1_t9 = _s0_t1;
var r1_DependentSelector = _r1_t9.DependentSelector;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Lower-Sha-Group", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11, _r313_t12, _r313_tag13, _r313_t14, _r313_tag15;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HVContrast = _r313_t1.HVContrast;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_OX = _r313_t1.OX;
        var r313_SHook = _r313_t1.SHook;
        var r313_Jut = _r313_t1.Jut;
        var r313_StrokeWidthBlend = _r313_t1.StrokeWidthBlend;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_straight = _r313_t2.straight;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HookStart = _r313_t5.HookStart;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Armenian-Shared-Shapes"].resolve();
        var r313_ArmHBar = _r313_t7.ArmHBar;
        var r313_barPos = r313_XH / 2;
        var r313_highBarPos = r313_XH;
        var r313_jut = r313_Jut;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r318_t0, _r318_t1;
            return {
                "TwoNeck": r313_TwoNeck
            };
        });
        var r313_TwoNeck = function (r319_df, r319_top, r319_bot, r319__left, r319__right, r319__adb, r319__flatp) {
            var _r319_t0, _r319_t1;
            var r319_adb = r1_fallback(r319__adb, r313_SmallArchDepthB);
            var r319_flatp = r1_fallback(r319__flatp, 0.75);
            var r319_left = r1_fallback(r319__left, r319_df.leftSB);
            var r319_right = r1_fallback(r319__right, r319_df.rightSB);
            var r319_refY = r319_top - r319_adb * 1.5 - r319_df.mvs / 2 * (1 - r313_TanSlope);
            return [r313_g4.down.mid(r319_right, r319_top - r319_adb), r313_flat(r1_mix(r319_left, r319_right, r319_flatp), r1_mix(r319_bot + r319_df.mvs, r319_refY, r319_flatp)), r313_curl(r319_left, r319_bot + r319_df.mvs, r313_widths.lhs(r319_df.mvs))];
        };
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/sha", 1399, new r313_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var _r324_t0, _r324_t1;
                var r324_df = r324_currentGlyph.include(r313_DivFrame(1));
                r324_currentGlyph.include(r324_df.markSet.p());
                r324_currentGlyph.include(r313_dispiro(r313_widths.rhs(r324_df.mvs), r313_g4(r324_df.leftSB, r313_XH - r313_SHook), r313_HookStart(r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("sw", r324_df.mvs)), r313_TwoNeck(r324_df, r313_XH, r313_Descender)));
                r324_currentGlyph.include(r313_ArmHBar.normal(r324_df).desc());
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/cha", 1401, new r313_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                var _r334_t0, _r334_t1;
                var r334_df = r334_currentGlyph.include(r313_DivFrame(1));
                r334_currentGlyph.include(r334_df.markSet.p());
                var r334_x1 = r1_mix(r334_df.leftSB, r334_df.rightSB, 0.1);
                var r334_x2 = r1_mix(r334_df.leftSB, r334_df.rightSB, 0.9);
                var r334_y2 = r313_barPos - r334_df.mvs / 2;
                r334_currentGlyph.include(r313_dispiro(r313_widths.lhs(r334_df.mvs), r313_flat(r334_x1, r313_XH, r313_heading(r313_Downward)), r313_curl(r334_x1, Math.min(r334_y2 + 0.8 * r313_SmallArchDepthB, r313_XH - r313_TINY), r313_heading(r313_Downward)), r313_arcvh(), r313_flat(r334_df.middle + r313_HSwToV(0.2 * r334_df.mvs), r334_y2), r313_curl(r334_x2, r334_y2, r313_heading(r313_Rightward))));
                r334_currentGlyph.include(r313_dispiro(r313_widths.rhs(r334_df.mvs), r313_flat(r334_x2, r334_y2), r313_curl(r334_df.leftSB, r313_Descender + r334_df.mvs, r313_widths.lhs(r334_df.mvs))));
                r334_currentGlyph.include(r313_ArmHBar.normal(r334_df).desc());
                return void 0;
            }));
        })();
        return (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/jheh", 1403, new r313_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                var _r344_t0, _r344_t1, _r344_t2;
                var r344_df = r344_currentGlyph.include(r313_DivFrame(1));
                r344_currentGlyph.include(r344_df.markSet.p());
                var r344_refY = r313_XH - r313_SmallArchDepthB * 1.5 - r344_df.mvs / 2 * (1 - r313_TanSlope);
                var r344_x1 = r344_df.middle + r313_HSwToV(r313_StrokeWidthBlend(0, 0.4) * r344_df.mvs);
                var r344_y1 = r1_mix(r313_Descender + r344_df.mvs, r344_refY, r313_StrokeWidthBlend(0.65, 0.7));
                r344_currentGlyph.include((_r344_t0 = r313_XH - 0.875 * r313_SmallArchDepthA, r313_dispiro(r313_widths.lhs(r344_df.mvs), r313_straight.up.start(r344_x1, r344_y1, r313_heading(r313_Upward)), r313_g4(r1_mix(r344_x1, r344_df.leftSB, 0.5), r1_mix(r344_y1, _r344_t0, 0.5), r313_widths.center(r344_df.mvs)), r313_g4.up.mid(r344_df.leftSB + r313_OX, _r344_t0, r313_widths.rhs(r344_df.mvs)), r313_Arch.rhs(r313_XH, new r313_xn$NamedParameterPair$2Lrc9b("sw", r344_df.mvs)), r313_TwoNeck(r344_df, r313_XH, r313_Descender))));
                var r344_dx = r344_df.leftSB - r344_df.rightSB;
                var r344_dy = r313_Descender + r344_df.mvs - r344_refY;
                var r344_rhs = r1_strokeOffset(r344_df.rightSB, r344_refY, r344_dx, r344_dy, r344_df.mvs, r313_HVContrast);
                var r344_joinX = r1_mix(r344_df.leftSB, r344_rhs.x, 0.2);
                var r344_joinY = r1_mix(r313_Descender + r344_df.mvs, r344_rhs.y, 0.2);
                r344_currentGlyph.include(r313_dispiro(r313_widths.lhs(r344_df.mvs), r313_straight.down.start(r344_x1 - r313_HSwToV(r344_df.mvs), r344_y1, r313_heading(r313_Downward)), r313_flat(r344_joinX, r344_joinY, r313_widths.lhs(r344_df.shoulderFine)), r313_curl(r344_df.leftSB, r313_Descender + r344_df.mvs)));
                r344_currentGlyph.include(r313_ArmHBar.normal(r344_df).desc());
                return void 0;
            }));
        })();
    });
    return void 0;
});


