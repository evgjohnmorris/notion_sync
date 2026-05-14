/**
 * Generated Tool: pagesTool_0808
 * Domain: Pages
 * ID: 0808
 */
exports.pagesTool_0808 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0808:', error);
    throw error;
  }
};
