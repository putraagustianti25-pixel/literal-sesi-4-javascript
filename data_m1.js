let studentData = {
    name : "Andi",
    java_score : 80,
    python_score : 100,
    javascript_score : 90,
    infoStudent : function() {
        return(
            "Nama : " + this.name + "\n" +
            "Nilai Java : " + this.java_score + "\n" +
            "Nilai Python : " + this.python_score + "\n" +
            "Nilai Javascript : " + this.javascript_score
        )   
    }
}
studentData["id number"] = "20250040057";   
console.log(studentData);
delete studentData["id number"];
console.log(studentData);


//studentData.name = "Budi";
//console.log(studentData.infoStudent());
//console.log(studentData["name"]);
//console.log(studentData["java_score"]);
//console.log(studentData["python_score"]);
//console.log(studentData["javascript_score"]);
