/**
 * Generated Tool: searchTool_0760
 * Domain: Search
 * ID: 0760
 */
exports.searchTool_0760 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0760:', error);
    throw error;
  }
};
