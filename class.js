class student{
      constructor(sId,sName){
          this.id = sId;
          this.name = sName;
          this.varsity = 'Bubt';
      }
}
const student1 = new student(245,'rakib');
const student2 = new student(246,'fariha');
const student3 = new student(247,'naimur');
console.log(student1.name,student2.name);
console.log(student1,student2);
console.log(student3);