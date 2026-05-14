/**
 * Generated Tool: searchTool_0335
 * Domain: Search
 * ID: 0335
 */
exports.searchTool_0335 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0335:', error);
    throw error;
  }
};
