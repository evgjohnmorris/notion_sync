/**
 * Generated Tool: searchTool_0540
 * Domain: Search
 * ID: 0540
 */
exports.searchTool_0540 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0540:', error);
    throw error;
  }
};
