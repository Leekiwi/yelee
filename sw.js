/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/yelee/2017/09/02/vue-cli中遇到的坑/index.html","baf5db710452f25ccd2f352a76847e12"],["/yelee/2017/09/10/vue的数据驱动原理及简单实现/index.html","f5eae5241ae84f60c0072824793d2241"],["/yelee/2018/04/27/移动端适配-rem/index.html","ed6512f13270c3c9e2285f15eb37dcfc"],["/yelee/2018/05/06/css中的一些坑/index.html","c7c469e7ccf2b7e6c3a16359f02537fa"],["/yelee/2018/05/21/深入理解BFC/index.html","de70dc88a7a4637f69bde18b8cd58533"],["/yelee/2018/06/01/水平且垂直居中方法（9种）/index.html","d3568f955092d46f33b7d9a0bb38835f"],["/yelee/2018/07/22/搞定css三列布局/index.html","0bfea07fbf96d37bd12c0acfc000e436"],["/yelee/2018/07/27/Git简记/index.html","4f949ccb72e2d251fa979197df423b5e"],["/yelee/2018/08/20/理解同步、异步和事件循环/index.html","5d28c00a871573148dcfa915cf2bb608"],["/yelee/2018/08/22/正则表达式/index.html","dd3c0fde8703d16bd12400a21090ce21"],["/yelee/2018/08/24/vscode设备同步/index.html","cc9e0dafed383a64ff68d45c3ecf27c3"],["/yelee/2018/08/27/CDN原理理解/index.html","7e4945c7af324c107e513cc33829e262"],["/yelee/2018/08/27/对MVC、MVP和MVVM的简单认识/index.html","b851cb03366df07b474dffeb1c54b290"],["/yelee/2018/08/28/node-js-study-note/index.html","bf7f8889b54062725a4633e42d4836c5"],["/yelee/2018/09/03/前端必备vscode插件/index.html","1ac498578a10d1120d8dd08200c03ad6"],["/yelee/2018/09/04/element-ui更换主题和按需引入组件/index.html","63f7ba45f4ebee8256cacc52dab5a2a3"],["/yelee/2018/09/07/ES6中简约强大数组操作组合/index.html","1f80e679f7e21d004f7e16c76da78af3"],["/yelee/2018/09/07/干掉状态从session到token/index.html","c2b9f76c9e2e9c305d684d46e44c2c2a"],["/yelee/2018/09/13/前端面试/index.html","2bc1cf3e022b270e57e994ea7c2cdd75"],["/yelee/2018/10/13/npm报错：error-code-EINTEGRITY/index.html","6ab42ebc527aac88aa21bd900035191e"],["/yelee/2018/10/13/项目结构图/index.html","9f12d524391da4cae6c6e18df195f65a"],["/yelee/404.html","b08b2051d78c03d06eca990d99d49c7e"],["/yelee/Wechat/index.html","f2f8ba12b968c4955e890ca9b1db074c"],["/yelee/about/index.html","a43da4d34bfd05d8eaa801f945594b04"],["/yelee/archives/2017/09/index.html","e81f501760e960ad6fe47634962c676a"],["/yelee/archives/2017/index.html","4e756b5660a3e9b645dbf07b74c177a4"],["/yelee/archives/2018/04/index.html","aee3086f0628637f913982ecfde973fe"],["/yelee/archives/2018/05/index.html","f438dd378f363917638be9819bf746b8"],["/yelee/archives/2018/06/index.html","85ca523ead199eba843da04beb4823aa"],["/yelee/archives/2018/07/index.html","813cf21fa574bb7d2bbdeca32cc5987f"],["/yelee/archives/2018/08/index.html","ac62ff7769f552b1a506ac04e9c59dcb"],["/yelee/archives/2018/09/index.html","6f6c187c53340f54da01ab50599b97ce"],["/yelee/archives/2018/10/index.html","ec3dbd46427887c3d3162b66ab1c8272"],["/yelee/archives/2018/index.html","e6801098f900a7e4ff44e6602abdfa42"],["/yelee/archives/index.html","18ac5e57041bd4744bdef1336b772763"],["/yelee/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/yelee/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/yelee/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["/yelee/background/backup/bg-1.jpg","5a019ba4a8b8b74c73792e4d08649af4"],["/yelee/background/backup/bg-2.jpg","75a93b26b267b972f90b41e2676d6230"],["/yelee/background/backup/bg-3.jpg","8ca0ce5599f504053e269d82d235b19d"],["/yelee/background/backup/bg-4.jpg","25f6e37cf01a7a4de8c4a3efa6f23908"],["/yelee/background/bg-1.jpg","9fc658dbae56a92f503368012e686b5f"],["/yelee/background/bg-2.jpg","32ba5bb15fcb90aec56a9fe5f414e673"],["/yelee/background/bg-3.jpg","edb62f17233d59e7739aeb3c4185234b"],["/yelee/background/bg-4.jpg","f333be592cf3d87bb3440b79cd962623"],["/yelee/background/bg-5.jpg","823d7c7300fa8b5865e42ac863d723eb"],["/yelee/background/bg-6.jpg","30edf2ae82a6a97dce7daf176a12a8e9"],["/yelee/categories/ES6/index.html","6df7a243f35d748ba6d54c69e8f6f119"],["/yelee/categories/css/index.html","cfa6f60cdc5b49da580dd4e3545d8698"],["/yelee/categories/git/index.html","0c961a22e519dc4313db0090976bc090"],["/yelee/categories/javascript/index.html","5aea5f5dca81b89ba1d1540f7e1ca778"],["/yelee/categories/js高级/index.html","29ad32f909766e12727e0a7410a878e4"],["/yelee/categories/mobile/index.html","cb659458d0a1256eeb7fbfdf24a894af"],["/yelee/categories/nodejs/index.html","5e89f29c354b34778b240e26eae7338d"],["/yelee/categories/vscode/index.html","2b6d239c23d041016617bcc7cf1c5423"],["/yelee/categories/vue/index.html","62eff5924a78c68bc32f648f174ac257"],["/yelee/categories/其它/index.html","d37590415bdc5a1e76daf783b525c65a"],["/yelee/categories/前端/index.html","7705e0b0425a85a40dd2826bada93ac1"],["/yelee/categories/前端面试/index.html","c3acc0cbd98a2b1c6d6fbd5ce26f07fc"],["/yelee/categories/实用/index.html","3234c9069d9d6672cf43586eb26125cc"],["/yelee/categories/工作常见问题/index.html","0b46ea514be25328a69b71734fc6be09"],["/yelee/categories/状态保持/index.html","088b17b574bfd989e48fe031e5b47382"],["/yelee/categories/用户体验/index.html","87367916313c828186641eec71598304"],["/yelee/css/blog-encrypt.css","d374967d9932d305663cc13cf96905c0"],["/yelee/css/style.css","4b4bbe3833cad17baec493c7fe716a78"],["/yelee/img/02.jpg","9f7a4589ec43bad4cfc27e53090518ca"],["/yelee/img/AcFun.png","6c6e9a78ee05efd125d72e7dc70d2574"],["/yelee/img/CSDN.png","93ea195b94cd1eec8df2795313cbd5f7"],["/yelee/img/Coding.png","47e4d8ab15cd9cda7e1e408b90bbaf82"],["/yelee/img/LOFTER.png","ae1a77b32d4f552561315d7eeab29ff4"],["/yelee/img/Plunker.png","b594c6b3548dbc2500852d4d591702da"],["/yelee/img/Quora.png","d6c24996cd08bf2786d78c4071f0988d"],["/yelee/img/SegmentFault.png","34f2c19158f416ec49c6fdcac8465f8f"],["/yelee/img/TiddlyWiki.png","31ce52fbcefa8cf0354547ff730838d7"],["/yelee/img/V2EX.png","ec857463f2de5edfb45f2088511cfbaa"],["/yelee/img/apple-touch-icon.png","47be9c06745740ba9c1c401e412093a3"],["/yelee/img/avatar.png","2b157be00c0abf8a438a804d5f5f8ef4"],["/yelee/img/bilibili.png","79c63c46c7b875a733dbfb85c4d556e8"],["/yelee/img/github.png","08ff730c442e289936d0b8545f24f3c8"],["/yelee/img/glgs.png","195848b381890b151ce7fd5f90db3743"],["/yelee/img/niconico.png","37ffe1ba3e1590175678bb17dc33fea8"],["/yelee/img/scrollbar_arrow.png","c401adb9576ae9492fb0d5a0e18aec3c"],["/yelee/img/wechat.jpg","df9474969d03973a10728c3e7c2e68d8"],["/yelee/img/博客园.png","6f7a6829727bdf4fd85a527353fdb972"],["/yelee/img/新浪微博.png","72791796198367ddc5843969a20e19de"],["/yelee/img/知乎.png","30d00b6b3710a06a17a13f898264fb81"],["/yelee/img/简书.png","493a5cbf0c7bb984dd2aa76963402787"],["/yelee/img/网易云音乐.png","6d041725f75308e6637053347bd579c4"],["/yelee/img/虾米音乐.png","fa1f51129986ddb4441be2a7609f743d"],["/yelee/img/豆瓣.png","465a51ccfda6a57f4ce07520c4f50cb7"],["/yelee/index.html","350250c7b794ec8709a6c3800a64f70f"],["/yelee/js/GithubRepoWidget.js","9ec1ab0f12430beb879535ab40840235"],["/yelee/js/instagram.js","7d7a9e2e7286ba2d5b6d12068214f0c3"],["/yelee/js/main.js","b226902b9aeafd8e883d77f565034f69"],["/yelee/js/mobile.js","f99366d60cafcbc5f1df24c256acfe1a"],["/yelee/js/pc.js","0246c4aebaf5b03f92f1ac587bd41a4a"],["/yelee/js/search.js","1f0b50c5255e7f088c726312dd8d17b0"],["/yelee/js/toc.js","6da2835a8ac46c416891c94bc86f0fde"],["/yelee/lib/blog-encrypt.js","9ff335aedd20c7349c0d90f16b49ad77"],["/yelee/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["/yelee/page/2/index.html","05f167709381e45be902dabd38ff073f"],["/yelee/sw-register.js","7f929ae489da5b956baed9d46277f23f"],["/yelee/tags/css-BFC/index.html","243b7bbeb885f8f317427164217395aa"],["/yelee/tags/css/index.html","a9da04bc2971be0edf20663da4aeedf3"],["/yelee/tags/element-ui/index.html","c61499bc9521b51174b15ad3faebea1c"],["/yelee/tags/git/index.html","f9d6732a5996c303c68f1777962995aa"],["/yelee/tags/http/index.html","64a4bbd8215169959a8083dd2023145e"],["/yelee/tags/index.html","ad57468fb3fae130e1402dc5fcdfaada"],["/yelee/tags/javascript-正则/index.html","0834afe2b29424b801475f1ee384cc61"],["/yelee/tags/javascript/index.html","df45114574fbd18b385e68ac58317b1e"],["/yelee/tags/nodejs/index.html","2f0eeb7d84e0f2d7faf568b68549a351"],["/yelee/tags/npm/index.html","f7b0be40bb947d79eb5c3d745627c7c7"],["/yelee/tags/setting/index.html","b015e24693fb45f1bdad2dd794f03bb3"],["/yelee/tags/vue-cli/index.html","bb71130a04736b8a671a2acd0c3ef7f7"],["/yelee/tags/vue/index.html","b9f684d2863a323b30f467f64fe51149"],["/yelee/tags/前端性能优化/index.html","d41c69ecbaa81c5cab51716c753f7a74"],["/yelee/tags/前端面试/index.html","04c9b3697e0abfa7e77eea6cafb28d26"],["/yelee/tags/实用/index.html","4fdb045be93ea60a298fe78c3b41f37f"],["/yelee/tags/布局/index.html","dc1927d3d46d38c4d49306972d405934"],["/yelee/tags/插件-开发/index.html","d0bdd6c887bb67576791b54998de24ba"],["/yelee/tags/设计模式/index.html","1da3d9d6d719185eb2297695842d7afa"]];
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
