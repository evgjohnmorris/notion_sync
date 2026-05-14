/**
 * Generated Tool: searchTool_0885
 * Domain: Search
 * ID: 0885
 */
exports.searchTool_0885 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0885:', error);
    throw error;
  }
};
