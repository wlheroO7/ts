// //强类型语言：不允许改变变量的数据类型，除非进行强制类型转换。
// //弱类型语言：变量可以被赋予不同的数据类型。


// //静态类型语言：在编译阶段确定所有变量的类型。
// //动态类型语言：在执行阶段确定所有变量的类型。

// //原始类型
// let boo:boolean = true;
// let num:number = 1;
// let str:string = "test";

// //数组
// let arr:number[] = [1,2,3];
// let arr1:Array<string | number> = ["1","2","3",4]; //联合类型

// //元组
// let tuple:[number,string]=[1,"2"];
// //tuple.push(3); 
// //console.log(tuple[2]);

// //函数
// let add=(x:number,y:number)=> x+y;


// //对象
// let obj:{x:number,y:number} = {x:1,y:2};

// //undefined,null
// let un:undefined = undefined;
// let nu:null = null;

// // void
// let noVoid = ()=>{}

// // never

// let error = ()=>{
//     throw new Error("error");
// }

// //函数的重载


// function add1(...rest:number[]):number;
// function add1(...rest:string[]):string;
// function add1(...rest:any[]):any{
//     let first = rest[0];
//     if(typeof first === "string"){
//         return rest.join("");
//     }
//     if(typeof first === "number"){
//         return rest.reduce((pre,cur)=>{
//             return  pre + cur;
//         })
//     }
// }
// console.log(add1(1, 2, 3));
// console.log(add1("1","2","3"));


// interface obj {
//     a:number,
//     b:string,
// }
// let key:keyof obj;
// let value:obj["a"];

// //联合类型
// interface objObj1 {
//     a:string;
//     b:number;
//     c:boolean;
// }
// type readonlyObj1 = Readonly<objObj1>;

// //枚举=======
// // funcction init(role){
// //     if(role === 1 || role === 2){
// //         do sth
// //     }else if(role === 3 || role === 4){
// //         do sth
// //     }else if(role === 5){
// //         do sth
// //     }else {
// //         do sth
// //     }
// // }
// //1.可读性差：很难记住数字的含义
// //2.硬编码,牵一发而动全身
// //枚举：一组有名字的常量集合
// //数字枚举--反向映射
// enum Num {
//     one,
//     two,
//     three,
// }
// console.log(Num.one)
// console.log(Num[0]);
// //字符串枚举
// enum Message{
//     success = "成功",
//     fail = "失败",
// }
// console.log(Message.success);
// //异构枚举
// enum Answer{
//     N,
//     Y = "yes"
// }
// console.log(Answer.N);
// console.log(Answer.Y);
// console.log(Answer[0]);

// //枚举成员1.常量枚举const 1，没有初始值，2，对已有枚举的引用，3.常量表达式 --编译的时候会计算出结果  2，需要被计算的枚举成员computed--后边的成员需要设置初始值
// enum Char{
//     a,
//     b = Char.a,
//     c = 1+3,
//     d = Math.random(),
//     e = "123".length,
// }
// console.log(Char)


// //常量枚举
// const enum Month{
//     Jan,
//     Feb,
//     Mar
// }
// let month = [Month.Jan,Month.Feb,Month.Mar];
// console.log(month)



// type test = Exclude<"a"|"b"|"c"|"d","a"|"d">;
// type test1 = NonNullable<"a"|undefined|"b"|null>;
// type test2 = Extract<"a"|"b"|"c"|"d","a"|"d">;
// type test3 = ReturnType<()=>string>

// //泛型--不预先确定的数据类型，具体的类型在使用的时候才能确定
// function log(value:string):string{
//     console.log(value);
//     return value;
// }
// log("123");
// function logT<T>(value:T): T{
//     console.log(value);
//     return value
// }

//泛型的好处
// 1、函数和类可以轻松的支持多种类型，增强程序的扩展性
// 2.不必写多条函数重载，冗长的联合类型声明，增强代码的可读性
// 3.灵活控制类型之间的约束

// class student {
//     readonly id:number;
//     name:string;
//     age:number;
//     constructor(id:number,name:string,age:number){
//         this.id = id;
//         this.name = name;
//         this.age = age;
//     }
// }
// interface student{
//     readonly id:number;
//     name:string;
//     age:number;
// }
// function score<T>(data:T): T{
//     console.log(data);
//     return data;
// }
// let student1 = {id:1,name:"张三",age:23,address:"china"};
// score<student>(student1);
// class I18n{
//     [x:string]:string
// }
// interface I18n{
//     [x:string]:string;
//     ():string;
// }
// let i18:I18n = {
//     "test":"123",
//     "test1":(function(){return "666"})(),
// }

//函数
//定义函数
// function add(x:number,y:number){
//     return x + y;
// }
// let add2 = (x:number,y:number):number=> {
//     return x + y;
// }

// type add3 = (x:number,y:number)=>number

// interface add4{
//     (x:number,y:number):number

// }
// let test3:add3 = (x:number,y:number)=>{
//     return x + y;
// }
// let test4:add4 = (x:number,y:number)=>{
//     return x + y;
// }
//可选参数
// function add5(x:number,y?:number):number{
//     return y ? x + y : x; 
// }

//参数初始化
// function add6(x:number,y = 1):number{
//     return x + y;
// }
// console.log(add6(4,3));

//剩余参数
// function add7(x:number,...rest:number[]){
//     return x + rest.reduce((pre,cur)=>pre+cur)
// }
// console.log(add7(1,2,3,4,5))

//函数的重载
// function add8(...rest:number[]):number;
// function add8(...rest:string[]):string;
// function add8(...rest:any[]):any{
//     let first = rest[0];
//     if(typeof first === "string"){
//         return rest.join("");
//     }
//     if(typeof first === "number"){
//         return rest.reduce((pre,cur)=>pre + cur);
//     }
// }
// console.log(add8(1, 2, 3));
// console.log(add8("1","2","3"));







//类型检查机制
//=====类型推断--不需要制定变量的类型（函数的返回值类型），TS可以根据某些规则自动的为其推断出一个类型
//基础类型推断

// let a = 1;
// let b = [1];

// let c = (x = 1)=>x + 1


//最佳通用类型推断

//let b1 = [1,null];
//上下文类型推断
// window.onkeydown = (event)=>{
//     console.log(event)
// }
  //类型断言
//   interface Foo{
//       a:number,
//   }
//   let foo = {} as Foo;

//   foo.a = 1;


//=====类型兼容性
//当一个类型Y可以被赋值给另一个类型X的时候，我们就说类型X兼容类型Y
//X兼容Y： X（目标类型） = Y （源类型）

//1.let s:string = null; //需要关闭 "strictNullChecks": false, 
//接口的兼容性
// interface X{
//     a:any;
//     b:any,
// }

// interface Y{
//     a:any,
//     b:any,
//     c:any,
// }
// let x:X = {a:1,b:2};
// let y:Y = {a:1,b:1,c:3};
// x = y;
//y = x;
//源类型必须具备目标类型的必要属性，成员少的兼容成员多的

//函数的兼容性
// type Handler = (a:number,b:number)=> void
// function hof(handler:Handler){
//     return handler
// }
//1>参数个数--固定参数
// let handler1 = (a:number)=>{}
// hof(handler1);

// let handler2 = (a:number,b:number,c:number)=>{}
// hof(handler2);

//可选参数和固定参数
// let a = (p1:number,p2:number)=>{}
// let b = (p1?:number,p2?:number)=>{}
// let c = (...args:number[])=>{}
// a = b;
// a = c;
//b = a; //strictFunctionTypes：false 就可兼容
//b = c;
// c = a;
// c = b;

//2>参数类型
// let handler3 = (a:string)=>{}
//hof(handler3);

// interface Point3D{
//     x:number;
//     y:number;
//     z:number;
// }
// interface Point2D{
//     x:number;
//     y:number;
// }
// let p3d = (point:Point3D) =>{}
// let p2d = (point:Point2D) =>{}

// p3d = p2d;
//p2d = p3d;

//返回值类型--TS要求目标函数的返回值类型与源函数的返回值类型相同或者是其子类型
// let f = ()=>({name:"zhansan"})
// let g = ()=>({name:"lisi",age:23})

// f = g;
//g = f;

//函数的重载
// function overload(a:number,b:number):number;
// function overload(a:string,b:string):string;
// function overload(a:any,b:any):any{};


//枚举类型兼容性
// enum Fruit {Apple, Banana}
// enum Color {Red,Yellow}

// let fruit:Fruit.Apple = 1;
// let num:Number = Fruit.Apple;

//let color:Color.Red = Fruit.Apple;//枚举类型之间相互不兼容


//类兼容性-静态成员和构造器不参与
// class A{
//     constructor(p:number,q:number){}
//     id:number = 1
// }
// class B{
//     static s = 1
//     constructor(p:number){}
//     id:number = 2;
//     private name:string = '';
// }
// let aa = new A(1,2);
// let bb = new B(1);
// aa = bb;
// //bb = aa;

// class C extends B{}//子类和父类兼容
// let cc = new C(4);
// bb = cc;
// cc = bb;

//泛型兼容性
// interface Empty<T>{
//     value:T
// }
// let obj1:Empty<number> = {};
// let obj2:Empty<string> = {};

// obj1 = obj2;

// let log1 = <T>(x:T):T =>{
//     console.log("x");
//     return x;
// }
// let log2 = <U>(x:U):U =>{
//     console.log("x");
//     return x;
// }
// log1 = log2;//泛型函数没有指定类型可以相互兼容

//口诀：
// 结构之间的兼容：成员少的兼容成员多的
//函数之间的兼容：参数多的兼容参数少的

//=====类型保护
// enum Type{
//     Strong,
//     Week
// }
// class Java{
//     helloJava(){
//         console.log("Hello Java");
//     }
// }
// class JavaScript{
//     helloJavaScript(){
//         console.log("Hello JavaScript");
//     }
// }
// function getLanguage(type:Type){
//     let lang = type === Type.Strong ? new Java() : new JavaScript();
//     if((lang as Java).helloJava){
//         (lang as Java).helloJava();
//     }else{
//         (lang as JavaScript).helloJavaScript();
//     }
//     return lang
// }
// getLanguage(Type.Strong);

//TypeScript能够在特定的区块中保证变量属于某种确定的类型。
//可以在此区块中放心的引用此类型的属性，或者调用此类型的方法。

//1> instanceOf
// function getLanguage(type:Type){
//     let lang = type === Type.Strong ? new Java() : new JavaScript();
//     if(lang instanceof Java){
//         lang.helloJava()
//     }else{
//         lang.helloJavaScript();
//     }
//     return lang
// }
// getLanguage(Type.Strong);
//2> in 
// class Java{
//     helloJava(){
//         console.log("Hello Java");
//     }
//     java:any;
// }
// class JavaScript{
//     helloJavaScript(){
//         console.log("Hello JavaScript");
//     }
//     javaScript:any;
// }
// function getLanguage(type:Type){
//     let lang = type === Type.Strong ? new Java() : new JavaScript();
//     if('java' in lang){
//         lang.helloJava()
//     }else{
//         lang.helloJavaScript();
//     }
//     return lang
// }
// getLanguage(Type.Strong);

//3> typeof
// function getLanguage(type:Type,x:number| string){
//     let lang = type === Type.Strong ? new Java() : new JavaScript();
//    if(typeof x === "string"){
//        x.length
//    }else{
//        x.toFixed(2);
//    }
//     return lang
// }

//4>创建一个类型保护函数
// function isJava(lang:Java|JavaScript):lang is Java{
//     return (lang as Java).helloJava !== undefined
// }
// function getLanguage(type:Type,x:number| string){
//     let lang = type === Type.Strong ? new Java() : new JavaScript();
//    if(isJava(lang)){
//        lang.helloJava();
//    }else{
//        lang.helloJavaScript();
//    }
//     return lang
// }





//高级类型
//索引类型
// let obj = {
//     a:1,
//     b:2,
//     c:3
// }
// function getValue(obj:any,keys:string[]){
//     return keys.map(key=>obj[key])
// }
// console.log(getValue(obj,["a","b"]));
// console.log(getValue(obj,["e","f"]));

//keyof T
// interface Obj{
//     a:number,
//     b:number,
// }
// let key:keyof Obj;

//T[K]
// let value:Obj["a"];

// function getValues<T,K extends keyof T>(obj:T,keys:K[]): T[K][]{
//     return keys.map(key=> obj[key]);
// }
// console.log(getValues(obj,["a","b"]));
// console.log(getValues(obj,["e","f"]));

//映射类型
// interface Obj{
//     a:string;
//     b:string;
//     c:string;
// }
// type ReadonlyObj = Readonly<Obj>;
// type PartialObj = Partial<Obj>;//可选
// type PickObj = Pick<Obj,"a"|"b">//挑选


// type RecordObj = Record<"x"|"y",Obj>;

//条件类型---T extends U ? X : Y
// type TypeName<T> = 
//     T extends string ? "string" :
//     T extends number ? "number" :
//     T extends boolean ? "boolean" :
//     T extends undefined ? "undefined" :
//     T extends Function ? "function" :
//     "object";

// type T1 = TypeName<string>;
// type T2 = TypeName<string[]>;


//(A|B) extends U ? X : Y
//(A extends U ? X : Y) | (B extends U ? X : Y)

// type T3 = TypeName<string|string[]>


// type Diff<T,U> = T extends U ? never : T;

// type T4 = Diff<"a"|"b"|"c","a"|"e">;


// type NotNull<T> = Diff<T,undefined|null>;
// type T5 = NotNull<string|number|undefined|null>


//Exclude<T,U>
//NonNullable<T>
//Extract<T,U>

// type T6 = Exclude<"a"|"b"|"c","a"|"e">
// type T7 = NotNull<"a"|"b"|"c"|undefined|null>
// type T8 = Extract<"a"|"b"|"c","a"|"e">


//ReturnType<T>
// type T9 = ReturnType<()=>string>;


