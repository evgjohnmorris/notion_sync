/**
 * Generated Tool: searchTool_0177
 * Domain: Search
 * ID: 0177
 */
exports.searchTool_0177 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0177:', error);
    throw error;
  }
};
