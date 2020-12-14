$("a").click(function() {
  $(".back").empty();

  function get_username(){
    var apii = "https://instagram.com/username/?__a=1"
    let b = $("#namehere").val();
    apii = apii.replace("username", b);
    return apii;
  }
  apii = get_username()

  $.getJSON(apii)
    .done(function(data) {
      var back_button = $("<button></button>").attr("id", "go_back").html(`<i class="fa fa-caret-left"></i>`);
      $('.back').append(back_button)

      var abc = $("<div></div>").attr("class", "abc").html(`<img src=${data["graphql"]["user"].profile_pic_url_hd}></img>`);
      $('.back').append(abc);

      var ol = $("<div></div>").attr("class", "overlay").html(`<a href=${data["graphql"]["user"].profile_pic_url_hd}>indir</a>`);
      $('.abc').append(ol);

      var user = $("<p></p>").attr("class", "user").html(`<a id="user" href="https://instagram.com/${data["graphql"]["user"].username}">@${data["graphql"]["user"].username}</a>`);
      $('.back').append(user);

      var ii_follow = $("<div></div>").attr("class", "i_follow").html(`<p>Takipçi: ${data["graphql"]["user"]["edge_followed_by"].count}</p><span id="line">|</span><p id="following_text">Takip Edilen: ${data["graphql"]["user"]["edge_follow"].count}</p>`);
      $('.back').append(ii_follow);

      var nblu = `<p id="name">İsim: ${data["graphql"]["user"].full_name}</p><p id="bio">Bio: ${data["graphql"]["user"].biography}</p><p id="link">Bio'daki Link:  <a href="${data["graphql"]["user"].external_url}">Link'e Git</a></p><button id="goo" onclick="window.location.href='https://instagram.com/${data["graphql"]["user"].username}'"><span>Hesaba Git</span></button>`
      $('.back').append(nblu);

      if (`${data["graphql"]["user"].full_name}` == ""){
        $("p").remove("#name")
      }
      if (`${data["graphql"]["user"].biography}` == "") {
        $("p").remove("#bio")
      }
      if (`${data["graphql"]["user"].external_url}` == "null") {
        $("p").remove("#link")
      }

      $(".content").css({'transform': 'rotateY(180deg)', 'transition': 'transform 0.5s'});

      $("#go_back").click(function() {
        $(".content").css({'transform': 'rotateY(360deg)', 'transition': 'transform 0.5s'});
      });
    })
    .fail(function() {
      alert("Kullanıcı adı bulunamadı!")
  });
});
