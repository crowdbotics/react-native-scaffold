import * as actions from "./constants";

const initialState = {
  // user: {
  //    accessToken
  //   idToken:
  //     "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijg0ZjI5NGM0NTE2MDA4OGQwNzlmZWU2ODEzOGY1MjEzM2QzZTIyOGMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIxNTExMjE4MTg1MTUtOGdrZXI4b2wyY2J2NjZtMGRjbGZzZWZscHNyZDQ1amMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiIxNTExMjE4MTg1MTUtOGdrZXI4b2wyY2J2NjZtMGRjbGZzZWZscHNyZDQ1amMuYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDc5OTk4OTU1OTMyODAxNzIwMjMiLCJlbWFpbCI6ImluZGkzLnJva0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiYXRfaGFzaCI6Ik9seXNuN01JN1N4ZzFvdzU5bXhCMVEiLCJuYW1lIjoiRW1tYW51ZWwgT3JvemNvIiwicGljdHVyZSI6Imh0dHBzOi8vbGg0Lmdvb2dsZXVzZXJjb250ZW50LmNvbS8tLXlHZ25VemlPNVkvQUFBQUFBQUFBQUkvQUFBQUFBQUFMdTQvbFVSZE9ucDdsOUkvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6IkVtbWFudWVsIiwiZmFtaWx5X25hbWUiOiJPcm96Y28iLCJsb2NhbGUiOiJlbiIsImlhdCI6MTU2NDA2MzIwNywiZXhwIjoxNTY0MDY2ODA3fQ.UnKKWhqddFjSJQtGhD1Yg7BxgJmFGwR9vf4r0r3KdwKttN7gM7AjNnWYBvh9105U1ttbE4dtFmjuAdjR08Gw9TAJLY2TNFOiyIoz-3wFZABfNwywPPqg4w0C7fThCm9O58wVT9UFBvoOAmrjdDoXomnyfr6hZ7T4ArdPPx4iJ95RWQGrgSBIC9MvcOYdAqfJE1nV5QNGtAPG8IgNHV4OYusG4yNuTuHaZ4yXH6nmYYVsW75qxeMsJUvZ1ZSY0wPlhoAQMrwr8mzllynz75kDbR8iZlMHpYVbKl0yt3R2XZdjfZWR2b2uPsBcGUqyTQ24EOAKjoB6WUQzgbRaQ10nRg",
  //   serverAuthCode: null,
  //   user: {
  //     givenName: "Emmanuel",
  //     email: "indi3.rok@gmail.com",
  //     id: "107999895593280172023",
  //     familyName: "Orozco",
  //     photo:
  //       "https://lh4.googleusercontent.com/--yGgnUziO5Y/AAAAAAAAAAI/AAAAAAAALu4/lURdOnp7l9I/s120/photo.jpg",
  //     name: "Emmanuel Orozco"
  //   },
  //   scopes: [
  //     "https://www.googleapis.com/auth/calendar",
  //     "https://www.googleapis.com/auth/calendar.events.readonly",
  //     "https://www.googleapis.com/auth/userinfo.email",
  //     "https://www.googleapis.com/auth/calendar.readonly",
  //     "https://www.googleapis.com/auth/calendar.events",
  //     "https://www.googleapis.com/auth/userinfo.profile",
  //     "openid"
  //   ]
  // },
  user: null,
  errors: { CalendarLogin: null },
  events: {}
};

export const CalendarReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CALENDAR_GOOGLE_LOGIN_SUCCESS:
      return { ...state, user: action.user };
    case actions.CALENDAR_GOOGLE_LOGIN_ERROR:
      return { ...state, errors: { CalendarLogin: action.error } };
    case actions.CALENDAR_DATA_SUCCESS:
      return { ...state, events: action.events };
    case actions.CALENDAR_DATA_ERROR:
      return { ...state, errors: { CalendarLogin: action.error } };
    default:
      return state;
  }
};
