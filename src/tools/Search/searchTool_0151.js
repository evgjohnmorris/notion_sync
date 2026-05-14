/**
 * Generated Tool: searchTool_0151
 * Domain: Search
 * ID: 0151
 */
exports.searchTool_0151 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0151:', error);
    throw error;
  }
};
