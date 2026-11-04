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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Little-Yus", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t11, _r312_t12;
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
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_SLAB = _r312_t1.SLAB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_intersection = _r312_t4.intersection;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_tagged = _r312_t5.tagged;
        var r312_MaskBelow = _r312_t5.MaskBelow;
        var r312_MaskLeft = _r312_t5.MaskLeft;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var r312_xn$withtransform$5sIl = _r312_t5["with-transform"];
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r312_SerifFrame = _r312_t7.SerifFrame;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-A"].resolve();
        var r312_AShape = _r312_t8.AShape;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-Lambda-Delta"].resolve();
        var r312_LambdaShape = _r312_t9.LambdaShape;
        var r312_DeltaShape = _r312_t9.DeltaShape;
        var _r312_t10 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Iotated"].resolve();
        var r312_Iotation = _r312_t10.Iotation;
        var r312_CyrLittleYusShape = function (r319_df, r319_top, r319_straightBar, r319__fine) {
            var _r319_t0, _r319_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var r321_sf, _r321_t0, _r321_t1;
                var r321_fine = r1_fallback(r319__fine, r319_df.adviceThinnerStroke(3.3));
                r321_currentGlyph.include(r312_LambdaShape(new r312_xn$NamedParameterPair$2Lrc9b("df", r319_df), new r312_xn$NamedParameterPair$2Lrc9b("fBarStraight", r319_straightBar), new r312_xn$NamedParameterPair$2Lrc9b("slabKind", 0), new r312_xn$NamedParameterPair$2Lrc9b("top", r319_top), new r312_xn$NamedParameterPair$2Lrc9b("sw", r321_fine)));
                r321_currentGlyph.include(r312_intersection(r312_HBar.t(r319_df.leftSB, r319_df.rightSB, r1_mix(0, r319_top, 0.5), r321_fine), r312_AShape.Mask(r319_df, r319_straightBar ? 1 : 0, r319_top, r321_fine)));
                r321_currentGlyph.include(r312_VBar.m(r319_df.middle, r1_mix(0, r319_top, 0.5), 0, r321_fine));
                if (r312_SLAB) {
                    r321_sf = r312_SerifFrame.fromDf(r319_df, r319_top, 0, new r312_xn$NamedParameterPair$2Lrc9b("swSerif", r321_fine));
                    r321_currentGlyph.include(r312_tagged("serifLB", r321_sf.lb.outer));
                    r321_currentGlyph.include(r312_tagged("serifRB", r321_sf.rb.outer));
                    if (r321_sf.enoughSpaceForFullSerifs) r321_currentGlyph.include(r312_tagged("serifMB", r321_sf.mb.full));
                }
                return void 0;
            });
        };
        var r312_CyrClosedLittleYusShape = function (r334_df, r334_top, r334_straightBar, r334__fine) {
            var _r334_t0, _r334_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                var r336_sf, _r336_t0, _r336_t1;
                var r336_fine = r1_fallback(r334__fine, r334_df.adviceThinnerStroke(2.75));
                r336_currentGlyph.include(r312_DeltaShape(new r312_xn$NamedParameterPair$2Lrc9b("df", r334_df), new r312_xn$NamedParameterPair$2Lrc9b("top", r334_top), new r312_xn$NamedParameterPair$2Lrc9b("bottom", 0), new r312_xn$NamedParameterPair$2Lrc9b("sw", r336_fine), new r312_xn$NamedParameterPair$2Lrc9b("fBarStraight", r334_straightBar), new r312_xn$NamedParameterPair$2Lrc9b("slab", false)));
                r336_currentGlyph.include(r312_intersection(r312_HBar.t(r334_df.leftSB, r334_df.rightSB, r1_mix(0, r334_top, 0.5), r336_fine), r312_AShape.Mask(r334_df, r334_straightBar ? 1 : 0, r334_top, r336_fine)));
                if (r312_SLAB) {
                    r336_sf = r312_SerifFrame.fromDf(r334_df, r334_top, 0, new r312_xn$NamedParameterPair$2Lrc9b("swSerif", r336_fine));
                    r336_currentGlyph.include(r312_tagged("serifLB", r336_sf.lb.outer));
                    r336_currentGlyph.include(r312_tagged("serifRB", r336_sf.rb.outer));
                }
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r350_currentGlyph) {
            var _r350_t0, _r350_t1;
            var r350_df = r350_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r350_currentGlyph.include(r350_df.markSet.capital());
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YusLittle.straight", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r350_currentGlyph, r312_CyrLittleYusShape(r350_df, r312_CAP, true)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YusLittle.curly", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r350_currentGlyph, r312_CyrLittleYusShape(r350_df, r312_CAP, false)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
            var _r359_t0, _r359_t1;
            var r359_df = r359_currentGlyph.include(r312_DivFrame(1, 3));
            r359_currentGlyph.include(r359_df.markSet.e());
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yusLittle.straight", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r359_currentGlyph, r312_CyrLittleYusShape(r359_df, r312_XH, true)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yusLittle.curly", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r359_currentGlyph, r312_CyrLittleYusShape(r359_df, r312_XH, false)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
            var _r368_t0, _r368_t1;
            var r368_df = r368_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 2));
            r368_currentGlyph.include(r368_df.markSet.capital());
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YusLittleClosed.straight", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r368_currentGlyph, r312_CyrClosedLittleYusShape(r368_df, r312_CAP, true)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YusLittleClosed.curly", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r368_currentGlyph, r312_CyrClosedLittleYusShape(r368_df, r312_CAP, false)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
            var _r377_t0, _r377_t1;
            var r377_df = r377_currentGlyph.include(r312_DivFrame(1, 2));
            r377_currentGlyph.include(r377_df.markSet.e());
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yusLittleClosed.straight", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r377_currentGlyph, r312_CyrClosedLittleYusShape(r377_df, r312_XH, true)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yusLittleClosed.curly", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r377_currentGlyph, r312_CyrClosedLittleYusShape(r377_df, r312_XH, false)));
            return void 0;
        }));
        r312_xn$selectvariant$7Hrq("cyrl/YusLittle", 1126, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Yus"));
        r312_xn$selectvariant$7Hrq("cyrl/yusLittle", 1127, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Yus"));
        r312_xn$selectvariant$7Hrq("cyrl/YusLittleClosed", 42584, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Yus"));
        r312_xn$selectvariant$7Hrq("cyrl/yusLittleClosed", 42585, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Yus"));
        var r312_CyrIotatedLittleYusShape = function (r388_fClosed, r388_fCapital, r388_df, r388_top, r388_straightBar) {
            var _r388_t0, _r388_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                var _r390_t0, _r390_t1;
                var r390_scalar = r388_fCapital ? 0.8 : 0.75;
                var r390_fine = r388_df.adviceThinnerStroke(r388_fClosed ? 2.75 : 3.3, r390_scalar);
                var r390_gap = (r388_df.rightSB - r388_df.leftSB) / 3 - (r388_fClosed ? 0 : r390_fine / 3);
                var r390_subDf = r312_DivFrame(Math.min((r388_df.width - r390_gap) / r312_Width, r388_df.adws * r390_scalar), r388_fClosed ? 2 : 3);
                var r390_shift = r388_df.width - r390_subDf.width;
                var r390_xIotaRight = r388_df.leftSB + r312_HSwToV(r390_fine);
                var r390_botGap = Math.max(0.08 * (r388_df.rightSB - r388_df.leftSB), r312_AdviceStroke(6));
                r390_currentGlyph.include(r312_difference(r312_xn$withtransform$5sIl(r312_ApparentTranslate(r390_shift, 0), r388_fClosed ? r312_CyrClosedLittleYusShape(r390_subDf, r388_top, r388_straightBar, r390_fine) : r312_CyrLittleYusShape(r390_subDf, r388_top, r388_straightBar, r390_fine)), r312_intersection(r312_MaskBelow(r390_fine), r312_MaskLeft(r1_mix(r390_xIotaRight, Math.min(r390_subDf.leftSB + r390_shift, r390_xIotaRight + r390_botGap), 0.5)))));
                r390_currentGlyph.include(r312_Iotation.A(r388_df, r388_top, new r312_xn$NamedParameterPair$2Lrc9b("hBarRight", r1_mix(r388_df.leftSB, r388_df.rightSB, 2 / 3)), new r312_xn$NamedParameterPair$2Lrc9b("hBarY", r1_mix(0, r388_top, 0.5) - r390_fine / 2), new r312_xn$NamedParameterPair$2Lrc9b("fCapital", r388_fCapital), new r312_xn$NamedParameterPair$2Lrc9b("swRef", r390_fine)));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r399_currentGlyph) {
            var _r399_t0, _r399_t1;
            var r399_df = r399_currentGlyph.include(r312_DivFrame(r1_mix(1, r312_para.advanceScaleM, 2), 4.25));
            r399_currentGlyph.include(r399_df.markSet.capital());
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YusLittleIotated.straight", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r399_currentGlyph, r312_CyrIotatedLittleYusShape(false, true, r399_df, r312_CAP, true)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YusLittleIotated.curly", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r399_currentGlyph, r312_CyrIotatedLittleYusShape(false, true, r399_df, r312_CAP, false)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r408_currentGlyph) {
            var _r408_t0, _r408_t1;
            var r408_df = r408_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 4.25));
            r408_currentGlyph.include(r408_df.markSet.e());
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yusLittleIotated.straight", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, r312_CyrIotatedLittleYusShape(false, false, r408_df, r312_XH, true)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yusLittleIotated.curly", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r408_currentGlyph, r312_CyrIotatedLittleYusShape(false, false, r408_df, r312_XH, false)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r417_currentGlyph) {
            var _r417_t0, _r417_t1;
            var r417_df = r417_currentGlyph.include(r312_DivFrame(r1_mix(1, r312_para.advanceScaleM, 2), 3.5));
            r417_currentGlyph.include(r417_df.markSet.capital());
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YusLittleClosedIotated.straight", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r417_currentGlyph, r312_CyrIotatedLittleYusShape(true, true, r417_df, r312_CAP, true)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/YusLittleClosedIotated.curly", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r417_currentGlyph, r312_CyrIotatedLittleYusShape(true, true, r417_df, r312_CAP, false)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r426_currentGlyph) {
            var _r426_t0, _r426_t1;
            var r426_df = r426_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3.5));
            r426_currentGlyph.include(r426_df.markSet.e());
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yusLittleClosedIotated.straight", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r426_currentGlyph, r312_CyrIotatedLittleYusShape(true, false, r426_df, r312_XH, true)));
            r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yusLittleClosedIotated.curly", null, new r312_xn$Capture$2Lrc8.ForkGlyphProc(r426_currentGlyph, r312_CyrIotatedLittleYusShape(true, false, r426_df, r312_XH, false)));
            return void 0;
        }));
        r312_xn$selectvariant$7Hrq("cyrl/YusLittleIotated", 1128, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Yus"));
        r312_xn$selectvariant$7Hrq("cyrl/yusLittleIotated", 1129, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Yus"));
        r312_xn$selectvariant$7Hrq("cyrl/YusLittleClosedIotated", 42588, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Yus"));
        return r312_xn$selectvariant$7Hrq("cyrl/yusLittleClosedIotated", 42589, new r312_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Yus"));
    });
    return void 0;
});


