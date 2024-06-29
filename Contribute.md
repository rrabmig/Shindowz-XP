# RU

# Введение

## Стек:

1. React
2. Redux
3. xp.css (https://www.npmjs.com/package/xp.css)

## Тесты:

Отсутсвуют

## Как это работает:

Есть App.js , в нем захардкожены (в виду малого количества) несколько иконок приложений.
При нажатии на иконку, в глобальный стейт LaunchedAppsSlice.js добавляется данное приложение.
Массив запущенных приложений мапится в нижней части экрана (Lowbar.js), а так же в общасти рабочего стола (App.js).  
Для каждого запущенного приложения создается компонент Window, содержащий непосредственно приложение в виде компонента. Эти компоненты находятся в папке Apps. Для быстрого и удобного доступа они агрегированны в appsMap.jsx
Если по окну происходит клик, то оно становится активным (это учитывается в focused поле в LaunchedAppsSlice.js)

## Над чем можно поработать:

1. Доработать имеющиеся приложения
2. Сделать свое приложение (см. инструкцию ниже)
3. Рефакторинг
4. Доработать наполнение Menu
5. Подумать над расположением иконок на рабочем столе. Сейчас их расположения захардкожены.
6. Любые идеи приветсвуются

## Добавление приложения

1. Создать папку `components/Apps/MyNewComponent`
2. Все, относящееся к этому компоненту - отсавлять в этой папке.
3. После создания основного компонента `MyNewComponent.jsx`, добавить в `components/Apps/appsMap.jsx` в Map свой комонент:

```
    //...
    import <MyNewComponent/> from 'components/Apps/appsMap.jsx'
    //...

    const appsMap = new Map([
        ["calculator", <Calculator/>],
        ["MyNewComponent", <MyNewComponent/>], // Добавили
    ])

```

4. Захардкодить в App.js иконку с названием вашего приложения и положением
   `<Icon app={'MyNewComponent'} top={'30%'} left={'300px'}/>`
5. Что бы была картинка, добавить .ico файл в `assets/icons`
6. Добавить импорт фото в экспортируемый объект icons в файле `constants.js`

# EN

# Introduction:

## Stack:

React
Redux
xp.css (`https://www.npmjs.com/package/xp.css`)

## Tests:

None

## How it works:

There is an `App.js` file, where several hardcoded icons for applications are present. When an icon is clicked, the corresponding application is added to the global state `LaunchedAppsSlice.js`. The array of launched applications is mapped at the bottom of the screen (`Lowbar.js`) and in the desktop workspace (`App.js`). For each launched application, a Window component is created, containing the application directly as a component. These components are located in the Apps folder. For quick and convenient access, they are aggregated in `appsMap.jsx`. If a window is clicked, it becomes active (this is taken into account in the focused field in `LaunchedAppsSlice.js`)

## What can be worked on:

1. Developing the existing applications
2. Creating your own application (see the instruction below)
3. Refactoring
4. Developing the content of the Menu
5. Think about the location of the icons on the desktop. Currently, their locations are hardcoded.
6. Any ideas are welcome

## Adding an application:

1. Create a folder `components/Apps/MyNewComponent`
2. All things related to this component should be placed in this folder.
3. After creating the main component `MyNewComponent.jsx`, add it to `components/Apps/appsMap.jsx` in Map:

```
    //...
    import <MyNewComponent/> from 'components/Apps/appsMap.jsx'
    //...

    const appsMap = new Map([
        ["calculator", <Calculator/>],
        ["MyNewComponent", <MyNewComponent/>], // Added
    ])
```

4. Hardcode an icon with the name of your application and position in `App.js`

```
    <Icon app={'MyNewComponent'} top={'30%'} left={'300px'}/>
```

5. Add an .ico file to assets/icons for an image
6. Add the imported photo to the exported icons object in the constants.js file
