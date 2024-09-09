let grade = '50';

switch(true){
    case grade >= '78':
        console.log('nilai kamu A');
        break;
    case grade >= '50':
        console.log('nilai kamu B');
        break;
    default:
        console.log(grade, 'itu bukan grade.')
}

// or

switch(grade){
    case grade == 'a':
        console.log('nilai kamu A');
        break;
    case grade == 'b':
        console.log('nilai kamu b');
        break;
    default:
        console.log(grade, 'bukan nilai.')
}