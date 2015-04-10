angular-spreadsheet-sample
==========================

![cover](http://4.bp.blogspot.com/-c79_8_wr6ZI/VNxSGcJ6uFI/AAAAAAAAgKs/pV39GQfAoqc/s1600/cover.png)

AngularJS sample for Google Spreadsheet use [tabletop.js](https://github.com/jsoma/tabletop).

Installation
---

Clone this sample to your web host, and use [bower](http://bower.io/) to install all package.

	$ bower install

Run and see `http://127.0.0.1/angular-spreadsheet-sample/index.html`：

How to use
---

####建立試算表

前往 [https://drive.google.com](https://drive.google.com) 或是參考已經建立好的[試算表](https://docs.google.com/spreadsheet/ccc?key=0AhPhtlCrkuIFdEQ0TzNsSUl0QmFMdmU3QUcxRlhJV1E&usp=drive_web)。

先建立一份新的試算表：`建立` > `試算表`。

![101](http://2.bp.blogspot.com/-oXVF_faJ1M0/VNxSW2fuwtI/AAAAAAAAgK0/PCTibtoFw-c/s1600/101.png)

填寫資料表，以 [AngularJS Tutorial](http://docs.angularjs.org/tutorial) 的 [phones.json](https://github.com/angular/angular-phonecat/blob/master/app/phones/phones.json) 為例。

![103](http://3.bp.blogspot.com/-qvypLpUuK4s/VNxSk6rfUeI/AAAAAAAAgK8/kRea5eBQ_EQ/s1600/103.png)

將試算表權限公開：`檔案` > `共用` > `擁有存取權的使用者` > `變更`。

![104](http://3.bp.blogspot.com/-hDMTH1h0MM0/VNxSpFNM-8I/AAAAAAAAgLE/w7YUzUc7Zn4/s1600/104.png)

`共用設定` > `公開在網路上` > `存取權` > `可檢視` > `儲存`。

![105](http://2.bp.blogspot.com/-nI5x-h8PTHo/VNxSuJFPf0I/AAAAAAAAgLM/Hyl_0deIMwo/s1600/105.png)

權限公開後，發佈到網路：`檔案` > `發佈到網路` > `內容有所變更時自動更新發佈` > `開始發佈`。

![106](http://1.bp.blogspot.com/-PGCXrlpXidw/VNxSzI6VzVI/AAAAAAAAgLU/wPl-jufgXPQ/s1600/106.png)

發佈完成後，公開連結中會提供一組 key，可以前往 [Google Data APIs](https://developers.google.com/gdata/samples/spreadsheet_sample) 測試看看資料是否回傳正確。

---

注意事項
---

- 新版 Google 試算表不支援。
- 試算表欄位名稱只能小寫，例如：`imgUrl`，要改成 `imgurl`。

參考
---

- [AngularJS Tutorial](http://docs.angularjs.org/tutorial)
- [Spreadsheets Data API](https://developers.google.com/gdata/samples/spreadsheet_sample)
- [Tabletop.js](https://github.com/jsoma/tabletop)
- [Use a Google Spreadsheet as your JSON backend](https://coderwall.com/p/duapqq)
