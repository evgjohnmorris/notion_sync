/**
 * Generated Tool: searchTool_0186
 * Domain: Search
 * ID: 0186
 */
exports.searchTool_0186 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0186:', error);
    throw error;
  }
};
