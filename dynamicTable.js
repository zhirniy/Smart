
var DynamicTable = (function(GLOB) {
    var RID = 0;
    return function(tBody) {
        /* Если ф-цию вызвали не как конструктор фиксим этот момент: */
        if (!(this instanceof arguments.callee)) {
            return new arguments.callee.apply(arguments);
        }
        //Делегируем прослушку событий элементу tbody
        tBody.onclick = function(e) {
            var evt = e || GLOB.event
              , trg = evt.target || evt.srcElement;
            if (trg.className && trg.className.indexOf("row_add") !== -1) {
                _addRow(trg.parentNode.parentNode, tBody);
            } else if (trg.className && trg.className.indexOf("row_del") !== -1) {
                tBody.rows.length > 1 && _delRow(trg.parentNode.parentNode, tBody);
            }
        }
        ;
        var _rowTpl = tBody.rows[0].cloneNode(true);
        // Корректируем имена элементов формы
        var _correctNames = function(row) {
            var elements = row.getElementsByTagName("*");
            for (var i = 0; i < elements.length; i += 1) {
                if (elements.item(i).name) {
                    if (elements.item(i).type && elements.item(i).type === "radio" && elements.item(i).className && elements.item(i).className.indexOf("glob") !== -1) {
                        elements.item(i).value = RID;
                    } else {
                        elements.item(i).name = RID + "[" + elements.item(i).name + "]";
                    }
                }
            }
            RID++;
            return row;
        };
        var _addRow = function(before, tBody) {
            var newNode = _correctNames(_rowTpl.cloneNode(true));
            tBody.insertBefore(newNode, before.nextSibling);
            _addNum(tBody);
            setListeners();
        };
        var _delRow = function(row, tBody) {
            update(row, tBody);
            tBody.removeChild(row);
            _addNum(tBody);
            setListeners();
            
        };
        var _addNum = function(tBody) {
            for (var i = 0; i < tBody.rows.length; i++) {
                rows = tBody.rows[i];
                cells = rows.cells[0].innerHTML = i + 1;
            }
        };

        _correctNames(tBody.rows[0]);
        _addNum(tBody);
        setListeners();

    }
    ;
})(this);