# flex box 
block은 element고 block 옆에는 어떤 element도 올 수 없다.
 -> 옆에 겁나 꽉찬 margin들이 자리잡고 있어서 뭐 암것도 위치시킬 수 없다. 
 -> display: block 

inline block은 block속성을 유지한다. 
inline block과 inline의 차이점은 inline은 box가 아니라는 점 이다. 
inline은 element다 이건 유동적인것이라 너비와 높이가 없다.  그냥 같은 선상에 있다는 말이다. 
예를 들면 text는 inline 이다. (text는 box가 아니다.)

그래서 inline은 너비와 높이와 함꼐 쓸 수 없다. 

ex) 
.box {
    display: inline;
    width: 이거 안되고;
    height: 이거도 안되지;
}

즉, display: inline-block은 block속성을 유지한체 inline으로 한줄에 구성되게 해줄수있는거다. 
    ->block속성을 가지고 있어서 너비와 높이가 있는체로 inline으로 옆에 있게 해줄 수 있는거다. 

근디 이 inline block으로는 절대적인 pxl값으로 뭐 위치를 조정할 수는 있어도 화면이 변함에 따라서도 유동적으로 좌, 중, 우 에 맞게 위치시킬 순 없다. 

그래서 등장한것이 flexbox다. 

어떤 기술을 배울 땐 항상 그 기술이 왜 무엇을 해결하기위해 등장했는지 생각하고 배우자. 



# First Rules of Flexbox 

flexbox에서 element들의 위치를 바꾸고 싶으면 flex container의 안에 있어야한다. 


flexbox에서는 children과 얘기하지 않는다. 
예를들면 아래와 같은 HTML element들이 있을 때 위의 display:inline-block 을 사용할 때는 box라는 class를 사용해서 각 box의 배치를 한다. 

************************************************************************************************************************************************
<body> 
    <div class="box">1</div>
    <div class="box">2</div>
    <div class="box">3</div>
</body>
************************************************************************************************************************************************


.box:nth-child(3) {
    maring-left: 35px;
}

뭐 이런식으로 class를 사용해서 배치할 수 있다. 

flexbox에서는 저런걸 하지 않는다. 
flexbox에서 뭔가를 만들고 싶을 때는 flexbox container를 만들어야 한다. 

어떻게 flexbox container를 만들까. 

CSS 에서

body {
    display: flex;
}

요거만 해줌 된다. 
(아 일단 여기서는 .box들을 body안에 담고있으니까)

그러면 저 .box 3개가 마치 inline처럼 배치된다.

(일단 각 .box들의 CSS속성은 아래처럼 상자모양으로 구성되어있다.)
.box {
    width: 200px;
    height: 200px;
    background: peru;
    color: white;
}

body애눈 .box에 대한 어떠한 내용도 적지 않는다. 
box의 부모가 flex container다. 그리고 붙어있는 부모여야 한다. 
다른것의 부모가 될 수 없고 바로 붙어있는 부모여야 한다. 
예를들어 아래처럼 .wrapper로 감싸면 body에 display: felxbox 해줘도 안먹는다. 

************************************************************************************************************************************************
<body> 
    <div class="wrapper">
        <div class="box">1</div>
        <div class="box">2</div>
        <div class="box">3</div>
    </div>
</body>
************************************************************************************************************************************************

기억해야할것은 항상 붙어있는 부모 element가 자식 element의 위치를 움직일 수 있다. 




# Main Axis and Cross Axis 

flexbox CSS의 세계에는 2가지가 있다. 
첫번쨰는 row(가로, 행), 두번쨰는 column(세로, 열) 이다. 

flex container의 flex-direction 기본값은 row다. 
그래서 위의 예시의 .box 3개가 가로로 inline-block 처럼 쭉 나열되어있는거다.(대신 inline-block들 처럼 뭐 이상한 틈은 없다.)

자 그럼 이렇게 수평으로 가로로 된 item들의 위치를 어떻게 바꿀 수 있을까. 
position 속성중의 하나인 justify-content 를 사용하는거다. 
그리고 justify-content는 겁내 많은 property를 가지고 있지만 외울필요는 없다. 

justify-content는 수평축에 있는 flex children의 위치를 변경한다. 

예를들어 

.wrapper {
    display: flex;
    justify-content: center;
}

요래 넣어주면 3개의 박스들이 기본설정일 때는 왼쪽에만 붙어있다가 가운데로 쇽하고 같이와서 가운데정렬이 된다. 
계산이나 뭐 몇px만큼 옮겨라 요딴걸 해줄 필요가 없다. 
browser가 계산해준다. 

또 다른 property는 justify-content: space-between 이다. 
요건 box사이에 동인한 공간을 주는거다. 즉 양끝은 box는 browser의 맨 끝에 붙어있다. 

justify-content: space-around 요거는 box주변 옆공간을 같게 만드는거다. 
그러믄 box3개가 좌우 동일한 공간을 가지고 수평으로 배치된다. 양끝의 box도 browser의 양 끝에서 동일한 간격을 가지고 떨어져 있다. 

그리고 이 수평축은 'main axis'다.

정리하자면 
flex-direction: row 일때(기본 방향일 때)
수평축(horizontal axis)이 main axis다. 
 -> justify-content를 이용하면 main axis에서 item을 움질일 수 있다. 
 
flex container가 가로방향을 가지면 cross axis는 세로(vertical)다. 
그리고 flex container에서 cross axis(세로방향)으로 item을 옮길 땐 "align-items" 를 사용한다. 

그리고 

.wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
}

요래 해주면 box들이 중앙으로 배치가 되는데 이게 그냥 무조건 화면 중앙이 아니라 부모 element의(flex father의) 세로로 가운데로 정렬이 되는거다. 
즉, 위에서 가로로 정렬되데 화면위에 그냥 딱 붙어있었는데 그게 flex father의 세로로 가운데 위치에 온채로 가로로도 정렬이 되어있다는거다. 

align-items: stretch; 요거는 flex father의 세로 전체로 그냥 쭉 뻔어서 그림이 위치된다.(물론 .box가 height 속성이 따로 정해져있으면 안 뻗는다.)
align-items: end; 이거는 item들을 아래로 맨끝에 두는거고 
align-items: start; 요거는 기본값이다. .box들이 첨에 그냥 위에 똑 붙어있었던것. 바로 그것. 




# Column and Row 

display: flex는 기본적으로 direction이 row 다. 
그럼 
flex-direction: column;
이면 어떻게 될까 

당연히 main axis가 세로축이고 cross axis가 가로축이 되겠지. 

즉 
flex-direction: row 면 main axis(justify-content) ->가로, cross axis(align-itmes) -> 세로
flex-direction: column 면 main axis(justify-content) ->세로, cross axis(align-itmes) -> 가로




#  align-self and order 

align-self라는게 있다. 이건 2경우중 하나다. 실제로 wrapper의 자식을 수정하는 경우에 말이다. 
우리가 지금까지 한건 부모(.father)가 어떻게 자식(.child)을 옮기는걸 얘기했다. 

************************************************************************************************************************************************
(HTML)
<body>
    <div class="father">
        <div class="child">1</div>
        <div class="child">2</div>
        <div class="child">3</div>
    </div>
</body>

(CSS)
.child {
    width: 200px;
    height: 200px;
    background: peru;
    color: white;
}


.father {
    display: flex;
    /* Main Axis */
    justify-content: space-between;
    /* Cross Axis */
    align-items: center;
    height: 100vh;
}
*********************************************************************************************************************************************


.father와 .child 이 어떤지 한번 봐보자. 
children에서 위치와 관련되서 수정한건 없다. 

그치만 하나의 property(2개지만 다시 얘기할거임) align-self는 align-item와 비슷한 일을 하는데 
이 말은 cross axis다. 
그치만 하나의 child에만 해당된다. 

*********************************************************************************************************************************************
(CSS)

.father {
    display: flex;
    /* Main Axis */
    justify-content: space-between;
    /* Cross Axis */
    height: 100vh;
}

.child {
    width: 200px;
    height: 200px;
    background: peru;
    color: white;
}

.child:nth-child(2) {
    align-self: center;
}
*********************************************************************************************************************************************

요렇게 해주면 양끝의 child들은 브라우저 위에 붙어있는데 2번쨰의 가운데 child만 cross axis의 가운데에만 똑 내려와있게 할 수 있다. 
이게 바로 child에게 줄 수 있는 하나의 property다. 

align-self는 align-item 처럼 행동한다. 
align-item은 item의 cross axis 방향에 있는 위치를 바꾼다. 

즉 align-self를 이용하면 child하나하나에 위치를 줄 수 있는거다. 

기억해야할것은 이런것들을 하고 싶으면 반드시 father에게 height를 줘야한다는거다. 

왜냐면 flex father의 height를 기준으로 끝에 놓든 뭐 가운데에 놓든 하기 때문이다. 
브라우저화면 전체를 기준으로 하는게 아니다. 


다음으로 child별로 별도로 할당할 수 있는 또다른 property는 "order"다. 
child에게 순서를 변경하라고 할 수 있다. 
이건 HTML을 변경할 수 없을 때 유용하다. 

*********************************************************************************************************************************************
(CSS)

.father {
    display: flex;
    /* Main Axis */
    justify-content: space-between;
    /* Cross Axis */
    height: 100vh;
}

.child {
    width: 200px;
    height: 200px;
    background: peru;
    color: white;
    font-size: 50px;
}

.child:nth-child(2) {
    order: 1;           <- 요거여 요거
}
*********************************************************************************************************************************************

위처럼 가운데의 2번 박스에 order:1; 을 주게되면 
1,3,2 순서로 박스가 가로로 줄서있게 된다. 
왜그럴까 

왜냐믄 기본적으로 child(box)들의 order는 0 이다. 
그런데 2번 box(child:nth-child(2))만 order가 1이되었으니 순서가 밀려서 이렇게 된거다. 

이렇게 한다고 브라우저에 보이는 순서는 바뀌지만 HTML 코드가 바뀌는건 아니다. 




# wrap, nowrap, reverse, align-content 

1. wrap

*********************************************************************************************************************************************
(HTML)

<body>
    <div class="father">
        <div class="child">1</div>
        <div class="child">2</div>
        <div class="child">3</div>
        <div class="child">4</div>
        <div class="child">5</div>
        <div class="child">6</div>
    </div>
</body>


(CSS)

.father {
    display: flex;
    /* Main Axis */
    justify-content: space-between;
    /* Cross Axis */
    height: 100vh;
}

.child {
    width: 200px;
    height: 200px;
    background: peru;
    color: white;
    font-size: 50px;
}
*********************************************************************************************************************************************

위처럼 너비가 200px인 상자 6개로 변경 후 브라우저 크기를 줄여보면 브라우저 크기가 줄어듬에 따라 
상자의 너비도 달라지는걸 확인할 수 있다. 

flexbox는 itme들이 모두 같은 줄에 있도록 유지한다. 
비록 너비가 바뀌더라도 말이다! 
그래서 상자들이 막 꾸겨넣어진거다. 

flexbox는 width를 신경쓰지 않는다.
width 값이 깨지더라도 오직 같은 줄에 있도록 만드는데만 신경쓴다. 

자 이제 flex-wrap이 뭔지 아라보쟈. 
일단 flex-wrap의 기본값은 nowrap이다. 

flex-wrap: nowrap;

이건 무슨짓을 하더라도 이 child element들이 같은줄에 있어야한다고 flexbox에게 이야기하는거다. 
근디

flex-wrap: wrap;
이거로 한다?

요거는 flexbox에게 child의 width를 유지하라고 이야기 하는거다. 
그러믄 6개의 box들이 width를 유지한체로 두줄로 나뉘어서 위치하게 된다. 

2. reverse 

flexbox는 많은 reverse를 가지고 있다. 
예를들어 아래처럼 한다?

*********************************************************************************************************************************************
(CSS)

.father {
    display: flex;
    flexdirection: row-reverse;
    /* Main Axis */
    justify-content: space-between;
    /* Cross Axis */
    height: 100vh;
}

.child {
    width: 200px;
    height: 200px;
    background: peru;
    color: white;
    font-size: 50px;
}
*********************************************************************************************************************************************

그러면 이제 1,2,3,4,5,6 순서로 있던 box가  6,5,4,3,2,1 순서로 row인데 순서가 뒤집히게 되는거다. 
HTML은 바뀌지 않지만 CSS의 row-revers로 인해 방향이 바뀌게 된것이다. 

column-reverse도 마찬가지 
1
2
3
4
5
6
 ->이 순서로 위치하던 box가 

6
5
4
3
2
1
 -> 이런 순서로 기존에 반대되는 순서로 위치하게 된다. 


만약에 flex-wrap을 wrap으로 하는데 순서를 바꾸고 싶다고 하면 
아래처럼 wrap-reverse로 설정해주면 된다. 

*********************************************************************************************************************************************
(CSS)

.father {
    display: flex;
    /* Main Axis */
    justify-content: space-between;
    /* Cross Axis */
    height: 100vh;
    flex-wrap: wrap-reverse;
}

.child {
    width: 200px;
    height: 200px;
    background: peru;
    color: white;
    font-size: 50px;
}
*********************************************************************************************************************************************

위처럼 해주면 
기존 wrap이 
1 2 3 
4 5 6 
이거였다면 

4 5 6 
1 2 3 
이렇게 변한다. 

wrap해주는 순서를 revers 해주는거다. 

row-reverse로 한다면 행간의 순서만 뒤집어주는거니 
row-reverse고 wrap이라면 
3 2 1 
6 5 4 
이렇게 된다. 


3. align-content 

자 그럼 wrap으로 하고 브라우저 크기를 줄였을 때 
첫째줄과 둘째줄 사이의 간격, 이 공간, line사이의 공간 이 공간도 수정이 가능한다. 
1 2 3 4 <- 이줄과
 5  6  <- 이줄 사이의 공가 

요거를 수정하는거를 뭐로 하냐면 align-content 로 한다. 
align-content에서 line을 수정할 때 justify-content와 비슷하지만 line에 대한 거다. 
예를들어 아래처럼 align-content: flex-start;  이렇게 해버리면 

첫째라인과 둘쨰라인이 
1 2 3 

4 5 6 
요렇게 떨어져있던게 

1 2 3 
4 5 6 
요렇게 붙어버린다. 


*********************************************************************************************************************************************
(HTML)

<body>
    <div class="father">
        <div class="child">1</div>
        <div class="child">2</div>
        <div class="child">3</div>
        <div class="child">4</div>
        <div class="child">5</div>
        <div class="child">6</div>
    </div>
</body>


(CSS)

.father {
    display: flex;
    /* Main Axis */
    justify-content: space-between;
    /* Cross Axis */
    height: 200vh;
    flex-wrap: wrap;
    align-content: flex-start;
}

.child {
    width: 200px;
    height: 200px;
    background: peru;
    color: white;
    font-size: 50px;
}
*********************************************************************************************************************************************

align-content: center; 
로 하게된다면 child element들이 flex father의 세로의 가운데에 위치하게 되는거다. 
justify-content의 cross Axis 라인버전이라고 생각하면 될거같다. 

다시 말하면 align-content는 line을 변경한다. 
그리고 line은 cross Axis에 있다. 




# flex-grow, flex-shrink 

flex-grow, flex-shrink는 child에게 줄 수 있는 property다. 


1. flex-shrink
flex-shrink는 기본적으로 flexbox가 쥐어짜질 때 element의 행동을 정의한다. 
기억해야할게 flexbox가 nowrap이면 브라우저의 크기가 줄어들 때 element들의 width에 상관없이 그냥 줄어들어버린다. 

근디 이게 그냥 공평하게 모든게 같은크기로 줄어드는게 아니라 특정놈이 좀 더 줄어들게 할 수 있다는거다. 

flex-shrink: 1;
이 기본값이다. 
즉, 따로 설정을 안해줘도 일단 다 1 이라고 보면된다. 

*********************************************************************************************************************************************
(HTML)

<body>
    <div class="father">
        <div class="child">1</div>
        <div class="child">2</div>
        <div class="child">3</div>
    </div>
</body>


(CSS)

.father {
    display: flex;
    /* Main Axis */
    justify-content: space-between;
    /* Cross Axis */
    height: 200vh;
}

.child {
    width: 200px;
    height: 200px;
    background: peru;
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.child:nth-child(2) {
    background-color: black;
    flex-shrink: 2;
}
*********************************************************************************************************************************************

근디 또 위처럼 특정 child만 flex-shrink: 2; 로 설정을 해준다?
그러면 이제 줄어들 때 2번 box가 2배의 속도로 줄어들게 되는거다. 

모든 box가 같은크기로 찌그러지질 않기를 바랄 때 사용할 수 있다. 
당연히 각 box들 마다 서로 다른 줄어드는 속도, flex-shrink 값을 할당할 수 있다. 


2. flex-grow 

flex-shrink와 같지만 반대로 작용한다. 

*********************************************************************************************************************************************
(HTML)

<body>
    <div class="father">
        <div class="child">1</div>
        <div class="child">2</div>
        <div class="child">3</div>
    </div>
</body>


(CSS)
.father {
    display: flex;
    /* Main Axis */
    justify-content: space-between;
    /* Cross Axis */
    height: 200vh;
}

.child {
    width: 200px;
    height: 200px;
    background: peru;
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
*********************************************************************************************************************************************

위처럼 코드를 짜면 브라우저를 충분히 넓게 키워놓았을 때 
width가 300px인 box가 3개가 있고 브라우저의 크기가 충분히 넓으니 빈공간도 있다. 

근디 내가 여기서 가운데에있는 2번 박스에 flex-grow: 1; 를 설정하면 
가운데에 있는 2번 box가 그냥 갑자기 커지면서 양옆 1,3번 box에 붙어버린다. 

왜그럴까? 

flex-grow의 기본값은 0이다. 
이 값이 의미하는건 주변 여분의공간을 차지하는 비율을 의미한다. 

*********************************************************************************************************************************************
(CSS)

.father {
    display: flex;
    /* Main Axis */
    justify-content: space-between;
    /* Cross Axis */
    height: 200vh;
}

.child {
    width: 200px;
    height: 200px;
    background: peru;
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.child:nth-child(2) {
    background-color: black;
    flex-grow:2;
}


.child:nth-child(3) {
    flex-grow: 1;
}
*********************************************************************************************************************************************

근디 만약에 위처럼 3번 box도  flex-gridL: 1;을 가져가면 어떻게 될까? 

일단 이제 빈공간은 2번과 3번이 노나가지게 된다. 
어떻게 나누냐면 3번이 1/3, 2번이 2/3 이렇게 나눠가지게 되는거다. 남은공간들을!

기억해야할것은 flex-grow는 주변 여분공간을 가져간다. 
(여분공간이 남아있다면 말이다.)

반응형 디자인을 할 때 유용할것으로 보인다. 




# flex-basis

flex-basis 또한 child에서 적용되는 property다. 

*********************************************************************************************************************************************
.father {
    display: flex;
    /* Main Axis */
    justify-content: space-around;
}

.child {
    flex-basis: 300px;
    background: peru;
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
*********************************************************************************************************************************************

flex-basis는 width와 같다고 할 수 있다. 
하지만 그렇지도 않은게 flex-basis는 element에게 처음 크기를 주는거다. 
모든게 찌그러지거나 늘어나기 전에 말이다. 

찌그러지거나 늘어나기전에 flex-basis를 설정하는거다. 
처음 크기지만 실제크기는 아니다. 
이 크기는 바뀌게 된다. 
왜냐면 flex-grow와 flex-shrink 떄문이다. 

아래처럼 가운데 2번 box애 flex-grow:1 을 주게 되면 또 
양옆 1,3 번 box는 300px의 width를 가지지만 가운데 2번 box는 빈공간을 차지하게되어 width가 300px보다 커지게 된다. 

*********************************************************************************************************************************************
.father {
    display: flex;
    /* Main Axis */
    justify-content: space-around;
}

.child {
    flex-basis: 300px;
    background: peru;
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.child:nth-child(2) {
    background: black;
    flex-grow:1;
}
*********************************************************************************************************************************************

flex-basis는 거의 width와 같지만 flex-basis는 오직 width만 있는게 아니다. 

flex-direction: row 일때 flex-basis는 width다. 
왜냐하면 flex-basis는 main Axis에서 작용하고 row 일 때 main Axis는 가로축이니까. 

그럼 만약에 flex-direction: column 이라면 
flex-basis 는 height가 되는거다. 
왜냐면 flex-direction: column 일땐 main Axis가 세로축이니까. 

이게 application에서 element의(=flex item의) 크기를 정할 때 훨씬 좋은 방법이다. 

나는 flex-basis를 통해 element의 기본크기를 정할 수 있다. 
그치만 아마도 조금 늘어나거나 줄어들거다. 
좀 더 유동적으로 변한다. 







# Life Before Grid 

flexbox 로는 grid(격자무늬) 를 만들기 어렵다. 
그래서 grid가 생김. 




# CSS Grid Basic Concepts

flex에서 그랫던 것처럼. grid도 시작하고싶을 때 father에서 일어난다. 
grid의 규칙은 flexbox와 거의 유사하다. 
거의 뭐 child가 아니라 father에서 뭐 이뤄진다고 일단 봐보자. 

grid design은 father에서 해야한다. 

*********************************************************************************************************************************************
(CSS)
.father {
    display: grid;
}

.child {
    background: peru;
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

(HTML)
<body>
    <div class="father">
        <div class="child">1</div>
        <div class="child">2</div>
        <div class="child">3</div>
    </div>
</body>
*********************************************************************************************************************************************

위처럼 코드를 작성하면 
1
2
3
요렇게 3개의 depth가 생긴다. 
row가 3개인 구성이 된다. 

이제 할 수 있는건 grid의 행과 열이 몇개나 있는지를 구성해줘야한다. 

먼저 column은 
grid-templete-columns: ??; 
를 통해 내가 원하는 column수를 정해줄 수 있다. 

grid-templete-columns: 25px 45px 50px 100px;
요래 해주면 4개의 column과 각 column별 width를 정해준다. 

만약 아래처럼 코드를 구성해 준다면 
1 2 3 
4
로 각 width가 250px인 상자들이 격자로 구성이 된다. 

*********************************************************************************************************************************************
(HTML)
<body>
    <div class="father">
        <div class="child">1</div>
        <div class="child">2</div>
        <div class="child">3</div>
        <div class="child">4</div>
    </div>
</body>

(CSS)
.father {
    display: grid;
    grid-template-columns: 250px 250px 250px;
}

.child {
    background: peru;
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}
*********************************************************************************************************************************************

만약 column간의 gap을 주고 싶다면 
column-gap: 10px;
를 father element에 주면 된다. 

당연하게도 row간에 gap을 주고 싶다면
row-gap: 10px;
을 father element에 주면 된다. 

gap: 10px; 
로 한번에 행열에 10px의 gap을 줄 수도 있다.

또한 row들을 구체적으로 나눌 수 도 있다. 
현재는 child들의 height가 59px로 되어있는데(width는 내가 정해줬으니 250px 이고) 
이건 font-size 때문이다. 
당연히 font-size를 줄여주면 height도 줄어들겠다. 
왜냐면 우리가 row의 크기를 정의하지 않았기 떄문이다. 

grid-template-column 처럼 grid-template-row 도 있다. 

*********************************************************************************************************************************************
(HTML)
<body>
    <div class="father">
        <div class="child">1</div>
        <div class="child">2</div>
        <div class="child">3</div>
        <div class="child">4</div>
        <div class="child">5</div>
        <div class="child">6</div>
        <div class="child">7</div>
        <div class="child">8</div>
        <div class="child">9</div>
    </div>
</body>

(CSS)
.father {
    display: grid;
    grid-template-columns: 250px 250px 250px;
    grid-template-rows: 50px 150px 250px;
    gap: 10px;
}

.child {
    background: peru;
    color: white;
    font-size: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
}

*********************************************************************************************************************************************

위처럼 코드를 작성해주면 

1 2 3 
4 5 6 
7 8 9 

의 배치로 1행 50px, 2행 150px, 3행 250px 의 height를 가지게 할 수 있다. 

자 일단 여기까지 
grid-template-columns, grid-template-rows, column-gap, row-gap, gap 을 배웠다. 
이건 CSS에서 gap을 사용할 때의 가장 기본적인것들 이다. 




# Grid Template Areas 


*********************************************************************************************************************************************
(HTML)
<body>
    <div class="grid">
        <div class="header"></div>
        <div class="content"></div>
        <div class="nav"></div>
        <div class="footer"></div>
    </div>
</body>

(CSS)
.grid {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 300px 300px 300px 300px;
}

.header {
    background-color: red;
}

.content {
    background-color: green;
}

.nav {
    background-color: blue;
}

.footer {
    background-color: black;
}
*********************************************************************************************************************************************

위와같이 코드를 작성하면 
4x4의 grid가 형성이되고 
가장 첫줄엔 r,g,b,w 의 색이 칠해져있다. 

.grid {
    display: grid;
    grid-template-columns: 200px 200px 200px 200px;
    grid-template-rows: 300px 300px 300px 300px;
}

근데 이거 너무 비효율 적이다. 
아래처럼 쉽게 바꿀 수 있다. 

.grid {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: repeat(4, 300px;
}


이것을 사람들이 자주 사용하는 레이아웃으로 바꿔보려한다. 

--페이지구성-------------
header 
content, navigation 
footer
----------------------
요런방식으로 

grid-template-areas 를 사용하여 가능하게 할 수 있다. 
요거는 진짜 멋진게 눈에 잘 보이게 나의 레이아웃을 디자인한다. 

자 지금 4개의 행, 열을 가지고 있다

*********************************************************************************************************************************************
.grid {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: repeat(4, 200px);
    grid-template-areas: 
    "header header header header"
    "content content content nav"
    "content content content nav"
    "footer footer footer footer";
}

.header {
    background-color: red;
}

.content {
    background-color: green;
}

.nav {
    background-color: blue;
}

.footer {
    background-color: black;
}
*********************************************************************************************************************************************

근디 위에처럼 저렇게 이름으로 막 저렇게 직관적으로 grid-template-areas: ;를 사용해서 맘대로 만들었더니?
아무일도 일어나지 않았다. 
왜냐면 아직 CSS는 뭐가 header고 content고 nav이고 footer인지 모르기 때문이다. 
!!class이름은 뭐 하는게 없다!!
class이름만으로는 뭐 아무것도 안된다. 뭐 되는게 없다. 무쓸모자식이다. 

그래서 각 child element들에게 grid-area: ;를 통해 이름을 붙여줘야 한다. 
당연히 grid-area: ; 에 있는 이름과 grid-templete-areas: ; 에 있는 이름은 같아야 한다. 
class이름은 노상관이다. 

*********************************************************************************************************************************************
(CSS)
.grid {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: repeat(4, 200px);
    grid-template-areas: 
    "header header header header"
    "content content content nav"
    "content content content nav"
    "footer footer footer footer";
}

.header {
    background-color: red;
    grid-area: "header";
}

.content {
    background-color: green;
    grid-area: "content";
}

.nav {
    background-color: blue;
    grid-area: "nav";
}

.footer {
    background-color: black;
    grid-area: "footer";
}
*********************************************************************************************************************************************

자 이제 이름을 붙여줬더니... 
또 안된다. 
왤까 

왜냐면 이름을 string으로 해줬기 때무니지. 
아래처럼 바꿔줘야한다. 
*********************************************************************************************************************************************
(CSS)
.grid {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: 100px repeat(2, 200px) 100px;    <- 요렇게도 가능함.
    grid-template-areas: 
    "header header header header"
    "content content content nav"
    "content content content nav"
    "footer footer footer footer";
}

.header {
    background-color: red;
    grid-area: header; <- 요기 이름에 "" 이거 해주면 안됨.
}

.content {
    background-color: green;
    grid-area: content;
}

.nav {
    background-color: blue;
    grid-area: nav;
}

.footer {
    background-color: black;
    grid-area: footer;
}
*********************************************************************************************************************************************

우왕 된다. 

이렇게 페이지 레이아웃을 만들었다. 
CSS grid를 쓰고 그 레이아웃이 어떻게 보여야 하는지 
그리고 레이아웃에 이름을 적어서 만들었다. 

아래처럼 "." 으로 한칸 비워줄 수도있다. 
그럼 4x4 grid에서 2행3열, 3행3열은 그냥 빈칸으로 비워진다. 
아래코드 참고 

*********************************************************************************************************************************************
(CSS)
.grid {
    display: grid;
    grid-template-columns: repeat(4, 200px);
    grid-template-rows: 100px repeat(2, 200px) 100px;    <- 요렇게도 가능함.
    grid-template-areas: 
    "header header header header"
    "content content . nav"             <- 요롷케 한칸 비워줄 수도 있다. 
    "content content . nav"
    "footer footer footer footer";
}
*********************************************************************************************************************************************

그리고 아래처럼 
grid-template-columns: auto 200px;
이렇게 해주면 화면 가로를 꽉 채우게 만든다. 
auto 200px 는
두번째만 200px 적용이고 나머지 그리드 들은 auto로 되서
auto 200px auto auto 이런식으로 적용된다. 

auto 는 가능한한 많은 공간을 있는만큼 차지한다는 거다. 

*********************************************************************************************************************************************
(CSS)
.grid {
    display: grid;
    grid-template-columns: auto 200px;
    grid-template-rows: 100px repeat(2, 200px) 100px;    <- 요렇게도 가능함.
    grid-template-areas: 
    "header header header header"
    "content content . nav"             <- 요롷케 한칸 비워줄 수도 있다. 
    "content content . nav"
    "footer footer footer footer";
}
*********************************************************************************************************************************************

또한 grid-template-area 는 아래와같을 때 적용되지 않는다. 

1. grid 내부에 grid-area의 영역이 전부 이어져 있는가? (ex: header 영역이 둘로 쪼개져 있고 그러면 안됨.)
2. grid 내부에 grid-area의 영역이 직사각형인가? (ex: header 영역이 ㄴ자 ㄱ자 등이어도 안됨.)



# Rows and Columns 

grid-templete-areas: ;를 사용하지 않고 column과 row의 숫자를 사용해서

grid-template-areas: 
"header header header header"
"content content . nav"             
"content content . nav"
"footer footer footer footer";
}

이 구조를 만들어 볼거다. 

.headr {

}

에서 즉, child element의 property를 설정해줌으로서 header가 어디서부터 시작하고 끝날지 정할 수 있다. 
일단 기본 CSS 구조는 아래와 같이 4x4 구조다.
 child element들의 grid-area는 지웠다. 

*********************************************************************************************************************************************
.grid {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
}

.header {
    background-color: red;
}

.content {
    background-color: green;
}

.nav {
    background-color: blue;
}

.footer {
    background-color: black;
}
*********************************************************************************************************************************************

이제 내가 원하는 element를 선택해서 지금 우리는 header element를 선택한다. 
그리고 header에게 몇행 몇열 부터 시작해서 몇행 몇열에서 끝날지 정할 수 있다. 


.header {
    background-color: red;
    grid-column-start: 1;
    grid-column-end: 2;
}

자 이렇게 해주면 1열에서 시작해서 2열에서 끝나겠지 라고 생각할 수 있지만 새로고침 해보면 아무 변화가 없다. 
왜냐면 start와 end는 column을 얘기하는게 아니다. 
이건 줄(line)을 얘기하는거다. 

1줄 element1 2줄 element2 3줄 element3 4줄 element4 5줄

이러한 구조이기 때문에 한칸만 차지하는거다. 

.header {
    background-color: red;
    grid-column-start: 1;
    grid-column-end: 3;
}

이렇게 해줘야 

header header content nav 
footer 

이 구조가 만들어진다. 1번쨰 칸에서 시작 2번쨰칸에서 끝이 나게 되는거다. 
그러면 우리는 맨 윗줄에 header를 위치시키고 싶으니 1줄부터 5줄까지 header를 위치시키면 된다.
아래의 코드처럼.

*********************************************************************************************************************************************
(CSS)
.grid {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
}

.header {
    background-color: red;
    grid-column-start: 1;
    grid-column-end: 5;
}

.content {
    background-color: green;
}

.nav {
    background-color: blue;
}

.footer {
    background-color: black;
}


(HTML)
<body>
    <div class="grid">
        <div class="header"></div>
        <div class="content"></div>
        <div class="nav"></div>
        <div class="footer"></div>
    </div>
</body>
*********************************************************************************************************************************************

이제 content를 2,3행의 1,2,3번쨰 열에 넣고 싶으니 

.content {
    background-color: green;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 2;
    grid-row-end: 4;
}

요래 해주면 되겠다. 
근데 여기서 만약 

.content {
    background-color: green;
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 1;
}

로 해주면 content가 맨 위로 올라오게 된다. 
HTML의 변경 없이 element의 위치를 바꿔주고 싶을 때 사용하면 유용할듯 싶다. 

이러면 이제 

header header header header
content content content nav
content content content footer 

이런 구조가 된다. 

그러믄 이제 nav를 늘려주면 된다. 
아래처럼 행의 시작과 끝을 정해주면 됨. 

.nav {
    background-color: blue;
    grid-row-start: 2;
    grid-row-end: 4;
}

nav를 늘려주면 아래처럼 구조가 되고 

header header header header
content content content nav
content content content nav
footer 

이제 footer를 아래처럼 컬름을 늘려주면 우리가 원하는 구조가 나온다. 
.grid {
    grid-template-areas: 
    "header header header header"
    "content content content nav"             
    "content content content nav"
    "footer footer footer footer";
}
 -> 요고 구조 이제 grid-template-areas: 안쓰고도 만들 수 있게 되었다. 

.footer {
    background-color: black;
    grid-column-start: 1;
    grid-column-end: 5;
}

header header header header
content content content nav
content content content nav
footer footer footer footer 


# Shortcuts

.footer {
    background-color: black;
    grid-column-start: 1;
    grid-column-end: 5;
}

이거는 아래와 같다. 

.footer {
    background-color: black;
    grid-column: 1 / 5 ;
}


근데 몇칸인지 일일히 다 세는거보다 
즉, 1줄부터 시작해서 5줄에서 끝난다라고 하는것 대신에 
"첫줄부터 막줄까지임" 이라고 적는게 훨 낫겠지. 

그 마지막줄을 의미하는게 바로 "-1" 이다. 

.footer {
    background-color: black;
    grid-column: 1 / -1 ;
}

이렇게 해줄수가 있는거다.(우리는 5줄이 막줄임)

어떻게 이게 가능하냐면 
 1  2  3  4  5 
-5 -4 -3 -2 -1

각줄은 요로케 음수줄로도 대체표현이 가능하기 때문이다. 

내가 몇개의 line을 가지고있는지 신경쓰고싶지 않을 때 아주 유용하다. 

그렇다면 

.content {
    background-color: green;
    grid-column: 1/4;
    grid-row: 2/4;
}

이것도 


.content {
    background-color: green;
    grid-column: 1/-2;          <- 여기여
    grid-row: 2/4;
}

이렇게 바꿔줄 수 있다. 이건 그냥 "첨부터 마지막 전칸까지임" 이라는 의미로 쉽게 쓰일 수 있다. 

근디 조금만 생각해보면 어디서부터 시작하고 어디서 끝나는지 일일히 지정해주는것보다. 
어디서부터 시작해서 얼만큼 더 가야하는지 정해주는게 좀 더 우리가 다루기 쉽겠지. 

그게 "span" 을 이용하는거다. 
span은 시작점과 끝점을 적는것을 대신한다. 

span은 기본적으로 얼마나 많은 cell(cell은 그냥 grid의 한칸) 을 갖는지를 다룬다. 
여기서부터 시작 여기서 끝 이런거 대신에 

이건 4개의 cell을 가지고 있다. 라고 하면 되는거다. 


.footer {
    background-color: black;
    grid-column: 1/-1; 
}

위에거 대신에 


.footer {
    background-color: black;
    grid-column: span 4; 
}

이게 가능하다. 

.footer {
    background-color: black;
    grid-column: 2/span 4; 
}

이렇게 하면 2번째 열부터 4칸이다. 라는 뜻이다. 시작점을 정해줄 수도 있다. 

아래의 2개의 버전은 결국 같은 기능을 한다. 

*********************************************************************************************************************************************
(CSS a/a 버잔)
.grid {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    gap: 10px;
}

.header {
    background-color: red;
    grid-column: 1/-1;
}

.content {
    background-color: green;
    grid-column: 1/4;
    grid-row: 2/4;
}

.nav {
    background-color: blue;
    grid-row: 2/4;
}

.footer {
    background-color: black;
    grid-column: 1/-1; 
}



(CSS span 버잔)
.grid {
    display: grid;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    gap: 10px;
}

.header {
    background-color: red;
    grid-column: span 4;
}

.content {
    background-color: green;
    grid-column: span 3 ;
    grid-row: span 2;
}

.nav {
    background-color: blue;
    grid-row: span 2;
}

.footer {
    background-color: black;
    grid-column: span 4; 
}
*********************************************************************************************************************************************




# Line Naming

line에 이름을 붙이는것도 가능하다. 

*********************************************************************************************************************************************
.grid {
    display: grid;
    grid-template-columns: [first-line] 100px [second-line] 100px [third-line] 100px [fourth-line] 100px [fifth-line];
    grid-template-rows: repeat(4, 100px);
    gap: 10px;
}

.header {
    background-color: red;
    grid-column: first-line / fifth-line;
}
*********************************************************************************************************************************************

위처럼 줄번호 대신 직접 붙인 이름으로 대신하는것도 가능하다. 

당연히 행, 열 모두 사용 커이다. 

grid-template-rows: repeat(4, 100px [sexy-line]);
 => grid-template-rows: 100px [sexy-line] 100px [sexy-line] 100px [sexy-line] 100px [sexy-line]

이렇게 하면 4개의 행의 줄이름 이 모두 "sexy-line" 이 된다. (근데 첫줄은 이름 안붙여준거다.)
그러면 sexy-line 1, sexy-line 2, sexy-line 3, sexy-line 4 이렇게 줄이 생기는거다. 





# Grid Templete 

fr 은 fraction(부분)을 뜻한다. 
pxl이나 %와 같은거다. 측정단위다. 


grid-template-columns: repeat(4, 1fr);

이렇게 하면 가로로 모든공간을 4분할로 구성하게된다. 
 -> 공간을 가질 수 있는 만큼 가지고 4번 반복한다. (grid에서 가능한 공간만큼만을 가진다는 거다.)
fraction은 사용가능한 공간을 뜻한다. 

.grid {
    display: grid;
    width: 500px;                           <- 요기서 
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 100px);
    gap: 10px;
}

만약 위처럼 grid의 크기를 500px로 딱 정해버리면 fr은 500px만큼 안에서 나눠먹게 되는거다. 
 -> navigator에서 얻는게 아니라 grid container에서 얻는거다. 

이 fr이 grid의 아주 멋진 장점이다. 
이제 나는 뭐 element들을 100px, 25px 이런식으로 만들 필요가 없고 유연하게 레이아웃을 정할 수 있는거다. 
예를들면 100px이 컴퓨터에서는 별로 안크지만 핸드폰에서는 또 개크니까 이제 grid의 fr을 통해 브라우저의 크기에 따라 유연하게 만들어줄 수 있다. 

grid-template-columns: 4fr 1fr 1fr 1fr;
이렇게 만들면 나머지 3개보다 4배큰 박스하나랑 나머지 3개 박스가 알아서 비율에 맞춰서 구성되게 괸다. 
이제 아주 간단하게 레이아웃을 짤 수 있을것같다. 

!!!흔히 하는 실수!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

위처럼 해버리면 아무것도 안나옴 그냥 사라져버림. 
왜냐 가로는 뭐 브라우저의 크기에 따라 정해지니까 꽉 채워서 만들어주면 되는데(fr이니까 꽉채우는거임 계속 말했음.)
세로는 아니여 세로는 따로 height를 안 정해주면 그냥 빵이다. 0 이라고
위의 코드에서 grid는 높이가 없다.
그래서 아무것도 안나오고 다 사라져 버리는거다. 

!!!흔히 하는 실수!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

.grid {
    display: grid;
    height: 50vh;   <- 내 화면의 절반이라는 의마, 암튼 이렇게 높이를 지정을 해줘야 row에서 fr이 의미가 있다. 
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    gap: 10px;
}
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


그럼 지금까지 배운 이 fr과 이전에 배운 grid-templete을 이용하면 아주 유용하게 쓸 수 있다. 
처음엔 row를 적는다. 그리고 이 row의 높이가 얼마인지 적는다. 
이렇게 cell의 이름과 높이를 정하고 각 column의 너비(width)를 구체적으로 정하면 된다. 


*********************************************************************************************************************************************
(CSS)

.grid {
    display: grid;
    gap: 10px;
    height: 100vh;
    grid-template: 
    "header header header header" 1fr   <- 요것은 row의 높이
    "content content content nav" 2fr   <- 요것도 row의 높이
    "footer footer footer footer" 1fr/ 1fr 1fr 1fr 1fr;   <- 요게 이제  row의 크기 / 각 width의 크기 <- 여기서는 repeat(4, 1fr) 이거 못쓴다. 
}

.header {
    background-color: red;
    grid-area: header;
}

.content {
    background-color: green;
    grid-area: content;
}

.nav {
    background-color: blue;
    grid-area: nav;
}

.footer {
    background-color: black;
    grid-area: footer;
}
*********************************************************************************************************************************************

위와 같이 화면을 만들면 화면 크기가 변해도 비율이 똑같다.(fr 덕분)




# Place Items 

justify-items, align-itme에 대해 아라보자. 
이 property는 부모에게 있다.(grid container에 있다.)

justify-items의 기본값은 streth다. 

이 말은 grid-container는 모든 grid 자식을 가지고 있고 그리고 자식들을 늘여서 본인을 채우게 한다는 것이다. 

다시말하면, stretch는 grid container가 grid를 가지고 있고 grid를 늘여서 grid 자체를 채우도록 한다. 

만약 
justify-items: start; 
이렇게 해주면 itme들이 cell들을 꽉 채우는게 아니라 처음부터 그냥 시작한다. 
그래도 같은크기의 column과 같은 크기의 row를 여전히 가지고 있다. 
그리만 item들은 쭉 늘어있지 않는다. 

같은이치로 center, end 도 해줄 수 있다. 


align-items 도 같은거다. 
근데 cell안에서 세로방향인거만 다른거다. 

예를들어 아래처럼 코드를 작성하면 각 item들은 각 cell들의 오른쪽아래끝에 구석탱이에 위치하게 된다.
오른쪽 끝에 itme들이 보일 수 있는 이유는 각 item들이 내용이 있기 때문이다. 내용은 당연 각 item들의 text 이다. 
내용이 없으면 크기가 없기 때문에 암것도 보이지 않는다.

*********************************************************************************************************************************************
(HTML)
<body>
    <div class="grid">
        <div class="header">header</div>
        <div class="content">content</div>
        <div class="nav">nav</div>
        <div class="footer">footer</div>
    </div>
</body>

(CSS)
.grid {
    display: grid;
    gap: 5px;
    height: 50vh;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    align-items: end;
    justify-items: end;
}

.header {
    background-color: red;
}

.content {
    background-color: green;
}

.nav {
    background-color: blue;
}

.footer {
    background-color: black;
}
*********************************************************************************************************************************************

만약 
.header {
    background-color: red;
    height: 40px;
    width: 40px;
}

로 각각의 item들의 크기를 지정해놨다면 

.grid {
    display: grid;
    gap: 5px;
    height: 50vh;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    align-items: stretch;
    justify-items: stretch;
}

로 해도 item이 cell을 꽉 채우진 않는다. 

아 그리고

.grid {
    display: grid;
    gap: 5px;
    height: 50vh;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    align-items: stretch;
    justify-items: stretch;
}

.grid {
    display: grid;
    gap: 5px;
    height: 50vh;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    place-items: stretch stretch;  <- align-items justify-items 순서다. 
}

위의 2개는 같은 의미다. place-items로 한번에 정의가 가능하다. 



# Place Content

.grid {
    display: grid;
    gap: 5px;
    height: 50vh;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    justify-content: center   <- 이거!!
}

위의 코드에서 즉, grid애서 justify-content는 이 4x4의 cell을 가진 grid자체의 위치를 말한다. 
justify-content: center   
로 코드를 작성했으니 이 4x4 grid는 브라우저의 가운데에 위치하게 된다. 
(그래서 행,열의 크기를 100px로 설정, fr로 하면 그냥 브라우저를 다 차지해버링게)

grid element의 위치를 가운데에 두는것이 아니다. 
grid element는 이미 브라우저의 width를 꽉채워서 사용핟고 있다.(background color 써보면 알 수 있음.)

내가 justify-content라고 하면 나는 이 grid element가 아니라 그안에있는 grid 4x4행렬 저거를 움직이는거다. 

grid container는 100%의 width다. 
근데 justify-contnet는 그안의 레알 grid를 움직이는거다. 
뭐 그안의 property들로는 flex-box에서와 유사하게 start, end, center, space-around, space-between ..등등이 있다.

grid에서 justify-contnet는 수평적인것들만 다룬다. 
열간의 배열을 다루는거다. 

align-content를 통해 수직적인것들, 행간의 배열을 다룰 수 있다. 
그리고 이 align-contnet를(justify-contnet도 마찬가지지만) 동작시키기위해서는 grid element의 크기가 충분히 커야한다.(grid자체보다는 커야겠지 당연)


align-contnet 랑 justify-content는 완전히 다른거다. 
justify-content는 모든것, 모든 grid를 수평적으로 움직이는거고 
align-contnet는 모든 grid를 수직적으로 움직이는거다. 

그리고 당연하게도 place-contnet도 있다. 이건 justify-content와 align-contnet를 동시에 설정해 줄 수 있다. 

place-contnet: center end;   = (align-contnet justify-content) ;
이거임 

place-items 랑 헷갈리지 말자 place-items는 각각의 cell들안에서 각 사각형 하나하나에 어떤 걸 적용하는지에 관한거고, 
place-content는 모든 사각형 다같이 함께 인거다. 




# align-self, justify-self

.header {
    background-color: red;
    align-self: end;
}

이렇게 해주면 child에만 align-items 적용한거처럼 한 child에만 property가 적용 될 수 있다.
당연하게도 justify-self도 있다.

.header {
    background-color: red;
    align-self: end;
    justify-self: center;
}

위처럼 해주면 header만 한 cell안에서 아래에 붙어서 가운데에 header 글자가 위치하게 된다. 
그리고 아래처럼 
place-center: 세로 가로; 
로 간단하게 작성할 수 도 있다.

.header {
    background-color: red;
    place-self: end center
}





# Auto Columns and Rows


1. grid-auto-rows

*********************************************************************************************************************************************
(HTML)
<body>
    <div class="grid">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        .
        .
        .
        <div class="item">15</div>
        <div class="item">16</div>
        <div class="item">17</div>
        <div class="item">18</div>
        <div class="item">19</div>
        <div class="item">20</div>
    </div>
</body>

(CSS)
.grid {
    display: grid;
    color: white;
    gap: 5px;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    place-content: start center;
}

.item:nth-child(odd) {
    background-color: red;
}

.item:nth-child(even) {
    background-color: black;
}
********************************************************************************************************************************************* 

자 위처럼 element는 20개 인데 4x4의 grid를 설정해줬따고 하면 row가 충분하지 않아서 문제가 된다. 

column은 정해준대로 100px 로 맞춰지는데 
5행부터는 행의 높이가 지 멋대로 글자크기에 맞춰져 버리게 된다. 
왜냐면 당연히 지정해주지 않았기 떄문이겠지. 

우리는 서버에서 데이터를 가져와 정렬해줄 때 데이터의 개수가 유동적으로 바뀔 수 있다.
그럼 그에 맞춱서 맨날 출근해가꼬 그거 맞춰줄래?
아니쥬 자동으로 맞춰줘야쥬.

그래서 사용하는게 
grid-auto-rows: ;
이거임. 

이게 뭘 의미하냐면 
만약에 여기에 더 많은 content들이 있으면 내가 따로 rows를 지정해주지 않아도 default value를 자동으로 줘서 row를 생성하는거다.
그래서 auto다. 


.grid {
    display: grid;
    color: white;
    gap: 5px;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    grid-auto-rows: 100px
}

짠 이렇게 해주면 추가적으로 content들이 나와도 알아서 Row의 높이를 100px로 맞춰준다.(다른크기로 해도 당연히 노상관)

즉, 16번쨰 cell 까지는 내가 계획했던거다. 
그리고 다른 부분에서 내가 auto-size를 준것이다. 

이거 내가 더 많은 정보랑 element를 가지게 될 떄를 준비하기 위한 것이다. 


.grid {
    display: grid;
    color: white;
    gap: 5px;
    grid-template-columns: repeat(4, 100px);
    grid-auto-rows: 100px
}

위처럼 해버리면 그냥 모든 행들은 알아서 100px 크기로 가지게 되겄찌유?


2. grid-auto-flow


*********************************************************************************************************************************************
(HTML)
<body>
    <div class="grid">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
        .
        .
        .
        <div class="item">15</div>
        <div class="item">16</div>
        <div class="item">17</div>
        <div class="item">18</div>
        <div class="item">19</div>
        <div class="item">20</div>
    </div>
</body>

(CSS)
.grid {
    display: grid;
    color: white;
    gap: 5px;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
}

.item:nth-child(odd) {
    background-color: red;
}

.item:nth-child(even) {
    background-color: black;
}
********************************************************************************************************************************************* 

자 다시 돌아와서 위의 코드에서 CSS는 grid가 끝나고 나면 grid안에 담지 못한 사이즈가 없는 여분의 div들을 넣고 있따.
새로운 row들을 만들어내고 있는거다.
자동적으로, 그게 default다. 

기계적으로 row가 끝나도 더 만들어야 할 element들을 가지고 있으면, 더 많은 row들을 만든다. 

근디 만약에 내가 행으로 추가하는게 아니라 행은 고정시키고 컬럼으로서 옆에 붙이고 싶으면 어떻게 될까? 
고것이 바로 grid-auto-flow랑 같이 바꿔야 하는거다. 

.grid {
    display: grid;
    color: white;
    gap: 5px;
    grid-template-columns: repeat(4, 100px);
    grid-template-rows: repeat(4, 100px);
    grid-auto-flow: column;                  <- 이거여!!!
}

위처럼 만들어주면 row의 수보다 더많은 div가 있을 때 마다 더 많은 column들을 만들어 내는거다. 
옆으로 붙이는 거지.
그리고 애초에 element들의 정렬순서도 행열이 뒤바껴서 정렬된다. 

원래 
1 2 3 4 
5 6 7 8 
9 . .
이런 방향으로 정렬되던게 

1 5 9
2 6 . 
3 7 .
4 8 .
이런 방향으로 정렬되게 바뀐다. 

엑셀에서 행열바꿔서 정렬이랑 같다고 보면 되겠다. 

자 이제 gird-auto-flow: column; 을 통해 새로운 element들이 추가될 떄 행은 유지된 체 옆에 컬럼으로붙게 설정해줬다.
그 때 옆에 새롭게 생기게 되는 컬럼들의 너비를 자동으로 조정해주기 위해 사용되는것이 

grid-auto-column: 100px;
이것인 것이다. 

필연적으로 grid-auto-column: ; 과 grid-auto-flow: column; 은 같이 쓰일 수 밖에 없겠다. 




# minmax

minmax는 element들이 얼마나 크고 작게 될 수 있는지 지정해줄 수 있게한다.
아주 쿨하다.

.grid {
    display: grid;
    color: white;
    gap: 5px;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(4, 100px);
}


위처럼 코드를 작성하고 element가 뭐 한 15개 있다 치고 
브라우저의 크기를 줄였다 늘였다 해보면 브라우저의 크기에 따라 작아졌다 커졌다 한다.
근디 나는 뭐 그래 커지는건 상관없는데 작아지는건 이 크기 이하로 작아지는건 용납 못한다 할 떄!
이제 그 떄 minmax를 쓰는거다.

.grid {
    display: grid;
    color: white;
    gap: 5px;
    grid-template-columns: repeat(10, minmax(100px, 1fr));      <- 이거여!
    grid-template-rows: repeat(4, 100px);
}

위처럼 작성해주고 브라우저를 최소한으로 줄여봐도 이제 각 cell들의 너비는 최소 100px이하로는 안 작아지게되고 스크롤바를통해서 옆으로 넘겨서 보도록 페이지가 만들어진다. 
근데 브라우저를 키워주면 당연히 cell들의 크기는 그에 맞춱서 막 커지겠지 왜냐면 max는 1fr 이니까.

개쩌는군.




# auto-fit auto-fill 

자 이제 어떻게 CSS grid를 사용해서 엄청 쉽게 responsive(=반응하는) 디자인을 만들 수 있는 지 알아볼거다.
auto-fit 과 auto-fill을 사용해서 아라보쟈.

auto-fit, auto-fill 이 둘은 repeat function에만 사용한다.

[auto-flll]
우리가 정해준 크기 안에서 가능한 한 많은 빈 column(row)를 만들어준다.
(남는 공간을 빈 cell로 가득 채움)

[auto-fit]
현재 element를 stretch해서 colum(row) 딱 맞게(fit) 해준다.
(남는 공간에 현재 요소를 stretch해서 가득 채움)
 
*********************************************************************************************************************************************
(HTML)
<body>
    auto-fill
    <div class="grid">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
    </div>

    auto-fit
    <div class="grid">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
        <div class="item">4</div>
        <div class="item">5</div>
    </div>
</body>

(CSS)
.grid {
    color: white;
    display: grid;
    gap: 5px;
    /* grid-template-columns: repeat(5, minmax(100px, 1fr)); */
    /* grid-template-rows: repeat(4, 100px); */
    grid-auto-rows: 100px;
  }

.grid:first-child {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));;
}

.grid:last-child {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));;
}

.item:nth-child(odd) {
    background-color: red;
}

.item:nth-child(even) {
    background-color: black;
}
*********************************************************************************************************************************************





# min-content max-content

● max-content
▷ content의 크기만큼 cell의 크기를 늘린다.
● min-content
▷ content의 크기를 최대한 줄여 cell의 크기를 줄인다.

※ 어떻게 content가 보여야 하는지 디자인하는 것이다.
※ repeat(), minmax와 결합하여 반응형 디자인을 만들 수 있다.



-.
자 우리는 가끔 머리속에있는 content를 디자인 하고싶을 때 가 있지. 이개 잔쩌 CSS grid가 개쩌는 이유인거라네.
생각했던 content 사이즈를 직접 디자인 할 수 있기 때문이니깐.


*********************************************************************************************************************************************
(HTML)
<body>
    <div class="grid">
        <div class="item">This is very long text</div>
        <div class="item">This is very long text</div>
    </div>
</body>


(CSS)
.grid {
    color: white;
    display: grid;
    gap: 5px;
    grid-template-columns: max-content min-content;
    /* grid-template-rows: repeat(4, 100px); */
    grid-auto-rows: 100px;
  }
.item:nth-child(odd) {
    background-color: red;
}

.item:nth-child(even) {
    background-color: black;
}
*********************************************************************************************************************************************

위처럼 코드를 작성해주면 첫번쨰 열에있는 cell은 "This is very long text" 의 최대 크기에 맞춰서 박스가 형성되고 
두번쨰 열에있는 cell은 "This is very long text" 의 최소 크기에 맞춰서 박스가 형성된다.

즉, 안에있는 content의 크기에 맞춰서 사이즈를 조절 할 수 있는것이다. 

이걸르 minmax 와 결합해서 사용하면 아주 개쩔겠다.
최소크기와 최대크기를 안에있는 content의 사이즈에 맞출수 있는거다.

아래처럼 만들어주면 
grid-template-columns: repeat(5, minmax(max-content, 1fr));
이부분을 통해서 브라우저크기를 아무리 줄여도 max-content이하로는 안줄어서 글자가 뭐 줄바꿈이 된다던지하는 일이 없게 하는기다.

*********************************************************************************************************************************************
(HTML)
<body>
    <div class="grid">
        <div class="item">This is very long text</div>
        <div class="item">This is very longer text</div>
        <div class="item">This is very longer longer text</div>
        <div class="item">This is very longer longer longer text</div>
        <div class="item">This is very longer longer longer longer text</div>
    </div>
</body>


(CSS)
.grid {
    color: white;
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(5, minmax(max-content, 1fr));
    /* grid-template-rows: repeat(4, 100px); */
    grid-auto-rows: 100px;
  }
.item:nth-child(odd) {
    background-color: red;
}

.item:nth-child(even) {
    background-color: black;
}
*********************************************************************************************************************************************

아니면 아래처럼 auto-fit 또는 auto-fill과 함꼐 쓸 수도 있다.
grid-template-columns: repeat(auto-fit, minmax(10px, max-content));

근데 auto-fill이나 auto-fit과 끌 떄 minmax(min-contnet, max-content) 이렇개 아래처럼 쓰면 안됨.
minmax의 최대 최소 중 하나는 구체적인 값을 입력해줘야함.
  -> grid-template-columns: repeat(auto-fill, minmax(min-contnet, max-content));
  -> grid-template-columns: repeat(auto-fit, minmax(min-contnet, max-content));
    -> 이렇게 쓰면 안됨.





# SCSS
자 이제 SCSS 시작

# CSS Preprocessors and Set Up

SCSS는 기본적으로 CSS Preprocesser 다.
이말은 이제 SCSS를 compile 해서 일반 CSS 처럼 만든다는거다. 
CSS preprocessor에는 SCSS만 있는건 아니다. 암튼 뭐 SCSS가 Sass를 위한 공식 문법으로 릴리즈되었다. 
그니깐 뭐 sass나 SCSS나 뭐 비슷한거라고 보면 된다. 

SCSS랑 유사한 다른 preprocessor로는 stylus, less 등이 있다. 
SCSS랑 sass는 점점 업계표준이 되어가고 있다. 
매우 소수의 사람들만 CSS만 사용한다. 

그러니 결혼하고 애낳고 밥벌어먹고 살려면 이걸 당연히 배워야겠지.

SCSS는 CSS를 프로그래밍언어처럼 만들어준다. 
SCSS는 문법을 개선하고 좋은걸 사용할 수 있다. 
변수나 함수 같은걸 사용할 수 있다는거다. 

근디 뭐 당연히 사용하기가 쉽진 않겠지. 
compile하거나 build하는 단계가 필요하다. 
그걸위해 이제 gulp라는걸 사용할텐데 
gulp는 compile하거나 transform해주는 nodeJS package다. 

새로운걸 예전버전으로 만들어주거나(모든 브라우저가 알아먹게하기위해) SCSS,sass를 평범한 CSS로 바꿔준다. 



SCSS 구현 중 발생 했던 문제 점

1. m1 mac에서 구동

니꼬 github에서 파일 다운로드 > 가져온 폴더에서 .babelrc, .gitignore가 없길래 폴더에서 자체적으로 파일 생성 > node js 최신으로 다운로드 후 VSC 터미널 node -v, npm -v로 버전 확인 >VSC 안에 있는 터미널에서 npm i gulp gulp-sass node-sass --save-dev 입력 > npm i 입력 > npm run dev 입력

2. 문제점

Error in plugin "gulp-sass" 발생 > 니꼬쌤 gulp 강의 #4.0에 있는 babooteng2님 댓글 참고

gulpfile.babel.js 파일

import sass from "gulp-sass"

sass.compiler = require("node-sass"); 삭제

const sass = require("gulp-sass")(require("node-sass")); 입력

3. [18:00:36] Starting 'watch'...

[18:00:36] The following tasks did not complete: dev, , watch 문제 발생

4. 댓글 보고 watch 문제는 그냥 패스해도 되는 줄 알았더니 이 강의 ryan님 댓글 보고 문제 직감

const watch = () => {

gulp.watch(routes.css.watch, { usePolling: true }, styles);

}; 입력

입력 후 문제해결 :)






# Variables and Nesting 

1. variables

variable은 SCSS의 가장 큰 장점중 하나다. 
variable은 기본적으로 website에서 가장 중요한 coloers나 가장 중요한 styles를 저장하고 싶을 때 쓴다. 

SCSS에서 변수를 사용하는 방법은 
scss 폴더에 _variables.scss 라는 이름의 파일을 만들어주면 된다.(이름은 사실 상관없음.) 
상관있는건 밑줄이다. 
밑줄(_)로 이름을 시작하는 파일들은 CSS로 변하지 않았으면 하는 파일들이다. 

즉, 밑줄이 있으면 SCSS만을 위한 파일이라는 의미인것이다. 
평범한 CSS로 translate 되거나 compile 되는걸 원하지 않는거다. 

_variables.scss 에다 이제 $ 넣고 지정만 해주면 됨. 

$bg: black;

뭐 이런식으로 정해주면 됨. 

그리고 syles.scss 에 이 변수 파일을 import해주rh $변수명 <- 요렇게 사용해줄 수 있다. 
이 변수는 모든 corlor, style, shadow, font-family, font-size 등등 아무튼 그냥 다 넣을 수 있다.
아래코드 참고

*********************************************************************************************************************************************
(_variables.scss)
$bg: blue;


(styles.scss)
@import "_variables";

body {
  background-color: $bg;
}
*********************************************************************************************************************************************


2. Nesting

Nesting은 코드를 좀 더 정확하게 해준다. 
내가 타겟하는 element를 더 정화하게 해준다. 

*********************************************************************************************************************************************
(HTML)
<body>
  <h2>Title</h2>
  <div class="box">
    <h2>Another One</h2>
  </div>
</body>

(SCSS)
@import "_variables";

h2 {
  color: $bg;
}
*********************************************************************************************************************************************

위의 코드처럼 2개의 title이 있고 
SCSS에서 h2의 color를 지정해주면 
2개의 h2 모두에 적용이 된다. 

근데 내가 만약 Another Title 에만 변화를 주고싶다고 하면 

*********************************************************************************************************************************************
(HTML)
<body>
  <h2>Title</h2>
  <div class="box">
    <h2>Another One</h2>
  </div>
</body>

(SCSS)
@import "_variables";

h2 {
  color: $bg;
}

.box h2 {
    color: blue;
}
*********************************************************************************************************************************************

위처럼 작성해주면 된다. 

근데 만약 box에 button이 있고 box 바깥에도 button이 있는 상태에서 

box에 margint-top: 20px 주고
box안에있는 button은 빨간글씨
를 적용하고 싶다면 아래처럼 할 수도 있지만

*********************************************************************************************************************************************
(HTML)
<body>
  <h2>Title</h2>
  <div class="box">
    <h2>Another One</h2>
    <button>Hello</button>
  </div>
  <button>byebye</button>
</body>

(CSS)
@import "_variables";

h2 {
  color: $bg;
}

.box {
    margin-top: 20px
}

.box h2 {
  color: blue;
}

.box button {
  color: red;
}
*********************************************************************************************************************************************

위의 코드를 아채처럼 Nesting을 사용하여 더 간략하고 직관적으로 바꿀수도 있다. 

*********************************************************************************************************************************************
(HTML)
<body>
  <h2>Title</h2>
  <div class="box">
    <h2>Another One</h2>
    <button>Hello</button>
  </div>
  <button>byebye</button>
</body>

(CSS)
@import "_variables";

h2 {
  color: $bg;
}

.box {
  margin-top: 20px;
  h2 {
    color: blue;
  }
  button {
    color: red;
  }
}
*********************************************************************************************************************************************

위처럼 사용하면 일단 .box 안에 h2와 button이 있다는걸 알 수 있고 
.box가 안에있는것들을 타게팅하고 있다.$

또 만약에 hover로 마우스 올렸을 때 뭐 색 바뀌게 하려면 
원래는 아래처럼 해야헸지만

*********************************************************************************************************************************************
(CSS)
@import "_variables";

h2 {
  color: $bg;
}

.box {
  margin-top: 20px;
  h2 {
    color: blue;
  }
  button {
    color: red;
  }
}

.box :hover {
  background-color: green;
}
*********************************************************************************************************************************************

이제 아래처럼 &를 써서 좀 더 직관적으로 만들어줄 수 있다. 

*********************************************************************************************************************************************
(SCSS)
@import "_variables";

h2 {
  color: $bg;
}

.box {
  margin-top: 20px;
  &:hover {
    background-color: green;
  }
  h2 {
    color: blue;
    &:hover {
      color: red;
    }
  }
  button {
    color: red;
  }
}
*********************************************************************************************************************************************





# Mixins

mixins는 SCSS functionality를 재사용할 수 있게 해준다. 
_mixins를 만드는건 쉽다. 
일단 _mixins.scss 파일을 만들고 그안에 @minxin 이름 { } 을 통해서 만들어줄 수 있다. 
예를 들어 설명하자면 아래처럼 HTML에 h1이 있고 _mixins.scss에 sexyTitle 이라는 mixin을 만들었다. 

*********************************************************************************************************************************************
(HTML)
<body>
  <h1>Hello</h1>
</body>

(_mixin.scss)
@mixin sexyTitle {
    color: blue;
    font-size: 30px;
    margin-bottom: 12px;
}
*********************************************************************************************************************************************

그럼 이 h1에 어떻게 mixin을 적용시킬수 있을까. 
아래처럼 @include mixin이름(); 를 통해서 적용시킬 수 있다. 
함수를 사용하는것과 비슷하다.

*********************************************************************************************************************************************
(style.scss)
@import "_variables";
@import "_mixins";

h1 {
  @include sexyTitle();
}
*********************************************************************************************************************************************

mixin의 더 큰 장점은 진짜 함수처럼 사용이 가능하단거다. 
아래처럼 $ 를 이용해서 변수를 지정해서 사용도 가능하다.
마치 프로그래밍같다.

*********************************************************************************************************************************************
(HTML)
<body>
  <a href="#">Google</a>
  <a href="#">Google</a>
  <a href="#">Google</a>
  <a href="#">Google</a>
  <a href="#">Google</a>
</body>

(_minis.scss)
@mixin link($color) {
    text-decoration: none;
    margin-bottom: 10px;
    display: block;
    color: $color;
}

(styles.scss)
@import "_variables";
@import "_mixins";

a {
  &:nth-child(odd) {
    @include link(red);
  }
  &:nth-child(even) {
    @include link(blue);
  }
}
*********************************************************************************************************************************************

당연히 mixins.scss는 compile될 수 없다. 
우리가 받게되는건 그냥 긴..CSS코드다. 

mixin으로 아래처럼 조건문도 사용이 가능하다. 

*********************************************************************************************************************************************
(mixins.scss)
@mixin link($word) {
    text-decoration: none;
    margin-bottom: 10px;
    display: block;
    @if($word == "odd") {
        color: red;        
    } @else {
        color: blue;
    }
}

(styles.scss)
@import "_variables";
@import "_mixins";

a {
  &:nth-child(odd) {
    @include link("odd");
  }
  &:nth-child(even) {
    @include link("even");
  }
}
*********************************************************************************************************************************************

즉, mixin은 어떤 종류의 argument를 mixin에다가 보내야할 때 이것이 CSS의 결과를 바꾼다. 
mixin은 내가 프로그래밍을 하고싶을 때 if-else나 color를 보내고 싶거나 할 때 사용하면 된다. 
다이나믹하게 변하는 filed에서는 mixin을 사용하면 된다. 





# Extends 

만약 CSS결과값에서 아무 변화를 주고싶지 않은데 
다시 많은 CSS Style을 재사용 하고 싶으면, extends 라는걸 사용하면 된다. 
그니깐 뭐 같은 코드를 중복하고 싶지 않을 때 사용한다고 보면 된다. 

mixin은 상황에 따라 다르게 코딩을 하고 싶으면 사용하는것이었다. 

*********************************************************************************************************************************************
(HTML)
<body>
  <a href="#">Log In</a>
  <button>Log Out</button>
</body>
*********************************************************************************************************************************************

위처럼 a태그와 button태그가 있는데 이 둘을 똑같이 보이게 만들고 싶다고 해보자. 
근데 뭐 class명을 넣거나 하진 않을거다. 
HTML을 여기서 더이상 만지진 않는다. 

*********************************************************************************************************************************************
(styles.scss)
a {

}

button {
  
}
*********************************************************************************************************************************************

일단 위처럼 만들고 우리는 저 a와 button이 엄청 손나 많은 css property를 공유했으면 한다. (아마 a는 쫌 더 가질거 같다.)

일단 _buttons.scss 라는 파일을 만들고 거기에 반복사용할 코드를 작성해야한다. 
내가 extend를 사용할 수 있는 scss를 만드는 방법은 % 를 사용하는거다. 

*********************************************************************************************************************************************
(buttons.scss)

%button {
    font-family: inherit;
    border-radius: 7px;
    font-size: 12px;
    text-transform: uppercase;
    background-color: tomato;
    padding: 5px 10px;
    color: white;
    font-weight: 500;
}
*********************************************************************************************************************************************

자 위처럼 코드를 만들고 저걸 재사용해볼거다. 
이건 page에서 분리해야하는 element들이 많을 때 진짜 유용하다. 
button이나 title이나 card, navgation 같은것에 적용할 때 진짜 유용하다. 

자 일단 styles.scss에 extend할 파일을 import하고 적용하고자 하는 부분에 "@extend %이름" 을 해주면 된다.(아래코드 참고)
아주 간단하지만 파워풀하다. 

*********************************************************************************************************************************************
(styles.scss)

@import "_buttons";     <- extend 할거 가져오고

a {
  @extend %button;      <- 넣어주면 된다.
}

button {
  @extend %button;
}
*********************************************************************************************************************************************

그리고 아래처럼 각자의 스타일을 별도로 지정해주면 저 a와 button은 아주 유사한 스타일을 가지게 된다. 

*********************************************************************************************************************************************
(styles.scss)

@import "_buttons";

a {
  @extend %button;
  text-decoration: none
}

button {
  @extend %button;
  border: none;
}
*********************************************************************************************************************************************

자 이게 extend 다. 
style을 분리할 수 있게 해준다. 
그리고 더 추가할 수 도 있다. 


# Awesome Mixins and Conclusions

mixin에는 @content 라는 키워드가 있다. 
아래처럼 @content가 삽입된 자리에 코드를 추가할 수 있다. 

*********************************************************************************************************************************************
@mixin left-top { 
    position: absolute; 
    top: 0; 
    left: 0; 
    @content; 
} 

.box { 
    @include left-top { bottom: 0; } 
}
*********************************************************************************************************************************************

아래처럼 보여지는 화면의 크기가 변함에 따라 혹은 어떤 변화가 있을 때 그에 반응하도록 
작성하는것도 @content를 통해 가능하다. 

*********************************************************************************************************************************************
@mixin icon($url) {
    &::after {
      content: $url;
      @content;
    }
  }
  .icon1 {
    // icon Mixin의 기존 기능만 사용
    @include icon("/images/icon.png");
  }
  .icon2 {
    // icon Mixin에 스타일 블록을 추가하여 사용
    @include icon("/images/icon.png") {
      position: absolute;
    };
  }
  *********************************************************************************************************************************************



# opacity
element의 투명도를 정하는 property 
0~1 사이의 값을 부여할 수 있으며 0이 완전투명, 1이 불투명이다. 

기본값 : 1
상속 : No
애니메이션 : Yes

# z-index

element들의 수직위치를 정하는 속성. 
즉, 누구를 제윌 앞에 보이게 할거냐를 정한다. 
정수를 부여하며 숫자가 클수록 앞으로 나온다.
(1.3 이런거 하면 못알아먹음)

기본값:0

gitgit
