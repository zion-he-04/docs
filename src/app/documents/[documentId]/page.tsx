import { Editor } from "./editor"
import { Toolbar } from "./toolbar";

interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
}

const documentIdPage = async({ params }: DocumentIdPageProps) => {
    const { documentId } = await params;

    return ( 
    <div className="min-h-screen bg-[#FAFBFD]">
        <Toolbar />
        <Editor />

    </div> 
    );
}
 
export default documentIdPage;