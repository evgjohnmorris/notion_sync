/**
 * Generated Tool: searchTool_0702
 * Domain: Search
 * ID: 0702
 */
exports.searchTool_0702 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0702:', error);
    throw error;
  }
};
