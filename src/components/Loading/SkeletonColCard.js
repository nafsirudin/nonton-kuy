import { Skeleton } from "@mui/material";
import Stack from '@mui/material/Stack';

const SkeletonColCard = () => {
    return(
        <div className="gen-banner-movies">
            <div className="item" style={{height:'500px'}}>
                <div className="gen-movie-contain h-100">
                    <div className="container h-100">
                        <div className="row align-items-center h-100">
                        <Stack spacing={1} width={'100%'}>
                            <Skeleton variant="text" sx={{ fontSize: '1rem' }} width={'30%'} />
                            <Skeleton variant="text" sx={{ fontSize: '0.5rem' }} width={'20%'} />
                            <Skeleton variant="rectangular" width={'50%'} height={100} />
                            <Skeleton variant="text" sx={{ fontSize: '0.7rem' }} width={'20%'} />
                        </Stack>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
}

export default SkeletonColCard;