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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Digits-One", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Base, r313_pTS, r313_pBalance, _r313_t10, _r313_t12, _r313_t13, _r313_t14, _r313_tag15, _r313_t16, _r313_tag17;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_CAP = _r313_t1.CAP;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Hook = _r313_t1.Hook;
        var r313_HookX = _r313_t1.HookX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_LongJut = _r313_t1.LongJut;
        var r313_OneBalance = _r313_t1.OneBalance;
        var r313_Middle = _r313_t1.Middle;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_dispiro = _r313_t2.dispiro;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_intersection = _r313_t4.intersection;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_HSerif = _r313_t5.HSerif;
        var r313_VBar = _r313_t5.VBar;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Digits-Shared"].resolve();
        var r313_OnumHeight = _r313_t7.OnumHeight;
        var r313_OnumMarks = _r313_t7.OnumMarks;
        var r313_CodeLnum = _r313_t7.CodeLnum;
        var r313_CodeOnum = _r313_t7.CodeOnum;
        var r313_Shape = (function () {
            var r319_Line, r319_Serifed, r319_FlatSerifed, r319_TopCut, r319_Base;
            var r319_exports = {};
            r319_exports.Line = r319_Line = function (r327_top, r327_balance, r327_pTopSerif) {
                var _r327_t0, _r327_t1;
                return r313_VBar.m(r313_Middle + r327_balance, 0, r327_top);
            };
            r319_exports.Serifed = r319_Serifed = function (r329_top, r329_balance, r329_pTopSerif) {
                var _r329_t0, _r329_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                    var _r331_t0, _r331_t1;
                    var r331_topSW = r313_AdviceStroke(3.5);
                    r331_currentGlyph.include(r313_VBar.m(r313_Middle + r329_balance, 0, r329_top));
                    r331_currentGlyph.include(r313_dispiro(r313_flat(r313_Middle - r313_HSwToV(r313_HalfStroke) + r329_balance, r329_top, r313_widths.lhs(r331_topSW)), r313_curl(r313_Middle - r313_HSwToV(r313_Stroke / 8) - r313_HookX * 1.25 + r329_balance, r329_top - r313_Stroke / 8 - r313_Hook * r329_pTopSerif * (r329_top / r313_CAP))));
                    return void 0;
                });
            };
            r319_exports.FlatSerifed = r319_FlatSerifed = function (r335_top, r335_balance, r335_pTopSerif) {
                var _r335_t0, _r335_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r337_currentGlyph) {
                    var _r337_t0, _r337_t1;
                    var r337_topSW = r313_AdviceStroke(3.5);
                    r337_currentGlyph.include(r313_VBar.m(r313_Middle + r335_balance, 0, r335_top));
                    r337_currentGlyph.include(r313_HSerif.lt(r313_Middle + r335_balance - r313_HSwToV(r313_HalfStroke), r335_top - r313_Stroke / 8 - r313_Hook * r335_pTopSerif * (r335_top / r313_CAP), r313_LongJut - r313_HSwToV(r313_HalfStroke)));
                    return void 0;
                });
            };
            r319_exports.TopCut = r319_TopCut = function (r341_top, r341_balance, r341_pTopSerif) {
                var _r341_t0, _r341_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                    var _r343_t0, _r343_t1;
                    var r343_sl = r313_Middle + r341_balance - r313_HSwToV(r313_HalfStroke);
                    var r343_sr = r313_Middle + r341_balance + r313_HSwToV(r313_HalfStroke);
                    r343_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r343_sr, 0), r313_corner(r343_sl, 0), r313_corner(r343_sl, r341_top - (r343_sr - r343_sl) * r341_pTopSerif), r313_corner(r343_sr, r341_top)));
                    return void 0;
                });
            };
            r319_exports.Base = r319_Base = function () {
                var _r346_t0, _r346_t1;
                return r313_HSerif.mb(r313_Middle, 0, r313_LongJut);
            };
            return r319_exports;
        })();
        var r313_OneConfig = {
            "line": [r313_Shape.Line, null, 0.75, 0],
            "noBase": [r313_Shape.Serifed, null, 0.75, 1],
            "base": [r313_Shape.Serifed, r313_Shape.Base, 0.75, 1],
            "noBaseLongTopSerif": [r313_Shape.Serifed, null, 1.875, 1],
            "baseLongTopSerif": [r313_Shape.Serifed, r313_Shape.Base, 1.875, 1],
            "noBaseFlatTopSerif": [r313_Shape.FlatSerifed, null, 0.75, 1],
            "baseFlatTopSerif": [r313_Shape.FlatSerifed, r313_Shape.Base, 0.75, 1],
            "noBaseTopCut": [r313_Shape.TopCut, null, 0.75, 0],
            "baseTopCut": [r313_Shape.TopCut, r313_Shape.Base, 0.75, 0]
        };
        var _r313_t8 = Object.entries(r313_OneConfig)[Symbol.iterator]();
        var _r313_t9 = void 0;
        while (!(_r313_t9 = _r313_t8.next()).done) {
            _r313_t10 = _r313_t9.value;
            r313_suffix = _r313_t10[0];
            r313_Shape = _r313_t10[1][0];
            r313_Base = _r313_t10[1][1];
            r313_pTS = _r313_t10[1][2];
            r313_pBalance = _r313_t10[1][3];
            _r313_t10[1];
            (function () {
                var r349_balance = r313_pBalance * (r313_Base ? r313_OneBalance / 4 : r313_OneBalance);
                r313_xn$GlyphSaveSink$2Lrc4b.save("one.lnum." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                    var _r352_t0, _r352_t1;
                    r352_currentGlyph.include(r313_MarkSet.capital());
                    r352_currentGlyph.include(r313_Shape(r313_CAP, r349_balance, r313_pTS));
                    if (r313_Base) r352_currentGlyph.include(r313_Base());
                    return void 0;
                }));
                return r313_xn$GlyphSaveSink$2Lrc4b.save("one.onum." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                    var _r358_t0, _r358_t1;
                    r358_currentGlyph.include(r313_OnumMarks.e());
                    r358_currentGlyph.include(r313_Shape(r313_OnumHeight, r349_balance, r313_pTS * 5 / 6));
                    if (r313_Base) r358_currentGlyph.include(r313_Base());
                    return void 0;
                }));
            })();
        }
        r313_xn$selectvariant$7Hrq("one.lnum", r313_CodeLnum("1"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "one"));
        r313_xn$selectvariant$7Hrq("one.onum", r313_CodeOnum("1"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "one"));
        r313_xn$linkreducedvariant$5sIl8("one/sansSerif.lnum", "one.lnum", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("follow", "one/sansSerif"));
        r313_xn$linkreducedvariant$5sIl8("one/sansSerif.onum", "one.onum", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("follow", "one/sansSerif"));
        var _r313_t11 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t11.BBS;
        var r313_BBD = _r313_t11.BBD;
        var r313_BBBarCenter = _r313_t11.BBBarCenter;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/one", 120793, new r313_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
            var _r369_t0, _r369_t1;
            var r369_barCenter = r313_Middle + r313_OneBalance / 2;
            var r369_xSerifTerminal = r369_barCenter - r313_HSwToV(r313_BBD / 8) - r313_HookX * 1.25;
            var r369_ySerifTerminal = r313_CAP - r313_BBD / 8 - r313_Hook * 0.75;
            r369_currentGlyph.include(r313_MarkSet.capital());
            r369_currentGlyph.include(r313_intersection(r313_BBBarCenter(r369_barCenter, 0, r313_CAP), r313_xn$spirooutline$1aao(r313_corner(r369_barCenter + r313_BBD / 2, r313_CAP), r313_corner(r313_Width, r313_CAP), r313_corner(r313_Width, 0), r313_corner(0, 0), r313_corner(r369_xSerifTerminal, r369_ySerifTerminal))));
            r369_currentGlyph.include(r313_dispiro(r313_widths.lhs(r313_BBS), r313_corner(r369_barCenter + r313_BBD / 2, r313_CAP), r313_corner(r369_xSerifTerminal, r369_ySerifTerminal)));
            return void 0;
        }));
    });
    return void 0;
});


