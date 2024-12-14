import { ExternalRouteRef } from './ExternalRouteRef';
import { RouteRef } from './RouteRef';

// Utility function to bind an ExternalRouteRef to a RouteRef
function bindExternalRouteRef(externalRouteRef: ExternalRouteRef, routeRef: RouteRef) {
  externalRouteRef.addRouteRef(routeRef);
}

export { bindExternalRouteRef };