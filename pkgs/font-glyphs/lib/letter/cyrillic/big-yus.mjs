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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Big-Yus", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t9, _r312_t10;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_CAP = _r312_t1.CAP;
        var r312_XH = _r312_t1.XH;
        var r312_Translate = _r312_t1.Translate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_O = _r312_t1.O;
        var r312_SLAB = _r312_t1.SLAB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_corner = _r312_t2.corner;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_tagged = _r312_t5.tagged;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_SerifFrame = _r312_t7.SerifFrame;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Iotated"].resolve();
        var r312_Iotation = _r312_t8.Iotation;
        var r312_BigYusLegMaskShape = function (r317_df, r317_top, r317_pyBar, r317__fine) {
            var _r317_t0, _r317_t1;
            var r317_fine = r1_fallback(r317__fine, r317_df.adviceThinnerStroke(3.3));
            var r317_xMid = r1_mix(r317_df.leftSB, r317_df.middle, 0.3);
            var r317_yBar = r1_mix(0, r317_top, r317_pyBar);
            return r312_xn$spirooutline$1aao(r312_corner(r317_df.leftSB + r312_O * 2, 0), r312_corner(r317_df.width - (r317_df.leftSB + r312_O * 2), 0), r312_corner(r317_df.width - r317_xMid, r317_yBar), r312_corner(r317_xMid, r317_yBar));
        };
        var r312_CyrBigYusShape = function (r318_df, r318_top, r318_pyBar, r318__fine) {
            var _r318_t0, _r318_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                var r320_sf, _r320_t0, _r320_t1;
                var r320_fine = r1_fallback(r318__fine, r318_df.adviceThinnerStroke(3.3));
                var r320_xMid = r1_mix(r318_df.leftSB, r318_df.middle, 0.3);
                var r320_xMid2 = Math.min(r318_df.middle - r312_HSwToV(r320_fine), r1_mix(r318_df.leftSB, r318_df.middle, 0.75));
                var r320_yBar = r1_mix(0, r318_top, r318_pyBar);
                r320_currentGlyph.include(r312_union(r312_xn$spirooutline$1aao(r312_corner(0 + (r318_df.leftSB + r312_O * 2) + 0, 0), r312_corner(0 + (r318_df.leftSB + r312_O * 2) + r312_HSwToV(r320_fine), 0), r312_corner(0 + r320_xMid + r312_HSwToV(r320_fine), r320_yBar), r312_corner(0 + r320_xMid + 0, r320_yBar)), r312_xn$spirooutline$1aao(r312_corner(0 + r320_xMid2 + r312_HSwToV(r320_fine), r320_yBar), r312_corner(0 + (r318_df.leftSB + r312_O * 2) + r312_HSwToV(r320_fine), r318_top), r312_corner(0 + (r318_df.leftSB + r312_O * 2) + 0, r318_top), r312_corner(0 + r320_xMid2 + 0, r320_yBar)), r312_xn$spirooutline$1aao(r312_corner(r318_df.width - (r318_df.leftSB + r312_O * 2) - 0, 0), r312_corner(r318_df.width - (r318_df.leftSB + r312_O * 2) - r312_HSwToV(r320_fine), 0), r312_corner(r318_df.width - r320_xMid - r312_HSwToV(r320_fine), r320_yBar), r312_corner(r318_df.width - r320_xMid - 0, r320_yBar)), r312_xn$spirooutline$1aao(r312_corner(r318_df.width - r320_xMid2 - r312_HSwToV(r320_fine), r320_yBar), r312_corner(r318_df.width - (r318_df.leftSB + r312_O * 2) - r312_HSwToV(r320_fine), r318_top), r312_corner(r318_df.width - (r318_df.leftSB + r312_O * 2) - 0, r318_top), r312_corner(r318_df.width - r320_xMid2 - 0, r320_yBar)), r312_HBar.t(r320_xMid, r318_df.width - r320_xMid, r320_yBar, r320_fine), r312_HBar.t(0 + (r318_df.leftSB + r312_O * 2) + r312_HSwToV(0.99 * r320_fine), r318_df.width - (r318_df.leftSB + r312_O * 2) - r312_HSwToV(0.99 * r320_fine), r318_top, r320_fine)));
                r320_currentGlyph.include(r312_tagged("barM", r312_VBar.m(r318_df.middle, 0, r320_yBar, r320_fine)));
                if (r312_SLAB) {
                    r320_sf = r312_SerifFrame.fromDf(r318_df, r318_top, 0, new r312_xn$NamedParameterPair$2Lrc9b("swSerif", r320_fine));
                    r320_currentGlyph.include(r312_tagged("serifLB", r320_sf.lb.outer));
                    r320_currentGlyph.include(r312_tagged("serifRB", r320_sf.rb.outer));
                    if (r320_sf.enoughSpaceForFullSerifs) r320_currentGlyph.include(r312_tagged("serifMB", r320_sf.mb.full));
                }
                return void 0;
            });
        };
        var r312_CyrBlendedYusShape = function (r327_df, r327_top, r327_pyBar, r327_pyBar2, r327__fine) {
            var _r327_t0, _r327_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r329_currentGlyph) {
                var _r329_t0, _r329_t1;
                var r329_fine = r1_fallback(r327__fine, r327_df.adviceThinnerStroke(3.3));
                r329_currentGlyph.include(r312_CyrBigYusShape(r327_df, r327_top, r327_pyBar, r329_fine));
                r329_currentGlyph.ejectTagged("barM");
                var r329_yBar2 = r1_mix(0, r1_mix(0, r327_top, r327_pyBar), r327_pyBar2);
                r329_currentGlyph.include(r312_tagged("barM", r312_VBar.m(r327_df.middle, 0, r329_yBar2, r329_fine)));
                r329_currentGlyph.include(r312_intersection(r312_HBar.t(r327_df.leftSB, r327_df.rightSB, r329_yBar2, r329_fine), r312_BigYusLegMaskShape(r327_df, r327_top, r327_pyBar, r329_fine)));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YusBig", 1130, new r312_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
            var _r336_t0, _r336_t1;
            var r336_df = r336_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r336_currentGlyph.include(r336_df.markSet.capital());
            r336_currentGlyph.include(r312_CyrBigYusShape(r336_df, r312_CAP, 0.575));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yusBig", 1131, new r312_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
            var _r342_t0, _r342_t1;
            var r342_df = r342_currentGlyph.include(r312_DivFrame(1, 3));
            r342_currentGlyph.include(r342_df.markSet.e());
            r342_currentGlyph.include(r312_CyrBigYusShape(r342_df, r312_XH, 0.55));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YusBlended", 42586, new r312_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
            var _r348_t0, _r348_t1;
            var r348_df = r348_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r348_currentGlyph.include(r348_df.markSet.capital());
            r348_currentGlyph.include(r312_CyrBlendedYusShape(r348_df, r312_CAP, 0.65, 0.65));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yusBlended", 42587, new r312_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
            var _r354_t0, _r354_t1;
            var r354_df = r354_currentGlyph.include(r312_DivFrame(1, 3));
            r354_currentGlyph.include(r354_df.markSet.e());
            r354_currentGlyph.include(r312_CyrBlendedYusShape(r354_df, r312_XH, 0.625, 0.65));
            return void 0;
        }));
        var r312_CyrIotatedBigYusShape = function (r358_fCapital, r358_df, r358_top, r358_pyBar) {
            var _r358_t0, _r358_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r360_currentGlyph) {
                var _r360_t0, _r360_t1;
                var r360_scalar = r358_fCapital ? 0.8 : 0.75;
                var r360_fine = r358_df.adviceThinnerStroke(3.3, r360_scalar);
                var r360_gap = (r358_df.rightSB - r358_df.leftSB) / 3 - r360_fine / 3;
                var r360_subDf = r312_DivFrame(Math.min((r358_df.width - r360_gap) / r312_Width, r358_df.adws * r360_scalar), 3);
                r360_currentGlyph.include(r312_CyrBigYusShape(r360_subDf, r358_top, r358_pyBar, r360_fine));
                r360_currentGlyph.include(r312_Translate(r358_df.width - r360_subDf.width, 0));
                r360_currentGlyph.include(r312_Iotation.outer(r358_df, r358_top, new r312_xn$NamedParameterPair$2Lrc9b("hBarRight", r1_mix(r358_df.leftSB, r358_df.rightSB, 2 / 3)), new r312_xn$NamedParameterPair$2Lrc9b("hBarY", r1_mix(0, r358_top, r358_pyBar) - r360_fine / 2), new r312_xn$NamedParameterPair$2Lrc9b("fCapital", r358_fCapital), new r312_xn$NamedParameterPair$2Lrc9b("swRef", r360_fine)));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YusBigIotated", 1132, new r312_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
            var _r370_t0, _r370_t1;
            var r370_df = r370_currentGlyph.include(r312_DivFrame(r1_mix(1, r312_para.advanceScaleM, 2), 4.25));
            r370_currentGlyph.include(r370_df.markSet.capital());
            r370_currentGlyph.include(r312_CyrIotatedBigYusShape(true, r370_df, r312_CAP, 0.575));
            return void 0;
        }));
        return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yusBigIotated", 1133, new r312_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
            var _r376_t0, _r376_t1;
            var r376_df = r376_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 4.25));
            r376_currentGlyph.include(r376_df.markSet.e());
            r376_currentGlyph.include(r312_CyrIotatedBigYusShape(false, r376_df, r312_XH, 0.55));
            return void 0;
        }));
    });
    return void 0;
});


