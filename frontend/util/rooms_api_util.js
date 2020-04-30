import { $CombinedState } from "redux"

export const fetchRoom = id => {
  return $.ajax({
    url: `/api/rooms/${id}`,
    method: 'GET'
  })
}