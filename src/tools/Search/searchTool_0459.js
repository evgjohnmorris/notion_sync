/**
 * Generated Tool: searchTool_0459
 * Domain: Search
 * ID: 0459
 */
exports.searchTool_0459 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0459:', error);
    throw error;
  }
};
