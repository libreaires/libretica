"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/util/mask-bit";
var _s0_t2;
export {_s0_t2 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7, _r1_t10;
var _r1_t2 = function _r1_t10(r358_t) {
    var r358_n, r358_i, r358_a, _r358_t3, _r358_t4, _r358_t5, _r358_t6, _r358_t7, _r358_t8, _r358_t9, _r358_t10, _r358_t11, _r358_t12, _r358_t13, _r358_t14, _r358_t15, _r358_t16, _r358_t17, _r358_t18, _r358_t19, _r358_t20, _r358_t21, _r358_t22, _r358_t23, _r358_t24, _r358_t25, _r358_t26;
    var _r358_t0 = function () {
        _r358_t7 = function (_r358_t8) {
            _r358_t0 = function () {
                throw "Iteration Stopped";
            };
            return {
                "done": true,
                "value": _r358_t8
            };
        };
        _r358_t9 = r358_t instanceof Array;
        if (_r358_t9) {
            _r358_t10 = r358_n = r358_t.length;
            _r358_t11 = r358_i = 0;
            _r358_t12 = function (_r358_t14) {
                return _r358_t7(_r358_t14);
            };
            _r358_t13 = function (_r358_t15) {
                _r358_t16 = r358_i < r358_n;
                if (_r358_t16) {
                    _r358_t0 = function (_r358_t17) {
                        return _r358_t13(r358_i = r358_i + 1);
                    };
                    return {
                        "value": [r358_i, r358_t[r358_i]],
                        "done": false
                    };
                } else return _r358_t12(_r358_t15);
            };
            return _r358_t13();
        } else {
            _r358_t18 = r358_a = Object.keys(r358_t);
            _r358_t19 = r358_n = r358_a.length;
            _r358_t20 = r358_i = 0;
            _r358_t21 = function (_r358_t23) {
                return _r358_t7(_r358_t23);
            };
            _r358_t22 = function (_r358_t24) {
                _r358_t25 = r358_i < r358_n;
                if (_r358_t25) {
                    _r358_t0 = function (_r358_t26) {
                        return _r358_t22(r358_i = r358_i + 1);
                    };
                    return {
                        "value": [r358_a[r358_i], r358_t[r358_a[r358_i]]],
                        "done": false
                    };
                } else return _r358_t21(_r358_t24);
            };
            return _r358_t22();
        }
    };
    var _r358_t1 = function (x) {
        try {
            return _r358_t0(x);
        } catch (ex) {
            return _r358_t2(ex);
        }
    };
    var _r358_t2 = function (e) {
        throw e;
    };
    if (this instanceof _r1_t10) _r358_t3 = this; else {
        _r358_t4 = function () {
            void 0;
        };
        _r358_t4.prototype = _r1_t10.prototype;
        _r358_t3 = new _r358_t4();
    }
    _r358_t3[Symbol.iterator] = function () {
        return _r358_t3;
    };
    _r358_t3.next = _r358_t1;
    _r358_t3.throw = function (x) {
        return _r358_t2(x);
    };
    return _r358_t3;
};
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var r1_SuffixCfg = _r1_t8.SuffixCfg;
var _r1_t9 = _s0_t1;
var r1_maskBits = _r1_t9.maskBits;
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
    r312_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r312_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Lower-Eszet", function (r313_xn$Capture$2Lrc8, r313_xn$ExportCapture$2Lrc4b) {
        var r313_suffix, r313_Body, r313_terminal, r313_serif, _r313_t13, _r313_t14, _r313_t15, _r313_t16, _r313_tag17;
        var _r313_t0 = r313_xn$Capture$2Lrc8;
        var r313_xn$GlyphSaveSink$2Lrc4b = _r313_t0["$GlyphSaveSink$"];
        var r313_xn$NamedParameterPair$2Lrc9b = _r313_t0["$NamedParameterPair$"];
        var r313_xn$Exec$2Lrc5 = _r313_t0["$Exec$"];
        var r313_MarkSet = _r313_t0.MarkSet;
        var r313_DivFrame = _r313_t0.DivFrame;
        var _r313_t1 = r313_xn$Capture$2Lrc8.Metrics;
        var r313_Width = _r313_t1.Width;
        var r313_SB = _r313_t1.SB;
        var r313_XH = _r313_t1.XH;
        var r313_Ascender = _r313_t1.Ascender;
        var r313_Descender = _r313_t1.Descender;
        var r313_TanSlope = _r313_t1.TanSlope;
        var r313_HSwToV = _r313_t1.HSwToV;
        var r313_Upward = _r313_t1.Upward;
        var r313_Downward = _r313_t1.Downward;
        var r313_Rightward = _r313_t1.Rightward;
        var r313_Leftward = _r313_t1.Leftward;
        var r313_O = _r313_t1.O;
        var r313_OX = _r313_t1.OX;
        var r313_Hook = _r313_t1.Hook;
        var r313_ArchDepth = _r313_t1.ArchDepth;
        var r313_AdviceStroke2 = _r313_t1.AdviceStroke2;
        var r313_Stroke = _r313_t1.Stroke;
        var r313_HalfStroke = _r313_t1.HalfStroke;
        var r313_RightSB = _r313_t1.RightSB;
        var r313_ArchDepthAOf = _r313_t1.ArchDepthAOf;
        var r313_ArchDepthBOf = _r313_t1.ArchDepthBOf;
        var r313_SmallArchDepthA = _r313_t1.SmallArchDepthA;
        var r313_YSmoothMidR = _r313_t1.YSmoothMidR;
        var r313_TINY = _r313_t1.TINY;
        var _r313_t2 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_g4 = _r313_t2.g4;
        var r313_g2 = _r313_t2.g2;
        var r313_corner = _r313_t2.corner;
        var r313_flat = _r313_t2.flat;
        var r313_curl = _r313_t2.curl;
        var r313_end = _r313_t2.end;
        var r313_widths = _r313_t2.widths;
        var r313_heading = _r313_t2.heading;
        var r313_alsoThru = _r313_t2.alsoThru;
        var r313_archv = _r313_t2.archv;
        var r313_arcvh = _r313_t2.arcvh;
        var r313_dispiro = _r313_t2.dispiro;
        var _r313_t3 = r313_xn$Capture$2Lrc8.SpiroFns;
        var r313_xn$decor$0cao = _r313_t3["decor@"];
        var r313_xn$decor$0cao1 = _r313_t3["decor@@"];
        var r313_xn$decor$0cao11 = _r313_t3["decor@@@"];
        var _r313_t4 = r313_xn$Capture$2Lrc8.BooleFns;
        var _r313_t5 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r313_xn$noshape$3cah = _r313_t5["no-shape"];
        var r313_HBar = _r313_t5.HBar;
        var r313_VBar = _r313_t5.VBar;
        var r313_HookStart = _r313_t5.HookStart;
        var r313_Arch = _r313_t5.Arch;
        var _r313_t6 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r313_xn$selectvariant$7Hrq = _r313_t6["select-variant"];
        var _r313_t7 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_LeftwardDiagTailedBar = _r313_t7.LeftwardDiagTailedBar;
        var r313_SerifFrame = _r313_t7.SerifFrame;
        var _r313_t8 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Shared-Shapes"].resolve();
        var r313_FlatHookDepth = _r313_t8.FlatHookDepth;
        var r313_PalatalHook = _r313_t8.PalatalHook;
        var _r313_t9 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-S"].resolve();
        var r313_AdviceSArchDepth = _r313_t9.AdviceSArchDepth;
        var _r313_t10 = r313_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Letter-Latin-Lower-F"].resolve();
        var r313_ySmallFBarPos = _r313_t10.ySmallFBarPos;
        var r313_xn$TERMINALBASELINE$9XZu = 0;
        var r313_xn$TERMINALDESCENDING$9XZu = 1;
        var r313_xn$TERMINALTAILED$9XZu = 2;
        var r313_xn$TERMINALDIAGONAL$9XZu = 3;
        var r313_xn$SERIFNONE$1aao = 0;
        var r313_xn$SERIFBOT$1aao = 1;
        var r313_xn$SERIFMID$1aao = 2;
        var r313_xn$SERIFMIDXH$1aao4 = 4;
        var r313_xn$SERIFMIDHALFASC$1aao45 = 8;
        var r313_xn$SERIFDUAL$1aao = r313_xn$SERIFBOT$1aao + r313_xn$SERIFMID$1aao;
        var r313_xn$SERIFDUALXH$1aao5 = r313_xn$SERIFBOT$1aao + r313_xn$SERIFMIDXH$1aao4;
        var r313_xn$SERIFDUALHALFASC$1aao55 = r313_xn$SERIFBOT$1aao + r313_xn$SERIFMIDHALFASC$1aao45;
        var r313_EszetSerifs = function (r320_df, r320_fTraditional, r320_slab) {
            var _r320_t0, _r320_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r322_currentGlyph) {
                var r322_sfXH, r322_sfHalfAsc, _r322_t0, _r322_t1;
                var r322_sf = r313_SerifFrame.fromDf(r320_df, r313_ySmallFBarPos, 0);
                if (r1_maskBits(r320_slab, r313_xn$SERIFBOT$1aao)) r322_currentGlyph.include(r322_sf.lb[r320_fTraditional ? "full" : "outer"]);
                if (r1_maskBits(r320_slab, r313_xn$SERIFMID$1aao)) r322_currentGlyph.include(r322_sf.lt.outer);
                if (r1_maskBits(r320_slab, r313_xn$SERIFMIDXH$1aao4)) {
                    r322_sfXH = r313_SerifFrame.fromDf(r320_df, r313_XH, 0);
                    r322_currentGlyph.include(r322_sfXH.lt.outer);
                }
                if (r1_maskBits(r320_slab, r313_xn$SERIFMIDHALFASC$1aao45)) {
                    r322_sfHalfAsc = r313_SerifFrame.fromDf(r320_df, r1_mix(0, r313_Ascender, 0.5) + r313_HalfStroke, 0);
                    r322_currentGlyph.include(r322_sfHalfAsc.lt.outer);
                }
                return void 0;
            });
        };
        var r313_Traditional = function (r327_fFlathook) {
            var _r327_t0, _r327_t1;
            return function (r328_slab, r328_term) {
                var _r328_t0, _r328_t1;
                return new r313_xn$Capture$2Lrc8.GlyphProc(function (r330_currentGlyph) {
                    var r330___, _r330_t0, _r330_t1, _r330_t2;
                    r330_currentGlyph.include(r313_MarkSet.bp());
                    var r330_xHook = r1_mix(r313_SB, r313_RightSB, 0.75) + r313_HSwToV(r313_HalfStroke);
                    var r330_hd = r313_FlatHookDepth(r313_DivFrame(1));
                    r330_currentGlyph.include(r327_fFlathook ? r313_dispiro(r313_widths.lhs(), r313_flat(r330_xHook, r313_Ascender), r313_curl(r313_SB + r330_hd.x, r313_Ascender), r313_archv(), r313_flat(r313_SB, r313_Ascender - r330_hd.y), r313_curl(r313_SB, 0, r313_heading(r313_Downward))) : r313_dispiro(r313_widths.lhs(), r313_g4(r330_xHook, r313_Ascender - r313_Hook), r313_HookStart(r313_Ascender), r313_flat(r313_SB, r313_XH), r313_curl(r313_SB, 0, r313_heading(r313_Downward))));
                    var r330_t = r1_mix(0, r313_Ascender, 0.7);
                    var r330_tm = r1_mix(r313_Descender, r330_t, 0.625) + r313_HalfStroke;
                    var r330_tl = r1_mix(r313_SB, r313_RightSB, 0.35) + r313_HSwToV(r313_HalfStroke);
                    r330_currentGlyph.include(r313_HBar.t(r313_SB + 1, r313_RightSB - r313_HalfStroke * 1.2 - r313_OX, r330_t));
                    r330_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_flat(r330_tl, r330_tm, r313_heading(r313_Rightward)), r313_curl(r330_tl + 1, r330_tm, r313_heading(r313_Rightward)), r313_g2(r313_RightSB - r313_OX * 1.5, r1_mix(r313_Descender, r330_tm, 0.7)), r313_g2(r313_RightSB - r313_OX * 1.5, r1_mix(r313_Descender, r330_tm, 0.67)), r313_alsoThru(0.5, 0.75), r313_g4(r1_mix(r313_SB, r313_RightSB, 0.35) + (r328_term ? 0.625 : 0) * r313_HSwToV(r313_Stroke), r313_Descender)));
                    r330_currentGlyph.include(r313_dispiro(r313_widths.center(r313_Stroke * 1.1), r313_corner(r330_tl, r330_tm - r313_Stroke, r313_heading(r313_Upward)), r313_corner(r313_RightSB - r313_HalfStroke * 1.2 - r313_OX, r330_t, r313_heading(r313_Upward))));
                    r330_currentGlyph.include(r313_EszetSerifs(r313_DivFrame(1), true, r328_slab));
                    r330_currentGlyph.include((_r330_t0 = r328_term, _r330_t0 === r313_xn$TERMINALDESCENDING$9XZu ? r313_VBar.l(r313_SB, r313_Descender, 0) : _r330_t0 === r313_xn$TERMINALTAILED$9XZu ? r313_PalatalHook.lExt(r313_SB, 0) : _r330_t0 === r313_xn$TERMINALDIAGONAL$9XZu ? r313_LeftwardDiagTailedBar(r313_SB, r313_Descender, 0) : (r330___ = _r330_t0, r313_xn$noshape$3cah())));
                    return void 0;
                });
            };
        };
        var r313_Sulzbacher = function (r338_slab, r338_term) {
            var _r338_t0, _r338_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r340_currentGlyph) {
                var r340___, _r340_t0, _r340_t1, _r340_t2;
                r340_currentGlyph.include(r313_MarkSet.b());
                var r340_yMiddle = r1_mix(0, r313_Ascender, 0.5);
                var r340_xFinal = Math.max(r1_mix(r313_SB + r313_HSwToV(r313_Stroke), r313_RightSB, 0.1), r1_mix(r313_SB, r313_RightSB, 0.3));
                var r340_xMiddle = Math.max(r340_xFinal, r313_SB + r313_HSwToV(1.2 * r313_Stroke), r313_RightSB - (r340_yMiddle / 2 + r313_HalfStroke));
                var r340_xMiddleBot = Math.max(r340_xMiddle, r340_xFinal + r313_TINY + Math.abs(r313_TanSlope * r313_Stroke));
                var r340_ada = r313_ArchDepthAOf(0.75 * r313_ArchDepth, 0.5 * r313_Width);
                var r340_adb = r313_ArchDepthBOf(0.75 * r313_ArchDepth, 0.5 * r313_Width);
                r340_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_flat(r313_SB, 0, r313_heading(r313_Upward)), r313_curl(r313_SB, Math.max(r313_XH, r313_Ascender - r313_SmallArchDepthA)), r313_Arch.rhs(r313_Ascender), r313_g4(r313_RightSB + r313_O * 2, r313_YSmoothMidR(r313_Ascender, r340_yMiddle - r313_HalfStroke, r340_ada, r340_adb)), r313_g4.left.end(r340_xMiddle, r340_yMiddle - r313_HalfStroke, r313_heading(r313_Leftward))));
                r340_currentGlyph.include(r313_dispiro(r313_widths.rhs(), r313_g4.right.start(r340_xMiddle, r340_yMiddle + r313_HalfStroke, r313_heading(r313_Rightward)), r313_archv(), r313_g4(r313_RightSB - r313_O, r313_YSmoothMidR(r340_yMiddle + r313_HalfStroke, 0, r340_ada, r340_adb)), r313_arcvh(), r313_flat(r340_xMiddleBot, 0, r313_heading(r313_Leftward)), r313_curl(r340_xFinal, 0, r313_heading(r313_Leftward))));
                r340_currentGlyph.include(r313_EszetSerifs(r313_DivFrame(1), false, r338_slab));
                r340_currentGlyph.include((_r340_t0 = r338_term, _r340_t0 === r313_xn$TERMINALDESCENDING$9XZu ? r313_VBar.l(r313_SB, r313_Descender, 0) : _r340_t0 === r313_xn$TERMINALTAILED$9XZu ? r313_PalatalHook.lExt(r313_SB, 0) : _r340_t0 === r313_xn$TERMINALDIAGONAL$9XZu ? r313_LeftwardDiagTailedBar(r313_SB, r313_Descender, 0) : (r340___ = _r340_t0, r313_xn$noshape$3cah())));
                return void 0;
            });
        };
        var r313_LongSSLig = function (r346_slab, r346_term) {
            var _r346_t0, _r346_t1;
            return new r313_xn$Capture$2Lrc8.GlyphProc(function (r348_currentGlyph) {
                var r348___, _r348_t0, _r348_t1, _r348_t2;
                r348_currentGlyph.include(r313_MarkSet.b());
                var r348_swOuter = r313_AdviceStroke2(2, 3, r313_Ascender);
                var r348_swInner = r313_AdviceStroke2(2.5, 3, r313_Ascender);
                var r348_sEndX = Math.max(r1_mix(r313_SB + r313_HSwToV(r313_Stroke), r313_RightSB, 0.1), r1_mix(r313_SB, r313_RightSB, 0.3));
                var r348_sTurnX = Math.max(r348_sEndX, r1_mix(r313_SB, r313_RightSB, 0.3));
                var r348_sBotX = Math.max(r348_sEndX + 1, r1_mix(r348_sEndX, r313_RightSB, 0.3));
                var r348_sTopX = r348_sTurnX + (r313_RightSB - r348_sBotX);
                var r348_sTopHookX = r348_sTopX + r313_HSwToV(0.5 * r348_swInner);
                var r348_archDepth = r313_ArchDepth * (r348_sTopHookX - r313_SB - r348_swInner * 0.5) / (r313_RightSB - r313_SB);
                var r348_mockWidth = r348_sTopHookX + r313_SB;
                var r348_ada = r313_ArchDepthAOf(r348_archDepth, r348_mockWidth);
                var r348_adb = r313_ArchDepthBOf(r348_archDepth, r348_mockWidth);
                r348_currentGlyph.include(r313_dispiro(r313_widths.rhs(r348_swOuter), r313_flat(r313_SB, 0, r313_heading(r313_Upward)), r313_curl(r313_SB, Math.max(r313_XH, r313_Ascender - r348_ada)), r313_Arch.rhs(r313_Ascender, new r313_xn$NamedParameterPair$2Lrc9b("swBefore", r348_swOuter), new r313_xn$NamedParameterPair$2Lrc9b("sw", r1_mix(r348_swOuter, r348_swInner, 0.5)), new r313_xn$NamedParameterPair$2Lrc9b("swAfter", r348_swInner)), r313_g4.down.mid(r348_sTopHookX, r313_Ascender - r348_adb + r313_TanSlope * r348_swInner, r313_widths.rhs.heading(r348_swInner, r313_Downward)), r313_alsoThru.g2(0.5, 0.5, r313_widths.center(r348_swInner)), r313_g4(r348_sTurnX, r1_mix(0 + r348_adb, r313_Ascender - r348_adb, 0.5), r313_widths.lhs.heading(r348_swInner, r313_Downward)), r313_alsoThru.g2(0.5, 0.5, r313_widths.center(r348_swInner)), r313_g4(r313_RightSB - r313_OX, 0 + r348_adb - 2 * r313_TanSlope * r348_swInner, r313_widths.rhs.heading(r348_swInner, r313_Downward)), r313_arcvh(), r313_flat(r313_Arch["adjust-x"].bot(r1_clamp(r348_sEndX + r313_TINY + r313_TanSlope * r348_swInner, r313_RightSB - r348_adb, r1_mix(r348_sEndX, r313_RightSB, 0.375)) + r313_TanSlope * r348_swInner, r348_swInner / 2), 0), r313_curl(r348_sEndX, 0, r313_heading(r313_Leftward))));
                r348_currentGlyph.include(r313_EszetSerifs(r313_DivFrame(1), false, r346_slab));
                r348_currentGlyph.include((_r348_t0 = r346_term, _r348_t0 === r313_xn$TERMINALDESCENDING$9XZu ? r313_VBar.l(r313_SB, r313_Descender, 0, r348_swOuter) : _r348_t0 === r313_xn$TERMINALTAILED$9XZu ? r313_PalatalHook.lExt(r313_SB, 0, new r313_xn$NamedParameterPair$2Lrc9b("sw", r348_swOuter)) : _r348_t0 === r313_xn$TERMINALDIAGONAL$9XZu ? r313_LeftwardDiagTailedBar(r313_SB, r313_Descender, 0, r348_swOuter) : (r348___ = _r348_t0, r313_xn$noshape$3cah())));
                return void 0;
            });
        };
        var r313_EszetConfig = r1_SuffixCfg.weave({
            "traditionalBentHook": r313_Traditional(false),
            "traditionalFlatHook": r313_Traditional(true),
            "sulzbacher": r313_Sulzbacher,
            "longSSLig": r313_LongSSLig
        }, {
            "": r313_xn$TERMINALBASELINE$9XZu,
            "descending": r313_xn$TERMINALDESCENDING$9XZu,
            "tailed": r313_xn$TERMINALTAILED$9XZu,
            "diagonalTailed": r313_xn$TERMINALDIAGONAL$9XZu
        }, {
            "serifless": r313_xn$SERIFNONE$1aao,
            "middleSerifed": r313_xn$SERIFMID$1aao,
            "middleSerifedHalfAscender": r313_xn$SERIFMIDHALFASC$1aao45,
            "middleSerifedXH": r313_xn$SERIFMIDXH$1aao4,
            "bottomSerifed": r313_xn$SERIFBOT$1aao,
            "dualSerifed": r313_xn$SERIFDUAL$1aao,
            "dualSerifedXH": r313_xn$SERIFDUALXH$1aao5,
            "dualSerifedHalfAscender": r313_xn$SERIFDUALHALFASC$1aao55
        });
        var _r313_t11 = _r1_t2(r313_EszetConfig)[Symbol.iterator]();
        var _r313_t12 = void 0;
        while (!(_r313_t12 = _r313_t11.next()).done) {
            _r313_t13 = _r313_t12.value;
            r313_suffix = _r313_t13[0];
            r313_Body = _r313_t13[1][0];
            r313_terminal = _r313_t13[1][1];
            r313_serif = _r313_t13[1][2];
            _r313_t13[1];
            (function () {
                return r313_xn$GlyphSaveSink$2Lrc4b.save("eszet." + r313_suffix, null, r313_Body(r313_serif, r313_terminal));
            })();
        }
        r313_xn$selectvariant$7Hrq("eszet", 223);
        return r313_xn$selectvariant$7Hrq("longssHookBottom", 122773, new r313_xn$NamedParameterPair$2Lrc9b("shapeFrom", "eszet"));
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r366_xn$Capture_Ext$2Lrc2b) {
    var _r366_t0, _r366_t1;
    r366_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r366_xn$Capture_Ext$2Lrc2b, "Letter-Latin-Upper-Eszet", function (r367_xn$Capture$2Lrc8, r367_xn$ExportCapture$2Lrc4b) {
        var r367_suffix, r367_Body, r367_serif, _r367_t9, _r367_t10, _r367_t11, _r367_t12, _r367_tag13;
        var _r367_t0 = r367_xn$Capture$2Lrc8;
        var r367_xn$GlyphSaveSink$2Lrc4b = _r367_t0["$GlyphSaveSink$"];
        var r367_xn$NamedParameterPair$2Lrc9b = _r367_t0["$NamedParameterPair$"];
        var r367_xn$Exec$2Lrc5 = _r367_t0["$Exec$"];
        var r367_MarkSet = _r367_t0.MarkSet;
        var _r367_t1 = r367_xn$Capture$2Lrc8.Metrics;
        var r367_SB = _r367_t1.SB;
        var r367_CAP = _r367_t1.CAP;
        var r367_XH = _r367_t1.XH;
        var r367_TanSlope = _r367_t1.TanSlope;
        var r367_HSwToV = _r367_t1.HSwToV;
        var r367_Upward = _r367_t1.Upward;
        var r367_Rightward = _r367_t1.Rightward;
        var r367_Leftward = _r367_t1.Leftward;
        var r367_O = _r367_t1.O;
        var r367_Stroke = _r367_t1.Stroke;
        var r367_HalfStroke = _r367_t1.HalfStroke;
        var r367_RightSB = _r367_t1.RightSB;
        var r367_Middle = _r367_t1.Middle;
        var r367_SideJut = _r367_t1.SideJut;
        var r367_DToothlessRise = _r367_t1.DToothlessRise;
        var r367_ArchDepthA = _r367_t1.ArchDepthA;
        var r367_ArchDepthB = _r367_t1.ArchDepthB;
        var r367_YSmoothMidR = _r367_t1.YSmoothMidR;
        var r367_TINY = _r367_t1.TINY;
        var _r367_t2 = r367_xn$Capture$2Lrc8.SpiroFns;
        var r367_g4 = _r367_t2.g4;
        var r367_corner = _r367_t2.corner;
        var r367_flat = _r367_t2.flat;
        var r367_curl = _r367_t2.curl;
        var r367_widths = _r367_t2.widths;
        var r367_heading = _r367_t2.heading;
        var r367_archv = _r367_t2.archv;
        var r367_arcvh = _r367_t2.arcvh;
        var r367_dispiro = _r367_t2.dispiro;
        var _r367_t3 = r367_xn$Capture$2Lrc8.SpiroFns;
        var r367_xn$decor$0cao = _r367_t3["decor@"];
        var r367_xn$decor$0cao1 = _r367_t3["decor@@"];
        var r367_xn$decor$0cao11 = _r367_t3["decor@@@"];
        var _r367_t4 = r367_xn$Capture$2Lrc8.BooleFns;
        var r367_union = _r367_t4.union;
        var _r367_t5 = r367_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r367_HSerif = _r367_t5.HSerif;
        var r367_HBar = _r367_t5.HBar;
        var r367_VBar = _r367_t5.VBar;
        var r367_Arch = _r367_t5.Arch;
        var r367_ExtLineRhsToLhs = _r367_t5.ExtLineRhsToLhs;
        var _r367_t6 = r367_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r367_xn$selectvariant$7Hrq = _r367_t6["select-variant"];
        var r367_xn$SERIFNONE$1aao = 0;
        var r367_xn$SERIFBOTTOM$1aao = 1;
        var r367_xn$SERIFMOTION$1aao = 2;
        var r367_xn$SERIFDUAL$1aao = r367_xn$SERIFBOTTOM$1aao + r367_xn$SERIFMOTION$1aao;
        var r367_CapitalEszetSerifs = function (r370_slab) {
            var _r370_t0, _r370_t1;
            return new r367_xn$Capture$2Lrc8.GlyphProc(function (r372_currentGlyph) {
                var _r372_t0, _r372_t1;
                if (r1_maskBits(r370_slab, r367_xn$SERIFBOTTOM$1aao)) r372_currentGlyph.include(r367_HSerif.lb(r367_SB, 0, r367_SideJut));
                if (r1_maskBits(r370_slab, r367_xn$SERIFMOTION$1aao)) r372_currentGlyph.include(r367_HSerif.lt(r367_SB, r367_CAP, r367_SideJut));
                return void 0;
            });
        };
        var r367_EszetRoundedShape = function (r375_slab) {
            var _r375_t0, _r375_t1;
            return new r367_xn$Capture$2Lrc8.GlyphProc(function (r377_currentGlyph) {
                var _r377_t0, _r377_t1;
                r377_currentGlyph.include(r367_MarkSet.capital());
                var r377_yMiddle = r1_mix(0, r367_CAP, 0.5);
                var r377_yMiddleCap = r1_mix(0, r367_CAP, 0.54);
                var r377_xFinal = Math.max(r1_mix(r367_SB + r367_HSwToV(r367_Stroke), r367_RightSB, 0.1), r1_mix(r367_SB, r367_RightSB, 0.3));
                var r377_xMiddle = Math.max(r377_xFinal, r367_SB + r367_HSwToV(1.2 * r367_Stroke), r367_RightSB - (r377_yMiddle / 2 + r367_HalfStroke));
                var r377_xMiddleBot = Math.max(r377_xMiddle, r377_xFinal + r367_TINY + Math.abs(r367_TanSlope * r367_Stroke));
                r377_currentGlyph.include(r367_dispiro(r367_widths.rhs(), r367_flat(r367_SB, 0, r367_heading(r367_Upward)), r367_curl(r367_SB, Math.max(r367_XH, r367_CAP - r367_ArchDepthA)), r367_Arch.rhs(r367_CAP, new r367_xn$NamedParameterPair$2Lrc9b("blendPost", [])), r367_g4(r367_RightSB + r367_O, r367_CAP - r367_DToothlessRise)));
                r377_currentGlyph.include(r367_ExtLineRhsToLhs(r367_RightSB + r367_O, r367_CAP - r367_DToothlessRise, r377_xMiddle, r377_yMiddleCap + r367_HalfStroke));
                r377_currentGlyph.include(r367_dispiro(r367_widths.rhs(), r367_g4(r377_xMiddle, r377_yMiddleCap + r367_HalfStroke, r367_heading(r367_Rightward)), r367_archv(), r367_g4(r367_RightSB - r367_O * 2, r367_YSmoothMidR(r377_yMiddleCap + r367_HalfStroke, 0, r367_ArchDepthA, r367_ArchDepthB)), r367_arcvh(), r367_flat(r377_xMiddleBot, 0), r367_curl(r377_xFinal, 0, r367_heading(r367_Leftward))));
                r377_currentGlyph.include(r367_CapitalEszetSerifs(r375_slab));
                return void 0;
            });
        };
        var r367_EszetFlatTopShape = function (r384_slab) {
            var _r384_t0, _r384_t1;
            return new r367_xn$Capture$2Lrc8.GlyphProc(function (r386_currentGlyph) {
                var _r386_t0, _r386_t1;
                r386_currentGlyph.include(r367_MarkSet.capital());
                var r386_yMiddle = r1_mix(0, r367_CAP, 0.5);
                var r386_yMiddleCap = r1_mix(0, r367_CAP, 0.54);
                var r386_xFinal = Math.max(r1_mix(r367_SB + r367_HSwToV(r367_Stroke), r367_RightSB, 0.1), r1_mix(r367_SB, r367_RightSB, 0.3));
                var r386_xMiddle = Math.max(r386_xFinal, r367_SB + r367_HSwToV(1.2 * r367_Stroke), r367_RightSB - (r386_yMiddle / 2 + r367_HalfStroke));
                var r386_xMiddleBot = Math.max(r386_xMiddle, r386_xFinal + r367_TINY + Math.abs(r367_TanSlope * r367_Stroke));
                r386_currentGlyph.include(r367_dispiro(r367_widths.rhs(), r367_flat(r367_SB, 0, r367_heading(r367_Upward)), r367_curl(r367_SB, Math.max(r367_XH, r367_CAP - r367_ArchDepthA)), r367_arcvh(), r367_flat(r367_Middle, r367_CAP), r367_curl(r367_RightSB + r367_O, r367_CAP, r367_heading(r367_Rightward))));
                r386_currentGlyph.include(r367_ExtLineRhsToLhs(r367_RightSB + r367_O, r367_CAP - r367_Stroke, r386_xMiddle, r386_yMiddleCap + r367_HalfStroke));
                r386_currentGlyph.include(r367_dispiro(r367_widths.rhs(), r367_g4(r386_xMiddle, r386_yMiddleCap + r367_HalfStroke, r367_heading(r367_Rightward)), r367_archv(), r367_g4(r367_RightSB - r367_O * 2, r367_YSmoothMidR(r386_yMiddleCap + r367_HalfStroke, 0, r367_ArchDepthA, r367_ArchDepthB)), r367_arcvh(), r367_flat(r386_xMiddleBot, 0), r367_curl(r386_xFinal, 0, r367_heading(r367_Leftward))));
                r386_currentGlyph.include(r367_CapitalEszetSerifs(r384_slab));
                return void 0;
            });
        };
        var r367_EszetCornerShape = function (r392_slab) {
            var _r392_t0, _r392_t1;
            return new r367_xn$Capture$2Lrc8.GlyphProc(function (r394_currentGlyph) {
                var _r394_t0, _r394_t1;
                r394_currentGlyph.include(r367_MarkSet.capital());
                var r394_yMiddle = r1_mix(0, r367_CAP, 0.5);
                var r394_yMiddleCap = r1_mix(0, r367_CAP, 0.54);
                var r394_xFinal = Math.max(r1_mix(r367_SB + r367_HSwToV(r367_Stroke), r367_RightSB, 0.1), r1_mix(r367_SB, r367_RightSB, 0.3));
                var r394_xMiddle = Math.max(r394_xFinal, r367_SB + r367_HSwToV(1.2 * r367_Stroke), r367_RightSB - (r394_yMiddle / 2 + r367_HalfStroke));
                var r394_xMiddleBot = Math.max(r394_xMiddle, r394_xFinal + r367_TINY + Math.abs(r367_TanSlope * r367_Stroke));
                r394_currentGlyph.include(r367_union(r367_VBar.l(r367_SB, 0, r367_CAP), r367_HBar.t(r367_SB + 1, r367_RightSB + r367_O, r367_CAP)));
                r394_currentGlyph.include(r367_ExtLineRhsToLhs(r367_RightSB + r367_O, r367_CAP - r367_Stroke, r394_xMiddle, r394_yMiddleCap + r367_HalfStroke));
                r394_currentGlyph.include(r367_dispiro(r367_widths.rhs(), r367_g4(r394_xMiddle, r394_yMiddleCap + r367_HalfStroke, r367_heading(r367_Rightward)), r367_archv(), r367_g4(r367_RightSB - r367_O * 2, r367_YSmoothMidR(r394_yMiddleCap + r367_HalfStroke, 0, r367_ArchDepthA, r367_ArchDepthB)), r367_arcvh(), r367_flat(r394_xMiddleBot, 0), r367_curl(r394_xFinal, 0, r367_heading(r367_Leftward))));
                r394_currentGlyph.include(r367_CapitalEszetSerifs(r392_slab));
                return void 0;
            });
        };
        var r367_CapitalEszetConfig = r1_SuffixCfg.combine(r1_SuffixCfg.weave({
            "rounded": r367_EszetRoundedShape,
            "flatTop": r367_EszetFlatTopShape,
            "corner": r367_EszetCornerShape
        }, function (r400_body) {
            var r400___, _r400_t0, _r400_t1, _r400_t2;
            return {
                "serifless": r367_xn$SERIFNONE$1aao,
                "serifed": (_r400_t0 = r400_body, _r400_t0 === "corner" ? r367_xn$SERIFDUAL$1aao : (r400___ = _r400_t0, r367_xn$SERIFBOTTOM$1aao))
            };
        }), {
            "cornerMotionSerifed": [r367_EszetCornerShape, r367_xn$SERIFMOTION$1aao],
            "cornerBottomSerifed": [r367_EszetCornerShape, r367_xn$SERIFBOTTOM$1aao]
        });
        var _r367_t7 = _r1_t2(r367_CapitalEszetConfig)[Symbol.iterator]();
        var _r367_t8 = void 0;
        while (!(_r367_t8 = _r367_t7.next()).done) {
            _r367_t9 = _r367_t8.value;
            r367_suffix = _r367_t9[0];
            r367_Body = _r367_t9[1][0];
            r367_serif = _r367_t9[1][1];
            _r367_t9[1];
            (function () {
                return r367_xn$GlyphSaveSink$2Lrc4b.save("Eszet." + r367_suffix, null, r367_Body(r367_serif));
            })();
        }
        return r367_xn$selectvariant$7Hrq("Eszet", 7838);
    });
    return void 0;
});


