/**
 * Generated Tool: searchTool_0325
 * Domain: Search
 * ID: 0325
 */
exports.searchTool_0325 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0325:', error);
    throw error;
  }
};
