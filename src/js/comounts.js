Vue.component("radioSelect", {
    //组件里的属性
    props: {
        //限制只能为String,默认值为gender
        name: {
            type: String,
            default: "gender"
        },
        //限制只能为String,默认值为"这是一个单选"
        title: {
            type: String,
            default: "这是一个单选"
        },
        //限制只能为数组,默认值为["这道题是空的"]
        choices: {
            type: Array,
            default: function () {
                return ["这道题是空的"];
            }
        },

    },
    data: function () {
        let _this = this;
        let values = [];
        //将value追加, 循环拿到name为,给每个组件的name和下标组合起来,这样就不会出现相同的name了
        this.choices.forEach((item, index) => {
            values.push(_this.name + (index + ''));
        });
        return {
            //将上面的values付给外面的values
            values: values,
            culValue: ""
        }
    },
    template: `
    <div>
        <p>{{title}}</p>
        <ul>
            <li v-for="(item,index) in choices">
                <input v-model="culValue" :value="item" type="radio" :id="values[index]" :name="name" > 
                <label :for="values[index]">{{item}}</label>
            </li>
        </ul>
    </div>
    `,
    watch: {
        culValue: function (val) {
            this.$emit("pick", val)
        }
    },
})

Vue.component("multiSelect", {
    props: {
        name: {
            type: String,
            default: "cks"
        },
        title: {
            type: String,
            default: "这是一个多选"
        },
        choices: {
            type: Array,
            default: function () {
                return ["这道题是空的"];
            }
        }

    },
    data: function () {
        let _this = this;
        let values = [];
        this.choices.forEach((item, index) => {
            values.push(_this.name + (index + ''));
        });
        return {
            values: values,
            culValue: []
        }
    },
    template: `
    <div>
        <p>{{title}}</p>
        <ul>
            <li v-for="(item,index) in choices">
                <input v-model="culValue" :value="item" type="checkbox" :id="values[index]" :name="name" > 
                <label :for="values[index]">{{item}}</label>
            </li>
        </ul>
    </div>
    `,
    watch: {
        culValue: function (val) {
            this.$emit("pick", val)
        }
    },
})

Vue.component("typetext", {
    props: {
        name: {
            type: String,
            default: "text"
        },
        title: {
            type: String,
            default: "这是一个文本"
        },
    },
    data: function () {
        return {
            text: ""
        }
    },
    watch: {
        text: function (val) {
            this.$emit("pick", val)
        }
    }
    ,
    template: `
    <div>
        <p>{{title}}</p>
        <div>
            <textarea v-model="text"  cols="30" rows="10"></textarea>
        </div>
    </div>
    `
})