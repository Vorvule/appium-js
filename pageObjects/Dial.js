module.exports = class Dial {
  get appBtn() {
    return $("~App");
  }

  get alertBtn() {
    return $("//android.widget.TextView[@content-desc=\"Alert Dialogs\"]");
  }

  
}
