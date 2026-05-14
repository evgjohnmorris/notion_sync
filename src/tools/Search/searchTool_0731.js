/**
 * Generated Tool: searchTool_0731
 * Domain: Search
 * ID: 0731
 */
exports.searchTool_0731 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0731:', error);
    throw error;
  }
};
