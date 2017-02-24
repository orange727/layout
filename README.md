## layout

> layout 是一段关于布局的 样式代码。使用了 flex + padding，实现了常用的多列布局，兼容性好。

### Intro
在实现多列布局时，经常要处理自适应，单元的大小，单元之间的距离。Flex 的出现使一切变得简单，然而正确理解和使用 Flex却不是太容易，而且其兼容性也令人诟病。

因此，我们总结了常见的布局场景，借用了[Lego]()模块化设计的思路，实现了一个 生成布局的 less方法，并且生成了一些 布局类。使用这些类名和方法，就能实现简单的布局，这里有一些实例：[Demo](http://orange727.github.io/docs/index.html)

![布局前](/docs/layout-before.jpg?raw=true)
[^1]
[^1]: (引用自：https://alistapart.com/article/learning-from-lego-a-step-forward-in-modular-web-design)
![布局后](/docs/layout-after.jpg?raw=true)
[^2]
[^2]: (引用自：https://alistapart.com/article/learning-from-lego-a-step-forward-in-modular-web-design)

### Usage

	// html
	<div class="flex-box example">
      <div class="flex-item flex-item-1-3">...</div>
      <div class="flex-item flex-item-1-3">...</div>
      <div class="flex-item flex-item-1-3">...</div>
    </div>
    
    // less
	@import '~layout/lib/layout.less';
	
	.example {
		.layout(10px, 10px, 10px, 10px);
	}
	
### Tips
编译后的样式文件对flex的兼容性做了处理。但是如果你直接引用了源文件。需要自行配置你的编辑工具，可以参考`./postcss.config.js`。

### Reference
[Learning from Lego: A Step Forward in Modular Web Design](https://alistapart.com/article/learning-from-lego-a-step-forward-in-modular-web-design)
