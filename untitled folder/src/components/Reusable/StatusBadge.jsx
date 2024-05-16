function StatusBadge({status}) {

    const statusClass = (status) =>{
        switch(status.toLowerCase()){
            case 'in-progress':
                return 'bg-StatusYellow-100 text-StatusYellow-200 DotStatusYellow';
            case 'failed':
                return 'bg-StatusRed-100 text-StatusRed-200 DotStatusRed';
            case 'reconciled':
                return 'bg-StatusGreen-100 text-StatusGreen-200 DotStatusGreen';
            default:
                return '';
        }
    }
    return ( <>
  
    <span className={`StatusBadge ${statusClass(status)}`}>
        <span className="statusDot"></span><span>{status} </span></span>
    
    </> );
}

export default StatusBadge;