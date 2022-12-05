class Student{
  constructor(name, korean, english, math){
    this.name = name;
    this.korean = korean;
    this.english = english;
    this.math = math;
    this.sum = 0;
    this.avg = 0;
  }
  calcGrade(){
    this.sum = this.korean+this.english+this.math;
    this.avg = Math.floor(this.sum/3);
  }
}
const s1 = new Student("박준영", 80, 80, 90);
const s2 = new Student("김준호", 30, 20, 40);
const s3 = new Student("이영인", 60, 80, 60);

const arr = [s1, s2, s3];
arr.forEach((v)=>{
  v.calcGrade();
});

const targetInsert = (arr)=>{
  arr.forEach((v,i,a)=>{
    $(".target").append(`
      <tr>
        <td>${v.name}</td>
        <td>${v.korean}</td>
        <td>${v.english}</td>
        <td>${v.math}</td>
        <td>${v.sum}</td>
        <td>${v.avg}</td>
      </tr>
    `);
  });
}

targetInsert(arr);