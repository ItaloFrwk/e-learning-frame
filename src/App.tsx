import { useEffect } from 'react';
import { AuthProvider } from './contexts/Authentication';
import PrivateRoute from './routes/PrivateRoute';
import './App.less';
import GlobalStyle from './styles/globalStyles';
import { getVideos } from './api/service/requests/models/videos/getVideos';
import { updateVideo } from './api/service/requests/models/videos/updateVideo';
import { getPlatform } from './api/service/requests/models/Platform/getPlatform';
import { createPlatform } from './api/service/requests/models/Platform/createPlatform';
import { deleteVideo } from './api/service/requests/models/Platform/deletePlatform';
import { uploadAsset } from './api/service/requests/models/assets/uploadAsset';
import { generateFormDataFromFile } from './api/service/requests/helpers/generates';
import { getCategories } from './api/service/requests/models/Categories/getCategories';

const App = () => {

    //   console.log(await getVideos({
    //     paramsQuery: {
    //       id: true,
    //       title: true,
    //       description: true,
    //     },
    //     whereConditions: {

    //     }
    //   }));

    //   console.log(await updateVideo({
    //     data: {
    //         title: "Titulo teste via cod"
    //     },
    //     paramsQuery: {
    //         id: true,
    //         title: true,
    //     },
    //     whereConditions: {
    //         id: "cl1ogu34k4e2e0blyxu3srz0s"
    //     }
    //   }));

    // console.log(await getPlatform({
    //     paramsQuery: {
    //         id: true,
    //         title: true,
    //     }
    // }));

    // console.log(await createPlatform({
    //     data: {
    //         title: "Criado via cod"
    //     },
    //     paramsQuery: {
    //         id: true
    //     }
    // }));

    // console.log(await deleteVideo({
    //     paramsQuery: {
    //         id: true,
    //     },
    //     whereConditions: {
    //         id: "cl1z74ck53eib0ckjcx2l3j0n"
    //     }
    // }))
    
    // const t = new FormData();
    // t.append("fileUpload", 'new File');
    // console.log(await uploadAsset(t));

    // console.log(await getCategories({
    //     paramsQuery: {
    //         id: true
    //     }
    // }));

  return (
    <AuthProvider>
      <GlobalStyle />
      <PrivateRoute />
    </AuthProvider>
  );
};

export default App;
