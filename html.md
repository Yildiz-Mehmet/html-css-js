            Internal CSS

<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: linen;
}

h1 {
color: maroon;
margin-left: 40px;
}
</style>

</head>
<body>

<h1>This is a heading</h1>
<p>This is a paragraph.</p>

</body>
</html>

            Inline CSS

 <!DOCTYPE html>
<html>
<body>

<h1 style="color:blue;text-align:center;">This is a heading</h1>
<p style="color:red;">This is a paragraph.</p>

</body>
</html>

            External CSS

style.css =>

            outline

outline-style
outline-color
outline-width
outline-offset
outline

p {
margin: 30px;
border: 1px solid black;
outline: 1px solid red;
outline-offset: 15px;
}

            CSS Text Decoration

h1 {
text-decoration-line: overline;
}

h2 {
text-decoration-line: line-through;
}

h3 {
text-decoration-line: underline;
}

p {
text-decoration-line: overline underline;
}

              CSS Text Spacing

text-indent = paragraf başı
letter-spacing = harf arası boşluklar
line-height = satırlar arası boşluk
word-spacing = kelimeler arası boşluk

          TEXT SHADOW

h1 {
text-shadow: 2px 2px;
}

          TABLE

<table>
  <tr>
  <th>First Name</th>
  <th>Last Name</th>
  <th>Points</th>
  </tr>
  <tr>
  <td>Peter</td>
  <td>Griffin</td>
  <td>$100</td>
  </tr>
  <tr>
  <td>Lois</td>
  <td>Griffin</td>
  <td>$150</td>
  </tr>
  <tr>
  <td>Joe</td>
  <td>Swanson</td>
  <td>$300</td>
  </tr>
  <tr>
  <td>Cleveland</td>
  <td>Brown</td>
  <td>$250</td>
  </tr>
</table>
<style>
table {
  border-collapse: collapse;
  width: 100%;
}

th, td {
text-align: left;
padding: 8px;
}

tr:nth-child(even) {background-color: #f2f2f2;}
</style>

          position: sticky;

div.sticky {
position: -webkit-sticky; /_ Safari _/
position: sticky;
top: 0;
background-color: green;
border: 2px solid #4CAF50;
}

          Tam Ortalama

.center p {
margin: 0;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
}

.center {
display: flex;
justify-content: center;
align-items: center;
height: 200px;
border: 3px solid green;
}
