/**
 * Generated Tool: searchTool_0023
 * Domain: Search
 * ID: 0023
 */
exports.searchTool_0023 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0023:', error);
    throw error;
  }
};
