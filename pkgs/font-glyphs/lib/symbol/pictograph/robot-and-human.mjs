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
    r311_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r311_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Robot-And-Human", function (r312_xn$Capture$2Lrc8, r312_xn$ExportCapture$2Lrc4b) {
        var _r312_t8, _r312_t9, _r312_t10, _r312_tag11;
        var _r312_t0 = r312_xn$Capture$2Lrc8;
        var r312_xn$GlyphSaveSink$2Lrc4b = _r312_t0["$GlyphSaveSink$"];
        var r312_xn$NamedParameterPair$2Lrc9b = _r312_t0["$NamedParameterPair$"];
        var r312_xn$Exec$2Lrc5 = _r312_t0["$Exec$"];
        var r312_fontMetrics = _r312_t0.fontMetrics;
        var _r312_t1 = r312_xn$Capture$2Lrc8.Metrics;
        var r312_Width = _r312_t1.Width;
        var r312_SB = _r312_t1.SB;
        var r312_ParenTop = _r312_t1.ParenTop;
        var r312_ParenBot = _r312_t1.ParenBot;
        var r312_HSwToV = _r312_t1.HSwToV;
        var r312_AdviceStroke = _r312_t1.AdviceStroke;
        var r312_WideWidth4 = _r312_t1.WideWidth4;
        var r312_RightSB = _r312_t1.RightSB;
        var _r312_t2 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_g4 = _r312_t2.g4;
        var r312_corner = _r312_t2.corner;
        var r312_flat = _r312_t2.flat;
        var r312_curl = _r312_t2.curl;
        var r312_close = _r312_t2.close;
        var r312_widths = _r312_t2.widths;
        var r312_archv = _r312_t2.archv;
        var r312_arcvh = _r312_t2.arcvh;
        var r312_dispiro = _r312_t2.dispiro;
        var r312_xn$spirooutline$1aao = _r312_t2["spiro-outline"];
        var _r312_t3 = r312_xn$Capture$2Lrc8.SpiroFns;
        var r312_xn$decor$0cao = _r312_t3["decor@"];
        var r312_xn$decor$0cao1 = _r312_t3["decor@@"];
        var r312_xn$decor$0cao11 = _r312_t3["decor@@@"];
        var _r312_t4 = r312_xn$Capture$2Lrc8.BooleFns;
        var r312_union = _r312_t4.union;
        var r312_difference = _r312_t4.difference;
        var _r312_t5 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r312_Rect = _r312_t5.Rect;
        var r312_DotAt = _r312_t5.DotAt;
        var r312_HBar = _r312_t5.HBar;
        var r312_VBar = _r312_t5.VBar;
        var r312_ForceUpright = _r312_t5.ForceUpright;
        var _r312_t6 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var _r312_t7 = r312_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Mosaic-Split-Graphic"].resolve();
        var r312_Multicell = _r312_t7.Multicell;
        var r312_top = r312_fontMetrics.os2.sTypoAscender;
        var r312_bottom = r312_fontMetrics.os2.sTypoDescender;
        var r312_left = 0;
        var r312_right = r312_Width;
        var r312_graphicSw = r312_AdviceStroke(3.5);
        var r312_PictographSw = r312_AdviceStroke(4);
        var r312_SIDE = {
            "LEFT": 0,
            "FRONT": 1,
            "RIGHT": 2
        };
        var r312_rbtScaffold = {};
        r312_rbtScaffold.headWidth = 1 / 2;
        r312_rbtScaffold.headWidth2 = 3 / 4;
        r312_rbtScaffold.headHeight = 1 / 3;
        r312_rbtScaffold.eyeSpan = 1 / 2;
        r312_rbtScaffold.bodyTop = 2 / 3;
        r312_rbtScaffold.bodyOvershoot = 13 / 12;
        r312_rbtScaffold.shoulder = 1 / 2;
        r312_rbtScaffold.bodyWidth = 3 / 4;
        r312_rbtScaffold.markSpan = 2 / 3;
        r312_rbtScaffold.markTop = 2 / 3;
        r312_rbtScaffold.pelvis = 1 / 4;
        r312_rbtScaffold.legGap = 1 / 3;
        r312_rbtScaffold.footLen = 1 / 4;
        var r312_hmnScaffold = {};
        r312_hmnScaffold.headSizeX = 0.8;
        r312_hmnScaffold.headSizeY = 1 / 4;
        r312_hmnScaffold.neckGap = 0.05;
        r312_hmnScaffold.bodyWidth = 1;
        r312_hmnScaffold.shoulderRad = 1 / 16;
        r312_hmnScaffold.armBot = 0.5;
        r312_hmnScaffold.armBotHigh = 0.6;
        r312_hmnScaffold.armBotHigher = 0.75;
        r312_hmnScaffold.legWidth = 1 / 2;
        r312_hmnScaffold.legBot = 0;
        r312_hmnScaffold.legBotHigh = 0.2;
        r312_hmnScaffold.legBotHigher = 0.3;
        var r312_FlailRobotHead = function (r316_rev, r316_top, r316_bot, r316_left, r316_right) {
            var _r316_t0, _r316_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r318_currentGlyph) {
                var _r318_t0, _r318_t1;
                var r318_midX = r1_mix(r316_left, r316_right, 0.5);
                var r318_midY = r1_mix(r316_top, r316_bot, 0.5);
                var r318_archDepth = Math.min((r316_right - r316_left) / 2.25, (r316_top - r316_bot) / 2);
                var r318_eyeHeight = (r316_top - r316_bot) * (1 / 4) + r312_PictographSw;
                var r318_eyeOffset = Math.min((r316_right - r316_left) / 12, (r316_right - r316_left - 2 * r312_HSwToV(r312_graphicSw) - r318_eyeHeight) / 2);
                r318_currentGlyph.include(r312_dispiro(r312_widths.lhs(r312_graphicSw), r312_g4(r316_left, r318_midY), r312_arcvh(), r312_flat(r316_left + r318_archDepth, r316_bot), r312_curl(r316_right - r318_archDepth, r316_bot), r312_archv(), r312_g4(r316_right, r318_midY), r312_arcvh(), r312_flat(r316_right - r318_archDepth, r316_top), r312_curl(r316_left + r318_archDepth, r316_top), r312_archv(), r312_close()));
                r318_currentGlyph.include(r312_DotAt(r318_midX + (r316_rev ? 1 : -1) * r318_eyeOffset, r318_midY, r318_eyeHeight / 2));
                return void 0;
            });
        };
        var r312_RobotHead = function (r321_side, r321_top, r321_bot, r321_left, r321_right) {
            var _r321_t0, _r321_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r323_currentGlyph) {
                var _r323_t0, _r323_t1, _r323_t2;
                var r323_midX = r1_mix(r321_left, r321_right, 0.5);
                var r323_midY = r1_mix(r321_top, r321_bot, 0.5);
                var r323_eyeHeight = (r321_top - r321_bot) * (1 / 4) + r312_PictographSw;
                var r323_eyeTop = r323_midY + 0.5 * r323_eyeHeight;
                var r323_eyeBot = r323_midY - 0.5 * r323_eyeHeight;
                var r323_eyeWidth = (r321_right - r321_left) * r312_rbtScaffold.eyeSpan;
                r323_currentGlyph.include(r312_difference(r312_Rect(r321_top, r321_bot, r321_left, r321_right), (_r323_t0 = r321_side, _r323_t0 === r312_SIDE.LEFT ? r312_Rect(r323_eyeTop, r323_eyeBot, r321_left, r321_left + r323_eyeWidth) : _r323_t0 === r312_SIDE.FRONT ? r312_Rect(r323_eyeTop, r323_eyeBot, r323_midX - 0.5 * r323_eyeWidth, r323_midX + 0.5 * r323_eyeWidth) : _r323_t0 === r312_SIDE.RIGHT ? r312_Rect(r323_eyeTop, r323_eyeBot, r321_right - r323_eyeWidth, r321_right) : void 0)));
                return void 0;
            });
        };
        var r312_FlailRobotBody = function (r325_rev, r325_top, r325_bot, r325_left, r325_right) {
            var _r325_t0, _r325_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                var _r327_t0, _r327_t1;
                var r327_midX = r1_mix(r325_left, r325_right, 0.5);
                var r327_legWidth = (r325_right - r325_left) * r312_hmnScaffold.legWidth / 2;
                var r327_legLeft = r327_midX - r327_legWidth;
                var r327_legRight = r327_midX + r327_legWidth;
                var r327_armY = r1_mix(r325_bot, r325_top, 5 / 8);
                var r327_forearmLength = (r325_top - r325_bot) * (5 / 8);
                r327_currentGlyph.include(r312_Rect(r325_top, r325_bot, r327_legLeft, r327_legRight));
                r327_currentGlyph.include(r312_HBar.m(r325_left, r325_right, r327_armY, r312_PictographSw));
                r327_currentGlyph.include(r312_VBar.l(r325_left, r327_armY, r327_armY + (r325_rev ? -1 : 1) * r327_forearmLength, r312_PictographSw));
                r327_currentGlyph.include(r312_VBar.r(r325_right, r327_armY, r327_armY + (r325_rev ? 1 : -1) * r327_forearmLength, r312_PictographSw));
                return void 0;
            });
        };
        var r312_RobotBody = function (r332_side, r332_top, r332_bot, r332_left, r332_right) {
            var _r332_t0, _r332_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r334_currentGlyph) {
                var _r334_t0, _r334_t1, _r334_t2;
                var r334_midX = r1_mix(r332_left, r332_right, 0.5);
                var r334_shoulderY = r1_mix(r332_bot, r332_top, r312_rbtScaffold.shoulder);
                var r334_bodyTop = r1_mix(r332_bot, r332_top, r312_rbtScaffold.bodyOvershoot);
                var r334_markLeft = r1_mix(r332_left, r332_right, 0.5 - r312_rbtScaffold.markSpan / 2);
                var r334_markRight = r1_mix(r332_left, r332_right, 0.5 + r312_rbtScaffold.markSpan / 2);
                var r334_markTop = r1_mix(r332_bot, r332_top, r312_rbtScaffold.markTop);
                var r334_markSw = (r334_markRight - r334_markLeft) * (2 / 5) - r312_PictographSw / 2;
                r334_currentGlyph.include(r312_difference(r312_xn$spirooutline$1aao(r312_corner(r332_left, r334_shoulderY), r312_corner(r332_left, r332_bot), r312_corner(r332_right, r332_bot), r312_corner(r332_right, r334_shoulderY), r312_corner(r334_midX, r334_bodyTop)), (_r334_t0 = r332_side, _r334_t0 === r312_SIDE.LEFT ? r312_union(r312_Rect(r332_bot + r334_markSw, r332_bot, r334_markLeft, r334_markRight - r334_markSw), r312_Rect(r334_markTop, r332_bot + r334_markSw, r334_markRight - r334_markSw * 2, r334_markRight - r334_markSw)) : _r334_t0 === r312_SIDE.FRONT ? r312_union(r312_Rect(r334_markTop, r332_bot + r334_markSw, r334_markLeft, r334_markLeft + r334_markSw), r312_Rect(r334_markTop, r332_bot + r334_markSw, r334_markRight - r334_markSw, r334_markRight)) : _r334_t0 === r312_SIDE.RIGHT ? r312_union(r312_Rect(r332_bot + r334_markSw, r332_bot, r334_markLeft + r334_markSw, r334_markRight), r312_Rect(r334_markTop, r332_bot + r334_markSw, r334_markLeft + r334_markSw, r334_markLeft + r334_markSw * 2)) : void 0)));
                return void 0;
            });
        };
        var r312_HumanFront = function (r336_step) {
            var _r336_t0, _r336_t1;
            return function (r337_top, r337_bot, r337_left, r337_right) {
                var _r337_t0, _r337_t1;
                return new r312_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                    var r339___, _r339_t0, _r339_t1, _r339_t2, _r339_t3, _r339_t4, _r339_t5;
                    var r339_midX = r1_mix(r337_left, r337_right, 0.5);
                    var r339_headSize = Math.min((r337_right - r337_left) * r312_hmnScaffold.headSizeX, (r337_top - r337_bot) * r312_hmnScaffold.headSizeY);
                    r339_currentGlyph.include(r312_DotAt(r339_midX, r337_top - r339_headSize / 2, r339_headSize / 2));
                    var r339_bodyTop = r337_top - r339_headSize - (r337_top - r337_bot) * r312_hmnScaffold.neckGap;
                    var r339_cr = (r337_top - r337_bot) * r312_hmnScaffold.shoulderRad;
                    var r339_legWidth = (r337_right - r337_left) * r312_hmnScaffold.legWidth / 2;
                    var r339_legLeft = r339_midX - r339_legWidth;
                    var r339_legRight = r339_midX + r339_legWidth;
                    var r339_bodyWidth = (r337_right - r337_left) * r312_hmnScaffold.bodyWidth / 2;
                    var r339_bodyLeft = r339_midX - r339_bodyWidth;
                    var r339_bodyRight = r339_midX + r339_bodyWidth;
                    var r339_armLeftBot = r1_mix(r337_bot, r339_bodyTop, (_r339_t0 = r336_step, 2 === _r339_t0 ? r312_hmnScaffold.armBotHigh : 3 === _r339_t0 ? r312_hmnScaffold.armBotHigher : 4 === _r339_t0 ? r312_hmnScaffold.armBotHigher : (r339___ = _r339_t0, r312_hmnScaffold.armBot)));
                    var r339_armRightBot = r1_mix(r337_bot, r339_bodyTop, (_r339_t1 = r336_step, 1 === _r339_t1 ? r312_hmnScaffold.armBotHigher : 2 === _r339_t1 ? r312_hmnScaffold.armBotHigh : 4 === _r339_t1 ? r312_hmnScaffold.armBotHigher : (r339___ = _r339_t1, r312_hmnScaffold.armBot)));
                    var r339_legLeftBot = r1_mix(r337_bot, r339_bodyTop, (_r339_t2 = r336_step, 2 === _r339_t2 ? r312_hmnScaffold.legBotHigh : 3 === _r339_t2 ? r312_hmnScaffold.legBotHigher : (r339___ = _r339_t2, r312_hmnScaffold.legBot)));
                    var r339_legRightBot = r1_mix(r337_bot, r339_bodyTop, (_r339_t3 = r336_step, 1 === _r339_t3 ? r312_hmnScaffold.legBotHigher : 2 === _r339_t3 ? r312_hmnScaffold.legBotHigh : (r339___ = _r339_t3, r312_hmnScaffold.legBot)));
                    r339_currentGlyph.include(r312_xn$spirooutline$1aao(r312_widths.center(r312_PictographSw), r312_corner(r339_legLeft, r339_legLeftBot), r312_corner(r339_legLeft, r339_armLeftBot), r312_corner(r339_bodyLeft, r339_armLeftBot), r312_curl(r339_bodyLeft, r339_bodyTop - r339_cr), r312_arcvh(), r312_flat(r339_bodyLeft + r339_cr, r339_bodyTop), r312_curl(r339_bodyRight - r339_cr, r339_bodyTop), r312_archv(), r312_flat(r339_bodyRight, r339_bodyTop - r339_cr), r312_corner(r339_bodyRight, r339_armRightBot), r312_corner(r339_legRight, r339_armRightBot), r312_corner(r339_legRight, r339_legRightBot), r339_legRightBot === r339_legLeftBot ? [] : [r312_corner(r339_midX, r339_legRightBot), r312_corner(r339_midX, r339_legLeftBot)], r312_close()));
                    return void 0;
                });
            };
        };
        var r312_FlailRobotUpper = function (r342_rev, r342_top, r342_bot, r342_left, r342_right) {
            var _r342_t0, _r342_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r344_currentGlyph) {
                var _r344_t0, _r344_t1;
                r344_currentGlyph.include(r312_FlailRobotHead(r342_rev, r342_top, r1_mix(r342_top, r342_bot, r312_rbtScaffold.headHeight), r1_mix(r342_left, r342_right, 0.5 - r312_rbtScaffold.headWidth2 / 2), r1_mix(r342_left, r342_right, 0.5 + r312_rbtScaffold.headWidth2 / 2)));
                var r344_bodyTop = r342_top - (r342_top - r342_bot) * (r312_rbtScaffold.headHeight + r312_hmnScaffold.neckGap * 2);
                r344_currentGlyph.include(r312_FlailRobotBody(r342_rev, r344_bodyTop, r342_bot, r342_left, r342_right));
                return void 0;
            });
        };
        var r312_RobotUpper = function (r347_side, r347_top, r347_bot, r347_left, r347_right) {
            var _r347_t0, _r347_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r349_currentGlyph) {
                var _r349_t0, _r349_t1;
                r349_currentGlyph.include(r312_RobotHead(r347_side, r347_top, r1_mix(r347_top, r347_bot, r312_rbtScaffold.headHeight), r1_mix(r347_left, r347_right, 0.5 - r312_rbtScaffold.headWidth / 2), r1_mix(r347_left, r347_right, 0.5 + r312_rbtScaffold.headWidth / 2)));
                r349_currentGlyph.include(r312_RobotBody(r347_side, r1_mix(r347_bot, r347_top, r312_rbtScaffold.bodyTop), r347_bot, r1_mix(r347_left, r347_right, 0.5 - r312_rbtScaffold.bodyWidth / 2), r1_mix(r347_left, r347_right, 0.5 + r312_rbtScaffold.bodyWidth / 2)));
                return void 0;
            });
        };
        var r312_RobotLegs = function (r352_side, r352_top, r352_bot, r352_left, r352_right) {
            var _r352_t0, _r352_t1;
            return new r312_xn$Capture$2Lrc8.GlyphProc(function (r354_currentGlyph) {
                var _r354_t0, _r354_t1;
                var r354_bodyLeft = r1_mix(r352_left, r352_right, 0.5 - r312_rbtScaffold.bodyWidth / 2);
                var r354_bodyRight = r1_mix(r352_left, r352_right, 0.5 + r312_rbtScaffold.bodyWidth / 2);
                var r354_pelvis = r1_mix(r352_top, r352_bot, r312_rbtScaffold.pelvis);
                r354_currentGlyph.include(r312_Rect(r352_top, r354_pelvis, r354_bodyLeft, r354_bodyRight));
                var r354_legLeft = r1_mix(r352_left, r352_right, 0.5 - r312_rbtScaffold.legGap / 2);
                var r354_legRight = r1_mix(r352_left, r352_right, 0.5 + r312_rbtScaffold.legGap / 2);
                var r354_footLen = (r352_right - r352_left) * r312_rbtScaffold.footLen;
                r354_currentGlyph.include(r312_VBar.r(r354_legLeft, r352_bot, r354_pelvis, r312_PictographSw));
                r354_currentGlyph.include(r352_side === r312_SIDE.RIGHT ? r312_HBar.b(r354_legLeft, r354_legLeft + r354_footLen - r312_HSwToV(r312_PictographSw), r352_bot, r312_PictographSw) : r312_HBar.b(r354_legLeft - r354_footLen, r354_legLeft, r352_bot, r312_PictographSw));
                r354_currentGlyph.include(r312_VBar.l(r354_legRight, r352_bot, r354_pelvis, r312_PictographSw));
                r354_currentGlyph.include(r352_side === r312_SIDE.LEFT ? r312_HBar.b(r354_legRight - r354_footLen + r312_HSwToV(r312_PictographSw), r354_legRight, r352_bot, r312_PictographSw) : r312_HBar.b(r354_legRight, r354_legRight + r354_footLen, r352_bot, r312_PictographSw));
                return void 0;
            });
        };
        (function () {
            var r362_FMosaicWide, r362_MosaicNameSuffix, r362_MosaicWidth, r362_MosaicWidthScalar, _r362_t3, _r362_t5, _r362_t6, _r362_tag7;
            var r362_WidthKinds = [[0, ".NWID", r312_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r312_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r362_t0 = r362_WidthKinds;
            var _r362_t1 = _r362_t0.length;
            var _r362_t2 = 0;
            var _r362_t4 = _r362_t2 < _r362_t1;
            while (_r362_t4) {
                _r362_t3 = _r362_t0[_r362_t2];
                r362_FMosaicWide = _r362_t3[0];
                r362_MosaicNameSuffix = _r362_t3[1];
                r362_MosaicWidth = _r362_t3[2];
                r362_MosaicWidthScalar = _r362_t3[3];
                (function () {
                    var r365_MosaicDesiredWidth = r312_WideWidth4;
                    var r365_MosaicMiddle = r362_MosaicWidth / 2;
                    var r365_MosaicUnitWidth = r362_MosaicWidth / r362_MosaicWidthScalar;
                    var r365_MangleUnicode = function (r366_unicode, r366__desiredOverride) {
                        var _r366_t0, _r366_t1;
                        return r362_MosaicWidth === (r366__desiredOverride || r365_MosaicDesiredWidth) ? r366_unicode : void 0;
                    };
                    var r365_MangleName = function (r367_name) {
                        var _r367_t0, _r367_t1;
                        return r367_name + r362_MosaicNameSuffix;
                    };
                    var r365_multicell = r312_Multicell(r362_MosaicWidth);
                    var r365_right = r362_MosaicWidth;
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("robotBodyLeft"), r365_MangleUnicode(117850), new r312_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
                        var _r370_t0, _r370_t1;
                        r370_currentGlyph.setWidth(r362_MosaicWidth);
                        r370_currentGlyph.include(r312_ForceUpright());
                        r370_currentGlyph.include(r312_RobotUpper(r312_SIDE.LEFT, r312_top, r312_bottom, r312_left, r365_right));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("robotBodyFront"), r365_MangleUnicode(117851), new r312_xn$Capture$2Lrc8.GlyphProc(function (r376_currentGlyph) {
                        var _r376_t0, _r376_t1;
                        r376_currentGlyph.setWidth(r362_MosaicWidth);
                        r376_currentGlyph.include(r312_ForceUpright());
                        r376_currentGlyph.include(r312_RobotUpper(r312_SIDE.FRONT, r312_top, r312_bottom, r312_left, r365_right));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("robotBodyRight"), r365_MangleUnicode(117852), new r312_xn$Capture$2Lrc8.GlyphProc(function (r382_currentGlyph) {
                        var _r382_t0, _r382_t1;
                        r382_currentGlyph.setWidth(r362_MosaicWidth);
                        r382_currentGlyph.include(r312_ForceUpright());
                        r382_currentGlyph.include(r312_RobotUpper(r312_SIDE.RIGHT, r312_top, r312_bottom, r312_left, r365_right));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("robotLegsLeft"), r365_MangleUnicode(117853), new r312_xn$Capture$2Lrc8.GlyphProc(function (r388_currentGlyph) {
                        var _r388_t0, _r388_t1;
                        r388_currentGlyph.setWidth(r362_MosaicWidth);
                        r388_currentGlyph.include(r312_ForceUpright());
                        r388_currentGlyph.include(r312_RobotLegs(r312_SIDE.LEFT, r312_top, r312_bottom, r312_left, r365_right));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("robotLegsFront"), r365_MangleUnicode(117854), new r312_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                        var _r394_t0, _r394_t1;
                        r394_currentGlyph.setWidth(r362_MosaicWidth);
                        r394_currentGlyph.include(r312_ForceUpright());
                        r394_currentGlyph.include(r312_RobotLegs(r312_SIDE.FRONT, r312_top, r312_bottom, r312_left, r365_right));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("robotLegsRight"), r365_MangleUnicode(117855), new r312_xn$Capture$2Lrc8.GlyphProc(function (r400_currentGlyph) {
                        var _r400_t0, _r400_t1;
                        r400_currentGlyph.setWidth(r362_MosaicWidth);
                        r400_currentGlyph.include(r312_ForceUpright());
                        r400_currentGlyph.include(r312_RobotLegs(r312_SIDE.RIGHT, r312_top, r312_bottom, r312_left, r365_right));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("humanFrontTop"), r365_MangleUnicode(118256), new r312_xn$Capture$2Lrc8.GlyphProc(function (r406_currentGlyph) {
                        var _r406_t0, _r406_t1;
                        r406_currentGlyph.setWidth(r362_MosaicWidth);
                        r406_currentGlyph.include(r312_ForceUpright());
                        r406_currentGlyph.include(r365_multicell.Select(r312_top, r312_bottom, r312_left, r365_right, 2, 1, r312_HumanFront(0), 1, 0));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("humanFrontBottom1"), r365_MangleUnicode(118257), new r312_xn$Capture$2Lrc8.GlyphProc(function (r412_currentGlyph) {
                        var _r412_t0, _r412_t1;
                        r412_currentGlyph.setWidth(r362_MosaicWidth);
                        r412_currentGlyph.include(r312_ForceUpright());
                        r412_currentGlyph.include(r365_multicell.Select(r312_top, r312_bottom, r312_left, r365_right, 2, 1, r312_HumanFront(1), 0, 0));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("humanFrontBottom2"), r365_MangleUnicode(118258), new r312_xn$Capture$2Lrc8.GlyphProc(function (r418_currentGlyph) {
                        var _r418_t0, _r418_t1;
                        r418_currentGlyph.setWidth(r362_MosaicWidth);
                        r418_currentGlyph.include(r312_ForceUpright());
                        r418_currentGlyph.include(r365_multicell.Select(r312_top, r312_bottom, r312_left, r365_right, 2, 1, r312_HumanFront(2), 0, 0));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("humanFrontBottom3"), r365_MangleUnicode(118259), new r312_xn$Capture$2Lrc8.GlyphProc(function (r424_currentGlyph) {
                        var _r424_t0, _r424_t1;
                        r424_currentGlyph.setWidth(r362_MosaicWidth);
                        r424_currentGlyph.include(r312_ForceUpright());
                        r424_currentGlyph.include(r365_multicell.Select(r312_top, r312_bottom, r312_left, r365_right, 2, 1, r312_HumanFront(3), 0, 0));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("humanFrontBottom4"), r365_MangleUnicode(118260), new r312_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
                        var _r430_t0, _r430_t1;
                        r430_currentGlyph.setWidth(r362_MosaicWidth);
                        r430_currentGlyph.include(r312_ForceUpright());
                        r430_currentGlyph.include(r365_multicell.Select(r312_top, r312_bottom, r312_left, r365_right, 2, 1, r312_HumanFront(4), 0, 0));
                        return void 0;
                    }));
                    r312_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("flailRobotBody1"), r365_MangleUnicode(118262), new r312_xn$Capture$2Lrc8.GlyphProc(function (r436_currentGlyph) {
                        var _r436_t0, _r436_t1;
                        r436_currentGlyph.setWidth(r362_MosaicWidth);
                        r436_currentGlyph.include(r312_ForceUpright());
                        r436_currentGlyph.include(r312_FlailRobotUpper(0, r312_top, r312_bottom, r312_left, r365_right));
                        return void 0;
                    }));
                    return r312_xn$GlyphSaveSink$2Lrc4b.save(r365_MangleName("flailRobotBody2"), r365_MangleUnicode(118263), new r312_xn$Capture$2Lrc8.GlyphProc(function (r442_currentGlyph) {
                        var _r442_t0, _r442_t1;
                        r442_currentGlyph.setWidth(r362_MosaicWidth);
                        r442_currentGlyph.include(r312_ForceUpright());
                        r442_currentGlyph.include(r312_FlailRobotUpper(1, r312_top, r312_bottom, r312_left, r365_right));
                        return void 0;
                    }));
                })();
                _r362_t5 = _r362_t2 = _r362_t2 + 1;
                _r362_t4 = _r362_t2 < _r362_t1;
            }
            return _r362_t5;
        })();
        return r312_xn$GlyphSaveSink$2Lrc4b.save("ccHumanFigure", null, new r312_xn$Capture$2Lrc8.GlyphProc(function (r448_currentGlyph) {
            var _r448_t0, _r448_t1;
            r448_currentGlyph.include(r312_HumanFront(0)(r1_mix(r312_ParenBot, r312_ParenTop, 0.95), r1_mix(r312_ParenBot, r312_ParenTop, 0.05), r1_mix(r312_SB, r312_RightSB, 0.1), r1_mix(r312_SB, r312_RightSB, 0.9)));
            return void 0;
        }));
    });
    return void 0;
});


