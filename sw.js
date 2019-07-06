/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/yelee/2017/09/02/vue-cli中遇到的坑/index.html","b1db3632b252ace7ce25c42210849bc2"],["/yelee/2017/09/10/vue的数据驱动原理及简单实现/index.html","937fc000a78c4a0240070c7c6144c01b"],["/yelee/2018/04/27/移动端适配-rem/index.html","45ddea9ee183da1c2535dba3fc45fc00"],["/yelee/2018/05/06/css中的一些坑/index.html","1cac8482982adca0934ed0892f80684d"],["/yelee/2018/05/21/深入理解BFC/index.html","d7c871a5f7553fbc3ee77661111b6ec0"],["/yelee/2018/06/01/水平且垂直居中方法（9种）/index.html","3f1e14428cc102279a550ad5078ed44c"],["/yelee/2018/07/22/搞定css三列布局/index.html","d0a17ba98e6f2de6aa244e8a18192c48"],["/yelee/2018/07/27/Git简记/index.html","e77cdddd6360b4da6e7a457b3663c911"],["/yelee/2018/08/20/理解同步、异步和事件循环/index.html","47249e8fc2c5f701deed59b4e91260dd"],["/yelee/2018/08/22/正则表达式/index.html","c8423c5f373fd14fd9997f3abe34acd6"],["/yelee/2018/08/24/vscode设备同步/index.html","364bcc16ab0b0e2048ea5de57e8c2703"],["/yelee/2018/08/27/CDN原理理解/index.html","3079a328433cb11559a92d5c4fe41770"],["/yelee/2018/08/27/对MVC、MVP和MVVM的简单认识/index.html","592c45557ea6feafa7bc7d5e66a1f204"],["/yelee/2018/08/28/node-js-study-note/index.html","c4785db37601a86b890c459e50f64b6c"],["/yelee/2018/09/03/前端必备vscode插件/index.html","1757aa7a8ad8987a65fb6dac10f6a20f"],["/yelee/2018/09/04/element-ui更换主题和按需引入组件/index.html","a2f6f5d81f892cef172204a55ecbcc30"],["/yelee/2018/09/07/ES6中简约强大数组操作组合/index.html","bed7f92e69d614dc8bb82f7bd1d173d5"],["/yelee/2018/09/07/干掉状态从session到token/index.html","4d0bc129f6848b5c4854aa0c03c4289c"],["/yelee/2018/09/13/前端面试/index.html","94dca12dff351e45709b38420131feae"],["/yelee/2018/10/13/npm报错：error-code-EINTEGRITY/index.html","b20541a798e0f3fac9c2e9ef9a704971"],["/yelee/2018/10/13/项目结构图/index.html","979f513a08a5bb9fc0b06e5ae0c78b0a"],["/yelee/404.html","ce5f0c1d867b9b0d990471941cf54022"],["/yelee/Wechat/index.html","a68c85278c9594566552878c43938b16"],["/yelee/about/index.html","54fce669d6e246dfebd0ed315b392525"],["/yelee/archives/2017/09/index.html","7efdb4fc476eb809db048181c7cd52af"],["/yelee/archives/2017/index.html","8e053a2d242d574c2f0c9e0afb54f595"],["/yelee/archives/2018/04/index.html","61242e8c645569f82677ee0dfff0ee64"],["/yelee/archives/2018/05/index.html","d6dc7a98e4b188af17abb31fc71e9d4d"],["/yelee/archives/2018/06/index.html","92d2e90e47085c76df8ca23539f40f69"],["/yelee/archives/2018/07/index.html","64645c2e83b284d5d499feded298e757"],["/yelee/archives/2018/08/index.html","fe214a70a087536caad2e5cd96f7184c"],["/yelee/archives/2018/09/index.html","fe9ed8ecac3926e77c1de5755633e075"],["/yelee/archives/2018/10/index.html","d10344ce40f63c431d62cbf228b65ff4"],["/yelee/archives/2018/index.html","3047c25f119e10cbb220e2c2f0858d80"],["/yelee/archives/index.html","3ffd21cc5947824e86bd998f3badc67b"],["/yelee/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/yelee/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/yelee/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/yelee/background/backup/bg-1.jpg","5a019ba4a8b8b74c73792e4d08649af4"],["/yelee/background/backup/bg-2.jpg","75a93b26b267b972f90b41e2676d6230"],["/yelee/background/backup/bg-3.jpg","8ca0ce5599f504053e269d82d235b19d"],["/yelee/background/backup/bg-4.jpg","25f6e37cf01a7a4de8c4a3efa6f23908"],["/yelee/background/bg-1.jpg","9fc658dbae56a92f503368012e686b5f"],["/yelee/background/bg-2.jpg","32ba5bb15fcb90aec56a9fe5f414e673"],["/yelee/background/bg-3.jpg","edb62f17233d59e7739aeb3c4185234b"],["/yelee/background/bg-4.jpg","f333be592cf3d87bb3440b79cd962623"],["/yelee/background/bg-5.jpg","823d7c7300fa8b5865e42ac863d723eb"],["/yelee/background/bg-6.jpg","30edf2ae82a6a97dce7daf176a12a8e9"],["/yelee/categories/ES6/index.html","7e626bfd11047606ccfe7e07f7022632"],["/yelee/categories/css/index.html","d9293f5c5d3fe8dcb5acf7332778e5f5"],["/yelee/categories/git/index.html","769a72e9f60362118f183ec435635241"],["/yelee/categories/javascript/index.html","2a99f99efce38ee15591e0afc07be4c8"],["/yelee/categories/js高级/index.html","94f3758e90706af691ded5db6634917b"],["/yelee/categories/mobile/index.html","b54a78cae55818811bfbb658db8bc734"],["/yelee/categories/nodejs/index.html","25830c1053763a2be45378a9181de7d8"],["/yelee/categories/vscode/index.html","fe70e9d2ef509765e29e4a3c57507366"],["/yelee/categories/vue/index.html","0927684b60d501626b53d65471a6c839"],["/yelee/categories/其它/index.html","136a1d396212d17e6aa591bb60a7ac6f"],["/yelee/categories/前端/index.html","eb5904c76b7b0a7faa8901451698f139"],["/yelee/categories/前端面试/index.html","bcd52f2df57628b8a233be2f85d7702a"],["/yelee/categories/实用/index.html","e5da772d6725f02d8dcd9d1bcd50ac20"],["/yelee/categories/工作常见问题/index.html","f86e4b67ce0d09e82fcfda04e6632676"],["/yelee/categories/状态保持/index.html","b745a11e353bb72f04d9f86e39ad12e5"],["/yelee/categories/用户体验/index.html","ad50b4779005e1ae964f7d414f058a94"],["/yelee/css/blog-encrypt.css","d374967d9932d305663cc13cf96905c0"],["/yelee/css/style.css","4b4bbe3833cad17baec493c7fe716a78"],["/yelee/img/02.jpg","9f7a4589ec43bad4cfc27e53090518ca"],["/yelee/img/AcFun.png","6c6e9a78ee05efd125d72e7dc70d2574"],["/yelee/img/CSDN.png","93ea195b94cd1eec8df2795313cbd5f7"],["/yelee/img/Coding.png","47e4d8ab15cd9cda7e1e408b90bbaf82"],["/yelee/img/LOFTER.png","ae1a77b32d4f552561315d7eeab29ff4"],["/yelee/img/Plunker.png","b594c6b3548dbc2500852d4d591702da"],["/yelee/img/Quora.png","d6c24996cd08bf2786d78c4071f0988d"],["/yelee/img/SegmentFault.png","34f2c19158f416ec49c6fdcac8465f8f"],["/yelee/img/TiddlyWiki.png","31ce52fbcefa8cf0354547ff730838d7"],["/yelee/img/V2EX.png","ec857463f2de5edfb45f2088511cfbaa"],["/yelee/img/apple-touch-icon.png","47be9c06745740ba9c1c401e412093a3"],["/yelee/img/avatar.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/yelee/img/bilibili.png","79c63c46c7b875a733dbfb85c4d556e8"],["/yelee/img/github.png","08ff730c442e289936d0b8545f24f3c8"],["/yelee/img/glgs.png","195848b381890b151ce7fd5f90db3743"],["/yelee/img/niconico.png","37ffe1ba3e1590175678bb17dc33fea8"],["/yelee/img/scrollbar_arrow.png","c401adb9576ae9492fb0d5a0e18aec3c"],["/yelee/img/wechat.jpg","df9474969d03973a10728c3e7c2e68d8"],["/yelee/img/博客园.png","6f7a6829727bdf4fd85a527353fdb972"],["/yelee/img/新浪微博.png","72791796198367ddc5843969a20e19de"],["/yelee/img/知乎.png","30d00b6b3710a06a17a13f898264fb81"],["/yelee/img/简书.png","493a5cbf0c7bb984dd2aa76963402787"],["/yelee/img/网易云音乐.png","6d041725f75308e6637053347bd579c4"],["/yelee/img/虾米音乐.png","fa1f51129986ddb4441be2a7609f743d"],["/yelee/img/豆瓣.png","465a51ccfda6a57f4ce07520c4f50cb7"],["/yelee/index.html","8b98b60a0b261c8c0b7cdbdc3beb7df1"],["/yelee/js/GithubRepoWidget.js","9ec1ab0f12430beb879535ab40840235"],["/yelee/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/yelee/js/main.js","b226902b9aeafd8e883d77f565034f69"],["/yelee/js/mobile.js","f99366d60cafcbc5f1df24c256acfe1a"],["/yelee/js/pc.js","0246c4aebaf5b03f92f1ac587bd41a4a"],["/yelee/js/search.js","1f0b50c5255e7f088c726312dd8d17b0"],["/yelee/js/toc.js","6da2835a8ac46c416891c94bc86f0fde"],["/yelee/lib/blog-encrypt.js","9ff335aedd20c7349c0d90f16b49ad77"],["/yelee/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/yelee/page/2/index.html","bfc0c988d7fe54807af670b7d5d82af2"],["/yelee/sw-register.js","bc41a665e7d46e2923ce4a5988b93ac0"],["/yelee/tags/css-BFC/index.html","2eb0197f4c2f266348300ee546f9a902"],["/yelee/tags/css/index.html","c5a7bcb3c4e4ef03a45ee661e2ce3d9c"],["/yelee/tags/element-ui/index.html","1b6427e2f468795ef6c055332aefdf8e"],["/yelee/tags/git/index.html","36f5c0bce8c6e069d92e54c75951af60"],["/yelee/tags/http/index.html","6fcb65ad40736ba074702a320fa5504a"],["/yelee/tags/index.html","b1c566b409a4f2ddc07b3250844e635f"],["/yelee/tags/javascript-正则/index.html","a6a7802d6c9769cfbe2f98e46daf415d"],["/yelee/tags/javascript/index.html","b5d5a94bc222f84194abf5fb656421e2"],["/yelee/tags/nodejs/index.html","0c2ffd9038ad75687aadce3764cb9946"],["/yelee/tags/npm/index.html","ac47e6a4b8be41906e2c59574e1c772a"],["/yelee/tags/setting/index.html","16ddc33985d2ade9eeb191f8aeefcd4e"],["/yelee/tags/vue-cli/index.html","89dd9285b8910f5db97bd402778d6226"],["/yelee/tags/vue/index.html","c021a29ca01d43c5aca664094323856a"],["/yelee/tags/前端性能优化/index.html","48bad46d3eeff347d7d89d09d930e872"],["/yelee/tags/前端面试/index.html","2916a596129f2c866a84390844b17405"],["/yelee/tags/实用/index.html","46bc635c31426393de1c22333af47261"],["/yelee/tags/布局/index.html","88c9fa8abc3c943d15c54072e07dcaa6"],["/yelee/tags/插件-开发/index.html","4cf0800a9b2286fb1402d44afc533154"],["/yelee/tags/设计模式/index.html","5c90b9d510e7c0d28d43977ad9a19782"],["/yelee/yelee/bundle.js","bd608910c793e80f85d5a617113aab29"],["/yelee/yelee/style.css","8fd0e9c97b2a7870a7894e049fa3893f"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
