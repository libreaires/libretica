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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Armenian-Hook-Group", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t9, _r313_t10, _r313_t11, _r313_tag12, _r313_t13, _r313_tag14, _r313_t15, _r313_tag16, _r313_t17, _r313_tag18, _r313_t19, _r313_tag20, _r313_t21, _r313_tag22, _r313_t23, _r313_tag24, _r313_t25, _r313_tag26, _r313_t27, _r313_tag28;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Downward = _r313_t1.Downward;
        var r313_Hook = _r313_t1.Hook;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_SLAB = _r313_t1.SLAB;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_ArchDepthAClamped = _r313_t1.ArchDepthAClamped;
        var r313_ArchDepthBClamped = _r313_t1.ArchDepthBClamped;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_VBar = _r313_t5.VBar;
        var r313_HookStart = _r313_t5.HookStart;
        var r313_FlipAround = _r313_t5.FlipAround;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_SerifFrame = _r313_t7.SerifFrame;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Armenian-Shared-Shapes"].resolve();
        var r313_ArmHBar = _r313_t8.ArmHBar;
        var r313_RightHook = function (r318_df, r318_top, r318_bot, r318__sw, r318__hook, r318__ada, r318__adb) {
            var _r318_t0, _r318_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                var _r320_t0, _r320_t1;
                var r320_sw = r1_fallback(r318__sw, r318_df.mvs);
                var r320_hook = r1_fallback(r318__hook, r313_Hook);
                var r320_ada = r1_fallback(r318__ada, r313_ArchDepthA);
                var r320_adb = r1_fallback(r318__adb, r313_ArchDepthB);
                var r320_yMidLeft = r318_top - r313_ArchDepthAClamped(r318_top, r318_bot, r320_ada, r320_adb);
                r320_currentGlyph.include(r313_dispiro(r313_widths.lhs(r320_sw), r313_g4(r318_df.rightSB, r318_top - r320_hook), r313_HookStart(r318_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r320_sw)), r313_flat(r318_df.leftSB, r320_yMidLeft), r313_curl(r318_df.leftSB, r318_bot, r313_heading(r313_Downward))));
                return void 0;
            });
        };
        var r313_LeftHook = function (r323_df, r323_top, r323_bot, r323__sw, r323__hook, r323__ada, r323__adb) {
            var _r323_t0, _r323_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                var _r325_t0, _r325_t1;
                var r325_sw = r1_fallback(r323__sw, r323_df.mvs);
                var r325_hook = r1_fallback(r323__hook, r313_Hook);
                var r325_ada = r1_fallback(r323__ada, r313_ArchDepthA);
                var r325_adb = r1_fallback(r323__adb, r313_ArchDepthB);
                var r325_yMidRight = r323_top - r313_ArchDepthBClamped(r323_top, r323_bot, r325_ada, r325_adb);
                r325_currentGlyph.include(r313_dispiro(r313_widths.rhs(r325_sw), r313_g4(r323_df.leftSB, r323_top - r325_hook), r313_HookStart(r323_top, new r313_xn$NamedParameterPair$2Lrc9b("sw", r325_sw)), r313_flat(r323_df.rightSB, r325_yMidRight), r313_curl(r323_df.rightSB, r323_bot, r313_heading(r313_Downward))));
                return void 0;
            });
        };
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Ben", 1330, new r313_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                var r332_sf, _r332_t0, _r332_t1;
                var r332_df = r332_currentGlyph.include(r313_DivFrame(1));
                r332_currentGlyph.include(r332_df.markSet.capital());
                r332_currentGlyph.include(r313_RightHook(r332_df, r313_CAP, 0, r332_df.mvs));
                r332_currentGlyph.include(r313_ArmHBar.normal(r332_df).mid());
                if (r313_SLAB) {
                    r332_sf = r313_SerifFrame.fromDf(r332_df, r313_CAP, 0);
                    r332_currentGlyph.include(r332_sf.lb.full);
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Da", 1332, new r313_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                var r342_sf, _r342_t0, _r342_t1;
                var r342_df = r342_currentGlyph.include(r313_DivFrame(1));
                r342_currentGlyph.include(r342_df.markSet.capital());
                r342_currentGlyph.include(r313_LeftHook(r342_df, r313_CAP, 0, r342_df.mvs));
                r342_currentGlyph.include(r313_ArmHBar.right(r342_df).mid());
                if (r313_SLAB) {
                    r342_sf = r313_SerifFrame.fromDf(r342_df, r313_CAP, 0);
                    r342_currentGlyph.include(r342_sf.rb.full);
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Ech", 1333, new r313_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                var r352_sf, _r352_t0, _r352_t1;
                var r352_df = r352_currentGlyph.include(r313_DivFrame(1));
                r352_currentGlyph.include(r352_df.markSet.capital());
                r352_currentGlyph.include(r313_LeftHook(r352_df, r313_CAP, 0, r352_df.mvs));
                r352_currentGlyph.include(r313_FlipAround(r352_df.middle, r313_CAP / 2));
                r352_currentGlyph.include(r313_ArmHBar.normal(r352_df).high());
                if (r313_SLAB) {
                    r352_sf = r313_SerifFrame.fromDf(r352_df, r313_CAP, 0);
                    r352_currentGlyph.include(r352_sf.lt.full);
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Et", 1336, new r313_xn$Capture$2Lrc8.GlyphProc(function (r363_currentGlyph) {
                var r363_sf, _r363_t0, _r363_t1;
                var r363_df = r363_currentGlyph.include(r313_DivFrame(1));
                r363_currentGlyph.include(r363_df.markSet.capital());
                r363_currentGlyph.include(r313_RightHook(r363_df, r313_CAP, 0, r363_df.mvs));
                r363_currentGlyph.include(r313_ArmHBar.normal(r363_df).base());
                if (r313_SLAB) {
                    r363_sf = r313_SerifFrame.fromDf(r363_df, r313_CAP, 0);
                    r363_currentGlyph.include(r363_sf.lb.outer);
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Ghat", 1346, new r313_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                var r373_sf, _r373_t0, _r373_t1;
                var r373_df = r373_currentGlyph.include(r313_DivFrame(1));
                r373_currentGlyph.include(r373_df.markSet.capital());
                r373_currentGlyph.include(r313_LeftHook(r373_df, r313_CAP, 0, r373_df.mvs));
                r373_currentGlyph.include(r313_ArmHBar.right(r373_df).base());
                if (r313_SLAB) {
                    r373_sf = r313_SerifFrame.fromDf(r373_df, r313_CAP, 0);
                    r373_currentGlyph.include(r373_sf.rb.full);
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Nu", 1350, new r313_xn$Capture$2Lrc8.GlyphProc(function (r383_currentGlyph) {
                var r383_sf, _r383_t0, _r383_t1;
                var r383_df = r383_currentGlyph.include(r313_DivFrame(1));
                r383_currentGlyph.include(r383_df.markSet.capital());
                r383_currentGlyph.include(r313_LeftHook(r383_df, r313_CAP, 0, r383_df.mvs));
                r383_currentGlyph.include(r313_FlipAround(r383_df.middle, r313_CAP / 2));
                r383_currentGlyph.include(r313_ArmHBar.left(r383_df).cap());
                if (r313_SLAB) {
                    r383_sf = r313_SerifFrame.fromDf(r383_df, r313_CAP, 0);
                    r383_currentGlyph.include(r383_sf.lt.full);
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Peh", 1354, new r313_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                var r394_sf, _r394_t0, _r394_t1;
                var r394_df = r394_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleM, 3));
                r394_currentGlyph.include(r394_df.markSet.capital());
                r394_currentGlyph.include(r313_LeftHook(r394_df, r313_CAP, 0, r394_df.mvs, r313_Hook, r394_df.archDepthA, r394_df.archDepthB));
                r394_currentGlyph.include(r313_VBar.m(r394_df.middle, r313_XH / 2, r313_CAP - 0.5 * r394_df.mvs, r394_df.mvs));
                if (r313_SLAB) {
                    r394_sf = r313_SerifFrame.fromDf(r394_df, r313_CAP, 0);
                    r394_currentGlyph.include(r394_sf.rb.full);
                }
                return void 0;
            }));
        })();
        (function () {
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Reh", 1360, new r313_xn$Capture$2Lrc8.GlyphProc(function (r404_currentGlyph) {
                var r404_sf, _r404_t0, _r404_t1;
                var r404_df = r404_currentGlyph.include(r313_DivFrame(1));
                r404_currentGlyph.include(r404_df.markSet.capital());
                r404_currentGlyph.include(r313_RightHook(r404_df, r313_CAP, 0, r404_df.mvs));
                if (r313_SLAB) {
                    r404_sf = r313_SerifFrame.fromDf(r404_df, r313_CAP, 0);
                    r404_currentGlyph.include(r404_sf.lb.full);
                }
                return void 0;
            }));
        })();
        return (function () {
            var _r410_t0 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
            var r410_LetterBarOverlay = _r410_t0.LetterBarOverlay;
            return r313_xn$GlyphSaveSink$2Lrc4b.save("armn/Dram", 1423, new r313_xn$Capture$2Lrc8.GlyphProc(function (r414_currentGlyph) {
                var r414_sf, _r414_t0, _r414_t1;
                var r414_df = r414_currentGlyph.include(r313_DivFrame(1));
                r414_currentGlyph.include(r414_df.markSet.capital());
                r414_currentGlyph.include(r313_LeftHook(r414_df, r313_CAP, 0, r414_df.mvs));
                r414_currentGlyph.include(r410_LetterBarOverlay.r(r414_df.rightSB, r313_CAP * 0.37));
                r414_currentGlyph.include(r410_LetterBarOverlay.r(r414_df.rightSB, r313_CAP * 0.6 - r313_OverlayStroke * 0.25));
                if (r313_SLAB) {
                    r414_sf = r313_SerifFrame.fromDf(r414_df, r313_CAP, 0);
                    r414_currentGlyph.include(r414_sf.rb.full);
                }
                return void 0;
            }));
        })();
    });
    return void 0;
});


