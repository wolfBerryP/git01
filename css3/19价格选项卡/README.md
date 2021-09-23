# notes 

1.hover的妙用

可以在某一元素的上层使用hover伪类，结合父元素的 display:none; 做出选项卡切换显示的效果。
```css
        #box>div:hover>div{
            display: block;
        }
```

2.padding的妙用

padding可以用来扩大元素的面积


3.font的妙用

font中自带line-height属性，可以让盒子中的文字上下居中
```css
        #box>div{
            float: left;
            /*border: 2px solid blue;*/
            color: whitesmoke;
            padding: 8px;   /*padding可以扩大元素*/
            width: 50px;
            height: 9px;
            text-align: center;
            font: bolder 3px/9px 黑体;   /*设置了font  line-height失效 因为font已有这个属性*/

        }
```