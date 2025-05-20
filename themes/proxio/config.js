/**
 * 另一个落地页主题
 */
const CONFIG = {
    PROXIO_WELCOME_COVER_ENABLE: true, //是否显示页面进入的欢迎文字
    PROXIO_WELCOME_TEXT: '欢迎来到易哒情趣分享，点击任意位置进入', // 欢迎文字，留空则不启用

    // 英雄区块导航
    PROXIO_HERO_ENABLE: true, // 开启英雄区
    PROXIO_HERO_TITLE_1: '两性相关的 Yida 笔记的知识分享网站', // 英雄区文字
    PROXIO_HERO_TITLE_2: '通过笔记无感知地分享、成倍放大您的情绪价值', // 英雄区文字
    // 英雄区两个按钮，如果TEXT留空则隐藏按钮
    /*PROXIO_HERO_BUTTON_1_TEXT: '开始体验', // 英雄区按钮
    PROXIO_HERO_BUTTON_1_URL:
        'https://docs.tangly1024.com/article/vercel-deploy-notion-next', // 英雄区按钮*/
    PROXIO_HERO_BUTTON_2_TEXT: '在Github上关注', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_URL: 'cr.yidae.eu.org', // 英雄区按钮
    PROXIO_HERO_BUTTON_2_ICON: '/images/starter/github.svg', // 英雄区按钮2的图标，不需要则留空

    // 英雄区配图，如需隐藏，改为空值即可 ''
    PROXIO_HERO_BANNER_IMAGE: '', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
    PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/


    // 文章区块
    PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
    PROXIO_BLOG_TITLE: '作品',
    PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
    PROXIO_BLOG_TEXT_1: '我的最新动态',

    // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: '', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: '',
    PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: '',


    PROXIO_ANNOUNCEMENT_ENABLE: true, //公告文字区块

    // 特性区块
    PROXIO_FEATURE_ENABLE: true, // 特性区块开关
    PROXIO_FEATURE_TITLE: '为什么选我',
    PROXIO_FEATURE_TEXT_1: '为独处时光，打造专属浪漫',
    PROXIO_FEATURE_TEXT_2:
        '每一次触碰，都像一场温柔的对话，带你探索自我，发现身体的隐秘欢愉，在独处中拥抱最真实的自己。',

    // 特性1
    PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
    PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
    PROXIO_FEATURE_1_TITLE_1: '让爱意升温',
    PROXIO_FEATURE_1_TEXT_1: '细腻的质感，创新的设计，将亲密氛围烘托到极致，让每一次相拥、每一个吻都饱含深情，让爱在此刻绽放出更绚烂的光彩。',

    PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
    PROXIO_FEATURE_2_ICON_IMG_URL: '', 
    PROXIO_FEATURE_2_TITLE_1: '书写私密故事',
    PROXIO_FEATURE_2_TEXT_1: '每一款情趣产品，都是一个独特的故事。它可以是俏皮的、浪漫的、热烈的…… 在这里，你可以尽情发挥想象，与伴侣共同编织只属于你们的私密篇章，让爱情在创意中不断升温。',

    PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
    PROXIO_FEATURE_2_ICON_IMG_URL: '',
    PROXIO_FEATURE_3_TITLE_1: '解锁新体验',
    PROXIO_FEATURE_3_TEXT_1: '亲密关系更需要惊喜，从别具一格的造型到充满巧思的功能，每一款都能打破常规，为你开启未知的快乐之旅，让平凡日子也能充满新鲜感。',

    PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
    PROXIO_FEATURE_BUTTON_URL: 'https://github.com/tangly1024/NotionNext', // 按钮跳转

    // 首页生涯区块
    PROXIO_CAREER_ENABLE: true, // 区块开关
    PROXIO_CAREER_TITLE: '生涯',
    PROXIO_CAREER_TEXT:
        '以下是我的职业生涯',

    // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
    PROXIO_CAREERS: [
        { title: 'Adult Products Tester', bio: '2016-2020', text: 'With a deep focus on the adult products field, I have systematically experienced over 100 erotic products, covering the entire product range. Leveraging my professional perspective and extensive practical experience, I conduct in - depth analyses from multiple dimensions, such as materials, functions, and user experience. I accurately grasp the characteristics of each product, thoroughly explore their advantages and disadvantages, providing professional references for product selection and optimization.' },
        { title: 'Adult Products Designer', bio: '2020-2022', text: 'With a deep focus on the design of erotic products, I have meticulously crafted dozens of innovative creations, unlocking diverse intimate experiences for over 500,000 users and infusing their single lives with unique charm. Each product embodies distinctive ingenuity. From the delicate texture of materials to the innovative design of functions, all are custom - tailored for exploring private pleasures. In a genuine, warm, and loving manner, these products redefine new horizons of erotic life.​' },
        { title: 'Self-Employed Intimate Products Designer', bio: '2022-Now', text: 'As a freelance erotic products designer, I have broken free from all constraints, freely expressing my unique understanding of sensuality. I pour my unrestrained creativity and meticulous ingenuity into every product without reservation. From the careful selection of materials to the bold innovation in shapes and functions, everything is aimed at breaking the mold and unlocking entirely new intimate experiences. With these creations that embody the spirit of freedom, I aspire to infuse my users with endless erotic vitality, filling every corner of life with romance and surprises, and imbuing each intimate moment with meaning and value.' }
    ],

    // 首页用户测评区块
    PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
    PROXIO_TESTIMONIALS_TITLE: '用户反馈',
    PROXIO_TESTIMONIALS_TEXT_1: '我们的用户怎么说',
    PROXIO_TESTIMONIALS_TEXT_2:
        '超 50 万用户信赖的情趣选购殿堂，这里不仅是产品的集合地，更是暗夜温柔的守护者。',

    // 用户测评处的跳转按钮
    PROXIO_TESTIMONIALS_BUTTON_URL: '/didime',
    PROXIO_TESTIMONIALS_BUTTON_TEXT: '联系我',

    // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
    PROXIO_TESTIMONIALS_ITEMS: [
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '每一寸纹理都精准复刻真实触感，柔软又有弹性的材质像温柔拥抱。细腻亲肤的表面，搭配加热功能，让每一次互动都仿佛置身真实场景，沉浸感拉满，私密的快乐时光就此开启！ ',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar/m001.jpg',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Ryan_G',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '情趣倒膜',
            PROXIO_TESTIMONIALS_ITEM_URL: 'http://xcx.yidae.cn/aaNJQ'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '穿上它的瞬间，自信与性感油然而生。精致蕾丝勾勒曲线，镂空设计若隐若现，每一处细节都在诉说着诱惑。它不只是一件衣服，更是唤醒魅力的魔法道具，让亲密时刻充满无限遐想。',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar/wm001.jpg',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '情趣内衣',
            PROXIO_TESTIMONIALS_ITEM_URL: 'http://xcx.yidae.cn/aVzRh'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '当束缚与释放交织，禁忌与刺激碰撞，全新的感官世界就此打开。细腻的皮革触感，精巧的扣锁设计，每一次尝试都是对欲望的深度探索。在这场充满张力的游戏里，解锁别样的亲密体验。',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar/m002.jpg',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: 'SM 情趣道具',
            PROXIO_TESTIMONIALS_ITEM_URL: 'http://xcx.yidae.cn/aVzZ1'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '轻轻一喷，时间仿佛被掌控。延长欢愉时刻，告别仓促，让自信回归。温和配方，不麻木不刺激，只留下更持久的快乐与满足，和伴侣一同沉浸在绵延不绝的亲密时光中。',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar/m003.jpg',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: '迪升disheng ',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '延时喷剂',
            PROXIO_TESTIMONIALS_ITEM_URL: 'http://xcx.yidae.cn/7a0Dx'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT:
                '多种震动模式随心切换，从轻柔酥麻到强劲震撼，精准刺激每一处敏感地带。小巧便携的设计，静音又私密，无论是独处还是与伴侣互动，都能带来意想不到的极致愉悦，探索身体的无限可能。',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar/wm002.jpg',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'AnJhon',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '振动棒',
            PROXIO_TESTIMONIALS_ITEM_URL: 'http://xcx.yidae.cn/cqoQ1'
        },
        {
            PROXIO_TESTIMONIALS_ITEM_TEXT: '掌心大小的迷你精灵，却藏着无尽的欢愉能量。轻轻一按，多种频率震动瞬间激活，酥麻感从私密处蔓延全身。无论是偷偷藏在裙摆下，享受外出时的隐秘刺激；还是与伴侣依偎时，用它点燃激情的火苗，都能轻松打破平淡，让每一刻亲密都充满惊喜与期待，解锁你从未想象过的快乐阈值。',
            PROXIO_TESTIMONIALS_ITEM_AVATAR:
                '/avatar/wm003.jpg',
            PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'LUCEN',
            PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '情趣跳蛋',
            PROXIO_TESTIMONIALS_ITEM_URL: 'http://xcx.yidae.cn/daZ2q'
        }
    ],

    //   FAQ 常见问题模块
    PROXIO_FAQ_ENABLE: true, // 常见问题模块开关
    PROXIO_FAQ_TITLE: '常见问题解答',
    PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
    PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
    PROXIO_FAQS: [
        { q: '购买情趣产品隐私能得到保障吗？', a: '正规商家非常重视消费者的隐私保护。在下单时，商品包装通常采用简洁、中性的包装，不会出现任何敏感字样或图案，确保在运输和配送过程中他人无法知晓包裹内容。同时，订单信息和个人资料也会严格保密，不会泄露给第三方。' },
        { q: '情趣产品使用安全吗？', a: '只要正确选择和使用合格产品，一般是安全的。购买时，要选择正规渠道销售、有质量认证（如 CE 认证、FDA 认证等）的产品，避免购买三无产品。使用过程中，遵循产品说明书的指导，注意个人卫生和产品清洁，避免过度使用或不当操作。若在使用过程中出现任何不适或异常情况，应立即停止使用，并咨询专业人士。' },
        { q: '如何选择适合自己的情趣产品？', a: '每个人的需求和偏好都不同。如果是初次尝试，建议从功能简单、材质温和的入门款产品入手，例如基础款的震动棒或按摩器 。若追求更丰富的体验，可以根据个人喜好选择具有多种震动模式、不同形状或特殊功能（如加热、遥控等）的产品。同时，参考产品评价和推荐，也能帮助你找到更符合需求的产品。' },
        { q: '产品尺寸如何选择？', a: '尺寸选择需综合考虑个人身体状况和使用感受。一般来说，尺寸过小可能无法达到预期的刺激效果，而尺寸过大可能会引起不适甚至造成伤害。对于新手，建议优先选择尺寸适中、设计符合人体工学的产品。在购买前，仔细查看产品尺寸参数，并参考产品详情页的使用说明和推荐建议。' },
    ],

    // 关于作者区块
    PROXIO_ABOUT_ENABLE: true, // 关于作者区块区块开关
    PROXIO_ABOUT_TITLE: '关于作者',
    PROXIO_ABOUT_TEXT_1: 'I am an adult product experience officer and a short video blogger',
    PROXIO_ABOUT_TEXT_2:
        'With years of experience in experiencing a wide variety of products and years of sales experience in the adult products industry, I want to recommend to my customers the adult products that I personally consider to be the best, the most comfortable, and the safest.',
    PROXIO_ABOUT_PHOTO_URL: '/avatar.png',
    PROXIO_ABOUT_KEY_1: '经验年限',
    PROXIO_ABOUT_VAL_1: '10年+',
    PROXIO_ABOUT_KEY_2: '客户',
    PROXIO_ABOUT_VAL_2: '10000+',
    PROXIO_ABOUT_KEY_3: '体验次数',
    PROXIO_ABOUT_VAL_3: '1000+',
    PROXIO_ABOUT_KEY_4: '累积创作时长（小时）',
    PROXIO_ABOUT_VAL_4: '1000+',

    PROXIO_ABOUT_BUTTON_URL: '/didime',
    PROXIO_ABOUT_BUTTON_TEXT: '关于我',

    // 横向滚动文字
    PROXIO_BRANDS_ENABLE: true, // 滚动文字
    PROXIO_BRANDS: [
        'Mature sex',
        'Sexy lingerie',
        'Safe-Sex Sondom',
        'Erectile Function Enhancing Delay Spray',
        'SM Sensuality'
    ],

    PROXIO_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

    // 页脚三列菜单组
    // 页脚菜单
    /*PROXIO_FOOTER_LINKS: [
        {
            name: '友情链接',
            menus: [
                {
                    title: 'Tangly的学习笔记',
                    href: 'https://blog.tangly1024.com'
                },
                {
                    title: 'NotionNext',
                    href: 'https://www.tangly1024.com'
                }
            ]
        },
        {
            name: '开发者',
            menus: [
                { title: 'Github', href: 'https://github.com/tangly1024/NotionNext' },
                {
                    title: '开发帮助',
                    href: 'https://docs.tangly1024.com/article/how-to-develop-with-notion-next'
                },
                {
                    title: '功能反馈',
                    href: 'https://github.com/tangly1024/NotionNext/issues/new/choose'
                },
                {
                    title: '技术讨论',
                    href: 'https://github.com/tangly1024/NotionNext/discussions'
                },
                {
                    title: '关于作者',
                    href: 'https://blog.tangly1024.com/about'
                }
            ]
        }],*/

    PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

    PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
    PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
    PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
    PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

    // 404页面的提示语
    PROXIO_404_TITLE: '我们似乎找不到您要找的页面。',
    PROXIO_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
    PROXIO_404_BACK: '回到主页',

    // 页面底部的行动呼吁模块
    PROXIO_CTA_ENABLE: true,
    PROXIO_CTA_TITLE: '与我建立联系',
    PROXIO_CTA_TITLE_2: '让我们立刻启动您的项目',
    PROXIO_CTA_DESCRIPTION:
        '搜索小程序易哒成人用品“”，我们提供了更多格式各样的产品，帮助你度过每一个愉快的夜晚',
    PROXIO_CTA_BUTTON: true, // 是否显示按钮
    PROXIO_CTA_BUTTON_URL:
        '/didime',
    PROXIO_CTA_BUTTON_TEXT: '联系我',

    PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
    PROXIO_POST_REDIRECT_URL: 'https://cr.yidae.eu.org', // 重定向域名
    PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
