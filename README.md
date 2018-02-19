# Markup Languages Basic (HTML/CSS) #

1. [HTML](#html)
    1. [DTD <sub>Document Type Definition</sub>](#dtd)
    2. [Attribute](#attribute)
    3. [Encoding](#encoding)
    4. [Metadata](#metadata)
    5. [Title](#title)
    6. [Elements](#elements)
2. [CSS](#css)
    1. [Box Model](#boxModel)
    2. [Property](#property)
    3. [Media Query](#mediaQuery)
    4. [Normalize (reset.css)](#normalize)    
3. [Example](#example)
    * [레이아웃](#layout)
    * [가로,세로 중앙정렬](#align)
    * [말줄임](#ellipsis)

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


<h3 id="attribute">Attribute</h3>
<h3 id="encoding">Encoding</h3>
<h3 id="metadata">Metadata</h3>
<h3 id="title">Title</h3>
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
* 모든 요소에 적용가능한 `margin` `width` `height` `float` 스티일 시트 속성들이 무시된다. 단, `img` `object` 는 제외.
* `<img>` `<input>` `<select>` `<textarea>` `<br>` 를 제외한 인라인 요소는 `width` 와 `height` 는 적용될 수 없다.
* `<img>` 를 제외한 모든 인라인 요소들은 기본적으로 `margin` 속성을 가지지 않고 있고, 때문에 `margin` 값 (`margin-top`, `margin-bottom`)도 가질 수 없다.
* `margin` 값은 인라인 요소에 적용되지 않으나, `padding` 값은 적용이 된다.
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
<h3 id="property">Property</h3>
<h3 id="mediaQuery">Media Query</h3>
<h3 id="normalize">Normalize (reset.css)</h3>

<h2 id="example">Example</h2>
<h3 id="layout">레이아웃</h3>
<h3 id="aling">가로,세로 중앙정렬</h3>
<h3 id="ellipsis">말줄임</h3>