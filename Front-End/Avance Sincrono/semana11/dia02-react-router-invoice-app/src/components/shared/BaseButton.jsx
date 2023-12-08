const BaseButton = ({ label, bgColor }) => {
    return(
        <button className={`rounded-full px-5 py-4 font-semibold text-white ${bgColor}`}>
            {label}
        </button>
    )
}

export default BaseButton