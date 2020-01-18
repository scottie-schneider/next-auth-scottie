import React from 'react';
import { useRouter } from 'next/router';

import SessionContext from '../context/session';

const withAuthorization = (sessionContext) => {
  const router = useRouter();
  const session = React.useContext(SessionContext);

  React.useEffect(() => {
    if (!session.isSessionChecked) {
      return;
    }

    if (!condition(session)) {
      router.push('/error', ROUTES.SIGN_IN);
    }
  }, [session]);

  return condition(session) ? <Component {...props} /> : null;
};

export default withAuthorization;
