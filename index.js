var Comm100API=Comm100API||{};(function(t){function e(e){var a=document.createElement("script"),c=document.getElementsByTagName("script")[0];a.type="text/javascript",a.async=!0,a.src=e+t.site_id,c.parentNode.insertBefore(a,c)}t.chat_buttons=t.chat_buttons||[],t.chat_buttons.push({code_plan:128,div_id:"livechat-button-128"}),t.site_id=6000088,t.main_code_plan=128,e("https://instacom.io/vue/livechat.ashx?siteId="),setTimeout(function(){t.loaded||e("https://instacom.io/vue/livechat.ashx?siteId=")},5e3)})(Comm100API||{})

document.addEventListener('DOMContentLoaded', function(event) {
    var livechatbutton = document.createElement("div");
    livechatbutton.setAttribute("id", "livechat-button-128");
    console.log("input button");
    console.log(livechatbutton);
    document.body.appendChild(livechatbutton);
    console.log(document.getElementById('livechat-button-128'));
}); 
