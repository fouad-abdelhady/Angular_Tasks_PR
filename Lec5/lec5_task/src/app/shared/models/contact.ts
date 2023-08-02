export class Contact{
    private _name: string;
    private _imageUrl: string;
    private _mobileNum: string;
    constructor(name:string, imageUrl:string, mobileNum:string){
        this._name = name;
        this._imageUrl = imageUrl;
        this._mobileNum = mobileNum;
    }

    set name(newName:string){
        this._name = newName;
    }
    set imageUrl(newImageUrl:string){
        this._imageUrl = newImageUrl;
    }
    set mobileNum(newMobileNum:string){
        this._mobileNum = newMobileNum;
    }

    get name(){
        return this._name;
    }
    get imageUrl(){
        return this._imageUrl;
    }
    get mobileNum(){
        return this._mobileNum;
    }

    static CONTACTS_LIST: Contact[] = [
        new Contact("John Wick", "https://randomuser.me/api/portraits/men/1.jpg", "01234567890"),
        new Contact("Jolie Fox", "https://randomuser.me/api/portraits/women/2.jpg", "01234567891"),
        new Contact("Antonio Shaw", "https://randomuser.me/api/portraits/men/3.jpg", "01234567892"),
        new Contact("Emersyn Avalos", "https://randomuser.me/api/portraits/women/4.jpg", "01234567893"),
        new Contact("Coen Suarez", "https://randomuser.me/api/portraits/men/5.jpg", "01234567894"),
        new Contact("Jimena Barnes", "https://randomuser.me/api/portraits/women/6.jpg","01234567895"),
        new Contact("Damian Barrett", "https://randomuser.me/api/portraits/men/7.jpg", "01234567896"),
        new Contact("Kyla Pittman", "https://randomuser.me/api/portraits/women/8.jpg", "01234567897"),
        new Contact("Valentino Matthews", "https://randomuser.me/api/portraits/men/9.jpg", "01234567898"),
        new Contact("Iyla Murillo", "https://randomuser.me/api/portraits/women/10.jpg","01234567899"),
        new Contact("Delilah Boyer", "https://randomuser.me/api/portraits/women/11.jpg", "01234567800"),
        new Contact("Mohamed Morgan", "https://randomuser.me/api/portraits/men/12.jpg", "01234567811"),
        new Contact("Rylan Huber", "https://randomuser.me/api/portraits/men/13.jpg", "01234567812"),
        new Contact("Heath Stephenson", "https://randomuser.me/api/portraits/men/14.jpg", "01234567813"),
        new Contact("Aitana McCann", "https://randomuser.me/api/portraits/women/15.jpg", "01234567814"),
        new Contact("Mya Cano", "https://randomuser.me/api/portraits/women/16.jpg", "01234567815"),
        new Contact("Terry Hanna", "https://randomuser.me/api/portraits/men/17.jpg", "01234567816"),
        new Contact("Cynthia Alvarez", "https://randomuser.me/api/portraits/women/18.jpg", "01234567817"),
        new Contact("Xavier Olson", "https://randomuser.me/api/portraits/men/19.jpg", "01234567818"),
        new Contact("Isabel Murillo", "https://randomuser.me/api/portraits/women/20.jpg", "01234567819"),
        new Contact("Lance Livingston", "https://randomuser.me/api/portraits/men/21.jpg", "01234567820"),
        new Contact("Rowen Reilly", "https://randomuser.me/api/portraits/men/22.jpg", "01234567821"),
        new Contact("Madeleine Pratt", "https://randomuser.me/api/portraits/women/23.jpg", "01234567822"),
        new Contact("Frank Fuentes", "https://randomuser.me/api/portraits/men/24.jpg", "01234567823"),
        new Contact("Autumn Chan", "https://randomuser.me/api/portraits/women/25.jpg", "01234567824"),
        new Contact("Anderson Brooks", "https://randomuser.me/api/portraits/men/26.jpg", "01234567825"),
        new Contact("Rosemary Newman", "https://randomuser.me/api/portraits/women/27.jpg", "01234567826"),
        new Contact("Tori Ramirez", "https://randomuser.me/api/portraits/women/28.jpg", "01234567827"),
        new Contact("David Callahan", "https://randomuser.me/api/portraits/men/29.jpg", "01234567828"),
        new Contact("Kimber Webb", "https://randomuser.me/api/portraits/women/30.jpg", "01234567829"),
        new Contact("Lorenzo O’Neal", "https://randomuser.me/api/portraits/men/31.jpg", "01234567830"),
        new Contact("Treasure McCarty", "https://randomuser.me/api/portraits/women/32.jpg", "01234567831"),
        new Contact("Blaise Andrews", "https://randomuser.me/api/portraits/men/33.jpg", "01234567832"),
        new Contact("Devon Mendez", "https://randomuser.me/api/portraits/men/34.jpg", "01234567833")
      ];

      static deleteContact(index: number): void {
        this.CONTACTS_LIST.splice(index, 1);
      }
}
