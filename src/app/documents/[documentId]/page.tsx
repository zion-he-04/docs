interface DocumentIdPageProps {
    params: Promise<{ documentId: string }>;
}

const documentIdPage = async({ params }: DocumentIdPageProps) => {
    const { documentId } = await params;

    return ( 
    <div>
        hello: {documentId}
    </div> 
    );
}
 
export default documentIdPage;