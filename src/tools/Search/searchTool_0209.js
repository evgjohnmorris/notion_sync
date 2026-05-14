/**
 * Generated Tool: searchTool_0209
 * Domain: Search
 * ID: 0209
 */
exports.searchTool_0209 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0209:', error);
    throw error;
  }
};
