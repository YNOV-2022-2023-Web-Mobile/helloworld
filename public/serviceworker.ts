import { precacheAndRoute } from 'workbox-precaching';
import {registerRoute, setDefaultHandler} from 'workbox-routing';
import {NetworkOnly} from 'workbox-strategies';
import {offlineFallback} from 'workbox-recipes';


declare const self: ServiceWorkerGlobalScope;
precacheAndRoute(self.__WB_MANIFEST);
//registerRoute(()=>true, new NetworkOnly());
setDefaultHandler(new NetworkOnly());
offlineFallback({pageFallback: 'offline.html'});
