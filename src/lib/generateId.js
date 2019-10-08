const generateId = n => `#${n.replace(/[^0-9a-z]/gi, '').toLowerCase()}`;
export default generateId;