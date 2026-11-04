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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Sha", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t9, _r312_t10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_SLAB = _r312_t1.SLAB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_alias = _r312_t6.alias;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_RightwardTailedBar = _r312_t7.RightwardTailedBar;
        var r312_SerifFrame = _r312_t7.SerifFrame;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_CyrDescender = _r312_t8.CyrDescender;
        var r312_CyrCurlDescender = _r312_t8.CyrCurlDescender;
        r312_xn$ExportCapture$2Lrc4b(function () {
            var _r318_t0, _r318_t1;
            return {
                "CyrShaShape": r312_CyrShaShape
            };
        });
        var r312_CyrShaShape = function () {
            var _r319_t5;
            var _r319_t6 = arguments;
            var r319_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r319_t6, 0);
            var _r319_t0 = [];
            var _r319_t1 = 0;
            while (_r319_t1 < r319_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r319_xn$flexarguments$2Lrc7uIe5[_r319_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r319_t0.push(r319_xn$flexarguments$2Lrc7uIe5[_r319_t1]);
                _r319_t1 = _r319_t1 + 1;
            }
            var _r319_t2 = r319_xn$flexarguments$2Lrc7uIe5;
            var _r319_t3 = _r319_t2.length;
            var _r319_t4 = 0;
            while (_r319_t4 < _r319_t3) {
                _r319_t1 = _r319_t2[_r319_t4];
                if (_r319_t1 && _r319_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "df") r319_df = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "top") r319_top = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "bot") r319_bot = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "fine") r319_fine = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "doSerif") r319_doSerif = _r319_t1.right;
                if (_r319_t1 && _r319_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r319_t1.left === "fInv") r319_fInv = _r319_t1.right;
                _r319_t4 = _r319_t4 + 1;
            }
            var r319_df = r1_fallback(r319_df, _r319_t0[0]);
            var r319_top = r1_fallback(r319_top, _r319_t0[1]);
            var r319_bot = r1_fallback(r319_bot, _r319_t0[2]);
            var r319_fine = r1_fallback(r319_fine, _r319_t0[3], r312_Stroke);
            var r319_doSerif = r1_fallback(r319_doSerif, _r319_t0[4], false);
            var r319_fInv = r1_fallback(r319_fInv, _r319_t0[5], false);
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                var r325_sf, _r325_t0, _r325_t1;
                var r325_cofine = r319_fine * r319_df.mvs / r312_Stroke;
                r325_currentGlyph.include(r312_union((r319_fInv ? r312_HBar.t : r312_HBar.b)(r319_df.leftSB, r319_df.rightSB, r319_fInv ? r319_top : r319_bot, r319_fine), r312_VBar.l(r319_df.leftSB, r319_bot, r319_top, r325_cofine), r312_VBar.r(r319_df.rightSB, r319_bot, r319_top, r325_cofine), r312_VBar.m(r319_df.middle, r319_bot, r319_top, r325_cofine)));
                if (r319_doSerif) {
                    r325_sf = r312_SerifFrame.fromDf(r319_df, r319_top, r319_bot, new r312_xn$NamedParameterPair$2Lrc9b("swSerif", r325_cofine));
                    if (r319_fInv) {
                        r325_currentGlyph.include(new r312_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                            var _r330_t0, _r330_t1;
                            r330_currentGlyph.include(r325_sf.lt.outer, true, true);
                            r330_currentGlyph.include(r325_sf.rt.outer);
                            return void 0;
                        }));
                        r325_currentGlyph.include(r325_sf.enoughSpaceForFullSerifs ? new r312_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                            var _r335_t0, _r335_t1;
                            r335_currentGlyph.include(r325_sf.lb.full, true, true);
                            r335_currentGlyph.include(r325_sf.mb.full);
                            r335_currentGlyph.include(r325_sf.rb.full);
                            return void 0;
                        }) : new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                            var _r340_t0, _r340_t1;
                            r340_currentGlyph.include(r325_sf.lb.outer, true, true);
                            r340_currentGlyph.include(r325_sf.rb.outer);
                            return void 0;
                        }));
                    } else {
                        r325_currentGlyph.include(new r312_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                            var _r345_t0, _r345_t1;
                            r345_currentGlyph.include(r325_sf.lb.outer, true, true);
                            r345_currentGlyph.include(r325_sf.rb.outer);
                            return void 0;
                        }));
                        r325_currentGlyph.include(r325_sf.enoughSpaceForFullSerifs ? new r312_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
                            var _r350_t0, _r350_t1;
                            r350_currentGlyph.include(r325_sf.lt.full, true, true);
                            r350_currentGlyph.include(r325_sf.mt.full);
                            r350_currentGlyph.include(r325_sf.rt.full);
                            return void 0;
                        }) : new r312_xn$Capture$2Lrc8.GlyphProc(function (r355_currentGlyph) {
                            var _r355_t0, _r355_t1;
                            r355_currentGlyph.include(r325_sf.lt.outer, true, true);
                            r355_currentGlyph.include(r325_sf.rt.outer);
                            return void 0;
                        }));
                    }
                }
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Sha", 1064, new r312_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
            var _r360_t0, _r360_t1;
            var r360_df = r360_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r360_currentGlyph.include(r360_df.markSet.capital());
            r360_currentGlyph.include(r312_CyrShaShape(r360_df, r312_CAP, 0, new r312_xn$NamedParameterPair$2Lrc9b("doSerif", r312_SLAB)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/sha.upright", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r367_currentGlyph) {
            var _r367_t0, _r367_t1;
            var r367_df = r367_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r367_currentGlyph.include(r367_df.markSet.e());
            r367_currentGlyph.include(r312_CyrShaShape(r367_df, r312_XH, 0, new r312_xn$NamedParameterPair$2Lrc9b("doSerif", r312_SLAB)));
            return void 0;
        }));
        r312_alias("cyrl/sha/reduced.upright", null, "cyrl/sha.upright");
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/teThreeLeg.upright", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r374_currentGlyph) {
            var _r374_t0, _r374_t1;
            var r374_df = r374_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r374_currentGlyph.include(r374_df.markSet.e());
            r374_currentGlyph.include(r312_CyrShaShape(r374_df, r312_XH, 0, new r312_xn$NamedParameterPair$2Lrc9b("doSerif", r312_SLAB), new r312_xn$NamedParameterPair$2Lrc9b("fInv", true)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("smcpTurnmCap", 43002, new r312_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
            var _r382_t0, _r382_t1;
            var r382_df = r382_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r382_currentGlyph.include(r382_df.markSet.e());
            r382_currentGlyph.include(r312_CyrShaShape(r382_df, r312_XH, 0, new r312_xn$NamedParameterPair$2Lrc9b("doSerif", r312_SLAB)));
            return void 0;
        }));
        var r312_CyrShchaShape = function () {
            var _r387_t5;
            var _r387_t6 = arguments;
            var r387_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r387_t6, 0);
            var _r387_t0 = [];
            var _r387_t1 = 0;
            while (_r387_t1 < r387_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r387_xn$flexarguments$2Lrc7uIe5[_r387_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r387_t0.push(r387_xn$flexarguments$2Lrc7uIe5[_r387_t1]);
                _r387_t1 = _r387_t1 + 1;
            }
            var _r387_t2 = r387_xn$flexarguments$2Lrc7uIe5;
            var _r387_t3 = _r387_t2.length;
            var _r387_t4 = 0;
            while (_r387_t4 < _r387_t3) {
                _r387_t1 = _r387_t2[_r387_t4];
                if (_r387_t1 && _r387_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r387_t1.left === "df") r387_df = _r387_t1.right;
                if (_r387_t1 && _r387_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r387_t1.left === "top") r387_top = _r387_t1.right;
                if (_r387_t1 && _r387_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r387_t1.left === "bot") r387_bot = _r387_t1.right;
                if (_r387_t1 && _r387_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r387_t1.left === "fine") r387_fine = _r387_t1.right;
                if (_r387_t1 && _r387_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r387_t1.left === "doSerif") r387_doSerif = _r387_t1.right;
                _r387_t4 = _r387_t4 + 1;
            }
            var r387_df = r1_fallback(r387_df, _r387_t0[0]);
            var r387_top = r1_fallback(r387_top, _r387_t0[1]);
            var r387_bot = r1_fallback(r387_bot, _r387_t0[2]);
            var r387_fine = r1_fallback(r387_fine, _r387_t0[3], r312_Stroke);
            var r387_doSerif = r1_fallback(r387_doSerif, _r387_t0[4], false);
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r393_currentGlyph) {
                var _r393_t0, _r393_t1;
                var r393_cofine = r387_fine * r387_df.mvs / r312_Stroke;
                r393_currentGlyph.include(r312_CyrShaShape(r387_df, r387_top, r387_bot, new r312_xn$NamedParameterPair$2Lrc9b("fine", r387_fine), new r312_xn$NamedParameterPair$2Lrc9b("doSerif", r387_doSerif)));
                r393_currentGlyph.include(r312_CyrDescender.rSideJut(r387_df.rightSB, r387_bot, new r312_xn$NamedParameterPair$2Lrc9b("refSw", r393_cofine)));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Shcha", 1065, new r312_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
            var _r401_t0, _r401_t1;
            var r401_df = r401_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r401_currentGlyph.include(r401_df.markSet.capital());
            r401_currentGlyph.include(r312_CyrShchaShape(r401_df, r312_CAP, 0, new r312_xn$NamedParameterPair$2Lrc9b("doSerif", r312_SLAB)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/shcha.upright", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r408_currentGlyph) {
            var _r408_t0, _r408_t1;
            var r408_df = r408_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r408_currentGlyph.include(r408_df.markSet.e());
            r408_currentGlyph.include(r312_CyrShchaShape(r408_df, r312_XH, 0, new r312_xn$NamedParameterPair$2Lrc9b("doSerif", r312_SLAB)));
            return void 0;
        }));
        r312_alias("cyrl/shcha/reduced.upright", null, "cyrl/shcha.upright");
        var r312_CyrShweShape = function () {
            var _r413_t5;
            var _r413_t6 = arguments;
            var r413_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r413_t6, 0);
            var _r413_t0 = [];
            var _r413_t1 = 0;
            while (_r413_t1 < r413_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r413_xn$flexarguments$2Lrc7uIe5[_r413_t1] instanceof r312_xn$NamedParameterPair$2Lrc9b)) _r413_t0.push(r413_xn$flexarguments$2Lrc7uIe5[_r413_t1]);
                _r413_t1 = _r413_t1 + 1;
            }
            var _r413_t2 = r413_xn$flexarguments$2Lrc7uIe5;
            var _r413_t3 = _r413_t2.length;
            var _r413_t4 = 0;
            while (_r413_t4 < _r413_t3) {
                _r413_t1 = _r413_t2[_r413_t4];
                if (_r413_t1 && _r413_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r413_t1.left === "df") r413_df = _r413_t1.right;
                if (_r413_t1 && _r413_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r413_t1.left === "top") r413_top = _r413_t1.right;
                if (_r413_t1 && _r413_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r413_t1.left === "bot") r413_bot = _r413_t1.right;
                if (_r413_t1 && _r413_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r413_t1.left === "fine") r413_fine = _r413_t1.right;
                if (_r413_t1 && _r413_t1 instanceof r312_xn$NamedParameterPair$2Lrc9b && _r413_t1.left === "doSerif") r413_doSerif = _r413_t1.right;
                _r413_t4 = _r413_t4 + 1;
            }
            var r413_df = r1_fallback(r413_df, _r413_t0[0]);
            var r413_top = r1_fallback(r413_top, _r413_t0[1]);
            var r413_bot = r1_fallback(r413_bot, _r413_t0[2]);
            var r413_fine = r1_fallback(r413_fine, _r413_t0[3], r312_Stroke);
            var r413_doSerif = r1_fallback(r413_doSerif, _r413_t0[4], false);
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r419_currentGlyph) {
                var _r419_t0, _r419_t1;
                var r419_cofine = r413_fine * r413_df.mvs / r312_Stroke;
                r419_currentGlyph.include(r312_CyrShaShape(r413_df, r413_top, r413_bot, new r312_xn$NamedParameterPair$2Lrc9b("fine", r413_fine), new r312_xn$NamedParameterPair$2Lrc9b("doSerif", r413_doSerif)));
                r419_currentGlyph.include(r312_CyrCurlDescender.rSideJut(r413_df.rightSB, r413_bot, new r312_xn$NamedParameterPair$2Lrc9b("refSw", r419_cofine)));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Shwe", 42646, new r312_xn$Capture$2Lrc8.GlyphProc(function (r427_currentGlyph) {
            var _r427_t0, _r427_t1;
            var r427_df = r427_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r427_currentGlyph.include(r427_df.markSet.capDesc());
            r427_currentGlyph.include(r312_CyrShweShape(r427_df, r312_CAP, 0, new r312_xn$NamedParameterPair$2Lrc9b("doSerif", r312_SLAB)));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/shwe.upright", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r434_currentGlyph) {
            var _r434_t0, _r434_t1;
            var r434_df = r434_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r434_currentGlyph.include(r434_df.markSet.p());
            r434_currentGlyph.include(r312_CyrShweShape(r434_df, r312_XH, 0, new r312_xn$NamedParameterPair$2Lrc9b("doSerif", r312_SLAB)));
            return void 0;
        }));
    });
    return void 0;
});


