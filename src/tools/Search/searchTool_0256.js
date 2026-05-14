/**
 * Generated Tool: searchTool_0256
 * Domain: Search
 * ID: 0256
 */
exports.searchTool_0256 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0256:', error);
    throw error;
  }
};
