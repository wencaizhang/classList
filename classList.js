if (!Array.prototype.includes) {
  Array.prototype.includes = function (item) {
    return this.indexOf(item) !== -1;
  }
}

/**
 * 
 * @param {String} strClassName 
 * 
 */
function zSplit (strClassName) {
  // 分隔符不能用一个空格的字符串，要考虑字符串包含多个相邻的空格
  // 另外空格有三种位置：开头，中间，结尾
  strClassName = strClassName.replace(/\s+/g, ' ') // 将多个空格替换成一个空格
  strClassName = strClassName.replace(/^\s*/, '')  // 去除开头空格
  strClassName = strClassName.replace(/\s*$/, '')  // 去除结尾空格

  var arr = strClassName.split(' ')
  return arr;
}

function ZTokenList (el) {
  Object.defineProperty(this, 'value', {
    set: function (v) {
      el.className = v
    }
  })
}

ZTokenList.prototype = {
  add: function () {
    var args = arguments;
    var list = [].slice.call(args);
    for (var i = 0; i < list.length; i++) {
      var className = list[i]
      if (![].includes.call(this, className)) {
        [].push.call(this, className);
      }
    }
    this.value = [].join.call(this, ' ');
  },

  remove: function (className) {
    var args = arguments;
    var list = [].slice.call(args);
    for (var i = 0; i < list.length; i++) {
      var className = list[i]
      if ([].includes.call(this, className)) {
        var index = [].indexOf.call(this, className);
        [].splice.call(this, index, 1);
      }
    }
    this.value = [].join.call(this, ' ');
  },

  contains: function (className) {
    return [].includes.call(this, className);
  },

  toggle: function (className) {
    var flag = [].includes.call(this, className);

    if (flag) {
      this.add(className);
      return true;
    } else {
      this.remove(className);
      return false;
    }
  },
}

Object.defineProperty(HTMLElement.prototype, 'zClassList', {
  get: function () {
    if (!this.__tlc__) {
      this.__tlc__ = zSplit(this.className);
      this.__tlc__.__proto__ = new ZTokenList(this);
      this.__tlc__.value = this.className;
    }
    return this.__tlc__;
  },
})