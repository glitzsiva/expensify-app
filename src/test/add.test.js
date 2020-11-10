const add =(a,b)=>a+b ;
const greet =(name)=>`this is ${name}!`;

test('add od 2 nos',()=>{
    const result=greet('siva')
    expect(result).toBe('this is siva!')
})