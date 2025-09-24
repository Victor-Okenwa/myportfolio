// import { useStoreActions } from 'easy-peasy';
// import { useEffect } from 'react'

// const useWindowLoad = () => {
//     const setIsLoading = useStoreActions(action => action.setIsLoading);
//     const handlePreload = useStoreActions(action => action.handlePreload);
//     window.addEventListener('DOMContentLoaded', handlePreload);
//     useEffect(() => {
//         handlePreload();
//         return () => window.removeEventListener('DOMContentLoaded', handlePreload);
//     }, [setIsLoading, handlePreload]);
// }

// export default useWindowLoad