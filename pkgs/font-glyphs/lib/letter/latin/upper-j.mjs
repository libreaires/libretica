"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-J", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_base, r313_df, r313_dfHook, r313_serif, _r313_t13, _r313_t14, _r313_t15, _r313_t16, _r313_tag17;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_para = _r313_t0.para;
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_DesignParameters = _r313_t1.DesignParameters;
        var r313_SB = _r313_t1.SB;
        var r313_CAP = _r313_t1.CAP;
        var r313_XH = _r313_t1.XH;
        var r313_Descender = _r313_t1.Descender;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Downward = _r313_t1.Downward;
        var r313_OXHook = _r313_t1.OXHook;
        var r313_Hook = _r313_t1.Hook;
        var r313_JHook = _r313_t1.JHook;
        var r313_AdviceStroke = _r313_t1.AdviceStroke;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_OverlayPos = _r313_t1.OverlayPos;
        var r313_Jut = _r313_t1.Jut;
        var r313_LongJut = _r313_t1.LongJut;
        var r313_MidJutCenter = _r313_t1.MidJutCenter;
        var r313_LongVJut = _r313_t1.LongVJut;
        var r313_IBalance = _r313_t1.IBalance;
        var r313_JBalance = _r313_t1.JBalance;
        var r313_JBalance2 = _r313_t1.JBalance2;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_ArchDepthA = _r313_t1.ArchDepthA;
        var r313_ArchDepthB = _r313_t1.ArchDepthB;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_arcvh = _r313_t2.arcvh;
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
        var r313_HSerif = _r313_t5.HSerif;
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookEnd = _r313_t5.HookEnd;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var r313_xn$linkreducedvariant$5sIl8 = _r313_t6["link-reduced-variant"];
        var r313_alias = _r313_t6.alias;
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r313_CreateAccentedComposition = _r313_t7.CreateAccentedComposition;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_CurlyTail = _r313_t8.CurlyTail;
        var r313_FlatHookDepth = _r313_t8.FlatHookDepth;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Blackboard"].resolve();
        var r313_BBS = _r313_t9.BBS;
        var r313_BBD = _r313_t9.BBD;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-J"].resolve();
        var r313_FlatHookDotlessJShape = _r313_t10.FlatHookDotlessJShape;
        var r313_JBentHookBase = function (r320_df, r320_dfHook, r320_top) {
            var _r320_t0, _r320_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                var _r322_t0, _r322_t1;
                r322_currentGlyph.setWidth(r320_df.width);
                r322_currentGlyph.include(r320_df.markSet[r320_top > r313_XH ? "capital" : "e"]());
                var r322_xBarRight = r320_df.rightSB - r313_JBalance2;
                r322_currentGlyph.setBaseAnchor("above", r322_xBarRight - r313_HSwToV(0.75 * r313_Stroke), r320_top);
                r322_currentGlyph.setBaseAnchor("overlay", r322_xBarRight - r313_HSwToV(0.75 * r313_Stroke), r1_mix(0, r320_top, r313_OverlayPos));
                r322_currentGlyph.setBaseAnchor("jTopSerifAttach", r322_xBarRight - r313_HSwToV(r313_HalfStroke), r320_top);
                var r322_sw = Math.min(r313_Stroke, 0.4 * (r322_xBarRight - r320_df.leftSB));
                var r322_hookx = 0.75 * r320_df.leftSB;
                r322_currentGlyph.include(r313_dispiro(r313_widths.rhs(r322_sw), r313_flat(r322_xBarRight, r320_top, r313_heading(r313_Downward)), r313_curl(r322_xBarRight, r313_ArchDepthB), r313_HookEnd(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r322_sw)), r313_g4(r322_hookx, r313_Hook)));
                return void 0;
            });
        };
        var r313_JFlatHookBase = function (r330_df, r330_dfHook, r330_top) {
            var _r330_t0, _r330_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r332_currentGlyph) {
                var _r332_t0, _r332_t1;
                r332_currentGlyph.setWidth(r330_df.width);
                r332_currentGlyph.include(r330_df.markSet[r330_top > r313_XH ? "capital" : "e"]());
                var r332_xBarRight = r330_df.rightSB - r313_JBalance2;
                r332_currentGlyph.setBaseAnchor("above", r332_xBarRight - r313_HSwToV(0.75 * r313_Stroke), r330_top);
                r332_currentGlyph.setBaseAnchor("overlay", r332_xBarRight - r313_HSwToV(0.75 * r313_Stroke), r330_top * r313_OverlayPos);
                r332_currentGlyph.setBaseAnchor("jTopSerifAttach", r332_xBarRight - r313_HSwToV(r313_HalfStroke), r330_top);
                var r332_sw = Math.min(r313_Stroke, 0.4 * (r332_xBarRight - r330_df.leftSB));
                var r332_hookx = 0.75 * r330_df.leftSB;
                var r332_hd = r313_FlatHookDepth(r330_dfHook);
                r332_currentGlyph.include(r313_dispiro(r313_flat(r332_xBarRight, r330_top, r313_widths.rhs.heading(r332_sw, r313_Downward)), r313_curl(r332_xBarRight, r313_HalfStroke + 1.375 * r332_hd.y), r313_arcvh.superness(r313_DesignParameters.tightHookSuperness), r313_flat(r332_xBarRight - Math.min(0.625 * (r330_df.rightSB - r330_df.leftSB), 1.375 * r332_hd.x), 0, r313_widths.rhs(r313_Stroke)), r313_curl(r330_df.leftSB, 0)));
                return void 0;
            });
        };
        var r313_JDescendingBentHookBase = function (r339_df, r339_dfHook, r339_top) {
            var _r339_t0, _r339_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r341_currentGlyph) {
                var _r341_t0, _r341_t1;
                r341_currentGlyph.setWidth(r339_df.width);
                r341_currentGlyph.include(r339_df.markSet[r339_top > r313_XH ? "capDesc" : "p"]());
                var r341_center = r339_df.middle + r313_JBalance + r313_HSwToV(r313_HalfStroke);
                r341_currentGlyph.setBaseAnchor("above", r341_center - r313_HSwToV(r313_HalfStroke), r339_top);
                r341_currentGlyph.setBaseAnchor("overlay", r341_center - r313_HSwToV(r313_HalfStroke), r339_top / 2);
                r341_currentGlyph.setBaseAnchor("jTopSerifAttach", r341_center - r313_HSwToV(r313_HalfStroke), r339_top);
                var r341_hookx = r341_center - r339_df.width * 0.5 - r313_HSwToV(r313_Stroke) + r313_OXHook;
                var r341_turn = r313_Arch["adjust-x"].bot(r1_mix(r341_center, r341_hookx, 0.5));
                r341_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_flat(r341_center, r339_top, r313_heading(r313_Downward)), r313_curl(r341_center, r313_Descender + r313_ArchDepthA), r313_HookEnd(r313_Descender), r313_g4(r341_hookx, r313_Descender + r313_JHook)));
                return void 0;
            });
        };
        r313_JBentHookBase.WithCurlyTail = function (r348_df, r348_top) {
            var _r348_t0, _r348_t1;
            return r313_JCurlyTailBaseT(r348_df, "capital", r348_top, 0, r348_df.leftSB + 0, r348_df.rightSB - r313_JBalance2);
        };
        r313_JDescendingBentHookBase.WithCurlyTail = function (r349_df, r349_top) {
            var _r349_t0, _r349_t1;
            return r313_JCurlyTailBaseT(r349_df, "capDesc", r349_top, r313_Descender, r349_df.middle - r313_HSwToV(r313_HalfStroke) + r313_JBalance - r313_LongJut, r349_df.middle + r313_HSwToV(r313_HalfStroke) + r313_JBalance);
        };
        var r313_JCurlyTailBaseT = function (r350_df, r350_mk, r350_top, r350_bottom, r350_left, r350_right) {
            var _r350_t0, _r350_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
                var _r352_t0, _r352_t1;
                r352_currentGlyph.setWidth(r350_df.width);
                r352_currentGlyph.include(r350_df.markSet[r350_mk]());
                r352_currentGlyph.setBaseAnchor("above", r350_right - r313_HSwToV(r313_HalfStroke), r350_top);
                r352_currentGlyph.setBaseAnchor("overlay", r350_right - r313_HSwToV(r313_HalfStroke), r350_top / 2);
                r352_currentGlyph.setBaseAnchor("jTopSerifAttach", r350_right - r313_HSwToV(r313_HalfStroke), r350_top);
                var r352_fine = r313_AdviceStroke(3.5);
                r352_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_flat(r350_right, r350_top, r313_heading(r313_Downward)), r313_curl(r350_right, r350_bottom + r313_LongVJut), r313_CurlyTail.n(r352_fine, r350_bottom, r350_left, new r313_xn$NamedParameterPair$2Lrc9b("x2", r350_df.width), new r313_xn$NamedParameterPair$2Lrc9b("y2", r350_bottom + 0.5 * r352_fine), new r313_xn$NamedParameterPair$2Lrc9b("yLoopTop", r350_bottom + 1 * r352_fine + r313_LongVJut))));
                return void 0;
            });
        };
        var r313_JDescendingFlatHookSeriflessBase = function (r362_df, r362_dfHook, r362_top) {
            var _r362_t0, _r362_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r364_currentGlyph) {
                var _r364_t0, _r364_t1;
                r364_currentGlyph.setWidth(r362_df.width);
                r364_currentGlyph.include(r362_df.markSet[r362_top > r313_XH ? "capDesc" : "p"]());
                r364_currentGlyph.include(r313_FlatHookDotlessJShape(r362_df, r362_dfHook, r362_top, new r313_xn$NamedParameterPair$2Lrc9b("crossLeft", r362_df.middle - (r362_dfHook.middle - r1_mix(0, r362_dfHook.leftSB, r1_mix(1, r362_dfHook.adws, 2)))), new r313_xn$NamedParameterPair$2Lrc9b("barCenter", r362_df.middle + 0.25 * r313_JBalance * r362_df.adws * r1_mix(1, r362_df.adws, 2)), new r313_xn$NamedParameterPair$2Lrc9b("serif", false)));
                return void 0;
            });
        };
        var r313_JDescendingFlatHookSerifedBase = function (r371_df, r371_dfHook, r371_top) {
            var _r371_t0, _r371_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r373_currentGlyph) {
                var _r373_t0, _r373_t1;
                r373_currentGlyph.setWidth(r371_df.width);
                r373_currentGlyph.include(r371_df.markSet[r371_top > r313_XH ? "capDesc" : "p"]());
                r373_currentGlyph.include(r313_FlatHookDotlessJShape(r371_df, r371_df, r371_top, new r313_xn$NamedParameterPair$2Lrc9b("crossLeft", r1_mix(0, r313_SB, r1_mix(1, r371_df.adws, 2))), new r313_xn$NamedParameterPair$2Lrc9b("barCenter", r371_df.middle + r313_JBalance * r371_df.adws), new r313_xn$NamedParameterPair$2Lrc9b("serif", true)));
                return void 0;
            });
        };
        var r313_JLeftwardSerif = function (r380_df, r380_x, r380_top) {
            var _r380_t0, _r380_t1;
            return r313_HSerif.lt(r380_x, r380_top, r313_LongJut);
        };
        var r313_JBothSidesSerif = function (r381_df, r381_x, r381_top) {
            var _r381_t0, _r381_t1;
            return r313_union(r313_HSerif.lt(r381_x, r381_top, r313_LongJut), r313_HSerif.rt(r381_x, r381_top, r313_Jut));
        };
        var r313_JSymmetricSerif = function (r382_df, r382_x, r382_top) {
            var _r382_t0, _r382_t1;
            return r313_HSerif.mt(r382_x - r313_IBalance(r382_df), r382_top, r313_MidJutCenter);
        };
        var r313_JConfig = r1_SuffixCfg.weave({
            "bentHook": [r313_JBentHookBase, r313_DivFrame(1), r313_DivFrame(1)],
            "flatHook": [r313_JFlatHookBase, r313_DivFrame(r313_para.advanceScaleF), r313_DivFrame(r313_para.advanceScaleF)],
            "descendingBentHook": [r313_JDescendingBentHookBase, r313_DivFrame(1), r313_DivFrame(1)],
            "descendingFlatHookSerifless": [r313_JDescendingFlatHookSeriflessBase, r313_DivFrame(r313_para.advanceScaleI), r313_DivFrame(r313_para.advanceScaleI)],
            "descendingFlatHookSerifed": [r313_JDescendingFlatHookSerifedBase, r313_DivFrame(r313_para.advanceScaleI), r313_DivFrame(r313_para.advanceScaleI)]
        }, function (r383_body) {
            var _r383_t0, _r383_t1;
            return r383_body === "descendingFlatHookSerifless" || r383_body === "descendingFlatHookSerifed" ? {
                "": null
            } : {
                "serifless": null,
                "serifed": r313_JLeftwardSerif,
                "serifedBothSides": r313_JBothSidesSerif,
                "serifedSymmetric": r313_JSymmetricSerif
            };
        });
        var _r313_t11 = Object.entries(r313_JConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_base = _r313_t13[1][0][0];
            r313_df = _r313_t13[1][0][1];
            r313_dfHook = _r313_t13[1][0][2];
            _r313_t13[1][0];
            r313_serif = _r313_t13[1][1];
            _r313_t13[1];
            (function () {
                r313_xn$GlyphSaveSink$2Lrc4b.save("J." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r389_currentGlyph) {
                    var r389_attach, _r389_t0, _r389_t1;
                    r389_currentGlyph.include(r313_base(r313_df, r313_dfHook, r313_CAP));
                    if (r313_serif) {
                        r389_attach = r389_currentGlyph.gizmo.unapply(r389_currentGlyph.baseAnchors.jTopSerifAttach);
                        r389_currentGlyph.include(r313_serif(r313_df, r389_attach.x, r313_CAP));
                    }
                    return void 0;
                }));
                r313_xn$GlyphSaveSink$2Lrc4b.save("smcpJ." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                    var r394_attach, _r394_t0, _r394_t1;
                    r394_currentGlyph.include(r313_base(r313_df, r313_dfHook, r313_XH));
                    if (r313_serif) {
                        r394_attach = r394_currentGlyph.gizmo.unapply(r394_currentGlyph.baseAnchors.jTopSerifAttach);
                        r394_currentGlyph.include(r313_serif(r313_df, r394_attach.x, r313_XH));
                    }
                    return void 0;
                }));
                return r313_base.WithCurlyTail ? r313_xn$GlyphSaveSink$2Lrc4b.save("JCurlyTail." + r313_suffix, null, new r313_xn$Capture$2Lrc8.GlyphProc(function (r399_currentGlyph) {
                    var r399_attach, _r399_t0, _r399_t1;
                    r399_currentGlyph.include(r313_base.WithCurlyTail(r313_df, r313_CAP));
                    if (r313_serif) {
                        r399_attach = r399_currentGlyph.gizmo.unapply(r399_currentGlyph.baseAnchors.jTopSerifAttach);
                        r399_currentGlyph.include(r313_serif(r313_df, r399_attach.x, r313_CAP));
                    }
                    return void 0;
                })) : void 0;
            })();
        }
        r313_xn$selectvariant$7Hrq("J", "J");
        r313_xn$selectvariant$7Hrq("J/noDescend", new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "J"));
        r313_xn$linkreducedvariant$5sIl8("J/sansSerif", "J", r1_MathSansSerif);
        r313_xn$selectvariant$7Hrq("smcpJ", 7434, new r313_xn$NamedParameterPair$2Lrc9b("follow", "J"));
        r313_alias("cyrl/Je", 1032, "J");
        r313_alias("grek/Yot", 895, "J");
        r313_xn$selectvariant$7Hrq("JCurlyTail", 42930);
        r313_CreateAccentedComposition("JAcute", null, "J", "acuteAbove");
        return r313_xn$GlyphSaveSink$2Lrc4b.save("mathbb/J", 120129, new r313_xn$Capture$2Lrc8.GlyphProc(function (r406_currentGlyph) {
            var _r406_t0, _r406_t1;
            var r406_hookx = 0.75 * r313_SB;
            r406_currentGlyph.include(r313_MarkSet.capital());
            r406_currentGlyph.setBaseAnchor("above", r313_RightSB - r313_HSwToV(0.75 * r313_BBD) - r313_JBalance2, r313_CAP);
            r406_currentGlyph.setBaseAnchor("overlay", r313_RightSB - r313_HSwToV(0.75 * r313_BBD) - r313_JBalance2, r313_CAP * r313_OverlayPos);
            r406_currentGlyph.include(r313_dispiro(r313_widths.rhs(r313_BBS), r313_flat(r313_RightSB - r313_JBalance2, r313_CAP, r313_heading(r313_Downward)), r313_curl(r313_RightSB - r313_JBalance2, r313_ArchDepthB), r313_HookEnd(0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_BBS)), r313_g4(r406_hookx, r313_Hook)));
            r406_currentGlyph.include(r313_HBar.t(r313_RightSB - r313_JBalance2 - r313_BBD, r313_RightSB - r313_JBalance2, r313_CAP, r313_BBS));
            r406_currentGlyph.include(r313_intersection(r313_VBar.r(r313_RightSB - r313_JBalance2 - r313_BBD, 0, r313_CAP, r313_BBS), r313_xn$spirooutline$1aao(r313_corner(r313_RightSB - r313_JBalance2 - 1, r313_CAP, r313_heading(r313_Downward)), r313_curl(r313_RightSB - r313_JBalance2 - 1, r313_ArchDepthB), r313_HookEnd(1, new r313_xn$NamedParameterPair$2Lrc9b("sw", r313_BBS)), r313_g4(r406_hookx + 1, r313_Hook), r313_corner(r406_hookx + 1, r313_CAP))));
            return void 0;
        }));
    });
    return void 0;
});


