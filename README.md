# Markup Languages Basic (HTML/CSS) #

1. [HTML](#html)
    1. [DTD <sub>Document Type Definition</sub>](#dtd)
    2. [Metadata](#metadata)
    3. [Elements](#elements)
2. [CSS](#css)
    1. [Box Model](#boxModel)

<h2 id="html">HTML</h2>
<h3 id="dtd">DTD <sub>Document Type Definition</sub></h3>
<h4><a href="https://ko.wikipedia.org/wiki/%EB%AC%B8%EC%84%9C_%ED%98%95%EC%8B%9D_%EC%84%A0%EC%96%B8">DTD란?</a></h4>

"문서 형식 선언"(Document Type Declaration) 또는 **DOCTYPE**이란 어떤 SGML이나 XML 기반 문서 내에 **그 문서가 특정 문서 형식정의(DTD)를 따름을 지정**하는 것이다.

본래 DTD에 기반한 SGML도구를 이용해 **문서 해석 가능성과 유효성 검사를 하기위한 목적**으로 문서 내에 삽입되었다.

* 웹 브라우저에서 어떤 문서형 정의를 적용할 것인가를 선언하는 것이다.
* 마크업 문서의 요소와 속성 등을 어떤 규칙에 따라 기술해야 하는 지에 대한 기준이다.
* 웹 브라우저가 올바른 화면표시(Rendering)를 하기 위해 반드시 필요하다.
* 웹 브라우저는 사용할 랜더링 모드가 무엇인지를 결정하기 위해 문서형을 사용한다.
* DTD를 사용하면 브라우저들의 렌더링을 표준에 맞춰 랜더링을 하게끔 하기 때문에 다양한 환경에서 상호 운용성을 보장할 수 있다.
* 마크업 유효성 검사기는 문서를 검사하기 위한 규칙이 무엇인지를 결정하기 위해 문서형을 사용한다.
* 문서의 최상단에 선언하며, 문서형 선언전에 어떤 요소도 올 수 없다. (공백 포함)

<h4>DTD 구조</h4>

```html
    <!DOCTYPE html PUBLIC "FPI" "URI">
    <!DOCTYPE html PUBLIC "FPI" "URI" [(추가 DTD 선언)]>

    <!DOCTYPE html SYSTEM "URI">
    <!DOCTYPE html SYSTEM "URI" [(추가 DTD 선언)]>
```
<dl>
    <dt>
        !DOCTYPE
    </dt>
    <dd>
        현재 문서는
    </dd>
    <dt>
        html
    </dt>
    <dd>
        최상위 엘리먼트는 html이므로 html로 작성
    </dd>
    <dt>
        PUBLIC
    </dt>
    <dd>
        국제적 공용문서
    </dd>
    <dd>
        공개 식별자
    </dd>
    <dd>
        DTD가 공중에게 공개되어 있으며 FPI를 부여받았다는 뜻이다. W3C 표준은 모두 <a href="https://en.wikipedia.org/wiki/Formal_Public_Identifier">FPI</a>를 갖는다. <a href="https://ko.wikipedia.org/wiki/%ED%86%B5%ED%95%A9_%EC%9E%90%EC%9B%90_%EC%8B%9D%EB%B3%84%EC%9E%90">URI</a>를 생략할 경우, 페이지는 쿼크 모드로 렌더링 된다.
    </dd>
    <dt>
        SYSTEM
    </dt>
    <dd>
        내부적, 제한적 문서
    </dd>
    <dd>
        시스템 식별자
    </dd>
    <dd>
        PUBLIC과 달리 FPI가 없을 때 사용한다. 이때 추가 선언은 필요에 따라 사용할 수도, 사용하지 않을 수도 있다.
    </dd>
</dl>
<h4>DTD 종류</h4>
<dl>
    <dt>Strict</dt>
    <dd>선언된 (x)HTML 버전의 문법과 구조를 정확하게 사용한다. 지원하지 않는 엘리먼트를 사용해서는 안된다.</dd>
    <dt>Transitional</dt>
    <dd>과도기적으로 사용하기 위한 선언으로, STRICT보다 유연하다. 선언된 버전 이외의 문법과 구조를 허용한다.</dd>
    <dt>Frameset</dt>
    <dd>Transitional 속성과 더불어, frameset(iframe, frame)을 지원한다.<br>※ frameset은 문서의 구조에 관한 엘리먼트이기 때문에, transitional에서 frameset을 사용해도 화면에 표시가 일어난다. 따라서, 사실상 frameset은 transitional과 동일하게 취급된다.</dd>
</dl>

<h5>HTML5</h5>
HTML5은 구조상 DTD로 충분히 정의될 수 없으나 표준 문서를 명시할 필요성이 있으므로 아래와 같은 문서 형식 선언을 갖는다.

```html
    <!DOCTYPE html>
```

<h5>XHTML 1.0</h5>

* **Strict**
    ```html
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    ```
* **Transitional**
    ```html
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
    ```
* **Frameset**<br>
    ```html
        <!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Frameset//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-frameset.dtd">
        
    ```
<h5>HTML 4.01</h5>

* **Strict**<br>
표현 효과 위주의 마크업 태크들(`<b>`, `<i>` 등)을 금지한다.
    ```html
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    ```
* **Transitional**<br>
Strict에서 폐기된 몇 가지 태그를 허용한다.
    ```html
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    ```
* **Frameset**<br>
프레임 구조를 지원한다.
    ```html
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Frameset//EN" "http://www.w3.org/TR/html4/frameset.dtd">
        
    ```


<h4><a href="https://ko.wikipedia.org/wiki/%EC%BF%BC%ED%81%AC_%EB%AA%A8%EB%93%9C">Quirks Mode</a></h4>

**쿼크 모드** (Quirks mode, 쿽스 모드)는 오래된 웹 브라우저를 위하여 디자인된 웹 페이지의 하위 호환성을 유지하기 위해 W3C나 IETF의 표준을 엄격히 준수하는 **표준 모드**(Standards Mode)를 대신하여 쓰이는 웹 브라우저 기술을 가리킨다. **같은 코드라도 웹 브라우저마다 서로 다르게 해석하므로 전혀 다른 결과물을 보여주게 된다.**

<h5>쿼크모드의 발생 원인</h5>

* DOCTYPE 선언이 존재하지 않거나 잘못 적혀 있을 경우, 웹 브라우저는 문서를 쿼크 모드로 해석한다.
* DOCTYPE 선언 내의 URL이 생략된 경우, 웹 브라우저는 문서를 쿼크 모드로 해석한다. 예를 들어,
    ``` html
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
    ```
    이 선언을
    ``` html
        <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    ```
    이렇게 적으면 쿼크 모드가 발생한다.
* 인터넷 익스프로러의 경우, DOCTYPE 선언 윗쪽에 주석이나 다른 문자가 들어갔을때 문서를 쿼크모드로 해석한다.


<h3 id="metadata">Metadata</h3>

* 웹 제작 정보 및 문서 내용의 정보 제공
* 검색 엔진에게 웹 페이지의 정보 제공

metadata: meta 요소는 페이지 정보, 키워드 같이 다른 메타 관련 요소들(`<base>`, `<link>`, `<script>`, `<style>`, `<title>`)로 표현할 수 없는 메타정보를 기술하는데 사용된다. 크게 두가지 용도로 사용될 수 있는데, HTML 문서에 추가적인 메타정보를 기술하기 위해 사용되기도 하며, THML 응답 헤더를 에뮬레이트하기 위해 사용되기도 한다.

<h4>마크업 규칙</h4>

* `name` 속성, `http-equiv` 속성, `charset` 속성 중 하나를 반드시 써야 합니다.
* `name` 속성이나 `http-equiv`속성을 썼다면 `content` 속성도 써야 합니다. 아니라면, 반드시 생략해야 합니다.
* `http-equiv`속성을 썼다면 meta 요소는 반드시 head 요소 내에 써야합니다. `http-equiv`속성이 없는 meta 요소는 head 요소 또는 head 요소의 자식 요소인 noscirpt 요소 내부에 써야 합니다.

기본 문법은 다음과 같습니다.

``` html
    <head>
        <meta charset="utf-8">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="author" content="honggil-dong">
    </head>
```

<h4>속성</h4>
<dl>
    <dt>
        <a href="http://html5ref.clearboth.org/doku.php?id=html5:attribute:name_meta">name</a>
    </dt>
    <dd>
        문서의 메타데이터를 설정합니다.
    </dd>
    <dt>
        <a href="http://html5ref.clearboth.org/doku.php?id=html5:attribute:http-equiv_meta">http-equiv</a>
    </dt>
    <dd>
        전처리구문 지시자입니다.
    </dd>
    <dt>
        <a href="http://html5ref.clearboth.org/doku.php?id=html5:attribute:content_meta">content</a>
    </dt>
    <dd>
        name 속성이나 http-equiv 속성을 썼을 때, 이 속성의 의미는 때에 따라 다릅니다.
    </dd>
    <dt>
        <a href="http://html5ref.clearboth.org/doku.php?id=html5:attribute:charset_meta">charset</a>
    </dt>
    <dd>
        문서에서 사용하는 문자 인코딩 방식을 명시합니다. XML은 반드시 UTF-8을 써야 합니다.
    </dd>
</dl>

<h5>name 속성 - viewport</h5>

초기 viewport 크기 설정에 관한 힌트를 제공합니다. 이 속성은 몇 개의 모바일 디바이스에 의해서만 사용됩니다.

<a href="https://developer.mozilla.org/ko/docs/Mozilla/Mobile/Viewport_meta_tag">viewport meta 태그를 이용해 모바일 브라우저상에서 레이아웃 조종하는 법</a>
        
    
<em> `<meta name="viewport">` 에 들어가는 content 속성 값들</em><br>
        
|값   |가능한 값들   |설명   |
|---|---|---|
|`width`   |양수 값 또는 device-width 리터럴 값   |viewport의 width를 픽셀 값으로 정의한다.   |
|`height`   |양수 값 또는 device-height 리터럴 값   |viewport의 height를 픽셀 값으로 정의한다.   |
|`intial-scale`   |0.0 ~ 10.0 중의 한 값   |device width (portrait 모드에서의 `device-width`와 landscape 모드에서 `device-height`)와 viewport 사이즈 간의 비율을 정의한다.   |
|`maximum-scale`   |0.0 ~ 10.0 중의 한 값   |zoom의 최대치를 정의한다. 이 값은 `minimum-scale`보다 크거나 같아야 하고, bebabior가 정의되지 않아야 한다.   |
|`minimum-scale`   |0.0 ~ 10.0 중의 한 값   |zoom의 최소치를 정의한다. 이 값은 `minimum-scale`보다 크거나 같아야 하고, bebabior가 정의되지 않아야 한다.   |
|`user-scalable`   |boolean 값 (yes or no)   |no로 설정되면, 사용자는 웹 페이지에서 줌으로 사용할 수 없다. Default 값은 yes   |

<em>기본 문법</em><br>

``` html
    <meta name="viewport" content="width=device-width, user-scalable=no">
```
   
<h3 id="elements">Elements</h3>
<h4><a href="https://developer.mozilla.org/ko/docs/HTML/Block-level_elements">블록 요소</a></h4>

HTML 요소들 중에 한 카테고리 이며, "인라인" 요소와 대조적입니다. 블럭-레벨 요소는 `<body>` 요소 안에서만 표현되도록 합니다. 중요한 특성은 이러한 "블럭-레벨" 요소들은 해당 요소의 이전 요소와 이후 요소를 개행(줄바꿈)하는 특징을 가지고 있습니다. (독자적인 영역을 갖는 컨텐츠로 만듭니다)

* 기본적으로, 블록 레벨 요소는 새로운 라인에서 시작합니다.
* 인라인 요소와 텍스트 혹은 또 다른 블록 요소를 포함 할수 있다.
* 별도의 CSS 컨트롤이 없다면 해당 문서 크기만큼의 너비를 가지며, 문서의 위에서부터 차곡차곡 쌓이는 형태로 표시된다.

<h4><a href="https://developer.mozilla.org/ko/docs/Web/HTML/Inline_elements">인라인 요소</a></h4>

`<body>` 태그 안에서만 사용됩니다. 
일반적으로 데이터와 다른 인라인 엘리먼트만을 포함합니다.
기본적으로 새로운 줄로 시작되지 않습니다.

* 다른 인라인 요소와 같은 줄에 표시된다.
* 별도의 css컨트롤이 없다면 해당 문서의 좌측부터 우측으로 나열되는 형태로 표시된다.
* 또 다른 인라인 요소와 텍스트를 포함 할수 있으나, 블록요소를 포함할 수는 없다.
* 모든 요소에 적용가능한 `margin`(`margin-top`, `margin-bottom`) `width` `height` `float` 스티일 시트 속성들이 무시된다. 단, `img` `object` 는 제외.
* `<img>` `<input>` `<select>` `<textarea>` `<br>` 를 제외한 인라인 요소는 `width` 와 `height` 는 적용될 수 없다.
* `<img>` 를 제외한 모든 인라인 요소들은 기본적으로 `margin` 속성을 가지지 않고 있고, 때문에 `margin` 값 (`margin-top`, `margin-bottom`)도 가질 수 없다.
* `margin` 값(`margin-top`, `margin-bottom`)은 인라인 요소에 적용되지 않으나, `padding` 값은 적용이 된다.
* 인라인 요소 내의 텍스트는 필요데 따라(혹은 허가 하에) 가벼운 줄바꿈을 동반한다.

<h4>표현용, 비표준 요소</h4>

HTML 명세는 "표현용 presentatinal"이라고 광범위하게 설명되는 몇몇 요소를 포함 하고 있다. 이 요소들이 어떤 의미를 띄는지가 아니라 오직 어떻게 보일지만을 정의하고 있기 때문이다.

이들 중 몇몇은 명세에 향후 없질 것(deprecated)이라고 표시돼 있다. 이것은 같은 결과를 내는 새로운 방법으로 대체될 것이라는 걸 의미한다.

표현용, 비표준 요소들은 앞으로 웹페이지에서 결코 사용돼선 안 된다.

* `font face="..."` `size="..."`
* `<b>`
* `<s>` `<strike>`
* `<u>`
* `<tt>`
* `<big>` `<small>`
* `<font>`
* `<center>`
* `<applet>`
* `<basefont>`
* `<dir>`
* `<isindex>`
* `<xmp>`

<h4>빈 칸</h4>
HTML을 작설할 때, 소스 문서는 "공백(wite space)" 이라고 하는 것을 포함하게 될 것이다. 이건 글자 사이를 구분하기 위한 문자다. 실제 공백 문자는, 대부분은 키보드의 스페이스바를 눌러서 입력할 것이다. 하지만 문서에는 탭 문자나 구분된 두개의 줄사이에 들어가는 (캐리지 리턴이나 뉴 라인으로 불리는)다른 것도 있다.

HTML에서, 이 글자들이 일으키는 다양한 효과들은, 대게 한개의 공백문자로 처리된다.
```html
    <h1>Markup  Language 
        HTML</h1>
```
위와 같은 예를 웹브라우저는 다음과 같이 해석한다.

```html
    <h1>Markup Language HTML</h1>
```
이런 식으로 해석되지 않는 유일한 경우는 `<pre>` 요소 안에 있을 때이다.

이 것은 처음 HTML 문서를 작성하려고 하는 사람에게 혼란을 낳는다. 들여쓰기를 좀 더 하려고 하거나, 문장 사이에 공백을 더 넣으려고 하거나, 문장 사이에 공백을 더 넣으려고 할 때 말이다. 문서의 외양을 바꾸는 것은 HTML로 하는 게 아니다. 그건 스타일 시트를 통해서 하는 것이다.
<h2 id="css">CSS</h2>
<h3 id="boxModel">Box Model</h3>

문서에서, 각 요소(element)는 사각형 박스로 나타냅니다. 이 박스의 크기, 특성(색, 배경, 테두리 모양 등) 및 위치 결정이 렌더링 엔진의 목적입니다.

CSS에서, 이 사각형 박스 각각은 표준 박스 모델을 사용하여 기술됩니다. 이 모델은 요소에 의해 차지되는 공간의 내용(content)을 설명합니다. 각 박스는 네 경계(edge)가 있습니다. (`margin` 경계, `border` 경계, `padding` 경계, `content` 경계)

<dl>
    <dt>영역 크기 계산식</dt>
    <dd>margin + border + padding + (width || height)</dd>
</dl>

<img src="images/img_boxmodel.png" alt="CSS Box Model" />

<h4>요소</h4>
<dl>
    <dt>content 영역</dt>
    <dd>
        요소의 실제 내용을 포함하는 영역입니다. 거기에는 대개 배경, 색, 또는 이미지(그 순서로, 배경색을 감추는 불투명한 이미지)가 있고 content 경계 안쪽에 놓입니다. 따라서 그 크기(dimensions)는 content 너비(또는 content 박스 너비) 및 content 높이(또는 content 박스 높이) 입니다.<br><br>
        CSS <code>box-sizing</code> 속성이 기본(default)으로 설정된 경우, CSS 속성 <code>width</code>, <code>min-width</code>, <code>max-width</code>, <code>height</code>, <code>min-height</code> 및 <code>max-height</code>가 content 크기를 제어합니다.
    </dd>
    <dt>padding 영역</dt>
    <dd>
        패딩을 둘러싼 보더까지 미칩니다. content 영역이 배경, 색 또는 그 위에 설정된 이미지가 있을 때, 이는 패딩까지 이어집니다. 이것이 패딩을 content의 연장으로 생각할 수 있는 이유 입니다. 패딩은 padding 경계 안쪽에 놓이고 그 크기는 padding 박스 너비 및 padding 박스 높이입니다.<br><br>
        패딩과 content 경계 사이의 공간은 <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, <code>padding-left</code> 및 단축(shorthand) CSS 속성 <code>padding</code>으로 제어될 수 있습니다.
    </dd>
    <dt>border 영역</dt>
    <dd>
        padding 영역을 보더를 포함하는 영역까지 확장합니다. 이는 border 경계 안쪽 영역이고 그 크기는 <code>border-box</code> 너비 및 <code>border-box</code> 높이입니다. 이 영역은 <code>border-width</code> 속성 또는 단축 <code>border</code>에 의해 정의된 보더의 크기에 의존합니다.
    </dd>
    <dt>margin 영역</dt>
    <dd>
        border 영역을 요소를 그 이웃과 구별하기 위해 쓰이는 빈 영역으로 확장합니다. 이는 margin 경계 안쪽 영역이고 그 크기는 margin 박스 너비 및 margin 박스 높이 입니다.<br><br>
        margin 영역의 크기는 <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, <code>margin-left</code> 및 단축 CSS 속성 margin으로 제어됩니다.
    </dd>
    <dd>
        margin collapsing이 일어날 때, margin 영역은 마진이 박스 간에 공유되기 때문에 분명히 정의 되지 않습니다.
    </dd>
    <dd>
        비대체(non-replaced) 인라인 요소의 경우 차지하는 공간의 양(줄높이(행간)에 기여)은 비록 보더 및 패딩이 content 주위에 눈에 <code>line-height</code> 속성에 의해 결정됨을 주의하세요
    </dd>
</dl>

<h4><a href="https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing">margin collapsing (margin 결합 현상)</a></h4>

블록의 top 및 bottom 마진은 때로는 (결합되는 마진중 크기가) 가장 큰 한 마진으로 결합(combine, 상쇄(collased))됩니다.

음수 마진이 포함되는 경우는, 상쇄된 마진의 크기는 제일 큰 양수 마진과 제일 작은(절대값이 가장 큰) 음수 마진의 합입니다.

부동(floating) 요소 및 절대 위치지정된(absolutely positioned) 요소의 마진은 상쇄하지 않습니다.
