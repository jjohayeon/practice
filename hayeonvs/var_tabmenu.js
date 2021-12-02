


//첫번째 버튼을 누르면
//1. 첫번째 버튼에 active 클래스 추가
//2. 첫번째 내용에 show라는 클래스 추가

$('.tab-button').eq(0).click(function(){
    $('.tab-button').removeClass('active');
    $('.tab-button').eq(0).addClass('active');
    $('.tab-content').removeClass('show');
    $('.tab-content').eq(0).addClass('show');
});