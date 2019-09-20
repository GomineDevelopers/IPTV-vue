const getters = {



    // ////////////////// 定期报告 - 指定报告（页面显示时间范围）
    // 日报-day-1 周报-week-2 月报-month-3 专区-范围-4
    PR_assignReportNum: state => state.app.PR_assignReportNum,

    // ////////////////// 条件
    // ////// region operator playmode programa
    // ////// day week month picker

    // ULC 用户生命周期（地区、运营商）（天、周、月） 
    ULC_region: state => state.app.ULC_region,
    ULC_operator: state => state.app.ULC_operator,
    ULC_day: state => state.app.ULC_day,
    ULC_week: state => state.app.ULC_week,
    ULC_month: state => state.app.ULC_month,

    // UVB 用户收视行为（地区、运营商、播放方式、栏目）（天、周、范围）
    UVB_region: state => state.app.UVB_region,
    UVB_operator: state => state.app.UVB_operator,
    UVB_playmode: state => state.app.UVB_playmode,
    UVB_programa: state => state.app.UVB_programa,
    UVB_day: state => state.app.UVB_day,
    UVB_week: state => state.app.UVB_week,
    UVB_picker: state => state.app.UVB_picker,

    // PR  定期报告（运营商）（天、周、月、范围）
    PR_operator: state => state.app.PR_operator,
    PR_day: state => state.app.PR_day,
    PR_week: state => state.app.PR_week,
    PR_month: state => state.app.PR_month,
    PR_picker: state => state.app.PR_picker,


    // EPG（运营商、栏目）（周、月）
    EPG_operator: state => state.app.EPG_operator,
    EPG_programa: state => state.app.EPG_programa,
    EPG_value_others: state => state.app.EPG_value_others,
    EPG_week: state => state.app.EPG_week,
    EPG_month: state => state.app.EPG_month,

    // ADD_ALL 增值业务-总览（运营商、栏目）（周、月）
    ADD_ALL_operator: state => state.app.ADD_ALL_operator,
    ADD_ALL_programa: state => state.app.ADD_ALL_programa,
    ADD_ALL_week: state => state.app.ADD_ALL_week,
    ADD_ALL_month: state => state.app.ADD_ALL_month,

    // ADD_VIP 增值业务-VIP（地区、运营商、播放方式、栏目）（天、周、范围）
    ADD_VIP_region: state => state.app.ADD_VIP_region,
    ADD_VIP_operator: state => state.app.ADD_VIP_operator,
    ADD_VIP_playmode: state => state.app.ADD_VIP_playmode,
    ADD_VIP_programa: state => state.app.ADD_VIP_programa,
    ADD_VIP_day: state => state.app.ADD_VIP_day,
    ADD_VIP_week: state => state.app.ADD_VIP_week,
    ADD_VIP_picker: state => state.app.ADD_VIP_picker,

    // 节目搜索（时间段）
    PS_time: state => state.app.PS_time,
    PS_name: state => state.app.PS_name,


    // 当前账号权限记录
    current_authority: state => state.app.current_authority,

    // 测试
    ifTest: state => state.app.ifTest,
    

}
export default getters
