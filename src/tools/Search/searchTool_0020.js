/**
 * Generated Tool: searchTool_0020
 * Domain: Search
 * ID: 0020
 */
exports.searchTool_0020 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0020:', error);
    throw error;
  }
};
