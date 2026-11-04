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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Math-VAndCup", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_leti12, _r312_leti13, _r312_leti14, _r312_leti15, _r312_leti16, _r312_leti17, _r312_leti18, _r312_leti19, _r312_leti20, _r312_t21, _r312_t22, _r312_t28, _r312_tag29, _r312_t36, _r312_tag37, _r312_t44, _r312_tag45, _r312_t52, _r312_tag53, _r312_t60, _r312_tag61, _r312_t68, _r312_tag69, _r312_t76, _r312_tag77, _r312_t84, _r312_tag85, _r312_t92, _r312_tag93;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_para = _r312_t0.para;
        var r312_AS_BASE = _r312_t0.AS_BASE;
        var r312_ALSO_METRICS = _r312_t0.ALSO_METRICS;
        var r312_DivFrame = _r312_t0.DivFrame;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_SymbolMid = _r312_t1.SymbolMid;
        var r312_OperTop = _r312_t1.OperTop;
        var r312_OperBot = _r312_t1.OperBot;
        var r312_PlusTop = _r312_t1.PlusTop;
        var r312_PlusBot = _r312_t1.PlusBot;
        var r312_Scale = _r312_t1.Scale;
        var r312_Translate = _r312_t1.Translate;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_Downward = _r312_t1.Downward;
        var r312_ArchDepth = _r312_t1.ArchDepth;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_Stroke = _r312_t1.Stroke;
        var r312_HalfStroke = _r312_t1.HalfStroke;
        var r312_QuarterStroke = _r312_t1.QuarterStroke;
        var r312_CThin = _r312_t1.CThin;
        var r312_RightSB = _r312_t1.RightSB;
        var r312_Middle = _r312_t1.Middle;
        var r312_DotRadius = _r312_t1.DotRadius;
        var r312_SideJut = _r312_t1.SideJut;
        var r312_ArchDepthAOf = _r312_t1.ArchDepthAOf;
        var r312_ArchDepthBOf = _r312_t1.ArchDepthBOf;
        var r312_OperatorStroke = _r312_t1.OperatorStroke;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_end = _r312_t2.end;
        var r312_straight = _r312_t2.straight;
        var r312_widths = _r312_t2.widths;
        var r312_heading = _r312_t2.heading;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_intersection = _r312_t4.intersection;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_UShape = _r312_t5.UShape;
        var r312_HSerif = _r312_t5.HSerif;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var r312_Ungizmo = _r312_t5.Ungizmo;
        var r312_Regizmo = _r312_t5.Regizmo;
        var r312_FlipAround = _r312_t5.FlipAround;
        var r312_WithDotVariants = _r312_t5.WithDotVariants;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r312_xn$referglyph$1aao = _r312_t6["refer-glyph"];
        var r312_turned = _r312_t6.turned;
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Greek-Pi"].resolve();
        var r312_PiShape = _r312_t7.PiShape;
        var _r312_t8 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Cyrillic-Sha"].resolve();
        var r312_CyrShaShape = _r312_t8.CyrShaShape;
        var _r312_t9 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Arrow-Shared"].resolve();
        var r312_ArrowShape = _r312_t9.ArrowShape;
        var _r312_t10 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Math-Relation-Common"].resolve();
        var r312_EqualHalfSpace = _r312_t10.EqualHalfSpace;
        var _r312_t11 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.NotGlyphFn.resolve();
        var r312_NotGlyphSw = _r312_t11.NotGlyphSw;
        var r312_VeeShape = function (r320_top, r320_bot, r320_sw) {
            var _r320_t0, _r320_t1;
            return r312_union(r312_dispiro(r312_widths.lhs(r1_fallback(r320_sw, r312_OperatorStroke)), r312_flat(r312_SB, r320_top, r312_heading(r312_Downward)), r312_curl(r312_Middle - r312_HSwToV(r312_HalfStroke), r320_bot, r312_heading(r312_Downward))), r312_dispiro(r312_widths.rhs(r1_fallback(r320_sw, r312_OperatorStroke)), r312_flat(r312_RightSB, r320_top, r312_heading(r312_Downward)), r312_curl(r312_Middle + r312_HSwToV(r312_HalfStroke), r320_bot, r312_heading(r312_Downward))));
        };
        var r312_WedgeShape = function (r321_top, r321_bot, r321_sw) {
            var _r321_t0, _r321_t1;
            return r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var _r324_t0, _r324_t1;
                r324_currentGlyph.include(r312_VeeShape(r321_top, r321_bot, r321_sw));
                r324_currentGlyph.include(r312_FlipAround(r312_Middle, r1_mix(r321_top, r321_bot, 0.5)));
                return void 0;
            }));
        };
        r312_xn$GlyphSaveSink$2Lrc4b.save("wedge", 8743, r312_WedgeShape(r312_OperTop, r312_OperBot));
        r312_xn$GlyphSaveSink$2Lrc4b.save("vee", 8744, r312_VeeShape(r312_OperTop, r312_OperBot));
        r312_xn$GlyphSaveSink$2Lrc4b.save("wedge/aplThin", null, r312_WedgeShape(r312_OperTop, r312_OperBot, r312_AdviceStroke(4)));
        r312_xn$GlyphSaveSink$2Lrc4b.save("vee/aplThin", null, r312_VeeShape(r312_OperTop, r312_OperBot, r312_AdviceStroke(4)));
        var r312_WedgeBarGap = function () {
            var _r331_t0, _r331_t1;
            return Math.max(r312_AdviceStroke(4), (r312_OperTop - r312_OperBot) / 8);
        };
        var _r312_t23 = r312_xn$GlyphSaveSink$2Lrc4b;
        var _r312_t24 = _r312_t23.save;
        var _r312_t25 = "math/logic/xor";
        var _r312_t26 = 8891;
        var _r312_t27 = r312_WedgeBarGap();
        var _r312_t30 = (function (_r312_leti12) {
            var r333_gap = _r312_leti12;
            return r312_union(r312_HBar.b(r312_SB, r312_RightSB, r312_OperBot, r312_OperatorStroke), r312_VeeShape(r312_OperTop, r312_OperBot + r312_OperatorStroke + r333_gap));
        })(_r312_t27);
        _r312_t24.call(_r312_t23, _r312_t25, _r312_t26, _r312_t30);
        var _r312_t31 = r312_xn$GlyphSaveSink$2Lrc4b;
        var _r312_t32 = _r312_t31.save;
        var _r312_t33 = "math/logic/nand";
        var _r312_t34 = 8892;
        var _r312_t35 = r312_WedgeBarGap();
        var _r312_t38 = (function (_r312_leti13) {
            var r335_gap = _r312_leti13;
            return r312_union(r312_HBar.t(r312_SB, r312_RightSB, r312_OperTop, r312_OperatorStroke), r312_WedgeShape(r312_OperTop - r312_OperatorStroke - r335_gap, r312_OperBot));
        })(_r312_t35);
        _r312_t32.call(_r312_t31, _r312_t33, _r312_t34, _r312_t38);
        var _r312_t39 = r312_xn$GlyphSaveSink$2Lrc4b;
        var _r312_t40 = _r312_t39.save;
        var _r312_t41 = "math/logic/nor";
        var _r312_t42 = 8893;
        var _r312_t43 = r312_WedgeBarGap();
        var _r312_t46 = (function (_r312_leti14) {
            var r337_gap = _r312_leti14;
            return r312_union(r312_HBar.t(r312_SB, r312_RightSB, r312_OperTop, r312_OperatorStroke), r312_VeeShape(r312_OperTop - r312_OperatorStroke - r337_gap, r312_OperBot));
        })(_r312_t43);
        _r312_t40.call(_r312_t39, _r312_t41, _r312_t42, _r312_t46);
        r312_xn$GlyphSaveSink$2Lrc4b.save("curlyVee", 8910, new r312_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
            var _r340_t0, _r340_t1;
            var r340_fine = r312_CThin * r312_OperatorStroke;
            r340_currentGlyph.include(r312_dispiro(r312_g4(r312_SB, r312_OperTop, r312_widths.center(r312_OperatorStroke)), r312_straight.down.end(r312_Middle - r312_HSwToV(0.5 * r312_OperatorStroke), r312_OperBot, r312_widths.heading(r340_fine, 0, r312_Downward))));
            r340_currentGlyph.include(r312_dispiro(r312_widths.center(r312_OperatorStroke), r312_g4(r312_RightSB, r312_OperTop, r312_widths.center(r312_OperatorStroke)), r312_straight.down.end(r312_Middle + r312_HSwToV(0.5 * r312_OperatorStroke), r312_OperBot, r312_widths.heading(0, r340_fine, r312_Downward))));
            return void 0;
        }));
        r312_turned("curlyWedge", 8911, "curlyVee", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("mt/projection", 8965, r312_union(r312_HBar.t(r312_SB, r312_RightSB, r312_OperTop, r312_OperatorStroke), r312_WedgeShape(r312_OperTop - r312_OperatorStroke, r312_OperBot)));
        var _r312_t47 = r312_xn$GlyphSaveSink$2Lrc4b;
        var _r312_t48 = _r312_t47.save;
        var _r312_t49 = "mt/perspective";
        var _r312_t50 = 8966;
        var _r312_t51 = r312_WedgeBarGap();
        var _r312_t54 = (function (_r312_leti15) {
            var r345_gap = _r312_leti15;
            return r312_union(r312_HBar.t(r312_SB, r312_RightSB, r312_OperTop, r312_OperatorStroke), r312_HBar.t(r312_SB, r312_RightSB, r312_OperTop - r312_OperatorStroke - r345_gap, r312_OperatorStroke), r312_WedgeShape(r312_OperTop - 2 * r312_OperatorStroke - r345_gap, r312_OperBot));
        })(_r312_t51);
        _r312_t48.call(_r312_t47, _r312_t49, _r312_t50, _r312_t54);
        r312_xn$GlyphSaveSink$2Lrc4b.save("doubleVee", 10836, new r312_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
            var _r348_t0, _r348_t1;
            var r348_sw = r312_AdviceStroke(6);
            r348_currentGlyph.include(r312_dispiro(r312_widths.center(r348_sw), r312_flat(r312_SB, r312_OperTop, r312_heading(r312_Downward)), r312_curl(r312_Middle, r312_OperBot, r312_heading(r312_Downward))));
            r348_currentGlyph.include(r312_dispiro(r312_widths.center(r348_sw), r312_flat(r312_RightSB, r312_OperTop, r312_heading(r312_Downward)), r312_curl(r312_Middle, r312_OperBot, r312_heading(r312_Downward))));
            var r348_offsetRatio = 1 / 4;
            var r348_bias = (r312_RightSB - r312_SB) * r348_offsetRatio;
            var r348_a = r312_dispiro(r312_widths.center(r348_sw), r312_flat(r312_SB + r348_bias, r312_OperTop, r312_heading(r312_Downward)), r312_curl(r312_Middle + r348_bias, r312_OperBot, r312_heading(r312_Downward)));
            var r348_b = r312_dispiro(r312_widths.center(r348_sw), r312_flat(r312_RightSB - r348_bias, r312_OperTop, r312_heading(r312_Downward)), r312_curl(r312_Middle - r348_bias, r312_OperBot, r312_heading(r312_Downward)));
            r348_currentGlyph.include(r312_union(r312_intersection(r348_a, r348_b), r312_difference(r312_union(r348_a, r348_b), r312_xn$spirooutline$1aao(r312_corner(0, r312_OperBot), r312_corner(r312_Width, r312_OperBot), r312_corner(r312_Width, r1_mix(r312_OperBot, r312_OperTop, 1 - 2 * r348_offsetRatio)), r312_corner(0, r1_mix(r312_OperBot, r312_OperTop, 1 - 2 * r348_offsetRatio))))));
            return void 0;
        }));
        r312_turned("doubleWedge", 10835, "doubleVee", r312_Middle, r312_SymbolMid);
        var _r312_t55 = r312_xn$GlyphSaveSink$2Lrc4b;
        var _r312_t56 = _r312_t55.save;
        var _r312_t57 = "math/logic/equalAnd";
        var _r312_t58 = 10846;
        var _r312_t59 = r312_WedgeBarGap();
        var _r312_t62 = (function (_r312_leti16) {
            var r353_gap = _r312_leti16;
            return r312_union(r312_HBar.t(r312_SB, r312_RightSB, r312_OperTop + r312_EqualHalfSpace * 0.75, r312_OperatorStroke), r312_HBar.t(r312_SB, r312_RightSB, r312_OperTop - r312_EqualHalfSpace * 0.75, r312_OperatorStroke), r312_WedgeShape(r312_OperTop - r312_OperatorStroke - r312_EqualHalfSpace * 0.75 - r353_gap, r312_OperBot));
        })(_r312_t59);
        _r312_t56.call(_r312_t55, _r312_t57, _r312_t58, _r312_t62);
        var _r312_t63 = r312_xn$GlyphSaveSink$2Lrc4b;
        var _r312_t64 = _r312_t63.save;
        var _r312_t65 = "math/logic/xand";
        var _r312_t66 = 10847;
        var _r312_t67 = r312_WedgeBarGap();
        var _r312_t70 = (function (_r312_leti17) {
            var r355_gap = _r312_leti17;
            return r312_union(r312_HBar.b(r312_SB, r312_RightSB, r312_OperBot, r312_OperatorStroke), r312_WedgeShape(r312_OperTop, r312_OperBot + r312_OperatorStroke + r355_gap));
        })(_r312_t67);
        _r312_t64.call(_r312_t63, _r312_t65, _r312_t66, _r312_t70);
        var _r312_t71 = r312_xn$GlyphSaveSink$2Lrc4b;
        var _r312_t72 = _r312_t71.save;
        var _r312_t73 = "math/logic/andEqual";
        var _r312_t74 = 10848;
        var _r312_t75 = r312_WedgeBarGap();
        var _r312_t78 = (function (_r312_leti18) {
            var r357_gap = _r312_leti18;
            return r312_union(r312_HBar.b(r312_SB, r312_RightSB, r312_OperBot - r312_EqualHalfSpace * 0.75, r312_OperatorStroke), r312_HBar.b(r312_SB, r312_RightSB, r312_OperBot + r312_EqualHalfSpace * 0.75, r312_OperatorStroke), r312_WedgeShape(r312_OperTop, r312_OperBot + r312_OperatorStroke + r312_EqualHalfSpace * 0.75 + r357_gap));
        })(_r312_t75);
        _r312_t72.call(_r312_t71, _r312_t73, _r312_t74, _r312_t78);
        r312_xn$GlyphSaveSink$2Lrc4b.save("smallVeeUnderbar", 10849, r312_union(r312_HBar.b(r312_SB, r312_RightSB, 0, r312_OperatorStroke), r312_VeeShape(r312_PlusTop, Math.max(r312_PlusBot, 0 + r312_OperatorStroke * 1.5))));
        r312_turned("math/logic/equalOr", 10850, "math/logic/andEqual", r312_Middle, r312_SymbolMid);
        r312_turned("math/logic/orEqual", 10851, "math/logic/equalAnd", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("wedgeMiddleStem", 10842, new r312_xn$Capture$2Lrc8.GlyphProc(function (r361_currentGlyph) {
            var _r361_t0, _r361_t1;
            r361_currentGlyph.include(r312_union(r312_WedgeShape(r312_OperTop, r312_OperBot, r312_AdviceStroke(4)), r312_VBar.m(r312_Middle, r312_OperBot, r312_OperTop, r312_AdviceStroke(4))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("veeMiddleStem", 10843, new r312_xn$Capture$2Lrc8.GlyphProc(function (r365_currentGlyph) {
            var _r365_t0, _r365_t1;
            r365_currentGlyph.include(r312_union(r312_VeeShape(r312_OperTop, r312_OperBot, r312_AdviceStroke(4)), r312_VBar.m(r312_Middle, r312_OperBot, r312_OperTop, r312_AdviceStroke(4))));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("math/logic/andDash", 10844, r312_union(r312_WedgeShape(r312_OperTop, r312_OperBot), r312_HBar.m(r312_SB, r312_RightSB, r312_SymbolMid, r312_OperatorStroke)));
        r312_xn$GlyphSaveSink$2Lrc4b.save("math/logic/orDash", 10845, r312_union(r312_VeeShape(r312_OperTop, r312_OperBot), r312_HBar.m(r312_SB, r312_RightSB, r312_SymbolMid, r312_OperatorStroke)));
        r312_xn$GlyphSaveSink$2Lrc4b.save("veeSlanted", 10839, new r312_xn$Capture$2Lrc8.GlyphProc(function (r371_currentGlyph) {
            var _r371_t0, _r371_t1;
            r371_currentGlyph.include(r312_union(r312_dispiro(r312_widths.lhs(r312_OperatorStroke), r312_flat(r312_SB, r312_OperTop, r312_heading(r312_Downward)), r312_curl(r312_SB, r312_OperBot, r312_heading(r312_Downward))), r312_dispiro(r312_widths.rhs(r312_OperatorStroke), r312_flat(r312_RightSB, r312_OperTop, r312_heading(r312_Downward)), r312_curl(r312_SB + r312_HSwToV(r312_Stroke), r312_OperBot, r312_heading(r312_Downward)))));
            return void 0;
        }));
        r312_turned("wedgeSlanted", 10840, "veeSlanted", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("cup", 8746, new r312_xn$Capture$2Lrc8.GlyphProc(function (r375_currentGlyph) {
            var _r375_t0, _r375_t1;
            r375_currentGlyph.include(r312_UShape(r312_OperTop, r312_OperBot, r312_SB, r312_RightSB, r312_OperatorStroke));
            return void 0;
        }));
        r312_turned("cap", 8745, "cup", r312_Middle, r312_SymbolMid);
        var r312_ThinCupStroke = r312_AdviceStroke(4);
        r312_xn$GlyphSaveSink$2Lrc4b.save("thinCup", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r379_currentGlyph) {
            var _r379_t0, _r379_t1;
            r379_currentGlyph.include(r312_UShape(r312_OperTop, r312_OperBot, r312_SB, r312_RightSB, r312_ThinCupStroke));
            return void 0;
        }));
        r312_WithDotVariants("cupDot", 8845, function (r381_DrawAt, r381_kdr, r381_overshoot) {
            var _r381_t0, _r381_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r383_currentGlyph) {
                var _r383_t0, _r383_t1;
                r383_currentGlyph.include(r312_xn$referglyph$1aao("thinCup"), r312_AS_BASE, r312_ALSO_METRICS);
                r383_currentGlyph.include(r381_DrawAt(r312_Middle, r312_OperBot + r312_ArchDepth, Math.min(r312_DotRadius * r381_kdr, (r312_RightSB - r312_SB - r312_HSwToV(2 * r312_ThinCupStroke)) * (1 / 3)) - r381_overshoot));
                return void 0;
            });
        });
        r312_xn$GlyphSaveSink$2Lrc4b.save("cupArrowLeft", 8844, new r312_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
            var _r388_t0, _r388_t1;
            r388_currentGlyph.include(r312_xn$referglyph$1aao("thinCup"), r312_AS_BASE, r312_ALSO_METRICS);
            var r388_mockUpscale = r312_ThinCupStroke / r312_AdviceStroke(6);
            var r388_arrowLength = r388_mockUpscale * Math.min(r312_RightSB - r312_SB - r312_HSwToV(2 * r312_ThinCupStroke), r312_Width * 0.6);
            r388_currentGlyph.include(r312_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r393_currentGlyph) {
                var _r393_t0, _r393_t1;
                r393_currentGlyph.include(r312_ArrowShape(r312_Middle + r388_arrowLength / 2, r312_OperBot + r312_ArchDepth, r312_Middle - r388_arrowLength / 2, r312_OperBot + r312_ArchDepth, r388_arrowLength * 0.5));
                r393_currentGlyph.include(r312_Ungizmo());
                r393_currentGlyph.include(r312_Translate(-r312_Middle, -r312_OperBot - r312_ArchDepth));
                r393_currentGlyph.include(r312_Scale(1 / r388_mockUpscale, 1 / r388_mockUpscale));
                r393_currentGlyph.include(r312_Translate(r312_Middle, r312_OperBot + r312_ArchDepth));
                r393_currentGlyph.include(r312_Regizmo());
                return void 0;
            })));
            return void 0;
        }));
        var r312_cupInnerPlusSw = r312_AdviceStroke(6);
        var r312_cupInnerPlusSize = Math.min(r312_RightSB - r312_SB - r312_HSwToV(r312_ThinCupStroke) * (2 + 0.5 * r312_cupInnerPlusSw / r312_ThinCupStroke), (r312_RightSB - r312_SB) * 0.8);
        r312_xn$GlyphSaveSink$2Lrc4b.save("cupPlus", 8846, new r312_xn$Capture$2Lrc8.GlyphProc(function (r402_currentGlyph) {
            var _r402_t0, _r402_t1;
            r402_currentGlyph.include(r312_xn$referglyph$1aao("thinCup"), r312_AS_BASE, r312_ALSO_METRICS);
            r402_currentGlyph.include(r312_dispiro(r312_widths.center(r312_cupInnerPlusSw), r312_corner(r312_Middle - r312_cupInnerPlusSize / 2, r312_OperBot + r312_ArchDepth), r312_corner(r312_Middle + r312_cupInnerPlusSize / 2, r312_OperBot + r312_ArchDepth)));
            r402_currentGlyph.include(r312_dispiro(r312_widths.center(r312_cupInnerPlusSw), r312_corner(r312_Middle, r312_OperBot + r312_ArchDepth - r312_cupInnerPlusSize / 2), r312_corner(r312_Middle, r312_OperBot + r312_ArchDepth + r312_cupInnerPlusSize / 2)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("doubleCup", 8915, new r312_xn$Capture$2Lrc8.GlyphProc(function (r408_currentGlyph) {
            var _r408_t0, _r408_t1;
            var r408_sw = r312_AdviceStroke(6);
            var r408_gap = Math.min((r312_RightSB - r312_SB - r312_HSwToV(4 * r408_sw)) / 3, Math.max(r312_Width / 8, r408_sw / 2));
            r408_currentGlyph.include(r312_UShape(r312_OperTop, r312_OperBot, r312_SB, r312_RightSB, r408_sw));
            r408_currentGlyph.include(r312_UShape(r312_OperTop, r312_OperBot + r408_sw + r408_gap, r312_SB + r408_sw + r408_gap, r312_RightSB - r408_sw - r408_gap, r408_sw, r312_ArchDepthAOf(r312_ArchDepth - r408_sw - r408_gap, r312_Width), r312_ArchDepthBOf(r312_ArchDepth - r408_sw - r408_gap, r312_Width)));
            return void 0;
        }));
        r312_turned("doubleCap", 8914, "doubleCup", r312_Middle, r312_SymbolMid);
        var r312_pitchForkTop = r1_mix(r312_OperBot, r312_OperTop, 1.2) + r312_QuarterStroke;
        var r312_pitchForkSw = r312_AdviceStroke(3.25);
        r312_xn$GlyphSaveSink$2Lrc4b.save("pitchFork", 8916, new r312_xn$Capture$2Lrc8.GlyphProc(function (r413_currentGlyph) {
            var _r413_t0, _r413_t1;
            r413_currentGlyph.include(r312_UShape(r312_OperTop, r312_OperBot, r312_SB, r312_RightSB, r312_pitchForkSw), true, true);
            r413_currentGlyph.include(r312_FlipAround(r312_Middle, r312_SymbolMid));
            r413_currentGlyph.include(r312_VBar.m(r312_Middle, r312_OperBot, r312_pitchForkTop, r312_pitchForkSw));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("elementUp", 10194, new r312_xn$Capture$2Lrc8.GlyphProc(function (r419_currentGlyph) {
            var _r419_t0, _r419_t1;
            r419_currentGlyph.include(r312_xn$referglyph$1aao("thinCup"), r312_AS_BASE, r312_ALSO_METRICS);
            r419_currentGlyph.include(r312_VBar.m(r312_Middle, r312_OperBot, r312_OperTop, r312_ThinCupStroke));
            return void 0;
        }));
        r312_turned("capDot", 10816, "cupDot", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("cupMinus", 10817, new r312_xn$Capture$2Lrc8.GlyphProc(function (r424_currentGlyph) {
            var _r424_t0, _r424_t1;
            r424_currentGlyph.include(r312_xn$referglyph$1aao("thinCup"), r312_AS_BASE, r312_ALSO_METRICS);
            r424_currentGlyph.include(r312_HBar.m(r312_Middle - r312_cupInnerPlusSize / 2, r312_Middle + r312_cupInnerPlusSize / 2, r312_OperBot + r312_ArchDepth, r312_cupInnerPlusSw));
            return void 0;
        }));
        var _r312_t79 = r312_xn$GlyphSaveSink$2Lrc4b;
        var _r312_t80 = _r312_t79.save;
        var _r312_t81 = "cupOverbar";
        var _r312_t82 = 10818;
        var _r312_t83 = r312_WedgeBarGap();
        var _r312_t86 = (function (_r312_leti19) {
            var r428_gap = _r312_leti19;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
                var _r430_t0, _r430_t1;
                r430_currentGlyph.include(r312_UShape(r312_OperTop - r312_OperatorStroke - r428_gap, r312_OperBot, r312_SB, r312_RightSB, r312_OperatorStroke));
                r430_currentGlyph.include(r312_HBar.t(r312_SB, r312_RightSB, r312_OperTop, r312_OperatorStroke));
                return void 0;
            });
        })(_r312_t83);
        _r312_t80.call(_r312_t79, _r312_t81, _r312_t82, _r312_t86);
        var _r312_t87 = r312_xn$GlyphSaveSink$2Lrc4b;
        var _r312_t88 = _r312_t87.save;
        var _r312_t89 = "capOverbar";
        var _r312_t90 = 10819;
        var _r312_t91 = r312_WedgeBarGap();
        var _r312_t94 = (function (_r312_leti20) {
            var r434_gap = _r312_leti20;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r436_currentGlyph) {
                var _r436_t0, _r436_t1;
                r436_currentGlyph.include(r312_UShape(r312_OperTop, r312_OperBot + r312_OperatorStroke + r434_gap, r312_SB, r312_RightSB, r312_OperatorStroke));
                r436_currentGlyph.include(r312_FlipAround(r312_Middle, r312_SymbolMid));
                r436_currentGlyph.include(r312_HBar.t(r312_SB, r312_RightSB, r312_OperTop, r312_OperatorStroke));
                return void 0;
            });
        })(_r312_t91);
        _r312_t88.call(_r312_t87, _r312_t89, _r312_t90, _r312_t94);
        r312_turned("elementDown", 10969, "elementUp", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("transversalIntersection", 10971, new r312_xn$Capture$2Lrc8.GlyphProc(function (r442_currentGlyph) {
            var _r442_t0, _r442_t1;
            r442_currentGlyph.include(r312_UShape(r312_OperTop, r312_OperBot, r312_SB, r312_RightSB, r312_pitchForkSw), true, true);
            r442_currentGlyph.include(r312_FlipAround(r312_Middle, r312_SymbolMid));
            r442_currentGlyph.include(r312_VBar.m(r312_Middle, r312_OperBot + r312_OperTop - r312_pitchForkTop, r312_pitchForkTop, r312_pitchForkSw));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("pitchForkTee", 10970, new r312_xn$Capture$2Lrc8.GlyphProc(function (r448_currentGlyph) {
            var _r448_t0, _r448_t1;
            r448_currentGlyph.include(r312_xn$referglyph$1aao("pitchFork"), r312_AS_BASE, r312_ALSO_METRICS);
            r448_currentGlyph.include(r312_HBar.t(r312_SB, r312_RightSB, r312_pitchForkTop, r312_pitchForkSw));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("nonForking", 10973, new r312_xn$Capture$2Lrc8.GlyphProc(function (r453_currentGlyph) {
            var _r453_t0, _r453_t1;
            r453_currentGlyph.include(r312_UShape(r312_SymbolMid, r312_OperBot, r312_SB, r312_RightSB, r312_pitchForkSw));
            r453_currentGlyph.include(r312_VBar.m(r312_Middle, r312_OperBot, r312_OperTop, r312_pitchForkSw));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("forking", 10972, new r312_xn$Capture$2Lrc8.GlyphProc(function (r458_currentGlyph) {
            var _r458_t0, _r458_t1;
            r458_currentGlyph.include(r312_xn$referglyph$1aao("nonForking"), r312_AS_BASE, r312_ALSO_METRICS);
            r458_currentGlyph.include(r312_dispiro(r312_widths.center(r312_NotGlyphSw), r312_flat(r312_SB, r312_OperBot), r312_curl(r312_RightSB, r312_OperTop)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("cupClosedSerifed", 10828, new r312_xn$Capture$2Lrc8.GlyphProc(function (r463_currentGlyph) {
            var _r463_t0, _r463_t1;
            r463_currentGlyph.include(r312_UShape(r312_OperTop, r312_OperBot, r312_SB, r312_RightSB, r312_OperatorStroke));
            r463_currentGlyph.include(r312_HBar.t(r312_SB, r312_RightSB, r312_OperTop, r312_OperatorStroke));
            r463_currentGlyph.include(r312_HSerif.lt(r312_SB, r312_OperTop, r312_SideJut, r312_OperatorStroke));
            r463_currentGlyph.include(r312_HSerif.rt(r312_RightSB, r312_OperTop, r312_SideJut, r312_OperatorStroke));
            return void 0;
        }));
        r312_turned("capClosedSerifed", 10829, "cupClosedSerifed", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("squareCap", 8851, new r312_xn$Capture$2Lrc8.GlyphProc(function (r470_currentGlyph) {
            var _r470_t0, _r470_t1;
            r470_currentGlyph.include(r312_PiShape(r312_DivFrame(1), r312_OperTop, r312_OperBot, new r312_xn$NamedParameterPair$2Lrc9b("shrinkRate", 0), new r312_xn$NamedParameterPair$2Lrc9b("fine", r312_OperatorStroke), new r312_xn$NamedParameterPair$2Lrc9b("doSerif", false)));
            return void 0;
        }));
        r312_turned("squareCup", 8852, "squareCap", r312_Middle, r312_SymbolMid);
        r312_xn$GlyphSaveSink$2Lrc4b.save("shuffleProduct", 10722, new r312_xn$Capture$2Lrc8.GlyphProc(function (r477_currentGlyph) {
            var _r477_t0, _r477_t1;
            var r477_df = r477_currentGlyph.include(r312_DivFrame(r312_para.advanceScaleMM, 3));
            r477_currentGlyph.include(r312_CyrShaShape(r477_df, r312_OperTop, r312_OperBot, new r312_xn$NamedParameterPair$2Lrc9b("fine", r312_OperatorStroke), new r312_xn$NamedParameterPair$2Lrc9b("doSerif", false)));
            return void 0;
        }));
        r312_xn$GlyphSaveSink$2Lrc4b.save("doubleSquareCap", 10830, new r312_xn$Capture$2Lrc8.GlyphProc(function (r484_currentGlyph) {
            var _r484_t0, _r484_t1;
            var r484_sw = r312_AdviceStroke(6);
            var r484_gap = Math.min((r312_RightSB - r312_SB - r312_HSwToV(4 * r484_sw)) / 3, Math.max(r312_Width / 8, r484_sw / 2));
            var r484_shrinkRate = (r484_sw + r484_gap) / (r312_RightSB - r312_SB);
            r484_currentGlyph.include(r312_PiShape(r312_DivFrame(1), r312_OperTop, r312_OperBot, new r312_xn$NamedParameterPair$2Lrc9b("fine", r484_sw), new r312_xn$NamedParameterPair$2Lrc9b("shrinkRate", 0), new r312_xn$NamedParameterPair$2Lrc9b("fine", r484_sw), new r312_xn$NamedParameterPair$2Lrc9b("doSerif", false)));
            r484_currentGlyph.include(r312_PiShape(r312_DivFrame(1), r312_OperTop - r484_sw - r484_gap, r312_OperBot, new r312_xn$NamedParameterPair$2Lrc9b("fine", r484_sw), new r312_xn$NamedParameterPair$2Lrc9b("shrinkRate", r484_shrinkRate), new r312_xn$NamedParameterPair$2Lrc9b("endShrink", r484_shrinkRate), new r312_xn$NamedParameterPair$2Lrc9b("doSerif", false)));
            return void 0;
        }));
        return r312_turned("doubleSquareCup", 10831, "doubleSquareCap", r312_Middle, r312_SymbolMid);
    });
    return void 0;
});


