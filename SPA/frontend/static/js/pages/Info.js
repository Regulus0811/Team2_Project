export default class {
    constructor() {
        document.title = "Info";
    }
    async getHtml() {
        return `
            <link rel="stylesheet" href="static/css/info.css">

            <div class="container" id="main_box">
            <div class="container_header"></div>
            <div class="plans_container">
                <div class="row">
                    <div class="plans_header col-12">
                        <ul class="plans_header_ul">
                            
                            <li class="plans_item" value="1">
                                <div class="plans_link text-black ">1 Weeks</div>
                                <div class="plans_link_bar bg-info bar_active"></div>
                            </li>
                            <li class="plans_item" value="2">
                                <div class="plans_link text-black">2 Weeks</div>
                                <div class="plans_link_bar bg-info"></div>
                            </li>
                            <li class="plans_item" value="3">
                                <div class="plans_link text-black">3 Weeks</div>
                                <div class="plans_link_bar bg-info"></div>
                            </li>
                            <li class="plans_item" value="4">
                                <div class="plans_link text-black">4 Weeks</div>
                                <div class="plans_link_bar bg-info"></div>
                            </li>
            
                        </ul>
                    </div>
                </div>
        
                <!-- 선택 버튼 div -->
                <div class="sel_box row-cols-12" >
                    <div class="col-2 sel_all_chkBox">
                        <input type="checkbox" class="form-check-input col-1 sel_all_chk" id="sel_all_chk"/>
                        <label for="sel_all_chk" class="sel_all_chk_lab" id="sel_all_chk_lab">
                            <span class="nodrag ">Select All</span>
                        </label>
                    </div> 
                    <div class="col-8"></div>
                    <button type="button" class="btn btn-primary sel_btn col-1">
                        Select
                    </button>
                </div>
                
                <!-- 일정 리스트 -->
                <div class="row" style="justify-content: center;">
                    <div class="plans_list row">
                    </div>
                </div>
                
                <!-- 추가,삭제 버튼-->
                <div class="btn_box row-cols-12">
                    <button type="button" class="btn btn-primary col-1 del_btn">Delete</button>
                    <button type="button" class="btn btn-primary col-1 add_btn">Add</button>
                </div>
            </div>
        </div>
        `;
    }
}