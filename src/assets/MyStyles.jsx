// Styling

export const [Color1, Color2] = ["palegoldenrod", "lightgoldenrodyellow"];
export const MyStyles = {
    SearchContainer: {
        backgroundColor: Color1,
        borderRadius: "20px",
        maxWidth: "500px"
    },
    SearchInput: {
        my: 0.5,
        ml: 2,
        mr: 4,
        width: "85%"
    },
    HorizontalSlider: {
        display: 'flex',
        overflowX: 'auto',
        height: 40,
        padding: 7,
        backgroundColor: Color2
    },
    CategoryButtonM: {
        mx: '2px',
        minWidth: "80px",
        borderColor: Color1,
        color: "inherit"
    },
    CategoryButtonHighlightM: {
        color: 'inherit',
        backgroundColor: Color1,
        borderRadius: "22px"
    },
    CategoryButtonHighlightW: {
        marginBlock: "5px",
        color: 'inherit',
        backgroundColor: Color1,
        borderRadius: "22px"
    },
    // --------------------------------------
    footerStyle : {
        padding: '16px',
        marginTop: 'auto',
        backgroundColor: 'lightgray',
    },
    // --------------------------------------
    CardShadow : {
        my: 1.5, mx: 1, 
        boxShadow: "1px 2px 8px 1px"
    },
    CardCenterImg : {
        display: "flex", 
        flexDirection: "column", 
        alignItems: "center"
    },
    CardImgSize : {
        height: '148px', 
        width: '148px', 
        margin: 2
    },
    CardSpredElements: {
        display: 'flex', 
        justifyContent: "space-between"
    },
    // ---------------------------------------
    DashboardBackground:{
        backgroundColor: Color1, 
        minHeight: "100vh"
    },
    StickySection1 :{ 
        position: 'sticky', 
        top: 64, zIndex: 1 
    },
    StickyAppBar: {
        position: 'sticky', 
        top: 0, zIndex: 200
    },
    PaginationStyle: {
        display: 'flex', 
        justifyContent: 'space-between', 
        marginTop: '1rem', p: "5px", 
        borderTop:"solid", 
        borderBottom:"solid", 
        borderColor:"black", 
        borderWidth: "1px"
    },
    
}