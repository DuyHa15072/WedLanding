$('.title_side2').on('init', function (event, slick) {
  let dots_root = slick.$dots[0]
  let dots = $('.slick-dots li');
  dots.each(function (k, v) {
    $(this).find('button').addClass('heading' + k);
  });
  let items = slick.$slides;
  items.each(function (k, v) {
    let text = $(this).find('h2').text();
    if (k !== 0) {
      $('.heading' + k).parent().css('display', 'flex')
      $('.heading' + k).parent().prepend(`<span class="span_frame2"> | </span>`)
    }
    $('.heading' + k).text(text);
  });
});
$('.title_side2').slick({
  slidesToShow: 1,
  arrows: true,
  nextArrow: '.sdi2.next',
  prevArrow: '.sdi2.prev',
  fade: true,
  dots: true,
});
jQuery(document).ready(function () {
  $('.slider_table3').slick({

    slidesToShow: 1,
    arrows: true,
    nextArrow: '.arrow.next',
    prevArrow: '.arrow.prev',
    fade: true
  });

  $('.single-item').slick({
    dots: true,
    nextArrow: '.show4.next',
    prevArrow: '.show4.prev',
  });
})

// validated
  $("#fromContact").validate({
    rules: {
      name: {
        required: true,
      },
      Unit: {
        required: true,
      },
      position: {
        required: true
      },
      email: {
        required: true
      },
      phone: {
        required: true,
        minlength: 10,
      }
    },
    messages: {
      name: {
        required: "Bắt buộc nhập Tên",
      },
      Unit: {
        required: "Bắt buộc nhập Đơn vị/Công ty",
      },
      position: {
        required: "Bắt buộc nhập Chức vụ",
      },
      email: {
        required: "Bắt buộc nhập Email",
        email: 'Nhập đúng email'
      },
      phone: {
        required: "Bắt buộc nhập số điện thoại",
        minlength: "Phải nhập đủ 10 số",
      }
    },
    submitHandler: function() {


        swal({
            title:"", 
            text:"Loading...",
            buttons: false,      
            closeOnClickOutside: false,
        });
     
      const data = {
            "Tên": document.querySelector("#name").value,
            "Đơn vị/Công ty": document.querySelector("#Unit").value,
            "Chức Vụ": document.querySelector("#position").value,
            "Email": document.querySelector("#email").value,
            "Số Điện Thoại": document.querySelector("#phone").value,
          };
          fetch('https://sendmail.oeg.vn/api/contact-mail/phuonghh@oeg.vn', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then( data => {
              
              if(data.data === 'success'){
                swal({
                  title: "THÀNH CÔNG",
                  text: "Chúng tôi sẽ liên hệ đến bạn trong thời gian sớm nhất",
                  text:"Xin cảm ơn!",
                  icon: "success",
                  button: "Close",
                })
              }else{
                swal({
                  title: "Thất bại",
                  text: "Lỗi, Thử lại.",
                  icon: "error",
                  button: "Close",
                })
              }
            }
            )
            .then({
              "Tên": document.querySelector("#name").value = "",
            "Đơn vị/Công ty": document.querySelector("#Unit").value = "",
            "Chức Vụ": document.querySelector("#position").value = "",
            "Email": document.querySelector("#email").value = "",
            "Số Điện Thoại": document.querySelector("#phone").value = "",
            })
            .catch((error) => {
              swal({
                title: "Thất bại",
                text: "Lỗi, Thủ lại sau.",
                icon: "error",
                button: "Close",
              })
            });
      }
      
  })
  
//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

