### Проект создан с помощью CLI Create React App

## Задание

-Предметная область:

Существует некоторая крупная организация.
Физически эта организация располагается в нескольких зданиях, каждое здание состоит из комнат.
В каждой комнате может располагаться некоторое оборудование.

-Задача:

Необходимо создать клиент приложения, для просмотра редактирования оборудования в зданиях компании. 
Приложение состоит из двух панелей - в левой части можно будет просмотреть иерархию зданий/комнат, а в правой части – просмотреть имеющееся в этом здании или комнате оборудование. При выборе комнаты справа отображается оборудование комнаты, при выборе здания – оборудование всех его комнат. Комнаты здания описаны в виде иерархической структуры, где есть этажи, крылья и т.д. (см. пример тестовых данных). Возле каждого здания и комнаты в левой части следует располагать индикатор, находится ли в нем/ней оборудование.

Оборудование характеризуется наименованием и количеством. Должна быть возможность работать с оборудованием в выбранной комнате: добавлять, редактировать, удалять.

-Подзадачи

1. Отображение иерархии зданий и комнат. Загрузить с сервера и отобразить дерево зданий и комнат. Обеспечить возможность выбора зданий и комнат щелчком мышью.
2. Отображение оборудования. При выборе комнаты показывать оборудование для этой комнаты в правой панели. Показывать значок рядом с именем здания/комнаты, есть ли оборудование именно в выбранной комнате.
3. Отображение оборудования в зданиях, этажах и т.д. При выборе здания, этажа, крыла  - показывать оборудование, которое есть в выбранном узле, так в дочерних.
4. Редактирование оборудования. Если выбрана комната, которая не имеет дочерних узлов (не этаж, не крыло), то обеспечить возможность добавлять, редактировать и удалять оборудование.

-Ограничения:

Приложение состоит только из статических файлов – JavaScript, HTML, CSS. Все данные подгружаются с сервера (см. способ взаимодействия с сервером далее).

Можно использовать любые библиотеки, в т.ч. JQuery, React и т.д.

Предоставить архив, содержащий код программы и инструкцию по его развертыванию на полигоне. 

## Скрипты

### `yarn start`

Режим разработки.<br />
Открывается автоматически по адресу [http://localhost:3000](http://localhost:3000) .

Поддерживает HotReload.<br />
Ошибки линтинга выводятся в консоль.

### `yarn build`, `yarn test`, `yarn eject`

Вам не пригодятся, потому что естов я не написала, а деплоить это еще рано: тут рефакторить и рефакторить :)

## Примечания по UI
- Иерархия зданий раскрывается при нажатии на кнопку слева от названия здания, этажа.
- Серая кнопка с карандашом - редактирование, 
красная с крестом - отмена/удаление, 
зеленая - подтвеждение действия.

## TODOS проекта (чего нет, а нужно сделать)
- ! забыла о подзадаче подзадачи "2" - показывать значок рядом с именем здания/комнаты, 
есть ли оборудование именно в выбранной комнате - не сделала значка...
- тесты
- прелоадеры
- errorBoundries
- адаптивный дизайн (даже не пытайтесь смотреть на чем-то меньше iPad)
- поддержку браузеров (точно работает как положено только в Chrome)
- некоторые компоненты раздуты => atomic model точно <b>пока</b> не про этот проект
- ну и рефакторинг, конечно, внутри присутствуют "неоптимальные штуки" :)

### Done is better than perfect

Хотя я могу просидеть над тестовым еще день, и еще... Но нужно себя ограничивать - это же тестовое, так? 
И оно довольно большое для тестового...



