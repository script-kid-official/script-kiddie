import React, { useEffect, useContext} from 'react';
import { AppContent } from 'components';
import { withRouter } from 'react-router-dom';
import { AppContext } from 'context/AppContext';
import { fetchContentBySlug } from 'api'

function PageContent(props) {
    const [{ isLoading, response }, dispatch] = useContext(AppContext);

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch({ type: 'IS_LOADING', payload: true })
        const parent = props.match.path.split('/')[1];
        const child = props.match.params.child;
        fetchContent(parent, child)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.child])

    const fetchContent = async (parent, child) => {
        try {
            const response = await fetchContentBySlug(parent, child)
            if (response) {
                dispatch({ type: 'SET_CONTENT', payload: response })
                dispatch({ type: 'IS_LOADING', payload: false })
            }
        } catch (error) {
            throw new Error('API Error: ', error)
        }
    }

    return (
        <div style={{ height: '100vh', backgroundColor: 'rgb(58, 58, 58)' }}>
            {(isLoading) && <div>Loading</div>}
            {(!isLoading) &&

                (response) &&
                response.map((e, key) => {
                    return <div key={key} style={{ paddingTop: '1em', backgroundColor: '#3a3a3a' }}>
                        <AppContent key={e.id} {...e} />
                    </div>
                })

            }
        </div>
    );
}


export default withRouter(PageContent);
