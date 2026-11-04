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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-Tje", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_adws, r313_doST, r313_doSB, r313_Uc, r313_Lc, r313_BGRc, _r313_t13, _r313_t16, _r313_t17, _r313_t18, _r313_t19, _r313_tag20, _r313_t21, _r313_tag22;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_OX = _r313_t1.OX;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_MidJutCenter = _r313_t1.MidJutCenter;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_SideJut = _r313_t1.SideJut;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateDependentComposite = _r313_t7.CreateDependentComposite;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_EFVJutLength = _r313_t8.EFVJutLength;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Upper-T"].resolve();
        var r313_TConfig = _r313_t9.TConfig;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Yeri"].resolve();
        var r313_YeriConfig = _r313_t10.YeriConfig;
        var r313_YeriBarPos = _r313_t10.YeriBarPos;
        var r313_xTeMidBarLeft = function (r320_df) {
            var _r320_t0, _r320_t1;
            return r1_mix(r320_df.leftSB, r320_df.rightSB, 0.3) + r313_OX;
        };
        var r313_xYeriBowlRight = function (r321_df) {
            var _r321_t0, _r321_t1;
            return r321_df.rightSB - r313_OX;
        };
        var r313_CyrTjeStroke = function (r322_df, r322_top) {
            var _r322_t0, _r322_t1;
            return r322_df.adviceThinnerStroke2(2.75, 3, r322_top);
        };
        var r313_LeftHalf = function (r323_df, r323_top, r323_sw, r323_slabTop, r323_slabBot) {
            var _r323_t0, _r323_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r325_currentGlyph) {
                var r325_jutTop, r325_jutBot, r325_jutMid, r325_swVJut, r325_jut, _r325_t0, _r325_t1, _r325_t2;
                var r325_left = r313_xTeMidBarLeft(r323_df);
                var r325_right = r313_xYeriBowlRight(r323_df);
                var r325_xTopBarLeft = r323_df.leftSB - r313_SideJut;
                var r325_xTopBarRight = r1_mix(r325_xTopBarLeft, r325_left + r313_HSwToV(0.5 * r323_sw), 2);
                r325_currentGlyph.include(r313_HBar.t(r325_xTopBarLeft, r325_xTopBarRight, r323_top, r323_sw));
                if (r323_slabTop) {
                    _r325_t0 = r313_EFVJutLength(r323_top, 0, r313_YeriBarPos, r323_sw);
                    r325_jutTop = _r325_t0[0];
                    r325_jutBot = _r325_t0[1];
                    r325_jutMid = _r325_t0[2];
                    r325_swVJut = Math.min(r313_VJutStroke * (r323_sw / r313_Stroke), r313_VSwToH(0.625 * (r325_left - r325_xTopBarLeft)));
                    r325_currentGlyph.include(r313_VSerif.dl(r325_xTopBarLeft, r323_top, r325_jutTop, r325_swVJut));
                    r325_currentGlyph.include(r313_VSerif.dr(r325_xTopBarRight, r323_top, r325_jutTop, r325_swVJut));
                }
                if (r323_slabBot) {
                    r325_jut = Math.max(r313_Jut, r1_mix(r313_HSwToV(r313_HalfStroke), r313_MidJutCenter, 6 / 7 * r323_df.adws));
                    r325_currentGlyph.include(r313_HSerif.lb(r325_left, 0, r325_jut - r313_HSwToV(r313_HalfStroke), r323_sw));
                }
                return void 0;
            });
        };
        var r313_RightHalf = function (r330_Yeri, r330_df, r330_top, r330_sw) {
            var _r330_t0, _r330_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                var _r332_t0, _r332_t1;
                r332_currentGlyph.include(r330_Yeri(r330_top, new r313_xn$NamedParameterPair$2Lrc9b("left", r313_xTeMidBarLeft(r330_df)), new r313_xn$NamedParameterPair$2Lrc9b("right", r313_xYeriBowlRight(r330_df)), new r313_xn$NamedParameterPair$2Lrc9b("stroke", r330_sw), new r313_xn$NamedParameterPair$2Lrc9b("fSlab", false)));
                return void 0;
            });
        };
        var _r313_t11 = Object.entries(r313_TConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_adws = _r313_t13[1][0];
            r313_doST = _r313_t13[1][1];
            r313_doSB = _r313_t13[1][2];
            _r313_t13[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Tje/leftHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                    var _r343_t0, _r343_t1;
                    var r343_df = r343_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT, 3));
                    r343_currentGlyph.include(r343_df.markSet.capital());
                    var r343_subDf = r313_DivFrame(r313_adws, 3);
                    var r343_xOffsetMid = r313_xTeMidBarLeft(r343_df) - r313_xTeMidBarLeft(r343_subDf);
                    r343_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(r343_xOffsetMid, 0), r313_LeftHalf(r343_subDf, r313_CAP, r313_CyrTjeStroke(r343_df, r313_CAP), r313_doST, r313_doSB)));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tje.upright/leftHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                    var _r349_t0, _r349_t1;
                    var r349_df = r349_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT, 3));
                    r349_currentGlyph.include(r349_df.markSet.e());
                    var r349_subDf = r313_DivFrame(r313_adws, 3);
                    var r349_xOffsetMid = r313_xTeMidBarLeft(r349_df) - r313_xTeMidBarLeft(r349_subDf);
                    r349_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(r349_xOffsetMid, 0), r313_LeftHalf(r349_subDf, r313_XH, r313_CyrTjeStroke(r349_df, r313_XH), r313_doST, r313_doSB)));
                    return void 0;
                }));
            })();
        }
        var _r313_t14 = Object.entries(r313_YeriConfig)[Symbol.iterator]();
        var _r313_t15 = void 0;
        while (!(_r313_t15 = _r313_t14.next()).done) {
            _r313_t16 = _r313_t15.value;
            r313_suffix = _r313_t16[0];
            r313_Uc = _r313_t16[1][0];
            r313_Lc = _r313_t16[1][1];
            r313_BGRc = _r313_t16[1][2];
            _r313_t16[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/Tje/rightHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                    var _r358_t0, _r358_t1;
                    var r358_df = r358_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT, 3));
                    r358_currentGlyph.include(r358_df.markSet.capital());
                    r358_currentGlyph.include(r313_RightHalf(r313_Uc, r358_df, r313_CAP, r313_CyrTjeStroke(r358_df, r313_CAP)));
                    r1_DependentSelector.set(r358_currentGlyph, r313_suffix === "corner" ? "full" : "reduced");
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("cyrl/tje.upright/rightHalf." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                    var _r364_t0, _r364_t1;
                    var r364_df = r364_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleT, 3));
                    r364_currentGlyph.include(r364_df.markSet.e());
                    r364_currentGlyph.include(r313_RightHalf(r313_Lc, r364_df, r313_XH, r313_CyrTjeStroke(r364_df, r313_XH)));
                    r1_DependentSelector.set(r364_currentGlyph, r313_suffix === "corner" ? "full" : "reduced");
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("cyrl/Tje/leftHalf/full", new r313_xn$NamedParameterPair$2Lrc9b("follow", "T"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/Tje/leftHalf"));
        r313_xn$selectvariant$7Hrq("cyrl/tje.upright/leftHalf/full", new r313_xn$NamedParameterPair$2Lrc9b("follow", "T"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/tje.upright/leftHalf"));
        r313_xn$selectvariant$7Hrq("cyrl/Tje/leftHalf/reduced", new r313_xn$NamedParameterPair$2Lrc9b("follow", "T/rTailBase"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/Tje/leftHalf"));
        r313_xn$selectvariant$7Hrq("cyrl/tje.upright/leftHalf/reduced", new r313_xn$NamedParameterPair$2Lrc9b("follow", "T/rTailBase"), new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "cyrl/tje.upright/leftHalf"));
        r313_xn$selectvariant$7Hrq("cyrl/Tje/rightHalf", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/Tje/rightHalf"));
        r313_xn$selectvariant$7Hrq("cyrl/tje.upright/rightHalf", new r313_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/tje/rightHalf"));
        r313_CreateDependentComposite("cyrl/Tje", 7305, "cyrl/Tje/rightHalf", {
            "full": "cyrl/Tje/leftHalf/full",
            "reduced": "cyrl/Tje/leftHalf/reduced"
        });
        return r313_CreateDependentComposite("cyrl/tje.upright", null, "cyrl/tje.upright/rightHalf", {
            "full": "cyrl/tje.upright/leftHalf/full",
            "reduced": "cyrl/tje.upright/leftHalf/reduced"
        });
    });
    return void 0;
});


