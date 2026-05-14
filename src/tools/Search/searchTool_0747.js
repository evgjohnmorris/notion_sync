/**
 * Generated Tool: searchTool_0747
 * Domain: Search
 * ID: 0747
 */
exports.searchTool_0747 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0747:', error);
    throw error;
  }
};
