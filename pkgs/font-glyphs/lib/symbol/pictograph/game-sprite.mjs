"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/box";
import * as _s0_t2 from "@iosevka/geometry/transform";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Box = _r1_t9.Box;
var _r1_t10 = _s0_t2;
var r1_Transform = _r1_t10.Transform;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t3 = r1_apply = function () {
    var r309_block, _r309_t4, _r309_t6;
    var _r309_t3 = this;
    var _r309_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r309_t1 = _r309_t0.length;
    var _r309_t2 = 0;
    var _r309_t5 = _r309_t2 < _r309_t1;
    while (_r309_t5) {
        _r309_t6 = (r309_block = _r309_t0[_r309_t2], r309_block(_r309_t3), _r309_t2 = _r309_t2 + 1);
        _r309_t5 = _r309_t2 < _r309_t1;
    }
    return _r309_t6;
};
r1_xn$GlyphBlocks$2Lrc2b.push(function (r313_xn$Capture_Ext$2Lrc2b) {
    var _r313_t0, _r313_t1;
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Symbol-Pictograph-Game-Sprite", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var _r314_t5, _r314_t6, _r314_t7, _r314_tag8;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var r314_fontMetrics = _r314_t0.fontMetrics;
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_Width = _r314_t1.Width;
        var r314_SB = _r314_t1.SB;
        var r314_SymbolMid = _r314_t1.SymbolMid;
        var r314_ParenTop = _r314_t1.ParenTop;
        var r314_ParenBot = _r314_t1.ParenBot;
        var r314_PlusTop = _r314_t1.PlusTop;
        var r314_PlusBot = _r314_t1.PlusBot;
        var r314_HSwToV = _r314_t1.HSwToV;
        var r314_Upward = _r314_t1.Upward;
        var r314_Rightward = _r314_t1.Rightward;
        var r314_O = _r314_t1.O;
        var r314_AdviceStroke = _r314_t1.AdviceStroke;
        var r314_WideWidth4 = _r314_t1.WideWidth4;
        var r314_TINY = _r314_t1.TINY;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_g4 = _r314_t2.g4;
        var r314_corner = _r314_t2.corner;
        var r314_flat = _r314_t2.flat;
        var r314_curl = _r314_t2.curl;
        var r314_widths = _r314_t2.widths;
        var r314_heading = _r314_t2.heading;
        var r314_archv = _r314_t2.archv;
        var r314_arcvh = _r314_t2.arcvh;
        var r314_dispiro = _r314_t2.dispiro;
        var r314_xn$spirooutline$1aao = _r314_t2["spiro-outline"];
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var r314_union = _r314_t4.union;
        var r314_intersection = _r314_t4.intersection;
        var r314_difference = _r314_t4.difference;
        return (function () {
            var r317_FMosaicWide, r317_MosaicNameSuffix, r317_MosaicWidth, r317_MosaicWidthScalar, _r317_t3, _r317_t5, _r317_t6, _r317_tag7;
            var r317_WidthKinds = [[0, ".NWID", r314_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r314_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
            var _r317_t0 = r317_WidthKinds;
            var _r317_t1 = _r317_t0.length;
            var _r317_t2 = 0;
            var _r317_t4 = _r317_t2 < _r317_t1;
            while (_r317_t4) {
                _r317_t3 = _r317_t0[_r317_t2];
                r317_FMosaicWide = _r317_t3[0];
                r317_MosaicNameSuffix = _r317_t3[1];
                r317_MosaicWidth = _r317_t3[2];
                r317_MosaicWidthScalar = _r317_t3[3];
                (function () {
                    var _r320_t5, _r320_tag6, _r320_t7, _r320_tag8, _r320_t9, _r320_tag10, _r320_t11, _r320_tag12, _r320_t13, _r320_tag14, _r320_t15, _r320_tag16, _r320_t17, _r320_tag18, _r320_t19, _r320_tag20, _r320_t21, _r320_tag22;
                    var r320_MosaicDesiredWidth = r314_WideWidth4;
                    var r320_MosaicMiddle = r317_MosaicWidth / 2;
                    var r320_MosaicUnitWidth = r317_MosaicWidth / r317_MosaicWidthScalar;
                    var r320_MangleUnicode = function (r321_unicode, r321__desiredOverride) {
                        var _r321_t0, _r321_t1;
                        return r317_MosaicWidth === (r321__desiredOverride || r320_MosaicDesiredWidth) ? r321_unicode : void 0;
                    };
                    var r320_MangleName = function (r322_name) {
                        var _r322_t0, _r322_t1;
                        return r322_name + r317_MosaicNameSuffix;
                    };
                    var _r320_t0 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
                    var r320_MaskAbove = _r320_t0.MaskAbove;
                    var r320_MaskBelow = _r320_t0.MaskBelow;
                    var r320_DotAt = _r320_t0.DotAt;
                    var r320_Ellipse = _r320_t0.Ellipse;
                    var r320_OShape = _r320_t0.OShape;
                    var r320_HBar = _r320_t0.HBar;
                    var r320_VBar = _r320_t0.VBar;
                    var r320_ForceUpright = _r320_t0.ForceUpright;
                    var _r320_t1 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
                    var r320_xn$referglyph$1aao = _r320_t1["refer-glyph"];
                    var _r320_t2 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Shared-Symbol-Shapes"].resolve();
                    var r320_TriangleShape = _r320_t2.TriangleShape;
                    var _r320_t3 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Pictograph-Stick-Figure"].resolve();
                    var r320_StickFigureKit = _r320_t3.StickFigureKit;
                    var r320_WithD4Transform = _r320_t3.WithD4Transform;
                    var r320_D4Transform = _r320_t3.D4Transform;
                    var _r320_t4 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Symbol-Geometric-Shared"].resolve();
                    var r320_GeometricDim = _r320_t4.GeometricDim;
                    var r320_top = r314_fontMetrics.os2.sTypoAscender;
                    var r320_bottom = r314_fontMetrics.os2.sTypoDescender;
                    var r320_left = 0;
                    var r320_right = r317_MosaicWidth;
                    var r320_midX = r1_mix(r320_left, r320_right, 0.5);
                    var r320_midY = r1_mix(r320_top, r320_bottom, 0.5);
                    var r320_uiTop = r1_mix(r314_ParenBot, r314_ParenTop, 0.95);
                    var r320_uiBot = r1_mix(r314_ParenBot, r314_ParenTop, 0.05);
                    var r320_uiLeft = r320_left + r314_SB;
                    var r320_uiRight = r320_right - r314_SB;
                    var r320_Geom = r320_GeometricDim(r320_MosaicUnitWidth, r317_MosaicWidth);
                    var r320_graphicSw = r314_AdviceStroke(3.5);
                    var r320_smallGraphicSw = r314_AdviceStroke(3.5, Math.sqrt(r317_MosaicWidthScalar / 2));
                    var r320_heavyGraphicSw = Math.max(r320_graphicSw * 2, r314_Width * 0.15);
                    var r320_squareBox = new r1_Box(r320_Geom.Top, r320_Geom.Bot, r320_Geom.Left, r320_Geom.Right);
                    var r320_SidewaysBox = function (r328_box, r328__left2, r328__right2) {
                        var _r328_t0, _r328_t1;
                        var r328_left2 = r1_fallback(r328__left2, r328_box.left);
                        var r328_right2 = r1_fallback(r328__right2, r328_box.right);
                        var r328_newHeight = (r328_box.right - r328_box.left) * (r328_right2 - r328_left2) / (r328_box.top - r328_box.bottom);
                        var r328_midX = r1_mix(r328_left2, r328_right2, 0.5);
                        var r328_midY = r328_box.yMid;
                        return new r1_Box(r328_midY + (r328_right2 - r328_midX), r328_midY + (r328_left2 - r328_midX), r328_midX - r328_newHeight / 2, r328_midX + r328_newHeight / 2);
                    };
                    var r320_uiBox = new r1_Box(r320_uiTop, r320_uiBot, r320_uiLeft, r320_uiRight);
                    var r320_uiHBox = r320_SidewaysBox(r320_uiBox);
                    var r320_sb = r314_SB * (0.5 * r317_MosaicWidthScalar);
                    var r320_smallHBox = new r1_Box(r1_mix(r314_SymbolMid, r314_PlusTop, 0.5 * r317_MosaicWidthScalar), r1_mix(r314_SymbolMid, r314_PlusBot, 0.5 * r317_MosaicWidthScalar), r320_sb, r317_MosaicWidth - r320_sb);
                    var r320_vScalar = Math.sqrt(2 * r317_MosaicWidthScalar);
                    var r320_smallVBox = new r1_Box(r1_mix(r314_SymbolMid, r314_PlusTop, 0.5 * r320_vScalar), r1_mix(r314_SymbolMid, r314_PlusBot, 0.5 * r320_vScalar), r320_sb + 0.5 * (r317_MosaicWidth - r314_Width * r320_vScalar), r314_Width * r320_vScalar - r320_sb + 0.5 * (r317_MosaicWidth - r314_Width * r320_vScalar));
                    (function () {
                        var r330_scaffold = {};
                        r330_scaffold.xWheelFront = 1.5 / 9;
                        r330_scaffold.xWheel = 1 / 9;
                        r330_scaffold.xWheelRear = 0.5 / 9;
                        r330_scaffold.wheelDiam = 3 / 9;
                        r330_scaffold.yAxle = r330_scaffold.wheelDiam / 2;
                        var r330_Car = function (r331_box, r331_fJut, r331_fWindow, r331_fSymmetric, r331_rot, r331_bodyWidth, r331__sw) {
                            var _r331_t0, _r331_t1;
                            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r333_currentGlyph) {
                                var _r333_t0, _r333_t1;
                                var r333_yBody = r331_fJut ? 0 : r330_scaffold.yAxle;
                                var r333_xFront = r331_fSymmetric ? r330_scaffold.xWheel : r330_scaffold.xWheelFront;
                                var r333_xRear = r331_fSymmetric ? r330_scaffold.xWheel : r330_scaffold.xWheelRear;
                                var r333_sw = r1_fallback(r331__sw, r320_smallGraphicSw);
                                var r333_tfm = r320_D4Transform(r320_midX, r331_rot, 0);
                                var r333_Kit = r320_StickFigureKit(r331_box, r333_tfm, r333_sw);
                                var r333_Kit2 = !r331_fSymmetric ? r333_Kit : r320_StickFigureKit(r331_box, r333_tfm, r333_sw * 2);
                                var r333_shape = r314_union(r333_Kit2.RoundSeg(r333_xFront, 1, r333_xFront, 1 - r330_scaffold.wheelDiam), r333_Kit.RoundSeg(r333_xFront, 1 - r330_scaffold.yAxle, 1 - r333_xFront, 1 - r330_scaffold.yAxle), r333_Kit2.RoundSeg(1 - r333_xFront, 1, 1 - r333_xFront, 1 - r330_scaffold.wheelDiam), r333_Kit2.RoundSeg(r333_xRear, r330_scaffold.wheelDiam, r333_xRear, 0), r333_Kit.RoundSeg(r333_xRear, r330_scaffold.yAxle, 1 - r333_xRear, r330_scaffold.yAxle), r333_Kit2.RoundSeg(1 - r333_xRear, r330_scaffold.wheelDiam, 1 - r333_xRear, 0), r331_bodyWidth <= 0 ? r333_Kit.RoundSeg(1 / 2, 1 - r333_yBody, 1 / 2, r333_yBody) : r333_Kit.Box(1 / 2 - r331_bodyWidth / 2, 1 - r333_yBody, 1 / 2 + r331_bodyWidth / 2, r333_yBody));
                                if (r331_fWindow) r333_currentGlyph.include(r314_difference(r333_shape, r333_Kit.Box(1 / 2 - r331_bodyWidth / 6, 1 - r333_yBody - 1 / 9, 1 / 2 + r331_bodyWidth / 6, 1 - r333_yBody - 3 / 9))); else r333_currentGlyph.include(r333_shape);
                                return void 0;
                            });
                        };
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("goKartUp"), r320_MangleUnicode(117760), new r314_xn$Capture$2Lrc8.GlyphProc(function (r338_currentGlyph) {
                            var _r338_t0, _r338_t1;
                            r338_currentGlyph.setWidth(r317_MosaicWidth);
                            r338_currentGlyph.include(r330_Car(r320_squareBox, 0, 0, 0, 0, 0));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("goKartRight"), r320_MangleUnicode(117761), new r314_xn$Capture$2Lrc8.GlyphProc(function (r343_currentGlyph) {
                            var _r343_t0, _r343_t1;
                            r343_currentGlyph.setWidth(r317_MosaicWidth);
                            r343_currentGlyph.include(r330_Car(r320_squareBox, 0, 0, 0, 3, 0));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("raceCarLeft"), r320_MangleUnicode(117911), new r314_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                            var _r348_t0, _r348_t1;
                            r348_currentGlyph.setWidth(r317_MosaicWidth);
                            r348_currentGlyph.include(r330_Car(r320_squareBox, 1, 1, 1, 1, 3 / 9));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("raceCarUp"), r320_MangleUnicode(117912), new r314_xn$Capture$2Lrc8.GlyphProc(function (r353_currentGlyph) {
                            var _r353_t0, _r353_t1;
                            r353_currentGlyph.setWidth(r317_MosaicWidth);
                            r353_currentGlyph.include(r330_Car(r320_squareBox, 1, 1, 1, 0, 3 / 9));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("raceCarRight"), r320_MangleUnicode(117913), new r314_xn$Capture$2Lrc8.GlyphProc(function (r358_currentGlyph) {
                            var _r358_t0, _r358_t1;
                            r358_currentGlyph.setWidth(r317_MosaicWidth);
                            r358_currentGlyph.include(r330_Car(r320_squareBox, 1, 1, 1, 3, 3 / 9));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("raceCarDown"), r320_MangleUnicode(117914), new r314_xn$Capture$2Lrc8.GlyphProc(function (r363_currentGlyph) {
                            var _r363_t0, _r363_t1;
                            r363_currentGlyph.setWidth(r317_MosaicWidth);
                            r363_currentGlyph.include(r330_Car(r320_squareBox, 1, 1, 1, 2, 3 / 9));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("raceCarHori"), r320_MangleUnicode(117915), new r314_xn$Capture$2Lrc8.GlyphProc(function (r368_currentGlyph) {
                            var _r368_t0, _r368_t1;
                            r368_currentGlyph.setWidth(r317_MosaicWidth);
                            r368_currentGlyph.include(r330_Car(r320_squareBox, 1, 0, 1, 1, 3 / 9));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("raceCarVert"), r320_MangleUnicode(117916), new r314_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                            var _r373_t0, _r373_t1;
                            r373_currentGlyph.setWidth(r317_MosaicWidth);
                            r373_currentGlyph.include(r330_Car(r320_squareBox, 1, 0, 1, 0, 3 / 9));
                            return void 0;
                        }));
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("goKartVert"), r320_MangleUnicode(117917), new r314_xn$Capture$2Lrc8.GlyphProc(function (r378_currentGlyph) {
                            var _r378_t0, _r378_t1;
                            r378_currentGlyph.setWidth(r317_MosaicWidth);
                            r378_currentGlyph.include(r330_Car(r320_squareBox, 0, 0, 1, 0, 3 / 9));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r382_StickManScaffold = function (r383_box, r383__sw) {
                            var _r383_t0, _r383_t1;
                            var r383_baseHeight = r320_uiTop - r320_uiBot;
                            var r383_height = r383_box.top - r383_box.bottom;
                            var r383_scale = r383_height / r383_baseHeight;
                            var r383_scaffold = {
                                "top": r383_box.top,
                                "bot": r383_box.bottom,
                                "left": r383_box.left,
                                "right": r383_box.right,
                                "stroke": r1_fallback(r383__sw, r320_graphicSw),
                                "xMiddle": r383_box.xMid,
                                "yMiddle": r383_box.yMid,
                                "armRaiseK": 0.4,
                                "headSize": r383_height / 2.5,
                                "legSize": (r314_Width - r314_SB * 2) * r383_scale,
                                "armSize": (r314_Width - r314_SB) * r383_scale
                            };
                            r383_scaffold.yPelvis = r383_scaffold.bot + r383_scaffold.legSize / 2;
                            r383_scaffold.xLeftFoot = r383_scaffold.xMiddle - r383_scaffold.legSize / 2;
                            r383_scaffold.xRightFoot = r383_scaffold.xMiddle + r383_scaffold.legSize / 2;
                            r383_scaffold.yNeck = r383_scaffold.top - r383_scaffold.headSize;
                            r383_scaffold.xLeftHead = r383_scaffold.xMiddle - r383_scaffold.headSize / 2;
                            r383_scaffold.xRightHead = r383_scaffold.xMiddle + r383_scaffold.headSize / 2;
                            r383_scaffold.xLeftArm = r383_scaffold.xMiddle - r383_scaffold.armSize / 2;
                            r383_scaffold.xRightArm = r383_scaffold.xMiddle + r383_scaffold.armSize / 2;
                            r383_scaffold.yShoulder = function (r384_p) {
                                var _r384_t0, _r384_t1;
                                return r1_mix(r383_scaffold.yPelvis, r383_scaffold.yNeck, r384_p);
                            };
                            return r383_scaffold;
                        };
                        var r382_StickManHead = function (r385_scaffold) {
                            var _r385_t0, _r385_t1;
                            return r320_OShape(r385_scaffold.top - r314_O, r385_scaffold.yNeck + r314_O, r385_scaffold.xLeftHead + r314_O, r385_scaffold.xRightHead - r314_O, r385_scaffold.stroke);
                        };
                        var r382_StickManArms = function (r386_scaffold, r386_p, r386_kl, r386_kr) {
                            var _r386_t0, _r386_t1;
                            return r314_union(r314_dispiro(r314_widths.center(r386_scaffold.stroke), r314_corner(r386_scaffold.xMiddle, r386_scaffold.yShoulder(r386_p)), r314_corner(r386_scaffold.xLeftArm, r386_scaffold.yShoulder(r386_p) + r386_scaffold.armSize / 2 * r386_kl)), r314_dispiro(r314_widths.center(r386_scaffold.stroke), r314_corner(r386_scaffold.xMiddle, r386_scaffold.yShoulder(r386_p)), r314_corner(r386_scaffold.xRightArm, r386_scaffold.yShoulder(r386_p) + r386_scaffold.armSize / 2 * r386_kr)));
                        };
                        var r382_StickManBody = function (r387_scaffold, r387_kl, r387_kr) {
                            var _r387_t0, _r387_t1;
                            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
                                var _r389_t0, _r389_t1;
                                r389_currentGlyph.include(r382_StickManHead(r387_scaffold));
                                r389_currentGlyph.include(r320_VBar.m(r387_scaffold.xMiddle, r387_scaffold.yPelvis, r387_scaffold.yNeck, r387_scaffold.stroke));
                                r389_currentGlyph.include(r314_dispiro(r314_widths.center(r387_scaffold.stroke), r314_corner(r387_scaffold.xMiddle, r387_scaffold.yPelvis), r314_corner(r387_scaffold.xLeftFoot, r387_scaffold.bot)));
                                r389_currentGlyph.include(r314_dispiro(r314_widths.center(r387_scaffold.stroke), r314_corner(r387_scaffold.xMiddle, r387_scaffold.yPelvis), r314_corner(r387_scaffold.xRightFoot, r387_scaffold.bot)));
                                r389_currentGlyph.include(r382_StickManArms(r387_scaffold, 0.6, r387_kl, r387_kr));
                                return void 0;
                            });
                        };
                        var r382_StickManDressBody = function (r395_scaffold, r395_kl, r395_kr) {
                            var _r395_t0, _r395_t1;
                            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r397_currentGlyph) {
                                var _r397_t0, _r397_t1;
                                r397_currentGlyph.include(r382_StickManHead(r395_scaffold));
                                var r397_p = 0.7;
                                var r397_dressBottom = r1_mix(r395_scaffold.bot, r395_scaffold.yNeck, 0.25) - r395_scaffold.stroke / 2;
                                var r397_dressLeft = r395_scaffold.xLeftFoot - r395_scaffold.stroke / 2;
                                var r397_dressRight = r395_scaffold.xRightFoot + r395_scaffold.stroke / 2;
                                r397_currentGlyph.include(r382_StickManArms(r395_scaffold, r397_p, r395_kl, r395_kr));
                                r397_currentGlyph.include(r320_VBar.m(r395_scaffold.xMiddle, r395_scaffold.yShoulder(r397_p), r395_scaffold.yNeck));
                                r397_currentGlyph.include(r320_TriangleShape(r395_scaffold.xMiddle, r395_scaffold.yShoulder(r397_p) + r395_scaffold.stroke, r397_dressRight, r397_dressBottom, r397_dressLeft, r397_dressBottom, r395_scaffold.stroke));
                                r397_currentGlyph.include(r320_VBar.m(r1_mix(r397_dressLeft, r397_dressRight, 0.3), r395_scaffold.bot, r397_dressBottom - r314_O, r395_scaffold.stroke));
                                r397_currentGlyph.include(r320_VBar.m(r1_mix(r397_dressLeft, r397_dressRight, 0.7), r395_scaffold.bot, r397_dressBottom - r314_O, r395_scaffold.stroke));
                                return void 0;
                            });
                        };
                        var r382_scaffold = r382_StickManScaffold(r320_uiBox);
                        var r382_hScaffold = r382_StickManScaffold(r320_uiHBox, r320_smallGraphicSw);
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("stickMan"), r320_MangleUnicode(129989), new r314_xn$Capture$2Lrc8.GlyphProc(function (r406_currentGlyph) {
                            var _r406_t0, _r406_t1;
                            r406_currentGlyph.setWidth(r317_MosaicWidth);
                            r406_currentGlyph.include(r382_StickManBody(r382_scaffold, 0, 0));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("stickManLeft"), r320_MangleUnicode(117762), new r314_xn$Capture$2Lrc8.GlyphProc(function (r411_currentGlyph) {
                            var _r411_t0, _r411_t1;
                            r411_currentGlyph.setWidth(r317_MosaicWidth);
                            r411_currentGlyph.include(r320_WithD4Transform(r320_midX, 1, 0, function () {
                                var _r414_t0, _r414_t1;
                                return r382_StickManBody(r382_hScaffold, 0, 0);
                            }));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("stickManRight"), r320_MangleUnicode(117763), new r314_xn$Capture$2Lrc8.GlyphProc(function (r417_currentGlyph) {
                            var _r417_t0, _r417_t1;
                            r417_currentGlyph.setWidth(r317_MosaicWidth);
                            r417_currentGlyph.include(r320_WithD4Transform(r320_midX, 3, 0, function () {
                                var _r420_t0, _r420_t1;
                                return r382_StickManBody(r382_hScaffold, 0, 0);
                            }));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("stickManDown"), r320_MangleUnicode(117764), new r314_xn$Capture$2Lrc8.GlyphProc(function (r423_currentGlyph) {
                            var _r423_t0, _r423_t1;
                            r423_currentGlyph.setWidth(r317_MosaicWidth);
                            r423_currentGlyph.include(r320_WithD4Transform(r320_midX, 2, 0, function () {
                                var _r426_t0, _r426_t1;
                                return r382_StickManBody(r382_scaffold, 0, 0);
                            }));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("stickManArmsRaised"), r320_MangleUnicode(129990), new r314_xn$Capture$2Lrc8.GlyphProc(function (r429_currentGlyph) {
                            var _r429_t0, _r429_t1;
                            r429_currentGlyph.setWidth(r317_MosaicWidth);
                            r429_currentGlyph.include(r382_StickManBody(r382_scaffold, r382_scaffold.armRaiseK, r382_scaffold.armRaiseK));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("stickManLeaningLeft"), r320_MangleUnicode(129991), new r314_xn$Capture$2Lrc8.GlyphProc(function (r434_currentGlyph) {
                            var _r434_t0, _r434_t1;
                            r434_currentGlyph.setWidth(r317_MosaicWidth);
                            r434_currentGlyph.include(r382_StickManBody(r382_scaffold, -r382_scaffold.armRaiseK, r382_scaffold.armRaiseK));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("stickManLeaningRight"), r320_MangleUnicode(129992), new r314_xn$Capture$2Lrc8.GlyphProc(function (r439_currentGlyph) {
                            var _r439_t0, _r439_t1;
                            r439_currentGlyph.setWidth(r317_MosaicWidth);
                            r439_currentGlyph.include(r382_StickManBody(r382_scaffold, r382_scaffold.armRaiseK, -r382_scaffold.armRaiseK));
                            return void 0;
                        }));
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("stickManWithDress"), r320_MangleUnicode(129993), new r314_xn$Capture$2Lrc8.GlyphProc(function (r444_currentGlyph) {
                            var _r444_t0, _r444_t1;
                            r444_currentGlyph.setWidth(r317_MosaicWidth);
                            r444_currentGlyph.include(r382_StickManDressBody(r382_scaffold, 0, 0));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r448_eyeSize = r320_Geom.Size / 8;
                        var r448_mouthWidth = r320_Geom.Size / 3;
                        var r448_eyeOffset = r448_mouthWidth;
                        var r448_SnakeHead = function (r449_facing, r449_fMouth) {
                            var _r449_t0, _r449_t1;
                            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r451_currentGlyph) {
                                var _r451_t0, _r451_t1, _r451_t2, _r451_t3, _r451_t4, _r451_t5, _r451_t6;
                                r451_currentGlyph.setWidth(r317_MosaicWidth);
                                r451_currentGlyph.include(r320_ForceUpright());
                                var r451_eyeX = (_r451_t0 = r449_facing, 0 === _r451_t0 ? r320_midX + r448_eyeSize : 1 === _r451_t0 ? r320_midX - r448_eyeSize - r448_eyeOffset : 2 === _r451_t0 ? r320_midX - r448_eyeSize : 3 === _r451_t0 ? r320_midX + r448_eyeSize + r448_eyeOffset : void 0);
                                var r451_eyeY = (_r451_t1 = r449_facing, 0 === _r451_t1 ? r320_midY + r448_eyeSize + r448_eyeOffset : 1 === _r451_t1 ? r320_midY + r448_eyeSize : 2 === _r451_t1 ? r320_midY + r448_eyeSize + r448_eyeOffset : 3 === _r451_t1 ? r320_midY - r448_eyeSize : void 0);
                                r451_currentGlyph.include(r314_difference(r314_union(r320_xn$referglyph$1aao(r320_MangleName((_r451_t2 = r449_facing, 0 === _r451_t2 ? "uni2578" : 1 === _r451_t2 ? "uni257B" : 2 === _r451_t2 ? "uni257A" : 3 === _r451_t2 ? "uni2579" : void 0))), r320_xn$referglyph$1aao(r320_MangleName("blackCircle"))), r320_DotAt(r451_eyeX, r451_eyeY, r448_eyeSize), r449_fMouth ? r314_xn$spirooutline$1aao(r314_corner(r320_midX, r320_midY), (_r451_t3 = r449_facing, 0 === _r451_t3 ? r314_corner(r320_Geom.Right, r320_midY - r448_mouthWidth) : 1 === _r451_t3 ? r314_corner(r320_midX + r448_mouthWidth, r320_Geom.Top) : 2 === _r451_t3 ? r314_corner(r320_Geom.Left, r320_midY + r448_mouthWidth) : 3 === _r451_t3 ? r314_corner(r320_midX - r448_mouthWidth, r320_Geom.Bot) : void 0), (_r451_t4 = r449_facing, 0 === _r451_t4 ? r314_corner(r320_Geom.Right, r320_midY + r448_mouthWidth) : 1 === _r451_t4 ? r314_corner(r320_midX - r448_mouthWidth, r320_Geom.Top) : 2 === _r451_t4 ? r314_corner(r320_Geom.Left, r320_midY - r448_mouthWidth) : 3 === _r451_t4 ? r314_corner(r320_midX + r448_mouthWidth, r320_Geom.Bot) : void 0)) : new r314_xn$Capture$2Lrc8.GlyphProc(function (r456_currentGlyph) {
                                    var _r456_t0, _r456_t1;
                                    return void 0;
                                })));
                                return void 0;
                            });
                        };
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("snakeHeadLeftOpen"), r320_MangleUnicode(117872), new r314_xn$Capture$2Lrc8.GlyphProc(function (r459_currentGlyph) {
                            var _r459_t0, _r459_t1;
                            r459_currentGlyph.include(r448_SnakeHead(2, 1));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("snakeHeadUpOpen"), r320_MangleUnicode(117873), new r314_xn$Capture$2Lrc8.GlyphProc(function (r463_currentGlyph) {
                            var _r463_t0, _r463_t1;
                            r463_currentGlyph.include(r448_SnakeHead(1, 1));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("snakeHeadRightOpen"), r320_MangleUnicode(117874), new r314_xn$Capture$2Lrc8.GlyphProc(function (r467_currentGlyph) {
                            var _r467_t0, _r467_t1;
                            r467_currentGlyph.include(r448_SnakeHead(0, 1));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("snakeHeadDownOpen"), r320_MangleUnicode(117875), new r314_xn$Capture$2Lrc8.GlyphProc(function (r471_currentGlyph) {
                            var _r471_t0, _r471_t1;
                            r471_currentGlyph.include(r448_SnakeHead(3, 1));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("snakeHeadLeftClosed"), r320_MangleUnicode(117876), new r314_xn$Capture$2Lrc8.GlyphProc(function (r475_currentGlyph) {
                            var _r475_t0, _r475_t1;
                            r475_currentGlyph.include(r448_SnakeHead(2, 0));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("snakeHeadUpClosed"), r320_MangleUnicode(117877), new r314_xn$Capture$2Lrc8.GlyphProc(function (r479_currentGlyph) {
                            var _r479_t0, _r479_t1;
                            r479_currentGlyph.include(r448_SnakeHead(1, 0));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("snakeHeadRightClosed"), r320_MangleUnicode(117878), new r314_xn$Capture$2Lrc8.GlyphProc(function (r483_currentGlyph) {
                            var _r483_t0, _r483_t1;
                            r483_currentGlyph.include(r448_SnakeHead(0, 0));
                            return void 0;
                        }));
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("snakeHeadDownClosed"), r320_MangleUnicode(117879), new r314_xn$Capture$2Lrc8.GlyphProc(function (r487_currentGlyph) {
                            var _r487_t0, _r487_t1;
                            r487_currentGlyph.include(r448_SnakeHead(3, 0));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r490_LeftEnergyWave = function (r491_top, r491_bottom, r491_left, r491_right) {
                            var _r491_t0, _r491_t1;
                            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r493_currentGlyph) {
                                var _r493_t0, _r493_t1;
                                var r493_midX = r1_mix(r491_left, r491_right, 0.5);
                                var r493_midY = r1_mix(r491_top, r491_bottom, 0.5);
                                r493_currentGlyph.include(r314_difference(r314_xn$spirooutline$1aao(r314_corner(r491_right, r491_top), r314_corner(r493_midX + r314_TINY, r491_top), r314_flat(r493_midX, r491_top), r314_archv.superness(2), r314_g4(r491_left, r493_midY), r314_arcvh.superness(2), r314_curl(r493_midX, r491_bottom), r314_corner(r493_midX + r314_TINY, r491_bottom), r314_corner(r491_right, r491_bottom)), r314_xn$spirooutline$1aao(r314_corner(r491_right, r1_mix(r491_top, r491_bottom, 0.1)), r314_flat(r1_mix(r491_left, r491_right, 0.9), r1_mix(r491_top, r491_bottom, 0.1)), r314_archv.superness(2), r314_g4(r493_midX, r493_midY), r314_arcvh.superness(2), r314_curl(r1_mix(r491_left, r491_right, 0.9), r1_mix(r491_top, r491_bottom, 0.9)), r314_corner(r491_right, r1_mix(r491_top, r491_bottom, 0.9)))));
                                return void 0;
                            });
                        };
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("energyWaveLeft"), r320_MangleUnicode(117880), new r314_xn$Capture$2Lrc8.GlyphProc(function (r497_currentGlyph) {
                            var _r497_t0, _r497_t1;
                            r497_currentGlyph.setWidth(r317_MosaicWidth);
                            r497_currentGlyph.include(r490_LeftEnergyWave(r320_Geom.Top, r320_Geom.Bot, r320_Geom.Left, r320_Geom.Right));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("energyWaveUp"), r320_MangleUnicode(117881), new r314_xn$Capture$2Lrc8.GlyphProc(function (r502_currentGlyph) {
                            var _r502_t0, _r502_t1;
                            r502_currentGlyph.setWidth(r317_MosaicWidth);
                            r502_currentGlyph.include(r320_WithD4Transform(r320_midX, 3, 0, function () {
                                var _r505_t0, _r505_t1;
                                return r490_LeftEnergyWave(r320_Geom.Top, r320_Geom.Bot, r320_Geom.Left, r320_Geom.Right);
                            }));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("energyWaveRight"), r320_MangleUnicode(117882), new r314_xn$Capture$2Lrc8.GlyphProc(function (r508_currentGlyph) {
                            var _r508_t0, _r508_t1;
                            r508_currentGlyph.setWidth(r317_MosaicWidth);
                            r508_currentGlyph.include(r320_WithD4Transform(r320_midX, 2, 0, function () {
                                var _r511_t0, _r511_t1;
                                return r490_LeftEnergyWave(r320_Geom.Top, r320_Geom.Bot, r320_Geom.Left, r320_Geom.Right);
                            }));
                            return void 0;
                        }));
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("energyWaveDown"), r320_MangleUnicode(117883), new r314_xn$Capture$2Lrc8.GlyphProc(function (r514_currentGlyph) {
                            var _r514_t0, _r514_t1;
                            r514_currentGlyph.setWidth(r317_MosaicWidth);
                            r514_currentGlyph.include(r320_WithD4Transform(r320_midX, 1, 0, function () {
                                var _r517_t0, _r517_t1;
                                return r490_LeftEnergyWave(r320_Geom.Top, r320_Geom.Bot, r320_Geom.Left, r320_Geom.Right);
                            }));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r519_scaffold = {};
                        r519_scaffold.postLength = 1 / 6;
                        r519_scaffold.postOffset = 1 / 9;
                        r519_scaffold.triggerRad = 1 / 8;
                        var r519_RightRifle = function (r520_box) {
                            var _r520_t0, _r520_t1;
                            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r522_currentGlyph) {
                                var _r522_t0, _r522_t1;
                                r522_currentGlyph.include(r314_union(r320_HBar.t(r520_box.left, r520_box.right, r520_box.mixY(1 - r519_scaffold.postLength), r320_smallGraphicSw), r320_VBar.r(r520_box.mixX(1 - r519_scaffold.postOffset), r520_box.mixY(1 - r519_scaffold.postLength), r520_box.top, r320_smallGraphicSw), r320_VBar.l(r520_box.left, r520_box.bottom, r520_box.mixY(1 - r519_scaffold.postLength), 2 * r320_smallGraphicSw)));
                                var r522_triggerStartX = r520_box.left + r314_HSwToV(2 * r320_smallGraphicSw);
                                var r522_triggerEndY = r520_box.mixY(1 - r519_scaffold.postLength) - r320_smallGraphicSw;
                                var r522_triggerRad = (r520_box.right - r520_box.left) * r519_scaffold.triggerRad;
                                r522_currentGlyph.include(r314_dispiro(r314_widths.center(r320_smallGraphicSw), r314_flat(r522_triggerStartX, r522_triggerEndY - r522_triggerRad, r314_heading(r314_Rightward)), r314_archv(), r314_curl(r522_triggerStartX + r522_triggerRad, r522_triggerEndY, r314_heading(r314_Upward))));
                                return void 0;
                            });
                        };
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("rifleLeft"), r320_MangleUnicode(117861), new r314_xn$Capture$2Lrc8.GlyphProc(function (r527_currentGlyph) {
                            var _r527_t0, _r527_t1;
                            r527_currentGlyph.setWidth(r317_MosaicWidth);
                            r527_currentGlyph.include(r320_WithD4Transform(r320_midX, 0, 1, function () {
                                var _r530_t0, _r530_t1;
                                return r519_RightRifle(r320_smallHBox);
                            }));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("rifleUp"), r320_MangleUnicode(117862), new r314_xn$Capture$2Lrc8.GlyphProc(function (r533_currentGlyph) {
                            var _r533_t0, _r533_t1;
                            r533_currentGlyph.setWidth(r317_MosaicWidth);
                            r533_currentGlyph.include(r320_WithD4Transform(r320_midX, 1, 0, function () {
                                var _r536_t0, _r536_t1;
                                return r519_RightRifle(r320_smallVBox);
                            }));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("rifleRight"), r320_MangleUnicode(117863), new r314_xn$Capture$2Lrc8.GlyphProc(function (r539_currentGlyph) {
                            var _r539_t0, _r539_t1;
                            r539_currentGlyph.setWidth(r317_MosaicWidth);
                            r539_currentGlyph.include(r519_RightRifle(r320_smallHBox));
                            return void 0;
                        }));
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("rifleDown"), r320_MangleUnicode(117864), new r314_xn$Capture$2Lrc8.GlyphProc(function (r544_currentGlyph) {
                            var _r544_t0, _r544_t1;
                            r544_currentGlyph.setWidth(r317_MosaicWidth);
                            r544_currentGlyph.include(r320_WithD4Transform(r320_midX, 3, 0, function () {
                                var _r547_t0, _r547_t1;
                                return r519_RightRifle(r320_smallVBox);
                            }));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r549_scaffold = {};
                        r549_scaffold.width = 1 / 2;
                        r549_scaffold.baseHeight = 1 / 4;
                        r549_scaffold.tipHeight = 1 / 4;
                        var r549_RightRocket = function (r550_box) {
                            var _r550_t0, _r550_t1;
                            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r552_currentGlyph) {
                                var _r552_t0, _r552_t1;
                                var r552_rocketLeft = r550_box.mixY(0.5 + r549_scaffold.width / 2);
                                var r552_rocketRight = r550_box.mixY(0.5 - r549_scaffold.width / 2);
                                var r552_rocketBase = r550_box.mixX(r549_scaffold.baseHeight);
                                var r552_rocketTip = r550_box.mixX(1 - r549_scaffold.tipHeight);
                                r552_currentGlyph.include(r314_union(r314_xn$spirooutline$1aao(r314_corner(r550_box.left, r550_box.yMid), r314_corner(r552_rocketBase, r552_rocketRight), r314_corner(r552_rocketTip, r552_rocketRight), r314_corner(r550_box.right, r550_box.yMid), r314_corner(r552_rocketTip, r552_rocketLeft), r314_corner(r552_rocketBase, r552_rocketLeft)), r314_intersection(r320_MaskAbove(r550_box.yMid), r314_dispiro(r314_widths.center(r320_smallGraphicSw), r314_corner(r550_box.left, r550_box.top), r314_corner(r550_box.mixX(2 * r549_scaffold.baseHeight), r550_box.mixY(r549_scaffold.width)))), r314_intersection(r320_MaskBelow(r550_box.yMid), r314_dispiro(r314_widths.center(r320_smallGraphicSw), r314_corner(r550_box.left, r550_box.bottom), r314_corner(r550_box.mixX(2 * r549_scaffold.baseHeight), r550_box.mixY(1 - r549_scaffold.width))))));
                                return void 0;
                            });
                        };
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("rocketLeft"), r320_MangleUnicode(117846), new r314_xn$Capture$2Lrc8.GlyphProc(function (r556_currentGlyph) {
                            var _r556_t0, _r556_t1;
                            r556_currentGlyph.setWidth(r317_MosaicWidth);
                            r556_currentGlyph.include(r320_WithD4Transform(r320_midX, 0, 1, function () {
                                var _r559_t0, _r559_t1;
                                return r549_RightRocket(r320_smallHBox);
                            }));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("rocketUp"), r320_MangleUnicode(117847), new r314_xn$Capture$2Lrc8.GlyphProc(function (r562_currentGlyph) {
                            var _r562_t0, _r562_t1;
                            r562_currentGlyph.setWidth(r317_MosaicWidth);
                            r562_currentGlyph.include(r320_WithD4Transform(r320_midX, 1, 0, function () {
                                var _r565_t0, _r565_t1;
                                return r549_RightRocket(r320_smallVBox);
                            }));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("rocketRight"), r320_MangleUnicode(117848), new r314_xn$Capture$2Lrc8.GlyphProc(function (r568_currentGlyph) {
                            var _r568_t0, _r568_t1;
                            r568_currentGlyph.setWidth(r317_MosaicWidth);
                            r568_currentGlyph.include(r549_RightRocket(r320_smallHBox));
                            return void 0;
                        }));
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("rocketDown"), r320_MangleUnicode(117849), new r314_xn$Capture$2Lrc8.GlyphProc(function (r573_currentGlyph) {
                            var _r573_t0, _r573_t1;
                            r573_currentGlyph.setWidth(r317_MosaicWidth);
                            r573_currentGlyph.include(r320_WithD4Transform(r320_midX, 3, 0, function () {
                                var _r576_t0, _r576_t1;
                                return r549_RightRocket(r320_smallVBox);
                            }));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r578_scaffold = {};
                        r578_scaffold.tailX = 0.3;
                        r578_scaffold.bodyX = 0.15;
                        var r578_RightBomb = function (r579_box) {
                            var _r579_t0, _r579_t1;
                            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r581_currentGlyph) {
                                var _r581_t0, _r581_t1;
                                var r581_bombLeft = r579_box.mixX(r578_scaffold.bodyX);
                                var r581_radius = (r579_box.top - r579_box.bottom) / 2;
                                r581_currentGlyph.include(r314_union(r314_xn$spirooutline$1aao(r314_corner(r579_box.left, r579_box.top), r314_corner(r579_box.left, r579_box.bottom), r314_corner(r579_box.left + r320_graphicSw, r579_box.bottom), r314_corner(r579_box.mixX(r578_scaffold.tailX), r579_box.yMid), r314_corner(r579_box.left + r320_graphicSw, r579_box.top)), r314_xn$spirooutline$1aao(r314_curl(r581_bombLeft + r581_radius, r579_box.top), r314_archv(), r314_g4(r581_bombLeft, r579_box.yMid), r314_arcvh(), r314_flat(r581_bombLeft + r581_radius, r579_box.bottom), r314_curl(r579_box.right - r581_radius, r579_box.bottom), r314_archv(), r314_g4(r579_box.right, r579_box.yMid), r314_arcvh(), r314_flat(r579_box.right - r581_radius, r579_box.top))));
                                return void 0;
                            });
                        };
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("bombLeft"), r320_MangleUnicode(117856), new r314_xn$Capture$2Lrc8.GlyphProc(function (r585_currentGlyph) {
                            var _r585_t0, _r585_t1;
                            r585_currentGlyph.setWidth(r317_MosaicWidth);
                            r585_currentGlyph.include(r320_WithD4Transform(r320_midX, 2, 0, function () {
                                var _r588_t0, _r588_t1;
                                return r578_RightBomb(r320_smallHBox);
                            }));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("bombUp"), r320_MangleUnicode(117857), new r314_xn$Capture$2Lrc8.GlyphProc(function (r591_currentGlyph) {
                            var _r591_t0, _r591_t1;
                            r591_currentGlyph.setWidth(r317_MosaicWidth);
                            r591_currentGlyph.include(r320_WithD4Transform(r320_midX, 1, 0, function () {
                                var _r594_t0, _r594_t1;
                                return r578_RightBomb(r320_smallVBox);
                            }));
                            return void 0;
                        }));
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("bombRight"), r320_MangleUnicode(117858), new r314_xn$Capture$2Lrc8.GlyphProc(function (r597_currentGlyph) {
                            var _r597_t0, _r597_t1;
                            r597_currentGlyph.setWidth(r317_MosaicWidth);
                            r597_currentGlyph.include(r578_RightBomb(r320_smallHBox));
                            return void 0;
                        }));
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("bombDown"), r320_MangleUnicode(117859), new r314_xn$Capture$2Lrc8.GlyphProc(function (r602_currentGlyph) {
                            var _r602_t0, _r602_t1;
                            r602_currentGlyph.setWidth(r317_MosaicWidth);
                            r602_currentGlyph.include(r320_WithD4Transform(r320_midX, 3, 0, function () {
                                var _r605_t0, _r605_t1;
                                return r578_RightBomb(r320_smallVBox);
                            }));
                            return void 0;
                        }));
                    })();
                    (function () {
                        var r607_scaffold = {};
                        r607_scaffold.bodyX = 1;
                        r607_scaffold.bodyY = 0.9;
                        r607_scaffold.legY = 0.7;
                        r607_scaffold.legY2 = 0.6;
                        r607_scaffold.legX = 0.2;
                        r607_scaffold.legX2 = 0.4;
                        r607_scaffold.sw = r320_graphicSw;
                        var r607_UpFrog = function (r608_box, r608_tfm) {
                            var _r608_t0, _r608_t1;
                            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r610_currentGlyph) {
                                var _r610_t0, _r610_t1;
                                var r610_Kit = r320_StickFigureKit(r608_box, r608_tfm, r320_heavyGraphicSw);
                                r610_currentGlyph.include(r314_difference(r314_union(r320_Ellipse.Outline.AtDimens(r608_box.mixY(r607_scaffold.bodyY), r608_box.mixY(1 - r607_scaffold.bodyY), r608_box.mixX(1 - r607_scaffold.bodyX), r608_box.mixX(r607_scaffold.bodyX)), r610_Kit.RoundSeg(0.5, 0.5, 0.5, 1, 0, 1), r610_Kit.RoundSeg(0.5, r607_scaffold.legY2, 0, r607_scaffold.legY, 0, 1), r610_Kit.RoundSeg(0.5, r607_scaffold.legY2, 1, r607_scaffold.legY, 0, 1), r610_Kit.RoundSeg(r607_scaffold.legX2, 0.5, r607_scaffold.legX, 0, 0, 1), r610_Kit.RoundSeg(1 - r607_scaffold.legX2, 0.5, 1 - r607_scaffold.legX, 0, 0, 1)), r320_Ellipse.Outline.AtDimens(r608_box.mixY(r607_scaffold.bodyY) - r607_scaffold.sw, r608_box.mixY(1 - r607_scaffold.bodyY) + r607_scaffold.sw, r608_box.mixX(1 - r607_scaffold.bodyX) + r607_scaffold.sw, r608_box.mixX(r607_scaffold.bodyX) - r607_scaffold.sw)));
                                return void 0;
                            });
                        };
                        r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("frogUp"), r320_MangleUnicode(118267), new r314_xn$Capture$2Lrc8.GlyphProc(function (r614_currentGlyph) {
                            var _r614_t0, _r614_t1;
                            r614_currentGlyph.setWidth(r317_MosaicWidth);
                            r614_currentGlyph.include(r607_UpFrog(r320_squareBox, r320_D4Transform(r320_midX, 0, 0)));
                            return void 0;
                        }));
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("frogDown"), r320_MangleUnicode(118268), new r314_xn$Capture$2Lrc8.GlyphProc(function (r619_currentGlyph) {
                            var _r619_t0, _r619_t1;
                            r619_currentGlyph.setWidth(r317_MosaicWidth);
                            r619_currentGlyph.include(r607_UpFrog(r320_squareBox, r320_D4Transform(r320_midX, 2, 0)));
                            return void 0;
                        }));
                    })();
                    return (function () {
                        var r623_scaffold = {};
                        r623_scaffold.tipSize = 0.2;
                        r623_scaffold.headWidth = 0.8;
                        r623_scaffold.headHeight = 3 / 8;
                        r623_scaffold.bodyWidth = 0.4;
                        r623_scaffold.slantHeight = 3 / 8;
                        r623_scaffold.baseWidth = 0.2;
                        r623_scaffold.windowWidth = 0.2;
                        r623_scaffold.windowTopWidth = 0.12;
                        r623_scaffold.windowArchDepth = 0.1;
                        r623_scaffold.windowBot = 3 / 8;
                        r623_scaffold.windowTop = 6 / 8;
                        r623_scaffold.footLen = 0.25;
                        r623_scaffold.legHeight = 0.4;
                        r623_scaffold.legTopHeight = 0.5;
                        var r623_Moonlander = function (r624_top, r624_bottom, r624_left, r624_right, r624_sw) {
                            var _r624_t0, _r624_t1;
                            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r626_currentGlyph) {
                                var _r626_t0, _r626_t1;
                                var r626_midX = r1_mix(r624_left, r624_right, 0.5);
                                var r626_y1 = r1_mix(r624_top, r624_bottom, r623_scaffold.headHeight);
                                var r626_y2 = r1_mix(r624_bottom, r624_top, r623_scaffold.slantHeight);
                                var r626_bodyLeft = r1_mix(r624_left, r624_right, 0.5 - r623_scaffold.bodyWidth / 2);
                                var r626_bodyRight = r1_mix(r624_left, r624_right, 0.5 + r623_scaffold.bodyWidth / 2);
                                var r626_windowTop = r1_mix(r624_bottom, r624_top, r623_scaffold.windowTop);
                                var r626_windowBot = r1_mix(r624_bottom, r624_top, r623_scaffold.windowBot);
                                var r626_windowY3 = r1_mix(r624_bottom, r624_top, r623_scaffold.windowTop - r623_scaffold.windowArchDepth);
                                var r626_windowLeft = r1_mix(r624_left, r624_right, 0.5 - r623_scaffold.windowWidth / 2);
                                var r626_windowRight = r1_mix(r624_left, r624_right, 0.5 + r623_scaffold.windowWidth / 2);
                                var r626_legY2 = r1_mix(r624_bottom, r624_top, r623_scaffold.legHeight);
                                var r626_legY3 = r1_mix(r624_bottom, r624_top, r623_scaffold.legTopHeight);
                                r626_currentGlyph.include(r314_difference(r314_union(r314_xn$spirooutline$1aao(r314_corner(r1_mix(r624_left, r624_right, 0.5 + r623_scaffold.headWidth / 2), r626_y1), r314_corner(r1_mix(r624_left, r624_right, 0.5 + r623_scaffold.tipSize / 2), r624_top), r314_corner(r1_mix(r624_left, r624_right, 0.5 - r623_scaffold.tipSize / 2), r624_top), r314_corner(r1_mix(r624_left, r624_right, 0.5 - r623_scaffold.headWidth / 2), r626_y1), r314_corner(r626_bodyLeft, r626_y1), r314_corner(r626_bodyLeft, r626_y2), r314_corner(r1_mix(r624_left, r624_right, 0.5 - r623_scaffold.baseWidth / 2), r624_bottom), r314_corner(r1_mix(r624_left, r624_right, 0.5 + r623_scaffold.baseWidth / 2), r624_bottom), r314_corner(r626_bodyRight, r626_y2), r314_corner(r626_bodyRight, r626_y1)), r320_HBar.b(r624_left, r1_mix(r624_left, r624_right, r623_scaffold.footLen), r624_bottom, r624_sw), r320_HBar.b(r624_right, r1_mix(r624_right, r624_left, r623_scaffold.footLen), r624_bottom, r624_sw), r320_VBar.l(r624_left, r624_bottom, r626_legY2, r624_sw), r320_VBar.r(r624_right, r624_bottom, r626_legY2, r624_sw), r314_dispiro(r314_widths.rhs(r624_sw), r314_flat(r624_left, r626_legY2), r314_curl(r626_midX, r626_legY3)), r314_dispiro(r314_widths.lhs(r624_sw), r314_flat(r624_right, r626_legY2), r314_curl(r626_midX, r626_legY3))), r314_xn$spirooutline$1aao(r314_corner(r626_windowLeft, r626_windowY3), r314_corner(r626_windowLeft, r626_windowBot), r314_corner(r626_windowRight, r626_windowBot), r314_corner(r626_windowRight, r626_windowY3), r314_corner(r1_mix(r624_left, r624_right, 0.5 + r623_scaffold.windowTopWidth / 2), r626_windowTop), r314_corner(r1_mix(r624_left, r624_right, 0.5 - r623_scaffold.windowTopWidth / 2), r626_windowTop))));
                                return void 0;
                            });
                        };
                        return r314_xn$GlyphSaveSink$2Lrc4b.save(r320_MangleName("moonLander"), r320_MangleUnicode(118261), new r314_xn$Capture$2Lrc8.GlyphProc(function (r630_currentGlyph) {
                            var _r630_t0, _r630_t1;
                            r630_currentGlyph.setWidth(r317_MosaicWidth);
                            r630_currentGlyph.include(r623_Moonlander(r320_top, r320_bottom, r320_left, r320_right, r320_graphicSw));
                            return void 0;
                        }));
                    })();
                })();
                _r317_t5 = _r317_t2 = _r317_t2 + 1;
                _r317_t4 = _r317_t2 < _r317_t1;
            }
            return _r317_t5;
        })();
    });
    return void 0;
});


