import * as Yup from 'yup';
import { get } from 'lodash';

export const Schema = Yup.object().shape({
  path: Yup.string(),
  type: Yup.string().required('Required'),
  url: Yup.string(),
  label: Yup.string().required('Required'),
  actionClass: Yup.string(),
  showDefault: Yup.boolean(),
});

// export const getValuesFrom = (data) => {
//   const isHtmlElement = !!element.nodeType;
//   if (isHtmlElement) {
//     return {}
//   }
// }

function getText(node) {
  if (node.nodeType == 3) return node.data // text node
  if (!node.childNodes) return ''
  let s = ''
  for (let i = 0; i < node.childNodes.length; i++) {
    s += getText(node.childNodes[i])
  }
  return s
}

export const getInitialValues = (element) => {
  // const isHtmlElement = !!element.nodeType;
  const path = window.location.pathname;
  const type = element.type || '';
  const actionClass = element.className || '';
  const label = getText(element);
  const url = element.href || '';
  return {
    path: path,
    type: type,
    url,
    label,
    actionClass: actionClass,
    showDefault: get(element, 'showDefault', false),
    status: element.status || 'created',
  }
};
