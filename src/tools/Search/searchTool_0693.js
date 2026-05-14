/**
 * Generated Tool: searchTool_0693
 * Domain: Search
 * ID: 0693
 */
exports.searchTool_0693 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0693:', error);
    throw error;
  }
};
