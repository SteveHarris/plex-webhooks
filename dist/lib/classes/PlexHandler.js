"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlexHandler = void 0;
/** class container and wrapper for the handler methods to be invoked by the plex controller */
class PlexHandler {
    /**
     * Constructor fro the wrappper/container for user defined plex handlers.
     * @param handler the PlexHandlerFunction to be invoked
     */
    constructor(handler) {
        this.handler = handler;
    }
    /**
     * Execute the PlexHandlerFunction.
     * @param payload
     * @param files
     */
    async execute(payload, files) {
        return await this.handler(payload, files);
    }
}
exports.PlexHandler = PlexHandler;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGxleEhhbmRsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9saWIvY2xhc3Nlcy9QbGV4SGFuZGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFPQSwrRkFBK0Y7QUFDL0YsTUFBYSxXQUFXO0lBR3RCOzs7T0FHRztJQUNILFlBQW1CLE9BQTRCO1FBQzdDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksS0FBSyxDQUFDLE9BQU8sQ0FBQyxPQUFZLEVBQUUsS0FBa0I7UUFDbkQsT0FBTyxNQUFNLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQzVDLENBQUM7Q0FFRjtBQXBCRCxrQ0FvQkMiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKiB0eXBlIGRlZiBmb3IgdGhlIHJlcS5maWxlcyBnZW5lcmF0ZWQgYnkgbXVsdGVyIHBhcnNpbmcgKi9cbmV4cG9ydCB0eXBlIE11bHRlckZpbGVzID0geyBbZmlsZW5hbWU6IHN0cmluZ106IEV4cHJlc3MuTXVsdGVyLkZpbGVbXSB9IHwgRXhwcmVzcy5NdWx0ZXIuRmlsZVtdO1xuXG4vKiogZnVuY3Rpb24gdHlwZSBmb3IgdGhlIGhhbmRsZXIgbWV0aG9kcyB0byBiZSBpbnZva2VkIGJ5IHRoZSBwbGV4IGNvbnRyb2xsZXIgKi9cbmV4cG9ydCB0eXBlIFBsZXhIYW5kbGVyRnVuY3Rpb24gPSAocGF5bG9hZDogYW55LCBmaWxlczogTXVsdGVyRmlsZXMpID0+IFByb21pc2U8dm9pZD47XG5cbi8qKiBjbGFzcyBjb250YWluZXIgYW5kIHdyYXBwZXIgZm9yIHRoZSBoYW5kbGVyIG1ldGhvZHMgdG8gYmUgaW52b2tlZCBieSB0aGUgcGxleCBjb250cm9sbGVyICovXG5leHBvcnQgY2xhc3MgUGxleEhhbmRsZXIge1xuICBoYW5kbGVyOiBQbGV4SGFuZGxlckZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RvciBmcm8gdGhlIHdyYXBwcGVyL2NvbnRhaW5lciBmb3IgdXNlciBkZWZpbmVkIHBsZXggaGFuZGxlcnMuXG4gICAqIEBwYXJhbSBoYW5kbGVyIHRoZSBQbGV4SGFuZGxlckZ1bmN0aW9uIHRvIGJlIGludm9rZWRcbiAgICovXG4gIHB1YmxpYyBjb25zdHJ1Y3RvcihoYW5kbGVyOiBQbGV4SGFuZGxlckZ1bmN0aW9uKSB7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeGVjdXRlIHRoZSBQbGV4SGFuZGxlckZ1bmN0aW9uLlxuICAgKiBAcGFyYW0gcGF5bG9hZCBcbiAgICogQHBhcmFtIGZpbGVzIFxuICAgKi9cbiAgcHVibGljIGFzeW5jIGV4ZWN1dGUocGF5bG9hZDogYW55LCBmaWxlczogTXVsdGVyRmlsZXMpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5oYW5kbGVyKHBheWxvYWQsIGZpbGVzKTtcbiAgfVxuXG59XG4iXX0=