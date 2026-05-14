/**
 * Generated Tool: searchTool_0972
 * Domain: Search
 * ID: 0972
 */
exports.searchTool_0972 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0972:', error);
    throw error;
  }
};
