function f1(x:number=101,y?:string): void{
    console.log(
        "f1 is called",x
    )

  
}

f1(108)

const getUser= function():void{
    console.log("getUser is called")
   
}

const getProducts = ():any=>{
    console.log("get PRoducts is called")
    return 100
}