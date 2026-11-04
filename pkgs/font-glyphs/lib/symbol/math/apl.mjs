"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "../../meta/aesthetics.mjs";
import * as _s0_t2 from "@iosevka/geometry/point";
import * as _s0_t3 from "@iosevka/glyph/relation";
var _s0_t4;
export {_s0_t4 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_DesignParameters = _r1_t9.DesignParameters;
var _r1_t10 = _s0_t2;
var r1_Point = _r1_t10.Point;
var _r1_t11 = _s0_t3;
var r1_AplForm = _r1_t11.AplForm;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t4 = r1_apply = function () {
    var r310_block, _r310_t4, _r310_t6;
    var _r310_t3 = this;
    var _r310_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r310_t1 = _r310_t0.length;
    var _r310_t2 = 0;
    var _r310_t5 = _r310_t2 < _r310_t1;
    while (_r310_t5) {
        _r310_t6 = (r310_block = _r310_t0[_r310_t2], r310_block(_r310_t3), _r310_t2 = _r310_t2 + 1);
        _r310_t5 = _r310_t2 < _r310_t1;
    }
    return _r310_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r314_xn$Capture_Ext$2Lrc2b) {
    var _r314_t0, _r314_t1;
    r314_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r314_xn$Capture_Ext$2Lrc2b, "Symbol-Math-APL", function (r315_xn$Capture$2Lrc8, r315_xn$ExportCapture$2Lrc4b) {
        var _r315_t7, _r315_t8;
        var _r315_t0 = r315_xn$Capture$2Lrc8;
        var r315_xn$GlyphSaveSink$2Lrc4b = _r315_t0["$GlyphSaveSink$"];
        var r315_xn$NamedParameterPair$2Lrc9b = _r315_t0["$NamedParameterPair$"];
        var r315_xn$Exec$2Lrc5 = _r315_t0["$Exec$"];
        var r315_para = _r315_t0.para;
        var r315_glyphStore = _r315_t0.glyphStore;
        var r315_MarkSet = _r315_t0.MarkSet;
        var r315_AS_BASE = _r315_t0.AS_BASE;
        var r315_ALSO_METRICS = _r315_t0.ALSO_METRICS;
        var _r315_t1 = r315_xn$Capture$2Lrc8.Metrics;
        var r315_Width = _r315_t1.Width;
        var r315_SB = _r315_t1.SB;
        var r315_SymbolMid = _r315_t1.SymbolMid;
        var r315_ParenTop = _r315_t1.ParenTop;
        var r315_ParenBot = _r315_t1.ParenBot;
        var r315_OperTop = _r315_t1.OperTop;
        var r315_OperBot = _r315_t1.OperBot;
        var r315_TackTop = _r315_t1.TackTop;
        var r315_TackBot = _r315_t1.TackBot;
        var r315_BgOpTop = _r315_t1.BgOpTop;
        var r315_BgOpBot = _r315_t1.BgOpBot;
        var r315_Translate = _r315_t1.Translate;
        var r315_ApparentTranslate = _r315_t1.ApparentTranslate;
        var r315_HSwToV = _r315_t1.HSwToV;
        var r315_ArchDepth = _r315_t1.ArchDepth;
        var r315_AdviceStroke = _r315_t1.AdviceStroke;
        var r315_Stroke = _r315_t1.Stroke;
        var r315_CThin = _r315_t1.CThin;
        var r315_RightSB = _r315_t1.RightSB;
        var r315_Middle = _r315_t1.Middle;
        var r315_ArchDepthA = _r315_t1.ArchDepthA;
        var r315_ArchDepthB = _r315_t1.ArchDepthB;
        var r315_OperatorStroke = _r315_t1.OperatorStroke;
        var _r315_t2 = r315_xn$Capture$2Lrc8.SpiroFns;
        var r315_corner = _r315_t2.corner;
        var r315_flat = _r315_t2.flat;
        var r315_curl = _r315_t2.curl;
        var r315_widths = _r315_t2.widths;
        var r315_dispiro = _r315_t2.dispiro;
        var r315_xn$spirooutline$1aao = _r315_t2["spiro-outline"];
        var _r315_t3 = r315_xn$Capture$2Lrc8.SpiroFns;
        var r315_xn$decor$0cao = _r315_t3["decor@"];
        var r315_xn$decor$0cao1 = _r315_t3["decor@@"];
        var r315_xn$decor$0cao11 = _r315_t3["decor@@@"];
        var _r315_t4 = r315_xn$Capture$2Lrc8.BooleFns;
        var r315_union = _r315_t4.union;
        var r315_intersection = _r315_t4.intersection;
        var r315_difference = _r315_t4.difference;
        var _r315_t5 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r315_MaskLeft = _r315_t5.MaskLeft;
        var r315_MaskRight = _r315_t5.MaskRight;
        var r315_UShape = _r315_t5.UShape;
        var r315_HBar = _r315_t5.HBar;
        var r315_VBar = _r315_t5.VBar;
        var r315_Arch = _r315_t5.Arch;
        var r315_FlipAround = _r315_t5.FlipAround;
        var r315_ScaleAround = _r315_t5.ScaleAround;
        var r315_xn$clearanchors$1aao = _r315_t5["clear-anchors"];
        var _r315_t6 = r315_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r315_xn$queryglyph$1aao = _r315_t6["query-glyph"];
        var r315_xn$referglyph$1aao = _r315_t6["refer-glyph"];
        var r315_xn$deriveglyphs$7Hrq = _r315_t6["derive-glyphs"];
        var r315_xn$derivemultipartglyphs$7Hrq65 = _r315_t6["derive-multi-part-glyphs"];
        var r315_xn$derivecomposites$7Hrq = _r315_t6["derive-composites"];
        var r315_alias = _r315_t6.alias;
        var r315_NameUni = _r315_t6.NameUni;
        var r315_aplBoxInnerTop = r315_BgOpTop;
        var r315_aplBoxInnerBot = r315_BgOpBot;
        var r315_aplBoxSW = r315_AdviceStroke(4.5);
        var r315_aplBoxTop = r1_mix(r315_SymbolMid, r315_aplBoxInnerTop, 1.1);
        var r315_aplBoxBot = r1_mix(r315_SymbolMid, r315_aplBoxInnerBot, 1.1);
        var r315_aplBoxInnerScale = Math.min((r315_Width - r315_aplBoxSW * 1.75) / r315_Width, (r315_aplBoxInnerTop - r315_aplBoxInnerBot) / (r315_ParenTop - r315_ParenBot));
        var r315_Overlay = function (r318_fnOverlay, r318_fnBackground) {
            var _r318_t0, _r318_t1;
            return new r315_xn$Capture$2Lrc8.GlyphProc(function (r320_currentGlyph) {
                var r320_c, _r320_t2, _r320_t3, _r320_t4, _r320_t5, _r320_t6, _r320_tag7;
                var r320_sw = r315_AdviceStroke(6) / 2;
                var r320_candidates = [];
                var r320_segs = 3;
                var r320_overlay = r315_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
                    var _r323_t0, _r323_t1;
                    r323_currentGlyph.include(r318_fnOverlay, r315_AS_BASE, r315_ALSO_METRICS);
                    return void 0;
                }));
                var r320_background = r315_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                    var _r327_t0, _r327_t1;
                    r327_currentGlyph.include(r318_fnBackground, r315_AS_BASE, r315_ALSO_METRICS);
                    return void 0;
                }));
                var r320_corners = r315_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r331_currentGlyph) {
                    var r331_c, r331_z, _r331_t3, _r331_t4, _r331_t5, _r331_t6, _r331_t7, _r331_t8, _r331_tag9;
                    r331_currentGlyph.gizmo = r315_Translate(0, 0);
                    var _r331_t0 = r320_overlay.geometry.toContours();
                    var _r331_t1 = _r331_t0.length;
                    var _r331_t2 = 0;
                    while (_r331_t2 < _r331_t1) {
                        r331_c = _r331_t0[_r331_t2];
                        _r331_t3 = r331_c;
                        _r331_t4 = _r331_t3.length;
                        _r331_t5 = 0;
                        while (_r331_t5 < _r331_t4) {
                            r331_z = _r331_t3[_r331_t5];
                            (function () {
                                var r337_x, r337_y;
                                return r331_z.type === r1_Point.Type.Corner ? (r337_x = r331_z.x, r337_y = r331_z.y, r331_currentGlyph.include(r315_xn$spirooutline$1aao(r315_corner(r337_x - r320_sw, r337_y - r320_sw), r315_corner(r337_x + r320_sw, r337_y - r320_sw), r315_corner(r337_x + r320_sw, r337_y + r320_sw), r315_corner(r337_x - r320_sw, r337_y + r320_sw)))) : void 0;
                            })();
                            _r331_t5 = _r331_t5 + 1;
                        }
                        _r331_t2 = _r331_t2 + 1;
                    }
                    return void 0;
                }));
                var _r320_t0 = 0 - r320_segs;
                var _r320_t1 = r320_segs;
                var r320_r = _r320_t0;
                while (r320_r <= _r320_t1) {
                    _r320_t2 = 0 - r320_segs;
                    _r320_t3 = r320_segs;
                    r320_c = _r320_t2;
                    while (r320_c <= _r320_t3) {
                        (function () {
                            var r344_dx = r320_r / r320_segs * r320_sw;
                            var r344_dy = r320_c / r320_segs * r320_sw;
                            return r320_candidates.push(r315_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r347_currentGlyph) {
                                var _r347_t0, _r347_t1;
                                r347_currentGlyph.include(r320_overlay);
                                r347_currentGlyph.include(r315_Translate(r344_dx, r344_dy));
                                return void 0;
                            })));
                        })();
                        r320_c = r320_c + 1;
                    }
                    r320_r = r320_r + 1;
                }
                r320_currentGlyph.include(r315_difference(r320_background, r320_corners, r315_union.apply(null, r320_candidates)));
                r320_currentGlyph.include(r320_overlay);
                return void 0;
            });
        };
        r315_xn$GlyphSaveSink$2Lrc4b.save("apl/quad", 9109, new r315_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
            var _r354_t0, _r354_t1;
            var r354_l = r1_mix(0, r315_SB, 1 / 3);
            var r354_r = r1_mix(r315_Width, r315_RightSB, 1 / 3);
            r354_currentGlyph.include(r315_HBar.t(r354_l, r354_r, r315_aplBoxTop, r315_aplBoxSW));
            r354_currentGlyph.include(r315_HBar.b(r354_l, r354_r, r315_aplBoxBot, r315_aplBoxSW));
            r354_currentGlyph.include(r315_VBar.l(r354_l, r315_aplBoxTop, r315_aplBoxBot, r315_aplBoxSW));
            r354_currentGlyph.include(r315_VBar.r(r354_r, r315_aplBoxTop, r315_aplBoxBot, r315_aplBoxSW));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save("apl/quadShadow", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
            var _r361_t0, _r361_t1;
            var r361_l = r1_mix(0, r315_SB, 1 / 3);
            var r361_r = r1_mix(r315_Width, r315_RightSB, 1 / 3);
            r361_currentGlyph.include(r315_xn$spirooutline$1aao(r315_corner(r361_l, r315_aplBoxTop), r315_corner(r361_r, r315_aplBoxTop), r315_corner(r361_r, r315_aplBoxBot), r315_corner(r361_l, r315_aplBoxBot)));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save("apl/iBar", 9014, new r315_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
            var _r365_t0, _r365_t1;
            var r365_l = r1_mix(0, r315_SB, 1 / 3);
            var r365_r = r1_mix(r315_Width, r315_RightSB, 1 / 3);
            r365_currentGlyph.include(r315_HBar.t(r365_l, r365_r, r315_TackTop, r315_OperatorStroke));
            r365_currentGlyph.include(r315_HBar.b(r365_l, r365_r, r315_TackBot, r315_OperatorStroke));
            r365_currentGlyph.include(r315_VBar.m(r315_Middle, r315_TackTop, r315_TackBot, r315_OperatorStroke));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save("apl/squish", 9015, new r315_xn$Capture$2Lrc8.GlyphProc(function (r371_currentGlyph) {
            var _r371_t0, _r371_t1;
            var r371_l = r1_mix(r315_SB, r315_RightSB, 1 / 8);
            var r371_r = r1_mix(r315_RightSB, r315_SB, 1 / 8);
            r371_currentGlyph.include(r315_union(r315_HBar.t(r371_l, r371_r, r315_aplBoxTop, r315_aplBoxSW), r315_HBar.b(r371_l, r371_r, r315_aplBoxBot, r315_aplBoxSW), r315_VBar.l(r371_l, r315_aplBoxTop, r315_aplBoxBot, r315_aplBoxSW), r315_VBar.r(r371_r, r315_aplBoxTop, r315_aplBoxBot, r315_aplBoxSW)));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save("apl/lamp", 9053, new r315_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
            var _r375_t0, _r375_t1;
            var r375_shift = r315_OperTop - 2 * r315_ArchDepth - r315_OperBot;
            var r375_fine = r315_CThin * r315_AdviceStroke(4);
            var r375_InnerCircleMask = function (r376_sw) {
                var _r376_t0, _r376_t1;
                return r315_xn$spirooutline$1aao(r315_corner(r315_SB + r315_HSwToV(r315_Stroke - r375_fine), r315_OperTop + r375_shift), r315_curl(r315_SB + r315_HSwToV(r315_Stroke - r375_fine), r315_OperBot + r315_ArchDepthB + r375_shift), r315_Arch.lhs(r315_OperBot + (r315_OperatorStroke - r376_sw) + r375_shift, new r315_xn$NamedParameterPair$2Lrc9b("sw", r315_OperatorStroke)), r315_flat(r315_RightSB - r315_HSwToV(r315_Stroke - r375_fine), r315_OperBot + r315_ArchDepthA + r375_shift), r315_corner(r315_RightSB - r315_HSwToV(r315_Stroke - r375_fine), r315_OperTop + r375_shift));
            };
            r375_currentGlyph.include(r315_union(new r315_xn$Capture$2Lrc8.GlyphProc(function (r380_currentGlyph) {
                var _r380_t0, _r380_t1;
                r380_currentGlyph.include(r315_UShape(r315_OperTop, r315_OperBot, r315_SB, r315_RightSB, r315_OperatorStroke), true, true);
                r380_currentGlyph.include(r315_FlipAround(r315_Middle, r315_SymbolMid));
                return void 0;
            }), r315_intersection(r315_UShape(r315_OperTop + r375_shift, r315_OperBot + r375_shift, r315_SB, r315_RightSB, r315_OperatorStroke), r375_InnerCircleMask(r315_OperatorStroke), new r315_xn$Capture$2Lrc8.GlyphProc(function (r384_currentGlyph) {
                var _r384_t0, _r384_t1;
                r384_currentGlyph.include(r375_InnerCircleMask(r375_fine), true, true);
                r384_currentGlyph.include(r315_FlipAround(r315_Middle, r315_OperTop - r315_ArchDepth));
                return void 0;
            }))));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save("apl/bar", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
            var _r389_t0, _r389_t1;
            r389_currentGlyph.include(r315_VBar.m(r315_Middle, r315_aplBoxTop, r315_aplBoxBot, r315_aplBoxSW));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save("apl/longBar", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r393_currentGlyph) {
            var _r393_t0, _r393_t1;
            r393_currentGlyph.include(r315_VBar.m(r315_Middle, r315_aplBoxTop, r315_aplBoxBot, r315_aplBoxSW));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save("apl/minus", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r397_currentGlyph) {
            var _r397_t0, _r397_t1;
            r397_currentGlyph.include(r315_dispiro(r315_widths.center(r315_aplBoxSW), r315_flat(r315_RightSB, r315_SymbolMid), r315_curl(r315_SB, r315_SymbolMid)));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save("apl/backSlash", null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
            var _r401_t0, _r401_t1;
            r401_currentGlyph.include(r315_dispiro(r315_widths.center(r315_aplBoxSW), r315_flat(r315_SB, r315_OperTop), r315_curl(r315_RightSB, r315_OperBot)));
            return void 0;
        }));
        var r315_aplBoxed = function (r403_shape) {
            var _r403_t0, _r403_t1;
            return r315_Overlay(r315_xn$referglyph$1aao("apl/quad"), new r315_xn$Capture$2Lrc8.GlyphProc(function (r405_currentGlyph) {
                var _r405_t0, _r405_t1;
                r405_currentGlyph.include(r315_intersection(r315_xn$referglyph$1aao("apl/quadShadow"), r403_shape));
                r405_currentGlyph.include(r315_ScaleAround(r315_Middle, r315_SymbolMid, r315_aplBoxInnerScale));
                return void 0;
            }));
        };
        var r315_centerSmallPunctuations = function () {
            var _r408_t0, _r408_t1;
            return new r315_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
                var _r410_t0, _r410_t1;
                r410_currentGlyph.include(r315_ApparentTranslate(r315_Width / 2 - r410_currentGlyph.advanceWidth / 2, 0));
                r410_currentGlyph.setWidth(r315_Width);
                return void 0;
            });
        };
        var r315_aplBoxedInner = function (r413_gn) {
            var _r413_t0, _r413_t1;
            return r315_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r416_currentGlyph) {
                var _r416_t0, _r416_t1;
                r416_currentGlyph.include(r315_xn$referglyph$1aao(r413_gn), r315_AS_BASE, r315_ALSO_METRICS);
                r416_currentGlyph.include(r315_centerSmallPunctuations());
                return void 0;
            }));
        };
        r315_alias("apl/iota", 9075, "grek/iota");
        r315_alias("apl/rho", 9076, "grek/rho");
        r315_alias("apl/omega", 9077, "grek/omega");
        r315_alias("apl/alpha", 9082, "grek/alpha");
        var r315_DeriveBoxed = function (r419_src) {
            var _r419_t0, _r419_t1;
            return r315_aplBoxed(r315_aplBoxedInner(r419_src));
        };
        r315_xn$deriveglyphs$7Hrq("uni2338", 9016, "equal", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni2339", 9017, "divide", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni233A", 9018, "whiteDiamondOperator", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni233B", 9019, "mathSmallCircle", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni233C", 9020, "whiteCircle.NWID", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni2341", 9025, "slash", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni2342", 9026, "backslash", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni2343", 9027, "less", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni2344", 9028, "greater", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni2347", 9031, "arrowLeft.NWID", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni2348", 9032, "arrowRight.NWID", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni234C", 9036, "vee", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni234D", 9037, "increment.aplForm", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni2350", 9040, "arrowUp.NWID", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni2353", 9043, "wedge", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni2354", 9044, "nabla.aplForm", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni2357", 9047, "arrowDown.NWID", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni235E", 9054, "asciiSingleQuote/body/straight", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni2360", 9056, "colon/mid", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni236F", 9071, "notequal", r315_DeriveBoxed);
        r315_xn$deriveglyphs$7Hrq("uni2370", 9072, "question", r315_DeriveBoxed);
        r315_xn$GlyphSaveSink$2Lrc4b.save(9021, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r422_currentGlyph) {
            var _r422_t0, _r422_t1;
            r422_currentGlyph.include(r315_xn$referglyph$1aao("apl/bar"), true, true);
            r422_currentGlyph.include(r315_xn$referglyph$1aao("whiteCircle.NWID"));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save(9022, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r427_currentGlyph) {
            var _r427_t0, _r427_t1;
            r427_currentGlyph.include(r315_xn$referglyph$1aao("whiteCircle.NWID"), true, true);
            r427_currentGlyph.include(r315_xn$referglyph$1aao("whiteSmallCircle.NWID"));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save(9023, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r432_currentGlyph) {
            var _r432_t0, _r432_t1;
            r432_currentGlyph.include(r315_xn$referglyph$1aao("apl/minus"), true, true);
            r432_currentGlyph.include(r315_xn$referglyph$1aao("slash"));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save(9024, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r437_currentGlyph) {
            var _r437_t0, _r437_t1;
            r437_currentGlyph.include(r315_xn$referglyph$1aao("apl/minus"), true, true);
            r437_currentGlyph.include(r315_xn$referglyph$1aao("backslash"));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save(9033, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r442_currentGlyph) {
            var _r442_t0, _r442_t1;
            r442_currentGlyph.include(r315_xn$referglyph$1aao("apl/backSlash"), true, true);
            r442_currentGlyph.include(r315_xn$referglyph$1aao("whiteCircle.NWID"));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save(9039, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r447_currentGlyph) {
            var _r447_t0, _r447_t1;
            r447_currentGlyph.include(r315_xn$referglyph$1aao("arrowUp.NWID"), true, true);
            r447_currentGlyph.include(r315_xn$referglyph$1aao("minus"));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save(9046, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r452_currentGlyph) {
            var _r452_t0, _r452_t1;
            r452_currentGlyph.include(r315_xn$referglyph$1aao("arrowDown.NWID"), true, true);
            r452_currentGlyph.include(r315_xn$referglyph$1aao("minus"));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save(9062, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r457_currentGlyph) {
            var _r457_t0, _r457_t1;
            r457_currentGlyph.include(r315_xn$referglyph$1aao("cup"), true, true);
            r457_currentGlyph.include(r315_xn$referglyph$1aao("apl/bar"));
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save(9069, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r462_currentGlyph) {
            var _r462_t0, _r462_t1;
            r462_currentGlyph.include(r315_xn$referglyph$1aao("overlayTildeOperator"), true, true);
            r462_currentGlyph.include(r315_xn$referglyph$1aao("bar"));
            return void 0;
        }));
        r315_xn$derivecomposites$7Hrq("apl/deltaStile", 9035, "increment.aplThin", "apl/longBar");
        r315_xn$derivecomposites$7Hrq("apl/delStile", 9042, "nabla.aplThin", "apl/longBar");
        r315_xn$derivecomposites$7Hrq("apl/deltaUnderbar", 9049, "increment.aplForm", "sbRsbUnderlineBelow");
        r315_xn$derivecomposites$7Hrq("apl/zeroTilde", 9068, "zero.lnum/forceUnslashed", "overlayTildeOperator");
        r315_xn$derivecomposites$7Hrq("apl/barComma", 9066, "comma", r315_centerSmallPunctuations(), "minus");
        var r315_AplAccented = function (r465_u, r465_part1, r465_part2, r465_marks) {
            var _r465_t0, _r465_t1;
            return r315_xn$derivemultipartglyphs$7Hrq65(r315_NameUni(r465_u), r465_u, [r465_part1, r465_part2], function (r466_srcs, r466_gr) {
                var _r466_t0, _r466_t1;
                return new r315_xn$Capture$2Lrc8.GlyphProc(function (r468_currentGlyph) {
                    var _r468_t0, _r468_t1;
                    r468_currentGlyph.include(r315_xn$referglyph$1aao(r466_srcs[0]), true, true);
                    r468_currentGlyph.include(r315_centerSmallPunctuations());
                    r468_currentGlyph.include(r465_marks);
                    r468_currentGlyph.include(r315_xn$referglyph$1aao(r466_srcs[1]));
                    r468_currentGlyph.include(r315_xn$clearanchors$1aao());
                    return void 0;
                });
            });
        };
        r315_AplAccented(9057, "top", "dieresisAbove", r315_MarkSet.tack());
        r315_AplAccented(9058, "nabla.aplForm", "dieresisAbove", r315_MarkSet.tack());
        r315_AplAccented(9059, "asterisk.pentaSMid", "dieresisAbove", r315_MarkSet.plus());
        r315_AplAccented(9060, "mathSmallCircle", "dieresisAbove", r315_MarkSet.plus());
        r315_AplAccented(9061, "whiteCircle.NWID", "dieresisAbove", r315_MarkSet.plus());
        r315_AplAccented(9064, "asciiTilde.low", "dieresisAbove", r315_MarkSet.plus());
        r315_AplAccented(9065, "greater.narrow", "dieresisAbove", r315_MarkSet.plus());
        r315_AplAccented(9048, "asciiSingleQuote/body/straight", "sbRsbUnderlineBelow", r315_MarkSet.plus());
        r315_AplAccented(9050, "whiteDiamondOperator", "sbRsbUnderlineBelow", r315_MarkSet.plus());
        r315_AplAccented(9051, "mathSmallCircle", "sbRsbUnderlineBelow", r315_MarkSet.plus());
        r315_AplAccented(9052, "whiteCircle.NWID", "sbRsbUnderlineBelow", r315_MarkSet.plus());
        r315_AplAccented(9079, "smallElement.aplForm", "sbRsbUnderlineBelow", r315_MarkSet.e());
        r315_xn$derivecomposites$7Hrq("apl/alphaBar", 9078, "grek/alpha", r315_xn$referglyph$1aao("sbRsbUnderlineBelow"), r315_xn$clearanchors$1aao());
        r315_xn$derivecomposites$7Hrq("apl/iotaBar", 9080, "grek/iota", r315_xn$referglyph$1aao("sbRsbUnderlineBelow"), r315_xn$clearanchors$1aao());
        r315_xn$derivecomposites$7Hrq("apl/omegaBar", 9081, "grek/omega", r315_xn$referglyph$1aao("sbRsbUnderlineBelow"), r315_xn$clearanchors$1aao());
        r315_xn$GlyphSaveSink$2Lrc4b.save(9029, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r476_currentGlyph) {
            var _r476_t0, _r476_t1;
            r476_currentGlyph.include(r315_Overlay(r315_xn$referglyph$1aao("arrowLeft.NWID"), r315_xn$referglyph$1aao("apl/bar")), true, true);
            return void 0;
        }));
        r315_xn$GlyphSaveSink$2Lrc4b.save(9030, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r480_currentGlyph) {
            var _r480_t0, _r480_t1;
            r480_currentGlyph.include(r315_Overlay(r315_xn$referglyph$1aao("arrowRight.NWID"), r315_xn$referglyph$1aao("apl/bar")), true, true);
            return void 0;
        }));
        r315_xn$derivemultipartglyphs$7Hrq65("uni235F", 9055, ["mathO/outline", "opAsterisk.penta", "mathO"], function (r482_srcs, r482_sel) {
            var _r482_t0, _r482_t1;
            return new r315_xn$Capture$2Lrc8.GlyphProc(function (r484_currentGlyph) {
                var _r484_t1, _r484_t2;
                var _r484_t0 = r482_srcs;
                var r484_outline = _r484_t0[0];
                var r484_asterisk = _r484_t0[1];
                var r484_mathO = _r484_t0[2];
                r484_currentGlyph.include(r315_union(r315_xn$referglyph$1aao(r484_mathO), r315_intersection(r315_xn$referglyph$1aao(r484_outline), r315_xn$referglyph$1aao(r484_asterisk))));
                return void 0;
            });
        });
        r315_xn$deriveglyphs$7Hrq("apl/barSemicolon", 9070, "semicolon", function (r486_src, r486_gr) {
            var _r486_t0, _r486_t1;
            return r315_Overlay(r315_aplBoxedInner(r486_src), r315_xn$referglyph$1aao("underscore.high"));
        });
        r315_xn$GlyphSaveSink$2Lrc4b.save(9063, null, new r315_xn$Capture$2Lrc8.GlyphProc(function (r489_currentGlyph) {
            var _r489_t0, _r489_t1;
            r489_currentGlyph.include(r315_xn$referglyph$1aao("apl/bar"), true, true);
            r489_currentGlyph.include(r315_union(r315_intersection(r315_MaskLeft(r315_Middle), r315_xn$referglyph$1aao("subst/aplLeft")), r315_intersection(r315_MaskRight(r315_Middle), r315_xn$referglyph$1aao("subst"))));
            return void 0;
        }));
        var r315_DeriveTiledOverlay = function (r492_srcs, r492_gr) {
            var _r492_t0, _r492_t1;
            return new r315_xn$Capture$2Lrc8.GlyphProc(function (r494_currentGlyph) {
                var _r494_t0, _r494_t1;
                r494_currentGlyph.include(r315_xn$referglyph$1aao("overlayTildeOperator"), true, true);
                r494_currentGlyph.include(r315_union(r315_difference(r315_xn$referglyph$1aao(r492_srcs[0]), r315_xn$referglyph$1aao("overlayTildeOperatorAboveMask")), r315_intersection(r315_xn$referglyph$1aao(r492_srcs[1]), r315_xn$referglyph$1aao("overlayTildeOperatorAboveMask"))));
                return void 0;
            });
        };
        r315_xn$derivemultipartglyphs$7Hrq65("uni236B", 9067, ["nabla.aplThin", "nabla.aplForm"], r315_DeriveTiledOverlay);
        r315_xn$derivemultipartglyphs$7Hrq65("uni2371", 9073, ["vee/aplThin", "vee"], r315_DeriveTiledOverlay);
        r315_xn$derivemultipartglyphs$7Hrq65("uni2372", 9074, ["wedge/aplThin", "wedge"], r315_DeriveTiledOverlay);
        r315_xn$ExportCapture$2Lrc4b(function () {
            var _r498_t0, _r498_t1;
            return {
                "LinkAplFormForNwidWwid": r315_LinkAplFormForNwidWwid
            };
        });
        var r315_LinkAplFormForNwidWwid = function (r499_gn) {
            var r499_us, r499_u, _r499_t0, _r499_t1, _r499_t2, _r499_t3, _r499_t4, _r499_t5, _r499_t6, _r499_t7, _r499_t8;
            var r499_gWwid = r315_xn$queryglyph$1aao("" + r499_gn + ".WWID");
            var r499_gNwid = r315_xn$queryglyph$1aao("" + r499_gn + ".NWID");
            if (r499_gWwid && r499_gNwid) {
                r1_AplForm.set(r499_gWwid, "" + r499_gn + ".NWID");
                if (r315_para.variantSelector["__enableAplForm"] === "enable") {
                    r499_us = r315_glyphStore.queryUnicodeOf(r499_gWwid);
                    if (r499_us) {
                        r315_glyphStore.deleteUnicodeAssignmentsOf(r499_gWwid);
                        _r499_t0 = r499_us[Symbol.iterator]();
                        _r499_t1 = void 0;
                        _r499_t7 = !(_r499_t1 = _r499_t0.next()).done;
                        while (_r499_t7) {
                            _r499_t8 = (r499_u = _r499_t1.value, r315_glyphStore.encodeGlyph(r499_u, r499_gNwid));
                            _r499_t7 = !(_r499_t1 = _r499_t0.next()).done;
                        }
                        return _r499_t8;
                    } else return void 0;
                } else return void 0;
            } else return void 0;
        };
        r315_LinkAplFormForNwidWwid("whiteCircle");
        r315_LinkAplFormForNwidWwid("arrowLeft");
        r315_LinkAplFormForNwidWwid("arrowRight");
        r315_LinkAplFormForNwidWwid("arrowUp");
        r315_LinkAplFormForNwidWwid("arrowDown");
        r315_LinkAplFormForNwidWwid("arrowUpDown");
        r315_LinkAplFormForNwidWwid("arrowUpLeft");
        r315_LinkAplFormForNwidWwid("arrowDownLeft");
        r315_LinkAplFormForNwidWwid("arrowLeftRightHR");
        r315_LinkAplFormForNwidWwid("dblArrowLeft");
        r315_LinkAplFormForNwidWwid("hookArrowLeft");
        r315_LinkAplFormForNwidWwid("uni231C");
        r315_LinkAplFormForNwidWwid("uni2389");
        r315_LinkAplFormForNwidWwid("uni238A");
        r315_LinkAplFormForNwidWwid("uni25F6");
        r315_LinkAplFormForNwidWwid("uni2687");
        r315_LinkAplFormForNwidWwid("infty");
        r315_LinkAplFormForNwidWwid("invLazyS");
        r315_LinkAplFormForNwidWwid("whiteDiamond");
        r315_LinkAplFormForNwidWwid("whiteSquare");
        r315_LinkAplFormForNwidWwid("whiteTriangleUp");
        r315_LinkAplFormForNwidWwid("whiteTriangleDown");
        r315_LinkAplFormForNwidWwid("whiteTriangleRB");
        r315_LinkAplFormForNwidWwid("whiteTriangleRT");
        r315_LinkAplFormForNwidWwid("arrowDownRight");
        r315_LinkAplFormForNwidWwid("arrowTailFromLeft");
        r315_LinkAplFormForNwidWwid("arrowTailFromRight");
        r315_LinkAplFormForNwidWwid("barArrowUp");
        r315_LinkAplFormForNwidWwid("barArrowDown");
        r315_LinkAplFormForNwidWwid("countersink");
        r315_LinkAplFormForNwidWwid("cwOpenCircleArrow");
        r315_LinkAplFormForNwidWwid("dashArrowUp");
        r315_LinkAplFormForNwidWwid("dottedCircle");
        r315_LinkAplFormForNwidWwid("dottedSquare");
        r315_LinkAplFormForNwidWwid("lightning");
        r315_LinkAplFormForNwidWwid("loopArrowLeft");
        r315_LinkAplFormForNwidWwid("loopArrowRight");
        r315_LinkAplFormForNwidWwid("mathCDots");
        r315_LinkAplFormForNwidWwid("telephoneRecorder");
        r315_LinkAplFormForNwidWwid("vBarSquare");
        r315_LinkAplFormForNwidWwid("zigZagArrow");
        r315_LinkAplFormForNwidWwid("uni21CC");
        r315_LinkAplFormForNwidWwid("uni231D");
        r315_LinkAplFormForNwidWwid("uni238B");
        r315_LinkAplFormForNwidWwid("uni25E0");
        r315_LinkAplFormForNwidWwid("uni25E1");
        r315_LinkAplFormForNwidWwid("uni25F0");
        r315_LinkAplFormForNwidWwid("uni25F3");
        r315_LinkAplFormForNwidWwid("uni25F4");
        return r315_LinkAplFormForNwidWwid("uni2682");
    });
    return void 0;
});


