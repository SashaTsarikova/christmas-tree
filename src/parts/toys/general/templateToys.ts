const templateToys =`<div class="toys-container">
  <div class="toys-container__settings">
      <div class="vss-line">
          <div class="vss-line__icon voluem"></div>
          <div class="vss-line__icon snow"></div>
          <input type="search" autocomplete="off" id="search-input" class="search-input" placeholder="Поиск">
      </div>
      <div class="sorting-line">
          <h3 class="settings-big-title">Сортировать</h3>
          <select name="sort_select" class="sort-select" id="sort-select">
              <option value="az" selected="selected">По алфавиту от А до Я</option>
              <option value="za">По алфавиту от Я до А</option>
              <option  value="19">Сначала ранние</option>
              <option value="91">Сначала поздние</option>
          </select>
      </div>
      <h3 class="settings-big-title">Категории</h3>
      <p class="settings-main-title">Форма</p>
      <div class="settings-shape-container">
          <div class="settings-shape-item">
              <div class="settings-shape-icon" id="bell"></div>
              <p class="settings-small-title">Колокол</p>
          </div>
          <div class="settings-shape-item">
              <div class="settings-shape-icon" id="ball"></div>
              <p class="settings-small-title">Шарик</p>
          </div>
          <div class="settings-shape-item">
              <div class="settings-shape-icon" id="cone"></div>
              <p class="settings-small-title">Шишечка</p>
          </div>
          <div class="settings-shape-item">
              <div class="settings-shape-icon" id="snowflake"></div>
              <p class="settings-small-title">Снежинка</p>
          </div>
          <div class="settings-shape-item">
              <div class="settings-shape-icon" id="figure"></div>
              <p class="settings-small-title">Фигурка</p>
          </div>
      </div>
      <p class="settings-main-title">Год приобретения</p>
      <div id="slider-year"></div>
      <div class="span-container">
          <span class="settings-main-title" id="minYear">1940</span>
          <span class="settings-main-title" id="maxYear">2020</span>
      </div>
      <p class="settings-main-title">Количество экземпляров</p>
      <div id="slider-count"></div>
      <div class="span-container">
          <span class="settings-main-title" id="minCount">1</span>
          <span class="settings-main-title" id="maxCount">12</span>
      </div>
      <p class="settings-main-title">Цвет</p>
      <div class="settings-Chb-container">
          <input type="checkbox" value="white" id="white" class="color-chb">
          <input type="checkbox" value="yellow" id="yellow" class="color-chb">
          <input type="checkbox" value="red" id="red" class="color-chb">
          <input type="checkbox" value="blue" id="blue" class="color-chb">
          <input type="checkbox" value="green" id="green" class="color-chb">
      </div>
      <p class="settings-main-title">Размеры</p>
      <div class="checkbox-container">
          <label for="small-chb" class="settings-small-title"><input type="checkbox" value="small" id="small-chb">маленький</label>
          <label for="medium-chb" class="settings-small-title"><input type="checkbox" value="medium" id="medium-chb">средний</label>
          <label for="big-chb" class="settings-small-title"><input type="checkbox" value="big" id="big-chb">большой</label>
      </div>
      <label for="liked-chb" class="settings-main-title"><input type="checkbox" value="all" id="liked-chb">только любимые</label>
      <div class="buttons-container">
          <button class="settings-button" id="reset-filters">Сбросить фильтры</button>
          <button class="settings-button" id="reset-settings">Сбросить настройки</button>
      </div>
  </div>
  <div class="toys-container__toys">
      <div class="toys-container__header">
          <h2 class="settings-big-title h2">Игрушки</h2>
          <button class="settings-button" id="go-decorate">Go наряжать ёлку</button>
          <h2 class="settings-big-title">Выбрано игрушек: <span id="liked-count">0</span> </h2>
      </div>
      <div class="toys-container__items">
      </div>
  </div>
</div>`

export default templateToys;

