/**
 * Generated Tool: searchTool_0092
 * Domain: Search
 * ID: 0092
 */
exports.searchTool_0092 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0092:', error);
    throw error;
  }
};
