

export default function* (action) {
    console.log('App Saga - Action', action);
    yield pull()
}