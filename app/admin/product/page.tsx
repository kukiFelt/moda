import { Button } from "@/components/ui/button";
import List from "./List";
// import List from "./List";

export default function Product() {
    return (
        <div className="w-full flex flex-col  mt-6">
            <div className="flex justify-center mb-6">
                <a href="/admin/product/new">
                    <Button>Cadastrar Produto</Button>
                </a>
            </div>
            <List />
        </div>
    )
}