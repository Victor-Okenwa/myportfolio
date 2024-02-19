import { useStoreActions, useStoreState } from 'easy-peasy'
import React, { useEffect } from 'react'

const useWindowScroll = () => {
    const handleScroll = useStoreActions((action) => action.handleScroll);
    window.addEventListener('DOMContentLoaded', handleScroll);
    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => (window.removeEventListener('scroll', handleScroll));
    }, [handleScroll]);
}

export default useWindowScroll;