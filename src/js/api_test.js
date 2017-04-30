//API テスト

//秘密鍵を取得する。
$.mockjax({
    url: 'http://aipyon.com/api/seckey',
    //正常な場合
    status: 200,
    responseText: {
        data1: "aaa",
        data2: 5,
    }
    //エラーの場合
    /*
    status: 401,
    responseText: {
        msg: "権限がありません。。"
    }
    */
});