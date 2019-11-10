//object user
function user(a,b,c,d){
    this.name=a
    this.age=b
    this.gender=c
    this.job=d
}
var userData=[]

//datauser
const dataUser=(a)=>{
    var output = ''
    a.forEach((val,index)) => {
        if(index==0){
            output+=`<tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Sex</th>
                        <th>Occupation</th>
                    </tr>
                    <tr>
                        <td>${index+1}</td>
                        <td>${val.name}</td>
                        <td>${val.age}</td>
                        <td>${val.gender}</td>
                        <td>${val.job}</td>
                    </tr>`
        }else{
            output+=`<tr>
                        <td>${index+1}</td>
                        <td>${val.name}</td>
                        <td>${val.age}</td>
                        <td>${val.gender}</td>
                        <td>${val.job}</td>
                    </tr>`
        }
        document.getElementById('output').innerHTML=output
    }
}
dataUser(userData)

