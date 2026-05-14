/**
 * Generated Tool: pagesTool_0374
 * Domain: Pages
 * ID: 0374
 */
exports.pagesTool_0374 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0374:', error);
    throw error;
  }
};
