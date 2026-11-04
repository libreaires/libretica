"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Powerline-And-GUI", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var _r313_t11, _r313_t12, _r313_t13, _r313_tag14, _r313_t15, _r313_tag16;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_AS_BASE = _r313_t0.AS_BASE;
        var r313_ALSO_METRICS = _r313_t0.ALSO_METRICS;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_SymbolMid = _r313_t1.SymbolMid;
        var r313_ParenTop = _r313_t1.ParenTop;
        var r313_ParenBot = _r313_t1.ParenBot;
        var r313_TackTop = _r313_t1.TackTop;
        var r313_TackBot = _r313_t1.TackBot;
        var r313_PictTop = _r313_t1.PictTop;
        var r313_PictBot = _r313_t1.PictBot;
        var r313_Translate = _r313_t1.Translate;
        var r313_ApparentTranslate = _r313_t1.ApparentTranslate;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_AccentStackOffset = _r313_t1.AccentStackOffset;
        var r313_WideWidth4 = _r313_t1.WideWidth4;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_Middle = _r313_t1.Middle;
        var r313_PeriodRadius = _r313_t1.PeriodRadius;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_SmallArchDepthB = _r313_t1.SmallArchDepthB;
        var r313_GeometryStroke = _r313_t1.GeometryStroke;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_close = _r313_t2.close;
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
        var r313_difference = _r313_t4.difference;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_Rect = _r313_t5.Rect;
        var r313_MaskBelow = _r313_t5.MaskBelow;
        var r313_HalfRectTriangle = _r313_t5.HalfRectTriangle;
        var r313_DotAt = _r313_t5.DotAt;
        var r313_OShape = _r313_t5.OShape;
        var r313_OShapeOutline = _r313_t5.OShapeOutline;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_xn$withtransform$5sIl = _r313_t5["with-transform"];
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$referglyph$1aao = _r313_t6["refer-glyph"];
        var r313_NameUni = _r313_t6.NameUni;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-OShape-Variants"].resolve();
        var r313_OvalShapeT = _r313_t7.OvalShapeT;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Shared-Symbol-Shapes"].resolve();
        var r313_TriangleShape = _r313_t8.TriangleShape;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Pictograph-Stick-Figure"].resolve();
        var r313_StickFigureKit = _r313_t9.StickFigureKit;
        var r313_PointingHandShape = _r313_t9.PointingHandShape;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
        var r313_GeometricDim = _r313_t10.GeometricDim;
        var r313_uiFigTop = r1_mix(r313_ParenBot, r313_ParenTop, 0.95);
        var r313_uiFigBot = r1_mix(r313_ParenBot, r313_ParenTop, 0.05);
        r313_xn$GlyphSaveSink$2Lrc4b.save("powerline/branch", 57504, new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
            var _r322_t0, _r322_t1;
            var r322_fine = r313_AdviceStroke(3.5);
            var r322_y1 = r1_mix(r313_uiFigBot, r313_uiFigTop, 0.8);
            var r322_y2 = r1_mix(r313_uiFigBot, r313_uiFigTop, 0.2);
            r322_currentGlyph.include(r313_VBar.l(r313_SB, r313_uiFigBot, r313_uiFigTop, r322_fine));
            r322_currentGlyph.include(r313_dispiro(r313_widths.rhs(r322_fine), r313_flat(r313_RightSB, r322_y1), r313_curl(r313_RightSB, r1_mix(r322_y1, r322_y2, 0.4)), r313_g4(r313_SB + r313_HSwToV(r322_fine), r322_y2, r313_heading(r313_Leftward))));
            r322_currentGlyph.include(r313_DotAt(r313_RightSB - r313_HSwToV(r322_fine) / 2, r322_y1, Math.max(r322_fine * 1.5, r313_PeriodRadius)));
            return void 0;
        }));
        r313_xn$GlyphSaveSink$2Lrc4b.save("powerline/lock", 57506, new r313_xn$Capture$2Lrc8.GlyphProc(function (r328_currentGlyph) {
            var _r328_t0, _r328_t1;
            var r328_fine = r313_AdviceStroke(3.5);
            var r328_lockTop = r1_mix(r313_uiFigBot, r313_uiFigTop, 0.6);
            var r328_lockLeft = r313_SB / 2;
            var r328_lockRight = r313_Width - r313_SB / 2;
            var r328_lockHoleWidth = 1 / 5;
            var r328_lockHoleLeft = r1_mix(r328_lockLeft, r328_lockRight, 1 / 2 - r328_lockHoleWidth / 2);
            var r328_lockHoleRight = r1_mix(r328_lockLeft, r328_lockRight, 1 / 2 + r328_lockHoleWidth / 2);
            var r328_lockHoleTop = r1_mix(r313_uiFigBot, r328_lockTop, 0.75);
            var r328_lockHoleBottom = r1_mix(r313_uiFigBot, r328_lockTop, 0.25);
            r328_currentGlyph.include(r313_union(r313_intersection(r313_xn$spirooutline$1aao(r313_corner(0, 2 * r313_uiFigTop), r313_corner(r313_Width, 2 * r313_uiFigTop), r313_corner(r313_Width, r328_lockTop - 1), r313_corner(0, r328_lockTop - 1), r313_close()), r313_OShape(r313_uiFigTop, r313_uiFigBot, r313_SB, r313_RightSB, r328_fine, r313_SmallArchDepthA, r313_SmallArchDepthB)), r313_difference(r313_xn$spirooutline$1aao(r313_corner(r328_lockLeft, r328_lockTop), r313_corner(r328_lockRight, r328_lockTop), r313_corner(r328_lockRight, r313_uiFigBot), r313_corner(r328_lockLeft, r313_uiFigBot), r313_close()), r313_OShapeOutline(r328_lockHoleTop, r328_lockHoleBottom, r328_lockHoleLeft, r328_lockHoleRight, r328_fine, r313_SmallArchDepthA * r328_lockHoleWidth, r313_SmallArchDepthB * r328_lockHoleWidth))));
            return void 0;
        }));
        var r313_KeyholeStroke = function (r330_t, r330_b, r330_l, r330_r, r330_sw, r330_circBot) {
            var _r330_t0, _r330_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                var _r332_t0, _r332_t1;
                var r332_trigTop = r1_mix(r330_b, r330_t, 1.5);
                var r332_trigClip = r1_mix(r330_t, r330_circBot, 0.5);
                var r332_mx = r1_mix(r330_l, r330_r, 0.5);
                var r332_circ = r313_OvalShapeT(r313_dispiro, r330_t, r330_circBot, r330_l, r330_r, r330_sw);
                var r332_circMask = r313_OvalShapeT(r313_xn$spirooutline$1aao, r330_t, r330_circBot, r330_l, r330_r);
                var r332_trig = r313_intersection(r313_MaskBelow(r332_trigClip), r313_TriangleShape(r332_mx, r332_trigTop, r330_r, r330_b, r330_l, r330_b, r330_sw));
                var r332_trigMask = r313_intersection(r313_MaskBelow(r332_trigClip), r313_xn$spirooutline$1aao(r313_corner(r332_mx, r332_trigTop), r313_corner(r330_r, r330_b), r313_corner(r330_l, r330_b)));
                r332_currentGlyph.include(r313_difference(r313_union(r332_circMask, r332_trigMask), r313_union(r313_difference(r332_circMask, r332_circ), r313_difference(r332_trigMask, r332_trig))));
                return void 0;
            });
        };
        r313_xn$GlyphSaveSink$2Lrc4b.save("keyhole", 118449, new r313_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
            var _r336_t0, _r336_t1;
            var r336_diameter = r313_RightSB - r313_SB - r313_OX * 2;
            r336_currentGlyph.include(r313_KeyholeStroke(r313_PictTop - r313_O, r313_PictBot, r313_SB + r313_OX, r313_RightSB - r313_OX, r313_GeometryStroke, r313_PictTop - r313_O - r336_diameter));
            return void 0;
        }));
        (function () {
            var r339_frameLeft = r1_mix(r313_SB, r313_RightSB, r313_DesignParameters.bracketOutside);
            var r339_frameRight = r1_mix(r313_RightSB, r313_SB, r313_DesignParameters.bracketOutside);
            var r339_progressBarGap = Math.min((r313_TackTop - r313_TackBot) / 6, r313_Width / 6, r313_AdviceStroke(5));
            r313_xn$GlyphSaveSink$2Lrc4b.save("powerline/progressBarStartEmpty", 60928, new r313_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                var _r342_t0, _r342_t1;
                r342_currentGlyph.include(r313_VBar.l(r339_frameLeft, r313_TackTop, r313_TackBot, r313_GeometryStroke));
                r342_currentGlyph.include(r313_HBar.t(r339_frameLeft, r313_Width - r313_O, r313_TackTop, r313_GeometryStroke));
                r342_currentGlyph.include(r313_HBar.b(r339_frameLeft, r313_Width - r313_O, r313_TackBot, r313_GeometryStroke));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("powerline/progressBarMiddleEmpty", 60929, new r313_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                var _r348_t0, _r348_t1;
                r348_currentGlyph.include(r313_HBar.t(r313_O, r313_Width - r313_O, r313_TackTop, r313_GeometryStroke));
                r348_currentGlyph.include(r313_HBar.b(r313_O, r313_Width - r313_O, r313_TackBot, r313_GeometryStroke));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("powerline/progressBarEndEmpty", 60930, new r313_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                var _r353_t0, _r353_t1;
                r353_currentGlyph.include(r313_VBar.r(r339_frameRight, r313_TackTop, r313_TackBot, r313_GeometryStroke));
                r353_currentGlyph.include(r313_HBar.t(r313_O, r339_frameRight, r313_TackTop, r313_GeometryStroke));
                r353_currentGlyph.include(r313_HBar.b(r313_O, r339_frameRight, r313_TackBot, r313_GeometryStroke));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("powerline/progressBarStartFilled", 60931, new r313_xn$Capture$2Lrc8.GlyphProc(function (r359_currentGlyph) {
                var _r359_t0, _r359_t1;
                r359_currentGlyph.include(r313_xn$referglyph$1aao("powerline/progressBarStartEmpty", r313_AS_BASE, r313_ALSO_METRICS));
                r359_currentGlyph.include(r313_Rect(r313_TackTop - r313_GeometryStroke - r339_progressBarGap, r313_TackBot + r313_GeometryStroke + r339_progressBarGap, r339_frameLeft + r313_HSwToV(r313_GeometryStroke) + r313_HSwToV(r339_progressBarGap), r313_Width - r313_O));
                return void 0;
            }));
            r313_xn$GlyphSaveSink$2Lrc4b.save("powerline/progressBarMiddleFilled", 60932, new r313_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                var _r364_t0, _r364_t1;
                r364_currentGlyph.include(r313_xn$referglyph$1aao("powerline/progressBarMiddleEmpty", r313_AS_BASE, r313_ALSO_METRICS));
                r364_currentGlyph.include(r313_Rect(r313_TackTop - r313_GeometryStroke - r339_progressBarGap, r313_TackBot + r313_GeometryStroke + r339_progressBarGap, 0 + r313_O, r313_Width - r313_O));
                return void 0;
            }));
            return r313_xn$GlyphSaveSink$2Lrc4b.save("powerline/progressBarEndFilled", 60933, new r313_xn$Capture$2Lrc8.GlyphProc(function (r369_currentGlyph) {
                var _r369_t0, _r369_t1;
                r369_currentGlyph.include(r313_xn$referglyph$1aao("powerline/progressBarEndEmpty", r313_AS_BASE, r313_ALSO_METRICS));
                r369_currentGlyph.include(r313_Rect(r313_TackTop - r313_GeometryStroke - r339_progressBarGap, r313_TackBot + r313_GeometryStroke + r339_progressBarGap, 0 + r313_O, r339_frameRight - r313_HSwToV(r313_GeometryStroke) - r313_HSwToV(r339_progressBarGap)));
                return void 0;
            }));
        })();
        return (function () {
            var r374_FMosaicWide, r374_MosaicNameSuffix, r374_MosaicWidth, r374_MosaicWidthScalar, _r374_t3, _r374_t5, _r374_t6, _r374_tag7;
            var r374_WidthKinds = [[0, ".NWID", r313_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r313_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r374_t0 = r374_WidthKinds;
            var _r374_t1 = _r374_t0.length;
            var _r374_t2 = 0;
            var _r374_t4 = _r374_t2 < _r374_t1;
            while (_r374_t4) {
                _r374_t3 = _r374_t0[_r374_t2];
                r374_FMosaicWide = _r374_t3[0];
                r374_MosaicNameSuffix = _r374_t3[1];
                r374_MosaicWidth = _r374_t3[2];
                r374_MosaicWidthScalar = _r374_t3[3];
                (function () {
                    var _r377_t0, _r377_tag1, _r377_t2, _r377_tag3, _r377_t4, _r377_tag5, _r377_t6, _r377_tag7, _r377_t8, _r377_tag9, _r377_t10, _r377_tag11;
                    var r377_MosaicDesiredWidth = r313_WideWidth4;
                    var r377_MosaicMiddle = r374_MosaicWidth / 2;
                    var r377_MosaicUnitWidth = r374_MosaicWidth / r374_MosaicWidthScalar;
                    var r377_MangleUnicode = function (r378_unicode, r378__desiredOverride) {
                        var _r378_t0, _r378_t1;
                        return r374_MosaicWidth === (r378__desiredOverride || r377_MosaicDesiredWidth) ? r378_unicode : void 0;
                    };
                    var r377_MangleName = function (r379_name) {
                        var _r379_t0, _r379_t1;
                        return r379_name + r374_MosaicNameSuffix;
                    };
                    var r377_Geom = r313_GeometricDim(r377_MosaicUnitWidth, r374_MosaicWidth);
                    (function () {
                        var r381_scaffold = {};
                        r381_scaffold.top = r1_mix(r313_uiFigBot, r313_uiFigTop, 0.85);
                        r381_scaffold.bot = r1_mix(r313_uiFigBot, r313_uiFigTop, 0.15);
                        r381_scaffold.width = (r313_Middle - r313_SB) * 2 * Math.pow(r374_MosaicWidth / r313_Width, 0.3);
                        r381_scaffold.xMiddle = r374_MosaicWidth / 2;
                        r381_scaffold.xLeft = r381_scaffold.xMiddle - r381_scaffold.width / 2;
                        r381_scaffold.xRight = r381_scaffold.xMiddle + r381_scaffold.width / 2;
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("arrowheadShapedPointer"), r377_MangleUnicode(129968), new r313_xn$Capture$2Lrc8.GlyphProc(function (r385_currentGlyph) {
                            var _r385_t0, _r385_t1;
                            r385_currentGlyph.setWidth(r374_MosaicWidth);
                            r385_currentGlyph.include(r313_xn$spirooutline$1aao(r313_corner(r381_scaffold.xLeft, r381_scaffold.top), r313_corner(r381_scaffold.xRight, r1_mix(r381_scaffold.bot, r381_scaffold.top, 1 / 4)), r313_corner(r1_mix(r381_scaffold.xLeft, r381_scaffold.xRight, 2 / 5), r1_mix(r381_scaffold.bot, r381_scaffold.top, 1 / 4)), r313_corner(r381_scaffold.xLeft, r381_scaffold.bot)));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r389_pointerTop = r1_mix(r313_uiFigBot, r313_uiFigTop, 0.25 * r374_MosaicWidthScalar);
                        var r389_fineStroke = r313_AdviceStroke(3.5, Math.sqrt(r374_MosaicWidthScalar / 2));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("whiteLowerLeftPointer"), r377_MangleUnicode(117894), new r313_xn$Capture$2Lrc8.GlyphProc(function (r392_currentGlyph) {
                            var _r392_t0, _r392_t1;
                            r392_currentGlyph.setWidth(r374_MosaicWidth);
                            r392_currentGlyph.include(r313_TriangleShape(r313_SB, r313_uiFigBot, r313_SB, r389_pointerTop, r374_MosaicWidth - r313_SB, r313_uiFigBot, r389_fineStroke));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("whiteLowerRightPointer"), r377_MangleUnicode(117895), new r313_xn$Capture$2Lrc8.GlyphProc(function (r397_currentGlyph) {
                            var _r397_t0, _r397_t1;
                            r397_currentGlyph.setWidth(r374_MosaicWidth);
                            r397_currentGlyph.include(r313_TriangleShape(r313_SB, r313_uiFigBot, r374_MosaicWidth - r313_SB, r389_pointerTop, r374_MosaicWidth - r313_SB, r313_uiFigBot, r389_fineStroke));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("topLeftBlackSmallTriangleLeft"), r377_MangleUnicode(118279), new r313_xn$Capture$2Lrc8.GlyphProc(function (r402_currentGlyph) {
                            var _r402_t0, _r402_t1;
                            r402_currentGlyph.setWidth(r374_MosaicWidth);
                            r402_currentGlyph.include(r313_xn$withtransform$5sIl(r313_ApparentTranslate(-r374_MosaicWidth / 4, (r313_CAP - r377_Geom.MidY) * 0.3 + r313_AccentStackOffset / 2), r313_xn$referglyph$1aao(r377_MangleName("blackSmallTriangleLeft"))));
                            return void 0;
                        }));
                        return r374_MosaicWidthScalar === 1 ? r313_xn$GlyphSaveSink$2Lrc4b.save("blackRightTriangleCaret", 118451, new r313_xn$Capture$2Lrc8.GlyphProc(function (r407_currentGlyph) {
                            var _r407_t0, _r407_t1;
                            r407_currentGlyph.setWidth(0);
                            r407_currentGlyph.include(r313_HalfRectTriangle(r374_MosaicWidth, r313_ParenBot, 0, r1_mix(0, r313_ParenBot, 0.2)));
                            return void 0;
                        })) : void 0;
                    })();
                    (function () {
                        var r411_BoxN = function (r412_n) {
                            var _r412_t0, _r412_t1;
                            return new r1_Box(r313_uiFigTop, r313_uiFigBot, r313_SB, r374_MosaicWidth * r412_n - r313_SB);
                        };
                        var r411_MosaicWidthMask = function () {
                            var _r413_t0, _r413_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(0, r1_mix(r313_ParenBot, r313_ParenTop, -1)), r313_corner(r374_MosaicWidth, r1_mix(r313_ParenBot, r313_ParenTop, -1)), r313_corner(r374_MosaicWidth, r1_mix(r313_ParenBot, r313_ParenTop, +2)), r313_corner(0, r1_mix(r313_ParenBot, r313_ParenTop, +2)));
                        };
                        var r411_RunningManBody = function (r414_xOffset) {
                            var _r414_t0, _r414_t1;
                            var r414_Kit = r313_StickFigureKit(r411_BoxN(2), r313_Translate(r414_xOffset, 0), r313_AdviceStroke(4));
                            return r313_union(r414_Kit.RoundSeg(0 / 16, 3 / 8, 3 / 16, 5 / 8, 1, 1), r414_Kit.RoundSeg(3 / 16, 5 / 8, 10 / 16, 5 / 8), r414_Kit.RoundSeg(10 / 16, 5 / 8, 13 / 16, 7 / 8, 1, 1), r414_Kit.RoundSeg(4 / 16, 3 / 8, 9 / 16, 3 / 8, 1, 1), r414_Kit.RoundSeg(9 / 16, 3 / 8, 13 / 16, 0 / 8), r414_Kit.RoundSeg(13 / 16, 0 / 8, 15 / 16, 0 / 8, 1, 1), r414_Kit.RoundSeg(4 / 16, 6 / 16, 6 / 16, 3 / 16), r414_Kit.RoundSeg(6 / 16, 3 / 16, 0 / 16, 3 / 16, 1, 1), r414_Kit.RoundSeg(0 / 16, 3 / 16, 2 / 16, 0 / 8, 0, 1), r414_Kit.Box(4 / 16, 6 / 16, 8 / 16, 5 / 8));
                        };
                        var r411_RunningManHead = function (r415_xOffset) {
                            var _r415_t0, _r415_t1;
                            var r415_Kit = r313_StickFigureKit(r411_BoxN(2), r313_Translate(r415_xOffset, 0), r313_AdviceStroke(4));
                            return r415_Kit.Circ(6 / 16, 14 / 16, 5 / 32);
                        };
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("runningManLeft"), r377_MangleUnicode(129970), new r313_xn$Capture$2Lrc8.GlyphProc(function (r418_currentGlyph) {
                            var _r418_t0, _r418_t1;
                            r418_currentGlyph.setWidth(r374_MosaicWidth);
                            r418_currentGlyph.include(r411_RunningManHead(0));
                            r418_currentGlyph.include(r313_intersection(r411_MosaicWidthMask(), r411_RunningManBody(0)));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("runningManRight"), r377_MangleUnicode(129971), new r313_xn$Capture$2Lrc8.GlyphProc(function (r424_currentGlyph) {
                            var _r424_t0, _r424_t1;
                            r424_currentGlyph.setWidth(r374_MosaicWidth);
                            r424_currentGlyph.include(r313_intersection(r411_MosaicWidthMask(), r411_RunningManBody(-r374_MosaicWidth)));
                            return void 0;
                        }));
                        var r411_FolderBody = function (r427_xOffset, r427_box) {
                            var _r427_t0, _r427_t1;
                            var r427_Kit = r313_StickFigureKit(r427_box, r313_Translate(r427_xOffset, 0), r313_AdviceStroke(4));
                            return r313_union(r427_Kit.RoundSeg(0 / 16, 1 / 8, 0 / 16, 11 / 16), r427_Kit.RoundSeg(0 / 16, 11 / 16, 3 / 16, 7 / 8, 1, 1), r427_Kit.RoundSeg(3 / 16, 7 / 8, 6 / 16, 7 / 8), r427_Kit.RoundSeg(6 / 16, 7 / 8, 9 / 16, 11 / 16, 1, 1), r427_Kit.RoundSeg(9 / 16, 11 / 16, 16 / 16, 11 / 16, 0, 1), r427_Kit.RoundSeg(16 / 16, 11 / 16, 16 / 16, 1 / 8), r427_Kit.RoundSeg(0 / 16, 1 / 8, 16 / 16, 1 / 8, 1, 1));
                        };
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("folderLeft"), r377_MangleUnicode(129977), new r313_xn$Capture$2Lrc8.GlyphProc(function (r430_currentGlyph) {
                            var _r430_t0, _r430_t1;
                            r430_currentGlyph.setWidth(r374_MosaicWidth);
                            r430_currentGlyph.include(r313_intersection(r411_MosaicWidthMask(), r411_FolderBody(0, r411_BoxN(2))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("folderRight"), r377_MangleUnicode(129978), new r313_xn$Capture$2Lrc8.GlyphProc(function (r435_currentGlyph) {
                            var _r435_t0, _r435_t1;
                            r435_currentGlyph.setWidth(r374_MosaicWidth);
                            r435_currentGlyph.include(r313_intersection(r411_MosaicWidthMask(), r411_FolderBody(-r374_MosaicWidth, r411_BoxN(2))));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("folder"), r377_MangleUnicode(128448), new r313_xn$Capture$2Lrc8.GlyphProc(function (r440_currentGlyph) {
                            var _r440_t0, _r440_t1;
                            r440_currentGlyph.setWidth(r374_MosaicWidth);
                            var r440_hbox = new r1_Box(r1_mix(r313_SymbolMid, r313_uiFigTop, 0.5 * r374_MosaicWidthScalar), r1_mix(r313_SymbolMid, r313_uiFigBot, 0.5 * r374_MosaicWidthScalar), r313_SB * (0.5 * r374_MosaicWidthScalar), r374_MosaicWidth - r313_SB * (0.5 * r374_MosaicWidthScalar));
                            r440_currentGlyph.include(r411_FolderBody(0, r440_hbox));
                            return void 0;
                        }));
                        var r411_PointingHandBody = function (r443_xOffset) {
                            var _r443_t0, _r443_t1;
                            return r313_PointingHandShape(r411_BoxN(3), r313_Translate(r443_xOffset, 0), r313_AdviceStroke(4));
                        };
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("pointingHand1"), r377_MangleUnicode(129985), new r313_xn$Capture$2Lrc8.GlyphProc(function (r446_currentGlyph) {
                            var _r446_t0, _r446_t1;
                            r446_currentGlyph.setWidth(r374_MosaicWidth);
                            r446_currentGlyph.include(r313_intersection(r411_MosaicWidthMask(), r411_PointingHandBody(0)));
                            return void 0;
                        }));
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("pointingHand2"), r377_MangleUnicode(129986), new r313_xn$Capture$2Lrc8.GlyphProc(function (r451_currentGlyph) {
                            var _r451_t0, _r451_t1;
                            r451_currentGlyph.setWidth(r374_MosaicWidth);
                            r451_currentGlyph.include(r313_intersection(r411_MosaicWidthMask(), r411_PointingHandBody(-r374_MosaicWidth)));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("pointingHand3"), r377_MangleUnicode(129987), new r313_xn$Capture$2Lrc8.GlyphProc(function (r456_currentGlyph) {
                            var _r456_t0, _r456_t1;
                            r456_currentGlyph.setWidth(r374_MosaicWidth);
                            r456_currentGlyph.include(r313_intersection(r411_MosaicWidthMask(), r411_PointingHandBody(-r374_MosaicWidth * 2)));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r460_scaffold = {};
                        r460_scaffold.top = r1_mix(r313_uiFigBot, r313_uiFigTop, 0.85);
                        r460_scaffold.bot = r1_mix(r313_uiFigBot, r313_uiFigTop, 0.15);
                        r460_scaffold.slope = 0.6;
                        r460_scaffold.width = (r313_Middle - r313_SB) * 2 * Math.pow(r374_MosaicWidth / r313_Width, 0.5);
                        r460_scaffold.stroke = r313_AdviceStroke(3.5);
                        r460_scaffold.xMiddle = r374_MosaicWidth / 2;
                        r460_scaffold.xLeft = r460_scaffold.xMiddle - r460_scaffold.width / 2;
                        r460_scaffold.xRight = r460_scaffold.xMiddle + r460_scaffold.width / 2;
                        r460_scaffold.xLeft2 = r460_scaffold.xMiddle - r460_scaffold.width;
                        r460_scaffold.xRight2 = r460_scaffold.xMiddle + r460_scaffold.width;
                        r460_scaffold.slopeRise = r460_scaffold.slope * r460_scaffold.width / 2;
                        var r460_ChevronUpperHalf = function (r462_flat) {
                            var _r462_t0, _r462_t1;
                            return r313_intersection(r313_xn$spirooutline$1aao(r313_corner(r460_scaffold.xMiddle, r460_scaffold.top), r313_corner(r460_scaffold.xLeft, r460_scaffold.top - r460_scaffold.slopeRise), r313_corner(r460_scaffold.xLeft, r460_scaffold.bot + r460_scaffold.stroke), r462_flat ? [] : [r313_corner(r460_scaffold.xMiddle, r460_scaffold.bot + r460_scaffold.stroke + r460_scaffold.slopeRise)], r313_corner(r460_scaffold.xRight, r460_scaffold.bot + r460_scaffold.stroke), r313_corner(r460_scaffold.xRight, r460_scaffold.top - r460_scaffold.slopeRise)), r313_union(r313_VBar.l(r460_scaffold.xLeft, r460_scaffold.bot, r460_scaffold.top, r460_scaffold.stroke), r313_VBar.r(r460_scaffold.xRight, r460_scaffold.bot, r460_scaffold.top, r460_scaffold.stroke), r313_dispiro(r313_widths.lhs(r460_scaffold.stroke), r313_corner(r460_scaffold.xMiddle, r460_scaffold.top), r313_corner(r460_scaffold.xLeft, r460_scaffold.top - r460_scaffold.slopeRise)), r313_dispiro(r313_widths.rhs(r460_scaffold.stroke), r313_corner(r460_scaffold.xMiddle, r460_scaffold.top), r313_corner(r460_scaffold.xRight, r460_scaffold.top - r460_scaffold.slopeRise))));
                        };
                        r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("upPointingChevron"), r377_MangleUnicode(129994), new r313_xn$Capture$2Lrc8.GlyphProc(function (r465_currentGlyph) {
                            var _r465_t0, _r465_t1;
                            r465_currentGlyph.setWidth(r374_MosaicWidth);
                            r465_currentGlyph.include(r460_ChevronUpperHalf(false));
                            r465_currentGlyph.include(r313_intersection(r313_xn$spirooutline$1aao(r313_corner(r460_scaffold.xLeft, r460_scaffold.top), r313_corner(r460_scaffold.xLeft, r460_scaffold.bot - r460_scaffold.stroke), r313_corner(r460_scaffold.xRight, r460_scaffold.bot - r460_scaffold.stroke), r313_corner(r460_scaffold.xRight, r460_scaffold.top)), r313_union(r313_dispiro(r313_widths.lhs(r460_scaffold.stroke), r313_corner(r460_scaffold.xMiddle, r460_scaffold.bot + r460_scaffold.slopeRise + r460_scaffold.stroke), r313_corner(r460_scaffold.xLeft2, r460_scaffold.bot - r460_scaffold.slopeRise + r460_scaffold.stroke)), r313_dispiro(r313_widths.rhs(r460_scaffold.stroke), r313_corner(r460_scaffold.xMiddle, r460_scaffold.bot + r460_scaffold.slopeRise + r460_scaffold.stroke), r313_corner(r460_scaffold.xRight2, r460_scaffold.bot - r460_scaffold.slopeRise + r460_scaffold.stroke)))));
                            return void 0;
                        }));
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("upPointingHouse"), r377_MangleUnicode(8962), new r313_xn$Capture$2Lrc8.GlyphProc(function (r471_currentGlyph) {
                            var _r471_t0, _r471_t1;
                            r471_currentGlyph.setWidth(r374_MosaicWidth);
                            r471_currentGlyph.include(r460_ChevronUpperHalf(true));
                            r471_currentGlyph.include(r313_HBar.b(r460_scaffold.xLeft, r460_scaffold.xRight, r460_scaffold.bot, r460_scaffold.stroke));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r476_scaffold = {};
                        r476_scaffold.gap = r313_Width / 16;
                        r476_scaffold.stroke = r313_AdviceStroke(2) / 2;
                        r476_scaffold.top = r1_mix(r313_uiFigBot, r313_uiFigTop, 0.9) - r476_scaffold.stroke;
                        r476_scaffold.mid = r1_mix(r313_uiFigBot, r313_uiFigTop, 0.5);
                        r476_scaffold.bot = r1_mix(r313_uiFigBot, r313_uiFigTop, 0.1) + r476_scaffold.stroke;
                        r476_scaffold.width = (r313_Middle - r313_SB) * 2 * Math.pow(r374_MosaicWidth / r313_Width, 0.5);
                        r476_scaffold.left = r374_MosaicWidth / 2 - r476_scaffold.width / 2 + r476_scaffold.stroke / 2;
                        r476_scaffold.right = r374_MosaicWidth / 2 + r476_scaffold.width / 2 - r476_scaffold.stroke / 2;
                        var r476_StrokeV = function (r478_x, r478_yt, r478_yb) {
                            var _r478_t0, _r478_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r478_x, r478_yt - r476_scaffold.gap), r313_corner(r478_x + r476_scaffold.stroke, r478_yt - r476_scaffold.gap - r476_scaffold.stroke), r313_corner(r478_x + r476_scaffold.stroke, r478_yb + r476_scaffold.gap + r476_scaffold.stroke), r313_corner(r478_x, r478_yb + r476_scaffold.gap), r313_corner(r478_x - r476_scaffold.stroke, r478_yb + r476_scaffold.gap + r476_scaffold.stroke), r313_corner(r478_x - r476_scaffold.stroke, r478_yt - r476_scaffold.gap - r476_scaffold.stroke));
                        };
                        var r476_StrokeH = function (r479_xl, r479_xr, r479_y, r479_s) {
                            var _r479_t0, _r479_t1;
                            return r313_xn$spirooutline$1aao(r313_corner(r479_xl + r476_scaffold.gap, r479_y), r313_corner(r479_xl + r476_scaffold.gap + r476_scaffold.stroke, r479_y + r476_scaffold.stroke), r313_corner(r479_xr - r476_scaffold.gap - r476_scaffold.stroke, r479_y + r476_scaffold.stroke), r313_corner(r479_xr - r476_scaffold.gap, r479_y), r313_corner(r479_xr - r476_scaffold.gap - r476_scaffold.stroke, r479_y - r476_scaffold.stroke), r313_corner(r479_xl + r476_scaffold.gap + r476_scaffold.stroke, r479_y - r476_scaffold.stroke));
                        };
                        var r476_SegmentedDigit = function (r480_unicode, r480_a, r480_b, r480_c, r480_d, r480_e, r480_f, r480_g) {
                            var _r480_t0, _r480_t1;
                            return r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName(r313_NameUni(r480_unicode)), r377_MangleUnicode(r480_unicode), new r313_xn$Capture$2Lrc8.GlyphProc(function (r483_currentGlyph) {
                                var _r483_t0, _r483_t1;
                                r483_currentGlyph.setWidth(r374_MosaicWidth);
                                if (r480_a) r483_currentGlyph.include(r476_StrokeH(r476_scaffold.left, r476_scaffold.right, r476_scaffold.top));
                                if (r480_b) r483_currentGlyph.include(r476_StrokeV(r476_scaffold.left, r476_scaffold.top, r476_scaffold.mid));
                                if (r480_c) r483_currentGlyph.include(r476_StrokeV(r476_scaffold.right, r476_scaffold.top, r476_scaffold.mid));
                                if (r480_d) r483_currentGlyph.include(r476_StrokeH(r476_scaffold.left, r476_scaffold.right, r476_scaffold.mid));
                                if (r480_e) r483_currentGlyph.include(r476_StrokeV(r476_scaffold.left, r476_scaffold.mid, r476_scaffold.bot));
                                if (r480_f) r483_currentGlyph.include(r476_StrokeV(r476_scaffold.right, r476_scaffold.mid, r476_scaffold.bot));
                                if (r480_g) r483_currentGlyph.include(r476_StrokeH(r476_scaffold.left, r476_scaffold.right, r476_scaffold.bot));
                                return void 0;
                            }));
                        };
                        r476_SegmentedDigit(130032, 1, 1, 1, 0, 1, 1, 1);
                        r476_SegmentedDigit(130033, 0, 0, 1, 0, 0, 1, 0);
                        r476_SegmentedDigit(130034, 1, 0, 1, 1, 1, 0, 1);
                        r476_SegmentedDigit(130035, 1, 0, 1, 1, 0, 1, 1);
                        r476_SegmentedDigit(130036, 0, 1, 1, 1, 0, 1, 0);
                        r476_SegmentedDigit(130037, 1, 1, 0, 1, 0, 1, 1);
                        r476_SegmentedDigit(130038, 1, 1, 0, 1, 1, 1, 1);
                        r476_SegmentedDigit(130039, 1, 1, 1, 0, 0, 1, 0);
                        r476_SegmentedDigit(130040, 1, 1, 1, 1, 1, 1, 1);
                        return r476_SegmentedDigit(130041, 1, 1, 1, 1, 0, 1, 1);
                    })();
                    return (function () {
                        return r313_xn$GlyphSaveSink$2Lrc4b.save(r377_MangleName("voidedGreekCross"), r377_MangleUnicode(129979), new r313_xn$Capture$2Lrc8.GlyphProc(function (r496_currentGlyph) {
                            var _r496_t0, _r496_t1;
                            r496_currentGlyph.setWidth(r374_MosaicWidth);
                            var r496_sw = r313_AdviceStroke(4);
                            var r496_gap = Math.max(r313_Width / 8, r313_Width / 6 - r496_sw / 2, r313_AdviceStroke(3) - r496_sw / 2) / 2;
                            var r496_mid = r374_MosaicWidth / 2;
                            var r496_size = Math.min(r374_MosaicWidth - r313_SB * 2, r313_uiFigTop - r313_uiFigBot) / 2;
                            r496_currentGlyph.include(r313_union(r313_VBar.r(r496_mid - r496_gap, r313_SymbolMid + r496_gap, r313_SymbolMid + r496_size, r496_sw), r313_VBar.r(r496_mid - r496_gap, r313_SymbolMid - r496_gap, r313_SymbolMid - r496_size, r496_sw), r313_VBar.l(r496_mid + r496_gap, r313_SymbolMid + r496_gap, r313_SymbolMid + r496_size, r496_sw), r313_VBar.l(r496_mid + r496_gap, r313_SymbolMid - r496_gap, r313_SymbolMid - r496_size, r496_sw), r313_HBar.b(r496_mid - r496_size, r496_mid - r496_gap, r313_SymbolMid + r496_gap, r496_sw), r313_HBar.b(r496_mid + r496_size, r496_mid + r496_gap, r313_SymbolMid + r496_gap, r496_sw), r313_HBar.t(r496_mid - r496_size, r496_mid - r496_gap, r313_SymbolMid - r496_gap, r496_sw), r313_HBar.t(r496_mid + r496_size, r496_mid + r496_gap, r313_SymbolMid - r496_gap, r496_sw)));
                            return void 0;
                        }));
                    })();
                })();
                _r374_t5 = _r374_t2 = _r374_t2 + 1;
                _r374_t4 = _r374_t2 < _r374_t1;
            }
            return _r374_t5;
        })();
    });
    return void 0;
});


