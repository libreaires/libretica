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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Yu", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var r312_suffix, r312_fTailed, _r312_t10, _r312_t11, _r312_t12, _r312_t13, _r312_tag14;
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
        var r312_Ascender = _r312_t1.Ascender;
        var r312_ApparentTranslate = _r312_t1.ApparentTranslate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_OX = _r312_t1.OX;
        var r312_ArchDepthA = _r312_t1.ArchDepthA;
        var r312_ArchDepthB = _r312_t1.ArchDepthB;
        var r312_SmallArchDepthA = _r312_t1.SmallArchDepthA;
        var r312_SmallArchDepthB = _r312_t1.SmallArchDepthB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_straight = _r312_t2.straight;
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_OShape = _r312_t5.OShape;
        var r312_xn$withtransform$5sIl = _r312_t5["with-transform"];
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$selectvariant$7Hrq = _r312_t6["select-variant"];
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Iotated"].resolve();
        var r312_Iotation = _r312_t7.Iotation;
        var r312_xn$SLABALL$5sIl = 1;
        var r312_xn$SLABLOWER$5sIl = 2;
        var r312_xn$SLABBULGARIAN$5sIl = 3;
        var r312_CyrYuShape = function (r316_df, r316_slabType, r316_top, r316_oTop, r316_ada, r316_adb) {
            var _r316_t0, _r316_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
                var _r318_t0, _r318_t1;
                var r318_sw = r316_df.adviceThinnerStroke(2, 0.75);
                var r318_gap = 0.375 * (r316_df.rightSB - r316_df.leftSB) - r312_HSwToV(0.25 * r318_sw) + r318_sw / 16;
                var r318_subDf = r312_DivFrame(Math.min((r316_df.width - r318_gap) / r312_Width, 0.75 * r316_df.adws), 2);
                var r318_shift = r316_df.width - r318_subDf.width;
                r318_currentGlyph.include(r312_xn$withtransform$5sIl(r312_ApparentTranslate(r318_shift, 0), r312_OShape(r316_oTop, 0, r318_subDf.leftSB, r318_subDf.rightSB, r318_sw, r316_ada * 0.75 * r316_df.adws, r316_adb * 0.75 * r316_df.adws)));
                r318_currentGlyph.include(r312_Iotation[r316_slabType === r312_xn$SLABBULGARIAN$5sIl ? "ascender" : "full"](r316_df, r316_top, new r312_xn$NamedParameterPair$2Lrc9b("hBarRight", r318_subDf.leftSB + r312_OX + r312_HSwToV(0.5 * r318_sw) + r318_shift), new r312_xn$NamedParameterPair$2Lrc9b("hBarY", r316_oTop / 2), new r312_xn$NamedParameterPair$2Lrc9b("fCapital", r316_slabType === r312_xn$SLABALL$5sIl), new r312_xn$NamedParameterPair$2Lrc9b("swRef", r318_sw)));
                return void 0;
            });
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Yu", 1070, new r312_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
            var _r327_t0, _r327_t1;
            var r327_df = r327_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r327_currentGlyph.include(r327_df.markSet.capital());
            r327_currentGlyph.include(r312_CyrYuShape(r327_df, r312_xn$SLABALL$5sIl, r312_CAP, r312_CAP, r312_ArchDepthA, r312_ArchDepthB));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yu", 1102, new r312_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
            var _r333_t0, _r333_t1;
            var r333_df = r333_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r333_currentGlyph.include(r333_df.markSet.e());
            r333_currentGlyph.include(r312_CyrYuShape(r333_df, r312_xn$SLABLOWER$5sIl, r312_XH, r312_XH, r312_SmallArchDepthA, r312_SmallArchDepthB));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/yu.BGR", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
            var _r339_t0, _r339_t1;
            var r339_df = r339_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
            r339_currentGlyph.include(r339_df.markSet.b());
            r339_currentGlyph.include(r312_CyrYuShape(r339_df, r312_xn$SLABBULGARIAN$5sIl, r312_Ascender, r312_XH, r312_SmallArchDepthA, r312_SmallArchDepthB));
            return void 0;
        }));
        var r312_xn$SLABNONE$5sIl = 0;
        var r312_xn$SLABFULL$5sIl = 1;
        var r312_xn$SLABOUTWARD$5sIl = 2;
        var r312_CyrRevYuShape = function (r343_df, r343_slabType, r343_top, r343_oTop, r343_ada, r343_adb, r343_fTailed) {
            var _r343_t0, _r343_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r345_currentGlyph) {
                var _r345_t0, _r345_t1;
                var r345_sw = r343_df.adviceThinnerStroke(2, 0.75);
                var r345_gap = 0.375 * (r343_df.rightSB - r343_df.leftSB) - r312_HSwToV(0.25 * r345_sw) + r345_sw / 16;
                var r345_subDf = r312_DivFrame(Math.min((r343_df.width - r345_gap) / r312_Width, 0.75 * r343_df.adws), 2);
                r345_currentGlyph.include(r312_OShape(r343_oTop, 0, r345_subDf.leftSB, r345_subDf.rightSB, r345_sw, r343_ada * 0.75 * r343_df.adws, r343_adb * 0.75 * r343_df.adws));
                var r345_useItalicShape = r312_para.isItalic && r343_slabType !== r312_xn$SLABALL$5sIl;
                r345_currentGlyph.include(r312_Iotation.RevShape(r343_df, r343_top, new r312_xn$NamedParameterPair$2Lrc9b("hBarLeft", r345_subDf.rightSB - r312_OX - r312_HSwToV(0.5 * r345_sw)), new r312_xn$NamedParameterPair$2Lrc9b("hBarY", r343_oTop / 2), new r312_xn$NamedParameterPair$2Lrc9b("slabTop", r345_useItalicShape ? r312_xn$SLABNONE$5sIl : r312_xn$SLABFULL$5sIl), new r312_xn$NamedParameterPair$2Lrc9b("slabBottom", r345_useItalicShape ? r312_xn$SLABOUTWARD$5sIl : r312_xn$SLABFULL$5sIl), new r312_xn$NamedParameterPair$2Lrc9b("swRef", r345_sw), new r312_xn$NamedParameterPair$2Lrc9b("fTailed", r343_fTailed)));
                return void 0;
            });
        };
        var r312_YuRevConfig = {
            "straight": false,
            "tailed": true
        };
        var _r312_t8 = Object.entries(r312_YuRevConfig)[Symbol.iterator]();
        var _r312_t9 = void 0;
        while (!(_r312_t9 = _r312_t8.next()).done) {
            _r312_t10 = _r312_t9.value;
            r312_suffix = _r312_t10[0];
            r312_fTailed = _r312_t10[1];
            (function () {
                if (!r312_fTailed) r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/revYu." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                    var _r359_t0, _r359_t1;
                    var r359_df = r359_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                    r359_currentGlyph.include(r359_df.markSet.capital());
                    r359_currentGlyph.include(r312_CyrRevYuShape(r359_df, r312_xn$SLABALL$5sIl, r312_CAP, r312_CAP, r312_ArchDepthA, r312_ArchDepthB, r312_fTailed));
                    return void 0;
                }));
                return r312_xn$GlyphSaveSink$2Lrc4b.save("cyrl/revyu." + r312_suffix, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
                    var _r365_t0, _r365_t1;
                    var r365_df = r365_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleM, 3));
                    r365_currentGlyph.include(r365_df.markSet.e());
                    r365_currentGlyph.include(r312_CyrRevYuShape(r365_df, r312_xn$SLABLOWER$5sIl, r312_XH, r312_XH, r312_SmallArchDepthA, r312_SmallArchDepthB, r312_fTailed));
                    return void 0;
                }));
            })();
        }
        r312_xn$selectvariant$7Hrq("cyrl/revYu", 42580);
        return r312_xn$selectvariant$7Hrq("cyrl/revyu", 42581);
    });
    return void 0;
});


