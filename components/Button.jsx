export const Button = ({ name, isBeam = false, containerClass, btnping, btnpingdot }) => {
    return (
        <button className={`${containerClass}`}>
            {isBeam && (

                <span className='relative flex h-3 w-3'>
                    <span className={btnping} />
                    <span className={btnpingdot} />
                </span>)}
            {name}
        </button>
    )
}