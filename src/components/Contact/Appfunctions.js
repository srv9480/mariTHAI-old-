export function addNotification(parameters, time = 7, position = 'tr') {
  const options = parameters;
  const notification = parameters.notifisystem.current;
  notification && notification.addNotification({
    message: <>
      <div>
        <i className={options.icon} />
        <span className="graytext">{options.msg}</span>
        {options && options.button}
      </div>
      <i className="fal fa-times" />
    </>,
    level: 'warning',
    position,
    autoDismiss: time,
  });
}
