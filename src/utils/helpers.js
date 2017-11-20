import React from 'react'
import { AsyncStorage } from 'react-native'
import { Notifications, Permissions, Constants } from 'expo'
import NOTIFICATIONS from '../const/notifications'

export function timeToString (time = Date.now()) {
  const date = new Date(time)
  const todayUTC = new Date(
    Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  )
  return todayUTC.toISOString().split('T')[0]
}

export function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}

export function clearLocalNotification() {
  return AsyncStorage.removeItem(NOTIFICATIONS.KEY)
    .then(Notifications.cancelAllScheduledNotificationsAsync)
}

export function createNotification() {
  return {
    title: NOTIFICATIONS.TITLE,
    body: NOTIFICATIONS.BODY,
    ios: {
      sound: true
    }
  }
}

export function setLocalNotification() {
  AsyncStorage.getItem(NOTIFICATIONS.KEY)
    .then(JSON.parse)
    .then((data) => {
      Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({ status }) => {
          if (status === 'granted') {
            Notifications.cancelAllScheduledNotificationsAsync()

            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate() + 1)
            tomorrow.setHours(NOTIFICATIONS.HOUR)
            tomorrow.setMinutes(NOTIFICATIONS.MINUTES)

            Notifications.scheduleLocalNotificationAsync(
              createNotification(),
              {
                time: tomorrow,
                repeat: NOTIFICATIONS.REPEAT,
              }
            )

            AsyncStorage.setItem(NOTIFICATIONS.KEY, JSON.stringify(true))
          }
        })
    })
}
