/* 
 Equation Editor Plugin for CKEditor v4
 Version 2.1

 This plugin allows equations to be created and edited from within CKEditor.
 For more information goto: http://www.codecogs.com/latex/integration/ckeditor_v4/install.php
 
 Copyright CodeCogs 2006-2013
 Written by Will Bateman.
 
 Special Thanks to:
  - Kyle Jones for a fix to allow multiple editor to load on one page
*/
window.CCounter = 0;
CKEDITOR.dialog.add('bkmathjax', function (editor) {
    var http = ('https:' == document.location.protocol ? 'https://' : 'http://');
    window.CCounter++;
    var preview,
        lang = editor.lang.bkmathjax;

    return {
        title: editor.lang.bkmathjax.title,
        minWidth: 550,
        minHeight: 380,
        resizable: CKEDITOR.DIALOG_RESIZE_NONE,
        contents: [
            {
                id: 'bkmathjaxId',
                label: 'EqnEditor',
                elements: [
                    {
                        type: 'html',
                        html: '<div id="CCtoolbar' + window.CCounter + '"></div>',
                        style: 'margin-top:-9px'
                    },
                    {
                        type: 'html',
                        html: '<label for="CClatex' + window.CCounter + '">编辑公式 (LaTeX):</label>',
                        onLoad: function () {
                            console.log('htmlOnLoad')
                        },
                        commit: function (widget) {
                            console.log('commit widget', widget)
                        }
                    },
                    {
                        id: 'math',
                        type: 'html',
                        html: '<textarea id="CClatex' + window.CCounter + '" rows="5"></textarea>',
                        style: 'border:1px solid #8fb6bd; width:540px; font-size:16px; padding:5px; background-color:#ffc',
                        setup: function (widget) {
                            this.insertMode = true;
                            if (widget.data.math) {
                                EqEditor.getTextArea().setText(CKEDITOR.plugins.mathjax.trim(widget.data.math));
                            } else {
                                EqEditor.getTextArea().clearText();
                            }
                        },
                        commit: function (widget) {
                            const math = EqEditor.getTextArea().getLaTeX();
                            widget.setData('math', '\\(' + math + '\\)')
                        }
                    },
                    {
                        type: 'html',
                        html: '<label for="CCequation' + window.CCounter + '">展示效果:</label>',
                    },
                    {
                        type: 'html',
                        html: '<div style="position:absolute; left:5px; bottom:0; z-index:999"><a href="http://www.codecogs.com" target="_blank"><img src="' + http + 'latex.codecogs.com/images/poweredbycc.gif" alt="Powered by CodeCogs" style="vertical-align:-4px; border:none"/></a> &nbsp; <a href="http://www.codecogs.com/latex/about.php" target="_blank">About</a> | <a href="http://www.codecogs.com/latex/popup.php" target="_blank">Install</a> | <a href="http://www.codecogs.com/pages/forums/forum_view.php?f=28" target="_blank">Forum</a> | <a href="http://www.codecogs.com" target="_blank">CodeCogs</a> &copy; 2007-2014</div><img id="CCequation' + window.CCounter + '" src="' + http + 'www.codecogs.com/images/spacer.gif" />',
                    },
                ]
            }
        ],

        onLoad: function () {
            EqEditor.embed('CCtoolbar' + window.CCounter, '', 'efull');
            EqEditor.add(new EqTextArea('CCequation' + window.CCounter, 'CClatex' + window.CCounter), false);
            if (editor.contextMenu) {
                editor.addMenuGroup(editor.lang.bkmathjax.menu);
                editor.addMenuItem('bkmathjax', {
                    label: editor.lang.bkmathjax.edit,
                    icon: this.path + 'icons/bkmathjax.png',
                    command: 'bkmathjax',
                    group: editor.lang.bkmathjax.menu
                });
            }
        },
    };
});

