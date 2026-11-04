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
var r1_Waveform = _r1_t8.Waveform;
var _r1_t9 = _s0_t1;
var r1_Joining = _r1_t9.Joining;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Punctuation-Slashes-And-Number-Sign", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t8, _r313_t9, _r313_t10, _r313_tag11;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_fontMetrics = _r313_t0.fontMetrics;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_ParenTop = _r313_t1.ParenTop;
        var r313_ParenBot = _r313_t1.ParenBot;
        var r313_OperTop = _r313_t1.OperTop;
        var r313_OperBot = _r313_t1.OperBot;
        var r313_TackTop = _r313_t1.TackTop;
        var r313_TackBot = _r313_t1.TackBot;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_OverlayStroke = _r313_t1.OverlayStroke;
        var r313_AccentClearance = _r313_t1.AccentClearance;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_PeriodRadius = _r313_t1.PeriodRadius;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_corner = _r313_t2.corner;
        var r313_xn$spirooutline$1aao = _r313_t2["spiro-outline"];
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var r313_union = _r313_t4.union;
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_Rect = _r313_t5.Rect;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_WithDotVariants = _r313_t5.WithDotVariants;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Shared-Metrics"].resolve();
        var r313_markStroke = _r313_t7.markStroke;
        var r313_markExtend = _r313_t7.markExtend;
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r318_t0, _r318_t1;
            return {
                "slashDefautLeft": r313_slashDefautLeft
            };
        });
        r313_xn$ExportCapture$2Lrc4b(function () {
            var _r320_t0, _r320_t1;
            return {
                "slashDefaultRight": r313_slashDefaultRight
            };
        });
        var r313_slashDefautLeft = r313_SB + r313_HalfStroke;
        var r313_slashDefaultRight = r313_RightSB - r313_HalfStroke;
        var r313_SlashShape = function () {
            var _r322_t5;
            var _r322_t6 = arguments;
            var r322_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r322_t6, 0);
            var _r322_t0 = [];
            var _r322_t1 = 0;
            while (_r322_t1 < r322_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r322_xn$flexarguments$2Lrc7uIe5[_r322_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r322_t0.push(r322_xn$flexarguments$2Lrc7uIe5[_r322_t1]);
                _r322_t1 = _r322_t1 + 1;
            }
            var _r322_t2 = r322_xn$flexarguments$2Lrc7uIe5;
            var _r322_t3 = _r322_t2.length;
            var _r322_t4 = 0;
            while (_r322_t4 < _r322_t3) {
                _r322_t1 = _r322_t2[_r322_t4];
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "l") r322_l = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "r") r322_r = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "t") r322_t = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "b") r322_b = _r322_t1.right;
                if (_r322_t1 && _r322_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r322_t1.left === "w") r322_w = _r322_t1.right;
                _r322_t4 = _r322_t4 + 1;
            }
            var r322_l = r1_fallback(r322_l, _r322_t0[0]);
            var r322_r = r1_fallback(r322_r, _r322_t0[1]);
            var r322_t = r1_fallback(r322_t, _r322_t0[2], r313_ParenTop);
            var r322_b = r1_fallback(r322_b, _r322_t0[3], r313_ParenBot);
            var r322_w = r1_fallback(r322_w, _r322_t0[4], r313_Stroke);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                var _r327_t0, _r327_t1;
                var r327_a = r1_Waveform.sawtooth((r322_r - r322_l - r322_w) / (r322_t - r322_b));
                var r327_cor = 1 / Math.sqrt(1 - r327_a * r327_a);
                r327_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r322_r - r313_HSwToV(0.5 * r327_cor * r322_w), r322_t), r313_corner(r322_r + r313_HSwToV(0.5 * r327_cor * r322_w), r322_t), r313_corner(r322_l + r313_HSwToV(0.5 * r327_cor * r322_w), r322_b), r313_corner(r322_l - r313_HSwToV(0.5 * r327_cor * r322_w), r322_b)));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("slash", "/", new r313_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
            var _r331_t0, _r331_t1;
            r331_currentGlyph.include(r313_SlashShape(r313_slashDefautLeft, r313_slashDefaultRight));
            return void 0;
        }));
        r313_alias("solidus", 8260, "slash");
        r313_alias("fractionBar", null, "slash");
        r313_alias("mathDivSlash", 8725, "slash");
        r313_xn$GlyphSaveSink$2Lrc4b.save("doubleSlash", 11005, new r313_xn$Capture$2Lrc8.GlyphProc(function (r335_currentGlyph) {
            var _r335_t0, _r335_t1;
            var r335_w = r313_AdviceStroke(3);
            var r335_b = Math.max(r335_w, r313_Width * 0.15);
            r335_currentGlyph.include(r313_SlashShape(r313_slashDefautLeft - r335_b, r313_slashDefaultRight - r335_b, void 0, void 0, r335_w));
            r335_currentGlyph.include(r313_SlashShape(r313_slashDefautLeft + r335_b, r313_slashDefaultRight + r335_b, void 0, void 0, r335_w));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("slash.left", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
            var _r340_t0, _r340_t1;
            r1_Joining.set(r340_currentGlyph, r1_Joining.Classes.Right);
            r340_currentGlyph.include(r313_SlashShape(r313_slashDefautLeft, r313_Width));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("slash.right", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
            var _r344_t0, _r344_t1;
            r1_Joining.set(r344_currentGlyph, r1_Joining.Classes.Left);
            r344_currentGlyph.include(r313_SlashShape(0, r313_slashDefaultRight));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("slantedParallel", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
            var _r348_t0, _r348_t1;
            var r348_w = r313_AdviceStroke(3);
            var r348_b = Math.max(r348_w, r313_Width * 0.15);
            r348_currentGlyph.include(r313_SlashShape(r313_slashDefautLeft - r348_b, r313_slashDefaultRight - r348_b, r313_TackTop, r313_TackBot, r348_w));
            r348_currentGlyph.include(r313_SlashShape(r313_slashDefautLeft + r348_b, r313_slashDefaultRight + r348_b, r313_TackTop, r313_TackBot, r348_w));
            return void 0;
        }));
        var r313_backslashWidth = (r313_slashDefaultRight - r313_slashDefautLeft) * (1 + r313_TanSlope * 2);
        var r313_BackslashShape = function () {
            var _r352_t5;
            var _r352_t6 = arguments;
            var r352_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r352_t6, 0);
            var _r352_t0 = [];
            var _r352_t1 = 0;
            while (_r352_t1 < r352_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r352_xn$flexarguments$2Lrc7uIe5[_r352_t1] instanceof r313_xn$NamedParameterPair$2Lrc9b)) _r352_t0.push(r352_xn$flexarguments$2Lrc7uIe5[_r352_t1]);
                _r352_t1 = _r352_t1 + 1;
            }
            var _r352_t2 = r352_xn$flexarguments$2Lrc7uIe5;
            var _r352_t3 = _r352_t2.length;
            var _r352_t4 = 0;
            while (_r352_t4 < _r352_t3) {
                _r352_t1 = _r352_t2[_r352_t4];
                if (_r352_t1 && _r352_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r352_t1.left === "l") r352_l = _r352_t1.right;
                if (_r352_t1 && _r352_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r352_t1.left === "r") r352_r = _r352_t1.right;
                if (_r352_t1 && _r352_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r352_t1.left === "t") r352_t = _r352_t1.right;
                if (_r352_t1 && _r352_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r352_t1.left === "b") r352_b = _r352_t1.right;
                if (_r352_t1 && _r352_t1 instanceof r313_xn$NamedParameterPair$2Lrc9b && _r352_t1.left === "w") r352_w = _r352_t1.right;
                _r352_t4 = _r352_t4 + 1;
            }
            var r352_l = r1_fallback(r352_l, _r352_t0[0]);
            var r352_r = r1_fallback(r352_r, _r352_t0[1]);
            var r352_t = r1_fallback(r352_t, _r352_t0[2], r313_ParenTop);
            var r352_b = r1_fallback(r352_b, _r352_t0[3], r313_ParenBot);
            var r352_w = r1_fallback(r352_w, _r352_t0[4], r313_Stroke);
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
                var _r357_t0, _r357_t1;
                var r357_a = r1_Waveform.sawtooth((r352_r - r352_l - r352_w) / (r352_t - r352_b));
                var r357_cor = 1 / Math.sqrt(1 - r357_a * r357_a);
                r357_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r352_l - r313_HSwToV(0.5 * r357_cor * r352_w), r352_t), r313_corner(r352_l + r313_HSwToV(0.5 * r357_cor * r352_w), r352_t), r313_corner(r352_r + r313_HSwToV(0.5 * r357_cor * r352_w), r352_b), r313_corner(r352_r - r313_HSwToV(0.5 * r357_cor * r352_w), r352_b)));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("backslash", "\\", new r313_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
            var _r361_t0, _r361_t1;
            r361_currentGlyph.include(r313_BackslashShape(r313_slashDefautLeft, r313_slashDefaultRight));
            return void 0;
        }));
        r313_alias("mathSetMinus", 8726, "backslash");
        r313_alias("mathBackslash", 10741, "backslash");
        var r313_MosaicTop = r313_fontMetrics.os2.sTypoAscender;
        var r313_MosaicBottom = r313_fontMetrics.os2.sTypoDescender;
        r313_xn$GlyphSaveSink$2Lrc4b.save("bigSolidus", 10744, new r313_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
            var _r365_t0, _r365_t1;
            r365_currentGlyph.include(r313_SlashShape(r313_slashDefautLeft, r313_slashDefaultRight, r313_MosaicTop, r313_MosaicBottom));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("bigBackslash", 10745, new r313_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
            var _r369_t0, _r369_t1;
            r369_currentGlyph.include(r313_BackslashShape(r313_slashDefautLeft, r313_slashDefaultRight, r313_MosaicTop, r313_MosaicBottom));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("slashOverbar", 10742, new r313_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
            var _r373_t0, _r373_t1;
            r373_currentGlyph.include(r313_xn$referglyph$1aao("slash"));
            r373_currentGlyph.include(r313_HBar.m(r313_Middle - r313_markExtend, r313_Middle + r313_markExtend, r313_ParenTop + r313_AccentClearance, r313_markStroke));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("backslashBar", 10743, new r313_xn$Capture$2Lrc8.GlyphProc(function (r378_currentGlyph) {
            var _r378_t0, _r378_t1;
            r378_currentGlyph.include(r313_xn$referglyph$1aao("backslash"));
            r378_currentGlyph.include(r313_HBar.m(r313_SB, r313_RightSB, r313_SymbolMid, r313_OverlayStroke));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("backslash.left", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r383_currentGlyph) {
            var _r383_t0, _r383_t1;
            r1_Joining.set(r383_currentGlyph, r1_Joining.Classes.Right);
            r383_currentGlyph.include(r313_BackslashShape(r313_Middle - r313_backslashWidth / 2, r313_Width));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("backslash.right", null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r387_currentGlyph) {
            var _r387_t0, _r387_t1;
            r1_Joining.set(r387_currentGlyph, r1_Joining.Classes.Left);
            r387_currentGlyph.include(r313_BackslashShape(0, r313_Middle + r313_backslashWidth / 2));
            return void 0;
        }));
        r313_WithDotVariants("slashWithDot", 11850, function (r389_DrawAt, r389_kr, r389_ov) {
            var _r389_t0, _r389_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r391_currentGlyph) {
                var _r391_t0, _r391_t1;
                r391_currentGlyph.include(r313_xn$referglyph$1aao("slash"));
                r391_currentGlyph.include(r389_DrawAt(r313_Middle, r313_SymbolMid, r313_PeriodRadius * r389_kr - r389_ov));
                return void 0;
            });
        });
        return (function () {
            var r395_suffix, r395_FHBars, r395_FVBars, r395_p, r395_height, _r395_t2, _r395_t3, _r395_tag4;
            var r395_fine = r313_AdviceStroke(2.75);
            var r395_HspT = function (r396_l, r396_r) {
                var _r396_t0, _r396_t1;
                return (r396_r - r396_l - r313_HSwToV(2 * r395_fine)) * 0.3;
            };
            var r395_UprightHBars = function (r397_height, r397_lx, r397_l, r397_r, r397_p) {
                var _r397_t1, _r397_t2;
                var _r397_t0 = r397_height;
                var r397_nsTop = _r397_t0[0];
                var r397_nsBot = _r397_t0[1];
                return r313_union(r313_HBar.m(r397_lx, r397_r, r1_mix(r397_nsTop, r397_nsBot, 0.3)), r313_HBar.m(r397_lx, r397_r, r1_mix(r397_nsTop, r397_nsBot, 0.7)));
            };
            var r395_UprightHBarsOpen = function (r398_height, r398_lx, r398_l, r398_r, r398_p) {
                var _r398_t1, _r398_t2;
                var _r398_t0 = r398_height;
                var r398_nsTop = _r398_t0[0];
                var r398_nsBot = _r398_t0[1];
                var r398_hsp = r395_HspT(r398_l, r398_r);
                return r313_difference(r395_UprightHBars(r398_height, r398_lx, r398_l, r398_r, r398_p), r313_Rect(r398_nsTop, r398_nsBot, r398_l + r398_hsp + r395_fine * (0.5 + r398_p), r398_r - r398_hsp - r395_fine * (0.5 + r398_p)));
            };
            var r395_UprightVBars = function (r399_height, r399_lx, r399_l, r399_r, r399_p) {
                var _r399_t1, _r399_t2;
                var _r399_t0 = r399_height;
                var r399_nsTop = _r399_t0[0];
                var r399_nsBot = _r399_t0[1];
                var r399_hsp = r395_HspT(r399_l, r399_r);
                return r313_union(r313_VBar.l(r399_l + r399_hsp + r399_p * r395_fine, r399_nsBot, r399_nsTop, r395_fine), r313_VBar.r(r399_r - r399_hsp - r399_p * r395_fine, r399_nsBot, r399_nsTop, r395_fine));
            };
            var r395_SlantedDim = function (r400_l, r400_r) {
                var _r400_t0, _r400_t1;
                var r400_hsp = r395_HspT(r400_l, r400_r);
                var r400_x = r400_hsp + r313_HSwToV(0.5 * r395_fine);
                var r400_w = (r400_r - r400_l) * 0.15;
                var r400_shift = r400_w / 3;
                return {
                    "hsp": r400_hsp,
                    "x": r400_x,
                    "w": r400_w,
                    "shift": r400_shift
                };
            };
            var r395_SlantedHBars = function (r401_height, r401_lx, r401_l, r401_r, r401_p) {
                var _r401_t2, _r401_t3;
                var _r401_t0 = r401_height;
                var r401_nsTop = _r401_t0[0];
                var r401_nsBot = _r401_t0[1];
                var _r401_t1 = r395_SlantedDim(r401_l, r401_r);
                var r401_shift = _r401_t1.shift;
                return r313_union(r313_HBar.m(r401_lx + r401_shift, r401_r + r401_shift, r1_mix(r401_nsTop, r401_nsBot, 0.3)), r313_HBar.m(r401_lx - r401_shift, r401_r - r401_shift, r1_mix(r401_nsTop, r401_nsBot, 0.7)));
            };
            var r395_SlantedHBarsOpen = function (r402_height, r402_lx, r402_l, r402_r, r402_p) {
                var _r402_t2, _r402_t3;
                var _r402_t0 = r402_height;
                var r402_nsTop = _r402_t0[0];
                var r402_nsBot = _r402_t0[1];
                var _r402_t1 = r395_SlantedDim(r402_l, r402_r);
                var r402_x = _r402_t1.x;
                var r402_w = _r402_t1.w;
                return r313_difference(r395_SlantedHBars(r402_height, r402_lx, r402_l, r402_r, r402_p), r313_xn$spirooutline$1aao(r313_corner(r402_l + r402_x + r402_w + r402_p * r395_fine, r402_nsTop), r313_corner(r402_r - r402_x + r402_w - r402_p * r395_fine, r402_nsTop), r313_corner(r402_r - r402_x - r402_w - r402_p * r395_fine, r402_nsBot), r313_corner(r402_l + r402_x - r402_w + r402_p * r395_fine, r402_nsBot)));
            };
            var r395_SlantedVBars = function (r403_height, r403_lx, r403_l, r403_r, r403_p) {
                var _r403_t2, _r403_t3;
                var _r403_t0 = r403_height;
                var r403_nsTop = _r403_t0[0];
                var r403_nsBot = _r403_t0[1];
                var _r403_t1 = r395_SlantedDim(r403_l, r403_r);
                var r403_x = _r403_t1.x;
                var r403_w = _r403_t1.w;
                return r313_union(r313_SlashShape(r403_l + r403_x - r403_w + r403_p * r395_fine, r403_l + r403_x + r403_w + r403_p * r395_fine, r403_nsTop, r403_nsBot, r395_fine), r313_SlashShape(r403_r - r403_x - r403_w - r403_p * r395_fine, r403_r - r403_x + r403_w - r403_p * r395_fine, r403_nsTop, r403_nsBot, r395_fine));
            };
            var r395_normalHeight = [r1_mix(0, r313_CAP, 0.975), r1_mix(0, r313_CAP, 0.025)];
            var r395_tallHeight = [r1_mix(r313_OperTop, r313_ParenTop, 0.8), r1_mix(r313_OperBot, r313_ParenBot, 0.8)];
            var r395_NumberSignConfig = {
                "upright": [r395_UprightHBars, r395_UprightVBars, 0, r395_normalHeight],
                "uprightOpen": [r395_UprightHBarsOpen, r395_UprightVBars, 1 / 8, r395_normalHeight],
                "slanted": [r395_SlantedHBars, r395_SlantedVBars, 0, r395_normalHeight],
                "slantedOpen": [r395_SlantedHBarsOpen, r395_SlantedVBars, 1 / 8, r395_normalHeight],
                "uprightTall": [r395_UprightHBars, r395_UprightVBars, 0, r395_tallHeight],
                "uprightOpenTall": [r395_UprightHBarsOpen, r395_UprightVBars, 1 / 8, r395_tallHeight],
                "slantedTall": [r395_SlantedHBars, r395_SlantedVBars, 0, r395_tallHeight],
                "slantedOpenTall": [r395_SlantedHBarsOpen, r395_SlantedVBars, 1 / 8, r395_tallHeight]
            };
            var _r395_t0 = Object.entries(r395_NumberSignConfig)[Symbol.iterator]();
            var _r395_t1 = void 0;
            while (!(_r395_t1 = _r395_t0.next()).done) {
                _r395_t2 = _r395_t1.value;
                r395_suffix = _r395_t2[0];
                r395_FHBars = _r395_t2[1][0];
                r395_FVBars = _r395_t2[1][1];
                r395_p = _r395_t2[1][2];
                r395_height = _r395_t2[1][3];
                _r395_t2[1];
                (function () {
                    var r406_l = r313_SB - r395_fine / 2;
                    var r406_r = r313_RightSB + r395_fine / 2;
                    r313_xn$GlyphSaveSink$2Lrc4b.save("numberSign." + r395_suffix, null, r313_union(r395_FHBars(r395_height, r406_l, r406_l, r406_r, r395_p), r395_FVBars(r395_height, r406_l, r406_l, r406_r, r395_p)));
                    return r313_xn$GlyphSaveSink$2Lrc4b.save("numberSign.jr." + r395_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
                        var _r410_t0, _r410_t1;
                        r1_Joining.set(r410_currentGlyph, r1_Joining.Classes.Right);
                        r410_currentGlyph.include(r313_union(r395_FHBars(r395_height, r406_r - r313_Width, r406_l, r406_r, r395_p), r395_FVBars(r395_height, r406_r - r313_Width, r406_l, r406_r, r395_p)));
                        return void 0;
                    }));
                })();
            }
            r313_xn$selectvariant$7Hrq("numberSign", "#");
            r313_xn$selectvariant$7Hrq("numberSign.jr", new r313_xn$NamedParameterPair$2Lrc9b("follow", "numberSign"));
            return r313_xn$selectvariant$7Hrq("numberSign/cap", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "numberSign"));
        })();
    });
    return void 0;
});


