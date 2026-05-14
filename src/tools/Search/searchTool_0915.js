/**
 * Generated Tool: searchTool_0915
 * Domain: Search
 * ID: 0915
 */
exports.searchTool_0915 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0915:', error);
    throw error;
  }
};
