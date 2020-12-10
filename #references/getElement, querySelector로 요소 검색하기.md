# getElement*, querySelector*로 요소 검색하기

상대 위치를 이용하지 않으면서 웹 페이지 내에서 원하는 요소 노드에 접근하는 방법

## getElementById

```html
<div id="elem"></div>

<script>
    let elem = document.getElementById('elem');
</script>
```

## querySelectorAll

```html
<ul>
    <li>1-1</li>
    <li>1-2</li>
</ul>
<ul>
    <li>2-1</li>
    <li>2-2</li>
</ul>

<script>
    let elems = document.querySelectorAll('ul > li:last-child');
</script>
```

## querySelector

주어진 CSS 선택자에 대응하는 요소 중 첫 번째 요소를 반환  
elem.querySelectorAll(css)[0]과 동일

**차이점**  
elem.querySelectorAll(css)[0] : 선택자에 해당하는 모든 요소를 검색해 첫 번째 요소만을 반환  
elem.querySelector : 해당하는 요소를 찾으면 검색을 멈춤

