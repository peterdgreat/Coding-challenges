function gradingStudents(grades) {
    const result =[]
    grades.forEach((num)=> {
        if((Math.ceil(num/5)*5 - num) < 3 && num>37){
                    result.push(Math.ceil(num/5)*5)
        }
        else {
            result.push(num);
        }
    })
    return result;
}
