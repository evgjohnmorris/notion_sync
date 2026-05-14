/**
 * Generated Tool: searchTool_0240
 * Domain: Search
 * ID: 0240
 */
exports.searchTool_0240 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0240:', error);
    throw error;
  }
};
