"use strict";
import * as _s0_t0 from "@iosevka/util";
import * as _s0_t1 from "@iosevka/glyph/relation";
import * as _s0_t2 from "@iosevka/geometry";
import * as _s0_t3 from "@iosevka/geometry/transform";
var _s0_t4;
export {_s0_t4 as apply};
var r1_apply, _r1_t0, _r1_t1, _r1_t2, _r1_t3, _r1_t4, _r1_t5, _r1_t6, _r1_t7;
var _r1_t8 = _s0_t0;
var r1_mix = _r1_t8.mix;
var r1_linreg = _r1_t8.linreg;
var r1_clamp = _r1_t8.clamp;
var r1_fallback = _r1_t8.fallback;
var _r1_t9 = _s0_t1;
var r1_getGrMesh = _r1_t9.getGrMesh;
var r1_AnyCvOrCherryPicking = _r1_t9.AnyCvOrCherryPicking;
var r1_CvDecompose = _r1_t9.CvDecompose;
var r1_Joining = _r1_t9.Joining;
var r1_hashCv = _r1_t9.hashCv;
var r1_IsCompositeOrLigature = _r1_t9.IsCompositeOrLigature;
var r1_NLDAcuteVariant = _r1_t9.NLDAcuteVariant;
var r1_HBSCaronVariant = _r1_t9.HBSCaronVariant;
var _r1_t10 = _s0_t2;
var r1_hashGeometry = _r1_t10.hashGeometry;
var _r1_t11 = _s0_t3;
var r1_Transform = _r1_t11.Transform;
var r1_Map = Map;
var r1_Set = Set;
var r1_xn$GlyphBlocks$2Lrc2b = [];
_s0_t4 = r1_apply = function () {
    var r312_block, _r312_t4, _r312_t6;
    var _r312_t3 = this;
    var _r312_t0 = r1_xn$GlyphBlocks$2Lrc2b;
    var _r312_t1 = _r312_t0.length;
    var _r312_t2 = 0;
    var _r312_t5 = _r312_t2 < _r312_t1;
    while (_r312_t5) {
        _r312_t6 = (r312_block = _r312_t0[_r312_t2], r312_block(_r312_t3), _r312_t2 = _r312_t2 + 1);
        _r312_t5 = _r312_t2 < _r312_t1;
    }
    return _r312_t6;
};
var r1_DECOMPOSABLE = true;
var r1_xn$NONDECOMPOSABLE$9Jrj = false;
var r1_CENTERED = true;
var r1_xn$NOTCENTERED$9Jrj = false;
var r1_xn$ALLOWPROPORTIONAL$1aao = true;
var r1_xn$MONOSPACEONLY$5Frx = false;
r1_xn$GlyphBlocks$2Lrc2b.push(function (r316_xn$Capture_Ext$2Lrc2b) {
    var _r316_t0, _r316_t1;
    r316_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r316_xn$Capture_Ext$2Lrc2b, "Autobuild-Enclosure-Shared", function (r317_xn$Capture$2Lrc8, r317_xn$ExportCapture$2Lrc4b) {
        var r317_applyRelations, _r317_t7, _r317_t8;
        var _r317_t0 = r317_xn$Capture$2Lrc8;
        var r317_xn$GlyphSaveSink$2Lrc4b = _r317_t0["$GlyphSaveSink$"];
        var r317_xn$NamedParameterPair$2Lrc9b = _r317_t0["$NamedParameterPair$"];
        var r317_xn$Exec$2Lrc5 = _r317_t0["$Exec$"];
        var r317_para = _r317_t0.para;
        var _r317_t1 = r317_xn$Capture$2Lrc8.Metrics;
        var r317_CAP = _r317_t1.CAP;
        var _r317_t2 = r317_xn$Capture$2Lrc8.SpiroFns;
        var _r317_t3 = r317_xn$Capture$2Lrc8.SpiroFns;
        var r317_xn$decor$0cao = _r317_t3["decor@"];
        var r317_xn$decor$0cao1 = _r317_t3["decor@@"];
        var r317_xn$decor$0cao11 = _r317_t3["decor@@@"];
        var _r317_t4 = r317_xn$Capture$2Lrc8.BooleFns;
        var _r317_t5 = r317_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var _r317_t6 = r317_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r317_xn$queryglyph$1aao = _r317_t6["query-glyph"];
        var r317_DeriveMeshT = _r317_t6.DeriveMeshT;
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r321_t0, _r321_t1;
            return {
                "CircNameNoCheck": r317_CircNameNoCheck
            };
        });
        var r317_CircNameNoCheck = function (r322_unicode, r322_prefix, r322_parts, r322_suffix) {
            var _r322_t0, _r322_t1;
            var r322_baseName = r322_prefix + "{" + r322_unicode + "}{" + r322_parts.join("}{") + "}";
            return r322_suffix ? r322_baseName + "." + r322_suffix : r322_baseName;
        };
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r324_t0, _r324_t1;
            return {
                "CircName": r317_CircName
            };
        });
        var r317_CircName = function (r325_unicode, r325_prefix, r325_parts, r325_suffix) {
            var _r325_t0, _r325_t1;
            var r325_name = r317_CircNameNoCheck(r325_unicode, r325_prefix, r325_parts, r325_suffix);
            if (r317_xn$queryglyph$1aao(r325_name)) throw new Error("Glyph exists : " + r325_name);
            return r325_name;
        };
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r327_t0, _r327_t1;
            return {
                "EnsureComponentGlyphT": r317_EnsureComponentGlyphT
            };
        });
        var r317_EnsureComponentGlyphT = function (r328_gnPart, r328_fnBuildup) {
            var _r328_t0, _r328_t1;
            var r328_rs = new r1_Set();
            return r317_DeriveMeshT([r328_gnPart], r1_AnyCvOrCherryPicking, function (r329_gns, r329_gr) {
                var _r329_t0, _r329_t1;
                return r328_fnBuildup(r329_gns[0]);
            }, function (r330_gniFrom, r330_gniTo) {
                var _r330_t0, _r330_t1;
                return r317_xn$queryglyph$1aao(r330_gniFrom).tryBecomeMirrorOf(r317_xn$queryglyph$1aao(r330_gniTo), r328_rs);
            });
        };
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r332_t0, _r332_t1;
            return {
                "getGlyphDefaultShift": r317_getGlyphDefaultShift
            };
        });
        var r317_getGlyphDefaultShift = function (r333_bal, r333_baly, r333_g) {
            var _r333_t0, _r333_t1;
            if (r333_g && r333_g.baseAnchors.above && r333_g.baseAnchors.below) if (r333_bal) return r317_CAP / 2 - r1_mix(r333_baly, r1_mix(r333_g.baseAnchors.above.y, r333_g.baseAnchors.below.y, 0.5), r333_bal); else return r317_CAP / 2 - r1_mix(r333_g.baseAnchors.above.y, r333_g.baseAnchors.below.y, 0.5);
            return 0;
        };
        var r317_MapPartNameWithWidthSuffix = function (r334_parts, r334_suffix) {
            var r334_part, r334_partNameWithSuffix, _r334_t3, _r334_t4;
            var r334_results = [];
            var _r334_t0 = r334_parts;
            var _r334_t1 = _r334_t0.length;
            var _r334_t2 = 0;
            while (_r334_t2 < _r334_t1) {
                r334_part = _r334_t0[_r334_t2];
                r334_partNameWithSuffix = r334_suffix ? r334_part + "." + r334_suffix : r334_part;
                if (r317_xn$queryglyph$1aao(r334_partNameWithSuffix)) r334_results.push(r334_partNameWithSuffix); else r334_results.push(r334_part);
                _r334_t2 = _r334_t2 + 1;
            }
            return r334_results;
        };
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r337_t0, _r337_t1;
            return {
                "CollectJobs": r317_CollectJobs
            };
        });
        var r317_CollectJobs = function (r338_globallyDecomposable, r338_centered, r338_allowProportional, r338_prefix, r338_suffix, r338_demands) {
            var r338_demand, _r338_t3, _r338_t4, _r338_t5, _r338_tag6;
            var r338_nonDecomposable = [];
            var r338_decomposableJobs = [];
            var r338_relApplications = [];
            var r338_decomposableRelGlyphs = new r1_Set();
            var _r338_t0 = r338_demands;
            var _r338_t1 = _r338_t0.length;
            var _r338_t2 = 0;
            while (_r338_t2 < _r338_t1) {
                r338_demand = _r338_t0[_r338_t2];
                (function () {
                    var r341_part, r341_g, r341_relatedGlyphs, r341_gr, r341_mesh, r341_fromParts, r341_toParts, r341_gn, _r341_t3, _r341_t4, _r341_t5, _r341_t6, _r341_t7, _r341_t8, _r341_t9, _r341_t10, _r341_t11, _r341_t12, _r341_t13, _r341_t14, _r341_t15, _r341_t16, _r341_t17, _r341_t18, _r341_t19, _r341_t20, _r341_t21, _r341_t22, _r341_t23, _r341_t24, _r341_t25, _r341_tag26;
                    var r341_unicode = r338_demand[0];
                    var r341_origParts = r338_demand[1];
                    var r341_mappedParts = r317_MapPartNameWithWidthSuffix(r341_origParts, r338_suffix);
                    var r341_restInfo = r338_demand.slice(2);
                    var r341_origJobGlyphGn = r317_CircName(r341_unicode, r338_prefix, r341_origParts, r338_suffix);
                    var r341_demandDecomposable = r317_para.enableCvSs && r338_globallyDecomposable;
                    var _r341_t0 = r341_mappedParts;
                    var _r341_t1 = _r341_t0.length;
                    var _r341_t2 = 0;
                    while (_r341_t2 < _r341_t1) {
                        r341_part = _r341_t0[_r341_t2];
                        if (r317_xn$queryglyph$1aao(r341_part)) {
                            r341_g = r317_xn$queryglyph$1aao(r341_part);
                            r341_relatedGlyphs = r1_AnyCvOrCherryPicking.query(r341_g);
                            _r341_t3 = r341_relatedGlyphs;
                            _r341_t4 = _r341_t3.length;
                            _r341_t5 = 0;
                            while (_r341_t5 < _r341_t4) {
                                r341_gr = _r341_t3[_r341_t5];
                                if (r317_xn$queryglyph$1aao(r341_gr.get(r341_g))) {
                                    if (r338_allowProportional && r317_xn$queryglyph$1aao(r341_gr.get(r341_g)).advanceWidth !== r341_g.advanceWidth) r341_demandDecomposable = false;
                                    if (r338_centered && r317_getGlyphDefaultShift(0, 0, r317_xn$queryglyph$1aao(r341_gr.get(r341_g))) !== r317_getGlyphDefaultShift(0, 0, r341_g)) r341_demandDecomposable = false;
                                }
                                _r341_t5 = _r341_t5 + 1;
                            }
                        }
                        _r341_t2 = _r341_t2 + 1;
                    }
                    var r341_jobsOrig = r341_demandDecomposable ? r338_decomposableJobs : r338_nonDecomposable;
                    r341_jobsOrig.push([r341_origJobGlyphGn, r341_unicode, r341_mappedParts].concat(r341_restInfo));
                    if (r341_demandDecomposable) {
                        _r341_t6 = r341_mappedParts;
                        _r341_t7 = _r341_t6.length;
                        _r341_t8 = 0;
                        _r341_t21 = _r341_t8 < _r341_t7;
                        while (_r341_t21) {
                            r341_part = _r341_t6[_r341_t8];
                            r341_mesh = r1_getGrMesh([r341_part], r1_AnyCvOrCherryPicking, r317_xn$queryglyph$1aao);
                            _r341_t9 = r341_mesh;
                            _r341_t10 = _r341_t9.length;
                            _r341_t11 = 0;
                            while (_r341_t11 < _r341_t10) {
                                _r341_t12 = _r341_t9[_r341_t11];
                                r341_gr = _r341_t12[0];
                                r341_fromParts = _r341_t12[1];
                                r341_toParts = _r341_t12[2];
                                _r341_t13 = r341_toParts;
                                _r341_t14 = _r341_t13.length;
                                _r341_t15 = 0;
                                while (_r341_t15 < _r341_t14) {
                                    r341_gn = _r341_t13[_r341_t15];
                                    r338_decomposableRelGlyphs.add(r341_gn);
                                    _r341_t15 = _r341_t15 + 1;
                                }
                                _r341_t11 = _r341_t11 + 1;
                            }
                            _r341_t22 = _r341_t8 = _r341_t8 + 1;
                            _r341_t21 = _r341_t8 < _r341_t7;
                        }
                        _r341_t20 = _r341_t22;
                    } else {
                        r341_mesh = r1_getGrMesh(r341_mappedParts, r1_AnyCvOrCherryPicking, r317_xn$queryglyph$1aao);
                        _r341_t16 = r341_mesh;
                        _r341_t17 = _r341_t16.length;
                        _r341_t18 = 0;
                        _r341_t23 = _r341_t18 < _r341_t17;
                        while (_r341_t23) {
                            _r341_t19 = _r341_t16[_r341_t18];
                            r341_gr = _r341_t19[0];
                            r341_fromParts = _r341_t19[1];
                            r341_toParts = _r341_t19[2];
                            (function () {
                                var r349_fromGn = r317_CircNameNoCheck(r341_unicode, r338_prefix, r341_fromParts, r338_suffix);
                                var r349_toGn = r317_CircName(r341_unicode, r338_prefix, r341_toParts, r338_suffix);
                                r338_nonDecomposable.push([r349_toGn, null, r341_toParts].concat(r341_restInfo));
                                return r338_relApplications.push([r341_gr, r349_fromGn, r349_toGn]);
                            })();
                            _r341_t24 = _r341_t18 = _r341_t18 + 1;
                            _r341_t23 = _r341_t18 < _r341_t17;
                        }
                        _r341_t20 = _r341_t24;
                    }
                    return _r341_t20;
                })();
                _r338_t2 = _r338_t2 + 1;
            }
            return {
                "nonDecomposable": r338_nonDecomposable,
                "decomposableJobs": r338_decomposableJobs,
                "decomposableRelGlyphs": r338_decomposableRelGlyphs,
                "relApplications": r338_relApplications
            };
        };
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r351_t0, _r351_t1;
            return {
                "CreateDerivedFontFromJobs": r317_CreateDerivedFontFromJobs
            };
        });
        var r317_CreateDerivedFontFromJobs = function (r352_aj, r352_restGids, r352_fn) {
            var r352_gn, r352_gnf, r352_unicode, r352_parts, _r352_t6, _r352_t7, _r352_t8, _r352_t9, _r352_t13, _r352_t14, _r352_t15, _r352_t16, _r352_t17, _r352_t18;
            var _r352_t0 = r352_aj;
            var r352_nonDecomposable = _r352_t0.nonDecomposable;
            var r352_decomposableJobs = _r352_t0.decomposableJobs;
            var r352_decomposableRelGlyphs = _r352_t0.decomposableRelGlyphs;
            var r352_pendingGlyphs = new r1_Set(r352_restGids);
            var _r352_t1 = r352_decomposableRelGlyphs[Symbol.iterator]();
            var _r352_t2 = void 0;
            while (!(_r352_t2 = _r352_t1.next()).done) {
                r352_gn = _r352_t2.value;
                r352_pendingGlyphs.add(r352_gn);
            }
            var _r352_t3 = r352_nonDecomposable;
            var _r352_t4 = _r352_t3.length;
            var _r352_t5 = 0;
            while (_r352_t5 < _r352_t4) {
                _r352_t6 = _r352_t3[_r352_t5];
                r352_gnf = _r352_t6[0];
                r352_unicode = _r352_t6[1];
                r352_parts = _r352_t6[2];
                _r352_t7 = r352_parts;
                _r352_t8 = _r352_t7.length;
                _r352_t9 = 0;
                while (_r352_t9 < _r352_t8) {
                    r352_gn = _r352_t7[_r352_t9];
                    r352_pendingGlyphs.add(r352_gn);
                    _r352_t9 = _r352_t9 + 1;
                }
                _r352_t5 = _r352_t5 + 1;
            }
            var _r352_t10 = r352_decomposableJobs;
            var _r352_t11 = _r352_t10.length;
            var _r352_t12 = 0;
            while (_r352_t12 < _r352_t11) {
                _r352_t13 = _r352_t10[_r352_t12];
                r352_gnf = _r352_t13[0];
                r352_unicode = _r352_t13[1];
                r352_parts = _r352_t13[2];
                _r352_t14 = r352_parts;
                _r352_t15 = _r352_t14.length;
                _r352_t16 = 0;
                while (_r352_t16 < _r352_t15) {
                    r352_gn = _r352_t14[_r352_t16];
                    r352_pendingGlyphs.add(r352_gn);
                    _r352_t16 = _r352_t16 + 1;
                }
                _r352_t12 = _r352_t12 + 1;
            }
            return r352_fn(Array.from(r352_pendingGlyphs));
        };
        r317_xn$ExportCapture$2Lrc4b(function () {
            var _r359_t0, _r359_t1;
            return {
                "applyRelations": r317_applyRelations
            };
        });
        return r317_applyRelations = function (r360_relApplications) {
            var r360_gr, r360_f, r360_t, _r360_t3, _r360_t4, _r360_t5, _r360_t7;
            var r360_rs = new r1_Set();
            var _r360_t0 = r360_relApplications;
            var _r360_t1 = _r360_t0.length;
            var _r360_t2 = 0;
            var _r360_t6 = _r360_t2 < _r360_t1;
            while (_r360_t6) {
                _r360_t7 = (_r360_t3 = _r360_t0[_r360_t2], r360_gr = _r360_t3[0], r360_f = _r360_t3[1], r360_t = _r360_t3[2], r317_xn$queryglyph$1aao(r360_f) ? (r360_gr.set(r317_xn$queryglyph$1aao(r360_f), r360_t), r317_xn$queryglyph$1aao(r360_t) ? r317_xn$queryglyph$1aao(r360_t).tryBecomeMirrorOf(r317_xn$queryglyph$1aao(r360_f), r360_rs) : void 0) : void 0, _r360_t2 = _r360_t2 + 1);
                _r360_t6 = _r360_t2 < _r360_t1;
            }
            return _r360_t7;
        };
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r364_xn$Capture_Ext$2Lrc2b) {
    var _r364_t0, _r364_t1;
    r364_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r364_xn$Capture_Ext$2Lrc2b, "AutoBuild-Enclosure", function (r365_xn$Capture$2Lrc8, r365_xn$ExportCapture$2Lrc4b) {
        var _r365_t10, _r365_t11, _r365_t12, _r365_tag13, _r365_t14, _r365_tag15, _r365_t16, _r365_tag17, _r365_t18, _r365_tag19, _r365_t20, _r365_tag21, _r365_t22, _r365_tag23, _r365_t24, _r365_tag25, _r365_t26, _r365_tag27, _r365_t28, _r365_tag29, _r365_t30, _r365_tag31, _r365_t32, _r365_tag33, _r365_t34, _r365_tag35, _r365_t36, _r365_tag37, _r365_t38, _r365_tag39, _r365_t40, _r365_tag41, _r365_t42, _r365_tag43, _r365_t44, _r365_tag45, _r365_t46, _r365_tag47, _r365_t48, _r365_tag49, _r365_t50, _r365_tag51, _r365_t52, _r365_tag53, _r365_t54, _r365_tag55, _r365_t56, _r365_tag57, _r365_t58, _r365_tag59, _r365_t60, _r365_tag61, _r365_t62, _r365_tag63, _r365_t64, _r365_tag65, _r365_t66, _r365_tag67, _r365_t68, _r365_tag69, _r365_t70, _r365_tag71, _r365_t72, _r365_tag73, _r365_t74, _r365_tag75, _r365_t76, _r365_tag77, _r365_t78, _r365_tag79, _r365_t80, _r365_tag81, _r365_t82, _r365_tag83, _r365_t84, _r365_tag85, _r365_t86, _r365_tag87;
        var _r365_t0 = r365_xn$Capture$2Lrc8;
        var r365_xn$GlyphSaveSink$2Lrc4b = _r365_t0["$GlyphSaveSink$"];
        var r365_xn$NamedParameterPair$2Lrc9b = _r365_t0["$NamedParameterPair$"];
        var r365_xn$Exec$2Lrc5 = _r365_t0["$Exec$"];
        var r365_para = _r365_t0.para;
        var r365_glyphStore = _r365_t0.glyphStore;
        var r365_AS_BASE = _r365_t0.AS_BASE;
        var r365_ALSO_METRICS = _r365_t0.ALSO_METRICS;
        var r365_fontMetrics = _r365_t0.fontMetrics;
        var _r365_t1 = r365_xn$Capture$2Lrc8.Metrics;
        var r365_UPM = _r365_t1.UPM;
        var r365_HalfUPM = _r365_t1.HalfUPM;
        var r365_Width = _r365_t1.Width;
        var r365_SB = _r365_t1.SB;
        var r365_CAP = _r365_t1.CAP;
        var r365_XH = _r365_t1.XH;
        var r365_SymbolMid = _r365_t1.SymbolMid;
        var r365_ParenTop = _r365_t1.ParenTop;
        var r365_ParenBot = _r365_t1.ParenBot;
        var r365_Scale = _r365_t1.Scale;
        var r365_Translate = _r365_t1.Translate;
        var r365_TanSlope = _r365_t1.TanSlope;
        var r365_HSwToV = _r365_t1.HSwToV;
        var r365_Upward = _r365_t1.Upward;
        var r365_Downward = _r365_t1.Downward;
        var r365_Rightward = _r365_t1.Rightward;
        var r365_Leftward = _r365_t1.Leftward;
        var r365_O = _r365_t1.O;
        var r365_SmallArchDepth = _r365_t1.SmallArchDepth;
        var r365_AdviceStroke = _r365_t1.AdviceStroke;
        var r365_Stroke = _r365_t1.Stroke;
        var r365_WideWidth0 = _r365_t1.WideWidth0;
        var r365_WideWidth1 = _r365_t1.WideWidth1;
        var r365_WideWidth2 = _r365_t1.WideWidth2;
        var r365_WideWidth4 = _r365_t1.WideWidth4;
        var r365_RightSB = _r365_t1.RightSB;
        var r365_ArchDepthAOf = _r365_t1.ArchDepthAOf;
        var r365_ArchDepthBOf = _r365_t1.ArchDepthBOf;
        var _r365_t2 = r365_xn$Capture$2Lrc8.SpiroFns;
        var r365_g4 = _r365_t2.g4;
        var r365_corner = _r365_t2.corner;
        var r365_flat = _r365_t2.flat;
        var r365_curl = _r365_t2.curl;
        var r365_close = _r365_t2.close;
        var r365_widths = _r365_t2.widths;
        var r365_heading = _r365_t2.heading;
        var r365_archv = _r365_t2.archv;
        var r365_arcvh = _r365_t2.arcvh;
        var r365_dispiro = _r365_t2.dispiro;
        var r365_xn$spirooutline$1aao = _r365_t2["spiro-outline"];
        var _r365_t3 = r365_xn$Capture$2Lrc8.SpiroFns;
        var r365_xn$decor$0cao = _r365_t3["decor@"];
        var r365_xn$decor$0cao1 = _r365_t3["decor@@"];
        var r365_xn$decor$0cao11 = _r365_t3["decor@@@"];
        var _r365_t4 = r365_xn$Capture$2Lrc8.BooleFns;
        var r365_union = _r365_t4.union;
        var r365_intersection = _r365_t4.intersection;
        var r365_difference = _r365_t4.difference;
        var _r365_t5 = r365_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r365_Rect = _r365_t5.Rect;
        var r365_Ring = _r365_t5.Ring;
        var r365_OShape = _r365_t5.OShape;
        var r365_OShapeOutline = _r365_t5.OShapeOutline;
        var r365_HBar = _r365_t5.HBar;
        var r365_VBar = _r365_t5.VBar;
        var r365_Ungizmo = _r365_t5.Ungizmo;
        var r365_Regizmo = _r365_t5.Regizmo;
        var r365_ForceUpright = _r365_t5.ForceUpright;
        var r365_xn$withtransform$5sIl = _r365_t5["with-transform"];
        var r365_xn$withoutlined$5sIl = _r365_t5["with-outlined"];
        var r365_xn$removeholes$7Hrq = _r365_t5["remove-holes"];
        var r365_radicalize = _r365_t5.radicalize;
        var r365_ExtLineCenter = _r365_t5.ExtLineCenter;
        var _r365_t6 = r365_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r365_xn$queryglyph$1aao = _r365_t6["query-glyph"];
        var r365_xn$referglyph$1aao = _r365_t6["refer-glyph"];
        var _r365_t7 = r365_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Recursive-Build"].resolve();
        var r365_Fork = _r365_t7.Fork;
        var r365_Miniature = _r365_t7.Miniature;
        var r365_MiniatureParaT = _r365_t7.MiniatureParaT;
        var _r365_t8 = r365_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Autobuild-Enclosure-Shared"].resolve();
        var r365_CircNameNoCheck = _r365_t8.CircNameNoCheck;
        var r365_CircName = _r365_t8.CircName;
        var r365_CollectJobs = _r365_t8.CollectJobs;
        var r365_EnsureComponentGlyphT = _r365_t8.EnsureComponentGlyphT;
        var r365_CreateDerivedFontFromJobs = _r365_t8.CreateDerivedFontFromJobs;
        var r365_applyRelations = _r365_t8.applyRelations;
        var r365_getGlyphDefaultShift = _r365_t8.getGlyphDefaultShift;
        var _r365_t9 = r365_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["CommonShapes-Polygon"].resolve();
        var r365_Polygon = _r365_t9.Polygon;
        var r365_circleWidthClasses = [["NWID", r365_Width, 0.12], ["WWID", r365_WideWidth0, 0.08]];
        var r365_AdjustDigitCount = function (r371_digits, r371_width) {
            var _r371_t0, _r371_t1;
            return Math.max(1, r371_digits * r365_Width / r371_width);
        };
        var r365_EnclosureStrokeScale = function (r372_dscale, r372_digits, r372_width) {
            var _r372_t0, _r372_t1;
            return r372_dscale / Math.pow(r365_AdjustDigitCount(r372_digits, r372_width), 0.66);
        };
        var r365_enclosureInnerPartActualWidth = new r1_Map();
        var r365_GlyphNameInnerOf = function (r374_gniPrefix, r374_subGlyph, r374_isMultiPart, r374_actualWidth, r374_accumulatedTfm) {
            var _r374_t0, _r374_t1;
            var r374_nameParts = [r374_isMultiPart, r374_actualWidth, r374_accumulatedTfm, r1_hashGeometry(r374_subGlyph.geometry), r1_hashCv(r374_subGlyph)];
            return ".ci." + r374_gniPrefix + "/" + r374_nameParts.join("/");
        };
        var r365_EnsureInnerSubGlyphImpl = function () {
            var _r376_t5;
            var _r376_t6 = arguments;
            var r376_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r376_t6, 0);
            var _r376_t0 = [];
            var _r376_t1 = 0;
            while (_r376_t1 < r376_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r376_xn$flexarguments$2Lrc7uIe5[_r376_t1] instanceof r365_xn$NamedParameterPair$2Lrc9b)) _r376_t0.push(r376_xn$flexarguments$2Lrc7uIe5[_r376_t1]);
                _r376_t1 = _r376_t1 + 1;
            }
            var _r376_t2 = r376_xn$flexarguments$2Lrc7uIe5;
            var _r376_t3 = _r376_t2.length;
            var _r376_t4 = 0;
            while (_r376_t4 < _r376_t3) {
                _r376_t1 = _r376_t2[_r376_t4];
                if (_r376_t1 && _r376_t1 instanceof r365_xn$NamedParameterPair$2Lrc9b && _r376_t1.left === "inners") r376_inners = _r376_t1.right;
                if (_r376_t1 && _r376_t1 instanceof r365_xn$NamedParameterPair$2Lrc9b && _r376_t1.left === "markClass") r376_markClass = _r376_t1.right;
                if (_r376_t1 && _r376_t1 instanceof r365_xn$NamedParameterPair$2Lrc9b && _r376_t1.left === "miniatureFont") r376_miniatureFont = _r376_t1.right;
                if (_r376_t1 && _r376_t1 instanceof r365_xn$NamedParameterPair$2Lrc9b && _r376_t1.left === "isMultiPart") r376_isMultiPart = _r376_t1.right;
                if (_r376_t1 && _r376_t1 instanceof r365_xn$NamedParameterPair$2Lrc9b && _r376_t1.left === "actualWidth") r376_actualWidth = _r376_t1.right;
                if (_r376_t1 && _r376_t1 instanceof r365_xn$NamedParameterPair$2Lrc9b && _r376_t1.left === "accumulatedTfm") r376_accumulatedTfm = _r376_t1.right;
                _r376_t4 = _r376_t4 + 1;
            }
            var r376_inners = r1_fallback(r376_inners, _r376_t0[0]);
            var r376_markClass = r1_fallback(r376_markClass, _r376_t0[1]);
            var r376_miniatureFont = r1_fallback(r376_miniatureFont, _r376_t0[2]);
            var r376_isMultiPart = r1_fallback(r376_isMultiPart, _r376_t0[3]);
            var r376_actualWidth = r1_fallback(r376_actualWidth, _r376_t0[4]);
            var r376_accumulatedTfm = r1_fallback(r376_accumulatedTfm, _r376_t0[5]);
            return function (r380_gidPart) {
                var _r380_t0, _r380_t1;
                var r380_subGlyph = r376_miniatureFont.queryByNameEnsured(r380_gidPart);
                var r380_gniPart = r365_GlyphNameInnerOf(r376_inners.gniPrefix, r380_subGlyph, r376_isMultiPart, r376_actualWidth, r376_accumulatedTfm);
                if (r365_xn$queryglyph$1aao(r380_gniPart)) return r380_gniPart;
                r365_enclosureInnerPartActualWidth.set(r380_gniPart, r376_actualWidth);
                r365_xn$GlyphSaveSink$2Lrc4b.save(r380_gniPart, null, new r365_xn$Capture$2Lrc8.GlyphProc(function (r383_currentGlyph) {
                    var _r383_t0, _r383_t1;
                    r383_currentGlyph.setWidth(0);
                    r383_currentGlyph.setMarkAnchor("compositeInner", 0, 0);
                    r383_currentGlyph.include(r376_inners.buildInnerShape(r380_subGlyph));
                    r383_currentGlyph.include(r376_accumulatedTfm);
                    r383_currentGlyph.include(r376_inners.addAnchors(r376_isMultiPart, r376_markClass, r376_actualWidth));
                    return void 0;
                }));
                return r380_gniPart;
            };
        };
        var r365_EnsureInnerSubGlyphSeq = function () {
            var r390_gidPart, _r390_t12, _r390_t14, _r390_tag15, _r390_t16, _r390_tag17;
            var _r390_t13 = arguments;
            var r390_xn$flexarguments$2Lrc7uIe5 = [].slice.call(_r390_t13, 0);
            var _r390_t0 = [];
            var _r390_t1 = 0;
            while (_r390_t1 < r390_xn$flexarguments$2Lrc7uIe5.length) {
                if (!(r390_xn$flexarguments$2Lrc7uIe5[_r390_t1] instanceof r365_xn$NamedParameterPair$2Lrc9b)) _r390_t0.push(r390_xn$flexarguments$2Lrc7uIe5[_r390_t1]);
                _r390_t1 = _r390_t1 + 1;
            }
            var _r390_t2 = r390_xn$flexarguments$2Lrc7uIe5;
            var _r390_t3 = _r390_t2.length;
            var _r390_t4 = 0;
            while (_r390_t4 < _r390_t3) {
                _r390_t1 = _r390_t2[_r390_t4];
                if (_r390_t1 && _r390_t1 instanceof r365_xn$NamedParameterPair$2Lrc9b && _r390_t1.left === "inners") r390_inners = _r390_t1.right;
                if (_r390_t1 && _r390_t1 instanceof r365_xn$NamedParameterPair$2Lrc9b && _r390_t1.left === "markClass") r390_markClass = _r390_t1.right;
                if (_r390_t1 && _r390_t1 instanceof r365_xn$NamedParameterPair$2Lrc9b && _r390_t1.left === "miniatureFont") r390_miniatureFont = _r390_t1.right;
                if (_r390_t1 && _r390_t1 instanceof r365_xn$NamedParameterPair$2Lrc9b && _r390_t1.left === "job") r390_job = _r390_t1.right;
                if (_r390_t1 && _r390_t1 instanceof r365_xn$NamedParameterPair$2Lrc9b && _r390_t1.left === "dimens") r390_dimens = _r390_t1.right;
                if (_r390_t1 && _r390_t1 instanceof r365_xn$NamedParameterPair$2Lrc9b && _r390_t1.left === "xCompress") r390_xCompress = _r390_t1.right;
                if (_r390_t1 && _r390_t1 instanceof r365_xn$NamedParameterPair$2Lrc9b && _r390_t1.left === "yCompress") r390_yCompress = _r390_t1.right;
                if (_r390_t1 && _r390_t1 instanceof r365_xn$NamedParameterPair$2Lrc9b && _r390_t1.left === "kExtraYShift") r390_kExtraYShift = _r390_t1.right;
                _r390_t4 = _r390_t4 + 1;
            }
            var r390_inners = r1_fallback(r390_inners, _r390_t0[0]);
            var r390_markClass = r1_fallback(r390_markClass, _r390_t0[1]);
            var r390_miniatureFont = r1_fallback(r390_miniatureFont, _r390_t0[2]);
            var r390_job = r1_fallback(r390_job, _r390_t0[3]);
            var r390_dimens = r1_fallback(r390_dimens, _r390_t0[4]);
            var r390_xCompress = r1_fallback(r390_xCompress, _r390_t0[5]);
            var r390_yCompress = r1_fallback(r390_yCompress, _r390_t0[6]);
            var r390_kExtraYShift = r1_fallback(r390_kExtraYShift, _r390_t0[7]);
            var _r390_t5 = r390_job;
            var r390_gn = _r390_t5[0];
            var r390_unicode = _r390_t5[1];
            var r390_parts = _r390_t5[2];
            var r390_w = _r390_t5[3];
            var r390_bal = _r390_t5[4];
            var r390_baly = _r390_t5[5];
            var _r390_t6 = r390_dimens;
            var r390_width = _r390_t6.width;
            var r390_mockInnerWidth = _r390_t6.mockInnerWidth;
            var r390_dscale = _r390_t6.dscale;
            var r390_totalWidth = 0;
            var r390_firstDerivedGyph = null;
            var _r390_t7 = r390_parts;
            var _r390_t8 = _r390_t7.length;
            var _r390_t9 = 0;
            while (_r390_t9 < _r390_t8) {
                r390_gidPart = _r390_t7[_r390_t9];
                (function () {
                    var r397_derivedGlyph = r390_miniatureFont.queryByNameEnsured(r390_gidPart);
                    if (!r390_firstDerivedGyph) r390_firstDerivedGyph = r397_derivedGlyph;
                    return r390_totalWidth = r390_totalWidth + r397_derivedGlyph.advanceWidth;
                })();
                _r390_t9 = _r390_t9 + 1;
            }
            var r390_xCompressInternal = r390_inners.getXScalar(r390_parts.length, r390_markClass, r390_mockInnerWidth, r390_totalWidth);
            r390_totalWidth = Math.min(r390_mockInnerWidth, r390_totalWidth);
            var r390_shift = r390_inners.getShift(r390_bal, r390_baly, r390_firstDerivedGyph);
            var r390_accumulatedTfm = r1_Transform.Combine(r390_firstDerivedGyph.gizmo.inverse(), r365_Scale(r390_dscale * r390_xCompressInternal * r390_xCompress, r390_dscale * r390_yCompress), r365_Translate(0, r390_dscale * r390_shift + r365_SymbolMid + (r390_kExtraYShift - 0.5) * r365_CAP * r390_dscale), r390_firstDerivedGyph.gizmo);
            var r390_finalParts = [];
            var _r390_t10 = 0;
            var _r390_t11 = r390_parts.length;
            var r390_partIndex = _r390_t10;
            while (r390_partIndex < _r390_t11) {
                (function () {
                    var r400_gidPart = r390_parts[r390_partIndex];
                    var r400_actualWidth = r390_miniatureFont.queryByNameEnsured(r400_gidPart).advanceWidth * r390_dscale * r390_xCompress * r390_xCompressInternal;
                    return r390_finalParts.push(r365_EnsureComponentGlyphT(r400_gidPart, r365_EnsureInnerSubGlyphImpl(new r365_xn$NamedParameterPair$2Lrc9b("markClass", r390_markClass), new r365_xn$NamedParameterPair$2Lrc9b("inners", r390_inners), new r365_xn$NamedParameterPair$2Lrc9b("miniatureFont", r390_miniatureFont), new r365_xn$NamedParameterPair$2Lrc9b("isMultiPart", r390_parts.length > 1), new r365_xn$NamedParameterPair$2Lrc9b("actualWidth", r400_actualWidth), new r365_xn$NamedParameterPair$2Lrc9b("accumulatedTfm", r390_accumulatedTfm))));
                })();
                r390_partIndex = r390_partIndex + 1;
            }
            return r390_finalParts;
        };
        var r365_EnclosureInnerImpl = function (r407_dimens, r407_finalParts) {
            var _r407_t0, _r407_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r409_currentGlyph) {
                var r409_gniPart, _r409_t7, _r409_t8;
                var _r409_t0 = r407_dimens;
                var r409_width = _r409_t0.width;
                var r409_totalInnerWidth = 0;
                var _r409_t1 = r407_finalParts;
                var _r409_t2 = _r409_t1.length;
                var _r409_t3 = 0;
                while (_r409_t3 < _r409_t2) {
                    r409_gniPart = _r409_t1[_r409_t3];
                    r409_totalInnerWidth = r409_totalInnerWidth + (r365_enclosureInnerPartActualWidth.get(r409_gniPart) || 0);
                    _r409_t3 = _r409_t3 + 1;
                }
                var r409_x = 0.5 * r409_width - 0.5 * r409_totalInnerWidth;
                var _r409_t4 = r407_finalParts;
                var _r409_t5 = _r409_t4.length;
                var _r409_t6 = 0;
                while (_r409_t6 < _r409_t5) {
                    r409_gniPart = _r409_t4[_r409_t6];
                    r409_currentGlyph.include(r365_xn$withtransform$5sIl(r365_Translate(r409_x, 0), r365_xn$referglyph$1aao(r409_gniPart)));
                    r409_x = r409_x + (r365_enclosureInnerPartActualWidth.get(r409_gniPart) || 0);
                    _r409_t6 = _r409_t6 + 1;
                }
                return void 0;
            });
        };
        var r365_EnclosureInnerWithScale = function (r415_dimens, r415_inners, r415_miniatureFont, r415_xs, r415_ys, r415_job) {
            var _r415_t0, _r415_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r417_currentGlyph) {
                var _r417_t2, _r417_t3;
                var _r417_t0 = r415_job;
                var r417_gn = _r417_t0[0];
                var r417_unicode = _r417_t0[1];
                var r417_parts = _r417_t0[2];
                var r417_w = _r417_t0[3];
                var r417_bal = _r417_t0[4];
                var r417_baly = _r417_t0[5];
                var _r417_t1 = r415_dimens;
                var r417_width = _r417_t1.width;
                var r417_finalParts = r365_EnsureInnerSubGlyphSeq(new r365_xn$NamedParameterPair$2Lrc9b("markClass", "enclosureInner"), new r365_xn$NamedParameterPair$2Lrc9b("inners", r415_inners), new r365_xn$NamedParameterPair$2Lrc9b("miniatureFont", r415_miniatureFont), new r365_xn$NamedParameterPair$2Lrc9b("job", r415_job), new r365_xn$NamedParameterPair$2Lrc9b("dimens", r415_dimens), new r365_xn$NamedParameterPair$2Lrc9b("xCompress", r415_xs), new r365_xn$NamedParameterPair$2Lrc9b("yCompress", r415_ys), new r365_xn$NamedParameterPair$2Lrc9b("kExtraYShift", 0.5 * (1 - r415_ys)));
                r417_currentGlyph.include(r365_xn$GlyphSaveSink$2Lrc4b.save(null, null, r365_EnclosureInnerImpl(r415_dimens, r417_finalParts)));
                return r417_finalParts;
            });
        };
        var r365_EnclosureInner = function (r428_dimens, r428_inners, r428_miniatureFont, r428_job) {
            var _r428_t0, _r428_t1;
            return r365_EnclosureInnerWithScale(r428_dimens, r428_inners, r428_miniatureFont, 1, 1, r428_job);
        };
        var r365_TwoRowEnclosureInner = function (r429_dimens, r429_inners, r429_miniatureFont, r429_job) {
            var _r429_t0, _r429_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r431_currentGlyph) {
                var _r431_t2, _r431_t3;
                var _r431_t0 = r429_job;
                var r431_gn = _r431_t0[0];
                var r431_unicode = _r431_t0[1];
                var r431_parts = _r431_t0[2];
                var r431_w = _r431_t0[3];
                var r431_bal = _r431_t0[4];
                var r431_baly = _r431_t0[5];
                var _r431_t1 = r429_dimens;
                var r431_width = _r431_t1.width;
                var r431_jobFirstHalf = [r431_gn, r431_unicode, r431_parts.slice(0, r431_parts.length / 2), r431_w, r431_bal, r431_baly];
                var r431_jobSecondHalf = [r431_gn, r431_unicode, r431_parts.slice(r431_parts.length / 2), r431_w, r431_bal, r431_baly];
                var r431_finalPartsFirstHalf = r365_EnsureInnerSubGlyphSeq(new r365_xn$NamedParameterPair$2Lrc9b("markClass", "enclosureInnerFirstHalf"), new r365_xn$NamedParameterPair$2Lrc9b("inners", r429_inners), new r365_xn$NamedParameterPair$2Lrc9b("miniatureFont", r429_miniatureFont), new r365_xn$NamedParameterPair$2Lrc9b("job", r431_jobFirstHalf), new r365_xn$NamedParameterPair$2Lrc9b("dimens", r429_dimens), new r365_xn$NamedParameterPair$2Lrc9b("xCompress", 1), new r365_xn$NamedParameterPair$2Lrc9b("yCompress", 0.55), new r365_xn$NamedParameterPair$2Lrc9b("kExtraYShift", +0.55));
                var r431_finalPartsSecondHalf = r365_EnsureInnerSubGlyphSeq(new r365_xn$NamedParameterPair$2Lrc9b("markClass", "enclosureInnerSecondHalf"), new r365_xn$NamedParameterPair$2Lrc9b("inners", r429_inners), new r365_xn$NamedParameterPair$2Lrc9b("miniatureFont", r429_miniatureFont), new r365_xn$NamedParameterPair$2Lrc9b("job", r431_jobSecondHalf), new r365_xn$NamedParameterPair$2Lrc9b("dimens", r429_dimens), new r365_xn$NamedParameterPair$2Lrc9b("xCompress", 1), new r365_xn$NamedParameterPair$2Lrc9b("yCompress", 0.55), new r365_xn$NamedParameterPair$2Lrc9b("kExtraYShift", -0.1));
                return [].concat(r431_finalPartsFirstHalf, r431_finalPartsSecondHalf);
            });
        };
        var r365_PlayingCardInner = function (r448_dimens, r448_inners, r448_miniatureFont, r448_job) {
            var _r448_t0, _r448_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r450_currentGlyph) {
                var _r450_t2, _r450_t3;
                var _r450_t0 = r448_job;
                var r450_gn = _r450_t0[0];
                var r450_unicode = _r450_t0[1];
                var r450_parts = _r450_t0[2];
                var r450_w = _r450_t0[3];
                var r450_bal = _r450_t0[4];
                var r450_baly = _r450_t0[5];
                var _r450_t1 = r448_dimens;
                var r450_width = _r450_t1.width;
                var r450_jobFirstHalf = [r450_gn, r450_unicode, r450_parts.slice(0, r450_parts.length / 2), r450_w, r450_bal, r450_baly];
                var r450_jobSecondHalf = [r450_gn, r450_unicode, r450_parts.slice(r450_parts.length / 2), r450_w, r450_bal, r450_baly];
                var r450_finalPartsFirstHalf = r365_EnsureInnerSubGlyphSeq(new r365_xn$NamedParameterPair$2Lrc9b("markClass", "enclosureInnerFirstHalf"), new r365_xn$NamedParameterPair$2Lrc9b("inners", r448_inners), new r365_xn$NamedParameterPair$2Lrc9b("miniatureFont", r448_miniatureFont), new r365_xn$NamedParameterPair$2Lrc9b("job", r450_jobFirstHalf), new r365_xn$NamedParameterPair$2Lrc9b("dimens", r448_dimens), new r365_xn$NamedParameterPair$2Lrc9b("xCompress", 1), new r365_xn$NamedParameterPair$2Lrc9b("yCompress", 0.6), new r365_xn$NamedParameterPair$2Lrc9b("kExtraYShift", +0.55));
                var r450_finalPartsSecondHalf = r365_EnsureInnerSubGlyphSeq(new r365_xn$NamedParameterPair$2Lrc9b("markClass", "enclosureInnerSecondHalf"), new r365_xn$NamedParameterPair$2Lrc9b("inners", r448_inners), new r365_xn$NamedParameterPair$2Lrc9b("miniatureFont", r448_miniatureFont), new r365_xn$NamedParameterPair$2Lrc9b("job", r450_jobSecondHalf), new r365_xn$NamedParameterPair$2Lrc9b("dimens", r448_dimens), new r365_xn$NamedParameterPair$2Lrc9b("xCompress", 1), new r365_xn$NamedParameterPair$2Lrc9b("yCompress", 0.6), new r365_xn$NamedParameterPair$2Lrc9b("kExtraYShift", -0.15));
                return [].concat(r450_finalPartsFirstHalf, r450_finalPartsSecondHalf);
            });
        };
        var r365_CircCrowd = function (r467_digits, r467_width) {
            var _r467_t0, _r467_t1;
            return 2 + 2 * Math.pow(r365_AdjustDigitCount(r467_digits, r467_width), 2 / 3) * Math.max(1, r365_HalfUPM / r365_Width);
        };
        var r365_CircScale = function (r469_digits, r469_width) {
            var _r469_t0, _r469_t1;
            return 0.65 / Math.pow(r365_AdjustDigitCount(r469_digits, r469_width), 1 / 2);
        };
        var r365_CircleDimens = function (r471_digits, r471_w, r471_m) {
            var _r471_t0, _r471_t1;
            var r471_width = r1_fallback(r471_w, r365_Width);
            var r471_dscale = r1_linreg(r365_HalfUPM, 0.55, r365_UPM, 0.6, r471_width);
            var r471_spatt = r1_linreg(r365_HalfUPM, 0.22, r365_UPM, 0.27, r471_width) * (r365_Width / r365_HalfUPM);
            var r471_sw0 = r365_EnclosureStrokeScale(r471_dscale, r471_digits, r471_width) * r365_AdviceStroke(r365_CircCrowd(r471_digits, r471_width)) / r365_CircScale(r471_digits, r471_width);
            var r471_sw = Math.max(r471_sw0, r1_fallback(r471_m, 0));
            var r471_top = r365_SymbolMid + r365_CAP * r471_dscale / 2 + r365_CAP * r471_spatt;
            var r471_bot = r365_SymbolMid - r365_CAP * r471_dscale / 2 - r365_CAP * r471_spatt;
            var r471_mosaicLeft = 0;
            var r471_mosaicRight = r471_width;
            var r471_mosaicBot = r365_fontMetrics.os2.sTypoDescender;
            var r471_mosaicTop = r365_fontMetrics.os2.sTypoAscender;
            var r471_left = Math.max(r365_SB + r365_O * 3, Math.min(r471_width / 2 - (r471_top - r471_bot) / 2, r471_width / 2 - r365_CAP / 2 * r471_dscale - r471_sw * 2.5));
            var r471_right = Math.min(r471_width - r365_SB - r365_O * 3, Math.max(r471_width / 2 + (r471_top - r471_bot) / 2, r471_width / 2 + r365_CAP / 2 * r471_dscale + r471_sw * 2.5));
            var r471_mockInnerWidth = r471_width + 2 * (r365_Stroke - r471_sw) * r471_dscale;
            var r471_archDepthA = r365_ArchDepthAOf(r365_SmallArchDepth * (r471_right - r471_left) / (r365_RightSB - r365_SB), r471_width);
            var r471_archDepthB = r365_ArchDepthBOf(r365_SmallArchDepth * (r471_right - r471_left) / (r365_RightSB - r365_SB), r471_width);
            return {
                "width": r471_width,
                "mockInnerWidth": r471_mockInnerWidth,
                "dscale": r471_dscale,
                "sw0": r471_sw0,
                "sw": r471_sw,
                "top": r471_top,
                "bot": r471_bot,
                "left": r471_left,
                "right": r471_right,
                "mosaicTop": r471_mosaicTop,
                "mosaicBot": r471_mosaicBot,
                "mosaicLeft": r471_mosaicLeft,
                "mosaicRight": r471_mosaicRight,
                "archDepthA": r471_archDepthA,
                "archDepthB": r471_archDepthB
            };
        };
        var r365_StandardInners = {
            "gniPrefix": "",
            "buildInnerShape": function (r472_subGlyph) {
                var _r472_t0, _r472_t1;
                return r472_subGlyph;
            },
            "getXScalar": function (r473_nParts, r473_markClass, r473_mockInnerWidth, r473_totalWidth) {
                var _r473_t0, _r473_t1;
                return Math.min(1, r473_mockInnerWidth / r473_totalWidth);
            },
            "getShift": r365_getGlyphDefaultShift,
            "getPara": function (r474_pp, r474_digits, r474_rows, r474_width) {
                var _r474_t0, _r474_t1;
                return r365_MiniatureParaT(r474_pp, new r365_xn$NamedParameterPair$2Lrc9b("crowd", r365_CircCrowd(r474_digits / r474_rows, r474_width)), new r365_xn$NamedParameterPair$2Lrc9b("scale", r365_CircScale(r474_digits / r474_rows, r474_width)), new r365_xn$NamedParameterPair$2Lrc9b("sbscale", 1), new r365_xn$NamedParameterPair$2Lrc9b("mono", r474_digits > 1), new r365_xn$NamedParameterPair$2Lrc9b("mono2", r474_digits > 1));
            },
            "addAnchors": function (r480_fMultiPart, r480_markClass, r480_actualWidth) {
                var _r480_t0, _r480_t1;
                return new r365_xn$Capture$2Lrc8.GlyphProc(function (r482_currentGlyph) {
                    var _r482_t0, _r482_t1;
                    if (r480_fMultiPart) r482_currentGlyph.setMarkAnchor(r480_markClass, 0, 0, r480_actualWidth, 0); else r482_currentGlyph.setMarkAnchor(r480_markClass, r480_actualWidth / 2, 0);
                    return void 0;
                });
            }
        };
        var r365_PlayingCardInners = {
            "gniPrefix": "pk",
            "buildInnerShape": r365_StandardInners.buildInnerShape,
            "getPara": r365_StandardInners.getPara,
            "getShift": function () {
                var _r485_t0, _r485_t1;
                return 0;
            },
            "getXScalar": function (r486_nParts, r486_markClass) {
                var _r486_t0, _r486_t1, _r486_t2;
                if (r486_nParts > 1 && r486_markClass === "enclosureInnerFirstHalf") return 0.5; else return 0.6;
            },
            "addAnchors": function (r487_fMultiPart, r487_markClass, r487_actualWidth) {
                var _r487_t0, _r487_t1;
                return new r365_xn$Capture$2Lrc8.GlyphProc(function (r489_currentGlyph) {
                    var _r489_t0, _r489_t1;
                    if (r487_markClass === "enclosureInnerFirstHalf") r489_currentGlyph.setMarkAnchor(r487_markClass, 0, 0, r487_actualWidth, 0); else r489_currentGlyph.setMarkAnchor(r487_markClass, r487_actualWidth, 0, 0, 0);
                    return void 0;
                });
            }
        };
        var r365_DecomposableInsetInners = {
            "gniPrefix": "d",
            "getShift": r365_StandardInners.getShift,
            "addAnchors": r365_StandardInners.addAnchors,
            "getXScalar": r365_StandardInners.getXScalar,
            "buildInnerShape": function (r492_subGlyph) {
                var _r492_t0, _r492_t1;
                return r365_difference(r365_Rect(+1.05 * r365_CAP - r365_O, -0.05 * r365_CAP + r365_O, r365_O, r365_Width - r365_O), r492_subGlyph);
            },
            "getPara": function (r493_pp, r493_digits, r493_rows, r493_width) {
                var _r493_t0, _r493_t1;
                return r365_MiniatureParaT(r493_pp, new r365_xn$NamedParameterPair$2Lrc9b("crowd", r365_CircCrowd(r493_digits / r493_rows, r493_width)), new r365_xn$NamedParameterPair$2Lrc9b("scale", r365_CircScale(r493_digits / r493_rows, r493_width)), new r365_xn$NamedParameterPair$2Lrc9b("sbscale", 1), new r365_xn$NamedParameterPair$2Lrc9b("mono", true), new r365_xn$NamedParameterPair$2Lrc9b("mono2", true));
            }
        };
        var r365_ItalicInners = {
            "gniPrefix": "i",
            "getShift": r365_StandardInners.getShift,
            "buildInnerShape": r365_StandardInners.buildInnerShape,
            "addAnchors": r365_StandardInners.addAnchors,
            "getXScalar": r365_StandardInners.getXScalar,
            "getPara": function (r499_pp, r499_digits, r499_rows, r499_width) {
                var _r499_t0, _r499_t1;
                var r499_pp1 = r499_pp.createFork(function (r500_a) {
                    var _r500_t0, _r500_t1;
                    r500_a.shape.slope = "italic";
                    return r500_a.shape.slopeAngle = r1_mix(r365_para.slopeAngle || 0, 15, 95 / 150);
                });
                return r365_StandardInners.getPara(r499_pp1, r499_digits, r499_rows, r499_width);
            }
        };
        var r365_TriangleInners = {
            "gniPrefix": "tr",
            "getShift": function () {
                var _r501_t0, _r501_t1;
                return -r365_CAP / 4;
            },
            "buildInnerShape": r365_StandardInners.buildInnerShape,
            "addAnchors": r365_StandardInners.addAnchors,
            "getXScalar": r365_StandardInners.getXScalar,
            "getPara": r365_StandardInners.getPara
        };
        var r365_EnclosureT = function (r502_prefix, r502_builder, r502_inners, r502_digits, r502_rows, r502_demands, r502_fnEnclosure) {
            var r502_suffix, r502_ww, r502_gap, _r502_t3, _r502_t4, _r502_t5, _r502_t7, _r502_t8, _r502_tag9;
            var _r502_t0 = r365_circleWidthClasses;
            var _r502_t1 = _r502_t0.length;
            var _r502_t2 = 0;
            var _r502_t6 = _r502_t2 < _r502_t1;
            while (_r502_t6) {
                _r502_t3 = _r502_t0[_r502_t2];
                r502_suffix = _r502_t3[0];
                r502_ww = _r502_t3[1];
                r502_gap = _r502_t3[2];
                (function () {
                    var r505_job;
                    var r505_allowProportional = r502_digits > 1 ? r1_xn$MONOSPACEONLY$5Frx : r1_xn$ALLOWPROPORTIONAL$1aao;
                    var r505_jobs = r365_CollectJobs(r502_builder.decomposable, r1_CENTERED, r505_allowProportional, r502_prefix + r502_digits, r502_suffix, r502_demands);
                    var r505_forkedPara = r502_inners.getPara(r365_para, r502_digits, r502_rows, r502_ww);
                    var r505_miniatureFont = r365_CreateDerivedFontFromJobs(r505_jobs, [], function (r506_gs) {
                        var _r506_t0, _r506_t1;
                        return r365_Fork(r506_gs, r505_forkedPara);
                    });
                    var r505_gnEnclosure = r365_CircName(null, r502_prefix + r502_digits + ".enclosure", [], r502_suffix);
                    var r505_buildImpl = function (r507_job, r507_decomposable) {
                        var _r507_t1, _r507_t2;
                        var _r507_t0 = r507_job;
                        var r507_gn = _r507_t0[0];
                        var r507_unicode = _r507_t0[1];
                        var r507_parts = _r507_t0[2];
                        var r507_w = _r507_t0[3];
                        var r507_bal = _r507_t0[4];
                        var r507_baly = _r507_t0[5];
                        if (r365_xn$queryglyph$1aao(r507_gn)) return void 0;
                        return r365_xn$GlyphSaveSink$2Lrc4b.save(r507_gn, r507_w === r502_ww ? r507_unicode : null, new r365_xn$Capture$2Lrc8.GlyphProc(function (r510_currentGlyph) {
                            var _r510_t0, _r510_t1;
                            var r510_dimens = r365_CircleDimens(r502_digits, r502_ww);
                            r510_currentGlyph.setWidth(r510_dimens.width);
                            r510_currentGlyph.include(r502_builder.buildGlyph(r510_dimens, r502_inners, r505_miniatureFont, r507_decomposable, r507_job, r505_gnEnclosure));
                            return void 0;
                        }));
                    };
                    if (!r365_xn$queryglyph$1aao(r505_gnEnclosure)) r365_xn$GlyphSaveSink$2Lrc4b.save(r505_gnEnclosure, null, r502_fnEnclosure(r502_digits, r502_ww, r502_gap));
                    var _r505_t0 = r505_jobs.decomposableJobs;
                    var _r505_t1 = _r505_t0.length;
                    var _r505_t2 = 0;
                    while (_r505_t2 < _r505_t1) {
                        r505_job = _r505_t0[_r505_t2];
                        r505_buildImpl(r505_job, true);
                        _r505_t2 = _r505_t2 + 1;
                    }
                    var _r505_t3 = r505_jobs.nonDecomposable;
                    var _r505_t4 = _r505_t3.length;
                    var _r505_t5 = 0;
                    while (_r505_t5 < _r505_t4) {
                        r505_job = _r505_t3[_r505_t5];
                        r505_buildImpl(r505_job, false);
                        _r505_t5 = _r505_t5 + 1;
                    }
                    return r365_applyRelations(r505_jobs.relApplications);
                })();
                _r502_t7 = _r502_t2 = _r502_t2 + 1;
                _r502_t6 = _r502_t2 < _r502_t1;
            }
            return _r502_t7;
        };
        var r365_CircledBuilder = {
            "decomposable": true,
            "buildGlyph": function (r516_dimens, r516_inners, r516_miniatureFont, r516_decomp, r516_job, r516_gnEnclosure) {
                var _r516_t0, _r516_t1;
                return new r365_xn$Capture$2Lrc8.GlyphProc(function (r518_currentGlyph) {
                    var _r518_t0, _r518_t1;
                    r518_currentGlyph.include(r365_xn$referglyph$1aao(r516_gnEnclosure));
                    var r518_parts = r518_currentGlyph.include(r365_EnclosureInner(r516_dimens, r516_inners, r516_miniatureFont, r516_job));
                    if (r516_decomp) r1_CvDecompose.set(r518_currentGlyph, [r516_gnEnclosure].concat(r518_parts));
                    return void 0;
                });
            }
        };
        var r365_DiamondBuilder = {
            "decomposable": true,
            "buildGlyph": function (r521_dimens, r521_inners, r521_miniatureFont, r521_decomp, r521_job, r521_gnEnclosure) {
                var _r521_t0, _r521_t1;
                return new r365_xn$Capture$2Lrc8.GlyphProc(function (r523_currentGlyph) {
                    var _r523_t0, _r523_t1;
                    r523_currentGlyph.include(r365_xn$referglyph$1aao(r521_gnEnclosure));
                    var r523_s = Math.min(1, 0.75 * (r521_dimens.width / r365_Width));
                    var r523_parts = r523_currentGlyph.include(r365_EnclosureInnerWithScale(r521_dimens, r521_inners, r521_miniatureFont, r523_s, r523_s, r521_job));
                    if (r521_decomp) r1_CvDecompose.set(r523_currentGlyph, [r521_gnEnclosure].concat(r523_parts));
                    return void 0;
                });
            }
        };
        var r365_DecomposableInsetBuilder = {
            "decomposable": true,
            "buildGlyph": function (r526_dimens, r526_inners, r526_miniatureFont, r526_decomp, r526_job, r526_gnEnclosure) {
                var _r526_t0, _r526_t1;
                return new r365_xn$Capture$2Lrc8.GlyphProc(function (r528_currentGlyph) {
                    var _r528_t0, _r528_t1;
                    r528_currentGlyph.include(r365_CircledBuilder.buildGlyph(r526_dimens, r526_inners, r526_miniatureFont, r526_decomp, r526_job, r526_gnEnclosure));
                    r528_currentGlyph.include(r365_radicalize());
                    return void 0;
                });
            }
        };
        var r365_TwoRowBoxedBuilder = {
            "decomposable": true,
            "buildGlyph": function (r531_dimens, r531_inners, r531_miniatureFont, r531_decomp, r531_job, r531_gnEnclosure) {
                var _r531_t0, _r531_t1;
                return new r365_xn$Capture$2Lrc8.GlyphProc(function (r533_currentGlyph) {
                    var r533_part, _r533_t3, _r533_t4;
                    r533_currentGlyph.include(r365_xn$referglyph$1aao(r531_gnEnclosure), r365_AS_BASE, r365_ALSO_METRICS);
                    var r533_parts = r533_currentGlyph.include(r365_TwoRowEnclosureInner(r531_dimens, r531_inners, r531_miniatureFont, r531_job));
                    var _r533_t0 = r533_parts;
                    var _r533_t1 = _r533_t0.length;
                    var _r533_t2 = 0;
                    while (_r533_t2 < _r533_t1) {
                        r533_part = _r533_t0[_r533_t2];
                        r533_currentGlyph.include(r365_xn$referglyph$1aao(r533_part));
                        _r533_t2 = _r533_t2 + 1;
                    }
                    if (r531_decomp) r1_CvDecompose.set(r533_currentGlyph, [r531_gnEnclosure].concat(r533_parts));
                    return void 0;
                });
            }
        };
        var r365_PlayingCardBuilder = {
            "decomposable": true,
            "buildGlyph": function (r539_dimens, r539_inners, r539_miniatureFont, r539_decomp, r539_job, r539_gnEnclosure) {
                var _r539_t0, _r539_t1;
                return new r365_xn$Capture$2Lrc8.GlyphProc(function (r541_currentGlyph) {
                    var r541_part, _r541_t3, _r541_t4;
                    r541_currentGlyph.include(r365_xn$referglyph$1aao(r539_gnEnclosure), r365_AS_BASE, r365_ALSO_METRICS);
                    var r541_parts = r541_currentGlyph.include(r365_PlayingCardInner(r539_dimens, r539_inners, r539_miniatureFont, r539_job));
                    var _r541_t0 = r541_parts;
                    var _r541_t1 = _r541_t0.length;
                    var _r541_t2 = 0;
                    while (_r541_t2 < _r541_t1) {
                        r541_part = _r541_t0[_r541_t2];
                        r541_currentGlyph.include(r365_xn$referglyph$1aao(r541_part));
                        _r541_t2 = _r541_t2 + 1;
                    }
                    if (r539_decomp) r1_CvDecompose.set(r541_currentGlyph, [r539_gnEnclosure].concat(r541_parts));
                    return void 0;
                });
            }
        };
        var r365_InsetBuilder = {
            "decomposable": false,
            "buildGlyph": function (r547_dimens, r547_inners, r547_miniatureFont, r547_decomp, r547_job, r547_gnEnclosure) {
                var _r547_t0, _r547_t1;
                return r365_difference(r365_xn$referglyph$1aao(r547_gnEnclosure), r365_EnclosureInner(r547_dimens, r547_inners, r547_miniatureFont, r547_job));
            }
        };
        var r365_InsetWithGapBuilder = {
            "decomposable": false,
            "buildGlyph": function (r548_dimens, r548_inners, r548_miniatureFont, r548_decomp, r548_job, r548_gnEnclosure) {
                var _r548_t1, _r548_t2;
                var _r548_t0 = r548_dimens;
                var r548_top = _r548_t0.top;
                var r548_bot = _r548_t0.bot;
                var r548_left = _r548_t0.left;
                var r548_right = _r548_t0.right;
                var r548_gap = Math.max(r365_AdviceStroke(6), r365_Width * 0.08);
                var r548_inner = function () {
                    var _r549_t0, _r549_t1;
                    return r365_EnclosureInner(r548_dimens, r548_inners, r548_miniatureFont, r548_job);
                };
                return r365_difference(r365_intersection(r365_Rect(r548_top, r548_bot, r548_left, r548_right), r365_union(r365_xn$referglyph$1aao(r548_gnEnclosure), r365_xn$removeholes$7Hrq(r548_inner()), r365_xn$withoutlined$5sIl(r548_gap, r548_inner()))), r548_inner());
            }
        };
        var r365_AddEnclosureMark = function (r550_digits, r550_dimens) {
            var _r550_t0, _r550_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r552_currentGlyph) {
                var _r552_t1, _r552_t2;
                var _r552_t0 = r550_dimens;
                var r552_width = _r552_t0.width;
                var r552_dscale = _r552_t0.dscale;
                var r552_mockInnerWidth = _r552_t0.mockInnerWidth;
                if (r550_digits > 1) r552_currentGlyph.setBaseAnchor("enclosureInner", 0.5 * r552_width - 0.5 * r552_dscale * Math.min(r365_Width * r550_digits, r552_mockInnerWidth), 0); else r552_currentGlyph.setBaseAnchor("enclosureInner", 0.5 * r552_width, 0);
                return void 0;
            });
        };
        var r365_createCircledGlyphs = function (r555_digits, r555_demands) {
            var _r555_t0, _r555_t1;
            return r365_EnclosureT("circle", r365_CircledBuilder, r365_StandardInners, r555_digits, 1, r555_demands, r365_CircleEnclosureShape);
        };
        var r365_createBackslashCircledGlyphs = function (r556_digits, r556_demands) {
            var _r556_t0, _r556_t1;
            return r365_EnclosureT("circle-slashed", r365_CircledBuilder, r365_StandardInners, r556_digits, 1, r556_demands, r365_BackslashCircleEnclosureShape);
        };
        var r365_createItalicCircledGlyphs = function (r557_digits, r557_demands) {
            var _r557_t0, _r557_t1;
            return r365_EnclosureT("circle-italic", r365_CircledBuilder, r365_ItalicInners, r557_digits, 1, r557_demands, r365_CircleEnclosureShape);
        };
        var r365_CircleEnclosureShape = function (r558_digits, r558_ww, r558_gap) {
            var _r558_t0, _r558_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r560_currentGlyph) {
                var _r560_t1, _r560_t2;
                var _r560_t0 = r365_CircleDimens(r558_digits, r558_ww);
                var r560_width = _r560_t0.width;
                var r560_sw = _r560_t0.sw;
                var r560_top = _r560_t0.top;
                var r560_bot = _r560_t0.bot;
                var r560_left = _r560_t0.left;
                var r560_right = _r560_t0.right;
                var r560_archDepthA = _r560_t0.archDepthA;
                var r560_archDepthB = _r560_t0.archDepthB;
                r560_currentGlyph.setWidth(r560_width);
                r560_currentGlyph.include(r365_OShape(r560_top, r560_bot, r560_left, r560_right, r560_sw, r560_archDepthA, r560_archDepthB));
                r560_currentGlyph.include(r365_AddEnclosureMark(r558_digits, r365_CircleDimens(r558_digits, r558_ww)));
                return void 0;
            });
        };
        var r365_BackslashCircleEnclosureShape = function (r564_digits, r564_ww, r564_gap) {
            var _r564_t0, _r564_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r566_currentGlyph) {
                var _r566_t1, _r566_t2;
                r566_currentGlyph.include(r365_CircleEnclosureShape(r564_digits, r564_ww, r564_gap));
                var _r566_t0 = r365_CircleDimens(r564_digits, r564_ww);
                var r566_width = _r566_t0.width;
                var r566_sw = _r566_t0.sw;
                var r566_top = _r566_t0.top;
                var r566_bot = _r566_t0.bot;
                var r566_left = _r566_t0.left;
                var r566_right = _r566_t0.right;
                var r566_archDepthA = _r566_t0.archDepthA;
                var r566_archDepthB = _r566_t0.archDepthB;
                r566_currentGlyph.include(r365_intersection(r365_OShapeOutline(r566_top, r566_bot, r566_left, r566_right, r566_sw, r566_archDepthA, r566_archDepthB), r365_dispiro(r365_flat(0, r1_mix(r566_bot, r566_top, 0.77), r365_widths.center(r566_sw)), r365_curl(r566_width, r1_mix(r566_bot, r566_top, 1 - 0.77)))));
                return void 0;
            });
        };
        var r365_createBoxedGlyphs = function (r569_digits, r569_demands) {
            var _r569_t0, _r569_t1;
            return r365_EnclosureT("boxed", r365_CircledBuilder, r365_StandardInners, r569_digits, 1, r569_demands, r365_BoxEnclosureShape);
        };
        var r365_BoxEnclosureShape = function (r570_digits, r570_ww, r570_gap) {
            var _r570_t0, _r570_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r572_currentGlyph) {
                var _r572_t1, _r572_t2;
                var _r572_t0 = r365_CircleDimens(r570_digits, r570_ww);
                var r572_width = _r572_t0.width;
                var r572_sw = _r572_t0.sw;
                var r572_top = _r572_t0.top;
                var r572_bot = _r572_t0.bot;
                var r572_left = _r572_t0.left;
                var r572_right = _r572_t0.right;
                r572_currentGlyph.setWidth(r572_width);
                r572_currentGlyph.include(r365_union(r365_HBar.t(r572_left, r572_right, r572_top, r572_sw), r365_HBar.b(r572_left, r572_right, r572_bot, r572_sw), r365_VBar.l(r572_left, r572_bot, r572_top, r572_sw), r365_VBar.r(r572_right, r572_bot, r572_top, r572_sw)));
                r572_currentGlyph.include(r365_AddEnclosureMark(r570_digits, r365_CircleDimens(r570_digits, r570_ww)));
                return void 0;
            });
        };
        var r365_createTwoRowBoxedGlyphs = function (r576_digits, r576_demands) {
            var _r576_t0, _r576_t1;
            return r365_EnclosureT("twoRowBoxed", r365_TwoRowBoxedBuilder, r365_StandardInners, r576_digits, 2, r576_demands, r365_TwoRowBoxEnclosureShape);
        };
        var r365_TwoRowBoxEnclosureShape = function (r577_digits, r577_ww, r577_gap) {
            var _r577_t0, _r577_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r579_currentGlyph) {
                var _r579_t1, _r579_t2;
                var _r579_t0 = r365_CircleDimens(r577_digits, r577_ww);
                var r579_width = _r579_t0.width;
                var r579_sw = _r579_t0.sw;
                var r579_top = _r579_t0.top;
                var r579_bot = _r579_t0.bot;
                var r579_left = _r579_t0.left;
                var r579_right = _r579_t0.right;
                r579_currentGlyph.setWidth(r579_width);
                r579_currentGlyph.include(r365_union(r365_HBar.t(r579_left, r579_right, r579_top, r579_sw), r365_HBar.b(r579_left, r579_right, r579_bot, r579_sw), r365_VBar.l(r579_left, r579_bot, r579_top, r579_sw), r365_VBar.r(r579_right, r579_bot, r579_top, r579_sw)));
                r579_currentGlyph.include(r365_AddEnclosureMarkTwoLine(r577_digits, r365_CircleDimens(r577_digits, r577_ww)));
                return void 0;
            });
        };
        var r365_AddEnclosureMarkTwoLine = function (r583_digits, r583_dimens) {
            var _r583_t0, _r583_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r585_currentGlyph) {
                var _r585_t1, _r585_t2;
                var _r585_t0 = r583_dimens;
                var r585_width = _r585_t0.width;
                var r585_dscale = _r585_t0.dscale;
                var r585_mockInnerWidth = _r585_t0.mockInnerWidth;
                r585_currentGlyph.setBaseAnchor("enclosureInnerFirstHalf", 0.5 * r585_width - 0.5 * r585_dscale * Math.min(r365_Width * r583_digits, r585_mockInnerWidth), 0);
                r585_currentGlyph.setBaseAnchor("enclosureInnerSecondHalf", 0.5 * r585_width - 0.5 * r585_dscale * Math.min(r365_Width * r583_digits, r585_mockInnerWidth), 0);
                return void 0;
            });
        };
        var r365_createAribSpeedSignGlyphs = function (r588_digits, r588_demands) {
            var _r588_t0, _r588_t1;
            return r365_EnclosureT("aribSpeedSign", r365_CircledBuilder, r365_StandardInners, r588_digits, 1, r588_demands, r365_AribSpeedSignEnclosureShape);
        };
        var r365_AribSpeedSignEnclosureShape = function (r589_digits, r589_ww, r589_gap) {
            var _r589_t0, _r589_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r591_currentGlyph) {
                var _r591_t1, _r591_t2;
                var _r591_t0 = r365_CircleDimens(r589_digits, r589_ww);
                var r591_width = _r591_t0.width;
                var r591_sw = _r591_t0.sw;
                var r591_top = _r591_t0.top;
                var r591_bot = _r591_t0.bot;
                var r591_left = _r591_t0.left;
                var r591_right = _r591_t0.right;
                r591_currentGlyph.setWidth(r591_width);
                var r591_f = r365_AdviceStroke(8);
                r591_currentGlyph.include(r365_difference(r365_Rect(r591_top, r591_bot, r591_left, r591_right), r365_Ring(r591_top - r591_f, r591_bot + r591_f, r591_left + r591_f, r591_right - r591_f)));
                r591_currentGlyph.include(r365_AddEnclosureMark(r589_digits, r365_CircleDimens(r589_digits, r589_ww)));
                return void 0;
            });
        };
        var r365_createDiamondGlyphs = function (r595_digits, r595_demands) {
            var _r595_t0, _r595_t1;
            return r365_EnclosureT("diamond", r365_DiamondBuilder, r365_StandardInners, r595_digits, 1, r595_demands, r365_DiamondEnclosureShape);
        };
        var r365_DiamondEnclosureShape = function (r596_digits, r596_ww, r596_gap) {
            var _r596_t0, _r596_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r598_currentGlyph) {
                var _r598_t1, _r598_t2;
                var _r598_t0 = r365_CircleDimens(r596_digits, r596_ww);
                var r598_width = _r598_t0.width;
                var r598_sw = _r598_t0.sw;
                var r598_top = _r598_t0.top;
                var r598_bot = _r598_t0.bot;
                var r598_left = _r598_t0.left;
                var r598_right = _r598_t0.right;
                var r598_swAdj = r598_sw * r365_AdviceStroke(3) / r365_Stroke;
                r598_currentGlyph.setWidth(r598_width);
                r598_currentGlyph.include(r365_Polygon["inset-bordered"](r598_swAdj, [r365_corner(r598_left + r365_O, r1_mix(r598_bot, r598_top, 0.5)), r365_corner(r1_mix(r598_left, r598_right, 0.5), r598_bot + r365_O), r365_corner(r598_right - r365_O, r1_mix(r598_bot, r598_top, 0.5)), r365_corner(r1_mix(r598_left, r598_right, 0.5), r598_top - r365_O)]));
                r598_currentGlyph.include(r365_AddEnclosureMark(r596_digits, r365_CircleDimens(r596_digits, r596_ww)));
                return void 0;
            });
        };
        var r365_createPlayingCardGlyphs = function (r602_digits, r602_demands) {
            var _r602_t0, _r602_t1;
            return r365_EnclosureT("playingCard", r365_PlayingCardBuilder, r365_PlayingCardInners, r602_digits, 2, r602_demands, r365_PlayingCardEnclosure.Shape);
        };
        var r365_createTrumpCardGlyphs = function (r603_digits, r603_demands) {
            var _r603_t0, _r603_t1;
            return r365_EnclosureT("trumpCard", r365_CircledBuilder, r365_StandardInners, r603_digits, 1, r603_demands, r365_PlayingCardEnclosure.TrumpShape);
        };
        var r365_createPlayingCardBackGlyphs = function (r604_digits, r604_demands) {
            var _r604_t0, _r604_t1;
            return r365_EnclosureT("playingCardBack", r365_InsetBuilder, r365_StandardInners, r604_digits, 1, r604_demands, r365_PlayingCardEnclosure.BackShape);
        };
        var r365_PlayingCardEnclosure = (function () {
            var r607_Shape, r607_TrumpShape, r607_BackShape;
            var r607_exports = {};
            var r607_Gap = function (r614_dimens) {
                var _r614_t1, _r614_t2;
                var _r614_t0 = r614_dimens;
                var r614_left = _r614_t0.left;
                var r614_right = _r614_t0.right;
                var r614_sw = _r614_t0.sw;
                return Math.max((r614_right - r614_left) / 16, r614_sw / 2);
            };
            var r607_CornerRadius = function (r615_dimens) {
                var _r615_t1, _r615_t2;
                var _r615_t0 = r615_dimens;
                var r615_sw = _r615_t0.sw;
                var r615_left = _r615_t0.left;
                var r615_right = _r615_t0.right;
                return 1.5 * r615_sw + r607_Gap(r615_dimens);
            };
            var r607_BorderShape = function (r616_dimens, r616_kSw) {
                var _r616_t0, _r616_t1;
                return new r365_xn$Capture$2Lrc8.GlyphProc(function (r618_currentGlyph) {
                    var _r618_t1, _r618_t2;
                    var _r618_t0 = r616_dimens;
                    var r618_width = _r618_t0.width;
                    var r618_sw = _r618_t0.sw;
                    var r618_top = _r618_t0.top;
                    var r618_bot = _r618_t0.bot;
                    var r618_left = _r618_t0.left;
                    var r618_right = _r618_t0.right;
                    var r618_r = r607_CornerRadius(r616_dimens);
                    r618_currentGlyph.include(r365_dispiro(r365_widths.rhs(r616_kSw * r618_sw), r365_curl(r618_right - r618_r, r618_top, r365_heading(r365_Rightward)), r365_archv(), r365_flat(r618_right, r618_top - r618_r, r365_heading(r365_Downward)), r365_curl(r618_right, r618_bot + r618_r, r365_heading(r365_Downward)), r365_arcvh(), r365_flat(r618_right - r618_r, r618_bot, r365_heading(r365_Leftward)), r365_curl(r618_left + r618_r, r618_bot, r365_heading(r365_Leftward)), r365_archv(), r365_flat(r618_left, r618_bot + r618_r, r365_heading(r365_Upward)), r365_curl(r618_left, r618_top - r618_r, r365_heading(r365_Upward)), r365_arcvh(), r365_flat(r618_left + r618_r, r618_top, r365_heading(r365_Rightward)), r365_close()));
                    return void 0;
                });
            };
            var r607_BackFillShape = function (r620_dimens) {
                var _r620_t0, _r620_t1;
                return new r365_xn$Capture$2Lrc8.GlyphProc(function (r622_currentGlyph) {
                    var _r622_t1, _r622_t2;
                    var _r622_t0 = r620_dimens;
                    var r622_width = _r622_t0.width;
                    var r622_sw = _r622_t0.sw;
                    var r622_top = _r622_t0.top;
                    var r622_bot = _r622_t0.bot;
                    var r622_left = _r622_t0.left;
                    var r622_right = _r622_t0.right;
                    var r622_gap = r607_Gap(r620_dimens);
                    var r622_rD = r607_CornerRadius(r620_dimens) - r622_sw - r622_gap;
                    var r622_topD = r622_top - r622_sw - r622_gap;
                    var r622_botD = r622_bot + r622_sw + r622_gap;
                    var r622_leftD = r622_left + r622_sw + r622_gap;
                    var r622_rightD = r622_right - r622_sw - r622_gap;
                    r622_currentGlyph.include(r365_xn$spirooutline$1aao(r365_widths.rhs(r622_sw), r365_curl(r622_rightD - r622_rD, r622_topD, r365_heading(r365_Rightward)), r365_archv(), r365_flat(r622_rightD, r622_topD - r622_rD, r365_heading(r365_Downward)), r365_curl(r622_rightD, r622_botD + r622_rD, r365_heading(r365_Downward)), r365_arcvh(), r365_flat(r622_rightD - r622_rD, r622_botD, r365_heading(r365_Leftward)), r365_curl(r622_leftD + r622_rD, r622_botD, r365_heading(r365_Leftward)), r365_archv(), r365_flat(r622_leftD, r622_botD + r622_rD, r365_heading(r365_Upward)), r365_curl(r622_leftD, r622_topD - r622_rD, r365_heading(r365_Upward)), r365_arcvh(), r365_flat(r622_leftD + r622_rD, r622_topD, r365_heading(r365_Rightward)), r365_close()));
                    return void 0;
                });
            };
            var r607_TwoRowMarks = function (r624_dimens) {
                var _r624_t0, _r624_t1;
                return new r365_xn$Capture$2Lrc8.GlyphProc(function (r626_currentGlyph) {
                    var _r626_t1, _r626_t2;
                    var _r626_t0 = r624_dimens;
                    var r626_left = _r626_t0.left;
                    var r626_right = _r626_t0.right;
                    var r626_sw = _r626_t0.sw;
                    var r626_gap = r607_Gap(r624_dimens);
                    r626_currentGlyph.setBaseAnchor("enclosureInnerFirstHalf", r626_left + r626_sw + r626_gap, 0);
                    r626_currentGlyph.setBaseAnchor("enclosureInnerSecondHalf", r626_right - r626_sw - r626_gap, 0);
                    return void 0;
                });
            };
            r607_exports.Shape = r607_Shape = function (r630_digits, r630_ww) {
                var _r630_t0, _r630_t1;
                return new r365_xn$Capture$2Lrc8.GlyphProc(function (r632_currentGlyph) {
                    var _r632_t0, _r632_t1;
                    var r632_dimens = r365_CircleDimens(Math.max(r630_digits, 3), r630_ww);
                    r632_currentGlyph.setWidth(r632_dimens.width);
                    r632_currentGlyph.include(r607_BorderShape(r632_dimens, 1));
                    r632_currentGlyph.include(r607_TwoRowMarks(r632_dimens));
                    return void 0;
                });
            };
            r607_exports.TrumpShape = r607_TrumpShape = function (r637_digits, r637_ww) {
                var _r637_t0, _r637_t1;
                return new r365_xn$Capture$2Lrc8.GlyphProc(function (r639_currentGlyph) {
                    var _r639_t0, _r639_t1;
                    var r639_dimens = r365_CircleDimens(Math.max(r637_digits, 3), r637_ww);
                    r639_currentGlyph.setWidth(r639_dimens.width);
                    r639_currentGlyph.include(r607_BorderShape(r639_dimens, 1));
                    r639_currentGlyph.include(r365_AddEnclosureMark(r637_digits, r365_CircleDimens(r637_digits, r637_ww)));
                    return void 0;
                });
            };
            r607_exports.BackShape = r607_BackShape = function (r644_digits, r644_ww) {
                var _r644_t0, _r644_t1;
                return new r365_xn$Capture$2Lrc8.GlyphProc(function (r646_currentGlyph) {
                    var _r646_t0, _r646_t1;
                    var r646_dimens = r365_CircleDimens(Math.max(r644_digits, 3), r644_ww);
                    r646_currentGlyph.setWidth(r646_dimens.width);
                    r646_currentGlyph.include(r607_BorderShape(r646_dimens, 0.5));
                    r646_currentGlyph.include(r607_BackFillShape(r646_dimens));
                    r646_currentGlyph.include(r365_AddEnclosureMark(r644_digits, r365_CircleDimens(r644_digits, r644_ww)));
                    return void 0;
                });
            };
            return r607_exports;
        })();
        var r365_createDashedBoxedGlyphs = function (r651_digits, r651_demands) {
            var _r651_t0, _r651_t1;
            return r365_EnclosureT("dashed-boxed", r365_CircledBuilder, r365_StandardInners, r651_digits, 1, r651_demands, r365_DashedBoxEnclosureShape);
        };
        var r365_DashedBoxEnclosureShape = function (r652_digits, r652_ww, r652_cap) {
            var _r652_t0, _r652_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r654_currentGlyph) {
                var _r654_t1, _r654_t2;
                var _r654_t0 = r365_CircleDimens(r652_digits, r652_ww);
                var r654_width = _r654_t0.width;
                var r654_sw = _r654_t0.sw;
                var r654_top = _r654_t0.top;
                var r654_bot = _r654_t0.bot;
                var r654_left = _r654_t0.left;
                var r654_right = _r654_t0.right;
                r654_currentGlyph.setWidth(r654_width);
                r654_currentGlyph.include(r365_difference(r365_union(r365_HBar.t(r654_left, r654_right, r654_top, r654_sw), r365_HBar.b(r654_left, r654_right, r654_bot, r654_sw), r365_VBar.l(r654_left, r654_bot, r654_top, r654_sw), r365_VBar.r(r654_right, r654_bot, r654_top, r654_sw)), r365_union(r365_VBar.m(r1_mix(r654_left, r654_right, 0.25), r654_bot, r654_top, r654_sw), r365_VBar.m(r1_mix(r654_left, r654_right, 0.5), r654_bot, r654_top, r654_sw), r365_VBar.m(r1_mix(r654_left, r654_right, 0.75), r654_bot, r654_top, r654_sw), r365_HBar.m(r654_left, r654_right, r1_mix(r654_bot, r654_top, 0.25), r654_sw), r365_HBar.m(r654_left, r654_right, r1_mix(r654_bot, r654_top, 0.5), r654_sw), r365_HBar.m(r654_left, r654_right, r1_mix(r654_bot, r654_top, 0.75), r654_sw))));
                r654_currentGlyph.include(r365_AddEnclosureMark(r652_digits, r365_CircleDimens(r652_digits, r652_ww)));
                return void 0;
            });
        };
        var r365_createInsetCircledGlyphs = function (r658_digits, r658_demands) {
            var _r658_t0, _r658_t1;
            return r365_EnclosureT("inset-circle", r365_InsetBuilder, r365_StandardInners, r658_digits, 1, r658_demands, r365_InsetCircleEnclosureShape);
        };
        var r365_InsetCircleEnclosureShape = function (r659_digits, r659_ww, r659_gap) {
            var _r659_t0, _r659_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r661_currentGlyph) {
                var _r661_t1, _r661_t2;
                var _r661_t0 = r365_CircleDimens(r659_digits, r659_ww);
                var r661_width = _r661_t0.width;
                var r661_sw = _r661_t0.sw;
                var r661_top = _r661_t0.top;
                var r661_bot = _r661_t0.bot;
                var r661_left = _r661_t0.left;
                var r661_right = _r661_t0.right;
                var r661_archDepthA = _r661_t0.archDepthA;
                var r661_archDepthB = _r661_t0.archDepthB;
                r661_currentGlyph.setWidth(r661_width);
                r661_currentGlyph.include(r365_OShapeOutline(r661_top, r661_bot, r661_left, r661_right, r661_sw, r661_archDepthA, r661_archDepthB));
                r661_currentGlyph.include(r365_AddEnclosureMark(r659_digits, r365_CircleDimens(r659_digits, r659_ww)));
                return void 0;
            });
        };
        var r365_createInsetBoxedGlyphs = function (r665_digits, r665_demands) {
            var _r665_t0, _r665_t1;
            return r365_EnclosureT("inset-boxed", r365_InsetBuilder, r365_StandardInners, r665_digits, 1, r665_demands, r365_InsetBoxEnclosureShape);
        };
        var r365_InsetBoxEnclosureShape = function (r666_digits, r666_ww, r666_gap) {
            var _r666_t0, _r666_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r668_currentGlyph) {
                var _r668_t1, _r668_t2;
                var _r668_t0 = r365_CircleDimens(r666_digits, r666_ww);
                var r668_width = _r668_t0.width;
                var r668_top = _r668_t0.top;
                var r668_bot = _r668_t0.bot;
                var r668_left = _r668_t0.left;
                var r668_right = _r668_t0.right;
                r668_currentGlyph.setWidth(r668_width);
                r668_currentGlyph.include(r365_Rect(r668_top, r668_bot, r668_left, r668_right));
                r668_currentGlyph.include(r365_AddEnclosureMark(r666_digits, r365_CircleDimens(r666_digits, r666_ww)));
                return void 0;
            });
        };
        var r365_createDecomposableInsetCircledGlyphs = function (r672_digits, r672_demands) {
            var _r672_t0, _r672_t1;
            return r365_EnclosureT("inset-circle-decomp", r365_DecomposableInsetBuilder, r365_DecomposableInsetInners, r672_digits, 1, r672_demands, r365_DecomposableInsetCircleEnclosureShape);
        };
        var r365_DecomposableInsetCircleEnclosureShape = function (r673_digits, r673_ww, r673_gap) {
            var _r673_t0, _r673_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r675_currentGlyph) {
                var _r675_t1, _r675_t2;
                var _r675_t0 = r365_CircleDimens(r673_digits, r673_ww);
                var r675_width = _r675_t0.width;
                var r675_sw = _r675_t0.sw;
                var r675_top = _r675_t0.top;
                var r675_bot = _r675_t0.bot;
                var r675_left = _r675_t0.left;
                var r675_right = _r675_t0.right;
                var r675_archDepthA = _r675_t0.archDepthA;
                var r675_archDepthB = _r675_t0.archDepthB;
                r675_currentGlyph.setWidth(r675_width);
                r675_currentGlyph.include(r365_difference(r365_OShapeOutline(r675_top, r675_bot, r675_left, r675_right, r675_sw, r675_archDepthA, r675_archDepthB), r365_DecomposableInsetKnockout(r673_digits, r673_ww)));
                r675_currentGlyph.include(r365_AddEnclosureMark(r673_digits, r365_CircleDimens(r673_digits, r673_ww)));
                return void 0;
            });
        };
        var r365_createDecomposableInsetBoxedGlyphs = function (r679_digits, r679_demands) {
            var _r679_t0, _r679_t1;
            return r365_EnclosureT("inset-boxed-decomp", r365_DecomposableInsetBuilder, r365_DecomposableInsetInners, r679_digits, 1, r679_demands, r365_DecomposableInsetBoxEnclosureShape);
        };
        var r365_DecomposableInsetBoxEnclosureShape = function (r680_digits, r680_ww, r680_gap) {
            var _r680_t0, _r680_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r682_currentGlyph) {
                var _r682_t1, _r682_t2;
                var _r682_t0 = r365_CircleDimens(r680_digits, r680_ww);
                var r682_width = _r682_t0.width;
                var r682_top = _r682_t0.top;
                var r682_bot = _r682_t0.bot;
                var r682_left = _r682_t0.left;
                var r682_right = _r682_t0.right;
                r682_currentGlyph.setWidth(r682_width);
                r682_currentGlyph.include(r365_difference(r365_Rect(r682_top, r682_bot, r682_left, r682_right), r365_DecomposableInsetKnockout(r680_digits, r680_ww)));
                r682_currentGlyph.include(r365_AddEnclosureMark(r680_digits, r365_CircleDimens(r680_digits, r680_ww)));
                return void 0;
            });
        };
        var r365_DecomposableInsetKnockout = function (r686_digits, r686_ww) {
            var _r686_t1, _r686_t2;
            var _r686_t0 = r365_CircleDimens(r686_digits, r686_ww);
            var r686_top = _r686_t0.top;
            var r686_bot = _r686_t0.bot;
            var r686_left = _r686_t0.left;
            var r686_right = _r686_t0.right;
            var r686_dscale = _r686_t0.dscale;
            var r686_mockInnerWidth = _r686_t0.mockInnerWidth;
            var r686_xMid = r1_mix(r686_left, r686_right, 0.5);
            var r686_yMid = r1_mix(r686_bot, r686_top, 0.5);
            var r686_halfHeight = r365_CAP * 0.55 * r686_dscale;
            var r686_halfWidth = Math.min(r686_digits * r365_Width, r686_mockInnerWidth) * 0.5 * r686_dscale;
            return r365_Rect(r686_yMid + r686_halfHeight, r686_yMid - r686_halfHeight, r686_xMid - r686_halfWidth, r686_xMid + r686_halfWidth);
        };
        var r365_createCrossInsetBoxedGlyphs = function (r687_digits, r687_demands) {
            var _r687_t0, _r687_t1;
            return r365_EnclosureT("cross-inset-boxed", r365_InsetWithGapBuilder, r365_StandardInners, r687_digits, 1, r687_demands, r365_CrossInsetSquareShape);
        };
        var r365_CrossInsetSquareShape = function (r688_digits, r688_ww, r688_gap) {
            var _r688_t0, _r688_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r690_currentGlyph) {
                var _r690_t1, _r690_t2;
                var _r690_t0 = r365_CircleDimens(r688_digits, r688_ww);
                var r690_width = _r690_t0.width;
                var r690_sw = _r690_t0.sw;
                var r690_top = _r690_t0.top;
                var r690_bot = _r690_t0.bot;
                var r690_left = _r690_t0.left;
                var r690_right = _r690_t0.right;
                r690_currentGlyph.setWidth(r690_width);
                r690_currentGlyph.include(r365_difference(r365_Rect(r690_top, r690_bot, r690_left, r690_right), r365_ExtLineCenter(r690_left, r690_bot, r690_right, r690_top, r690_sw, -0.1), r365_ExtLineCenter(r690_right, r690_bot, r690_left, r690_top, r690_sw, -0.1)));
                r690_currentGlyph.include(r365_AddEnclosureMark(r688_digits, r365_CircleDimens(r688_digits, r688_ww)));
                return void 0;
            });
        };
        var r365_createInsetDiamondGlyphs = function (r694_digits, r694_demands) {
            var _r694_t0, _r694_t1;
            return r365_EnclosureT("inset-diamond", r365_InsetBuilder, r365_StandardInners, r694_digits, 1, r694_demands, r365_InsetDiamondEnclosureShape);
        };
        var r365_InsetDiamondEnclosureShape = function (r695_digits, r695_ww, r695_gap) {
            var _r695_t0, _r695_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r697_currentGlyph) {
                var _r697_t1, _r697_t2;
                var _r697_t0 = r365_CircleDimens(r695_digits, r695_ww);
                var r697_width = _r697_t0.width;
                var r697_top = _r697_t0.top;
                var r697_bot = _r697_t0.bot;
                var r697_left = _r697_t0.left;
                var r697_right = _r697_t0.right;
                r697_currentGlyph.setWidth(r697_width);
                r697_currentGlyph.include(r365_xn$spirooutline$1aao(r365_corner(r697_left + r365_O, r1_mix(r697_bot, r697_top, 0.5)), r365_corner(r1_mix(r697_left, r697_right, 0.5), r697_bot + r365_O), r365_corner(r697_right - r365_O, r1_mix(r697_bot, r697_top, 0.5)), r365_corner(r1_mix(r697_left, r697_right, 0.5), r697_top - r365_O), r365_close()));
                r697_currentGlyph.include(r365_AddEnclosureMark(r695_digits, r365_CircleDimens(r695_digits, r695_ww)));
                return void 0;
            });
        };
        var r365_createInsetTriangleGlyphs = function (r701_digits, r701_demands) {
            var _r701_t0, _r701_t1;
            return r365_EnclosureT("inset-triangle", r365_InsetBuilder, r365_TriangleInners, r701_digits, 1, r701_demands, r365_InsetTriangleEnclosureShape);
        };
        var r365_InsetTriangleEnclosureShape = function (r702_digits, r702_ww, r702_gap) {
            var _r702_t0, _r702_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r704_currentGlyph) {
                var _r704_t1, _r704_t2;
                var _r704_t0 = r365_CircleDimens(r702_digits, r702_ww);
                var r704_width = _r704_t0.width;
                var r704_top = _r704_t0.top;
                var r704_bot = _r704_t0.bot;
                var r704_left = _r704_t0.left;
                var r704_right = _r704_t0.right;
                r704_currentGlyph.setWidth(r704_width);
                r704_currentGlyph.include(r365_xn$spirooutline$1aao(r365_corner(r704_left + r365_O, r704_bot), r365_corner(r1_mix(r704_left, r704_right, 0.5), r704_top - r365_O), r365_corner(r704_right - r365_O, r704_bot), r365_close()));
                r704_currentGlyph.include(r365_AddEnclosureMark(r702_digits, r365_CircleDimens(r702_digits, r702_ww)));
                return void 0;
            });
        };
        var r365_createInsetMosaicGlyphs = function (r708_digits, r708_demands) {
            var _r708_t0, _r708_t1;
            return r365_EnclosureT("inset-mosaic", r365_InsetBuilder, r365_StandardInners, r708_digits, 1, r708_demands, r365_InsetMosaicEnclosureShape);
        };
        var r365_InsetMosaicEnclosureShape = function (r709_digits, r709_ww, r709_gap) {
            var _r709_t0, _r709_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r711_currentGlyph) {
                var _r711_t1, _r711_t2;
                var _r711_t0 = r365_CircleDimens(r709_digits, r709_ww);
                var r711_width = _r711_t0.width;
                var r711_mosaicTop = _r711_t0.mosaicTop;
                var r711_mosaicBot = _r711_t0.mosaicBot;
                var r711_mosaicLeft = _r711_t0.mosaicLeft;
                var r711_mosaicRight = _r711_t0.mosaicRight;
                r711_currentGlyph.setWidth(r711_width);
                r711_currentGlyph.include(r365_ForceUpright());
                r711_currentGlyph.include(r365_Rect(r711_mosaicTop, r711_mosaicBot, r711_mosaicLeft, r711_mosaicRight));
                r711_currentGlyph.include(r365_AddEnclosureMark(r709_digits, r365_CircleDimens(r709_digits, r709_ww)));
                return void 0;
            });
        };
        var r365_createDoubleCircledGlyphs = function (r716_digits, r716_demands) {
            var _r716_t0, _r716_t1;
            return r365_EnclosureT("double-circle", r365_CircledBuilder, r365_StandardInners, r716_digits, 1, r716_demands, r365_DoubleCircledEnclosureShape);
        };
        var r365_DoubleCircledEnclosureShape = function (r717_digits, r717_ww, r717_gap) {
            var _r717_t0, _r717_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r719_currentGlyph) {
                var _r719_t1, _r719_t2;
                var _r719_t0 = r365_CircleDimens(r717_digits, r717_ww, r717_ww * r717_gap);
                var r719_width = _r719_t0.width;
                var r719_sw0 = _r719_t0.sw0;
                var r719_sw = _r719_t0.sw;
                var r719_top = _r719_t0.top;
                var r719_bot = _r719_t0.bot;
                var r719_left = _r719_t0.left;
                var r719_right = _r719_t0.right;
                var r719_archDepthA = _r719_t0.archDepthA;
                var r719_archDepthB = _r719_t0.archDepthB;
                r719_currentGlyph.setWidth(r719_width);
                var r719_sw1 = Math.min(r719_sw0, r719_sw / 3);
                r719_currentGlyph.include(r365_OShape(r719_top, r719_bot, r719_left, r719_right, r719_sw1, r719_archDepthA, r719_archDepthB));
                r719_currentGlyph.include(r365_OShape(r719_top - r719_sw + r719_sw1, r719_bot + r719_sw - r719_sw1, r719_left + r365_HSwToV(r719_sw) - r365_HSwToV(r719_sw1), r719_right - r365_HSwToV(r719_sw) + r365_HSwToV(r719_sw1), r719_sw1, r719_archDepthA - r719_sw + r719_sw1, r719_archDepthB - r719_sw + r719_sw1));
                r719_currentGlyph.include(r365_AddEnclosureMark(r717_digits, r365_CircleDimens(r717_digits, r717_ww)));
                return void 0;
            });
        };
        var r365_BraceCrowd = function (r724_digits, r724_width) {
            var _r724_t0, _r724_t1;
            return 2.75 + r365_AdjustDigitCount(r724_digits, r724_width);
        };
        var r365_BraceScale = function (r725_digits, r725_width) {
            var _r725_t0, _r725_t1;
            return 0.65 / Math.pow(r365_AdjustDigitCount(r725_digits, r725_width), 1 / 2);
        };
        var r365_bracedDottedDimens = function (r727_digits, r727_width) {
            var _r727_t0, _r727_t1;
            var r727_dscale = r1_linreg(r365_Width, 0.55, r365_UPM, 0.65, r727_width);
            var r727_pscale = r1_linreg(r365_Width, 0.6, r365_UPM, 0.75, r727_width);
            var r727_sw0 = r365_EnclosureStrokeScale(r727_dscale, r727_digits, r727_width) * r365_AdviceStroke(r365_BraceCrowd(r727_digits, r727_width)) / r365_BraceScale(r727_digits, r727_width);
            var r727_sw = Math.min(r365_Stroke, r727_sw0);
            var r727_l = Math.max(r365_SB + r365_O * 3, r727_width / 2 - Math.max(r365_Width * r727_digits, r365_CAP) / 2);
            var r727_r = r727_width - r727_l;
            var r727_mockInnerWidth = r727_width + 2 * (r365_Stroke - r727_sw) * r727_dscale;
            return {
                "width": r727_width,
                "sw": r727_sw,
                "dscale": r727_dscale,
                "pscale": r727_pscale,
                "l": r727_l,
                "r": r727_r,
                "mockInnerWidth": r727_mockInnerWidth
            };
        };
        var r365_BracedT = function (r728_rawPrefix, r728_digits, r728_demands, r728_fnBraceShape) {
            var r728_suffix, r728_ww, _r728_t3, _r728_t4, _r728_t5, _r728_t7, _r728_t8, _r728_tag9;
            var _r728_t0 = r365_circleWidthClasses;
            var _r728_t1 = _r728_t0.length;
            var _r728_t2 = 0;
            var _r728_t6 = _r728_t2 < _r728_t1;
            while (_r728_t6) {
                _r728_t3 = _r728_t0[_r728_t2];
                r728_suffix = _r728_t3[0];
                r728_ww = _r728_t3[1];
                (function () {
                    var r731_job;
                    var r731_prefix = r728_rawPrefix + r728_digits;
                    var r731_jobs = r365_CollectJobs(r1_DECOMPOSABLE, r1_CENTERED, r1_xn$ALLOWPROPORTIONAL$1aao, r731_prefix, r728_suffix, r728_demands);
                    var r731_miniatureFont = r365_CreateDerivedFontFromJobs(r731_jobs, [], function (r732_gs) {
                        var _r732_t0, _r732_t1;
                        return r365_Miniature(r732_gs, new r365_xn$NamedParameterPair$2Lrc9b("crowd", r365_BraceCrowd(r728_digits, r728_ww)), new r365_xn$NamedParameterPair$2Lrc9b("scale", r365_BraceScale(r728_digits, r728_ww)), new r365_xn$NamedParameterPair$2Lrc9b("sbscale", 1));
                    });
                    var r731_gnb = r365_CircName(r731_prefix, ".braced-brace" + r728_digits, [], r728_suffix);
                    if (!r365_xn$queryglyph$1aao(r731_gnb)) r365_xn$GlyphSaveSink$2Lrc4b.save(r731_gnb, null, r728_fnBraceShape(r728_digits, r728_ww));
                    var r731_CreateGlyphImpl = function (r737_jobDecomposable, r737_job) {
                        var _r737_t1, _r737_t2;
                        var _r737_t0 = r737_job;
                        var r737_gn = _r737_t0[0];
                        var r737_unicode = _r737_t0[1];
                        var r737_parts = _r737_t0[2];
                        var r737_w = _r737_t0[3];
                        var r737_bal = _r737_t0[4];
                        var r737_baly = _r737_t0[5];
                        return !r365_xn$queryglyph$1aao(r737_gn) ? r365_xn$GlyphSaveSink$2Lrc4b.save(r737_gn, r737_w === r728_ww ? r737_unicode : null, new r365_xn$Capture$2Lrc8.GlyphProc(function (r740_currentGlyph) {
                            var _r740_t1, _r740_t2;
                            var r740_dimens = r365_bracedDottedDimens(r728_digits, r728_ww);
                            var _r740_t0 = r740_dimens;
                            var r740_width = _r740_t0.width;
                            r740_currentGlyph.setWidth(r740_width);
                            r740_currentGlyph.include(r365_xn$referglyph$1aao(r731_gnb));
                            var r740_parts = r740_currentGlyph.include(r365_EnclosureInner(r740_dimens, r365_StandardInners, r731_miniatureFont, r737_job));
                            if (r737_jobDecomposable) r1_CvDecompose.set(r740_currentGlyph, [r731_gnb].concat(r740_parts));
                            return void 0;
                        })) : void 0;
                    };
                    var _r731_t0 = r731_jobs.decomposableJobs;
                    var _r731_t1 = _r731_t0.length;
                    var _r731_t2 = 0;
                    while (_r731_t2 < _r731_t1) {
                        r731_job = _r731_t0[_r731_t2];
                        r731_CreateGlyphImpl(true, r731_job);
                        _r731_t2 = _r731_t2 + 1;
                    }
                    var _r731_t3 = r731_jobs.nonDecomposable;
                    var _r731_t4 = _r731_t3.length;
                    var _r731_t5 = 0;
                    while (_r731_t5 < _r731_t4) {
                        r731_job = _r731_t3[_r731_t5];
                        r731_CreateGlyphImpl(false, r731_job);
                        _r731_t5 = _r731_t5 + 1;
                    }
                    return r365_applyRelations(r731_jobs.relApplications);
                })();
                _r728_t7 = _r728_t2 = _r728_t2 + 1;
                _r728_t6 = _r728_t2 < _r728_t1;
            }
            return _r728_t7;
        };
        var r365_createBracedGlyphs = function (r746_digits, r746_demands) {
            var _r746_t0, _r746_t1;
            return r365_BracedT("braced", r746_digits, r746_demands, r365_BraceShape);
        };
        var r365_BraceShape = function (r747_digits, r747_ww) {
            var _r747_t0, _r747_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r749_currentGlyph) {
                var _r749_t1, _r749_t2;
                var _r749_t0 = r365_bracedDottedDimens(r747_digits, r747_ww);
                var r749_width = _r749_t0.width;
                var r749_pscale = _r749_t0.pscale;
                var r749_sw = _r749_t0.sw;
                var r749_l = _r749_t0.l;
                var r749_r = _r749_t0.r;
                var r749_s = r365_TanSlope * r365_SymbolMid / 2;
                var r749_p = Math.sqrt(Math.min(1, r749_width / (r747_digits * r365_Width))) / 10;
                r749_currentGlyph.setWidth(r749_width);
                r749_currentGlyph.include(r365_dispiro(r365_widths.lhs(r749_sw), r365_g4(r1_mix(r749_l, r749_r, r749_p) - r749_s, r365_ParenTop * r749_pscale), r365_g4.down.mid(r749_l - r749_s + r365_O, r365_SymbolMid * r749_pscale), r365_g4(r1_mix(r749_l, r749_r, r749_p) - r749_s, r365_ParenBot * r749_pscale)));
                r749_currentGlyph.include(r365_dispiro(r365_widths.rhs(r749_sw), r365_g4(r1_mix(r749_r, r749_l, r749_p) + r749_s, r365_ParenTop * r749_pscale), r365_g4.down.mid(r749_r + r749_s - r365_O, r365_SymbolMid * r749_pscale), r365_g4(r1_mix(r749_r, r749_l, r749_p) + r749_s, r365_ParenBot * r749_pscale)));
                r749_currentGlyph.include(r365_Ungizmo());
                r749_currentGlyph.include(r365_Translate(0, r365_SymbolMid - r365_SymbolMid * r749_pscale));
                r749_currentGlyph.include(r365_Regizmo());
                r749_currentGlyph.include(r365_AddEnclosureMark(r747_digits, r365_bracedDottedDimens(r747_digits, r747_ww)));
                return void 0;
            });
        };
        var r365_createHexBracedGlyphs = function (r757_digits, r757_demands) {
            var _r757_t0, _r757_t1;
            return r365_BracedT("hex-braced", r757_digits, r757_demands, r365_HexBracedShape);
        };
        var r365_HexBracedShape = function (r758_digits, r758_ww) {
            var _r758_t0, _r758_t1;
            return new r365_xn$Capture$2Lrc8.GlyphProc(function (r760_currentGlyph) {
                var _r760_t1, _r760_t2;
                var _r760_t0 = r365_bracedDottedDimens(r758_digits, r758_ww);
                var r760_width = _r760_t0.width;
                var r760_pscale = _r760_t0.pscale;
                var r760_sw = _r760_t0.sw;
                var r760_l = _r760_t0.l;
                var r760_r = _r760_t0.r;
                var r760_s = r365_TanSlope * r365_SymbolMid / 2;
                var r760_p = Math.sqrt(Math.min(1, r760_width / (r758_digits * r365_Width))) / 6;
                r760_currentGlyph.setWidth(r760_width);
                r760_currentGlyph.include(r365_dispiro(r365_widths.lhs(r760_sw), r365_corner(r1_mix(r760_l, r760_r, r760_p) - r760_s, r365_ParenTop * r760_pscale), r365_corner(r760_l - r760_s + r365_O, r365_ParenTop * r760_pscale - r760_p * (r760_r - r760_l))));
                r760_currentGlyph.include(r365_dispiro(r365_widths.lhs(r760_sw), r365_corner(r760_l - r760_s + r365_O, r365_ParenTop * r760_pscale - r760_p * (r760_r - r760_l)), r365_corner(r760_l - r760_s + r365_O, r365_ParenBot * r760_pscale + r760_p * (r760_r - r760_l))));
                r760_currentGlyph.include(r365_dispiro(r365_widths.lhs(r760_sw), r365_corner(r760_l - r760_s + r365_O, r365_ParenBot * r760_pscale + r760_p * (r760_r - r760_l)), r365_corner(r1_mix(r760_l, r760_r, r760_p) - r760_s, r365_ParenBot * r760_pscale)));
                r760_currentGlyph.include(r365_dispiro(r365_widths.rhs(r760_sw), r365_corner(r1_mix(r760_r, r760_l, r760_p) + r760_s, r365_ParenTop * r760_pscale), r365_corner(r760_r + r760_s - r365_O, r365_ParenTop * r760_pscale - r760_p * (r760_r - r760_l))));
                r760_currentGlyph.include(r365_dispiro(r365_widths.rhs(r760_sw), r365_corner(r760_r + r760_s - r365_O, r365_ParenTop * r760_pscale - r760_p * (r760_r - r760_l)), r365_corner(r760_r + r760_s - r365_O, r365_ParenBot * r760_pscale + r760_p * (r760_r - r760_l))));
                r760_currentGlyph.include(r365_dispiro(r365_widths.rhs(r760_sw), r365_corner(r760_r + r760_s - r365_O, r365_ParenBot * r760_pscale + r760_p * (r760_r - r760_l)), r365_corner(r1_mix(r760_r, r760_l, r760_p) + r760_s, r365_ParenBot * r760_pscale)));
                r760_currentGlyph.include(r365_Ungizmo());
                r760_currentGlyph.include(r365_Translate(0, r365_SymbolMid - r365_SymbolMid * r760_pscale));
                r760_currentGlyph.include(r365_Regizmo());
                r760_currentGlyph.include(r365_AddEnclosureMark(r758_digits, r365_bracedDottedDimens(r758_digits, r758_ww)));
                return void 0;
            });
        };
        var r365_DottedCrowd = function (r772_digits, r772_width) {
            var _r772_t0, _r772_t1;
            return 2 + r365_AdjustDigitCount(r772_digits, r772_width);
        };
        var r365_DottedScale = function (r773_digits, r773_width) {
            var _r773_t0, _r773_t1;
            return 1 / Math.pow(r365_AdjustDigitCount(r773_digits, r773_width), 1 / 2);
        };
        var r365_createDottedGlyphs = function (r775_digits, r775_demands) {
            var r775_suffix, r775_ww, _r775_t3, _r775_t4, _r775_t5, _r775_t7, _r775_t8, _r775_tag9;
            var _r775_t0 = r365_circleWidthClasses;
            var _r775_t1 = _r775_t0.length;
            var _r775_t2 = 0;
            var _r775_t6 = _r775_t2 < _r775_t1;
            while (_r775_t6) {
                _r775_t3 = _r775_t0[_r775_t2];
                r775_suffix = _r775_t3[0];
                r775_ww = _r775_t3[1];
                (function () {
                    var r778_job;
                    var r778_jobs = r365_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, "dotted" + r775_digits, r775_suffix, r775_demands);
                    var r778_miniatureFont = r365_CreateDerivedFontFromJobs(r778_jobs, [], function (r779_gs) {
                        var _r779_t0, _r779_t1;
                        return r365_Miniature(r779_gs, new r365_xn$NamedParameterPair$2Lrc9b("crowd", r365_DottedCrowd(r775_digits, r775_ww)), new r365_xn$NamedParameterPair$2Lrc9b("scale", r365_DottedScale(r775_digits, r775_ww)), new r365_xn$NamedParameterPair$2Lrc9b("sbscale", 1));
                    });
                    var r778_ensureDottedPartImpl = function (r783_item, r783_offset, r783_xCompress, r783_xTranslate) {
                        var _r783_t0, _r783_t1;
                        return function (r784_gidPart) {
                            var _r784_t0, _r784_t1;
                            var r784_gniPart = ".dotted-inner." + r784_gidPart + "@" + [r783_item, r775_digits, r783_offset, r783_xCompress, r783_xTranslate].join("/");
                            if (r365_xn$queryglyph$1aao(r784_gniPart)) return r784_gniPart;
                            r365_xn$GlyphSaveSink$2Lrc4b.save(r784_gniPart, null, new r365_xn$Capture$2Lrc8.GlyphProc(function (r787_currentGlyph) {
                                var _r787_t0, _r787_t1;
                                r787_currentGlyph.setWidth(0);
                                r787_currentGlyph.setMarkAnchor("compositeInner", 0, 0);
                                r787_currentGlyph.include(r778_miniatureFont.queryByNameEnsured(r784_gidPart));
                                r787_currentGlyph.include(r365_Ungizmo());
                                r787_currentGlyph.include(r365_Translate(r783_offset, 0));
                                r787_currentGlyph.include(r365_Scale(r783_xCompress, 1));
                                r787_currentGlyph.include(r365_Translate(r783_xTranslate, 0));
                                r787_currentGlyph.include(r365_Regizmo());
                                return void 0;
                            }));
                            return r784_gniPart;
                        };
                    };
                    var r778_createDottedGlyphImpl = function (r796_job, r796_jobDecomposable) {
                        var r796_gidPart, _r796_t4, _r796_t5;
                        var _r796_t0 = r796_job;
                        var r796_gn = _r796_t0[0];
                        var r796_unicode = _r796_t0[1];
                        var r796_partsWithDot = _r796_t0[2];
                        var r796_w = _r796_t0[3];
                        var _r796_t1 = r365_bracedDottedDimens(1, r775_ww);
                        var r796_width = _r796_t1.width;
                        var r796_dscale = _r796_t1.dscale;
                        var r796_pscale = _r796_t1.pscale;
                        var r796_sw = _r796_t1.sw;
                        var r796_l = _r796_t1.l;
                        var r796_r = _r796_t1.r;
                        var r796_totalWidth = 0;
                        var r796_offsets = [];
                        var _r796_t2 = 0;
                        var _r796_t3 = r796_partsWithDot.length;
                        var r796_j = _r796_t2;
                        while (r796_j < _r796_t3) {
                            r796_gidPart = r796_partsWithDot[r796_j];
                            if (r796_j) r796_totalWidth = r796_totalWidth - r365_SB;
                            r796_offsets[r796_j] = r796_totalWidth;
                            r796_totalWidth = r796_totalWidth + r778_miniatureFont.queryByNameEnsured(r796_gidPart).advanceWidth;
                            r796_j = r796_j + 1;
                        }
                        r796_totalWidth = r796_totalWidth - r365_SB;
                        var r796_xCompress = r796_totalWidth > r796_width ? r796_width / r796_totalWidth : 1;
                        var r796_xTranslate = (r796_totalWidth > r796_width ? 0 : r796_width / 2 - r796_totalWidth / 2) - r796_width;
                        return !r365_xn$queryglyph$1aao(r796_gn) ? r365_xn$GlyphSaveSink$2Lrc4b.save(r796_gn, r796_w === r775_ww ? r796_unicode : null, new r365_xn$Capture$2Lrc8.GlyphProc(function (r801_currentGlyph) {
                            var r801_gidPart, r801_p, _r801_t2, _r801_t3;
                            r801_currentGlyph.setWidth(r796_width);
                            var r801_ps = [r778_gnSpace];
                            var _r801_t0 = 0;
                            var _r801_t1 = r796_partsWithDot.length;
                            var r801_j = _r801_t0;
                            while (r801_j < _r801_t1) {
                                r801_gidPart = r796_partsWithDot[r801_j];
                                r801_p = r365_EnsureComponentGlyphT(r801_gidPart, r778_ensureDottedPartImpl(r801_j, r796_offsets[r801_j], r796_xCompress, r796_xTranslate));
                                r801_currentGlyph.include(r365_xn$referglyph$1aao(r801_p));
                                r801_ps.push(r801_p);
                                r801_j = r801_j + 1;
                            }
                            r801_currentGlyph.include(r365_Translate(r796_width, 0));
                            if (r796_jobDecomposable) r1_CvDecompose.set(r801_currentGlyph, r801_ps);
                            return void 0;
                        })) : void 0;
                    };
                    var r778_gnSpace = ".dotted-space." + [r775_digits, r775_suffix].join("/");
                    if (!r365_xn$queryglyph$1aao(r778_gnSpace)) r365_xn$GlyphSaveSink$2Lrc4b.save(r778_gnSpace, null, new r365_xn$Capture$2Lrc8.GlyphProc(function (r809_currentGlyph) {
                        var _r809_t0, _r809_t1;
                        r809_currentGlyph.setWidth(r775_ww);
                        return void 0;
                    }));
                    var _r778_t0 = r778_jobs.nonDecomposable;
                    var _r778_t1 = _r778_t0.length;
                    var _r778_t2 = 0;
                    while (_r778_t2 < _r778_t1) {
                        r778_job = _r778_t0[_r778_t2];
                        r778_createDottedGlyphImpl(r778_job, false);
                        _r778_t2 = _r778_t2 + 1;
                    }
                    var _r778_t3 = r778_jobs.decomposableJobs;
                    var _r778_t4 = _r778_t3.length;
                    var _r778_t5 = 0;
                    while (_r778_t5 < _r778_t4) {
                        r778_job = _r778_t3[_r778_t5];
                        r778_createDottedGlyphImpl(r778_job, true);
                        _r778_t5 = _r778_t5 + 1;
                    }
                    return r365_applyRelations(r778_jobs.relApplications);
                })();
                _r775_t7 = _r775_t2 = _r775_t2 + 1;
                _r775_t6 = _r775_t2 < _r775_t1;
            }
            return _r775_t7;
        };
        var r365_digitGlyphNames = function (r813_j, r813_suffix) {
            var r813_digit, _r813_t3, _r813_t4;
            var r813_digitNumberToNameMap = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
            var r813_digits = String(r813_j).split("").map(function (r814_x) {
                var _r814_t0, _r814_t1;
                return r814_x - 0;
            });
            var r813_names = [];
            var _r813_t0 = r813_digits;
            var _r813_t1 = _r813_t0.length;
            var _r813_t2 = 0;
            while (_r813_t2 < _r813_t1) {
                r813_digit = _r813_t0[_r813_t2];
                r813_names.push(r813_digitNumberToNameMap[r813_digit] + r1_fallback(r813_suffix, r365_digitNoSuffix)(r813_digit) + ".lnum");
                _r813_t2 = _r813_t2 + 1;
            }
            return r813_names;
        };
        var r365_digitNoSuffix = function (r816_d) {
            var _r816_t0, _r816_t1;
            return "";
        };
        var r365_digitSansSerifSuffix = function (r817_d) {
            var _r817_t0, _r817_t1;
            return r817_d >= 1 && r817_d <= 5 || r817_d === 7 ? "/sansSerif" : "";
        };
        (function () {
            var r819_compositions = [[169, ["C"], r365_WideWidth2], [8471, ["P"], r365_WideWidth2], [9450, ["zero.lnum"], r365_WideWidth1], [9854, ["infty"], r365_WideWidth1], [127243, ["zero.lnum"], r365_WideWidth1], [127245, ["zero.lnum/forceSlashed"], r365_WideWidth2], [127246, ["ccCcwArrow"], r365_WideWidth2], [127279, ["revC"], r365_WideWidth2], [127343, ["ccHumanFigure"], r365_WideWidth2], [127405, ["M"], r365_WideWidth2]];
            var _r819_t0 = 1;
            var _r819_t1 = 9;
            var r819_j = _r819_t0;
            while (r819_j <= _r819_t1) {
                r819_compositions.push([9312 + r819_j - 1, r365_digitGlyphNames(r819_j), r365_WideWidth1]);
                r819_j = r819_j + 1;
            }
            var _r819_t2 = 1;
            var _r819_t3 = 9;
            r819_j = _r819_t2;
            while (r819_j <= _r819_t3) {
                r819_compositions.push([10112 + r819_j - 1, r365_digitGlyphNames(r819_j, r365_digitSansSerifSuffix), r365_WideWidth1]);
                r819_j = r819_j + 1;
            }
            var _r819_t4 = 0;
            var _r819_t5 = 26;
            r819_j = _r819_t4;
            while (r819_j < _r819_t5) {
                r819_compositions.push([9398 + r819_j, [r365_glyphStore.queryNameByUnicode(("A").charCodeAt(0) + r819_j)], r365_WideWidth1]);
                r819_j = r819_j + 1;
            }
            var _r819_t6 = 0;
            var _r819_t7 = 26;
            r819_j = _r819_t6;
            while (r819_j < _r819_t7) {
                r819_compositions.push([9424 + r819_j, [r365_glyphStore.queryNameByUnicode(("a").charCodeAt(0) + r819_j)], r365_WideWidth1, 0.5, r365_XH / 2]);
                r819_j = r819_j + 1;
            }
            return r365_createCircledGlyphs(1, r819_compositions);
        })();
        (function () {
            return r365_createBackslashCircledGlyphs(1, [[127247, ["dollar"], r365_WideWidth2], [127342, ["C"], r365_WideWidth2]]);
        })();
        (function () {
            return r365_createItalicCircledGlyphs(1, [[127275, ["C"], r365_WideWidth1], [127276, ["R"], r365_WideWidth1]]);
        })();
        (function () {
            var r833_compositions = [[null, ["sp1"], r365_WideWidth1], [10121, ["one/sansSerif.lnum", "zero.lnum"], r365_WideWidth1], [127277, ["C", "D"], r365_WideWidth1], [127278, ["W", "smcpZ"], r365_WideWidth1], [127341, ["C", "C"], r365_WideWidth2]];
            var _r833_t0 = 10;
            var _r833_t1 = 20;
            var r833_j = _r833_t0;
            while (r833_j <= _r833_t1) {
                r833_compositions.push([9312 + r833_j - 1, r365_digitGlyphNames(r833_j), r365_WideWidth1]);
                r833_j = r833_j + 1;
            }
            var _r833_t2 = 21;
            var _r833_t3 = 35;
            r833_j = _r833_t2;
            while (r833_j <= _r833_t3) {
                r833_compositions.push([12881 + r833_j - 21, r365_digitGlyphNames(r833_j), r365_WideWidth1]);
                r833_j = r833_j + 1;
            }
            var _r833_t4 = 36;
            var _r833_t5 = 50;
            r833_j = _r833_t4;
            while (r833_j <= _r833_t5) {
                r833_compositions.push([12977 + r833_j - 36, r365_digitGlyphNames(r833_j), r365_WideWidth1]);
                r833_j = r833_j + 1;
            }
            return r365_createCircledGlyphs(2, r833_compositions);
        })();
        (function () {
            var r841_compositions = [];
            var _r841_t0 = 0;
            var _r841_t1 = 26;
            var r841_j = _r841_t0;
            while (r841_j < _r841_t1) {
                r841_compositions.push([127312 + r841_j, [r365_glyphStore.queryNameByUnicode(("A").charCodeAt(0) + r841_j)], r365_WideWidth1]);
                r841_j = r841_j + 1;
            }
            return r365_createInsetCircledGlyphs(1, r841_compositions);
        })();
        (function () {
            var r845_compositions = [[9471, ["zero.lnum"], r365_WideWidth1], [127244, ["zero.lnum"], r365_WideWidth1]];
            var _r845_t0 = 1;
            var _r845_t1 = 9;
            var r845_j = _r845_t0;
            while (r845_j <= _r845_t1) {
                r845_compositions.push([10102 + r845_j - 1, r365_digitGlyphNames(r845_j), r365_WideWidth1]);
                r845_j = r845_j + 1;
            }
            var _r845_t2 = 1;
            var _r845_t3 = 9;
            r845_j = _r845_t2;
            while (r845_j <= _r845_t3) {
                r845_compositions.push([10122 + r845_j - 1, r365_digitGlyphNames(r845_j, r365_digitSansSerifSuffix), r365_WideWidth1]);
                r845_j = r845_j + 1;
            }
            return r365_createDecomposableInsetCircledGlyphs(1, r845_compositions);
        })();
        (function () {
            var r851_compositions = [[10131, ["one/sansSerif.lnum", "zero.lnum"], r365_WideWidth1]];
            var _r851_t0 = 10;
            var _r851_t1 = 10;
            var r851_j = _r851_t0;
            while (r851_j <= _r851_t1) {
                r851_compositions.push([10102 + r851_j - 1, r365_digitGlyphNames(r851_j), r365_WideWidth1]);
                r851_j = r851_j + 1;
            }
            var _r851_t2 = 11;
            var _r851_t3 = 20;
            r851_j = _r851_t2;
            while (r851_j <= _r851_t3) {
                r851_compositions.push([9451 + r851_j - 11, r365_digitGlyphNames(r851_j), r365_WideWidth1]);
                r851_j = r851_j + 1;
            }
            return r365_createDecomposableInsetCircledGlyphs(2, r851_compositions);
        })();
        (function () {
            var r857_compositions = [];
            var _r857_t0 = 0;
            var _r857_t1 = 26;
            var r857_j = _r857_t0;
            while (r857_j < _r857_t1) {
                r857_compositions.push([127280 + r857_j, [r365_glyphStore.queryNameByUnicode(("A").charCodeAt(0) + r857_j)], r365_WideWidth1]);
                r857_j = r857_j + 1;
            }
            r857_compositions.push([127397, ["d"], r365_WideWidth1]);
            return r365_createBoxedGlyphs(1, r857_compositions);
        })();
        (function () {
            return r365_createBoxedGlyphs(2, [[127306, ["H", "V"], r365_WideWidth1], [127307, ["M", "V"], r365_WideWidth1], [127308, ["S", "D"], r365_WideWidth1], [127309, ["S", "S"], r365_WideWidth1], [127311, ["W", "C"], r365_WideWidth1], [127377, ["C", "L"], r365_WideWidth1], [127380, ["I", "D"], r365_WideWidth1], [127382, ["N", "G"], r365_WideWidth1], [127383, ["O", "K"], r365_WideWidth1], [127386, ["V", "S"], r365_WideWidth1], [127387, ["three.lnum", "D"], r365_WideWidth1], [127389, ["two.lnum", "K"], r365_WideWidth1], [127390, ["four.lnum", "K"], r365_WideWidth1], [127391, ["eight.lnum", "K"], r365_WideWidth1], [127398, ["H", "C"], r365_WideWidth1]]);
        })();
        (function () {
            return r365_createBoxedGlyphs(3, [[127310, ["P", "P", "V"], r365_WideWidth1], [127381, ["N", "E", "W"], r365_WideWidth1], [127384, ["S", "O", "S"], r365_WideWidth1], [127385, ["U", "P", "exclam"], r365_WideWidth1], [127392, ["five.lnum", "period", "one.lnum"], r365_WideWidth1], [127393, ["seven.lnum", "period", "one.lnum"], r365_WideWidth1], [127395, ["six.lnum", "zero.lnum", "P"], r365_WideWidth1], [127399, ["H", "D", "R"], r365_WideWidth1], [127402, ["S", "H", "V"], r365_WideWidth1], [127403, ["U", "H", "D"], r365_WideWidth1], [127404, ["V", "O", "D"], r365_WideWidth1]]);
        })();
        (function () {
            return r365_createBoxedGlyphs(4, [[127378, ["C", "O", "O", "L"], r365_WideWidth1], [127379, ["F", "R", "E", "E"], r365_WideWidth1], [127394, ["two.lnum", "two.lnum", "period", "two.lnum"], r365_WideWidth1], [127396, ["one.lnum", "two.lnum", "zero.lnum", "P"], r365_WideWidth1]]);
        })();
        (function () {
            return r365_createTwoRowBoxedGlyphs(3, [[127388, ["two.lnum", "N", "D", "S", "C", "R"], r365_WideWidth1], [127400, ["H", "I", "hyphen", "R", "E", "S"], r365_WideWidth1]]);
        })();
        (function () {
            return r365_createTwoRowBoxedGlyphs(4, [[127401, ["L", "O", "S", "S", "L", "E", "S", "S"], r365_WideWidth1]]);
        })();
        (function () {
            return r365_createAribSpeedSignGlyphs(2, [[12872, ["one.lnum", "zero.lnum"], r365_WideWidth1], [12873, ["two.lnum", "zero.lnum"], r365_WideWidth1], [12874, ["three.lnum", "zero.lnum"], r365_WideWidth1], [12875, ["four.lnum", "zero.lnum"], r365_WideWidth1], [12876, ["five.lnum", "zero.lnum"], r365_WideWidth1], [12877, ["six.lnum", "zero.lnum"], r365_WideWidth1], [12878, ["seven.lnum", "zero.lnum"], r365_WideWidth1], [12879, ["eight.lnum", "zero.lnum"], r365_WideWidth1]]);
        })();
        (function () {
            return r365_createDiamondGlyphs(1, [[11217, ["question"], r365_WideWidth2]]);
        })();
        (function () {
            var r875_compositions = [[127137, ["A", "sp1", "spadeSuit", "zwsp"], r365_WideWidth4], [127147, ["J/noDescend", "sp1", "spadeSuit", "zwsp"], r365_WideWidth4], [127148, ["C", "sp1", "spadeSuit", "zwsp"], r365_WideWidth4], [127149, ["Q", "sp1", "spadeSuit", "zwsp"], r365_WideWidth4], [127150, ["K", "sp1", "spadeSuit", "zwsp"], r365_WideWidth4], [127153, ["A", "sp1", "whiteHeartSuit", "zwsp"], r365_WideWidth4], [127163, ["J/noDescend", "sp1", "whiteHeartSuit", "zwsp"], r365_WideWidth4], [127164, ["C", "sp1", "whiteHeartSuit", "zwsp"], r365_WideWidth4], [127165, ["Q", "sp1", "whiteHeartSuit", "zwsp"], r365_WideWidth4], [127166, ["K", "sp1", "whiteHeartSuit", "zwsp"], r365_WideWidth4], [127169, ["A", "sp1", "whiteDiamondSuit", "zwsp"], r365_WideWidth4], [127179, ["J/noDescend", "sp1", "whiteDiamondSuit", "zwsp"], r365_WideWidth4], [127180, ["C", "sp1", "whiteDiamondSuit", "zwsp"], r365_WideWidth4], [127181, ["Q", "sp1", "whiteDiamondSuit", "zwsp"], r365_WideWidth4], [127182, ["K", "sp1", "whiteDiamondSuit", "zwsp"], r365_WideWidth4], [127185, ["A", "sp1", "clubSuit", "zwsp"], r365_WideWidth4], [127195, ["J/noDescend", "sp1", "clubSuit", "zwsp"], r365_WideWidth4], [127196, ["C", "sp1", "clubSuit", "zwsp"], r365_WideWidth4], [127197, ["Q", "sp1", "clubSuit", "zwsp"], r365_WideWidth4], [127198, ["K", "sp1", "clubSuit", "zwsp"], r365_WideWidth4], [127146, ["one.lnum", "zero.lnum", "spadeSuit", "zwsp"], r365_WideWidth4], [127162, ["one.lnum", "zero.lnum", "whiteHeartSuit", "zwsp"], r365_WideWidth4], [127178, ["one.lnum", "zero.lnum", "whiteDiamondSuit", "zwsp"], r365_WideWidth4], [127194, ["one.lnum", "zero.lnum", "clubSuit", "zwsp"], r365_WideWidth4]];
            var _r875_t0 = 2;
            var _r875_t1 = 9;
            var r875_j = _r875_t0;
            while (r875_j <= _r875_t1) {
                r875_compositions.push([127136 + r875_j, r365_digitGlyphNames(r875_j).concat(["sp1", "spadeSuit", "zwsp"]), r365_WideWidth4]);
                r875_compositions.push([127152 + r875_j, r365_digitGlyphNames(r875_j).concat(["sp1", "whiteHeartSuit", "zwsp"]), r365_WideWidth4]);
                r875_compositions.push([127168 + r875_j, r365_digitGlyphNames(r875_j).concat(["sp1", "whiteDiamondSuit", "zwsp"]), r365_WideWidth4]);
                r875_compositions.push([127184 + r875_j, r365_digitGlyphNames(r875_j).concat(["sp1", "clubSuit", "zwsp"]), r365_WideWidth4]);
                r875_j = r875_j + 1;
            }
            return r365_createPlayingCardGlyphs(2, r875_compositions);
        })();
        (function () {
            return r365_createTrumpCardGlyphs(1, [[127167, ["vShadeStar.NWID"], r365_WideWidth4], [127183, ["blackStar.NWID"], r365_WideWidth4], [127199, ["whiteStar.NWID"], r365_WideWidth4], [127200, ["zero.lnum/forceUnslashed"], r365_WideWidth4], [127201, ["I"], r365_WideWidth4], [127205, ["V"], r365_WideWidth4], [127210, ["X"], r365_WideWidth4]]);
        })();
        (function () {
            return r365_createTrumpCardGlyphs(2, [[127202, ["I", "I"], r365_WideWidth4], [127204, ["I", "V"], r365_WideWidth4], [127206, ["V", "I"], r365_WideWidth4], [127209, ["I", "X"], r365_WideWidth4], [127211, ["X", "I"], r365_WideWidth4], [127215, ["X", "V"], r365_WideWidth4], [127220, ["X", "X"], r365_WideWidth4]]);
        })();
        (function () {
            return r365_createTrumpCardGlyphs(3, [[127203, ["I", "I", "I"], r365_WideWidth4], [127207, ["V", "I", "I"], r365_WideWidth4], [127212, ["X", "I", "I"], r365_WideWidth4], [127214, ["X", "I", "V"], r365_WideWidth4], [127216, ["X", "V", "I"], r365_WideWidth4], [127219, ["X", "I", "X"], r365_WideWidth4], [127221, ["X", "X", "I"], r365_WideWidth4]]);
        })();
        (function () {
            return r365_createTrumpCardGlyphs(4, [[127208, ["V", "I", "I", "I"], r365_WideWidth4], [127213, ["X", "I", "I", "I"], r365_WideWidth4], [127217, ["X", "V", "I", "I"], r365_WideWidth4]]);
        })();
        (function () {
            return r365_createTrumpCardGlyphs(5, [[127218, ["X", "V", "I", "I", "I"], r365_WideWidth4]]);
        })();
        (function () {
            return r365_createPlayingCardBackGlyphs(1, [[127136, ["sp1"], r365_WideWidth4]]);
        })();
        (function () {
            return r365_createDashedBoxedGlyphs(3, [[65532, ["O", "B", "J/noDescend"], r365_WideWidth1]]);
        })();
        (function () {
            var r893_compositions = [];
            var _r893_t0 = 0;
            var _r893_t1 = 26;
            var r893_j = _r893_t0;
            while (r893_j < _r893_t1) {
                r893_compositions.push([127344 + r893_j, [r365_glyphStore.queryNameByUnicode(("A").charCodeAt(0) + r893_j)], r365_WideWidth1]);
                r893_j = r893_j + 1;
            }
            return r365_createInsetBoxedGlyphs(1, r893_compositions);
        })();
        (function () {
            return r365_createInsetDiamondGlyphs(1, [[65533, ["question"], r365_WideWidth2]]);
        })();
        (function () {
            return r365_createInsetTriangleGlyphs(1, [[9888, ["exclam"], r365_WideWidth2]]);
        })();
        (function () {
            return r365_createDecomposableInsetBoxedGlyphs(2, [[127371, ["I", "C"], r365_WideWidth1], [127372, ["P", "A"], r365_WideWidth1], [127373, ["S", "A"], r365_WideWidth1], [127374, ["A", "B"], r365_WideWidth1], [127375, ["W", "C"], r365_WideWidth1]]);
        })();
        (function () {
            return r365_createCrossInsetBoxedGlyphs(1, [[127370, ["P"], r365_WideWidth1]]);
        })();
        (function () {
            var r905_compositions = [];
            r905_compositions.push([129969, [r365_glyphStore.queryNameByUnicode(10004).replace(/.WWID$/, ".NWID")], r365_WideWidth4]);
            r905_compositions.push([129972, [r365_glyphStore.queryNameByUnicode(8626).replace(/.WWID$/, ".NWID")], r365_WideWidth4]);
            r905_compositions.push([129988, ["question"], r365_WideWidth4]);
            return r365_createInsetMosaicGlyphs(1, r905_compositions);
        })();
        (function () {
            var r907_compositions = [];
            var _r907_t0 = 1;
            var _r907_t1 = 9;
            var r907_j = _r907_t0;
            while (r907_j <= _r907_t1) {
                r907_compositions.push([9461 + r907_j - 1, r365_digitGlyphNames(r907_j), r365_WideWidth1]);
                r907_j = r907_j + 1;
            }
            return r365_createDoubleCircledGlyphs(1, r907_compositions);
        })();
        (function () {
            var r911_compositions = [];
            var _r911_t0 = 10;
            var _r911_t1 = 10;
            var r911_j = _r911_t0;
            while (r911_j <= _r911_t1) {
                r911_compositions.push([9461 + r911_j - 1, r365_digitGlyphNames(r911_j), r365_WideWidth1]);
                r911_j = r911_j + 1;
            }
            return r365_createDoubleCircledGlyphs(2, r911_compositions);
        })();
        (function () {
            var r915_compositions = [];
            var _r915_t0 = 1;
            var _r915_t1 = 9;
            var r915_j = _r915_t0;
            while (r915_j <= _r915_t1) {
                r915_compositions.push([9332 + r915_j - 1, r365_digitGlyphNames(r915_j), r365_WideWidth1]);
                r915_j = r915_j + 1;
            }
            var _r915_t2 = 0;
            var _r915_t3 = 26;
            r915_j = _r915_t2;
            while (r915_j < _r915_t3) {
                r915_compositions.push([9372 + r915_j, [r365_glyphStore.queryNameByUnicode(("a").charCodeAt(0) + r915_j)], r365_WideWidth1, 0.5, r365_XH / 2]);
                r915_j = r915_j + 1;
            }
            var _r915_t4 = 0;
            var _r915_t5 = 26;
            r915_j = _r915_t4;
            while (r915_j < _r915_t5) {
                r915_compositions.push([127248 + r915_j, [r365_glyphStore.queryNameByUnicode(("A").charCodeAt(0) + r915_j)], r365_WideWidth1]);
                r915_j = r915_j + 1;
            }
            return r365_createBracedGlyphs(1, r915_compositions);
        })();
        (function () {
            var r923_compositions = [];
            var _r923_t0 = 10;
            var _r923_t1 = 20;
            var r923_j = _r923_t0;
            while (r923_j <= _r923_t1) {
                r923_compositions.push([9332 + r923_j - 1, r365_digitGlyphNames(r923_j), r365_WideWidth1]);
                r923_j = r923_j + 1;
            }
            return r365_createBracedGlyphs(2, r923_compositions);
        })();
        (function () {
            return r365_createHexBracedGlyphs(1, [[127274, ["S"], r365_WideWidth1]]);
        })();
        (function () {
            var r929_compositions = [[127232, ["zero.lnum", "period"], r365_WideWidth1]];
            var _r929_t0 = 1;
            var _r929_t1 = 9;
            var r929_j = _r929_t0;
            while (r929_j <= _r929_t1) {
                r929_compositions.push([9352 + r929_j - 1, r365_digitGlyphNames(r929_j).concat(["period"]), r365_WideWidth1]);
                r929_j = r929_j + 1;
            }
            return r365_createDottedGlyphs(1, r929_compositions);
        })();
        (function () {
            var r933_compositions = [];
            var _r933_t0 = 0;
            var _r933_t1 = 9;
            var r933_j = _r933_t0;
            while (r933_j <= _r933_t1) {
                r933_compositions.push([127233 + r933_j, r365_digitGlyphNames(r933_j).concat(["comma"]), r365_WideWidth1]);
                r933_j = r933_j + 1;
            }
            return r365_createDottedGlyphs(1, r933_compositions);
        })();
        return (function () {
            var r937_compositions = [];
            var _r937_t0 = 10;
            var _r937_t1 = 20;
            var r937_j = _r937_t0;
            while (r937_j <= _r937_t1) {
                r937_compositions.push([9352 + r937_j - 1, r365_digitGlyphNames(r937_j).concat(["period"]), r365_WideWidth1]);
                r937_j = r937_j + 1;
            }
            return r365_createDottedGlyphs(2, r937_compositions);
        })();
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r942_xn$Capture_Ext$2Lrc2b) {
    var _r942_t0, _r942_t1;
    r942_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r942_xn$Capture_Ext$2Lrc2b, "Autobuild-Fractions", function (r943_xn$Capture$2Lrc8, r943_xn$ExportCapture$2Lrc4b) {
        var _r943_t9, _r943_t10;
        var _r943_t0 = r943_xn$Capture$2Lrc8;
        var r943_xn$GlyphSaveSink$2Lrc4b = _r943_t0["$GlyphSaveSink$"];
        var r943_xn$NamedParameterPair$2Lrc9b = _r943_t0["$NamedParameterPair$"];
        var r943_xn$Exec$2Lrc5 = _r943_t0["$Exec$"];
        var r943_AS_BASE = _r943_t0.AS_BASE;
        var r943_ALSO_METRICS = _r943_t0.ALSO_METRICS;
        var _r943_t1 = r943_xn$Capture$2Lrc8.Metrics;
        var r943_Width = _r943_t1.Width;
        var r943_SB = _r943_t1.SB;
        var r943_CAP = _r943_t1.CAP;
        var r943_XH = _r943_t1.XH;
        var r943_SymbolMid = _r943_t1.SymbolMid;
        var r943_Scale = _r943_t1.Scale;
        var r943_Translate = _r943_t1.Translate;
        var r943_O = _r943_t1.O;
        var r943_AdviceStroke = _r943_t1.AdviceStroke;
        var r943_RightSB = _r943_t1.RightSB;
        var r943_Middle = _r943_t1.Middle;
        var _r943_t2 = r943_xn$Capture$2Lrc8.SpiroFns;
        var _r943_t3 = r943_xn$Capture$2Lrc8.SpiroFns;
        var r943_xn$decor$0cao = _r943_t3["decor@"];
        var r943_xn$decor$0cao1 = _r943_t3["decor@@"];
        var r943_xn$decor$0cao11 = _r943_t3["decor@@@"];
        var _r943_t4 = r943_xn$Capture$2Lrc8.BooleFns;
        var _r943_t5 = r943_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r943_HBar = _r943_t5.HBar;
        var r943_Ungizmo = _r943_t5.Ungizmo;
        var r943_Regizmo = _r943_t5.Regizmo;
        var _r943_t6 = r943_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r943_xn$queryglyph$1aao = _r943_t6["query-glyph"];
        var r943_xn$referglyph$1aao = _r943_t6["refer-glyph"];
        var _r943_t7 = r943_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Recursive-Build"].resolve();
        var r943_Miniature = _r943_t7.Miniature;
        var r943_Thner = _r943_t7.Thner;
        var _r943_t8 = r943_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Autobuild-Enclosure-Shared"].resolve();
        var r943_CollectJobs = _r943_t8.CollectJobs;
        var r943_EnsureComponentGlyphT = _r943_t8.EnsureComponentGlyphT;
        var r943_CreateDerivedFontFromJobs = _r943_t8.CreateDerivedFontFromJobs;
        var r943_applyRelations = _r943_t8.applyRelations;
        var r943_createFracImpl = function (r948_prefix, r948_demands, r948_layout) {
            var r948_job, _r948_t6, _r948_t7;
            var r948_jobs = r943_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, r948_prefix, "", r948_demands);
            var r948_miniatureFont = r943_CreateDerivedFontFromJobs(r948_jobs, [], function (r949_gs) {
                var _r949_t0, _r949_t1;
                return r943_Miniature(r949_gs, new r943_xn$NamedParameterPair$2Lrc9b("crowd", r948_layout.crowd), new r943_xn$NamedParameterPair$2Lrc9b("scale", r948_layout.scaleFactor + 0.05), new r943_xn$NamedParameterPair$2Lrc9b("mono", true), new r943_xn$NamedParameterPair$2Lrc9b("mono2", true));
            });
            var r948_FracBase = function (r954_nRows, r954_numWidth) {
                var _r954_t0, _r954_t1;
                var r954_gnFracBase = ".frac-base{" + r948_prefix + "}{" + r954_nRows + "}{" + r954_numWidth + "}";
                if (!r943_xn$queryglyph$1aao(r954_gnFracBase)) r943_xn$GlyphSaveSink$2Lrc4b.save(r954_gnFracBase, null, r948_layout.baseShape(r954_nRows, r954_numWidth));
                return r954_gnFracBase;
            };
            var r948_FracShift = function (r956_iRow, r956_nRows, r956_numWidth, r956_denWidth) {
                var _r956_t0, _r956_t1;
                var r956_gnFracShift = ".frac-shift{" + r948_prefix + "}{" + r956_iRow + "}{" + r956_nRows + "}{" + r956_numWidth + "}{" + r956_denWidth + "}";
                if (!r943_xn$queryglyph$1aao(r956_gnFracShift)) r943_xn$GlyphSaveSink$2Lrc4b.save(r956_gnFracShift, null, r948_layout.shiftShape(r956_iRow, r956_nRows, r956_numWidth, r956_denWidth));
                return r956_gnFracShift;
            };
            var r948_FracPartImpl = function (r958_subGlyphName) {
                var _r958_t0, _r958_t1;
                var r958_gnn = ".frac-inner{" + r948_prefix + "}{" + r958_subGlyphName + "}";
                if (!r943_xn$queryglyph$1aao(r958_gnn)) r943_xn$GlyphSaveSink$2Lrc4b.save(r958_gnn, null, new r943_xn$Capture$2Lrc8.GlyphProc(function (r961_currentGlyph) {
                    var _r961_t0, _r961_t1;
                    var r961_subGlyph = r948_miniatureFont.queryByNameEnsured(r958_subGlyphName);
                    r961_currentGlyph.setWidth(0);
                    r961_currentGlyph.setMarkAnchor("fracBuildUp", 0, 0, r961_subGlyph.advanceWidth * r948_layout.scaleFactor, 0);
                    r961_currentGlyph.include(r961_subGlyph);
                    r961_currentGlyph.include(r943_Ungizmo());
                    r961_currentGlyph.include(r943_Translate(0, 0));
                    r961_currentGlyph.include(r943_Scale(r948_layout.scaleFactor));
                    r961_currentGlyph.include(r943_Regizmo());
                    return void 0;
                }));
                return r958_gnn;
            };
            var r948_createFractionImpl = function (r969_job, r969_jobDecomposable) {
                var _r969_t1, _r969_t2;
                var _r969_t0 = r969_job;
                var r969_gnf = _r969_t0[0];
                var r969_unicode = _r969_t0[1];
                var r969_gnParts = _r969_t0[2];
                return !r943_xn$queryglyph$1aao(r969_gnf) ? r943_xn$GlyphSaveSink$2Lrc4b.save(r969_gnf, r969_unicode, new r943_xn$Capture$2Lrc8.GlyphProc(function (r972_currentGlyph) {
                    var r972_gnList, r972_thisRowWidth, r972_gnSubRowElement, r972_gnBase, r972_gnShift, r972_gnRowElement, _r972_t2, _r972_t3, _r972_t4, _r972_t5, _r972_t6, _r972_t7, _r972_t8, _r972_t9;
                    var r972_rows = r948_layout.breakRows(r969_gnParts);
                    var r972_decomposition = [];
                    var r972_lastRowWidth = 0;
                    var _r972_t0 = 0;
                    var _r972_t1 = r972_rows.length;
                    var r972_j = _r972_t0;
                    while (r972_j < _r972_t1) {
                        r972_gnList = [];
                        r972_thisRowWidth = 0;
                        _r972_t2 = r972_rows[r972_j];
                        _r972_t3 = _r972_t2.length;
                        _r972_t4 = 0;
                        while (_r972_t4 < _r972_t3) {
                            r972_gnSubRowElement = _r972_t2[_r972_t4];
                            r972_thisRowWidth = r972_thisRowWidth + r948_miniatureFont.queryByNameEnsured(r972_gnSubRowElement).advanceWidth;
                            r972_gnList.push(r943_EnsureComponentGlyphT(r972_gnSubRowElement, r948_FracPartImpl));
                            _r972_t4 = _r972_t4 + 1;
                        }
                        if (r972_j === 0) {
                            r972_gnBase = r948_FracBase(r972_rows.length, r972_thisRowWidth);
                            r972_currentGlyph.include(r943_xn$referglyph$1aao(r972_gnBase), r943_AS_BASE, r943_ALSO_METRICS);
                            r972_decomposition.push(r972_gnBase);
                        } else {
                            r972_gnShift = r948_FracShift(r972_j, r972_rows.length, r972_lastRowWidth, r972_thisRowWidth);
                            r972_currentGlyph.include(r943_xn$referglyph$1aao(r972_gnShift));
                            r972_decomposition.push(r972_gnShift);
                        }
                        _r972_t5 = r972_gnList;
                        _r972_t6 = _r972_t5.length;
                        _r972_t7 = 0;
                        while (_r972_t7 < _r972_t6) {
                            r972_gnRowElement = _r972_t5[_r972_t7];
                            r972_currentGlyph.include(r943_xn$referglyph$1aao(r972_gnRowElement));
                            r972_decomposition.push(r972_gnRowElement);
                            _r972_t7 = _r972_t7 + 1;
                        }
                        r972_lastRowWidth = r972_thisRowWidth;
                        r972_j = r972_j + 1;
                    }
                    if (r969_jobDecomposable) r1_CvDecompose.set(r972_currentGlyph, r972_decomposition);
                    return void 0;
                })) : void 0;
            };
            var _r948_t0 = r948_jobs.nonDecomposable;
            var _r948_t1 = _r948_t0.length;
            var _r948_t2 = 0;
            while (_r948_t2 < _r948_t1) {
                r948_job = _r948_t0[_r948_t2];
                r948_createFractionImpl(r948_job, false);
                _r948_t2 = _r948_t2 + 1;
            }
            var _r948_t3 = r948_jobs.decomposableJobs;
            var _r948_t4 = _r948_t3.length;
            var _r948_t5 = 0;
            while (_r948_t5 < _r948_t4) {
                r948_job = _r948_t3[_r948_t5];
                r948_createFractionImpl(r948_job, true);
                _r948_t5 = _r948_t5 + 1;
            }
            return r943_applyRelations(r948_jobs.relApplications);
        };
        var r943_FractionLayout = function (r981_letterHeight, r981_fine, r981_scaleFactor, r981_closing) {
            var _r981_t0, _r981_t1;
            var r981_dist = r943_XH * (1 - r981_scaleFactor - r981_closing);
            var r981_partOffsetY = r981_letterHeight * r981_scaleFactor + r981_dist;
            return {
                "crowd": 3.5,
                "scaleFactor": r981_scaleFactor,
                "breakRows": function (r982_a) {
                    var _r982_t0, _r982_t1;
                    return [[r982_a[0]], r982_a.slice(1)];
                },
                "baseShape": function (r983_nRows, r983_firstRowWidth) {
                    var _r983_t0, _r983_t1;
                    return new r943_xn$Capture$2Lrc8.GlyphProc(function (r985_currentGlyph) {
                        var _r985_t0, _r985_t1;
                        r985_currentGlyph.setWidth(r943_Width);
                        if (r981_fine) r985_currentGlyph.include(r943_HBar.m(r943_SB, r943_RightSB, r943_SymbolMid, r981_fine * 0.75));
                        r985_currentGlyph.setBaseAnchor("fracBuildUp", r943_Middle - r983_firstRowWidth * r981_scaleFactor / 2, r943_SymbolMid + r981_dist / 2);
                        return void 0;
                    });
                },
                "shiftShape": function (r989_iRow, r989_nRows, r989_numWidth, r989_denWidth) {
                    var _r989_t0, _r989_t1;
                    return new r943_xn$Capture$2Lrc8.GlyphProc(function (r991_currentGlyph) {
                        var _r991_t0, _r991_t1;
                        var r991_offset = (r989_numWidth / 2 + r989_denWidth / 2) * -r981_scaleFactor;
                        r991_currentGlyph.setWidth(0);
                        r991_currentGlyph.setMarkAnchor("fracBuildUp", 0, 0, r991_offset, -r981_partOffsetY);
                        return void 0;
                    });
                }
            };
        };
        var r943_ControlPictureLayout = function (r994_crowd, r994_scaleFactor, r994_pGap) {
            var _r994_t0, _r994_t1;
            var r994_gap = r943_XH * r994_pGap;
            return {
                "crowd": r994_crowd,
                "scaleFactor": r994_scaleFactor,
                "breakRows": function (r995_a) {
                    var _r995_t0, _r995_t1;
                    return r995_a.map(function (r996_x) {
                        var _r996_t0, _r996_t1;
                        return [r996_x];
                    });
                },
                "baseShape": function (r997_nRows, r997_firstRowWidth) {
                    var _r997_t0, _r997_t1;
                    return new r943_xn$Capture$2Lrc8.GlyphProc(function (r999_currentGlyph) {
                        var _r999_t0, _r999_t1;
                        r999_currentGlyph.setWidth(r943_Width);
                        r999_currentGlyph.setBaseAnchor("fracBuildUp", r943_SB, r943_SymbolMid + (r943_CAP * r994_scaleFactor * r997_nRows + r994_gap * (r997_nRows - 1)) / 2 - r943_CAP * r994_scaleFactor);
                        return void 0;
                    });
                },
                "shiftShape": function (r1002_iRow, r1002_nRows, r1002_numWidth, r1002_denWidth) {
                    var _r1002_t0, _r1002_t1;
                    return new r943_xn$Capture$2Lrc8.GlyphProc(function (r1004_currentGlyph) {
                        var _r1004_t0, _r1004_t1;
                        var r1004_startPos = function (r1005_w, r1005_p) {
                            var _r1005_t0, _r1005_t1;
                            return r943_SB + (r943_RightSB - r943_SB - r1005_w * r994_scaleFactor) * r1005_p / (r1002_nRows - 1);
                        };
                        var r1004_offset = r1004_startPos(r1002_denWidth, r1002_iRow) - r1004_startPos(r1002_numWidth, r1002_iRow - 1) - r1002_numWidth * r994_scaleFactor;
                        r1004_currentGlyph.setWidth(0);
                        r1004_currentGlyph.setMarkAnchor("fracBuildUp", 0, 0, r1004_offset, r943_CAP * -r994_scaleFactor - r994_gap);
                        return void 0;
                    });
                }
            };
        };
        var r943_createFractions = function (r1008_records) {
            var _r1008_t0, _r1008_t1;
            return r943_createFracImpl("frac", r1008_records, r943_FractionLayout(r943_CAP, r943_AdviceStroke(3), 0.55, 0.05));
        };
        var r943_createFractionsSmall = function (r1009_records) {
            var _r1009_t0, _r1009_t1;
            return r943_createFracImpl("fracSmall", r1009_records, r943_FractionLayout(r943_XH, r943_AdviceStroke(3), 0.55, 0.05));
        };
        var r943_createControlPictures2 = function (r1010_records) {
            var _r1010_t0, _r1010_t1;
            return r943_createFracImpl("ctrlPict2", r1010_records, r943_ControlPictureLayout(3.75, 0.55, 0.2));
        };
        var r943_createControlPictures3 = function (r1011_records) {
            var _r1011_t0, _r1011_t1;
            return r943_createFracImpl("ctrlPict3", r1011_records, r943_ControlPictureLayout(5, 0.375, 0.1));
        };
        r943_createFractions([[188, ["one.lnum", "four.lnum"]], [189, ["one.lnum", "two.lnum"]], [190, ["three.lnum", "four.lnum"]], [8528, ["one.lnum", "seven.lnum"]], [8529, ["one.lnum", "nine.lnum"]], [8530, ["one.lnum", "one.lnum", "zero.lnum"]], [8531, ["one.lnum", "three.lnum"]], [8532, ["two.lnum", "three.lnum"]], [8533, ["one.lnum", "five.lnum"]], [8534, ["two.lnum", "five.lnum"]], [8535, ["three.lnum", "five.lnum"]], [8536, ["four.lnum", "five.lnum"]], [8537, ["one.lnum", "six.lnum"]], [8538, ["five.lnum", "six.lnum"]], [8539, ["one.lnum", "eight.lnum"]], [8540, ["three.lnum", "eight.lnum"]], [8541, ["five.lnum", "eight.lnum"]], [8542, ["seven.lnum", "eight.lnum"]], [8543, ["one.lnum", "sp1"]], [8585, ["zero.lnum", "three.lnum"]], [8525, ["A", "S"]]]);
        r943_createFractionsSmall([[8448, ["a", "c"]], [8449, ["a", "s"]], [8453, ["c", "o"]], [8454, ["c", "u"]]]);
        r943_createControlPictures2([[57505, ["L", "N"]], [57507, ["C", "N"]], [9224, ["B", "S"]], [9225, ["H", "T"]], [9226, ["L", "F"]], [9227, ["V", "T"]], [9228, ["F", "F"]], [9229, ["C", "R"]], [9230, ["S", "O"]], [9231, ["S", "I"]], [9241, ["E", "M"]], [9244, ["F", "S"]], [9245, ["G", "S"]], [9246, ["R", "S"]], [9247, ["U", "S"]], [9248, ["S", "P"]], [9252, ["N", "L"]]]);
        return r943_createControlPictures3([[9216, ["N", "U", "L"]], [9217, ["S", "O", "H"]], [9218, ["S", "T", "X"]], [9219, ["E", "T", "X"]], [9220, ["E", "O", "T"]], [9221, ["E", "N", "Q"]], [9222, ["A", "C", "K"]], [9223, ["B", "E", "L"]], [9232, ["D", "L", "E"]], [9233, ["D", "C", "one.lnum"]], [9234, ["D", "C", "two.lnum"]], [9235, ["D", "C", "three.lnum"]], [9236, ["D", "C", "four.lnum"]], [9237, ["N", "A", "K"]], [9238, ["S", "Y", "N"]], [9239, ["E", "T", "B"]], [9240, ["C", "A", "N"]], [9242, ["S", "U", "B"]], [9243, ["E", "S", "C"]], [9249, ["D", "E", "L"]]]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r1014_xn$Capture_Ext$2Lrc2b) {
    var _r1014_t0, _r1014_t1;
    r1014_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r1014_xn$Capture_Ext$2Lrc2b, "AutoBuild-Accented-Equal", function (r1015_xn$Capture$2Lrc8, r1015_xn$ExportCapture$2Lrc4b) {
        var _r1015_t10, _r1015_t11;
        var _r1015_t0 = r1015_xn$Capture$2Lrc8;
        var r1015_xn$GlyphSaveSink$2Lrc4b = _r1015_t0["$GlyphSaveSink$"];
        var r1015_xn$NamedParameterPair$2Lrc9b = _r1015_t0["$NamedParameterPair$"];
        var r1015_xn$Exec$2Lrc5 = _r1015_t0["$Exec$"];
        var _r1015_t1 = r1015_xn$Capture$2Lrc8.Metrics;
        var r1015_Width = _r1015_t1.Width;
        var r1015_CAP = _r1015_t1.CAP;
        var r1015_XH = _r1015_t1.XH;
        var r1015_SymbolMid = _r1015_t1.SymbolMid;
        var r1015_OperTop = _r1015_t1.OperTop;
        var r1015_OperBot = _r1015_t1.OperBot;
        var r1015_Scale = _r1015_t1.Scale;
        var r1015_Translate = _r1015_t1.Translate;
        var r1015_Middle = _r1015_t1.Middle;
        var _r1015_t2 = r1015_xn$Capture$2Lrc8.SpiroFns;
        var _r1015_t3 = r1015_xn$Capture$2Lrc8.SpiroFns;
        var r1015_xn$decor$0cao = _r1015_t3["decor@"];
        var r1015_xn$decor$0cao1 = _r1015_t3["decor@@"];
        var r1015_xn$decor$0cao11 = _r1015_t3["decor@@@"];
        var _r1015_t4 = r1015_xn$Capture$2Lrc8.BooleFns;
        var _r1015_t5 = r1015_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r1015_Ungizmo = _r1015_t5.Ungizmo;
        var r1015_Regizmo = _r1015_t5.Regizmo;
        var _r1015_t6 = r1015_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r1015_xn$queryglyph$1aao = _r1015_t6["query-glyph"];
        var r1015_xn$referglyph$1aao = _r1015_t6["refer-glyph"];
        var _r1015_t7 = r1015_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Recursive-Build"].resolve();
        var r1015_Miniature = _r1015_t7.Miniature;
        var _r1015_t8 = r1015_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Mark-Above"].resolve();
        var r1015_aboveMarkBot = _r1015_t8.aboveMarkBot;
        var _r1015_t9 = r1015_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Autobuild-Enclosure-Shared"].resolve();
        var r1015_CollectJobs = _r1015_t9.CollectJobs;
        var r1015_CreateDerivedFontFromJobs = _r1015_t9.CreateDerivedFontFromJobs;
        var r1015_EnsureComponentGlyphT = _r1015_t9.EnsureComponentGlyphT;
        var r1015_applyRelations = _r1015_t9.applyRelations;
        var r1015_createAccentedOp = function (r1021_gnBase, r1021_crowd, r1021_scale, r1021_shiftX, r1021_shiftY, r1021_demands) {
            var r1021_job, _r1021_t6, _r1021_t7;
            var r1021_prefix = "accent-op{" + r1021_gnBase + "}{" + [r1021_crowd, r1021_scale, r1021_shiftX, r1021_shiftY].join("-") + "}";
            var r1021_jobs = r1015_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$MONOSPACEONLY$5Frx, r1021_prefix, "", r1021_demands);
            var r1021_dFont = r1015_CreateDerivedFontFromJobs(r1021_jobs, [], function (r1022_gs) {
                var _r1022_t0, _r1022_t1;
                return r1015_Miniature(r1022_gs, new r1015_xn$NamedParameterPair$2Lrc9b("crowd", r1021_crowd), new r1015_xn$NamedParameterPair$2Lrc9b("scale", r1021_scale), new r1015_xn$NamedParameterPair$2Lrc9b("mono", true), new r1015_xn$NamedParameterPair$2Lrc9b("mono2", true));
            });
            var r1021_ComponentImpl = function (r1027_offset, r1027_totalWidth) {
                var _r1027_t0, _r1027_t1;
                return function (r1028_gidPart) {
                    var _r1028_t0, _r1028_t1;
                    var r1028_gni = ".accented-op-part." + r1028_gidPart + "@" + [r1021_prefix, r1027_offset, r1027_totalWidth].join("/");
                    if (r1015_xn$queryglyph$1aao(r1028_gni)) return r1028_gni;
                    r1015_xn$GlyphSaveSink$2Lrc4b.save(r1028_gni, null, new r1015_xn$Capture$2Lrc8.GlyphProc(function (r1031_currentGlyph) {
                        var _r1031_t0, _r1031_t1;
                        r1031_currentGlyph.setWidth(0);
                        r1031_currentGlyph.setMarkAnchor("compositeInner", 0, 0);
                        r1031_currentGlyph.include(r1021_dFont.queryByNameEnsured(r1028_gidPart));
                        r1031_currentGlyph.include(r1015_Ungizmo());
                        r1031_currentGlyph.include(r1015_Translate(r1027_totalWidth * -0.5 + r1027_offset, 0));
                        r1031_currentGlyph.include(r1015_Scale(r1021_scale));
                        r1031_currentGlyph.include(r1015_Translate(r1015_Middle + r1021_shiftX - r1015_Width, r1021_shiftY));
                        r1031_currentGlyph.include(r1015_Regizmo());
                        return void 0;
                    }));
                    return r1028_gni;
                };
            };
            var r1021_createAccentedOpImpl = function (r1040_job, r1040_decomposable) {
                var r1040_gidPart, _r1040_t3, _r1040_t4;
                var _r1040_t0 = r1040_job;
                var r1040_gn = _r1040_t0[0];
                var r1040_unicode = _r1040_t0[1];
                var r1040_parts = _r1040_t0[2];
                var r1040_totalWidth = 0;
                var r1040_offsets = [];
                var _r1040_t1 = 0;
                var _r1040_t2 = r1040_parts.length;
                var r1040_j = _r1040_t1;
                while (r1040_j < _r1040_t2) {
                    r1040_gidPart = r1040_parts[r1040_j];
                    r1040_offsets[r1040_j] = r1040_totalWidth;
                    r1040_totalWidth = r1040_totalWidth + r1021_dFont.queryByNameEnsured(r1040_gidPart).advanceWidth;
                    r1040_j = r1040_j + 1;
                }
                return !r1015_xn$queryglyph$1aao(r1040_gn) ? r1015_xn$GlyphSaveSink$2Lrc4b.save(r1040_gn, r1040_unicode, new r1015_xn$Capture$2Lrc8.GlyphProc(function (r1045_currentGlyph) {
                    var r1045_gidPart, r1045_p, _r1045_t2, _r1045_t3;
                    r1045_currentGlyph.setWidth(r1015_Width);
                    var r1045_ps = [r1021_gnBase];
                    var _r1045_t0 = 0;
                    var _r1045_t1 = r1040_parts.length;
                    var r1045_j = _r1045_t0;
                    while (r1045_j < _r1045_t1) {
                        r1045_gidPart = r1040_parts[r1045_j];
                        r1045_p = r1015_EnsureComponentGlyphT(r1045_gidPart, r1021_ComponentImpl(r1040_offsets[r1045_j], r1040_totalWidth));
                        r1045_currentGlyph.include(r1015_xn$referglyph$1aao(r1045_p));
                        r1045_ps.push(r1045_p);
                        r1045_j = r1045_j + 1;
                    }
                    r1045_currentGlyph.include(r1015_Translate(r1015_Width, 0));
                    r1045_currentGlyph.include(r1015_xn$referglyph$1aao(r1021_gnBase));
                    if (r1040_decomposable) r1_CvDecompose.set(r1045_currentGlyph, r1045_ps);
                    return void 0;
                })) : void 0;
            };
            var _r1021_t0 = r1021_jobs.nonDecomposable;
            var _r1021_t1 = _r1021_t0.length;
            var _r1021_t2 = 0;
            while (_r1021_t2 < _r1021_t1) {
                r1021_job = _r1021_t0[_r1021_t2];
                r1021_createAccentedOpImpl(r1021_job, false);
                _r1021_t2 = _r1021_t2 + 1;
            }
            var _r1021_t3 = r1021_jobs.decomposableJobs;
            var _r1021_t4 = _r1021_t3.length;
            var _r1021_t5 = 0;
            while (_r1021_t5 < _r1021_t4) {
                r1021_job = _r1021_t3[_r1021_t5];
                r1021_createAccentedOpImpl(r1021_job, true);
                _r1021_t5 = _r1021_t5 + 1;
            }
            return r1015_applyRelations(r1021_jobs.relApplications);
        };
        r1015_createAccentedOp("equal", 7, 0.4, 0, r1015_aboveMarkBot, [[8798, ["m"]], [8799, ["question"]]]);
        r1015_createAccentedOp("equal", 5, 0.8, 0, r1015_aboveMarkBot, [[8792, ["symbolMidTie"]]]);
        r1015_createAccentedOp("equal", 7, 0.5, 0, r1015_aboveMarkBot - (r1015_SymbolMid - r1015_XH / 2), [[8793, ["triangularWedge.NWID"]], [8794, ["triangularVee.NWID"]], [8795, ["blackStar.NWID"]], [8796, ["whiteTriangleUp.NWID"]], [10862, ["opAsterisk"]]]);
        r1015_createAccentedOp("sqrt", 5, 0.5, r1015_Width * -0.25, r1_mix(r1015_OperBot, r1015_OperTop, 0.6), [[8731, ["three.lnum"]], [8732, ["four.lnum"]]]);
        r1015_createAccentedOp("equal", 8, 0.3, 0, r1015_aboveMarkBot, [[8797, ["d", "e", "f"]]]);
        r1015_createAccentedOp("markDemoBaseSpace", 6, 0.4, 0, r1015_aboveMarkBot - (r1015_CAP * 0.4 - r1015_XH * 0.4), [[174, ["R", "combRingCap/adwsN"]]]);
        r1015_createAccentedOp("markDemoBaseSpace", 6, 0.45, 0, r1015_aboveMarkBot - (r1015_CAP * 0.45 - r1015_XH * 0.45), [[8482, ["T", "M"]], [8480, ["S", "M"]], [127338, ["M", "C"]], [127339, ["M", "D"]], [127340, ["M", "R"]]]);
        r1015_createAccentedOp("insertSignBase", 6, 0.5, 0, 0.625 * r1015_XH, [[9088, ["a"]]]);
        r1015_createAccentedOp("underscoreSignBase", 6, 0.5, 0, r1015_SymbolMid - 0.25 * r1015_XH, [[9089, ["a", "ellipsis.NWID"]]]);
        r1015_createAccentedOp("BrokenUnderscoreSignBase", 6, 0.5, 0, r1015_SymbolMid - 0.25 * r1015_XH, [[9090, ["a", "a"]]]);
        return r1015_createAccentedOp("correctionSignBase", 6, 0.5, 0, r1015_SymbolMid - 0.25 * r1015_XH, [[9091, ["a"]]]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r1056_xn$Capture_Ext$2Lrc2b) {
    var _r1056_t0, _r1056_t1;
    r1056_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r1056_xn$Capture_Ext$2Lrc2b, "Autobuild-Ligatures", function (r1057_xn$Capture$2Lrc8, r1057_xn$ExportCapture$2Lrc4b) {
        var _r1057_t9, _r1057_t10;
        var _r1057_t0 = r1057_xn$Capture$2Lrc8;
        var r1057_xn$GlyphSaveSink$2Lrc4b = _r1057_t0["$GlyphSaveSink$"];
        var r1057_xn$NamedParameterPair$2Lrc9b = _r1057_t0["$NamedParameterPair$"];
        var r1057_xn$Exec$2Lrc5 = _r1057_t0["$Exec$"];
        var r1057_para = _r1057_t0.para;
        var r1057_glyphStore = _r1057_t0.glyphStore;
        var r1057_AS_BASE = _r1057_t0.AS_BASE;
        var r1057_ALSO_METRICS = _r1057_t0.ALSO_METRICS;
        var _r1057_t1 = r1057_xn$Capture$2Lrc8.Metrics;
        var r1057_Width = _r1057_t1.Width;
        var r1057_SB = _r1057_t1.SB;
        var r1057_Scale = _r1057_t1.Scale;
        var r1057_Translate = _r1057_t1.Translate;
        var r1057_WideWidth1 = _r1057_t1.WideWidth1;
        var r1057_WideWidth2 = _r1057_t1.WideWidth2;
        var r1057_StrokeWidthBlend = _r1057_t1.StrokeWidthBlend;
        var _r1057_t2 = r1057_xn$Capture$2Lrc8.SpiroFns;
        var _r1057_t3 = r1057_xn$Capture$2Lrc8.SpiroFns;
        var r1057_xn$decor$0cao = _r1057_t3["decor@"];
        var r1057_xn$decor$0cao1 = _r1057_t3["decor@@"];
        var r1057_xn$decor$0cao11 = _r1057_t3["decor@@@"];
        var _r1057_t4 = r1057_xn$Capture$2Lrc8.BooleFns;
        var _r1057_t5 = r1057_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r1057_Ungizmo = _r1057_t5.Ungizmo;
        var r1057_Regizmo = _r1057_t5.Regizmo;
        var r1057_xn$withtransform$5sIl = _r1057_t5["with-transform"];
        var _r1057_t6 = r1057_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r1057_xn$queryglyph$1aao = _r1057_t6["query-glyph"];
        var r1057_xn$referglyph$1aao = _r1057_t6["refer-glyph"];
        var _r1057_t7 = r1057_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Recursive-Build"].resolve();
        var r1057_Thinner = _r1057_t7.Thinner;
        var _r1057_t8 = r1057_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Autobuild-Enclosure-Shared"].resolve();
        var r1057_CollectJobs = _r1057_t8.CollectJobs;
        var r1057_CreateDerivedFontFromJobs = _r1057_t8.CreateDerivedFontFromJobs;
        var r1057_EnsureComponentGlyphT = _r1057_t8.EnsureComponentGlyphT;
        var r1057_applyRelations = _r1057_t8.applyRelations;
        var r1057_createLigatures = function (r1062_prefix, r1062__shrink1, r1062__shrinkN, r1062_wadj1, r1062_wadjN, r1062_kKern, r1062_demands) {
            var _r1062_t0, _r1062_t1, _r1062_t2, _r1062_tag3;
            return (function () {
                var r1065_FMosaicWide, r1065_MosaicNameSuffix, r1065_MosaicWidth, r1065_MosaicWidthScalar, _r1065_t3, _r1065_t5, _r1065_t6, _r1065_tag7;
                var r1065_WidthKinds = [[0, ".NWID", r1057_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r1057_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
                var _r1065_t0 = r1065_WidthKinds;
                var _r1065_t1 = _r1065_t0.length;
                var _r1065_t2 = 0;
                var _r1065_t4 = _r1065_t2 < _r1065_t1;
                while (_r1065_t4) {
                    _r1065_t3 = _r1065_t0[_r1065_t2];
                    r1065_FMosaicWide = _r1065_t3[0];
                    r1065_MosaicNameSuffix = _r1065_t3[1];
                    r1065_MosaicWidth = _r1065_t3[2];
                    r1065_MosaicWidthScalar = _r1065_t3[3];
                    (function () {
                        var r1068_job;
                        var r1068_MosaicDesiredWidth = r1057_WideWidth2;
                        var r1068_MosaicMiddle = r1065_MosaicWidth / 2;
                        var r1068_MosaicUnitWidth = r1065_MosaicWidth / r1065_MosaicWidthScalar;
                        var r1068_MangleUnicode = function (r1069_unicode, r1069__desiredOverride) {
                            var _r1069_t0, _r1069_t1;
                            return r1065_MosaicWidth === (r1069__desiredOverride || r1068_MosaicDesiredWidth) ? r1069_unicode : void 0;
                        };
                        var r1068_MangleName = function (r1070_name) {
                            var _r1070_t0, _r1070_t1;
                            return r1070_name + r1065_MosaicNameSuffix;
                        };
                        var r1068_plainLigature = r1065_FMosaicWide && r1057_para.isQuasiProportional;
                        var r1068_ww = r1065_FMosaicWide ? r1065_MosaicWidth : r1065_MosaicWidth * r1057_para.advanceScaleMM;
                        var r1068_jobs = r1057_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, r1062_prefix, r1065_MosaicNameSuffix, r1062_demands);
                        var r1068_shrink1 = r1068_plainLigature ? 1 : r1_clamp(0, 1, r1062__shrink1 * r1_mix(r1057_Width, r1068_ww, 0.5) / r1057_Width);
                        var r1068_shrinkN = r1068_plainLigature ? 1 : r1_clamp(0, 1, r1062__shrinkN * r1_mix(r1057_Width, r1068_ww, 0.5) / r1057_Width);
                        var r1068_df1 = r1057_CreateDerivedFontFromJobs(r1068_jobs, [], function (r1071_gs) {
                            var _r1071_t0, _r1071_t1;
                            return r1057_Thinner(r1071_gs, r1068_shrink1);
                        });
                        var r1068_dfN = r1057_CreateDerivedFontFromJobs(r1068_jobs, [], function (r1072_gs) {
                            var _r1072_t0, _r1072_t1;
                            return r1057_Thinner(r1072_gs, r1068_shrinkN);
                        });
                        var r1068_LigaturePlaceholderImpl = function (r1073_aw, r1073_markPlacement) {
                            var _r1073_t0, _r1073_t1;
                            var r1073_gni = ".ligature-placeholder@" + [r1073_aw, r1073_markPlacement].join("/");
                            if (r1057_xn$queryglyph$1aao(r1073_gni)) return r1073_gni;
                            r1057_xn$GlyphSaveSink$2Lrc4b.save(r1073_gni, null, new r1057_xn$Capture$2Lrc8.GlyphProc(function (r1076_currentGlyph) {
                                var _r1076_t0, _r1076_t1;
                                r1076_currentGlyph.setWidth(r1073_aw);
                                r1076_currentGlyph.setBaseAnchor("enclosureInner", r1073_markPlacement, 0);
                                return void 0;
                            }));
                            return r1073_gni;
                        };
                        var r1068_LigaturePartImpl = function (r1079_df, r1079_offset1, r1079_compress, r1079_markDist) {
                            var _r1079_t0, _r1079_t1;
                            return function (r1080_gidPart) {
                                var _r1080_t0, _r1080_t1;
                                var r1080_gni = ".ligature-part." + r1080_gidPart + "@" + [r1062_prefix, r1079_compress, r1079_offset1, r1079_markDist].join("/");
                                if (r1057_xn$queryglyph$1aao(r1080_gni)) return r1080_gni;
                                r1057_xn$GlyphSaveSink$2Lrc4b.save(r1080_gni, null, new r1057_xn$Capture$2Lrc8.GlyphProc(function (r1083_currentGlyph) {
                                    var _r1083_t0, _r1083_t1;
                                    r1083_currentGlyph.setWidth(0);
                                    r1083_currentGlyph.include(r1079_df.queryByNameEnsured(r1080_gidPart));
                                    r1083_currentGlyph.include(r1057_Ungizmo());
                                    r1083_currentGlyph.include(r1057_Translate(r1079_offset1, 0));
                                    r1083_currentGlyph.include(r1057_Scale(r1079_compress, 1));
                                    r1083_currentGlyph.include(r1057_Regizmo());
                                    r1083_currentGlyph.setMarkAnchor("enclosureInner", 0, 0, r1079_markDist, 0);
                                    return void 0;
                                }));
                                return r1080_gni;
                            };
                        };
                        var r1068_LigatureImpl = function (r1091_job, r1091_decomposable) {
                            var r1091_i, r1091_component, r1091_sumChildrenWidth, r1091_dfg, r1091_glyphWidth, r1091_compressRefWidth, r1091_kern, r1091_estKernedUncompressedWidth, r1091_cycle, r1091_compress, _r1091_t3, _r1091_t4, _r1091_t5, _r1091_t6, _r1091_t7, _r1091_t8, _r1091_t9, _r1091_t10, _r1091_t11;
                            var _r1091_t0 = r1091_job;
                            var r1091_gn = _r1091_t0[0];
                            var r1091_unicode = _r1091_t0[1];
                            var r1091_components = _r1091_t0[2];
                            var r1091_desiredWidth = _r1091_t0[3];
                            var r1091_ps = [];
                            var r1091_dfgs = [];
                            var _r1091_t1 = r1091_components.entries()[Symbol.iterator]();
                            var _r1091_t2 = void 0;
                            while (!(_r1091_t2 = _r1091_t1.next()).done) {
                                _r1091_t3 = _r1091_t2.value;
                                r1091_i = _r1091_t3[0];
                                r1091_component = _r1091_t3[1];
                                r1091_dfgs[r1091_i] = (r1091_i ? r1068_dfN : r1068_df1).queryByNameEnsured(r1091_component);
                            }
                            if (r1057_xn$queryglyph$1aao(r1091_gn)) return void 0;
                            if (r1068_plainLigature) return r1057_xn$GlyphSaveSink$2Lrc4b.save(r1091_gn, r1068_MangleUnicode(r1091_unicode, r1091_desiredWidth), new r1057_xn$Capture$2Lrc8.GlyphProc(function (r1095_currentGlyph) {
                                var r1095_i, r1095_component, _r1095_t2, _r1095_t3, _r1095_t4, _r1095_t5, _r1095_tag6;
                                var r1095_decomposition = [];
                                var r1095_aw = 0;
                                var _r1095_t0 = r1091_components.entries()[Symbol.iterator]();
                                var _r1095_t1 = void 0;
                                while (!(_r1095_t1 = _r1095_t0.next()).done) {
                                    _r1095_t2 = _r1095_t1.value;
                                    r1095_i = _r1095_t2[0];
                                    r1095_component = _r1095_t2[1];
                                    (function () {
                                        var r1098_componentG = r1057_xn$queryglyph$1aao(r1095_component);
                                        r1095_currentGlyph.include(r1057_xn$withtransform$5sIl(r1057_Translate(r1095_aw, 0), r1057_xn$referglyph$1aao(r1095_component)));
                                        r1095_aw = r1095_aw + r1098_componentG.advanceWidth;
                                        return r1095_decomposition.push(r1095_component);
                                    })();
                                }
                                r1095_currentGlyph.setWidth(r1095_aw);
                                r1_CvDecompose.set(r1095_currentGlyph, r1095_decomposition);
                                r1_IsCompositeOrLigature.set(r1095_currentGlyph);
                                return void 0;
                            })); else {
                                r1091_sumChildrenWidth = 0;
                                _r1091_t4 = r1091_dfgs.entries()[Symbol.iterator]();
                                _r1091_t5 = void 0;
                                while (!(_r1091_t5 = _r1091_t4.next()).done) {
                                    _r1091_t6 = _r1091_t5.value;
                                    r1091_i = _r1091_t6[0];
                                    r1091_dfg = _r1091_t6[1];
                                    r1091_sumChildrenWidth = r1091_sumChildrenWidth + r1091_dfg.advanceWidth * (r1091_i ? r1062_wadjN : r1062_wadj1);
                                }
                                r1091_glyphWidth = r1091_sumChildrenWidth < r1068_ww ? r1065_MosaicWidth : r1068_ww;
                                r1091_compressRefWidth = (r1091_glyphWidth - r1057_SB * 1.25) / (r1091_glyphWidth - r1057_SB * 2) * r1091_glyphWidth;
                                r1091_kern = r1062_kKern * r1091_glyphWidth;
                                r1091_estKernedUncompressedWidth = r1091_sumChildrenWidth - r1091_kern * (r1091_dfgs.length - 1);
                                if (r1091_dfgs.length > 1) {
                                    _r1091_t7 = 0;
                                    _r1091_t8 = 4;
                                    r1091_cycle = _r1091_t7;
                                    while (r1091_cycle < _r1091_t8) {
                                        if (r1062_kKern === 0) r1091_kern = r1_clamp(0, r1057_SB * 7 / 8, (r1091_estKernedUncompressedWidth - r1091_compressRefWidth) / (r1091_dfgs.length - 1));
                                        r1091_estKernedUncompressedWidth = r1091_sumChildrenWidth - r1091_kern * (r1091_dfgs.length - 1);
                                        r1091_cycle = r1091_cycle + 1;
                                    }
                                }
                                r1091_compress = r1_clamp(0, 1, r1091_compressRefWidth / r1091_estKernedUncompressedWidth);
                                return r1057_xn$GlyphSaveSink$2Lrc4b.save(r1091_gn, r1068_MangleUnicode(r1091_unicode, r1091_desiredWidth), new r1057_xn$Capture$2Lrc8.GlyphProc(function (r1106_currentGlyph) {
                                    var r1106_i, r1106_component, _r1106_t2, _r1106_t3, _r1106_t4, _r1106_t5, _r1106_tag6;
                                    var r1106_decomposition = [];
                                    var r1106_baseOffset = r1091_glyphWidth / 2 - r1091_estKernedUncompressedWidth * r1091_compress / 2;
                                    var _r1106_t0 = r1091_components.entries()[Symbol.iterator]();
                                    var _r1106_t1 = void 0;
                                    while (!(_r1106_t1 = _r1106_t0.next()).done) {
                                        _r1106_t2 = _r1106_t1.value;
                                        r1106_i = _r1106_t2[0];
                                        r1106_component = _r1106_t2[1];
                                        (function () {
                                            var r1109_placeholder;
                                            var r1109_componentAdvance = r1091_compress * (r1091_dfgs[r1106_i].advanceWidth * (r1106_i ? r1062_wadjN : r1062_wadj1) - r1091_kern);
                                            var r1109_componentRefOffset = r1091_dfgs[r1106_i].advanceWidth * ((r1106_i ? r1062_wadjN : r1062_wadj1) - 1) / 2;
                                            if (r1106_i === 0) {
                                                r1109_placeholder = r1068_LigaturePlaceholderImpl(r1091_glyphWidth, r1106_baseOffset);
                                                r1106_decomposition.push(r1109_placeholder);
                                                r1106_currentGlyph.include(r1057_xn$referglyph$1aao(r1109_placeholder), r1057_AS_BASE, r1057_ALSO_METRICS);
                                            }
                                            var r1109_part = r1057_EnsureComponentGlyphT(r1106_component, r1068_LigaturePartImpl(r1068_dfN, r1109_componentRefOffset, r1091_compress, r1109_componentAdvance));
                                            r1106_decomposition.push(r1109_part);
                                            return r1106_currentGlyph.include(r1057_xn$referglyph$1aao(r1109_part));
                                        })();
                                    }
                                    if (r1091_decomposable) r1_CvDecompose.set(r1106_currentGlyph, r1106_decomposition);
                                    r1_IsCompositeOrLigature.set(r1106_currentGlyph);
                                    return void 0;
                                }));
                            }
                        };
                        var _r1068_t0 = r1068_jobs.nonDecomposable;
                        var _r1068_t1 = _r1068_t0.length;
                        var _r1068_t2 = 0;
                        while (_r1068_t2 < _r1068_t1) {
                            r1068_job = _r1068_t0[_r1068_t2];
                            r1068_LigatureImpl(r1068_job, false);
                            _r1068_t2 = _r1068_t2 + 1;
                        }
                        var _r1068_t3 = r1068_jobs.decomposableJobs;
                        var _r1068_t4 = _r1068_t3.length;
                        var _r1068_t5 = 0;
                        while (_r1068_t5 < _r1068_t4) {
                            r1068_job = _r1068_t3[_r1068_t5];
                            r1068_LigatureImpl(r1068_job, true);
                            _r1068_t5 = _r1068_t5 + 1;
                        }
                        return r1057_applyRelations(r1068_jobs.relApplications);
                    })();
                    _r1065_t5 = _r1065_t2 = _r1065_t2 + 1;
                    _r1065_t4 = _r1065_t2 < _r1065_t1;
                }
                return _r1065_t5;
            })();
        };
        var r1057_ijShrink = r1_clamp(0.6, 0.75, r1057_StrokeWidthBlend(0.6, 0.75));
        r1057_createLigatures("compatLigature1", r1057_ijShrink, r1057_ijShrink, 1, 1, r1057_para.advanceScaleI < 1 ? 0 : 0.2, [[306, ["I", "J"]], [307, ["i", "j"]], [63618, ["IAcute", "JAcute"]], [63619, ["iAcute", "jAcute"]]]);
        r1_NLDAcuteVariant.set(r1057_glyphStore.queryByUnicodeEnsured(306), r1057_glyphStore.queryNameByUnicodeEnsured(63618));
        r1_NLDAcuteVariant.set(r1057_glyphStore.queryByUnicodeEnsured(307), r1057_glyphStore.queryNameByUnicodeEnsured(63619));
        var r1057_stdShrink = r1_clamp(0.75, 0.9, r1057_StrokeWidthBlend(0.75, 0.9));
        r1057_createLigatures("compatLigature2", r1057_stdShrink, r1057_stdShrink, 1, 1, 0, [[452, ["D", "ZCaron"]], [453, ["D", "zCaron"]], [454, ["d", "zCaron"]], [455, ["L", "J"]], [456, ["L", "j"]], [457, ["l", "j"]], [458, ["N", "J"]], [459, ["N", "j"]], [460, ["n", "j"]], [497, ["D", "Z"]], [498, ["D", "z"]], [499, ["d", "z"]], [1144, ["cyrl/O", "cyrl/uk/u"]], [1145, ["cyrl/oNarrow", "cyrl/uk/u"]], [8359, ["P", "t"]], [8360, ["R", "s"]], [8367, ["D", "grek/rho"]], [8470, ["N", "numeroRightHalf"]], [127376, ["D", "J"], r1057_WideWidth1]]);
        r1_HBSCaronVariant.set(r1057_glyphStore.queryByUnicodeEnsured(497), r1057_glyphStore.queryNameByUnicodeEnsured(452));
        r1_HBSCaronVariant.set(r1057_glyphStore.queryByUnicodeEnsured(498), r1057_glyphStore.queryNameByUnicodeEnsured(453));
        r1_HBSCaronVariant.set(r1057_glyphStore.queryByUnicodeEnsured(499), r1057_glyphStore.queryNameByUnicodeEnsured(454));
        r1057_createLigatures("romanNumerals1", 1, 1, 1, 1, 0, [[8544, ["I"]], [8548, ["V"]], [8553, ["X"]], [8556, ["L"]], [8557, ["C"]], [8558, ["D"]], [8559, ["M"]], [8560, ["i"]], [8564, ["v"]], [8569, ["x"]], [8572, ["l"]], [8573, ["c"]], [8574, ["d"]], [8575, ["m"]]]);
        r1057_createLigatures("romanNumerals2", r1057_stdShrink, r1057_stdShrink, 1, 1, 0, [[8545, ["I", "I"]], [8547, ["I", "V"]], [8549, ["V", "I"]], [8552, ["I", "X"]], [8554, ["X", "I"]], [8561, ["i", "i"]], [8563, ["i", "v"]], [8565, ["v", "i"]], [8568, ["i", "x"]], [8570, ["x", "i"]]]);
        var r1057_romanShrink = r1_clamp(0.625, 0.875, r1057_StrokeWidthBlend(0.625, 0.875));
        r1057_createLigatures("romanNumerals3", r1057_romanShrink, r1057_romanShrink, 1, 1, 0, [[8546, ["I", "I", "I"]], [8550, ["V", "I", "I"]], [8555, ["X", "I", "I"]], [8562, ["i", "i", "i"]], [8566, ["v", "i", "i"]], [8571, ["x", "i", "i"]]]);
        var r1057_romanShrink4 = r1_clamp(0.5, 0.875, r1057_StrokeWidthBlend(0.5, 0.875));
        r1057_createLigatures("romanNumerals4", r1057_romanShrink4, r1057_romanShrink4, 1, 1, 0, [[8551, ["V", "I", "I", "I"]], [8567, ["v", "i", "i", "i"]]]);
        r1057_createLigatures("temperature", 0.7, 0.8, 0.75, 0.9, 0, [[8451, ["degree", "C"]], [8457, ["degree", "F"]]]);
        return r1057_createLigatures("telFax", r1057_romanShrink, r1057_romanShrink, 1, 1, 0.1, [[8481, ["T", "smcpE", "smcpL"]], [8507, ["F", "smcpA", "smcpX"]]]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r1116_xn$Capture_Ext$2Lrc2b) {
    var _r1116_t0, _r1116_t1;
    r1116_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r1116_xn$Capture_Ext$2Lrc2b, "Autobuild-Pnonetic-Ligatures", function (r1117_xn$Capture$2Lrc8, r1117_xn$ExportCapture$2Lrc4b) {
        var _r1117_t10, _r1117_t11;
        var _r1117_t0 = r1117_xn$Capture$2Lrc8;
        var r1117_xn$GlyphSaveSink$2Lrc4b = _r1117_t0["$GlyphSaveSink$"];
        var r1117_xn$NamedParameterPair$2Lrc9b = _r1117_t0["$NamedParameterPair$"];
        var r1117_xn$Exec$2Lrc5 = _r1117_t0["$Exec$"];
        var r1117_para = _r1117_t0.para;
        var r1117_AS_BASE = _r1117_t0.AS_BASE;
        var r1117_ALSO_METRICS = _r1117_t0.ALSO_METRICS;
        var r1117_DivFrame = _r1117_t0.DivFrame;
        var _r1117_t1 = r1117_xn$Capture$2Lrc8.Metrics;
        var r1117_Width = _r1117_t1.Width;
        var r1117_SB = _r1117_t1.SB;
        var r1117_Ascender = _r1117_t1.Ascender;
        var r1117_Scale = _r1117_t1.Scale;
        var r1117_HSwToV = _r1117_t1.HSwToV;
        var r1117_OX = _r1117_t1.OX;
        var r1117_HalfStroke = _r1117_t1.HalfStroke;
        var r1117_StrokeWidthBlend = _r1117_t1.StrokeWidthBlend;
        var _r1117_t2 = r1117_xn$Capture$2Lrc8.SpiroFns;
        var _r1117_t3 = r1117_xn$Capture$2Lrc8.SpiroFns;
        var r1117_xn$decor$0cao = _r1117_t3["decor@"];
        var r1117_xn$decor$0cao1 = _r1117_t3["decor@@"];
        var r1117_xn$decor$0cao11 = _r1117_t3["decor@@@"];
        var _r1117_t4 = r1117_xn$Capture$2Lrc8.BooleFns;
        var r1117_difference = _r1117_t4.difference;
        var _r1117_t5 = r1117_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r1117_MaskRight = _r1117_t5.MaskRight;
        var r1117_Ungizmo = _r1117_t5.Ungizmo;
        var r1117_Regizmo = _r1117_t5.Regizmo;
        var _r1117_t6 = r1117_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r1117_xn$queryglyph$1aao = _r1117_t6["query-glyph"];
        var r1117_xn$referglyph$1aao = _r1117_t6["refer-glyph"];
        var _r1117_t7 = r1117_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Recursive-Build"].resolve();
        var r1117_Thinner = _r1117_t7.Thinner;
        var _r1117_t8 = r1117_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Autobuild-Enclosure-Shared"].resolve();
        var r1117_CollectJobs = _r1117_t8.CollectJobs;
        var r1117_CreateDerivedFontFromJobs = _r1117_t8.CreateDerivedFontFromJobs;
        var r1117_EnsureComponentGlyphT = _r1117_t8.EnsureComponentGlyphT;
        var r1117_applyRelations = _r1117_t8.applyRelations;
        var _r1117_t9 = r1117_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Autobuild-Transformed-Shared"].resolve();
        var r1117_ToSuperscript = _r1117_t9.ToSuperscript;
        var r1117_ToSubscript = _r1117_t9.ToSubscript;
        var r1117_createPhoneticLigatures = function (r1123_tfm, r1123_prefix, r1123_adws, r1123_mockNParts, r1123__shrink, r1123_kKern, r1123_demands) {
            var r1123_tmpShrink, r1123_job, _r1123_t8, _r1123_t9;
            var r1123_ww0 = r1117_Width * r1123_adws;
            var r1123_wwM = r1123_ww0 / r1_fallback(r1123_tfm.crowdAdjScale, 1);
            var r1123_jobs = r1117_CollectJobs(r1_DECOMPOSABLE, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, r1123_prefix, "", r1123_demands);
            var r1123_shrink = r1_clamp(0, 1, r1123__shrink);
            var r1123_kern = 0;
            var _r1123_t0 = 0;
            var _r1123_t1 = 8;
            var r1123_cycle = _r1123_t0;
            while (r1123_cycle < _r1123_t1) {
                r1123_kern = r1123_kKern * (2 * r1117_SB * r1123_shrink + (r1117_HalfStroke * r1117_HSwToV(r1123_shrink) - r1117_OX * 2));
                r1123_tmpShrink = (r1123_wwM + r1123_kern * (r1123_mockNParts - 1)) / (r1123_mockNParts * r1117_Width);
                r1123_shrink = Math.max(r1123__shrink, r1_clamp(0, 1, r1123_tmpShrink));
                r1123_cycle = r1123_cycle + 1;
            }
            var r1123_thinFont = r1117_CreateDerivedFontFromJobs(r1123_jobs, [], function (r1126_gs) {
                var _r1126_t0, _r1126_t1;
                return r1117_Thinner(r1126_gs, r1123_shrink, true, r1123_tfm.crowd, r1123_tfm.crowdAdjScale);
            });
            var r1123_LigaturePlaceholderImpl = function (r1127_aw, r1127_markPlacement, r1127_mak) {
                var _r1127_t0, _r1127_t1;
                var r1127_gni = ".phonetic-ligature-placeholder@" + [r1123_prefix, r1127_aw, r1127_markPlacement, r1127_mak].join("/");
                if (r1117_xn$queryglyph$1aao(r1127_gni)) return r1127_gni;
                r1117_xn$GlyphSaveSink$2Lrc4b.save(r1127_gni, null, new r1117_xn$Capture$2Lrc8.GlyphProc(function (r1130_currentGlyph) {
                    var _r1130_t0, _r1130_t1;
                    r1130_currentGlyph.setWidth(r1127_aw);
                    if (r1127_mak) r1130_currentGlyph.include(r1117_DivFrame(r1123_adws).markSet[r1127_mak]());
                    r1130_currentGlyph.setBaseAnchor("enclosureInner", r1127_markPlacement, 0);
                    r1130_currentGlyph.setBaseAnchor("slash", r1127_aw / 2, r1117_Ascender / 2);
                    r1130_currentGlyph.include(r1123_tfm(r1123_adws));
                    return void 0;
                }));
                return r1127_gni;
            };
            var r1123_LigaturePartImpl = function (r1136_thinFont, r1136_compress, r1136_markDist, r1136_maskPos) {
                var _r1136_t0, _r1136_t1;
                return function (r1137_gidPart) {
                    var _r1137_t0, _r1137_t1;
                    var r1137_gni = ".phonetic-ligature-part." + r1137_gidPart + "@" + [r1123_prefix, r1136_compress, r1136_markDist, r1136_maskPos].join("/");
                    if (r1117_xn$queryglyph$1aao(r1137_gni)) return r1137_gni;
                    r1117_xn$GlyphSaveSink$2Lrc4b.save(r1137_gni, null, new r1117_xn$Capture$2Lrc8.GlyphProc(function (r1140_currentGlyph) {
                        var _r1140_t0, _r1140_t1;
                        r1140_currentGlyph.setWidth(0);
                        r1140_currentGlyph.include(r1117_difference(r1136_thinFont.queryByNameEnsured(r1137_gidPart), r1117_MaskRight(r1136_maskPos)));
                        r1140_currentGlyph.include(r1117_Ungizmo());
                        r1140_currentGlyph.include(r1117_Scale(r1136_compress, 1));
                        r1140_currentGlyph.include(r1117_Regizmo());
                        r1140_currentGlyph.setMarkAnchor("enclosureInner", 0, 0, r1136_markDist, 0);
                        r1140_currentGlyph.include(r1123_tfm(r1123_adws));
                        return void 0;
                    }));
                    return r1137_gni;
                };
            };
            var r1123_LigatureImpl = function (r1148_job, r1148_decomposable) {
                var r1148_gn, r1148_unicode, r1148_components, r1148_mak, r1148_sumChildrenWidth, r1148_effectiveGlyphCount, r1148_originals, r1148_dfgs, r1148_i, r1148_component, r1148_refW, r1148_compRefWw, r1148_compress, _r1148_t0, _r1148_t1, _r1148_t2, _r1148_t3, _r1148_t4, _r1148_t5, _r1148_t6;
                if (!r1117_xn$queryglyph$1aao(r1148_gn)) {
                    _r1148_t0 = r1148_job;
                    r1148_gn = _r1148_t0[0];
                    r1148_unicode = _r1148_t0[1];
                    r1148_components = _r1148_t0[2];
                    r1148_mak = _r1148_t0[3];
                    r1148_sumChildrenWidth = 0;
                    r1148_effectiveGlyphCount = 0;
                    r1148_originals = [];
                    r1148_dfgs = [];
                    _r1148_t1 = r1148_components.entries()[Symbol.iterator]();
                    _r1148_t2 = void 0;
                    while (!(_r1148_t2 = _r1148_t1.next()).done) {
                        _r1148_t3 = _r1148_t2.value;
                        r1148_i = _r1148_t3[0];
                        r1148_component = _r1148_t3[1];
                        r1148_originals[r1148_i] = r1117_xn$queryglyph$1aao(r1148_component);
                        r1148_dfgs[r1148_i] = r1123_thinFont.queryByNameEnsured(r1148_component);
                        if (r1148_originals[r1148_i].advanceWidth > 0) r1148_effectiveGlyphCount = r1148_effectiveGlyphCount + 1;
                        r1148_sumChildrenWidth = r1148_sumChildrenWidth + r1148_dfgs[r1148_i].advanceWidth;
                    }
                    r1148_refW = r1148_sumChildrenWidth - r1123_kern * (r1148_effectiveGlyphCount - 1);
                    r1148_compRefWw = r1123_wwM;
                    r1148_compress = r1_clamp(0, 1, r1148_compRefWw / r1148_refW);
                    return !r1117_xn$queryglyph$1aao(r1148_gn) ? r1117_xn$GlyphSaveSink$2Lrc4b.save(r1148_gn, r1148_unicode, new r1117_xn$Capture$2Lrc8.GlyphProc(function (r1152_currentGlyph) {
                        var r1152_i, r1152_component, _r1152_t2, _r1152_t3, _r1152_t4, _r1152_t5, _r1152_tag6;
                        var r1152_decomposition = [];
                        var r1152_baseOffset = r1123_ww0 / 2 - r1148_refW * r1148_compress / 2;
                        var _r1152_t0 = r1148_components.entries()[Symbol.iterator]();
                        var _r1152_t1 = void 0;
                        while (!(_r1152_t1 = _r1152_t0.next()).done) {
                            _r1152_t2 = _r1152_t1.value;
                            r1152_i = _r1152_t2[0];
                            r1152_component = _r1152_t2[1];
                            (function () {
                                var r1155_placeholder, r1155_part;
                                var r1155_currentIsMark = 0 === r1148_originals[r1152_i].advanceWidth;
                                var r1155_componentAdvance = r1155_currentIsMark ? 0 : r1148_compress * (r1148_dfgs[r1152_i].advanceWidth - r1123_kern);
                                var r1155_maskPos = r1148_dfgs[r1152_i].advanceWidth - r1123_kern + (r1152_i + 1 < r1148_effectiveGlyphCount ? r1148_dfgs[r1152_i + 1].advanceWidth / 2 : r1123_ww0);
                                if (r1152_i === 0) {
                                    r1155_placeholder = r1123_LigaturePlaceholderImpl(r1123_ww0, r1152_baseOffset, r1148_mak);
                                    r1152_decomposition.push(r1155_placeholder);
                                    r1152_currentGlyph.include(r1117_xn$referglyph$1aao(r1155_placeholder), r1117_AS_BASE, r1117_ALSO_METRICS);
                                }
                                return r1155_currentIsMark ? r1152_currentGlyph.include(r1117_xn$referglyph$1aao(r1152_component)) : (r1155_part = r1117_EnsureComponentGlyphT(r1152_component, r1123_LigaturePartImpl(r1123_thinFont, r1148_compress, r1155_componentAdvance, r1155_maskPos)), r1152_decomposition.push(r1155_part), r1152_currentGlyph.include(r1117_xn$referglyph$1aao(r1155_part)));
                            })();
                        }
                        if (r1148_decomposable) r1_CvDecompose.set(r1152_currentGlyph, r1152_decomposition);
                        return void 0;
                    })) : void 0;
                } else return void 0;
            };
            var _r1123_t2 = r1123_jobs.nonDecomposable;
            var _r1123_t3 = _r1123_t2.length;
            var _r1123_t4 = 0;
            while (_r1123_t4 < _r1123_t3) {
                r1123_job = _r1123_t2[_r1123_t4];
                r1123_LigatureImpl(r1123_job, false);
                _r1123_t4 = _r1123_t4 + 1;
            }
            var _r1123_t5 = r1123_jobs.decomposableJobs;
            var _r1123_t6 = _r1123_t5.length;
            var _r1123_t7 = 0;
            while (_r1123_t7 < _r1123_t6) {
                r1123_job = _r1123_t5[_r1123_t7];
                r1123_LigatureImpl(r1123_job, true);
                _r1123_t7 = _r1123_t7 + 1;
            }
            return r1117_applyRelations(r1123_jobs.relApplications);
        };
        var r1117_ToLetter = function () {
            var _r1161_t0, _r1161_t1;
            return new r1117_xn$Capture$2Lrc8.GlyphProc(function (r1163_currentGlyph) {
                var _r1163_t0, _r1163_t1;
                return void 0;
            });
        };
        var r1117_stdShrink = r1_clamp(0.625, 0.9, r1117_StrokeWidthBlend(0.625, 0.9));
        r1117_createPhoneticLigatures(r1117_ToLetter, "phonetic1", r1117_para.advanceScaleM, 2, r1117_stdShrink, 1, [[64256, ["f", "f"], null], [64257, ["f/compLigLeft1", "dotlessi/compLigRight"], null], [64258, ["f/compLigLeft3", "l/compLigRight"], null]]);
        r1117_createPhoneticLigatures(r1117_ToLetter, "phonetic2", r1117_para.advanceScaleMM, 2, r1117_stdShrink, 1, [[675, ["d/phoneticLeft1", "z/phoneticRight"], "b"], [676, ["d/phoneticLeft1", "ezh/phoneticRight"], "bp"], [677, ["d/phoneticLeft1", "zCurlyTail/phoneticRight"], "b"], [678, ["t/phoneticLeft2", "s/phoneticRight"], "b"], [679, ["t/phoneticLeft3", "esh"], "bp"], [680, ["t/phoneticLeft1", "cCurlyTail"], "b"], [681, ["f/phoneticLeft", "eng/phoneticRight"], "bp"], [682, ["l/phoneticLeft", "s/phoneticRight"], "b"], [683, ["l/phoneticLeft", "z"], "b"], [43878, ["d/phoneticLeft1", "zRTail/phoneticRight"], "bp"], [43879, ["t/phoneticLeft1", "sRTail"], "bp"], [122642, ["d/phoneticLeft1", "ezhPalatalHook/phoneticRight"], "bp"], [122647, ["t/phoneticLeft3", "eshPalatalHook"], "bp"], [122649, ["d/phoneticLeft1", "ezhRTail/phoneticRight"], "bp"], [122652, ["t/phoneticLeft3", "eshRTail/phoneticRight"], "bp"], [122655, ["d/phoneticLeft1", "eth"], "b"], [122656, ["d/phoneticLeft2", "lyogh/phoneticRight"], "bp"], [122657, ["d/phoneticLeft2", "lyoghRTail/phoneticRight"], "bp"], [122658, ["t/phoneticLeft4", "lBelt/phoneticRight"], "b"], [122659, ["t/phoneticLeft3", "lBeltRTail/phoneticRight"], "bp"], [122660, ["t/phoneticLeft1", "grek/theta/nonCursive"], "b"], [122667, ["d/phoneticLeft1", "ezhCurlyTail/phoneticRight"], "bp"], [122668, ["t/phoneticLeft3", "eshCurlyTail"], "bp"], [122670, ["d/phoneticLeft1", "zPalatalHook/phoneticRight"], "bp"], [122680, ["t/phoneticLeft2", "sPalatalHook/phoneticRight"], "bp"], [64261, ["longs/compLigLeft", "t/compLigRight"], null], [64262, ["s/compLigLeft", "t/compLigRight"], null]]);
        r1117_createPhoneticLigatures(r1117_ToLetter, "phonetic3", r1_mix(1, r1117_para.advanceScaleM, 2), 3, r1117_stdShrink, 1, [[64259, ["f/compLigLeft2", "f/compLigLeft1", "dotlessi/compLigRight"], null], [64260, ["f/compLigLeft4", "f/compLigLeft3", "l/compLigRight"], null]]);
        r1117_createPhoneticLigatures(r1117_ToSuperscript, "phoneticSuperscript", 1, 2, r1117_stdShrink, 1, [[67463, ["d/phoneticLeft1", "z/phoneticRight"], "b"], [67466, ["d/phoneticLeft1", "ezh/phoneticRight"], "bp"], [67465, ["d/phoneticLeft1", "zCurlyTail/phoneticRight"], "bp"], [67500, ["t/phoneticLeft2", "s/phoneticRight"], "b"], [67502, ["t/phoneticLeft3", "esh"], "bp"], [67499, ["t/phoneticLeft1", "cCurlyTail"], "b"], [67472, ["f/phoneticLeft", "eng/phoneticRight"], "bp"], [67481, ["l/phoneticLeft", "s/phoneticRight"], "b"], [67482, ["l/phoneticLeft", "z"], "b"], [67464, ["d/phoneticLeft1", "zRTail/phoneticRight"], "bp"], [67501, ["t/phoneticLeft1", "sRTail"], "bp"], [122848, ["d/phoneticLeft1", "ezhCurlyTail/phoneticRight"], "bp"], [122849, ["d/phoneticLeft1", "ezhRTail/phoneticRight"], "bp"], [122852, ["t/phoneticLeft3", "eshCurlyTail"], "bp"], [122853, ["t/phoneticLeft3", "eshRTail/phoneticRight"], "bp"]]);
        r1117_createPhoneticLigatures(r1117_ToSubscript, "tenSubscript", 1, 2, 1, 0.5, [[9192, ["one.lnum", "zero.lnum"], "capital"]]);
        return r1117_createPhoneticLigatures(r1117_ToLetter, "thSlash", r1117_para.advanceScaleMM, 2, r1117_stdShrink, 1, [[7546, ["t/phoneticLeft1", "h", "wideSlash"], "b"]]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r1166_xn$Capture_Ext$2Lrc2b) {
    var _r1166_t0, _r1166_t1;
    r1166_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r1166_xn$Capture_Ext$2Lrc2b, "Autobuild-Double-Emotions", function (r1167_xn$Capture$2Lrc8, r1167_xn$ExportCapture$2Lrc4b) {
        var _r1167_t9, _r1167_t10;
        var _r1167_t0 = r1167_xn$Capture$2Lrc8;
        var r1167_xn$GlyphSaveSink$2Lrc4b = _r1167_t0["$GlyphSaveSink$"];
        var r1167_xn$NamedParameterPair$2Lrc9b = _r1167_t0["$NamedParameterPair$"];
        var r1167_xn$Exec$2Lrc5 = _r1167_t0["$Exec$"];
        var r1167_para = _r1167_t0.para;
        var r1167_DivFrame = _r1167_t0.DivFrame;
        var _r1167_t1 = r1167_xn$Capture$2Lrc8.Metrics;
        var r1167_Width = _r1167_t1.Width;
        var r1167_SB = _r1167_t1.SB;
        var r1167_Scale = _r1167_t1.Scale;
        var r1167_Translate = _r1167_t1.Translate;
        var r1167_OX = _r1167_t1.OX;
        var r1167_HalfStroke = _r1167_t1.HalfStroke;
        var r1167_WideWidth2 = _r1167_t1.WideWidth2;
        var r1167_StrokeWidthBlend = _r1167_t1.StrokeWidthBlend;
        var _r1167_t2 = r1167_xn$Capture$2Lrc8.SpiroFns;
        var _r1167_t3 = r1167_xn$Capture$2Lrc8.SpiroFns;
        var r1167_xn$decor$0cao = _r1167_t3["decor@"];
        var r1167_xn$decor$0cao1 = _r1167_t3["decor@@"];
        var r1167_xn$decor$0cao11 = _r1167_t3["decor@@@"];
        var _r1167_t4 = r1167_xn$Capture$2Lrc8.BooleFns;
        var r1167_union = _r1167_t4.union;
        var _r1167_t5 = r1167_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r1167_Ungizmo = _r1167_t5.Ungizmo;
        var r1167_Regizmo = _r1167_t5.Regizmo;
        var _r1167_t6 = r1167_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r1167_xn$queryglyph$1aao = _r1167_t6["query-glyph"];
        var _r1167_t7 = r1167_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Recursive-Build"].resolve();
        var r1167_Thinner = _r1167_t7.Thinner;
        var _r1167_t8 = r1167_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Autobuild-Enclosure-Shared"].resolve();
        var r1167_CollectJobs = _r1167_t8.CollectJobs;
        var r1167_CreateDerivedFontFromJobs = _r1167_t8.CreateDerivedFontFromJobs;
        var r1167_EnsureComponentGlyphT = _r1167_t8.EnsureComponentGlyphT;
        var r1167_applyRelations = _r1167_t8.applyRelations;
        var r1167_createDoubleEmotions = function (r1172_prefix, r1172_adws, r1172__shrink1, r1172__shrink2, r1172_wadj1, r1172_wadj2, r1172_demands) {
            var _r1172_t0, _r1172_t1, _r1172_t2, _r1172_tag3;
            return (function () {
                var r1175_FMosaicWide, r1175_MosaicNameSuffix, r1175_MosaicWidth, r1175_MosaicWidthScalar, _r1175_t3, _r1175_t5, _r1175_t6, _r1175_tag7;
                var r1175_WidthKinds = [[0, ".NWID", r1167_xn$Capture$2Lrc8.Metrics.Width, 1], [1, ".WWID", r1167_xn$Capture$2Lrc8.Metrics.WideWidth0, 2]];
                var _r1175_t0 = r1175_WidthKinds;
                var _r1175_t1 = _r1175_t0.length;
                var _r1175_t2 = 0;
                var _r1175_t4 = _r1175_t2 < _r1175_t1;
                while (_r1175_t4) {
                    _r1175_t3 = _r1175_t0[_r1175_t2];
                    r1175_FMosaicWide = _r1175_t3[0];
                    r1175_MosaicNameSuffix = _r1175_t3[1];
                    r1175_MosaicWidth = _r1175_t3[2];
                    r1175_MosaicWidthScalar = _r1175_t3[3];
                    (function () {
                        var r1178_gn, r1178_unicode, r1178_c1, r1178_c2, r1178_mak, _r1178_t3;
                        var r1178_MosaicDesiredWidth = r1167_WideWidth2;
                        var r1178_MosaicMiddle = r1175_MosaicWidth / 2;
                        var r1178_MosaicUnitWidth = r1175_MosaicWidth / r1175_MosaicWidthScalar;
                        var r1178_MangleUnicode = function (r1179_unicode, r1179__desiredOverride) {
                            var _r1179_t0, _r1179_t1;
                            return r1175_MosaicWidth === (r1179__desiredOverride || r1178_MosaicDesiredWidth) ? r1179_unicode : void 0;
                        };
                        var r1178_MangleName = function (r1180_name) {
                            var _r1180_t0, _r1180_t1;
                            return r1180_name + r1175_MosaicNameSuffix;
                        };
                        var r1178_CWidth = r1175_FMosaicWide ? r1175_MosaicWidth : r1167_Width * r1172_adws;
                        var r1178_shrink1 = r1175_FMosaicWide ? 1 : r1172__shrink1;
                        var r1178_shrink2 = r1175_FMosaicWide ? 1 : r1172__shrink2;
                        var r1178_kern = r1167_SB * r1178_shrink1 + r1167_SB * r1178_shrink2 + r1167_HalfStroke * r1_mix(r1178_shrink1, r1178_shrink2, 0.5) - r1167_OX * 2;
                        var r1178_jobs = r1167_CollectJobs(r1_xn$NONDECOMPOSABLE$9Jrj, r1_xn$NOTCENTERED$9Jrj, r1_xn$ALLOWPROPORTIONAL$1aao, r1172_prefix, r1175_MosaicNameSuffix, r1172_demands);
                        var r1178_df1 = r1167_CreateDerivedFontFromJobs(r1178_jobs, [], function (r1181_gs) {
                            var _r1181_t0, _r1181_t1;
                            return r1167_Thinner(r1181_gs, r1178_shrink1, true);
                        });
                        var r1178_df2 = r1167_CreateDerivedFontFromJobs(r1178_jobs, [], function (r1182_gs) {
                            var _r1182_t0, _r1182_t1;
                            return r1167_Thinner(r1182_gs, r1178_shrink2, true);
                        });
                        var _r1178_t0 = r1178_jobs.nonDecomposable;
                        var _r1178_t1 = _r1178_t0.length;
                        var _r1178_t2 = 0;
                        while (_r1178_t2 < _r1178_t1) {
                            _r1178_t3 = _r1178_t0[_r1178_t2];
                            r1178_gn = _r1178_t3[0];
                            r1178_unicode = _r1178_t3[1];
                            r1178_c1 = _r1178_t3[2][0];
                            r1178_c2 = _r1178_t3[2][1];
                            _r1178_t3[2];
                            r1178_mak = _r1178_t3[3];
                            if (!r1167_xn$queryglyph$1aao(r1178_gn)) r1167_xn$GlyphSaveSink$2Lrc4b.save(r1178_gn, r1178_MangleUnicode(r1178_unicode), new r1167_xn$Capture$2Lrc8.GlyphProc(function (r1187_currentGlyph) {
                                var _r1187_t0, _r1187_t1;
                                r1187_currentGlyph.setWidth(r1178_CWidth);
                                if (r1178_mak) r1187_currentGlyph.include(r1167_DivFrame(r1178_CWidth / r1167_Width).markSet[r1178_mak]());
                                var r1187_dfg1 = r1178_df1.queryByNameEnsured(r1178_c1);
                                var r1187_dfg2 = r1178_df2.queryByNameEnsured(r1178_c2);
                                var r1187_sumChildrenWidth = r1187_dfg1.advanceWidth * r1172_wadj1 + r1187_dfg2.advanceWidth * r1172_wadj2;
                                var r1187_refW = r1187_sumChildrenWidth - r1178_kern;
                                r1187_currentGlyph.include(r1167_union(r1187_dfg2));
                                r1187_currentGlyph.include(r1167_Translate(r1187_dfg1.advanceWidth * r1172_wadj1 - r1178_kern, 0));
                                r1187_currentGlyph.include(r1167_union(r1187_dfg1));
                                r1187_currentGlyph.include(r1167_Ungizmo());
                                r1187_currentGlyph.include(r1167_Translate(r1187_refW * -0.5, 0));
                                r1187_currentGlyph.include(r1167_Scale(r1_clamp(0, 1, (r1178_CWidth - r1167_SB * 1.25) / (r1178_CWidth - r1167_SB * 2) * r1178_CWidth / r1187_refW), 1));
                                r1187_currentGlyph.include(r1167_Translate(r1178_CWidth * +0.5, 0));
                                r1187_currentGlyph.include(r1167_Regizmo());
                                return void 0;
                            }));
                            _r1178_t2 = _r1178_t2 + 1;
                        }
                        return r1167_applyRelations(r1178_jobs.relApplications);
                    })();
                    _r1175_t5 = _r1175_t2 = _r1175_t2 + 1;
                    _r1175_t4 = _r1175_t2 < _r1175_t1;
                }
                return _r1175_t5;
            })();
        };
        var r1167_stdShrink = r1_clamp(0.625, 0.9, r1167_StrokeWidthBlend(0.625, 0.9));
        return r1167_createDoubleEmotions("doubleemotion", r1167_para.advanceScaleM, r1167_stdShrink, r1167_stdShrink, 1, 1, [[8252, ["exclam", "exclam"]], [8263, ["question", "question"]], [8264, ["question", "exclam"]], [8265, ["exclam", "question"]]]);
    });
    return void 0;
});
r1_xn$GlyphBlocks$2Lrc2b.push(function (r1200_xn$Capture_Ext$2Lrc2b) {
    var _r1200_t0, _r1200_t1;
    r1200_xn$Capture_Ext$2Lrc2b["$Exec$"].defineGlyphBlock(r1200_xn$Capture_Ext$2Lrc2b, "Autobuild-Grouped-Digits", function (r1201_xn$Capture$2Lrc8, r1201_xn$ExportCapture$2Lrc4b) {
        var _r1201_t7, _r1201_t8;
        var _r1201_t0 = r1201_xn$Capture$2Lrc8;
        var r1201_xn$GlyphSaveSink$2Lrc4b = _r1201_t0["$GlyphSaveSink$"];
        var r1201_xn$NamedParameterPair$2Lrc9b = _r1201_t0["$NamedParameterPair$"];
        var r1201_xn$Exec$2Lrc5 = _r1201_t0["$Exec$"];
        var _r1201_t1 = r1201_xn$Capture$2Lrc8.Metrics;
        var r1201_Width = _r1201_t1.Width;
        var r1201_Descender = _r1201_t1.Descender;
        var r1201_Translate = _r1201_t1.Translate;
        var r1201_AdviceStroke = _r1201_t1.AdviceStroke;
        var _r1201_t2 = r1201_xn$Capture$2Lrc8.SpiroFns;
        var _r1201_t3 = r1201_xn$Capture$2Lrc8.SpiroFns;
        var r1201_xn$decor$0cao = _r1201_t3["decor@"];
        var r1201_xn$decor$0cao1 = _r1201_t3["decor@@"];
        var r1201_xn$decor$0cao11 = _r1201_t3["decor@@@"];
        var _r1201_t4 = r1201_xn$Capture$2Lrc8.BooleFns;
        var r1201_intersection = _r1201_t4.intersection;
        var _r1201_t5 = r1201_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore.CommonShapes.resolve();
        var r1201_HBar = _r1201_t5.HBar;
        var r1201_xn$withtransform$5sIl = _r1201_t5["with-transform"];
        var _r1201_t6 = r1201_xn$Capture$2Lrc8["$Exec$"].glyphBlockStore["Common-Derivatives"].resolve();
        var r1201_xn$referglyph$1aao = _r1201_t6["refer-glyph"];
        var r1201_createGroupedDigits = function (r1204_shrink, r1204_crowd, r1204_numberGlyphIDs) {
            var r1204_gid, r1204_nd, _r1204_t3, _r1204_t4, _r1204_t5, _r1204_t6, _r1204_t7, _r1204_t9;
            r1201_xn$GlyphSaveSink$2Lrc4b.save(".nd-shade", null, new r1201_xn$Capture$2Lrc8.GlyphProc(function (r1207_currentGlyph) {
                var _r1207_t0, _r1207_t1;
                r1207_currentGlyph.setWidth(0);
                r1207_currentGlyph.setMarkAnchor("compositeInner", 0, 0);
                r1207_currentGlyph.include(r1201_intersection(r1201_HBar.b(0, r1201_Width, r1201_Descender * 0.75, r1201_AdviceStroke(4)), new r1201_xn$Capture$2Lrc8.GlyphProc(function (r1212_currentGlyph) {
                    var _r1212_t0, _r1212_t1;
                    r1212_currentGlyph.include(r1201_xn$referglyph$1aao("denseShade.WWID"));
                    r1212_currentGlyph.include(r1201_Translate(r1201_Width * -0.5, 0));
                    return void 0;
                })));
                r1207_currentGlyph.include(r1201_Translate(-r1201_Width, 0));
                return void 0;
            }));
            var _r1204_t0 = r1204_numberGlyphIDs;
            var _r1204_t1 = _r1204_t0.length;
            var _r1204_t2 = 0;
            var _r1204_t8 = _r1204_t2 < _r1204_t1;
            while (_r1204_t8) {
                r1204_gid = _r1204_t0[_r1204_t2];
                _r1204_t3 = [0, 1, 2, 3, 4, 5, 6];
                _r1204_t4 = _r1204_t3.length;
                _r1204_t5 = 0;
                while (_r1204_t5 < _r1204_t4) {
                    r1204_nd = _r1204_t3[_r1204_t5];
                    r1201_xn$GlyphSaveSink$2Lrc4b.save(r1204_gid + ".nd" + r1204_nd, null, new r1201_xn$Capture$2Lrc8.GlyphProc(function (r1222_currentGlyph) {
                        var _r1222_t0, _r1222_t1;
                        r1222_currentGlyph.include(r1201_xn$referglyph$1aao(r1204_gid));
                        if (r1204_nd >= 3 && r1204_nd <= 5) {
                            r1222_currentGlyph.include(r1201_xn$withtransform$5sIl(r1201_Translate(r1201_Width, 0), r1201_xn$referglyph$1aao(".nd-shade")));
                            r1_CvDecompose.set(r1222_currentGlyph, [r1204_gid, ".nd-shade"]);
                        } else r1_CvDecompose.set(r1222_currentGlyph, [r1204_gid]);
                        return void 0;
                    }));
                    _r1204_t5 = _r1204_t5 + 1;
                }
                _r1204_t9 = _r1204_t2 = _r1204_t2 + 1;
                _r1204_t8 = _r1204_t2 < _r1204_t1;
            }
            return _r1204_t9;
        };
        return r1201_createGroupedDigits(0.9, 3, ["zero.lnum", "one.lnum", "two.lnum", "three.lnum", "four.lnum", "five.lnum", "six.lnum", "seven.lnum", "eight.lnum", "nine.lnum"]);
    });
    return void 0;
});


