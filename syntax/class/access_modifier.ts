//? 접근 제한자 (Access Modifier)

class Foo {
	public x: string;
	protected y: string;
	private z: string;

	constructor(x: string, y: string, z: string) {
		//* public, protected, private 접근 제한자 모두 클래스 내부에서 참조 가능하다.
		this.x = x;
		this.y = y;
		this.z = z;
	}
}

const foo = new Foo('x', 'y', 'z');

//* public 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조 가능.
console.log(foo.x);

//* public 접근 제한자로 선언된  field는  외부에서 직접 조작이 가능
foo.x = 'x1';
console.log(foo.x);

//* protected 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
// console.log(foo.y); //! error : Property 'y' is protected and only accessible within class 'Foo' and its subclasses.

//* private 접근 제한자는 클래스 인스턴스를 통해 클래스 외부에서 참조할 수 없다.
// console.log(foo.z); //! error : Property 'z' is private and only accessible within class 'Foo'.

class Bar extends Foo {
	constructor(x: string, y: string, z: string) {
		super(x, y, x);

		//* public, protected 접근 제한자는 자식 클래스 내부에서 참조 가능하다.
		console.log(this.x, this.y);

		//* private 접근 제한자는 자식 클래스 내부에서 참조할 수 없다.
		// console.log(this.z); //! error : Property 'z' is private and only accessible within class 'Foo'.
	}
}
