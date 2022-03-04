declare const templateToys = "<div class=\"toys-container\">\n  <div class=\"toys-container__settings\">\n      <div class=\"vss-line\">\n          <div class=\"vss-line__icon voluem\"></div>\n          <div class=\"vss-line__icon snow\"></div>\n          <input type=\"search\" autocomplete=\"off\" id=\"search-input\" class=\"search-input\" placeholder=\"\u041F\u043E\u0438\u0441\u043A\">\n      </div>\n      <div class=\"sorting-line\">\n          <h3 class=\"settings-big-title\">\u0421\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C</h3>\n          <select name=\"sort_select\" class=\"sort-select\" id=\"sort-select\">\n              <option value=\"az\" selected=\"selected\">\u041F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443 \u043E\u0442 \u0410 \u0434\u043E \u042F</option>\n              <option value=\"za\">\u041F\u043E \u0430\u043B\u0444\u0430\u0432\u0438\u0442\u0443 \u043E\u0442 \u042F \u0434\u043E \u0410</option>\n              <option  value=\"19\">\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u043D\u043D\u0438\u0435</option>\n              <option value=\"91\">\u0421\u043D\u0430\u0447\u0430\u043B\u0430 \u043F\u043E\u0437\u0434\u043D\u0438\u0435</option>\n          </select>\n      </div>\n      <h3 class=\"settings-big-title\">\u041A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438</h3>\n      <p class=\"settings-main-title\">\u0424\u043E\u0440\u043C\u0430</p>\n      <div class=\"settings-shape-container\">\n          <div class=\"settings-shape-item\">\n              <div class=\"settings-shape-icon\" id=\"bell\"></div>\n              <p class=\"settings-small-title\">\u041A\u043E\u043B\u043E\u043A\u043E\u043B</p>\n          </div>\n          <div class=\"settings-shape-item\">\n              <div class=\"settings-shape-icon\" id=\"ball\"></div>\n              <p class=\"settings-small-title\">\u0428\u0430\u0440\u0438\u043A</p>\n          </div>\n          <div class=\"settings-shape-item\">\n              <div class=\"settings-shape-icon\" id=\"cone\"></div>\n              <p class=\"settings-small-title\">\u0428\u0438\u0448\u0435\u0447\u043A\u0430</p>\n          </div>\n          <div class=\"settings-shape-item\">\n              <div class=\"settings-shape-icon\" id=\"snowflake\"></div>\n              <p class=\"settings-small-title\">\u0421\u043D\u0435\u0436\u0438\u043D\u043A\u0430</p>\n          </div>\n          <div class=\"settings-shape-item\">\n              <div class=\"settings-shape-icon\" id=\"figure\"></div>\n              <p class=\"settings-small-title\">\u0424\u0438\u0433\u0443\u0440\u043A\u0430</p>\n          </div>\n      </div>\n      <p class=\"settings-main-title\">\u0413\u043E\u0434 \u043F\u0440\u0438\u043E\u0431\u0440\u0435\u0442\u0435\u043D\u0438\u044F</p>\n      <div id=\"slider-year\"></div>\n      <div class=\"span-container\">\n          <span class=\"settings-main-title\" id=\"minYear\">1940</span>\n          <span class=\"settings-main-title\" id=\"maxYear\">2020</span>\n      </div>\n      <p class=\"settings-main-title\">\u041A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u044D\u043A\u0437\u0435\u043C\u043F\u043B\u044F\u0440\u043E\u0432</p>\n      <div id=\"slider-count\"></div>\n      <div class=\"span-container\">\n          <span class=\"settings-main-title\" id=\"minCount\">1</span>\n          <span class=\"settings-main-title\" id=\"maxCount\">12</span>\n      </div>\n      <p class=\"settings-main-title\">\u0426\u0432\u0435\u0442</p>\n      <div class=\"settings-Chb-container\">\n          <input type=\"checkbox\" value=\"white\" id=\"white\" class=\"color-chb\">\n          <input type=\"checkbox\" value=\"yellow\" id=\"yellow\" class=\"color-chb\">\n          <input type=\"checkbox\" value=\"red\" id=\"red\" class=\"color-chb\">\n          <input type=\"checkbox\" value=\"blue\" id=\"blue\" class=\"color-chb\">\n          <input type=\"checkbox\" value=\"green\" id=\"green\" class=\"color-chb\">\n      </div>\n      <p class=\"settings-main-title\">\u0420\u0430\u0437\u043C\u0435\u0440\u044B</p>\n      <div class=\"checkbox-container\">\n          <label for=\"small-chb\" class=\"settings-small-title\"><input type=\"checkbox\" value=\"small\" id=\"small-chb\">\u043C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439</label>\n          <label for=\"medium-chb\" class=\"settings-small-title\"><input type=\"checkbox\" value=\"medium\" id=\"medium-chb\">\u0441\u0440\u0435\u0434\u043D\u0438\u0439</label>\n          <label for=\"big-chb\" class=\"settings-small-title\"><input type=\"checkbox\" value=\"big\" id=\"big-chb\">\u0431\u043E\u043B\u044C\u0448\u043E\u0439</label>\n      </div>\n      <label for=\"liked-chb\" class=\"settings-main-title\"><input type=\"checkbox\" value=\"all\" id=\"liked-chb\">\u0442\u043E\u043B\u044C\u043A\u043E \u043B\u044E\u0431\u0438\u043C\u044B\u0435</label>\n      <div class=\"buttons-container\">\n          <button class=\"settings-button\" id=\"reset-filters\">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u0444\u0438\u043B\u044C\u0442\u0440\u044B</button>\n          <button class=\"settings-button\" id=\"reset-settings\">\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438</button>\n      </div>\n  </div>\n  <div class=\"toys-container__toys\">\n      <div class=\"toys-container__header\">\n          <h2 class=\"settings-big-title h2\">\u0418\u0433\u0440\u0443\u0448\u043A\u0438</h2>\n          <button class=\"settings-button\" id=\"go-decorate\">Go \u043D\u0430\u0440\u044F\u0436\u0430\u0442\u044C \u0451\u043B\u043A\u0443</button>\n          <h2 class=\"settings-big-title\">\u0412\u044B\u0431\u0440\u0430\u043D\u043E \u0438\u0433\u0440\u0443\u0448\u0435\u043A: <span id=\"liked-count\">0</span> </h2>\n      </div>\n      <div class=\"toys-container__items\">\n      </div>\n  </div>\n</div>";
export default templateToys;