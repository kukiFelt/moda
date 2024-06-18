import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { BookAIcon, Home, MailCheck, PersonStanding } from "lucide-react"

export default function Aside({ className }: any) {
    return (
        <div className={cn("hidden md:block size-1/6", className)}>
            <div className="flex flex-col space-y-2" >
                <h2 className="font-bold">Dasboard</h2>
                <a href="">
                    <Button variant="ghost">
                        <Home className="mr-2 text-center" />
                        Home
                    </Button>
                </a>
                <a href="/admin/product">
                    <Button variant="ghost">
                        <PersonStanding className="mr-2" />
                        Produto
                    </Button>
                </a>
                <a href="/admin/supplier">
                    <Button variant="ghost">
                        <MailCheck className="mr-2" />
                        Fornecedor
                    </Button>
                </a>

                <h2 className="font-bold">Configurações</h2>
                <a href="/admin">
                    <Button variant="ghost">
                        <BookAIcon className="mr-2" />
                        Conta
                    </Button>
                </a>
            </div>
        </div>
    )
}