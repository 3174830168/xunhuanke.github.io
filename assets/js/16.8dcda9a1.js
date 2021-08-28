(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{535:function(t,a,s){"use strict";s.r(a);var i=s(3),n=Object(i.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"引导语"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#引导语"}},[t._v("#")]),t._v(" 引导语")]),t._v(" "),s("p",[t._v("Java 中的关键字很多，大约有 50+，在命名上我们不能和这些关键字冲突的，编译会报错，每个关键字都代表着不同场景下的不同含义，接下来我们挑选 6 个比较重要的关键字，深入学习一下。")]),t._v(" "),s("h2",{attrs:{id:"_1-static"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-static"}},[t._v("#")]),t._v(" 1 static")]),t._v(" "),s("p",[t._v("意思是静态的、全局的，一旦被修饰，说明被修饰的东西在一定范围内是共享的，谁都可以访问，这时候需要注意并发读写的问题。")]),t._v(" "),s("h3",{attrs:{id:"_1-1-修饰的对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-修饰的对象"}},[t._v("#")]),t._v(" 1.1 修饰的对象")]),t._v(" "),s("p",[t._v("static 只能修饰类变量、方法和方法块。\n"),s("strong",[t._v("当 static 修饰类变量时")]),t._v("，如果该变量是 public 的话，表示该变量任何类都可以直接访问，而且无需初始化类，直接使用 "),s("strong",[t._v("类名.static 变量")]),t._v(" 这种形式访问即可。\n这时候我们非常需要注意的一点就是线程安全的问题了，因为当多个线程同时对共享变量进行读写时，很有可能会出现并发问题，如我们定义了："),s("code",[t._v("public static List<String> list = new ArrayList();")]),t._v("这样的共享变量。这个 list 如果同时被多个线程访问的话，就有线程安全的问题，这时候一般有两个解决办法：")]),t._v(" "),s("ol",[s("li",[t._v("把线程不安全的 ArrayList 换成 线程安全的 CopyOnWriteArrayList；")]),t._v(" "),s("li",[t._v("每次访问时，手动加锁。")])]),t._v(" "),s("p",[t._v("所以在使用 static 修饰类变量时，如何保证线程安全是我们常常需要考虑的。\n"),s("strong",[t._v("当 static 修饰方法时")]),t._v("，代表该方法和当前类是无关的，任意类都可以直接访问（如果权限是 public 的话）。\n有一点需要注意的是，该方法内部只能调用同样被 static 修饰的方法，不能调用普通方法，我们常用的 util 类里面的各种方法，我们比较喜欢用 static 修饰方法，好处就是调用特别方便。\nstatic 方法内部的变量在执行时是没有线程安全问题的。方法执行时，数据运行在栈里面，栈的数据每个线程都是隔离开的，所以不会有线程安全的问题，所以 util 类的各个 static 方法，我们是可以放心使用的。\n"),s("strong",[t._v("当 static 修饰方法块时")]),t._v("，我们叫做静态块，静态块常常用于在类启动之前，初始化一些值，比如：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('public static List<String> list = new ArrayList();\n// 进行一些初始化的工作\nstatic {\n    list.add("1");\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("p",[t._v("这段代码演示了静态块做一些初始化的工作，但需要注意的是，静态块只能调用同样被 static 修饰的变量，并且 static 的变量需要写在静态块的前面，不然编译也会报错。")]),t._v(" "),s("h3",{attrs:{id:"_1-2-初始化时机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-初始化时机"}},[t._v("#")]),t._v(" 1.2 初始化时机")]),t._v(" "),s("p",[t._v("对于被 static 修饰的类变量、方法块和静态方法的初始化时机，我们写了一个测试 demo，如下图：\n"),s("img",{attrs:{src:"https://i.loli.net/2020/11/24/mbxu15OacnLvKNP.png",alt:""}}),t._v("打印出来的结果是：\n父类静态变量初始化\n父类静态块初始化\n子类静态变量初始化\n子类静态块初始化\nmain 方法执行\n父类构造器初始化\n子类构造器初始化\n从结果中，我们可以看出两点：")]),t._v(" "),s("ol",[s("li",[t._v("父类的静态变量和静态块比子类优先初始化；")]),t._v(" "),s("li",[t._v("静态变量和静态块比类构造器优先初始化。")])]),t._v(" "),s("p",[t._v("被 static 修饰的方法，在类初始化的时候并不会初始化，只有当自己被调用时，才会被执行。")]),t._v(" "),s("h2",{attrs:{id:"_2-final"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-final"}},[t._v("#")]),t._v(" 2 final")]),t._v(" "),s("p",[t._v("final 的意思是不变的，一般来说用于以下三种场景：")]),t._v(" "),s("ol",[s("li",[t._v("被 final 修饰的类，表明该类是无法继承的；")]),t._v(" "),s("li",[t._v("被 final 修饰的方法，表明该方法是无法覆写的；")]),t._v(" "),s("li",[t._v("被 final 修饰的变量，说明该变量在声明的时候，就必须初始化完成，而且以后也不能修改其内存地址。")])]),t._v(" "),s("p",[t._v("第三点注意下，我们说的是无法修改其内存地址，并没有说无法修改其值。因为对于 List、Map 这些集合类来说，被 final 修饰后，是可以修改其内部值的，但却无法修改其初始化时的内存地址。\n例子我们就不举了，1-1 小节 String 的不变性就是一个很好的例子。")]),t._v(" "),s("h2",{attrs:{id:"_3-try、catch、finally"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-try、catch、finally"}},[t._v("#")]),t._v(" 3 try、catch、finally")]),t._v(" "),s("p",[t._v("这三个关键字常用于我们捕捉异常的一整套流程，try 用来确定代码执行的范围，catch 捕捉可能会发生的异常，finally 用来执行一定要执行的代码块，除了这些，我们还需要清楚，每个地方如果发生异常会怎么办，我们举一个例子来演示一下：")]),t._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('public void testCatchFinally() {\n  try {\n    log.info("try is run");\n    if (true) {\n      throw new RuntimeException("try exception");\n    }\n  } catch (Exception e) {\n    log.info("catch is run");\n    if (true) {\n      throw new RuntimeException("catch exception");\n    }\n  } finally {\n    log.info("finally is run");\n  }\n}\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br")])]),s("p",[t._v("这个代码演示了在 try、catch 中都遇到了异常，代码的执行顺序为：try -> catch -> finally，输出的结果如下：\n"),s("img",{attrs:{src:"https://i.loli.net/2020/11/24/BGSwznFl4dQyX12.png",alt:""}}),t._v("可以看到两点：")]),t._v(" "),s("ol",[s("li",[t._v("finally 先执行后，再抛出 catch 的异常；")]),t._v(" "),s("li",[t._v("最终捕获的异常是 catch 的异常，try 抛出来的异常已经被 catch 吃掉了，所以当我们遇见 catch 也有可能会抛出异常时，我们可以先打印出 try 的异常，这样 try 的异常在日志中就会有所体现。")])]),t._v(" "),s("h2",{attrs:{id:"_4-volatile"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-volatile"}},[t._v("#")]),t._v(" 4 volatile")]),t._v(" "),s("p",[t._v("volatile 的意思是可见的，常用来修饰某个共享变量，意思是当共享变量的值被修改后，会及时通知到其它线程上，其它线程就能知道当前共享变量的值已经被修改了。\n我们再说原理之前，先说下基础知识。就是在多核 CPU 下，为了提高效率，线程在拿值时，是直接和 CPU 缓存打交道的，而不是内存。主要是因为 CPU 缓存执行速度更快，比如线程要拿值 C，会直接从 CPU 缓存中拿， CPU 缓存中没有，就会从内存中拿，所以线程读的操作永远都是拿 CPU 缓存的值。\n这时候会产生一个问题，CPU 缓存中的值和内存中的值可能并不是时刻都同步，导致线程计算的值可能不是最新的，共享变量的值有可能已经被其它线程所修改了，但此时修改是机器内存的值，CPU 缓存的值还是老的，导致计算会出现问题。\n这时候有个机制，就是内存会主动通知 CPU 缓存。当前共享变量的值已经失效了，你需要重新来拉取一份，CPU 缓存就会重新从内存中拿取一份最新的值。\nvolatile 关键字就会触发这种机制，加了 volatile 关键字的变量，就会被识别成共享变量，内存中值被修改后，会通知到各个 CPU 缓存，使 CPU 缓存中的值也对应被修改，从而保证线程从 CPU 缓存中拿取出来的值是最新的。\n我们画了一个图来说明一下：\n"),s("img",{attrs:{src:"https://i.loli.net/2020/11/24/4gGkeP9fNwT8toa.png",alt:""}}),t._v("从图中我们可以看到，线程 1 和线程 2 一开始都读取了 C 值，CPU 1 和 CPU 2 缓存中也都有了 C 值，然后线程 1 把 C 值修改了，这时候内存的值和 CPU 2 缓存中的 C 值就不等了，内存这时发现 C 值被 volatile 关键字修饰，发现其是共享变量，就会使 CPU 2 缓存中的 C 值状态置为无效，CPU 2 会从内存中重新拉取最新的值，这时候线程 2 再来读取 C 值时，读取的已经是内存中最新的值了。")]),t._v(" "),s("h2",{attrs:{id:"_5-transient"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-transient"}},[t._v("#")]),t._v(" 5 transient")]),t._v(" "),s("p",[t._v("transient 关键字我们常用来修饰类变量，意思是当前变量是无需进行序列化的。在序列化时，就会忽略该变量，这些在序列化工具底层，就已经对 transient 进行了支持。")]),t._v(" "),s("h2",{attrs:{id:"_6-default"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_6-default"}},[t._v("#")]),t._v(" 6 default")]),t._v(" "),s("p",[t._v("default 关键字一般会用在接口的方法上，意思是对于该接口，子类是无需强制实现的，但自己必须有默认实现，我们举个例子如下：\n"),s("img",{attrs:{src:"https://i.loli.net/2020/11/24/g6fFebWAX1O2dpT.png",alt:""}}),t._v("default 关键字被很多源码使用，我们后面会说。")]),t._v(" "),s("h2",{attrs:{id:"_7-面试题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-面试题"}},[t._v("#")]),t._v(" 7 面试题")]),t._v(" "),s("h3",{attrs:{id:"_7-1-如何证明-static-静态变量和类无关"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-如何证明-static-静态变量和类无关"}},[t._v("#")]),t._v(" 7.1 如何证明 static 静态变量和类无关？")]),t._v(" "),s("p",[t._v("答：从三个方面就可以看出静态变量和类无关。")]),t._v(" "),s("ol",[s("li",[t._v("我们不需要初始化类就可直接使用静态变量；")]),t._v(" "),s("li",[t._v("我们在类中写个 main 方法运行，即便不写初始化类的代码，静态变量都会自动初始化；")]),t._v(" "),s("li",[t._v("静态变量只会初始化一次，初始化完成之后，不管我再 new 多少个类出来，静态变量都不会再初始化了。")])]),t._v(" "),s("p",[t._v("不仅仅是静态变量，静态方法块也和类无关。")]),t._v(" "),s("h3",{attrs:{id:"_7-2-常常看见变量和方法被-static-和-final-两个关键字修饰-为什么这么做"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-常常看见变量和方法被-static-和-final-两个关键字修饰-为什么这么做"}},[t._v("#")]),t._v(" 7.2 常常看见变量和方法被 static 和 final 两个关键字修饰，为什么这么做？")]),t._v(" "),s("p",[t._v("答：这么做有两个目的：")]),t._v(" "),s("ol",[s("li",[t._v("变量和方法于类无关，可以直接使用，使用比较方便；")]),t._v(" "),s("li",[t._v("强调变量内存地址不可变，方法不可继承覆写，强调了方法内部的稳定性。")])]),t._v(" "),s("h3",{attrs:{id:"_7-3-catch-中发生了未知异常-finally-还会执行么"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-catch-中发生了未知异常-finally-还会执行么"}},[t._v("#")]),t._v(" 7.3 catch 中发生了未知异常，finally 还会执行么？")]),t._v(" "),s("p",[t._v("答：会的，catch 发生了异常，finally 还会执行的，并且是 finally 执行完成之后，才会抛出 catch 中的异常。\n不过 catch 会吃掉 try 中抛出的异常，为了避免这种情况，在一些可以预见 catch 中会发生异常的地方，先把 try 抛出的异常打印出来，这样从日志中就可以看到完整的异常了。")]),t._v(" "),s("h3",{attrs:{id:"_7-4-volatile-关键字的作用和原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-volatile-关键字的作用和原理"}},[t._v("#")]),t._v(" 7.4 volatile 关键字的作用和原理")]),t._v(" "),s("p",[t._v("答：这个上文说的比较清楚，可以参考上文。")]),t._v(" "),s("h2",{attrs:{id:"总结"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结")]),t._v(" "),s("p",[t._v("Java 的关键字属于比较基础的内容，我们需要清晰明确其含义，才能在后续源码阅读和工作中碰到这些关键字时了然于心，才能明白为什么会在这里使用这样的关键字。比如 String 源码是如何使用 final 关键字达到起不变性的，比如 Java 8 集合中 Map 是如何利用 default 关键字新增各种方法的，这些我们在后续内容都会提到。")])])}),[],!1,null,null,null);a.default=n.exports}}]);