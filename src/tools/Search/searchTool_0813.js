/**
 * Generated Tool: searchTool_0813
 * Domain: Search
 * ID: 0813
 */
exports.searchTool_0813 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0813:', error);
    throw error;
  }
};
