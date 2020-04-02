/**
 *  class --> when we create and Object we use model with clss 
 *  
 *  interFace ---> aleady Created object, just defining the shape.
 * 
    When to use classes: When you want to create objects that have actual function code in them, have a constructor for initialization, and/or you want to create instances of them with new. Also, for simple data objects, you can use classes for setting up default values. Another time you would want to use them is when you are doing type checking, though there are workarounds for interfaces if needed (see the interface section OS link).

    When not to use classes: When you have a simple data interface, do not need to instantiate it, when you want to have it implemented by other objects, when you want to simply put an interface on an existing object (think type definition files) or when the space it would take up is prohibitive or unwarranted. As a side note, if you look in .d.ts files you will notice that they only use interfaces and types, and thus this is completely removed when transpiled to TS.
 */

export interface postListModel {
    userId: number;
    id: number;
    title: string;
    body: string;
}