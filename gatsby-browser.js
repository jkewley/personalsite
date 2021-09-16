export const onServiceWorkerUpdateReady = () => {
  // eslint-disable-next-line no-alert

  // just reload when update available. No need to prompt
  // const answer = window.confirm(
  //   'This application has been updated. Reload to display the latest version?'
  // );
  // if (answer === true) {
    window.location.reload();
  // }
};
