/**
 * Generated Tool: searchTool_0430
 * Domain: Search
 * ID: 0430
 */
exports.searchTool_0430 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0430:', error);
    throw error;
  }
};
