interface DocumentLayoutProps {
    children: React.ReactNode;
}

const DocumentsLayout = ({ children }: DocumentLayoutProps) => {
    return ( 
    <div>
        {children}
    </div> 
    );
}
 
export default DocumentsLayout;