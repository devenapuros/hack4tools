import { Footer } from "@/components/footer";
import { Topbar } from "@/components/topbar";
import { ModuleError } from "@/components/ModuleError";

export default function Custom404() {
    return (
        <>
            <Topbar />
            <ModuleError>
                Sorry! We cannot find the page you are looking for
            </ModuleError>
            <Footer />
        </>
    );
}
