// 定义一个表示灯的类
class Light {
    // 属性 (成员变量)
    // 默认是 public，表示可以在类的外部访问
    brightness: number;
  
    // private 成员只能在类内部访问，就像灯内部的电路细节不对外暴露
    private isOn: boolean;
  
    // protected 成员可以在类内部和其子类中访问，就像一个家族内部的秘密配方
    protected maxBrightness: number = 100;
  
    // 只读属性，只能在构造函数中初始化
    readonly id: string;
  
    // 构造函数：在创建对象时执行，用于初始化属性
    constructor(initialBrightness: number = 0, id: string) {
      this.brightness = initialBrightness;
      this.isOn = initialBrightness > 0;
      this.id = id;
      console.log(`灯 ${this.id} 已创建，初始亮度: ${this.brightness}`);
    }
  
    // 方法 (成员函数)
    // public 方法，可以在类的外部调用
    turnOn(): void {
      if (!this.isOn) {
        this.isOn = true;
        console.log(`灯 ${this.id} 打开了.`);
        this.brightness = 50; // 打开时设置一个默认亮度
      }
    }
  
    turnOff(): void {
      if (this.isOn) {
        this.isOn = false;
        console.log(`灯 ${this.id} 关闭了.`);
        this.brightness = 0;
      }
    }
  
    // private 方法，只能在类内部调用
    private checkStatus(): void {
      console.log(`灯 ${this.id} 当前状态: ${this.isOn ? '开' : '关'}`);
    }
  
    // public 方法，内部调用 private 方法
    reportStatus(): void {
      this.checkStatus();
      console.log(`当前亮度: ${this.brightness}`);
    }
  
    // 访问 protected 属性
    get maxLevel(): number {
      return this.maxBrightness;
    }
  }
  
  // 创建 Light 对象 (实例化)
  const livingRoomLight = new Light(0, "LR1");
  const kitchenLight = new Light(30, "K1");
  
  livingRoomLight.turnOn();
  livingRoomLight.reportStatus(); // 调用 public 方法，内部使用了 private 方法
  
  // 尝试访问 private 或 protected 成员会报错
  // console.log(livingRoomLight.isOn); // 编译时报错：Property 'isOn' is private and only accessible within class 'Light'.
  // console.log(livingRoomLight.maxBrightness); // 编译时报错：Property 'maxBrightness' is protected and only accessible within class 'Light' and its subclasses.
  
  // 尝试修改 readonly 属性会报错 (在构造函数外)
  // livingRoomLight.id = "new-id"; // 编译时报错：Cannot assign to 'id' because it is a read-only property.
  
  console.log("客厅灯最大亮度:", livingRoomLight.maxLevel); // 通过 public getter 访问 protected 属性
  // 定义一个继承自 Light 的智能灯类
class SmartLight extends Light {
    color: string;
  
    constructor(initialBrightness: number = 0, id: string, initialColor: string = "白色") {
      // 调用父类的构造函数，必须是子类构造函数中的第一行
      super(initialBrightness, id);
      this.color = initialColor;
      console.log(`智能灯 ${this.id} 已创建，颜色: ${this.color}`);
    }
  
    // 子类可以添加新的方法
    setColor(color: string): void {
      this.color = color;
      console.log(`灯 ${this.id} 颜色设置为: ${this.color}`);
    }
  
    // 子类可以覆盖父类的方法 (方法重写)
    reportStatus(): void {
      // 可以调用父类的同名方法
      super.reportStatus();
      console.log(`当前颜色: ${this.color}`);
      // 子类可以访问父类的 protected 属性
      console.log(`智能灯最大亮度限制: ${this.maxBrightness}`);
    }
  
    // 尝试访问 private 成员会报错
    // checkStatus() // 编译时报错：Property 'checkStatus' is private and only accessible within class 'Light'.
  }
  
  const bedroomSmartLight = new SmartLight(10, "BR1", "蓝色");
  bedroomSmartLight.turnOn();
  bedroomSmartLight.setColor("红色");
  bedroomSmartLight.reportStatus(); // 调用子类重写后的方法
  interface PowerControllable {
    powerOn(): void;
    powerOff(): void;
    isOn(): boolean;
  }
  
  // 定义一个表示智能插座的类，实现 PowerControllable 接口
  class SmartOutlet implements PowerControllable {
    private deviceName: string;
    private status: boolean;
  
    constructor(name: string) {
      this.deviceName = name;
      this.status = false; // 默认关闭
    }
  
    powerOn(): void {
      if (!this.status) {
        this.status = true;
        console.log(`${this.deviceName} 已通电.`);
      }
    }
  
    powerOff(): void {
      if (this.status) {
        this.status = false;
        console.log(`${this.deviceName} 已断电.`);
      }
    }
  
    isOn(): boolean {
      return this.status;
    }
  
    // 类可以有接口之外的其他成员
    getDeviceName(): string {
      return this.deviceName;
    }
  }
  
  const deskFanOutlet = new SmartOutlet("台扇插座");
  deskFanOutlet.powerOn();
  console.log(`${deskFanOutlet.getDeviceName()} 状态: ${deskFanOutlet.isOn() ? '开' : '关'}`);
  deskFanOutlet.powerOff();
  
  // 一个类可以实现多个接口
  interface SettableTimer {
    setTimer(minutes: number): void;
  }
  
  // 假设有一个既可以控制电源，又可以设置定时的智能设备
  class SmartDevice implements PowerControllable, SettableTimer {
    // ... 实现 PowerControllable 和 SettableTimer 的所有方法
    deviceName: string;
    status: boolean;
    timerMinutes: number = 0;
  
    constructor(name: string) {
        this.deviceName = name;
        this.status = false;
    }
  
    powerOn(): void { /* ... */ console.log(`${this.deviceName} 通电`); this.status = true; }
    powerOff(): void { /* ... */ console.log(`${this.deviceName} 断电`); this.status = false; }
    isOn(): boolean { return this.status; }
  
    setTimer(minutes: number): void {
        this.timerMinutes = minutes;
        console.log(`${this.deviceName} 设置定时 ${minutes} 分钟`);
    }
  }
  abstract class AbstractSmartDevice {
    abstract deviceType: string; // 抽象属性，子类必须提供
    protected status: boolean = false;
  
    abstract turnOn(): void; // 抽象方法，子类必须实现
    abstract turnOff(): void; // 抽象方法，子类必须实现
  
    // 具体方法
    getStatus(): boolean {
      return this.status;
    }
  
    // 构造函数
    constructor(protected id: string) { // protected 参数属性，会创建一个同名的 protected 属性
        console.log(`抽象设备 ${this.id} 已创建`);
    }
  }
  
  // 不能直接创建抽象类的实例
  // const myDevice = new AbstractSmartDevice("abc"); // 编译时报错：Cannot create an instance of an abstract class.
  
  // 继承抽象类并实现抽象成员
  class ConcreteSmartLight extends AbstractSmartDevice {
    deviceType: string = "智能灯"; // 实现抽象属性
  
    constructor(id: string, private brightness: number = 0) {
        super(id);
    }
  
    turnOn(): void { // 实现抽象方法
        this.status = true;
        this.brightness = 50;
        console.log(`智能灯 ${this.id} 打开，亮度 ${this.brightness}`);
    }
  
    turnOff(): void { // 实现抽象方法
        this.status = false;
        this.brightness = 0;
        console.log(`智能灯 ${this.id} 关闭`);
    }
  
    setBrightness(level: number): void {
        if (this.status) {
            this.brightness = level;
            console.log(`智能灯 ${this.id} 亮度设置为 ${this.brightness}`);
        } else {
            console.log(`智能灯 ${this.id} 已关闭，无法调节亮度`);
        }
    }
  }
  
  const hallwayLight = new ConcreteSmartLight("H1");
  hallwayLight.turnOn();
  hallwayLight.setBrightness(80);
  console.log("走廊灯状态:", hallwayLight.getStatus());
  hallwayLight.turnOff();
  class DeviceManager {
    // 静态属性：所有设备共用的计数器
    static deviceCount: number = 0;
  
    // 静态方法：用于注册新设备
    static registerDevice(): void {
      DeviceManager.deviceCount++; // 在静态方法中访问静态属性
      console.log(`新设备已注册，当前共有 ${DeviceManager.deviceCount} 个设备.`);
    }
  
    constructor() {
      DeviceManager.registerDevice(); // 在构造函数中调用静态方法 (不太常见，但可行)
    }
  }
  
  // 访问静态属性和方法，无需创建类的实例
  DeviceManager.registerDevice(); // 输出：新设备已注册，当前共有 1 个设备.
  DeviceManager.registerDevice(); // 输出：新设备已注册，当前共有 2 个设备.
  
  console.log("总设备数:", DeviceManager.deviceCount); // 输出：总设备数: 2
  
  // 创建类实例时也可以触发静态方法的调用 (如果构造函数里调用了)
  const device1 = new DeviceManager(); // 输出：新设备已注册，当前共有 3 个设备.
  const device2 = new DeviceManager(); // 输出：新设备已注册，当前共有 4 个设备.
  
  // 尝试通过实例访问静态成员会报错
  // console.log(device1.deviceCount); // 编译时报错：Property 'deviceCount' is a static member of type 'DeviceManager'.
  // device1.registerDevice(); // 编译时报错：Property 'registerDevice' is a static member of type 'DeviceManager'.