const templateTree =`<div class="tree-container">
    <div class="tree-settings">
        <div class="vss-line">
            <div class="vss-line__icon voluem"></div>
            <div class="vss-line__icon snow"></div>
            <button class="" id="go-home"> </button>
        </div>
        <h3 class="settings-big-title">выберите ёлку</h3>
        <div class="trees-choises">
            <div class="trees-choises__item" id="tree-1" data-number="1">
                <img src="./assets/tree/1.png" alt="tree1">
            </div>
            <div class="trees-choises__item" id="tree-2" data-number="2">
                <img src="./assets/tree/2.png" alt="tree2">
            </div>
            <div class="trees-choises__item" id="tree-3" data-number="3">
                <img src="./assets/tree/3.png" alt="tree3">
            </div>
            <div class="trees-choises__item" id="tree-4" data-number="4">
                <img src="./assets/tree/4.png" alt="tree4">
            </div>
        </div>
        <h3 class="settings-big-title">выберите фон</h3>
        <div class="background-imgs">
            <div class="background-imgs__item" id="bgi-1" data-number="1">
                <img src="./assets/bg/1.jpg" alt="">
            </div>
            <div class="background-imgs__item" id="bgi-2" data-number="2">
                <img src="./assets/bg/2.jpg" alt="">
            </div>
            <div class="background-imgs__item" id="bgi-3" data-number="3">
                <img src="./assets/bg/3.jpg" alt="">
            </div>
            <div class="background-imgs__item" id="bgi-4" data-number="4">
                <img src="./assets/bg/4.jpg" alt="">
            </div>
            <div class="background-imgs__item" id="bgi-5" data-number="5">
                <img src="./assets/bg/5.jpg" alt="">
            </div>
            <div class="background-imgs__item" id="bgi-6" data-number="6">
                <img src="./assets/bg/6.jpg" alt="">
            </div>
            <div class="background-imgs__item" id="bgi-7" data-number="7">
                <img src="./assets/bg/7.jpg" alt="">
            </div>
            <div class="background-imgs__item" id="bgi-8" data-number="8">
                <img src="./assets/bg/8.jpg" alt="">
            </div>
        </div>
        <h3 class="settings-big-title">гирлянда</h3>
        <div class="garland-line">
            <div class="garland-colors">
                <div class="garland-colors__item garland-rgb" data-color="rgb"></div>
                <div class="garland-colors__item garland-red" data-color="red"></div>
                <div class="garland-colors__item garland-green" data-color="green"></div>
                <div class="garland-colors__item garland-blue" data-color="blue"></div>
                <div class="garland-colors__item garland-yellow" data-color="yellow"></div>
            </div>
            <div class="switch-btn"></div>
        </div>
        <div class="tree-buttons-container">
            <button class="tree-settings-button settings-button" id="save">Сохранить</button>
            <button class="tree-settings-button settings-button" id="reset-settings">Сбросить настройки</button>
        </div>
    </div>
    <div class="tree-main">
        <div class="tree-main__buttons">
            <button class="tree-settings-button settings-button" id="go-toys">Хочу выбрать еще игрушки, потому что я не понял с первого раза, что нужно делать</button>
        </div>
        <div class="bigtree-container">
        </div>
    </div>
    <div class="decoration-col">
        <div>
        <h3 class="settings-big-title">игрушки</h3>
        <div class="tree__toys-conteiner">
        </div>
    </div>
    <div>
        <h3 class="settings-big-title">вы нарядили</h3>
            <div class="saved-trees">
                <div class="saved-trees__item">
                  <img src="./assets/tree/1.png" alt="tree1">
                </div>
                <div class="saved-trees__item">
                </div>
            </div>
        </div>
    </div>
</div>`

    export default templateTree;
