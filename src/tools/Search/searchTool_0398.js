/**
 * Generated Tool: searchTool_0398
 * Domain: Search
 * ID: 0398
 */
exports.searchTool_0398 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0398:', error);
    throw error;
  }
};
