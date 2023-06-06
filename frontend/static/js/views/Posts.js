import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
  constructor() {
    super();
    this.setTitle("Posts");
  }

  async getHtml() {
    // return `
    //   <div class="container text-center">
    //     <h1 class="my-4">후쿠오카info.</h1>
    //     <p>
    //       후쿠오카 가고싶다~
    //     </p>
    //   </div>
    // `;

    return `
      <div class="main_header_bg"></div>
      <div class="container" id="main_box">
      <div class="container_header"></div>
      <div class="plans_container">
          <div class="plans_header">
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

          <div class="plans_list container">



          </div>
      </div>


  </div>

  <div class="main_footer_bg"></div>
    `;
  }
}
