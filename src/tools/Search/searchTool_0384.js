/**
 * Generated Tool: searchTool_0384
 * Domain: Search
 * ID: 0384
 */
exports.searchTool_0384 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0384:', error);
    throw error;
  }
};
