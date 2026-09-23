import Link from "next/link"
export default function PaymentsLayouts({children}:LayoutProps<"/">){
    return (
        <html>
            <body>
               
                <div className="grid grid-cols-2">
                        <div className="flex m-10 flex-col h-[200px] justify-between">
                            <Link href="/payments/pending-payment">Pending Payment</Link>
                                           <Link href="/payments/rejected-payment">Rejected Payment</Link>
                                           <Link href="/payments/successfull-payment">Successfull Payments</Link>
                        </div>
                        <div>
                            {children}
                        </div>
                </div>
                
            </body>
        </html>
    )
}