/**
 * Generated Tool: searchTool_0017
 * Domain: Search
 * ID: 0017
 */
exports.searchTool_0017 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0017:', error);
    throw error;
  }
};
