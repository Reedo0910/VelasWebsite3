const logJson = [{
    date: '2017-7-13',
    content: [
        '重新设计了导航栏样式，新增了多个动画效果',
        '重构了导航栏和底栏代码',
        '取消了sourcemap，大大缩小了载入文件体积'
    ]
  },
  {
    date: '2017-7-11',
    content: [
        '更改了日志的json书写格式，并为其增加了文本过滤器(Filter)，更方便了我的日志编写',
        '为前端路由增加了懒加载方式，使网页加载更加迅速',
        '修复了Log的日志在切换时，过渡效果会造成文本跳动的bug'
    ]
  },
  {
    date: '2017-7-10',
    content: [
      '使用vue-cli将Velas.xyz进行了重构。新版的Velas为SPA(单页面应用)，且完全使用了组件化开发',
      '为页面切换增加了切换动画',
      '将网页由虚拟主机搬迁到nginx服务器下，加快了网页的请求处理与载入速度'
    ]
  },
  {
    date: '2017-3-22',
    content: [
      '导航栏及部分页面逻辑修复'
    ]
  },
  {
    date: '2017-3-21',
    content: [
      '完成了Music页的排版与布局'
    ]
  },
  {
    date: '2017-3-20',
    content: [
      '优化了文件结构，缩短了第一次打开网页时文件的请求时间', '修复了Log页当当日只有一条更新日志时，项目符号无法切换的bug',
      '优化了导航栏的动画细节'
    ]
  },
  {
    date: '2017-3-15',
    content: [
      '对导航栏样式与功能进行了扩展',
      '优化了导航栏模块化设计的代码',
      '修复了Log页切换月份时的渲染问题',
      '对首页的banner的设计进行了调整'
    ]
  },
  {
    date: '2017-2-11',
    content: [
      '使用了Vue对Velas进行了重构(*由于重构的原因，之前的部分功能将暂时或永久失效)',
      '使用了全新的设计风格对Velas进行了重新设计'
    ]
  },
  {
    date: '2016-8-11',
    content: [
      '标注设计样式调整。',
      '修复了在触屏设备上标注展开后不能隐藏的bug。'
    ]
  },
  {
    date: '2016-8-8',
    content: [
      '针对移动设备和高分屏优化Talk页的定位逻辑，优化了展开/关闭文章的体验。',
      '重写了日志页中将月份列表标题固定定位的方法，修复了标题固定定位异常、日志页定位触发失效、标题固定定位超出边界等bug。',
      '修复了在Firefox中平滑定位失效的bug。',
      '日志页新增了标注信息功能。现在，带有标注的更新项都会有虚线注明。将鼠标移到其上方时，将自动显示相应的标注内容。方便了以后翻阅更新相关代码或注释备忘等。'
    ]
  },
  {
    date: '2016-8-7',
    content: [
      '优化Talk页的定位逻辑',
      '对日志页和Talk页舍弃了使用锚点的定位方法，并引入了利用jQ实现平滑定位的方法。使定位过程更加流畅。',
      '代码结构优化。'
    ]
  },
  {
    date: '2016-8-6',
    content: [
      '修复了展开动画在运行过程中被关闭，或关闭过程中被展开时，页面（动画）卡死的bug。',
      '代码结构优化'
    ]
  },
  {
    date: '2016-8-5',
    content: [
      '为Talk页文章详情的展开/关闭添加了动画，并实现了仅对展开的文章进行图片懒加载。',
      '对Talk页文章列表的代码结构进行模块化，为后台接入做准备。'
    ]
  },
  {
    date: '2016-8-4',
    content: [
      '为日志页列表的展开/关闭添加了动画。',
      '优化了日志页列表的使用逻辑和实现代码。'
    ]
  },
  {
    date: '2016-8-1',
    content: [
      '修复了一处瀑布流在CSS3实现方式下界面异常的bug',
      '修复了一处Talk页（留言板页）界面的显示bug。',
      '修复了Edge以及其他webkit手机浏览器下的日志页的月份标题在fixed状态下点击时发生错位的bug。',
      '日志页代码优化，并对日志展开行为的代码进行分离。',
      '将jQ库(版本:2.1.1)放到了服务器中，一定程度上缓解了之前打开日志页有延时的问题。'
    ]
  },
  {
    date: '2016-7-31',
    content: [
      '增加了瀑布流在CSS3下的实现方式。',
      '修复了瀑布流在JS实现方式下显示bug。',
      '修复了瀑布流的JS运行可能会在浏览器报错的bug。'
    ]
  },
  {
    date: '2016-7-29',
    content: [
      '摄影页开放，用于瀑布流视图测试。',
      '首页界面细节调整。'
    ]
  },
  {
    date: '2016-7-8',
    content: [
      'Talk界面细节调整。'
    ]
  },
  {
    date: '2016-7-7',
    content: [
      '消除了Webkit的Font Boosting特性对个别网页字体与排版的影响。现在日志页与Talk页的字体大小在安卓浏览器上都与其他页面统一了。'
    ]
  },
  {
    date: '2016-7-4',
    content: [
      '修复了Talk和实验室页面部分UI出错的bug'
    ]
  },
  {
    date: '2016-7-1',
    content: [
      '修复了网页语言会被浏览器识别为英文的bug',
      '更新了404页面的设计'
    ]
  },
  {
    date: '2016-6-19',
    content: [
      '更改了Talk页月份列表毛玻璃效果的实现方式，新的模糊效果更加自然。同时也修复了(Microsoft Edge、iOS Safari、Android Browser等)原本支持filter:blur的浏览器上Talk页月份列表背景不能显示毛玻璃效果的bug。'
    ]
  },
  {
    date: '2016-6-7',
    content: [
      '做了一些视觉风格的调整。'
    ]
  },
  {
    date: '2016-6-6',
    content: [
      '调整了Talk页月份列表的配色和排版，使得整体视觉体验更统一。'
    ]
  },
  {
    date: '2016-6-5',
    content: [
      '重新设计了Talk页的月份列表，并将打开月份列表的方式改为点击月份标签。'
    ]
  },
  {
    date: '2016-6-4',
    content: [
      '为Talk页加入月份列表和月份标签。',
      '由于兼容性问题，移除了日志页月份在移动端的浮动置顶效果。'
    ]
  },
  {
    date: '2016-6-3',
    content: [
      '为日志页加入日志列表折叠功能，并优化了一系列代码'
    ]
  },
  {
    date: '2016-6-2',
    content: [
      '引入了makefixed.js元素固定插件。优化了日志页元素固定样式（fixed）效果。',
      '优化了Talk页的文章展开逻辑'
    ]
  },
  {
    date: '2016-5-29',
    content: [
      '引入了Echo.js图像延迟加载库(lazy-loading)。现在Talk页面文章处于折叠状态下时，折叠部分的图片不会像原先那样全部加载了。',
      '日志列表逻辑改进，当更新项只有一个时显示项目符号',
      'Talk页面收起/展开文章功能代码优化'
    ]
  },
  {
    date: '2016-5-28',
    content: [
      '留言板的布局调整，并改进了JS代码'
    ]
  },
  {
    date: '2016-5-27',
    content: [
      'Talk页增加文章展开/收起按钮',
      'Talk页的留言板(demo)开放'
    ]
  },
  {
    date: '2016-5-26',
    content: [
      '调整了首页在移动端上的显示效果',
      '优化了首页和日志页的视觉效果'
    ]
  },
  {
    date: '2016-5-25',
    content: [
      'Talk页面开放'
    ]
  },
  {
    date: '2016-5-19',
    content: [
      '美化实验室环境'
    ]
  },
  {
    date: '2016-5-18',
    content: [
      '一点点美化工作'
    ]
  },
  {
    date: '2016-5-17',
    content: [
      '发现了渐变参数（linear-gradient），用于游戏页美化',
      '实验室项目列表实现了卡片效果'
    ]
  },
  {
    date: '2016-5-16',
    content: [
      'CSS代码调整，适应响应式布局',
      '游戏页开放，尝试引入Html5视频'
    ]
  },
  {
    date: '2016-5-14',
    content: [
      '全新实验室页设计',
      '日志页界面调整'
    ]
  },
  {
    date: '2016-5-13',
    content: [
      '全新日志页设计',
      '优化了代码和图片体积，大大提升了网页加载速度'
    ]
  },
  {
    date: '2016-5-12',
    content: [
      '新域名加入！启用了www.velas.xyz新网址，更便于记忆',
      '采用js图片预加载方式，提升了首页的体验',
      '开放实验室版面'
    ]
  },
  {
    date: '2016-5-11',
    content: [
      '全新的首页设计',
      '进行了图片压缩，加快了网页加载速度，减少了流量消耗',
      '开放更新日志版面，一起来见证Velas的成长',
      '结构优化'
    ]
  },
  {
    date: '2016-5-10',
    content: [
      '发现了新的动画过渡方式，现在动画更加自然流畅啦',
      '更换了首页图片',
      '结构优化'
    ]
  },
  {
    date: '2016-5-6',
    content: [
      '为网页添加了CSS3动画，使页面更加灵动',
      '增加了404提示页面和弹窗消息'
    ]
  },
  {
    date: '2016-5-3',
    content: [
      'Velas建站'
    ]
  }
]

export default logJson
