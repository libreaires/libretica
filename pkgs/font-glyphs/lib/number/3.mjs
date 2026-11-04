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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Digits-Three", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t10, _r313_t11;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_Hook = _r313_t1.Hook;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HBarPos = _r313_t1.HBarPos;
        var r313_CThin = _r313_t1.CThin;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var r313_YSmoothMidR = _r313_t1.YSmoothMidR;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
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
        var r313_VBar = _r313_t5.VBar;
        var r313_HookStart = _r313_t5.HookStart;
        var r313_HookEnd = _r313_t5.HookEnd;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_turned = _r313_t6.turned;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Digits-Shared"].resolve();
        var r313_OnumHeight = _r313_t7.OnumHeight;
        var r313_OnumMarks = _r313_t7.OnumMarks;
        var r313_ShiftDown = _r313_t7.ShiftDown;
        var r313_CodeLnum = _r313_t7.CodeLnum;
        var r313_CodeOnum = _r313_t7.CodeOnum;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Ezh"].resolve();
        var r313_Ezh = _r313_t8.Ezh;
        var r313_ThreeShapeT = function (r318_sink, r318_offset, r318_sw, r318_top) {
            var _r318_t0, _r318_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                var _r320_t0, _r320_t1;
                var r320_barcenter = r1_mix(0, r318_top, r313_HBarPos);
                var r320_xMid = r1_mix(r313_SB, r313_RightSB, 0.4);
                var r320_fine = r318_sw * r313_CThin;
                r320_currentGlyph.include(r318_sink(r313_widths.rhs(r318_sw), r313_g4(r313_SB + r318_offset - r313_O, r318_top - r313_Hook), r313_HookStart(r318_top - r318_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r318_sw)), r313_g4(r313_RightSB - r318_offset, r313_YSmoothMidR(r318_top - r318_offset - r313_O, r320_barcenter - r318_sw / 2, r313_ArchDepthA, r313_ArchDepthB)), r313_flat(r320_xMid + r313_TINY, r320_barcenter - (r320_fine - r318_sw / 2), r313_widths.rhs.heading(r320_fine, r313_Leftward)), r313_curl(r320_xMid, r320_barcenter - (r320_fine - r318_sw / 2), r313_heading(r313_Leftward))));
                r320_currentGlyph.include(r318_sink(r313_widths.rhs(r320_fine), r313_flat(r320_xMid, r320_barcenter + (r320_fine - r318_sw / 2), r313_heading(r313_Rightward)), r313_curl(r320_xMid + r313_TINY, r320_barcenter + (r320_fine - r318_sw / 2), r313_heading(r313_Rightward)), r313_g4(r313_RightSB - r318_offset - r313_O * 2, r313_YSmoothMidR(r320_barcenter + r318_sw / 2, r318_offset + r313_O, r313_ArchDepthA, r313_ArchDepthB), r313_widths.rhs(r318_sw)), r313_HookEnd(r318_offset, new r313_xn$NamedParameterPair$2Lrc9b("sw", r318_sw)), r313_g4(r313_SB + r318_offset + r313_O, r313_Hook)));
                return void 0;
            });
        };
        var r313_ThreeShape = function (r325_top) {
            var _r325_t0, _r325_t1;
            return r313_ThreeShapeT(r313_dispiro, 0, r313_Stroke, r325_top);
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("three.lnum.twoArcs", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
            var _r328_t0, _r328_t1;
            r328_currentGlyph.include(r313_MarkSet.capital());
            r328_currentGlyph.include(r313_ThreeShape(r313_CAP));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("three.lnum.flatTopSerifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
            var _r333_t0, _r333_t1;
            r333_currentGlyph.include(r313_MarkSet.capital());
            var r333_ezh = r313_Ezh(r313_DivFrame(1), r313_CAP, 0, new r313_xn$NamedParameterPair$2Lrc9b("pxMidLeft", 0.25), new r313_xn$NamedParameterPair$2Lrc9b("pxTopRight", 0.975), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", false));
            r333_currentGlyph.include(r333_ezh.Shape());
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("three.lnum.flatTopSerifed", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
            var _r341_t0, _r341_t1;
            r341_currentGlyph.include(r313_MarkSet.capital());
            var r341_ezh = r313_Ezh(r313_DivFrame(1), r313_CAP, 0, new r313_xn$NamedParameterPair$2Lrc9b("pxMidLeft", 0.25), new r313_xn$NamedParameterPair$2Lrc9b("pxTopRight", 0.975), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", true));
            r341_currentGlyph.include(r341_ezh.Shape());
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("three.onum.twoArcs", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
            var _r349_t0, _r349_t1;
            r349_currentGlyph.include(r313_OnumMarks.p());
            r349_currentGlyph.include(r313_ThreeShape(r313_CAP));
            r349_currentGlyph.include(r313_ShiftDown());
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("three.onum.flatTopSerifless", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r355_currentGlyph) {
            var _r355_t0, _r355_t1;
            r355_currentGlyph.include(r313_OnumMarks.p());
            var r355_ezh = r313_Ezh(r313_DivFrame(1), r313_CAP, 0, new r313_xn$NamedParameterPair$2Lrc9b("pxMidLeft", 0.25), new r313_xn$NamedParameterPair$2Lrc9b("pxTopRight", 0.975), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", false));
            r355_currentGlyph.include(r355_ezh.Shape());
            r355_currentGlyph.include(r313_ShiftDown());
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("three.onum.flatTopSerifed", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
            var _r364_t0, _r364_t1;
            r364_currentGlyph.include(r313_OnumMarks.p());
            var r364_ezh = r313_Ezh(r313_DivFrame(1), r313_CAP, 0, new r313_xn$NamedParameterPair$2Lrc9b("pxMidLeft", 0.25), new r313_xn$NamedParameterPair$2Lrc9b("pxTopRight", 0.975), new r313_xn$NamedParameterPair$2Lrc9b("fSerifed", true));
            r364_currentGlyph.include(r364_ezh.Shape());
            r364_currentGlyph.include(r313_ShiftDown());
            return void 0;
        }));
        r313_xn$selectvariant$7Hrq("three.lnum", r313_CodeLnum("3"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "three"));
        r313_xn$selectvariant$7Hrq("three.onum", r313_CodeOnum("3"), new r313_xn$NamedParameterPair$2Lrc9b("follow", "three"));
        r313_turned("turnThree", 8587, "three.lnum", r313_Middle, r313_CAP / 2);
        r313_xn$linkreducedvariant$5sIl8("three/sansSerif.lnum", "three.lnum", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("follow", "three/sansSerif"));
        r313_xn$linkreducedvariant$5sIl8("three/sansSerif.onum", "three.onum", r1_MathSansSerif, new r313_xn$NamedParameterPair$2Lrc9b("follow", "three/sansSerif"));
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t9.BBS;
        var r313_BBD = _r313_t9.BBD;
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/three", 120795, new r313_xn$Capture$2Lrc8.GlyphProc(function (r378_currentGlyph) {
            var _r378_t0, _r378_t1;
            r378_currentGlyph.include(r313_MarkSet.capital());
            r378_currentGlyph.include(r313_union(r313_ThreeShapeT(r313_dispiro, 0, r313_BBS, r313_CAP), r313_intersection(r313_ThreeShapeT(r313_xn$spirooutline$1aao, 1, r313_BBS, r313_CAP), r313_union(r313_VBar.r(r313_RightSB - r313_BBD, r1_mix(0, r313_CAP, r313_HBarPos), r313_CAP, r313_BBS), r313_VBar.r(r313_RightSB - r313_BBD - r313_O * 2, 0, r1_mix(0, r313_CAP, r313_HBarPos), r313_BBS)))));
            return void 0;
        }));
    });
    return void 0;
});


