# bk_mathjax
ckeditor4下的公式编辑器，基于eqneditor 与 mathjax的功能组合出的公式编辑器，实现后台返回公式的数据展示与编辑。
## 结合ckeditor中的dialog 与 widget编写的公式插件，具体实现的功能如下：
1. 后台返回公式内容，通过widget展示公式效果，基于mathjax的插件功能实现。
2. 点击公式内容进行公式编辑，基于eqneditor的功能效果实现。
## 解决的问题（根据项目需求出发）
1. 主要为了解决eqneditor生成的公式为图片形式，不符合后台数据存储效果，后台返回的公式内容无法通过eqneditor进行展示编辑。
2. mathjax可以根据公式内容进行展示，但编辑功能太过难用，只能手动输入。
3. 所以基于两者的优缺点进行的功能整合

## 引入方式（同其他插件一样）
1. 下载插件包引入工程中的plugins文件下
2. 引入方式（已react为例,注：默认mathJaxClass:'math-text'）
```
 const string = `<p>如图,四棱锥P-ABCD中,侧面PAD是边长为2的等边三角形且垂直于底<span class="math-tex">\\(ABCD\\)</span></p>`;
 <CKEditor
        name="editor2"
        config={{
          extraPlugins: 'bkmathjax',
          mathJaxClass: 'math-tex',
          mathJaxLib: 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.4/MathJax.js?config=TeX-AMS_HTML'
        }}
        editorUrl='http://127.0.01:9999/ckeditor4/ckeditor.js'
        initData={<p></p>}
        onInstanceReady={(evt) => {
          setEditor(evt.editor);
          evt.editor.setData(string);
        }}
      />
```

