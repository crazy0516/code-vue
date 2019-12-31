+ 1.组件通信
    + 1)props $emit         解决父子组件, 层数较少的情况
    + 2)$attrs $listeners   解决组件嵌套多层关系
    + 3)中央事件总线 $bus    new Vue()

    + $on()   $emit 挂载的每一个实例化对象 解决兄弟组件传值
    
    + 4)vuex 的流程图

+ 2.生命周期图示***

+ 3.路由的使用
    + 1)引包(两个全局组件 router-link(相当于a)  to(相当于hef)  router-view(匹配路由组件的出口))
    + 2)创建实例化 VueRouter 对象
    + 3)匹配路由规则
    + 4)挂载 new Vue() 实例化对象中

    + 给 vue 实例化对象挂载了两个对象: this.$router(VueRouter对象) this.$route(配置路由信息的对象)

    + 命名路由
        + 绑定自定义的属性: :to="{name:'路由的名字'}"
    
    + 路由的参数
        + path:'/user/:id'
        + :to="{name:'user', params:{id:1}}"

        + path:'/user'
        + :to="{name:'user', query:{userId:1}}"

    + 嵌套路由(应用子的路由是不同的页面结构)

        + /home/about ==> /home/addr
        + 一个 router-view 中嵌套另外一个 router-view
