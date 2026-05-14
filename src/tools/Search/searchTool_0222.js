/**
 * Generated Tool: searchTool_0222
 * Domain: Search
 * ID: 0222
 */
exports.searchTool_0222 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0222:', error);
    throw error;
  }
};
