// 색인 타입 기능이라고 부른다.
const makeObject = (key, value) => ({[key]: value})

console.log(makeObject('name', '최은기'))
console.log(makeObject('분야', '백엔드, 데브옵스'))

// 예제
type KeyValueType = {
    [key: string]: string
}

const makeStudent = (key: string, value: string): KeyValueType =>
    ({
        [key]: value
    });

console.log(makeStudent('이름', '최은기'));
console.log(makeStudent('직업', '백엔드 대학생'));
