"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/geometry/point";
import * as _s0_t2 from "@iosevka/glyph/relation";
var _s0_t3;
export {_s0_t3 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t11;
var _r1_t2 = function _r1_t11(r379_t) {
    var r379_n, r379_i, r379_a, _r379_t3, _r379_t4, _r379_t5, _r379_t6, _r379_t7, _r379_t8, _r379_t9, _r379_t10, _r379_t11, _r379_t12, _r379_t13, _r379_t14, _r379_t15, _r379_t16, _r379_t17, _r379_t18, _r379_t19, _r379_t20, _r379_t21, _r379_t22, _r379_t23, _r379_t24, _r379_t25, _r379_t26;
    var _r379_t0 = function () {
        _r379_t7 = function (_r379_t8) {
            _r379_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r379_t8
            };
        };
        _r379_t9 = r379_t instanceof Array;
        if (_r379_t9) {
            _r379_t10 = r379_n = r379_t.length;
            _r379_t11 = r379_i = 0;
            _r379_t12 = function (_r379_t14) {
                return _r379_t7(_r379_t14);
            };
            _r379_t13 = function (_r379_t15) {
                _r379_t16 = r379_i < r379_n;
                if (_r379_t16) {
                    _r379_t0 = function (_r379_t17) {
                        return _r379_t13(r379_i = r379_i + 1);
                    };
                    return {
                        "value": [r379_i, r379_t[r379_i]],
                        "done": false
                    };
                } else return _r379_t12(_r379_t15);
            };
            return _r379_t13();
        } else {
            _r379_t18 = r379_a = Object.keys(r379_t);
            _r379_t19 = r379_n = r379_a.length;
            _r379_t20 = r379_i = 0;
            _r379_t21 = function (_r379_t23) {
                return _r379_t7(_r379_t23);
            };
            _r379_t22 = function (_r379_t24) {
                _r379_t25 = r379_i < r379_n;
                if (_r379_t25) {
                    _r379_t0 = function (_r379_t26) {
                        return _r379_t22(r379_i = r379_i + 1);
                    };
                    return {
                        "value": [r379_a[r379_i], r379_t[r379_a[r379_i]]],
                        "done": false
                    };
                } else return _r379_t21(_r379_t24);
            };
            return _r379_t22();
        }
    };
    var _r379_t1 = function (x) {
        try {
            return _r379_t0(x);
        } catch (ex) {
            return _r379_t2(ex);
        }
    };
    var _r379_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t11) _r379_t3 = this; else {
        _r379_t4 = function () {
            void 0;
        };
        _r379_t4.prototype = _r1_t11.prototype;
        _r379_t3 = new _r379_t4();
    }
    _r379_t3[Symbol.iterator] = function () {
        return _r379_t3;
    };
    _r379_t3.next = _r379_t1;
    _r379_t3.throw = function (x) {
        return _r379_t2(x);
    };
    return _r379_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_Point = _r1_t9.Point;
var _r1_t10 = _s0_t2;
var r1_DependentSelector = _r1_t10.DependentSelector;
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
    r313_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r313_xn$Capture_Ext$2Lrc2b, "Letter-Cyrillic-El", function (r314_xn$Capture$2Lrc8, r314_xn$ExportCapture$2Lrc4b) {
        var r314_suffix, r314_body, r314_slabUpright, r314_slabItalic, _r314_t12, _r314_t13, _r314_t14, _r314_t15, _r314_tag16;
        var _r314_t0 = r314_xn$Capture$2Lrc8;
        var r314_xn$GlyphSaveSink$2Lrc4b = _r314_t0["$GlyphSaveSink$"];
        var r314_xn$NamedParameterPair$2Lrc9b = _r314_t0["$NamedParameterPair$"];
        var r314_xn$Exec$2Lrc5 = _r314_t0["$Exec$"];
        var r314_para = _r314_t0.para;
        var r314_MarkSet = _r314_t0.MarkSet;
        var r314_DivFrame = _r314_t0.DivFrame;
        var _r314_t1 = r314_xn$Capture$2Lrc8.Metrics;
        var r314_SB = _r314_t1.SB;
        var r314_CAP = _r314_t1.CAP;
        var r314_XH = _r314_t1.XH;
        var r314_HSwToV = _r314_t1.HSwToV;
        var r314_VSwToH = _r314_t1.VSwToH;
        var r314_Stroke = _r314_t1.Stroke;
        var r314_HalfStroke = _r314_t1.HalfStroke;
        var r314_Jut = _r314_t1.Jut;
        var r314_VJut = _r314_t1.VJut;
        var r314_VJutStroke = _r314_t1.VJutStroke;
        var r314_SLAB = _r314_t1.SLAB;
        var r314_RightSB = _r314_t1.RightSB;
        var r314_SideJut = _r314_t1.SideJut;
        var r314_ArchDepthA = _r314_t1.ArchDepthA;
        var r314_ArchDepthB = _r314_t1.ArchDepthB;
        var _r314_t2 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_straight = _r314_t2.straight;
        var _r314_t3 = r314_xn$Capture$2Lrc8.SpiroFns;
        var r314_xn$decor$0cao = _r314_t3["decor@"];
        var r314_xn$decor$0cao1 = _r314_t3["decor@@"];
        var r314_xn$decor$0cao11 = _r314_t3["decor@@@"];
        var _r314_t4 = r314_xn$Capture$2Lrc8.BooleFns;
        var r314_intersection = _r314_t4.intersection;
        var r314_difference = _r314_t4.difference;
        var _r314_t5 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r314_tagged = _r314_t5.tagged;
        var r314_MaskBelow = _r314_t5.MaskBelow;
        var r314_MaskRight = _r314_t5.MaskRight;
        var r314_HSerif = _r314_t5.HSerif;
        var r314_VSerif = _r314_t5.VSerif;
        var r314_HBar = _r314_t5.HBar;
        var r314_VBar = _r314_t5.VBar;
        var _r314_t6 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r314_xn$selectvariant$7Hrq = _r314_t6["select-variant"];
        var r314_xn$derivecomposites$7Hrq = _r314_t6["derive-composites"];
        var _r314_t7 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared"].resolve();
        var r314_CreateSelectorVariants = _r314_t7.CreateSelectorVariants;
        var r314_DefineSelectorGlyph = _r314_t7.DefineSelectorGlyph;
        var _r314_t8 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r314_SerifFrame = _r314_t8.SerifFrame;
        var r314_LegShape = _r314_t8.LegShape;
        var r314_RightwardTailedBar = _r314_t8.RightwardTailedBar;
        var _r314_t9 = r314_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r314_CyrDescender = _r314_t9.CyrDescender;
        var r314_CyrTailDescender = _r314_t9.CyrTailDescender;
        var r314_PalatalHook = _r314_t9.PalatalHook;
        var r314_MidHook = _r314_t9.MidHook;
        var r314_UpwardHookShape = _r314_t9.UpwardHookShape;
        var r314_xn$BODYNONE$5sIl = 0;
        var r314_xn$BODYSTRAIGHT$5sIl = 1;
        var r314_xn$BODYTAILED$5sIl = 2;
        var r314_xn$SLABNONE$5sIl = 0;
        var r314_xn$SLABALL$5sIl = 1;
        var r314_xn$SLABLOWER$5sIl = 2;
        var r314_xn$SLABTAILEDU$5sIl7 = 3;
        var r314_xn$SLABTAILEDI$5sIl7 = 4;
        r314_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "CyrElShape": r314_CyrElShape
            };
        });
        var r314_CyrElShape = function (r322_left, r322_right, r322_top, r322_bodyType, r322_slabType, r322__sw) {
            var _r322_t0, _r322_t1;
            return new r314_xn$Capture$2Lrc8.GlyphProc(function (r324_currentGlyph) {
                var r324___, _r324_t0, _r324_t1, _r324_t2, _r324_t3, _r324_t4, _r324_t5;
                var r324_sw = r1_fallback(r322__sw, r314_Stroke);
                var r324_xTopLeft = r1_mix(r322_left, r322_right, 0.075);
                var r324_xBotLeft = r1_mix(r314_SB, 0, r314_SLAB ? 1 : 0.75);
                r324_currentGlyph.include((_r324_t0 = r322_bodyType, _r324_t0 === r314_xn$BODYTAILED$5sIl ? r314_RightwardTailedBar(r322_right, 0, r322_top, r324_sw) : _r324_t0 === r314_xn$BODYSTRAIGHT$5sIl ? r314_VBar.r(r322_right, 0, r322_top, r324_sw) : (r324___ = _r324_t0, new r314_xn$Capture$2Lrc8.GlyphProc(function (r327_currentGlyph) {
                    var _r327_t0, _r327_t1;
                    return void 0;
                }))));
                r324_currentGlyph.include(r314_HBar.t(r324_xTopLeft, r322_right, r322_top, r324_sw));
                r324_currentGlyph.include(r314_LegShape(new r314_xn$NamedParameterPair$2Lrc9b("ztop", r1_Point.fromXY(r1_Point.Type.Corner, r324_xTopLeft, r322_top)), new r314_xn$NamedParameterPair$2Lrc9b("zbot", r1_Point.fromXY(r1_Point.Type.Corner, r324_xBotLeft, 0)), new r314_xn$NamedParameterPair$2Lrc9b("xmid", r324_xTopLeft), new r314_xn$NamedParameterPair$2Lrc9b("sw", r324_sw)));
                r324_currentGlyph.include(r314_tagged("serifLT", (_r324_t1 = r322_slabType, _r324_t1 === r314_xn$SLABALL$5sIl ? r314_HSerif.lt(r324_xTopLeft, r322_top, r314_SideJut, r324_sw) : _r324_t1 === r314_xn$SLABLOWER$5sIl ? r314_HSerif.lt(r324_xTopLeft, r322_top, r314_SideJut, r324_sw) : _r324_t1 === r314_xn$SLABTAILEDU$5sIl7 ? r314_HSerif.lt(r324_xTopLeft, r322_top, r314_SideJut, r324_sw) : _r324_t1 === r314_xn$SLABTAILEDI$5sIl7 ? r314_HSerif.lt(r324_xTopLeft, r322_top, r314_SideJut, r324_sw) : (r324___ = _r324_t1, new r314_xn$Capture$2Lrc8.GlyphProc(function (r336_currentGlyph) {
                    var _r336_t0, _r336_t1;
                    return void 0;
                })))));
                r324_currentGlyph.include(r314_tagged("SerifRT", (_r324_t2 = r322_slabType, _r324_t2 === r314_xn$SLABALL$5sIl ? r314_HSerif.rt(r322_right, r322_top, r314_SideJut, r324_sw) : _r324_t2 === r314_xn$SLABTAILEDU$5sIl7 ? r314_HSerif.rt(r322_right, r322_top, r314_SideJut, r324_sw) : (r324___ = _r324_t2, new r314_xn$Capture$2Lrc8.GlyphProc(function (r339_currentGlyph) {
                    var _r339_t0, _r339_t1;
                    return void 0;
                })))));
                if (r322_bodyType !== r314_xn$BODYNONE$5sIl) r324_currentGlyph.include(r314_tagged("SerifRB", (_r324_t3 = r322_slabType, _r324_t3 === r314_xn$SLABALL$5sIl ? r314_HSerif.mb(r322_right - r314_HSwToV(0.5 * r324_sw), 0, r314_Jut - r314_HSwToV(0.5 * (r314_Stroke - r324_sw)), r324_sw) : _r324_t3 === r314_xn$SLABLOWER$5sIl ? r314_HSerif.rb(r322_right, 0, r314_SideJut, r324_sw) : (r324___ = _r324_t3, new r314_xn$Capture$2Lrc8.GlyphProc(function (r342_currentGlyph) {
                    var _r342_t0, _r342_t1;
                    return void 0;
                })))));
                return void 0;
            });
        };
        var r314_CyrSoftElShape = function (r343_vSlab) {
            var _r343_t0, _r343_t1;
            return function (r344_df, r344_top, r344_bodyType, r344_slabType, r344__sw) {
                var _r344_t0, _r344_t1;
                return new r314_xn$Capture$2Lrc8.GlyphProc(function (r346_currentGlyph) {
                    var r346_swVJut, _r346_t0, _r346_t1;
                    var r346_sw = r1_fallback(r344__sw, r314_Stroke);
                    var r346_xm = r314_SLAB ? r1_mix(r344_df.leftSB, r344_df.rightSB, 0.625) + r314_HSwToV(0.25 * r346_sw) : r1_mix(r344_df.leftSB, r344_df.rightSB, r344_df.adws > 1 ? 2 / 3 : 3 / 4);
                    var r346_xTopBarRightEnd = r1_mix(r344_df.width, r344_df.rightSB, r343_vSlab ? 0.25 : 0.375);
                    r346_currentGlyph.include(r314_CyrElShape(r344_df.leftSB, r346_xm, r344_top, r344_bodyType, r344_slabType, r346_sw));
                    r346_currentGlyph.include(r314_HBar.t(r346_xm, r346_xTopBarRightEnd, r344_top, r346_sw));
                    if (r343_vSlab) {
                        r346_swVJut = Math.min(r314_VJutStroke * (r346_sw / r314_Stroke), r314_VSwToH(0.625 * (r346_xTopBarRightEnd - r346_xm)));
                        r346_currentGlyph.include(r314_VSerif.dr(r346_xTopBarRightEnd, r344_top, r314_VJut, r346_swVJut));
                    }
                    return void 0;
                });
            };
        };
        r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/El", 1051, new r314_xn$Capture$2Lrc8.GlyphProc(function (r352_currentGlyph) {
            var _r352_t0, _r352_t1;
            r352_currentGlyph.include(r314_MarkSet.capital());
            r352_currentGlyph.include(r314_CyrElShape(r314_SB, r314_RightSB, r314_CAP, r314_xn$BODYSTRAIGHT$5sIl, r314_SLAB ? r314_xn$SLABALL$5sIl : r314_xn$SLABNONE$5sIl));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/smcpEl", 7467, new r314_xn$Capture$2Lrc8.GlyphProc(function (r357_currentGlyph) {
            var _r357_t0, _r357_t1;
            r357_currentGlyph.include(r314_MarkSet.e());
            r357_currentGlyph.include(r314_CyrElShape(r314_SB, r314_RightSB, r314_XH, r314_xn$BODYSTRAIGHT$5sIl, r314_SLAB ? r314_xn$SLABALL$5sIl : r314_xn$SLABNONE$5sIl));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ElMidHook", 1312, new r314_xn$Capture$2Lrc8.GlyphProc(function (r362_currentGlyph) {
            var _r362_leti0, _r362_t1, _r362_t2, _r362_t6, _r362_tag7;
            var r362_df = r362_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleMM, 3));
            r362_currentGlyph.include(r362_df.markSet.capDesc());
            var _r362_t3 = r362_currentGlyph;
            var _r362_t4 = _r362_t3.include;
            var _r362_t5 = r362_df.middle + r314_HSwToV(0.5 * r362_df.mvs);
            var _r362_t8 = (function (_r362_leti0) {
                var r366_xm = _r362_leti0;
                return r314_difference(r314_CyrElShape(r362_df.leftSB, r366_xm, r314_CAP, r314_xn$BODYSTRAIGHT$5sIl, r314_SLAB ? r314_xn$SLABALL$5sIl : r314_xn$SLABNONE$5sIl, r362_df.mvs), r314_intersection(r314_MaskBelow(r314_Stroke), r314_MaskRight(r1_mix(r366_xm, r362_df.rightSB - r314_HSwToV(r362_df.mvs), 0.625))));
            })(_r362_t5);
            _r362_t4.call(_r362_t3, _r362_t8);
            r362_currentGlyph.include(r314_MidHook.m(r362_df, r314_CAP));
            return void 0;
        }));
        r314_xn$GlyphSaveSink$2Lrc4b.save(null, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r370_currentGlyph) {
            var _r370_t0, _r370_t1;
            var r370_df = r370_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleM, 3));
            r370_currentGlyph.include(r370_df.markSet.capital());
            r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ElSoft.serifless", null, new r314_xn$Capture$2Lrc8.ForkGlyphProc(r370_currentGlyph, r314_CyrSoftElShape(false)(r370_df, r314_CAP, r314_xn$BODYSTRAIGHT$5sIl, r314_SLAB ? r314_xn$SLABALL$5sIl : r314_xn$SLABNONE$5sIl, r370_df.mvs)));
            r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ElSoft.topRightSerifed", null, new r314_xn$Capture$2Lrc8.ForkGlyphProc(r370_currentGlyph, r314_CyrSoftElShape(true)(r370_df, r314_CAP, r314_xn$BODYSTRAIGHT$5sIl, r314_SLAB ? r314_xn$SLABALL$5sIl : r314_xn$SLABNONE$5sIl, r370_df.mvs)));
            return void 0;
        }));
        r314_xn$selectvariant$7Hrq("cyrl/ElSoft", 42596, new r314_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/EnGhe/Ghe"));
        var r314_ElConfig = {
            "straight": [r314_xn$BODYSTRAIGHT$5sIl, r314_xn$SLABALL$5sIl, r314_xn$SLABLOWER$5sIl],
            "tailed": [r314_xn$BODYTAILED$5sIl, r314_xn$SLABTAILEDU$5sIl7, r314_xn$SLABTAILEDI$5sIl7]
        };
        var r314_CyrSoftElGheConfig = {
            "serifless": false,
            "topRightSerifed": true
        };
        var _r314_t10 = _r1_t2(r314_ElConfig)[Symbol.iterator]();
        var _r314_t11 = void 0;
        while (!(_r314_t11 = _r314_t10.next()).done) {
            _r314_t12 = _r314_t11.value;
            r314_suffix = _r314_t12[0];
            r314_body = _r314_t12[1][0];
            r314_slabUpright = _r314_t12[1][1];
            r314_slabItalic = _r314_t12[1][2];
            _r314_t12[1];
            (function () {
                var r382_suffixGhe, r382_cyrSoftElVSlab, _r382_t2, _r382_t3, _r382_tag4;
                r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/el." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r385_currentGlyph) {
                    var _r385_t0, _r385_t1;
                    r385_currentGlyph.include(r314_MarkSet.e());
                    r385_currentGlyph.include(r314_CyrElShape(r314_SB, r314_RightSB, r314_XH, r314_body, r314_SLAB ? r314_para.isItalic ? r314_slabItalic : r314_slabUpright : r314_xn$SLABNONE$5sIl));
                    return void 0;
                }));
                r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/elMidHook." + r314_suffix, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r390_currentGlyph) {
                    var _r390_leti0, _r390_t1, _r390_t2, _r390_t6, _r390_tag7;
                    var r390_df = r390_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleMM, 3));
                    r390_currentGlyph.include(r390_df.markSet.p());
                    var _r390_t3 = r390_currentGlyph;
                    var _r390_t4 = _r390_t3.include;
                    var _r390_t5 = r390_df.middle + r314_HSwToV(0.5 * r390_df.mvs);
                    var _r390_t8 = (function (_r390_leti0) {
                        var r394_xm = _r390_leti0;
                        return r314_difference(r314_CyrElShape(r390_df.leftSB, r394_xm, r314_XH, r314_body, r314_SLAB ? r314_para.isItalic ? r314_slabItalic : r314_slabUpright : r314_xn$SLABNONE$5sIl, r390_df.mvs), r314_intersection(r314_MaskBelow(r314_Stroke), r314_MaskRight(r1_mix(r394_xm, r390_df.rightSB - r314_HSwToV(r390_df.mvs), 0.625))));
                    })(_r390_t5);
                    _r390_t4.call(_r390_t3, _r390_t8);
                    r390_currentGlyph.include(r314_MidHook.m(r390_df, r314_XH));
                    return void 0;
                }));
                var r382_cyrSoftElDf = r314_DivFrame(r314_para.advanceScaleM, 3);
                r314_DefineSelectorGlyph("cyrl/elSoft", r314_suffix, r382_cyrSoftElDf, "e");
                var _r382_t0 = Object.entries(r314_CyrSoftElGheConfig)[Symbol.iterator]();
                var _r382_t1 = void 0;
                while (!(_r382_t1 = _r382_t0.next()).done) {
                    _r382_t2 = _r382_t1.value;
                    r382_suffixGhe = _r382_t2[0];
                    r382_cyrSoftElVSlab = _r382_t2[1];
                    (function () {
                        return r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/elSoft." + r314_suffix + "." + r382_suffixGhe, null, new r314_xn$Capture$2Lrc8.GlyphProc(function (r401_currentGlyph) {
                            var _r401_t0, _r401_t1;
                            r401_currentGlyph.setWidth(0);
                            r401_currentGlyph.setMarkAnchor("cvDecompose", 0, 0);
                            r401_currentGlyph.include(r314_CyrSoftElShape(r382_cyrSoftElVSlab)(r382_cyrSoftElDf, r314_XH, r314_body, r314_SLAB ? r314_para.isItalic ? r314_slabItalic : r314_slabUpright : r314_xn$SLABNONE$5sIl, r382_cyrSoftElDf.mvs));
                            return void 0;
                        }));
                    })();
                }
                return r314_xn$selectvariant$7Hrq("cyrl/elSoft." + r314_suffix, new r314_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/enghe/ghe"));
            })();
        }
        r314_xn$selectvariant$7Hrq("cyrl/el", 1083);
        r314_xn$selectvariant$7Hrq("cyrl/elMidHook", 1313, new r314_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/el"));
        r314_CreateSelectorVariants("cyrl/elSoft", 42597, Object.keys(r314_ElConfig), new r314_xn$NamedParameterPair$2Lrc9b("follow", "cyrl/el"));
        r314_xn$derivecomposites$7Hrq("cyrl/ElDescender", 1326, "cyrl/El", r314_CyrDescender.rSideJut(r314_RightSB, 0));
        r314_xn$derivecomposites$7Hrq("cyrl/elDescender", 1327, "cyrl/el.straight", r314_CyrDescender.rSideJut(r314_RightSB, 0));
        r314_xn$derivecomposites$7Hrq("cyrl/ElTail", 1221, "cyrl/El", r314_CyrTailDescender.rSideJut(r314_RightSB, 0));
        r314_xn$derivecomposites$7Hrq("cyrl/elTail", 1222, "cyrl/el.straight", r314_CyrTailDescender.rSideJut(r314_RightSB, 0));
        r314_xn$derivecomposites$7Hrq("cyrl/ElHook", 1298, "cyrl/El", r314_PalatalHook.rSideJut(r314_RightSB, 0));
        r314_xn$derivecomposites$7Hrq("cyrl/elHook", 1299, "cyrl/el.straight", r314_PalatalHook.rSideJut(r314_RightSB, 0));
        r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/LjeKomi", 1288, new r314_xn$Capture$2Lrc8.GlyphProc(function (r410_currentGlyph) {
            var r410_sf2, _r410_t0, _r410_t1;
            var r410_df = r410_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleMM, 3));
            r410_currentGlyph.include(r410_df.markSet.capital());
            r410_currentGlyph.include(r314_CyrElShape(r410_df.leftSB, r410_df.middle + r314_HSwToV(0.5 * r410_df.mvs), r314_CAP, r314_xn$BODYNONE$5sIl, r314_SLAB ? r314_xn$SLABALL$5sIl : r314_xn$SLABNONE$5sIl, r410_df.mvs));
            r410_currentGlyph.include(r314_UpwardHookShape(new r314_xn$NamedParameterPair$2Lrc9b("left", r410_df.middle - r314_HSwToV(0.5 * r410_df.mvs)), new r314_xn$NamedParameterPair$2Lrc9b("right", r410_df.rightSB), new r314_xn$NamedParameterPair$2Lrc9b("ybegin", r314_CAP), new r314_xn$NamedParameterPair$2Lrc9b("yend", r314_CAP / 2 + r314_HalfStroke), new r314_xn$NamedParameterPair$2Lrc9b("ada", r314_ArchDepthA * (2 / r410_df.hPack) * r410_df.adws), new r314_xn$NamedParameterPair$2Lrc9b("adb", r314_ArchDepthB * (2 / r410_df.hPack) * r410_df.adws), new r314_xn$NamedParameterPair$2Lrc9b("sw", r410_df.mvs)));
            if (r314_SLAB) {
                r410_sf2 = r314_SerifFrame.fromDf(r410_df, r314_CAP / 2 + r314_HalfStroke, 0).slice(1, 2);
                r410_currentGlyph.include(r410_sf2.rt.full);
            }
            return void 0;
        }));
        return r314_xn$GlyphSaveSink$2Lrc4b.save("cyrl/ljeKomi", 1289, new r314_xn$Capture$2Lrc8.GlyphProc(function (r425_currentGlyph) {
            var r425_sf2, _r425_t0, _r425_t1;
            var r425_df = r425_currentGlyph.include(r314_DivFrame(r314_para.advanceScaleMM, 3));
            r425_currentGlyph.include(r425_df.markSet.e());
            r425_currentGlyph.include(r314_CyrElShape(r425_df.leftSB, r425_df.middle + r314_HSwToV(0.5 * r425_df.mvs), r314_XH, r314_xn$BODYNONE$5sIl, r314_SLAB ? r314_para.isItalic ? r314_xn$SLABLOWER$5sIl : r314_xn$SLABALL$5sIl : r314_xn$SLABNONE$5sIl, r425_df.mvs));
            r425_currentGlyph.include(r314_UpwardHookShape(new r314_xn$NamedParameterPair$2Lrc9b("left", r425_df.middle - r314_HSwToV(0.5 * r425_df.mvs)), new r314_xn$NamedParameterPair$2Lrc9b("right", r425_df.rightSB), new r314_xn$NamedParameterPair$2Lrc9b("ybegin", r314_XH), new r314_xn$NamedParameterPair$2Lrc9b("yend", r314_XH / 2 + r314_HalfStroke), new r314_xn$NamedParameterPair$2Lrc9b("ada", r314_ArchDepthA * (2 / r425_df.hPack) * r425_df.adws), new r314_xn$NamedParameterPair$2Lrc9b("adb", r314_ArchDepthB * (2 / r425_df.hPack) * r425_df.adws), new r314_xn$NamedParameterPair$2Lrc9b("sw", r425_df.mvs)));
            if (r314_SLAB) {
                r425_sf2 = r314_SerifFrame.fromDf(r425_df, r314_XH / 2 + r314_HalfStroke, 0).slice(1, 2);
                r425_currentGlyph.include(r425_sf2.rt.full);
            }
            return void 0;
        }));
    });
    return void 0;
});


