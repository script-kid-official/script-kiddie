import React, { useEffect, useContext } from 'react';
import { AppContent } from 'components';
import { withRouter } from 'react-router-dom';
import { AppContext } from 'context/AppContext';
import { fetchContentBySlug } from 'api'
import { AppLoader } from 'components';
import { Redirect } from 'react-router-dom';

function PageContent(props) {
    const [{ isLoading, error, response }, dispatch] = useContext(AppContext);

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

            if (response.error) dispatch({ type: 'IS_ERROR', payload: { error: true, message: response.message } })
            if (response.success) {
                dispatch({ type: 'SET_CONTENT', payload: response.data })
                dispatch({ type: 'RESET_ERROR' })
            }

        } catch (error) {
            throw new Error('Api Error')
        }
        dispatch({ type: 'IS_LOADING', payload: false })

    }

    return (
        <div style={{ minHeight: '100vh', backgroundColor: 'rgb(58, 58, 58)' }}>
            {isLoading && <AppLoader open={isLoading} />}
            {error.isError && <Redirect to='/error' />}
            {(!isLoading) &&
                (response) &&
                response.map((e, key) => {
                    return <div key={key} style={{ margin: '0em 3em', backgroundColor: '#3a3a3a' }}>
                        <AppContent key={e.id} {...e} />
                    </div>
                })
            }
        </div>
    );
}

// Set default props
AppContent.defaultProps = {
    name: "Content Name",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    description: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>",
};

export default withRouter(PageContent);
