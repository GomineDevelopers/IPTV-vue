import Vue from "vue";
import { resolve } from "q";

const app = {
    state: {
        BigScreenExpirationDate: "",
        BigScreenStartDate: "",
        PR_assignReportNum: 4, // 默认：专区4
        PR_Report_index: 8,    // 默认专区 - 8（第8个）

        ULC_region: [],
        ULC_operator: [],
        ULC_day: null,
        ULC_week: null,
        ULC_month: null,
        ULC_time_type: 0, // 0-未选择 1-天 2-周 3-月
        UVB_region: [],
        UVB_operator: [],
        UVB_playmode: [],
        UVB_programa: [],
        UVB_contenttype: [],
        UVB_day: null,
        UVB_week: null,
        UVB_picker: [],
        UVB_time_type: 0, // 0-未选择 1-天 2-周 3-范围
        UVB_programa: [],
        UVB_programa_list: [],
        UVB_programa_type_list: [],
        UVB_target_type: 0, // 默认-0-不显示  1-显示
        PR_operator: [],
        PR_day: null,
        // PR_day: "2019-07-03", //临时初始值
        PR_value_specialName: null,

        PR_week: null,
        PR_month: null,
        PR_picker: [],
        EPG_operator: [],
        EPG_programa: [],
        EPG_value_others: null,
        EPG_week: null,
        EPG_month: null,
        EPG_time_type: 0, // 0-未选择 1-周 2-月
        EPG_programa_type: 0, //  0-未选择 1-固定 2-其他

        ADD_ALL_operator: [],
        ADD_ALL_programa: [],
        ADD_ALL_week: null,
        ADD_ALL_month: null,
        ADD_ALL_time_type: 0, // 0-未选择 1-周 2-月
        ADD_VIP_region: [],
        ADD_VIP_operator: [],
        ADD_VIP_playmode: [],
        ADD_VIP_programa: [],
        ADD_VIP_valueAddedPackage: null,
        ADD_VIP_day: null,
        ADD_VIP_week: null,
        ADD_VIP_picker: [],
        ADD_VIP_time_type: 0, // 0-未选择 1-天 2-周 3-范围

        PS_time: [],
        PS_name: null,

        current_authority: [],
        ifTest: null,

        // 视图优化相关
        GuizhouChannel_unit: null
    },
    mutations: {

    },
    actions: {
        // 所有条件筛选属性初始化
        init_all_option({ commit, state }) {  // 暂且没用
            return new Promise((resolve, reject) => {
                state.PR_assignReportNum = 4;
                state.ULC_region = [];
                state.ULC_operator = [];
                state.ULC_day = null;
                state.ULC_week = null;
                state.ULC_month = null;
                // ...

                resolve("init_all_option - SUCCESS !");
            })
        },


        // /////////////////////////////////////

        // 大屏截止日期即时返回-不用Promise嵌套
        set_BigScreenExpirationDate({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.BigScreenExpirationDate = data;
                resolve("BigScreenExpirationDate - SUCCESS !");
            })
        },
        get_BigScreenExpirationDate({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.BigScreenExpirationDate);
            })
        },

        set_BigScreenStartDate({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.BigScreenStartDate = data;
                resolve("BigScreenStartDate - SUCCESS !");
            })
        },
        get_BigScreenStartDate({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.BigScreenStartDate);
            })
        },

        // /////////////////////////////////////
        set_PR_assignReportNum({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.PR_assignReportNum = data;
                resolve("PR_assignReportNum - SUCCESS !");
            })
        },
        get_PR_assignReportNum({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.PR_assignReportNum);
            })
        },
        set_PR_Report_index({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.PR_Report_index = data;
                resolve("PR_Report_index - SUCCESS !");
            })
        },
        get_PR_Report_index({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.PR_Report_index);
            })
        },
        // /////////////////////////////////////
        set_ULC_region({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ULC_region = data;
                resolve("ULC_region - SUCCESS !");
            })
        },
        get_ULC_region({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ULC_region);
            })
        },
        set_ULC_operator({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ULC_operator = data;
                resolve("ULC_operator - SUCCESS !");
                // if (data == null || data.length == 0) {
                //     state.ULC_operator = ["移动", "电信", "联通"];
                // } else {
                //     state.ULC_operator = data;
                // }
                // resolve("ULC_operator - SUCCESS !");
            })
        },
        get_ULC_operator({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ULC_operator);
                // if (state.ULC_operator == null || state.ULC_operator.length == 0) {
                //     resolve(["移动", "电信", "联通"]);
                // }
                // resolve(state.ULC_operator);
            })
        },
        set_ULC_day({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ULC_day = data;
                resolve("ULC_day - SUCCESS !");
            })
        },
        get_ULC_day({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ULC_day);
            })
        },
        set_ULC_week({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ULC_week = data;
                resolve("ULC_week - SUCCESS !");
            })
        },
        get_ULC_week({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ULC_week);
            })
        },
        set_ULC_month({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ULC_month = data;
                resolve("ULC_month - SUCCESS !");
            })
        },
        get_ULC_month({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ULC_month);
            })
        },
        set_ULC_time_type({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ULC_time_type = data;
                resolve("ULC_time_type - SUCCESS !");
            })
        },
        get_ULC_time_type({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ULC_time_type);
            })
        },
        set_UVB_region({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.UVB_region = data;
                resolve("UVB_region - SUCCESS !");
            })
        },
        get_UVB_region({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.UVB_region);
            })
        },
        set_UVB_operator({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.UVB_operator = data;
                resolve("UVB_operator - SUCCESS !");
            })
        },
        get_UVB_operator({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.UVB_operator);
            })
        },
        set_UVB_playmode({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.UVB_playmode = data;
                resolve("UVB_playmode - SUCCESS !");
            })
        },
        get_UVB_playmode({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.UVB_playmode);
            })
        },
        set_UVB_programa({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.UVB_programa = data;
                resolve("UVB_programa - SUCCESS !");
            })
        },
        get_UVB_programa({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.UVB_programa);
            })
        },
        set_UVB_contenttype({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.UVB_contenttype = data;
                resolve("UVB_contenttype - SUCCESS !");
            })
        },
        get_UVB_contenttype({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.UVB_contenttype);
            })
        },
        set_UVB_day({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.UVB_day = data;
                resolve("UVB_day - SUCCESS !");
            })
        },
        get_UVB_day({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.UVB_day);
            })
        },
        set_UVB_week({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.UVB_week = data;
                resolve("UVB_week - SUCCESS !");
            })
        },
        get_UVB_week({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.UVB_week);
            })
        },
        set_UVB_picker({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.UVB_picker = data;
                resolve("UVB_picker - SUCCESS !");
            })
        },
        get_UVB_picker({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.UVB_picker);
            })
        },
        set_UVB_time_type({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.UVB_time_type = data;
                resolve("UVB_time_type - SUCCESS !");
            })
        },
        get_UVB_time_type({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.UVB_time_type);
            })
        },
        set_UVB_programa_list({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.UVB_programa_list = data;
                resolve("UVB_programa_list - SUCCESS !");
            })
        },
        get_UVB_programa_list({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.UVB_programa_list);
            })
        },
        set_UVB_programa_type_list({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.UVB_programa_type_list = data;
                resolve("UVB_programa_type_list - SUCCESS !");
            })
        },
        get_UVB_programa_type_list({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.UVB_programa_type_list);
            })
        },
        // ////////////// 处理方式不同

        set_UVB_target_type({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                // data传任意值
                if (state.UVB_contenttype.length == 1 &&
                    state.UVB_playmode.length == 1 &&
                    state.UVB_time_type != 3) {
                    state.UVB_target_type = 1;
                }
                else {
                    state.UVB_target_type = 0;
                }
                // UVB_playmode
                // UVB_picker
                // state.UVB_target_type = data;
                resolve("UVB_target_type - SUCCESS !");
            })
        },
        get_UVB_target_type({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.UVB_target_type);
            })
        },

        // //////////////

        set_PR_operator({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.PR_operator = data;
                resolve("PR_operator - SUCCESS !");
                // if (data == null || data.length == 0) {
                //     state.PR_operator = ["移动", "电信", "联通"];
                // } else {
                //     state.PR_operator = data;
                // }
                // resolve("PR_operator - SUCCESS !");
            })
        },
        get_PR_operator({ commit, state }) {
            return new Promise((resolve, reject) => {
                // ★如果全选勾选为空，那就全部显示
                // 这里规定返回数组（因为：分支有转换成字符串，也有数组判断）
                // ▲▲▲ 由于弄条件筛选历史记录 - 获取原生值自作判断
                // if (state.PR_operator == null || state.PR_operator.length == 0) {
                //     resolve(["移动", "电信", "联通"]);
                // }
                // resolve(state.PR_operator);
                resolve(state.PR_operator);
            })
        },
        set_PR_day({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.PR_day = data;
                resolve("PR_day - SUCCESS !");
            })
        },
        get_PR_day({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.PR_day);
            })
        },
        set_PR_week({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.PR_week = data;
                resolve("PR_week - SUCCESS !");
            })
        },
        get_PR_week({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.PR_week);
            })
        },
        set_PR_month({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.PR_month = data;
                resolve("PR_month - SUCCESS !");
            })
        },
        get_PR_month({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.PR_month);
            })
        },
        set_PR_picker({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.PR_picker = data;
                resolve("PR_picker - SUCCESS !");
            })
        },
        get_PR_picker({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.PR_picker);
            })
        },
        set_PR_value_specialName({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.PR_value_specialName = data;
                resolve("PR_value_specialName - SUCCESS !");
            })
        },
        get_PR_value_specialName({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.PR_value_specialName);
            })
        },
        set_EPG_operator({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.EPG_operator = data;
                resolve("EPG_operator - SUCCESS !");
            })
        },
        get_EPG_operator({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.EPG_operator);
            })
        },
        set_EPG_programa({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.EPG_programa = data;
                resolve("EPG_programa - SUCCESS !");
            })
        },
        get_EPG_programa({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.EPG_programa);
            })
        },
        set_EPG_value_others({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.EPG_value_others = data;
                resolve("EPG_value_others - SUCCESS !");
            })
        },
        get_EPG_value_others({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.EPG_value_others);
            })
        },
        set_EPG_week({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.EPG_week = data;
                resolve("EPG_week - SUCCESS !");
            })
        },
        get_EPG_week({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.EPG_week);
            })
        },
        set_EPG_month({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.EPG_month = data;
                resolve("EPG_month - SUCCESS !");
            })
        },
        get_EPG_month({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.EPG_month);
            })
        },
        set_EPG_time_type({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.EPG_time_type = data;
                resolve("EPG_time_type - SUCCESS !");
            })
        },
        get_EPG_time_type({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.EPG_time_type);
            })
        },
        set_EPG_programa_type({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.EPG_programa_type = data;
                resolve("EPG_programa_type - SUCCESS !");
            })
        },
        get_EPG_programa_type({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.EPG_programa_type);
            })
        },
        set_ADD_ALL_operator({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ADD_ALL_operator = data;
                resolve("ADD_ALL_operator - SUCCESS !");
            })
        },
        get_ADD_ALL_operator({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ADD_ALL_operator);
            })
        },
        set_ADD_ALL_programa({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ADD_ALL_programa = data;
                resolve("ADD_ALL_programa - SUCCESS !");
            })
        },
        get_ADD_ALL_programa({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ADD_ALL_programa);
            })
        },
        set_ADD_ALL_week({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ADD_ALL_week = data;
                resolve("ADD_ALL_week - SUCCESS !");
            })
        },
        get_ADD_ALL_week({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ADD_ALL_week);
            })
        },
        set_ADD_ALL_month({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ADD_ALL_month = data;
                resolve("ADD_ALL_month - SUCCESS !");
            })
        },
        get_ADD_ALL_month({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ADD_ALL_month);
            })
        },
        set_ADD_ALL_time_type({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ADD_ALL_time_type = data;
                resolve("ADD_ALL_time_type - SUCCESS !");
            })
        },
        get_ADD_ALL_time_type({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ADD_ALL_time_type);
            })
        },
        set_ADD_VIP_region({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ADD_VIP_region = data;
                resolve("ADD_VIP_region - SUCCESS !");
            })
        },
        get_ADD_VIP_region({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ADD_VIP_region);
            })
        },
        set_ADD_VIP_operator({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ADD_VIP_operator = data;
                resolve("ADD_VIP_operator - SUCCESS !");
            })
        },
        get_ADD_VIP_operator({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ADD_VIP_operator);
            })
        },
        set_ADD_VIP_playmode({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ADD_VIP_playmode = data;
                resolve("ADD_VIP_playmode - SUCCESS !");
            })
        },
        get_ADD_VIP_playmode({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ADD_VIP_playmode);
            })
        },
        set_ADD_VIP_programa({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ADD_VIP_programa = data;
                resolve("ADD_VIP_programa - SUCCESS !");
            })
        },
        get_ADD_VIP_programa({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ADD_VIP_programa);
            })
        },
        set_ADD_VIP_valueAddedPackage({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ADD_VIP_valueAddedPackage = data;
                resolve("ADD_VIP_valueAddedPackage - SUCCESS !");
            })
        },
        get_ADD_VIP_valueAddedPackage({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ADD_VIP_valueAddedPackage);
            })
        },
        set_ADD_VIP_day({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ADD_VIP_day = data;
                resolve("ADD_VIP_day - SUCCESS !");
            })
        },
        get_ADD_VIP_day({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ADD_VIP_day);
            })
        },
        set_ADD_VIP_week({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ADD_VIP_week = data;
                resolve("ADD_VIP_week - SUCCESS !");
            })
        },
        get_ADD_VIP_week({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ADD_VIP_week);
            })
        },
        set_ADD_VIP_picker({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ADD_VIP_picker = data;
                resolve("ADD_VIP_picker - SUCCESS !");
            })
        },
        get_ADD_VIP_picker({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ADD_VIP_picker);
            })
        },
        set_ADD_VIP_time_type({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ADD_VIP_time_type = data;
                resolve("ADD_VIP_time_type - SUCCESS !");
            })
        },
        get_ADD_VIP_time_type({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ADD_VIP_time_type);
            })
        },
        set_PS_time({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.PS_time = data;
                resolve("PS_time - SUCCESS !");
            })
        },
        get_PS_time({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.PS_time);
            })
        },

        set_PS_name({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.PS_name = data;
                resolve("PS_name - SUCCESS !");
            })
        },
        get_PS_name({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.PS_name);
            })
        },

        // ///////////////// 
        set_current_authority({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.current_authority = data;
                resolve("current_authority - SUCCESS !");
            })
        },
        get_current_authority({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.current_authority);
            })
        },

        // ///////////////// 测试
        set_ifTest({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.ifTest = data;
                resolve("ifTest - SUCCESS !");
            })
        },
        get_ifTest({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.ifTest);
            })
        },

        // /////////////////
        set_GuizhouChannel_unit({ commit, state }, data) {
            return new Promise((resolve, reject) => {
                state.GuizhouChannel_unit = data;
                resolve("GuizhouChannel_unit - SUCCESS !");
            })
        },
        get_GuizhouChannel_unit({ commit, state }) {
            return new Promise((resolve, reject) => {
                resolve(state.GuizhouChannel_unit);
            })
        }


    }
}

export default app
