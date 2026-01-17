interface Utility {
    utilityIcon: string,
    utilityName: string,
    utilityDescription: string,
}

function MyUtilitiesWidget({utilityIcon, utilityName, utilityDescription} : Utility) {
    function handleClick() {
        window.location.replace("#")
    }


    return(
        <>
            <button className="MyUtilityWidget" onClick={handleClick}>
                <div>
                    <h1 className="MyUtilityWidget_Name">{utilityName}</h1>
                    <h1>{utilityIcon}</h1>
                    <h1 className="MyUtilityWidget_Description">{utilityDescription}</h1>
                </div>
            </button>
        </>
    )    
}
export default MyUtilitiesWidget