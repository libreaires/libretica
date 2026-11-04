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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-I", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_adws, r313_Serifs, _r313_t12, _r313_t14, _r313_t15, _r313_t16, _r313_tag17, _r313_t18, _r313_tag19;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Translate = _r313_t1.Translate;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_VSwToH = _r313_t1.VSwToH;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_Jut = _r313_t1.Jut;
        var r313_LongJut = _r313_t1.LongJut;
        var r313_MidJutCenter = _r313_t1.MidJutCenter;
        var r313_VJutStroke = _r313_t1.VJutStroke;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_straight = _r313_t2.straight;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_tagged = _r313_t5.tagged;
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VSerif = _r313_t5.VSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_PointingTo = _r313_t5.PointingTo;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_SetGrekUpperTonos = _r313_t7.SetGrekUpperTonos;
        var r313_CreateAccentedComposition = _r313_t7.CreateAccentedComposition;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Metrics"].resolve();
        var r313_EFVJutLength = _r313_t8.EFVJutLength;
        var r313_EFMidBarPosY = _r313_t8.EFMidBarPosY;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Adjustment"].resolve();
        var r313_ExtendAboveBaseAnchors = _r313_t9.ExtendAboveBaseAnchors;
        var r313_IShape = function (r319_df, r319_top) {
            var _r319_t0, _r319_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r321_currentGlyph) {
                var _r321_t0, _r321_t1;
                r321_currentGlyph.include(r313_VBar.m(r319_df.middle, 0, r319_top));
                return void 0;
            });
        };
        var r313_ISerifs = (function () {
            var r325_Impl, r325_None, r325_Long, r325_Short;
            var r325_exports = {};
            r325_exports.Impl = r325_Impl = function (r333_df, r333_top, r333_jut) {
                var _r333_t0, _r333_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
                    var _r335_t0, _r335_t1;
                    r335_currentGlyph.include(r313_tagged("serifMB", r313_HSerif.mb(r333_df.middle, 0, r333_jut)));
                    r335_currentGlyph.include(r313_tagged("serifMT", r313_HSerif.mt(r333_df.middle, r333_top, r333_jut)));
                    r335_currentGlyph.setBaseAnchor("trailing", r333_df.middle + r333_jut, 0);
                    return void 0;
                });
            };
            r325_exports.None = r325_None = function (r340_df, r340_top) {
                var _r340_t0, _r340_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                    var _r342_t0, _r342_t1;
                    var r342_jut = r313_HSwToV(r313_HalfStroke);
                    r342_currentGlyph.setBaseAnchor("trailing", r340_df.middle + r342_jut, 0);
                    return {
                        "jut": r342_jut
                    };
                });
            };
            r325_exports.Long = r325_Long = function (r345_df, r345_top) {
                var _r345_t0, _r345_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                    var _r347_t0, _r347_t1;
                    var r347_jut = Math.max(r313_MidJutCenter, r1_mix(r313_HSwToV(r313_HalfStroke), r313_LongJut, r345_df.adws));
                    r347_currentGlyph.include(r325_Impl(r345_df, r345_top, r347_jut));
                    return {
                        "jut": r347_jut
                    };
                });
            };
            r325_exports.Short = r325_Short = function (r350_df, r350_top) {
                var _r350_t0, _r350_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                    var _r352_t0, _r352_t1;
                    var r352_jut = Math.max(r313_Jut, r1_mix(r313_HSwToV(r313_HalfStroke), r313_MidJutCenter, r350_df.adws));
                    r352_currentGlyph.include(r325_Impl(r350_df, r350_top, r352_jut));
                    return {
                        "jut": r352_jut
                    };
                });
            };
            return r325_exports;
        })();
        var r313_UpperIConfig = {
            "straight": [r313_para.advanceScaleI, r313_ISerifs.None],
            "serifless": [r313_para.advanceScaleII, r313_ISerifs.None],
            "serifed": [r313_para.advanceScaleI, r313_ISerifs.Long],
            "shortSerifed": [r313_para.advanceScaleII, r313_ISerifs.Short]
        };
        var _r313_t10 = Object.entries(r313_UpperIConfig)[Symbol.iterator]();
        var _r313_t11 = void 0;
        while (!(_r313_t11 = _r313_t10.next()).done) {
            _r313_t12 = _r313_t11.value;
            r313_suffix = _r313_t12[0];
            r313_adws = _r313_t12[1][0];
            r313_Serifs = _r313_t12[1][1];
            _r313_t12[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("I." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                    var _r359_t0, _r359_t1;
                    var r359_df = r359_currentGlyph.include(r313_DivFrame(r313_adws));
                    r359_currentGlyph.include(r359_df.markSet.capital());
                    r359_currentGlyph.include(r313_IShape(r359_df, r313_CAP));
                    var r359_serifs = r359_currentGlyph.include(r313_Serifs(r359_df, r313_CAP));
                    r313_xn$GlyphSaveSink$2Lrc4b.save("grek/Iota." + r313_suffix, null, new r313_xn$Capture$2Lrc8.ForkGlyphProc(r359_currentGlyph, r313_SetGrekUpperTonos(Math.min(0, r359_df.middle - r359_serifs.jut - r313_SB))));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("ISideways." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                    var _r368_t0, _r368_t1;
                    var r368_df = r313_DivFrame(r313_XH / r313_Width, 2, r313_XH * 0.1 / r313_SB);
                    r368_currentGlyph.include(r313_PointingTo(r313_Width, r313_XH, r313_Width, 0, function () {
                        var _r370_t0, _r370_t1;
                        return new r313_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                            var _r372_t0, _r372_t1;
                            r372_currentGlyph.include(r313_IShape(r368_df, r313_RightSB));
                            r372_currentGlyph.include(r313_Serifs(r368_df, r313_RightSB));
                            r372_currentGlyph.include(r313_ApparentTranslate(0, 0.5 * r313_SB));
                            return void 0;
                        });
                    }));
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("ILonga." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r378_currentGlyph) {
                    var _r378_t0, _r378_t1;
                    var r378_df = r378_currentGlyph.include(r313_DivFrame(r313_adws));
                    r378_currentGlyph.include(r378_df.markSet.capital());
                    var r378_top = r313_CAP + (r313_Ascender - r313_XH);
                    r378_currentGlyph.include(r313_ExtendAboveBaseAnchors(r378_top));
                    r378_currentGlyph.include(r313_IShape(r378_df, r378_top));
                    r378_currentGlyph.include(r313_Serifs(r378_df, r378_top));
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("AiDiphthong." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                    var r386_jutTop, r386_jutBot, r386_jutMid, r386_swVJut, _r386_t0, _r386_t1, _r386_t2;
                    var r386_df = r386_currentGlyph.include(r313_DivFrame(1));
                    r386_currentGlyph.include(r386_df.markSet.capital());
                    var r386_subDf = r313_DivFrame(r313_adws);
                    r386_currentGlyph.include(r313_xn$withtransform$5sIl(r313_Translate(r386_df.middle - r386_subDf.middle, 0), r313_xn$referglyph$1aao("I." + r313_suffix)));
                    var r386_xMidLeft = r1_mix(r386_df.leftSB, r386_df.rightSB, 0.125) - r313_HSwToV(r313_HalfStroke);
                    var r386_xMidRight = r1_mix(r386_df.rightSB, r386_df.leftSB, 0.125) + r313_HSwToV(r313_HalfStroke);
                    var r386_yBar = r313_EFMidBarPosY(r313_CAP, 0);
                    r386_currentGlyph.include(r313_HBar.m(r386_xMidLeft, r386_xMidRight, r386_yBar));
                    if (r313_Serifs !== r313_ISerifs.None) {
                        _r386_t0 = r313_EFVJutLength(r313_CAP, 0);
                        r386_jutTop = _r386_t0[0];
                        r386_jutBot = _r386_t0[1];
                        r386_jutMid = _r386_t0[2];
                        r386_swVJut = Math.min(r313_VJutStroke, r313_VSwToH(0.625 * (r386_df.middle - r313_HSwToV(r313_HalfStroke) - r386_xMidLeft)));
                        r386_currentGlyph.include(r313_VSerif.ml(r386_xMidLeft, r386_yBar, r386_jutMid, r386_swVJut));
                        r386_currentGlyph.include(r313_VSerif.mr(r386_xMidRight, r386_yBar, r386_jutMid, r386_swVJut));
                    }
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("I", "I");
        r313_xn$linkreducedvariant$5sIl8("I/sansSerif", "I", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("grek/Iota", 921, new r313_xn$NamedParameterPair$2Lrc9b("follow", "I"));
        r313_xn$linkreducedvariant$5sIl8("grek/Iota/sansSerif", "grek/Iota", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("follow", "I/sansSerif"));
        r313_alias("cyrl/IUkrainian", 1030, "I");
        r313_CreateAccentedComposition("cyrl/Yi", 1031, "I", "dieresisAbove");
        r313_alias("cyrl/Palochka", 1216, "I");
        r313_xn$selectvariant$7Hrq("ISideways", 42999, new r313_xn$NamedParameterPair$2Lrc9b("follow", "I"));
        r313_xn$selectvariant$7Hrq("ILonga", 43006, new r313_xn$NamedParameterPair$2Lrc9b("follow", "I"));
        r313_xn$selectvariant$7Hrq("AiDiphthong", 122734, new r313_xn$NamedParameterPair$2Lrc9b("follow", "I"));
        r313_CreateAccentedComposition("IAcute", 205, "I", "acuteAbove");
        r313_xn$GlyphSaveSink$2Lrc4b.save("smcpI", 618, new r313_xn$Capture$2Lrc8.GlyphProc(function (r400_currentGlyph) {
            var _r400_t0, _r400_t1;
            var r400_df = r400_currentGlyph.include(r313_DivFrame(r313_para.advanceScaleI));
            r400_currentGlyph.include(r400_df.markSet.e());
            r400_currentGlyph.include(r313_IShape(r400_df, r313_XH));
            r400_currentGlyph.include(r313_ISerifs.Impl(r400_df, r313_XH, r313_MidJutCenter));
            return void 0;
        }));
        r313_CreateAccentedComposition("smcpIBar", 7547, "smcpI", "barOver");
        var _r313_t13 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t13.BBS;
        var r313_BBD = _r313_t13.BBD;
        var r313_BBBarCenter = _r313_t13.BBBarCenter;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/I", 120128, new r313_xn$Capture$2Lrc8.GlyphProc(function (r408_currentGlyph) {
            var _r408_t0, _r408_t1;
            r408_currentGlyph.include(r313_MarkSet.capital());
            r408_currentGlyph.include(r313_BBBarCenter(r313_Middle, 0, r313_CAP));
            r408_currentGlyph.include(r313_HBar.t(r313_Middle - r313_BBD / 2 - r313_Jut, r313_Middle + r313_BBD / 2 + r313_Jut, r313_CAP, r313_BBS));
            r408_currentGlyph.include(r313_HBar.b(r313_Middle - r313_BBD / 2 - r313_Jut, r313_Middle + r313_BBD / 2 + r313_Jut, 0, r313_BBS));
            return void 0;
        }));
    });
    return void 0;
});


