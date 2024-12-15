📑 Agenda for Day 07: TypeScript Key Features 
 
🎯 [Focus: Deep Dive into TypeScript’s Advanced Features]  

🕝 Session Highlights  

1️⃣ Recap  
* Key takeaways from previous sessions.  

2️⃣ Type Aliases  
* What are Type Aliases and why use them?  
* Syntax and examples.   

3️⃣ Object Literals  
* Defining and using object types in TypeScript.  

4️⃣ Type Assertion  
* What is Type Assertion?  
* Examples: Converting unknown types.  

5️⃣ Enums  
* Understanding Enums: Numeric and String Enums.  

6️⃣ Optional & Default Parameters  
* Adding flexibility to functions with optional parameters.  
* Setting default values for parameters.  

🕡 Wrap Up / Q&A  

## Type Aliases

Type aliases allow you to create a new name for a type. Type aliases are sometimes equivalent to interfaces, but can name primitives and unions.
```typescript
type UserID = string | number;
let userIdentifier: UserID = "abc123";
```

## Type Assertion

Type assertion is similar to type casting in other languages. It is a way to tell the TypeScript compiler about the type of a variable so you can access the specific properties of that type.

```typescript
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

## Enum and Types

Enums allow you to define a set of named constants, either numeric or string-based. They can help in managing sets of related constants and improve the readability of your code.

```typescript
enum TestStatus {
    Pass = 1,
    Fail,
    Skip,
}
```

## Optional & Default Parameters

Functions in TypeScript can define parameters that are optional or have default values, enhancing function flexibility and providing default functionality.

```typescript
function buildName(firstName: string, lastName?: string, middleName = "Smith") {
    if (lastName) return `${firstName} ${middleName} ${lastName}`;
    return `${firstName} ${middleName}`;
}
```
