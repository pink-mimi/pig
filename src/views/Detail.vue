<template>
  <div class="detail">
    <!-- 顶部头 -->
    <div class="app_wrap">
      <div class="ledToAppHeader">
        <div class="ledToAppHeader_left">
          <img
            src="data:image/png;base64,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"
            alt=""
          />
          <div class="xiaozhu_desc">
            <p class="xiaozhu_desc1">下载小猪APP，随时随地预订民宿</p>
            <p class="xiaozhu_desc2">酒店之外，就住小猪</p>
          </div>
        </div>

        <div class="ledToAppHeader_right">
          <span>下载APP</span><i class="iconfont icon-jiantou"></i>
        </div>
      </div>
      <div></div>
    </div>

    <!-- 顶部登入头 -->
    <div class="header">
      <i class="iconfont icon-arrow-left return"  @click="Return"></i>
      <div class="header_title">房间详情</div>
      <i class="iconfont icon-fenxiang_2 share"></i>
      <div class="header_menu">
        <i class="iconfont icon-caidan header_menu_btn"></i>
      </div>
    </div>

    <!-- 中间内容 -->
    <div class="room_wrap">
      <!-- swiper -->
      <div class="swiper_box">
        <!--swiper组件-->

        <div class="swiper-container swiper-container1">
          <div class="swiper-wrapper">
            <div class="swiper-slide" >
              <img
                v-bind:src="arrs[0].img1"
                alt=""
              />
            </div>
            <div class="swiper-slide" >
              <img
                v-bind:src="arrs[0].img2"
                alt=""
              />
            </div>
            <div class="swiper-slide" >
              <img
                v-bind:src="arrs[0].img3"
                alt=""
              />
            </div>
            <div class="swiper-slide" >
              <img
                v-bind:src="arrs[0].img4"
                alt=""
              />
            </div>
            <div class="swiper-slide" >
              <img
                v-bind:src="arrs[0].img5"
                alt=""
              />
            </div>
         
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination1"></div>
        </div>
      </div>

      <div class="detail_box">
        <div class="detail_box1">
          <div class="detail_box1_icon">
            <span class="detail_box1_icon1">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAATlBMVEUAAACLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0fwUY2xAAAAGnRSTlMA/inpWgUB3GBGMbeleHFXHQ8L8r6wm5pJPEeDJT8AAACLSURBVBjTfdBZDsMgDARQD1sI2dP9/hctzihyy0fmA8TDkg1yJuWcpM0CvH/PfdAF+NQt9LTYQdU5NXSR6vyhh3m9Mm2M+m9botLSpjbjwVrW3THXdcBNp56ASUcBhrqVcWEPdgtjEbFZbDIzdmvN1MyUb1fbX89d9Xz7qnUZ/JaVxhSv9W1ilMt8AcP6Ay4ZEsVfAAAAAElFTkSuQmCC"
                alt=""
              />
              速订
            </span>
            <span class="detail_box1_icon2">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAATlBMVEUAAACLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0fwUY2xAAAAGnRSTlMA/inpWgUB3GBGMbeleHFXHQ8L8r6wm5pJPEeDJT8AAACLSURBVBjTfdBZDsMgDARQD1sI2dP9/hctzihyy0fmA8TDkg1yJuWcpM0CvH/PfdAF+NQt9LTYQdU5NXSR6vyhh3m9Mm2M+m9botLSpjbjwVrW3THXdcBNp56ASUcBhrqVcWEPdgtjEbFZbDIzdmvN1MyUb1fbX89d9Xz7qnUZ/JaVxhSv9W1ilMt8AcP6Ay4ZEsVfAAAAAElFTkSuQmCC"
                alt=""
              />
              长租优惠
            </span>
          </div>
          <div  v-if="arrs"  class="detail_box1_title">
            {{arrs[0].name}}
          </div>
          <div class="detail_box1_price">
            <span>¥</span>
            <span class="detail_box1_price_num"> {{arrs[0].price}}</span>
            <span class="detail_box1_price_em">起/晚</span>
          </div>
          <div class="detail_box1_promotion" v-if="arrs[0].reserve!=''||arrs[0].title1!=''">
            <div class="detail_box1_promotion_top" v-if="arrs[0].reserve!=''">
              <img 
                class="detail_box1_promotion_top_img1"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAAGXcA1uAAAABGdBTUEAALGPC/xhBQAAAuJJREFUSA29VM1LVVEQn7n3aUVFtsqVfezChRLWPyCuqkVhBdXDpysjKGnplXikuStEog8Ke1IQSUQQtchtq6jQINqWbXJVUUGo906/mXvPfe/a09d7iw6cMzO/+Thz5sw5TBjSFzwH2c/SNywK6GBdANxTSlIothiDxSNZ+mogzD0w9xNNTF2QlBaGJzXyT1htVkueHk938iBsSdz/JvD6pKgULvZIIbihvG6oIXYCWKDtLS8h/TDMbYjUF0loh4I6zCNms2uOmMdJpA3wd8xtqkbofA70IGYH5iKmC5W3ogDQwgixd4QkOgWxlzzvAkXRVfCHMG8i8hUuXZ5gZPkGW+wDWB5IkEvjrWnCZY0Wd5VxhbIam6PdzRtoIdybUfq0YrLvd2Zwz5ccF4tLSGsaO+kB4xHZQVspDOccpJSnRtnVL6xUrMeXq6R3JqgO+ye5dGlWneJmk3bi5g4uFb8ppvXGJQdDSEnLVyBZeSH9I0lJ5RFKfT7pOguepCR7oHiAG3uGaJus/syfIR/j0tgTDepG2nAOUApD3M/wl8pmMT3zW3foSvu1edxZfQ4IVa/Drxw1NXdQFKblTfNp8rspjKuYYm3+hxzfKb5Dk8VPONVQnpbDMzi09bvBzAtcHA3sHgCcLtsal8fai+negYLzmEG9Z6jr0NZvmcPiF9pIsvwazdKuOWSGx5M0NTZk2MDIBEVyLqM3gd8TN3Wh7347nTtzLMvSNJh2POdBvjt2yxmhS65ZwP6g3zChrXji1/HEz5ZtgkH0LxreYpxwOMtA0EURH4eSifHmhHqgxP/BjyF/hM79ugdQoKfmGNFh0FfGe/AT3gX/o5ARg2Yhz8NfyJMZ7e3IFGa9zpL8O2pRte+ru9ofn7mH6nYNo+kP03CEWo7apzO1jBrWMz9s2PdfHdP645ucQyeUf+7VEeq5ZOZ5tHCnhqj7Ka/et5b8HzcQvo3HkT7xWpmtqdcYGisZfwAKnQdLOWIInAAAAABJRU5ErkJggg=="
                alt=""
              />
              <span
                >{{arrs[0].reserve}}</span
              >
              <img
                class="detail_box1_promotion_top_img2"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAFpg2qXAAAABGdBTUEAALGPC/xhBQAAAdNJREFUWAntWDFOw0AQtEHiCxEdTpuWNjSpoaXjF1EQEQ1CiIhf0NFCnTS0ad0mVCH+AhIxM+b2ZF/u4IKCBNJaSvY8uztej+3V2kmy3W08HpdkzLKssttl35RNqpCqNs3/tfjJZLIQchYphRKr+yRG7eYK5Hm+hwt/y0zo2zU6v3O/7tshsFwur2AGXKdp2qfFtub7hPVfFfihAuZOXLTb7ccYirQexNZQluU+sV6vZ30gZTupcImfz+fW78uzTkkIWZDzmakeBdghiG9CsYqrAqqAKvB/FGAfZvtkX46putE2OV5gWjhrtVoHnU7nTQiclkn4CG3zWfy+POmvEjNgoy+K4kUAY924B8e/lucmVPEgv3cSG7s4q2kDMDv1vIYUvmBikGIIc238K8iwa9ZqVAFVQBVQBVQBVUAVUAVEgajJSoK/s5jALhDDCczlXQG73Mb7vEtsazIf4KrvahZMkhG+XpzX9u2S4zhmzGMLeBaYTZ9ms9mJx5XEHs87FJOQ47xL7MMkBsUeyjpkv4rxcfuwYMF898CBR0h65Y9rg4XqOYWDlz600ccY7xZ7vOAt4WWNAHEfd3GCfVET6ynWd/UXqwgaDVEFVAFVQBX4owp8AKRWpgadeiW6AAAAAElFTkSuQmCC"
                alt=""
              />
            </div>

            <div class="detail_box1_promotion_bottom" v-if="arrs[0].title1!=''">
              <i>促销</i>
              <span>{{arrs[0].title1}}</span>
              <span>{{arrs[0].title2}}</span>
              <span>{{arrs[0].title3}}</span>
            </div>
          </div>
          <div class="detail_box1_introduce">
            <div class="detail_box1_introduce_icon">
              <div class="detail_box1_introduce_icon_item" @click="qiehuan(1)">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAmVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAjHWqVAAAAMnRSTlMAgOl6ni4g975ZK/z1BQFg7tFO2A6VPxzgxYQSqKR1co1UScm5tq6bMhWRCWtC5txmO3nAoBkAAAMjSURBVHja7d3ZcqJAGIbhRlxBQBAVl7jFuC8T7v/i5pckQ82o3T0VTPo333vsyVP4gVV2qUAIIYQQQgghhL6/XvBUX9pVwbo42rbTLHcuuOZ1rb6b/qnG85pUJi/N9O8CwS0aRSm9bCs4lY/iorLg0scoeEM+RsEa8jEK1pA46mSjYA3xugMahTz3aDjEV46CCqfznW0yRGcUp9VsKChjITqjKI1+9QRlLIRG8awaRfNlUhGUsRCdUbh969Wj15oLoVG0dJYtKGMhQ41RJKtGtmxjIdko1MuuCspYSD4K+bJ9eq25kHwU6mUbC8lHoV62sZBsFOplbwRlLMSvjBeqUbTel20upBeMWqplL8br87LNhQxnnbZ62d1s2cZCvIN6FOE0igVlLERnFEn5bdnmQqo0Cs1lmwuhUZw0l20uxFc/Kdz+4G3ZJkOikmrZ23zZhUISuyKKa+3eadlqCJVsD0Vd6dHtZS/3jrhD9r83kEYhF7ytXPadIZRb3/fEZ7tciPs8kFzvYiF54WDtFwlpS5Z9Vwh1XEVeIZCkHEiWfX8I1VwGm89CLEd8TbbqmWU7n4JUxNdEEGWnaddnBGm5EkvraRZzgZTjWbklsdQW+x4PSPZBb3pKJYXWmgfknDPuyyzHztzjAaE2wbImvysPeUCoXbQqSe/K4yoPCOW/DsJUUnv66rOAnKtO6tK7ctlhAqGGjVFT8h4bs4FQ3rxzvElpMIKcW1vhjakwg1C9/eLaYGJ2ECqeXX4vU+UIobzDNHkIyDnHfn4MCLWpPQhEAPIeIIAAAggggABCAQIIIIAAAgggFCCAAAIIIIAAQgECCCCAAAIIIBQggAAihwxntiVvHHkMIIdSqq5dMR5SbaY6JTvTIatUr4npkFAT8mQ6pKQJqQMCyE+HdKxrLflBHHGtBiCAAAIIIIAAAggggAACCCCAAAIIIIAAAggggAACCCCAAAIIIIAAAogBkI51tabmEY7E0q2e/07p/+UqIPwCxLQeGxKm7HJ314/Dsiu8dUCZW3NxtTmzldT2skP8bLIDnn+9jRBCCCGEEEIIIfS9/QYYv1V0pXyLGgAAAABJRU5ErkJggg=="
                  alt=""
                />
                <p>{{arrs[0].threeIcon1}}</p>
                <div class="detail_box1_introduce_icon_item_sanjiao" :class="{active1:num==1}"></div>
              </div>
              <div class="detail_box1_introduce_icon_item " @click="qiehuan(2)">
                <img
                  src="data:image/png;base64,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"
                  alt=""
                />
                <p>{{arrs[0].threeIcon2}}</p>
                <div class="detail_box1_introduce_icon_item_sanjiao" :class="{active1:num==2}"></div>
              </div>
              <div class="detail_box1_introduce_icon_item" @click="qiehuan(3)">
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAAllBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6C80qAAAAMXRSTlMAwIBAF595YekutgMT/PBXDOWmvQjbb8YmqpKGO9+yi2lJNCDW0M1QQxv2mn90FT6X2la6EAAAAtpJREFUeNrt2ulyokAUhuGjxhVZFFBc4q7Zkzn3f3NTEYFiHNruDEwdku/5h1UW9VZvP2gCAAAAAAAAAAAAgBvuFquGNH7bJVMth0UakxlvxEJtyEiXpQrJyJzFCshEm8W6Q4gwPz3kpSXEv4Z0SAiEICSGEIQgRA0hCEGIGkIQghA1hCAEIWoIQQhC1BCCEISoIQQhCFFDCEIQolaHkOG2+/baLNRx+xYpBI/uRPH31+7O+x8hQXdg8y3Pfieiv9uOn/kW+7T+qDjEm/RYj/0ypCuWe2BNflRlyD5kfc7D1aTyWZ/drC6k32Mj6/xaeT+yEd+rKGTvsKF2bjwObOgUVBLihWxsQpkVGxtXEjJmc/aOEhP+gk0FIX3+iml6+Dj8BY5XfsiUM6N2U2ERcibZutaccWZNlQZnFqWHRJwKXYvU3B4nZnRmOVnGxCO13YkTo9JDOrldUSW/wT3H0Y+cCPd0k3fkRL/kkGxm9QLS4HLiMX9r1Y5IQ2Sn7y87ZJT9oOWQ33hm6VQzfP+47BBORKRlnS7X/IC6REYj6pcc8s4J0tPJn+73fLEjHdmaOpQc8pTOcdIzyc+NUbZ4tSz54h4h3yTkfdk6G/xx79dNQ1p65ulqPT+mJ2S3pWWTnohX934fzo8fkUXFnhpcH06XigT3XCuFJQuuF8crCJlyzSwLQnpcM12ECPNzQk4N0RztkD6JNkCIMAiRBiHSIEQahEiDEGkQIg1CpEGINAiRBiHSIEQahEiDEGn0Q341RQt/3veRukCINEUhIdfMQ0HIjGtmXxCys7lWxlRkW6tV0g6o0HCzasSmnGjIwInp+dGfL0nLkBMWiXB9gw4hRhCCEISoIQQhCFFDCEIQooYQhCBEDSEI+e4hHl/YQkJsvvDIzIhjR5LhyLERGVpw7I1keOPYmgxZY/40Jynm/GlmkTF34Ky2JMd25QxcAgAAAAAAAAAAAAAAgMRvbFFwdLfJMiUAAAAASUVORK5CYII="
                  alt=""
                />
                <p>{{arrs[0].threeIcon3}}</p>
                <div class="detail_box1_introduce_icon_item_sanjiao" :class="{active1:num==3}"></div>
              </div>
            </div>
            <div class="detail_box1_introduce_text" :class="{active1:num==1}">
              {{arrs[0].generalize1}}
            </div>
            <div class="detail_box1_introduce_text" :class="{active1:num==2}">
              {{arrs[0].generalize2}}
            </div>
            <div class="detail_box1_introduce_text" :class="{active1:num==3}">
              {{arrs[0].generalize3}}
            </div>
          </div>

          <div class="detail_box1_landlord">
            <img
             v-bind:src="arrs[0].photo"
              alt=""
            />
            <p class="detail_box1_landlord_name">{{arrs[0].landlordName}}</p>
            <p class="detail_box1_landlord_autonym">已实名认证</p>
          </div>
        </div>

        <div class="detail_box2">
          <div class="detail_box2_title">房间描述</div>
          <div class="detail_box2_desc detail_box2_desc_active">
            {{arrs[0].detail1}}
          </div>
          <div class="detail_box2_btn">
            <span>展开</span><i class="iconfont icon-sanjiao"></i>
          </div>
        </div>

        <div class="detail_box3">
          <div class="detail_box3_title">房客点评</div>
          <div class="detail_box3_remark">
            <div class="detail_box3_remark_star">
              <span class="iconfont icon-start"></span>
              <span class="iconfont icon-start"></span>
              <span class="iconfont icon-start"></span>
              <span class="iconfont icon-start"></span>
              <span class="iconfont icon-start"></span>
            </div>
            <div class="detail_box3_remark_num">5</div>
            <div class="detail_box3_remark_gengduo">
              共
              <span>11条点评</span>
              <span>·</span>
              <span>5图</span>
              <span class="iconfont icon-jiantou1 detail_box3_remark_gengduo_tubiao"></span>
            </div>
          </div>
          <p class="detail_box3_name"> {{arrs[0].evaluateName}}</p>
          <p class="detail_box3_time"> {{arrs[0].evaluateDate}}</p>
          <p class="detail_box3_desc">
            {{arrs[0].evaluateDesc}}
          </p>
          <p class="detail_box3_more">
            查看全部11条点评 <i class="iconfont icon-triangle-right"></i>
          </p>
        </div>

        <div class="detail_box4">
          <div class="detail_box4_title">房源位置</div>
          <div class="detail_box4_img">
            <img
              class="detail_box4_map"
              v-bind:src="arrs[0].gpsImg"
              alt=""
            />
            <img
              class="detail_box4_location"
              src="data:image/png;base64,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"
              alt=""
            />
          </div>
          <p class="detail_box4_location_detail">
            <i class="iconfont icon-dingwei2"></i>
            {{arrs[0].gpsName}}
          </p>
        </div>

        <div class="detail_box5">
            <div class="detail_box5_title">可租日期</div>
            <div class="detail_box5_rili">
              <div class="detail_box5_rili_item">
                <div class="detail_box5_rili_item_year">
                  <span class=" detail_box5_rili_item_year_zuo">
                    <i class="iconfont icon-jiantouyou"></i>
                  </span>
                  <span class="detail_box5_rili_item_year_text">2020.10</span>
                  <span class=" detail_box5_rili_item_year_you">
                    <i class="iconfont icon-jiantouzuo"></i>
                  </span>
                </div>

                <div class="detail_box5_rili_item_week">
                  <span>日</span>
                  <span>一</span>
                  <span>二</span>
                  <span>三</span>
                  <span>四</span>
                  <span>五</span>
                  <span>六</span>
                </div>
                <div class="detail_box5_rili_item_days">
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>

                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>

                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>

                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>

                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>

                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>

                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
                  <div class="detail_box5_rili_item_day">
                    <p class="detail_box5_rili_item_day_num">1</p> 
                    <p class="detail_box5_rili_item_day_desc">已租</p>
                  </div>
              
                  

                </div>
              </div>

            </div>
          
        </div>
        
        <div class="detail_box6">
          <div class="detail_box6_title">
            <span class="detail_box6_title_h1">配套设施</span>
            <span class="detail_box6_title_txt">
              <i class="iconfont icon-mensuo"></i>已安装小猪智能门锁
            </span>
          </div>

          <ul class="detail_box6_list">
            <li class="detail_box6_item" >
              <i class="iconfont icon-linyu"></i>
              <p>热水淋浴</p>
            </li>

              <li class="detail_box6_item" >
              <i class="iconfont icon-faci_wuxianwangluo"></i>
              <p>无线网络</p>
            </li>
              <li class="detail_box6_item" >
              <i class="iconfont icon-kongtiao"></i>
              <p>空调</p>
            </li>
              <li class="detail_box6_item" >
              <i class="iconfont icon-dianshi"></i>
              <p>电视</p>
            </li>
            
              <li class="detail_box6_item" >
              <i class="iconfont icon-bingxiang"></i>
              <p>冰箱</p>
            </li>
              <li class="detail_box6_item" >
              <i class="iconfont icon-tingchewei"></i>
              <p>停车位</p>
            </li>
              <li class="detail_box6_item" >
              <i class="iconfont icon-nuanqi"></i>
              <p>暖气</p>
            </li>
              <li class="detail_box6_item" >
              <i class="iconfont icon-dianshi"></i>
              <p>有线网络</p>
            </li>
              <li class="detail_box6_item" >
              <i class="iconfont icon-tuoxie"></i>
              <p>拖鞋</p>
            </li>
              <li class="detail_box6_item" >
              <i class="iconfont icon-faci_shouzhi"></i>
              <p>手纸</p>
            </li>
              <li class="detail_box6_item" >
              <i class="iconfont icon-yaju"></i>
              <p>牙具</p>
            </li>
              <li class="detail_box6_item" >
              <i class="iconfont icon-maojin"></i>
              <p>毛巾</p>
            </li>
              <li class="detail_box6_item" >
              <i class="iconfont icon-iconfontmuyulu"></i>
              <p>浴液 洗发水</p>
            </li>
              <li class="detail_box6_item" >
              <i class="iconfont icon-xiangzao"></i>
              <p>香皂</p>
            </li>
              <li class="detail_box6_item" >
              <i class="iconfont icon-yunxuzuofan"></i>
              <p>允许做饭</p>
            </li>
              <li class="detail_box6_item" >
              <i class="iconfont icon-yunxuxiyan"></i>
              <p>允许吸烟</p>
            </li>
              <li class="detail_box6_item" >
              <i class="iconfont icon-080juhui"></i>
              <p>允许聚会</p>
            </li>
               <li class="detail_box6_item" >
              <i class="iconfont icon-xiedaichongwu"></i>
              <p>允许带宠物</p>
            </li>
               <li class="detail_box6_item" >
              <i class="iconfont icon-faci_shiheertong"></i>
              <p>适宜儿童</p>
            </li>
               <li class="detail_box6_item" >
              <i class="iconfont icon-faci_shihelaoren"></i>
              <p>适宜老人</p>
            </li>
               <li class="detail_box6_item" >
              <i class="iconfont icon-dianti"></i>
              <p>电梯</p>
            </li>
               <li class="detail_box6_item" >
              <i class="iconfont icon-menjinxitong"></i>
              <p>门禁系统</p>
            </li>
               <li class="detail_box6_item" >
              <i class="iconfont icon-faci_yinshuishebei"></i>
              <p>饮水设施</p>
            </li>
               <li class="detail_box6_item" >
              <i class="iconfont icon-yugang"></i>
              <p>浴缸</p>
            </li>
               <li class="detail_box6_item" >
              <i class="iconfont icon-faci_shihecanjiren"></i>
              <p>适宜残疾人</p>
            </li>
         
      
          </ul>
        </div>

        
        <div class="detail_box7">
          <div class="detail_box7_title">交易规则</div>
             <div class="detail_box7_item">
            <p class="detail_box7_item_title">
               <i class="iconfont icon-6"></i>
                预订方式
            </p>
            <p class=" detail_box7_item_desc">下单即可入住，无需房东确认</p>
          </div>

          <div class="detail_box7_item">
            <p class="detail_box7_item_title">
               <i class="iconfont icon-fuwutianshu"></i>
                入住天数
            </p>
            <p class=" detail_box7_item_desc">最少入住1天，最多入住500天</p>
          </div>

          <div class="detail_box7_item">
            <p class="detail_box7_item_title">
               <i class="iconfont icon-dingjintuikuan"></i>
                在线订金比
            </p>
            <p class=" detail_box7_item_desc">订单确认后，在线支付房款的</p>
          </div>

          
          <div class="detail_box7_item">
            <p class="detail_box7_item_title">
               <i class="iconfont "></i>
                押金
            </p>
            <p class=" detail_box7_item_desc">￥500</p>
          </div>

          
          <div class="detail_box7_item">
            <p class="detail_box7_item_title">
               <i class="iconfont "></i>
                加客
            </p>
            <p class=" detail_box7_item_desc">￥100/人，允许加客1人，加客费用线下收取</p>
          </div>

            <div class="detail_box7_item">
            <p class="detail_box7_item_title">
               <i class="iconfont "></i>
                清洁费
            </p>
            <p class=" detail_box7_item_desc">不收取清洁费</p>
          </div>

            <div class="detail_box7_item">
            <p class="detail_box7_item_title">
               <i class="iconfont "></i>
                其他费用
            </p>
            <p class=" detail_box7_item_desc">加客</p>
          </div>
        </div>



        <div class="detail_box8">
          <div class="detail_box8_title">入住贴士</div>

          <div class="detail_box8_item">
            <p class="detail_box8_item_title">
               <i class="iconfont icon-xiaolian"></i>
                入住须知
            </p>
            <p class=" detail_box8_item_desc">允许做饭、允许聚会、允许带宠物、允许吸烟、独立卫生间、不接待外籍人士</p>
          </div>

          <div class="detail_box8_item">
            <p class="detail_box8_item_title">
               <i class="iconfont icon-xiaoxi"></i>
                房东对房客的要求
            </p>
            <p class=" detail_box8_item_desc">入住时间当天下午2点，退房时间次日上午11点</p>
          </div>

          <div class="detail_box8_more">
            入住细则 
            <i class="iconfont icon-triangle-right"></i>
          </div>
        </div>

        <div class="detail_box9">
          <div class="detail_box9_title">退订规则</div>
          <div class="detail_box9_list">
            <p class="detail_box9_item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAlxJREFUSA29Vj1rG0EQnTsJIVAlWSl0iIM7gV0JgUJS6sMiRl0MAVVq07vyj3AZsCCE/IRA0qRIiP0DQnChQklAH0hgo0ogUCOELm+Wm/iM76wzucvCMruzs+/t7M3MnkY7mm3b+5qmHTuO8wKmJrrhbrmGnGLtK9Y+jkaj367eV2i+WihLpdJTAJyhHwbZePUgvEA/HQ6HP7x6GSdkILLRaCR1XX8DgnfQ2aIPIS3seZ3L5Z5UKpUvk8lk691zx6NyuZxdrVYfsKHpNXrsGJ5dZjKZV/1+fyF7dRmwJ1GQMB4flLEYU/D/Xp17XR1ZiEBay+Vyb7FYfGYsdXX84bfb7XeZR0AiEA4ceMYBoq4Orp7tIul2u9Tr9SidTgtIGKm52KQfoGGyM4Sr1SoZhqF6GAaxYWzORX2z2bwUZVwSUXisg5EzPtbGHPyNuKzE3UwmktoVJ5mhoi5OBhfbYSKuwqFbKpUKbesxvElks1mOOtuj9B02m03K5/OEskKWZdF6vab5fM7lxtfeq0TUXSVQbQthIm86nSqiQqFApmlSrVajdrtNyHwaDAZe3Htj2LzVOGFxup/3VgMUOBjV63VqtVpULBaVZ53OwyUSHh2oWofM/QavDgOwA9V8hUh4ms1mgTYgucDr21JlHJNTED26qI7H40ACd8FhbB6rZwKl/IZfRsyfuwaRCJD04M17BuPwVg0f+AQLlzL/V8lYjCk4//8pZ2Z+43GKI5zmHNPdCSLHvZX8Tc4Zw/u/wMt3PLq1j/53K5BISDnP+M1yk9r3BzKZTH76hSZ7/OQfatjsHuHlNokAAAAASUVORK5CYII=" alt="">
              <span>10月13日14:00前取消，所有金额全部退还</span>
            </p>

            <p class="detail_box9_item">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAAAXNSR0IArs4c6QAAAlxJREFUSA29Vj1rG0EQnTsJIVAlWSl0iIM7gV0JgUJS6sMiRl0MAVVq07vyj3AZsCCE/IRA0qRIiP0DQnChQklAH0hgo0ogUCOELm+Wm/iM76wzucvCMruzs+/t7M3MnkY7mm3b+5qmHTuO8wKmJrrhbrmGnGLtK9Y+jkaj367eV2i+WihLpdJTAJyhHwbZePUgvEA/HQ6HP7x6GSdkILLRaCR1XX8DgnfQ2aIPIS3seZ3L5Z5UKpUvk8lk691zx6NyuZxdrVYfsKHpNXrsGJ5dZjKZV/1+fyF7dRmwJ1GQMB4flLEYU/D/Xp17XR1ZiEBay+Vyb7FYfGYsdXX84bfb7XeZR0AiEA4ceMYBoq4Orp7tIul2u9Tr9SidTgtIGKm52KQfoGGyM4Sr1SoZhqF6GAaxYWzORX2z2bwUZVwSUXisg5EzPtbGHPyNuKzE3UwmktoVJ5mhoi5OBhfbYSKuwqFbKpUKbesxvElks1mOOtuj9B02m03K5/OEskKWZdF6vab5fM7lxtfeq0TUXSVQbQthIm86nSqiQqFApmlSrVajdrtNyHwaDAZe3Htj2LzVOGFxup/3VgMUOBjV63VqtVpULBaVZ53OwyUSHh2oWofM/QavDgOwA9V8hUh4ms1mgTYgucDr21JlHJNTED26qI7H40ACd8FhbB6rZwKl/IZfRsyfuwaRCJD04M17BuPwVg0f+AQLlzL/V8lYjCk4//8pZ2Z+43GKI5zmHNPdCSLHvZX8Tc4Zw/u/wMt3PLq1j/53K5BISDnP+M1yk9r3BzKZTH76hSZ7/OQfatjsHuHlNokAAAAASUVORK5CYII=" alt="">
              <span>10月13日14:00后取消，扣除未入住首日房费，以及剩余房费的50%</span>
            </p>
          </div>
          <div class="detail_box9_detail">详细规则</div>
        </div>


      
        <div class="detail_box10">
          <div class="detail_box10_title">猜你喜欢</div>
   
        </div>

      </div>

      <div class="detail_swiper">

        <div class="swiper-container swiper-container2">
            <div class="swiper-wrapper">
                <div class="swiper-slide detail_swiper_item" v-for="(list,index) in lists" :key="index">
                    <div class="detail_swiper_item_img">
                      <img v-bind:src="list.img" alt="">
                      <div class="detail_swiper_item_img_price">￥{{list.newprice}}</div>
                    </div>
                    <div class="detail_swiper_item_text">
                      <p class="detail_swiper_item_text_name">{{list.name}}</p>
                      <p class="detail_swiper_item_text_desc1">{{list.desc1}}</p>
                      <p class="detail_swiper_item_text_desc2">
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAATlBMVEUAAACLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0eLI0fwUY2xAAAAGnRSTlMA/inpWgUB3GBGMbeleHFXHQ8L8r6wm5pJPEeDJT8AAACLSURBVBjTfdBZDsMgDARQD1sI2dP9/hctzihyy0fmA8TDkg1yJuWcpM0CvH/PfdAF+NQt9LTYQdU5NXSR6vyhh3m9Mm2M+m9botLSpjbjwVrW3THXdcBNp56ASUcBhrqVcWEPdgtjEbFZbDIzdmvN1MyUb1fbX89d9Xz7qnUZ/JaVxhSv9W1ilMt8AcP6Ay4ZEsVfAAAAAElFTkSuQmCC" alt="">
                        <span>速订</span>
                      </p>
                      <img class="detail_swiper_item_text_touxiang" v-bind:src="list.photo" alt="">
                    </div>  
                </div>
            </div>

            <div class="swiper-pagination2"></div>
        </div>
      </div>

    </div>

    
    <div class="dingwei">
      <div class="dingwei_xin">
        <i class="iconfont icon-xin"></i>
      </div>
      <div class="dingwei_lianxi">
        <i class="iconfont icon-xiaoxi"></i>
      </div>
      <div class="dingwei_price">
        <p class="dingwei_price_num">
          <span>¥</span>
          <span>{{arrs[0].price}}</span>
        </p>
        <p class="dingwei_price_qi">10.17-10.18 共1晚</p>
      </div>
      <div class="dingwei_reserve">立即预订</div>
    </div>

  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  data(){
    return{
      arrs:[
        {
          desc1: "",
          desc2: "",
          desc3: "",
          detail1: "",
          detail3: "",
          evaluateDate: "",
          evaluateDesc: "",
          evaluateName: "",
          generalize: "",
          gpsImg: "",
          gpsName: "",
          id: "1",
          img1: "",
          img2: "",
          img3: "",
          img4: "",
          img5: "",
          landlordName: "",
          name: "",
          photo: "",
          price: "",
          reserve: "",
          threeIcon1: "",
          threeIcon2: "",
          threeIcon3: "",
          title1: "",
          title2: "",
          title3: ""
        }
      ],        ///房型的数据
      lists:[

      ],      ///底部轮播数据
      num:1   /////代表三方格地方的切换
    }
   
  },
  name: "Detail",
  mounted: function () {

    setTimeout(()=>{
      var mySwiper1 = new Swiper(".swiper-container1", { // eslint-disable-line no-unused-vars
        direction: "horizontal",
        loop: true, //循环
        // autoplay: true,    //自动播放
        pagination: {
          el: '.swiper-pagination1',
          clickable:true,
        },
    
        // pagination: '.swiper-pagination',
        // paginationClickable: true,
      });
    },200)
  
    setTimeout(()=>{
      var mySwiper2 = new Swiper('.swiper-container2', {// eslint-disable-line no-unused-vars
        pagination: '.swiper-pagination2',
        slidesPerView: 'auto',
        paginationClickable: true,
        freeMode: true
      });
    },200)

    this.axios.get('http://localhost:3000/swiper').then(res=>{
    console.log(res.data.data);
    this.lists=this.lists.concat(res.data.data)

      console.log(this.lists);
    }).catch(err=>{
      console.log(err);
    })

  },
  methods:{
    Return(){
      this.$router.go(-1)
    },
    qiehuan(e){
      console.log(e);
      this.num=e
    }
  },
  watch: {
    $route: {
      handler(to) {
        // 对路由变化作出响应...
        console.log(to.query.id);
         this.axios.get('http://localhost:3000/detail_1?id='+to.query.id).then(res=>{
          console.log(res.data.data);
          this.arrs=[]
          this.arrs=this.arrs.concat(res.data.data)

            console.log(this.arrs);
          }).catch(err=>{
            console.log(err);
          })
      },
      immediate: true
    }
  }
};
</script>


<style scoped>
.detail{
  position: relative;
  margin-bottom: 1.2rem;
}
.app_wrap {
  height: 1.2rem;
  width: 100%;
  background: white;
  box-sizing: border-box;
}
.ledToAppHeader {
  box-sizing: border-box;
  padding: 0.24rem 0;
  overflow: hidden;
  border-top: 0.02rem solid #f5f5f5;
  border-bottom: 0.02rem solid #e0e0e0;
}
.ledToAppHeader_left {
  float: left;
}
.ledToAppHeader_left img {
  margin-left: 0.3rem;
  margin-right: 0.12rem;
  vertical-align: middle;
}
.xiaozhu_desc {
  display: inline-block;
  vertical-align: middle;
}
.xiaozhu_desc1 {
  font-size: 0.26rem;
  font-weight: 700;
  margin-bottom: 0.1rem;
}
.xiaozhu_desc2 {
  font-size: 0.24rem;
  color: #757575;
  height: 0.3rem;
  line-height: 0.3rem;
}

.ledToAppHeader_left img {
  width: 0.72rem;
}

.ledToAppHeader_right {
  box-sizing: border-box;
  float: right;
  margin-right: 0.3rem;
  height: 0.6rem;
  line-height: 0.6rem;
  text-align: center;
  color: #ff5a7a;
  font-weight: 700;
  border: 0.02rem solid #ff5a7a;
  border-radius: 0.4rem;
  width: 1.84rem;
  font-size: 0.28rem;
}
.ledToAppHeader_right i {
  width: 0.3rem;
  height: 0.3rem;
  background: #ff5a7a;
  color: white;
  border-radius: 100%;
  font-size: 0.24rem;
  font-weight: 400;
  margin-left: 0.1rem;
}

/* 顶部header头 */
.header {
  padding: 0 0.3rem;
  height: 1rem;
  text-align: center;
  line-height: 1rem;
  position: relative;
}
.header_title {
  font-size: 16px;
  font-weight: 700;
  color: #333333;
}
.return {
  position: absolute;
  top: 0;
  left: 0.3rem;
  font-size: 0.36rem;
  color: #cccccc;
}
.share {
  position: absolute;
  top: 0;
  right: 1rem;
  font-size: 0.36rem;
  color: #cccccc;
}
.header_menu {
  position: absolute;
  top: 0;
  right: 0.3rem;
  color: #212121;
}
.header_menu_btn {
  font-size: 26px;
}

/* 中间内容、、、、、、、、、、、、、、、、、、、 */

.swiper_box {
  width: 100%;
  height: 5rem;
  box-sizing: border-box;
  overflow: hidden;
}
.swiper_box img {
  width: 100%;
  height: 100% !important;
}

.swiper-pagination1 {
  position: absolute;
  bottom: 0.8rem;
  z-index: 100;
  text-align: center;
}

.swiper-pagination-bullet{
  width: 10px !important;
  height: 10px !important;
  border-radius: 50% !important;
  background: white !important;
}
.swiper-pagination-bullet-active{
  background: pink !important;
}

/* 轮播下面的内容 */
.detail_box {
  margin: 0.2rem 0.3rem 0;
}
.detail_box1 {
  padding-bottom: 0.4rem;
}
.detail_box1_icon {
  height: 0.64rem;
}
.detail_box1_icon1,
.detail_box1_icon2 {
  color: #720124;
  font-size: 0.24rem;
  margin-right: 0.1rem;
}
.detail_box1_icon1 img,
.detail_box1_icon2 img {
  width: 0.24rem;
  height: 0.24rem;
}
.detail_box1_title {
  font-size: 0.44rem;
  line-height: 0.6rem;
}
.detail_box1_price {
  margin-top: 0.2rem;
  color: #000000;
  font-size: 0.4rem;
}
.detail_box1_price_num {
  margin: 0 0.1rem;
}
.detail_box1_price_em {
  font-size: 0.24rem;
  color: #757575;
}

/* 促销 */
/* box1 */
.detail_box1_promotion {
  margin-top: 0.4rem;
  padding: 0.3rem 0.2rem 0.3rem 0.3rem;
  border: 0.02rem solid #ff5f7a;
  border-radius: 0.1rem;
}
.detail_box1_promotion_top {
  padding-bottom: 0.2rem;
  margin-bottom: 0.3rem;
  font-size: 0.24rem;
  font-weight: 700;
  color: #ff5f7a;
  border-bottom: 0.02rem solid #e0e0e0;
  position: relative;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
}
.detail_box1_promotion_top span {
  display: inline-block;
  line-height: 18px;
}
.detail_box1_promotion_top_img1 {
  position: absolute;
  top: 0;
  left: 0;
  width: 0.24rem;
  height: 0.24rem;
}
.detail_box1_promotion_top_img2 {
  position: absolute;
  top: 0;
  right: 0;
  width: 0.44rem;
  height: 0.44rem;
}

.detail_box1_promotion_bottom {
  line-height: 20px;
  margin-top: 0.1rem;
  color: #757575;
  font-size: 0.24rem;
}
.detail_box1_promotion_bottom span {
  font-size: 0.24rem;
  color: #ff5a7a;
  margin: 0.12rem;
}

.detail_box1_introduce {
  margin: 0.4rem 0;
}
.detail_box1_introduce_icon {
  display: flex;
  justify-content: space-between;
  background-color: #f5f5f5;
  border-radius:  0.1rem 0.1rem 0 0;

}
.detail_box1_introduce_icon_item {
  flex: 1;
  text-align: center;
  padding-top: 0.3rem;
  font-size: 0.28rem;
  color: #000000;
  font-weight: 700;
  padding-bottom: 0.4rem;
  position: relative;
}
.detail_box1_introduce_icon_item img {
  width: 0.8rem;
  height: 0.8rem;
}
.detail_box1_introduce_icon_item_sanjiao{
  display: none;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0rem;
  height: 0rem;
  border: 10px solid transparent;
  border-bottom-color: #ececec;
}

.detail_box1_introduce_text {
  display: none;
  line-height: 0.4rem;
  padding: 0.3rem 0;
  font-size: 0.28rem;
  text-align: center;
  background: #ececec;
  border-radius: 0 0 0.1rem 0.1rem;
}
.active1{
  display: block;
}

.detail_box1_landlord {
  text-align: center;
}
.detail_box1_landlord img {
  width: 1.2rem;
  height: 1.2rem;
}
.detail_box1_landlord_name {
  padding: 0.06rem 0 0.2rem 0;
  font-size: 0.36rem;
  color: #000000;
}
.detail_box1_landlord_autonym {
  font-size: 0.26rem;
}

/* box2 */

.detail_box2 {
  padding: 0.3rem 0;
  border-top: 0.02rem solid #eee;
  
}
.detail_box2_title {
  margin: 0.2rem 0;
  font-size: 0.44rem;
  color: #333333;
  font-weight: 700;
}
.detail_box2_desc {
  font-size: 0.28rem;
  line-height: 0.5rem;
}
.detail_box2_desc_active {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}
.detail_box2_btn {
  color: #ff3c83;
  font-size: 0.28rem;
  line-height: 0.54rem;
}
.detail_box2_btn i {
  font-size: 12px;
  color: #cccccc;
  display: inline-block;
  transform: scale(0.5);
}

/* box3 */
.detail_box3 {
  padding: 0.3rem 0;
  border-top: 0.02rem solid #eee;
}
.detail_box3_title {
  margin: 0.2rem 0;
  font-size: 0.44rem;
  color: #333333;
  font-weight: 700;
}
.detail_box3_remark {
  height: 1rem;
  margin-top: 0.3rem;
  background: #ffedcb;
  border-radius: 0.1rem;
  margin-bottom: 0.5rem;
  display: flex;
  box-sizing: border-box;
  line-height: 1rem;
}
.detail_box3_remark_star{
  margin-left: 0.3rem;
}
.detail_box3_remark_star span{
  font-size: 0.4rem;
  color:  rgb(252, 210, 89);
}
.detail_box3_remark_num{
  width: 0.6rem;
  line-height: 0.4rem;
  height: 0.4rem;
  font-size: 0.24rem;
  font-weight: 700;
  text-align: center;
  margin-left: 0.1rem;
      background-color: #ffd16f;
    color: #fff;
    border-radius: 0.1rem;
    margin-top: 0.32rem;
}
.detail_box3_remark_gengduo{
  color: #000;
      margin-left: 1.6rem;

}
.detail_box3_remark_gengduo_tubiao{
  color: #bdbdbd;
  font-size: 0.24rem;
  font-weight: 700;
}

.detail_box3_name {
  font-size: 0.28rem;
  color: #000000;
  line-height: 0.5rem;
  font-weight: 700;
}
.detail_box3_time {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.28rem;
}
.detail_box3_desc {
  line-height: 0.5rem;
  font-size: 0.28rem;
  color: #000000;
}
.detail_box3_more {
  line-height: 0.5rem;
  color: #ff3c83;
  font-size: 0.28rem;
  margin-bottom: 0.1rem;
}
.detail_box3_more i {
  font-size: 0.24rem;
  color: #cccccc;
}

/* box4 */
.detail_box4 {
  padding: 0.3rem 0;
  border-top: 0.02rem solid #eee;
}
.detail_box4_title {
  margin: 0.2rem 0;
  font-size: 0.44rem;
  color: #333333;
  font-weight: 700;
}
.detail_box4_img {
  height: 2.8rem;
  width: 100%;
  overflow: hidden;
  margin-top: 0.4rem;
  position: relative;
}
.detail_box4_map {
  transform: translateY(-70px);
}
.detail_box4_location {
  position: absolute;
  transform: scale(0.4);
  top: 30px;
  left: 170px;
}
.detail_box4_location_detail {
  line-height: 0.4rem;
  font-size: 0.26rem;
  padding-top: 0.3rem;
}
.detail_box4_location_detail i {
  font-size: 0.32rem;
  color: #cccccc;
}

/* box5 */
.detail_box5{
    padding: 0.3rem 0;
  border-top: 0.02rem solid #eee;
}
.detail_box5_title{
  margin: 0.2rem 0;
  font-size: 0.44rem;
  color: #333333;
  font-weight: 700;
}
.detail_box5_rili{
  padding-bottom: 0.3rem;
  margin-bottom: 0.3rem;
}

.detail_box5_rili_item_year{
  display: flex;
  justify-content: center;
  line-height: 0.74rem;
}
.detail_box5_rili_item_year span{
  width: 2rem;
  text-align: center;
}
.detail_box5_rili_item_year_zuo i{
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  background-color: #cccccc;
  border-radius: 50%;
  color: white;
  font-size: 0.28rem;
  line-height: 20px;
}
.detail_box5_rili_item_year_text{
  font-size: 0.36rem;
  font-weight: 700;
}
.detail_box5_rili_item_year_you i{
  display: inline-block;
  width: 0.4rem;
  height: 0.4rem;
  background-color: #cccccc;
  border-radius: 50%;
  color: white;
  font-size: 0.28rem;
  line-height: 20px;
}

.detail_box5_rili_item_week{
  display: flex;
  justify-content: space-between;
}
.detail_box5_rili_item_week span{
  flex: 1;
  line-height: 0.74rem;
  font-size: 0.24rem;
  color: #757575;
  margin-bottom: 0.2rem;
}

.detail_box5_rili_item_days{
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.detail_box5_rili_item_day{
  box-sizing: border-box;
  width: 14.2%;
  padding: 1;
  line-height: 15px;
  
}
.detail_box5_rili_item_day_num,.detail_box5_rili_item_day_desc{
  color: #999;
  font-size: 0.24rem;
  text-align: center;
}

/* box6 */
.detail_box6{
    padding: 0.3rem 0;
  border-top: 0.02rem solid #eee;
}
.detail_box6_title{
  display: flex;
  justify-content: space-between;
    margin: 0.2rem 0;
}
.detail_box6_title_h1{
  font-size: 0.44rem;
  color: #333333;
  font-weight: 700;
}
.detail_box6_title_txt{
  text-align: right;
  font-size: 0.28rem;
  color: #ff4081;
  line-height: 0.44rem;
}
.detail_box6_title_txt i{
  color: #cccccc;
  font-size: 0.32rem;
}
.detail_box6_list{
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}
.detail_box6_item{
  width: 25%;
  box-sizing: border-box;
  height: 1.6rem;
  color: #000000;
  text-align: center;
}
.detail_box6_item i{
  font-size: 0.48rem;
  color: #cccccc;
}
.detail_box6_item p{
  font-size: 0.28rem;
  margin-top: 0.04rem;
}

/* box7 */
.detail_box7{
      padding: 0.3rem 0;
  border-top: 0.02rem solid #eee;
}
.detail_box7_title{
  margin: 0.2rem 0;
  margin-bottom: 0.4rem;
  font-size: 0.44rem;
  color: #333333;
  font-weight: 700;
}
.detail_box7_item_title{
  line-height: 0.48rem;
  font-size: 0.28rem;
  font-weight: 700;
  color: #000000;
}
.detail_box7_item_title i{
  font-size: 0.32rem;
  color: #cccccc;
  margin-right: 0.2rem;
}
.detail_box7_item_desc{
  margin: 0 0 0.2rem 0.64rem;
  font-size: 0.28rem;
  line-height: 0.4rem;
}

/* box8 */
.detail_box8{
      padding: 0.3rem 0;
  border-top: 0.02rem solid #eee;
}
.detail_box8_title{
  margin: 0.2rem 0;
  margin-bottom: 0.4rem;
  font-size: 0.44rem;
  color: #333333;
  font-weight: 700;
}
.detail_box8_item_title{
  line-height: 0.48rem;
  font-size: 0.28rem;
  font-weight: 700;
  color: #000000;
}
.detail_box8_item_title i{
  font-size: 0.4rem;
  color: #cccccc;
  margin-right: 0.2rem;
}
.detail_box8_item_desc{
  margin: 0 0 0.2rem 0.64rem;
  font-size: 0.28rem;
  line-height: 0.4rem;
}
.detail_box8_more{
  line-height: 0.54rem;
  font-size: 0.28rem;
  color: #ff3c83;

}
.detail_box8_more i{
  font-size: 0.24rem;
  color: #cccccc;
}

/* box9 */
.detail_box9{
  padding: 0.3rem 0;
  border-top: 0.02rem solid #eee;
}
.detail_box9_title{
  margin: 0.2rem 0;
  font-size: 0.44rem;
  color: #333333;
  font-weight: 700;
}

.detail_box9_list{
  margin: 0.3rem 0;
}
.detail_box9_item{
  padding-bottom: 0.6rem;
}
.detail_box9_item:last-child{
  padding: 0;
}
.detail_box9_item img{
  width: 0.28rem;
  height: 0.28rem;
  vertical-align: middle;
}
.detail_box9_item span{
  line-height: 0.4rem;
  vertical-align: middle;
  padding-left: 0.3rem;
}
.detail_box9_detail{
  height: 0.7rem;
  line-height: 0.7rem;
  width: 1.6rem;
  border: 0.02rem solid #212121;
  border-radius: 0.1rem ;
  font-size: 0.28rem;
  font-weight: 700;
  text-align: center;
}

/* box10 */
.detail_box10{
  padding: 0.3rem 0;
  border-top: 0.02rem solid #eee;
}
.detail_box10_title{
  margin: 0.2rem 0;
  font-size: 0.44rem;
  color: #333333;
  font-weight: 700;
}

/* 底部轮播 */
.detail_swiper_item{
  margin: 0.2rem 0 0 0.3rem;
  width: 6rem !important ;
}
.detail_swiper_item_img{
  width: 6rem;
  height: 3.8rem;
  overflow: hidden;
  position: relative;
}
.detail_swiper_item_img img{
  width: 100%;
}
.detail_swiper_item_img_price{
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 0.2rem;
  font-size: 0.4rem;
  color: white;
  background: #00000099;
}
.detail_swiper_item_text{
  margin-top: 0.2rem;
  position: relative;
}
.detail_swiper_item_text_touxiang{
  position: absolute;
  right: 0;
  top: 0;
  width: 1rem;
  height: 1rem;
      right: 10px;
    top: -30px;
    border-radius: 50%;
}
.detail_swiper_item_text_name{
  line-height: 0.4rem;
  color: #000;
  font-size: 0.3rem;
  font-weight: 700;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 1.2rem;
}
.detail_swiper_item_text_desc1{
  font-size: 0.24rem;
  line-height: 0.4rem;
  color: #757575;
    white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 1.2rem;
}
.detail_swiper_item_text_desc2{
  font-size: 0.24rem;
  line-height: 0.4rem;
  color:#720124 ;
}
.detail_swiper_item_text_desc2 img{
  width: 0.24rem;
  height: 0.24rem;
  vertical-align: middle;
}
.detail_swiper_item_text_desc2 span{
  vertical-align: middle;
}


/* 顶部定位 */

.dingwei{
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  height: 1rem;
  background: white;
  border-top: 1px solid #e0e0e0;
  box-sizing: border-box;
  width: 100%;
  z-index: 99;
  display: flex;
  padding-top: 5px;
  box-sizing: border-box;
}
.dingwei_xin{
  width: 0.7rem;
  height: 0.7rem;
 border: 0.02rem solid #e0e0e0;
    border-radius: 50%;
    text-align: center;
    line-height: 0.7rem;
    margin-left: 0.3rem;
    color: #cccccc;
}
.dingwei_lianxi{
    width: 0.7rem;
  height: 0.7rem;
 border: 0.02rem solid #e0e0e0;
    border-radius: 50%;
    text-align: center;
    line-height: 0.7rem;
    margin-left: 0.2rem;
    color: #cccccc;
}
.dingwei_price{
  width: 30%;
  text-align: center;
  margin-left: 0.6rem;
}
.dingwei_price_num{
  line-height: 0.4rem;
  font-size: 0.4rem;
  color: #000;
}
.dingwei_price_qi{
  line-height: 0.4rem;
  font-size: 0.24rem;
  color: #757575;
}
.dingwei_reserve{
  height: 0.32rem;
  padding: 0.2rem;
  border-radius: 0.4rem;
  background-color: #ff4081;
  margin-left: 0.6rem;
  color: white;
  font-size: 0.3rem;
}

</style>
